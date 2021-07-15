import { Figure } from '../interfaces/interfaces';

export const getWidth = (arr: Figure[]): number => Number(arr.map((a) => a.width).filter((str) => str.length)[0]);
export const getHeight = (arr: Figure[]): number => Number(arr.map((a) => a.height).filter((str) => str.length)[0]);
export const getRadius = (arr: Figure[]): number => Number(arr.map((a) => a.r)[0]);
