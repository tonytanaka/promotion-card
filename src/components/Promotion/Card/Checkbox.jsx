import React from 'react';
import './Card.css';

const Checkbox = ({checked, checkboxHandler}) => {

    return (
        <section className='single-checkbox'>
            <input 
            name='box1'
            type='checkbox'
            value={checked}
            onChange={(e) => checkboxHandler(e)} />
        </section>
    );
};

export default Checkbox;