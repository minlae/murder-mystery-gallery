import * as React from "react"
import PlotSummary from "../pages/plotSummary"

class MenuCards extends React.Component {
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
    //if you are on the page, it should no longer be a link
    //how do you know if you are on the page?
    //if page is same page as link, don't display link
    // const propsExist = () => {
    //   return !!charBg
    // }

    return(
      <>
      <nav>
        <ul>
          <li id="plot" class="module">
             <PlotSummary />
          </li>
          <li>Speaking Order</li>
          <li>What to Say</li>
          <li id="background" class="module">Background</li>
          <li>Clues</li>
        </ul>
      </nav>
      </>

    )
  }
}

export default MenuCards
