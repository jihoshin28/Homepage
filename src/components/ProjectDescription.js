import React from 'react'

const ProjectDescription = ({filter, title, description}) => {
    return(
        <div class={`col-lg-8 col-md-6 portfolio-item ${filter}`}>
            <div class="portfolio-row" >
              <img src={process.env.PUBLIC_URL + "./img/portfolio/white-bg.jpg"} class="img-fluid" alt=""/>
              <div class="description">
                
                    <div style = {{width: '55%'}}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <div>
                        <h3>Stack</h3>
                        <ul>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Redux</li>
                            <li>Ruby on Rails</li>
                        </ul>

                        <h3>API's</h3>
                        <ul>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Redux</li>
                            <li>Ruby on Rails</li>
                        </ul>
                    </div>
                
              </div>
            </div>
        </div>
    )
}

export default ProjectDescription