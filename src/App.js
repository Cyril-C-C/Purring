import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import OurCulture from './components/pages/OurCulture';
// import Footer1 from './components/layout/Footer1';

import Spinner from './components/layout/Spinner';
import AddBtn from './components/layout/AddBtn';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  // Page Loader

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Router>
      {!loading ? (
        <Fragment>
          <section>
            <Navbar />
            <section className='container'>
              <AddBtn />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/OurCulture' component={OurCulture} />
              </Switch>
              {/* <Footer2/> */}
            </section>
          </section>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Router>
  );
};

export default App;
