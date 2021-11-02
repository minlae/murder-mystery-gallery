import * as React from "react"
import PlotSummary from "../../components/plotSummary"
import CharLayout from "../../components/charlayout"


const LuigiL = () => { 
  return (
    <>
      <CharLayout plotLink="luigiL" charBg="luigiBg">
        <PlotSummary fullName="Luigi Lambrusco" charLink="luigiBg"/>
      </CharLayout>
    </>
  )
}
export default LuigiL