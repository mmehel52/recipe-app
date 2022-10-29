import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "../../components/navbar/Nav";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [searchBar, setSearchBar] = useState(null);
  const [meal, setMeal] = useState(null);
  const [data, setData] = useState(null);
  const api_key = "8a73009571cb02899f2e2400ce448e72";
  const app_id = "91a8071c";
  const getApi = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${searchBar}&app_id=${app_id}&app_key=${api_key}&mealType=${meal}`
      )
      .then((res) => {})
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
    </div>
  );
};

export default Home;
