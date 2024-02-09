import React, {useState,useEffect,useContext} from 'react'
import { MyContext } from '../context'

function AboutComponent() {
  const [data, setData] = useState(0);
  const {someValue, secondValue, pokemonData, fetchData} = useContext(MyContext);

  useEffect(() => {
    setData(100);
    //taruh disini karena agar kita refresh datanya sudah ada
    fetchData();
    }, [fetchData]);

    console.log(pokemonData);

  return (
    <div>
        <h1 style={{color:"navy"}}>Belajar Menghitung</h1>
        Count : {data}
        <br></br>
        <button onClick={() => setData(data+1)} style={{margin:"8px"}}>
                Increment
        </button>
        <button onClick={() => setData(data-1)}>
                Decrement
        </button>
        <p>Nilai dari Context : {someValue} & {secondValue}</p>
        {/* pakai ? (optional) untuk menginsiasi data yang masih undifind  */}
        <h2>Name {pokemonData?.name}</h2>
        <h2>Weight {pokemonData?.weight}</h2>
    </div>
  )
}

export default AboutComponent