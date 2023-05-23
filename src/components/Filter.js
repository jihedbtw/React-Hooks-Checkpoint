import React from 'react';

const Filter = ({ title, rate, handleTitleChange, handleRateChange }) => {
return (
    <div className="filter">
    <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
    />
    <input
        type="number"
        placeholder="Filter by rating"
        value={rate}
        onChange={handleRateChange}
    />
    </div>
);
};

export default Filter;
