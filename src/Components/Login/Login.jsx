import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const saveUserData = async (data) => {
  localStorage.setItem("userInfo", JSON.stringify(data));
  localStorage.setItem("isSignedUp", "true"); 
};

export default function Login() {
  const [signState, setSignState] = useState(
    localStorage.getItem("isSignedUp") === "true" ? "Sign In" : "Sign Up"
  );
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: saveUserData,
    onSuccess: () => {
      queryClient.invalidateQueries("userInfo");
      alert("Information saved!");
      if (signState === "Sign Up") {
        setSignState("Sign In");
      }
    },
  });

  const validationSchema = Yup.object({
    username:
      signState === "Sign Up"
        ? Yup.string().required("Username is required")
        : Yup.mixed().notRequired(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      mutation.mutate(values, {
        onSuccess: () => {
          resetForm();
          if (signState === "Sign Up") {
            setSignState("Sign In");
          }
          navigate("/");
        },
      });
    },
  });

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/a.jpg')" }}
    >
      <div className="login sm:flex sm:flex-col sm:mt-2 md:block md:mt-0 bg-black inset-0 absolute opacity-65 items-center">
        <h1 className="text-gray-500 animate-bounce text-4xl p-8">
          ReVan Store
        </h1>
        <div className="w-full max-w-[450px] rounded-md m-auto py-[50px] px-[40px] border-2 border-gray-600">
          <h1 className="text-2xl italic text-white text-center font-bold">
            {signState}
          </h1>
          <form className="bg-black" onSubmit={formik.handleSubmit}>
            {signState === "Sign Up" && (
              <div>
                <input
                  className="w-full h-[50px] bg-[#333] text-white my-[12px] mx-0 border-none outline-none rounded-md px-[16px] py-[20px] text-[16px] font-semibold placeholder:text-[16px] placeholder:font-medium focus:bg-white focus-within:text-black"
                  type="text"
                  placeholder="Enter your username"
                  id="username"
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.username}
                  </div>
                ) : null}
              </div>
            )}
            <div>
              <input
                className="w-full h-[50px] bg-[#333] text-white my-[12px] mx-0 border-none outline-none rounded-md px-[16px] py-[20px] text-[16px] font-semibold placeholder:text-[16px] placeholder:font-medium focus:bg-white focus-within:text-black"
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div>
              <input
                className="w-full h-[50px] bg-[#333] text-white my-[12px] mx-0 border-none outline-none rounded-md px-[16px] py-[20px] text-[16px] font-semibold placeholder:text-[16px] placeholder:font-medium focus:bg-white focus-within:text-black"
                type="password"
                placeholder="Enter your password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full border-none outline-none p-[6px] mt-[20px] rounded-md text-white bg-red-800 cursor-pointer text-xl font-semibold"
            >
              {signState}
            </button>
          </form>
          <div className="mt-[40px] text-gray-500">
            {signState === "Sign In" ? (
              <p>
                <span className="text-[15px] text-white">
                  New To ReVan Store?
                  <span
                    className="text-white text-sm ml-3 cursor-pointer"
                    onClick={() => {
                      setSignState("Sign Up");
                      formik.resetForm();
                    }}
                  >
                    Sign Up Now
                  </span>
                </span>
              </p>
            ) : (
              <span className="text-x[15px] text-white">
                Already have an account?
                <span
                  className="text-white ml-3 cursor-pointer"
                  onClick={() => {
                    setSignState("Sign In");
                    formik.resetForm();
                  }}
                >
                  Sign In Now
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
