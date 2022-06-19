import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, sigInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit =async (event) => {
    event.preventDefault();
    const {email,password}=this.state;

    try {
      await auth.signInWithEmailAndPassword(email,password)
      this.setState({ email: "", password: "" });

    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have a count</h2>
        <span>sign in using email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={sigInWithGoogle} isGoogleSignIN>
              {" "}
              Sign In with google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
