import React from 'react';
import Head from 'next/head';
import { Icon, Button } from 'antd';
import { observer } from 'mobx-react';
import PageContent from '../components/PageContent';

class Shows extends React.Component {
  static getInitialProps({ mobxStore }) {
    return {
      showStore: mobxStore.showStore,
    };
  }

  render() {
    const shows = () => {
      if (this.props.showStore.shows.length === 0) {
        return <Button onClick={this.props.showStore.loadShows}>Load shows</Button>
      }

      const showArray = this.props.showStore.shows.map(show => {
        return <div key={show.id}>{show.title}</div>
      });

      return showArray;
    }

    return (
      <PageContent header="Shows">
        <Head>
          <title>CAPI Desktop - Shows</title>
        </Head>

        {this.props.showStore.isLoading ? <Icon type="loading" /> : shows()}
      </PageContent>
    );
  }
}

export default observer(Shows);
