import React, { useState } from "react";
import cards from "./data/data.json";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = cards.slice(firstIndex, lastIndex);
  const npage = 10;
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function changeCPage(id) {
    setCurrentPage(id);
  }
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== 3) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 py-2">
          {cards &&
            records.map((card) => {
              return (
                <div className="col" key={card.id}>
                  <div className="card">
                    <i className="fa fa-heart"></i>
                    <img src={card.image} class="card-img-top"></img>

                    <div className="card-body">
                      <div className="d-flex justify-content-center-around mx-2">
                        <h5 className="card-title">{card.name}</h5>
                        <p className="px-5">{card.date}</p>
                      </div>
                      <div className="mb-3 d-flex justify-content-center-around">
                        <ul className="first">
                          <li>
                            <i className="fa fa-users"></i>
                            {card.people}
                          </li>
                          <li>
                            <i className="fa fa-dashboard"></i>
                            {card.dist}
                          </li>
                        </ul>
                        <ul className="second">
                          <li>
                            <i className="fa fa-car"></i>
                            {card.mode}
                          </li>
                          <li>
                            <i className="fa fa-circle"></i>
                            {card.function}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-around">
                      <h5>
                        <b>190$</b>
                      </h5>
                      <button className="btn btn-primary">Rent Now</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <nav className="navbar">
        <ul className="pagination modal-4">
          <li className="prev">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>

          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <a href="#" className="page-item" onClick={() => changeCPage(n)}>
                {n}
              </a>
            </li>
          ))}

          <li className="next">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
