import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { Welcome } from "./pages/Welcome";

const App: React.FC<{}> = () => {
  return (
    <AppLayout> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;
