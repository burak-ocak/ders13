import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState(null);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://swapi.dev/api/people/${result}`);
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, [result]);

  function updateAnswer(event) {
    const newAnswer = event.target.value;
    setAnswer(newAnswer);
  };

  function updateResult() {
    setResult(answer);
  }

  return (
    <div>
      <input
        placeholder="Aranacak numara:"
        type="number"
        value={answer}
        onChange={updateAnswer}
      />
      <button onClick={updateResult}>Ara</button>

      {
        data && <>

          <ul>
            <h2>{data.name}</h2>
            <li>Boy: {data.height}</li>
            <li>Kilo: {data.mass}</li>
            <li>Cinsiyet: {data.gender}</li>
            {data.vehicles && <li>Araçları: {data.vehicles.map((e) => <li><a href={e}>{e}</a></li>)}</li>}
          </ul>

          <ul>
            <h4>Oynadığı filmler:</h4>
            {data.films && data.films.map((e) => <li> <a href={e}>{e}</a> </li>)}
          </ul>
        </>

      }

    </div>
  );
};

export default App;