import React, { useState } from 'react';
import { Form, Input, InputNumber, DatePicker, Button, Space, Select, notification } from 'antd';
import axios from 'axios';
import NameButtonList from './NameButtonList';
import { User } from '../models/users';

interface OwnProps {
  setAddRequestActive: Function,
  users: User[],
}

export default function ChargeForm(props: OwnProps) {
  const { setAddRequestActive, users } = props;
  const [ form ] = Form.useForm();
  const [ consumers, setConsumers ] = useState([]);

  const dateFormat = 'MM/DD/YYYY';

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onFinish = async (values: any) => {
    const processedValues = {
      consumers: consumers,
      ...values
    }
    console.log(processedValues);
    try {
      const response = await axios.post('http://localhost:5000/purchase/add', processedValues);
      console.log('response:', response);
      notification.open({
        message: 'Successfully submitted!',
        description: 'yay',
      });
      setAddRequestActive(false);
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
  };

  return (
    <Space>
      <Form
      {...layout}
      form={form}
      onFinish={onFinish}
      >
        <Form.Item
          label="Your Name"
          name="id"
          rules={[{ required: true, message: 'Please input your name.' }]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
          >
            {users.map(user => <Select.Option value={user.id} key={user.id}>{user.name}</Select.Option>)}
          </Select>
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
        >
          {/* <DatePicker defaultValue={moment()} format={dateFormat}/> */}
          <DatePicker format={dateFormat}/>
        </Form.Item>

        <Form.Item
          label="Item"
          name="purchaseName"
          rules={[{ required: true, message: 'Please input item name.' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price Paid"
          name="price"
          rules={[{ required: true, message: 'Please input total amount paid.' }]}
        >
          <InputNumber
            defaultValue={0.00}
            min={0}
            formatter={value => `$ ${value}`} />
        </Form.Item>

        <Form.Item
          label="Split Among">
          <NameButtonList users={users} consumers={consumers} setConsumers={setConsumers}/>
        </Form.Item>

        <Form.Item>
          <Button type="default" onClick={() => setAddRequestActive(false)}>Cancel</Button>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>

      </Form>
    </Space>
  )
}
