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
                            <a href = "https://www.google.com/maps/place/Union+City,+CA/@37.5990454,-122.0532855,13z/data=!3m1!4b1!4m5!3m4!1s0x808f91bc5187ea93:0x5bacde6cbc648aee!8m2!3d37.5933562!4d-122.0438609"> 
                                <div class="address">
                                    <i class="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>Union City, CA</p>
                                </div>
                            </a>

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