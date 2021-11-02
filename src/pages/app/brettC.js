import * as React from "react"
import PlotSummary from "../../components/plotSummary"
import CharLayout from "../../components/charlayout"


const BrettC = () => { 
  return (
    <>
      <CharLayout plotLink="brettC" charBg="brettBg">
        <PlotSummary fullName="Brett Cutler" charLink="brettBg"/>
      </CharLayout>
    </>
  )
}
export default BrettC