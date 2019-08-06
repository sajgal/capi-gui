import { Form, Input } from 'antd';
import { Helmet } from "react-helmet";
import { inject } from 'mobx-react';
import React from 'react';

import PageContent from '../components/PageContent';

class SettingsPage extends React.Component {
  componentDidMount() {
    console.log('mounted!', this.props.getToken());
  }

  render() {
    return (
      <PageContent header="Settings">
        <Helmet>
          <title>CAPI Desktop - Settings</title>
        </Helmet>

        <Form>
          <Form.Item label="API Token">
            <Input onChange={(e) => this.props.setToken(e.target.value)} />
          </Form.Item>
        </Form>
      </PageContent>
    );
  }
}

export default inject(stores => {
  return ({
    setToken: stores.settingsStore.setToken,
    getToken: stores.settingsStore.setToken,
  })
})(SettingsPage);