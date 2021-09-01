
import './App.css';
import Header from './Header';

function App() {
  return (
    // BEM naming convention lower case app

    // Block Element Modifier
    <div className="app">
    <Header />
      
      <h1 className='app__title'>This is a title</h1>
      
    </div>
  );
}

export default App;
