import React from 'react';
import { LocalGameStorage } from '../../common/local-game-storage';

export const LocalStorageContext = React.createContext(new LocalGameStorage());
