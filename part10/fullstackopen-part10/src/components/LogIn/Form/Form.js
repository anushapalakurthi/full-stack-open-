import React from 'react';
import PropTypes from 'prop-types';
import { Button, View } from 'react-native';
import FormikTextInput from '../../FormikTextInput';
import styles from './formStyles';

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function Form({ onSubmit }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FormikTextInput
          style={styles.input}
          name="username"
          placeholder="Username"
          testID="usernameField"
        />
      </View>
      <View style={styles.inputContainer}>
        <FormikTextInput
          style={styles.input}
          name="password"
          placeholder="Password"
          secureTextEntry
          testID="passwordField"
        />
      </View>
      <Button title="Sign in" onPress={onSubmit} testID="submitButton"/>
    </View>
  );
}

export default Form;
