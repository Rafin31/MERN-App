import React, { useState } from 'react';
import './SignIn.css'
import { FaUserAlt, FaEnvelope, FaKey } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Helmet from 'react-helmet';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';




const SignIn = () => {

    const [
        createUserWithEmailAndPassword,
        registrationUser,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [
        sendEmailVerification,
        sending,
        EmailVerificationError
    ] = useSendEmailVerification(auth);

    const [signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        SignInUser,
        SignInloading,
        SignInerror,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail,
        PasswordResetSending,
        PasswordResetError
    ] = useSendPasswordResetEmail(auth);


    let navigate = useNavigate();
    let location = useLocation();
    const [toggle, setToggle] = useState(false)
    let customErrorMessage



    const [SignUpCredentials, SetSignUpCredentials] = useState({

        name: "",
        email: "",
        password: "",

    })
    const [SignInCredentials, SetSignInCredentials] = useState({

        email: "",
        password: "",

    })

    const toggleFunction = () => {
        setToggle(!toggle)
    }


    const handleFormChange = (event) => {
        event.preventDefault();
        if (toggle) { //signUp

            SetSignUpCredentials({ ...SignUpCredentials, [event.target.name]: event.target.value });
            // console.log(SignUpCredentials);

        } else { //signIn
            SetSignInCredentials({ ...SignInCredentials, [event.target.name]: event.target.value });
            console.log(SignInCredentials);
        }

    }

    const getJWT = async (email) => {

        await fetch('https://desolate-badlands-90041.herokuapp.com/organicFood/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then(res => res.json())
            .then(data => localStorage.setItem('accessToken', JSON.stringify(data)))
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (toggle) { //sign up
            if (SignUpCredentials.email !== " " && SignUpCredentials.password !== " ") {
                await createUserWithEmailAndPassword(SignUpCredentials.email, SignUpCredentials.password)
                getJWT(SignUpCredentials.email)
                await sendEmailVerification()

            } else {
                customErrorMessage = <p className='text-center text-danger mt-0'>* Filed can not be empty</p>
                return
            }
        } else { //sign in
            await signInWithEmailAndPassword(SignInCredentials.email, SignInCredentials.password);
            const email = SignInCredentials.email
            //JWT token generate

            getJWT(email)

        }
    }

    const handleGoogleSignUp = () => {

        signInWithGoogle()
        getJWT(" ")

    }

    const resetPasswordHandle = async () => {

        if (SignInCredentials.email !== "" && SignInCredentials.email.includes("@")) {

            await sendPasswordResetEmail(SignInCredentials.email);

        } else {

            toast.error("Put a Valid Email Address")
        }



    }



    if (error || EmailVerificationError || googleError || PasswordResetError) {

        customErrorMessage = <p className='text-center text-danger mt-0'>{!PasswordResetError ? "*Something Went Wrong" : "User Doesn't Exist"}</p>
    }
    if (SignInerror) {
        customErrorMessage = <p className='text-center text-danger mt-0'>*Wrong Credentials</p>
    }
    if (loading || googleLoading || SignInloading) {
        console.log("Loading");
    }
    if (sending) {
        toast.warning("A Email Verification Link is sent to your email")
    }
    if (PasswordResetSending) {
        toast.warning("A Password Reset Link is sent to your email")
    }
    if (registrationUser || googleUser || SignInUser) {

        const res = localStorage.getItem("accessToken")


        if (res) {

            let from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true })

        }


    }



    return (
        <>

            <Helmet>
                <title> {!toggle ? "Sign Up" : "Log in"} | Organic Food </title>
            </Helmet>

            <div className="container-fluid login_wrapper">
                <div className="container sign_Form ">
                    <div className="row justify-content-center align-items-center loginFormContainer" data-aos="fade-up">
                        <div className="col-12 col-lg-6">
                            <div className="card shadow-sm rounded py-3 px-5 ">
                                <div className="card_header_container">
                                    <p className="card_header text-center">{toggle ? "Sign Up" : "Log in"}</p>
                                </div>
                                <form autocomplete="nope" action="" onKeyUp={(e) => handleFormChange(e)} onSubmit={(e) => handleFormSubmit(e)}>

                                    {
                                        toggle ?
                                            <>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><FaUserAlt /></span>
                                                    </div>
                                                    <input name="name" required type="text" class="form-control" placeholder="* Your name" aria-label="*Your name" aria-describedby="basic-addon1" />
                                                </div>
                                            </> :
                                            " "
                                    }


                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1"><FaEnvelope /></span>
                                        </div>
                                        <input name="email" required type="email" class="form-control" placeholder="* Your Email" aria-label="Email" aria-describedby="basic-addon1" />
                                    </div>

                                    <div class="input-group mb-5">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1"><FaKey /></span>
                                        </div>
                                        <input name="password" autocomplete="false" required autoComplete='off' type="password" class="form-control" placeholder="*Your Password" aria-label="Password" aria-describedby="basic-addon1" />
                                    </div>

                                    <div className="error-message">
                                        {customErrorMessage}
                                    </div>

                                    <div className="submit_button">
                                        {
                                            loading || SignInloading ?

                                                <button className="customButton w-100" disabled >

                                                    <div class="spinner-border spinner-border-sm" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>

                                                </button>

                                                :
                                                <button className="customButton w-100" type='submit'>

                                                    {toggle ? "Sign Up" : "Log in"}

                                                </button>
                                        }
                                    </div>


                                    <div class="orWrapper my-4">
                                        <p class="or">or</p>
                                    </div>


                                    {
                                        googleLoading ?

                                            <button className="customButton w-100" disabled >

                                                <div class="spinner-border spinner-border-sm" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>

                                            </button>

                                            :
                                            <button className="googleButton w-100" onClick={() => handleGoogleSignUp()}>
                                                <img src="Assets/Icons/google-logo.png" className='googlIcon' alt="icon" srcset="" />
                                                Google
                                            </button>
                                    }

                                    <div className="form__instruction text-center">
                                        {
                                            toggle ? " " :
                                                <>
                                                    <p className="form_text mt-3">
                                                        Forget Password? <span><Link
                                                            onClick={() => resetPasswordHandle()}
                                                            to={""}>Reset Password Here</Link></span>
                                                    </p>
                                                </>
                                        }

                                        <p className="form_text mt-3 ">{toggle ? "Already Signed up? " : "Not Signed up yet? "} <span className='signUpLink'><Link to={""} onClick={() => toggleFunction()}> {toggle ? "Sign in " : " Sign up  "} </Link></span> here.</p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;

