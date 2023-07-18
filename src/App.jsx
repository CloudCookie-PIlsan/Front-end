import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
