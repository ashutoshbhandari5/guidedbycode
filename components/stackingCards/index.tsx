"use client";

import React from "react";
import { contentCards } from "@/config/landing";
import Card from "./Card";

const SimpleCards: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      {contentCards.map((card, index) => (
        <div
          key={index}
          className="max-w-3xl"
        >
          <Card
            title={card.title}
            content={card.content}
            bullets={card.bullets}
            icon={card.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default SimpleCards;
