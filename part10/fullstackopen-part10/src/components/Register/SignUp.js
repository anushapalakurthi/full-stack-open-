import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-native';
import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';
import initialValues from './utils/initialValues';
import validationSchema from './utils/validationSchema';
import Form from './Form';
function SignUp() {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();
  const onSubmit = useCallback(async ({ username, password }) => {
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  }, [signUp, history.push]);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <Form onSubmit={handleSubmit}/>}
    </Formik>
  )
}

export default SignUp;
