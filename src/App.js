import logo from './logo.svg';
import './App.css';
import TextInputWithFocusButton from './components/TextInputWithFocusButton'
import Counter from './components/Counter'
import RenderCount from './components/RenderCount'

function App() {
  return (
    <div className="App">
      <TextInputWithFocusButton />
      <br/>
      <RenderCount />
    </div>
  );
}

export default App;
