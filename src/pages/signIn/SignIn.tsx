import {useEffect, useState} from "react";
import {Alert, Box} from "@mui/material";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
// import {setTokens, setUser} from "state/user";
// import Cookies from "js-cookie";
import {useSelector, useDispatch} from "react-redux";
import {getIsAuthenticated} from "@/state/selectors";
import {theme} from "@/theme";
import {Person, Https} from "@mui/icons-material";
import ButtonComponent from "@/components/button";
import TextInput from "@/components/textinput";
import PasswordInput from "@/components/passwordInput";
import { SignIn, signInInitialValues, signInValidationSchema } from "@/types/signIn";
// import {useLazyGetProfileQuery, useLoginMutation} from "data/accounts";
// import {AccountModel} from "types/accounts";

const SignInPage = () => {
    // const [signIn, {isLoading}] = useLoginMutation();
    // const [getProfile] = useLazyGetProfileQuery()
    const [apiError] = useState("");
    const formik = useFormik({
        initialValues: signInInitialValues,
        validationSchema: signInValidationSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: async (values: SignIn) => {
            // const response = await signIn(values);
            // if ('data' in response) {
            //     Cookies.set('token', response.data.accessToken);
            //     Cookies.set('refreshToken', response.data.refreshToken);
            //     dispatch(setTokens({
            //         refreshToken: response.data.refreshToken,
            //         accessToken: response.data.accessToken,
            //     }));
            //     const res = await getProfile()
            //     if ('data' in res) {
            //         dispatch(setUser(res.data as AccountModel));
            //     }
            //     navigate("/accounts");
            // }
        },
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(getIsAuthenticated);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/accounts')
        }
    }, [])

    const {values, setFieldValue, errors, handleSubmit} = formik;

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                flexDirection: "column",
            }}>
            <Box
                sx={{
                    maxWidth: "448px",
                    width: "100%",
                    border: `1px solid ${theme.palette.secondary.lightGray}`,
                    borderRadius: "18px",
                    padding: "2rem",
                }}>
                {apiError && <Alert severity='error'>{apiError}</Alert>}
                <Box sx={{display: "flex", justifyContent: "center", width: "100%", m: 1}}>
                    <h1>Login</h1>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        flexDirection: "column",
                        gap: "1rem",
                    }}>

                    <TextInput
                        name="email"
                        value={values.email}
                        onChange={(inputValue) => setFieldValue("email", inputValue)}
                        label=""
                        icon={<Person/>}
                        error={errors?.email}
                        placeholder={'Email'}
                        required
                    />
                    <PasswordInput
                        name="password"
                        value={values.password}
                        icon={<Https/>}
                        onChange={(inputValue: string) => {
                            setFieldValue("password", inputValue);
                        }}
                        label=""
                        placeholder={'Password'}
                        error={errors?.password}
                        showIcon
                        required={true}
                    />

                    <ButtonComponent
                        // isLoading={isLoading}
                        type="primary"
                        title={'Login'}
                        onClick={() => handleSubmit()}
                    />
                </Box>
            </Box>

        </Box>
    );
};

export default SignInPage;
