import React, { FC } from 'react';
import { css } from '@emotion/css';

export const Slider:FC<{numeric: number[]; step: number, handleChange(event: React.FormEvent<HTMLInputElement>):void }> = ({numeric, step, handleChange}) => {
  const mozCSS = `
    display: block;
    appearance: none;
    width: 100%;
    margin: 0;
    height: 30px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 50px;
    padding-left: 7px;
    padding-right: 10px;
    :focus {
      outline: none;
    }

    ::-moz-range-track, ::-moz-range-progress {
      width: 100%;
      height: 30px;
      background: linear-gradient(to bottom, #fff, #fff) 100% 50% / 100% 12px no-repeat transparent;
    }
    ::-moz-range-progress {
      background: linear-gradient(to bottom, #ffd701, #ffd701) 100% 50% / 100% 12px no-repeat transparent;
    }
    ::-moz-range-thumb {
      appearance: none;
      margin: 0;
      height: 12px;
      width: 12px;
      background: #000;
      border-radius: 100%;
      border: #ffd701 solid 8px;
      transition: background-color 150ms;
    }
    ::-ms-track {
      width: 100%;
      height: 30px;
      border: 0;
      color: transparent;
      background: transparent;
    }
    ::-ms-fill-lower {
      background: linear-gradient(to bottom, #0199ff, #0199ff) 100% 50% / 100% 3px no-repeat transparent;
    }
    ::-ms-fill-upper {
      background: linear-gradient(to bottom, #cfcfcf, #cfcfcf) 100% 50% / 100% 3px no-repeat transparent;
    }
    ::-ms-thumb {
      appearance: none;
      height: 13px;
      width: 13px;
      background: #000;
      border-radius: 100%;
      border: 0;
      transition: background-color 150ms;
      top: 0;
      margin: 0;
      box-shadow: none;
    }
    :hover::-moz-range-thumb, :focus::-moz-range-thumb {
      background-color: #000;
    }
    :hover::-ms-thumb, :focus::-ms-thumb {
      background-color: #000;
    }
    body {
      padding: 30px;
    }
  `;

  const webkitCSS = `
    -webkit-appearance: none;
    border-radius: 42%;
    width: 100%;
    height: 30px;
    overflow:hidden;
    :focus {
      outline:none;
    }
    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      cursor:pointer;
      background-color: #000;
      border-radius: 100%;
      width: 10px;
      height: 10px;
      box-shadow: 1px 0px 0px 8px gold,
      -10px 0 0 1px gold,
      -15px 0 0 1px gold,
      -20px 0 0 1px gold,
      -25px 0 0 1px gold,
      -30px 0 0 1px gold,
      -35px 0 0 1px gold,
      -40px 0 0 1px gold,
      -45px 0 0 1px gold,
      -50px 0 0 1px gold,
      -55px 0 0 1px gold,
      -60px 0 0 1px gold,
      -65px 0 0 1px gold,
      -70px 0 0 1px gold,
      -75px 0 0 1px gold,
      -80px 0 0 1px gold,
      -85px 0 0 1px gold,
      -90px 0 0 1px gold,
      -95px 0 0 1px gold,
      -100px 0 0 1px gold,
      -105px 0 0 1px gold,
      -110px 0 0 1px gold,
      -115px 0 0 1px gold,
      -120px 0 0 1px gold,
      -125px 0 0 1px gold,
      -130px 0 0 1px gold,
      -135px 0 0 1px gold,
      -140px 0 0 1px gold,
      -145px 0 0 1px gold,
      -150px 0 0 1px gold,
      -155px 0 0 1px gold,
      -160px 0 0 1px gold,
      -165px 0 0 1px gold,
      -170px 0 0 1px gold,
      -175px 0 0 1px gold,
      -180px 0 0 1px gold,
      -185px 0 0 1px gold,
      -190px 0 0 1px gold,
      -195px 0 0 1px gold,
      -200px 0 0 1px gold,
      -205px 0 0 1px gold,
      -210px 0 0 1px gold,
      -215px 0 0 1px gold,
      -220px 0 0 1px gold,
      -225px 0 0 1px gold,
      -230px 0 0 1px gold,
      -235px 0 0 1px gold,
      -240px 0 0 1px gold,
      -245px 0 0 1px gold,
      -250px 0 0 1px gold,
      -255px 0 0 1px gold,
      -260px 0 0 1px gold,
      -265px 0 0 1px gold,
      -270px 0 0 1px gold,
      -275px 0 0 1px gold,
      -280px 0 0 1px gold,
      -285px 0 0 1px gold,
      -290px 0 0 1px gold,
      -295px 0 0 1px gold,
      -300px 0 0 1px gold,
      -305px 0 0 1px gold,
      -310px 0 0 1px gold,
      -315px 0 0 1px gold;
      z-index:2;
    }
  `;

  return (
  <div className={css`
    display: block;
  `}>
    <div className={css`
      display: flex;
      justify-content: space-around;
      font-size: 1.3em;
      margin: 6px 30px;
      font-family: arial;
      font-weight: bolder;
    `}>{numeric.map((num:number, i:number) => (<span key={`num-${i}-${step}-${numeric}-${numeric.length}`}>{`${num}`}</span>))}</div>
      <div className={css`
        margin: 0 40px;
      `}>
        <input className={css`
        ${webkitCSS}
        ${mozCSS}
        `} type="range" min={`${numeric[0]}`} step={`${step}`} max={`${numeric[numeric.length - 1]}`} onChange={handleChange} />
      </div>
   </div>
)};