import { inject } from "mobx-react"
import { Helmet } from "react-helmet";
import React, { Component } from 'react';
import { Spin } from 'antd';
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
      .catch(error => {
        console.log(error);
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
          <ShowForm submitAction={this.props.createShow} showValues={this.state.showValues} />
        }

      </PageContent >
    );
  }
}

export default inject(stores => {
  return ({
    getShow: stores.showStore.getShowById,
    endpoint: stores.settingsStore.settings['settings-api-endpoint'],
    setLastResponse: stores.uiStore.setLastResponse,
  })
})(Update);