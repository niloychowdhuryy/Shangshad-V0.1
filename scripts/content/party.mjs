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
    sx("The opposition will boycott unless you hand the election to a neutral caretaker administration. \"Concede the caretaker,\" the Secretary warns, \"and you might lose. Refuse, and you win a vote the world calls a sham.\"",
      ["Refuse the caretaker, hold the vote under your government.", "A contest I run is a contest I survive.", "You keep control of the machinery and win the seats. Turnout is thin, the opposition cries fraud, and your mandate carries an asterisk abroad.", { MI: 10, GL: -10, EN: -6 }],
      ["Concede a neutral caretaker administration.", "A legitimate loss beats an illegitimate win.", "You gamble on a clean vote. The world applauds the rare concession; your own machine panics that you have bet the house on the people.", { GL: 10, EN: 6, MI: -10 }]),
    sx("Having kept control of the vote, the count in a dozen swing seats is 'adjustable' — the returning officers await a signal. A clean count risks your majority; a managed one cements it but leaves fingerprints.",
      ["Order the count managed in the swing seats.", "A majority is not left to chance.", "Your majority is secured and unmistakably engineered. Observers document the irregularities; the result is yours and rotten at the root.", { MI: 8, GL: -10, EN: -8, FA: 4 }],
      ["Let the count stand, whatever it gives.", "A stolen seat is a debt that comes due.", "You accept the honest tally and a slimmer majority. Governing is harder; the legitimacy you keep may matter more than the seats you lost.", { GL: 8, EN: 6, MI: -6 }])),

  // ── Election Commission capture ─────────────────────────────────────────────
  ax("Election Commission Liaison", "official", ["ec", "institutions", "appointments"],
    sx("The terms of the election commissioners are up and you choose their replacements. The liaison presents two lists: pliable loyalists who will see nothing, or respected independents who might rule against you when it counts.",
      ["Appoint the loyalist commissioners.", "An umpire I pick does not call me out.", "The Commission becomes an extension of your office. It serves you flawlessly — and the institution's credibility, once spent, will not return when you need it.", { MI: 8, GL: -8, EN: -6 }],
      ["Appoint credible independents.", "A referee everyone trusts protects the winner too.", "You stack the body with respected names. They will sometimes rule against you, but the elections they bless will be believed.", { GL: 8, EN: 6, MI: -8 }])),

  // ── Hartal / blockade ───────────────────────────────────────────────────────
  ax("Street Operations Coordinator", "fixer", ["hartal", "blockade", "violence"],
    sx("The opposition has called a week of hartals and transport blockades; petrol bombs are landing on buses and the economy is freezing. The coordinator wants to flood the streets with your own cadres to 'break' the blockade by force.",
      ["Deploy party cadres to break the blockade.", "Meet their streets with ours.", "Your cadres clear the roads in running battles. Commerce resumes amid the wreckage, and the cycle of street violence now belongs to you both.", { MI: 8, EN: -10, FI: 4, GL: -6 }],
      ["Keep cadres home, secure transport with police.", "Two mobs are worse than one.", "You refuse to militarise your supporters and let the police protect the routes. The blockade drags on and the economy bleeds, but no partisan blood is on your hands.", { GL: 4, EN: 4, MI: -6, FI: -6 }])),

  // ── MP defections / horse-trading ───────────────────────────────────────────
  ax("Chief Whip", "fixer", ["defection", "coalition", "horse-trading"],
    sx("Your majority is wobbling; a bloc of independent MPs will cross to your side — for ministries, contracts, and quiet immunity from their pending cases. The Whip says it is the cheapest way to lock the floor of the house.",
      ["Buy the defectors with posts and immunity.", "A secured floor is worth a few favours.", "The MPs cross and your majority is iron. The cabinet bloats with bought men, their cases frozen, and the public reads the price tag.", { MI: 8, FA: 4, EN: -6, GL: -4 }],
      ["Refuse to trade immunity for votes.", "I will not staff a government with men I had to bribe.", "You decline the deal and govern on a knife-edge. Every vote is now a fight, but no minister sits in your cabinet to dodge a courtroom.", { GL: 6, EN: 4, MI: -8 }])),

  // ── Alliance with the religious bloc ────────────────────────────────────────
  ax("Religious Front Emissary", "cleric", ["islamist", "alliance", "secularism"],
    sx("A powerful religious movement offers its street power and its voters — in exchange for a blasphemy law, control of textbooks, and a quiet end to certain women's-rights reforms. The emissary smiles: \"We can fill any square in the country.\"",
      ["Take the alliance and its demands.", "Their squares are full and my margins are thin.", "Their mobilisation is yours now, and so are their conditions. The curriculum narrows, reformers despair, and your secular base feels sold.", { MI: 10, FA: 4, EN: -10, GL: -8 }],
      ["Decline and hold the secular line.", "I will not trade women's rights for a turnout.", "You refuse their terms. They can now march against you instead of with you, but the constitution's spine, and your liberal base, hold.", { EN: 8, GL: 6, MI: -8 }])),

  // ── War-crimes tribunal politics ────────────────────────────────────────────
  ax("Tribunal Prosecutor", "official", ["1971", "tribunal", "justice"],
    sx("The tribunal trying the 1971 war criminals is both a genuine reckoning and a useful weapon against today's opposition. How far do you push — strict evidence and slow justice, or fast verdicts that thrill the base and decimate your rivals?",
      ["Push fast, sweeping verdicts.", "Justice delayed is the guilty escaping.", "The convictions land quickly to roaring crowds, and your opposition is gutted. Legal observers question the haste, and the verdicts carry that shadow.", { MI: 8, FA: 4, GL: -6, EN: 4 }],
      ["Insist on slow, airtight due process.", "A reckoning built on shortcuts collapses.", "You demand rigorous trials. The base grows impatient and the weapon is blunter, but the verdicts that come will withstand history's scrutiny.", { GL: 8, EN: 4, MI: -6 }])),

  // ── Student wing leash ──────────────────────────────────────────────────────
  ax("Student Wing President", "fixer", ["students", "campus", "extortion"],
    sx("Your student wing controls the campuses through guest-room torture, tender extortion, and seat-control of the halls. The president wants more autonomy and money; a reformist faction wants the wing reined in before it becomes a scandal.",
      ["Empower the student wing further.", "The campuses are a fortress I cannot lose.", "The wing tightens its grip and delivers the campuses. Its abuses grow more brazen, a powder keg awaiting one viral video.", { MI: 8, EN: -10, GL: -6 }],
      ["Rein it in and curb the worst leaders.", "A wing that tortures students will one day burn me.", "You discipline the bosses and cut the extortion. The campuses loosen from your grip, but you have defused a bomb under your own house.", { EN: 8, GL: 4, MI: -8 }])),

  // ── Dynastic succession in the party ────────────────────────────────────────
  ax("Party Elders' Council", "official", ["succession", "dynasty", "loyalty"],
    sx("The grey-haired council that has run the party for decades wants you to anoint your child as heir-apparent now, to 'preserve unity'. The reformers warn a dynastic coronation will hollow the party of every talent who is not your blood.",
      ["Anoint your child as successor.", "A clear heir prevents a war of knives.", "The dynasty is secured and the council placated. Capable non-family leaders drift away, and the party's depth thins to a single bloodline.", { MI: 6, FA: 8, GL: -4, EN: -4 }],
      ["Open the succession to merit.", "A party is not an inheritance.", "You refuse to crown an heir and invite a real contest. The family is wounded and the council nervous, but the party keeps its best minds.", { GL: 6, EN: 4, FA: -8, MI: -4 }])),

  // ── Jailing the opposition leader ───────────────────────────────────────────
  ax("Attorney General", "official", ["opposition", "courts", "lawfare"],
    sx("A decades-old graft case has finally ripened against the opposition leader. Convict her and she is barred from the next election; the bench will rule whichever way you nod. \"One judgment,\" the Attorney General murmurs, \"and your only rival watches the vote from a cell.\"",
      ["Push the conviction and the ban.", "Remove the rival, remove the race.", "She is sentenced and disqualified. Her party erupts and the chanceries issue statements, but the ballot now has no name on it but yours.", { MI: 10, GL: -10, EN: -6 }],
      ["Let the case run honestly, ban or no ban.", "A throne with no challenger is a target.", "You refuse to script the verdict. She may yet stand against you, but no one can say you jailed your way to power.", { GL: 8, EN: 6, MI: -8 }]),
    sx("With the leader jailed and ailing in custody, the prison doctor warns that a death behind your bars would make her a martyr forever. Her family begs for hospital release; your hardliners call it weakness.",
      ["Keep her confined, deny the release.", "A martyr in a cell is safer than a saint set free.", "You hold firm and the cell stays locked. Her health worsens in the headlines, and every cough becomes an indictment of you.", { MI: 6, GL: -8, EN: -8 }],
      ["Grant medical release on humane terms.", "I will not let a corpse defeat me.", "You let her convalesce under guard at home. The base grumbles that the snake is loose, but you have denied her the one victory captivity offered.", { GL: 6, EN: 6, MI: -4 }])),

  // ── Election-day internet shutdown ──────────────────────────────────────────
  ax("Telecom Regulator", "official", ["internet", "election", "censorship"],
    sx("On the eve of the vote the regulator can throttle mobile data nationwide — 'to stop rumours,' officially; to blind the observers and opposition pollwatchers, in truth. A dark net makes a managed count invisible.",
      ["Throttle data through election day.", "What the cameras cannot upload did not happen.", "The country goes dark and the count proceeds unwatched. The result is clean-looking and universally disbelieved; the outage itself becomes the story.", { MI: 8, GL: -10, FI: -6, EN: -6 }],
      ["Keep the networks open.", "A vote no one can film is a vote no one believes.", "You let the signal flow. Every irregularity is livestreamed, but so is every honest queue, and the result keeps its credibility.", { GL: 8, EN: 6, MI: -6 }])),

  // ── Cash for votes ──────────────────────────────────────────────────────────
  ax("District Organiser", "fixer", ["vote-buying", "patronage", "money"],
    sx("In the marginal districts the organiser proposes the old arithmetic: envelopes of cash, sarees, and tin sheets distributed ward by ward the night before polling. \"Hunger votes for whoever fed it last,\" he shrugs.",
      ["Fund the ward-level handouts.", "An empty stomach has a short memory.", "The trucks roll out and the margins firm up. The treasury thins, the habit deepens, and your win smells of the bazaar.", { MI: 8, FI: -8, EN: -4, GL: -4 }],
      ["Ban handouts, run on delivery instead.", "Buy a vote once and you rent it forever.", "You forbid the envelopes and campaign on roads and clinics built. The organisers fret over thin margins, but the votes you win, you keep.", { EN: 8, GL: 6, FI: 4, MI: -6 }])),

  // ── Bloated voter rolls ─────────────────────────────────────────────────────
  ax("Electoral Roll Officer", "official", ["voter-roll", "fraud", "ghosts"],
    sx("The rolls in your strongholds carry tens of thousands of ghosts — the dead, the duplicated, the never-born. The officer can purge them for a credible list, or leave them as a reserve of votes that never argue back.",
      ["Leave the ghost voters on the rolls.", "A loyal voter need not be a living one.", "The phantom names stay, ready to be voted. Auditors will find them eventually, and when they do the whole tally is tainted.", { MI: 8, GL: -8, EN: -6 }],
      ["Purge the rolls to a clean count.", "Ghosts vote, but they also haunt.", "You scrub the list to the living. Your stronghold margins shrink honestly, and the register can finally survive a recount.", { GL: 8, EN: 6, MI: -8 }])),

  // ── Nomination trading ──────────────────────────────────────────────────────
  ax("Nominations Board Chair", "fixer", ["tickets", "candidates", "money"],
    sx("Party tickets for the winnable seats are the most valuable commodity in the country. The chair can auction them to the highest bidders — funding the whole campaign overnight — or award them on grassroots strength and clean records.",
      ["Sell the tickets to the richest bidders.", "A campaign runs on cash, not character.", "The war chest fills in a week with businessmen-MPs who bought their seats. They will legislate for their own ledgers, and the grassroots see who was passed over.", { FI: 10, MI: 4, EN: -8, GL: -6 }],
      ["Award tickets on grassroots merit.", "A bought candidate serves the buyer, not the booth.", "You hand seats to organisers who earned them. The campaign chest stays lean, but your benches fill with people the wards actually know.", { EN: 8, GL: 4, MI: 4, FI: -8 }])),

  // ── Friendly media empire ───────────────────────────────────────────────────
  ax("Media Adviser", "fixer", ["media", "propaganda", "press"],
    sx("A loyal tycoon offers to buy up the three biggest private TV channels and run them as your chorus, drowning out the critical press. The adviser calls it 'narrative dominance'; the cost is the last pretence of a free media.",
      ["Bless the takeover of the channels.", "He who owns the screen owns the story.", "The airwaves turn to praise overnight. Dissent migrates to the shadows of the internet, and 'press freedom' becomes a foreign talking point against you.", { MI: 8, FA: 4, GL: -8, EN: -6 }],
      ["Decline; let the channels stay independent.", "A choir of yes-men cannot warn me of fire.", "You wave the tycoon off. The critical broadcasts sting nightly, but they are also the only honest mirror your government has.", { GL: 8, EN: 6, MI: -6 }])),

  // ── The online troll cell ───────────────────────────────────────────────────
  ax("Cyber Cell Commander", "shadow", ["trolls", "disinformation", "online"],
    sx("Your party's online cell wants a budget to flood the networks with fake personas — smearing critics, manufacturing trends, burying inconvenient news under coordinated noise. The commander promises 'we win the feed before they wake up.'",
      ["Fund the troll army.", "The first lie of the morning sets the day.", "Ten thousand sock-puppets march on command. The discourse rots, journalists are doxxed, and when the operation leaks it confirms every accusation of manipulation.", { MI: 8, GL: -8, EN: -6 }],
      ["Shut the cell down.", "An army of lies eventually turns its guns inward.", "You disband the operation. Your opponents own more of the timeline now, but your name is off the next disinformation exposé.", { GL: 6, EN: 6, MI: -6 }])),

  // ── Coalition partner's ultimatum ───────────────────────────────────────────
  ax("Coalition Manager", "official", ["coalition", "allies", "leverage"],
    sx("Your largest junior partner threatens to walk unless it gets a deputy-premiership and three more ministries — a price that lets its leader posture as co-ruler. Lose them and your majority cracks; keep them and you feed a rival under your roof.",
      ["Pay the price and keep the coalition whole.", "A government standing is worth a crowded cabinet.", "You hand over the posts and the floor holds. Your partner struts as near-equal, and your own MPs resent the ministries they were promised.", { MI: 6, FA: -4, EN: -4, GL: 4 }],
      ["Call their bluff and let them walk.", "I will not be governed by my own junior.", "You refuse, and they storm out. The arithmetic tightens to a knife's edge, but every remaining minister knows you do not bend to blackmail.", { MI: -8, FA: 6, EN: 4 }])),

  // ── No-confidence motion ────────────────────────────────────────────────────
  ax("Chief Whip", "fixer", ["parliament", "no-confidence", "discipline"],
    sx("A no-confidence motion is on the order paper, and a dozen of your backbenchers are wavering. Break it with the Whip's threats, frozen contracts, and midnight visits — or win the floor by actually answering the grievance behind the revolt?",
      ["Crush the revolt with the Whip's methods.", "Discipline is taught in the dark.", "The waverers fall back into line, cowed. The motion dies, but a dozen MPs now serve you out of fear, and fear is a thin glue.", { MI: 8, FA: 4, EN: -6, GL: -4 }],
      ["Address the grievance, win the vote openly.", "A backbencher heard is a backbencher kept.", "You meet the rebels, concede a real reform, and win the floor in daylight. It cost you policy ground, but the loyalty you bought is genuine.", { EN: 6, GL: 6, MI: -4 }])),

  // ── Constitutional term limits ──────────────────────────────────────────────
  ax("Constitutional Adviser", "official", ["constitution", "term-limits", "power"],
    sx("Your jurists can draft an amendment scrapping term limits altogether, clearing the way for indefinite rule, and the two-thirds majority is within reach. The adviser notes the obvious: it is also the clearest signal that you intend never to leave.",
      ["Abolish term limits.", "Reform takes longer than a term allows.", "The amendment passes and the horizon clears. At home it reads as ambition unmasked; abroad, as one more strongman erasing his own exit.", { MI: 8, FA: 4, GL: -10, EN: -8 }],
      ["Leave the limits in place.", "A door I cannot lock behind me keeps me honest.", "You let the constraint stand. The dynasty's grip looks less total, but you have spared yourself the label of president-for-life.", { GL: 8, EN: 6, MI: -4 }])),

  // ── Banning a rival party ───────────────────────────────────────────────────
  ax("Home Secretary", "official", ["banning", "rivals", "repression"],
    sx("You have the legal pretext to ban a troublesome rival party outright — dissolve it, seize its offices, bar its symbol. It would erase a threat in a stroke — and tell every other party that the law is just your hammer.",
      ["Ban the rival party.", "A weed pulled does not seed.", "The party is dissolved and its cadres scattered or jailed. Your dominance is near-total, and so is the proof that you fear a fair fight.", { MI: 10, GL: -10, EN: -8 }],
      ["Let it stand and beat it at the polls.", "A banned party becomes a legend; a beaten one becomes a footnote.", "You leave the rival legal and defeat it in the open. It survives to fight again, but your win carries no asterisk.", { GL: 8, EN: 6, MI: -6 }])),

  // ── The party patron's bill ─────────────────────────────────────────────────
  ax("Party Treasurer", "fixer", ["funding", "patrons", "graft"],
    sx("The industrialist who bankrolled three of your campaigns now wants his return: a state bank licence, a tax holiday, and a port concession. The treasurer reminds you the next campaign cannot be fought without him.",
      ["Grant the patron his rewards.", "The hand that feeds expects to be kissed.", "He gets his licence and his concession. The campaign chest is safe for another cycle, and a single oligarch now owns a wing of your economy.", { FI: 8, MI: 4, EN: -8, GL: -6 }],
      ["Refuse and find cleaner money.", "A party owned by one man has only one voter.", "You turn him down and scramble for funding elsewhere. The next campaign will be leaner and harder, but no single patron holds your leash.", { GL: 6, EN: 6, FI: -8 }])),

  // ── Local strongman (mastan) ────────────────────────────────────────────────
  ax("Ward Boss", "shadow", ["mastan", "extortion", "control"],
    sx("Your most effective ward boss runs his neighbourhood through extortion, land-grabbing, and a leash on the local police, and delivers turnout like clockwork. A rival within the party says he is a scandal waiting to detonate.",
      ["Keep the strongman and his turnout.", "A made ward is a won ward.", "He keeps delivering, and keeps grabbing. His enemies pile up, and one of his victims will eventually find a camera.", { MI: 8, EN: -8, GL: -4 }],
      ["Cut him loose and clean the ward.", "A boss who owns the booth will one day own me.", "You strip him of cover and let the cases proceed. The ward's turnout machine sputters, but a liability has been removed before it blew.", { EN: 8, GL: 4, MI: -8 }])),

  // ── Reserved women's seats ──────────────────────────────────────────────────
  ax("Women's Wing Chief", "official", ["women", "representation", "reserved-seats"],
    sx("The reserved women's seats are yours to fill. The wing chief urges genuine grassroots women organisers; the fixers want them handed to wives and daughters of male donors as a courtesy. The seats are a signal either way.",
      ["Reward donors' kin with the seats.", "The seats are a thank-you, not a ladder.", "Donors' wives take the benches and vote as told. The women's wing seethes, and the reform you boast of abroad rings hollow at home.", { FA: 6, FI: 4, EN: -6, GL: -4 }],
      ["Seat real women organisers.", "A reserved seat should hold a leader, not a placeholder.", "You elevate women who built the wards. The donors grumble at the snub, but your benches gain voices that actually represent someone.", { EN: 8, GL: 6, FA: -4, MI: -2 }])),

  // ── The defecting MP (your own) ─────────────────────────────────────────────
  ax("Chief Whip", "fixer", ["defection", "loyalty", "betrayal"],
    sx("One of your own MPs — popular, principled, increasingly loud about corruption — is being courted by the opposition. The Whip offers two routes: ruin him pre-emptively with a leaked file, or win him back with a real hearing.",
      ["Pre-empt him with a smear file.", "A loud man is silenced before he sings.", "The file leaks and his reputation buckles before he can cross. He is neutralised, and every honest MP learns what conscience costs in your party.", { MI: 8, FA: 4, EN: -8, GL: -6 }],
      ["Win him back with a genuine hearing.", "An honest critic kept is worth ten bought loyalists.", "You hear him out and act on one grievance. He stays, vocal but yours, and the benches see that integrity has a place after all.", { EN: 8, GL: 6, MI: -4 }])),

  // ── National council show of force ──────────────────────────────────────────
  ax("Rally Coordinator", "fixer", ["rally", "spectacle", "mobilisation"],
    sx("The party's national council is your chance for a million-strong show of force in the capital. The coordinator wants every district to bus in cadres — paid, fed, and housed at party cost — to fill the maidan and overawe rivals.",
      ["Stage the million-strong spectacle.", "Power unseen is power doubted.", "The maidan overflows and the footage dominates the week. The cost is staggering and the city paralysed, but no one questions your reach.", { MI: 8, FA: 4, FI: -8, EN: -4 }],
      ["Hold a lean, disciplined council instead.", "A crowd I had to rent proves nothing.", "You convene a focused, modest gathering. The spectacle is smaller, but the treasury and the city's patience are spared, and the agenda actually gets done.", { FI: 6, EN: 4, MI: -4 }])),

  // ── War-crimes execution timing ─────────────────────────────────────────────
  ax("Tribunal Prosecutor", "official", ["1971", "execution", "timing"],
    sx("A war-criminal's final appeal is exhausted and the gallows wait. Carrying out the sentence on the eve of the election would electrify your base and dare the opposition to defend a collaborator. Justice on its own clock, or yours?",
      ["Time the execution for maximum advantage.", "Justice and the calendar can keep step.", "The hanging lands days before the vote and the base roars. The cynicism is noted at home and abroad — a reckoning turned into a campaign prop.", { MI: 8, FA: 4, EN: 4, GL: -6 }],
      ["Let the sentence run on the law's own clock.", "A gallows is not a campaign poster.", "You let the process conclude when it concludes. The base would have preferred the theatre, but the verdict keeps its dignity intact.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Renaming institutions after the family ──────────────────────────────────
  ax("Culture Minister", "official", ["legacy", "dynasty", "naming"],
    sx("A proposal lands to rename the largest airport, a university, and a string of bridges after your family's founding figures, stamping the dynasty on the map for generations. Critics call it the cult swallowing the state.",
      ["Approve the renamings.", "A name on the map is a claim on the future.", "The signs change across the country. Your lineage is everywhere now — and so is the evidence, for critics, of a personality cult.", { FA: 8, MI: 4, EN: -6, GL: -6 }],
      ["Decline the wholesale renaming.", "A dynasty secure in itself need not shout.", "You let the airports keep their names. The family's elders sulk at the modesty, but the state stays larger than your bloodline.", { GL: 6, EN: 4, FA: -6 }])),

  // ── Booth capture in the stronghold ─────────────────────────────────────────
  ax("Polling Agent Coordinator", "fixer", ["booth-capture", "election-day", "violence"],
    sx("On polling day, your cadres in a contested district can seize the booths in the last hour, eject the rival's agents, and stuff the boxes. The coordinator says it locks twelve seats — twelve seats no one will believe.",
      ["Order the booth captures.", "The last hour decides the count.", "The boxes fill and the seats are yours. Phone videos of ejected agents go viral by nightfall, and the dozen seats become a dozen scandals.", { MI: 8, GL: -10, EN: -8 }],
      ["Forbid it; hold the booths clean.", "A captured booth is a confession on film.", "You order the agents to stand down and the count to stand. You may lose some of the twelve, but you keep the only thing a margin is worth — belief.", { GL: 8, EN: 6, MI: -6 }])),

  // ── Old guard vs. young blood ───────────────────────────────────────────────
  ax("Party Elders' Council", "official", ["generations", "renewal", "loyalty"],
    sx("The party's gerontocracy clings to every committee chair while a generation of capable forty-somethings stalls beneath them. The elders warn that pushing them out invites chaos; the young warn that keeping them invites irrelevance.",
      ["Keep the old guard in their chairs.", "Loyalty earned over decades is not lightly retired.", "The veterans stay and the peace holds. The talented young drift toward NGOs and business, and the party ages with its leaders.", { FA: 4, MI: 4, EN: -4, GL: -4 }],
      ["Promote the next generation now.", "A party that cannot renew itself buries itself.", "You move the forty-somethings into real power. The elders are wounded and noisy, but the benches suddenly have a future tense.", { EN: 8, GL: 6, FA: -6, MI: -2 }])),

  // ── Speaker's neutrality ────────────────────────────────────────────────────
  ax("Parliamentary Affairs Minister", "official", ["speaker", "parliament", "fairness"],
    sx("The Speaker's chair is yours to fill. A partisan Speaker would gag the opposition, ram bills through, and rule every point of order your way. A neutral one would let the house breathe — and occasionally let your rivals land a blow.",
      ["Install a partisan Speaker.", "The chair should sit on my side of the aisle.", "Bills sail through and the opposition is muzzled at every turn. The house becomes a rubber stamp, and parliament's last shred of theatre dies.", { MI: 6, GL: -6, EN: -6 }],
      ["Appoint a credibly neutral Speaker.", "A fair umpire makes my wins count.", "The house gets a Speaker both sides respect. Your rivals get their moments, but the chamber's rulings carry weight again.", { GL: 8, EN: 6, MI: -6 }])),

  // ── Diaspora donations ──────────────────────────────────────────────────────
  ax("Overseas Wing Secretary", "fixer", ["diaspora", "funding", "foreign"],
    sx("Your overseas chapters can funnel large, lightly-documented donations home through hundi channels. The secretary calls it patriotic generosity; the law calls it illegal foreign funding that ties you to money you cannot explain.",
      ["Accept the diaspora hundi money.", "A son abroad still pays his mother's bills.", "The funds arrive off the books and the chest swells. Somewhere a paper trail survives, and when it surfaces it will read as foreign money buying your government.", { FI: 8, MI: 2, GL: -8, EN: -4 }],
      ["Refuse the undocumented channels.", "Money I cannot name is a leash I cannot see.", "You insist on clean, declared donations only. The chest grows slower, but no foreign-funding exposé waits in your future.", { GL: 6, EN: 4, FI: -6 }])),

  // ── Minority vote bank ──────────────────────────────────────────────────────
  ax("Minorities Cell Convenor", "official", ["minorities", "secularism", "vote-bank"],
    sx("The Hindu and minority vote has long been a reliable bloc for you against the religious right — but only if you protect it. After a spate of temple attacks, the convenor warns that token sympathy will not hold them; visible protection will, at a cost with the majority.",
      ["Offer words, avoid antagonising the majority.", "A bloc that has nowhere else to go waits patiently.", "You issue statements and little else. The minorities feel taken for granted, and the next attack erodes a loyalty you assumed was permanent.", { MI: 2, EN: -6, GL: -4 }],
      ["Protect them visibly, prosecute the attackers.", "A protected vote is a kept vote.", "You deploy security and jail the ringleaders. The hardline preachers rage, but the minority bloc rallies to you with real gratitude.", { EN: 8, GL: 6, MI: -4, FA: -2 }])),

  // ── The dummy candidate scheme ──────────────────────────────────────────────
  ax("Strategy Director", "shadow", ["dummy-candidates", "election", "manipulation"],
    sx("To make an uncontested vote look competitive, the director proposes fielding 'independent' dummy candidates loyal to you — fake opposition to manufacture the look of a real race after the true opposition boycotts.",
      ["Field the dummy candidates.", "An empty stage needs painted rivals.", "The ballot fills with your own men pretending to oppose you. Observers see through it instantly, and the charade becomes shorthand for the whole farce.", { MI: 6, GL: -8, EN: -6 }],
      ["Run the real race, boycott and all.", "A staged fight fools no one and shames me.", "You let the contest be what it is — thin, but honest. The optics of a low-turnout win are bad, but not as bad as being caught faking your own opposition.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Civil service loyalty purge ─────────────────────────────────────────────
  ax("Cabinet Secretary", "official", ["bureaucracy", "purge", "patronage"],
    sx("The bureaucracy is full of officers who served the last government. The secretary offers a sweeping reshuffle — sideline the suspect, promote the loyal — to make the machine answer to you alone. Efficient — and it would gut the service's neutrality.",
      ["Purge and pack the civil service.", "A machine must answer to one hand.", "Loyalists rise and capable neutrals rot in OSD limbo. The government does as told, and the institution's professionalism bleeds out with the purged.", { MI: 8, EN: -6, GL: -6 }],
      ["Keep the service neutral and merit-based.", "A bureaucracy I gut once will fail me later.", "You promote on competence and let officers serve the office, not the person. Some will drag their feet on your worst ideas — which is rather the point.", { EN: 6, GL: 6, MI: -6 }])),

  // ── Anniversary martyr politics ─────────────────────────────────────────────
  ax("Party Historian", "official", ["history", "martyrs", "narrative"],
    sx("The anniversary of the party's founding massacre approaches. The historian wants the commemoration weaponised — every speech branding today's opposition as the heirs of the killers. It rouses the faithful and poisons the well further.",
      ["Weaponise the commemoration.", "Yesterday's blood is today's mandate.", "The speeches land like blows and the base is electrified. The opposition is painted as murderers' heirs, and any hope of national reconciliation dies on the dais.", { MI: 6, FA: 4, EN: -6, GL: -4 }],
      ["Commemorate with dignity, not as a cudgel.", "A grave is not a campaign stop.", "You honour the dead without naming the living as villains. The base wanted more fire, but the day keeps its solemnity and you keep the high ground.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Judicial bench-fixing ───────────────────────────────────────────────────
  ax("Law Minister", "official", ["judiciary", "appointments", "independence"],
    sx("Two seats on the apex court are vacant and a major case on your government's legality is pending. Elevate two reliable judges in time to hear it, or appoint on seniority and merit and let the case fall where it may?",
      ["Pack the bench before the case.", "A verdict is safest decided before the hearing.", "Your judges take their seats and the ruling goes your way. The judgment is sound on paper and stillborn in credibility; the court is now visibly yours.", { MI: 8, GL: -8, EN: -6 }],
      ["Appoint on merit, accept the risk.", "A court I own cannot protect me from the one who owns me next.", "You elevate the senior, respected names. They may rule against you, but a judiciary that can say no is the only one whose yes means anything.", { GL: 8, EN: 6, MI: -6 }])),

  // ── Grassroots revolt over local MP ─────────────────────────────────────────
  ax("District President", "people", ["grassroots", "accountability", "local"],
    sx("The grassroots of a key district are in open revolt against their sitting MP — your man — for years of arrogance and graft, and threaten to sit out the campaign. Back the incumbent and his machine, or back the workers and dump him?",
      ["Stand by the incumbent.", "A sitting MP's machine is not lightly broken.", "You back your man and the machine grinds on. The workers feel betrayed and stay home, and the seat that looked safe wobbles.", { MI: 4, FA: 2, EN: -6, GL: -2 }],
      ["Dump the MP, back the grassroots.", "A party that won't hear its base goes deaf.", "You drop the incumbent and let the workers pick. He fumes and threatens to bolt, but the district roars back to life around its own choice.", { EN: 8, MI: -4, FA: -2, GL: 2 }])),

  // ── Pension and jobs patronage ──────────────────────────────────────────────
  ax("Establishment Minister", "official", ["jobs", "patronage", "youth"],
    sx("Tens of thousands of government jobs are about to be advertised. Quietly reserve a large share for party families and youth-wing cadres — buying a generation of loyalty — or run them on open merit and let the chips fall?",
      ["Reserve the jobs for the faithful.", "A job given is a vote owned for life.", "Cadres' sons fill the rolls and a generation is bound to you. The merit-passed-over seethe, and the civil service inherits a cohort hired for loyalty, not skill.", { MI: 6, FA: 4, EN: -8, GL: -4 }],
      ["Hire on open merit.", "A government staffed by favours governs like one.", "You run a clean recruitment. The youth wing howls at the lost spoils, but you gain a competent intake and the credit for a fair process.", { EN: 8, GL: 4, FA: -4, MI: -4 }])),

  // ── The prodigal rival returns ──────────────────────────────────────────────
  ax("General Secretary", "fixer", ["reconciliation", "rivals", "unity"],
    sx("A senior leader who broke with you years ago — taking a faction with him — now seeks to return. He brings votes and organisers, but also ambition and a grudge. Welcome him back, or let him rot outside?",
      ["Welcome him back with honours.", "A returned rival fights for you, not against.", "He rejoins to fanfare, faction and all, and your numbers swell. He also resumes manoeuvring from the inside, an old knife back in the drawer.", { MI: 6, FA: -2, EN: 2, GL: 2 }],
      ["Leave him in the cold.", "A man who left once leaves twice.", "You refuse the reunion. His faction stays outside and occasionally bites, but your inner circle is spared a practised intriguer.", { FA: 4, MI: -4, EN: -2 }])),

  // ── Religious bloc's second demand ──────────────────────────────────────────
  ax("Religious Front Emissary", "cleric", ["islamist", "blasphemy", "alliance"],
    sx("The religious bloc you allied with returns for more: the public execution of a blasphemy convict and a ban on a women's rights NGO. The emissary reminds you their street power kept you standing last winter.",
      ["Concede the new demands.", "An ally's price rises with his usefulness.", "You give them the ban and the spectacle. The streets stay yours for now, but each concession shifts the country further from the constitution you swore to.", { MI: 6, FA: 2, EN: -10, GL: -10 }],
      ["Refuse and absorb their anger.", "An ally who owns my conscience is my master.", "You decline, and they threaten to turn their squares against you. The winter ahead is colder, but you have stopped feeding the thing that would devour you.", { EN: 8, GL: 8, MI: -8 }])),

  // ── Empty-house legislating ─────────────────────────────────────────────────
  ax("Leader of the House", "official", ["parliament", "boycott", "legitimacy"],
    sx("With the opposition boycotting parliament entirely, you can ram through a year's worth of contentious bills against empty benches — no debate, no scrutiny. The leader of the house calls it efficient; the press calls it one-party rule.",
      ["Pass the bills against empty benches.", "An absent opposition forfeits its say.", "Laws pour through unopposed in days. The efficiency is real and the legitimacy is gone; you have legislated alone and it shows on every statute.", { MI: 6, GL: -8, EN: -6 }],
      ["Slow down, leave room for return.", "Laws made in an empty room echo hollow.", "You hold the most divisive bills and leave the door ajar for the opposition's return. Less gets done, but parliament keeps a pulse.", { GL: 6, EN: 4, MI: -4 }])),

  // ── EVM controversy ─────────────────────────────────────────────────────────
  ax("Election Tech Adviser", "official", ["evm", "election", "trust"],
    sx("The Commission wants to roll out electronic voting machines nationwide. Your technicians can make them auditable and transparent — or quietly opaque, with no paper trail to contradict the reported count. The opposition already distrusts the boxes.",
      ["Deploy opaque machines, no paper trail.", "A count with no receipt cannot be challenged.", "The machines report whatever they report and nothing can check them. The opposition's distrust hardens into certainty, and every result is now disputed by design.", { MI: 8, GL: -8, EN: -6 }],
      ["Insist on an auditable paper trail.", "A vote no one can recount is no vote at all.", "Every machine prints a verifiable receipt. The technology stops being a conspiracy and starts being a count people might actually believe.", { GL: 8, EN: 6, FI: -4, MI: -4 }])),

  // ── Polling agent intimidation ──────────────────────────────────────────────
  ax("Field Security Chief", "shadow", ["intimidation", "polling", "agents"],
    sx("The chief proposes a quiet campaign of pressure on the opposition's polling agents in the marginals — late-night visits, false cases, families warned — so their booths go unwatched on the day. No watcher, no challenge.",
      ["Approve the intimidation campaign.", "An unwatched booth is an obedient booth.", "The agents melt away and the marginals go unobserved. The pattern is unmistakable to anyone looking, and many are looking.", { MI: 8, GL: -8, EN: -6 }],
      ["Forbid it; let their agents work.", "Fear at the booth poisons the whole well.", "You order the pressure stopped. The opposition watches every box, catches you on nothing, and the contest is cleaner than your fixers wanted.", { GL: 6, EN: 6, MI: -6 }])),

  // ── The defection of a star MP to you ───────────────────────────────────────
  ax("Chief Whip", "fixer", ["defection", "poaching", "majority"],
    sx("A charismatic opposition MP — clean, articulate, a future leader on their side — will privately cross to you for a ministry and a free hand in his district. Poaching him weakens them and strengthens you, but signals that everything is for sale.",
      ["Poach him with a ministry and a free hand.", "Their best man is better as mine.", "He crosses to fanfare and the opposition loses a future. He governs his district as a fief, and the message lands: in your house, talent is bought.", { MI: 6, FA: 2, EN: -4, GL: -4 }],
      ["Decline; let him rise where he is.", "A man I had to buy will be bought from me.", "You pass on the poach. He stays a thorn across the aisle, but your benches are not staffed by mercenaries, and your district bosses keep their turf.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Symbol and ballot order ─────────────────────────────────────────────────
  ax("Election Commission Liaison", "official", ["ballot", "symbol", "advantage"],
    sx("The liaison can rig the small things that move the illiterate vote: your symbol first on every ballot, the opposition's buried, your candidates at the top. Tiny thumbs on the scale, individually deniable, collectively decisive.",
      ["Stack the ballot in your favour.", "A small edge, multiplied by millions.", "Your symbol sits first on every paper and the marginal voter's thumb drifts your way. It is petty and effective, and observers log every tilted ballot.", { MI: 6, GL: -6, EN: -4 }],
      ["Insist on a neutral, randomised ballot.", "A win bought by ballot order is not a win.", "You order the symbols randomised and fair. You forgo a quiet edge, but the ballot itself stops being evidence against you.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Mayoral race in the capital ─────────────────────────────────────────────
  ax("City Campaign Manager", "fixer", ["mayor", "dhaka", "election"],
    sx("The capital's mayoral race is a referendum on your rule, and your candidate is a lacklustre loyalist. Pour state resources into rigging it safe, or swap in a genuinely popular outsider who might owe you less?",
      ["Rig the loyalist's win with state muscle.", "The capital cannot fall to a rival.", "Your man takes the city hall on a tide of state largesse and managed counts. He governs the capital you can no longer claim was freely won.", { MI: 6, FI: -6, GL: -6, EN: -4 }],
      ["Field a popular outsider instead.", "A mayor the city chose serves the city — and reflects on me.", "You back a candidate people actually like. He owes you little and may freelance, but a clean win in the capital buys you legitimacy money cannot.", { EN: 8, GL: 6, MI: -4, FA: -2 }])),

  // ── Hartal violence escalates ───────────────────────────────────────────────
  ax("Street Operations Coordinator", "fixer", ["hartal", "arson", "escalation"],
    sx("A renewed blockade has turned lethal — buses torched with passengers inside, a child among the dead. The coordinator wants to answer fire with fire and send your cadres to torch the opposition's offices. The cycle would consume the season.",
      ["Retaliate in kind against their offices.", "Blood answers blood, or it never stops.", "Your cadres burn back and the season descends into mutual arson. The economy seizes, the morgues fill, and both sides own the ashes.", { MI: 6, EN: -10, FI: -6, GL: -6 }],
      ["Hold your cadres; let the law pursue the arsonists.", "I will not turn a blockade into a civil war.", "You refuse to escalate and let the police hunt the bombers. The blockade still bites, but the bloodshed has only one author, and it is not you.", { GL: 6, EN: 4, MI: -4, FI: -4 }])),

  // ── Founder's legacy / mausoleum politics ───────────────────────────────────
  ax("Party Historian", "official", ["legacy", "founder", "cult"],
    sx("A grand mausoleum-museum complex for the party's founder is proposed at vast expense, the obligatory pilgrimage of every schoolchild and official. The historian calls it national memory; critics call it the cult cast in marble.",
      ["Build the grand complex.", "A founder's shrine anchors a movement forever.", "The marble rises and the pilgrimages begin. The reverence is enforced and total, and the treasury and the country's pluralism both pay for it.", { FA: 8, MI: 4, FI: -6, GL: -4 }],
      ["Fund a modest memorial instead.", "A legacy that needs a palace was never solid.", "You approve a dignified, smaller tribute. The family's elders feel slighted, but the funds and the breathing room for other histories survive.", { GL: 4, EN: 4, FI: 2, FA: -6 }])),

  // ── Labour wing and the garment vote ────────────────────────────────────────
  ax("Labour Wing Secretary", "people", ["labour", "garments", "wages"],
    sx("Your party's labour wing wants to lead the garment workers' wage agitation — a million votes if you deliver, but a collision with the factory owners who fund you. Whose side is the party really on?",
      ["Side with the factory owners.", "The cheques come from the gate, not the floor.", "You quietly throttle the wage push to keep the owners happy. The chest stays full, and a million workers learn whose party this really is.", { FI: 6, FA: 2, EN: -8, GL: -4 }],
      ["Lead the workers' wage demand.", "A million floor votes outweigh a hundred gate cheques.", "Your wing fronts the agitation and wins a real raise. The owners fume and trim their donations, but the workers' districts are yours for a generation.", { EN: 8, GL: 4, FI: -6, MI: 2 }])),

  // ── By-election as a test ───────────────────────────────────────────────────
  ax("Strategy Director", "official", ["by-election", "barometer", "risk"],
    sx("A by-election in a swing seat is a live test of your standing. Sandbag it with the usual machinery for a safe win that tells you nothing, or let it run clean as an honest barometer — and risk a humiliating loss that emboldens the opposition?",
      ["Sandbag the by-election safe.", "A loss now is a flood later.", "You secure the seat the old way and avoid the bad headline. You also blind yourself to how thin your support has worn, governing on a number you faked.", { MI: 4, GL: -4, EN: -4 }],
      ["Let it run clean as a true test.", "Better to read the ground than to pave over it.", "You run it honestly. Win or lose, you finally know where you stand — and if you lose, you learn it now, while there is time to act.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Contempt case against a critic ──────────────────────────────────────────
  ax("Law Minister", "official", ["contempt", "press", "speech"],
    sx("A prominent editor has accused your government of corruption in print. Have him hauled up for contempt and sedition, jailing him and chilling the rest — or answer the charge with evidence and let him print?",
      ["Jail the editor for contempt.", "An example silences a chorus.", "He is jailed and the newsrooms flinch. The corruption story is buried under his arrest, which becomes the bigger, longer-running scandal.", { MI: 6, FA: 2, GL: -8, EN: -6 }],
      ["Rebut him with evidence, leave him free.", "A government that answers fears nothing.", "You publish the records that refute him and let him keep printing. The base wanted him jailed, but you have won the argument instead of the arrest.", { GL: 8, EN: 6, MI: -4 }])),

  // ── Floor-crossing law ──────────────────────────────────────────────────────
  ax("Constitutional Adviser", "official", ["floor-crossing", "discipline", "law"],
    sx("Article 70 already lets you expel any MP who votes against the party line, making your benches utterly obedient. The adviser proposes tightening it further, criminalising even abstention — ending dissent, and parliament as anything but a chorus.",
      ["Tighten the law against all dissent.", "A whip with teeth needs no second crack.", "Abstention becomes career suicide and every vote is unanimous. Your benches are flawless and lifeless, a parliament that cannot think, only obey.", { MI: 6, GL: -6, EN: -6 }],
      ["Loosen it; allow conscience votes.", "An MP who cannot ever say no is not a representative.", "You permit dissent on matters of conscience. A few votes get messier, but your benches contain humans again, and the house earns a little respect.", { GL: 6, EN: 6, MI: -6 }])),

  // ── Coalition seat-sharing math ─────────────────────────────────────────────
  ax("Coalition Manager", "fixer", ["seats", "allies", "arithmetic"],
    sx("Seat-sharing talks with your allies are deadlocked. Bully the small partners into accepting scraps — keeping the lion's share for your own candidates — or share generously to keep the alliance genuinely broad and grateful?",
      ["Keep the lion's share for your own.", "An alliance is a pyramid, not a partnership.", "Your candidates get the winnable seats and the partners get crumbs. You dominate the alliance and hollow it, leaving allies who campaign at half-effort.", { MI: 6, FA: 2, EN: -4, GL: -2 }],
      ["Share seats generously with allies.", "A partner fed campaigns harder than one starved.", "You give the small parties real winnable seats. Your own count is slimmer, but the alliance pulls together and turns out as one.", { EN: 4, GL: 4, MI: -2, FA: -2 }])),

  // ── Youth-wing martyr funeral ───────────────────────────────────────────────
  ax("Student Wing President", "fixer", ["martyr", "funeral", "mobilisation"],
    sx("A youth-wing cadre has died in a clash with the opposition. The president wants a massive politicised funeral procession through the capital to inflame the base and provoke a confrontation that paints the rivals as killers.",
      ["Stage the inflammatory funeral march.", "A martyr's coffin is a recruiting drum.", "The procession swells into a riot and the rivals are branded murderers. The base burns hot, the city burns with it, and another coffin is already on its way.", { MI: 6, FA: 2, EN: -8, GL: -4 }],
      ["Hold a solemn, contained funeral.", "I will not turn a boy's grave into a battlefield.", "You give the cadre a dignified, guarded farewell. The president wanted a spectacle and a casus belli; you gave him neither, and the city stays calm.", { EN: 6, GL: 4, MI: -4 }])),

  // ── Election observer accreditation ─────────────────────────────────────────
  ax("Foreign Liaison Officer", "ambassador", ["observers", "election", "legitimacy"],
    sx("Foreign and domestic election observers have applied for accreditation. Stall and restrict them — limiting where they go and what they see — to keep the managed parts of the vote out of frame, or accredit them fully and run a vote that can bear watching?",
      ["Restrict and stall the observers.", "Witnesses are only invited to a clean house.", "The observers are penned far from the action and issue damning reports anyway. The restrictions themselves become the headline: a government afraid of being watched.", { MI: 4, GL: -8, EN: -4 }],
      ["Accredit observers fully.", "A vote that can be watched is a vote that is believed.", "You let the monitors go where they please. It forces discipline on your machinery, and the clean bill of health they give is worth a hundred press releases.", { GL: 8, EN: 4, MI: -4 }])),

  // ── Anti-corruption commission as a weapon ──────────────────────────────────
  ax("Anti-Graft Commission Chair", "official", ["acc", "lawfare", "selective"],
    sx("The graft watchdog is yours to aim. The chair awaits a target list: pursue only the opposition and your clean rivals, or let the Commission investigate without fear or favour — including, inevitably, your own ministers.",
      ["Aim the Commission at rivals only.", "An investigator off the leash bites the master.", "The watchdog hounds your enemies and ignores your friends. It is devastatingly useful and visibly partisan, and your own grafters learn they are untouchable.", { MI: 6, FA: 4, GL: -8, EN: -6 }],
      ["Let it investigate without favour.", "A watchdog that only bites the neighbour guards nothing.", "You unleash it on all comers, your side included. A few ministers fall and the base panics, but the Commission gains teeth the public actually trusts.", { GL: 8, EN: 8, MI: -6, FA: -6 }])),

  // ── Removing the caretaker provision for good ───────────────────────────────
  ax("Constitutional Adviser", "official", ["caretaker", "constitution", "power"],
    sx("You can amend away the caretaker-government provision permanently, ensuring every future election is held under a sitting government — yours, for now. It locks in a structural advantage forever — and the grievance that fuels every boycott.",
      ["Abolish the caretaker system for good.", "Why concede each election what I can settle once?", "The amendment passes and the advantage is permanent. So is the opposition's casus belli; every future poll now inherits this original sin.", { MI: 8, GL: -8, EN: -6 }],
      ["Preserve a neutral caretaker mechanism.", "A rule that survives me protects me from my successors.", "You keep — or restore — a neutral poll-time authority. You surrender a structural edge, but you drain the poison from every election to come.", { GL: 8, EN: 6, MI: -6 }])),

  // ── The party's black-money campaign chest ──────────────────────────────────
  ax("Party Treasurer", "shadow", ["funding", "black-money", "audit"],
    sx("Most of the campaign chest is undeclared cash from sources best left unexamined. An election audit looms. The treasurer can launder the trail through shell foundations, or you can declare a clean, smaller chest and fight poorer but legal.",
      ["Launder the chest through shells.", "Money has no smell once it is washed.", "The cash is scrubbed and the audit finds nothing — for now. The shells are a time bomb, and the day one bursts it takes a cabinet with it.", { FI: 6, MI: 2, GL: -6, EN: -4 }],
      ["Declare a clean, smaller chest.", "A washed rupee still stains the hand that spent it.", "You run on declared money and fight the campaign lean. The shortfall hurts at every rally, but no laundering scandal waits in your second term.", { GL: 6, EN: 4, FI: -6 }])),

  // ── Reservation in nominations for the family circle ────────────────────────
  ax("Party Elders' Council", "official", ["dynasty", "nepotism", "nominations"],
    sx("The extended family — cousins, in-laws, the founder's grandchildren — all want safe seats this cycle. The council frames it as keeping the bloodline central. The reformers warn the ballot is starting to look like a family reunion.",
      ["Hand safe seats to the family circle.", "Blood holds when everything else bends.", "The relatives are slotted into winnable seats. The dynasty's grip tightens, and the photo of the new parliamentary party looks like a wedding album.", { FA: 8, MI: 2, EN: -6, GL: -4 }],
      ["Limit the family to a few, open the rest.", "A party of cousins has no roots.", "You cap the relatives and open seats to organisers. The family is wounded and loud, but the benches gain people the wards chose.", { EN: 6, GL: 4, FA: -8, MI: -2 }])),

  // ── Indigenous and hill-tracts vote ─────────────────────────────────────────
  ax("Hill Affairs Convenor", "official", ["cht", "indigenous", "accord"],
    sx("The hill peoples will back you if you finally implement the long-stalled peace accord — land rights, troop drawdown, autonomy. The settlers and the army want the accord buried. The convenor says you cannot satisfy both.",
      ["Side with the settlers and the army.", "The plains vote outnumbers the hills.", "You shelve the accord again. The garrisons and settlers are pleased, and the hills add another broken promise to a decades-long ledger of them.", { MI: 4, FA: 2, EN: -8, GL: -4 }],
      ["Implement the accord for the hill peoples.", "A promise twenty years deferred is a wound.", "You move on land rights and a partial drawdown. The army and settlers resist hard, but the hills, for once, see the state keep its word.", { EN: 8, GL: 6, MI: -6, FA: -2 }])),

  // ── Result announcement timing ──────────────────────────────────────────────
  ax("Returning Officer Coordinator", "official", ["results", "count", "delay"],
    sx("The count is in and tighter than hoped. The coordinator can delay the announcement overnight to 'reconcile' the close seats — adjusting where needed — or declare the results as counted, the moment they are ready, blemishes and all.",
      ["Delay to 'reconcile' the close seats.", "A few hours buys a comfortable margin.", "The overnight delay yields a tidier result and an obvious one. The gap between the late seats and the rest tells its own story to anyone counting.", { MI: 6, GL: -6, EN: -4 }],
      ["Announce results as counted.", "A count that needs the night to fix was never counted.", "You declare on schedule, narrow margins and all. Governing the thinner majority is harder, but the result lands before anyone can call it cooked.", { GL: 6, EN: 4, MI: -4 }])),

  // ── The aging leader's own succession ───────────────────────────────────────
  ax("Personal Physician", "doctor", ["succession", "health", "dynasty"],
    sx("Your own health is failing faster than the public knows. The physician urges you to name and groom a successor now, while you can shape the transition — but doing so makes you a lame duck the moment it is announced.",
      ["Conceal it; rule as though immortal.", "A wounded king shows no blood.", "You hide the decline and grip the wheel. The succession stays unsettled, and the day the truth breaks the party will tear itself apart over a vacuum.", { MI: 4, FA: 2, EN: -4, GL: -2 }],
      ["Name and groom a successor now.", "A transition I design beats one fought over my bed.", "You begin the handover on your own terms. Your authority ebbs the moment you announce, but the dynasty gains a real chance of surviving you.", { FA: 6, GL: 4, EN: 4, MI: -6 }])),

  // ── Recount demand in a flagship seat ───────────────────────────────────────
  ax("Election Commission Liaison", "official", ["recount", "dispute", "credibility"],
    sx("The opposition demands a recount in a flagship seat your candidate narrowly 'won'. Refuse on a technicality and let the result stand, or grant a transparent recount that might overturn the seat and dent your majority?",
      ["Refuse the recount on a technicality.", "A win declared is a win kept.", "You deny the recount and the seat stands, disputed forever. The technicality fools no one, and the seat becomes a permanent symbol of the stolen vote.", { MI: 4, GL: -6, EN: -4 }],
      ["Grant a transparent recount.", "A seat that survives a recount is truly mine.", "You allow the recount under cameras. You may lose the seat, but the seats you keep are now unassailable, and the gesture buys rare goodwill.", { GL: 6, EN: 6, MI: -4 }])),

  // ── National-day narrative ──────────────────────────────────────────────────
  ax("Information Minister", "official", ["history", "national-day", "narrative"],
    sx("The national-day broadcasts are yours to script. Rewrite the founding story to centre your family and erase rivals' contributions — cementing the dynasty as the nation's sole author — or tell an inclusive history that shares the credit?",
      ["Rewrite history around the family.", "He who tells the founding owns the nation.", "The broadcasts crown your lineage as the sole begetter of the republic. Historians wince, rivals' heirs seethe, and the cult deepens by another generation.", { FA: 6, MI: 2, EN: -6, GL: -4 }],
      ["Tell an inclusive founding story.", "A nation with one father is an orphan of the rest.", "You share the credit across the founding generation. The family's mythmakers are disappointed, but the story gains the ring of truth and the nation's buy-in.", { GL: 6, EN: 6, FA: -6 }])),

  // ── Police recruitment by loyalty ───────────────────────────────────────────
  ax("Inspector-General of Police", "general", ["police", "recruitment", "loyalty"],
    sx("A fresh police intake is being recruited. The IGP can vet candidates for party loyalty — building a force personally bound to you — or recruit on merit and physical standards, building a force bound to the law.",
      ["Recruit for loyalty to you.", "A force that loves me will never aim at me.", "Loyalists fill the ranks and the force becomes a praetorian guard. It will protect you faithfully — until the day loyalty to a person costs it the public's last trust.", { MI: 8, EN: -6, GL: -4 }],
      ["Recruit on merit and standards.", "A police that serves the law outlasts the one that serves me.", "You insist on a professional intake. The new constables answer to the badge, not your name — less pliable, but a force the public might one day respect.", { EN: 6, GL: 4, MI: -4 }])),

  // ── Defection rumours in your own cabinet ───────────────────────────────────
  ax("Intelligence Chief", "shadow", ["cabinet", "plot", "loyalty"],
    sx("Whispers reach you that two senior ministers are quietly sounding out the army and the opposition about a post-you future. Surveil them for proof, or confront them in the open and force their hand?",
      ["Surveil and quietly neutralise them.", "A plot is best killed in the cradle.", "You wiretap, gather leverage, and break them with it. The plot dies, but so does trust in your cabinet, where every minister now assumes he too is bugged.", { MI: 6, FA: -2, EN: -4, GL: -4 }],
      ["Confront them openly, demand loyalty.", "Daylight scatters conspirators.", "You face them down in front of the cabinet. The gamble forces a public reaffirmation of loyalty, and the cabinet sees a leader who fights in the open, not the shadows.", { FA: 4, GL: 4, EN: 2, MI: -4 }])),

  // ── The graft scandal that touches the family ───────────────────────────────
  ax("General Secretary", "fixer", ["scandal", "family", "corruption"],
    sx("A corruption scandal has surfaced that leads, unmistakably, to a member of your own family. Bury it with the usual machinery, or let an inquiry proceed and accept the wound to the dynasty's image?",
      ["Bury the scandal.", "Blood is not investigated.", "The file vanishes and the family is shielded. The cover-up leaks in pieces, and 'one law for them' becomes the opposition's favourite chant.", { FA: 6, MI: 2, GL: -8, EN: -8 }],
      ["Let the inquiry proceed.", "A dynasty above the law is a dynasty without one.", "You allow the investigation, family or not. The relative is furious and the household tense, but the public sees, astonished, that the rules might apply to everyone.", { GL: 8, EN: 8, FA: -8, MI: -2 }])),

  // ── Manifesto promises vs deliverable reality ───────────────────────────────
  ax("Manifesto Committee Chair", "official", ["manifesto", "promises", "credibility"],
    sx("The next manifesto is being drafted. Load it with extravagant, undeliverable promises that thrill crowds and win the cycle — or write a sober, costed platform that under-promises and can actually be kept?",
      ["Promise the moon to win the cycle.", "A campaign is won on dreams, not spreadsheets.", "The crowds roar at free electricity and a job for every graduate. You win, then spend the term explaining why the moon is still in the sky.", { MI: 4, EN: -4, GL: -4, FI: -2 }],
      ["Write a sober, deliverable manifesto.", "A promise kept is worth ten promises made.", "You run on what you can actually do. The rallies are less electric, but every pledge you redeem next term compounds into trust.", { EN: 6, GL: 6, MI: -2 }])),

  // ── Crackdown on a student protest your wing provoked ───────────────────────
  ax("Student Wing President", "fixer", ["students", "protest", "blame"],
    sx("Your student wing attacked a peaceful protest on campus, and the footage is everywhere. The president wants you to back the cadres and blame 'outside agitators'; the reformers want the attackers disciplined and an apology.",
      ["Back the cadres, blame outsiders.", "I do not abandon my own to a mob's verdict.", "You defend the indefensible and the lie collapses on contact with the video. The campuses unite against you, and the wing learns it can attack with impunity.", { MI: 4, FA: 2, EN: -10, GL: -6 }],
      ["Discipline the attackers, apologise.", "A wing that beats students is a liability, not an asset.", "You suspend the cadres and apologise to the campus. The wing president seethes at the betrayal, but the wider student body, stunned, lowers its guard.", { EN: 8, GL: 4, MI: -4, FA: -2 }])),

  // ── The opposition's olive branch ───────────────────────────────────────────
  ax("Elder Statesman", "official", ["dialogue", "opposition", "reconciliation"],
    sx("Through a respected intermediary, the opposition offers talks: end the boycott and accept your term, in exchange for electoral reforms and the release of jailed activists. The hardliners call it a trap; the statesman calls it the only exit from a deepening crisis.",
      ["Refuse the talks, govern alone.", "I do not negotiate with those I have already beaten.", "You spurn the overture and rule unchallenged on paper. The crisis hardens underground, and the legitimacy gap you could have closed widens instead.", { MI: 6, GL: -8, EN: -6 }],
      ["Open talks and trade reforms for peace.", "A rival at the table is not a rival in the street.", "You negotiate, free some activists, and concede real reforms. The hardliners howl betrayal, but the country exhales, and your rule gains a legitimacy force never bought it.", { GL: 8, EN: 8, MI: -8 }])),

  // ── Party congress power-grab ───────────────────────────────────────────────
  ax("General Secretary", "fixer", ["congress", "rules", "control"],
    sx("At the upcoming party congress you can rewrite the internal rules to abolish elections for the top posts — appointing the leadership from above forever. The Secretary calls it stability; the cadres would call it the death of the party's last democracy.",
      ["Abolish internal elections.", "A party that votes on its head invites a coup.", "The top posts become appointments and dissent within the party dies. You command total control of a machine that no longer argues — or thinks.", { MI: 6, FA: 2, EN: -6, GL: -4 }],
      ["Keep internal elections alive.", "A party that cannot choose its own leaders cannot lead a country.", "You preserve the internal vote. It means occasional surprises and rivals you did not pick, but the party stays a living thing with roots that hold.", { EN: 6, GL: 4, MI: -4 }]),
    sx("With the rules settled, a charismatic provincial leader has won a groundswell of delegates and could challenge your chosen slate on the congress floor. Disqualify him on a procedural pretext, or let the floor decide?",
      ["Disqualify him on a pretext.", "A challenge unanswered is a challenge avoided.", "He is ruled ineligible and the slate passes unopposed. The delegates who backed him go home bitter, and the province cools toward you for a generation.", { MI: 4, FA: 2, EN: -6, GL: -2 }],
      ["Let the floor decide.", "A leader the delegates chose serves stronger than one I imposed.", "You let the contest run. He may win a post you did not plan to give, but the congress crackles with real life and the province feels seen.", { EN: 6, GL: 4, FA: -2, MI: -4 }])),

  // ── Defamation suits as a strategy ──────────────────────────────────────────
  ax("Legal Affairs Secretary", "official", ["defamation", "press", "intimidation"],
    sx("The secretary proposes blanketing critical journalists and opposition figures with dozens of defamation suits across distant districts — not to win, but to bury the targets in travel, lawyers, and fear. It is harassment dressed as law.",
      ["Launch the blanket defamation suits.", "A man in court has no time to campaign.", "The critics drown in hearings across the country, exhausted and broke. The tactic is transparent, and 'judicial harassment' becomes the verdict on your rule abroad.", { MI: 4, GL: -8, EN: -6 }],
      ["Forbid the lawfare campaign.", "A law used as a club is no longer a law.", "You order the suits dropped. Your critics keep their freedom and their venom, but you are spared a reputation as a man who litigates dissent into silence.", { GL: 6, EN: 6, MI: -4 }]),
    sx("One suit went ahead anyway, filed by an overzealous local leader, and a young reporter now sits in jail awaiting a hearing months away — a national embarrassment. Let it grind on, or intervene to free her?",
      ["Let the case grind on.", "To intervene is to admit the suit was mine.", "You stay out and she stays in. Her detention becomes a cause célèbre, every passing week a fresh indictment of your tolerance for it.", { MI: 2, GL: -6, EN: -6 }],
      ["Intervene to free her.", "A jailed reporter is a wound I can still close.", "You quietly secure her release and rein in the local leader. The base mutters about weakness, but the embarrassment ends and a small debt of goodwill is repaid.", { GL: 6, EN: 6, MI: -2 }])),

  // ── Constituency gerrymander ────────────────────────────────────────────────
  ax("Delimitation Commissioner", "official", ["gerrymander", "constituencies", "advantage"],
    sx("The constituency boundaries are due for redrawing, and the commissioner can pack your opponents into a few seats and spread your voters thinly across many — a quiet, permanent advantage few will notice and none can easily prove.",
      ["Gerrymander the boundaries to your advantage.", "A map drawn well wins seats before a vote is cast.", "The new map quietly tilts a dozen seats your way for a generation. The psephologists notice and cry foul, but the lines are set and the advantage banked.", { MI: 6, GL: -6, EN: -4 }],
      ["Redraw the boundaries fairly on population.", "A rigged map is a confession printed in ink.", "You insist on a neutral, population-based redraw. You forgo a structural edge, but the electoral map stops being one more piece of evidence against you.", { GL: 6, EN: 4, MI: -4 }])),

  // ── New districts for patronage ─────────────────────────────────────────────
  ax("Administrative Reforms Secretary", "fixer", ["districts", "patronage", "spending"],
    sx("Local leaders clamour for their upazilas to be upgraded into full districts — a cascade of new offices, jobs, and contracts to hand out. The secretary calls it development; the treasury calls it a patronage machine paid for by everyone.",
      ["Create the new districts.", "A new district is a thousand new favours to grant.", "You carve out the new districts and the patronage flows. Local bosses are delighted, and the bloated administration becomes one more permanent cost the budget never planned for.", { FA: 6, MI: 2, FI: -6, EN: -4 }],
      ["Refuse the administrative inflation.", "I will not buy loyalty by the district.", "You decline the upgrades. The disappointed local leaders sulk and some turn cold, but the state is spared a fresh layer of offices built purely to be staffed with friends.", { FI: 6, GL: 2, FA: -6 }])),

  // ── Patronage relief cards ──────────────────────────────────────────────────
  ax("Relief Distribution Coordinator", "fixer", ["patronage", "relief-cards", "votes"],
    sx("The food-relief and old-age allowance cards are distributed through your MPs, who hand them to loyalists and withhold them from opposition wards. The coordinator can keep the cards as a political weapon, or move to neutral, needs-based distribution.",
      ["Keep the relief cards as patronage.", "A card given is a vote owed.", "The cards stay a tool of loyalty, rewarding your wards and starving the rest. The machine hums, and the genuinely hungry in the wrong wards learn that relief here wears a party colour.", { FA: 6, MI: 2, EN: -8, GL: -4 }],
      ["Move to neutral needs-based distribution.", "Hunger does not check a voter card.", "You strip the cards from the MPs and route them by need. Your local leaders lose a lever and rage, but the relief reaches the poorest regardless of how they vote.", { EN: 8, GL: 4, FA: -6 }])),

  // ── City Corporation election ───────────────────────────────────────────────
  ax("City Campaign Manager", "fixer", ["city", "election", "local"],
    sx("A clutch of city corporation elections looms — second-order contests that nonetheless read as a verdict on your rule. The manager can rig them quietly safe, or let them run clean as a controlled test of your real support in the towns.",
      ["Rig the city elections quietly.", "No verdict against me, however small, can stand.", "You secure the cities the old way. The wins are hollow and the pattern noted, and you blind yourself to how the towns truly feel about you.", { MI: 4, GL: -6, EN: -4 }],
      ["Let the city votes run clean.", "A town honestly won tells me where I stand.", "You let the corporations vote freely. You lose a few mayoralties, but the honest results give you a true map of your support and a credibility the rigged wins never had.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Census and delimitation freeze ──────────────────────────────────────────
  ax("Statistics Bureau Director", "official", ["census", "data", "manipulation"],
    sx("The census underpins everything — seats, funds, quotas — and the director hints the headcounts in key regions could be 'adjusted' to favour your strongholds. Honest numbers might cost you seats and subsidies; cooked ones poison every plan built on them.",
      ["Adjust the census in your favour.", "Numbers serve the state, and I am the state.", "You tilt the headcounts toward your strongholds. The seats and funds flow your way, and every policy built on the false figures — schools, clinics, rations — is quietly misallocated for a decade.", { MI: 6, FI: 2, EN: -8, GL: -4 }],
      ["Insist on an honest census.", "A nation that lies to itself in numbers cannot plan.", "You demand accurate counts whatever they cost you. Some strongholds shrink on paper and lose seats, but the data the whole state relies on is finally trustworthy.", { GL: 6, EN: 6, MI: -4 }])),

  // ── Freedom-fighter quota ───────────────────────────────────────────────────
  ax("Liberation Affairs Secretary", "official", ["quota", "freedom-fighters", "merit"],
    sx("The civil-service quota for descendants of liberation-war veterans — a third of all posts — was the spark of a national uprising. The secretary asks whether to defend it as honouring the founders, or reform it toward merit to defuse the youth's fury.",
      ["Defend the full veterans' quota.", "The children of those who bled deserve the state they built.", "You keep the quota intact and honour the founding generation. Your base of veterans' families is loyal, but the merit-starved youth seethe, and the next spark may be larger.", { FA: 4, MI: 2, EN: -8, GL: -4 }],
      ["Reform the quota toward merit.", "A republic staffed by birthright is no republic.", "You slash the hereditary quota and open posts to merit. The veterans' lobby feels betrayed, but a generation of frustrated youth sees, astonished, that the state heard them.", { EN: 8, GL: 6, FA: -6, MI: -2 }])),

  // ── Student union elections ─────────────────────────────────────────────────
  ax("Education Affairs Secretary", "fixer", ["students", "union", "democracy"],
    sx("The campus student-union elections have not been held in decades, leaving the halls to your wing's unelected enforcers. Restoring real elections would democratise the campuses — and likely cost your wing its iron grip on them.",
      ["Keep the student elections suspended.", "An unelected wing is a controlled wing.", "You leave the campuses to your appointed enforcers. The grip holds, but a generation graduates having never voted, learning democracy as something that happens to other people.", { MI: 6, EN: -6, GL: -4 }],
      ["Restore real student-union elections.", "Democracy unlearned on campus is unlearned for life.", "You bring back the campus vote. Your wing may lose its monopoly to independents and rivals, but the campuses come alive and a generation practises the franchise.", { EN: 8, GL: 6, MI: -6 }])),

  // ── Pir / spiritual endorsement ─────────────────────────────────────────────
  ax("Religious Outreach Coordinator", "cleric", ["pir", "endorsement", "rural"],
    sx("A revered spiritual leader with millions of rural followers offers his endorsement — and his flock's votes — in exchange for state patronage for his shrine network and a blind eye to its finances. The coordinator says his word moves whole districts.",
      ["Take the pir's endorsement and his price.", "His word turns out the countryside.", "You strike the bargain and his followers swing your way. The shrine network fattens on state favour beyond any audit, and you have rented a bloc you do not control.", { MI: 6, FA: 2, FI: -2, EN: -4 }],
      ["Decline to trade patronage for a flock.", "A vote bought through a pir is a vote I never truly hold.", "You pass on the deal. The rural bloc stays unmobilised for you and the pir cools, but you owe no shadowy shrine-empire a debt it will one day call in.", { GL: 4, EN: 2, MI: -4 }])),

  // ── Tea-garden labour vote ──────────────────────────────────────────────────
  ax("Labour Wing Organiser", "people", ["tea-garden", "labour", "wages"],
    sx("The tea-garden workers — a captive, impoverished bloc bonded to the estates for generations — could be yours if you championed their derisory daily wage. But the estate owners are old donors who deliver the gardens' votes wholesale, their way.",
      ["Keep the estate owners onside.", "The gardens vote as the owners say.", "You leave the bonded wage untouched to keep the owners happy. The estates deliver their votes as instructed, and a quarter-million workers stay trapped at a wage from another century.", { FI: 2, FA: 4, EN: -8 }],
      ["Champion the tea workers' wage.", "A bonded vote is no foundation; a freed one is.", "You back a real wage rise for the garden workers. The owner-donors retaliate with shut wallets, but the workers, stunned to be seen, become a bloc loyal to you and not the estate.", { EN: 8, FA: -4, FI: -4 }])),

  // ── Proportional representation debate ──────────────────────────────────────
  ax("Electoral Reform Adviser", "official", ["pr", "system", "reform"],
    sx("Reformers and small parties demand proportional representation to end the winner-takes-all distortions that hand you huge majorities on minority votes. The adviser notes PR is fairer — and would shrink your dominance to its true, modest size.",
      ["Keep the first-past-the-post system.", "Why trade a landslide for a coalition?", "You preserve the system that magnifies your seats. The majorities stay commanding and the small parties shut out, and the gap between your seat count and your vote share stays a standing grievance.", { MI: 4, GL: -4, EN: -2 }],
      ["Move toward proportional representation.", "A parliament that mirrors the vote is the only honest one.", "You back a shift toward PR. Your dominance shrinks to its real proportion and coalition-building becomes the norm, but parliament finally reflects how the country actually voted.", { GL: 6, EN: 6, MI: -6 }])),

  // ── Breakaway faction ───────────────────────────────────────────────────────
  ax("General Secretary", "fixer", ["split", "faction", "discipline"],
    sx("A heavyweight regional leader threatens to break away and form a rival party, taking a chunk of your organisation with him. Crush him pre-emptively with expulsions and cases, or accommodate his demands to keep the tent whole?",
      ["Crush him before he can split.", "A breakaway strangled in the cradle never breathes.", "You expel him and bury him in cases before he can organise. The split is averted by force, and every ambitious leader learns the cost of independent thought.", { MI: 6, FA: 2, EN: -6, GL: -4 }],
      ["Accommodate him to keep unity.", "A tent that loses a pole sags everywhere.", "You meet his demands and keep him inside. Unity holds, but you have shown that a credible threat to leave is the surest way to win concessions from you.", { FA: 4, MI: -2, EN: 2 }])),

  // ── Alliance with a leftist party ───────────────────────────────────────────
  ax("Coalition Manager", "official", ["alliance", "left", "ideology"],
    sx("A small but disciplined leftist party offers an alliance — useful street muscle and intellectual credibility — but its price is a swing left on labour, land, and privatisation that would spook your business donors. Muscle, or money?",
      ["Ally with the left, swing on policy.", "Their cadres and credibility are worth a tilt.", "You bring the left in and shift your platform toward labour and land. The donors grumble and some drift, but you gain disciplined organisers and a sheen of conviction.", { EN: 6, MI: 2, FI: -4, FA: -2 }],
      ["Keep the donors, decline the left.", "Ideas do not fund campaigns; businessmen do.", "You pass on the alliance to keep your business backers content. The money stays, but you forgo the street muscle and the credibility, and the left turns its energy against you.", { FI: 6, FA: 2, EN: -4 }])),

  // ── War-criminal party ban ──────────────────────────────────────────────────
  ax("Tribunal Prosecutor", "official", ["banning", "collaborators", "1971"],
    sx("You can move to ban outright the religious party whose leaders collaborated in the 1971 atrocities — a genuine reckoning that also conveniently removes an opposition ally. The line between justice and political weapon is thin here.",
      ["Ban the collaborators' party.", "A party born of atrocity forfeits its place.", "You dissolve the party and its symbol. The base roars at the reckoning, and the opposition loses an ally — but critics note how neatly justice served your politics, and the banned go underground.", { MI: 6, FA: 2, EN: 2, GL: -4 }],
      ["Let it stand and defeat it politically.", "A martyr-party banned outlives a beaten one.", "You leave the party legal and fight it at the ballot. It survives to needle you, but you deny it the banner of victimhood and keep the moral high ground over a real reckoning.", { GL: 6, EN: 2, MI: -4 }])),

  // ── TR/KABIKHA rural works ──────────────────────────────────────────────────
  ax("Rural Development Coordinator", "fixer", ["rural-works", "patronage", "graft"],
    sx("The rural food-for-work and infrastructure funds are channelled through MPs who skim them and steer the projects to their own villages. Keep the lucrative system, or route the funds through transparent local government?",
      ["Keep the funds in the MPs' hands.", "An MP without projects to give is an MP without friends.", "You leave the rural funds with your MPs. They build where it buys loyalty and skim the rest, and the genuinely needy villages with the wrong MP go without.", { FA: 6, MI: 2, EN: -6, FI: -2 }],
      ["Route funds through local government.", "Roads should follow need, not the member's whim.", "You hand the funds to elected local bodies with audits. The MPs lose a prized lever and resent it, but the works spread by need and the skim shrinks.", { EN: 8, GL: 4, FA: -6 }])),

  // ── Imam and mosque-committee patronage ─────────────────────────────────────
  ax("Religious Affairs Secretary", "cleric", ["mosques", "imams", "influence"],
    sx("The state can fund imam allowances and pack the mosque management committees with your loyalists — turning the Friday pulpit into a quiet ally — or keep the mosques independent. The secretary says the pulpit moves more votes than any rally.",
      ["Capture the mosque committees.", "He who befriends the pulpit befriends the faithful.", "You fund the imams and stack the committees with loyalists. The Friday sermons soften toward you, and the mosques become one more institution bent to the party's will.", { MI: 6, FA: 2, EN: -4, GL: -4 }],
      ["Keep the mosques independent.", "A pulpit I own is a pulpit no one believes.", "You leave the mosque committees free. You forgo the pulpit's quiet endorsement, but the faith keeps a distance from the party that lends its eventual support real weight.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Sedition over a slogan ──────────────────────────────────────────────────
  ax("Law Minister", "official", ["sedition", "speech", "opposition"],
    sx("The opposition's new rally chant mocks you savagely, and the minister can charge its authors with sedition — jailing them and chilling the streets — or laugh it off and let a slogan be a slogan.",
      ["Charge the chant's authors with sedition.", "Mockery, unanswered, becomes contempt.", "You jail the sloganeers and the chant becomes infamous, sung at every rally now in defiance. The heavy hand turns a jingle into a movement and you into its punchline.", { MI: 4, FA: 2, EN: -8, GL: -6 }],
      ["Laugh the slogan off.", "A leader who jails a chant has already lost to it.", "You wave the mockery away with a joke of your own. The chant loses its charge for want of a martyr, and you look, for once, bigger than your critics.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Truth commission on the past regime ─────────────────────────────────────
  ax("Justice Reform Adviser", "official", ["truth-commission", "reckoning", "past"],
    sx("Pressure mounts for a truth commission into the abuses of the previous government — a genuine reckoning that would also, inconveniently, set a precedent for examining yours one day. How far do you let it look?",
      ["Launch a far-reaching truth commission.", "A nation that cannot face its past repeats it.", "You establish a real commission with teeth. The past regime's crimes are aired and victims heard, and you accept that the same mirror may one day be turned on you.", { GL: 8, EN: 6, MI: -4 }],
      ["Keep any inquiry narrow and controlled.", "A precedent for digging up the dead is a shovel for my own grave.", "You permit only a toothless, bounded review. The reckoning is stage-managed, the precedent contained, and the victims learn the truth was never really on offer.", { MI: 4, FA: 2, EN: -4, GL: -4 }])),

  // ── Campaign finance disclosure ─────────────────────────────────────────────
  ax("Election Commission Liaison", "official", ["finance", "disclosure", "transparency"],
    sx("A proposed law would force every party and candidate to disclose donors and spending — sunlight that cleans the system and exposes your own opaque, oversized war chest. Back it, or quietly bury it?",
      ["Bury the disclosure law.", "A war chest examined is a war chest disarmed.", "You quietly kill the bill. Your funding stays in the dark, and so does everyone's, and the suspicion that elections here are simply bought hardens into common knowledge.", { FI: 2, FA: 2, EN: -6, GL: -4 }],
      ["Back full campaign-finance disclosure.", "Money in daylight buys less than money in shadow.", "You support the sunlight law. Your own opaque chest faces scrutiny, but the system gains a check it never had, and you can claim a reform your rivals resisted.", { GL: 6, EN: 6, FI: -4 }])),

  // ── Lowering the voting age ──────────────────────────────────────────────────
  ax("Strategy Director", "official", ["youth", "voting-age", "franchise"],
    sx("Reformers propose lowering the voting age to capture the vast, restless youth cohort. The director's polling says the young lean against you after the quota unrest — so enfranchising them is democratic, and electorally dangerous.",
      ["Lower the voting age.", "A franchise widened is a democracy deepened.", "You enfranchise the youth despite their coolness toward you. It wins democratic credit at home and abroad, and you have handed the vote to a generation that may use it against you.", { GL: 6, EN: 6, MI: -4 }],
      ["Keep the voting age as it is.", "I will not arm a cohort that means to vote me out.", "You decline the reform. The status quo protects you from a hostile bloc, and the young add 'denied the vote' to a lengthening list of grievances against you.", { MI: 2, FI: 2, GL: -4, EN: -2 }])),

  // ── Opposition leader's official status ─────────────────────────────────────
  ax("Parliamentary Affairs Minister", "official", ["opposition", "status", "norms"],
    sx("With a real opposition finally in parliament, you can grant its leader the traditional status, perks, and consultative role — a sign of a maturing democracy — or strip the position bare to keep your rival small and dependent.",
      ["Strip the opposition leader's role bare.", "A rival with a chair is a rival with a stage.", "You hollow out the opposition leadership's perks and powers. Your rival is diminished, and parliament drifts further from the adversarial democracy it pretends to be.", { MI: 4, GL: -4, EN: -4 }],
      ["Grant the opposition its proper status.", "A loyal opposition is the proof a democracy works.", "You afford your rival the traditional standing and consultation. It legitimises an adversary, but it also legitimises the whole house, and the maturity is noticed abroad.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Anniversary of a massacre ───────────────────────────────────────────────
  ax("Reconciliation Adviser", "official", ["reconciliation", "history", "wounds"],
    sx("The anniversary of a dark episode your party once perpetrated approaches. Offer a genuine acknowledgment and apology that could begin to heal an old wound, or keep the usual silence that lets sleeping guilt lie?",
      ["Acknowledge and apologise.", "A wound named can finally close.", "You offer a genuine acknowledgment of the old wrong. The base is uneasy and hardliners furious, but victims long ignored feel seen, and a festering grievance begins, at last, to heal.", { GL: 6, EN: 6, FA: -4 }],
      ["Keep the customary silence.", "An apology is an admission, and admissions are weapons.", "You let the anniversary pass unmarked. The party is spared an admission, and the unhealed wound goes on poisoning the well between you and those who remember.", { FA: 4, MI: 2, EN: -6, GL: -4 }])),

  // ── Remote-area polling logistics ───────────────────────────────────────────
  ax("Election Logistics Officer", "official", ["remote", "polling", "access"],
    sx("In the far chars, haors, and hills, reaching every voter with a polling station is costly and slow — and those remote areas lean against you. Fund full access for all, or quietly let the awkward, hostile pockets go under-served?",
      ["Under-serve the hostile remote pockets.", "Why spend a fortune to be voted against?", "You quietly thin the polling stations in the remote, unfriendly areas. Turnout there collapses for want of access, and the disenfranchisement, once noticed, becomes a quiet scandal.", { MI: 2, GL: -4, EN: -6 }],
      ["Fund full access for every voter.", "A citizen unreachable by the ballot is a citizen abandoned.", "You pay to reach every char and hill with a polling station. It costs dearly and may not help your numbers, but no Bangladeshi is denied the vote by geography on your watch.", { EN: 8, GL: 6, FI: -4 }])),

  // ── Bicameral upper house ───────────────────────────────────────────────────
  ax("Constitutional Adviser", "official", ["bicameral", "senate", "structure"],
    sx("A proposal floats to create an appointed upper house — billed as a chamber of elders and expertise, but in practice a soft landing for loyalists and a brake on any future reformist lower house. The adviser asks whether to build it.",
      ["Create the appointed upper house.", "A second chamber of friends is a second line of defence.", "You establish the upper house and pack it with loyalists. It rewards the faithful and checks any unruly future majority, and critics rightly call it a parking lot for cronies.", { FA: 6, MI: 4, EN: -4, GL: -4 }],
      ["Reject the appointed chamber.", "A house of cronies is not a check; it is a couch.", "You decline to build a chamber of appointees. You forgo a tool of patronage and control, but you avoid bolting a permanent crony-park onto the constitution.", { GL: 4, EN: 4, FA: -6 }])),

  // ── Election-day violence compensation ──────────────────────────────────────
  ax("Home Affairs Coordinator", "people", ["violence", "compensation", "victims"],
    sx("Election-day clashes — some sparked by your own cadres — have left dozens dead and hundreds injured across the country. The coordinator asks whether to pay full, public compensation and investigate, or quietly pay off a few and move on.",
      ["Pay full compensation and investigate.", "Blood spilled at the ballot is the state's debt.", "You compensate the victims openly and order real investigations, your own cadres included. The party is uneasy at the scrutiny, but the dead are honoured and the violence's authors face daylight.", { EN: 8, GL: 6, FA: -4 }],
      ["Quietly pay off a few, move on.", "A long inquiry only keeps the bodies in the news.", "You settle a handful of cases discreetly and let the rest fade. The headlines pass, the cadres learn there is no reckoning, and the families of the unacknowledged dead nurse a lasting grievance.", { FA: 4, MI: 2, EN: -6, GL: -4 }])),

  // ── Foreign campaign consultants ────────────────────────────────────────────
  ax("Campaign Data Director", "shadow", ["data", "micro-targeting", "consultants"],
    sx("A slick foreign consultancy offers to harvest the population's data and micro-target voters with tailored manipulation — the dark arts that have swung elections elsewhere. The director is dazzled; the catch is a scandal if the data harvesting ever leaks.",
      ["Hire the data-manipulation consultants.", "The other side will, if I do not.", "You bring in the dark-arts firm and the targeting sharpens uncannily. It works — until the harvesting leaks, and your campaign becomes the local chapter of a global data-abuse scandal.", { MI: 6, FI: -2, GL: -6, EN: -4 }],
      ["Run an honest, homegrown campaign.", "An election won by manipulation is a mandate built on sand.", "You decline the manipulation machine and campaign on message and organisation. It is harder and slower, but no harvesting time-bomb sits ticking under your win.", { GL: 4, EN: 4, MI: -2 }])),

  // ── Nomination-paper scrutiny ───────────────────────────────────────────────
  ax("Returning Officer Coordinator", "fixer", ["nominations", "scrutiny", "disqualification"],
    sx("On scrutiny day, returning officers can reject opposition candidates' nomination papers on hyper-technical grounds — a misplaced signature, a loan footnote — thinning the ballot before a vote is cast. The coordinator awaits the word on how aggressive to be.",
      ["Reject rivals' papers on technicalities.", "A candidate disqualified is a contest avoided.", "Dozens of opposition hopefuls are struck off on trivia. Your candidates walk into emptier races, and the courts and observers log another way the contest was hollowed before polling.", { MI: 6, GL: -8, EN: -6 }],
      ["Let valid nominations stand.", "A ballot thinned by clerks is a ballot no one trusts.", "You order the officers to accept all proper nominations. The races are fuller and harder, but the contest cannot be dismissed as rigged at the starting line.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Snap election timing ────────────────────────────────────────────────────
  ax("Strategy Director", "official", ["snap-election", "timing", "advantage"],
    sx("Your polling is briefly riding high after a popular giveaway, and the director urges a snap election to lock in a fresh term before the economy sours. It is shrewd and opportunistic; it also reeks of cutting and running before the bill arrives.",
      ["Call the snap election now.", "Strike while the numbers smile.", "You go to the polls on the sugar high and win comfortably. The fresh term is banked, and the soured economy and unpaid giveaway bill land squarely in your own new lap.", { MI: 6, FI: -4, EN: -2 }],
      ["Serve the full term and face the music.", "A leader who runs from the bill admits he padded it.", "You hold the scheduled date and govern through the hard patch. You forgo the easy win, but you cannot be accused of cynically timing the vote to dodge the consequences.", { GL: 4, EN: 2, MI: -4 }])),

  // ── Article 70 expulsion ────────────────────────────────────────────────────
  ax("Chief Whip", "fixer", ["article-70", "dissent", "expulsion"],
    sx("A respected backbencher has voted his conscience against a flagship bill, and the constitution lets you expel him from parliament outright for crossing the line. The Whip wants him made an example; the alternative is to let one dissent pass.",
      ["Expel the dissenting MP.", "One conscience indulged becomes a chorus.", "You strip him of his seat for a single honest vote. The benches fall silent and obedient, and the spectacle of a man expelled for conscience stains the parliament's name.", { MI: 6, FA: 2, EN: -6, GL: -6 }],
      ["Let the single dissent pass.", "A parliament of automatons warns me of nothing.", "You let the conscience vote stand without punishment. The hardliners fret about the precedent, but the benches keep a flicker of humanity and the house a shred of dignity.", { GL: 6, EN: 4, MI: -4 }])),

  // ── President selection ─────────────────────────────────────────────────────
  ax("Party Elders' Council", "official", ["president", "ceremonial", "loyalty"],
    sx("The ceremonial presidency is yours to fill. The council urges a pliant loyalist who will sign whatever you send and never use the office's reserve powers. A respected independent would lend the state dignity — and might, in a crisis, act on his own judgment.",
      ["Install a pliant loyalist as president.", "A rubber stamp does not develop a spine at midnight.", "You elevate a reliable nonentity to the presidency. Every decree is signed on cue, and the one office that might restrain you in a crisis is neutered in advance.", { MI: 4, FA: 2, GL: -4, EN: -2 }],
      ["Appoint a respected independent.", "A dignified head of state reflects on the whole house.", "You choose a credible figure for the presidency. He lends the state gravity, and you accept that in a true crisis he might use the office's powers as his own conscience, not yours, dictates.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Merger with a smaller party ─────────────────────────────────────────────
  ax("General Secretary", "fixer", ["merger", "absorption", "growth"],
    sx("A small but well-organised regional party is open to merging into yours — instant reach in a region where you are weak, at the cost of absorbing its leaders, its baggage, and its demands for safe seats and posts.",
      ["Absorb the smaller party.", "Their region becomes mine overnight.", "You merge them in and your map fills out in the weak region. Their leaders crowd your benches with new demands and old baggage, and your once-tight organisation grows lumpier.", { MI: 6, FA: -2, EN: 2 }],
      ["Stay independent, build the region yourself.", "A merger buys a region and inherits its quarrels.", "You decline the merger and invest in building your own base there. It is slower and the region stays thin for you, but your party keeps its coherence and owes no newcomers.", { FA: 2, MI: -4, FI: -2 }])),

  // ── Manifesto leak ──────────────────────────────────────────────────────────
  ax("Manifesto Committee Chair", "official", ["manifesto", "leak", "damage"],
    sx("A draft of the manifesto has leaked, exposing an unpopular plan to cut a beloved subsidy you meant to bury in the fine print. Brazen it out and keep the plan, or disown the draft and reverse course?",
      ["Stand by the leaked plan.", "A policy abandoned at the first leak was never a policy.", "You defend the subsidy cut openly. The honesty earns grudging respect in some quarters, but the beloved subsidy's defenders mobilise and the issue dogs the whole campaign.", { GL: 2, FI: 4, EN: -8 }],
      ["Disown the draft and reverse.", "A leak is a chance to hear the room.", "You bin the unpopular plan and recast the draft. The flip-flop draws mockery, but the beloved subsidy survives and the campaign's biggest landmine is defused.", { EN: 6, GL: -2, FI: -4 }])),

  // ── Voter transport on poll day ─────────────────────────────────────────────
  ax("Field Mobilisation Officer", "fixer", ["turnout", "transport", "poll-day"],
    sx("Your machine can lay on free transport to ferry your voters to the booths on polling day — legal turnout muscle in your strongholds — while quietly ensuring the buses never reach the opposition's wards. How clean do you keep it?",
      ["Run partisan transport to your wards only.", "I move my voters; theirs can walk.", "Your strongholds turn out in force on free buses while the opposition's wards wait for transport that never comes. The lopsided turnout flatters your win and fools no observer.", { MI: 6, GL: -4, EN: -4 }],
      ["Provide transport neutrally or not at all.", "A bus that only carries my voters is a thumb on the scale.", "You either drop the scheme or run it for all. Your raw turnout edge shrinks, but the poll-day logistics give your enemies nothing to point at.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Confidence vote, new term ───────────────────────────────────────────────
  ax("Chief Whip", "official", ["confidence", "majority", "coalition"],
    sx("Your new majority is wafer-thin and a confidence vote looms in the first week. Secure it by buying a few independents with quiet promises, or win it on your genuine numbers and govern honestly from a fragile base?",
      ["Buy the independents for a safe margin.", "A government that wins its first vote narrowly never recovers.", "You purchase the cushion and win comfortably. The bought independents will be back for more all term, and your government is mortgaged to them from its first day.", { MI: 6, FA: 2, FI: -2, EN: -4 }],
      ["Win on your real numbers.", "A majority I had to buy is a majority I do not have.", "You take the confidence vote on your honest count and scrape through. Governing the knife-edge is exhausting, but you owe no shadowy independents and the mandate is real.", { GL: 4, EN: 4, MI: -2 }])),

  // ── Emergency powers ────────────────────────────────────────────────────────
  ax("Cabinet Secretary", "general", ["emergency", "powers", "rule"],
    sx("Amid unrest, the secretary lays out the nuclear option: declare a state of emergency, suspend rights, rule by decree, and postpone the election. Total control — and the brand, at home and abroad, of a ruler who tore up the rules to keep power.",
      ["Declare the state of emergency.", "Order first; legitimacy can be rebuilt.", "You suspend rights and rule by decree. The streets fall silent under the clampdown, and the word 'dictator' attaches itself to you in every capital and every history book.", { MI: 8, GL: -10, EN: -8 }],
      ["Govern through the crisis within the law.", "A leader who suspends the constitution has already abdicated.", "You refuse the emergency and ride out the unrest within constitutional bounds. It is harder and more dangerous, but you remain a head of government, not a usurper.", { GL: 6, EN: 4, MI: -6 }])),

  // ── Professional-body capture ───────────────────────────────────────────────
  ax("Professional Wing Coordinator", "fixer", ["bar-association", "professionals", "capture"],
    sx("The bar association, medical council, and engineers' bodies hold prestigious elections that shape professional opinion. Capture them with party panels and patronage, or let the professionals govern themselves?",
      ["Capture the professional bodies.", "The professions sway the educated; capture them.", "Your panels sweep the professional bodies on patronage and pressure. The lawyers, doctors, and engineers' associations become party annexes, and their independent voice — and credibility — dies.", { MI: 4, FA: 2, EN: -4, GL: -4 }],
      ["Leave the professions self-governing.", "A captured bar defends no one, least of all me.", "You let the professional bodies run free. They will sometimes pass resolutions against you, but their independence keeps them respected, and a free bar is a check worth having.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Caretaker chief justice ─────────────────────────────────────────────────
  ax("Constitutional Adviser", "official", ["caretaker", "judiciary", "poll"],
    sx("If a neutral poll-time authority is to oversee the election, its chief would likely be the most recently retired chief justice. You could engineer the retirement timeline so that a pliable judge sits in that chair when it matters.",
      ["Engineer a pliable poll-time chief.", "Even a neutral office should hold a friendly face.", "You quietly time the judicial retirements so your man heads the poll-time authority. The 'neutral' oversight is neutral in name only, and the opposition smells it instantly.", { MI: 6, GL: -6, EN: -4 }],
      ["Let the chair fall where it falls.", "A poll umpire I picked is no umpire at all.", "You leave the succession to run its natural course, friendly or not. You surrender a hidden lever, but the poll-time authority is genuinely impartial and its verdict will be believed.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Celebrity endorsement ───────────────────────────────────────────────────
  ax("Media Adviser", "fixer", ["celebrity", "endorsement", "image"],
    sx("A beloved film and cricket star will endorse you — and stand for a safe seat — bringing glamour and youth appeal. The adviser is thrilled; the cynics note he knows nothing of governance and would be a hollow, gaffe-prone MP.",
      ["Field the celebrity candidate.", "Stardust wins seats that policy cannot.", "The star joins to adoring crowds and wins his seat on charisma. He is a magnet for the young and a liability in the chamber, every gaffe a headline, every absence noted.", { MI: 4, EN: 2, GL: -2 }],
      ["Use his endorsement, not his candidacy.", "A famous face is an asset; a famous fool is a cost.", "You take the star's public backing but steer him away from a seat. You bank the glamour without saddling the benches with a celebrity who cannot legislate.", { GL: 2, MI: 2, FA: -2 }])),

  // ── Coalition common programme ──────────────────────────────────────────────
  ax("Coalition Manager", "official", ["coalition", "programme", "compromise"],
    sx("Your alliance must agree a common minimum programme, and the partners' wish-lists pull in opposite directions — secular reformers against the religious bloc, labour against business. Paper over the cracks, or force a coherent platform?",
      ["Paper over the contradictions.", "A vague platform offends no partner.", "You fudge the programme into mush that everyone can sign. The alliance holds for the campaign, then tears itself apart in government over the contradictions you never resolved.", { MI: 2, FA: 2, EN: -4, GL: -2 }],
      ["Force a coherent common programme.", "A coalition that cannot agree a page cannot govern a country.", "You hammer out a real, consistent platform, losing a partner or two who cannot accept it. The alliance is smaller but governable, and voters know what it actually stands for.", { GL: 4, EN: 4, FA: -4, MI: -2 }])),

  // ── Restoring a banned party ────────────────────────────────────────────────
  ax("Reconciliation Adviser", "official", ["banning", "restoration", "inclusion"],
    sx("A party banned years ago — its grievance now a rallying cry — petitions to be restored to legal politics, promising to renounce violence. Readmitting it drains the poison of exclusion; the hardliners say it legitimises old enemies.",
      ["Keep the party banned.", "A banned enemy is a contained enemy.", "You refuse restoration. The party stays underground, its exclusion a permanent grievance and recruiting tool, and the politics of the banned festers beyond the ballot's reach.", { MI: 4, FA: 2, EN: -4, GL: -4 }],
      ["Restore it to legal politics.", "A grievance let into the chamber is a grievance out of the streets.", "You readmit the party on conditions. The hardliners howl about legitimising enemies, but an underground grievance becomes a contestable political force, answerable to voters.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Get-out-the-vote drive ──────────────────────────────────────────────────
  ax("Field Mobilisation Officer", "people", ["turnout", "gotv", "organisation"],
    sx("Turnout is your friend where you are strong and your enemy where you are weak. Run a blanket national get-out-the-vote drive that lifts everyone's turnout, or a surgical one that wakes your wards and lets the opposition's sleep?",
      ["Run the surgical, partisan GOTV.", "I wake my voters and let theirs dream.", "Your wards turn out heavily while the opposition's stay home, unprodded. The lopsided turnout pads your margins, and the selective mobilisation is one more managed feature of the result.", { MI: 6, EN: -2, GL: -2 }],
      ["Run a blanket national turnout drive.", "A high honest turnout is a mandate money cannot buy.", "You lift turnout everywhere, friend and foe alike. You forgo a turnout edge, but a high, genuine participation gives whatever result emerges a legitimacy nothing else can.", { GL: 6, EN: 6, MI: -4 }])),

  // ── Local government devolution ─────────────────────────────────────────────
  ax("Local Government Secretary", "official", ["devolution", "decentralisation", "power"],
    sx("Real devolution — money and power pushed down to elected local councils — would transform governance and accountability, but loosen your central grip and empower local leaders, some of them rivals. How far do you let go?",
      ["Keep power centralised.", "A capital that lets go of the purse lets go of the country.", "You keep the money and decisions in the centre's fist. Your grip stays tight, and local government remains a hollow shell where accountability and initiative go to die.", { MI: 4, EN: -4, GL: -2 }],
      ["Devolve real power and funds.", "A nation governed only from the capital is barely governed.", "You push genuine money and authority down to elected councils. You loosen your grip and empower some rivals, but governance gets closer to the people and visibly better.", { EN: 8, GL: 6, MI: -6 }])),

  // ── Anthem and flag respect law ─────────────────────────────────────────────
  ax("Culture Minister", "official", ["nationalism", "law", "speech"],
    sx("A proposed law would make 'disrespect' of the flag and anthem a crime — wrapping you in patriotism and handing you a flexible cudgel against critics who could be charged for a gesture or a parody. The minister calls it honouring the nation.",
      ["Enact the flag-and-anthem law.", "The symbols of the nation are above mockery.", "You criminalise disrespect of the national symbols. Patriots applaud, and the elastic offence becomes a convenient charge to level at any critic who steps out of line.", { MI: 4, FA: 2, EN: -6, GL: -4 }],
      ["Leave patriotism uncompelled.", "Forced reverence is no reverence at all.", "You reject the law. The hardliners grumble that you failed to honour the nation, but you decline a cudgel that would have dressed censorship as patriotism.", { GL: 4, EN: 4, MI: -2 }])),

  // ── Result transmission app ─────────────────────────────────────────────────
  ax("Election Tech Adviser", "official", ["results", "transmission", "transparency"],
    sx("A new app would transmit every polling station's count straight to a public dashboard in real time — radical transparency that makes tampering nearly impossible, and any managed result impossible to manage. The adviser awaits your verdict.",
      ["Deploy the public real-time results app.", "A count the whole country watches is a count it believes.", "You launch the transparent dashboard. Tampering becomes near-impossible and the result, whatever it is, is trusted — and you have closed off your own machine's options for good.", { GL: 8, EN: 6, MI: -4 }],
      ["Keep results flowing through official channels.", "A dashboard that cannot be managed is a risk I need not take.", "You stick with the slower official channels. The flexibility to 'reconcile' close seats survives, and so does the public's weary assumption that the count is never quite clean.", { MI: 4, GL: -6, EN: -4 }])),

  // ── Mosque-school (madrasa) recognition ─────────────────────────────────────
  ax("Education Affairs Secretary", "cleric", ["madrasa", "recognition", "votes"],
    sx("The vast network of independent religious schools wants its degrees recognised as equal to university qualifications for government jobs — a huge bloc's long-held demand. Granting it wins the bloc; the secular establishment is appalled.",
      ["Recognise the religious degrees.", "A million graduates and their families are a bloc worth winning.", "You grant equivalence to the madrasa degrees. The religious bloc swings gratefully behind you, and the secular establishment recoils as the civil service opens to a parallel education it cannot vouch for.", { MI: 4, FA: 2, EN: -6, GL: -6 }],
      ["Require a bridging standard first.", "Equal recognition demands an equal standard.", "You offer recognition conditional on bridging courses in core subjects. The bloc is disappointed at the half-measure, but the civil service keeps a baseline and the secularists are mollified.", { GL: 4, EN: 4, FA: -4, MI: -2 }])),

  // ── Door-to-door data harvesting ────────────────────────────────────────────
  ax("Campaign Data Director", "fixer", ["canvassing", "data", "privacy"],
    sx("Your canvassers can quietly log every household's religion, income, leanings, and grievances into a vast voter database — a powerful targeting tool, and an intrusive dossier on the private lives of millions, assembled without consent.",
      ["Build the household database.", "Knowledge of the voter is power over the vote.", "Your canvassers compile an intimate map of every household. The targeting grows formidable, and a covert dossier on millions' private lives now sits on a party server, one breach from scandal.", { MI: 6, EN: -4, GL: -4 }],
      ["Canvass without the covert profiling.", "A party that files its citizens is a state I do not want to lead.", "You canvass for support without building the secret dossier. Your targeting is cruder, but you refuse to assemble a surveillance file on the people you ask to trust you.", { GL: 4, EN: 4, MI: -2 }])),

  // ── Snap dissolution of parliament ──────────────────────────────────────────
  ax("Constitutional Adviser", "official", ["dissolution", "parliament", "tactic"],
    sx("You can dissolve parliament early to wrong-foot a fracturing opposition before it can organise — a sharp tactical move that also denies the house its full term and looks like manipulating the calendar for advantage. The adviser lays out the play.",
      ["Dissolve early to catch them unready.", "An opponent off-balance is an opponent beaten.", "You dissolve the house and rush the polls. The disorganised opposition is caught flat-footed, and you wear the charge of gaming the calendar for the win it buys you.", { MI: 6, GL: -4, EN: -2 }],
      ["Let parliament run its full term.", "A house cut short for tactics cheapens the next.", "You let the term run out naturally. The opposition gets time to organise, but you cannot be accused of dissolving democracy's clock whenever it suited you.", { GL: 4, EN: 2, MI: -4 }])),

  // ── Backbench rebellion ─────────────────────────────────────────────────────
  ax("Chief Whip", "people", ["backbench", "rebellion", "policy"],
    sx("A bloc of your own backbenchers, closer to the public mood than the cabinet, is in open revolt over a deeply unpopular bill. Break them with threats and patronage, or heed them and amend the bill they say is poison on the doorstep?",
      ["Break the rebellion, pass the bill.", "A backbencher's job is to vote, not to think.", "You whip the bill through over the rebels' objections. It passes, and so does the public anger they warned of, landing on the very MPs you forced to swallow it.", { MI: 4, FA: 2, EN: -6 }],
      ["Heed the rebels, amend the bill.", "The benches closest to the people often see clearest.", "You amend the bill to meet the backbenchers' concerns. The cabinet's pride is dented and the bill weakened, but you have averted a doorstep disaster and kept your MPs loyal.", { EN: 6, GL: 2, MI: -2 }])),

  // ── Corporate donation cap ──────────────────────────────────────────────────
  ax("Party Treasurer", "official", ["donations", "corporate", "influence"],
    sx("A reform would cap corporate donations and require their disclosure — curbing the oligarchs' grip on policy, and choking the biggest stream into your war chest. The treasurer warns the cut would hurt; the reformers say the influence is rotting the state.",
      ["Block the donation cap.", "A campaign starved of corporate cash is a campaign that loses.", "You kill the cap and the corporate money keeps flowing. The war chest stays fat, and the oligarchs' hooks stay deep in your policy, exactly as the reformers feared.", { FI: 6, FA: 4, EN: -6, GL: -4 }],
      ["Back the cap and disclosure.", "A party owned by donors governs for donors.", "You support capping and disclosing corporate money. The war chest thins painfully, but you loosen the oligarchs' grip and can credibly claim to have cleaned a corner of the system.", { GL: 6, EN: 6, FI: -6, FA: -4 }])),

  // ── Right to Information law ─────────────────────────────────────────────────
  ax("Information Commissioner", "official", ["rti", "transparency", "accountability"],
    sx("A strengthened Right to Information law would force every office to open its files to any citizen who asks — a powerful anti-corruption tool, and a window into the deals your government would rather keep dark. The commissioner awaits your stance.",
      ["Gut the Right to Information law.", "An open file is an open invitation to my enemies.", "You quietly hollow out the RTI regime with exemptions and delays. The corruption-fighters lose their best tool, and 'a government with something to hide' becomes the obvious reading.", { MI: 2, FA: 2, EN: -6, GL: -6 }],
      ["Strengthen and enforce the RTI law.", "Sunlight is the cheapest disinfectant a state can buy.", "You give the RTI law teeth and enforce it. Some embarrassing files surface and ministers squirm, but corruption gets harder and your reform credentials grow real.", { GL: 6, EN: 6, FA: -4 }])),

  // ── Public Accounts Committee ───────────────────────────────────────────────
  ax("Parliamentary Affairs Minister", "official", ["oversight", "committee", "audit"],
    sx("The parliamentary committee that scrutinises government spending is traditionally chaired by the opposition. Deny them the chair and pack it with loyalists, neutering oversight, or honour the convention and let your own spending be examined?",
      ["Pack the oversight committee with loyalists.", "I will not hand my critics a microphone and my ledgers.", "You take the chair and stack the committee. Government spending sails through unexamined, and the one institution meant to catch waste and graft is turned into a shield for it.", { MI: 4, FA: 2, EN: -6, GL: -4 }],
      ["Give the opposition the chair.", "Spending watched is spending behaved.", "You honour the convention and let the opposition scrutinise your ledgers. Some uncomfortable findings emerge, but waste is curbed and the house gains a working check.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Postal / service voters ─────────────────────────────────────────────────
  ax("Returning Officer Coordinator", "fixer", ["postal", "service-voters", "fraud"],
    sx("The postal ballots of soldiers, police, and officials posted away from home are easy to bundle and steer. Quietly manage these service votes as a reliable bloc, or process them transparently like any other ballot?",
      ["Manage the service ballots quietly.", "The men in uniform vote as the chain suggests.", "You shepherd the postal votes into a reliable bloc. The numbers help, and the pattern — a service vote that breaks suspiciously one way — is logged by every observer watching.", { MI: 6, GL: -6, EN: -4 }],
      ["Process service ballots transparently.", "A soldier's secret ballot is still a secret ballot.", "You insist the postal votes be handled openly and freely. You forgo a managed bloc, but you cannot be accused of voting the barracks by proxy.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Hung parliament kingmaker ───────────────────────────────────────────────
  ax("Coalition Manager", "fixer", ["hung-parliament", "kingmaker", "deals"],
    sx("The election has produced no majority, and a handful of independents and tiny parties now hold the balance. Assemble a government by lavishing them with ministries and money, or attempt a leaner minority government on issue-by-issue support?",
      ["Buy a majority with ministries and cash.", "A government formed is a government; how matters later.", "You assemble the majority by buying the kingmakers wholesale. The cabinet bloats with bought men and their price tags, and your government begins life owing everyone everything.", { MI: 6, FA: 2, FI: -4, EN: -4 }],
      ["Form a lean minority government.", "Better to govern honestly on a knife-edge than to buy a throne.", "You build a minority government surviving vote by vote. It is precarious and exhausting, but it is not a bazaar, and each policy must be argued and won rather than purchased.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Women's reserved seats: direct election ─────────────────────────────────
  ax("Women's Wing Chief", "people", ["women", "reserved-seats", "reform"],
    sx("Women's groups demand the reserved parliamentary seats be filled by direct election rather than party nomination, giving women real mandates instead of appointed tokens. It empowers women — and strips you of dozens of safe, controllable seats.",
      ["Make the reserved seats directly elected.", "A seat won is a voice; a seat granted is an echo.", "You back direct election for the women's seats. You lose dozens of controllable appointments, but a cohort of women MPs arrives with real mandates and real independence.", { EN: 8, GL: 6, FA: -4, MI: -4 }],
      ["Keep the reserved seats by nomination.", "Why give away seats I currently simply assign?", "You preserve the nomination system. The women's wing is disappointed and the tokenism critique stands, but you keep dozens of safe, loyal seats firmly in your gift.", { MI: 4, FA: 4, EN: -6, GL: -4 }])),

  // ── Polling-station relocation ──────────────────────────────────────────────
  ax("Election Logistics Officer", "shadow", ["polling-station", "relocation", "suppression"],
    sx("On the quiet, the officer can relocate polling stations in opposition strongholds to distant venues announced at the last minute — depressing their turnout without a single ballot touched. It is deniable, surgical voter suppression.",
      ["Relocate the opposition's polling stations.", "A booth moved is a vote not cast.", "You scatter the opposition's booths to far-off venues at the last hour. Their turnout sags as planned, and the manoeuvre, once mapped by observers, becomes textbook documented suppression.", { MI: 6, GL: -8, EN: -6 }],
      ["Keep polling stations fixed and local.", "A voter should not need a map to find democracy.", "You keep every booth where the voters expect it. You forgo a quiet suppression tactic, but no one can chart a pattern of vanished polling stations in your enemies' wards.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Election petition in court ──────────────────────────────────────────────
  ax("Law Minister", "official", ["election-petition", "courts", "result"],
    sx("The opposition has filed election petitions challenging results in dozens of seats, with real evidence in some. Have the captured courts dismiss them all en masse, or let the genuine cases be heard, risking the loss of a few seats?",
      ["Have the courts dismiss all petitions.", "A result reopened is a result undone.", "Your courts throw out every petition, evidence or not. The seats are safe and the message clear — the bench is yours — and the contested results stay forever disputed.", { MI: 6, GL: -8, EN: -6 }],
      ["Let the genuine petitions be heard.", "A seat that survives the court is a seat I truly hold.", "You let the courts weigh the real cases. You may lose a few seats to honest rulings, but the ones you keep are unassailable and the judiciary keeps a shred of credibility.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Deepfake of the opposition ──────────────────────────────────────────────
  ax("Cyber Cell Commander", "shadow", ["deepfake", "disinformation", "smear"],
    sx("The cyber cell has produced a convincing deepfake of the opposition leader saying something inflammatory and disqualifying. Released days before the vote, it could end her — until it is debunked, and the forgery is traced back to you.",
      ["Release the deepfake.", "A lie that wins the day outlives its debunking.", "You loose the forgery and it rips through the timelines. It may swing the vote before it is exposed, and when it is, the trail back to your cell makes you the story for years.", { MI: 4, GL: -8, EN: -8 }],
      ["Forbid the deepfake.", "A throne won by a forgery rots from the seat up.", "You kill the operation. You forgo a devastating dirty trick, but you are spared the day a forensic analyst pins the fabrication on your government for all to see.", { GL: 6, EN: 6, MI: -2 }])),

  // ── By-poll after a death ───────────────────────────────────────────────────
  ax("Strategy Director", "official", ["by-poll", "succession", "seat"],
    sx("A veteran MP from a safe seat has died, triggering a by-poll. His capable but independent-minded daughter wants the nomination on her own merit; the local fixer wants a pliable outsider who will owe you everything. Who gets the nominee?",
      ["Nominate the pliable outsider.", "A grateful nobody serves better than a proud somebody.", "You parachute in the controllable outsider. He wins the safe seat and owes you all, and the late MP's daughter — and the constituency that loved her father — turn bitter.", { MI: 4, FA: 2, EN: -4, GL: -2 }],
      ["Nominate the capable daughter.", "Merit and local roots win seats fixers cannot.", "You give the daughter the nomination on merit. The fixer loses his pawn and grumbles, but the seat is won warmly and the benches gain a leader rather than a placeholder.", { EN: 6, GL: 4, FA: -2, MI: -2 }])),

  // ── Digital governance one-stop service ─────────────────────────────────────
  ax("Digital Government Adviser", "people", ["e-governance", "services", "corruption"],
    sx("A digital one-stop service portal could let citizens get licences, certificates, and payments online — slashing the petty bribery that infests every counter. The clerks who live on those bribes, a vast workforce, will quietly sabotage it.",
      ["Push the digital service rollout hard.", "A counter with no clerk has no palm to grease.", "You force the e-services through against the clerks' sabotage. The petty bribery at a thousand counters withers, citizens save time and money, and you bank a visible, popular win.", { EN: 8, GL: 6, FI: 2, FA: -4 }],
      ["Let the rollout stall.", "Do not pick a fight with a million clerks at once.", "You let the digital push die quietly to keep the bureaucracy content. The counters stay manned and the palms stay greased, and the citizen keeps paying a small bribe for every stamp.", { FA: 4, FI: -2, EN: -6 }])),

  // ── Parliament question hour ────────────────────────────────────────────────
  ax("Leader of the House", "official", ["parliament", "accountability", "norms"],
    sx("Question hour, where ministers answer the house, has decayed into scripted softballs from your own backbenchers. Revive it as real, unscripted scrutiny — sharpening your ministers but exposing their failings — or keep it the comfortable theatre it is?",
      ["Keep question hour scripted and safe.", "A minister cornered on live television is a wound.", "You keep the softballs flying. Your ministers are spared embarrassment, and parliament's central ritual of accountability stays a hollow performance everyone sees through.", { MI: 2, FA: 2, EN: -4, GL: -2 }],
      ["Revive real, unscripted scrutiny.", "A minister who can answer hard questions is a minister worth having.", "You restore genuine question hour. Your weaker ministers flounder under real questioning, but the strong shine, the house comes alive, and accountability stops being a charade.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Trade-union affiliation ─────────────────────────────────────────────────
  ax("Labour Wing Secretary", "people", ["unions", "affiliation", "leverage"],
    sx("You can bring the major trade unions under your party's wing — disciplined turnout and industrial muscle — at the price of either delivering on their wage demands or being seen to betray them. Court them, or keep your distance?",
      ["Bring the unions into the party fold.", "Organised labour, organised for me.", "You affiliate the big unions and gain disciplined muscle. They now expect delivery on wages and conditions, and the day you cannot, their organised power turns squarely against you.", { MI: 4, EN: 4, FI: -4, FA: -2 }],
      ["Keep the unions at arm's length.", "A union in the tent demands the tent's wealth.", "You keep the unions independent. You forgo their organised turnout, but you are not held hostage to wage demands you may not be able to meet.", { FI: 4, MI: -2, EN: -2 }])),

  // ── Voter education campaign ────────────────────────────────────────────────
  ax("Civic Education Director", "people", ["voter-education", "awareness", "turnout"],
    sx("A neutral, state-funded voter-education drive would teach citizens their rights, how to spot fraud, and how to vote — strengthening democracy, and arming the very voters most likely to catch your machine cutting corners. Fund it?",
      ["Fund the neutral voter-education drive.", "An informed electorate is a legitimate election.", "You fund honest voter education. Turnout and confidence rise, and so does the number of citizens who know exactly what an irregularity looks like — a price you accept for a credible vote.", { GL: 6, EN: 6, MI: -4 }],
      ["Let voter education wither.", "Why teach the voter to catch me?", "You quietly defund the programme. The electorate stays hazier on its rights and easier to manage, and the democracy you preside over grows a little thinner and more cynical.", { MI: 2, GL: -4, EN: -4 }])),

  // ── Cadre rehabilitation ────────────────────────────────────────────────────
  ax("General Secretary", "fixer", ["cadres", "violence", "amnesty"],
    sx("Hundreds of your cadres face cases for past political violence — some genuine thugs, some scapegoats. The Secretary wants a blanket amnesty to reward loyalty; the alternative is to let the courts sort the guilty from the wronged.",
      ["Grant the cadres a blanket amnesty.", "I do not abandon the foot-soldiers who carried me.", "You wipe the cadres' cases clean en masse. Loyalty is rewarded and the machine reassured, and genuine thugs walk free alongside the wronged, impunity stamped a little deeper.", { MI: 4, FA: 6, EN: -8, GL: -4 }],
      ["Let the courts separate guilty from wronged.", "An amnesty for thugs is a licence for the next.", "You refuse the blanket pardon and let cases proceed individually. The cadres feel betrayed and some desert, but the genuinely innocent are cleared and the guilty face the law.", { GL: 6, EN: 4, FA: -6 }])),

  // ── Embassy / overseas voting ───────────────────────────────────────────────
  ax("Overseas Wing Secretary", "shadow", ["overseas", "voting", "fraud"],
    sx("If overseas voting is introduced at embassies, the thin oversight abroad makes the ballots ripe for manufacturing. Quietly pad the diaspora vote at friendly missions, or insist the overseas count be observed as rigorously as any at home?",
      ["Pad the overseas vote quietly.", "Distant ballots are the least watched of all.", "You manufacture margins at the friendly embassies. The diaspora numbers swell suspiciously, and the watchdogs add 'phantom overseas votes' to the dossier on the election.", { MI: 4, GL: -6, EN: -4 }],
      ["Observe the overseas count rigorously.", "A vote cast abroad must be as clean as one cast at home.", "You insist on full observation of the embassy ballots. You forgo an easy padding, but the diaspora vote becomes a point of pride rather than another asterisk.", { GL: 6, EN: 2, MI: -4 }])),

  // ── Independent candidate strategy ──────────────────────────────────────────
  ax("Strategy Director", "fixer", ["independents", "spoilers", "tactics"],
    sx("In seats where your candidate is weak, the director proposes secretly funding 'independent' spoilers to split the opposition vote. Cynical and effective — and a leak would expose you as manufacturing fake candidates to game the result.",
      ["Fund the spoiler independents.", "A split rival is a beaten rival.", "You bankroll the spoilers and the opposition vote fractures in the target seats. The tactic delivers, and the day a funded 'independent' talks, it confirms every accusation of a rigged field.", { MI: 6, GL: -6, EN: -4 }],
      ["Win the seats honestly or lose them.", "A manufactured candidate is a confession in waiting.", "You refuse the spoiler scheme and fight the weak seats straight. You lose some you might have stolen, but no funded fake candidate can ever surface to sink you.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Ombudsman appointment ───────────────────────────────────────────────────
  ax("Constitutional Adviser", "official", ["ombudsman", "accountability", "graft"],
    sx("The constitution provides for an ombudsman to investigate official corruption — an office every government since independence has conveniently left unfilled. Finally appoint a real one, or keep the chair empty?",
      ["Keep the ombudsman's chair empty.", "An office uncreated cannot investigate me.", "You leave the post unfilled, as your predecessors did. The constitutional check stays a dead letter, and the corruption it was meant to catch goes on unmolested.", { FA: 2, MI: 2, EN: -6, GL: -4 }],
      ["Appoint a real, empowered ombudsman.", "A check unfilled for fifty years shames us all.", "You finally appoint a genuine ombudsman with teeth. Some of your own are caught in its early cases, but you accomplish what no government dared, and the reform is historic.", { GL: 8, EN: 6, FA: -4, MI: -2 }])),

  // ── Election-day magistrates ────────────────────────────────────────────────
  ax("Home Affairs Coordinator", "official", ["magistrates", "election-day", "neutrality"],
    sx("Executive magistrates with mobile courts roam the polls on election day. Deploy them as a partisan instrument — harassing opposition agents, waving through your irregularities — or as genuinely neutral keepers of the peace?",
      ["Deploy the magistrates as a partisan tool.", "Authority on the ground should answer to me.", "Your magistrates lean on the opposition and overlook your side's tricks. The polls tilt under colour of law, and the partisan use of the bench becomes one more documented stain.", { MI: 6, GL: -6, EN: -4 }],
      ["Deploy them as neutral peace-keepers.", "A magistrate with a thumb on the scale poisons the whole poll.", "You instruct the magistrates to be strictly impartial. They keep order without favour, and the polls run with a fairness your fixers wanted to subvert.", { GL: 6, EN: 4, MI: -4 }])),

  // ── National ID voter purge ─────────────────────────────────────────────────
  ax("Electoral Roll Officer", "shadow", ["nid", "purge", "disenfranchisement"],
    sx("Tying the voter roll to the national ID database lets you purge 'unverifiable' voters — a clean-up that, applied selectively, can quietly strike opposition-leaning groups, the poor, migrants, and minorities, off the list. The officer awaits your aim.",
      ["Purge selectively against opposition groups.", "A roll trimmed of my enemies is a roll improved.", "You scrub the list with a partisan hand, and the poor, the migrant, and the minority find themselves voteless. The disenfranchisement is quiet, deniable, and — once mapped — damning.", { MI: 6, GL: -8, EN: -8 }],
      ["Verify the roll fairly and add the missing.", "A purge that targets the poor is a coup with a database.", "You clean the roll honestly and run a drive to register the missing. The list loses its phantoms without losing its poor, and the franchise widens rather than narrows.", { GL: 6, EN: 8, MI: -4 }])),

  // ── Party youth festival ────────────────────────────────────────────────────
  ax("Youth Wing Coordinator", "people", ["youth", "outreach", "spending"],
    sx("To win back the youth alienated by the quota unrest, the coordinator proposes a vast national youth festival — concerts, job fairs, sports — at considerable cost. The cynics call it a bribe; the optimists, the only bridge left to a hostile generation.",
      ["Fund the national youth festival.", "A bridge to the young is worth its price in taka.", "You bankroll the festival and reach a generation that had written you off. It is costly and some sneer at the gloss, but the outreach softens the youth's hostility a little.", { EN: 6, GL: 2, FI: -4 }],
      ["Skip the festival, save the money.", "A concert does not undo a killing.", "You decline the spending as hollow. The treasury is spared, but the alienated youth see no gesture at all, and the generational rift hardens another notch.", { FI: 4, EN: -6, GL: -2 }])),

  // ── Privilege motion against a journalist ───────────────────────────────────
  ax("Parliamentary Affairs Minister", "official", ["privilege", "press", "intimidation"],
    sx("An MP wants to haul a journalist before the house on a 'breach of privilege' for an unflattering report — a quasi-judicial summons that intimidates the whole press gallery. Back the motion, or quash it?",
      ["Back the privilege motion.", "The dignity of the house must be defended.", "You let the house summon and censure the journalist. The press gallery gets the message and softens, and parliament adds 'cudgel against reporters' to its repertoire.", { MI: 4, FA: 2, EN: -6, GL: -6 }],
      ["Quash the motion.", "A parliament that bullies the press fears it.", "You kill the privilege motion. The thin-skinned MP fumes, but the press keeps its independence and you are spared a needless fight with the entire media.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Ministerial code of conduct ─────────────────────────────────────────────
  ax("Cabinet Secretary", "official", ["ministers", "conduct", "accountability"],
    sx("Several ministers are visibly enriching themselves and their families on the public dime. The secretary proposes a real, enforced code of conduct with asset declarations and resignations for breaches — which would gut some of your most loyal grandees.",
      ["Enforce a real ministerial code.", "A cabinet of looters is a scandal with portfolios.", "You impose asset declarations and enforce resignations. A few loyal grandees fall and the cabinet trembles, but the public sees, astonished, that office is no longer a licence to loot.", { GL: 6, EN: 8, FA: -6, MI: -2 }],
      ["Leave the ministers to their ways.", "A loyal grandee's loyalty is bought with a free hand.", "You decline to bind your ministers. They stay loyal and enriched, and 'one law for them' becomes the defining grievance of your government.", { FA: 6, MI: 2, EN: -8, GL: -4 }])),

  // ── Cross-voting in the presidential election ───────────────────────────────
  ax("Chief Whip", "fixer", ["president", "cross-voting", "discipline"],
    sx("The president is elected by parliament, and a faction of your MPs is flirting with backing a rival candidate to send you a message. Crush the cross-voting with threats, or let the secret ballot speak and read the result as a warning?",
      ["Crush the cross-voting with threats.", "A secret ballot is no excuse for disloyalty.", "You lean hard on the waverers and your candidate wins clean. The dissent is suppressed, but you have learned nothing about the discontent that prompted it, and it festers unspoken.", { MI: 4, FA: 2, EN: -4 }],
      ["Let the secret ballot speak.", "A warning shot heard is a rebellion averted.", "You let the MPs vote freely and read the bruised result as the message it is. Your candidate squeaks in, and you act on the discontent before it grows into something you cannot whip.", { GL: 2, EN: 4, FA: -2, MI: -2 }])),

  // ── Snap cabinet reshuffle ──────────────────────────────────────────────────
  ax("General Secretary", "official", ["reshuffle", "cabinet", "balance"],
    sx("A reshuffle looms. Reward raw loyalty — keeping the faithful incompetents who will never plot — or promote on competence, building a cabinet that governs well but contains ambitious talents who might one day eclipse you?",
      ["Reshuffle for loyalty over competence.", "A loyal fool never sharpens a knife for me.", "You keep the faithful and the mediocre in post. The cabinet is safe and pliant, and the country is governed by people chosen for their harmlessness rather than their skill.", { MI: 2, FA: 6, EN: -6, GL: -4 }],
      ["Reshuffle for competence.", "A government that cannot govern is loyal to nothing.", "You promote the capable, ambition and all. Governance sharpens and the public notices, and you accept the risk that one of your talents may grow large enough to threaten you.", { EN: 6, GL: 6, FA: -6, MI: -2 }])),

  // ── The mid-reign legitimacy referendum ─────────────────────────────────────
  ax("Strategy Director", "official", ["referendum", "legitimacy", "gamble"],
    sx("Doubts about your mandate are corroding your authority. The director floats a bold gamble: a national referendum on your continued rule — a chance to silence the doubters with a fresh popular seal, or a noose if the country says no.",
      ["Call the referendum.", "A fresh mandate silences every whisper.", "You put your rule to the people. It is a genuine gamble, and the campaign consumes the country; whatever the result, you have staked your legitimacy on a single roll of the dice.", { GL: 4, EN: 2, MI: -2 }],
      ["Refuse to gamble on a referendum.", "A vote I might lose is a weapon I hand my enemies.", "You decline the plebiscite. You keep the doubts unresolved rather than risk a public verdict, and the legitimacy question goes on quietly eating at your authority.", { MI: 4, GL: -2, EN: -2 }]),
    sx("You called it, and the referendum is tainted by a low, suspicious turnout and a result too lopsided to believe. Trumpet the landslide as vindication, or admit the obvious and temper your claims?",
      ["Trumpet the landslide as vindication.", "A win is a win; let the doubters choke on it.", "You proclaim the implausible result a ringing endorsement. Your base cheers, but no one outside it believes a 98 percent on a 30 percent turnout, and the 'vindication' becomes a punchline.", { MI: 4, FA: 2, GL: -8, EN: -6 }],
      ["Admit the flaws, temper your claims.", "A boast no one believes is worse than silence.", "You acknowledge the weak turnout and claim only a modest mandate. The base wanted triumphalism, but the candour spares you the ridicule and salvages a sliver of credibility.", { GL: 4, EN: 4, FA: -4, MI: -2 }]),
    sx("The referendum gambit, whatever its result, has emboldened the opposition to demand a real, internationally-observed election as the only true test. Concede the clean election, or dig in behind the referendum's verdict?",
      ["Dig in behind the referendum.", "I have had my plebiscite; I owe them no more.", "You refuse the clean election and hide behind the tainted referendum. The opposition's demand hardens into a movement, and your legitimacy gap, papered over, widens beneath the paper.", { MI: 4, GL: -8, EN: -6 }],
      ["Concede a clean, observed election.", "Only a real vote ends a real doubt.", "You agree to the genuine, observed election. The hardliners call it surrender, but you gamble that a clean mandate, even a narrow one, is worth more than a hollow one defended forever.", { GL: 8, EN: 6, MI: -8 }])),
];
