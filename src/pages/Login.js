import React, { useEffect, useState } from "react";
import loginImg from "../assets/login-img.b36c8fbd17b96828d9ba0900b843d21c.svg";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import GoogleImg from "../assets/google.501a643df97d93ccdcec41a06b4947e4.svg";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import { useAuth } from "../hooks/useAuth";
import { useAuthContext } from "../context/AuthContext";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialValues);

  const { user } = useAuthContext();

  const { loading, error, login } = useAuth();

  const handlelogin = async (e) => {
    e.preventDefault();
    await login(values.email, values.password);
    console.log("logged in");
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    console.log("error occured");
  }

  return (
    <>
      <div id="root">
        <div id="login-layout" className="theme-indigo">
          <div className="main p-2 py-3 p-xl-5">
            <div className="body d-flex p-0 p-xl-5">
              <div className="container-xxl flex-row d-flex">
                <div className="row g-0">
                  <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center rounded-lg auth-h100 flex-column">
                    <div style={{ maxWidth: "25rem" }}>
                      <div className="text-center mb-5">
                        <BeenhereIcon></BeenhereIcon>
                      </div>
                    </div>
                    <div className="mb-5">
                      <h2 className="color-900 text-center">
                        Human Resource Management System Let's Manage Better
                      </h2>
                    </div>
                    <div>
                      <img src={loginImg} alt="login-img"></img>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                  <div
                    className="w-100 p-3 p-md-5 card border-0 bg-dark text-light"
                    style={{ maxWidth: "32rem" }}
                  >
                    <form
                      onSubmit={handlelogin}
                      className="row g-1 p-3 p-md-4 flex-column"
                    >
                      <div className="col-12 text-center mb-1 mb-lg-5">
                        <h1>Sign in</h1>
                        <span>Free access to our dashboard.</span>
                      </div>
                      <div className="col-12 text-center mb-4">
                        <a
                          className="btn btn-lg btn-outline-secondary btn-block"
                          href="#"
                        >
                          <span className="d-flex justify-content-center align-items-center">
                            <img
                              className="avatar xs me-2"
                              src={GoogleImg}
                              alt=" Desc pic "
                            ></img>
                            Sign in with Google
                          </span>
                        </a>
                        <span className="divides text-muted mt-4"></span>
                      </div>
                      <div className="col-12">
                        <div className="mb-2">
                          <label className="form-label">Email address</label>
                          <input
                            value={values.email}
                            name="email"
                            onChange={handleChange}
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="name@gmail.com"
                          ></input>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-2">
                          <div className="form-label">
                            <span className="d-flex justify-content-between align-items-center">
                              Password
                              <a className="text-secondary" href="#">
                                Forget Password?
                              </a>
                            </span>
                          </div>
                          <input
                            onChange={handleChange}
                            name="password"
                            type="password"
                            value={values.password}
                            className="form-control form-control-lg"
                            placeholder="****************"
                          ></input>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-12 text-center mt-4">
                        <button className="btn btn-lg btn-block btn-light lift text-uppercase">
                          SIGN IN
                        </button>
                      </div>
                      <div className="col-12 text-center mt-4">
                        <span className="text-muted">
                          Don't have an account yet?
                          <a className="text-secondary" href="#">
                            Sign up here
                          </a>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
