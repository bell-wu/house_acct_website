import React, { useState } from 'react';
import { Form, Input, InputNumber, DatePicker, Button, Space } from 'antd';
// import moment from 'moment';
import axios from 'axios';
import NameButtonList from './NameButtonList';

interface OwnProps {
  setAddRequestActive: Function,
}

export default function ChargeForm(props: OwnProps) {
  const { setAddRequestActive } = props;
  const [ form ] = Form.useForm();
  const [ consumers, setConsumers ] = useState([]);

  const dateFormat = 'MM/DD/YYYY';

  const userIds = [0, 1, 2, 3, 4, 5, 6];

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
          rules={[{ required: true, message: 'Please input your name.' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="ID"
          name="id"
        >
          <InputNumber/>
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
          <NameButtonList userIds={userIds} consumers={consumers} setConsumers={setConsumers}/>
        </Form.Item>

        <Form.Item>
          <Button type="default" onClick={() => setAddRequestActive(false)}>Cancel</Button>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>

      </Form>
    </Space>
  )
}
