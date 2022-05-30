import { GlobalStyle, Content } from "./styled";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Container from "./components/layout/container";
import SearchBox from "./components/search";

const searchList = [
	{ name: "Beach", id: "01" },
	{ name: "People", id: "02" },
	{ name: "dasassa", id: "03" },
	{ name: "dasdasdas", id: "04" },
	{ name: "dasdasdasdas", id: "05" },
	{ name: "fafasdfdfa", id: "06" },
];

function App() {
	return (
		<Container>
			<GlobalStyle />
			<Header />
			<Content>
				<h1>A Shopping App</h1>
				<SearchBox title='Tag' data={searchList} />
			</Content>
			<Footer />
		</Container>
	);
}

export default App;
