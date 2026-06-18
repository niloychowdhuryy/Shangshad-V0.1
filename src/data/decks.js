// Central registry of all card decks. Today these are bundled JSON; tomorrow you
// can replace loadDecks() with a Firestore fetch that returns the same shape:
//   { [locationId]: Card[], endgame: Card[] }
//
// Card shape (validated loosely at load):
//   {
//     id, location, speaker, portrait, tags[],
//     prompt,                          // the narrative text
//     left:  { id, label, tooltip?, reveal?, effects: { [metricId]: delta } },
//     right: { id, label, tooltip?, reveal?, effects: { [metricId]: delta } }
//   }

import { ENDGAME_LOCATION_ID } from '../game/constants.js';

import home from './cards/home.json';
import party from './cards/party.json';
import finance from './cards/finance.json';
import un from './cards/un.json';
import interior from './cards/interior.json';
import resources from './cards/resources.json';
import environment from './cards/environment.json';
import endgame from './cards/endgame.json';

export function loadDecks() {
  return {
    home,
    party,
    finance,
    un,
    interior,
    resources,
    environment,
    [ENDGAME_LOCATION_ID]: endgame,
  };
}

/** A choice object only exposes effects; the UI decides how much to reveal. */
export function choiceForSide(card, side) {
  return side === 'left' ? card.left : card.right;
}
