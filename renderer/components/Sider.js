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

      <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']} selectedKeys={[router.pathname]}>
        <Menu.Item key="/home" onClick={() => router.push('/home')}>
          <span className="nav-text"><Icon type="home" /> Home</span>
        </Menu.Item>
        <Menu.Item key="/settings" onClick={() => router.push('/settings')}>
            <span className="nav-text"><Icon type="control" /> Settings</span>
        </Menu.Item>
        <Menu.Item key="/shows" onClick={() => router.push('/shows')}>
            <span className="nav-text"><Icon type="fire" theme="twoTone" twoToneColor="#eb2f96" /> Shows</span>
        </Menu.Item>
        <Menu.Item key="/mobx" onClick={() => router.push('/mobx')}>
            <span className="nav-text"><Icon type="medium" /> MobX Example</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(SiderComponent);