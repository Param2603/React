// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [crypto,setCrypto] = useState([])

//   async function getData() {
//     let res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR")
//     // console.log(res.data)
//     setCrypto(res.data)
//   }

//   useEffect(() => {
//     getData()
//   },[])

//   return (
//     <div>
//       <h1>Coin Crypto Market</h1>

//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Symbol</th>
//               <th>Name</th>
//               <th>Image</th>
//               <th>Price</th>
//               <th>Market-Cap</th>
//               <th>Market-Cap-Rank</th>
//               <th>All-Time-High</th>
//               <th>All-Time-Low</th>
//               <th>Total Supply</th>
//             </tr>
//           </thead>

//           <div>
//              {crypto && crypto.map((item , index)=>{
//              return(
               
//                  <tr key={index} className='' >
//                       <td>{index +1}</td>
//                       <td>{item.name}</td>
//                       <td><img src={item.image} alt="" className='' /></td>
//                       <td>{item.symbol}</td>
//                       <td>{item.total_supply}</td>
//                       <td>{item.current_price}</td>
//                       <td>{item.market_cap}</td>
//                       <td>{item.ath}</td>
//                       <td>{item.atl}</td>
//                       <td>{item.market_cap_rank}</td>
//                       <td>{item.high_24h}</td>
//                 </tr>     
//              )
//            })}
//           </div>

//         </table>
//       </div>
//     </div>
//   )
// }

// export default App





import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [crypto, setCrypto] = useState([])

  async function getData() {
    let res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR")
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
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Symbol</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Price (INR)</th>
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
                  <img src={item.image} alt={item.name} className="w-6 h-6 mx-auto" />
                </td>
                <td className="px-4 py-2">₹{item.current_price.toLocaleString()}</td>
                <td className="px-4 py-2">₹{item.market_cap.toLocaleString()}</td>
                <td className="px-4 py-2">{item.market_cap_rank}</td>
                <td className="px-4 py-2">₹{item.ath.toLocaleString()}</td>
                <td className="px-4 py-2">₹{item.atl.toLocaleString()}</td>
                <td className="px-4 py-2">{item.total_supply ? item.total_supply.toLocaleString() : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
