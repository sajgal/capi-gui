import React from 'react';
import Head from 'next/head';
import { Form, Input } from 'antd';
import PageContent from '../components/PageContent';

const settings = () => {
  return (
    <PageContent header="Settings">
      <Head>
        <title>CAPI Desktop - Settings</title>
      </Head>

      <Form>
        <Form.Item label="API Token">
          <Input />
        </Form.Item>
      </Form>
    </PageContent>
  );
};

export default settings;