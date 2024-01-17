import "./SignUp.css";
import { google } from "../../assets";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <section className="auth">
      <div className="container-auth">
        <h3>Create account</h3>
        <p>to continue to VidTub</p>
        <div className="google">
          <img src={google} alt="" />
          <span>Continue to Google</span>
        </div>
        <p className="or">or</p>

        <div className="inputs">
          <label htmlFor="">Fullname</label>
          <input type="text" />
          <label htmlFor="">Email address</label>
          <input type="email" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <button className="continueBtn">CONTINUE</button>
          <p className="account">
            Alredy have an Account? <Link to={"/auth/signin"}>Sing up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
