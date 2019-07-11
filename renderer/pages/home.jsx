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

const LayoutFullHeight = styled(Layout)`
  height: 100vh;
`;

export default () => (
  <>
    <Head>
      <title>CAPI Desktop - Home</title>
    </Head>

    <LayoutFullHeight>
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Link href="/home">
              <span className="nav-text"><Icon type="home" /> Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" href="/settings">
            <Link href="/settings">
              <span className="nav-text"><Icon type="setting" /> Settings</span>
            </Link>
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
    </LayoutFullHeight>
  </>
);
