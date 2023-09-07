import { useState } from 'react';
import Input from './Input'
import Square from './Square';
function App() {
  const [colorVal,setColorVal] = useState('');
  const [hexVal,setHexVal] = useState('');
  return (
   <div className="App">
   <Square colorVal={colorVal} hexVal={hexVal}/>
   <Input colorVal={colorVal} setColorVal={setColorVal} setHexVal={setHexVal}/>
   </div>
  );
}

export default App;
