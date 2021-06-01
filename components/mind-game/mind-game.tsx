import React, { FC, useState } from 'react';
import { css } from '@emotion/css';
import { getElectedWords, getRandomEl, getRandomId, uniqueWords, updateWords } from './environment';
import { flexCenter } from '../pressets/const';

interface MindGameProps {
  wordCount: number;
  startLen: number;
  wordLen: number;
  interpLen: number;
  speed: number;
}

export const MindGame:FC<MindGameProps> =
({
  wordCount,
  startLen,
  wordLen,
  interpLen,
  speed,
}) => {
  const myWords = uniqueWords(
    Array(wordCount*2).fill('').map(
      (x) => x = (
        getRandomEl(
          getElectedWords(wordLen)
        )
      )
    )
  );
  myWords.length = (wordCount+1);
  console.log(myWords)
  const myUniqueWords = [];
  // for (let i = 0; (myWords.length && i !== myWords.length-1); i++ ) {
  //   console.log(myWords[i]?.length)
  //   const index = getRandomId(myWords[i].length);
  //   myUniqueWords.push({
  //     start: `${myWords[i]}`.substring(0, index),
  //     end: `${myWords[i]}`.substring(index, myWords[i].length),
  //   })
  //   console.log(myUniqueWords)
  // }
 // console.log(myUniqueWords)

  const fakeData = [
    {
      start: 'го', 
      end: 'д',
    },
    {
      start: 'по', 
      end: 'беда',
    },
  ]
  const animate = fakeData.map((_, i) =>`:nth-child(${i}) {
    animation-delay: ${speed*i*2}s;
  }`).reduce((x,y)=> x +=(`\n` + y) );
  console.log(animate)
  return (
    <div className={css`
      ${flexCenter}
      flex-direction: column;
    `
    }>{fakeData.map((word, i) =>
      { 
        return (<div
        key={i}
        className={css`
          opacity: 0; 
          position: absolute;
          ${flexCenter}
          animation: show ${speed}s;
          animation-delay: ${speed*i}s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          animation-timing-function: linear; 

          @keyframes show {
            
            0% {
              opacity: 0; 
            }
            95% {
              transform: scale(1);
            }
            100% { 
              opacity: 1;
              display: none; 
              transform: scale(0)
            }
          }
          
        `}
        >
        {word.start}<div className={css`
          display: inline-flex;
          justify-content: center;
          animation: expansion ${speed}s;
          animation-delay: ${speed*i}s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          animation-timing-function: linear; 
          @keyframes expansion {
            0% {
              opacity: 0; 
              width: ${startLen}rem; 
            }
            100% { 
              width: ${interpLen}rem;
              opacity: 1; 
            }
          }
        `}>~</div>{word.end}
      </div>)
      })
    }</div>
  )
};
