export function Skills() {
  return (
    <div className="skills">
      <h1>SKILLS</h1>
      <div className="skills-container">
        <div className="advanced-skills-container">
          <p className="advanced-label">Advanced</p>
          <div>
            <div className="advanced-skill">python</div>
            <div className="advanced-skill">typescript</div>
            <div className="advanced-skill">react</div>
            <div className="advanced-skill">docker</div>
            <div className="advanced-skill">go / golang</div>
            <div className="advanced-skill">shell</div>
          </div>
        </div>
        <div className="proficient-skills-container">
          <div className="half-circle-top">
            <p className="proficient-label">proficient</p>
          </div>
          <div className="half-circle-bot">
            <div className="proficient-skill">kubernetes</div>
            <div className="proficient-skill">rabbitmq</div>
            <div className="proficient-skill">kafka</div>
            <div className="proficient-skill">vuejs</div>
            <div className="proficient-skill">html</div>
            <div className="proficient-skill">css</div>
            <div className="proficient-skill">c</div>
          </div>
        </div>
        <div className="knowledgeable-skills-container">
          <div className="knowledgeable-list">
            <p className="knowledgeable-label">SOME KNOWLEDGE</p>
            <div className="knowledgeable-skill">machine learning</div>
            <div className="knowledgeable-skill">java</div>
            <div className="knowledgeable-skill">kotlin</div>
            <div className="knowledgeable-skill">c++</div>
          </div>
          <div className="triangle"></div>
        </div>
      </div>
    </div>
  )
}
