import React from "react";
import { Label, Select } from "../StyledComp";
const Filters = ({
  selectedFilters,
  setSelectedFilter,
  handleChange,
  resto,
}) => {
  return (
    <div className="filterArea">
      <div className="selectWrapper">
        <Select onChange={(e) => handleChange("price_level", e.target.value)}>
          <option default> Price </option> <option value="1"> € </option>{" "}
          <option value="2"> €€ </option> <option value="3"> €€€ </option>{" "}
          <option value="4"> €€€€ </option>{" "}
        </Select>
        <Label>
          <input
            type="checkbox"
            name="pickup"
            checked={selectedFilters.pickup || false}
            onChange={(e) => handleChange("pickup", e.target.checked)}
          />
          Pickup{" "}
        </Label>{" "}
        <Label>
          <input
            type="checkbox"
            name="delivery"
            checked={selectedFilters.delivery || false}
            onChange={(e) => handleChange("delivery", e.target.checked)}
          />
          Delivery{" "}
        </Label>{" "}
        <Label>
          <input
            type="checkbox"
            name="open"
            checked={selectedFilters.open || false}
            onChange={(e) => handleChange("open", e.target.checked)}
          />
          Open Now{" "}
        </Label>{" "}
      </div>{" "}
    </div>
  );
};

export default Filters;
