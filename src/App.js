import { GlobalStyle, Content } from "./styled";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Container from "./components/layout/container";
import SearchBox from "./components/search";
import ShoppingContextProvider from "./context/ShoppingContext";
import Sorting from "./components/sorting";
import Col from "./components/layout/grid/Col";
import Row from "./components/layout/grid/Row";
import { Title } from "./components/typography";
import CheckButtonGroup from "./components/productType";
import Products from "./components/products";
import Basket from "./components/basket";

const brandList = [
	{ name: "Beach", id: "01" },
	{ name: "People", id: "02" },
	{ name: "dasassa", id: "03" },
	{ name: "dasdasdas", id: "04" },
	{ name: "dasdasdasdas", id: "05" },
	{ name: "fafasdfdfa", id: "06" },
];

const tagList = [
	{ name: "fasas", id: "01" },
	{ name: "fasfsas", id: "02" },
	{ name: "fasfasas", id: "03" },
	{ name: "savcsda", id: "04" },
	{ name: "qwrqwqw", id: "05" },
	{ name: "ktuykjyuk", id: "06" },
];

const productTypeList = [
	{ name: "shirt", id: "01" },
	{ name: "mug", id: "02" },
];

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
							<SearchBox title='Brand' data={brandList} />
							<SearchBox title='Tag' data={tagList} />
						</Col>
						<Col size='large'>
							<Title size='large'>Products</Title>
							<CheckButtonGroup data={productTypeList} />
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
