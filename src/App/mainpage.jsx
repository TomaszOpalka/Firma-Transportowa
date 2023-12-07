import React from 'react';
import './_mainpage.scss';
import Form from "./form.jsx";

function Mainpage(){

    return(
        <div className='container'>
            <div className='container__mainpage'>
                <div className='mainpage-text'>
                    <h1>Transport Wrocław i okolice</h1>
                    <p>Cześć z przyjemnością pomożemy Ci lub Twojej firmie w przeprowadzce, lub transporcie obiektów. Do każdego
                        zamówienia podchodzimy indywidualnie. Zapraszamy do kontaktu poprzez formularz poniżej lub jeśli sprawa
                        nie cierpi zwłoki dzwoń, może akurat będę dostępny albo w okolicy.
                    </p>
                    <p className='phone-number'>+48731167636</p>
                </div>
            <Form/>
            </div>
            <div className='klucze'><p>bus transport wrocław
                przewóz rzeczy wrocław
                transport do wrocław
                transport wrocław
                przewoz rzeczy wroclaw
                transport mebli wrocław cennik
                transport mebli wrocław olx
                wrocław transport mebli
                przeprowadzka cena za kilometr</p></div>
        </div>
    );
}
export default Mainpage;

