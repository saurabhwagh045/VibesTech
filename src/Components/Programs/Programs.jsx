import React from 'react'
import './Programs.css'
import program_1 from '../../assets/dotnet-logo1.png'
import program_2 from '../../assets/javafullstack-logo.png'
import program_3 from '../../assets/devops-logo.jpeg'
import program_icon_1 from '../../assets/dotnetcaption-logo.png'
import program_icon_2 from '../../assets/java-logo1.jpeg'
import program_icon_3 from '../../assets/cloud-logo.jpeg'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption"><img src={program_icon_1} alt="" />
        <p>Fullstack .net Development</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption"><img src={program_icon_2} alt="" />
        <p>Java FullStack Development</p>
        </div>
      </div>
      <div className="program">
      <img src={program_3} alt="" />
        <div className="caption"><img src={program_icon_3} alt="" />
        <p>Master Cloud Technologies</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
