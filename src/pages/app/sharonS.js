import * as React from "react"
import PlotSummary from "../../components/plotSummary"
import CharLayout from "../../components/charlayout"


class SharonS extends React.Component { 
  state = {
    modules: null
  }

  componentDidMount() {
    const allModules = document.querySelectorAll(".module");
    const modulesArray = []; 
    allModules.forEach((module) => {
      modulesArray.push(module.id);
    });
    this.setState({
      modules: modulesArray
    });
  }

  hideOthers = (keep) => {
    //set displayNone to all IDs other than the one to keep
    // go through array of modules, check to see if each one matches keep. If not, hide it; otherwise leave it
    const modules = this.state.modules;
    console.log(keep);
    console.log(modules);
    modules.forEach((module) => {
      console.log(module);
      if (module !== keep) {
        const toHide = document.querySelector(`#${module}`);
        toHide.style.display="none";
      }
    });

  }
  showModule = (module) => {
    let thisModule = document.querySelector(`#${module}`);
    thisModule.style.display="block";
    this.hideOthers(module);
  };
  
  render() {
    return (
      <>
        <CharLayout>
        <section id="plot" className="module">
          <PlotSummary char="sharon" fullName="Sharon Sharalike" charLink="sharonBg"/>
          {/* Include char you'll be playing as part of plot summary */}
        </section>
        {/* <section id="volunteer" className="module hidden">
          <h3>Volunteer Info</h3>
        </section>
        <section id="order" className="module hidden">
          <h3>Order</h3>
          <p>1</p>
        </section>
        <section id="character" className="module hidden">
          {/* Include on page:  
          <h3>Dialogue</h3>
          <p>General character summary</p>
        </section>
        <section id="clues" className="module hidden">
          <h3>Clues</h3>
          <p>General character summary</p>
        </section> */}
        </CharLayout>
      </>
    )
  }
}
export default SharonS