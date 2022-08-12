import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './component/navbar/Navbar';
import Search from './component/search/Search';
import './App.css';

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        <Search />
      </div>
    </MuiThemeProvider>

  );
}

export default App;
