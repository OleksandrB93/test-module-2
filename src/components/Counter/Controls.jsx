import React from 'react';
import { ContainerButton, Buttons } from "./Counter.styled";
 
const Controls = ({onIncrement, onDecrement}) => (
  <ContainerButton>
    <Buttons type="button" onClick={onIncrement}>
      +
    </Buttons>
    <Buttons type="button" onClick={onDecrement}>
      -
    </Buttons>
  </ContainerButton>
);
 
export default Controls;
   
