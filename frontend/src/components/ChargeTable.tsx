import React, { useEffect, useState } from 'react';
import { Space, Table } from 'antd';
import axios from 'axios';

export default function ChargeTable() {
  const [ dataSource, setDataSource ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/users');

      setDataSource(result.data);
    }
    fetchData();
  }, []);

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '$$$',
      dataIndex: 'owed',
      key: 'owed',
    },
  ]


  return (
    <>
      <Space>
        <Table dataSource={dataSource} columns={columns} pagination={false}/>
      </Space>
    </>);
}