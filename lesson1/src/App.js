import './App.css';
import Message from './Message';

const greeting = 'Hello, World!'

function App() {
  return (
    <div class='container'>
      <Message greeting = {greeting}/>
    </div>
  );
}

export default App;
