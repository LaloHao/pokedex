// @flow
export type Pokemon = {
  id: number,
  name: string,
  uri: string,
  description: string,
  height: number,
  weight: number,
  hp: number,
  attack: number,
  defense: number,
  speed: number,
  [string]: number,
};
