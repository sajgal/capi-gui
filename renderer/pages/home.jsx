import React from 'react';
import Head from 'next/head';
import { Card, Icon } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

import PageContent from '../components/PageContent';

const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 15px;
`;

export default () => (
  <PageContent header="Welcome" subtitle="What would you like to do?" hideFooter={true} hideContentWrapper={true}>
    <Head>
      <title>CAPI Desktop - Home</title>
    </Head>

    <Grid>
      <Card size="small" title={<h4><Icon type="fire" /> Shows</h4>} style={{ width: 300 }}>
        <div><Link href="/shows"><a><Icon type="unordered-list" /> Shows List</a></Link></div>
        <div><Link href="/shows/create"><a><Icon type="plus" /> Create new</a></Link></div>
        <div><Link href="/shows/history"><a><Icon type="history" /> History</a></Link></div>
      </Card>
    </Grid>
  </PageContent >
);