import React, { use } from 'react';
import Country from './Country';
import './Countries.css';

const Countries = ({ CountriesPromise }) => {

    const Countries = use(CountriesPromise);

    return (
        <>
            <div>
                <h2>All Countries {Countries.length}</h2>
                <div className='countries'>
                    {
                        Countries.map(element => <Country element={element}> </Country>)
                    }
                </div>
            </div>
        </>
    );
};

export default Countries;