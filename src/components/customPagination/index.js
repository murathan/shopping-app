import React, { useState, useEffect } from 'react';
import { usePaginationRange, DOTS } from '../../hooks/usePaginationRange';
import { useShoppingContext } from '../../context/ShoppingContext';
import {
	ProductImageWrapper,
	StyledName,
	StyledButton,
} from '../products/styled';
import { Price } from '../typography';
import ArrowLeft from '../../icons/arrow-left.svg';
import ArrowRight from '../../icons/arrow-right.svg';
import {
	PaginationWrapper,
	StyledUL,
	StyledLi,
	StyledButton as StyledArrowButton,
	ProductsWrapper,
} from './styled';

const CustomPagination = ({
	data,
	RenderComponent,
	buttonConst,
	contentPerPage,
	siblingCount,
}) => {
	const [totalPageCount] = useState(Math.ceil(data.length / contentPerPage));
	const [currentPage, setCurrentPage] = useState(1);
	const { addProduct } = useShoppingContext();
	const paginationRange = usePaginationRange({
		totalPageCount: 109,
		contentPerPage,
		buttonConst,
		siblingCount,
		currentPage,
	});

	useEffect(() => {
		window.scrollTo({
			behavior: 'smooth',
			top: '0px',
		});
	}, [currentPage]);

	function goToNextPage() {
		setCurrentPage((page) => page + 1);
	}
	function gotToPreviousPage() {
		setCurrentPage((page) => page - 1);
	}
	function changePage(event) {
		const pageNumber = Number(event.target.textContent);
		setCurrentPage(pageNumber);
	}
	const getPaginatedData = () => {
		const startIndex = currentPage * contentPerPage - contentPerPage;
		const endIndex = startIndex + contentPerPage;
		return data.slice(startIndex, endIndex);
	};

	return (
		<>
			<ProductsWrapper>
				{getPaginatedData().map((dataItem, index) => (
					<RenderComponent key={dataItem.id}>
						<ProductImageWrapper>
							<div></div>
						</ProductImageWrapper>
						<Price>{dataItem.price}</Price>
						<StyledName>{dataItem.name}</StyledName>
						<StyledButton onClick={() => addProduct(dataItem)}>
							Add
						</StyledButton>
					</RenderComponent>
				))}
			</ProductsWrapper>
			{/* show the pagiantion
                it consists of next and previous buttons
                along with page numbers, in our case, 5 page
                numbers at a time */}
			<PaginationWrapper>
				{/* previous button */}
				<StyledArrowButton $type='prev' onClick={gotToPreviousPage}>
					<img src={ArrowLeft} />
					Prev
				</StyledArrowButton>
				{/* show paginated button group */}
				<StyledUL>
					{paginationRange &&
						paginationRange.map((item, index) => {
							if (item === DOTS) {
								return <StyledLi key={index}>&#8230;</StyledLi>;
							}
							return (
								<StyledLi
									$active={currentPage === item}
									key={index}
									onClick={changePage}
								>
									{item}
								</StyledLi>
							);
						})}
				</StyledUL>
				{/* next button */}
				<StyledArrowButton $type='next' onClick={goToNextPage}>
					<img src={ArrowRight} />
					Next
				</StyledArrowButton>
			</PaginationWrapper>
		</>
	);
};

export default CustomPagination;
