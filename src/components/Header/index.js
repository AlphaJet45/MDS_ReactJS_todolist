import React from 'react';
import './styles.css';

const Header = (props) => {
    return (
        <form className="header">
            <input className="header-item-input" type="checkbox" />
            <input className="header-input" type="text" />
        </form>
    );
};

export default Header;