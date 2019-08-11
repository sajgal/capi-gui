import React from 'react';
import { Helmet } from "react-helmet";

import PageContent from '../components/PageContent';

export default () => (
  <PageContent header="Saved entities">
    <Helmet>
      <title>CAPI Desktop - Favourite Entities</title>
    </Helmet>

    Your Favourites
  </PageContent >
);
