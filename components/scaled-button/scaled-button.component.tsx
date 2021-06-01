import React, { FC } from 'react';
import { css } from '@emotion/css';
import { ScaledBoxProps } from '../types';

interface ButtonProps extends ScaledBoxProps {
  title: string,
  handleClick():void;
}

export const ScaledButton: FC<ButtonProps> =
({
  title,
  handleClick,
  color ='black',
  background='gold',
  size='2rem',
  weight='bolder',
  scale= 12,
  metrics ='rem',
  ratio=1/3,
  radius=14,
  border='0',
  shadow='0px 2px 3px 0px rgba(120, 140, 155, 1)',
  addedCSS='',
}) => (
  <button className={css`
    color: ${color};
    background: ${background};
    font-size: ${size};
    font-weight: ${weight};
    width: ${scale}${metrics};
    height: ${scale * ratio}${metrics};
    border: ${border};
    border-radius: ${radius}${metrics};
    box-shadow: ${shadow};
    ${addedCSS}
  `}
  onClick={handleClick}
  >
    {title}
  </button>
);