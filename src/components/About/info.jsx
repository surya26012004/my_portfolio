import React from 'react'
const Info = () => {
  return (
    <div className="about__info grid">  <a href="#qualification">
      <div className="about__box">
        <i class='bx bx-award about__icon'></i>

        <h3 className="about__title">Experience</h3>

        <span className="about__subtitle">7 months & working</span>

      </div>
    </a>
      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>

        <h3 className="about__title">Completed</h3>

        <span className="about__subtitle">5+ projects</span>

      </div>

      <a href="#contact">
        <div className="about__box">
          <i class='bx bx-support about__icon'></i>
          <h3 className="about__title">Contact Me</h3>
          <span className="about__subtitle">Contact 24/7</span>

        </div></a>
    </div>
  )
}

export default Info
