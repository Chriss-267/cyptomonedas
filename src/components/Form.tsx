import { useState } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store/store"
import { Pair } from "../types"
import Error from "./Error"





function Form() {

    const {cryptocurrencies, fetchData} = useCryptoStore()
    const [pair, setPair] = useState<Pair>({
        currency : "",
        criptocurrency: ""
    })

    const [error, setError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        setPair({
            ...pair,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        
        e.preventDefault()
        if(Object.values(pair).includes("")){
            setError("Todos los campos son obligatorios")
            return
        }
        setError("")

        //consultar la aapi

        fetchData(pair)

    }

  return (
    <form className="form" onSubmit={handleSubmit}>
        {error && <Error>{error}</Error>}
        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select name="currency" id="currency"
            value={pair.currency}
            onChange={handleChange}
            
            >
                <option value="">--seleccione--</option>
                {currencies.map (currencie =>(
                    <option key={currencie.code} value={currencie.code}>{currencie.name}</option>
                ))}
            </select>
        </div>

        <div className="field">
            <label htmlFor="criptocurrency">Criptomoneda:</label>
            <select name="criptocurrency" id="criptocurrency"
            value={pair.criptocurrency}
             onChange={handleChange}
            >
             <option value="">--seleccione--</option>
             {cryptocurrencies.map(crypto =>(
                <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
             ))}
            </select>
        </div>

        <input type="submit" 
        value="Cotizar"/>

    </form>
  )
}

export default Form