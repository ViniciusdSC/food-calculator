import React from 'react';

import {
  Table,
  Th,
  Td
} from './styles';

function FoodTable({ data }) {
  const header = {
    'Food_Code': 'Code',
    'Display_Name': 'Name',
    'Portion_Default': 'Portion Default',
    'Portion_Amount': 'Portion Amount',
    'Portion_Display_Name': 'Portion Name',
    'Calories': 'Calories'
  }
  
  return (
    <Table>
      <thead>
        <tr>
          { Object.keys(header).map(key => (
            <Th key={key}>{header[key]}</Th>
          )) }
        </tr>
      </thead>
      <tbody>
        { data.map((item, index) => (
          <tr key={index}>
            { Object.keys(header).map(key => (
              <Td key={key}>{item[key]}</Td>
            )) }
          </tr>
        )) }
      </tbody>
    </Table>
  )
}

export default FoodTable;