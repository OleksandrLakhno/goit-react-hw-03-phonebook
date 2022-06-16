import React from "react";
import PropTypes from 'prop-types';
import f from './Filter.module.css';

function Filter({value,changeFilter }) {
    return (
        <label className={ f.filter}>
            Find contact
            <input type='text' value={value} onChange={ changeFilter}/>
      </label>
  )  
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    changeFilter:PropTypes.func.isRequired,
};

export default Filter;