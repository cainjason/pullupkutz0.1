import React from "react";

const GridOption = () => {
  return (
    <GridOption container spacing={2}>
      <GridOption item xs={8}>
        <div>xs=8</div>
      </GridOption>
      <GridOption item xs={4}>
        <div>xs=4</div>
      </GridOption>
      <GridOption item xs={4}>
        <div>xs=4</div>
      </GridOption>
      <GridOption item xs={8}>
        <div>xs=8</div>
      </GridOption>
    </GridOption>
  );
};

export default GridOption;
