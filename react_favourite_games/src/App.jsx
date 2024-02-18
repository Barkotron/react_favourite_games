import './App.css'
import Header from './components/Header'
import ContentMenu from './components/ContentMenu'

const content = [
  {
    tabName: "HD2",
    fullName: "Helldivers 2",
    tagLine: "For managed democracy!",
    content: "A horde shooter about blasting bugs and bots in the name of managed democracy",
    image: "hd2-wallpaper.jpg"
  },
  {
    tabName: "DRG",
    fullName: "Deep Rock Galactic",
    tagLine: "Danger, Darkness, Dwarves",
    content: "A horde shooter about blasting bugs and mining minerals - 4 player coop",
    image: "drg-wallpaper.jpg"
  },
  {
    tabName: "OW2",
    fullName: "Overwatch 2",
    tagLine: "report our hanzo plz",
    content: "An infuriating 5v5 multiplayer shooter where everyone is a dickhead",
    image: "ow2-wallpaper.jpg"
  },
  {
    tabName: "DSP",
    fullName: "Dyson Sphere Program",
    tagLine: "Damn, out of belts again!",
    content: "A relaxed multiplanetary factory builder",
    image: "dsp-wallpaper2.jpg"
  },
  {
    tabName: "ONI",
    fullName: "Oxygen Not Included",
    tagLine: "Suffocation!",
    content: "A colony builder where you manage resources to keep your dupes alive and well",
    image: "oni-wallpaper.jpg"
  },
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
