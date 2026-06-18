// ENDGAME — the election campaign (days 1801–2000). A LINEAR deck: the map is
// locked and the player marches through these in order. Primary tension: holding
// the coalition together while the family and the opposition close in.
const sx = (prompt, left, right) => ({ prompt, left, right });
const ax = (speaker, portrait, tags, ...stages) => ({ speaker, portrait, tags, stages });

export const ENDGAME = [
  ax('Your Campaign Manager', 'manager', ['election', 'finale'],
    sx("Day 1801. The map goes dark; only the road to re-election remains. 'Forget governing,' your manager says. 'For two hundred days there is only the campaign — and your family has stopped pretending to be on your side.'",
      ['Run on your record.', 'Let the work speak.', 'A sober record-first campaign steadies the moderates and bores the base.', { EN: 6, GL: 5, FI: -5 }],
      ['Run on fear of the opposition.', 'Frighten them to the booth.', 'Fear turns out your core and hardens the other side against you.', { MI: 8, EN: -7, GL: -3 }])),

  ax('Election Commission Chief', 'official', ['ec', 'integrity'],
    sx("The Chief asks, privately, how clean you want the vote. 'I can deliver an unimpeachable election the world certifies — or a comfortable one. I cannot promise both.'",
      ['Demand a clean, observed vote.', 'Legitimacy outlasts a margin.', 'Observers praise the openness; the result is real and uncertain.', { GL: 9, EN: 6, MI: -7 }],
      ['Take the comfortable margin.', 'Win first, explain later.', 'The cushion is real and so are the irregularity reports that shadow it.', { MI: 8, GL: -9, EN: -5 }])),

  ax('Deshan, your brother', 'sibling', ['betrayal', 'extortion'],
    sx("Deshan no longer knocks. 'I bankrolled you for twenty years. Now I want the Resources Ministry, or I walk to the opposition with every satchel's worth of receipts.'",
      ['Give him the ministry.', 'Keep the receipts in the family.', 'He pockets the prize; the graft headlines write themselves.', { FA: 9, RE: -11, EN: -7 }],
      ['Dare him to talk.', 'Blood will not blackmail me.', 'He defects with the receipts; the scandal lands but your spine shows.', { FA: -14, MI: 6, GL: -6 }])),

  ax('Coalition Whip', 'fixer', ['coalition', 'allies'],
    sx("Your smallest coalition partner threatens to bolt mid-campaign unless its leader gets the Deputy PM promise. Lose them and the arithmetic of the house wobbles on election eve.",
      ['Promise the deputy post.', 'Hold the coalition at any price.', 'They stay, emboldened, and every other partner now wants the same.', { MI: 7, FA: -4, EN: -4 }],
      ['Let them walk.', 'A coalition of hostages is no coalition.', 'They bolt; you campaign leaner and cleaner, if more exposed.', { GL: 5, MI: -8, EN: 4 }])),

  ax('The Opposition Leader', 'rival', ['election', 'deal'],
    sx("Your rival requests a private meeting. 'Concede the southern provinces in the count, and I bury the photographs your sister sold me. The alternative is mutual ruin.'",
      ['Take the dirty deal.', 'Survive the photographs.', 'The pictures stay buried; the south is quietly surrendered.', { GL: -8, FI: 6, MI: -5 }],
      ['Refuse and fight clean.', 'Let her publish and be damned.', 'You brace for the scandal and keep every province in play.', { EN: 8, GL: 6, FI: -9 }])),

  ax('State Broadcaster Director', 'official', ['media', 'propaganda'],
    sx("The state broadcaster offers wall-to-wall favourable coverage for the campaign's duration — if you look away while it buries the opposition's airtime entirely.",
      ['Take the airwaves.', 'Own the only channel that matters.', 'Your face fills every screen; the silence around your rival is noticed abroad.', { MI: 8, EN: -6, GL: -7 }],
      ['Insist on fair airtime.', 'A captured screen persuades no one.', 'The even-handedness costs you reach and earns you credibility.', { GL: 8, EN: 5, MI: -6 }])),

  ax('Diaspora Fundraiser', 'people', ['diaspora', 'funds'],
    sx("Expatriate backers will flood the campaign war-chest — but the money comes through the same informal channels the central bank has been fighting, and a rival could trace it.",
      ['Take the diaspora cash.', 'A full war-chest wins seats.', 'The campaign is suddenly flush; the paper trail is a future liability.', { FI: 9, MI: 5, GL: -6 }],
      ['Refuse the grey money.', 'No funds I cannot defend.', 'You campaign poorer and unimpeachable on the books.', { GL: 6, FI: -8, EN: 4 }])),

  ax('Security Chief', 'general', ['security', 'rallies'],
    sx("Intelligence warns of violence at your largest rally. The chief wants to flood the route with the elite battalion — a show of force the cameras will read as intimidation.",
      ['Deploy the battalion.', 'A safe rally beats a free one.', 'The rally is secure and the optics are of a strongman, not a candidate.', { MI: 9, EN: -7, GL: -5 }],
      ['Keep it light, trust the crowd.', 'Fear at my own rally is a loss.', 'The lighter footprint feels open — and gambles on the threat being hollow.', { EN: 8, MI: -7, GL: 4 }])),

  ax('Pollster', 'official', ['polls', 'strategy'],
    sx("Your pollster lays out the map: you are bleeding the young urban vote to the opposition and the rural base to apathy. You can chase one but not both in the days left.",
      ['Chase the urban young.', 'The cities set the narrative.', 'Climate and jobs messaging wins back the cities and chills the countryside.', { EN: 8, GL: 5, MI: -6 }],
      ['Shore up the rural base.', 'The villages deliver the seats.', 'Patronage and subsidy promises lock the rural vote and strain the books.', { MI: 7, FI: -7, EN: 3 }])),

  ax('Foreign Observer Mission', 'ambassador', ['observers', 'legitimacy'],
    sx("An international observer mission asks for full access to the count. Granting it invites scrutiny you cannot fully control; refusing it brands the result illegitimate before a vote is cast.",
      ['Grant full access.', 'Let the world watch and vouch.', 'The scrutiny is nerve-wracking and the certification, when it comes, is gold.', { GL: 10, EN: 5, MI: -6 }],
      ['Restrict the mission.', 'My count is my business.', 'You keep control of the room and lose the world’s benefit of the doubt.', { MI: 6, GL: -10, EN: -4 }])),

  ax('Nasrin, your spouse', 'spouse', ['family', 'finale'],
    sx("Nasrin, who has carried half this reign, asks for one thing on the eve of the vote: stand with her on the final stage as partners, not as a candidate using a prop.",
      ['Share the stage as equals.', 'She earned it a hundred times over.', 'The genuine partnership moves the country; the old-guard handlers wince.', { FA: 12, EN: 6, MI: -4 }],
      ['Keep the focus solely on you.', 'A campaign has one face.', 'The optics stay disciplined; something between you quietly cools.', { MI: 5, FA: -10, EN: -3 }])),

  ax('Returning Officer', 'official', ['count', 'finale'],
    sx("The final tally is razor-thin in the deciding districts. A returning officer waits by the phone: a word from you and a few thousand ballots are 'reconciled' in your favour.",
      ['Order the reconciliation.', 'I did not come this far to lose by a whisker.', 'The seats fall your way and the fingerprints are unmistakable.', { MI: 8, GL: -10, EN: -7 }],
      ['Let the count stand.', 'I win it clean or not at all.', 'You release the officers and accept the people’s arithmetic, whatever it gives.', { GL: 9, EN: 7, MI: -6 }])),

  ax('The Electorate', 'people', ['vote', 'verdict'],
    sx("Polling day. The queues stretch past the mango groves and the city blocks both. There is nothing left to decide and everything left to fear. You cast your own ballot and wait for the nation to answer.",
      ['Address the nation, humble.', 'Thank them and let go.', 'A gracious closing note leaves the country calm whichever way it breaks.', { EN: 7, GL: 6, FA: 4 }],
      ['Address the nation, defiant.', 'Promise to fight any result.', 'The defiance fires the base and rattles the markets and the chancelleries.', { MI: 7, GL: -6, EN: -5 }])),
];
