import * as React from "react";

const DEFAULT_BET_SIZE_PERCENT = 50;

export const BestResponseBetFrequencyCalculator = () => {
  const [betSizePercent, setBetSizePercent] = React.useState(
    DEFAULT_BET_SIZE_PERCENT
  );
  const equilibriumBluffRate = betSizePercent / (100 + betSizePercent * 2);

  // 0 = BLUFF * (pot=2 + bet=1) - (1 - BLUFF) * (bet=1)
  // BLUFF * (pot=2 + bet=1) = (1 - BLUFF) * (bet=1)
  // (BLUFF * (pot=2 + bet=1)) / (1 - BLUFF) = (bet=1)
  // BLUFF / (1 - BLUFF) = bet=1 / (pot=2 + bet=1)
  //

  //
  // BLUFF = (1 - BLUFF) * (bet=1) / (pot=2 + bet=1)
  // (1 - BLUFF) / BLUFF = (bet=1) / (pot=2 + bet=1)
  //

  return (
    <>
      {"ベット額がポットの"}
      <input
        type="number"
        min={1}
        step={1}
        defaultValue={DEFAULT_BET_SIZE_PERCENT}
        data-reraised
        onChange={(e) => setBetSizePercent(parseInt(e.currentTarget.value))}
      />
      {"% のとき、"}
      <br />
      {"均衡点になるベットの割合は「バリュー "}
      {(1 / equilibriumBluffRate - 1).toFixed(2)}
      {" : ブラフ "}
      {1}
      {"」で、"}
      <br />
      {"期待値はポットのおよそ "}
      {(
        ((100 + betSizePercent) * (1 / equilibriumBluffRate - 1) +
          -betSizePercent * 1) /
        ((1 / equilibriumBluffRate - 1) * 2)
      ).toFixed(2)}
      {"%"}
    </>
  );
};

export default BestResponseBetFrequencyCalculator;
