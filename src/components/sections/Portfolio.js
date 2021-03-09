import React from 'react' 
import Project from '../Project'
import ProjectDescription from '../ProjectDescription'

const Portfolio = () => {
    return(
        <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up">
        <div class = "section-center">
            <div class="section-title">
            <h2>Portfolio</h2>
            </div>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li data-filter=".filter-project" class="filter-active">All</li>
              <li data-filter=".filter-breadBasket">BreadBasket</li>
              <li data-filter=".filter-nutritionTracker">NutritionTracker</li>
              <li data-filter=".filter-movieReviewer">Movie Reviewer</li>
              <li data-filter=".filter-roastToast">RoastToast</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

            <Project title = "BreadBasket Shopper" stack = "React, Redux, Ruby on Rails" description= "Grocery shopping web application" filter = 'filter-breadBasket' image = {process.env.PUBLIC_URL + './img/portfolio/shopper.png'} githubLink = "https://github.com/jihoshin28/BreadBasket_Shopper" liveLink = "https://www.breadbasketdelivery.com/"/>
            <Project title = "BreadBasket Driver" stack = "React Native, Redux, Ruby on Rails" description = "Grocery delivery mobile application" filter = 'filter-breadBasket' image = {process.env.PUBLIC_URL + './img/portfolio/driver.webp'} githubLink = "https://github.com/jihoshin28/BreadBasket_Driver" liveLink = ""/>
            <Project title = "Nutrition Tracker" stack = "React, Ruby on Rails" description = "Diet and exercise tracking web application" filter = 'filter-nutritionTracker' image = {process.env.PUBLIC_URL + './img/portfolio/nutrition_tracker.png'} githubLink = "https://github.com/jihoshin28/Nutrition_Tracker_2.0_frontend" liveLink = "https://www.nutritiontracker.org/"/>
            <Project title = "Movie Reviewer" stack = "Ruby on Rails" description = "Movie review website" filter = "filter-movieReviewer" image = {process.env.PUBLIC_URL + './img/portfolio/movie_reviewer.png'} githubLink = "https://github.com/jihoshin28/Movie_Reviewer_2019" liveLink = "https://movie-reviewer-rb.herokuapp.com/"/>
            <Project title = "Roast n Toast" stack = "React, Ruby on Rails" description = "Forum website for roasting and toasting" filter = "filter-roastToast" image = {process.env.PUBLIC_URL + './img/portfolio/roastnToast.png'} githubLink = "https://github.com/jihoshin28/roastntoast-frontend" liveLink = "https://roast-n-toast.herokuapp.com/"/>
        </div>

      </div>
    </section>
    )
}   

export default Portfolio    