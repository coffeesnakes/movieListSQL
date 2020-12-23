import React from "react";

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      length: null,
      rating: null
    };
  }

  render() {
    const { name, length, rating } = this.state;
    return (
      <div>
        <form>
          <label>
            {" "}
            name
            <input name="name" value={name} size="10" />
          </label>
          <label>
            {" "}
            length
            <input name="length" value={length} size="4"  />
          </label>
          <label>
            {" "}
            rating
            <input name="rating" value={rating} size="2" />
          </label>
        </form>
      </div>
    );
  }
}

export default MovieForm;
