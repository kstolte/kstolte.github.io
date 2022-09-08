import React from 'react';

import './../util/analytics';
import { ThemeProvider } from './../util/theme';
import { Switch, Route, Router } from './../util/router';

import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

import IndexPage from './index';
import AboutPage from './about';
import ResumeCvPage from './resume-cv';
import ContactPage from './contact';
import NotFoundPage from './404';

const logo = Object.freeze('https://uploads.divjoy.com/logo.svg');
const logoInverted = Object.freeze('https://uploads.divjoy.com/logo-white.svg');

function App(_props) {
  return (
    <ThemeProvider>
      <Router>
        <>
          <Navbar color="default" logo={logo} logoInverted={logoInverted} />
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/resume-cv" component={ResumeCvPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer
            bgColor="light"
            size="normal"
            bgImage=""
            bgImageOpacity={1}
            description="Personal Website for Keith Stolte"
            copyright={`© ${new Date().getFullYear()} Keith Stolte`}
            logo={logo}
            logoInverted={logoInverted}
            sticky={false}
          />
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
