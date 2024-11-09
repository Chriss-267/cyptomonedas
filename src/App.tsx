import { useEffect } from "react"
import Form from "./components/Form"
import { useCryptoStore } from "./store/store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"


function App() {
  
  const {fetchCryptos} = useCryptoStore()

    useEffect(() =>{
      fetchCryptos()
    }, [])
  return (
    <>
      <div className="container">
          <h1 className="title">Cotizador de <span>Criptomonedas</span></h1>
        <div className="content">
          <Form/>
          <CryptoPriceDisplay/>
        </div>
      </div>

      
    </>
  )
}

export default App
