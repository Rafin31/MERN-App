import React, { useState } from 'react';
import './SignIn.css'
import { FaUserAlt, FaEnvelope, FaKey } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import Helmet from 'react-helmet';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { async } from '@firebase/util';


const SignIn = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [
        sendEmailVerification,
        sending,
        EmailVerificationError
    ] = useSendEmailVerification(auth);


    const [toggle, setToggle] = useState(true)
    const nevigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")
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

    const verify = async () => {
        await sendEmailVerification()
        nevigate("/login")

    }

    const handleFormChange = (event) => {
        event.preventDefault();
        if (toggle) { //signUp

            SetSignUpCredentials({ ...SignUpCredentials, [event.target.name]: event.target.value });
            console.log(SignUpCredentials);

        } else { //signIn
            SetSignInCredentials({ ...SignInCredentials, [event.target.name]: event.target.value });
            console.log(SignInCredentials);
        }

    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // console.log(SignUpCredentials.name);
        if (toggle) {
            await createUserWithEmailAndPassword(SignUpCredentials.email, SignUpCredentials.password)
            // console.log(SignUpCredentials.email, SignUpCredentials.password);
        }
    }

    if (error || EmailVerificationError) {
        setErrorMessage("Something Went Wrong")
        console.log(errorMessage);
    }
    if (loading) {
        console.log("Loading");
    }
    if (sending) {
        toast.success("Email Sent")
    }
    if (user) {
        if (user?.user?.providerData[0]?.providerId === "password") {
            verify()
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
                                <form action="" onKeyUp={(e) => handleFormChange(e)} onSubmit={(e) => handleFormSubmit(e)}>

                                    {
                                        toggle ?
                                            <>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><FaUserAlt /></span>
                                                    </div>
                                                    <input name="name" required autoComplete='off' type="text" class="form-control" placeholder="* Your name" aria-label="*Your name" aria-describedby="basic-addon1" />
                                                </div>
                                            </> :
                                            " "
                                    }


                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1"><FaEnvelope /></span>
                                        </div>
                                        <input name="email" required autoComplete='off' type="email" class="form-control" placeholder="* Your Email" aria-label="Email" aria-describedby="basic-addon1" />
                                    </div>

                                    <div class="input-group mb-5">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1"><FaKey /></span>
                                        </div>
                                        <input name="password" required autoComplete='off' type="password" class="form-control" placeholder="*Your Password" aria-label="Password" aria-describedby="basic-addon1" />
                                    </div>

                                    <div className="submit_button">
                                        <button className="customButton w-100" type='submit'>{toggle ? "Sign Up" : "Log in"}</button>
                                    </div>


                                    <div class="orWrapper my-4">
                                        <p class="or">or</p>
                                    </div>

                                    <button className="googleButton w-100">
                                        <img src="Assets/Icons/google-logo.png" className='googlIcon' alt="icon" srcset="" />
                                        Google
                                    </button>

                                    <div className="form__instruction text-center">
                                        {
                                            toggle ? " " :
                                                <>
                                                    <p className="form_text mt-3">
                                                        Forget Password? <span><Link to={" "}>Reset Password Here</Link></span>
                                                    </p>
                                                </>
                                        }

                                        <p className="form_text mt-3 ">{toggle ? "Already Signed up? " : "Not Signed up yet? "} <span className='signUpLink'><Link to={""} onClick={toggleFunction}> {toggle ? "Sign in " : " Sign up  "} </Link></span> here.</p>
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

