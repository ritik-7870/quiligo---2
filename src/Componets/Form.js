import React, { useState } from "react";
import "../Componets/form.css";
const Form = () => {
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <section className="vh-100">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5" style={{color:'aliceblue'}}>
                      Create an account
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label" for="form3Example1cg">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={yourName}
                          onChange={(e) => {
                            setYourName(e.target.value);
                          }}
                          id="form3Example1cg"
                          className="form-control form-control-lg form-style"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form3Example3cg">
                          Your Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          id="form3Example3cg"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          className="form-control form-control-lg form-style"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form3Example4cg">
                          Password
                        </label>
                        <input
                          type="password"
                          value={password}
                          id="form3Example4cg"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          className="form-control form-control-lg form-style"
                        />
                      </div>

                      <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example4cdg">
                          Repeat your password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg form-style"
                        />
                       
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
