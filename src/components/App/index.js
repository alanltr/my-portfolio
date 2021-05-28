// == Import npm
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import About from 'src/components/Pages/About';
import Home from 'src/containers/Home';
import Projects from 'src/components/Pages/Projects';
import LegalMentions from 'src/components/Pages/LegalMentions';

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
        <Route path="/legal-mentions">
          <LegalMentions />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
// == Export
export default App;
