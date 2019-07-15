import React from 'react';
import Head from 'next/head';
import { Icon, Table } from 'antd';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import PageContent from '../../components/PageContent';
import { SHOW_TABLE_SCHEMA } from "../../schema/showTable";

const StyledTable = styled(Table)`
  table {
    background: white;
  }
`;

class Shows extends React.Component {
  static getInitialProps({ mobxStore }) {
    const showStore = mobxStore.showStore;

    if (showStore.shows.length === 0) {
      showStore.loadShows();
    }

    return {
      showStore: showStore,
    };
  }

  render() {
    return (
      <PageContent header="Shows" hideFooter={true} hideContentWrapper={true}>
        <Head>
          <title>CAPI Desktop - Shows</title>
        </Head>

        {
          this.props.showStore.isLoading ?
            <Icon type="loading" /> :
            <StyledTable rowKey="id" columns={SHOW_TABLE_SCHEMA} dataSource={this.props.showStore.shows} size="middle" bordered={true} />
        }
      </PageContent>
    );
  }
}

export default observer(Shows);
