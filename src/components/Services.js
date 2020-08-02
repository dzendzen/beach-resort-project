import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "Irure ullamco cupidatat aliqua consequat voluptate eiusmod occaecat.",
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info:
          "Pariatur deserunt ad duis qui ex id exercitation culpa aliqua nostrud in non adipisicing exercitation.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Commodo aliqua exercitation magna cupidatat qui minim occaecat velit.",
      },
      {
        icon: <FaBeer />,
        title: "Largest choice of beers",
        info:
          "Irure ullamco cupidatat aliqua consequat voluptate eiusmod occaecat.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
