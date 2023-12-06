import React from 'react';
import './_about.scss';
import {Link} from "react-router-dom";
function About(){

    return(
        <>
            <div className='container'>
            <div className='container__about'>
                <div className='about__me'>
                    <img className='about__me-img' src='/public/images/KMT logo PNG bez nazwy.png' alt='moje zdjęcie profilowe'/>
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
                            Do każdego zamówienia podchodzimy indywidualnie dlatego zachęcamy, kontaktu przez formularz, mail lub telefonicznego.
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

                        <h3>Szerokość 223cm</h3>
                        <h3> Wysokość 220cm</h3>
                        <h3>  Długość 491cm</h3>



                    </div>
                    <div className="about__cars">
                        <img className='about__cars-img' src='/public/images/KMT1.jpg' alt="mój środek transportu iveco"/>
                        <img className='about__cars-img' src='/public/images/KMT2.jpg' alt="iveco białe"/>
                        <img className='about__cars-img' src='/public/images/KMT3.jpg' alt="iveco z tyłu"/>
                        <img className='about__cars-img' src='/public/images/KMT4.jpg' alt="kierowca bez kolizyjny"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About