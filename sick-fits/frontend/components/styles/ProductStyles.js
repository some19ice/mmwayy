import styled from 'styled-components';

const Product = styled.div`
  background: ${props => props.theme.offWhite};
  border: 1px solid ${props => props.theme.ogRed};
  border-radius: 9px;
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid ${props => props.theme.lightGrey};
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1px;
    background: ${props => props.theme.lightGrey};
    & > * {
      background: ${props => props.theme.offWhite};
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export default Product;
