import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-native';
import { Formik } from 'formik';
import useSignIn from '../../hooks/useSignIn';
import initialValues from './utils/initialValues';
import validationSchema from './utils/validationSchema';
import Form from './Form';

SignInContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export function SignInContainer({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <Form onSubmit={handleSubmit}/>}
    </Formik>
  );
}

function SignIn() {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = useCallback(async ({ username, password }) => {
    try {
      await signIn({ username, password });
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  }, [signIn, history.push]);

  return <SignInContainer onSubmit={onSubmit}/>;
}

export default SignIn;
