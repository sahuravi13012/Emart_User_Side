import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useFormik } from "formik";
import axios from "axios";
import SignupSchema from "../Validation/Validation";  

function Login() {
  const [open, setOpen] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const { errors, values, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: SignupSchema,
      onSubmit: async (values, action) => {
        // console.log(values);
        // const api = await axios.post(
        //   "http://localhost:8000/signupuser",
        //   values
        // );
        // console.log("post data", api);

        action.resetForm();
      },
    });

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Login
      </Button>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={600}
      >
        <h2 className="text-center">Login</h2>
        <form class="px-4 py-3" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleDropdownFormEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              // id="email"
              autoComplete="off"
              value={values.email}
              class="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="mt-2 mx-2 fw-bold text-danger">{errors.email}</p>
            ) : null}
          </div>
          <div class="mb-3">
            <label for="exampleDropdownFormPassword1" class="form-label">
              Password
            </label>
            <input
              name="password"
              value={values.password}
              type="password"
              class="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="mt-2 mx-2 fw-bold text-danger">{errors.password}</p>
            ) : null}
          </div>

          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </form>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">
          New around here? <Login />
        </a>
        <a class="dropdown-item" href="#">
          Forgot password?
        </a>
      </Modal>
    </>
  );
}

export default Login;
