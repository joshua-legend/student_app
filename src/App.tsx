import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawerLayout from "./components/layout/DrawerLayout";
import Home from "./components/layout/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DrawerLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
