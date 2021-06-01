import React, { FC } from 'react';
import { css } from '@emotion/css';
import { ScaledTitleProps } from '../types';

export const ScaledTitle:FC<ScaledTitleProps> =
({
  color='#000',
  content,
  size='x-large',
  family='arial',
  weight='bold',
  align='center',
}) => (<div className={css`
  color: ${color};
  text-align: ${align};
  font-weight: ${weight};
  font-family: ${family};
  font-size: ${size};
  margin: auto;
  width: max-content;
`}>{`${content}`}</div>);