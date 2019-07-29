import React from 'react';
import styled from 'styled-components';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'next/router';

const { Sider } = Layout;

const Logo = styled.div`
  color: white;
  text-align: center;
  padding: 15px 10px 10px 10px;
  font-style: italic;
`;

const SiderComponent = ({ router }) => {
  return (
    <Sider breakpoint="md" collapsedWidth="0">
      <Logo>
        CAPI Desktop
      </Logo>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/home']}
        selectedKeys={[router.pathname]}
        defaultOpenKeys={["show-submenu"]}
        forceSubMenuRender={true}
      >
        <Menu.Item key="/home" onClick={() => router.push('/home')}>
          <span className="nav-text"><Icon type="home" /> Home</span>
        </Menu.Item>

        <Menu.SubMenu title={<div><Icon type="fire" /> Shows</div>} key="show-submenu">
          <Menu.Item key="/shows" onClick={() => router.push('/shows')}>
            <span className="nav-text">List</span>
          </Menu.Item>
          <Menu.Item key="/shows/create" onClick={() => router.push('/shows/create')}>
            <span className="nav-text">Create</span>
          </Menu.Item>
          <Menu.Item key="/shows/history" onClick={() => router.push('/shows/history')}>
            <span className="nav-text">History</span>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="/settings" onClick={() => router.push('/settings')}>
          <span className="nav-text"><Icon type="control" /> Settings</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(SiderComponent);