import { Empty, List, Tag, Button, Icon, Divider, Row, Col, notification } from 'antd';
import { Helmet } from "react-helmet";
import { inject } from 'mobx-react';
import React from 'react';

import PageContent from '../components/PageContent';
import AddToFavouritesButton from '../components/AddToFavouritesButton';

class LastResponsePage extends React.Component {
  deleteEntity(entityType, entityId) {
    const { deleteShow, token, endpoint, removeFromFavourites } = this.props;

    switch (entityType) {
      case "show":
        deleteShow(endpoint, token, entityId)
          .then(
            () => {
              removeFromFavourites(entityType, entityId);

              notification["success"]({
                message: 'Success',
                description: `${entityType} ${entityId} deleted successfully.`,
              });

              this.props.history.push(`/`);
            }
          )
          .catch(() => {
            notification["error"]({
              message: 'Something went wrong',
              description: `${entityType} ${entityId} not deleted.`,
            });
          });
        break;

      default:
        break;
    }
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
              <AddToFavouritesButton
                isFavourite={this.props.isFavourite(response.data.id)}
                response={response}
                entityType={entityType}
              />
              <Button type="default" onClick={() => this.props.history.push(`/${entityType}/update/${response.data.id}`)}>
                <Icon type="edit" />
                Update {entityType}
              </Button>
              <Button type="danger" onClick={() => this.deleteEntity(entityType, response.data.id)}>
                {this.props.showIsLoading ?
                  <Icon type="loading" spin /> : <span><Icon type="delete" /> Delete</span>
                }
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
    isFavourite: stores.favouritesStore.isFavourite,
    deleteShow: stores.showStore.deleteShow,
    token: stores.settingsStore.settings['settings-api-token'],
    endpoint: stores.settingsStore.settings['settings-api-endpoint'],
    removeFromFavourites: stores.favouritesStore.remove,
    showIsLoading: stores.showStore.isLoading,
  })
})(LastResponsePage);