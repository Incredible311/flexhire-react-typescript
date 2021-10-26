import React from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { renderRoutes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">

      <Router history={history}>
        <BrowserRouter>{renderRoutes()}</BrowserRouter>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
