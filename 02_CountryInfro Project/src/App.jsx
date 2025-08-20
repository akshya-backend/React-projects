// App.jsx
import "./App.css"
import Header from "./components/header"
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import CountryDetail from "./components/countryDetail";
import { ThemeProvider } from "./context/createContext";
import React from "react";

function Layout() {
 
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path=":countryName" element={<CountryDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
