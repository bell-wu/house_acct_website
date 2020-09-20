import React, { useState } from 'react';
import { Button } from 'antd';


interface NameProps {
  userId: number,
  consumers: number[],
  setConsumers: Function,
}

function NameButton(props: NameProps) {
  const { consumers, userId, setConsumers } = props;
  const [ isSelected, setIsSelected ] = useState(false);

  const toggle = () => {
    if (isSelected) {
      setIsSelected(false);
      setConsumers(consumers.filter(id => id !== userId));
    } else {
      setIsSelected(true);
      setConsumers([...consumers, userId]);
    }
  }

  return (
    <>
      {isSelected ? (<Button type="primary" onClick={toggle} className="nonanimating-button">{props.userId}</Button>) : (<Button type="default" onClick={toggle} className="nonanimating-button">{props.userId}</Button>)}
    </>
  )
}

interface ListProps {
  userIds: number[],
  consumers: number[],
  setConsumers: Function,
}

export default function NameButtonList(props: ListProps) {
  const { userIds, consumers, setConsumers } = props; 

  return (
    <>
      {userIds.map(id => (<NameButton userId={id} consumers={consumers} setConsumers={setConsumers} key={id}/>))}
    </>
  )
}