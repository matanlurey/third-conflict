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
    <Form className="account-form">
      {!context && (
        <Button type="primary" onClick={() => props.onChange('Guest')}>
          Login as Guest
        </Button>
      )}
      {context && (
        <Button type="primary" danger onClick={() => props.onChange(null)}>
          Logout
        </Button>
      )}
    </Form>
  );
}
