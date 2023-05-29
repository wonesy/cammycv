
import './App.css'
import { City } from './City'
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
              <City />
            </div>
        </div>
        <div className="something">
          <p>yooo</p>
        </div>
      </main>
    </div>
  )
}

export default App
