import React from "react";
import "./App.scss";
import DataList from "./containers/DataList";
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";

function App() {
    return (
        <>
            <Navbar />
            <header>
                <h2 className="header-title">الجمعيات الخيرية</h2>
            </header>
            <main className="container">
                <DataList />
            </main>
            <Footer />
        </>
    );
}

export default App;
