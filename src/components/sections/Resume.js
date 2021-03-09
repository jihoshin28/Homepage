import React from 'react' 

const Resume = () => {
    return(
        <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">
        <div class = "section-center">
            <div class="section-title">
            <h2>Resume</h2>

            <a className = 'btn btn-primary' href = {process.env.PUBLIC_URL + './resume/Allen_Resume.pdf'} download>
                Download Resume
            </a>
            </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Allen Shin</h4>
              <p><em>Software Engineer with 3 years of full stack development experience through 15+ solo/team projects in multiple frameworks.      
I am a quick learner with adept software fundamentals for effective coding and debugging with test driven development. Passionate about learning current web trends along with data structures/algorithms for scalable and efficient software. 
</em></p>
              <ul>
                <li>Union City, CA</li>
                <li>(510)789-9938</li>
                <li>jihoshin.28@gmail.com</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>University of California San Diego</h4>
              <h5>Class of 2016</h5>
              <p><em>B.S. General Biology</em></p>

            </div>
            <div class="resume-item">
              <h4>FlatIron School</h4>
              <h5>Class of 2020</h5>
              <p><em>Full Stack Development Bootcamp</em></p>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Experience</h3>
            <div class="resume-item">
              <h4>Missionary</h4>
              <h5>2012/2018</h5>
              <p><em>Israel/Turkey</em></p>
              <ul>
                <li>Started and maintained church gatherings for 100+ people by leading meetings and presenting original content</li>
                <li>Developed lasting relationships with Turkish/Israeli locals by learning the intense political/religious climate</li>
                <li>Built an elementary school for ~200 children to teach English and basic education to Turkish and refugee children</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Quotation Specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Impakt Holdings LLC</em></p>
              <ul>
                <li>Ensured $1M in monthly revenue by developing positive customer relations and providing punctual quotes</li>
                <li>Produced 100+ monthly inspection documents for parts by making precise measurements with a team of engineers</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}

export default Resume