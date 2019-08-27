import { inject } from "mobx-react"
import { Helmet } from "react-helmet";
import React, { Component } from 'react';

import PageContent from '../../components/PageContent';
import ShowForm from '../../components/forms/ShowForm'

class Create extends Component {
  render() {
    return (
      <PageContent header="Show > Create">
        <Helmet>
          <title>CAPI Desktop - Create Show</title>
        </Helmet>

        <ShowForm
          submitAction={this.props.createShow}
          submitButtonLabel="Create"
          isLoading={this.props.isLoading}
          hideDeleteButton={true}
        />
      </PageContent >
    );
  }
}

export default inject(stores => {
  return ({
    createShow: stores.showStore.createShow,
    isLoading: stores.showStore.isLoading,
    token: stores.settingsStore.settings['settings-api-token'],
    endpoint: stores.settingsStore.settings['settings-api-endpoint'],
    setLastResponse: stores.uiStore.setLastResponse,
  })
})(Create);