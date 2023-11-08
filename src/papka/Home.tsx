import { useState, useEffect } from "react";

const API = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com/')
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Сайт котиков</h1>
      <div className="cat">
        <ul>
          {data.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <API />
    </div>
  );
}

export default Home;