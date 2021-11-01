import * as React from "react"
import PlotSummary from "../../components/plotSummary"
import CharLayout from "../../components/charlayout"


const PeteC = () => { 
  return (
    <>
      <CharLayout plotLink="peteC" charBg="peteBg">
        <PlotSummary fullName="Pete Casso" charLink="peteBg"/>
      </CharLayout>
    </>
  )
}
export default PeteC