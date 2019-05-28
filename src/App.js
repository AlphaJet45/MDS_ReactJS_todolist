import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Item from './components/Item';

class App extends React.Component {
  state = {
    itemList: [
      {
        selected: false,
        name: 'Faire les courses',
        display: true,
      },
      {
        selected: false,
        name: 'Sport',
        display: true,
      },
      {
        selected: false,
        name: 'Factures',
        display: true
      }
    ]
  }

  handleSelect = (itemId) => {
    // this.setState({itemList: 'fefefe'});
    const { itemList } = this.state;
    itemList[itemId].selected = !itemList[itemId].selected;
    this.setState({ itemList: itemList });
  }

  handleFilterTodo = (event) => {
    event.preventDefault();

    const { itemList } = this.state;
    itemList.forEach(element => {
      const item = element;
      item.display = item.selected === false;
      return item;
    });
  }

  // true && expression = expression
  // false && expression = false


  render() {
    const { itemList } = this.state;

    return (
      <div className="App">
        <div className="title">Todo List</div>

        <Header />

        {itemList.map((item, index) =>
          // if (item.display === true) { ... }
          item.display === true && 
            <Item
              key={index}
              item={item}
              handleSelect={() => this.handleSelect(index)}
            />
        )}

        <Footer
          itemsRemaining={itemList.filter(item => item.selected === false).length}
          handleFilterTodo={this.handleFilterTodo}
        />
      </div>
    );
  }
}



export default App;



// function App() {
//   return (
//     <div className="App">
//       <div className="title">
//         <h1>Todo List</h1>
//       </div>
//     </div>
//   );
// }

// Similaire function App() en ES6
// const App = (props) => {
// };

// export default App;
