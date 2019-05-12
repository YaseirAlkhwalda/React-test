import React from 'react';
import Button from './Button';

const SearchBar = (props) => {
  return (
    <div>
      <form>
        <Button type={"button"} buttonName={"GetUsers!"} onClick={props.onClick} />
      </form>
   </div>
  );
};




export default SearchBar;


