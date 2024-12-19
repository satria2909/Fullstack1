// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MahasiswaList from "./components/MahasiswaList";
import AddMahasiswa from "./components/AddMahasiswa";
import EditMahasiswa from "./components/EditMahasiswa";

function App() {
    return (
        <Router>
            <div>
                <div className="container">
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <Routes>
                                <Route path="/" element={<MahasiswaList />} />
                                <Route path="/add" element={<AddMahasiswa />} />
                                <Route path="/edit/:id" element={<EditMahasiswa />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
