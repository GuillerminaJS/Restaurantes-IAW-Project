import React from 'react'

const FilterRestaurant = ({setQuery}) => {

  return (
    <div>
        <input type="text" name='filterName' placeholder='Search'
        onChange={event=> { setQuery(event.target.value) }}/>
          <input type="number" />
          <select name="" id="">
            <option value="1">1</option>
            <option value="1">1</option>
            <option value="1">1</option>
          </select>
    </div>
  )
}

export default FilterRestaurant