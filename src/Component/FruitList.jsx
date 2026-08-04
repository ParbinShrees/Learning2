import { useState } from "react";

export default function FruitList() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Date" },
    { id: 5, name: "Elderberry" },
  ]);
    const deleteFruit=(id)=>{
    const updatedFruits=fruits.filter((fruit)=>fruit.id!==id);
    setFruits(updatedFruits);
  }
    return (
  <div>
    <h1> Fruit List: {fruits.length} </h1>
    {fruits.length===0 && <p>No fruits available</p>}
    <ul>
        {fruits.map((fruit) => (
        <li key={fruit.id}>{fruit.name}  <button onClick={()=>deleteFruit(fruit.id)}>Remove</button></li>
        ))}
      {/* <li> dfsdf </li> */}
    </ul>
  </div>
    )
}
