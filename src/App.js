import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="title">Todo List</div>

        <Header />

        <Footer />
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
