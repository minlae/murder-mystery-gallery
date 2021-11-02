import * as React from "react"
import PlotSummary from "../../components/plotSummary"
import CharLayout from "../../components/charlayout"


const LilacL = () => { 
  return (
    <>
      <CharLayout plotLink="lilacL" charBg="lilacBg">
        <PlotSummary fullName="Lilac LaBelle" charLink="lilacBg"/>
      </CharLayout>
    </>
  )
}
export default LilacL