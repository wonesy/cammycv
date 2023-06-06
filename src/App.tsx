import "./App.css"
import { CityBot, CityTop } from "./City"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { Skills } from "./Skills"
import { Sun } from "./Sun"

function App() {
  return (
    <div className="container">
      <main>
        <div className="intro">
          <div className="fixed-container">
            <div className="fixed">
              <Sun />
            </div>
          </div>
          <div className="bottom">
            <CityTop />
          </div>
        </div>
        <div className="cv">
          <div className="top">
            <CityBot />
          </div>
          <div className="spacer">
            <Experience />
          </div>
          <div className="spacer">
            <Skills />
          </div>
          <div className="spacer">
            <Education />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
