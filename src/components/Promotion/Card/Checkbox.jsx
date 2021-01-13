import React, { useState } from 'react';
import './Card.css';

const Checkbox = () => {
    const [checked, setChecked] = useState({box1:true});

    return (
        <section className={`${checked ? "app-checkbox" : "app-checkbox2"}`}>
            <input 
            // name='box1'
            type='checkbox'
            value={checked}
            onChange={(e) => setChecked(e.target.checked)} />
        <p className="app-checkbox-p">Select this item</p>
        </section>
    );
};

export default Checkbox;