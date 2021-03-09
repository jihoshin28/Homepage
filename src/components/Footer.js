import React from 'react' 

const Footer = () => {
    return(
        <footer id="footer">
            <div class="container">
            <h3>Allen Shin</h3>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/allen-shin/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                <a href="https://github.com/jihoshin28" class="google-plus"><i class="bx bxl-github"></i></a>
                <a href="https://www.facebook.com/allen.shin.5" class="facebook"><i class="bx bxl-facebook"></i></a>
            </div>
            <div class="copyright">
                &copy; Copyright <strong><span>Allen Shin</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
                Made with React 
            </div>
            </div>
        </footer>
    )
}

export default Footer