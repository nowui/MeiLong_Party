import React, { PropTypes } from 'react'
import { Router, Route, IndexRedirect } from 'react-router'
import NotFound from '../components/NotFound'
import ComponentIndex from '../components/Index'
import Component0Index from '../components/0/Index'
import Component0Detail from '../components/0/Detail'
import Component03Index from '../components/0/3/Index'
import Component03Detail from '../components/0/3/Detail'
import Component03Content from '../components/0/3/Content'
import Component1Index from '../components/1/Index'
import Component2Index from '../components/2/Index'
import Component2Detail from '../components/2/Detail'
import Component2Content from '../components/2/Content'
import Component3Index from '../components/3/Index'
import Component3Detail from '../components/3/Detail'
import Component4Index from '../components/4/Index'
import Component4Detail from '../components/4/Detail'

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/">
    	<IndexRedirect to="index" />
        <Route path="index" component={ComponentIndex}></Route>
        <Route path="0/index" component={Component0Index}></Route>
        <Route path="0/detail/:id" component={Component0Detail}></Route>
        <Route path="0/3/index" component={Component03Index}></Route>
        <Route path="0/3/detail/:id" component={Component03Detail}></Route>
        <Route path="0/3/content" component={Component03Content}></Route>
        <Route path="1/index" component={Component1Index}></Route>
        <Route path="2/index" component={Component2Index}></Route>
        <Route path="2/detail/:id" component={Component2Detail}></Route>
        <Route path="2/content/:id" component={Component2Content}></Route>
        <Route path="3/index" component={Component3Index}></Route>
        <Route path="3/detail/:id" component={Component3Detail}></Route>
        <Route path="4/index" component={Component4Index}></Route>
        <Route path="4/detail/:id" component={Component4Detail}></Route>
        <Route path="4/content" component={Component03Content}></Route>
	    <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>

Routes.propTypes = {
  history: PropTypes.any,
}

export default Routes
