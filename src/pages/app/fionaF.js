import * as React from "react"
import PlotSummary from "../../components/plotSummary"
import CharLayout from "../../components/charlayout"


const FionaF = () => { 
  return (
    <>
      <CharLayout plotLink="fionaF" charBg="fionaBg">
        <PlotSummary fullName="Fiona Fakes" charLink="fionaBg"/>
      </CharLayout>
    </>
  )
}
export default FionaF