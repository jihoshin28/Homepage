import React from 'react' 

const About = () => {
    return(
        <section id="about" class="about">
            <div class="container" data-aos="fade-up">
                <div class = "section-center">
                    <div class="section-title">
                        <br></br>
                        <h2>About</h2>
                        <br></br>
                        <br></br>
                        <p>Software engineer located in the Bay Area with multiple years experience in full stack development. </p>
                        <p>
                        Passionate about building effective applications by maintaining efficient, reusable, and scalable code.
                            </p>   
                        <p>
                            Enjoy learning about current web trends and collaborating with others.  
                        </p>
                    </div>

                </div>
                <br></br>
                <div class="row">
                    <div class="col-lg-4">
                        <img src = {process.env.PUBLIC_URL + './img/profile.jpg'} class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Full Stack Developer</h3>
                        
                        <div style = {{width: '80%'}}>
                            <p>
                                Graduate in Biology from UCSD in 2016, but realized my true passion was in technology. I've since accumulated 3 years of experience building 
                                20+ full stack projects, solo and in team environments. I've lived in both Israel and Turkey for 2 years to make international friends and explore. 
                            </p>
                            <p>
                                When I'm not coding,
                                I'm writing blogs, reading my Bible, maintaining a freshwater aquarium, or working on my golf swing. 
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About