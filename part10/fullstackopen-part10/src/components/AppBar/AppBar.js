import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Link } from 'react-router-native';
import useAuthorized from '../../hooks/useAuthorized';
import RowView from '../RowView';
import AppBarTab from './AppBarTab';
import styles from './appBarStyles';
function AppBar() {
  const { isAuthorized, signOut } = useAuthorized();
  return (
    <RowView style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" component={AppBarTab} title="Repository"/>
        <Text style={styles.separator}>/</Text>
        {isAuthorized ? (
          <>
            <Link to="/reviews" component={AppBarTab} title="Create a new review"/>
            <Text style={styles.separator}>/</Text>
            <Link to="/myReview" component={AppBarTab} title="Our reviews"/>
            <Text style={styles.separator}>/</Text>
            <AppBarTab title="Sign Out" onPress={signOut}/>
          </>
        ) : (
          <>
            <Link to="/signIn" component={AppBarTab} title="SignIn"/>
            <Text style={styles.separator}>/</Text>
            <Link to="/signUp" component={AppBarTab} title="SignUp"/>
          </>
        )}
      </ScrollView>
    </RowView>
  )
}
export default AppBar;
