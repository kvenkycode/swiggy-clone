import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    setVisitCount((prev) => prev + 1);
  }, [location]);

  return (
    <footer style={{ backgroundColor: "#f1f1f1", padding: "1rem", textAlign: "center" }}>
      <p>© 2025 My React App</p>
      <p>Total Page Visits in This Session: {visitCount}</p>
    </footer>
  );
};

export default Footer;
