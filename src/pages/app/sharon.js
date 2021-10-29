import * as React from "react"
import PlotSummary from "../../components/plotSummary"
import CharLayout from "../../components/charlayout"


const Sharon = () => { 
  return (
    <>
      <CharLayout plotLink="sharon" charBg="sharonBg">
        <PlotSummary char="sharon" fullName="Sharon Sharalike" charLink="sharonBg"/>
      </CharLayout>
    </>
  )
}
export default Sharon