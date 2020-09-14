import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

export default function ChargeForm() {
  return (
    <Form>
      <Form.Item
        label="Item"
        name="item"
      >
        <Input />
      </Form.Item>

      
      <Form.Item
        label="Date"
        name="date"
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>


    </Form>
  )
}