import './App.scss'
import { useState } from 'react';
import UserCard from './components/UserCard/UserCard';

function App() {
  
  const [isContentShown, setIsContentShown] = useState(true);
  return (
    <>
      <button onClick={() => setIsContentShown(!isContentShown)}>Toggle</button>
      {isContentShown && <UserCard />}
    </>
  );
}

export default App;