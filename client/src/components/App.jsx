import React from 'react';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          name: "icicles",
          length: "1 second",
          rating: 4
        },
        {
          name: "Sandy Beach",
          length: "4 seconds",
          rating: "10"
        }
      ],
    };
  }

render() {
  return (
    <div>
      < Header />


    </div>
  )
}


}
export default App;