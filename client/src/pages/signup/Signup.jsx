import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("http://localhost:3899/api/auth/register", {
        username,
        email,
        password,
      });
      if (res) navigate("/signin");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div
      className={
        "container h-100 align-items-center justify-content-center mt-5 bg-light p-2"
      }
    >
      <div className={"row mt-3"}>
        <div className={"col"}></div>
        <div className={"col-7"}>
          <h2>Create account</h2>
        </div>
        <div className={"col"}>
          <a className={"ot-link-primary"} href="/">
            ← Go Back to main site
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={"row w-70 mx-auto"}>
          <div className={"col-6 text-center mb-3"}>
            <p className={"float-start"} style={{ color: "black" }}>
              Enter your full name
            </p>
            <input
              type="text"
              className="ot-form-control w-100"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your Name"
            />
          </div>
          <div className={"col-6 text-center mb-3"}>
            <p className={"float-start"} style={{ color: "black" }}>
              Enter your email
            </p>
            <input
              type="email"
              className="ot-form-control w-100"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            />
          </div>
          <div className={"col-6 text-center mb-3"}>
            <p className={"float-start"} style={{ color: "black" }}>
              Phone number
            </p>
            <input
              type="tel"
              className="ot-form-control w-100"
              placeholder="Your Phone Number"
            />
          </div>
          <div className={"col-6 text-center mb-3"}>
            <p className={"float-start"} style={{ color: "black" }}>
              Enter your birthday (dd/mm/yyyy)
            </p>
            <input
              type="date"
              className="ot-form-control w-100"
              placeholder="Your Birthday"
            />
          </div>
          <div className={"col-6 text-center mb-3"}>
            <p className={"float-start"} style={{ color: "black" }}>
              Choose password with at least 8 characters
            </p>
            <input
              type="password"
              className="ot-form-control w-100"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
            />
          </div>
          <div className={"col-12 mb-3 d-inline-flex align-items-center"}>
            <div className="form-check form-check-inline">
              <input
                className="ot-form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label className="form-check-label">
                I agree to all the <a className={"ot-link-primary"}>Terms</a>{" "}
                and <a className={"ot-link-primary"}>Privacy Policy</a>
              </label>
            </div>
          </div>
          <div className={"col-6 text-center mb-3"}>
            <button type="submit" className={"btn btn-primary w-100"}>
              Create account
            </button>
            {error && <span>something went wrong</span>}
          </div>
          <div className={"col-6 text-center mb-3"}></div>
          <div className={"col-12 text-center"}>
            <p style={{ color: "black" }}>
              Have an account already?{" "}
              <a className={"ot-link-primary"} href="/signin">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
    // <div className="register">
    //   <span className="registerTitle">Register</span>
    //   <form className="registerForm" onSubmit={handleSubmit}>
    //     <label>User Name</label>
    //     <input
    //       type="text"
    //       className="registerInput"
    //       placeholder="Enter your User Name..."
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <label>Email</label>
    //     <input
    //       type="text"
    //       className="registerInput"
    //       placeholder="Enter your email..."
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       placeholder="Enter your password..."
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button className="registerButton" type="submit">
    //       Register
    //     </button>
    //   </form>
    //   <button className="registerLoginButton">
    //     <Link className="link" to={"/login"}>
    //       Login
    //     </Link>
    //   </button>
    //
    // </div>
  );
}
