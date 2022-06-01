import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./login.css";

export default function Signin() {
  const navigate = useNavigate();

  const userRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:3899/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      if (res) navigate("/settings");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className="h-100 align-items-center justify-content-center mt-5 bg-light p-2">
      <div className={"container"}>
        <div className={"row mt-3"}>
          <div className={"col"}></div>
          <div className={"col-7"}>
            <h2>Sign In</h2>
          </div>
          <div className={"col"}>
            <a className={"ot-link-primary"} href="/">
              ← Go Back to main site
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={"row w-35 mx-auto"}>
            <div className={"col-12 text-center mb-3"}>
              <p className={"float-start"} style={{ color: "black" }}>
                Enter your full name
              </p>
              <input
                type="password"
                className="ot-form-control w-100"
                id="exampleInputPassword1"
                placeholder="Your Name"
                ref={userRef}
              />
              <p className={"float-start"} style={{ color: "black" }}>
                Password
              </p>
              <input
                type="password"
                className="ot-form-control w-100"
                id="exampleInputPassword1"
                placeholder="Password"
                ref={passwordRef}
              />
              <button
                className={"btn w-100 btn-primary mt-4"}
                type="submit"
                disabled={isFetching}
              >
                Sign In
              </button>
              <p className={"mt-3 ot-text-dark"}>
                Don't have an account already?{" "}
                <a className={"ot-link-primary"} href="/signup">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
