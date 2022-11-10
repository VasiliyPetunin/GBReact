import './App.css';
import Chat from './Chat';
import MessageList from './MessageList';

function App() {
  return (
    <>
    
      <div className='container'>
        <div className='chatComponent'>
          <Chat />
        </div>
        <div className='messageComponent'>
          <MessageList />
        </div>
      </div>

    </>
  );
}

export default App;
