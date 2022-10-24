import React from 'react';
import quotes from '../../quotes.json'
import { useState } from 'react';
import App from '../../App';

const QuoteBox = ({ style, background }) => {
    //const index = 0;
    console.log(quotes)
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(randomIndex);

    const changeQuote = () => {
        //alert("Change QuoteBox");
        const anotherRandom = Math.floor(Math.random() * quotes.length);
        setIndex(anotherRandom);
    }
    const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871'];
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColorIndex]}`
    
    return (
        <div className='quote-style' style={{color: colors[randomColorIndex]}}>
            <div className='phrase-style'>
                <i className="fa-solid fa-quote-left size"></i>
                <p>{quotes[index].quote}</p>
            </div>
            <p className='author-style'><em>{quotes[index].author}</em></p>
            <button style={{background: colors[randomColorIndex]}} onClick={changeQuote}><i class="fa-solid fa-chevron-right"></i></button>
        </div>
    );
};

export default QuoteBox;