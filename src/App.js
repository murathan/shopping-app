import {GlobalStyle, Content} from "./styled";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Container from "./components/layout/container";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Content><h1>A Shopping App</h1></Content>
      <Footer />
    </Container>
  );
}

export default App;
