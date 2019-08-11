import { Form, Input, Checkbox, DatePicker, Button, Icon } from 'antd';
import { inject } from "mobx-react"
import { Helmet } from "react-helmet";
import React, { Component } from 'react';

import PageContent from '../../components/PageContent';

class Create extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const responsePromise = this.props.createShow(this.props.endpoint, this.props.token, values);
        responsePromise
          .then(response => {
            console.log(response);

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

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <PageContent header="Show > Create">
        <Helmet>
          <title>CAPI Desktop - Create Show</title>
        </Helmet>

        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Title">
            {getFieldDecorator('title')(
              <Input />
            )}
          </Form.Item>
          {getFieldDecorator('draft')(
            <Checkbox>Draft</Checkbox>
          )}
          {/* <Form.Item label="Availability">
            {getFieldDecorator('availability')(
              <DatePicker.RangePicker />
            )}
          </Form.Item> */}
          {/* <Form.Item label="DVB Triplet">
            {getFieldDecorator('dvb_triplet')(
              <Input />
            )}
          </Form.Item> */}
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
      </PageContent >
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
})(Form.create({ name: 'show_create' })(Create));