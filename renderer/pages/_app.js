import App, { Container } from 'next/app';
import Page from '../components/Page';
import { Provider } from 'mobx-react';

import initializeStore from '../stores/stores';

import "antd/dist/antd.css";

class MyApp extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider {...this.mobxStore}>
        <Container>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Container>
      </Provider>
    )
  }
}

export default MyApp;