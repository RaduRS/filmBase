import React from 'react';
import './Search.css';

const SearchBox = ({searchChange}) => {
    return (
        <div>
        <input className='pa2 ba br3 nr'
        type='search' placeholder='search movie' onChange={searchChange} />
        </div>
    );
}

export default SearchBox;