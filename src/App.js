import './App.css';
import React from 'react';
import { useRef, useState } from 'react';
import engToHeb from './engToheb';
// import { useParams } from 'react-router-dom';




function App() {
  const inputRef = useRef(null);
  const [eng, setEng] = useState('');
  function handleClick() {
    console.log('text: '+inputRef.current.value)
    setEng(engToHeb(inputRef.current.value))
  }


  return (
    <div className="App">
      <header className="App-header">
        <input type='text' id='heb' ref={inputRef} onChange={handleClick} />
        
        <button className="btn"
          onClick={() => navigator.clipboard.writeText(eng)}>{(eng)}</button>
      </header>
    </div >
  );
}




// function url_info(eng) {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { id: param } = useParams();
//   let text = '';
//   if (param === '') {
//     text = param;
//   } else { text = eng; }
//   return (
//     <div>
//       <h3> {text}</h3>
//     </div>
//   );
// }

export default App;
