import { GlobalStyle, Content } from './styled';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Container from './components/layout/container';
import SearchBoxGroup from './components/search';
import ShoppingContextProvider from './context/ShoppingContext';
import Sorting from './components/sorting';
import Col from './components/layout/grid/Col';
import Row from './components/layout/grid/Row';
import { Title } from './components/typography';
import CheckButtonGroup from './components/productType';
import Products from './components/products';
import Basket from './components/basket';

function App() {
	return (
		<ShoppingContextProvider>
			<Container>
				<GlobalStyle />
				<Header />
				<Content>
					<Row>
						<Col size='small'>
							<Sorting />
							<SearchBoxGroup />
						</Col>
						<Col size='large'>
							<Title size='large'>Products</Title>
							<CheckButtonGroup />
							<Products />
						</Col>
						<Col size='small'>
							<Basket />
						</Col>
					</Row>
				</Content>
				<Footer />
			</Container>
		</ShoppingContextProvider>
	);
}

export default App;
