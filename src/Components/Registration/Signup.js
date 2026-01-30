
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaUserPlus
} from "react-icons/fa";
import "./Signup.css";

const containerAnim = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

const formAnim = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const inputAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.cpassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4500/signup", formData);
      if (res.data === "exist") alert("User already exists");
      else navigate("/login");
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <motion.div
        className="login-card premium-float"
        variants={containerAnim}
        initial="hidden"
        animate="visible"
      >
        <h1 className="login-title">Create Account</h1>
        <p className="login-subtitle">Join the premium experience ✨</p>

        <motion.form
          onSubmit={submit}
          variants={formAnim}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: <FaUser />, name: "name", type: "text", placeholder: "Full Name" },
            { icon: <FaEnvelope />, name: "email", type: "email", placeholder: "Email Address" },
            { icon: <FaPhoneAlt />, name: "phone", type: "tel", placeholder: "Phone Number" },
            { icon: <FaLock />, name: "password", type: "password", placeholder: "Password" },
            { icon: <FaLock />, name: "cpassword", type: "password", placeholder: "Confirm Password" }
          ].map((field, i) => (
            <motion.div className="input-group" variants={inputAnim} key={i}>
              <span className="input-icon">{field.icon}</span>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleChange}
                required
              />
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="premium-btn"
            type="submit"
            disabled={loading}
          >
            <FaUserPlus />
            {loading ? "Creating Account..." : "Sign Up"}
          </motion.button>
        </motion.form>

        <div className="divider">OR</div>

        <p className="signup-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Signup;
