import React from 'react';
import { Helmet } from "react-helmet";
import { Icon, Table } from 'antd';
import { inject } from "mobx-react";
import styled from 'styled-components';

import PageContent from '../../components/PageContent';
import { SHOW_TABLE_SCHEMA } from "../../schema/showTable";

const StyledTable = styled(Table)`
  table {
    background: white;
  }
`;

class Shows extends React.Component {
  componentDidMount() {
    this.props.loadShows();
  }

  render() {
    return (
      <PageContent header="Shows" hideFooter={true} hideContentWrapper={true}>
        <Helmet>
          <title>CAPI Desktop - Shows</title>
        </Helmet>

        {
          this.props.isLoading ?
            <Icon type="loading" /> :
            <StyledTable rowKey="id" columns={SHOW_TABLE_SCHEMA} dataSource={this.props.shows} size="middle" bordered={true} />
        }
      </PageContent>
    );
  }
}

export default inject(stores => {
  return ({
    loadShows: stores.showStore.loadShows,
    shows: stores.showStore.shows,
    isLoading: stores.showStore.isLoading,
  })
})(Shows);
