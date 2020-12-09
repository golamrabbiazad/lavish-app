import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/HomePage/Home';
import Products from './components/pages/Products/Products';
import Footer from './components/pages/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
