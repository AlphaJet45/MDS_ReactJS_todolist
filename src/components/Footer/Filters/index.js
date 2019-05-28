import React from 'react';
import './styles.css';

class Filters extends React.Component {
    render() {
        const { handleFilterTodo } = this.props;
        return (
            <div className="filters">
                <ul>
                    <li>All</li>
                    <li onClick={handleFilterTodo}>Active</li>
                    <li>Completed</li>
                </ul>
            </div>
        );
    }
}

export default Filters;