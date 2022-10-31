import React from 'react';
import { View } from 'react-native';
import { Redirect, Route, Switch } from 'react-router-native';
import AppBar from '../AppBar';
import RepositoryList from '../ListRepositary';
import LogIn from '../LogIn';
import Register from '../Register';
import ViewRepositary from '../ViewRepositary';
import FormReview from '../FormReview';
import MyReviews from '../MyReview';
import styles from './mainStyles'
function Main() {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>
        <Route path="/" exact>
          <RepositoryList/>
        </Route>
        <Route path="/LogIn" exact>
          <LogIn/>
        </Route>
        <Route path="/Register" exact>
          <Register/>
        </Route>
        <Route path="/repo/:id" exact>
          <ViewRepositary/>
        </Route>
        <Route path="/reviews" exact>
          <FormReview/>
        </Route>
        <Route path="/myReview" exact>
          <MyReviews/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </View>
  )
}
export default Main;
