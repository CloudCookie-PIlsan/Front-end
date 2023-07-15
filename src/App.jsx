import "./App.css";
import Button from "./components/shared/Button";
import IconButton from "./components/shared/IconButton";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle />
            <div>
                <Button>버튼</Button>
                <IconButton icon="notification" />
            </div>
        </>
    );
}

export default App;
