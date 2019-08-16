import { Empty, List, Tag, Button, Icon, Divider, Row, Col, notification } from 'antd';
import { Helmet } from "react-helmet";
import { inject } from 'mobx-react';
import React from 'react';

import PageContent from '../components/PageContent';

class LastResponsePage extends React.Component {
  onFavouriteClick(entityType, entityId, title) {
    this.props.saveFavourite(entityType, entityId, title)
      .then(response => {
        const btn = (
          <Button type="primary" size="small" onClick={() => this.props.history.push("/favourites")}>
            Show Favourites
          </Button>
        );

        notification["success"]({
          message: 'Successfuly added to favourites',
          description: `${entityType}: ${title} added to favourites.`,
          btn,
        });
      })
      .catch(error => {
        notification["error"]({
          message: 'Could not add to favourites',
          description: error,
        });
      });
  }

  render() {
    let lastResponse = <Empty />;

    if (this.props.response) {
      const { status, statusText, response, entityType } = this.props.response;
      const responseFields = [];

      for (let [key, value] of Object.entries(response.data)) {
        responseFields.push(`${key}: ${value}`);
      }

      lastResponse = <div>
        <List
          size="small"
          header={<Tag color="#87d068">{status} - {entityType} {statusText}</Tag>}
          bordered
          dataSource={responseFields}
          renderItem={item => <List.Item>{item}</List.Item>}
        />

        <Divider dashed />

        <Row type="flex" justify="end">
          <Col>
            <Button.Group size="default">
              <Button type="default" onClick={() => this.onFavouriteClick(entityType, response.data.id, response.data.title)}>
                <Icon type="star" />
                Save as Favourite
              </Button>
              <Button type="default" onClick={() => this.props.history.push("/shows/update")}>
                <Icon type="edit" />
                Update {entityType}
              </Button>
              <Button type="danger">
                <Icon type="delete" />
                Delete
              </Button>
            </Button.Group>
          </Col>
        </Row>

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
    saveFavourite: stores.favouritesStore.save,
  })
})(LastResponsePage);