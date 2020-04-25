import React, { useState, useEffect, useRef } from 'react';

import { Container, Numbers } from './styles';

export default function Roulette() {
  const numbers = useRef(null);
  const [effectRoll, setEffectRoll] = useState({});
  const [numberSelected, setNumberSelected] = useState(null);
  useEffect(() => {
    // console.log(numbers.current);
    // newElement.innerText = 'portal element';
    for (let i = 0; i < 5; i++) {
      const newElement = numbers.current.lastChild.cloneNode(true);
      numbers.current.appendChild(newElement);
    }
    setEffectRoll({
      transform: 'translate3d(2400px, 0px, 0px)',
    });
    const interval = setInterval(() => {
      clickBait();
    }, 25000);
    return () => clearInterval(interval);
  }, []);

  async function clickBait() {
    let positionsNumbers = [];
    let min = 0;
    let max = 14;
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min)) + min;

    Array.from(document.getElementsByClassName('number').valueOf()).map(
      (item) => {
        if (item.innerText == random) {
          positionsNumbers.push({
            number: item.innerText,
            position: item.offsetLeft,
          });
        }
      }
    );
    const minWidth = positionsNumbers[1].position;
    const maxWidth = positionsNumbers[1].position + 80;
    const numberClick = Math.random() * (maxWidth - minWidth) + minWidth;
    // const numberClick = positionsNumbers[1].position;
    setEffectRoll({
      transform: `translate3d(-${numberClick}px, 0px, 0px)`,
      transitionTimingFunction: 'cubic-bezier(0.12, 0.8, 0.38, 1)',
      transitionDuration: '6.5s',
    });
    await setTimeout(function () {
      const resetPosition = 3600 - numberClick;
      setEffectRoll({
        transform: `translate3d(${resetPosition}px, 0px, 0px)`,
      });
      setNumberSelected(random);
    }, 10000);
    console.log(numberClick, positionsNumbers);
  }

  return (
    <Container>
      <div
        style={{
          marginBottom: '46px',
          width: '46px',
          height: '46px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#3bbbb6',
          color: '#fff',
          fontWeight: 'bold',
          borderRadius: '50%',
        }}
      >
        {numberSelected}
      </div>
      <div className="roll" style={{ display: 'flex' }}>
        <div className="number_mark"></div>
        <Numbers ref={numbers} style={effectRoll}>
          <div style={{ display: 'flex' }}>
            <div className="number red">1</div>
            <div className="number black">14</div>
            <div className="number red">2</div>
            <div className="number black">13</div>
            <div className="number red">3</div>
            <div className="number black">12</div>
            <div className="number red">4</div>
            <div className="number green">0</div>
            <div className="number black">11</div>
            <div className="number red">5</div>
            <div className="number black">10</div>
            <div className="number red">6</div>
            <div className="number black">9</div>
            <div className="number red">7</div>
            <div className="number black">8</div>
          </div>
        </Numbers>
      </div>
    </Container>
  );
}
