import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import CssBox from './components/CssBox';

function App() {
  return (
    <Router>
      <CssBox></CssBox>
    </Router>
  );
}

export default App;
