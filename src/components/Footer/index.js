import React from 'react';
import Filters from './Filters';
import './styles.css';


const Footer = (props) => {
    const {itemsRemaining} = props;

    return (
        <div className="footer">
            <div className="footer-tasks-left">{itemsRemaining} tasks left.</div>
            <Filters />
            <div className="footer-reset-items">Reset</div>
        </div>
    );
}

export default Footer;