import React, { FC } from 'react';
import { css } from '@emotion/css';
import { getElectedWords, getRandomWords, getWords } from './environment';
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

  const words = getWords(getRandomWords(getElectedWords(wordLen)), wordCount);
  return (
    <div className={css`
      ${flexCenter}
      flex-direction: column;
    `
    }>{words.map(
      (word:string[], i) =>
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
        {word[0]}<div className={css`
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
        `}>~</div>{word[1]}
      </div>)
      })
    }</div>
  )
};
