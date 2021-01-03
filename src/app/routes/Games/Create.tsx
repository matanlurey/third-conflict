import { LoadingOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Radio } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NameGenerator } from '../../../common/name-generator';
import { GameClientContext } from '../../contexts/client';

interface CreateGameForm {
  name: string;
  players: number;
}

export function CreateGames(): JSX.Element {
  const [form] = Form.useForm<CreateGameForm>();
  const { replace } = useHistory();
  const client = useContext(GameClientContext);
  const [saving, setSaving] = useState(false);

  function initializeForm() {
    form.setFieldsValue({ name: new NameGenerator().next(), players: 2 });
  }

  useEffect(initializeForm, []);
  return (
    <>
      <h1>Create a Game</h1>
      <p>
        Currently, you can create <strong>local</strong> (offline) games with AI
        opponents. In future builds, once logged in with{' '}
        <strong>Discord</strong>, you will be able to create and play online
        games.
      </p>
      <Form
        labelCol={{ span: 1 }}
        wrapperCol={{ span: 4 }}
        form={form}
        onFinish={async (values) => {
          setSaving(true);
          const result = await client.gamesCreate(values.name, values.players);
          replace(`/games/${result.name}`);
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          extra={<>This name is just used for reference only.</>}
        >
          <Input maxLength={30} />
        </Form.Item>
        <Form.Item
          name="players"
          label="Players"
          extra={<>2-4 players currently supported.</>}
        >
          <InputNumber min={2} max={4} />
        </Form.Item>
        <Form.Item
          name="online"
          label="Connectivity"
          extra={<>Local games are versus AI and played offline.</>}
        >
          <Radio.Group>
            <Radio.Button value={false}>Local</Radio.Button>
            <Radio.Button value={true} disabled>
              Online
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 5 }}>
          <Button
            disabled={saving}
            icon={saving ? <LoadingOutlined /> : undefined}
            type="primary"
            style={{ width: '100%' }}
            htmlType="submit"
          >
            {saving ? <>Saving</> : <>Create Game</>}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
