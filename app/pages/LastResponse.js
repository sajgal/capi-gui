import { Helmet } from "react-helmet";
import { inject } from 'mobx-react';
import React from 'react';

import PageContent from '../components/PageContent';

class LastResponsePage extends React.Component {
  render() {
    let lastResponse = <div>No previous response</div>;

    if (this.props.response) {
      const { status, statusText, response, entityType } = this.props.response;
      const responseFields = [];

      for (let [key, value] of Object.entries(response.data)) {
        responseFields.push(<div key={key}>{key}: {value}</div>);
      }

      lastResponse = <div>
        <div>Status: {status} - {statusText}</div>
        <div>Entity: {entityType}</div>
        {responseFields}
      </div>
    }

    return (
      <PageContent header="Last Response">
        <Helmet>
          <title>CAPI Desktop - Last Response</title>
        </Helmet>

        {lastResponse}
      </PageContent>
    );
  }
}

export default inject(stores => {
  return ({
    response: stores.uiStore.lastResponse,
  })
})(LastResponsePage);