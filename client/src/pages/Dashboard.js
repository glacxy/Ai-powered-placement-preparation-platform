import { Link } from "react-router-dom";

function Dashboard() {

  return (

    <div style={styles.container}>

      {/* Sidebar */}

      <div style={styles.sidebar}>

        <h2 style={styles.logo}>
          DevGenius AI 💜
        </h2>

        <Link to="/" style={styles.menu}>
          Logout
        </Link>

        <Link to="/dashboard" style={styles.menu}>
          Dashboard
        </Link>

      </div>

      {/* Main Content */}

      <div style={styles.main}>

        {/* Navbar */}

        <div style={styles.navbar}>

          <h2>
            Dashboard 🚀
          </h2>

          <p>
            Welcome Back, Galaxy 💜
          </p>

        </div>

        {/* Cards */}

        <div style={styles.cardContainer}>

          <div style={styles.card}>
            <h3>DSA Progress</h3>
            <p>75% Completed</p>
          </div>

          <div style={styles.card}>
            <h3>AI Mock Interviews</h3>
            <p>12 Completed</p>
          </div>

          <div style={styles.card}>
            <h3>Projects Built</h3>
            <p>5 Projects 🚀</p>
          </div>

        </div>

      </div>

    </div>
  );
}

const styles = {

  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#f4f4f4"
  },

  sidebar: {
    width: "250px",
    backgroundColor: "#6a0dad",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column"
  },

  logo: {
    marginBottom: "40px"
  },

  menu: {
    color: "white",
    textDecoration: "none",
    marginBottom: "20px",
    fontSize: "18px"
  },

  main: {
    flex: 1,
    padding: "30px"
  },

  navbar: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "30px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
  },

  cardContainer: {
    display: "flex",
    gap: "20px"
  },

  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    flex: 1,
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
  }

};

export default Dashboard;