import ReactDOM from 'react-dom'
import * as React from 'react'
import { BrowserRouter } from 'react-router'
import AppManager from "./components/AppManager";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <AppManager />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
