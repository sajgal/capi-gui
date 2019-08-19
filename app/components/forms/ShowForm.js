import { Form, Input, Checkbox, Button } from 'antd';
import { inject } from "mobx-react"
import { withRouter } from "react-router-dom";
import React, { Component } from 'react';

class ShowForm extends Component {
  componentDidMount() {
    const { setFieldsValue } = this.props.form;

    setFieldsValue(this.filterFormValues(this.props.showValues));
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

    const usedFields = [
      'title',
      'draft',
      'synopsis',
      'show_id',
    ];

    const filteredValues = Object.keys(showValues)
      .filter(fieldName => usedFields.includes(fieldName))
      .reduce((prev, fieldName) => {
        prev[fieldName] = showValues[fieldName];
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
            });
        }
      });
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Item label="Title">
          {getFieldDecorator('title')(
            <Input />
          )}
        </Form.Item>
        {getFieldDecorator("draft", {
          valuePropName: "checked",
          initialValue: false
        })(
          <Checkbox>Draft</Checkbox>
        )}
        <Form.Item label="Synopsis">
          {getFieldDecorator('synopsis')(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="Show ID">
          {getFieldDecorator('show_id')(
            <Input />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
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
  })
})(Form.create({ name: 'show-form' })(withRouter(ShowForm)));