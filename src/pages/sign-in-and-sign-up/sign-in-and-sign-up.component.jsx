import React from "react";
import SignIn from "../../components/Sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import './sign-in-and-sign-up.styles.scss';

const SingInAndSingnUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SingInAndSingnUpPage;