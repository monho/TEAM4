import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <h1>우리 팀</h1>
      <nav>
        <Link to="/" style={{ marginRight: "10px", color: "#fff" }}>홈</Link>
        <Link to="/about" style={{ color: "#fff" }}>팀 소개</Link>
      </nav>
    </header>
  );
};

export default Header;
