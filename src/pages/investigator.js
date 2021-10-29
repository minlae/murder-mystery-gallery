import * as React from "react"

class Investigator extends React.Component {
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return (
      <>
      <h1>Investigator page</h1>
      </>
    )
  }
} 

  export default Investigator