import * as React from "react"
import { Link } from "gatsby"
import "../styles/plotsummary.modules.scss"
import heels from "../images/high-heels64.png"

class PlotSummary extends React.Component {

  state = {
    characters : [
      {
        "name" : "Lilac Labelle",
        "key" : "lilac",
        "slogan" : "Libby's first cousin",
        "desc" : "Libby and Lilac grew up together and were inseparable until they fell in love with the same man, Brett Cutler. Libby won the man, but how long would the victory last, and what would be the repercussions?"
      },
      {
        "name" : "Brett Cutler",
        "key" : "brett",
        "slogan" : "billionaire art dealer",
        "desc" : "He couldn't decide between Libby and Lilac, but Libby eventually won his affections. When she tossed him into the streets penniless, he was determined to return and show Libby what she had missed. How would he have gone about it?"
      },
      {
        "name" : "Pete Casso",
        "key" : "pete",
        "slogan" : "impressionist artist",
        "desc" : "His work has been extolled by art critics everywhere. Only Libby LaBelle called him a \"charlatan.\" It's been rumored that Libby's reviews cost Casso millions. Would he have been able to control his artistic temperament?"
      },
      {
        "name" : "Sharon Sharalike",
        "key" : "sharon",
        "image" : heels,
        "slogan" : "event planner",
        "desc" : "She's been rebuilding her career after Libby blasted her planning abilities several years ago. What would Libby have said about the event at the gallery? Could Sharon have afforded another bad review from her nemesis?"
      },
      {
        "name" : "Fiona Fakes",
        "key" : "fiona",
        "slogan" : "art forger",
        "desc" : "A negative review by Libby put an end to her budding career as a legitimate fine artist. Then, last week in her column, Libby promised to expose Fiona's black market activities. Was Fiona's solution as simple as black and white?"
      },
      {
        "name" : "Luigi Lambrusco",
        "key" : "luigi",
        "slogan" : "Italian chef",
        "desc" : "His cuisine and knowledge of wine made him a rising culinary star until he catered an event at which Libby was present. When Libby scoffed at his food fabrications, his business suffered. Could another such cut have been fatal?"
      }
    ]
  }
  
  componentDidMount() {
    const thisChar = this.state.characters.filter((character) => {
      return character.name === this.props.fullName;
    });
    const theRest = this.state.characters.filter((character) => {
      return character.name !== this.props.fullName;
    });
    const newCombo = thisChar.concat(theRest);
    
    this.setState({
      characters : newCombo
    });
  }

  render() {

    const fullName = this.props.fullName;
    const charLink = this.props.charLink;
    const characters = this.state.characters;

    return (
      <div className="container">
        <section className="plot-summary">
        <h1>The Plot...</h1>
        <p>Libby Labelle, art critic for the influential "Graphic News," used her vitriolic columns to destroy the careers of many artists. A good review from Libby meant instant success. A bad review could signal the end of the line for the career of even the most talented individual.</p>
        <p>And, Libby didn't limit her critiques to the art world. She'd regularly write scathing comments about the events she'd attended, panning the planning as well as the cuisine and wine selections. That's why, over the years, her list of eminent enemies grew. She was loved by her adoring fans and hated by the targets of her poisonous prose.</p>
        <p>When it was announced that impressionist artist Pete Casso was to preview an upcoming exhibit at the Creative Connection Art Gallery, Libby made a point of letting everyone know she'd be there to, once again, pen a negative review of Casso's latest masterpiece.</p>
        <p>Who would have suspected that the review would never be printed? For, in the middle of an acerbic attack on both the artwork and the occasion, Libby collapsed in a heap on the floor of the gallery, her worrisome word processor silenced forever.</p>
        <p>Did someone take the opportunity to do away with her explosive expletives? And, what past unknown indiscretions could have prompted the passion? It would take a palette of investigative skills to solve the case and identify the murderer.</p>
        <aside className="plotDownloads">
          <div className="dlpckg">
            <div className="file"></div>
            <h3>Download press release</h3>
          </div>
          <div className="dlpckg">
            <div className="file"></div>
            <h3>Download letter</h3>
          </div>
        </aside>
        </section>
 
        <section className="characters">
        {(fullName !== "investigator") ? (
          <>
            <div className="main">
              {/* Will have to include image URL in state with other details */}
              <h2>You are portraying:</h2>
              <div className="charProfile">
                <div className="imageContainer" style={{backgroundImage: `url(${characters[0].image})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center`
                }}></div>
                <div className="profileTitle">
                  <h3><Link to={`/app/${charLink}`}>{fullName}</Link></h3>
                  <p className="slogan">{characters[0].slogan}</p>
                </div>
              </div>
              <p>{characters[0].desc}</p>
            </div>
            <h2>The other suspects are...</h2>
            <section className="others">
            {characters.map((char,i) => {
              if (i > 0) {
                return (
                  <React.Fragment key={char.key}>
                    <h4 key={char.name}>{char.name}</h4>
                    <p key={char.slogan} className="slogan">{char.slogan}</p>
                    <p key={char.desc}>{char.desc}</p>
                  </React.Fragment>
                )
              } else {
                return undefined;
              }
            })}
            </section>
          </>
        ) : ( 
          <>
            <h3>You must apprehend one of these suspects</h3> 
            {characters.map((char) => {
              return (
                <React.Fragment key={char.key}>
                  <h4 key={char.name}>{char.name}, {char.slogan}</h4>
                  <p key={char.desc}>{char.desc}</p>
                </React.Fragment>
              )
            })}
          </>
          )
        }
        </section>
      </div>
    )
  }
}

export default PlotSummary