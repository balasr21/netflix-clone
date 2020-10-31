import React from "react";
import Row from "../Row/Row.component";
import endpoints from "../../api/requests";

const Rows = () => {
  return endpoints.map((endpoint) => {
    return (
      <Row
        key={endpoint.id}
        title={endpoint.category}
        fetchURL={endpoint.url}
        isLarge={endpoint.isLarge}
      />
    );
  });
};

export default Rows;
