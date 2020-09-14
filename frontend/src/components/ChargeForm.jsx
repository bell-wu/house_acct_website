import React, { useState } from 'react';
import { Form, Input, DatePicker, Button, Space } from 'antd';
import moment from 'moment';
import axios from 'axios';

export default function ChargeForm() {
  const [ form ] = Form.useForm();
  const dateFormat = 'MM/DD/YYYY';

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onFinish = async (values) => {
    try {
      const response = await axios.post('localhost:5000/purchase/add', values);
      console.log('response:', response);
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
          name="buyer"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
        >
          <DatePicker defaultValue={moment()} format={dateFormat}/>
        </Form.Item>

        <Form.Item
          label="Item"
          name="purchaseName"
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          label="Price"
          name="price"
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>

      </Form>
    </Space>
  )
}