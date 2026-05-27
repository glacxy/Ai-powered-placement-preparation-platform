import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful 🚀");
  };

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.title}>
          DevGenius AI 💜
        </h1>

        <p style={styles.subtitle}>
          Login to continue
        </p>

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
          onClick={handleLogin}
          style={styles.button}
        >
          Login
        </button>

        <p style={styles.text}>
          Don't have an account?
        </p>

        <Link to="/signup" style={styles.link}>
          Go to Signup
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
    marginBottom: "10px"
  },

  subtitle: {
    textAlign: "center",
    color: "gray",
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

export default Login;









































