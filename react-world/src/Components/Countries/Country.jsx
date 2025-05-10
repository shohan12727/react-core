import React from 'react';

const Country = ({element}) => {
   
    

    return (
        <>
        <div className='card'>
            Country's Official Name: {element.name.official}
            <p>Capital name: {element.capital}</p>
            <p>Total Area: {element.area}</p>
            <p>Region: {element.region}</p>
        </div>
        </>
    );
};

export default Country;