import React, { useState } from "react";
import { useEffect } from "react";
import "./crypto.css";

function Crypto() {
  const [cryptos, setcrypto] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setcrypto(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="coin">
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>crypto nomi</th>
              <th>Symbol</th>
              <th>current price</th>
              <th>market cap change</th>
              <th>market cap rank</th>
            </tr>
            {cryptos.map((crypto, index) => (
              <tr key={index}>
                <td className="coin-img">
                  <img src={crypto.image} />
                  br
                  {crypto.name}
                </td>
                <td>{crypto.symbol}</td>
                <td>${crypto.current_price}</td>
                {crypto.price_change_percentage_24h < 0 ? (
                  <td className="red">
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </td>
                ) : (
                  <td className="green">
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </td>
                )}
                <td>{crypto.market_cap_rank}</td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
}

export default Crypto;
