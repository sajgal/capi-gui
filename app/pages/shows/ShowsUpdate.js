import { inject } from "mobx-react"
import { Helmet } from "react-helmet";
import React, { Component } from 'react';
import { Spin, notification } from 'antd';
import styled from 'styled-components';

import PageContent from '../../components/PageContent';
import ShowForm from '../../components/forms/ShowForm'

const SpinBox = styled.div`
  display: grid;
  min-height: 300px;
  width: 100%;
  justify-content: center;
  align-content: center;
`;

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = { showValues: null };
  }

  componentDidMount() {
    const getShowPromise = this.props.getShow(this.props.endpoint, this.props.match.params.id);
    getShowPromise
      .then(showValuesResponse => {
        this.setState({ showValues: showValuesResponse.data.data })
      })
      .catch(response => {
        notification["error"]({
          message: 'Error',
          description: response.message,
        });

        this.props.history.push(`/`);
      });
  }

  render() {
    return (
      <PageContent header="Show > Update">
        <Helmet>
          <title>CAPI Desktop - Update Show</title>
        </Helmet>

        {this.state.showValues === null ?
          <SpinBox><Spin /></SpinBox> :
          <ShowForm
            submitAction={this.props.updateShow}
            showValues={this.state.showValues}
            submitButtonLabel="Update"
            isLoading={this.props.isLoading}
          />
        }

      </PageContent >
    );
  }
}

export default inject(stores => {
  return ({
    updateShow: stores.showStore.updateShow,
    getShow: stores.showStore.getShowById,
    endpoint: stores.settingsStore.settings['settings-api-endpoint'],
    setLastResponse: stores.uiStore.setLastResponse,
    isLoading: stores.showStore.isLoading,
  })
})(Update);