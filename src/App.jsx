import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ShortUrlPage from "../pages/shortUrlPage/ShortUrlPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:shortUrl" element={<ShortUrlPage />} />
      </Routes>
    </>
  );
}

export default App;
