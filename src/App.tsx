import {useEffect, useState} from "react";
import type {Character} from "./typs.ts";

function App() {
  const [data, setData] = useState<Character[]>([]);

  useEffect(
    () => {
      async function fetchData(){
          const raw = await fetch('https://rickandmortyapi.com/api/character');
          const dataObj = (await raw.json()).results;
          setData(dataObj);
      }
      fetchData().then(
          ()=> console.log("Data Fetched")
      ).catch(
          (err) => console.log("Error occurred:" + err)
      );
    },
    []
  )

  return (
    <>
      {
        data.map(
            (char)=> (
                <div key={char.id}>
                  <img src={char.image} alt={char.name} />
                  <h2>{char.name}</h2>
                  <h5>{char.status==='dead'?'Dead':''}</h5>
                </div>
            )
        )
      }
    </>
  )
}

export default App
