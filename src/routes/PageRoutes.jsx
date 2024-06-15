import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={"Not Found"} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
