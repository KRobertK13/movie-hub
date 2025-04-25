import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Details from "./components/Details";
import DiscoverPage from "./components/DiscoverPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DiscoverPage />} />
          <Route path="details/:id" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
