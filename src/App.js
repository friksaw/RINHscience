import React from "react";
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import DashboardDepartment from "./department/pages/DashboardDepartment";
import DashboardEmployee from "./employee/pages/DashboardEmployee";
import DashboardBlog from "./blog/pages/DashboardBlog";


function App() {
  return (
      <BrowserRouter>
        <Route exact path="/department" component={DashboardDepartment}/>
        <Route exact path="/employee" component={DashboardEmployee}/>
        <Route exact path="/blog" component={DashboardBlog}/>
      </BrowserRouter>
  );
}

export default App;
