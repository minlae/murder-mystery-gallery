import * as React from "react"
import CharLayout from "../../components/charlayout"
import { getUser } from "../../services/auth"

class Volunteer extends React.Component {
  
  render() 
  {
    //need to pass props to CharLayout depending on character
    //charBg and plotLink
    const charPage = getUser().charBg;
    const plotPage = getUser().charname;

  return (
    <CharLayout charBg={charPage} plotLink={plotPage}>
      <section id="volunteer" className="module">
        <h3>Thanks for volunteering to role play! Here's what expected of you.</h3>
        <ol>
          <li>Each of the suspects will be asked to give their recollections about the events surrounding the death of Libby LaBelle. When you are called upon, read the dialogue on page 6 of your role player information. It is important to include all information that has been given to you. This is vital for setting the stage for the investigation. Feel free to “ham it up.”</li>
          <li>During the event, people will have the opportunity to question you and the other suspects. Expect to be asked about a variety of things. Keep this in mind when answering their questions:
            <ul>
              <li>Stick to the facts as presented in the role.</li>
              <li>Be truthful. Give correct information about your character. Don't embellish your role to mislead the others. If you must ad-lib to answer a question, keep it within the context of your character. You must reveal any of the facts about your character if you are asked to do so by the investigators.</li>
              <li>Do not offer any additional facts that the investigators do not directly request.</li>
              <li>Be consistent. If two different investigators ask you the same question, answer the same way each time.</li>
              <li>If your role does not have the information requested, then it is not true to the best of your knowledge. All significant facts are included in your information.</li>
              <li>During the course of the investigation, you may find out facts about the other suspects. Do not pass this information on to others.</li>
              <li>Your recollections may disagree with those of the other suspects. Stick to your story as being truthful.</li>
            </ul>
          </li>
          <li>Any of the suspects (including you) could be the murderer. This means that one of you will be lying.</li>
        </ol>
        <p>Please come in character and arrive 15 minutes early so that any remaining questions can be answered.</p>
      </section>
    </CharLayout>
  )
}
} 

  export default Volunteer