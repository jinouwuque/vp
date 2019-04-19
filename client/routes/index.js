import React from 'react';
import { Route, Switch } from "react-router-dom";
import { createAction } from 'redux-actions';
import Color from '../modules/color';
import About from '../modules/about';
import New from '../modules/newcolor';

class Routes extends React.Component {
  constructor(props){
    super(props)
    const { dispatch } = this.props;
    const ac0 = createAction('color/get');
    dispatch(ac0());

    const ac1 = createAction('user/get');
    dispatch(ac1());
  }

  render(){
    const { dispatch } = this.props;
    return <Switch>
      <Route exact path="/" component={Color} />
      <Route path="/popular" component={Color} />
      <Route path="/color/:id" component={Color} />
      <Route path="/like" render={() => {
        const ac = createAction('color/getUserColor');
        dispatch(ac('myLiked'));
        return <Color />
      }} />
      <Route path="/portfolio" render={() => {
        const ac = createAction('color/getUserColor');
        dispatch(ac('myPortfolio')); //todo
        return <Color />
      }} />
      <Route path="/about" component={About} />
      <Route path="/new" component={New} />
    </Switch>
  }
}

export default Routes;