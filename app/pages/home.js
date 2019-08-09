import { Card, Icon } from 'antd';
import { Helmet } from "react-helmet";
import { inject } from "mobx-react"
import React, { Component } from 'react';
import styled from 'styled-components';

import DashboardCard from '../components/DashboardCard';
import PageContent from '../components/PageContent';

const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 15px;
`;

const EntityCardLayout = styled.span`
  display: grid;
  grid-gap: 15px;
  grid-auto-flow: column;

  @media (max-width: 700px) {
    grid-auto-flow: row;
  }
`;

class Home extends Component {
  render() {
    return (
      <PageContent header="Welcome" subtitle="What would you like to do?" hideFooter={true} hideContentWrapper={true}>
        <Helmet>
          <title>CAPI Desktop - Home</title>
        </Helmet>

        <Grid>
          <Card size="small" title={<h4><Icon type="fire" />Shows</h4>}>
            <EntityCardLayout>
              <DashboardCard
                setHomeHoverArea={this.props.setHomeHoverArea}
                cardId={'show-list'}
                link={'/shows'}
                label={'Shows List'}
                icon={'read'}
                homeHoverArea={this.props.homeHoverArea} />

              <DashboardCard
                setHomeHoverArea={this.props.setHomeHoverArea}
                cardId={'show-create'}
                link={'/shows/create'}
                label={'Create New'}
                icon={'folder-add'}
                homeHoverArea={this.props.homeHoverArea} />

              <DashboardCard
                setHomeHoverArea={this.props.setHomeHoverArea}
                cardId={'show-history'}
                link={'/shows/history'}
                label={'Favourites'}
                icon={'heart'}
                homeHoverArea={this.props.homeHoverArea} />
            </EntityCardLayout>
          </Card>
        </Grid>
      </PageContent >
    );
  }
}

export default inject(stores => {
  return ({
    uiStore: stores.uiStore,
    setHomeHoverArea: stores.uiStore.setHomeHoverArea,
    homeHoverArea: stores.uiStore.homeHoverArea,
  })
})(Home);
