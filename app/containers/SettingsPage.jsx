import React from 'react';
import { Helmet } from "react-helmet";
import { Form, Input } from 'antd';
import PageContent from '../components/PageContent';

const settings = () => {
  return (
    <PageContent header="Settings">
      <Helmet>
        <title>CAPI Desktop - Settings</title>
      </Helmet>

      <Form>
        <Form.Item label="API Token">
          <Input />
        </Form.Item>
      </Form>
    </PageContent>
  );
};

export default settings;