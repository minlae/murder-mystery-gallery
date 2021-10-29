import * as React from "react"
import CharLayout from "./charlayout"
import Layout from "./layout"


class PlotSummary extends React.Component {

  render() {
  return (
    <Layout>
      <CharLayout page={this.props.path}>
        <section id="character" className="module">
        <h3>Plot Summary</h3>
        <p>Libby Labelle, art critic for the influential "Graphic News," used her vitriolic columns to destroy the careers of many artists. A good review from Libby meant instant success. A bad review could signal the end of the line for the career of even the most talented individual.</p>
        <p>And, Libby didn't limit her critiques to the art world. She'd regularly write scathing comments about the events she'd attended, panning the planning as well as the cuisine and wine selections. That's why, over the years, her list of eminent enemies grew. She was loved by her adoring fans and hated by the targets of her poisonous prose.</p>
        <p>When it was announced that impressionist artist Pete Casso was to preview an upcoming exhibit at the Creative Connection Art Gallery, Libby made a point of letting everyone know she'd be there to, once again, pen a negative review of Casso's latest masterpiece.</p>
        <p>Who would have suspected that the review would never be printed? For, in the middle of an acerbic attack on both the artwork and the occasion, Libby collapsed in a heap on the floor of the gallery, her worrisome word processor silenced forever.</p>
        
        <p>Did someone take the opportunity to do away with her explosive expletives? And, what past unknown indiscretions could have prompted the passion? It would take a palette of investigative skills to solve the case and identify the murderer.</p>
        <p>Libby had panned Luigi’s catering company, “Bellissimo Cibo” (it means “beautiful food”) when it catered a gallery opening in Soho. Luigi was forced to take a job in a diner in order to make ends meet. You supported him as he started a new catering company, “Cibo da Morire.” (It means “Food to Die for.”) You told him that he would be your “caterer of choice” for any future events. You’ve kept that promise.</p>
        <p>You and Luigi have become close friends and confidantes. He calls you “Sharini.” By working together, the two of you have been able to make a comeback.</p>
        <p>Nine months ago, you were retained by the Creative Connection Art Gallery to plan the “preview” of an exhibit by impressionistic artist Pete Casso. You recommended that Luigi do the catering. Both of you suspected that Libby LaBelle would be there because she wouldn’t be able to pass up another opportunity to write a snarky review of Casso’s work.</p>
        <p>Luigi doesn’t like Libby LaBelle, but he is a realist. He’s willing to try to get back into her good graces because she knows what a bad review from Libby could mean. You, on the other hand, still hold a huge grudge. You strongly dislike Libby LaBelle and have even suggested that Luigi put something in the wine he serves to her. Luigi thought you were kidding, but you were deadly serious.</p>
        <p>The two of you are quite a contrast. He is usually dressed in chef gear while you like fashionable clothes. You’ve even begun wearing spiked heels which sometimes damage the clients’ floors. You jokingly (at least you made it sound like a joke) said to him that, “It would be a real kick to be around Libby LaBelle again.”</p>
        </section>
      </CharLayout>
    </Layout>
  )
}
}

export default PlotSummary