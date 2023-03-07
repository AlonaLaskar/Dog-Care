import StyledSearchBar from './StyledSearchBar';
import React, { useState } from 'react';
import { IonSearchbar } from '@ionic/react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  // const handleSearch = (event) => {
  //   setSearchText(event.detail.value);
  //   // You can implement your search logic here
  // }

  return (
    <StyledSearchBar>
      <IonSearchbar
        value={searchText}
        //onIonChange={handleSearch}
        placeholder="Search"
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
