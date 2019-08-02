import { Card, Avatar, Divider, Icon } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

import { getRandomColor } from '../helpers/color'

const CardLink = styled(Card)`
  display: grid;
  align-items: center;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #597ef7;
  }
`;

const DashboardCard = props => {
  let avatarStyles = {}

  if (props.homeHoverArea === props.cardId) {
    avatarStyles = {
      style: { color: '#fff', backgroundColor: getRandomColor() }
    }
  }

  return (
    <Link to={props.link}>
      <CardLink
        onMouseEnter={() => props.setHomeHoverArea(props.cardId)}
        onMouseLeave={() => props.setHomeHoverArea(null)} >

        <Avatar icon={props.icon} size="large" {...avatarStyles} />

        <Divider />
        {props.label}
      </CardLink>
    </Link>
  );
};

export default DashboardCard;