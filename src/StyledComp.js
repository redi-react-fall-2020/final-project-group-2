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
`;

export const HeadingText = styled.p`
  color: #743434;
  font-size: 40px;
  margin-bottom: 3rem;
  margin-top: 6rem;
`;

export const CuisineName = styled.p`
  color: #743434;
  margin-top: 10px;
  text-align: center;
  text-transform: capitalize;
`;

export const Address = styled.input`
  border: none;
  border-radius: 30px;
  margin-top: 30px;
  height: 2.5rem;
  outline: none;
  padding: 5px 40px;
  width: 100%;
`;

export const ViewRestaurantText = styled.p`
  color: #a76d6d;
  margin-top: 30px;
`;

export const AnchorTag = styled.a`
  color: #a76d6d;
`;
