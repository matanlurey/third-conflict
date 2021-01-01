import { Button, Form } from 'antd';
import React, { useContext } from 'react';
import { GlobalAuthContext, GlobalAuthState } from '../contexts/auth';
import './Account.scss';

export interface AccountRateProps {
  onChange: (newState: GlobalAuthState) => void;
}

export function AccountRoute(props: AccountRateProps): JSX.Element {
  const context = useContext(GlobalAuthContext);

  return (
    <Form
      className="account-form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <h1>Account</h1>
      <p>
        A login is required to play <strong>Third Conflict</strong>. Currently
        you can login as a <strong>Guest</strong> and create and play games
        locally. In <em>future</em> releases you will be able to login with{' '}
        <strong>Discord</strong> and play online.
      </p>
      {!context && (
        <Form.Item>
          <Button type="primary" onClick={() => props.onChange('Guest')}>
            Login as Guest
          </Button>
          <Button type="ghost" disabled>
            Login with Discord
          </Button>
        </Form.Item>
      )}
      {context && (
        <Button type="primary" danger onClick={() => props.onChange(null)}>
          Logout
        </Button>
      )}
    </Form>
  );
}
