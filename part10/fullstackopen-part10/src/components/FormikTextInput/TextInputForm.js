import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import TextInput from '../TextInput';
import Text from '../Text';
import styles from './TextInputStyles';
FormikTextInput.propTypes = {
  name: PropTypes.string.isRequired,
};
function FormikTextInput({ name, ...props }) 
{
  const [field, meta, helpers] = useField(name);
  const showError = useMemo(() => meta.touched && meta.error, [meta.touched, meta.error]);
  const onChange = useCallback(value => helpers.setValue(value), [helpers.setValue]);
  const onBlur = useCallback(() => helpers.setTouched(true), [helpers.setTouched]);
  return (
    <>
      <TextInput
        onChangeText={onChange}
        onBlur={onBlur}
        value={field.value}
        error={showError}
        {...props}/>
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );}
export default FormikTextInput;
