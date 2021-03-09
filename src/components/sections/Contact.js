import React from 'react'

const Contact = () => {
    return(
        <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">
                <div class = "section-center">
                    <div class="section-title">
                    <h2>Contact</h2>
                    </div>
                </div>

               
                    <div class="info">
                        <div class = "contact-row">
                            <div class="address">
                                <i class="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>Union City, CA</p>
                            </div>

                            <a href="mailto: jihoshin.28@gmail.com">
                                <div class="email">
                                    <i class="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>jihoshin.28@gmail.com</p>
                                </div>
                            </a>
                            <a href = "facetime: 15107899938">
                                <div class="phone">
                                    <i class="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+1 510 789 9938</p>
                                </div>
                            </a>
                        </div>
                        </div>
            

            </div>
        </section>
    )
}

export default Contact