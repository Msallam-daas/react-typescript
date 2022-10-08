import React ,{useState} from 'react';
import Container from './Container';
import Generic from './Generic';
import Button from './Button';
import './App.css';


function App() {
  // Generic definition <>
  const [counter,setcounter]=useState<number>(0);
  
  return (
    <div className="App">
     <Container title='TypeScript' number={5}>
      <h4>History</h4>
     </Container>
     <h4>Features</h4>
     <Generic 
     items={["Compatibility with JavaScript","Type annotations","Declaration files"]} 
     render={(item) =><li>{item}</li>}
     ></Generic>
    <Button title="clickme" onClick={(event)=> setcounter(counter+1)}></Button>
  <p>{counter}</p>  
    </div>
  );
}

export default App;
