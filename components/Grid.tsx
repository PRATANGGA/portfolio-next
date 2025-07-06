import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridData } from "@/data";

const Grid = () => {
  return (
    <section>
      <BentoGrid>
        {gridData.map((item, index) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
