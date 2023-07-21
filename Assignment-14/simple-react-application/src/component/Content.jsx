import { useRef } from 'react';
import "./Content.css"

const Content = () => {

          const textRef = useRef(null);
          // const input= document.getElementById('myId')

          const handleClick = () => {

                    const newText = textRef.current.value;
                    textRef.current.value = '';
                    textRef.current.focus();
                    displayText(newText);
                  };
                  
                  const displayText = (text) => {
                    const displayedTextElement = document.getElementById('displayed-text');
                    displayedTextElement.innerText = text;
                  };

          return (
                    <div>
                              
                     {/* Textarea */}
                    <textarea id='myId' ref={textRef} placeholder="Enter text"></textarea><br/>

                    {/* Button */}
                    <button onClick={handleClick}>Display Text</button>

                    {/* Displayed Text */}
                    <p id="displayed-text"></p>

                    </div>
          );
};

export default Content;