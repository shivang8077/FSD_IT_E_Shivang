const React from 'react';
import SearchBar from './SearchBar';
import RestaurantList from './RestaurantList';
import './Body.css';

const Body = () => {
  return (
    <div className="body">
      <SearchBar />
      <RestaurantList />
    </div>
  );
};

export default Body;