import { useMemo } from "react"
import { useCryptoStore } from "../store/store"
import Spinner from "./Spinner"


function CryptoPriceDisplay() {

    const { result, loading} = useCryptoStore()
    const hasResult = useMemo(() => !Object.values(result).includes(""), [result])


    return (
        <div className="result-wraper">
           { loading ? <Spinner/> : hasResult && (

                <>
                    <h2>Cotización</h2>
                    <div className="result">

                        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen cryptomoneda" />

                        <div>

                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>Precio más alto del dia: <span>{result.HIGHDAY}</span></p>
                            <p>Precio más bajo del dia: <span>{result.LOWDAY}</span></p>
                            <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Última actualización: <span>{result.LASTUPDATE}</span></p>

                        </div>

                    </div>

                </>
            )}


        </div>
    )
}

export default CryptoPriceDisplay