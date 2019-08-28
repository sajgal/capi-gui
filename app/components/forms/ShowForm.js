import { Form, Input, Checkbox, Button, DatePicker, Select, Row, Col, Icon, notification } from 'antd';
import { inject } from "mobx-react"
import { withRouter } from "react-router-dom";
import moment from 'moment';
import React, { Component } from 'react';

class ShowForm extends Component {
  componentDidMount() {
    const { setFieldsValue } = this.props.form;

    setFieldsValue(this.filterFormValues(this.props.showValues));
  }

  deleteShow() {
    const { deleteShow, token, endpoint, removeFromFavourites, stopLoading, showValues } = this.props;

    deleteShow(endpoint, token, showValues.id)
      .then(
        () => {
          removeFromFavourites("show", showValues.id);

          notification["success"]({
            message: 'Success',
            description: `show ${showValues.id} deleted successfully.`,
          });

          this.props.history.push(`/`);
        }
      )
      .catch((response) => {
        notification["error"]({
          message: 'Something went wrong',
          description: `show ${showValues.id} not deleted.`,
        });
      })
      .finally(() => {
        stopLoading();
      });
  }

  /**
   * Filter only values that we're using in the form
   *
   * @param {object} showValues Object from the REST API
   */
  filterFormValues(showValues) {
    if (showValues == undefined) {
      return null;
    }

    const dateFields = [
      'available_from',
      'available_to',
      'updated_at',
    ]

    const usedFields = [
      'id',
      'title',
      'draft',
      'synopsis',
      'show_id',
      'tags',
      'categories',
      'on_demand',
      'on_air',
    ];

    const filteredValues = Object.keys(showValues)
      .filter(fieldName => usedFields.includes(fieldName) || dateFields.includes(fieldName))
      .reduce((prev, fieldName) => {
        if (dateFields.includes(fieldName)) {
          prev[fieldName] = moment(showValues[fieldName]);
        } else {
          prev[fieldName] = showValues[fieldName];
        }

        return prev;
      }, {});

    return filteredValues;
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const responsePromise = this.props.submitAction(this.props.endpoint, this.props.token, values);
          responsePromise
            .then(response => {
              // Update local entity title if it's saved as favourite
              this.props.updateFavourite(response.data.data.id, response.data.data.title);

              // Set the response to UI Store
              this.props.setLastResponse(
                response.status,
                response.statusText,
                response.data,
                'show'
              );

              // Redirect to response page
              this.props.history.push("/last-response");
            })
            .catch(error => {
              console.log(error);
            })
            .finally(() => {
              this.props.stopLoading();
            });
        }
      });
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Form.Item label="Title">
              {getFieldDecorator('title')(
                <Input />
              )}
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="ID">
              {getFieldDecorator('id')(
                <Input disabled={true} />
              )}
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Item label="Synopsis">
              {getFieldDecorator('synopsis')(
                <Input.TextArea />
              )}
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6}>
            <Form.Item label="Available From">
              {getFieldDecorator('available_from')(
                <DatePicker showTime placeholder="Select Time" />
              )}
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Available To">
              {getFieldDecorator('available_to')(
                <DatePicker showTime placeholder="Select Time" />
              )}
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Updated At">
              {getFieldDecorator('updated_at')(
                <DatePicker showTime placeholder="Select Time" disabled={true} />
              )}
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Please select" validateStatus={""} help={''}>
              {getFieldDecorator("draft", {
                valuePropName: "checked",
                initialValue: false
              })(
                <Checkbox>Draft</Checkbox>
              )}

              {getFieldDecorator("on_demand", {
                valuePropName: "checked",
                initialValue: false
              })(
                <Checkbox>On Demand</Checkbox>
              )}

              {getFieldDecorator("on_air", {
                valuePropName: "checked",
                initialValue: false
              })(
                <Checkbox>On Air</Checkbox>
              )}
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Show ID">
          {getFieldDecorator('show_id')(
            <Input />
          )}
        </Form.Item>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Form.Item label="Tags">
              {getFieldDecorator('tags')(
                <Select mode="tags" style={{ width: '100%' }} placeholder="Tags" />
              )}
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Categories">
              {getFieldDecorator('categories')(
                <Select mode="tags" style={{ width: '100%' }} placeholder="Categories" />
              )}
            </Form.Item>
          </Col>
        </Row>

        <Row type="flex" justify="space-between">
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {this.props.isLoading ?
                  <Icon type="loading" spin /> : this.props.submitButtonLabel || "Submit"
                }
              </Button>
            </Form.Item>
          </Col>

          <Col>
            {!this.props.hideDeleteButton &&
              <Form.Item>
                <Button type="danger" onClick={() => this.deleteShow()}>
                  {this.props.isLoading ?
                    <Icon type="loading" spin /> : "Delete"
                  }
                </Button>
              </Form.Item>
            }
          </Col>
        </Row>

      </Form>
    );
  }
}

export default inject(stores => {
  return ({
    createShow: stores.showStore.createShow,
    token: stores.settingsStore.settings['settings-api-token'],
    endpoint: stores.settingsStore.settings['settings-api-endpoint'],
    setLastResponse: stores.uiStore.setLastResponse,
    updateFavourite: stores.favouritesStore.update,
    stopLoading: stores.showStore.stopLoading,
    deleteShow: stores.showStore.deleteShow,
    removeFromFavourites: stores.favouritesStore.remove,
  })
})(Form.create({ name: 'show-form' })(withRouter(ShowForm)));