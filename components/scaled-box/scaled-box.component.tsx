import { css } from "@emotion/css";
import { FC, PropsWithChildren } from "react";
import { flexCenterBetween } from "../pressets/const";
import { ScaledBoxProps } from "../types/index";

export const ScaledBox:FC<PropsWithChildren<ScaledBoxProps>> = ({children,
  color ='black',
  background='none',
  size='2rem',
  weight='bold',
  scale= 14,
  metrics ='rem',
  ratio=1/3,
  radius=14,
  border='0',
  family='arial',
  shadow='none',
  addedCSS=`${flexCenterBetween}`,
}) => (
  <div
    className={css`
      color: ${color};
      background: ${background};
      font-size: ${size};
      font-weight: ${weight};
      font-family: ${family};
      width: ${scale}${metrics};
      height: ${scale * ratio}${metrics};
      border: ${border};
      border-radius: ${radius}${metrics};
      box-shadow: ${shadow};
      margin: auto;
      ${addedCSS}
    `}
  >
    {children}
  </div>
  );