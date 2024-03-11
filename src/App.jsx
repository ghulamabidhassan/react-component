import "./App.css";
import { useState } from "react";
import data from "./data";

function App() {
  const [id, setId] = useState(0);

  const toggle = (e) => {
    let elem = e.currentTarget.parentElement;
    let btns = elem.querySelectorAll("button");
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        btns.forEach((elem) => {
          elem.classList.remove("toggle");
        });
        e.target.classList.add("toggle");
      });
    });
    setId(e.currentTarget.dataset.id);
  };

  return (
    <main>
      <section>
        <div className="overlay"></div>
        <article className="btns">
          <button data-id="0" onClick={toggle} className="toggle">
            balance
          </button>
          <button data-id="1" onClick={toggle} className="">
            audience
          </button>
          <button data-id="2" onClick={toggle} className="">
            refunds
          </button>
        </article>

        {data[id]}
      </section>
    </main>
  );
}

export default App;
