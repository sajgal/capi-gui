import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

const Logo = styled.div`
  color: white;
  text-align: center;
  padding: 15px 10px 10px 10px;
  font-style: italic;
`;

const SiderComponent = () => {
  return (
    <Sider
      breakpoint="md"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Logo>
        CAPI Desktop
      </Logo>

      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link href="/home">
            <span className="nav-text"><Icon type="home" /> Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" href="/settings">
          <Link href="/settings">
            <span className="nav-text"><Icon type="control" /> Settings</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/mobx">
            <span className="nav-text"><Icon type="medium" /> MobX Example</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderComponent;