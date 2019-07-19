import React, { Component } from 'react';
import Head from 'next/head';
import { Card, Icon, Avatar, Divider } from 'antd';
import Link from 'next/link';
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
        <Head>
          <title>CAPI Desktop - Home</title>
        </Head>

        <Grid>
          <Card size="small" title={<h4><Icon type="fire" /> Shows</h4>}>
            <EntityCardLayout>
              <CardLink onMouseEnter={() => console.log('onMouseOver')} onMouseLeave={() => console.log('onMouseLeave')}>
                <Avatar icon="read" size="large" />
                <Divider />
                <Link href="/shows"><a>Shows List</a></Link>
              </CardLink>
              <CardLink>
                <Avatar icon="folder-add" size="large" />
                <Divider />
                <Link href="/shows/create"><a>Create New</a></Link>
              </CardLink>
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

export default Home;