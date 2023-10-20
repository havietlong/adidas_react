import React from "react";

const ItemComponent = ({ title, image }) => {
  return <div className="ItemComponent">{title}</div>;
};

const Slider = ({ items }) => {
  const [clickCount, setClickCount] = React.useState(0);
  const mainWrap = React.useRef();
  const containerRef = React.useRef();

  const scrollSllides = (direction) => {
    const width = mainWrap.current?.clientWidth;
    let scrollTo;

    const diff = direction === "next" ? 1 : -1;
    const newValue = (clickCount + diff) % (items.length / 4);
    setClickCount(newValue);
    scrollTo = width * newValue;

    containerRef.current?.scrollTo({
      behavior: "smooth",
      left: scrollTo
    });
  };

  return (
    <div ref={mainWrap}>
      <button onClick={() => scrollSllides("prev")}>Prev</button>
      <button onClick={() => scrollSllides("next")}>Next</button>
      <div className="Slider" ref={containerRef}>
        {items?.map((item, index) => (
          <ItemComponent key={index} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
