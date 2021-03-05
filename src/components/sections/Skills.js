import React from 'react' 

const Skills = () => {
    return(
        <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">
        <div class = "section-center">
            <div class="section-title">
            <h2>Skills</h2>
            </div>
            
        </div>
        <div class = "section-center">
            <div class="section-title">
                <p>Capable of building full scale, marketable applications in multiple full stack frameworks.</p>
                <p>Familiar with multiple popular web API's for common web services.</p>
                <p>Methodical problem solver, adept Googler, and quick learner.</p>
            </div>
        </div>
        <div class="row skills-content">

          <div class="col-lg-4">

            <div class = "skills-column">
                <div class = "skills-header">
                    <img style = {{width: '4em', height: '4em', marginBottom: '4%', marginRight: '2%'}} src = {process.env.PUBLIC_URL + './img/icons/bx-window.svg'}/>
                    <span><h4>Frontend</h4></span>
                </div>
                <ul class = "skills-list">
                    <li>React</li>
                    <li>React Native</li>
                    <li>Redux</li>
                    <li>Angular</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript</li>
                    <li>Typescript</li>
                </ul>
            </div>

          </div>

          <div class="col-lg-4">

            <div class = "skills-column"> 
                <div class = "skills-header">
                    <img style = {{width: '4em', height: '4em', marginBottom: '4%', marginRight: '2%'}} src = {process.env.PUBLIC_URL + './img/icons/bx-data.svg'}/>
                    <span><h4>Backend</h4></span>
                </div>
                <ul class = "skills-list">
                    <li>Ruby/Rails</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>FAST api</li>
                    <li>MySQL</li>
                    <li>Postgres</li>
                </ul>
            </div>
            

          </div>
          <div class="col-lg-4">

            <div class = "skills-column"> 
                <div class = "skills-header">
                    <img style = {{width: '4em', height: '4em', marginBottom: '4%', marginRight: '2%'}} src = {process.env.PUBLIC_URL + './img/icons/library-regular.png'}/>
                    <span><h4>API</h4></span>
                </div>
                <ul class = "skills-list">
                    <li>Google Maps</li>
                    <li>Google Auth</li>
                    <li>Google Charts</li>
                    <li>Stripe</li>
                    <li>Paypal</li>
                    <li>React Navigation</li>
                    <li>Language Recognition</li>
                    <li>Speech-to-Text</li>
                </ul>
            </div>
            

          </div>


        </div>

      </div>
    </section>
    )
}

export default Skills