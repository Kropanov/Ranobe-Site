import Layout from "./hoc/Layout/Layout";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Novels from "./containers/Novels/Novels";

function App() {
    return (
        <Layout>
            <ErrorBoundary>
                <Header/>
                <Routes>
                    <Route path="/" element={<Novels/>}/>
                    <Route path="novels" element={<h1>This is novels</h1>}/>
                    <Route path="manga" element={<h1>This is manga</h1>}/>
                    <Route path="blog" element={<h1>This is blog</h1>}/>
                    <Route path="users" element={<h1>This is users</h1>}/>
                </Routes>
            </ErrorBoundary>
        </Layout>
    )
}

export default App;
