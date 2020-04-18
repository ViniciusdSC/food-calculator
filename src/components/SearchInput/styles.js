import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: -5px -5px 15px rgba(0, 0, 0, 0.3), 
            5px 5px 15px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  border-radius: 5px;
`

export const Input = styled.input`
  background-color: transparent;
  color: #fff;
  flex-grow: 1;
  padding: 10px;
  border: none;
  :focus {
    outline: none;
  }
`

export const Button = styled.button`
  background-color: white;
  padding: 10px 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #ffc335;
  border-radius: 5px;
  :focus {
    outline: none;
  }
`

export const Divider = styled.span`
  height: 25px;
  border-left: 1px solid #444444;
  position: relative;
  top: 5px;
`