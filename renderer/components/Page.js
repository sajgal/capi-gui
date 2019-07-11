import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import { Layout, Menu, Icon } from 'antd';
import Sider from '../components/Sider';

const { Header, Content, Footer } = Layout;

const LayoutFullHeight = styled(Layout)`
  height: 100vh;
`;

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <LayoutFullHeight>
          <Sider />
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{this.props.children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Switch Media ©2019 - With <Icon type="heart" /> from Sydney </Footer>
          </Layout>
        </LayoutFullHeight>
      </ThemeProvider>
    );
  }
}

export default Page;