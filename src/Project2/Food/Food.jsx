import React, { useState, useEffect } from "react";
import { FoodCard } from "./FoodCard";
import "./Food.css";
import axios from "axios";

export const Food = () => {
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);

  const searchFood = (event) => {
    const searchValue = event.target.value;

    if (searchValue === "") {
      setFilterData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilterData(filter);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  const filterFood = (type) => {
    if (type === "all") {
      setFilterData(data);
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
  };

  const fetchFoodData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/");
      setData(response.data);
      setFilterData(response.data);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  useEffect(() => {
    fetchFoodData();
  }, []);

  return (
    <div className="filter-container">
      <div className="filter-btns">
        {filterBtns.map((value) => (
          <button
            key={value.name}
            onClick={() => filterFood(value.type)}
            className="food-btns"
          >
            {value.name}
          </button>
        ))}
        {/* <button className="food-btns">Breakfast</button>
        <button className="food-btns">Lunch</button>
        <button className="food-btns">Dinner</button> */}
        <input
          id="search"
          type="text"
          onChange={searchFood}
          placeholder="Search Food..."
        />
      </div>
      <div className="filter-cards">
        {filterData?.map((food, i) => {
          return <FoodCard key={i} data={food} />;
        })}
      </div>
    </div>
  );
};
