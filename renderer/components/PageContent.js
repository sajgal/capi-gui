import React from 'react';
import { Layout, PageHeader } from 'antd';
import { withRouter } from 'next/router';

const { Header, Content } = Layout;

const PageContent = props => {
  return (
    <>
      {
        props.header &&
        <PageHeader
          title={props.header}
          subTitle={props.subtitle || ""}
          // onBack={() => props.router.push('/home')}
        />
      }

      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{props.children}</div>
      </Content>
    </>
  );
}

export default withRouter(PageContent);