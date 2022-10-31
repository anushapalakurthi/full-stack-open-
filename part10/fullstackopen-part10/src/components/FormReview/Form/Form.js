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
          name="ownerName"
          placeholder="Repository owner name"
        />
      </View>
      <View style={styles.inputContainer}>
        <FormikTextInput
          style={styles.input}
          name="repositoryName"
          placeholder="Repository name"
        />
      </View>
      <View style={styles.inputContainer}>
        <FormikTextInput
          style={styles.input}
          name="rating"
          placeholder="Rating between 0 and 100"
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        <FormikTextInput
          style={styles.input}
          name="text"
          placeholder="Review"
          multiline
        />
      </View>
      <Button title="Create a review" onPress={onSubmit}/>
    </View>
  );
}

export default Form;
