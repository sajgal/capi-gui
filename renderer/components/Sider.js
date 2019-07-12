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

      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" onClick={() => router.push('/home')}>
          <span className="nav-text"><Icon type="home" /> Home</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => router.push('/settings')}>
            <span className="nav-text"><Icon type="control" /> Settings</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={() => router.push('/mobx')}>
            <span className="nav-text"><Icon type="medium" /> MobX Example</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(SiderComponent);