import React, {
  useState
} from "react";

const OpenNowSelector = () => {
  const [price, setPrice] = useState([]);

  const handleGameChange = (e) => {
    setGame(e.target.value);
  };
  return ( <
    select className = "filterSelect"
    onChange = {
      handleGameChange
    } >
    <
    option selected > Open Now < /option> <
    option value = "1" > € < /option> <
    option value = "2" > €€ < /option> <
    option value = "3" > €€€ < /option> <
    /select>
  );
};

export default OpenNowSelector;