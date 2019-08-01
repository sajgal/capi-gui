import React from 'react';
import { Layout, PageHeader, Icon } from 'antd';

const { Footer, Content } = Layout;

const PageContent = props => {
  return (
    <span>
      {
        props.header &&
        <PageHeader
          title={props.header}
          subTitle={props.subtitle || ""}
        // onBack={() => props.router.push('/home')}
        />
      }

      {
        props.hideContentWrapper ?
          <div style={{ padding: "24px 10px", minHeight: 360 }}>{props.children}</div> :
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{props.children}</div>
          </Content>
      }

      {
        !props.hideFooter &&
        <Footer style={{ textAlign: 'center' }}>Switch Media ©2019 - With <Icon type="heart" /> from Sydney </Footer>
      }
    </span>
  );
}

export default PageContent;