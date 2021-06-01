import Image from 'next/image'
import { useCallback, useState } from 'react';
import { css } from '@emotion/css';
import { MindGame } from '../components/mind-game/mind-game';
import { ScaledButton } from '../components/scaled-button/scaled-button.component';
import { Slider } from '../components/slider/slider';
import { ScaledTitle } from '../components/scaled-title/scaled-title.component';
import { ScaledBox } from '../components/scaled-box/scaled-box.component';
import { defaultFields, flexCenter, flexStretchCol, lightShadow } from '../components/pressets/const';

function HomePage() {
  const [wordCount, setWordCount] = useState<number>(1);
  const [startLen, setStartLen] = useState<number>(5);
  const [wordLen, setWordLen] = useState<number>(3);
  const [interpLen, setInterpLen] = useState<number>(5);
  const [speed, setSpeed] = useState<number>(1.0);
  const [onStart, setOnStart ] = useState<boolean>(false);

  const settingItems = [
    {
      content: 'Сколько слов',
      desc : Array(10).fill(0).map((e, i) => i + 1),
      step: 1,
      handleChange: (e: any) => {
        setWordCount(e.target.value);
      },
    },
    {
      content: 'Стартовое расстояние',
      desc : Array(8).fill(5).map((e, i) => (i+1) * e),
      step: 5,
      handleChange: (e: any) => {
        setStartLen(e.target.value);
      }
    },
    {
      content: 'Сколько букв в словах',
      desc : Array(10).fill(3).map((e, i) => e+i),
      step: 1,
      handleChange: (e: any) => {
        setWordLen(e.target.value);
      }
    },
    {
      content: 'Увеличение расстояния',
      desc : Array(8).fill(5).map((e, i) => (i+1) * e),
      step: 5,
      handleChange: (e: any) => {
        setInterpLen(e.target.value);
      }
    },
  ]
  const handleClickAdd = useCallback(() => {speed+0.5 !== 6.5 && setSpeed(speed+0.5)}, [speed]);
  const handleClickSub = useCallback(() => {speed-0.5 !== 0 && setSpeed(speed-0.5)}, [speed]);
  const handleClickStart = useCallback(() => {setOnStart(!onStart)}, [onStart]);
  let slideSpeed = <>
    Скорость <span
    className={css`
      border: 1px black solid;
      border-radius: 10px;
      width: 3rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      {speed}
    </span> сек.
  </>
  return (
    <>
      <div
        className={css`
          position: absolute;
          right: 25px;
          top: 25px;
          width: 20%;
      `}
      >
        <Image 
          alt="Picture of the author"
          width={300}
          height={150}
          src="/Sirius_Future_500px.png"
        />
      </div>
      {!onStart ? (
        <>
          
          <div className={css`
              margin: 50px 0;
            `}>
            <ScaledTitle color="darkblue" size="2rem" weight="bolder" content={`Тренажор «‎Поле зрения»‎`}/>
            </div>
          <div className={css`
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            width: 940px;
            height: 60vh;
            margin: auto;
          `}>
            {settingItems.map(({content, desc, step, handleChange}, i) => (
                <ScaledBox
                  key={`${i}-${content}-${desc}-${step}`}
                  color="#000c4f"
                  background="#fff"
                  size="medium"
                  scale={400}
                  ratio={1/4}
                  metrics="px"
                  addedCSS={`${defaultFields}${flexStretchCol}`}
                  shadow={`${lightShadow}`}
              >
                <ScaledTitle color="#000c4f" content={`${content}`}/>
                <Slider numeric={desc} step={step} handleChange={handleChange}/>
              </ScaledBox>
            ))}
            <ScaledBox
              color="#000c4f"
              background="#fff"
              size="medium"
              scale={400}
              ratio={1/4}
              metrics="px"
              addedCSS={`${defaultFields}${flexStretchCol}`}
              shadow={`${lightShadow}`}
              >
              <ScaledBox
                color="#000c4f"
                size="x-large"
                scale={16}
                ratio={1/8}
              >
                {slideSpeed}
              </ScaledBox>
              <ScaledBox metrics="%" scale={30} ratio={2}  >
                <ScaledButton
                  title="-"
                  scale={3}
                  ratio={1}
                  radius={0.5}
                  size="2.5rem"
                  shadow="none"
                  addedCSS="  
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                  "
                  handleClick={handleClickSub}
                />
                <ScaledButton
                  title="+"
                  scale={3}
                  ratio={1}
                  radius={0.5}
                  size="2.5rem"
                  shadow="none"
                  addedCSS="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                  handleClick={handleClickAdd}
                />
              </ScaledBox>  
            </ScaledBox>
            <ScaledBox
              color="#000c4f"
              scale={400}
              ratio={1/4}
              metrics="px"
              addedCSS={`${defaultFields}${flexCenter}`}
              >
                <ScaledButton title="Старт" handleClick={handleClickStart}/>
              </ScaledBox>
          </div> 
        </>
      ) : (
        <ScaledBox
          scale={100}
          metrics="%"
          addedCSS={`
            ${flexCenter}
            height: 98vh;
            margin: auto;
          `}
        >
          <MindGame
            wordCount={wordCount}
            startLen={startLen}
            wordLen={wordLen}
            interpLen={interpLen}
            speed={speed}
          />
        </ScaledBox>
      )}
    </>
  )
};
    
export default HomePage;
    