
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:4500/login", {
        email,
        password,
      });

      if (res.data.status === "exist") {
        // 🔐 Role based redirection
        if (res.data.role === "admin") {
          navigate("/admin-dashboard", { state: { email } });
        } else {
          navigate("/home", { state: { email } });
        }
      } else {
        alert("User does not exist. Please sign up.");
      }
    } catch (error) {
      alert("Invalid email or password");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="login-title">Welcome Back </h1>
        <p className="login-subtitle">Login to continue</p>

        <form onSubmit={submit}>
          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            type="submit"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        <div className="divider">OR</div>

        <p className="signup-text">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
