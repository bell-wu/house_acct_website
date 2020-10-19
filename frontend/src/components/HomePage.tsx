import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChargeForm from './ChargeForm';
import ChargeTable from './ChargeTable';
import { Button } from 'antd';

export default function HomePage() {
  const [ addRequestActive, setAddRequestActive ] = useState(false);
  const [ viewTableActive, setViewTableActive ] = useState(false);
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://houseaccount.herokuapp.com/users');

      setUsers(result.data);
    }
    fetchData();
  }, []);

  const getComponents = () => {
    if (addRequestActive) {
      return (<ChargeForm users={users} setAddRequestActive={setAddRequestActive}/>)
    } else if (viewTableActive) {
        return (<>
        <Button type="primary" onClick={() => setViewTableActive(false)}>Home</Button>
        <ChargeTable />
        </>)
    } else {
      return (<>
        <Button type="primary" onClick={() => setAddRequestActive(!addRequestActive)}>Submit a Request</Button>
        <Button type="primary" onClick={() => setViewTableActive(!viewTableActive)}>View Charges</Button>
        </>
      )
    }
  };

  return getComponents();
}