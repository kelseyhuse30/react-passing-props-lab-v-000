import React from 'react';

const FilteredFruitList = (props) => {
  return (
    <ul className="fruit-list">
      {props.fruit.map((fru, i) => {
        if (fru.fruit_type == props.filter || props.filter === null) {
          return <li key={i} value={fru}>{fru.char}</li>
        }
      })}
    </ul>
  )
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null,
};

export default FilteredFruitList;