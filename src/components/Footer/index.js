import React from 'react';
import Filters from './Filters';
import './styles.css';


const Footer = (props) => {
    const { itemsRemaining, handleFilterTodo, handleFilterCompleted, handleFilterAll } = props;

    return (
        <div className="footer">
            <div className="footer-tasks-left">{itemsRemaining} tasks left.</div>
            <Filters 
                handleFilterTodo={handleFilterTodo}
                handleFilterCompleted={handleFilterCompleted}
                handleFilterAll={handleFilterAll}
            />
            <div className="footer-reset-items">Reset</div>
        </div>
    );
}

export default Footer;