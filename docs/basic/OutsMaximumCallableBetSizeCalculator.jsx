import * as React from "react";

const DEFAULT_OUTS = 8;

export const OutsMaximumCallableBetSizeCalculator = () => {
  const [outs, setOuts] = React.useState(DEFAULT_OUTS);

  return (
    <>
      {"アウツが"}
      <input
        type="number"
        min={1}
        max={22}
        step={1}
        defaultValue={DEFAULT_OUTS}
        data-reraised
        onChange={(e) => setOuts(parseInt(e.currentTarget.value))}
      />
      {"枚（勝率 "}
      {((outs / 46) * 100).toFixed(2)}
      {"% ）のとき、"}
      <br />
      {"コールが正当化されるベット額の上限はポットの "}
      {((outs / (46 - outs - outs)) * 100).toFixed(2)}
      {"%"}
    </>
  );
};

export default OutsMaximumCallableBetSizeCalculator;
