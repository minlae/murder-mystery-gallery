import * as React from "react"
import { Link } from "gatsby"


class PlotSummary extends React.Component {

  render() {
    const char = this.props.char;
    const fullName = this.props.fullName;
    const charLink = this.props.charLink;
    return (
        <section id="plot" className="module">
        <h3>Plot Summary</h3>
        <p>Libby Labelle, art critic for the influential "Graphic News," used her vitriolic columns to destroy the careers of many artists. A good review from Libby meant instant success. A bad review could signal the end of the line for the career of even the most talented individual.</p>
        <p>And, Libby didn't limit her critiques to the art world. She'd regularly write scathing comments about the events she'd attended, panning the planning as well as the cuisine and wine selections. That's why, over the years, her list of eminent enemies grew. She was loved by her adoring fans and hated by the targets of her poisonous prose.</p>
        <p>When it was announced that impressionist artist Pete Casso was to preview an upcoming exhibit at the Creative Connection Art Gallery, Libby made a point of letting everyone know she'd be there to, once again, pen a negative review of Casso's latest masterpiece.</p>
        <p>Who would have suspected that the review would never be printed? For, in the middle of an acerbic attack on both the artwork and the occasion, Libby collapsed in a heap on the floor of the gallery, her worrisome word processor silenced forever.</p>
        <p>Did someone take the opportunity to do away with her explosive expletives? And, what past unknown indiscretions could have prompted the passion? It would take a palette of investigative skills to solve the case and identify the murderer.</p>
        {(char !== "investigator") ? (
          <h3>You are portraying <Link to={`/app/${charLink}`}>{fullName}</Link>, one of the below suspects...</h3>
        ) : ( <h3>You must apprehend one of these suspects</h3> )
        }
        <h4>Lilac Labelle, Libby's first cousin</h4>
        <p>
          Libby and Lilac grew up together and were inseparable until they fell in love with the same man, Brett Cutler. Libby won the man, but how long would the victory last, and what would be the repercussions?
        </p>
        <h4>Brett Cutler, billionaire art dealer</h4>
        <p>
          He couldn't decide between Libby and Lilac, but Libby eventually won his affections. When she tossed him into the streets penniless, he was determined to return and show Libby what she had missed. How would he have gone about it?
        </p>
        <h4>Pete Casso, impressionist artist</h4>
        <p>
          His work has been extolled by art critics everywhere. Only Libby LaBelle called him a "charlatan." It's been rumored that Libby's reviews cost Casso millions. Would he have been able to control his artistic temperament?
        </p>
        <h4>Fiona Fakes, art forger</h4>
        <p>
          A negative review by Libby put an end to her budding career as a legitimate fine artist. Then, last week in her column, Libby promised to expose Fiona's black market activities. Was Fiona's solution as simple as black and white?
        </p>
        <h4>Sharon Sharalike, event planner</h4>
        <p>
          She's been rebuilding her career after Libby blasted her planning abilities several years ago. What would Libby have said about the event at the gallery? Could Sharon have afforded another bad review from her nemesis?
        </p>
        <h4>Luigi Lambrusco, Italian chef</h4>
        <p>
          His cuisine and knowledge of wine made him a rising culinary star until he catered an event at which Libby was present. When Libby scoffed at his food fabrications, his business suffered. Could another such cut have been fatal?
        </p>
        </section>
      )
    }
}

export default PlotSummary