import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit =async (event) => {
    event.preventDefault();
    const {displayName,email,password,confirmPassword} = this.state;
    if ( confirmPassword !== password ) {
        alert('password don\'t match');
        return;
    }

    try {
        const {user} = await auth.createUserWithEmailAndPassword(email,password);
        await createUserProfileDocument(user , {displayName});  
        this.setState({

            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""           
        });  

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
      <div className="sign-up">
        <h2>I don't have a count</h2>
        <span>sign in using email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="displayName"
            onChange={this.handleChange}
            value={this.state.displayName}
            label="displayName"
            required
          />

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

          <FormInput
            name="confirmPassword"
            type="confirmPassword"
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
            label="confirmPassword"
            required
          />

          <div className="buttons">
            <CustomButton type="submit"> Sign Up </CustomButton>
          </div>

        </form>

      </div>
    );
  }
}

export default SignUp;
