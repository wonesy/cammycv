
import './App.css'
import { CityBot, CityTop } from './City'
import { Sun } from './Sun'

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
        <div className="something">
          <div className="top">
            <CityBot />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
