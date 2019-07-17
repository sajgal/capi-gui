import React, { Component } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, DatePicker, Button, Icon } from 'antd';

import PageContent from '../../components/PageContent';

class Create extends Component {
  static getInitialProps({ mobxStore }) {
    console.log({ mobxStore });


    return {
      createShow: mobxStore.showStore.createShow,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.createShow(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <PageContent header="Show > Create">
        <Head>
          <title>CAPI Desktop - Create Show</title>
        </Head>

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

export default Form.create({ name: 'show_create' })(Create);