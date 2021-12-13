import BasicTimer from "./components/BasicTimer";
import NovBar from "./components/NovBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdvanceTimer from "./AdvanceTimer/AdvanceTimer";
function App() {
  return (
    <BrowserRouter>
      <NovBar />
      <Routes>
        <Route path="/" element={<BasicTimer />} />
        <Route path="/AdvanceTimer" element={<AdvanceTimer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
