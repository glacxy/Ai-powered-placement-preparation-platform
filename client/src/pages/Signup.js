import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    alert("Signup Successful 🚀");
  };

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.title}>
          Create Account 🚀
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button
          onClick={handleSignup}
          style={styles.button}
        >
          Signup
        </button>

        <p style={styles.text}>
          Already have an account?
        </p>

        <Link to="/" style={styles.link}>
          Go to Login
        </Link>

      </div>

    </div>
  );
}

const styles = {

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4"
  },

  card: {
    backgroundColor: "white",
    padding: "40px",
    width: "350px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
  },

  title: {
    textAlign: "center",
    marginBottom: "20px"
  },

  input: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid gray"
  },

  button: {
    padding: "12px",
    backgroundColor: "purple",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  text: {
    marginTop: "15px",
    textAlign: "center"
  },

  link: {
    textAlign: "center",
    color: "purple",
    textDecoration: "none"
  }

};

export default Signup;