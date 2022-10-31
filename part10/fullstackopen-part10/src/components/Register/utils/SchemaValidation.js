import * as validit from 'validit';
const validationSchema = validit.object().shape({
  username: validit
    .string()
    .min(1)
    .max(30)
    .required('Repository owner name is required'),
  password: validit
    .string()
    .min(5)
    .max(30)
    .required('Password is required'),
  passwordConfirm: validit
    .string()
    .oneOf([validit.ref('password'), null],'Passwords do not match')
    .required('Password confirmation is required'),
});
export default validationSchema;
