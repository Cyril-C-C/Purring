import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import OurCulture from './components/pages/OurCulture';
import About from './components/pages/About';
import Works from './components/pages/Works';
import Team from './components/pages/Team';
import Careers from './components/pages/Careers';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';

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
            {/* <Navbar /> */}
            <section>
              <AddBtn />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/OurCulture' component={OurCulture} />
                <Route exact path='/About' component={About} />
                <Route exact path='/Works' component={Works} />
                <Route exact path='/Team' component={Team} />
                <Route exact path='/Careers' component={Careers} />
                <Route exact path='/Contact' component={Contact} />
              </Switch>
              <Footer />
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
