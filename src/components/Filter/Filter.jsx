import React from 'react';
import css from './Filter.module.css';


const Filter = ({value, onChange}) => (
    <label className={css.label}>
    Find contacts by name 
         <input className={css.input}
           type="text"
           value={value}
           onChange={onChange} 
     />
    </label>
);

export default Filter;