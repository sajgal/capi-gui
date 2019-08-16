import { inject } from "mobx-react"
import { Helmet } from "react-helmet";
import React, { Component } from 'react';

import PageContent from '../../components/PageContent';
import ShowForm from '../../components/forms/ShowForm'

class Update extends Component {
  render() {
    const showValues = {
      "title": "test title",
    }

    return (
      <PageContent header="Show > Update">
        <Helmet>
          <title>CAPI Desktop - Update Show</title>
        </Helmet>

        <ShowForm submitAction={this.props.createShow} showValues={showValues} />
      </PageContent >
    );
  }
}

export default inject(stores => {
  return ({
    createShow: stores.showStore.createShow,
    token: stores.settingsStore.settings['settings-api-token'],
    endpoint: stores.settingsStore.settings['settings-api-endpoint'],
    setLastResponse: stores.uiStore.setLastResponse,
  })
})(Update);