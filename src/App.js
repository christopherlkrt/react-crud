import React, { Fragment } from 'react'
// import { Provider } from 'react-redux'
// import createHistory from 'history/createBrowserHistory'
// import store from './redux/store'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'routes/Home'
import Create from 'routes/Create'
import Edit from 'routes/Edit'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Home} />
        <Route path='/create' component={Create} />
        <Route path='/edit/:id' component={Edit} />
      </Fragment>
    </Router>
  )
}

export default App
