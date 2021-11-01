import * as React from "react"
import CharLayout from "../../components/charlayout"
import { getUser } from "../../services/auth"
import "../../styles/volunteer.modules.scss"

const Volunteer = () => {

    //need to pass props to CharLayout depending on character
    //charBg and plotLink
    const charPage = getUser().charBg;
    const plotPage = getUser().charname;

    console.log(plotPage);

  return (
    <CharLayout charBg={charPage} plotLink={plotPage}>
      <section className="volunteer">
        <h1>Thanks for volunteering!</h1>
        <h3>Here is how to play your role</h3>
        <ol className="ordered">
         
          <li className="ordered-li">
          <div className="step-container">
            <div className="step"></div>
            <span className="step-number">1.</span>
          </div>
          <p>Each of the suspects will be asked to give their recollections about the events surrounding the death of Libby LaBelle. When you are called upon, read the dialogue on page 6 of your role player information. It is important to include all information that has been given to you. This is vital for setting the stage for the investigation. Feel free to “ham it up.”</p></li>
          <li className="ordered-li">
          <div className="step-container">
            <div className="step alt"></div>
            <span className="step-number">2.</span>
          </div>
          <p>During the event, people will have the opportunity to question you and the other suspects. Expect to be asked about a variety of things. Keep this in mind when answering their questions:</p>
            <ul className="unordered">
              <li className="unordered-li">
                <p>Stick to the facts as presented in the role.</p>
              </li>
              <li className="unordered-li">
                <p>Be truthful. Give correct information about your character. Don't embellish your role to mislead the others. If you must ad-lib to answer a question, keep it within the context of your character. You must reveal any of the facts about your character if you are asked to do so by the investigators.</p>
              </li>
              <li className="unordered-li">
                <p>Do not offer any additional facts that the investigators do not directly request.</p>
              </li>
              <li className="unordered-li">
                <p>Be consistent. If two different investigators ask you the same question, answer the same way each time.</p>
              </li>
              <li className="unordered-li">
                <p>If your role does not have the information requested, then it is not true to the best of your knowledge. All significant facts are included in your information.</p>
              </li>
              <li className="unordered-li">
                <p>During the course of the investigation, you may find out facts about the other suspects. Do not pass this information on to others.</p>
              </li>
              <li className="unordered-li">
                <p>Your recollections may disagree with those of the other suspects. Stick to your story as being truthful.</p>
              </li>
            </ul>
          </li>
          <li className="ordered-li">
          <div className="step-container">
            <div className="step"></div>
            <span className="step-number">3.</span>
          </div>
          <p>Any of the suspects (including you) could be the murderer. This means that one of you will be lying.</p>
          </li>
        </ol>
        <strong className="important">Please come in character and arrive 15 minutes early so that any remaining questions can be answered.</strong>
      </section>
    </CharLayout>
  )
}

  export default Volunteer