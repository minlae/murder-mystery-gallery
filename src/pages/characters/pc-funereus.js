import * as React from "react"
import { Link } from "gatsby"

// const test = "test4"

class Funereus extends React.Component {
  state = {
    modules: null
  }

  componentDidMount() {
    const allModules = document.querySelectorAll(".module");
    console.log(allModules);
    const modulesArray = []; 
    allModules.forEach((module) => {
      modulesArray.push(module.id);
    });
    console.log(modulesArray);
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
      if (module != keep) {
        const toHide = document.querySelector(`#${module}`);
        toHide.style.display="none";
      }
    });

  }
  showModule = (module) => {
    // console.log(document.querySelector(`#${module}`));
    let thisModule = document.querySelector(`#${module}`);
    thisModule.style.display="block";
    this.hideOthers(module);
  };

  render() {
    return(
      <>]
      {/* <button onClick={this.handleClick}>{test}</button> */}
      <nav>
        <button onClick={()=>this.showModule("plot")}>Plot Summary</button>
        <button onClick={()=>this.showModule("character")}>Character</button>
      </nav>
      <main id="plot" className="module">
        <h3>Plot summary:</h3>
        <p>General plot summary</p>
      </main>
      <main id="character" className="module">
        <h3>Character summary:</h3>
        <p>General character summary</p>
      </main>
      </>
    )
  }
}

  export default Funereus