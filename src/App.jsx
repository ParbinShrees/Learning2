// import "./App.css";
// import { Routes, Route } from "react-router-dom";

// import Counter from "./Component/Counter";
// import FruitList from "./Component/FruitList";
// import SchoolCard from "./Component/SchoolCard/SchoolCard";

// import Navbar from "./Component/Nav";
// import Footer from "./Component/Footer";

// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Services from "./Pages/Services";
// import Contact from "./Pages/Contact";

// function App() {
//   return (
//     <div className="app">
//       <Navbar />

//       <main className="content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;




// function App() {
//   // The data lives HERE, at the top level
//  return <FruitList/>;
//   // const school = {
//   //   name: "Sunrise High School",
//   //   students: [
//   //     { id: 1, name: "Aarav", grade: "A" },
//   //     { id: 2, name: "Sita", grade: "B+" },
//   //     { id: 3, name: "Ramesh", grade: "A-" },
//   //   ],
//   // };

//   // return (
//   //   <div>
//   //     <h1>Welcome to the School Portal</h1>
//   //     {/* Level 0 ➜ Level 1: pass the whole school object */}
//   //     <SchoolCard school={school} />
//   //   </div>
//   // );
// }

// export default App;


import TodoList from "./Component/TodoList";

function App() {
  return (
    <>
      <TodoList />
    </>
  );
}

export default App;