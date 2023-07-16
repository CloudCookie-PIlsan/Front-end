import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from './components/shared/Layout';
import TestPage from "./components/pages/TestPage";
import {QueryClient, QueryClientProvider} from'react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <Layout>
                <TestPage/>
            </Layout>
        </QueryClientProvider>
    );
}

export default App;
