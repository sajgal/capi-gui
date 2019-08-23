import { Layout, Menu, Icon } from 'antd';
import { withRouter } from "react-router-dom";
import React, { Component } from 'react';
import styled from 'styled-components';

const { Sider } = Layout;

const Logo = styled.div`
  color: white;
  text-align: center;
  padding: 15px 10px 10px 10px;
  font-style: italic;
`;

class SiderComponent extends Component {
  render() {
    const SiderWithRouter = withRouter(({history, location}) => {
      return (
        <Sider breakpoint="md" collapsedWidth="0">
          <Logo>
            CAPI Desktop
          </Logo>

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/']}
            selectedKeys={[location.pathname]}
            defaultOpenKeys={["show-submenu"]}
            forceSubMenuRender={true}
          >
            <Menu.Item key="/" onClick={() => history.push('/')}>
              <span className="nav-text"><Icon type="home" /> Home</span>
            </Menu.Item>

            <Menu.SubMenu title={<div><Icon type="fire" /> Shows</div>} key="show-submenu">
              <Menu.Item key="/show" onClick={() => history.push('/show')}>
                <span className="nav-text">List</span>
              </Menu.Item>
              <Menu.Item key="/show/create" onClick={() => history.push('/show/create')}>
                <span className="nav-text">Create</span>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.Item key="/favourites" onClick={() => history.push('/favourites')}>
              <span className="nav-text"><Icon type="star" /> Favourites</span>
            </Menu.Item>

            <Menu.Item key="/settings" onClick={() => history.push('/settings')}>
              <span className="nav-text"><Icon type="control" /> Settings</span>
            </Menu.Item>
          </Menu>
        </Sider>
      )
    });

    return <SiderWithRouter />
  }
}

export default SiderComponent;