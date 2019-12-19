import React, { Fragment } from 'react'
// import { Provider } from 'react-redux'
// import createHistory from 'history/createBrowserHistory'
// import store from './redux/store'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'routes/Home'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route path='/' component={Home} />
      </Fragment>
    </Router>
  )
}

export default App
