import React from 'react';
import { Layout } from 'antd';

const { Header, Content } = Layout;

const PageContent = props => {
  return (
    <>
      {
        props.header &&
        <Header style={{ background: '#fff', padding: "3px 18px" }}>{props.header}</Header>
      }

      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{props.children}</div>
      </Content>
    </>
  );
}

export default PageContent;