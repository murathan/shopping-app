import { PaginationWrapper, StyledUL, StyledLi, StyledButton } from "./styled";
import ArrowLeft from "../../icons/arrow-left.svg";
import ArrowRight from "../../icons/arrow-right.svg";

const Pagination = ({
	items,
	itemCountPerPage,
	currentPage,
	handleClick,
	setCurrentPage,
}) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(items.length / itemCountPerPage); i++) {
		pageNumbers.push(i);
	}
	console.log(pageNumbers.length);
	const goPrevPage = () => {
		if (currentPage !== 1) setCurrentPage((prevState) => prevState - 1);
	};

	const goNextPage = () => {
		if (currentPage != pageNumbers.length)
			setCurrentPage((prevState) => prevState + 1);
	};

	const renderPageNumbers = pageNumbers.map((number) => {
		return (
			<StyledLi
				$active={number === currentPage}
				key={number}
				id={number}
				onClick={handleClick}
			>
				{number}
			</StyledLi>
		);
	});

	return (
		<PaginationWrapper>
			<StyledButton type='prev' onClick={goPrevPage}>
				<img src={ArrowLeft} /> Prev
			</StyledButton>
			<StyledUL>{renderPageNumbers}</StyledUL>
			<StyledButton type='next' onClick={goNextPage}>
				<img src={ArrowRight} />
				Next
			</StyledButton>
		</PaginationWrapper>
	);
};

export default Pagination;
