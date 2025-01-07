import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <ShoppingCart />
    </div>
  );
}

export default App;