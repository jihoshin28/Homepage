import React from 'react'

const NavBar = () => {
    return (
        <React.Fragment>
            <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

            <header id="header" class="d-flex flex-column justify-content-center">

                <nav id="navbar" class="navbar nav-menu">
                <ul>
                    <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
                    <li><a href="#skills" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Skills</span></a></li>
                    <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                    <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                    <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
                </ul>
                </nav>

            </header>
        </React.Fragment>
    )
}

export default NavBar