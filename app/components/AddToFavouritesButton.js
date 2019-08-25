import { Button, Icon, notification } from 'antd';
import { inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import React from 'react';

class AddToFavouritesButton extends React.Component {
  onFavouriteClick(entityType, entityId, title, history) {
    this.props.saveFavourite(entityType, entityId, title)
      .then(response => {
        const btn = (
          <Button type="primary" size="small" onClick={() => history.push('/favourites')}>
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
    const { isFavourite, response, entityType } = this.props;

    let FavouritesButton = withRouter(({ history }) => {
      return (
        <Button type="default" onClick={() => this.onFavouriteClick(entityType, response.data.id, response.data.title, history)}>
          <Icon type="star" />
          Save as Favourite
        </Button>
      )
    });

    if (isFavourite) {
      FavouritesButton = withRouter(({ history }) => {
        return (
          <Button type="default" onClick={() => history.push('/favourites')}>
            <Icon type="star" theme="twoTone" twoToneColor="#F4D35E" />
            {`Show favourites (${entityType} alredy added)`}
          </Button>
        );
      });
    };

    return (
      <FavouritesButton />
    );
  }
};

export default inject(stores => {
  return ({
    saveFavourite: stores.favouritesStore.save,
  })
})(AddToFavouritesButton);



