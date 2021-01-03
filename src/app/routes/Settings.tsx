import { Button, Form } from 'antd';
import React from 'react';
import './Settings.scss';

export function SettingsRoute(): JSX.Element {
  return (
    <>
      <h1>Settings</h1>
      <p>
        This game is in active development. As such, the data model is
        constantly evolving, and it's possible to get into a state where you
        have invalid data and the app/game is no longer functioning properly.
      </p>
      <Form
        className="account-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item>
          <Button
            type="primary"
            danger
            onClick={() => {
              localStorage.clear();
              location.replace('/');
            }}
          >
            Reset all data
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
