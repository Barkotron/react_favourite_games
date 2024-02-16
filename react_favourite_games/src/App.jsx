import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ContentMenu from './components/ContentMenu'

const content = [
  {
    tabName: "DRG",
    content: "Danger, Darkness, Dwarves\nA horde shooter about blasting bugs and mining minerals\n4 player coop"
  },
  {
    tabName: "Overwatch 2",
    content: "An infuriating 5v5 multiplayer shooter where everyone is a dickhead"
  },
  {
    tabName: "DSP",
    content: "A relaxed multiplanetary factory builder"
  },
  {
    tabName: "ONI",
    content: "A colony builder where you manage resources to keep your dupes alive and well"
  }
];

function App() {
  

  return (
    <>
      <Header></Header>
      <ContentMenu content={content}></ContentMenu>
    </>
  );
}

export default App
