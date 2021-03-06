import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import Home from './router/Home/index';
import Blog from './router/Blog/index';
import About from './router/About/index';
import Contact from './router/Contact/index';
import Projects from './router/Projects/index';
import { Router, Route, browserHistory} from 'react-router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router history = {browserHistory}>
      <Route path = "/" component = {Home} />
      <Route path = "blog" component = {Blog} />
      <Route path = "projects" component = {Projects} />
      <Route path = "about-me" component = {About} />
      <Route path = "contact" component = {Contact} />
  </Router>,
 document.getElementById('root'));
serviceWorker.unregister();
