import logo from './logo.svg';
import './App.css';
import TextInputWithFocusButton from './components/TextInputWithFocusButton'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <TextInputWithFocusButton />
      <Counter />
    </div>
  );
}

export default App;
