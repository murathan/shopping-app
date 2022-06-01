import styled from 'styled-components'
import { StyledRow } from '../layout/grid/styled'

const StyledProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 80vh;
`

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  width: 124px;
  height: 225px;
  :not(:last-child) {
    margin-right: 24px;
  }
`

const ProductImage = styled.div`
  width: 92px;
  height: 92px;
  background-image: url('https://assets.adidas.com/images/w_600,f_auto,q_auto/8df5ab4346d7475ebb08a91500a047d3_9366/Continental_80_Ayakkabi_Beyaz_G27706_01_standard.jpg');
  background-size: contain;
  margin-bottom: 24px;
`

const StyledPrice = styled.span`
  width: 100%;
  text-align: left;
  font-size: 14px;
  color: #1976d2;
  font-weight: 700;
  margin-bottom: 12px;
`

const StyledName = styled.span`
  width: 100%;
  text-align: left;
  font-size: 14px;
  color: #191919;
  margin-bottom: 8px;
  height: 40px;
`

const StyledButton = styled.button`
  width: 100%;
  height: 22px;
  color: #f2f0fd;
  background-color: #1976d2;
  margin-top: 8px;
  border: none;
  border-radius: 2px;
  font-size: 12px;
`

const StyledProductRow = styled(StyledRow)`
  &:not(:first-child) {
    margin-top: 20px;
  }
`

export {
  StyledProductsWrapper,
  StyledProductCard,
  ProductImage,
  StyledPrice,
  StyledName,
  StyledButton,
  StyledProductRow
}