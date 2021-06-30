import React from "react";
import HornedBeasts from "./HornedBeasts";
import ArrayPh from "./photoArray.json";
import { Form } from "react-bootstrap/";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastArray: ArrayPh,
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    // if  // fillter for the beastArray and set state
    let newArray;
    if (event.target.value !== "all") {
      //
      newArray = ArrayPh.filter(function (n) {
        return n.horns == event.target.value;
      });
    } else {
      newArray = ArrayPh;
    }

    console.log(newArray);
    // sit state
    this.setState({
      beastArray: newArray,
    });
  };

  render() {
    return (
      <div className="contaner">
        <Form onSubmit={this.submitForm}>
          <Form.Group aria-label="Default select example">
            <Form.Label>choose your favorite cat breed</Form.Label>
            <Form.Control
              as="select"
              name="favoriteCatBreed"
              onChange={this.handleChange}
            >
              <option value="all">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">Woow...</option>
            </Form.Control>
          </Form.Group>
        </Form>

        {/* /////////////////////////// */}

        {this.state.beastArray.map((item, i) => {
          return (
            <HornedBeasts
              title={item.title}
              image_url={item.image_url}
              description={item.description}
              key={i}
              passFundataOfModlee={this.props.passFundataOfModlee}
              passFunhandleClose={this.props.passFunhandleClose}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;

// import React from "react";
// import HornedBeasts from "./HornedBeasts";

// class Main extends React.Component {
//   render() {
//     return (
//       <div className="HornedBeasts">
//         <HornedBeasts
//           title="UniWhal"
//           imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
//           description="A unicorn and a narwhal nuzzling their horns"
//           num="1"
//         />

//         <HornedBeasts
//           title="Unicorn Head"
//           imageUrl="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
//           description="Someone wearing a creepy unicorn head mask"
//           num="2"
//         />
//         <HornedBeasts
//           title="Rhino Family"
//           imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
//           description="Mother (or father) rhino with two babies"
//           num="3"
//         />
//       </div>
//     );
//   }
// }

// export default Main;
