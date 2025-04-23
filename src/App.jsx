import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { initData } from "./initData.js";
import List from "./List.jsx";
import "./App.css";

function App() {
  const [data, setData] = useState(initData);
  const [activeListId, setActiveListId] = useState(null);

  return (
    <>
      <Header />
      <div className="lists flex items-start gap-4 h-[calc(100vh-56px)] py-8 px-3 ">
        {data.map((obj) => {
          return (
            <List
              key={obj.id}
              obj={obj}
              isActive={activeListId === obj.id}
              setActiveListId={setActiveListId}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;
