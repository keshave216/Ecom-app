import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";

import { products } from "./constant/cardData";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <div className="m-[100px] p-[24]"></div>
      <div className="bg-green-300 m-[100px] p-[24] flex-col ">
        <div className="card-header">
          <span className="card-title">Just For You</span>
        </div>
        <div className="bg-yellow-200 card-item flex flex-wrap">
          {products.map((item) => {
            if (item.title === "card") {
              return (
                <div key={item.id}>
                  <Card
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                  />
                </div>
              );
            } else {
              return <div key={item.id}>Condition not matached</div>;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default App;
