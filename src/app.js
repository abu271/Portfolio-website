import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';

// Pages
const Home = lazy(() => import('./pages/home/home'));
const About = lazy(() => import('./pages/about/about'));
const Contact = lazy(() => import('./pages/contact/contact'));
const Projects = lazy(() => import('./pages/projects/projects'));
const NotFound = lazy(() => import('./pages/error/error404'));


const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader loading={true} />}>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/projects' element={ <Projects /> } />
            <Route element={ NotFound } />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;