import React from 'react';
import './styles.css';

class Filters extends React.Component {
    state = {
        selected: 'all',
    }

    handleFilter = event => filter => {
        const { handleFilterAll, handleFilterTodo, handleFilterCompleted } = this.props;
        console.log(filter, event);
        if (filter === 'all') handleFilterAll(event);
        if (filter === 'todo') handleFilterTodo(event);
        if (filter === 'completed') handleFilterCompleted(event);

        return this.setState({ selected: filter });
    }

    render() {
        // const { handleFilterTodo, handleFilterCompleted, handleFilterAll } = this.props;
        const { selected } = this.state;

        return (
            <div className="filters">
                <ul>
                    <li className={selected === 'all' ? 'selected' : null}
                        onClick={(event) => { 
                            // const etape1 = handleFilterAll('all');
                            // const etape2 = etape1(event);
                            this.handleFilter(event)('all') }}>
                        All
                    </li>
                    <li className={selected === 'todo' ? 'selected' : null}
                        onClick={(event) => { this.handleFilter(event)('todo') }}>
                        Active
                    </li>
                    <li className={selected === 'completed' ? 'selected' : null}
                        onClick={(event) => { this.handleFilter(event)('completed') }}>
                        Completed
                    </li>
                </ul>
            </div>
        );
    }
}

export default Filters;