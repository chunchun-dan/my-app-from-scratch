import React from 'react';

function ListItems(props) {
  let numbers = props.numbers;
  const listItems = numbers.map((number, index) => {
    return(
      <li key={index}>
        {number}
        <input type="text"/>
      </li>
    )
  });

  return(
    <div>
      <ul>
        {listItems}
      </ul>
      <button onClick={props.addItem}>
        Add Item
      </button>
    </div>
  );
}

export default ListItems;
