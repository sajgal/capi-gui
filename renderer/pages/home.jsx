import React from 'react';
import Head from 'next/head';
import { Layout, Card, Icon } from 'antd';
import Link from 'next/link';

import PageContent from '../components/PageContent';

export default () => (
  <PageContent header="Welcome" hideFooter={true} hideContentWrapper={true}>
    <Head>
      <title>CAPI Desktop - Home</title>
    </Head>

    <Card size="small" title={<div><Icon type="fire" theme="twoTone" twoToneColor="#eb2f96" /> Shows</div>} style={{ width: 300 }}>
      <div><Link href="/shows"><a><Icon type="unordered-list" /> Shows List</a></Link></div>
      <div><Link href="/shows"><a><Icon type="plus" /> Create new</a></Link></div>
      <div><Link href="/shows"><a><Icon type="history" /> History</a></Link></div>
    </Card>
  </PageContent >
);
