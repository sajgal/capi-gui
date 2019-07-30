import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PageContent from '../components/PageContent';

export default class HomePage extends Component {
  render() {
    return (
      <PageContent>
        <p>This is the home page... <br /><Link to="/dashboard">Dashboard</Link></p>
      </PageContent>
    );
  }
}
