import React from 'react'
import Button from './Button';

const ButtonList = () => {
  return (
    <div className='flex '>
      <Button name="javascript" />
      <Button name="Music"/>
      <Button name="Hiking"/>
      <Button name="Camping"/>
      <Button name="Villages"/>
      <Button name="Mixes"/>
      <Button name="Mantras"/>
      <Button name="Trains"/>
      <Button name="Satsang"/>
      <Button name="Live" />
    </div>
  );
};

export default ButtonList