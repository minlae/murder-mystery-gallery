import * as React from "react"
import PlotSummary from "../../components/plotSummary"
import CharLayout from "../../components/charlayout"


const SharonS = () => { 
  return (
    <>
      <CharLayout plotLink="sharonS" charBg="sharonBg">
        <PlotSummary fullName="Sharon Sharalike" charLink="sharonBg"/>
      </CharLayout>
    </>
  )
}
export default SharonS