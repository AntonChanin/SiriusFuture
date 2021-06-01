export interface ScaledBoxProps {
  color?: string,
  background?: string,
  size?: string,
  weight?: string,
  family?: string,
  scale?: number,
  metrics?: string,
  ratio?: number,
  radius?: number,
  border?: string,
  shadow?: string,
  flex?: string,
  addedCSS?:string,
}

export interface ScaledTitleProps {
  content: string
  color?: string,
  size?: string,
  weight?: string,
  align?: string,
  family?:string,
}