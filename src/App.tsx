import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Main from "pages/Main";
import Repository from "pages/Repository";
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/repository/:user" element={<Repository />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
