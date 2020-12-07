import React, { createContext } from "react";

const QueryContext = createContext({
  query: "",
  setQuery: () => {},
});

export default QueryContext;
