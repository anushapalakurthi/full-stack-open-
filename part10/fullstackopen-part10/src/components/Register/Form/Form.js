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
        />
      </View>
      <View style={styles.inputContainer}>
        <FormikTextInput
          style={styles.input}
          name="password"
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <FormikTextInput
          style={styles.input}
          name="passwordConfirm"
          placeholder="Password confirmation"
          secureTextEntry
        />
      </View>
      <Button title="Sign up" onPress={onSubmit}/>
    </View>
  );
}

export default Form;
