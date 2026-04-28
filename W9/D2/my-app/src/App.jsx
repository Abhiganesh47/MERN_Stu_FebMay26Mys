import { useState } from 'react'
import './App.css'
import { FunctionName } from './components/FunctionalCompOne'
import { FunctionalComponentsBasics } from './components/FunctionalComponentsBasics'
import { ClassComponentsBasics } from './components/ClassComponentsBasics'
import { FunctionComp } from './components/FunctionalComponentsAdv'
import { ClassComponentState } from './components/ClassComponentState'
function App() {
  return (
    // fragment: used to group multiple elements without adding extra nodes to the DOM :<> </> acts like a parent tags.
    <>
     {/* <FunctionName/> Component name */}
     {/* <FunctionalComponentsBasics/> */}

     {/* <ClassComponentsBasics/> */}

     {/* <FunctionComp/> */}
    < ClassComponentState/>

    </>
  )
}
export default App