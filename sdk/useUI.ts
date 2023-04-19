/**
 * This file takes care of global app side effects,
 * like clicking on add to cart and the cart modal being displayed
 */

import { signal } from "@preact/signals";

const displayCart = signal(false);
const displayMenu = signal(false);
const displaySearchbar = signal(false);
const displayFacebook = signal(true);
const displayInstagram = signal(true);
const displayTwitter = signal(true);
const displayYoutube = signal(true);

const state = {
  displayCart,
  displayMenu,
  displaySearchbar,
  displayFacebook,
  displayInstagram,
  displayTwitter,
  displayYoutube,
};

export const useUI = () => state;
