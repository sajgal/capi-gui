import { Form, Input } from 'antd';
import { Helmet } from "react-helmet";
import { inject } from 'mobx-react';
import React from 'react';

import PageContent from '../components/PageContent';

class SettingsPage extends React.Component {
  render() {
    return (
      <PageContent header="Settings">
        <Helmet>
          <title>CAPI Desktop - Settings</title>
        </Helmet>

        <Form>
          <Form.Item label="API Token">
            {this.props.settings.token &&
              <Input
                onChange={(e) => this.props.saveToken(e.target.value)}
                defaultValue={this.props.settings.token} />
            }
          </Form.Item>
        </Form>
      </PageContent>
    );
  }
}

export default inject(stores => {
  return ({
    saveToken: stores.settingsStore.saveToken,
    settings: stores.settingsStore.settings,
  })
})(SettingsPage);