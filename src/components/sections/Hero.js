import React,{useEffect} from 'react' 
import Typed from 'typed.js'

class Hero extends React.Component {

    constructor(){
        super()
        this.ref = React.createRef
    }

    componentDidMount(){
        const string = ["Bay Area Native", "Problem Solver", "Full Stack Developer"]
        const options = {
            strings: string,
            typeSpeed: 35, 
            backSpeed: 70,
            backDelay: 2000,
            cursorChar: '_'
        }
        this.typed = new Typed('#typed', options)

    }

    componentWillUnmount(){
        this.typed.destroy()
    }
    
    render(){
        return(
            <section id="hero" class="d-flex flex-column justify-content-center">
                <div class="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Allen Shin</h1>
                <p class = "intro-type"><span ref = {(el) => {this.el = el}} style={{ whiteSpace: 'pre' }} id="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
                <div class="social-links">
                <a href="https://www.linkedin.com/in/allen-shin/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                <a href="https://github.com/jihoshin28" class="google-plus"><i class="bx bxl-github"></i></a>
                <a href="https://www.facebook.com/allen.shin.5" class="facebook"><i class="bx bxl-facebook"></i></a>
                </div>
                </div>
            </section>
        )
    }
}

export default Hero 