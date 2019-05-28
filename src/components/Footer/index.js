import React from 'react';
import Filters from './Filters';
import './styles.css';


const Footer = (props) => {
    const { itemsRemaining, handleFilterTodo } = props;

    return (
        <div className="footer">
            <div className="footer-tasks-left">{itemsRemaining} tasks left.</div>
            <Filters handleFilterTodo={handleFilterTodo}/>
            <div className="footer-reset-items">Reset</div>
        </div>
    );
}

export default Footer;