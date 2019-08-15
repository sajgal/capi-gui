import { Form, Input, Checkbox, Button } from 'antd';
import { inject } from "mobx-react"
import { withRouter } from "react-router-dom";
import React from 'react';

const ShowForm = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        const responsePromise = props.submitAction(props.endpoint, props.token, values);
        responsePromise
          .then(response => {
            // Set the response to UI Store
            props.setLastResponse(
              response.status,
              response.statusText,
              response.data,
              'show'
            );

            // Redirect to response page
            props.history.push("/last-response");
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
      {getFieldDecorator('draft')(
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
};

export default inject(stores => {
  return ({
    createShow: stores.showStore.createShow,
    token: stores.settingsStore.settings['settings-api-token'],
    endpoint: stores.settingsStore.settings['settings-api-endpoint'],
    setLastResponse: stores.uiStore.setLastResponse,
  })
})(Form.create({ name: 'show-form' })(withRouter(ShowForm)));