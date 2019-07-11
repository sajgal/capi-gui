import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer, Sider } = Layout;

const Logo = styled.div`
  color: white;
  text-align: center;
  padding: 15px 10px 10px 10px;
  font-style: italic;
`;

export default () => (
  <>
    <Head>
      <title>Home - Nextron (with-javascript-ant-design)</title>
    </Head>

    <Layout>
      <Sider
        breakpoint="lg"
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Switch Media ©2019 - With <Icon type="heart" /> from Sydney </Footer>
      </Layout>
    </Layout>
  </>
);
