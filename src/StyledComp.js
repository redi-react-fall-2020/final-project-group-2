import styled, { createGlobalStyle } from "styled-components";

export const Category = styled.div`
  align-items: center;
  background: ${(props) =>
    props.theme.mode === "dark" ? darkMode.secondary : lightMode.secondary};
  background-color: ${({ selected }) => (selected ? "#E79F9F" : "transparent")};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 25px;
  height: 40px;
`;

const lightMode = {
  imageUrl: "url('https://i.ibb.co/Sdj3Lgd/bk-3.jpg')",
  mapImageUrl: "url('src/img/map.jpg')",
  primary: "#41334f",
  secondary: "white",
};

const darkMode = {
  imageUrl: "url('https://i.ibb.co/4Nq6NDj/darkBK.jpg')",
  mapImageUrl: "url('src/img/darkModeMap.jpg')",
  primary: "#ececec",
  secondary: "#444E74",
  body: "#242D4C",
  white: "white",
  orange: "#ff7f00",
  searchBar: "#444E74",
  header: "#333D61",
};
export const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#242D4C" : "#ececec"};
    color: ${(props) => (props.theme.mode === "dark" ? "#ececec" : "#242D4C")};
 }`;

export const HeaderWarper = styled.div`
  background: ${(props) =>
    props.theme.mode === "dark" ? darkMode.header : lightMode.secondary};
  display: flex;
  height: 127px;
  flex-direction: row;
  padding-left: 17px;
  align-items: center;
  border-bottom: 1px dotted #c3c3c3;
}
`;
export const AppTheme = styled.div`
  color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.primary : lightMode.primary};
  background: ${(props) =>
    props.theme.mode === "dark" ? darkMode.imageUrl : lightMode.imageUrl};
  background-size: cover;
  background-position: 100%;
  display: flex;
  padding-left: 40px;
  width: 100vw;
  height: 100vh;
`;
export const RestaurantCardInfo = styled.div`
  color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.white : lightMode.primary};
  background: ${(props) =>
    props.theme.mode === "dark" ? darkMode.secondary : lightMode.secondary};
  width: 694px;
  height: 180px;
  top: 266px;
  border-radius: 26px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding-left: 12px;
`;
export const ListCategories = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 50px 0px;
`;

export const HeadingText = styled.p`
  color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.primary : "#743434"};
  font-size: 49px;
  margin-bottom: 3rem;
  inline-height: 33px;
  margin-top: 6rem;
`;

export const CuisineName = styled.p`
  color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.primary : "#743434"};
  margin-top: 10px;
  text-align: center;
  text-transform: capitalize;
`;

export const AddressWraper = styled.div`
  margin: 30px 25px;
  height: 2.5rem;
  min-width: 699px;
  display: flex;
`;
export const Address = styled.input`
  border: none;
  border-radius: 30px;
  height: 100%;
  min-width: 100%;
  background: ${(props) =>
    props.theme.mode === "dark" ? darkMode.searchBar : lightMode.secondary};
  box-shadow: ${(props) =>
    props.theme.mode === "dark" ? "none" : "0.2px 0.2px 10px 0.2px #ccc"};
  {"" /* box-shadow: 0.2px 0.2px 10px 0.2px #ccc; */}
  padding-inline-start: 15px;
  outline: none;
`;

export const ViewRestaurantText = styled.p`
  color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.primary : "#743434"};
  margin: 30px 30px;
`;

export const AnchorTag = styled.a`
  color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.primary : "#743434"};
`;

export const AnchorTagBold = styled.strong`
  color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.primary : "#743434"};
  text-decoration: underline;
`;

export const FiltersWraper = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.primary : lightMode.primary};
  background-color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.secondary : lightMode.secondary};
  align-items: center;
  display: flex;
  justify-content: space-around;
  max-width: max-content;
  width: 113px;
  margin-right: 10px;
  height: 31px;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.035em;
  border-radius: 22px;
  padding: 0 10px;
  text-decoration: none;
  border: none;
  outline: none;
`;
export const Select = styled.select`
  color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.primary : lightMode.primary};
  background-color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.secondary : lightMode.secondary};
  width: 113px;
  margin-right: 10px;
  height: 31px;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.035em;
  border-radius: 22px;
  padding: 0 10px;
  text-decoration: none;
  border: none;
  outline: none;
`;

export const ResturantListingHeadingText = styled.h2`
  color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.white : lightMode.primary};
  margin: 20px 0px;
  padding-left: 30px;
`;

export const ResturantTitle = styled.h3`
  color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.primary : lightMode.primary};
  margin: 6px 0px 8px 0px;
`;

export const ResturantTelImg = styled.img`
  color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.orange : lightMode.primary};
  object-fit: cover;
  border-radius: 26px;
`;

export const ResturantGategoryTag = styled.div`
  color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.secondary : lightMode.primary};
  background-color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.primary : lightMode.secondary};
  padding: 8px;
  width: 66px;
  height: 15px;
  border-radius: 12px;
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  justify-content: center;
  text-align: center;
  align-items: center;
  line-height: 12px;
`;

export const MostPopularResturant = styled.div`
  color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.white : lightMode.primary};
  background-color: ${(props) =>
    props.theme.mode === "dark" ? darkMode.secondary : lightMode.secondary};
  width: 223.09px;
  height: 328px;
  top: 266px;
  border-radius: 26px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 12px;
  margin: 0 4px;
`;

export const MapWraper = styled.div`
  background: ${(props) =>
    props.theme.mode === "dark" ? darkMode.mapImageUrl : lightMode.mapImageUrl};
  width: 100%;
`;
