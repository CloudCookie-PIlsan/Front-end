import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import NavBar from "./components/shared/NavBar";
import Layout from "./components/shared/Layout";
import Router from "./Router"
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </>
    );
}

export default App;
