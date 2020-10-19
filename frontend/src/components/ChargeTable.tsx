import React, { useEffect, useState } from 'react';
import { Space, Table } from 'antd';
import axios from 'axios';

interface DisplayUser {
  name: string,
  id: number,
  owed: string,
}

export default function ChargeTable() {
  const [ users, setUsers ] = useState<DisplayUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://houseaccount.herokuapp.com/users');

      setUsers(result.data.map((user:any) => ({
        id: user['id'],
        name: user['name'],
        owed: user['owed'].toString()})
      ));
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

  

  const convertDecimals = () => {
    let newList = [...users];
    for(let i = 0; i < newList.length; i++) {
      
      newList[i]['owed'] = parseFloat(newList[i]['owed']).toFixed(2);
    }
    return newList;
  } 

  return (
    <>
      <Space>
        <Table dataSource={convertDecimals()} columns={columns} pagination={false}/>
      </Space>
    </>);
}