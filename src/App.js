import AppBar from "./components/AppBar";
import Container from "./components/Container";
import HomeView from "./views/HomeView";
import AddProductView from "./views/AddProductView";
import ErrorView from "./views/ErrorView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.scss";

function App() {
    return (
        <>
            <BrowserRouter>
                <AppBar />
                <Container>
                    <Routes>
                        <Route path="/" element={<HomeView />} />
                        <Route path="/delete" element={<HomeView />} />
                        <Route exact path="/add" element={<AddProductView />} />
                        <Route path="*" element={<ErrorView />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </>
    );
}

export default App;
