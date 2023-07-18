import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./components/shared/Layout";
import TestPage from "./components/pages/TestPage";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <Layout>
                <TestPage />
            </Layout>

            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
