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
                <h1 className="header-title">الجمعيات الخيرية</h1>
            </header>
            <main className="container">
                <DataList />
            </main>
            <Footer />
        </>
    );
}

export default App;
