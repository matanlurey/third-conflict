import {
  DatabaseOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.scss';
import { GlobalAuthContext, GlobalAuthState } from './contexts/auth';
import { AccountRoute } from './routes/Account';

function app(): JSX.Element {
  const [authState, setAuthState] = useState<GlobalAuthState>(null);

  return (
    <Router>
      <Layout>
        <Layout.Header>
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" />
            </Link>
          </div>
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item icon={<DatabaseOutlined />}>
              <Link to="/games">Games</Link>
            </Menu.Item>
            <Menu.Item icon={<UserOutlined />}>
              <Link to="/account">Account</Link>
            </Menu.Item>
            <Menu.Item icon={<SettingOutlined />}>
              <Link to="/settings">Settings</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <GlobalAuthContext.Provider value={authState}>
          <Layout.Content>
            <Switch>
              <Route path="/games">Hello Games</Route>
              <Route path="/account">
                <AccountRoute onChange={setAuthState} />
              </Route>
              <Route path="/settings">Hello Settings</Route>
              <Route path="/">
                {!authState && (
                  <>
                    <Button type="dashed">
                      <Link to="/account">
                        <UserOutlined /> Not logged in
                      </Link>
                    </Button>
                  </>
                )}
              </Route>
            </Switch>
          </Layout.Content>
        </GlobalAuthContext.Provider>
      </Layout>
    </Router>
  );
}

export const App = hot(module)(app);
