import React from 'react';
import Head from 'next/head';
import { Layout, PageHeader, Card, Icon } from 'antd';
import Link from 'next/link';

const { Content } = Layout;

export default () => (
  <>
    <Head>
      <title>CAPI Desktop - Home</title>
    </Head>

    <PageHeader
      title="Welcome"
      subTitle="What would you like to do?"
    />

    <Content style={{ margin: '24px 16px 0' }}>
      <div style={{ padding: 24, minHeight: 360 }}>
        <Card size="small" title={<div><Icon type="fire" theme="twoTone" twoToneColor="#eb2f96" /> Shows</div>} style={{ width: 300 }}>
          <div><Link href="/shows"><a><Icon type="unordered-list" /> Shows List</a></Link></div>
          <div><Link href="/shows"><a><Icon type="plus" /> Create new</a></Link></div>
          <div><Link href="/shows"><a><Icon type="history" /> History</a></Link></div>
        </Card>
      </div>
    </Content>
  </>
);
