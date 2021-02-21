import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import '../assets/style/main.scss'
import EmployeesList from '../containers/employees-list'
import ModalContainer from '../containers/modal';
import SearchContainer from '../containers/search-container';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="container">
          <SearchContainer />
          <EmployeesList />
        </div>
        <ModalContainer />
      </Router>
    </React.Fragment>

  );
}

export default App;
