import React from "react";
import './signin.styles.scss'
import CustomButton from '../customButton/customButton.component'
import FormInput from '../form-input/form-input.component'
//  bring in our singInWithGoogle from the firebase utils
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        

        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: '', password: '' });
        } catch (error) {
          console.log(error);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }


    render() {
        return (
          <div className="sign-in">
            <h2>I already have an account </h2>
            <span>Sign in with your email password</span>

            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                label='email'
                required
              />
              <FormInput
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                label='password'
                required
              />
              <div className="buttons">
              <CustomButton type="submit">Sign in</CustomButton>
              {/* onClick call the signingwithgoogle from the firebase util */}
              <CustomButton onClick={signInWithGoogle} isGoogleSignin>Sign in with Google</CustomButton>
              </div>
            </form>
          </div>
        );
    }
}

export default SignIn