import React from 'react';
import './styles.css';

const Item = (props) => {
    const { item, handleSelect } = props;
    return (
        <div className="item">
            <input
                type="checkbox"
                className="item-input"
                onChange={handleSelect}
                checked={item.selected}
            />
            <span className="item-description">{item.name}</span>
            <span className="item-deletion">X</span>
        </div>
    );
};

export default Item;