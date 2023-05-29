type ExperienceNodeProps = {
  title: string
  datestring: string
  company: string
  location: string
}

function ExperienceNode({
  title,
  datestring,
  company,
  location,
}: ExperienceNodeProps) {
  return (
    <div className="experience-node">
      <div className="left-side">
        <div className="title">{title}</div>
        <div className="datestring">{datestring}</div>
      </div>
      <div className="right-side">
        <div className="company">{company}</div>
        <div className="location">{location}</div>
        <div className="pink-dot" />
        <div className="hide-border" />
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section className="experience">
      <h1>EXPERIENCE</h1>
      <ExperienceNode
        title="Senior software engineer"
        datestring="Mar 2020 - Feb 2023"
        company="Vaisala"
        location="Helsinki, Finland"
      />
      <ExperienceNode
        title="Backend developer"
        datestring="May 2019 - Feb 2022"
        company="Bigblue"
        location="Paris, France"
      />
      <ExperienceNode
        title="Python backend developer"
        datestring="Sep 2018 - Mar 2019"
        company="Numberly"
        location="Paris, France"
      />
      <ExperienceNode
        title="System validation engineer"
        datestring="Sep 2013 - Aug 2017"
        company="Intel"
        location="Portland, Oregon"
      />
      <ExperienceNode
        title="Software engineer"
        datestring="Jan 2013 - Aug 2013"
        company="Booz Allen Hamilton"
        location="Baltimore, Maryland"
      />
    </section>
  )
}
