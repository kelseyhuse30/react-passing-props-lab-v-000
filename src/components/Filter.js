import React from 'react';

const Filter = (props) => {
  return (
    <select onChange={props.handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {props.filters.map((filter) => {
        return <option value={filter}>{filter}</option>
      })}
    </select>
  )
}

Filter.defaultProps = {
  filters: '',
  handleChange: '',
};

export default Filter;