import React, {useState} from 'react';
import {
  Input,
  Button,
  Container,
  Divider
} from './styles';

function SearchInput({ onSearch, onClear }) {
  const [value, setValue] = useState('');

  return (
    <Container>
      <Input
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
        }}
        placeholder="Search for your food" 
        type="text" 
      />
      <Divider />
      <div>
        <Button onClick={() => {
          onSearch(value)
        }}>
          <i className="fas fa-search" />
        </Button>
      </div>
      <Divider />
      <div>
        <Button onClick={() => {
          setValue('');
          onClear()
        }}>
          <i className="fas fa-times" />
        </Button>
      </div>
    </Container>
  )
}

export default SearchInput;