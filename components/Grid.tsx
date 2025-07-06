import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridData } from "@/data";

const Grid = () => {
  return (
    <section>
      <BentoGrid>
        {gridData.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            spareImg,
            titleClassName,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
              className={className}
              titleClassName={titleClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
