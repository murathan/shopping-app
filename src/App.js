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

const searchList = [
	{ name: "Beach", id: "01" },
	{ name: "People", id: "02" },
	{ name: "dasassa", id: "03" },
	{ name: "dasdasdas", id: "04" },
	{ name: "dasdasdasdas", id: "05" },
	{ name: "fafasdfdfa", id: "06" },
];

const productTypeList = [
	{ name: "shirt", id: "01" },
	{ name: "mug", id: "02" },
];

const productList = [
	{ name: "1", id: "01" },
	{ name: "2", id: "03" },
	{ name: "3", id: "04" },
	{ name: "444Adidas", id: "02" },
	{ name: "5555Adidas", id: "05" },
	{ name: "666Adidas", id: "06" },
	{ name: "77766754Adidas", id: "07" },
	{ name: "8888Adidas", id: "08" },
	{ name: "9999Adidas", id: "09" },
	{ name: "1001010Adidas", id: "10" },
	{ name: "11111Adidas", id: "11" },
	{ name: "121212Adidas", id: "12" },
	{ name: "13313Adidas", id: "13" },
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
							<SearchBox title='Tag' data={searchList} />
						</Col>
						<Col size='large'>
							<Title size='large'>Products</Title>
							<CheckButtonGroup data={productTypeList} />
							<Products data={productList} />
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
