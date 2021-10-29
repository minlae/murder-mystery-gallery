import React from "react"
import CharLayout from "../../components/charlayout"

class SharonS extends React.Component { 
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <>
        <CharLayout char="sharonBg">
        <section id="plot" className="module">
          <h3>Plot summary:</h3>
          <p>General plot summary</p>
        </section>
        <section id="order" className="module">
          <h3>Order</h3>
          <p>1</p>
        </section>
        <section id="dialogue" className="module">
          <h3>Dialogue</h3>
          <p>General character summary</p>
        </section>
        <section id="clues" className="module">
          <h3>Clues</h3>
          <p>General character summary</p>
        </section>
        </CharLayout>
      </>
    )
  }
}
export default SharonS