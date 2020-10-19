import React, { useState } from 'react';
import { Button } from 'antd';
import { User } from '../models/users';


interface NameProps {
  user: User,
  consumers: number[],
  setConsumers: Function,
}

function NameButton(props: NameProps) {
  const { consumers, user, setConsumers } = props;
  const [ isSelected, setIsSelected ] = useState(false);

  const toggle = () => {
    if (isSelected) {
      setIsSelected(false);
      setConsumers(consumers.filter(id => id !== user.id));
    } else {
      setIsSelected(true);
      setConsumers([...consumers, user.id]);
    }
  }

  return (
    <>
      {isSelected ? (<Button type="primary" onClick={toggle}>{props.user.name}</Button>) : (<Button type="default" onClick={toggle}>{props.user.name}</Button>)}
    </>
  )
}

interface ListProps {
  users: User[],
  consumers: number[],
  setConsumers: Function,
}

export default function NameButtonList(props: ListProps) {
  const { users, consumers, setConsumers } = props; 

  return (
    <>
      {users.map(user => (<NameButton user={user} consumers={consumers} setConsumers={setConsumers} key={user.id}/>))}
    </>
  )
}