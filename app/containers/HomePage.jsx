import { Card, Icon, Avatar, Divider } from 'antd';
import { Helmet } from "react-helmet";
import { inject } from "mobx-react"
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';

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
`;

const CardLink = styled(Card)`
  display: grid;
  align-items: center;
  text-align: center;
  cursor: pointer;

  a {
    color: initial;
  }

  &:hover {
    color: red;
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
          <Card size="small" title={<h4><Icon type="fire" /> Shows, Hover area: {this.props.homeHoverArea ? this.props.homeHoverArea : "-"}</h4>}>
            <EntityCardLayout>
              <CardLink onMouseEnter={() => this.props.setHomeHoverArea('show-list')} onMouseLeave={() => this.props.setHomeHoverArea(null)}>
                <Avatar icon="read" size="large" />
                <Divider />
                <Link to="/shows">Shows List</Link>
              </CardLink>
              <CardLink onMouseEnter={() => this.props.setHomeHoverArea('show-create')} onMouseLeave={() => this.props.setHomeHoverArea(null)}>
                <Avatar icon="folder-add" size="large" />
                <Divider />
                <Link to="/shows/create">Create New</Link>
              </CardLink>
              <CardLink onMouseEnter={() => this.props.setHomeHoverArea('show-history')} onMouseLeave={() => this.props.setHomeHoverArea(null)}>
                <Avatar icon="heart" size="large" />
                <Divider />
                <Link to="/shows/history">Favourites</Link>
              </CardLink>
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
