import {
  DatabaseOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.scss';
import { GlobalAuthContext, GlobalAuthState } from './contexts/auth';
import { AccountRoute } from './routes/Account';
import { Default } from './routes/Default';
import { GamesRoute } from './routes/Games';

function app(): JSX.Element {
  const [baseName] = useState(() => {
    const result = document.head.baseURI;
    return result.indexOf('localhost') ? undefined : result;
  });
  const [cookies, setCookies] = useCookies(['auth']);
  const [authState, setAuthState] = useState<GlobalAuthState>(cookies['auth']);

  const updateAuth = (state: GlobalAuthState) => {
    setCookies('auth', state);
    setAuthState(state);
  };

  return (
    <Router basename={baseName}>
      <Layout>
        <Layout.Header>
          <div className="logo">
            <Link to="/">
              <img src="images/logo.png" />
            </Link>
          </div>
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item disabled={!authState} icon={<DatabaseOutlined />}>
              <Link to="/games">Games</Link>
            </Menu.Item>
            <Menu.Item icon={<UserOutlined />}>
              <Link to="/account">Account</Link>
            </Menu.Item>
            <Menu.Item disabled icon={<SettingOutlined />}>
              <Link to="/settings">Settings</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <GlobalAuthContext.Provider value={authState}>
          <Layout.Content>
            <Switch>
              <Route path="/games">
                <GamesRoute />
              </Route>
              <Route path="/account">
                <AccountRoute onChange={updateAuth} />
              </Route>
              <Route path="/settings">Hello Settings</Route>
              <Route path="/">
                {!authState ? (
                  <>
                    <Button type="dashed">
                      <Link to="/account">
                        <UserOutlined /> Login Required
                      </Link>
                    </Button>
                  </>
                ) : (
                  <Default />
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
