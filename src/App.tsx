import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { Login } from "./pages/Login";
import { Welcome } from "./pages/Welcome";

const App = () => {
  return (
    <AppLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AppLayout>
  );
};

export default App;
