import "./SignIn.css";
import { google } from "../../assets";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <section className="auth">
      <div className="container-auth">
        <h3>Sign in</h3>
        <p>to continue to VidTub</p>
        <div className="google">
          <img src={google} alt="" />
          <span>Continue to Google</span>
        </div>
        <p className="or">or</p>

        <div className="inputs">
          <label htmlFor="">Email address</label>
          <input type="email" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <button className="continueBtn">CONTINUE</button>
          <p className="account">
            Don't have an Account? <Link to={"/auth/signup"}>Sing up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default SignIn;
