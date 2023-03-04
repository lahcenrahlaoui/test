import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Teachers from './pages/Teachers'
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/teachers" element={<Teachers />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
