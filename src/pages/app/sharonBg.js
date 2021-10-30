import * as React from "react"
import CharLayout from "../../components/charlayout"
import "../../styles/charinfo.modules.scss"
import palette from "../../images/color-palette-512.png"

const SharonBg = () => {
  return (
    <CharLayout charBg="sharonBg" plotLink="sharonS">
      <div className="outer-container-sharon">
        <div className="charbg-container">
          <section className="column1">
            <div className="icon-title-container">
              <div className="img-container-title"></div>
              <h1>Sharon Sharalike</h1>
            </div>
            <p>PROVIDE LINKS TO OTHER PARTS OF PAGE</p>
            <p>You, Sharon Sharalike, are an event planner who’s been retained by the Creative Connection Art Gallery to coordinate the preview of impressionistic artist Pete Casso’s upcoming exhibit.</p>
            <p>You began your career in event planning 25 years ago. You were hired by a New York company that organized large conventions and special events for big money clients. You worked you way up in both responsibility and compensation until, five years ago, starting your own event planning firm, “Events R Us.” You took several large clients with you and all was going well until, three years ago, when you were retained by an art gallery on the Upper West Side to organize an exhibit.</p>
            <p>Libby LaBelle, the art critic of “The Graphic News,” was at the event. You thought she was only there to review the exhibit, but she also took the opportunity to comment on your work. In her column, she wrote that the event was like “...watching an elephant snooze without all of the usual excitement.”</p>
            <p>Your high-priced clients dried up and you were forced to lower your fees and begin planning lesser-known events.</p>
            <p>Libby has been writing her column in “The Graphic News” for 19 years. She’s never discussed her credentials as an art critic, but has gained quite a following in the art world – much of it because of her acerbic style of writing. She is aware of the power she holds over people’s lives and relishes that position.</p>
            <p>After a rough period, you began to building a new business, “Sharon the Excitement.” You are working hard to get back on top and things are looking up. Two years ago, you were eating at your favorite diner on Times Square when you asked to meet the cook because the food was so good.</p>
            <p>That’s how you became friends with Luigi Lambrusco. The two of you had a drink together and were surprised to find that you both have a vendetta against Libby LaBelle.</p>
            <p>Libby had panned Luigi’s catering company, “Bellissimo Cibo” (it means “beautiful food”) when it catered a gallery opening in Soho. Luigi was forced to take a job in a diner in order to make ends meet. You supported him as he started a new catering company, “Cibo da Morire.” (It means “Food to Die for.”) You told him that he would be your “caterer of choice” for any future events. You’ve kept that promise.</p>
            <p>You and Luigi have become close friends and confidantes. He calls you “Sharini.” By working together, the two of you have been able to make a comeback.</p>
            <p>Nine months ago, you were retained by the Creative Connection Art Gallery to plan the “preview” of an exhibit by impressionistic artist Pete Casso. You recommended that Luigi do the catering. Both of you suspected that Libby LaBelle would be there because she wouldn’t be able to pass up another opportunity to write a snarky review of Casso’s work.</p>
            <p>Luigi doesn’t like Libby LaBelle, but he is a realist. He’s willing to try to get back into her good graces because she knows what a bad review from Libby could mean. You, on the other hand, still hold a huge grudge. You strongly dislike Libby LaBelle and have even suggested that Luigi put something in the wine he serves to her. Luigi thought you were kidding, but you were deadly serious.</p>
            <p>The two of you are quite a contrast. He is usually dressed in chef gear while you like fashionable clothes. You’ve even begun wearing spiked heels which sometimes damage the clients’ floors. You jokingly (at least you made it sound like a joke) said to him that, “It would be a real kick to be around Libby LaBelle again.”</p>
          </section>
          <section className="column2">
            <div className="callout">
              <div className="order">
                <div className="info">
                  <span className="text">order</span>
                  <span className="number">1</span>
                </div>
              </div>
                <h2>Say this when asked to speak:</h2>
                <p>It’s too bad that Libby LaBelle is dead, but we shouldn’t let that dampen this wonderful occasion. Pete Casso’s new masterpiece, “Black Cat at Midnight,” was a highlight of the reception. Please excuse the confusion about the timing. The gallery had a schedule conflict.</p>
                <p>While I was introducing Luigi and Pete to take a bow, Libby kept yelling out nasty comments about Luigi’s cuisine and Pete’s art—the same type of comments she’d written in her columns in “The Graphic News.”</p>
                <p>When she approached me in the middle of my introductions, and with a glass of wine in her hand, it was apparent that she’s had too much to drink. That’s when she began to stagger.</p>
                <p>She fell to the floor and several people tried to help her. Someone called an ambulance and Libby was whisked away so that we could continue with this fantastic event that I’d planned.</p>
                <p>Who would have predicted that Pete’s explanation of his masterpiece would be interrupted not only by Fiona Fakes, but also by that smarmy reunion of Lilac LaBelle and Brett Cutler? If they had so much affection for each other, why hadn’t they been in contact with each other? If you ask me, there’s more to that story—especially since Libby and Lilac look so much alike.</p>
                <p>That’s all I have to say. I’ve put a lot of work into this event and my feet are killing me.</p>
              </div>
              <aside className="callout second">
                <h2>Additional:</h2>
                <p>As you are circulating among the guests, be professional and show very little emotion. Tell people that you will do whatever it takes to achieve your goals.</p>  
                <p>When you talk to guests who are drinking wine, say that Luigi knows everything there is to know about wine. You depend upon him to select the perfect vintages for the events that you plan.</p>
                <p>Make off the cuff comments about how difficult it is to be on your feet all night when you are coordinating your events. Say to people that you’ve changed from spike heeled shoes to flat-soled shoes because, “Those shoes were killing me.”</p>
            </aside>
            <aside className="callout">
              <h2>Clues</h2>
              <p className="slogan">(The following information about you is in the clues that have been given to the guests.)</p>
              <p>Have you noticed that Sharon Sharalike always dresses professionally, and with style? I’ve heard that a client of hers once complained that the stiletto heels she wore to an exhibit damaged the hardwood floors of the client’s gallery.</p>
              <p>A few years ago, Sharon Sharalike was one of the top event planners on the East Coast. Libby LaBelle gave a scathing review to a gallery opening she’d planned and I heard that her business suffered. What a coincidence that they both ended up here.</p>
            </aside>
            <aside className="downloads">
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
        </div>
        <img className="palette-icon" src={palette}/>
      </div>
    </CharLayout>
  )
}

export default SharonBg