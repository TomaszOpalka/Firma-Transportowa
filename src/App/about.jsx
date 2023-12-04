import React from 'react';
import './_about.scss';
import {Link} from "react-router-dom";
function About(){

    return(
        <>
            <div className='container__about'>
                <div className='about__me'>
                    <img className='about__me-img' src='/src/images/KMT logo PNG bez nazwy.png'/>
                    <div className='about__me-text'>
                    <h1>Cześć tu Krystian!</h1>
                        <p>Wspólnie z Bratem tworzymy firmę transportową, pomagamy w wszelkiego rodzaju przeprowadzkach,
                            montażach mebli a także w przewożeniu przedmiotów o dużych gabaretach.
                            siedziba naszej firmy znajduje się w tętniącym życiem Wrocławiu.
                        </p>
                        <br/>
                        <p>
                            Oferujemy pomoc Głównie na terenie Wrocławia i dolnego śląska. W trosce o rozwój firmy możemy
                            się podjąć przewozów zaczynających się na terenie dolnego śląska najlepiej (Wrocławia) lub kończących się w tym rejonie.
                        </p>
                        <br/>
                        <p>
                            Do każdego zamówienia podchodzimy indywidualnie dlatego zachęcamy, kontaktu przez formularz mailowego, oraz telefonicznego.
                            <Link to="/contact">KONTAKT</Link>
                        </p>
                    </div>
                </div>
                <div className='about__us'>
                    <div className='about__us-text'>
                    <h2>flota</h2>
                    <p>w naszej firmie dysponujemy samochodem iveco
                        o wymiarach

                    </p>
                    <p>
                        spalanie ... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quas, reprehenderit! A distinctio facilis hic.
                    </p>


                    </div>
                    <div className="about__cars">
                        <img className='about__cars-img' src='/src/images/KMT1.jpg'/>
                        <img className='about__cars-img' src='/src/images/KMT2.jpg'/>
                        <img className='about__cars-img' src='/src/images/KMT3.jpg'/>
                        <img className='about__cars-img' src='/src/images/KMT4.jpg'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About