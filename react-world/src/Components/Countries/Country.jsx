import React, { useState } from 'react';
import './country.css'
const Country = ({ element }) => {




  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);

  }

  return (
    <>
      <div className='country'>
        Country's Official Name: {element.name.official}
        <p>Capital name: {element.capital}</p>
        <p>Total Area: {element.area}</p>
        <p>Region: {element.region}</p>
        <p>Common: {element.name.common}</p>
        <img src={element.flags.png} alt='loading...........' />
        <p>Independent: {element.independent ? 'Free' : 'Not free'}</p>
        <button onClick={handleClick}
          className={toggle ? 'visited-button' : 'visit-button'}
        >

          {toggle ? 'visit' : 'visited'}
        </button>

      </div>
    </>
  );
};

export default Country;