import React from 'react';
import { FogOfWarGameData, FogOfWarSystemData } from '../../common/game-state';

export const GameContext = React.createContext<FogOfWarGameData | undefined>(
  undefined,
);

export const SystemContext = React.createContext<
  FogOfWarSystemData | undefined
>(undefined);
