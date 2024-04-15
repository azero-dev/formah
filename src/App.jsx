import { useEffect, useState } from "react";
import Menu from "./Components/Menu";
import ModalComp from "./Components/ModalComp";
import "./App.css";
import './fonts/punk_typewriter/PunkTypewriter.otf';

function App() {
  const [isOpen, setOpen] = useState(false);

  function toggleModal() {
    isOpen ? setOpen(false) : setOpen(true);
  }

  useEffect(() => {
    function animateHueRotate() {
      const bgElement = document.getElementById("main-bg");
      let hue = 0;
      setInterval(() => {
        if (bgElement) {
          hue = hue + 1;
          bgElement.style.filter = `hue-rotate(${hue}deg)`;
        }
      }, 25000 / 360);
    }
    animateHueRotate();
  }, []);

  return (
    <>
      <div id="main-bg">
        <Menu isOpen={isOpen} setOpen={setOpen} />
        <ModalComp isOpen={isOpen} toggleModal={toggleModal} />
      </div>
    </>
  );
}

export default App;
