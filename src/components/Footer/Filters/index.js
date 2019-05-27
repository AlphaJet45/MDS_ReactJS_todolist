import React from 'react';
import './styles.css';

class Filters extends React.Component {
    render() {
        return (
            <div className="filters">
                <ul>
                    <li>All</li>
                    <li>Active</li>
                    <li>Completed</li>
                </ul>
            </div>
        );
    }
}

export default Filters;