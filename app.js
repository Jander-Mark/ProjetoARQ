import { BrowserRouter, Routes, Route } from \"react-router-dom\";
import { Toaster } from \"./components/ui/sonner\";
import HomePage from \"./pages/HomePage\";

function App() {
  return (
    <div className=\"App noise-overlay\">
      <Toaster position=\"bottom-right\" />
      <BrowserRouter>
        <Routes>
          <Route path=\"/\" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
