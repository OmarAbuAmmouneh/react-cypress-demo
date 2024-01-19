import * as yup from 'yup';

export type SignInResponse = {
  accessToken: string,
  refreshToken: string,
}

export type SignIn = {
  email: string,
  password: string,
  refreshToken?: string
}

export const signInValidationSchema = yup.object({
  email: yup.string().email('Please enter a valid email address').required('Please complete this field'),
  password: yup.string().required("Please complete this field"),
});


export const signInInitialValues: SignIn = {
  email: "",
  password: "",
}
