import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobDetails from "./components/JobDetails";
import ShowFavorite from "./components/Favorite";

function App() {
  console.log("key:", import.meta.env.VITE_ENCRYPT_KEY);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="detail/:id" element={<JobDetails />} />
        <Route path="/favorites" element={<ShowFavorite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
