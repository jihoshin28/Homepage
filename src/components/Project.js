import React from 'react'

const Project = ({title, description, filter, image, stack, githubLink, liveLink}) => {
    return(
        <div class={`col-lg-4 col-md-6 portfolio-item filter-project ${filter}`}>
            <div class="portfolio-wrap">
              <img src={`${image}`} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>{title}</h4>
                <p style = {{marginBottom: '2%'}}>{description}</p>
                <p><em>Stack: {stack}</em></p>
                <div style = {{marginTop: '5%'}} class="portfolio-links">
                  <a href={`${githubLink}`} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Github"><i class="bx bxl-github"></i></a>
                  <a href={`${liveLink}`} class="portfolio-details-lightbox" data-glightbox="type: external" title="Live Website"><i class="bx bx-window-alt"></i></a>
                </div>
                <div>
                <ul style= {{marginBottom: '-10%'}}id="portfolio-flters">
                    <li data-filter={`.${filter}`}>Overview</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
    )

}

export default Project