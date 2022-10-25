import styled from "@emotion/styled";
 
export const CounterValue = styled.span`
  width: 100px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  margin: auto;
  padding: 15px;
  text-align: center;
  background-color: tomato;
  border: 3px solid teal;
  border-radius: 4px;
  font-size: 20px;
`;
 
export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;
 
export const Buttons = styled.button`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 28px;
  padding-right: 28px;
  border-radius: 4px;
  font-size: 20px;
 
  background-color: #d4d4d4;
  &:hover {
    background-color: teal;
  }
`;
 
