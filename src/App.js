import Header from './header/Header';
import './App.css';
import TinderCards from './tinderCard/TinderCards';
import SwipeButtons from './swipeButtons/SwipeButtons';

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
