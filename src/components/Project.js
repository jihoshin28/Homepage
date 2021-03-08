import React from 'react'

const Project = ({title, description, filter, image, githubLink, liveLink}) => {
    return(
        <div class={`col-lg-4 col-md-6 portfolio-item ${filter}`}>
            <div class="portfolio-wrap">
              <img src={`${image}`} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>{title}</h4>
                <p>{description}</p>
                <div class="portfolio-links">
                  <a href={`${githubLink}`} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Github"><i class="bx bxl-github"></i></a>
                  <a href={`${liveLink}`} class="portfolio-details-lightbox" data-glightbox="type: external" title="Live Website"><i class="bx bx-window-alt"></i></a>
                </div>
                <div>
                <ul id="portfolio-flters">
                    <li data-filter={`.${filter}`}>Overview</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
    )

}

export default Project