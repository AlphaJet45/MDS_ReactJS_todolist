import React from 'react';
import './styles.css';

class Filters extends React.Component {
    render() {
        const { handleFilterTodo, handleFilterCompleted, handleFilterAll } = this.props;
        return (
            <div className="filters">
                <ul>
                    <li onClick={handleFilterAll}>All</li>
                    <li onClick={handleFilterTodo}>Active</li>
                    <li onClick={handleFilterCompleted}>Completed</li>
                </ul>
            </div>
        );
    }
}

export default Filters;