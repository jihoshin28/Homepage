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
                <div class = "skills-div">
                <div class = "skills-header">
                    <img style = {{width: '2em', height: '2em', marginBottom: '4%', marginRight: '2%'}} src = {process.env.PUBLIC_URL + './img/icons/bx-window.svg'} alt = ""/>
                    <span><h4>Frontend</h4></span>
                </div>
                    <div class = "skills-list">
                        <p>React</p>
                        <p>React Native</p>
                        <p>Redux</p>
                        <p>Angular</p>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>Javascript</p>
                        <p>Typescript</p>
                    </div>
                </div>
            </div>

          </div>

          <div class="col-lg-4">

            <div class = "skills-column"> 
                <div class = "skills-div">
                    <div class = "skills-header">
                        <img style = {{width: '2em', height: '2em', marginBottom: '4%', marginRight: '2%'}} src = {process.env.PUBLIC_URL + './img/icons/bx-data.svg'} alt = ""/>
                        <span><h4>Backend</h4></span>
                    </div>
                    <div class = "skills-list">
                        <p>Ruby/Rails</p>
                        <p>MongoDB</p>
                        <p>Express</p>
                        <p>Node.js</p>
                        <p>Python</p>
                        <p>FAST API</p>
                        <p>MySQL</p>
                        <p>Postgres</p>
                    </div>
                </div>
            </div>
            

          </div>
          <div class="col-lg-4">

            <div class = "skills-column"> 
                <div class = "skills-div">
                    <div class = "skills-header">
                        <img style = {{width: '2em', height: '2em', marginBottom: '4%', marginRight: '2%'}} src = {process.env.PUBLIC_URL + './img/icons/library-regular.png'} alt = ""/>
                        <span><h4>API</h4></span>
                    </div>
                    <div class = "skills-list">
                        <p>Google Maps</p>
                        <p>Google Auth</p>
                        <p>Google Charts</p>
                        <p>Stripe</p>
                        <p>Paypal</p>
                        <p>Navigation</p>
                        <p>Nutritionix</p>
                        <p>Speech-2-Text</p>
                    </div>
                </div>
            </div>
            

          </div>


        </div>

      </div>
    </section>
    )
}

export default Skills