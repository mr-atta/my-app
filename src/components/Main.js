import React from "react";
import HornedBeasts from "./HornedBeasts";
import ArrayPh from "./photoArray.json";

class Main extends React.Component {
  render() {
    return (
      <div className="Horned">
        {ArrayPh.map((item, i) => {
          return (
            <HornedBeasts
              title={item.title}
              image_url={item.image_url}
              description={item.description}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
