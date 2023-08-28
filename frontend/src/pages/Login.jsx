import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postLogin } from "../api/api";
import { setUser } from "../redux/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (email === "" || password === "") {
      alert("Please fill all the * marked fields");
      return;
    }

    let response = await postLogin({ email, password });
    console.log(response);

    if (response?.data.token) {
      localStorage.setItem("token", response.data.token);
      dispatch(setUser(response.data?.data));
      navigate("/");
    } else {
      alert(response?.data.message);
    }
  };

  const onClear = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <div className="bg-slate-100 h-[100vh]">
      <div className="w-[70%] md:w-[30%] m-auto">
        <p className="text-3xl font-bold">Login</p>
        <div className="flex flex-col gap-3 font-bold">
          <label htmlFor="email">*Email:</label>
          <input
            type="text"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            id="email"
            className="bg-slate-200 p-2 rounded-md"
          />

          <label htmlFor="password">*Password:</label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            id="password"
            className="bg-slate-200 p-2 rounded-md"
          />

          <div className="flex gap-2 items-center justify-center">
            <button
              onClick={onSubmit}
              className="bg-blue-500 w-20 h-8 rounded-md"
            >
              Submit
            </button>
            <button
              onClick={onClear}
              className="bg-slate-500 w-20 h-8 rounded-md"
            >
              Clear
            </button>
          </div>
          <p>
            Do not have an account!{" "}
            <Link to={"/signup"} className="text-blue-400">
              Signup!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
