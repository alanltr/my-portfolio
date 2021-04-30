// == Import npm
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import About from 'src/components/About';
import Home from 'src/components/Home';
import Projects from 'src/components/Projects';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
// == Export
export default App;
