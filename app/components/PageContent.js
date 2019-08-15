import { Layout, PageHeader, Icon } from 'antd';
import { withRouter } from "react-router-dom";
import React from 'react';

const { Footer, Content } = Layout;

const PageContent = props => {
  let TopHeader = <span />;

  if (props.header) {
    TopHeader = withRouter(({ history }) => {
      return (
        <PageHeader
          title={props.header}
          subTitle={props.subtitle || ""}
          onBack={props.hideBack ? undefined : () => history.push(props.back || '/')}
        />
      );
    })
  }

  return (
    <span>
      <TopHeader />

      {
        props.hideContentWrapper ?
          <div style={{ padding: "24px 10px", minHeight: 360 }}>{props.children}</div> :
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{props.children}</div>
          </Content>
      }

      {
        !props.hideFooter &&
        <Footer style={{ textAlign: 'center' }}>Switch Media © {new Date().getFullYear()} - From Sydney With <Icon type="heart" /></Footer>
      }
    </span>
  );
}

export default PageContent;