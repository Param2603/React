import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [crypto, setCrypto] = useState([])

  async function getData() {
    let res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR")
    // console.log(res.data)
    setCrypto(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Coin Crypto Market</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Symbol</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Market Cap</th>
              <th className="px-4 py-2">Market Rank</th>
              <th className="px-4 py-2">All-Time High</th>
              <th className="px-4 py-2">All-Time Low</th>
              <th className="px-4 py-2">Total Supply</th>
            </tr>
          </thead>

          <tbody>
            {crypto && crypto.map((item, index) => (
              <tr key={index} className="text-center border-t hover:bg-gray-100">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2 uppercase">{item.symbol}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">
                  <img src={item.image} alt={item.name} className="w-10 h-10 mx-auto" />
                </td>
                <td className="px-4 py-2">{item.current_price}</td>
                <td className="px-4 py-2">{item.market_cap}</td>
                <td className="px-4 py-2">{item.market_cap_rank}</td>
                <td className="px-4 py-2">{item.ath}</td>
                <td className="px-4 py-2">{item.atl}</td>
                <td className="px-4 py-2">{item.total_supply ? item.total_supply : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
