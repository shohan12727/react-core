import React, { use } from 'react';
import Country from './Country';
const Countries = ({CountriesPromise}) => {

    const Countries = use(CountriesPromise);
    
    return (
        <>
        <div>
            
          
           <h2>All Countries</h2>
           {
            Countries.map(element => <Country element={element}> </Country>)
           }
        </div>
        </>
    );
};

export default Countries;