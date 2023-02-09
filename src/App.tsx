import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Main from "pages/Main";
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
