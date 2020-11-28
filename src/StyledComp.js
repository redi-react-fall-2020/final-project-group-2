import styled from "styled-components";

export const Category = styled.div`
  align-items: center;

  background-color: ${({ selected }) => (selected ? "#E79F9F" : "#fff")};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 25px;
`;

export const ListCategories = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 50px 0px;
`;

export const HeadingText = styled.p`
  color: #743434;
  font-size: 49px;
  margin-bottom: 3rem;
  inline-height:33px;
  margin-top: 6rem;
`;

export const CuisineName = styled.p`
  color: #743434;
  margin-top: 10px;
  text-align: center;
  text-transform: capitalize;
`;


export const AddressWraper = styled.div`
  margin: 30px 25px;
  height: 2.5rem;
  min-width:699px;
  display: flex;
`;
export const Address = styled.input`
  border: none;
  border-radius: 30px;
  height:100%;
  min-width: 100%;
  background-color:white;
  box-shadow: 1px 1px 50px 2px #ccc;
  padding-inline-start: 15px;
  
`;

export const ViewRestaurantText = styled.p`
  color: #a76d6d;
  margin: 30px 30px;
`;

export const AnchorTag = styled.a`
  color: #a76d6d;
`;
