// PARTY — Party Office (Banani). Primary metric: MI (the political machine /
// coercive grip). Real issues: the caretaker-government demand and boycotts,
// Election Commission capture, hartals and blockades, the student wing, MP
// defections and 'horse-trading', alliance with the religious bloc, war-crimes
// tribunal politics, dynastic succession inside the party.
const sx = (prompt, left, right) => ({ prompt, left, right });
const ax = (speaker, portrait, tags, ...stages) => ({ speaker, portrait, tags, stages });

export const PARTY = [
  // ── Caretaker government & the boycott ──────────────────────────────────────
  ax("General Secretary", "fixer", ["election", "caretaker", "legitimacy"],
    sx("Honourable leader! Your helper says you must let a fair, neutral team run the election, or the other side will quit and say you cheated.",
      ["Refuse and run the election yourself.", "A contest I run is a contest I survive.", "You keep control of the machinery and win the seats. Turnout is thin, the opposition cries fraud, and your mandate carries an asterisk abroad.", { MI: 10, GL: -10, EN: -6 }],
      ["Let the fair team run the election.", "A legitimate loss beats an illegitimate win.", "You gamble on a clean vote. The world applauds the rare concession; your own machine panics that you have bet the house on the people.", { GL: 10, EN: 6, MI: -10 }]),
    sx("Sir, urgent news. The votes are close. You can secretly change the counting to make sure you win, but people might notice.",
      ["Secretly change the votes to win.", "A majority is not left to chance.", "Your majority is secured and unmistakably engineered. Observers document the irregularities; the result is yours and rotten at the root.", { MI: 8, GL: -10, EN: -8, FA: 4 }],
      ["Let the real counting decide, even if you lose.", "A stolen seat is a debt that comes due.", "You accept the honest tally and a slimmer majority. Governing is harder; the legitimacy you keep may matter more than the seats you lost.", { GL: 8, EN: 6, MI: -6 }])),

  // ── Election Commission capture ─────────────────────────────────────────────
  ax("Election Commission Liaison", "official", ["ec", "institutions", "appointments"],
    sx("Sir, forgive me — You get to pick the new voting judges. You can pick your friends who will let you win, or honest people who might rule against you.",
      ["Pick your friends to be the judges.", "An umpire I pick does not call me out.", "The Commission becomes an extension of your office. It serves you flawlessly — and the institution's credibility, once spent, will not return when you need it.", { MI: 8, GL: -8, EN: -6 }],
      ["Pick honest, fair people.", "A referee everyone trusts protects the winner too.", "You stack the body with respected names. They will sometimes rule against you, but the elections they bless will be believed.", { GL: 8, EN: 6, MI: -8 }])),

  // ── Hartal / blockade ───────────────────────────────────────────────────────
  ax("Street Operations Coordinator", "fixer", ["hartal", "blockade", "violence"],
    sx("A word, sir! Your enemies are blocking the roads. You can send your own fighters to stop them, but it will be very violent.",
      ["Send your fighters to stop them.", "Meet their streets with ours.", "Your cadres clear the roads in running battles. Commerce resumes amid the wreckage, and the cycle of street violence now belongs to you both.", { MI: 8, EN: -10, FI: 4, GL: -6 }],
      ["Let the police handle it safely.", "Two mobs are worse than one.", "You refuse to militarise your supporters and let the police protect the routes. The blockade drags on and the economy bleeds, but no partisan blood is on your hands.", { GL: 4, EN: 4, MI: -6, FI: -6 }])),

  // ── MP defections / horse-trading ───────────────────────────────────────────
  ax("Chief Whip", "fixer", ["defection", "coalition", "horse-trading"],
    sx("Sir, we have a problem. You are losing votes. You can secretly promise bad politicians jobs and safety if they switch to your team.",
      ["Buy their votes with jobs and safety.", "A secured floor is worth a few favours.", "The MPs cross and your majority is iron. The cabinet bloats with bought men, their cases frozen, and the public reads the price tag.", { MI: 8, FA: 4, EN: -6, GL: -4 }],
      ["Refuse to make secret, bad deals.", "I will not staff a government with men I had to bribe.", "You decline the deal and govern on a knife-edge. Every vote is now a fight, but no minister sits in your cabinet to dodge a courtroom.", { GL: 6, EN: 4, MI: -8 }])),

  // ── Alliance with the religious bloc ────────────────────────────────────────
  ax("Religious Front Emissary", "cleric", ["islamist", "alliance", "secularism"],
    sx("Sir! A powerful religious group will help you win, but only if you make strict religious laws and take away women's rights.",
      ["Take their help and make the strict laws.", "Their squares are full and my margins are thin.", "Their mobilisation is yours now, and so are their conditions. The curriculum narrows, reformers despair, and your secular base feels sold.", { MI: 10, FA: 4, EN: -10, GL: -8 }],
      ["Say no and protect everyone's rights.", "I will not trade women's rights for a turnout.", "You refuse their terms. They can now march against you instead of with you, but the constitution's spine, and your liberal base, hold.", { EN: 8, GL: 6, MI: -8 }])),

  // ── War-crimes tribunal politics ────────────────────────────────────────────
  ax("Tribunal Prosecutor", "official", ["1971", "tribunal", "justice"],
    sx("Mr. Prime Minister, sir! You are putting old war criminals on trial. You can rush the trials to punish them fast, or go slowly to be totally fair.",
      ["Rush the trials to punish them fast.", "Justice delayed is the guilty escaping.", "The convictions land quickly to roaring crowds, and your opposition is gutted. Legal observers question the haste, and the verdicts carry that shadow.", { MI: 8, FA: 4, GL: -6, EN: 4 }],
      ["Go slowly and make sure the trials are fair.", "A reckoning built on shortcuts collapses.", "You demand rigorous trials. The base grows impatient and the weapon is blunter, but the verdicts that come will withstand history's scrutiny.", { GL: 8, EN: 4, MI: -6 }])),

  // ── Student wing leash ──────────────────────────────────────────────────────
  ax("Student Wing President", "fixer", ["students", "campus", "extortion"],
    sx("Your Excellency! Your student group is bullying kids at school. They want more power, but some say you need to stop their bullying.",
      ["Give your student group more power.", "The campuses are a fortress I cannot lose.", "The wing tightens its grip and delivers the campuses. Its abuses grow more brazen, a powder keg awaiting one viral video.", { MI: 8, EN: -10, GL: -6 }],
      ["Stop them and punish the bullies.", "A wing that tortures students will one day burn me.", "You discipline the bosses and cut the extortion. The campuses loosen from your grip, but you have defused a bomb under your own house.", { EN: 8, GL: 4, MI: -8 }])),

  // ── Dynastic succession in the party ────────────────────────────────────────
  ax("Party Elders' Council", "official", ["succession", "dynasty", "loyalty"],
    sx("Prime Minister! The older leaders want you to name your child as the next boss right now. Others say you should pick the smartest person, not just your family.",
      ["Name your child as the next boss.", "A clear heir prevents a war of knives.", "The dynasty is secured and the council placated. Capable non-family leaders drift away, and the party's depth thins to a single bloodline.", { MI: 6, FA: 8, GL: -4, EN: -4 }],
      ["Pick the smartest person instead.", "A party is not an inheritance.", "You refuse to crown an heir and invite a real contest. The family is wounded and the council nervous, but the party keeps its best minds.", { GL: 6, EN: 4, FA: -8, MI: -4 }])),

  // ── Jailing the opposition leader ───────────────────────────────────────────
  ax("Attorney General", "official", ["opposition", "courts", "lawfare"],
    sx("Sir — A judge will put your biggest enemy in jail for an old crime if you want. This means she can't run against you in the election.",
      ["Have the judge put her in jail.", "Remove the rival, remove the race.", "She is sentenced and disqualified. Her party erupts and the chanceries issue statements, but the ballot now has no name on it but yours.", { MI: 10, GL: -10, EN: -6 }],
      ["Let the judge decide fairly on his own.", "A throne with no challenger is a target.", "You refuse to script the verdict. She may yet stand against you, but no one can say you jailed your way to power.", { GL: 8, EN: 6, MI: -8 }]),
    sx("Honourable leader! Your enemy is very sick in jail. If she dies there, everyone will hate you. Her family begs to take her to a hospital.",
      ["Keep her locked in the jail.", "A martyr in a cell is safer than a saint set free.", "You hold firm and the cell stays locked. Her health worsens in the headlines, and every cough becomes an indictment of you.", { MI: 6, GL: -8, EN: -8 }],
      ["Let her go to the hospital.", "I will not let a corpse defeat me.", "You let her convalesce under guard at home. The base grumbles that the snake is loose, but you have denied her the one victory captivity offered.", { GL: 6, EN: 6, MI: -4 }])),

  // ── Election-day internet shutdown ──────────────────────────────────────────
  ax("Telecom Regulator", "official", ["internet", "election", "censorship"],
    sx("Sir, urgent news. You can turn off the internet on voting day so no one can see if you cheat.",
      ["Turn off the internet on voting day.", "What the cameras cannot upload did not happen.", "The country goes dark and the count proceeds unwatched. The result is clean-looking and universally disbelieved; the outage itself becomes the story.", { MI: 8, GL: -10, FI: -6, EN: -6 }],
      ["Keep the internet on for everyone.", "A vote no one can film is a vote no one believes.", "You let the signal flow. Every irregularity is livestreamed, but so is every honest queue, and the result keeps its credibility.", { GL: 8, EN: 6, MI: -6 }])),

  // ── Cash for votes ──────────────────────────────────────────────────────────
  ax("District Organiser", "fixer", ["vote-buying", "patronage", "money"],
    sx("Sir, forgive me — A helper wants to hand out secret envelopes of cash and free things to poor people the night before the vote to make them pick you.",
      ["Give out the secret cash and free things.", "An empty stomach has a short memory.", "The trucks roll out and the margins firm up. The treasury thins, the habit deepens, and your win smells of the bazaar.", { MI: 8, FI: -8, EN: -4, GL: -4 }],
      ["Say no and win fairly without bribes.", "Buy a vote once and you rent it forever.", "You forbid the envelopes and campaign on roads and clinics built. The organisers fret over thin margins, but the votes you win, you keep.", { EN: 8, GL: 6, FI: 4, MI: -6 }])),

  // ── Bloated voter rolls ─────────────────────────────────────────────────────
  ax("Electoral Roll Officer", "official", ["voter-roll", "fraud", "ghosts"],
    sx("A word, sir! The voting list has thousands of fake names and dead people on it. You can use these fake names to cheat and get more votes.",
      ["Keep the fake names to get more votes.", "A loyal voter need not be a living one.", "The phantom names stay, ready to be voted. Auditors will find them eventually, and when they do the whole tally is tainted.", { MI: 8, GL: -8, EN: -6 }],
      ["Delete the fake names for a fair vote.", "Ghosts vote, but they also haunt.", "You scrub the list to the living. Your stronghold margins shrink honestly, and the register can finally survive a recount.", { GL: 8, EN: 6, MI: -8 }])),

  // ── Nomination trading ──────────────────────────────────────────────────────
  ax("Nominations Board Chair", "fixer", ["tickets", "candidates", "money"],
    sx("Sir, we have a problem. Many people want to be on your team. You can let the richest people buy their spots, or pick the people who work the hardest.",
      ["Let the richest people buy the spots.", "A campaign runs on cash, not character.", "The war chest fills in a week with businessmen-MPs who bought their seats. They will legislate for their own ledgers, and the grassroots see who was passed over.", { FI: 10, MI: 4, EN: -8, GL: -6 }],
      ["Pick the hardest workers.", "A bought candidate serves the buyer, not the booth.", "You hand seats to organisers who earned them. The campaign chest stays lean, but your benches fill with people the wards actually know.", { EN: 8, GL: 4, MI: 4, FI: -8 }])),

  // ── Friendly media empire ───────────────────────────────────────────────────
  ax("Media Adviser", "fixer", ["media", "propaganda", "press"],
    sx("Sir! A rich friend offers to buy all the TV stations so they only say nice things about you and ignore your mistakes.",
      ["Let him buy the TV stations.", "He who owns the screen owns the story.", "The airwaves turn to praise overnight. Dissent migrates to the shadows of the internet, and 'press freedom' becomes a foreign talking point against you.", { MI: 8, FA: 4, GL: -8, EN: -6 }],
      ["Say no and let the TV stations be honest.", "A choir of yes-men cannot warn me of fire.", "You wave the tycoon off. The critical broadcasts sting nightly, but they are also the only honest mirror your government has.", { GL: 8, EN: 6, MI: -6 }])),

  // ── The online troll cell ───────────────────────────────────────────────────
  ax("Cyber Cell Commander", "shadow", ["trolls", "disinformation", "online"],
    sx("Mr. Prime Minister, sir! Your computer team wants to make thousands of fake internet accounts to spread lies about your enemies and trick people.",
      ["Pay the computer team to spread lies.", "The first lie of the morning sets the day.", "Ten thousand sock-puppets march on command. The discourse rots, journalists are doxxed, and when the operation leaks it confirms every accusation of manipulation.", { MI: 8, GL: -8, EN: -6 }],
      ["Shut the computer team down.", "An army of lies eventually turns its guns inward.", "You disband the operation. Your opponents own more of the timeline now, but your name is off the next disinformation exposé.", { GL: 6, EN: 6, MI: -6 }])),

  // ── Coalition partner's ultimatum ───────────────────────────────────────────
  ax("Coalition Manager", "official", ["coalition", "allies", "leverage"],
    sx("Your Excellency! Your partner team threatens to leave unless you give them big jobs. If they leave, you might lose your power.",
      ["Give them the big jobs so they stay.", "A government standing is worth a crowded cabinet.", "You hand over the posts and the floor holds. Your partner struts as near-equal, and your own MPs resent the ministries they were promised.", { MI: 6, FA: -4, EN: -4, GL: 4 }],
      ["Tell them no and let them leave.", "I will not be governed by my own junior.", "You refuse, and they storm out. The arithmetic tightens to a knife's edge, but every remaining minister knows you do not bend to blackmail.", { MI: -8, FA: 6, EN: 4 }])),

  // ── No-confidence motion ────────────────────────────────────────────────────
  ax("Chief Whip", "fixer", ["parliament", "no-confidence", "discipline"],
    sx("Prime Minister! Some of your own teammates might vote against you because they are angry. You can scare them into obeying, or actually fix what they are angry about.",
      ["Scare them into obeying you.", "Discipline is taught in the dark.", "The waverers fall back into line, cowed. The motion dies, but a dozen MPs now serve you out of fear, and fear is a thin glue.", { MI: 8, FA: 4, EN: -6, GL: -4 }],
      ["Listen to them and fix the problem.", "A backbencher heard is a backbencher kept.", "You meet the rebels, concede a real reform, and win the floor in daylight. It cost you policy ground, but the loyalty you bought is genuine.", { EN: 6, GL: 6, MI: -4 }])),

  // ── Constitutional term limits ──────────────────────────────────────────────
  ax("Constitutional Adviser", "official", ["constitution", "term-limits", "power"],
    sx("Sir — You can change the rules so you are allowed to be the boss forever. But this shows everyone you never plan to leave.",
      ["Change the rules to be boss forever.", "Reform takes longer than a term allows.", "The amendment passes and the horizon clears. At home it reads as ambition unmasked; abroad, as one more strongman erasing his own exit.", { MI: 8, FA: 4, GL: -10, EN: -8 }],
      ["Keep the rules normal.", "A door I cannot lock behind me keeps me honest.", "You let the constraint stand. The dynasty's grip looks less total, but you have spared yourself the label of president-for-life.", { GL: 8, EN: 6, MI: -4 }])),

  // ── Banning a rival party ───────────────────────────────────────────────────
  ax("Home Secretary", "official", ["banning", "rivals", "repression"],
    sx("Honourable leader! You have a sneaky excuse to completely ban the enemy team so they can't run against you at all.",
      ["Ban the enemy team.", "A weed pulled does not seed.", "The party is dissolved and its cadres scattered or jailed. Your dominance is near-total, and so is the proof that you fear a fair fight.", { MI: 10, GL: -10, EN: -8 }],
      ["Let them run and try to beat them fairly.", "A banned party becomes a legend; a beaten one becomes a footnote.", "You leave the rival legal and defeat it in the open. It survives to fight again, but your win carries no asterisk.", { GL: 8, EN: 6, MI: -6 }])),

  // ── The party patron's bill ─────────────────────────────────────────────────
  ax("Party Treasurer", "fixer", ["funding", "patrons", "graft"],
    sx("Sir, urgent news. A rich man who gave you a lot of money now wants special favors, like a free bank. You need his money for the next election.",
      ["Give him the special favors.", "The hand that feeds expects to be kissed.", "He gets his licence and his concession. The campaign chest is safe for another cycle, and a single oligarch now owns a wing of your economy.", { FI: 8, MI: 4, EN: -8, GL: -6 }],
      ["Say no and find honest money instead.", "A party owned by one man has only one voter.", "You turn him down and scramble for funding elsewhere. The next campaign will be leaner and harder, but no single patron holds your leash.", { GL: 6, EN: 6, FI: -8 }])),

  // ── Local strongman (mastan) ────────────────────────────────────────────────
  ax("Ward Boss", "shadow", ["mastan", "extortion", "control"],
    sx("Sir, forgive me — Your best helper wins lots of votes, but he does it by being a scary bully and stealing from people.",
      ["Keep the bully because he gets you votes.", "A made ward is a won ward.", "He keeps delivering, and keeps grabbing. His enemies pile up, and one of his victims will eventually find a camera.", { MI: 8, EN: -8, GL: -4 }],
      ["Fire the bully to keep things clean.", "A boss who owns the booth will one day own me.", "You strip him of cover and let the cases proceed. The ward's turnout machine sputters, but a liability has been removed before it blew.", { EN: 8, GL: 4, MI: -8 }])),

  // ── Reserved women's seats ──────────────────────────────────────────────────
  ax("Women's Wing Chief", "official", ["women", "representation", "reserved-seats"],
    sx("A word, sir! You get to pick women for special government seats. You can pick hard-working leaders, or just pick the wives of your rich friends.",
      ["Pick the wives of your rich friends.", "The seats are a thank-you, not a ladder.", "Donors' wives take the benches and vote as told. The women's wing seethes, and the reform you boast of abroad rings hollow at home.", { FA: 6, FI: 4, EN: -6, GL: -4 }],
      ["Pick the hard-working women leaders.", "A reserved seat should hold a leader, not a placeholder.", "You elevate women who built the wards. The donors grumble at the snub, but your benches gain voices that actually represent someone.", { EN: 8, GL: 6, FA: -4, MI: -2 }])),

  // ── The defecting MP (your own) ─────────────────────────────────────────────
  ax("Chief Whip", "fixer", ["defection", "loyalty", "betrayal"],
    sx("Sir, we have a problem. A good guy on your team might leave to join the enemies. You can ruin his life with a fake secret, or talk to him nicely to keep him.",
      ["Ruin his life with a fake secret.", "A loud man is silenced before he sings.", "The file leaks and his reputation buckles before he can cross. He is neutralised, and every honest MP learns what conscience costs in your party.", { MI: 8, FA: 4, EN: -8, GL: -6 }],
      ["Talk to him nicely and fix his worries.", "An honest critic kept is worth ten bought loyalists.", "You hear him out and act on one grievance. He stays, vocal but yours, and the benches see that integrity has a place after all.", { EN: 8, GL: 6, MI: -4 }])),

  // ── National council show of force ──────────────────────────────────────────
  ax("Rally Coordinator", "fixer", ["rally", "spectacle", "mobilisation"],
    sx("Sir! You can spend a giant amount of money to bus a million people to the city just to cheer for you and look powerful.",
      ["Spend the money for the giant cheering crowd.", "Power unseen is power doubted.", "The maidan overflows and the footage dominates the week. The cost is staggering and the city paralysed, but no one questions your reach.", { MI: 8, FA: 4, FI: -8, EN: -4 }],
      ["Save the money and have a small, normal meeting.", "A crowd I had to rent proves nothing.", "You convene a focused, modest gathering. The spectacle is smaller, but the treasury and the city's patience are spared, and the agenda actually gets done.", { FI: 6, EN: 4, MI: -4 }])),

  // ── War-crimes execution timing ─────────────────────────────────────────────
  ax("Tribunal Prosecutor", "official", ["1971", "execution", "timing"],
    sx("Mr. Prime Minister, sir! You can hang a bad war criminal right before the election to make your fans cheer.",
      ["Hang the criminal right before the election.", "Justice and the calendar can keep step.", "The hanging lands days before the vote and the base roars. The cynicism is noted at home and abroad — a reckoning turned into a campaign prop.", { MI: 8, FA: 4, EN: 4, GL: -6 }],
      ["Let the law happen on its own normal time.", "A gallows is not a campaign poster.", "You let the process conclude when it concludes. The base would have preferred the theatre, but the verdict keeps its dignity intact.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Renaming institutions after the family ──────────────────────────────────
  ax("Culture Minister", "official", ["legacy", "dynasty", "naming"],
    sx("Your Excellency! Your friends want to name the airport, schools, and bridges after your family so no one ever forgets you.",
      ["Say yes and name everything after your family.", "A name on the map is a claim on the future.", "The signs change across the country. Your lineage is everywhere now — and so is the evidence, for critics, of a personality cult.", { FA: 8, MI: 4, EN: -6, GL: -6 }],
      ["Say no to renaming everything.", "A dynasty secure in itself need not shout.", "You let the airports keep their names. The family's elders sulk at the modesty, but the state stays larger than your bloodline.", { GL: 6, EN: 4, FA: -6 }])),

  // ── Booth capture in the stronghold ─────────────────────────────────────────
  ax("Polling Agent Coordinator", "fixer", ["booth-capture", "election-day", "violence"],
    sx("Prime Minister! On voting day, your team can secretly kick out the other team's checkers and stuff the boxes with fake votes for you.",
      ["Tell your team to stuff the boxes with fake votes.", "The last hour decides the count.", "The boxes fill and the seats are yours. Phone videos of ejected agents go viral by nightfall, and the dozen seats become a dozen scandals.", { MI: 8, GL: -10, EN: -8 }],
      ["Tell them to stop and keep the voting fair.", "A captured booth is a confession on film.", "You order the agents to stand down and the count to stand. You may lose some of the twelve, but you keep the only thing a margin is worth — belief.", { GL: 8, EN: 6, MI: -6 }])),

  // ── Old guard vs. young blood ───────────────────────────────────────────────
  ax("Party Elders' Council", "official", ["generations", "renewal", "loyalty"],
    sx("Sir — The very old leaders won't give up their jobs to the younger, smarter people. If you force them out, they will be mad.",
      ["Let the old leaders keep their jobs.", "Loyalty earned over decades is not lightly retired.", "The veterans stay and the peace holds. The talented young drift toward NGOs and business, and the party ages with its leaders.", { FA: 4, MI: 4, EN: -4, GL: -4 }],
      ["Give the jobs to the younger, smarter people.", "A party that cannot renew itself buries itself.", "You move the forty-somethings into real power. The elders are wounded and noisy, but the benches suddenly have a future tense.", { EN: 8, GL: 6, FA: -6, MI: -2 }])),

  // ── Speaker's neutrality ────────────────────────────────────────────────────
  ax("Parliamentary Affairs Minister", "official", ["speaker", "parliament", "fairness"],
    sx("Honourable leader! You get to pick the referee for the big government meetings. You can pick your friend who always lets you win, or a fair person.",
      ["Pick your friend who always lets you win.", "The chair should sit on my side of the aisle.", "Bills sail through and the opposition is muzzled at every turn. The house becomes a rubber stamp, and parliament's last shred of theatre dies.", { MI: 6, GL: -6, EN: -6 }],
      ["Pick a fair person.", "A fair umpire makes my wins count.", "The house gets a Speaker both sides respect. Your rivals get their moments, but the chamber's rulings carry weight again.", { GL: 8, EN: 6, MI: -6 }])),

  // ── Diaspora donations ──────────────────────────────────────────────────────
  ax("Overseas Wing Secretary", "fixer", ["diaspora", "funding", "foreign"],
    sx("Sir, urgent news. Your friends in other countries want to send you lots of secret money for your campaign. It is illegal to take secret foreign money.",
      ["Take the secret foreign money.", "A son abroad still pays his mother's bills.", "The funds arrive off the books and the chest swells. Somewhere a paper trail survives, and when it surfaces it will read as foreign money buying your government.", { FI: 8, MI: 2, GL: -8, EN: -4 }],
      ["Say no to the illegal money.", "Money I cannot name is a leash I cannot see.", "You insist on clean, declared donations only. The chest grows slower, but no foreign-funding exposé waits in your future.", { GL: 6, EN: 4, FI: -6 }])),

  // ── Minority vote bank ──────────────────────────────────────────────────────
  ax("Minorities Cell Convenor", "official", ["minorities", "secularism", "vote-bank"],
    sx("Sir, forgive me — Small religious groups always vote for you, but they are being attacked. They want you to protect them loudly, which might upset the big groups.",
      ["Just say sorry, but don't upset the big groups.", "A bloc that has nowhere else to go waits patiently.", "You issue statements and little else. The minorities feel taken for granted, and the next attack erodes a loyalty you assumed was permanent.", { MI: 2, EN: -6, GL: -4 }],
      ["Protect them loudly and punish the attackers.", "A protected vote is a kept vote.", "You deploy security and jail the ringleaders. The hardline preachers rage, but the minority bloc rallies to you with real gratitude.", { EN: 8, GL: 6, MI: -4, FA: -2 }])),

  // ── The dummy candidate scheme ──────────────────────────────────────────────
  ax("Strategy Director", "shadow", ["dummy-candidates", "election", "manipulation"],
    sx("A word, sir! Your enemies are quitting the election. You can pay fake \"enemies\" to run against you so it looks like a real game.",
      ["Pay fake enemies to run against you.", "An empty stage needs painted rivals.", "The ballot fills with your own men pretending to oppose you. Observers see through it instantly, and the charade becomes shorthand for the whole farce.", { MI: 6, GL: -8, EN: -6 }],
      ["Just run alone and let people see the truth.", "A staged fight fools no one and shames me.", "You let the contest be what it is — thin, but honest. The optics of a low-turnout win are bad, but not as bad as being caught faking your own opposition.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Civil service loyalty purge ─────────────────────────────────────────────
  ax("Cabinet Secretary", "official", ["bureaucracy", "purge", "patronage"],
    sx("Sir, we have a problem. You can fire all the government workers who used to work for the old boss and replace them with your own fans.",
      ["Fire them and hire only your fans.", "A machine must answer to one hand.", "Loyalists rise and capable neutrals rot in OSD limbo. The government does as told, and the institution's professionalism bleeds out with the purged.", { MI: 8, EN: -6, GL: -6 }],
      ["Keep the good workers, even if they worked for the old boss.", "A bureaucracy I gut once will fail me later.", "You promote on competence and let officers serve the office, not the person. Some will drag their feet on your worst ideas — which is rather the point.", { EN: 6, GL: 6, MI: -6 }])),

  // ── Anniversary martyr politics ─────────────────────────────────────────────
  ax("Party Historian", "official", ["history", "martyrs", "narrative"],
    sx("Sir! A helper wants to change the history books to make the enemy team look like killers, just to make your team look better.",
      ["Change the history books to make them look bad.", "Yesterday's blood is today's mandate.", "The speeches land like blows and the base is electrified. The opposition is painted as murderers' heirs, and any hope of national reconciliation dies on the dais.", { MI: 6, FA: 4, EN: -6, GL: -4 }],
      ["Keep the history books honest and respectful.", "A grave is not a campaign stop.", "You honour the dead without naming the living as villains. The base wanted more fire, but the day keeps its solemnity and you keep the high ground.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Judicial bench-fixing ───────────────────────────────────────────────────
  ax("Law Minister", "official", ["judiciary", "appointments", "independence"],
    sx("Mr. Prime Minister, sir! You get to pick two big judges before a big court case about you. You can pick your friends to make sure you win.",
      ["Pick your friends as the judges.", "A verdict is safest decided before the hearing.", "Your judges take their seats and the ruling goes your way. The judgment is sound on paper and stillborn in credibility; the court is now visibly yours.", { MI: 8, GL: -8, EN: -6 }],
      ["Pick the smartest judges and hope for the best.", "A court I own cannot protect me from the one who owns me next.", "You elevate the senior, respected names. They may rule against you, but a judiciary that can say no is the only one whose yes means anything.", { GL: 8, EN: 6, MI: -6 }])),

  // ── Grassroots revolt over local MP ─────────────────────────────────────────
  ax("District President", "people", ["grassroots", "accountability", "local"],
    sx("Your Excellency! People hate one of your politicians because he is mean and steals. You can protect him, or fire him and listen to the people.",
      ["Protect the mean politician.", "A sitting MP's machine is not lightly broken.", "You back your man and the machine grinds on. The workers feel betrayed and stay home, and the seat that looked safe wobbles.", { MI: 4, FA: 2, EN: -6, GL: -2 }],
      ["Fire him and listen to the people.", "A party that won't hear its base goes deaf.", "You drop the incumbent and let the workers pick. He fumes and threatens to bolt, but the district roars back to life around its own choice.", { EN: 8, MI: -4, FA: -2, GL: 2 }])),

  // ── Pension and jobs patronage ──────────────────────────────────────────────
  ax("Establishment Minister", "official", ["jobs", "patronage", "youth"],
    sx("Prime Minister! You are hiring thousands of new government workers. You can secretly give all the jobs to your fans, or give them to the smartest people.",
      ["Secretly give the jobs to your fans.", "A job given is a vote owned for life.", "Cadres' sons fill the rolls and a generation is bound to you. The merit-passed-over seethe, and the civil service inherits a cohort hired for loyalty, not skill.", { MI: 6, FA: 4, EN: -8, GL: -4 }],
      ["Give the jobs to the smartest people.", "A government staffed by favours governs like one.", "You run a clean recruitment. The youth wing howls at the lost spoils, but you gain a competent intake and the credit for a fair process.", { EN: 8, GL: 4, FA: -4, MI: -4 }])),

  // ── The prodigal rival returns ──────────────────────────────────────────────
  ax("General Secretary", "fixer", ["reconciliation", "rivals", "unity"],
    sx("Sir — An old leader who left your team angry wants to come back. He brings lots of votes but also lots of drama.",
      ["Welcome him back for the votes.", "A returned rival fights for you, not against.", "He rejoins to fanfare, faction and all, and your numbers swell. He also resumes manoeuvring from the inside, an old knife back in the drawer.", { MI: 6, FA: -2, EN: 2, GL: 2 }],
      ["Tell him to stay away.", "A man who left once leaves twice.", "You refuse the reunion. His faction stays outside and occasionally bites, but your inner circle is spared a practised intriguer.", { FA: 4, MI: -4, EN: -2 }])),

  // ── Religious bloc's second demand ──────────────────────────────────────────
  ax("Religious Front Emissary", "cleric", ["islamist", "blasphemy", "alliance"],
    sx("Honourable leader! A strict religious group wants you to hang a man for his beliefs and ban a nice charity. They will help you win if you do it.",
      ["Do what they want to get their help.", "An ally's price rises with his usefulness.", "You give them the ban and the spectacle. The streets stay yours for now, but each concession shifts the country further from the constitution you swore to.", { MI: 6, FA: 2, EN: -10, GL: -10 }],
      ["Say no and make them angry.", "An ally who owns my conscience is my master.", "You decline, and they threaten to turn their squares against you. The winter ahead is colder, but you have stopped feeding the thing that would devour you.", { EN: 8, GL: 8, MI: -8 }])),

  // ── Empty-house legislating ─────────────────────────────────────────────────
  ax("Leader of the House", "official", ["parliament", "boycott", "legitimacy"],
    sx("Sir, urgent news. The enemy team is not at the meeting. You can quickly pass all your new rules without anyone arguing with you.",
      ["Pass all the rules quickly while they are gone.", "An absent opposition forfeits its say.", "Laws pour through unopposed in days. The efficiency is real and the legitimacy is gone; you have legislated alone and it shows on every statute.", { MI: 6, GL: -8, EN: -6 }],
      ["Wait for them to come back to be fair.", "Laws made in an empty room echo hollow.", "You hold the most divisive bills and leave the door ajar for the opposition's return. Less gets done, but parliament keeps a pulse.", { GL: 6, EN: 4, MI: -4 }])),

  // ── EVM controversy ─────────────────────────────────────────────────────────
  ax("Election Tech Adviser", "official", ["evm", "election", "trust"],
    sx("Sir, forgive me — You are getting new voting machines. You can make them secret so no one can check the math, which makes it easy to cheat.",
      ["Use the secret machines so you can cheat.", "A count with no receipt cannot be challenged.", "The machines report whatever they report and nothing can check them. The opposition's distrust hardens into certainty, and every result is now disputed by design.", { MI: 8, GL: -8, EN: -6 }],
      ["Make sure the machines print paper receipts to be fair.", "A vote no one can recount is no vote at all.", "Every machine prints a verifiable receipt. The technology stops being a conspiracy and starts being a count people might actually believe.", { GL: 8, EN: 6, FI: -4, MI: -4 }])),

  // ── Polling agent intimidation ──────────────────────────────────────────────
  ax("Field Security Chief", "shadow", ["intimidation", "polling", "agents"],
    sx("A word, sir! A guard suggests scaring the other team's checkers the night before the vote, so they don't show up and you can cheat easily.",
      ["Scare the checkers away.", "An unwatched booth is an obedient booth.", "The agents melt away and the marginals go unobserved. The pattern is unmistakable to anyone looking, and many are looking.", { MI: 8, GL: -8, EN: -6 }],
      ["Say no and let them check the votes.", "Fear at the booth poisons the whole well.", "You order the pressure stopped. The opposition watches every box, catches you on nothing, and the contest is cleaner than your fixers wanted.", { GL: 6, EN: 6, MI: -6 }])),

  // ── The defection of a star MP to you ───────────────────────────────────────
  ax("Chief Whip", "fixer", ["defection", "poaching", "majority"],
    sx("Sir, we have a problem. You can bribe a smart, young enemy leader to join your team by offering him a big job. This makes you look powerful but unfair.",
      ["Bribe him to join your team.", "Their best man is better as mine.", "He crosses to fanfare and the opposition loses a future. He governs his district as a fief, and the message lands: in your house, talent is bought.", { MI: 6, FA: 2, EN: -4, GL: -4 }],
      ["Leave him alone to rise on his own.", "A man I had to buy will be bought from me.", "You pass on the poach. He stays a thorn across the aisle, but your benches are not staffed by mercenaries, and your district bosses keep their turf.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Symbol and ballot order ─────────────────────────────────────────────────
  ax("Election Commission Liaison", "official", ["ballot", "symbol", "advantage"],
    sx("Sir! You can secretly trick the voting papers so your name is always at the top and easy to find, making you win more.",
      ["Trick the voting papers.", "A small edge, multiplied by millions.", "Your symbol sits first on every paper and the marginal voter's thumb drifts your way. It is petty and effective, and observers log every tilted ballot.", { MI: 6, GL: -6, EN: -4 }],
      ["Make the papers fair and random.", "A win bought by ballot order is not a win.", "You order the symbols randomised and fair. You forgo a quiet edge, but the ballot itself stops being evidence against you.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Mayoral race in the capital ─────────────────────────────────────────────
  ax("City Campaign Manager", "fixer", ["mayor", "dhaka", "election"],
    sx("Mr. Prime Minister, sir! Your friend is running for mayor but people don't like him. You can cheat to make him win, or replace him with someone people actually like.",
      ["Cheat to make your friend win.", "The capital cannot fall to a rival.", "Your man takes the city hall on a tide of state largesse and managed counts. He governs the capital you can no longer claim was freely won.", { MI: 6, FI: -6, GL: -6, EN: -4 }],
      ["Let the popular person run instead.", "A mayor the city chose serves the city — and reflects on me.", "You back a candidate people actually like. He owes you little and may freelance, but a clean win in the capital buys you legitimacy money cannot.", { EN: 8, GL: 6, MI: -4, FA: -2 }])),

  // ── Hartal violence escalates ───────────────────────────────────────────────
  ax("Street Operations Coordinator", "fixer", ["hartal", "arson", "escalation"],
    sx("Your Excellency! Your enemies burned a bus. Your team wants to go burn down their buildings to get revenge.",
      ["Let your team burn down their buildings.", "Blood answers blood, or it never stops.", "Your cadres burn back and the season descends into mutual arson. The economy seizes, the morgues fill, and both sides own the ashes.", { MI: 6, EN: -10, FI: -6, GL: -6 }],
      ["Stop your team and let the police handle it.", "I will not turn a blockade into a civil war.", "You refuse to escalate and let the police hunt the bombers. The blockade still bites, but the bloodshed has only one author, and it is not you.", { GL: 6, EN: 4, MI: -4, FI: -4 }])),

  // ── Founder's legacy / mausoleum politics ───────────────────────────────────
  ax("Party Historian", "official", ["legacy", "founder", "cult"],
    sx("Prime Minister! Your friends want to build a giant, super expensive museum just to talk about how great your family is.",
      ["Build the giant, expensive museum.", "A founder's shrine anchors a movement forever.", "The marble rises and the pilgrimages begin. The reverence is enforced and total, and the treasury and the country's pluralism both pay for it.", { FA: 8, MI: 4, FI: -6, GL: -4 }],
      ["Build a small, normal memorial instead.", "A legacy that needs a palace was never solid.", "You approve a dignified, smaller tribute. The family's elders feel slighted, but the funds and the breathing room for other histories survive.", { GL: 4, EN: 4, FI: 2, FA: -6 }])),

  // ── Labour wing and the garment vote ────────────────────────────────────────
  ax("Labour Wing Secretary", "people", ["labour", "garments", "wages"],
    sx("Sir — Factory workers want better pay. If you help them, they will vote for you, but the rich factory owners will be furious.",
      ["Help the rich factory owners.", "The cheques come from the gate, not the floor.", "You quietly throttle the wage push to keep the owners happy. The chest stays full, and a million workers learn whose party this really is.", { FI: 6, FA: 2, EN: -8, GL: -4 }],
      ["Help the workers get better pay.", "A million floor votes outweigh a hundred gate cheques.", "Your wing fronts the agitation and wins a real raise. The owners fume and trim their donations, but the workers' districts are yours for a generation.", { EN: 8, GL: 4, FI: -6, MI: 2 }])),

  // ── By-election as a test ───────────────────────────────────────────────────
  ax("Strategy Director", "official", ["by-election", "barometer", "risk"],
    sx("Honourable leader! There is a small vote happening. You can cheat to win easily, or play fair and risk losing to see how people really feel.",
      ["Cheat to win the small vote safely.", "A loss now is a flood later.", "You secure the seat the old way and avoid the bad headline. You also blind yourself to how thin your support has worn, governing on a number you faked.", { MI: 4, GL: -4, EN: -4 }],
      ["Play fair and risk losing.", "Better to read the ground than to pave over it.", "You run it honestly. Win or lose, you finally know where you stand — and if you lose, you learn it now, while there is time to act.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Contempt case against a critic ──────────────────────────────────────────
  ax("Law Minister", "official", ["contempt", "press", "speech"],
    sx("Sir, urgent news. A news writer called you a thief. You can throw him in jail to scare everyone, or just show proof that he is wrong.",
      ["Throw the writer in jail.", "An example silences a chorus.", "He is jailed and the newsrooms flinch. The corruption story is buried under his arrest, which becomes the bigger, longer-running scandal.", { MI: 6, FA: 2, GL: -8, EN: -6 }],
      ["Show proof he is wrong and let him go.", "A government that answers fears nothing.", "You publish the records that refute him and let him keep printing. The base wanted him jailed, but you have won the argument instead of the arrest.", { GL: 8, EN: 6, MI: -4 }])),

  // ── Floor-crossing law ──────────────────────────────────────────────────────
  ax("Constitutional Adviser", "official", ["floor-crossing", "discipline", "law"],
    sx("Sir, forgive me — You can make a strict rule that anyone on your team who disagrees with you goes to jail. This stops all arguing.",
      ["Make the strict rule to stop arguing.", "A whip with teeth needs no second crack.", "Abstention becomes career suicide and every vote is unanimous. Your benches are flawless and lifeless, a parliament that cannot think, only obey.", { MI: 6, GL: -6, EN: -6 }],
      ["Let people disagree and vote how they want.", "An MP who cannot ever say no is not a representative.", "You permit dissent on matters of conscience. A few votes get messier, but your benches contain humans again, and the house earns a little respect.", { GL: 6, EN: 6, MI: -6 }])),

  // ── Coalition seat-sharing math ─────────────────────────────────────────────
  ax("Coalition Manager", "fixer", ["seats", "allies", "arithmetic"],
    sx("A word, sir! Your smaller partner teams want to run in the election too. You can bully them into taking the worst spots, or be generous.",
      ["Bully them and keep the best spots for yourself.", "An alliance is a pyramid, not a partnership.", "Your candidates get the winnable seats and the partners get crumbs. You dominate the alliance and hollow it, leaving allies who campaign at half-effort.", { MI: 6, FA: 2, EN: -4, GL: -2 }],
      ["Be generous and share the good spots.", "A partner fed campaigns harder than one starved.", "You give the small parties real winnable seats. Your own count is slimmer, but the alliance pulls together and turns out as one.", { EN: 4, GL: 4, MI: -2, FA: -2 }])),

  // ── Youth-wing martyr funeral ───────────────────────────────────────────────
  ax("Student Wing President", "fixer", ["martyr", "funeral", "mobilisation"],
    sx("Sir, we have a problem. One of your young helpers died fighting the enemy. Your team wants to carry his body through the city to make everyone angry and start a huge fight.",
      ["Have the big, angry parade.", "A martyr's coffin is a recruiting drum.", "The procession swells into a riot and the rivals are branded murderers. The base burns hot, the city burns with it, and another coffin is already on its way.", { MI: 6, FA: 2, EN: -8, GL: -4 }],
      ["Have a quiet, respectful funeral.", "I will not turn a boy's grave into a battlefield.", "You give the cadre a dignified, guarded farewell. The president wanted a spectacle and a casus belli; you gave him neither, and the city stays calm.", { EN: 6, GL: 4, MI: -4 }])),

  // ── Election observer accreditation ─────────────────────────────────────────
  ax("Foreign Liaison Officer", "ambassador", ["observers", "election", "legitimacy"],
    sx("Sir! People from other countries want to watch your election to make sure it's fair. You can hide the cheating parts from them, or let them see everything.",
      ["Hide things and make it hard for them to watch.", "Witnesses are only invited to a clean house.", "The observers are penned far from the action and issue damning reports anyway. The restrictions themselves become the headline: a government afraid of being watched.", { MI: 4, GL: -8, EN: -4 }],
      ["Let them see everything and have a fair vote.", "A vote that can be watched is a vote that is believed.", "You let the monitors go where they please. It forces discipline on your machinery, and the clean bill of health they give is worth a hundred press releases.", { GL: 8, EN: 4, MI: -4 }])),

  // ── Anti-corruption commission as a weapon ──────────────────────────────────
  ax("Anti-Graft Commission Chair", "official", ["acc", "lawfare", "selective"],
    sx("Mr. Prime Minister, sir! The police who catch thieves work for you. You can tell them to only arrest your enemies, or tell them to arrest anyone who steals, even your friends.",
      ["Tell them to only arrest your enemies.", "An investigator off the leash bites the master.", "The watchdog hounds your enemies and ignores your friends. It is devastatingly useful and visibly partisan, and your own grafters learn they are untouchable.", { MI: 6, FA: 4, GL: -8, EN: -6 }],
      ["Tell them to arrest anyone who steals.", "A watchdog that only bites the neighbour guards nothing.", "You unleash it on all comers, your side included. A few ministers fall and the base panics, but the Commission gains teeth the public actually trusts.", { GL: 8, EN: 8, MI: -6, FA: -6 }])),

  // ── Removing the caretaker provision for good ───────────────────────────────
  ax("Constitutional Adviser", "official", ["caretaker", "constitution", "power"],
    sx("Your Excellency! You can make a rule that your team always stays in charge during elections, which makes it super easy to win every time.",
      ["Make the rule so you always stay in charge.", "Why concede each election what I can settle once?", "The amendment passes and the advantage is permanent. So is the opposition's casus belli; every future poll now inherits this original sin.", { MI: 8, GL: -8, EN: -6 }],
      ["Keep it fair and let a neutral team run elections.", "A rule that survives me protects me from my successors.", "You keep — or restore — a neutral poll-time authority. You surrender a structural edge, but you drain the poison from every election to come.", { GL: 8, EN: 6, MI: -6 }])),

  // ── The party's black-money campaign chest ──────────────────────────────────
  ax("Party Treasurer", "shadow", ["funding", "black-money", "audit"],
    sx("Prime Minister! You have a giant pile of secret cash for the election. You can lie about where you got it, or only use honest money and have less to spend.",
      ["Lie about the money and hide it.", "Money has no smell once it is washed.", "The cash is scrubbed and the audit finds nothing — for now. The shells are a time bomb, and the day one bursts it takes a cabinet with it.", { FI: 6, MI: 2, GL: -6, EN: -4 }],
      ["Only use honest money, even if it's less.", "A washed rupee still stains the hand that spent it.", "You run on declared money and fight the campaign lean. The shortfall hurts at every rally, but no laundering scandal waits in your second term.", { GL: 6, EN: 4, FI: -6 }])),

  // ── Reservation in nominations for the family circle ────────────────────────
  ax("Party Elders' Council", "official", ["dynasty", "nepotism", "nominations"],
    sx("Sir — Your whole family wants to be politicians now because you are the boss. People might think you are just giving jobs to your relatives.",
      ["Give your family the easy jobs.", "Blood holds when everything else bends.", "The relatives are slotted into winnable seats. The dynasty's grip tightens, and the photo of the new parliamentary party looks like a wedding album.", { FA: 8, MI: 2, EN: -6, GL: -4 }],
      ["Tell them no and pick the smartest people.", "A party of cousins has no roots.", "You cap the relatives and open seats to organisers. The family is wounded and loud, but the benches gain people the wards chose.", { EN: 6, GL: 4, FA: -8, MI: -2 }])),

  // ── Indigenous and hill-tracts vote ─────────────────────────────────────────
  ax("Hill Affairs Convenor", "official", ["cht", "indigenous", "accord"],
    sx("Honourable leader! People in the hills want you to keep an old promise to protect them. But the army and new settlers want to take their land.",
      ["Help the army and the new settlers.", "The plains vote outnumbers the hills.", "You shelve the accord again. The garrisons and settlers are pleased, and the hills add another broken promise to a decades-long ledger of them.", { MI: 4, FA: 2, EN: -8, GL: -4 }],
      ["Keep the promise and protect the hill people.", "A promise twenty years deferred is a wound.", "You move on land rights and a partial drawdown. The army and settlers resist hard, but the hills, for once, see the state keep its word.", { EN: 8, GL: 6, MI: -6, FA: -2 }])),

  // ── Result announcement timing ──────────────────────────────────────────────
  ax("Returning Officer Coordinator", "official", ["results", "count", "delay"],
    sx("Sir, urgent news. The votes are coming in. You can pause the TV news to secretly change some numbers so you win, or show the honest truth instantly.",
      ["Pause the news to secretly change numbers.", "A few hours buys a comfortable margin.", "The overnight delay yields a tidier result and an obvious one. The gap between the late seats and the rest tells its own story to anyone counting.", { MI: 6, GL: -6, EN: -4 }],
      ["Show the honest truth instantly.", "A count that needs the night to fix was never counted.", "You declare on schedule, narrow margins and all. Governing the thinner majority is harder, but the result lands before anyone can call it cooked.", { GL: 6, EN: 4, MI: -4 }])),

  // ── The aging leader's own succession ───────────────────────────────────────
  ax("Personal Physician", "doctor", ["succession", "health", "dynasty"],
    sx("Sir, forgive me — You are very sick but no one knows. You can pick the next leader now, but people might stop listening to you early.",
      ["Hide it and pretend you are perfectly fine.", "A wounded king shows no blood.", "You hide the decline and grip the wheel. The succession stays unsettled, and the day the truth breaks the party will tear itself apart over a vacuum.", { MI: 4, FA: 2, EN: -4, GL: -2 }],
      ["Pick the next leader now to be safe.", "A transition I design beats one fought over my bed.", "You begin the handover on your own terms. Your authority ebbs the moment you announce, but the dynasty gains a real chance of surviving you.", { FA: 6, GL: 4, EN: 4, MI: -6 }])),

  // ── Recount demand in a flagship seat ───────────────────────────────────────
  ax("Election Commission Liaison", "official", ["recount", "dispute", "credibility"],
    sx("A word, sir! The enemy wants to recount the votes because they think you cheated in one town. You can say no using a silly rule, or let them recount and risk losing.",
      ["Say no and keep the win.", "A win declared is a win kept.", "You deny the recount and the seat stands, disputed forever. The technicality fools no one, and the seat becomes a permanent symbol of the stolen vote.", { MI: 4, GL: -6, EN: -4 }],
      ["Let them recount the votes fairly.", "A seat that survives a recount is truly mine.", "You allow the recount under cameras. You may lose the seat, but the seats you keep are now unassailable, and the gesture buys rare goodwill.", { GL: 6, EN: 6, MI: -4 }])),

  // ── National-day narrative ──────────────────────────────────────────────────
  ax("Information Minister", "official", ["history", "national-day", "narrative"],
    sx("Sir, we have a problem. You can change the school books so they only talk about how amazing your family is and ignore all the other heroes.",
      ["Change the books to only praise your family.", "He who tells the founding owns the nation.", "The broadcasts crown your lineage as the sole begetter of the republic. Historians wince, rivals' heirs seethe, and the cult deepens by another generation.", { FA: 6, MI: 2, EN: -6, GL: -4 }],
      ["Tell the honest history about all the heroes.", "A nation with one father is an orphan of the rest.", "You share the credit across the founding generation. The family's mythmakers are disappointed, but the story gains the ring of truth and the nation's buy-in.", { GL: 6, EN: 6, FA: -6 }])),

  // ── Police recruitment by loyalty ───────────────────────────────────────────
  ax("Inspector-General of Police", "general", ["police", "recruitment", "loyalty"],
    sx("Sir! You are hiring new police. You can only hire people who promise to vote for you, or hire the strongest, smartest people.",
      ["Only hire people who promise to vote for you.", "A force that loves me will never aim at me.", "Loyalists fill the ranks and the force becomes a praetorian guard. It will protect you faithfully — until the day loyalty to a person costs it the public's last trust.", { MI: 8, EN: -6, GL: -4 }],
      ["Hire the strongest and smartest people.", "A police that serves the law outlasts the one that serves me.", "You insist on a professional intake. The new constables answer to the badge, not your name — less pliable, but a force the public might one day respect.", { EN: 6, GL: 4, MI: -4 }])),

  // ── Defection rumours in your own cabinet ───────────────────────────────────
  ax("Intelligence Chief", "shadow", ["cabinet", "plot", "loyalty"],
    sx("Mr. Prime Minister, sir! Two of your friends are secretly talking to the army about taking your job. You can spy on them secretly, or yell at them right now.",
      ["Spy on them secretly to stop them.", "A plot is best killed in the cradle.", "You wiretap, gather leverage, and break them with it. The plot dies, but so does trust in your cabinet, where every minister now assumes he too is bugged.", { MI: 6, FA: -2, EN: -4, GL: -4 }],
      ["Yell at them right now and demand they be loyal.", "Daylight scatters conspirators.", "You face them down in front of the cabinet. The gamble forces a public reaffirmation of loyalty, and the cabinet sees a leader who fights in the open, not the shadows.", { FA: 4, GL: 4, EN: 2, MI: -4 }])),

  // ── The graft scandal that touches the family ───────────────────────────────
  ax("General Secretary", "fixer", ["scandal", "family", "corruption"],
    sx("Your Excellency! Someone in your family got caught stealing. You can hide the secret, or let the police arrest them like anyone else.",
      ["Hide the secret to protect your family.", "Blood is not investigated.", "The file vanishes and the family is shielded. The cover-up leaks in pieces, and 'one law for them' becomes the opposition's favourite chant.", { FA: 6, MI: 2, GL: -8, EN: -8 }],
      ["Let the police arrest them.", "A dynasty above the law is a dynasty without one.", "You allow the investigation, family or not. The relative is furious and the household tense, but the public sees, astonished, that the rules might apply to everyone.", { GL: 8, EN: 8, FA: -8, MI: -2 }])),

  // ── Manifesto promises vs deliverable reality ───────────────────────────────
  ax("Manifesto Committee Chair", "official", ["manifesto", "promises", "credibility"],
    sx("Prime Minister! You are writing your promises for the election. You can promise crazy, impossible things to get votes, or be honest about what you can actually do.",
      ["Promise impossible things to win.", "A campaign is won on dreams, not spreadsheets.", "The crowds roar at free electricity and a job for every graduate. You win, then spend the term explaining why the moon is still in the sky.", { MI: 4, EN: -4, GL: -4, FI: -2 }],
      ["Be honest and only promise what you can do.", "A promise kept is worth ten promises made.", "You run on what you can actually do. The rallies are less electric, but every pledge you redeem next term compounds into trust.", { EN: 6, GL: 6, MI: -2 }])),

  // ── Crackdown on a student protest your wing provoked ───────────────────────
  ax("Student Wing President", "fixer", ["students", "protest", "blame"],
    sx("Sir — Your student helpers beat up peaceful kids on video. They want you to lie and say the peaceful kids started it.",
      ["Lie and protect your student helpers.", "I do not abandon my own to a mob's verdict.", "You defend the indefensible and the lie collapses on contact with the video. The campuses unite against you, and the wing learns it can attack with impunity.", { MI: 4, FA: 2, EN: -10, GL: -6 }],
      ["Punish your helpers and say sorry.", "A wing that beats students is a liability, not an asset.", "You suspend the cadres and apologise to the campus. The wing president seethes at the betrayal, but the wider student body, stunned, lowers its guard.", { EN: 8, GL: 4, MI: -4, FA: -2 }])),

  // ── The opposition's olive branch ───────────────────────────────────────────
  ax("Elder Statesman", "official", ["dialogue", "opposition", "reconciliation"],
    sx("Honourable leader! Your enemies offer to stop fighting if you let their friends out of jail and make fairer rules.",
      ["Say no and keep fighting them.", "I do not negotiate with those I have already beaten.", "You spurn the overture and rule unchallenged on paper. The crisis hardens underground, and the legitimacy gap you could have closed widens instead.", { MI: 6, GL: -8, EN: -6 }],
      ["Make a deal and trade rules for peace.", "A rival at the table is not a rival in the street.", "You negotiate, free some activists, and concede real reforms. The hardliners howl betrayal, but the country exhales, and your rule gains a legitimacy force never bought it.", { GL: 8, EN: 8, MI: -8 }])),

  // ── Party congress power-grab ───────────────────────────────────────────────
  ax("General Secretary", "fixer", ["congress", "rules", "control"],
    sx("Sir, urgent news. You can change your team's rules so you never have to vote for a leader again, meaning you are the boss forever.",
      ["Change the rules to be boss forever.", "A party that votes on its head invites a coup.", "The top posts become appointments and dissent within the party dies. You command total control of a machine that no longer argues — or thinks.", { MI: 6, FA: 2, EN: -6, GL: -4 }],
      ["Keep the voting rules to be fair.", "A party that cannot choose its own leaders cannot lead a country.", "You preserve the internal vote. It means occasional surprises and rivals you did not pick, but the party stays a living thing with roots that hold.", { EN: 6, GL: 4, MI: -4 }]),
    sx("Sir, forgive me — A very popular guy on your team might win a vote against your favorite friend. You can kick him out for a fake reason so your friend wins.",
      ["Kick him out for a fake reason.", "A challenge unanswered is a challenge avoided.", "He is ruled ineligible and the slate passes unopposed. The delegates who backed him go home bitter, and the province cools toward you for a generation.", { MI: 4, FA: 2, EN: -6, GL: -2 }],
      ["Let everyone vote fairly.", "A leader the delegates chose serves stronger than one I imposed.", "You let the contest run. He may win a post you did not plan to give, but the congress crackles with real life and the province feels seen.", { EN: 6, GL: 4, FA: -2, MI: -4 }])),

  // ── Defamation suits as a strategy ──────────────────────────────────────────
  ax("Legal Affairs Secretary", "official", ["defamation", "press", "intimidation"],
    sx("A word, sir! You can file hundreds of fake lawsuits against reporters and enemies to keep them busy and scared in court forever.",
      ["File the fake lawsuits to scare them.", "A man in court has no time to campaign.", "The critics drown in hearings across the country, exhausted and broke. The tactic is transparent, and 'judicial harassment' becomes the verdict on your rule abroad.", { MI: 4, GL: -8, EN: -6 }],
      ["Stop the fake lawsuits.", "A law used as a club is no longer a law.", "You order the suits dropped. Your critics keep their freedom and their venom, but you are spared a reputation as a man who litigates dissent into silence.", { GL: 6, EN: 6, MI: -4 }]),
    sx("Sir, we have a problem. One of those fake lawsuits got a young reporter thrown in jail for a long time.",
      ["Leave her in jail.", "To intervene is to admit the suit was mine.", "You stay out and she stays in. Her detention becomes a cause célèbre, every passing week a fresh indictment of your tolerance for it.", { MI: 2, GL: -6, EN: -6 }],
      ["Step in and let her go free.", "A jailed reporter is a wound I can still close.", "You quietly secure her release and rein in the local leader. The base mutters about weakness, but the embarrassment ends and a small debt of goodwill is repaid.", { GL: 6, EN: 6, MI: -2 }])),

  // ── Constituency gerrymander ────────────────────────────────────────────────
  ax("Delimitation Commissioner", "official", ["gerrymander", "constituencies", "advantage"],
    sx("Sir! You can redraw the map for the election to trap all your enemies in one area, making it super easy for you to win the rest.",
      ["Redraw the map to cheat and win.", "A map drawn well wins seats before a vote is cast.", "The new map quietly tilts a dozen seats your way for a generation. The psephologists notice and cry foul, but the lines are set and the advantage banked.", { MI: 6, GL: -6, EN: -4 }],
      ["Draw the map fairly for everyone.", "A rigged map is a confession printed in ink.", "You insist on a neutral, population-based redraw. You forgo a structural edge, but the electoral map stops being one more piece of evidence against you.", { GL: 6, EN: 4, MI: -4 }])),

  // ── New districts for patronage ─────────────────────────────────────────────
  ax("Administrative Reforms Secretary", "fixer", ["districts", "patronage", "spending"],
    sx("Mr. Prime Minister, sir! Local leaders want you to create brand new towns on the map just so they can get new jobs and money.",
      ["Create the new towns to give them jobs.", "A new district is a thousand new favours to grant.", "You carve out the new districts and the patronage flows. Local bosses are delighted, and the bloated administration becomes one more permanent cost the budget never planned for.", { FA: 6, MI: 2, FI: -6, EN: -4 }],
      ["Say no to wasting money on fake towns.", "I will not buy loyalty by the district.", "You decline the upgrades. The disappointed local leaders sulk and some turn cold, but the state is spared a fresh layer of offices built purely to be staffed with friends.", { FI: 6, GL: 2, FA: -6 }])),

  // ── Patronage relief cards ──────────────────────────────────────────────────
  ax("Relief Distribution Coordinator", "fixer", ["patronage", "relief-cards", "votes"],
    sx("Your Excellency! Politicians are only giving free food to people who vote for them, and letting the others starve.",
      ["Let them keep using food to buy votes.", "A card given is a vote owed.", "The cards stay a tool of loyalty, rewarding your wards and starving the rest. The machine hums, and the genuinely hungry in the wrong wards learn that relief here wears a party colour.", { FA: 6, MI: 2, EN: -8, GL: -4 }],
      ["Force them to give food fairly to everyone who is hungry.", "Hunger does not check a voter card.", "You strip the cards from the MPs and route them by need. Your local leaders lose a lever and rage, but the relief reaches the poorest regardless of how they vote.", { EN: 8, GL: 4, FA: -6 }])),

  // ── City Corporation election ───────────────────────────────────────────────
  ax("City Campaign Manager", "fixer", ["city", "election", "local"],
    sx("Prime Minister! Small city elections are happening. You can rig them quietly to make sure you win, or let people vote freely as a test.",
      ["Rig the elections quietly.", "No verdict against me, however small, can stand.", "You secure the cities the old way. The wins are hollow and the pattern noted, and you blind yourself to how the towns truly feel about you.", { MI: 4, GL: -6, EN: -4 }],
      ["Let people vote freely.", "A town honestly won tells me where I stand.", "You let the corporations vote freely. You lose a few mayoralties, but the honest results give you a true map of your support and a credibility the rigged wins never had.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Census and delimitation freeze ──────────────────────────────────────────
  ax("Statistics Bureau Director", "official", ["census", "data", "manipulation"],
    sx("Sir — You are counting all the people in the country. A helper says you can change the math to favor your towns for more money.",
      ["Change the math to get more money for your towns.", "Numbers serve the state, and I am the state.", "You tilt the headcounts toward your strongholds. The seats and funds flow your way, and every policy built on the false figures — schools, clinics, rations — is quietly misallocated for a decade.", { MI: 6, FI: 2, EN: -8, GL: -4 }],
      ["Count the people honestly.", "A nation that lies to itself in numbers cannot plan.", "You demand accurate counts whatever they cost you. Some strongholds shrink on paper and lose seats, but the data the whole state relies on is finally trustworthy.", { GL: 6, EN: 6, MI: -4 }])),

  // ── Freedom-fighter quota ───────────────────────────────────────────────────
  ax("Liberation Affairs Secretary", "official", ["quota", "freedom-fighters", "merit"],
    sx("Honourable leader! A rule gives the best jobs to kids of old war heroes, making normal young people furious. You can keep the rule or change it to be fair.",
      ["Keep giving the best jobs to the heroes' kids.", "The children of those who bled deserve the state they built.", "You keep the quota intact and honour the founding generation. Your base of veterans' families is loyal, but the merit-starved youth seethe, and the next spark may be larger.", { FA: 4, MI: 2, EN: -8, GL: -4 }],
      ["Change the rule to be fair to everyone.", "A republic staffed by birthright is no republic.", "You slash the hereditary quota and open posts to merit. The veterans' lobby feels betrayed, but a generation of frustrated youth sees, astonished, that the state heard them.", { EN: 8, GL: 6, FA: -6, MI: -2 }])),

  // ── Student union elections ─────────────────────────────────────────────────
  ax("Education Affairs Secretary", "fixer", ["students", "union", "democracy"],
    sx("Sir, urgent news. School groups haven't voted for their leaders in years, so your bullies run everything. You can let them vote, but your bullies might lose.",
      ["Keep the voting stopped so your bullies stay in charge.", "An unelected wing is a controlled wing.", "You leave the campuses to your appointed enforcers. The grip holds, but a generation graduates having never voted, learning democracy as something that happens to other people.", { MI: 6, EN: -6, GL: -4 }],
      ["Let the schools vote fairly.", "Democracy unlearned on campus is unlearned for life.", "You bring back the campus vote. Your wing may lose its monopoly to independents and rivals, but the campuses come alive and a generation practises the franchise.", { EN: 8, GL: 6, MI: -6 }])),

  // ── Pir / spiritual endorsement ─────────────────────────────────────────────
  ax("Religious Outreach Coordinator", "cleric", ["pir", "endorsement", "rural"],
    sx("Sir, forgive me — A famous religious leader will tell millions of people to vote for you, but only if you give his group a lot of money and ignore their secrets.",
      ["Give him the money to get the votes.", "His word turns out the countryside.", "You strike the bargain and his followers swing your way. The shrine network fattens on state favour beyond any audit, and you have rented a bloc you do not control.", { MI: 6, FA: 2, FI: -2, EN: -4 }],
      ["Say no to the secret deal.", "A vote bought through a pir is a vote I never truly hold.", "You pass on the deal. The rural bloc stays unmobilised for you and the pir cools, but you owe no shadowy shrine-empire a debt it will one day call in.", { GL: 4, EN: 2, MI: -4 }])),

  // ── Tea-garden labour vote ──────────────────────────────────────────────────
  ax("Labour Wing Organiser", "people", ["tea-garden", "labour", "wages"],
    sx("A word, sir! The poor people picking tea want better pay. If you help them, the rich tea farm owners who usually help you will be mad.",
      ["Side with the rich tea farm owners.", "The gardens vote as the owners say.", "You leave the bonded wage untouched to keep the owners happy. The estates deliver their votes as instructed, and a quarter-million workers stay trapped at a wage from another century.", { FI: 2, FA: 4, EN: -8 }],
      ["Help the poor tea pickers get better pay.", "A bonded vote is no foundation; a freed one is.", "You back a real wage rise for the garden workers. The owner-donors retaliate with shut wallets, but the workers, stunned to be seen, become a bloc loyal to you and not the estate.", { EN: 8, FA: -4, FI: -4 }])),

  // ── Proportional representation debate ──────────────────────────────────────
  ax("Electoral Reform Adviser", "official", ["pr", "system", "reform"],
    sx("Sir, we have a problem. People want a new voting system that is completely fair. But if it is completely fair, you won't win as easily anymore.",
      ["Keep the old rules so you keep winning easily.", "Why trade a landslide for a coalition?", "You preserve the system that magnifies your seats. The majorities stay commanding and the small parties shut out, and the gap between your seat count and your vote share stays a standing grievance.", { MI: 4, GL: -4, EN: -2 }],
      ["Change to the fair rules.", "A parliament that mirrors the vote is the only honest one.", "You back a shift toward PR. Your dominance shrinks to its real proportion and coalition-building becomes the norm, but parliament finally reflects how the country actually voted.", { GL: 6, EN: 6, MI: -6 }])),

  // ── Breakaway faction ───────────────────────────────────────────────────────
  ax("General Secretary", "fixer", ["split", "faction", "discipline"],
    sx("Sir! A big leader on your team is mad and wants to start his own team. You can arrest him to stop him, or give him what he wants so he stays.",
      ["Arrest him before he leaves.", "A breakaway strangled in the cradle never breathes.", "You expel him and bury him in cases before he can organise. The split is averted by force, and every ambitious leader learns the cost of independent thought.", { MI: 6, FA: 2, EN: -6, GL: -4 }],
      ["Give him what he wants so he stays.", "A tent that loses a pole sags everywhere.", "You meet his demands and keep him inside. Unity holds, but you have shown that a credible threat to leave is the surest way to win concessions from you.", { FA: 4, MI: -2, EN: 2 }])),

  // ── Alliance with a leftist party ───────────────────────────────────────────
  ax("Coalition Manager", "official", ["alliance", "left", "ideology"],
    sx("Mr. Prime Minister, sir! A small, smart group wants to join you. They will help you look good, but they want you to be nicer to workers, which will anger your rich friends.",
      ["Join with them and help the workers.", "Their cadres and credibility are worth a tilt.", "You bring the left in and shift your platform toward labour and land. The donors grumble and some drift, but you gain disciplined organisers and a sheen of conviction.", { EN: 6, MI: 2, FI: -4, FA: -2 }],
      ["Say no and keep your rich friends happy.", "Ideas do not fund campaigns; businessmen do.", "You pass on the alliance to keep your business backers content. The money stays, but you forgo the street muscle and the credibility, and the left turns its energy against you.", { FI: 6, FA: 2, EN: -4 }])),

  // ── War-criminal party ban ──────────────────────────────────────────────────
  ax("Tribunal Prosecutor", "official", ["banning", "collaborators", "1971"],
    sx("Your Excellency! You can ban an old religious team for bad things they did in a war long ago. It is fair, but it also magically gets rid of your enemies today.",
      ["Ban the old team forever.", "A party born of atrocity forfeits its place.", "You dissolve the party and its symbol. The base roars at the reckoning, and the opposition loses an ally — but critics note how neatly justice served your politics, and the banned go underground.", { MI: 6, FA: 2, EN: 2, GL: -4 }],
      ["Let them stay and try to beat them by voting.", "A martyr-party banned outlives a beaten one.", "You leave the party legal and fight it at the ballot. It survives to needle you, but you deny it the banner of victimhood and keep the moral high ground over a real reckoning.", { GL: 6, EN: 2, MI: -4 }])),

  // ── TR/KABIKHA rural works ──────────────────────────────────────────────────
  ax("Rural Development Coordinator", "fixer", ["rural-works", "patronage", "graft"],
    sx("Prime Minister! Politicians are stealing the money meant for building village roads. You can take the money away and give it to honest local councils instead.",
      ["Let the politicians keep handling the money.", "An MP without projects to give is an MP without friends.", "You leave the rural funds with your MPs. They build where it buys loyalty and skim the rest, and the genuinely needy villages with the wrong MP go without.", { FA: 6, MI: 2, EN: -6, FI: -2 }],
      ["Give the money to honest local councils.", "Roads should follow need, not the member's whim.", "You hand the funds to elected local bodies with audits. The MPs lose a prized lever and resent it, but the works spread by need and the skim shrinks.", { EN: 8, GL: 4, FA: -6 }])),

  // ── Imam and mosque-committee patronage ─────────────────────────────────────
  ax("Religious Affairs Secretary", "cleric", ["mosques", "imams", "influence"],
    sx("Sir — You can pay religious leaders to say nice things about you during their prayers. This tricks people into voting for you.",
      ["Pay the religious leaders to say nice things.", "He who befriends the pulpit befriends the faithful.", "You fund the imams and stack the committees with loyalists. The Friday sermons soften toward you, and the mosques become one more institution bent to the party's will.", { MI: 6, FA: 2, EN: -4, GL: -4 }],
      ["Keep religion and politics separate.", "A pulpit I own is a pulpit no one believes.", "You leave the mosque committees free. You forgo the pulpit's quiet endorsement, but the faith keeps a distance from the party that lends its eventual support real weight.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Sedition over a slogan ──────────────────────────────────────────────────
  ax("Law Minister", "official", ["sedition", "speech", "opposition"],
    sx("Honourable leader! Protesters made up a funny song making fun of you. You can arrest them and put them in jail for it.",
      ["Arrest them for making fun of you.", "Mockery, unanswered, becomes contempt.", "You jail the sloganeers and the chant becomes infamous, sung at every rally now in defiance. The heavy hand turns a jingle into a movement and you into its punchline.", { MI: 4, FA: 2, EN: -8, GL: -6 }],
      ["Laugh at the song and do nothing.", "A leader who jails a chant has already lost to it.", "You wave the mockery away with a joke of your own. The chant loses its charge for want of a martyr, and you look, for once, bigger than your critics.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Truth commission on the past regime ─────────────────────────────────────
  ax("Justice Reform Adviser", "official", ["truth-commission", "reckoning", "past"],
    sx("Sir, urgent news. People want to investigate the old bosses for stealing. If you do, people might want to investigate you someday too.",
      ["Investigate everything deeply.", "A nation that cannot face its past repeats it.", "You establish a real commission with teeth. The past regime's crimes are aired and victims heard, and you accept that the same mirror may one day be turned on you.", { GL: 8, EN: 6, MI: -4 }],
      ["Only do a small, safe investigation.", "A precedent for digging up the dead is a shovel for my own grave.", "You permit only a toothless, bounded review. The reckoning is stage-managed, the precedent contained, and the victims learn the truth was never really on offer.", { MI: 4, FA: 2, EN: -4, GL: -4 }])),

  // ── Campaign finance disclosure ─────────────────────────────────────────────
  ax("Election Commission Liaison", "official", ["finance", "disclosure", "transparency"],
    sx("Sir, forgive me — A new rule would force you to tell everyone exactly where you get your campaign money. It ruins your secret cash.",
      ["Stop the rule and keep your money secret.", "A war chest examined is a war chest disarmed.", "You quietly kill the bill. Your funding stays in the dark, and so does everyone's, and the suspicion that elections here are simply bought hardens into common knowledge.", { FI: 2, FA: 2, EN: -6, GL: -4 }],
      ["Agree to the rule and be honest.", "Money in daylight buys less than money in shadow.", "You support the sunlight law. Your own opaque chest faces scrutiny, but the system gains a check it never had, and you can claim a reform your rivals resisted.", { GL: 6, EN: 6, FI: -4 }])),

  // ── Lowering the voting age ──────────────────────────────────────────────────
  ax("Strategy Director", "official", ["youth", "voting-age", "franchise"],
    sx("A word, sir! You can let young kids vote. But right now, young kids are angry at you and will probably vote for the other team.",
      ["Let the young kids vote.", "A franchise widened is a democracy deepened.", "You enfranchise the youth despite their coolness toward you. It wins democratic credit at home and abroad, and you have handed the vote to a generation that may use it against you.", { GL: 6, EN: 6, MI: -4 }],
      ["Do not lower the voting age.", "I will not arm a cohort that means to vote me out.", "You decline the reform. The status quo protects you from a hostile bloc, and the young add 'denied the vote' to a lengthening list of grievances against you.", { MI: 2, FI: 2, GL: -4, EN: -2 }])),

  // ── Opposition leader's official status ─────────────────────────────────────
  ax("Parliamentary Affairs Minister", "official", ["opposition", "status", "norms"],
    sx("Sir, we have a problem. You can give the leader of the enemy team a nice office and treat them with respect, or take everything away to make them look weak.",
      ["Take everything away to make them look weak.", "A rival with a chair is a rival with a stage.", "You hollow out the opposition leadership's perks and powers. Your rival is diminished, and parliament drifts further from the adversarial democracy it pretends to be.", { MI: 4, GL: -4, EN: -4 }],
      ["Treat them with respect.", "A loyal opposition is the proof a democracy works.", "You afford your rival the traditional standing and consultation. It legitimises an adversary, but it also legitimises the whole house, and the maturity is noticed abroad.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Anniversary of a massacre ───────────────────────────────────────────────
  ax("Reconciliation Adviser", "official", ["reconciliation", "history", "wounds"],
    sx("Sir! A long time ago, your team did a very bad thing. You can say sorry and heal people's feelings, or stay quiet like always.",
      ["Say sorry for the bad thing.", "A wound named can finally close.", "You offer a genuine acknowledgment of the old wrong. The base is uneasy and hardliners furious, but victims long ignored feel seen, and a festering grievance begins, at last, to heal.", { GL: 6, EN: 6, FA: -4 }],
      ["Stay quiet and ignore it.", "An apology is an admission, and admissions are weapons.", "You let the anniversary pass unmarked. The party is spared an admission, and the unhealed wound goes on poisoning the well between you and those who remember.", { FA: 4, MI: 2, EN: -6, GL: -4 }])),

  // ── Remote-area polling logistics ───────────────────────────────────────────
  ax("Election Logistics Officer", "official", ["remote", "polling", "access"],
    sx("Mr. Prime Minister, sir! People living far out in the hills mostly vote for your enemies. You can conveniently \"forget\" to put voting booths near them so they can't vote.",
      ["Forget to put voting booths near them.", "Why spend a fortune to be voted against?", "You quietly thin the polling stations in the remote, unfriendly areas. Turnout there collapses for want of access, and the disenfranchisement, once noticed, becomes a quiet scandal.", { MI: 2, GL: -4, EN: -6 }],
      ["Spend money to make sure everyone can vote fairly.", "A citizen unreachable by the ballot is a citizen abandoned.", "You pay to reach every char and hill with a polling station. It costs dearly and may not help your numbers, but no Bangladeshi is denied the vote by geography on your watch.", { EN: 8, GL: 6, FI: -4 }])),

  // ── Bicameral upper house ───────────────────────────────────────────────────
  ax("Constitutional Adviser", "official", ["bicameral", "senate", "structure"],
    sx("Your Excellency! You can create a special new group of leaders and fill it with your friends. They will make sure no one can ever change your rules.",
      ["Create the new group and fill it with friends.", "A second chamber of friends is a second line of defence.", "You establish the upper house and pack it with loyalists. It rewards the faithful and checks any unruly future majority, and critics rightly call it a parking lot for cronies.", { FA: 6, MI: 4, EN: -4, GL: -4 }],
      ["Say no to creating the new group.", "A house of cronies is not a check; it is a couch.", "You decline to build a chamber of appointees. You forgo a tool of patronage and control, but you avoid bolting a permanent crony-park onto the constitution.", { GL: 4, EN: 4, FA: -6 }])),

  // ── Election-day violence compensation ──────────────────────────────────────
  ax("Home Affairs Coordinator", "people", ["violence", "compensation", "victims"],
    sx("Prime Minister! Your fans started a fight on voting day and people died. You can investigate honestly and pay the families, or secretly pay a little to hide it.",
      ["Investigate honestly and pay the families fairly.", "Blood spilled at the ballot is the state's debt.", "You compensate the victims openly and order real investigations, your own cadres included. The party is uneasy at the scrutiny, but the dead are honoured and the violence's authors face daylight.", { EN: 8, GL: 6, FA: -4 }],
      ["Secretly pay a little to hide it.", "A long inquiry only keeps the bodies in the news.", "You settle a handful of cases discreetly and let the rest fade. The headlines pass, the cadres learn there is no reckoning, and the families of the unacknowledged dead nurse a lasting grievance.", { FA: 4, MI: 2, EN: -6, GL: -4 }])),

  // ── Foreign campaign consultants ────────────────────────────────────────────
  ax("Campaign Data Director", "shadow", ["data", "micro-targeting", "consultants"],
    sx("Sir — A tricky company wants to spy on everyone's phones to figure out how to brainwash them into voting for you.",
      ["Hire the tricky company to brainwash people.", "The other side will, if I do not.", "You bring in the dark-arts firm and the targeting sharpens uncannily. It works — until the harvesting leaks, and your campaign becomes the local chapter of a global data-abuse scandal.", { MI: 6, FI: -2, GL: -6, EN: -4 }],
      ["Run a normal, honest campaign.", "An election won by manipulation is a mandate built on sand.", "You decline the manipulation machine and campaign on message and organisation. It is harder and slower, but no harvesting time-bomb sits ticking under your win.", { GL: 4, EN: 4, MI: -2 }])),

  // ── Nomination-paper scrutiny ───────────────────────────────────────────────
  ax("Returning Officer Coordinator", "fixer", ["nominations", "scrutiny", "disqualification"],
    sx("Honourable leader! You can throw away the voting papers for the enemy team just because they missed a comma or spelled a word wrong.",
      ["Throw away their papers for tiny mistakes.", "A candidate disqualified is a contest avoided.", "Dozens of opposition hopefuls are struck off on trivia. Your candidates walk into emptier races, and the courts and observers log another way the contest was hollowed before polling.", { MI: 6, GL: -8, EN: -6 }],
      ["Let them fix the mistakes and play fair.", "A ballot thinned by clerks is a ballot no one trusts.", "You order the officers to accept all proper nominations. The races are fuller and harder, but the contest cannot be dismissed as rigged at the starting line.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Snap election timing ────────────────────────────────────────────────────
  ax("Strategy Director", "official", ["snap-election", "timing", "advantage"],
    sx("Sir, urgent news. You just did something popular. You can call a surprise election right now to win before people realize the country is running out of money.",
      ["Call the surprise election right now.", "Strike while the numbers smile.", "You go to the polls on the sugar high and win comfortably. The fresh term is banked, and the soured economy and unpaid giveaway bill land squarely in your own new lap.", { MI: 6, FI: -4, EN: -2 }],
      ["Wait until the normal time and face the problems.", "A leader who runs from the bill admits he padded it.", "You hold the scheduled date and govern through the hard patch. You forgo the easy win, but you cannot be accused of cynically timing the vote to dodge the consequences.", { GL: 4, EN: 2, MI: -4 }])),

  // ── Article 70 expulsion ────────────────────────────────────────────────────
  ax("Chief Whip", "fixer", ["article-70", "dissent", "expulsion"],
    sx("Sir, forgive me — One of your teammates voted against a bad rule you made. You can kick him out completely to scare everyone else into obeying.",
      ["Kick him out completely.", "One conscience indulged becomes a chorus.", "You strip him of his seat for a single honest vote. The benches fall silent and obedient, and the spectacle of a man expelled for conscience stains the parliament's name.", { MI: 6, FA: 2, EN: -6, GL: -6 }],
      ["Let him disagree this one time.", "A parliament of automatons warns me of nothing.", "You let the conscience vote stand without punishment. The hardliners fret about the precedent, but the benches keep a flicker of humanity and the house a shred of dignity.", { GL: 6, EN: 4, MI: -4 }])),

  // ── President selection ─────────────────────────────────────────────────────
  ax("Party Elders' Council", "official", ["president", "ceremonial", "loyalty"],
    sx("A word, sir! You get to pick the President. You can pick a yes-man who does whatever you say, or a smart, fair person who might argue with you.",
      ["Pick the yes-man.", "A rubber stamp does not develop a spine at midnight.", "You elevate a reliable nonentity to the presidency. Every decree is signed on cue, and the one office that might restrain you in a crisis is neutered in advance.", { MI: 4, FA: 2, GL: -4, EN: -2 }],
      ["Pick the smart, fair person.", "A dignified head of state reflects on the whole house.", "You choose a credible figure for the presidency. He lends the state gravity, and you accept that in a true crisis he might use the office's powers as his own conscience, not yours, dictates.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Merger with a smaller party ─────────────────────────────────────────────
  ax("General Secretary", "fixer", ["merger", "absorption", "growth"],
    sx("Sir, we have a problem. A small team wants to join yours. They have lots of voters, but they will demand big jobs and cause drama.",
      ["Let them join your team.", "Their region becomes mine overnight.", "You merge them in and your map fills out in the weak region. Their leaders crowd your benches with new demands and old baggage, and your once-tight organisation grows lumpier.", { MI: 6, FA: -2, EN: 2 }],
      ["Say no and work hard to get votes yourself.", "A merger buys a region and inherits its quarrels.", "You decline the merger and invest in building your own base there. It is slower and the region stays thin for you, but your party keeps its coherence and owes no newcomers.", { FA: 2, MI: -4, FI: -2 }])),

  // ── Manifesto leak ──────────────────────────────────────────────────────────
  ax("Manifesto Committee Chair", "official", ["manifesto", "leak", "damage"],
    sx("Sir! A secret plan to cut people's favorite free things leaked online. You can admit it's true, or lie and say the paper is fake and you changed your mind.",
      ["Admit it is true.", "A policy abandoned at the first leak was never a policy.", "You defend the subsidy cut openly. The honesty earns grudging respect in some quarters, but the beloved subsidy's defenders mobilise and the issue dogs the whole campaign.", { GL: 2, FI: 4, EN: -8 }],
      ["Lie and say it was fake.", "A leak is a chance to hear the room.", "You bin the unpopular plan and recast the draft. The flip-flop draws mockery, but the beloved subsidy survives and the campaign's biggest landmine is defused.", { EN: 6, GL: -2, FI: -4 }])),

  // ── Voter transport on poll day ─────────────────────────────────────────────
  ax("Field Mobilisation Officer", "fixer", ["turnout", "transport", "poll-day"],
    sx("Mr. Prime Minister, sir! On voting day, you can send free buses only for the people voting for you, and leave the enemy voters stranded.",
      ["Send free buses only for your voters.", "I move my voters; theirs can walk.", "Your strongholds turn out in force on free buses while the opposition's wards wait for transport that never comes. The lopsided turnout flatters your win and fools no observer.", { MI: 6, GL: -4, EN: -4 }],
      ["Don't send buses, let everyone get there fairly.", "A bus that only carries my voters is a thumb on the scale.", "You either drop the scheme or run it for all. Your raw turnout edge shrinks, but the poll-day logistics give your enemies nothing to point at.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Confidence vote, new term ───────────────────────────────────────────────
  ax("Chief Whip", "official", ["confidence", "majority", "coalition"],
    sx("Your Excellency! You are almost losing. You can secretly bribe a few independent politicians to win, or play fair and risk losing your power.",
      ["Bribe them to win safely.", "A government that wins its first vote narrowly never recovers.", "You purchase the cushion and win comfortably. The bought independents will be back for more all term, and your government is mortgaged to them from its first day.", { MI: 6, FA: 2, FI: -2, EN: -4 }],
      ["Play fair and risk losing.", "A majority I had to buy is a majority I do not have.", "You take the confidence vote on your honest count and scrape through. Governing the knife-edge is exhausting, but you owe no shadowy independents and the mandate is real.", { GL: 4, EN: 4, MI: -2 }])),

  // ── Emergency powers ────────────────────────────────────────────────────────
  ax("Cabinet Secretary", "general", ["emergency", "powers", "rule"],
    sx("Prime Minister! You can declare a \"State of Emergency.\" This pauses all rules and lets you do whatever you want forever, but everyone will know you are a dictator.",
      ["Declare a State of Emergency.", "Order first; legitimacy can be rebuilt.", "You suspend rights and rule by decree. The streets fall silent under the clampdown, and the word 'dictator' attaches itself to you in every capital and every history book.", { MI: 8, GL: -10, EN: -8 }],
      ["Play by the normal rules, even if it's hard.", "A leader who suspends the constitution has already abdicated.", "You refuse the emergency and ride out the unrest within constitutional bounds. It is harder and more dangerous, but you remain a head of government, not a usurper.", { GL: 6, EN: 4, MI: -6 }])),

  // ── Professional-body capture ───────────────────────────────────────────────
  ax("Professional Wing Coordinator", "fixer", ["bar-association", "professionals", "capture"],
    sx("Sir — Doctors and lawyers have their own groups. You can rig their votes so your friends are in charge of them too.",
      ["Rig their votes so your friends are in charge.", "The professions sway the educated; capture them.", "Your panels sweep the professional bodies on patronage and pressure. The lawyers, doctors, and engineers' associations become party annexes, and their independent voice — and credibility — dies.", { MI: 4, FA: 2, EN: -4, GL: -4 }],
      ["Let the doctors and lawyers pick their own leaders.", "A captured bar defends no one, least of all me.", "You let the professional bodies run free. They will sometimes pass resolutions against you, but their independence keeps them respected, and a free bar is a check worth having.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Caretaker chief justice ─────────────────────────────────────────────────
  ax("Constitutional Adviser", "official", ["caretaker", "judiciary", "poll"],
    sx("Honourable leader! You can make sure a friendly judge is the one watching the election so you can't lose.",
      ["Make sure your friendly judge is watching.", "Even a neutral office should hold a friendly face.", "You quietly time the judicial retirements so your man heads the poll-time authority. The 'neutral' oversight is neutral in name only, and the opposition smells it instantly.", { MI: 6, GL: -6, EN: -4 }],
      ["Let the normal, fair judge watch.", "A poll umpire I picked is no umpire at all.", "You leave the succession to run its natural course, friendly or not. You surrender a hidden lever, but the poll-time authority is genuinely impartial and its verdict will be believed.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Celebrity endorsement ───────────────────────────────────────────────────
  ax("Media Adviser", "fixer", ["celebrity", "endorsement", "image"],
    sx("Sir, urgent news. A super famous movie star wants to run on your team. He is clueless about laws, but everyone will vote for him because he's famous.",
      ["Let the clueless movie star run for your team.", "Stardust wins seats that policy cannot.", "The star joins to adoring crowds and wins his seat on charisma. He is a magnet for the young and a liability in the chamber, every gaffe a headline, every absence noted.", { MI: 4, EN: 2, GL: -2 }],
      ["Let him just cheer for you, but pick someone smart to run.", "A famous face is an asset; a famous fool is a cost.", "You take the star's public backing but steer him away from a seat. You bank the glamour without saddling the benches with a celebrity who cannot legislate.", { GL: 2, MI: 2, FA: -2 }])),

  // ── Coalition common programme ──────────────────────────────────────────────
  ax("Coalition Manager", "official", ["coalition", "programme", "compromise"],
    sx("Sir, forgive me — Your partner teams want opposite things. You can lie to both of them to keep them happy, or pick a side and make one team very angry.",
      ["Lie to both to keep them happy.", "A vague platform offends no partner.", "You fudge the programme into mush that everyone can sign. The alliance holds for the campaign, then tears itself apart in government over the contradictions you never resolved.", { MI: 2, FA: 2, EN: -4, GL: -2 }],
      ["Pick a side and make clear rules.", "A coalition that cannot agree a page cannot govern a country.", "You hammer out a real, consistent platform, losing a partner or two who cannot accept it. The alliance is smaller but governable, and voters know what it actually stands for.", { GL: 4, EN: 4, FA: -4, MI: -2 }])),

  // ── Restoring a banned party ────────────────────────────────────────────────
  ax("Reconciliation Adviser", "official", ["banning", "restoration", "inclusion"],
    sx("A word, sir! A group that was banned a long time ago wants to come back and promises to be good.",
      ["Keep them banned forever.", "A banned enemy is a contained enemy.", "You refuse restoration. The party stays underground, its exclusion a permanent grievance and recruiting tool, and the politics of the banned festers beyond the ballot's reach.", { MI: 4, FA: 2, EN: -4, GL: -4 }],
      ["Let them come back safely.", "A grievance let into the chamber is a grievance out of the streets.", "You readmit the party on conditions. The hardliners howl about legitimising enemies, but an underground grievance becomes a contestable political force, answerable to voters.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Get-out-the-vote drive ──────────────────────────────────────────────────
  ax("Field Mobilisation Officer", "people", ["turnout", "gotv", "organisation"],
    sx("Sir, we have a problem. You can try to get everyone in the country to vote, or only wake up the people who like you and let the others sleep.",
      ["Only wake up your friends to vote.", "I wake my voters and let theirs dream.", "Your wards turn out heavily while the opposition's stay home, unprodded. The lopsided turnout pads your margins, and the selective mobilisation is one more managed feature of the result.", { MI: 6, EN: -2, GL: -2 }],
      ["Try to get everyone in the country to vote.", "A high honest turnout is a mandate money cannot buy.", "You lift turnout everywhere, friend and foe alike. You forgo a turnout edge, but a high, genuine participation gives whatever result emerges a legitimacy nothing else can.", { GL: 6, EN: 6, MI: -4 }])),

  // ── Local government devolution ─────────────────────────────────────────────
  ax("Local Government Secretary", "official", ["devolution", "decentralisation", "power"],
    sx("Sir! You can give small towns the money and power to fix their own problems. It helps them, but makes you less powerful.",
      ["Keep all the power for yourself.", "A capital that lets go of the purse lets go of the country.", "You keep the money and decisions in the centre's fist. Your grip stays tight, and local government remains a hollow shell where accountability and initiative go to die.", { MI: 4, EN: -4, GL: -2 }],
      ["Give the towns the money and power to fix things.", "A nation governed only from the capital is barely governed.", "You push genuine money and authority down to elected councils. You loosen your grip and empower some rivals, but governance gets closer to the people and visibly better.", { EN: 8, GL: 6, MI: -6 }])),

  // ── Anthem and flag respect law ─────────────────────────────────────────────
  ax("Culture Minister", "official", ["nationalism", "law", "speech"],
    sx("Mr. Prime Minister, sir! You can make a law that anyone who doesn't salute the flag perfectly goes to jail. This is a great excuse to arrest complainers.",
      ["Make the strict flag law.", "The symbols of the nation are above mockery.", "You criminalise disrespect of the national symbols. Patriots applaud, and the elastic offence becomes a convenient charge to level at any critic who steps out of line.", { MI: 4, FA: 2, EN: -6, GL: -4 }],
      ["Let people show respect however they want.", "Forced reverence is no reverence at all.", "You reject the law. The hardliners grumble that you failed to honour the nation, but you decline a cudgel that would have dressed censorship as patriotism.", { GL: 4, EN: 4, MI: -2 }])),

  // ── Result transmission app ─────────────────────────────────────────────────
  ax("Election Tech Adviser", "official", ["results", "transmission", "transparency"],
    sx("Your Excellency! A new app lets everyone see the votes being counted instantly on their phones. This makes it impossible for you to cheat.",
      ["Use the app to prove you are fair.", "A count the whole country watches is a count it believes.", "You launch the transparent dashboard. Tampering becomes near-impossible and the result, whatever it is, is trusted — and you have closed off your own machine's options for good.", { GL: 8, EN: 6, MI: -4 }],
      ["Say no to the app so you can control the numbers.", "A dashboard that cannot be managed is a risk I need not take.", "You stick with the slower official channels. The flexibility to 'reconcile' close seats survives, and so does the public's weary assumption that the count is never quite clean.", { MI: 4, GL: -6, EN: -4 }])),

  // ── Mosque-school (madrasa) recognition ─────────────────────────────────────
  ax("Education Affairs Secretary", "cleric", ["madrasa", "recognition", "votes"],
    sx("Prime Minister! Religious schools want their easy tests to count the same as hard college tests for getting jobs. If you say yes, they will vote for you.",
      ["Say yes so they vote for you.", "A million graduates and their families are a bloc worth winning.", "You grant equivalence to the madrasa degrees. The religious bloc swings gratefully behind you, and the secular establishment recoils as the civil service opens to a parallel education it cannot vouch for.", { MI: 4, FA: 2, EN: -6, GL: -6 }],
      ["Make them take a harder test first to be fair.", "Equal recognition demands an equal standard.", "You offer recognition conditional on bridging courses in core subjects. The bloc is disappointed at the half-measure, but the civil service keeps a baseline and the secularists are mollified.", { GL: 4, EN: 4, FA: -4, MI: -2 }])),

  // ── Door-to-door data harvesting ────────────────────────────────────────────
  ax("Campaign Data Director", "fixer", ["canvassing", "data", "privacy"],
    sx("Sir — Your helpers can secretly knock on doors and make lists of everyone's secrets and religion to figure out how to trick them.",
      ["Tell them to make the secret lists.", "Knowledge of the voter is power over the vote.", "Your canvassers compile an intimate map of every household. The targeting grows formidable, and a covert dossier on millions' private lives now sits on a party server, one breach from scandal.", { MI: 6, EN: -4, GL: -4 }],
      ["Tell them to just ask for votes normally.", "A party that files its citizens is a state I do not want to lead.", "You canvass for support without building the secret dossier. Your targeting is cruder, but you refuse to assemble a surveillance file on the people you ask to trust you.", { GL: 4, EN: 4, MI: -2 }])),

  // ── Snap dissolution of parliament ──────────────────────────────────────────
  ax("Constitutional Adviser", "official", ["dissolution", "parliament", "tactic"],
    sx("Honourable leader! You can cancel the government early to trick your enemies before they are ready for the election.",
      ["Cancel early to trick them.", "An opponent off-balance is an opponent beaten.", "You dissolve the house and rush the polls. The disorganised opposition is caught flat-footed, and you wear the charge of gaming the calendar for the win it buys you.", { MI: 6, GL: -4, EN: -2 }],
      ["Finish your normal time fairly.", "A house cut short for tactics cheapens the next.", "You let the term run out naturally. The opposition gets time to organise, but you cannot be accused of dissolving democracy's clock whenever it suited you.", { GL: 4, EN: 2, MI: -4 }])),

  // ── Backbench rebellion ─────────────────────────────────────────────────────
  ax("Chief Whip", "people", ["backbench", "rebellion", "policy"],
    sx("Sir, urgent news. Your own team is refusing to vote for a terrible rule you made. You can bully them into voting yes, or listen to them and fix the rule.",
      ["Bully them into voting yes.", "A backbencher's job is to vote, not to think.", "You whip the bill through over the rebels' objections. It passes, and so does the public anger they warned of, landing on the very MPs you forced to swallow it.", { MI: 4, FA: 2, EN: -6 }],
      ["Listen to them and fix the rule.", "The benches closest to the people often see clearest.", "You amend the bill to meet the backbenchers' concerns. The cabinet's pride is dented and the bill weakened, but you have averted a doorstep disaster and kept your MPs loyal.", { EN: 6, GL: 2, MI: -2 }])),

  // ── Corporate donation cap ──────────────────────────────────────────────────
  ax("Party Treasurer", "official", ["donations", "corporate", "influence"],
    sx("Sir, forgive me — A new rule will limit how much money rich people can give you. This makes things fairer, but you will be much poorer for the election.",
      ["Stop the rule so you get the rich people's money.", "A campaign starved of corporate cash is a campaign that loses.", "You kill the cap and the corporate money keeps flowing. The war chest stays fat, and the oligarchs' hooks stay deep in your policy, exactly as the reformers feared.", { FI: 6, FA: 4, EN: -6, GL: -4 }],
      ["Agree to the rule to make things fair.", "A party owned by donors governs for donors.", "You support capping and disclosing corporate money. The war chest thins painfully, but you loosen the oligarchs' grip and can credibly claim to have cleaned a corner of the system.", { GL: 6, EN: 6, FI: -6, FA: -4 }])),

  // ── Right to Information law ─────────────────────────────────────────────────
  ax("Information Commissioner", "official", ["rti", "transparency", "accountability"],
    sx("A word, sir! A new rule lets any normal person read the government's secret papers. This stops stealing, but means people will see your mistakes.",
      ["Stop the rule to keep your secrets.", "An open file is an open invitation to my enemies.", "You quietly hollow out the RTI regime with exemptions and delays. The corruption-fighters lose their best tool, and 'a government with something to hide' becomes the obvious reading.", { MI: 2, FA: 2, EN: -6, GL: -6 }],
      ["Agree to the rule and show the papers.", "Sunlight is the cheapest disinfectant a state can buy.", "You give the RTI law teeth and enforce it. Some embarrassing files surface and ministers squirm, but corruption gets harder and your reform credentials grow real.", { GL: 6, EN: 6, FA: -4 }])),

  // ── Public Accounts Committee ───────────────────────────────────────────────
  ax("Parliamentary Affairs Minister", "official", ["oversight", "committee", "audit"],
    sx("Sir, we have a problem. The team checking the government's spending is usually run by your enemies to keep things honest. You can put your friends in charge to hide your stealing.",
      ["Put your friends in charge of checking the spending.", "I will not hand my critics a microphone and my ledgers.", "You take the chair and stack the committee. Government spending sails through unexamined, and the one institution meant to catch waste and graft is turned into a shield for it.", { MI: 4, FA: 2, EN: -6, GL: -4 }],
      ["Let your enemies check the spending to be honest.", "Spending watched is spending behaved.", "You honour the convention and let the opposition scrutinise your ledgers. Some uncomfortable findings emerge, but waste is curbed and the house gains a working check.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Postal / service voters ─────────────────────────────────────────────────
  ax("Returning Officer Coordinator", "fixer", ["postal", "service-voters", "fraud"],
    sx("Sir! Soldiers voting by mail are easy to trick. You can secretly change all their votes to be for you.",
      ["Secretly change the soldiers' votes.", "The men in uniform vote as the chain suggests.", "You shepherd the postal votes into a reliable bloc. The numbers help, and the pattern — a service vote that breaks suspiciously one way — is logged by every observer watching.", { MI: 6, GL: -6, EN: -4 }],
      ["Count their votes honestly.", "A soldier's secret ballot is still a secret ballot.", "You insist the postal votes be handled openly and freely. You forgo a managed bloc, but you cannot be accused of voting the barracks by proxy.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Hung parliament kingmaker ───────────────────────────────────────────────
  ax("Coalition Manager", "fixer", ["hung-parliament", "kingmaker", "deals"],
    sx("Mr. Prime Minister, sir! No one won the election entirely. You can buy a few small teams with giant bags of money to win, or try to run the country carefully with less power.",
      ["Buy the small teams with money and jobs.", "A government formed is a government; how matters later.", "You assemble the majority by buying the kingmakers wholesale. The cabinet bloats with bought men and their price tags, and your government begins life owing everyone everything.", { MI: 6, FA: 2, FI: -4, EN: -4 }],
      ["Try to lead carefully with less power.", "Better to govern honestly on a knife-edge than to buy a throne.", "You build a minority government surviving vote by vote. It is precarious and exhausting, but it is not a bazaar, and each policy must be argued and won rather than purchased.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Women's reserved seats: direct election ─────────────────────────────────
  ax("Women's Wing Chief", "people", ["women", "reserved-seats", "reform"],
    sx("Your Excellency! Women want to actually be voted into the special seats, instead of you just picking them. If you let them, you can't control who gets the seats.",
      ["Let the women be voted in fairly.", "A seat won is a voice; a seat granted is an echo.", "You back direct election for the women's seats. You lose dozens of controllable appointments, but a cohort of women MPs arrives with real mandates and real independence.", { EN: 8, GL: 6, FA: -4, MI: -4 }],
      ["Keep picking the women yourself.", "Why give away seats I currently simply assign?", "You preserve the nomination system. The women's wing is disappointed and the tokenism critique stands, but you keep dozens of safe, loyal seats firmly in your gift.", { MI: 4, FA: 4, EN: -6, GL: -4 }])),

  // ── Polling-station relocation ──────────────────────────────────────────────
  ax("Election Logistics Officer", "shadow", ["polling-station", "relocation", "suppression"],
    sx("Prime Minister! You can secretly move the voting boxes in the enemy's towns far away right before the vote, so they can't walk there in time.",
      ["Move the boxes far away to trick them.", "A booth moved is a vote not cast.", "You scatter the opposition's booths to far-off venues at the last hour. Their turnout sags as planned, and the manoeuvre, once mapped by observers, becomes textbook documented suppression.", { MI: 6, GL: -8, EN: -6 }],
      ["Keep the boxes close so everyone can vote.", "A voter should not need a map to find democracy.", "You keep every booth where the voters expect it. You forgo a quiet suppression tactic, but no one can chart a pattern of vanished polling stations in your enemies' wards.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Election petition in court ──────────────────────────────────────────────
  ax("Law Minister", "official", ["election-petition", "courts", "result"],
    sx("Sir — Your enemies went to court with proof that you cheated. You can tell the judges to throw all the proof in the trash without looking at it.",
      ["Tell the judges to throw the proof in the trash.", "A result reopened is a result undone.", "Your courts throw out every petition, evidence or not. The seats are safe and the message clear — the bench is yours — and the contested results stay forever disputed.", { MI: 6, GL: -8, EN: -6 }],
      ["Let the judges look at the proof fairly.", "A seat that survives the court is a seat I truly hold.", "You let the courts weigh the real cases. You may lose a few seats to honest rulings, but the ones you keep are unassailable and the judiciary keeps a shred of credibility.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Deepfake of the opposition ──────────────────────────────────────────────
  ax("Cyber Cell Commander", "shadow", ["deepfake", "disinformation", "smear"],
    sx("Honourable leader! Your computer team made a fake, realistic video of your enemy saying something terrible. You can show it to everyone to ruin her, but it is a lie.",
      ["Show everyone the fake video.", "A lie that wins the day outlives its debunking.", "You loose the forgery and it rips through the timelines. It may swing the vote before it is exposed, and when it is, the trail back to your cell makes you the story for years.", { MI: 4, GL: -8, EN: -8 }],
      ["Do not use the fake video.", "A throne won by a forgery rots from the seat up.", "You kill the operation. You forgo a devastating dirty trick, but you are spared the day a forensic analyst pins the fabrication on your government for all to see.", { GL: 6, EN: 6, MI: -2 }])),

  // ── By-poll after a death ───────────────────────────────────────────────────
  ax("Strategy Director", "official", ["by-poll", "succession", "seat"],
    sx("Sir, urgent news. An old politician died. You can give his job to his very smart daughter, or to a mindless helper who will just do whatever you say.",
      ["Give the job to the mindless helper.", "A grateful nobody serves better than a proud somebody.", "You parachute in the controllable outsider. He wins the safe seat and owes you all, and the late MP's daughter — and the constituency that loved her father — turn bitter.", { MI: 4, FA: 2, EN: -4, GL: -2 }],
      ["Give the job to the smart daughter.", "Merit and local roots win seats fixers cannot.", "You give the daughter the nomination on merit. The fixer loses his pawn and grumbles, but the seat is won warmly and the benches gain a leader rather than a placeholder.", { EN: 6, GL: 4, FA: -2, MI: -2 }])),

  // ── Digital governance one-stop service ─────────────────────────────────────
  ax("Digital Government Adviser", "people", ["e-governance", "services", "corruption"],
    sx("Sir, forgive me — You can use computers so people don't have to pay bribes to government workers anymore. The workers will be very mad they lost their extra money.",
      ["Use the computers to stop the bribes.", "A counter with no clerk has no palm to grease.", "You force the e-services through against the clerks' sabotage. The petty bribery at a thousand counters withers, citizens save time and money, and you bank a visible, popular win.", { EN: 8, GL: 6, FI: 2, FA: -4 }],
      ["Let the workers keep taking bribes.", "Do not pick a fight with a million clerks at once.", "You let the digital push die quietly to keep the bureaucracy content. The counters stay manned and the palms stay greased, and the citizen keeps paying a small bribe for every stamp.", { FA: 4, FI: -2, EN: -6 }])),

  // ── Parliament question hour ────────────────────────────────────────────────
  ax("Leader of the House", "official", ["parliament", "accountability", "norms"],
    sx("A word, sir! In meetings, people only ask you fake, easy questions to make you look smart. You can let them ask real, hard questions to prove you are a good leader.",
      ["Keep only answering the fake, easy questions.", "A minister cornered on live television is a wound.", "You keep the softballs flying. Your ministers are spared embarrassment, and parliament's central ritual of accountability stays a hollow performance everyone sees through.", { MI: 2, FA: 2, EN: -4, GL: -2 }],
      ["Let them ask real, hard questions.", "A minister who can answer hard questions is a minister worth having.", "You restore genuine question hour. Your weaker ministers flounder under real questioning, but the strong shine, the house comes alive, and accountability stops being a charade.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Trade-union affiliation ─────────────────────────────────────────────────
  ax("Labour Wing Secretary", "people", ["unions", "affiliation", "leverage"],
    sx("Sir, we have a problem. You can make the big worker groups join your team. They will vote for you, but you will have to actually give them what they want later.",
      ["Make them join your team.", "Organised labour, organised for me.", "You affiliate the big unions and gain disciplined muscle. They now expect delivery on wages and conditions, and the day you cannot, their organised power turns squarely against you.", { MI: 4, EN: 4, FI: -4, FA: -2 }],
      ["Keep them away so you don't owe them anything.", "A union in the tent demands the tent's wealth.", "You keep the unions independent. You forgo their organised turnout, but you are not held hostage to wage demands you may not be able to meet.", { FI: 4, MI: -2, EN: -2 }])),

  // ── Voter education campaign ────────────────────────────────────────────────
  ax("Civic Education Director", "people", ["voter-education", "awareness", "turnout"],
    sx("Sir! You can pay to teach people how to spot election cheating. But if they learn, they might catch you cheating.",
      ["Teach people how to spot cheating.", "An informed electorate is a legitimate election.", "You fund honest voter education. Turnout and confidence rise, and so does the number of citizens who know exactly what an irregularity looks like — a price you accept for a credible vote.", { GL: 6, EN: 6, MI: -4 }],
      ["Stop the classes so they don't learn.", "Why teach the voter to catch me?", "You quietly defund the programme. The electorate stays hazier on its rights and easier to manage, and the democracy you preside over grows a little thinner and more cynical.", { MI: 2, GL: -4, EN: -4 }])),

  // ── Cadre rehabilitation ────────────────────────────────────────────────────
  ax("General Secretary", "fixer", ["cadres", "violence", "amnesty"],
    sx("Mr. Prime Minister, sir! Many of your helpers beat people up in the past. You can magically erase all their crimes to thank them for helping you.",
      ["Erase their crimes so they don't go to jail.", "I do not abandon the foot-soldiers who carried me.", "You wipe the cadres' cases clean en masse. Loyalty is rewarded and the machine reassured, and genuine thugs walk free alongside the wronged, impunity stamped a little deeper.", { MI: 4, FA: 6, EN: -8, GL: -4 }],
      ["Let the judges send the bad ones to jail.", "An amnesty for thugs is a licence for the next.", "You refuse the blanket pardon and let cases proceed individually. The cadres feel betrayed and some desert, but the genuinely innocent are cleared and the guilty face the law.", { GL: 6, EN: 4, FA: -6 }])),

  // ── Embassy / overseas voting ───────────────────────────────────────────────
  ax("Overseas Wing Secretary", "shadow", ["overseas", "voting", "fraud"],
    sx("Your Excellency! Your people in other countries are voting. Since no one is watching, you can easily sneak a bunch of fake votes in for yourself.",
      ["Sneak in the fake votes.", "Distant ballots are the least watched of all.", "You manufacture margins at the friendly embassies. The diaspora numbers swell suspiciously, and the watchdogs add 'phantom overseas votes' to the dossier on the election.", { MI: 4, GL: -6, EN: -4 }],
      ["Keep the faraway voting strictly fair.", "A vote cast abroad must be as clean as one cast at home.", "You insist on full observation of the embassy ballots. You forgo an easy padding, but the diaspora vote becomes a point of pride rather than another asterisk.", { GL: 6, EN: 2, MI: -4 }])),

  // ── Independent candidate strategy ──────────────────────────────────────────
  ax("Strategy Director", "fixer", ["independents", "spoilers", "tactics"],
    sx("Prime Minister! You can secretly pay fake politicians to run in the election just to confuse people and steal votes from your real enemy.",
      ["Pay the fake politicians to confuse people.", "A split rival is a beaten rival.", "You bankroll the spoilers and the opposition vote fractures in the target seats. The tactic delivers, and the day a funded 'independent' talks, it confirms every accusation of a rigged field.", { MI: 6, GL: -6, EN: -4 }],
      ["Play fair and win on your own.", "A manufactured candidate is a confession in waiting.", "You refuse the spoiler scheme and fight the weak seats straight. You lose some you might have stolen, but no funded fake candidate can ever surface to sink you.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Ombudsman appointment ───────────────────────────────────────────────────
  ax("Constitutional Adviser", "official", ["ombudsman", "accountability", "graft"],
    sx("Sir — The rules say there should be a special policeman who arrests government leaders who steal. No one has ever hired him. You can hire him now.",
      ["Do not hire him, to keep your leaders safe.", "An office uncreated cannot investigate me.", "You leave the post unfilled, as your predecessors did. The constitutional check stays a dead letter, and the corruption it was meant to catch goes on unmolested.", { FA: 2, MI: 2, EN: -6, GL: -4 }],
      ["Hire the special policeman to stop the stealing.", "A check unfilled for fifty years shames us all.", "You finally appoint a genuine ombudsman with teeth. Some of your own are caught in its early cases, but you accomplish what no government dared, and the reform is historic.", { GL: 8, EN: 6, FA: -4, MI: -2 }])),

  // ── Election-day magistrates ────────────────────────────────────────────────
  ax("Home Affairs Coordinator", "official", ["magistrates", "election-day", "neutrality"],
    sx("Honourable leader! Special judges are driving around on voting day. You can tell them to bully your enemies, or tell them to just keep everyone safe.",
      ["Tell them to bully your enemies.", "Authority on the ground should answer to me.", "Your magistrates lean on the opposition and overlook your side's tricks. The polls tilt under colour of law, and the partisan use of the bench becomes one more documented stain.", { MI: 6, GL: -6, EN: -4 }],
      ["Tell them to just keep everyone safe.", "A magistrate with a thumb on the scale poisons the whole poll.", "You instruct the magistrates to be strictly impartial. They keep order without favour, and the polls run with a fairness your fixers wanted to subvert.", { GL: 6, EN: 4, MI: -4 }])),

  // ── National ID voter purge ─────────────────────────────────────────────────
  ax("Electoral Roll Officer", "shadow", ["nid", "purge", "disenfranchisement"],
    sx("Sir, urgent news. You can use computers to erase poor people and minorities from the voting list so they can't vote against you.",
      ["Erase them from the list secretly.", "A roll trimmed of my enemies is a roll improved.", "You scrub the list with a partisan hand, and the poor, the migrant, and the minority find themselves voteless. The disenfranchisement is quiet, deniable, and — once mapped — damning.", { MI: 6, GL: -8, EN: -8 }],
      ["Keep the list fair and add anyone who is missing.", "A purge that targets the poor is a coup with a database.", "You clean the roll honestly and run a drive to register the missing. The list loses its phantoms without losing its poor, and the franchise widens rather than narrows.", { GL: 6, EN: 8, MI: -4 }])),

  // ── Party youth festival ────────────────────────────────────────────────────
  ax("Youth Wing Coordinator", "people", ["youth", "outreach", "spending"],
    sx("Sir, forgive me — Young people are very angry at you. You can throw a giant, expensive festival with concerts to trick them into liking you again.",
      ["Throw the giant, expensive festival.", "A bridge to the young is worth its price in taka.", "You bankroll the festival and reach a generation that had written you off. It is costly and some sneer at the gloss, but the outreach softens the youth's hostility a little.", { EN: 6, GL: 2, FI: -4 }],
      ["Save the money and skip the festival.", "A concert does not undo a killing.", "You decline the spending as hollow. The treasury is spared, but the alienated youth see no gesture at all, and the generational rift hardens another notch.", { FI: 4, EN: -6, GL: -2 }])),

  // ── Privilege motion against a journalist ───────────────────────────────────
  ax("Parliamentary Affairs Minister", "official", ["privilege", "press", "intimidation"],
    sx("A word, sir! Your friend wants to drag a news reporter into a scary government meeting to yell at him for writing a mean story.",
      ["Let your friend drag the reporter in.", "The dignity of the house must be defended.", "You let the house summon and censure the journalist. The press gallery gets the message and softens, and parliament adds 'cudgel against reporters' to its repertoire.", { MI: 4, FA: 2, EN: -6, GL: -6 }],
      ["Stop your friend and let the reporter be.", "A parliament that bullies the press fears it.", "You kill the privilege motion. The thin-skinned MP fumes, but the press keeps its independence and you are spared a needless fight with the entire media.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Ministerial code of conduct ─────────────────────────────────────────────
  ax("Cabinet Secretary", "official", ["ministers", "conduct", "accountability"],
    sx("Sir, we have a problem. Your leaders are obviously stealing money. You can force them to show their bank accounts and fire the thieves.",
      ["Force them to show their accounts and fire them.", "A cabinet of looters is a scandal with portfolios.", "You impose asset declarations and enforce resignations. A few loyal grandees fall and the cabinet trembles, but the public sees, astonished, that office is no longer a licence to loot.", { GL: 6, EN: 8, FA: -6, MI: -2 }],
      ["Ignore it and let them keep stealing.", "A loyal grandee's loyalty is bought with a free hand.", "You decline to bind your ministers. They stay loyal and enriched, and 'one law for them' becomes the defining grievance of your government.", { FA: 6, MI: 2, EN: -8, GL: -4 }])),

  // ── Cross-voting in the presidential election ───────────────────────────────
  ax("Chief Whip", "fixer", ["president", "cross-voting", "discipline"],
    sx("Sir! You are voting for the President. Some of your friends want to vote for the wrong person as a joke. You can threaten them so they don't.",
      ["Threaten them so they vote for your person.", "A secret ballot is no excuse for disloyalty.", "You lean hard on the waverers and your candidate wins clean. The dissent is suppressed, but you have learned nothing about the discontent that prompted it, and it festers unspoken.", { MI: 4, FA: 2, EN: -4 }],
      ["Let them vote in secret without threats.", "A warning shot heard is a rebellion averted.", "You let the MPs vote freely and read the bruised result as the message it is. Your candidate squeaks in, and you act on the discontent before it grows into something you cannot whip.", { GL: 2, EN: 4, FA: -2, MI: -2 }])),

  // ── Snap cabinet reshuffle ──────────────────────────────────────────────────
  ax("General Secretary", "official", ["reshuffle", "cabinet", "balance"],
    sx("Mr. Prime Minister, sir! You have to switch your helpers around. You can pick the helpers who are dumb but loyal, or the very smart ones who might try to take your job.",
      ["Pick the dumb, loyal helpers.", "A loyal fool never sharpens a knife for me.", "You keep the faithful and the mediocre in post. The cabinet is safe and pliant, and the country is governed by people chosen for their harmlessness rather than their skill.", { MI: 2, FA: 6, EN: -6, GL: -4 }],
      ["Pick the very smart helpers.", "A government that cannot govern is loyal to nothing.", "You promote the capable, ambition and all. Governance sharpens and the public notices, and you accept the risk that one of your talents may grow large enough to threaten you.", { EN: 6, GL: 6, FA: -6, MI: -2 }])),

  // ── The mid-reign legitimacy referendum ─────────────────────────────────────
  ax("Strategy Director", "official", ["referendum", "legitimacy", "gamble"],
    sx("Your Excellency! People don't believe you won fairly. You can ask the whole country to vote \"Yes\" or \"No\" on if they want you to stay. It's a huge gamble.",
      ["Ask the country to vote \"Yes\" or \"No\".", "A fresh mandate silences every whisper.", "You put your rule to the people. It is a genuine gamble, and the campaign consumes the country; whatever the result, you have staked your legitimacy on a single roll of the dice.", { GL: 4, EN: 2, MI: -2 }],
      ["Don't take the risk.", "A vote I might lose is a weapon I hand my enemies.", "You decline the plebiscite. You keep the doubts unresolved rather than risk a public verdict, and the legitimacy question goes on quietly eating at your authority.", { MI: 4, GL: -2, EN: -2 }]),
    sx("Prime Minister! You did the \"Yes\" or \"No\" vote, but hardly anyone showed up, and the numbers are obviously fake.",
      ["Brag loudly that everyone loves you.", "A win is a win; let the doubters choke on it.", "You proclaim the implausible result a ringing endorsement. Your base cheers, but no one outside it believes a 98 percent on a 30 percent turnout, and the 'vindication' becomes a punchline.", { MI: 4, FA: 2, GL: -8, EN: -6 }],
      ["Admit the vote was messy and calm down.", "A boast no one believes is worse than silence.", "You acknowledge the weak turnout and claim only a modest mandate. The base wanted triumphalism, but the candour spares you the ridicule and salvages a sliver of credibility.", { GL: 4, EN: 4, FA: -4, MI: -2 }]),
    sx("Sir — Because of the messy vote, your enemies demand a totally fair, watched election. If you say yes, you might lose your job.",
      ["Ignore them and stay the boss.", "I have had my plebiscite; I owe them no more.", "You refuse the clean election and hide behind the tainted referendum. The opposition's demand hardens into a movement, and your legitimacy gap, papered over, widens beneath the paper.", { MI: 4, GL: -8, EN: -6 }],
      ["Agree to the totally fair election.", "Only a real vote ends a real doubt.", "You agree to the genuine, observed election. The hardliners call it surrender, but you gamble that a clean mandate, even a narrow one, is worth more than a hollow one defended forever.", { GL: 8, EN: 6, MI: -8 }])),
];
