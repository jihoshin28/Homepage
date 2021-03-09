import React from 'react'

const ProjectDescription = ({title, description, filter}) => {
    return(
        <div class={`col-lg-8 col-md-6 portfolio-item ${filter}`}>
            <div class="portfolio-wrap">
              
              <div class="portfolio-info">
                <h4>BreadBasket</h4>
                <p>VJEWI OVDSNISVOSDNBIO NSDIOBSCN BIOCXN BIOXCNB VIOBN SDIOBNFS IBOX CNBIOXCN BIONSD OIBSCN BIOCSN BOI</p>
              </div>
            </div>
        </div>
    )
}

export default ProjectDescription