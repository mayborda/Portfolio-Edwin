import React from "react";
import portfolios from "../data/data";

function Web({ webItem }) {
  return (
    <div className="portfolios">
      {portfolios.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div>
              <img src={item.image} alt="" />
              <ul>
                <button className="btn">
                  <a className="link" href={item.link}>
                    {item.icon}
                  </a>
                </button>
              </ul>
            </div>
            <h3>{item.title}</h3>
            <p className="description-p">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Web;
