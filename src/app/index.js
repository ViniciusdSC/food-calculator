import React, {useState} from 'react';
import { Page, Container, FoodTable, SearchInput } from './styles';
import food from '~/data/food.json'

function App() {
  const [items, setItems] = useState(food.filter((item, index) => index <= 25));

  function onSearch(value) {
    if (value === '') {
      alert('Type something before search');
      return;
    }

    const items = [...food].filter(item => 
      new RegExp(value).test(item.Display_Name)  
    ).filter((item, index) => index <= 25);

    if (items.length === 0) {
      alert('Food not found')
      return;
    }

    setItems(items)
  }

  function onClear() {
    setItems(
      [...food].filter((item, index) => index <= 25)
    )
  }

  return (
    <Page>
      <Container>
        <SearchInput onSearch={onSearch} onClear={onClear} />
        <FoodTable data={items} />
      </Container>
    </Page>
  );
}

export default App;
