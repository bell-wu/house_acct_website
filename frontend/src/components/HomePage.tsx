import React, { useState } from 'react';
import ChargeForm from './ChargeForm';
import { Button } from 'antd';
import ChargeTable from './ChargeTable';

export default function HomePage() {
  const [ addRequestActive, setAddRequestActive ] = useState(false);
  const [ viewTableActive, setViewTableActive ] = useState(false);

  const getComponents = () => {
    if (addRequestActive) {
      return (<ChargeForm setAddRequestActive={setAddRequestActive}/>)
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