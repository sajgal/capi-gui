import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Layout, Icon } from 'antd';
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
            {this.props.children}
          </Layout>
        </LayoutFullHeight>
      </ThemeProvider>
    );
  }
}

export default Page;