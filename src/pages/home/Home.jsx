import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "../../components/navbar/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";

const Home = () => {
  const [searchBar, setSearchBar] = useState(null);
  const [meal, setMeal] = useState(null);
  const [data, setData] = useState(null);
  const api_key = "d616f2420a85019cd24d53f8f75e75d6	";
  const app_id = "e79a83cc";
  const getApi = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${searchBar}&app_id=${app_id}&app_key=${api_key}&mealType=${meal}`
      )
      .then((res) => {
        console.log(res.data.hits);
        setData(res.data.hits);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <Nav />
      <div className="flex">
        <input
          type="text"
          className="bg-black text-white p-2 rounded-lg m-3"
          placeholder="search"
          onChange={(e) => {
            setSearchBar(e.target.value);
          }}
        />
        <select
          className="rounded-lg bg-black text-white p-1 m-3"
          onChange={(e) => {
            setMeal(e.target.value);
          }}
        >
          <option value="breakfast">breakfast</option>
          <option value="brunch">brunch</option>
          <option value="lunch">lunch/dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">TeaTime</option>
        </select>
        <Button variant="warning" onClick={() => getApi()}>
          Search
        </Button>
      </div>
      <div>
        {data && data.map((item, idx) => <Card data={item} key={idx} />)}
      </div>
    </div>
  );
};

export default Home;
