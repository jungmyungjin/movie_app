import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState();
  const [selected, setSelected] = useState(0);

  const onSelect = (event) => {
    setSelected(event.target.value);
    console.log(coins[selected]);
  };

  const [money, setMonney] = useState("");
  const onChangeMoney = (event) => {
    setMonney(event.target.value);
  };
  const [purchasableNumber, setPurchasableNumber] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPurchasableNumber(Math.floor(money / coins[selected].quotes.USD.price));
  };

  //   useEffect를 써서 API를 한번만 가져오는 중
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect} defaultValue={selected}>
          {coins.map((coin, index) => (
            <option key={index} value={index} selectname={coin.name}>
              {coin.name} ({coin.symbol})
            </option>
          ))}
        </select>
      )}
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <strong>Write down the money you have (USD) : </strong>
        <input onInput={onChangeMoney} type="number"></input>
        <button type="submit">submit</button>
        <br />
        {loading ? (
          ""
        ) : (
          <div>
            <span>price is {coins[selected].quotes.USD.price}</span>
            <br />
            {purchasableNumber ? (
              <span>you can buy {purchasableNumber}</span>
            ) : null}
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
