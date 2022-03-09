import AppBar from "./components/AppBar";
import Container from "./components/Container";
import HomeView from "./views/HomeView";
import AddProductView from "./views/AddProductView";
import ProductDetailsView from "./views/ProductDetailsView";
import ErrorView from "./views/ErrorView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Container className={"app-container"}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/add" element={<AddProductView />} />
            <Route
              path="/product/:productID"
              element={<ProductDetailsView />}
            />
            <Route path="*" element={<ErrorView />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
