import { Layout } from 'antd';
import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';

function app(): JSX.Element {
  return (
    <Layout>
      <Layout.Sider collapsed={true} collapsedWidth={0}></Layout.Sider>
      <Layout.Content>Hello World</Layout.Content>
    </Layout>
  );
}

export const App = hot(module)(app);
