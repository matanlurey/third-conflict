import React from 'react';

/**
 * Authentication state.
 *
 * Represents either logged out, logged in as a guest, logged in with Discord.
 */
export type GlobalAuthState = null | 'Guest' | { discordId: string };
export const GlobalAuthContext = React.createContext<GlobalAuthState>(null);
