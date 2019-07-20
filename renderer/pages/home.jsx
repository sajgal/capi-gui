import React, { Component } from 'react';
import Head from 'next/head';
import { Card, Icon, Avatar, Divider } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { observer } from "mobx-react"

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
  static getInitialProps({ mobxStore }) {
    return {
      homeHoverArea: mobxStore.uiStore.homeHoverArea,
      setHomeHoverArea: mobxStore.uiStore.setHomeHoverArea,
    };
  }

  render() {
    console.log(this.props.setHomeHoverArea);

    return (
      <PageContent header="Welcome" subtitle="What would you like to do?" hideFooter={true} hideContentWrapper={true}>
        <Head>
          <title>CAPI Desktop - Home</title>
        </Head>

        <Grid>
          <Card size="small" title={<h4><Icon type="fire" /> Shows, Hover area: {this.props.homeHoverArea ? this.props.homeHoverArea : "-"}</h4>}>
            <EntityCardLayout>
              {/* <CardLink onMouseEnter={() => this.props.setHomeHoverArea('show-list')} onMouseLeave={() => this.props.setHomeHoverArea(null)}> */}
              <CardLink>
                <Avatar icon="read" size="large" />
                <Divider />
                <Link href="/shows"><a>Shows List</a></Link>
              </CardLink>
              {/* <CardLink onMouseEnter={() => this.props.setHomeHoverArea('show-create')} onMouseLeave={() => this.props.setHomeHoverArea(null)}> */}
              <CardLink>
                <Avatar icon="folder-add" size="large" />
                <Divider />
                <Link href="/shows/create"><a>Create New</a></Link>
              </CardLink>
              {/* <CardLink onMouseEnter={() => this.props.setHomeHoverArea('show-history')} onMouseLeave={() => this.props.setHomeHoverArea(null)}> */}
              <CardLink>
                <Avatar icon="heart" size="large" />
                <Divider />
                <Link href="/shows/history"><a>Favourites</a></Link>
              </CardLink>
            </EntityCardLayout>
          </Card>
        </Grid>
      </PageContent >
    );
  }
}

export default observer(Home);