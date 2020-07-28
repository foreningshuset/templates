import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';

import { Navigation, IRoute } from './components/Navigation';

const Home = lazy(() => import('./routes/Home'));
const Blog = lazy(() => import('./routes/Blog'));
const NotFound = lazy(() => import('./routes/NotFound'));

const App = (): JSX.Element => {
    const routes: IRoute[] = [
      {
        path: '/',
        name: 'Hem'
      },
      {
        path: 'blog',
        name: 'Blog'
      }
    ];

    return (
      <HashRouter>
        <header>
          <div className="container p-3 d-flex">
            <svg width="1rem" height="1rem" viewBox="0 0 16 16" className="bi bi-three-dots ml-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg>
          </div>
        </header>

        <main className="container p-3">         
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Suspense>
        </main>
        
        <footer className="navbar fixed-bottom navbar-dark navbar-expand" style={{background: '#20232a'}}>
          <div className="container">
            <NavLink to="/" className="navbar-brand">Templates</NavLink>

            <Navigation routes={routes} />
          </div>
        </footer>
      </HashRouter>
    );
};

export default App;

