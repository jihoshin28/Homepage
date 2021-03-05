import React from 'react' 

const About = () => {
    return(
        <section id="about" class="about">
            <div class="container" data-aos="fade-up">
                <div class = "section-center">
                    <div class="section-title">
                        <h2>About</h2>
                        <p>Software engineer located in the Bay Area with multiple years experience in full stack development. </p>
                        <p>
                        Passionate about building effective applications by maintaining efficient, reusable, and scalable code.
                            </p>   
                        <p>
                            Enjoy learning about current web trends and collaborating with others.  
                        </p>
                    </div>

                </div>

                <div class="row">
                    <div class="col-lg-4">
                        <img src = {process.env.PUBLIC_URL + './img/profile.jpg'} class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Full Stack Developer</h3>
                        
                        <div style = {{marginTop: '5%', marginBottom: '5%' }} class="row">
                            <div class="col-lg-6">
                                <ul>
                                <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+1 510 789 9938</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>9 January 1992</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Education:</strong> <span>UCSD</span></li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jihoshin.28@gmail.com</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>29</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BS Biology</span></li>
                                </ul>
                            </div>
                        </div>
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