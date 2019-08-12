import { Form, Input } from 'antd';
import { Helmet } from "react-helmet";
import { inject } from 'mobx-react';
import React from 'react';

import PageContent from '../components/PageContent';

class SettingsPage extends React.Component {
  render() {
    const keyToLabel = {
      'settings-api-token': 'Bearer Token',
      'settings-api-endpoint': 'API Endpoint',
    }

    const keyInputType = {
      'settings-api-token': 'password',
    }

    const settingsInputs = this.props.settingsKeys.map(key => {
      return <Form.Item label={keyToLabel[key] || key} key={key}>
        <Input
          onChange={(e) => this.props.save(key, e.target.value)}
          defaultValue={this.props.settings[key]}
          type={keyInputType[key] || 'text'} />
      </Form.Item>
    });

    return (
      <PageContent header="Settings">
        <Helmet>
          <title>CAPI Desktop - Settings</title>
        </Helmet>

        <Form>
          {this.props.token &&
            settingsInputs}
        </Form>
      </PageContent>
    );
  }
}

export default inject(stores => {
  return ({
    save: stores.settingsStore.save,
    settings: stores.settingsStore.settings,
    token: stores.settingsStore.settings['settings-api-token'],
    settingsKeys: stores.settingsStore.settingsKeys,
    load: stores.settingsStore.load,
  })
})(SettingsPage);