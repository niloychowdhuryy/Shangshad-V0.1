// INTERIOR — Home Ministry (Tejgaon). Primary metric: MI.
// Real issues: the elite security battalion and 'crossfire' deaths, enforced
// disappearances, the Digital Security / Cyber Security Act and press freedom,
// the quota-reform student uprising, communal violence, surveillance tooling,
// custodial torture, police politicisation.
const sx = (prompt, left, right) => ({ prompt, left, right });
const ax = (speaker, portrait, tags, ...stages) => ({ speaker, portrait, tags, stages });

export const INTERIOR = [
  // ── The quota-reform uprising ───────────────────────────────────────────────
  ax("Inspector-General of Police", "general", ["protest", "students", "quota"],
    sx("Students have filled the streets over the civil-service quota system — peaceful, enormous, growing by the hour. The IGP wants to clear the intersections now. \"Give it a week,\" he warns, \"and a road-block becomes a movement.\"",
      ["Authorise a forceful clearance now.", "A crowd unanswered only multiplies.", "The batons and gas clear the roads for a day. The footage of bloodied students travels the world and triples the next crowd.", { MI: 6, EN: -14, GL: -8 }],
      ["Hold the police back, open negotiations.", "You cannot tear-gas a generation into loving you.", "You meet the student leaders. The cantonment frets that you flinched; the campuses, astonished, lower the temperature.", { EN: 10, GL: 6, MI: -8 }]),
    sx("A video of a single unarmed student shot dead has become the symbol of the movement. The protest is no longer about quotas — it is about you. Your hardliners demand a curfew and an internet blackout.",
      ["Impose curfew and cut the internet.", "Silence the signal, scatter the crowd.", "The blackout buys an eerie quiet and global condemnation. Businesses lose crores a day and the anger compounds in the dark.", { MI: 8, EN: -12, GL: -10, FI: -6 }],
      ["Keep the internet on, hold an inquiry into the killing.", "A government that hides has already lost.", "You name an inquiry and let the country watch. It is a gamble on transparency; the movement, given a hearing, begins to fracture between moderates and absolutists.", { EN: 8, GL: 6, MI: -6 }]),
    sx("The movement now demands the resignation of the ministers who ordered the violence — and the cantonment chief privately signals he won't order troops to fire on students again. The ground is shifting under your chair.",
      ["Sacrifice the hardline ministers.", "Better to lose a wing than the whole bird.", "You dismiss the ministers blamed for the deaths. The crowd claims a scalp and pauses; your inner circle learns no one is safe.", { EN: 12, GL: 6, MI: -4, FA: -6 }],
      ["Stand by your ministers, dig in.", "I will not feed my own people to a mob.", "You refuse to bend and rally the loyal core. But with the army unwilling to shoot, your authority now rests on a crowd's patience.", { MI: -8, EN: -10, FA: 6, GL: -6 }])),

  // ── The elite battalion & disappearances ────────────────────────────────────
  ax("Rights Commission Chair", "official", ["disappearances", "rab", "torture"],
    sx("The Commission hands you a dossier: dozens vanished into your elite battalion's custody, families turned away at every gate. \"Some are alive in secret cells,\" the Chair says quietly. \"You could bring them home — or let the file gather dust like the last one.\"",
      ["Bury the dossier.", "The battalion is the spine of internal order.", "The file vanishes and the cells stay full. The disappeared remain disappeared, and the rot spreads through the ranks that learn it is permitted.", { MI: 6, EN: -10, GL: -8 }],
      ["Order the secret detainees released and investigated.", "A state that disappears its own has already fallen.", "Survivors come home to weeping families and cameras. The battalion's commanders feel the betrayal; the world cautiously applauds.", { EN: 10, GL: 10, MI: -10 }]),
    sx("With the cells emptying, a faction of officers afraid of prosecution floats a quiet warning: 'protect us with amnesty, or the force cannot guarantee its loyalty.' It is a polite mutiny.",
      ["Grant a quiet amnesty for past acts.", "Loyalty now outweighs justice later.", "The officers stand down, reassured. Impunity is enshrined, and the families of the disappeared learn there will be no reckoning.", { MI: 8, EN: -8, GL: -6, FA: 4 }],
      ["Refuse amnesty, reform the command instead.", "I will not be blackmailed by my own guns.", "You retire the worst commanders and split the battalion's powers. It is dangerous — a wounded force is unpredictable — but the precedent of accountability holds.", { GL: 8, EN: 8, MI: -10 }])),

  // ── Digital Security Act / press ─────────────────────────────────────────────
  ax("ICT Enforcement Director", "official", ["dsa", "press", "speech"],
    sx("Under the cyber law, a cartoonist and two reporters sit in jail for posts mocking the first family. The Director offers more arrests — \"a few examples and the rest fall quiet\" — or you could free the three and blunt the law's teeth.",
      ["Make more examples under the Act.", "Mockery unchecked becomes contempt.", "The arrests chill the newsrooms into caution. Editors self-censor, and 'press freedom' becomes the West's favourite stick to beat you with.", { MI: 6, FA: 4, EN: -10, GL: -8 }],
      ["Free the three and amend the worst clauses.", "A government afraid of cartoons is afraid of itself.", "The journalists walk free to grateful coverage. Your thin-skinned loyalists fume; your standing with the open world recovers.", { EN: 8, GL: 8, MI: -6, FA: -4 }])),

  // ── Communal violence ───────────────────────────────────────────────────────
  ax("District Magistrate, riot zone", "official", ["communal", "minorities", "puja"],
    sx("During the Durga Puja, a rumour of a desecrated Quran has set mobs loose on Hindu temples and homes across several districts. The local police 'watched'. The Magistrate begs for orders before nightfall, when it will spread.",
      ["Deploy decisively and arrest the instigators.", "A pogrom on my watch is my disgrace.", "Troops restore order overnight and the ringleaders are jailed. The hardline preachers who fanned it turn their sermons against you.", { EN: 10, GL: 8, MI: -4, FA: -4 }],
      ["Issue a balanced statement, avoid 'taking sides'.", "Do not inflame the majority before an election.", "You stay above it and let it burn out. The minorities learn their safety is negotiable; the cynics call it electoral arithmetic.", { MI: 4, FA: 4, EN: -12, GL: -8 }])),

  // ── Surveillance tooling ────────────────────────────────────────────────────
  ax("Cyber Intelligence Vendor", "shadow", ["surveillance", "spyware", "rights"],
    sx("A foreign vendor offers a phone-hacking suite that can crack any device in the country — opposition, press, your own ministers. \"Every modern state has one,\" the salesman murmurs. The oversight is whatever you decide it is.",
      ["Buy it and use it freely.", "Knowledge of every plot is worth the cost.", "You gain a god's-eye view of your enemies — and your allies. When its existence leaks, as such things do, the scandal is radioactive.", { MI: 10, FI: -6, GL: -8, EN: -4 }],
      ["Decline, or buy it under judicial warrant only.", "A tool with no leash is a leash on me.", "You either pass or wrap it in court oversight. You lose some omniscience; you keep a state that can still call itself lawful.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Police reform / custodial death ─────────────────────────────────────────
  ax("Reform-minded Police Superintendent", "official", ["police", "torture", "reform"],
    sx("A young SP requests an audience after a hawker dies in his thana's lock-up. \"My OC tortured him over forty taka and wrote it as a heart attack. I can sign the false report and rise, or report my own station and be buried. You decide which.\"",
      ["Tell him to sign and let it lie.", "One hawker is not worth a war in the ranks.", "The report is falsified and the SP, complicit now, climbs. Every constable learns the lock-up has no witnesses that matter.", { MI: 4, EN: -10, GL: -4 }],
      ["Back him, prosecute the OC, protect the SP.", "A force that tortures the poor protects no one.", "You make the honest officer a symbol and the OC an example. The old guard closes ranks against you; the public, briefly, believes in the police.", { EN: 10, GL: 6, MI: -6 }])),

  // ── Border / refugee camp policing ──────────────────────────────────────────
  ax("Camp Security Commander", "general", ["rohingya", "camps", "trafficking"],
    sx("The refugee mega-camps have become a black economy of yaba, trafficking, and rival armed gangs. The commander wants a hard 'cleansing' operation; the aid agencies warn it will be a bloodbath that the satellites will see.",
      ["Authorise the hard operation.", "A lawless camp threatens the whole coast.", "The gangs are crushed and the camp goes quiet. Civilian casualties and footage of the sweep hand your critics a year of ammunition.", { MI: 10, EN: -8, GL: -8 }],
      ["Build a vetted camp police with the agencies.", "Order earned beats order imposed.", "You stand up a joint, accountable force. It is slow and imperfect, but the worst gangs lose their grip without a massacre.", { MI: 4, GL: 6, EN: 6, FI: -6 }])),

  // ── Election-eve crackdown ──────────────────────────────────────────────────
  ax("Special Branch Director", "shadow", ["election", "opposition", "arrests"],
    sx("With the vote months away, the Special Branch proposes a sweep: mass cases against opposition organisers to 'thin their machine' before the campaign. \"Empty their streets now,\" the Director says, \"and the result handles itself.\"",
      ["Greenlight the pre-election sweep.", "A contest you control is a contest you win.", "Thousands of organisers are jailed on old cases. The opposition cries foul to a sympathetic world; the result is yours and tainted.", { MI: 8, FA: 4, GL: -10, EN: -8 }],
      ["Forbid it, let them campaign.", "A win that needs empty jails is a loss in disguise.", "You let the opposition march. The contest is real and dangerous; if you win, you win something worth holding.", { GL: 8, EN: 8, MI: -8 }])),

  // ── BESPOKE INSTALMENT — real internal-security dilemmas ────────────────────

  ax("Anti-Narcotics Director", "general", ["yaba", "drug-war", "crossfire"],
    sx("Methamphetamine pours over the eastern border and floods the slums. The director proposes a hardline 'war on drugs' — sweeping arrests and a quiet tolerance for crossfire deaths of suspected dealers.",
      ["Launch the war on drugs.", "Burn the trade out, root and branch.", "The headlines blaze with seizures. The 'crossfire' bodies pile up, many of them poor and unproven, and the rights world recoils.", { MI: 8, EN: -10, GL: -8 }],
      ["Treat addiction as health, target the kingpins.", "You cannot shoot your way out of a chemical.", "You build clinics and chase the financiers instead. It is slow and unglamorous; the slums, in time, breathe easier.", { EN: 8, GL: 6, MI: -6, FI: -4 }])),

  ax("Road Safety Movement", "people", ["students", "road-safety", "protest"],
    sx("Two students are crushed by a reckless bus and the city's schoolchildren pour into the streets, checking licences and shaming the state's rotten road system. The traffic — and your authority — is paralysed.",
      ["Concede: pass a real road-safety law.", "The children are policing what we would not.", "You meet their demands and jail the worst operators. The transport-owner lobby, thick with your men, is enraged.", { EN: 12, GL: 6, MI: -6, FA: -4 }],
      ["Clear the streets and brand it a plot.", "Schoolchildren do not run my roads.", "Your cadres and police break the movement. The images of beaten students travel the world and stain the year.", { MI: 6, EN: -14, GL: -8 }])),

  ax("District Police Super", "official", ["lynching", "rumour", "mob"],
    sx("A WhatsApp rumour of child-snatchers has set off a wave of mob lynchings; innocent travellers are being beaten to death in village squares. The SP wants emergency powers and an internet throttle.",
      ["Throttle the rumour networks and flood police out.", "Silence the lie, save the lives.", "The lynchings ebb as connectivity drops and patrols rise. Businesses and rights groups protest the heavy throttle.", { MI: 8, EN: 4, GL: -6 }],
      ["Run a public-truth campaign, no shutdown.", "You fight a rumour with the truth, not a blackout.", "You blanket the airwaves with the facts and arrest ringleaders. Slower to bite, but the open net is preserved.", { EN: 8, GL: 6, MI: -4 }])),

  ax("Hill Tracts Commander", "general", ["cht", "insurgency", "indigenous"],
    sx("The decades-old Hill Tracts accord is fraying; an armed indigenous faction ambushes a patrol while Bengali settlers demand protection and more land. The commander wants a hard sweep of the hills.",
      ["Order the military sweep.", "Restore the writ of the state in the hills.", "The faction scatters under pressure. Indigenous villages report abuses, settlers push deeper, and the grievance hardens.", { MI: 10, EN: -8, GL: -6 }],
      ["Revive the accord and freeze settlement.", "The hills were promised autonomy; honour it.", "You restart talks and halt the land grab. The settler lobby and some generals seethe; the hills, warily, quiet.", { EN: 8, GL: 6, MI: -6, FA: -4 }])),

  ax("Women's Rights Commission", "people", ["gender", "rape-law", "justice"],
    sx("A horrific assault, filmed and shared, has the country marching for justice and the death penalty for rape. The commission wants real reform — fast courts, victim protection — not just a hanging law.",
      ["Pass capital punishment and call it done.", "Give the street the sentence it demands.", "The crowd is sated by the gallows clause. Conviction rates barely move; the deeper rot in policing and courts is untouched.", { EN: 6, MI: 4, GL: -4 }],
      ["Build fast-track courts and victim protection.", "A noose is not a justice system.", "You fund the slow machinery of real protection. Less cathartic, but conviction and reporting finally begin to climb.", { EN: 10, GL: 8, FI: -6 }])),

  ax("Anti-Trafficking Chief", "official", ["trafficking", "migration", "mediterranean"],
    sx("Smugglers sell desperate young men a deadly dream — boats to Europe via Libya, where many drown or are ransomed. The trade runs through brokers in your own districts who pay local police.",
      ["Smash the broker networks and the dirty police.", "We bury our youth in the Mediterranean.", "You jail brokers and the officers on their payroll. The trade fragments; the bought policemen and their patrons turn on you.", { EN: 8, GL: 8, MI: -4, FA: -4 }],
      ["Look away; the remittances and the relief valve matter.", "Desperate men will go regardless.", "The boats keep sailing and the brokers keep paying. Every drowned son's family learns the state shrugged.", { FI: 4, MI: 4, EN: -10, GL: -6 }])),

  ax("Prisons Inspector-General", "official", ["prisons", "overcrowding", "political"],
    sx("The jails hold three times their capacity, many of them opposition men on old cases never tried. The inspector warns of a tuberculosis outbreak and a riot brewing in the central jail.",
      ["Release the untried on bail to ease the jails.", "A prison of the un-charged is a scandal.", "Thousands walk free pending trial; the jails decompress. Your hardliners call it surrender to the opposition.", { EN: 8, GL: 8, MI: -8 }],
      ["Hold the line; build more cells.", "The streets are safer with them inside.", "You keep the jails full and pour money into more bars. The outbreak spreads, and the world counts your political prisoners.", { MI: 6, FI: -6, EN: -8, GL: -6 }])),

  ax("Fire Service Director", "official", ["fire", "building-code", "safety"],
    sx("A chemical warehouse in a packed old-city lane ignites and the death toll climbs past a hundred. The director wants every illegal warehouse and unsafe high-rise shut — owned, mostly, by the connected.",
      ["Shut the death-trap buildings citywide.", "No more pyres in the old city.", "Inspectors padlock hundreds of illegal premises. Commerce screams and powerful landlords mobilise against the crackdown.", { EN: 12, GL: 6, FI: -6, FA: -6 }],
      ["Fine them and let them reopen.", "You cannot empty half the old city.", "A few fines, a press conference, and the lanes reopen as before. The next fire is already being stacked, drum by drum.", { FI: 4, FA: 4, EN: -12, GL: -4 }])),

  ax("Immigration Director", "official", ["passport", "corruption", "bribery"],
    sx("Getting a passport means paying a broker who splits the bribe with your own officers; the honest applicant waits months. The director offers a fully digital, broker-proof system — and a revolt from the staff who feed on the racket.",
      ["Force the digital, broker-proof rollout.", "A passport is a right, not a bribe.", "The brokers lose their grip and applicants their agony. The displaced officers sabotage and slander the new system.", { EN: 8, GL: 6, MI: -4, FA: -4 }],
      ["Keep the human counters and the side-economy.", "Do not provoke the whole department at once.", "The counters stay, and so does the toll on every citizen. The racket hums on under your seal.", { FA: 4, EN: -8, GL: -4 }])),

  ax("VIP Protocol Officer", "official", ["vip", "convoy", "privilege"],
    sx("A minister's speeding convoy killed a rickshaw-puller and an ambulance idled behind the cavalcade as a patient died. The footage is everywhere; the protocol officer asks how to handle the minister.",
      ["Discipline the minister, curb VIP convoys.", "No siren outruns an ambulance.", "You publicly clip the privilege and the minister. The cabinet's grandees fume at the humiliation; the street cheers.", { EN: 10, GL: 4, FA: -6, MI: -4 }],
      ["Protect the minister, manage the press.", "One does not feed a colleague to a mob.", "The story is smothered and the convoys roll on. The dead man's family, and the watching city, file it away.", { MI: 4, FA: 4, EN: -10, GL: -4 }])),

  ax("NID Database Chief", "shadow", ["surveillance", "data", "privacy"],
    sx("The national ID database — fingerprints, faces, the whole population — could be wired to a live surveillance grid. The chief says it would find any dissident in minutes. It would also find anyone, anytime.",
      ["Build the live surveillance grid.", "A state that sees all fears nothing.", "You gain a near-omniscient eye over the country. When its reach leaks, the outrage at home and abroad is volcanic.", { MI: 10, FI: -6, GL: -8, EN: -6 }],
      ["Wall the database behind strict warrants.", "A tool that watches everyone is a chain on everyone.", "You keep the ID system civil, not panoptic. You lose an instrument of control and keep a shred of liberty.", { GL: 8, EN: 6, MI: -6 }])),

  ax("Cyber Crime Unit Head", "official", ["cybercrime", "gambling", "scams"],
    sx("Online betting rings and OTP-fraud gangs are fleecing the public through foreign-hosted sites, and some local agents are tied to party youth. The head wants a sweeping cyber-crackdown.",
      ["Crack down hard, agents and all.", "Cut the scam off at the local hand.", "Arrests roll up the fraud rings and the party-linked agents both. A slice of your youth wing is suddenly facing court.", { EN: 8, GL: 6, FI: 4, FA: -6 }],
      ["Chase the foreign sites, spare the local agents.", "Do not jail our own boys over a side hustle.", "You block sites and spare the agents. The fraud reroutes and the public keeps bleeding small sums into the dark.", { MI: 4, FA: 4, EN: -8 }])),

  ax("Police Recruitment Board", "official", ["police", "recruitment", "merit"],
    sx("Constable jobs are openly sold for lakhs, so the force fills with men in debt to the brokers who placed them — and primed to extort to repay. The board offers a transparent, merit-only recruitment.",
      ["Enforce merit-only recruitment.", "A bought constable polices for his broker.", "Honest recruits enter a cleaner force. The recruitment mafias and the local bosses who ran them lose a fortune and turn hostile.", { EN: 8, GL: 4, MI: 4, FA: -8 }],
      ["Keep the comfortable status quo.", "Do not war with every thana at once.", "The jobs keep selling and the new constables keep extorting to clear their debts. The rot renews itself.", { FA: 4, MI: 4, EN: -10 }])),

  ax("Transport Authority Chief", "official", ["traffic", "unfit-vehicles", "gridlock"],
    sx("The capital is one vast jam of unfit, unlicensed vehicles run by syndicates that pay everyone. The chief wants to scrap the death-trap buses — owned by men who can put thousands of strikers on the road.",
      ["Scrap the unfit fleets.", "A city cannot run on rolling coffins.", "Dangerous buses come off the road and the air clears a little. The transport syndicates shut the city down in retaliation.", { EN: 8, GL: 4, MI: -6, FA: -4 }],
      ["Negotiate softly with the syndicates.", "They can paralyse the capital in an hour.", "You trade enforcement for peace with the bosses. The coffins keep rolling and the gridlock thickens.", { MI: 4, FA: 4, EN: -8 }])),

  ax("Counter-Terror Chief", "general", ["militancy", "terror", "raids"],
    sx("After a café siege shocked the world, the chief has cells under watch and wants pre-emptive raids. Go too hard and you radicalise the pious mainstream; go too soft and the next attack is on you.",
      ["Authorise aggressive pre-emptive raids.", "Strike the cells before they strike us.", "The plots are disrupted and the world credits your resolve. Heavy-handed raids on the wrong doors breed quiet new grievances.", { MI: 10, GL: 6, EN: -6 }],
      ["Pair surgical policing with de-radicalisation.", "You cannot raid a sermon out of a mind.", "You blend precise arrests with community work. Slower reassurance for the West, but a thinner recruiting ground over time.", { EN: 8, GL: 4, MI: -4, FI: -4 }])),

  ax("Slum Eviction Magistrate", "official", ["eviction", "slum", "land"],
    sx("A vast riverside slum sits on prime state land a developer covets, and the magistrate has bulldozers ready. Half a million of the city's poorest — your voters — live in those tin lanes.",
      ["Send in the bulldozers for the developer.", "The land is worth more than the shanties.", "The towers will rise and the treasury will profit. Half a million are scattered into the monsoon, and they remember your name.", { FI: 8, FA: 4, EN: -14, GL: -4 }],
      ["Halt the eviction, regularise the settlement.", "You do not bulldoze your own people for a tower.", "You give the slum legal footing and basic services. The developer and his patrons lose a fortune and your favour.", { EN: 12, GL: 4, FI: -8, FA: -4 }])),

  ax("Special Branch Analyst", "shadow", ["dissent", "journalists", "watchlist"],
    sx("The branch has assembled a watchlist of journalists, academics, and activists — 'persons of interest'. The analyst wants authority to tap, trail, and pressure them pre-emptively.",
      ["Authorise the surveillance dragnet.", "Know your critics before they move.", "You blind-side dissent before it organises. When the watchlist leaks, every name becomes a martyr and a headline.", { MI: 8, FA: 4, GL: -10, EN: -8 }],
      ["Disband the watchlist.", "A state afraid of its scholars is already weak.", "You stand down the dragnet. You lose an early-warning net and keep the country a place thought can still be spoken.", { GL: 8, EN: 8, MI: -8 }])),

  ax("Border Guard Sector Commander", "general", ["border", "smuggling", "haats"],
    sx("Cattle, phensedyl, and gold flow across the porous border through villages that live on the trade, while the neighbour's force shoots the smugglers dead. The commander wants legal border-haats to replace the black market.",
      ["Open legal border markets.", "Trade in daylight beats trade under fire.", "Sanctioned haats pull commerce into the open and cut the killings. The smuggling syndicates lose their margins and snarl.", { GL: 6, EN: 8, FI: 4, MI: -4 }],
      ["Crack down hard on the border villages.", "Smuggling is smuggling; stamp it out.", "Raids choke the trade and the border economy collapses. The villages, robbed of their living, curse the state that 'saved' them.", { MI: 6, EN: -10, FA: -4 }])),

  ax("Riot Control Commander", "general", ["protest", "crowd", "force"],
    sx("A grand opposition rally has filled the central avenue, peaceful but immense. The commander's finger hovers over the order: disperse it now with gas and batons, or let the sea of people have its day.",
      ["Disperse the rally by force.", "A crowd that size is a threat, not a meeting.", "The avenue is cleared in a haze of gas and blood. The footage hardens the opposition and shames you abroad.", { MI: 8, EN: -12, GL: -8 }],
      ["Police it lightly and let it pass.", "Let them shout; tomorrow they go home.", "The rally swells, peaks, and disperses on its own. Your hawks call it weakness; the day passes without a martyr.", { EN: 8, GL: 6, MI: -6 }])),

  ax("Disappearances Liaison", "official", ["disappearances", "families", "white-vans"],
    sx("Mothers of the vanished hold a silent vigil that has become a weekly fixture and a global symbol. A UN body wants to send investigators. Your security men want them refused at the airport.",
      ["Admit the investigators and open the cases.", "A state that hides its vans has lost its soul.", "Some of the missing surface; the world cautiously applauds the candour. The agencies responsible feel the ground shift beneath them.", { EN: 10, GL: 10, MI: -10 }],
      ["Refuse the UN team and disperse the mothers.", "No foreigner audits our security.", "You bar the investigators and clear the vigil. The mothers' grief becomes the opposition's sharpest, most enduring weapon.", { MI: 6, FA: 4, GL: -12, EN: -8 }])),

  ax("Domestic Worker Advocate", "people", ["labour", "abuse", "children"],
    sx("A child maid is found tortured in a wealthy home — not the first. The advocate wants registration and inspection of domestic workers, exposing what the comfortable classes do behind their gates.",
      ["Regulate and inspect domestic work.", "No child should vanish behind a rich gate.", "Inspections begin to pierce the private cruelty. The affluent — many of them your supporters — resent the intrusion.", { EN: 10, GL: 6, FA: -6 }],
      ["Treat it as a private family matter.", "The state does not enter the drawing room.", "You leave the gates closed and the maids unseen. The next tortured child is another headline you will have to manage.", { FA: 4, EN: -10, GL: -4 }])),

  ax("Election Security Chief", "general", ["election", "violence", "centres"],
    sx("Polling day looms and rival cadres are arming for the usual battle over the centres. The chief can deploy the army neutrally to guarantee a clean vote — or deploy it where it quietly helps your side.",
      ["Deploy the army strictly neutrally.", "Let the count be clean or not at all.", "The vote passes with rare calm and credibility. Your own machine grumbles that you gave away the home advantage.", { GL: 10, EN: 8, MI: -6 }],
      ["Tilt the deployment to your strongholds.", "Security is also strategy.", "Your centres are safe; the opposition's are not. You bank the seats and the observers' damning footnotes both.", { MI: 8, FA: 4, GL: -10, EN: -6 }])),

  ax("Acid & Dowry Cell", "people", ["acid", "dowry", "women"],
    sx("Acid attacks have ticked up again with the price of revenge gone cheap. The cell wants tight control of open acid sales and special tribunals — opposed by the chemical traders' lobby.",
      ["Lock down acid sales, fast-track the cases.", "A face burned for a dowry is a state's failure.", "Open acid vanishes from the bazaars and convictions quicken. The chemical traders lobby and grumble, but the wards see fewer victims.", { EN: 10, GL: 6, FI: -4, FA: -4 }],
      ["Leave the trade lightly regulated.", "Do not strangle a whole trade over a few cases.", "Acid stays cheap and available. Another disfigured woman, another vigil, another file you will answer for.", { FI: 4, EN: -10, GL: -4 }])),

  ax("Crowd Safety Officer", "official", ["events", "stampede", "public"],
    sx("A free-rice distribution and a religious gathering both expect vast crowds the same week, and last year a stampede killed dozens. The officer wants strict crowd-control and fewer, ticketed events.",
      ["Impose strict crowd controls.", "I will not preside over another stampede.", "The events run safely under tight management. Some call the controls heavy-handed and the charity less generous.", { EN: 8, MI: 4, FI: -4 }],
      ["Keep the events open and unmanaged.", "Do not fence in the people's gatherings.", "The crowds flow free and vast. The risk you waved away is one bad surge from becoming your next tragedy.", { EN: -8, FA: 4, GL: -4 }])),

  // ── Café siege / militant attack ────────────────────────────────────────────
  ax("Counter-Terror Commander", "general", ["terrorism", "siege", "militants"],
    sx("Militants have stormed an upscale café full of foreigners, executing those who cannot recite scripture. The world is watching live. Storm it now with heavy force, or negotiate and wait — each hour risking more throats?",
      ["Storm the café immediately.", "Every hour of delay is another execution.", "Commandos breach and end the siege in blood. Some hostages die in the assault, but the militants are wiped out and the state shows it will not be held to ransom.", { MI: 8, GL: -2, EN: -4 }],
      ["Negotiate and wait for a clean rescue.", "A panicked assault fills the morgue.", "You hold off and work for a safer resolution. The standoff drags agonisingly and the watching world frets, but a patient rescue may yet save those still alive inside.", { GL: 2, MI: -2, EN: -2 }]),
    sx("The siege is over, and the attackers turn out to be not impoverished fanatics but privileged, educated young men from good families — a fact that terrifies the elite. Launch a sweeping crackdown on suspect youth, or a quieter de-radicalisation drive?",
      ["Launch a sweeping crackdown on suspect youth.", "Root out the rot before it spreads.", "Mass detentions sweep up the young and the bearded. A few cells are broken, but the dragnet radicalises as many as it catches, and the abuses pile up.", { MI: 8, EN: -8, GL: -4 }],
      ["Invest in quiet de-radicalisation.", "You cannot arrest your way out of an idea.", "You build counselling, monitoring, and community programmes instead of mass arrests. The results are slow and invisible, but the pipeline of recruits begins, quietly, to thin.", { EN: 6, GL: 4, MI: -4 }])),

  // ── Mob lynching ────────────────────────────────────────────────────────────
  ax("Inspector-General of Police", "official", ["lynching", "rumour", "mob"],
    sx("A rumour that strangers are snatching children for a bridge's 'human sacrifice' has triggered a wave of mob lynchings — innocents beaten to death on suspicion. Order police to fire on lynch mobs, or run a rumour-control and arrest drive?",
      ["Authorise firing on lynch mobs.", "A mob that kills must fear the gun.", "Police open fire to break the worst mobs and the lynchings ebb. The deaths at police hands draw their own outcry, and the underlying panic still smoulders online.", { MI: 6, EN: -4, GL: -4 }],
      ["Crack down on rumours and arrest ringleaders.", "Kill the lie and the mob dissolves.", "You flood the networks with truth, arrest instigators, and protect the accused. It is slower than bullets, but the panic deflates without the state adding to the body count.", { EN: 6, GL: 4, MI: -2 }])),

  // ── Hefazat mass protest ────────────────────────────────────────────────────
  ax("Home Secretary", "cleric", ["islamist", "protest", "blasphemy"],
    sx("A vast Islamist movement has occupied the heart of the capital, demanding a blasphemy law and the removal of a 'pagan' sculpture, refusing to leave. Clear the square by force at midnight, or negotiate and concede some symbolic ground?",
      ["Clear the square by force at night.", "The capital cannot be held hostage.", "Police and paramilitaries clear the square in a dark, bloody operation. The occupation ends and rumours of a massacre spread; the movement gains martyrs and a grievance that will not die.", { MI: 8, EN: -8, GL: -6 }],
      ["Negotiate and concede symbolic ground.", "A square emptied by talk leaves no martyrs.", "You move the disputed sculpture and promise to 'study' their demands, and the occupation disperses. Secularists feel betrayed by the concession, but the capital is spared a massacre.", { EN: 2, MI: -2, GL: 2, FA: -2 }])),

  // ── Pegasus-style spyware ───────────────────────────────────────────────────
  ax("Intelligence Procurement Chief", "shadow", ["spyware", "surveillance", "dissent"],
    sx("A foreign vendor offers military-grade phone spyware that cracks any device — a tool to read every plot, journalist, and judge in the country. The chief is desperate for it; the catch is the inevitable leak that you bought it to spy on your own people.",
      ["Buy the spyware.", "A leader who cannot read the room is blind.", "You acquire the spyware and the secrets pour in. Every rival's phone is an open book — until the purchase leaks, and the word 'surveillance state' attaches to your name for good.", { MI: 8, GL: -6, EN: -6 }],
      ["Decline the spyware.", "A tool that reads everyone eventually reads its master's enemies into power.", "You pass on the spyware. You forgo a formidable surveillance edge, but you are spared the day an exposé reveals you bugged judges, journalists, and your own ministers.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Political prisoners / overcrowded jails ─────────────────────────────────
  ax("Prisons Inspector-General", "official", ["prisons", "political", "overcrowding"],
    sx("The jails hold three times their capacity, swollen with opposition activists swept up in mass cases, and deaths in custody mount. Release the low-level political detainees to ease the crush, or hold them all and build more cells?",
      ["Hold them all, build more cells.", "A freed activist is a refilled street.", "You keep the jails packed and order new prisons built. The opposition stays caged and the streets quiet, but the deaths in custody and the cost of the cells both keep climbing.", { MI: 6, FI: -4, EN: -8, GL: -4 }],
      ["Release the low-level political detainees.", "A jail bursting with the innocent shames the state.", "You free thousands held on flimsy mass cases. The hardliners warn the streets will fill, but the custodial deaths fall and the courts and jails can breathe.", { EN: 8, GL: 6, MI: -6 }])),

  // ── Campus killing (Abrar-style) ────────────────────────────────────────────
  ax("University Affairs Officer", "people", ["students", "campus", "torture"],
    sx("Your party's student-wing cadres have tortured a student to death in a dorm 'guest room' for a Facebook post criticising the government. The campus and the nation are erupting. Shield the cadres, or hand them to justice?",
      ["Shield the student-wing cadres.", "I do not feed my own loyalists to a mob.", "You quietly protect the killers and float counter-narratives. The cover-up enrages the campuses further, and the dead student becomes a permanent symbol of your wing's impunity.", { MI: 2, FA: 2, EN: -12, GL: -6 }],
      ["Hand the killers to justice.", "A boy tortured to death is not a loyalty test.", "You let the cadres be arrested and charged. The student wing feels betrayed and the machine grumbles, but the campuses, stunned, see a flicker of accountability.", { EN: 8, GL: 6, MI: -4, FA: -4 }])),

  // ── Facial recognition city ─────────────────────────────────────────────────
  ax("Smart City Director", "official", ["cctv", "facial-recognition", "privacy"],
    sx("A 'safe city' project would blanket the capital in cameras with live facial recognition — a genuine boon against crime, and a perfect tool for tracking every protester and dissident. The director wants the full system; civil society is alarmed.",
      ["Deploy the full facial-recognition net.", "A watched city is a safe city.", "Cameras and face-tracking blanket the capital. Street crime and terror plots get easier to foil, and so does following every activist from home to rally to home.", { MI: 8, EN: -6, GL: -4 }],
      ["Deploy cameras without facial tracking.", "I will deter the mugger without indexing the marcher.", "You install the cameras but bar the face-recognition layer. You gain real crime deterrence without building a tool to map every dissident's movements.", { MI: 4, EN: 4, GL: 2, FI: -2 }])),

  // ── RAB reform under sanctions ──────────────────────────────────────────────
  ax("Security Reform Adviser", "general", ["rab", "sanctions", "reform"],
    sx("Your elite battalion is under foreign sanctions for extrajudicial killings, and the crossfire deaths have all but stopped under scrutiny — but crime is creeping back and hardliners want the gloves off again. Entrench the reform, or quietly revert?",
      ["Quietly let the crossfire killings resume.", "Fear was the only law the criminals respected.", "You ease the leash and the 'crossfire' deaths quietly return. Crime dips and the hardliners cheer, but the sanctions harden and the reform's brief promise dies.", { MI: 8, EN: -6, GL: -8 }],
      ["Entrench the reform, rebuild on accountability.", "A force that murders cannot be trusted to police.", "You lock in the restraint and rebuild the battalion around oversight and proper investigation. Crime-fighting is slower and the hardliners scornful, but the sanctions ease and a killing machine becomes a police force.", { GL: 8, EN: 6, MI: -6 }])),

  // ── Thana-level police bribery ──────────────────────────────────────────────
  ax("Police Reform Commissioner", "official", ["police", "corruption", "bribery"],
    sx("At the local police stations, nothing moves without a bribe — filing a case, getting bail, even reporting a crime. The commissioner wants a transparency overhaul with citizen oversight; the rank-and-file, who live on the bribes, will resist fiercely.",
      ["Force the transparency overhaul.", "A police that sells justice is a syndicate in uniform.", "You impose digital records, citizen oversight, and anti-bribery teams. The rank-and-file seethe and slow-walk, but ordinary people start getting served without paying for it.", { EN: 8, GL: 4, MI: -4 }],
      ["Leave the thana culture alone.", "A demoralised force is a useless one.", "You decline to disturb the station-house economy. The constables stay content and pliable, and the poor keep paying a bribe for every scrap of justice the state owes them free.", { MI: 4, FA: 2, EN: -8 }])),

  // ── Human trafficking boat ring ─────────────────────────────────────────────
  ax("Anti-Trafficking Chief", "shadow", ["trafficking", "boats", "syndicate"],
    sx("A trafficking syndicate is loading desperate young men onto death-trap boats to Malaysia, where many drown or end in jungle camps — and the network has police and border-guard protection. The chief wants it smashed, names and all.",
      ["Smash the network, protectors and all.", "A trade in drowning men cannot have a uniform's blessing.", "You break the syndicate and expose the officers shielding it. The trafficking route is disrupted and the corrupt purged, to international relief and some internal fury.", { EN: 8, GL: 6, MI: -2, FA: -4 }],
      ["Take down only the visible smugglers.", "Some uniforms are better left unexamined.", "You arrest the front-line smugglers and leave their protectors untouched. The route reopens under new management within weeks, and the boats keep sailing into the dark.", { MI: 2, FI: 2, EN: -6, GL: -4 }])),

  // ── Minority sect protection ────────────────────────────────────────────────
  ax("Religious Harmony Officer", "cleric", ["minorities", "sect", "violence"],
    sx("A hardline movement is whipping up mobs against a small heterodox Muslim sect, attacking their mosques and demanding they be declared non-Muslim. Protect the sect with force, or appease the majority by quietly conceding?",
      ["Protect the sect with force.", "The state shields the few from the many, or it shields no one.", "You deploy security to defend the sect's mosques and arrest the instigators. The hardline preachers turn their fury on you, but the constitution's promise of equal protection holds.", { EN: 8, GL: 6, MI: -2, FA: -4 }],
      ["Appease the majority, concede the demand.", "I will not burn the country for one small sect.", "You quietly distance the state from the sect to placate the mob. The hardliners are triumphant, the violence subsides, and a small community learns the state will trade them for peace.", { MI: 4, FA: 2, EN: -8, GL: -6 }])),

  // ── Cultural festival under threat ──────────────────────────────────────────
  ax("Cultural Affairs Officer", "official", ["culture", "festival", "extremism"],
    sx("The great secular new-year festival — music, masks, processions — faces a credible militant bomb threat, and hardliners denounce it as 'un-Islamic'. Lock it down behind a security wall, or cancel it 'for safety' and quietly please the zealots?",
      ["Hold the festival behind heavy security.", "Our culture will not be cancelled by a threat.", "You ring the festival with security and it goes ahead, defiant and joyous. The cost and the tension are high, but the secular tradition stands and the militants are denied their veto.", { EN: 8, GL: 4, MI: -2, FI: -4 }],
      ["Cancel the festival 'for safety'.", "A dead crowd is too high a price for a parade.", "You call it off, citing the threat. The zealots quietly celebrate the cancellation they wanted, the secularists mourn a tradition surrendered, and the militants learn that a threat is enough.", { MI: 2, FA: -2, EN: -6, GL: -4 }])),

  // ── Whistleblower officer ───────────────────────────────────────────────────
  ax("Internal Affairs Director", "official", ["whistleblower", "police", "accountability"],
    sx("A serving officer has leaked documents proving a senior commander ordered a string of fake 'crossfire' killings. Prosecute the whistleblower for breaching secrecy and bury it, or protect him and pursue the commander?",
      ["Prosecute the whistleblower, bury it.", "A leaker is a traitor whatever he reveals.", "You jail the whistleblower and quash the story. The killings stay covered, but the lesson lands in every honest officer: speak, and the state will break you, not the killer.", { MI: 6, FA: 2, EN: -8, GL: -6 }],
      ["Protect him, pursue the commander.", "An officer with a conscience is worth ten without.", "You shield the whistleblower and move against the commander. The old guard is shaken and warns of low morale, but a culture of impunity takes its first real blow.", { EN: 8, GL: 6, MI: -6 }])),

  // ── Section 144 / rally ban ─────────────────────────────────────────────────
  ax("District Magistrate", "official", ["protest", "ban", "assembly"],
    sx("The opposition has called a massive rally in the capital, and you can pre-emptively ban all gatherings under the old colonial assembly law. The magistrate warns the ban itself may provoke exactly the confrontation you fear.",
      ["Ban the rally under Section 144.", "A rally forbidden is a rally that cannot grow.", "You blanket the city in an assembly ban and flood it with police. The rally is throttled, but the heavy-handed lockdown of the capital becomes the story, and the grievance hardens.", { MI: 6, EN: -6, GL: -4 }],
      ["Permit the rally under conditions.", "A banned gathering becomes a battle; a permitted one becomes a speech.", "You allow the rally within agreed limits. The opposition gets its day and its crowd, but the feared confrontation never comes, and the state looks confident rather than afraid.", { GL: 4, EN: 4, MI: -2 }])),

  // ── Firearms licences for party men ─────────────────────────────────────────
  ax("Arms Licensing Officer", "fixer", ["firearms", "party", "patronage"],
    sx("Local party leaders are pressing for a wave of private firearms licences — ostensibly for self-defence, in truth to arm the local muscle that wins elections. Approve the lot as a loyalty reward, or tighten licensing and disarm the cadres?",
      ["Approve the firearms licences.", "An armed friend is a loyal friend.", "You sign off on the licences and the local strongmen are armed. They deliver elections and intimidate rivals, and the country grows a little more lawless, district by district.", { MI: 4, FA: 4, EN: -8, GL: -2 }],
      ["Tighten licensing, disarm the cadres.", "A party with guns is a militia in waiting.", "You clamp down on private firearms, your own side included. The local leaders feel disarmed and betrayed, but the cycle of armed political muscle loosens its grip.", { EN: 6, GL: 4, MI: -2, FA: -4 }])),

  // ── Returning foreign fighters ──────────────────────────────────────────────
  ax("Counter-Terror Commander", "general", ["extremism", "foreign-fighters", "deradicalisation"],
    sx("A handful of citizens who went abroad to fight for a terror group want to return, some with wives and children born in the war zone. Bar or jail them all as a danger, or repatriate and rehabilitate under close watch?",
      ["Bar or jail the returnees outright.", "A trained jihadi is a threat, not a project.", "You refuse entry or jail those who slip back. The hard line plays well, but the stranded radicalise further abroad and the children pay for their fathers' choices, drawing rights criticism.", { MI: 6, EN: -2, GL: -4 }],
      ["Repatriate and rehabilitate under watch.", "A child of the caliphate is still a child.", "You bring them home into monitoring and de-radicalisation, prosecuting the guilty. It is a risk and the public is uneasy, but you reclaim the salvageable and the innocent rather than abandoning them.", { GL: 4, EN: 4, MI: -2 }])),

  // ── Press accreditation purge ───────────────────────────────────────────────
  ax("Information Security Officer", "official", ["press", "accreditation", "surveillance"],
    sx("You can quietly strip press accreditation from the most critical journalists — cutting their access without an arrest. The officer calls it clean and deniable; it is also an unmistakable signal that coverage is now conditional on loyalty.",
      ["Strip the critics' accreditation.", "Access is a privilege for the friendly.", "The critical reporters lose their passes and their scoops. The press corps gets the message and softens, and 'managed media' becomes one more charge in the indictment of your rule.", { MI: 4, FA: 2, EN: -6, GL: -6 }],
      ["Keep accreditation open to all.", "A press corps of flatterers tells me nothing.", "You leave access untouched, critics and all. The tough questions keep coming at every briefing, but your government keeps a free press it can point to abroad.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Jailbreak / militant escape ─────────────────────────────────────────────
  ax("Prisons Inspector-General", "general", ["jailbreak", "militants", "security"],
    sx("Convicted militants have broken out of a high-security prison with apparent inside help, and are loose in the country. Launch a massive, disruptive nationwide manhunt, or a targeted, intelligence-led pursuit?",
      ["Launch a massive nationwide dragnet.", "Flood the country until they surface.", "Checkpoints and sweeps blanket the nation. The disruption is enormous and the wrongful detentions many, and the fugitives may still slip the clumsy net.", { MI: 6, EN: -6, FI: -2 }],
      ["Run a targeted intelligence-led pursuit.", "A scalpel catches what a sledgehammer scatters.", "You hunt the escapees quietly through intelligence and informants. It is slower and the public nervous, but the country is not paralysed and the inside helpers are traced too.", { MI: 4, GL: 2, EN: 2 }])),

  // ── Garment worker protest policing ─────────────────────────────────────────
  ax("Industrial Police Chief", "general", ["labour", "garments", "protest"],
    sx("Tens of thousands of garment workers have walked out over unpaid wages and blocked the industrial highways. The factory owners — your donors — demand the protest crushed. Send the industrial police in hard, or broker a wage settlement?",
      ["Crush the worker protest.", "The export zones cannot be held hostage.", "The police clear the highways with batons and tear gas, and a worker or two die. The owners are grateful and the lines restart, but the deaths become a global stain on the garment brand.", { MI: 6, FI: 4, EN: -10, GL: -6 }],
      ["Broker a wage settlement.", "Unpaid workers are a fire; do not fan it with batons.", "You force the owners to pay the arrears and mediate a raise. The donors grumble at the squeeze, but the highways clear peacefully and the workers go back with their dignity.", { EN: 8, GL: 4, FI: -4, FA: -4 }])),

  // ── Vested-property land grab ───────────────────────────────────────────────
  ax("Land Records Commissioner", "people", ["minorities", "land", "grabbing"],
    sx("Under a notorious old law, minority Hindu families' land has been seized as 'enemy property' and grabbed by the locally powerful — often your own people. A restitution drive could return it; the grabbers, with party ties, will fight to keep it.",
      ["Drive the land restitution.", "Land stolen under a bigot's law must go home.", "You push to return the seized property to its rightful owners. The connected grabbers rage and resist parcel by parcel, but a historic injustice begins, at last, to be undone.", { EN: 8, GL: 6, MI: -2, FA: -6 }],
      ["Leave the seized land with its holders.", "I will not evict my own base for old ghosts.", "You let the grabbers keep their spoils. Your local power-holders are secured, and the minority families learn once more that the law that robbed them will not give it back.", { FA: 6, MI: 2, EN: -8, GL: -4 }])),

  // ── National ID surveillance database ───────────────────────────────────────
  ax("NID Database Director", "official", ["nid", "database", "surveillance"],
    sx("The national ID system can be fused with phones, banks, travel, and biometrics into a single all-seeing profile of every citizen — efficient government, and a surveillance dossier on the whole population. The director wants full integration; privacy advocates are aghast.",
      ["Build the fully integrated profile.", "A state that knows its citizens governs them well.", "You fuse the databases into one omniscient citizen profile. Services get slicker and fraud harder, and the state acquires a dossier on every life that no future ruler will ever dismantle.", { MI: 6, FI: 4, EN: -6, GL: -4 }],
      ["Keep the databases walled off.", "A single key to every life is too much for any hand.", "You bar the full integration and keep firewalls between the systems. Government is clunkier and some fraud slips through, but no all-seeing profile of the citizenry is ever assembled.", { EN: 6, GL: 4, FI: -2, MI: -2 }])),

  // ── Madrasa regulation ──────────────────────────────────────────────────────
  ax("Education-Security Liaison", "cleric", ["madrasa", "curriculum", "extremism"],
    sx("Tens of thousands of unregistered religious schools teach a curriculum the state cannot see, some shading into extremism. The liaison wants them registered and teaching maths, science, and citizenship; the clergy calls it an assault on faith.",
      ["Force registration and a modern curriculum.", "A school the state cannot see is a school it cannot trust.", "You bring the madrasas under registration and a broadened curriculum. The clerics protest the intrusion and some resist, but a generation gains numeracy and a window onto the wider world.", { EN: 6, GL: 4, MI: -2, FA: -4 }],
      ["Leave the religious schools autonomous.", "I will not pick a fight with every mosque in the land.", "You leave the madrasas to themselves to keep the clergy onside. The establishment is grateful, but a vast parallel education stays beyond the state's sight, curriculum and all.", { FA: 6, MI: 2, EN: -6, GL: -2 }])),

  // ── Traffic police extortion ────────────────────────────────────────────────
  ax("Traffic Division Chief", "official", ["traffic", "extortion", "corruption"],
    sx("The traffic police live off a daily tax on every bus, truck, and rickshaw, waving through the dangerous and fining the compliant. Launch a clean-up with cashless fines and oversight, or leave the racket that keeps the force quietly content?",
      ["Clean up the traffic racket.", "A road tax in a constable's pocket is theft with a whistle.", "You bring in cashless fines, cameras, and oversight. The constables lose their daily skim and resent it, but the roads grow fractionally fairer and safer.", { EN: 6, GL: 2, MI: -4 }],
      ["Leave the traffic police to their ways.", "A contented constable is a compliant one.", "You leave the roadside economy alone. The force stays loyal and well-fed on bribes, and the buses that pay keep killing on the highways while the honest pay the fines.", { MI: 4, FA: 2, EN: -6 }])),

  // ── Sufi shrine attacks ─────────────────────────────────────────────────────
  ax("Counter-Terror Commander", "cleric", ["shrines", "sufi", "militants"],
    sx("Militants are bombing and hacking to death the keepers of Sufi shrines — the gentle, syncretic Islam the hardliners despise. The commander wants armed protection at the shrines and a crackdown on the inciting preachers — which means confronting powerful clerics.",
      ["Protect the shrines and confront the inciters.", "The faith of the saints will not be bombed into silence.", "You guard the shrines and move against the preachers fuelling the attacks. The powerful clerics rage at being named, but the pluralist tradition gains a defender and the killings slow.", { EN: 6, GL: 4, MI: -2, FA: -4 }],
      ["Guard the shrines but spare the preachers.", "I will protect the shrine without naming the mosque.", "You post guards but avoid confronting the inciting clerics. The attacks continue, fed by sermons you dare not touch, and the shrine-keepers learn that protection stops at the pulpit.", { MI: 2, FA: 2, EN: -4, GL: -2 }])),

  // ── High-profile rape case ──────────────────────────────────────────────────
  ax("Inspector-General of Police", "people", ["women", "rape", "justice"],
    sx("A horrific gang-rape, filmed and shared by the attackers — politically connected young men — has ignited nationwide protests demanding justice. Let the case take its full course against the connected, or let it quietly stall?",
      ["Pursue the connected attackers fully.", "A crime this vile cannot buy its way free.", "You let the case proceed hard against the well-connected accused. Their patrons lean on you and lose, the protesters are vindicated, and rare faith in justice flickers back to life.", { EN: 10, GL: 6, MI: -2, FA: -6 }],
      ["Let the case quietly stall.", "Their families are friends I cannot afford to lose.", "You let the case sink into delay and lost evidence. The connected walk, the protests curdle into cynicism, and every woman in the country reads the verdict on whose justice this is.", { FA: 6, MI: 2, EN: -12, GL: -6 }])),

  // ── Border guard smuggling ──────────────────────────────────────────────────
  ax("Border Guard Director", "shadow", ["border", "smuggling", "corruption"],
    sx("Your own border guards run a thriving smuggling trade — cattle, drugs, gold, phensedyl — in collusion with their counterparts across the wire. Purge the corrupt battalions, risking morale and a guarded border, or keep the lucrative status quo?",
      ["Purge the smuggling battalions.", "A border guard who smuggles guards nothing.", "You root out the corrupt commanders and break the rackets. Morale dips and the border briefly wobbles, but the contraband flood eases and the force's discipline begins to mend.", { EN: 4, GL: 4, MI: -2, FI: 2 }],
      ["Leave the border rackets running.", "A purge now leaves the wire unwatched.", "You leave the smuggling economy intact to keep the battalions content. The border stays manned and the contraband — drugs especially — keeps pouring across into the towns.", { MI: 4, FA: 2, EN: -8 }])),

  // ── Curfew during unrest ────────────────────────────────────────────────────
  ax("Home Secretary", "general", ["curfew", "unrest", "order"],
    sx("Unrest is spreading city to city, and the secretary urges a nationwide curfew with shoot-on-sight authority to 'restore order overnight'. It would clear the streets — and any death under it becomes a death you ordered.",
      ["Impose curfew with shoot-on-sight.", "Order restored at dawn is worth a hard night.", "The curfew empties the streets and the unrest is frozen by force. The shoot-on-sight deaths become infamous, and the quiet you buy is the quiet of a country holding its breath in fear.", { MI: 8, EN: -10, GL: -8 }],
      ["Impose a curfew without lethal force.", "A curfew is a pause, not a firing line.", "You order a curfew but forbid shooting into crowds, relying on presence and arrests. The streets clear more slowly and unevenly, but the night does not end with a massacre to answer for.", { MI: 4, EN: -2, GL: -2 }])),

  // ── Internet blackout during unrest ─────────────────────────────────────────
  ax("Telecom Security Officer", "shadow", ["internet", "blackout", "unrest"],
    sx("With protests organising by phone, the officer can order a total internet and mobile blackout to blind and scatter them. It would choke the coordination — and the economy, the hospitals, and the last window onto what your forces do in the dark.",
      ["Order a total communications blackout.", "Cut the signal and the crowd cannot gather.", "The country goes dark and the protests fragment. Commerce freezes, hospitals scramble, and the blackout itself — and what it hides — becomes the global headline against you.", { MI: 6, FI: -6, EN: -8, GL: -8 }],
      ["Keep the networks on, target specific cells.", "A nation blinded is a nation that assumes the worst.", "You leave the internet up and pursue specific organisers instead. The protests stay coordinated, but the economy runs, the hospitals function, and your forces act in daylight.", { GL: 4, FI: 2, EN: 2, MI: -2 }])),

  // ── Police body cameras ─────────────────────────────────────────────────────
  ax("Police Reform Commissioner", "official", ["police", "accountability", "body-cameras"],
    sx("A reform drive proposes body cameras and a real complaints commission for the police — a check on the brutality that fuels public hatred of the force. The rank-and-file and their commanders see a leash and a humiliation, and resist hard.",
      ["Mandate body cameras and oversight.", "A camera on the badge is a witness for the citizen.", "You force body cameras and an independent complaints body. The commanders bristle and the footage occasionally damns them, but public trust in the police, long dead, stirs faintly.", { EN: 8, GL: 4, MI: -4 }],
      ["Drop the accountability reforms.", "A leashed force is a hesitant one when it matters.", "You shelve the cameras and the commission to keep the force happy. The brutality goes on unrecorded, and the gulf between the police and the people they answer to yawns wider.", { MI: 4, FA: 2, EN: -8 }])),

  // ── Vigilante morality policing ─────────────────────────────────────────────
  ax("District Magistrate", "cleric", ["morality", "vigilantes", "youth"],
    sx("Self-appointed morality squads are harassing couples in parks, attacking 'immodest' women, and beating young people for un-Islamic dress. The hardliners call them guardians of virtue. Arrest the squads, or quietly tolerate them?",
      ["Arrest the morality squads.", "The state polices the streets, not a self-righteous mob.", "You jail the vigilantes and protect the harassed. The hardline preachers howl about defending vice, but the parks and streets become a little freer and a little safer.", { EN: 8, GL: 4, MI: -2, FA: -4 }],
      ["Tolerate the morality patrols.", "Let the pious keep the streets decent.", "You look away as the squads enforce their code. The hardliners are gratified, and a creeping, unofficial morality police takes root, answering to no law but its own.", { FA: 4, MI: 2, EN: -8, GL: -4 }])),

  // ── Secret detention site exposed ───────────────────────────────────────────
  ax("Intelligence Chief", "shadow", ["disappearances", "detention", "exposure"],
    sx("Investigators have located a secret detention site — an 'Aynaghar' of mirrored cells where the disappeared are held off the books. The story is about to break. Deny everything and bury the site, or acknowledge it and free the captives?",
      ["Deny it and bury the site.", "A secret admitted is a secret weaponised.", "You raze the site, scrub the records, and deny it ever existed. The denials collapse under the survivors' testimony, and the secret prison becomes the defining symbol of your rule.", { MI: 4, EN: -10, GL: -8 }],
      ["Acknowledge it and free the captives.", "A crime confessed can at least be ended.", "You shut the site, release the held, and promise an inquiry. The admission is a bombshell and the security establishment panics, but the disappeared come home and a monstrous chapter closes.", { EN: 8, GL: 8, MI: -8 }])),

  // ── Hill tracts checkpoints ─────────────────────────────────────────────────
  ax("Hill Tracts Security Officer", "general", ["cht", "insurgency", "checkpoints"],
    sx("In the hill tracts, the army's web of checkpoints and camps controls indigenous life and feeds a low-grade insurgency, while settlers and soldiers want the grip kept tight. Draw down the military presence per the peace accord, or hold it?",
      ["Hold the heavy military grip.", "A drawdown invites the insurgents back.", "You keep the camps and checkpoints in place. The settlers and brass are reassured, but indigenous resentment festers under the daily indignity, and the accord rots another year.", { MI: 6, EN: -8, GL: -4 }],
      ["Draw down per the peace accord.", "A region held at gunpoint is never truly held.", "You pull back camps and ease the checkpoints as the accord requires. The army and settlers warn of chaos, but the hill peoples breathe, and a buried peace process stirs.", { EN: 8, GL: 6, MI: -6, FA: -2 }])),

  // ── Riot over a blasphemous post ────────────────────────────────────────────
  ax("District Magistrate", "cleric", ["communal", "blasphemy", "rumour"],
    sx("A doctored screenshot alleging a Hindu youth insulted the Prophet has set mobs torching a minority village. The youth may well be framed. Protect the village and investigate the framing, or appease the mob by arresting the accused?",
      ["Protect the village, investigate the framing.", "A village burned on a forgery is a crime against us all.", "You deploy force to shield the village and pursue whoever forged the post. The mob's instigators are exposed and jailed, and the framed youth is spared a fate sealed by a lie.", { EN: 8, GL: 6, MI: -2, FA: -4 }],
      ["Arrest the accused to calm the mob.", "An arrest now is cheaper than a riot tonight.", "You jail the accused youth to placate the crowd, guilt unproven. The village still smoulders, the real forgers go free, and the law bends, once again, to whoever can summon a mob.", { MI: 4, FA: 2, EN: -10, GL: -6 }])),

  // ── VIP security drain ──────────────────────────────────────────────────────
  ax("Protocol Security Chief", "general", ["vip", "security", "resources"],
    sx("A huge share of the police is tied up guarding ministers, MPs, and their families, stripping protection from ordinary neighbourhoods. Slash the VIP details and redeploy to the public, or keep the entourages your elite expects?",
      ["Slash VIP security, redeploy to the public.", "A constable guarding a minister's nephew is stolen from a slum.", "You cut the bloated VIP details and push police back into the neighbourhoods. The elite fume at their shrunken entourages, but ordinary streets see a uniform again.", { EN: 8, GL: 2, MI: 2, FA: -6 }],
      ["Keep the VIP protection as it is.", "An exposed minister is an unstable government.", "You leave the entourages intact. The elite feel safe and flattered, and the ordinary neighbourhoods keep waiting for a police presence that is parked outside someone's mansion.", { FA: 6, MI: 2, EN: -8 }])),

  // ── Cyber patrol against dissent ────────────────────────────────────────────
  ax("Cyber Patrol Commander", "shadow", ["online", "dissent", "speech"],
    sx("A new cyber-patrol unit can monitor social media around the clock and arrest citizens for 'anti-state' posts — memes, jokes, criticism. A wide mandate would chill all online speech and fill the jails with teenagers over Facebook posts.",
      ["Give the cyber patrol a wide mandate.", "A nation's mood is made on its phones; watch them.", "The unit trawls the feeds and the arrests for posts begin. Online criticism withers into silence, and the spectacle of teenagers jailed over memes draws global derision.", { MI: 6, EN: -8, GL: -6 }],
      ["Restrict it to genuine threats only.", "A meme is not a crime, and a jail is not a comments section.", "You confine the unit to real incitement and terror, not criticism. The dissent stays loud and irritating online, but the jails are not filled with children over Facebook posts.", { GL: 4, EN: 6, MI: -4 }])),

  // ── Forced eviction enforcement ─────────────────────────────────────────────
  ax("Inspector-General of Police", "people", ["eviction", "slums", "force"],
    sx("A court has ordered a vast slum cleared from contested land, and the police must execute it. Carry out a brutal dawn eviction with bulldozers, or slow-walk it and push for resettlement first?",
      ["Carry out the dawn eviction by force.", "A court order is a court order.", "Bulldozers and baton charges clear the slum at first light. The land is cleared and the optics are savage — families weeping over rubble — and the resentment will outlast the headlines.", { MI: 4, FI: 2, EN: -10, GL: -4 }],
      ["Slow-walk it, push for resettlement first.", "I will not bulldoze the poor into the street at dawn.", "You delay enforcement and press for relocation sites before any clearance. The landowner and the court grow impatient, but the eviction, when it comes, does not begin with families in the rain.", { EN: 8, GL: 2, MI: -2, FI: -2 }])),

  // ── Ansar / village defence force ───────────────────────────────────────────
  ax("Auxiliary Forces Director", "general", ["ansar", "village", "militia"],
    sx("The vast village auxiliary force could be armed as a rural security backbone — cheap manpower loyal to the state — or become a politicised village militia settling local scores under colour of authority. The director awaits your call.",
      ["Arm and empower the village auxiliaries.", "A loyal force in every village is a state in every village.", "You arm and expand the auxiliaries into a rural security web. Coverage spreads cheaply, and so does the abuse, as local commanders use their new authority to settle old scores.", { MI: 6, EN: -6, FA: 2 }],
      ["Keep the auxiliaries unarmed and limited.", "An armed militia in every village is a thousand small tyrannies.", "You keep the force unarmed and tightly bounded. Rural security leans more on the regular police, but you avoid seeding the countryside with armed men answering to local bosses.", { EN: 4, GL: 2, MI: -2 }])),

  // ── Counterfeit currency ring ───────────────────────────────────────────────
  ax("Financial Crimes Chief", "shadow", ["counterfeit", "currency", "crime"],
    sx("A sophisticated counterfeit-currency ring, run from across the border, is flooding the markets with fake notes and eroding trust in cash. Mount a costly crackdown and currency-upgrade, or let it run and quietly manage the damage?",
      ["Crack down and upgrade the currency.", "Fake money is a slow poison in the bloodstream.", "You smash the distribution networks and roll out harder-to-forge notes. The operation is costly and disruptive at the tills, but trust in the cash in people's hands is restored.", { MI: 2, FI: 4, EN: 2, GL: 2 }],
      ["Let it run and manage the damage.", "A currency overhaul is a budget I will not spend on a nuisance.", "You leave the ring largely alone and absorb the losses. The fakes keep circulating, the cash economy frays at the edges, and the cross-border syndicate grows bolder.", { FI: -2, EN: -4, MI: -2 }])),

  // ── Eve-teasing / public harassment ─────────────────────────────────────────
  ax("Women's Safety Officer", "people", ["women", "harassment", "safety"],
    sx("Street harassment of girls and women — 'eve-teasing' that has driven some to suicide — is endemic and unpunished. The officer wants rapid-response units, mobile courts, and harassment made a real, enforced offence; the cultural pushback calls it policing male nature.",
      ["Enforce harassment as a real crime.", "A girl afraid to walk to school is a society failing her.", "You stand up rapid-response teams and mobile courts and start jailing harassers. The cultural grumbling is loud, but girls and women begin, cautiously, to reclaim the streets.", { EN: 8, GL: 4, MI: -2, FA: -2 }],
      ["Leave it to social norms.", "The street cannot be policed for every catcall.", "You decline to make it a priority. The harassment goes on unchecked, the streets stay hostile to half the population, and another schoolgirl's suicide note names names no one will pursue.", { FA: 2, EN: -8, GL: -2 }])),

  // ── Atheist blogger killings ────────────────────────────────────────────────
  ax("Counter-Terror Commander", "shadow", ["bloggers", "extremism", "secularism"],
    sx("Machete-wielding militants are hacking secular bloggers and publishers to death in the streets, and a hit-list circulates online. The commander wants the targets protected and the cells hunted; hardliners hint the victims 'insulted faith'.",
      ["Protect the targets and hunt the cells.", "A citizen's life is not forfeit for a sentence he wrote.", "You assign protection to the listed and hunt the killers hard. The hardliners mutter that you defend blasphemers, but the murders slow and the state shows it shields even those it disagrees with.", { EN: 8, GL: 6, MI: 2, FA: -4 }],
      ["Quietly let the matter lie.", "I will not spend the force defending men who provoke the pious.", "You offer little protection and a soft pursuit. The hardliners are satisfied, the hit-list lengthens, and the world watches secular voices hacked down while the state looks away.", { FA: 4, MI: 2, EN: -10, GL: -8 }])),

  // ── Remand and torture for confessions ──────────────────────────────────────
  ax("Police Reform Commissioner", "doctor", ["remand", "torture", "confession"],
    sx("Investigations here lean on confessions beaten out of suspects on remand, sending innocents to the gallows and letting real culprits walk. The commissioner wants forensic, evidence-based policing and an end to torture-remand; the old guard says it ties them.",
      ["End torture-remand, build forensic policing.", "A confession under torture convicts the innocent and frees the guilty.", "You ban torture-remand and invest in forensics and training. The old guard complains their hands are tied, but wrongful convictions fall and real evidence starts to convict the real culprits.", { EN: 8, GL: 6, MI: -4 }],
      ["Leave the remand culture intact.", "A force without remand is a force without leverage.", "You leave the beat-a-confession culture untouched. Cases 'close' fast on coerced statements, innocents hang, and the real criminals — and the rot in the method — go on undisturbed.", { MI: 4, EN: -8, GL: -6 }])),

  // ── Passport and immigration racket ─────────────────────────────────────────
  ax("Immigration Director", "fixer", ["passport", "immigration", "corruption"],
    sx("The passport and immigration offices run on bribes — fast-tracking the payers, stalling the honest, and quietly issuing genuine documents to criminals. Digitise and clean the system, or keep the lucrative counters humming?",
      ["Digitise and clean the passport system.", "A passport sold to a trafficker is a border breached.", "You automate and audit the offices and the bribery withers. Honest applicants get served and the document-for-criminals trade is choked, and the counter staff who lived on bribes seethe.", { EN: 6, GL: 4, MI: 2, FA: -2 }],
      ["Leave the passport counters as they are.", "A demoralised office processes nothing.", "You leave the racket running. The bribes flow and the queues move for those who pay, and genuine passports keep finding their way into the hands of traffickers and fugitives.", { MI: 2, FA: 2, EN: -6, GL: -4 }])),

  // ── Death-row mercy petition ────────────────────────────────────────────────
  ax("Law Secretary", "official", ["death-penalty", "mercy", "justice"],
    sx("A condemned man's mercy petition sits on your desk amid real doubts about his trial — a coerced confession, a recanted witness. The base bays for the hanging; a quiet voice says executing a possibly innocent man is a stain that never washes out.",
      ["Let the execution proceed.", "The court has spoken; mercy is weakness.", "You reject the petition and the man hangs. The base is satisfied, and the unexamined doubts about his guilt harden into a likely miscarriage you can never undo.", { MI: 4, FA: 2, EN: -6, GL: -4 }],
      ["Commute the sentence pending review.", "A doubt this size cannot end on a gallows.", "You commute the sentence and order the doubts examined. The base howls about coddling criminals, but you refuse to make the state the executioner of a man it may have wronged.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Fire-service capacity ───────────────────────────────────────────────────
  ax("Fire Service Director", "relief", ["fire", "safety", "capacity"],
    sx("The capital's fire service cannot reach half its high-rises — dry hydrants, ladders too short for the towers that keep burning with people trapped inside. The director needs a costly modernisation; the money is wanted elsewhere until the next blaze.",
      ["Fund the fire-service modernisation.", "A ladder too short is a coffin with a view.", "You re-equip the fire service with tall ladders, working hydrants, and training. The cost is heavy and the danger feels abstract between fires, but the next tower blaze meets a service that can reach it.", { EN: 8, FI: -6 }],
      ["Defer it until after the next disaster.", "The budget has louder claims than a quiet ladder.", "You put the modernisation off. The money goes to noisier needs, and the next high-rise fire finds the same dry hydrants and short ladders, and the same trapped people at the windows.", { FI: 4, EN: -8 }])),

  // ── Cattle and contraband border haats ──────────────────────────────────────
  ax("Border Guard Director", "people", ["border", "haats", "smuggling"],
    sx("Along the border, official 'haat' markets could legalise the petty cross-border trade that locals depend on and smugglers now run. Expand the legal haats to undercut the smuggling mafias, or keep the border sealed and the black trade thriving?",
      ["Expand the legal border markets.", "A legal stall starves an illegal smuggler.", "You expand the border haats and the petty trade comes into the open. The smuggling mafias lose ground, border communities prosper, and tensions along the wire ease a little.", { EN: 6, FI: 2, GL: 2, MI: -2 }],
      ["Keep the border sealed.", "An open market is an open door.", "You keep the border tight and the haats few. Security looks robust on paper, and the smuggling mafias keep their monopoly on the trade the locals will pursue regardless.", { MI: 4, EN: -4, FI: -2 }])),

  // ── Kidnap-for-ransom wave ──────────────────────────────────────────────────
  ax("Crime Investigation Chief", "general", ["kidnapping", "ransom", "crime"],
    sx("A wave of kidnappings-for-ransom is terrifying the business class, and some cases trace to off-duty police and political cadres. Mount a real crackdown that reaches into your own ranks, or focus on the freelance gangs and spare the connected?",
      ["Crack down, your own ranks included.", "A kidnapper in uniform is the worst kind.", "You pursue every thread, including the police and cadres involved. The business class is reassured and the connected are rattled and angry, but the kidnapping wave breaks.", { MI: 4, EN: 8, GL: 4, FA: -6 }],
      ["Chase the freelancers, spare the connected.", "Some uniforms are better not investigated.", "You round up the freelance gangs and leave the connected untouched. The headlines look tough, but the protected predators keep operating and the business class quietly moves its families abroad.", { MI: 4, FI: -2, EN: -6, GL: -2 }])),

  // ── Shalish village arbitration abuse ───────────────────────────────────────
  ax("Rural Justice Officer", "cleric", ["shalish", "fatwa", "women"],
    sx("In the villages, informal arbitration councils — shalish — increasingly issue cruel, illegal punishments: lashings, hilla marriages, mostly against women, under the colour of religion. The officer wants them reined in by the formal courts; the rural clergy resist.",
      ["Rein in the shalish, enforce the law.", "A village court that lashes women is a crime, not a custom.", "You move to subordinate the shalish to formal law and prosecute the cruellest verdicts. The rural clergy protest the intrusion, but women gain protection from punishments dressed as tradition.", { EN: 8, GL: 6, MI: -2, FA: -4 }],
      ["Leave the village councils alone.", "I will not fight every village elder in the land.", "You leave the shalish to their ways. The rural power-holders are placated, and the lashings, the hilla marriages, and the village 'justice' against women grind on beyond the law's reach.", { FA: 4, MI: 2, EN: -8, GL: -6 }])),

  // ── Lawful interception law ─────────────────────────────────────────────────
  ax("Telecom Security Director", "shadow", ["interception", "wiretap", "oversight"],
    sx("A new law would let your agencies intercept any call or message — with, or without, a judge's warrant. The director wants the warrantless version for speed; civil society demands judicial oversight to stop the inevitable abuse against critics.",
      ["Pass warrantless interception powers.", "A warrant is a delay a plot does not grant me.", "You take the warrantless powers. The agencies move fast on real threats and faster on inconvenient critics, and the surveillance state gains a legal blank cheque that will outlast you.", { MI: 6, EN: -6, GL: -6 }],
      ["Require judicial warrants for interception.", "A wiretap with no judge is a weapon with no safety.", "You insist on warrants and oversight. The agencies grumble about delay, but interception keeps a check against the day it would otherwise be turned wholesale on dissent.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Highway dacoity ─────────────────────────────────────────────────────────
  ax("Highway Police Chief", "general", ["dacoity", "highways", "safety"],
    sx("Armed gangs are robbing night buses and trucks on the highways, sometimes killing, and the long-haul transport that moves the economy is gripped by fear. The chief wants costly highway patrols; others call it a local nuisance not worth the budget.",
      ["Fund highway patrols and checkpoints.", "A highway ruled by dacoits is an economy held hostage.", "You blanket the highways with patrols and the robberies fall. The cost is real and the checkpoints slow some traffic, but the night roads grow safe enough to move goods and people again.", { EN: 6, MI: 4, FI: -4 }],
      ["Treat it as a minor local matter.", "A few highway robberies do not justify a national force.", "You leave the highways lightly policed. The budget is spared, the dacoit gangs grow bolder, and the long-haul transport that feeds the cities runs scared and dear after dark.", { FI: 2, MI: -2, EN: -6 }])),

  // ── Beggar / trafficking syndicate ──────────────────────────────────────────
  ax("Social Crime Officer", "shadow", ["trafficking", "begging", "children"],
    sx("Organised syndicates maim children and traffic the disabled into forced begging rings on the city streets. Smash the rings and rehabilitate the victims — a costly, complex rescue — or keep clearing beggars off the streets for the optics?",
      ["Smash the rings, rehabilitate the victims.", "A child maimed for alms is a crime crying out.", "You break the begging syndicates and build rehabilitation for the rescued. The work is hard and costly and the rings fight back, but maimed children are freed instead of just swept from view.", { EN: 8, GL: 4, MI: 2, FA: -2 }],
      ["Just clear beggars off the streets.", "The tourists and the elite want clean pavements.", "You mount street-clearing drives for the optics. The pavements look tidier for visitors, the syndicates simply relocate, and the trafficked children keep being maimed for someone else's alms.", { MI: 2, FI: 2, EN: -6, GL: -2 }])),

  // ── VIP motorcade road closures ─────────────────────────────────────────────
  ax("Protocol Security Chief", "official", ["vip", "traffic", "public"],
    sx("Every ministerial movement shuts down the capital's arteries for VIP motorcades, trapping ambulances and commuters for hours. Curb the closures and convoys, or keep the elite gliding through a paralysed city?",
      ["Curb the VIP road closures.", "A minister's ten minutes is not worth a city's hour.", "You slash the motorcade privileges and the blanket closures. The elite chafe at sharing the roads, but ambulances move, commuters get home, and the city sees its rulers join the traffic.", { EN: 8, GL: 2, FA: -6 }],
      ["Keep the VIP convoys gliding.", "A minister stuck in traffic is a state diminished.", "You keep the motorcade closures. The elite glide through on cleared roads, and the rest of the capital — ambulances and all — sits choking in the gridlock the convoys leave behind.", { FA: 6, MI: 2, EN: -8 }])),

  // ── Building-collapse criminal liability ────────────────────────────────────
  ax("Crime Investigation Chief", "people", ["building-collapse", "liability", "developers"],
    sx("A shoddily-built tower has collapsed, killing scores, and the trail leads to a developer who bribed the inspectors — and who funds the party. Prosecute him fully, or let the inspectors take the fall alone?",
      ["Prosecute the developer fully.", "A builder who buries his buyers must answer for it.", "You charge the developer himself, donor or not. The party loses a funder and the building lobby trembles, but the bereaved see real accountability and the inspectors are not the only scapegoats.", { EN: 8, GL: 6, MI: -2, FA: -6 }],
      ["Let the inspectors take the fall.", "A donor toppled topples a wing of the party.", "You confine the blame to a few inspectors and shield the developer. The party keeps its funder, the building lobby relaxes, and the next shoddy tower is already rising on a bribed certificate.", { FA: 6, FI: 2, EN: -8, GL: -4 }])),

  // ── Online fraud / scam call centres ────────────────────────────────────────
  ax("Cyber Crime Chief", "shadow", ["fraud", "scams", "online"],
    sx("Scam operations are draining citizens' mobile wallets and bank accounts through phishing and fake-prize calls, some run from organised centres with insider help from telecom and bank staff. The chief wants a real cyber-fraud taskforce; standing it up is costly.",
      ["Build a real cyber-fraud taskforce.", "A scam centre is a thief that never sleeps.", "You fund a proper cyber-fraud unit with bank and telecom cooperation. The scam centres are raided and the insider leaks plugged, and citizens' savings grow a little safer online.", { EN: 6, FI: 2, GL: 2, MI: 2 }],
      ["Leave it to overstretched local police.", "Online fraud is a nuisance, not a priority.", "You leave cyber-fraud to thinly-spread local stations that cannot trace it. The scam centres flourish, the insider leaks continue, and the public learns that money lost online is money gone.", { FI: -2, EN: -6 }])),

  // ── Religious procession security ───────────────────────────────────────────
  ax("Public Order Officer", "cleric", ["procession", "security", "communal"],
    sx("Competing religious processions are due to cross the same route on the same day, a flashpoint that has sparked riots before. Impose strict separate routes and timings — heavy-handed and resented by both — or trust the organisers and police lightly?",
      ["Impose strict separate routes.", "Two flashpoints kept apart make no fire.", "You enforce separate routes and tight timings. Both communities grumble at the heavy hand, but the processions pass without collision and the day ends without a riot to mourn.", { MI: 4, EN: 2, FA: -2 }],
      ["Trust the organisers, police lightly.", "A festival smothered in police is no festival.", "You keep policing light and trust the community leaders. The day may pass in peace and harmony — or one hot-headed clash may ignite the riot the light touch failed to prevent.", { EN: 2, FA: 2, MI: -4 }])),

  // ── Eid homebound travel safety ─────────────────────────────────────────────
  ax("Transport Security Coordinator", "people", ["eid", "travel", "safety"],
    sx("Before Eid, millions cram onto overloaded buses, trains, and ferries to reach their villages, and every year the rush kills hundreds in crashes and capsizes. The coordinator wants strict safety enforcement; the public wants cheap passage home at any cost.",
      ["Enforce holiday travel safety hard.", "A homecoming should not end in a hearse.", "You enforce capacity limits and roadworthiness through the rush. Fares rise and the crush at the terminals worsens, but the holiday's grim death toll on the roads and rivers falls sharply.", { EN: 8, FI: -2, FA: -2 }],
      ["Let the holiday rush flow cheaply.", "The poor must reach home for Eid, rules or no.", "You ease enforcement so everyone can afford to travel. The buses and ferries overload as always, the homecoming proceeds cheap and chaotic, and the holiday claims its usual harvest of the dead.", { FA: 2, EN: -8 }])),

  // ── Arms-recovery amnesty ───────────────────────────────────────────────────
  ax("Crime Investigation Chief", "general", ["firearms", "amnesty", "recovery"],
    sx("Illegal firearms are awash in the country, fuelling political violence and crime. A no-questions surrender amnesty would mop them up — but let the guilty erase the weapons tying them to past crimes. The alternative is a hard, raid-based recovery drive.",
      ["Offer a no-questions arms amnesty.", "A gun surrendered is a gun that kills no one.", "You run the amnesty and weapons pour in by the thousand. The streets grow a little safer, and a number of past crimes lose the evidence that might have solved them.", { EN: 6, MI: 2, GL: 2 }],
      ["Mount a hard, raid-based recovery.", "An amnesty launders the gunman with his gun.", "You hunt the illegal arms through raids and intelligence. Fewer weapons come in and the operation is dangerous and slow, but the guns recovered come with the cases attached to them.", { MI: 6, EN: 2, FI: -2 }])),

  // ── Foreign-aid worker security ─────────────────────────────────────────────
  ax("Diplomatic Security Chief", "general", ["foreigners", "security", "aid-workers"],
    sx("After threats against foreigners, aid agencies and embassies demand heavy protection for their staff or they will pull out, taking their programmes with them. Lock the foreign community in a security bubble, or reassure with lighter, smarter measures?",
      ["Wrap foreigners in a heavy security bubble.", "A dead foreigner is a global headline I cannot afford.", "You blanket the foreign community in visible heavy security. The agencies stay, but the fortress optics signal a dangerous country, and the bubble itself becomes a target and a symbol.", { MI: 4, GL: 2, FI: -4, EN: -2 }],
      ["Reassure with lighter, smarter measures.", "A fortress says 'flee' louder than any threat.", "You opt for intelligence-led, lighter protection and quiet reassurance. It is a calculated risk, but the agencies stay, the country looks governable rather than besieged, and normal life goes on.", { GL: 4, MI: 2, EN: 2 }])),

  // ── Juvenile justice ────────────────────────────────────────────────────────
  ax("Social Welfare Magistrate", "doctor", ["juvenile", "justice", "children"],
    sx("Children in conflict with the law are thrown into adult jails and abusive 'correction' centres, emerging hardened criminals. The magistrate wants a real juvenile-justice system of diversion and rehabilitation; the law-and-order voices want them treated as threats.",
      ["Build a rehabilitative juvenile system.", "A child jailed with hardened men comes out a hardened man.", "You build diversion, separate facilities, and rehabilitation for child offenders. The tough-on-crime crowd scoffs, but children get a path back instead of a finishing school for criminals.", { EN: 8, GL: 4, FI: -4 }],
      ["Keep treating young offenders harshly.", "A young criminal is still a criminal.", "You keep juveniles in the adult-adjacent system. It looks tough and costs little now, and each cohort of abused children graduates from the cells into the very crime the harshness was meant to stop.", { MI: 2, EN: -6, GL: -4 }])),

  // ── Drone and aerial surveillance ───────────────────────────────────────────
  ax("Surveillance Technology Director", "shadow", ["drones", "surveillance", "protest"],
    sx("A fleet of surveillance drones could watch borders and crime hotspots — and hover over every protest, mapping the crowd. The director wants the full fleet with crowd-monitoring; civil society warns it is an eye in the sky over every dissenter.",
      ["Deploy the full surveillance drone fleet.", "An eye in the sky misses nothing.", "You acquire the drone fleet with crowd-monitoring. Borders and crime hotspots are watched, and so is every protest, every gathering, every face that ever assembles against you.", { MI: 6, EN: -6, GL: -4 }],
      ["Limit drones to borders and disasters.", "A drone over every march is a state over every shoulder.", "You confine the drones to borders, disasters, and crime scenes, barring protest surveillance. You gain real operational reach without building an aerial panopticon over public dissent.", { MI: 4, EN: 2, GL: 2 }])),

  // ── Organ-trafficking ring ──────────────────────────────────────────────────
  ax("Health Crime Officer", "doctor", ["organ-trafficking", "poverty", "crime"],
    sx("A ring is buying kidneys from desperate villagers — coerced and cheated — for wealthy transplant tourists, with crooked doctors and brokers in the chain. The officer wants the whole network smashed; some of the clinics are powerful and well-connected.",
      ["Smash the organ-trafficking network.", "A poor man's kidney is not a commodity.", "You break the ring, clinics and brokers and all, however connected. The transplant-tourism money dries up and powerful doctors face the law, and the cheated villagers gain a defender.", { EN: 8, GL: 6, MI: 2, FA: -4 }],
      ["Pursue only the village brokers.", "The clinics have patrons I cannot afford to cross.", "You arrest the low-level brokers and spare the connected clinics. The visible end of the trade is disrupted, the lucrative clinical core survives, and the poor keep being harvested for parts.", { MI: 2, FI: -2, EN: -6, GL: -2 }])),

  // ── SIM biometric registration ──────────────────────────────────────────────
  ax("Telecom Security Officer", "official", ["sim", "biometric", "privacy"],
    sx("Biometric SIM registration would tie every phone to a fingerprint and ID — curbing the anonymous numbers used in crime, and building a perfect map of who holds every phone. The officer wants it mandatory; privacy advocates are alarmed.",
      ["Mandate biometric SIM registration.", "An anonymous phone is a criminal's best friend.", "You require fingerprint registration for every SIM. Anonymous crime-phones vanish, and the state acquires a fingerprint-linked map of every phone and, through it, every person who carries one.", { MI: 6, EN: -4, GL: -4 }],
      ["Register SIMs without the biometrics.", "A fingerprint for a phone number is a price too high.", "You require ID but bar the biometric linkage. You gain most of the accountability without building a national fingerprint-to-phone database ripe for abuse.", { EN: 4, GL: 2, MI: -2 }])),

  // ── Custodial-death independent inquiry ─────────────────────────────────────
  ax("Internal Affairs Director", "official", ["custodial-death", "inquiry", "accountability"],
    sx("Deaths in police custody, always ruled 'heart attacks' or 'suicides', are mounting and the families are organising. Establish a genuinely independent inquiry mechanism, or keep the in-house whitewash that protects the force?",
      ["Establish independent custodial-death inquiries.", "A death in a cell the state cannot explain is a death the state caused.", "You set up independent inquiries with real powers. The force resists and a few careers end, but the era of automatic 'heart attack' verdicts cracks, and custody grows a little less lethal.", { EN: 8, GL: 6, MI: -4 }],
      ["Keep the in-house inquiries.", "An independent inquiry indicts the whole force.", "You keep custodial deaths investigated by the police themselves. The verdicts stay tidy and the force protected, and the families learn that a death in custody here has only one official cause: misfortune.", { MI: 4, FA: 2, EN: -8, GL: -6 }])),

  // ── Highway / river piracy on the rivers ────────────────────────────────────
  ax("River Police Chief", "general", ["piracy", "rivers", "fishermen"],
    sx("Armed pirates rule stretches of the great rivers and the bay, robbing and ransoming fishermen and cargo boats, sometimes with bribed police looking on. The chief wants a real river-police push — costly boats, and confronting the officers on the take.",
      ["Fund a real anti-piracy river force.", "A river ruled by pirates is a river lost.", "You fund fast boats and clean out the complicit officers. The pirate gangs are broken, the fishermen and cargo boats breathe, and the river patrols' own corruption is purged.", { EN: 6, MI: 4, FI: -4, FA: -2 }],
      ["Leave the rivers lightly patrolled.", "A few river pirates do not justify a navy.", "You leave the rivers thinly policed. The budget is saved, the pirate gangs and their police protectors thrive, and the fishermen pay their ransoms and their bribes as a cost of the water.", { FI: 2, MI: -2, EN: -6 }])),

  // ── Exit control / travel ban on critics ────────────────────────────────────
  ax("Immigration Director", "shadow", ["travel-ban", "critics", "control"],
    sx("You can quietly add critics, activists, and inconvenient businessmen to an airport exit-control list, trapping them in the country without charge or notice. The director calls it a clean, deniable leash; civil society calls it abduction by paperwork.",
      ["Bar the critics from leaving.", "A man who cannot flee can be reached.", "You list the critics and they are turned back at the airport, bewildered. The leash is effective and deniable, until the pattern leaks and 'jailed within their own country' becomes the headline.", { MI: 6, EN: -6, GL: -6 }],
      ["Keep the exit list to genuine fugitives.", "An exit ban on a critic is a confession of fear.", "You confine the list to actual suspects with cases. The critics keep their freedom to come and go, and you are spared the spectacle of dissidents stranded at the departure gate.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Public-exam question leaks ──────────────────────────────────────────────
  ax("Education Board Chairman", "shadow", ["exams", "leaks", "fraud"],
    sx("National exam papers leak online before every sitting, sold by a ring reaching into the printing presses and the boards. The chairman wants a digital question system; the ring is lucrative and protected, and a botched reform could throw the exam into chaos.",
      ["Crack down and digitise the exams.", "An exam sold in advance is a generation cheated.", "You break the leak ring and move to secure digital question delivery. The protected racket fights back and one rollout stumbles, but the exams stop being an open auction and merit means something again.", { EN: 8, GL: 4, MI: 2, FA: -2 }],
      ["Patch the system and hope.", "A radical overhaul could collapse the whole exam.", "You make cosmetic fixes and leave the ring largely intact. The exams proceed, the papers keep leaking to those who pay, and the honest student keeps losing to the connected cheat.", { FA: 2, EN: -6, GL: -2 }])),

  // ── Recruitment-exam fraud ──────────────────────────────────────────────────
  ax("Public Service Commission Liaison", "shadow", ["recruitment", "exam", "corruption"],
    sx("Government job exams — the holy grail for millions of youth — are riddled with leaked papers, impersonators, and posts sold to the highest bidder. Mount a real anti-fraud overhaul exposing connected beneficiaries, or keep the lucrative status quo?",
      ["Overhaul the recruitment exams.", "A job bought is a youth's dream stolen.", "You secure the exams with biometrics and audits and void the fraudulent results. The connected who bought their posts are exposed and furious, but a generation sees that merit might finally count.", { EN: 8, GL: 4, MI: -2, FA: -4 }],
      ["Leave the recruitment racket running.", "Too many of the bought belong to the party.", "You leave the exams compromised. The posts keep going to the connected and the payers, and the honest, brilliant youth who studied for years learn what their merit is worth here.", { FA: 4, FI: 2, EN: -8, GL: -2 }])),

  // ── Hooch / illegal liquor deaths ───────────────────────────────────────────
  ax("Narcotics Control Officer", "doctor", ["liquor", "poison", "poverty"],
    sx("Bootleg toxic liquor has killed dozens of the poor in a single district, and the trade — banned, so unregulated — is run by syndicates with police protection. Crack down hard on the bootleggers, or push the harder path of regulating and taxing safe alcohol?",
      ["Crack down hard on the bootleggers.", "Poison sold as drink is murder by the bottle.", "You raid the bootleg syndicates and their police protectors. The killer batches are seized, but prohibition stays, the trade regroups underground, and the next toxic batch is already brewing.", { MI: 4, EN: 4, FA: -2 }],
      ["Regulate and tax safe alcohol.", "Banning a drink only hands it to poisoners.", "You move toward regulating and taxing safe alcohol, draining the bootleggers' market. The pious are scandalised and the politics are hard, but the poor stop dying from methanol in a bottle.", { EN: 6, FI: 4, GL: 2, FA: -6 }])),

  // ── Women's prison conditions ───────────────────────────────────────────────
  ax("Prisons Inspector-General", "doctor", ["women", "prison", "rights"],
    sx("The women's wings of the jails are overcrowded and abusive, holding women on petty or fabricated charges, some with their children, in degrading conditions. The IG wants reform — separate facilities, legal aid, release of the wrongly held.",
      ["Reform the women's prisons.", "A jail that degrades women degrades the state that runs it.", "You fund better facilities, legal aid, and a review that frees the wrongly held. The cost and effort are real, but women and their children stop rotting in conditions no law intended.", { EN: 8, GL: 4, FI: -4 }],
      ["Leave the women's wings as they are.", "The prisons have louder problems than comfort.", "You leave the women's wings to their squalor. The budget is spared, and women on petty and fabricated charges keep languishing, their children growing up behind bars beside them.", { FI: 2, EN: -6, GL: -4 }])),

  // ── Online gambling crackdown ───────────────────────────────────────────────
  ax("Cyber Crime Chief", "shadow", ["gambling", "online", "addiction"],
    sx("Foreign-run online betting and casino apps are hooking the young and draining money abroad, with local agents and some officials taking a cut. Block and prosecute hard, or quietly tolerate a trade that greases many palms?",
      ["Block and prosecute the gambling networks.", "An app that bankrupts the young is a crime, not a game.", "You block the apps, choke the payment channels, and prosecute the local agents. The trade is disrupted and the capital flight slowed, and the officials who took their cut go quiet and resentful.", { EN: 6, FI: 2, MI: 2, FA: -2 }],
      ["Tolerate the gambling trade.", "A vice this profitable has many friends.", "You leave the betting apps largely alone. The palms stay greased and the trade flourishes, and the young keep gambling their families' money into accounts somewhere overseas.", { FA: 2, FI: -2, EN: -6 }])),

  // ── Forensic-lab backlog ────────────────────────────────────────────────────
  ax("Forensic Services Director", "doctor", ["forensics", "backlog", "justice"],
    sx("The country's one overwhelmed forensic lab has a years-long backlog, so DNA and ballistic evidence arrives long after trials end, and justice runs on confessions instead of science. The director needs heavy investment in labs and scientists; the payoff is slow.",
      ["Invest heavily in forensic capacity.", "Justice without science is justice by guesswork.", "You fund new labs, equipment, and forensic scientists. The backlog shrinks over years, evidence starts reaching trials in time, and the reliance on beaten confessions slowly gives way to proof.", { EN: 8, GL: 4, FI: -6 }],
      ["Leave the forensic system starved.", "Labs are a luxury; confessions are free.", "You leave the single lab to drown in its backlog. The budget is spared, and the courts keep convicting on confession and guesswork while the science gathers dust in an evidence locker.", { FI: 4, EN: -6, GL: -2 }])),

  // ── Riot-control weapons import ─────────────────────────────────────────────
  ax("Police Procurement Chief", "general", ["riot-gear", "less-lethal", "force"],
    sx("A foreign vendor offers a large package of riot-control gear — water cannon, rubber bullets, tear gas, sound cannons. The chief wants the full arsenal; critics note 'less-lethal' tools, in untrained hands, still blind and kill protesters.",
      ["Buy the full riot-control arsenal.", "A well-equipped force controls a crowd without a massacre.", "You acquire the arsenal. Crowd control gets a notch less lethal in theory, and in untrained hands the rubber bullets and gas still maim and kill, just with deniability.", { MI: 6, EN: -4, FI: -4, GL: -2 }],
      ["Buy modest gear with strict training.", "A weapon is only as humane as the hand that wields it.", "You buy a modest kit and invest in restraint and training. The arsenal is smaller, but the officers learn to use it as a last resort, and crowd policing grows genuinely less deadly.", { EN: 4, MI: 2, GL: 2, FI: -2 }])),

  // ── Dowry-murder prosecution ────────────────────────────────────────────────
  ax("Women's Crime Officer", "people", ["dowry", "murder", "justice"],
    sx("A young bride has been killed over an unpaid dowry, and the locally powerful in-laws are buying off the police and the witnesses, as such cases routinely vanish. Drive the prosecution hard, or let it fade like the others?",
      ["Drive the dowry-murder prosecution.", "A bride burned for money will have her day in court.", "You protect the witnesses and push the case against the powerful in-laws. They lean on every connection and lose, and for once a dowry murder ends in a verdict instead of a settlement.", { EN: 8, GL: 4, MI: -2, FA: -4 }],
      ["Let the case fade like the others.", "The in-laws have friends I would rather keep.", "You let the case dissolve in bought witnesses and lost files. The powerful in-laws walk, the dead bride joins the uncounted, and every dowry-taker learns the price of a daughter-in-law's life.", { FA: 4, MI: 2, EN: -8, GL: -4 }])),

  // ── VPN / circumvention crackdown ───────────────────────────────────────────
  ax("Telecom Security Director", "shadow", ["vpn", "censorship", "control"],
    sx("Citizens are using VPNs to slip past your website blocks and reach banned news. The director wants VPNs themselves blocked and their users tracked, sealing the information bubble; the alternative is to accept that the net cannot be fully walled.",
      ["Block VPNs and track their users.", "A wall with a tunnel under it is no wall.", "You move to block VPNs and flag their users. The information bubble tightens toward North-Korean completeness, the tech-savvy find new tunnels anyway, and the censorship draws global scorn.", { MI: 6, EN: -6, GL: -8 }],
      ["Accept that the net cannot be sealed.", "A government at war with VPNs is a government afraid of news.", "You stop chasing VPNs. The blocks stay porous and the banned sites reachable, but you are spared the futile, reputation-shredding crusade against the open internet.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Street-children rehabilitation ──────────────────────────────────────────
  ax("Social Welfare Director", "relief", ["street-children", "shelter", "poverty"],
    sx("Tens of thousands of children live on the city streets — sniffing glue, prey to gangs, traffickers, and abusive police. The director wants a real network of shelters and family reunification; the cheaper option is the periodic round-up that just moves them on.",
      ["Build shelters and reunification programmes.", "A child on the street is a future thrown away.", "You build shelters, schooling, and family-tracing for street children. The cost is real and the work slow, but children are pulled off the streets into something like a childhood.", { EN: 10, GL: 4, FI: -6 }],
      ["Stick with periodic round-ups.", "A shelter network is a budget I do not have.", "You keep the cheap round-up drives that scoop children up and dump them elsewhere. The streets look briefly clearer, and the children drift back to the glue, the gangs, and the traffickers.", { FI: 2, EN: -6 }])),

  // ── Sextortion / online image abuse ─────────────────────────────────────────
  ax("Cyber Crime Chief", "doctor", ["sextortion", "women", "online"],
    sx("Intimate images — real and faked — are being weaponised to blackmail and shame women and girls, driving some to suicide, while victims who report are themselves blamed. The chief wants a dedicated, confidential unit; building it means resources and a cultural fight.",
      ["Build a confidential image-abuse unit.", "A girl shamed to death by a screen deserved a state that fought for her.", "You stand up a confidential unit that pursues the blackmailers and protects the victims. The cultural pushback is real, but women begin to report without being destroyed for it.", { EN: 8, GL: 4, MI: 2, FA: -2 }],
      ["Leave it to ordinary stations.", "These are private matters, not police priorities.", "You leave image-abuse to the ordinary stations that blame and expose the victims. The blackmailers operate freely, and the suicides keep coming, each one a girl the state would not protect.", { FA: 2, EN: -8, GL: -2 }])),

  // ── Concert and festival crowd safety ───────────────────────────────────────
  ax("Public Order Officer", "official", ["crowd", "concert", "safety"],
    sx("A massive open-air concert and several large public events are planned for the same weekend, with crowd-safety planning that is, as ever, an afterthought. The officer wants proper crowd management and caps; the organisers and public resent the fences.",
      ["Impose proper crowd-safety management.", "A joyous crowd can become a crush in a heartbeat.", "You enforce capacity caps, exits, and crowd management. The organisers grumble at the cost and the public at the fences, but the weekend's celebrations end without a stampede to bury.", { EN: 6, MI: 2, FI: -2, FA: -2 }],
      ["Let the events run loosely.", "Do not smother a celebration in barriers.", "You keep the events open and lightly managed. The crowds flow free and vast and joyous, and the absence of a plan means one surge from turning a festival into a funeral.", { EN: -6, FA: 4, GL: -2 }])),

  // ── Witch-hunting / superstition violence ───────────────────────────────────
  ax("Rural Justice Officer", "people", ["superstition", "violence", "minorities"],
    sx("In remote areas, people — usually poor women — are branded witches and beaten, exiled, or killed by mobs, often at a 'healer's' word. The officer wants awareness drives and hard prosecution; the local power structure shrugs it off as backward custom.",
      ["Prosecute and educate against the violence.", "A woman killed as a witch is a murder, not a custom.", "You prosecute the mob leaders and run awareness drives with the rural clergy and schools. Change is slow against deep superstition, but the killings draw consequences and the accused gain protectors.", { EN: 8, GL: 4, MI: -2, FA: -2 }],
      ["Dismiss it as backward custom.", "I cannot police every village's superstitions.", "You leave the matter to the locals. The 'healers' keep naming witches, the mobs keep their impunity, and poor women keep being beaten and burned for crimes that do not exist.", { FA: 2, EN: -8, GL: -4 }])),

  // ── Fake NID / citizenship fraud ────────────────────────────────────────────
  ax("NID Database Director", "shadow", ["nid", "fraud", "citizenship"],
    sx("Genuine national ID cards are being sold to non-citizens — including, the spies warn, Rohingya and foreign criminals — through corrupt officials, eroding the whole citizenship system. Purge and prosecute, or quietly manage the embarrassment?",
      ["Purge the fraud and prosecute officials.", "A citizenship sold is a nation cheapened.", "You audit the database, cancel the fraudulent IDs, and jail the officials who sold them. The system's integrity is restored at the cost of a noisy scandal and some genuinely caught-up innocents.", { EN: 6, MI: 4, GL: 2, FA: -4 }],
      ["Quietly manage the embarrassment.", "A public purge advertises how porous we are.", "You handle it discreetly, cancelling a few cards and hushing the rest. The scandal stays small, and the corrupt officials and the trade in genuine IDs to non-citizens carry quietly on.", { MI: 2, FA: 2, EN: -4, GL: -4 }])),

  // ── Marriage / nikah registrar corruption ───────────────────────────────────
  ax("Registrar General", "official", ["marriage", "registration", "child-marriage"],
    sx("Marriage registrars routinely falsify brides' ages to legalise child marriages and forge documents for a fee. The registrar general wants digitised, age-verified registration; the registrars, a connected guild, will resist.",
      ["Digitise and age-verify marriage registration.", "A registrar who forges a child's age is an accomplice to her ruin.", "You digitise registration with hard age verification. The registrars' guild howls at the lost fees, but child marriages lose their paper cover and the registry stops abetting them.", { EN: 8, GL: 4, MI: -2, FA: -2 }],
      ["Leave the registrars to their trade.", "A connected guild is not lightly disturbed.", "You leave the marriage registry as it is. The registrars keep their fees and their forgeries, and the falsified ages keep legalising the marriage of children across the country.", { FA: 4, FI: 2, EN: -8, GL: -2 }])),

  // ── Drug-rehabilitation capacity ────────────────────────────────────────────
  ax("Narcotics Control Chief", "doctor", ["drugs", "rehab", "addiction"],
    sx("Hundreds of thousands are addicted, and the few rehab centres are squalid, abusive, and out of reach of the poor. The chief wants a humane treatment network as the backbone of drug policy; the law-and-order voices still want jails and crossfire, not clinics.",
      ["Build a humane treatment network.", "An addict is a patient, not a body for the morgue.", "You build accessible, humane rehabilitation as the spine of drug policy. The tough-on-drugs crowd scoffs, but families get their children back from addiction instead of from the river.", { EN: 8, GL: 4, FI: -6 }],
      ["Stick with jails and crackdowns.", "Treatment coddles the weak; fear deters the rest.", "You keep drug policy punitive. The squalid centres stay squalid and the addicted cycle through cells and crossfire, and the addiction the crackdowns were meant to crush keeps spreading.", { MI: 4, EN: -6, GL: -4 }])),

  // ── Sand-mafia violence ─────────────────────────────────────────────────────
  ax("District Police Superintendent", "shadow", ["sand-mafia", "extortion", "rivers"],
    sx("Armed 'sand mafias' — illegally dredging riverbeds and extorting the trade — rule whole stretches of riverbank with bribed police and political cover, killing officials who interfere. Break them, or keep the uneasy, lucrative peace?",
      ["Break the sand mafias.", "A river ruled by armed thieves is a writ of failure.", "You move hard against the sand mafias and the officers and politicians shielding them. It is dangerous — they fight and kill — but the riverbanks are wrested back and the racket's cover is torn off.", { EN: 6, MI: 4, FI: -2, FA: -4 }],
      ["Keep the uneasy peace.", "The men who run the sand also run the wards.", "You leave the sand mafias to their riverbanks. The peace holds and the cover stays, and the illegal dredging guts the rivers while anyone who objects risks a body in the current.", { FA: 4, MI: 2, EN: -8 }])),

  // ── Encroachment eviction by the powerful ───────────────────────────────────
  ax("Anti-Encroachment Officer", "people", ["encroachment", "land", "powerful"],
    sx("A drive to clear illegal encroachments from canals, railways, and public land keeps bulldozing the slums of the poor while the grand illegal buildings of the powerful stand untouched. Turn the drive on the big fish, or keep it pointed at the small?",
      ["Turn the eviction drive on the powerful.", "A bulldozer that only finds the poor is a class weapon.", "You redirect the drive at the powerful's illegal grabs — the riverside mansions, the encroaching towers. The connected scream and litigate, but the law's bulldozer finally faces upward.", { EN: 8, GL: 4, MI: -2, FA: -6 }],
      ["Keep clearing the poor's encroachments.", "The big buildings have lawyers; the slums do not.", "You keep the drive pointed at the slums and hawkers. The optics of progress are cheap and easy, the powerful's grand encroachments stand serene, and the poor learn whose law this is.", { FA: 4, FI: 2, EN: -8, GL: -2 }])),

  // ── Load-shedding unrest ────────────────────────────────────────────────────
  ax("Public Order Officer", "people", ["load-shedding", "protest", "unrest"],
    sx("A brutal summer of power cuts has people pouring into the streets, smashing substations and blocking roads. The officer wants a firm dispersal; the wiser path may be to be seen sharing the pain and fixing the supply.",
      ["Disperse the power-cut protests firmly.", "A mob at the substation is a mob, whatever its grievance.", "You break up the protests with force. The streets clear and the substations are guarded, but beating people over power cuts they did not cause only stokes the anger in the dark.", { MI: 4, EN: -8, GL: -4 }],
      ["Share the pain, prioritise the fix.", "You cannot baton a country into cool patience.", "You pull police back, publicise load-shedding equally for the elite too, and rush repairs. The protests cool as people see the burden shared, and the anger drains toward patience.", { EN: 6, GL: 2, MI: -2 }])),

  // ── Airport security and smuggling ──────────────────────────────────────────
  ax("Aviation Security Chief", "shadow", ["airport", "smuggling", "security"],
    sx("The main airport leaks gold, drugs, and contraband through complicit ground staff, customs, and security — and lax screening that worries foreign airlines about terror risk. Mount a deep clean-up, or keep the comfortable rot?",
      ["Deep-clean airport security.", "An airport for sale is a border for sale.", "You overhaul screening and purge the complicit staff. Foreign airlines relax, the smuggling chokes, and the ground-staff syndicates and their patrons lose a goldmine and turn on you.", { MI: 4, GL: 6, EN: 2, FA: -4 }],
      ["Leave the airport rackets running.", "A purge would ground half the staff and the flights.", "You leave the airport's shadow economy intact. The flights run smoothly and the rackets thrive, and the gold and drugs keep flowing while foreign carriers quietly downgrade their security rating of you.", { FA: 2, FI: 2, EN: -4, GL: -6 }])),

  // ── Prison labour and overcrowding ──────────────────────────────────────────
  ax("Prisons Inspector-General", "doctor", ["prison", "labour", "reform"],
    sx("The jails, packed to bursting, could ease overcrowding through a humane work-and-skills programme that prepares inmates for release — or descend into the exploitative forced labour that some officers already run for private profit.",
      ["Build a humane prison work-and-skills scheme.", "A prisoner taught a trade returns a citizen.", "You build a real rehabilitation-through-work programme with wages and training. The reform is costly and the corrupt officers lose their private labour racket, but inmates leave with a skill instead of a grudge.", { EN: 8, GL: 4, FI: -4, FA: -2 }],
      ["Let the labour rackets run.", "A busy prisoner is a quiet prisoner.", "You leave prison labour to the officers' private schemes. Some inmates are quietly exploited for profit, the overcrowding and idleness fester, and the jails keep manufacturing hardened, embittered men.", { FA: 2, FI: 2, EN: -6 }])),

  // ── Migrant-return reintegration ────────────────────────────────────────────
  ax("Returnee Affairs Officer", "relief", ["migrants", "return", "reintegration"],
    sx("A Gulf downturn has sent hundreds of thousands of jobless migrant workers home, broke and traumatised, into communities with no work — a security and humanitarian time bomb. Fund a reintegration and credit programme, or let them fend for themselves?",
      ["Fund returnee reintegration and credit.", "A returnee abandoned is a grievance recruited.", "You build reintegration support — credit, retraining, counselling — for the returnees. The cost is real, but a destabilising mass of broke, angry men is turned toward livelihoods instead of unrest.", { EN: 8, MI: 2, FI: -6 }],
      ["Leave returnees to fend for themselves.", "The state did not send them; it cannot catch them all.", "You leave the returnees to their own devices. The budget is spared, and a vast cohort of jobless, indebted, traumatised men sinks into despair, crime, and the recruiters' waiting arms.", { FI: 4, MI: -2, EN: -6 }])),

  // ── Diplomatic enclave / embassy threat ─────────────────────────────────────
  ax("Diplomatic Security Chief", "general", ["embassy", "threat", "diplomacy"],
    sx("Intelligence warns of a credible plot against a foreign embassy in the diplomatic enclave. Flood the zone with a heavy, visible cordon that reassures the foreigners but screams danger, or run quiet, intelligence-led protection that risks being caught short?",
      ["Flood the enclave with a visible cordon.", "A guarded embassy is a standing embassy.", "You ring the enclave with heavy security. The diplomats are reassured and the plot likely deterred, but the fortress optics broadcast a country under siege and unsettle the very investors you court.", { MI: 4, GL: 2, FI: -2, EN: -2 }],
      ["Run quiet, intelligence-led protection.", "A wall of guns advertises the fear it answers.", "You opt for discreet, intelligence-driven security and roll up the plotters quietly. It is a gamble on your spies being right, but the enclave stays calm and the country looks composed.", { GL: 4, MI: 2, EN: 2 }])),

  // ── No-fly / aviation watchlist ─────────────────────────────────────────────
  ax("Aviation Security Chief", "official", ["watchlist", "aviation", "rights"],
    sx("A new aviation watchlist could bar suspected militants from flying — a real security tool, and, applied loosely, a way to ground journalists and activists under a terror label. Build it tight and judicial, or broad and discretionary?",
      ["Build a broad, discretionary watchlist.", "Better a hundred grounded than one bomber boarding.", "You build a broad watchlist with loose criteria. A few genuine threats are grounded, and so are journalists and activists who find themselves quietly barred from boarding under a label they cannot contest.", { MI: 6, EN: -4, GL: -4 }],
      ["Build a tight, judicially-reviewed list.", "A watchlist with no judge is a blacklist with wings.", "You build a narrow list with judicial review and appeal. It is slower and the security hawks complain, but it stops the terror label from becoming a travel ban on dissent.", { GL: 4, EN: 4, MI: -2 }])),

  // ── Cybercafe and gaming-den surveillance ───────────────────────────────────
  ax("District Police Superintendent", "shadow", ["cybercafe", "surveillance", "youth"],
    sx("A proposal would require every cybercafe and gaming den to log users' IDs and install monitoring software, ostensibly against online crime. The superintendent likes the reach; critics see another net cast over ordinary young people.",
      ["Mandate ID-logging and monitoring.", "A screen unwatched is a plot unseen.", "You require the logs and the software. A few real cases surface, and every student who plays a game or reads the news in a cybercafe now does so under the state's recorded eye.", { MI: 4, EN: -4, GL: -2 }],
      ["Leave the cybercafes unmonitored.", "A boy at a screen is not a suspect.", "You drop the surveillance mandate. You forgo a thin investigative edge, but the cybercafes stay places of private curiosity rather than logged interrogation rooms.", { EN: 4, GL: 2, MI: -2 }])),

  // ── Acid-attack survivor justice ────────────────────────────────────────────
  ax("Women's Crime Officer", "doctor", ["acid", "survivors", "justice"],
    sx("An acid attack has disfigured a young woman who spurned a powerful man's son, and the family is pressuring the police to lose the case as they have lost others. Drive a hard prosecution and survivor support, or let it quietly die?",
      ["Drive the prosecution and fund survivor care.", "A face melted for a refusal will have its reckoning.", "You protect the witnesses, fund the survivor's reconstruction, and push the case against the powerful family. They lean and lose, and an acid attacker faces the gallows the law prescribes.", { EN: 8, GL: 4, MI: -2, FA: -4 }],
      ["Let the case quietly die.", "The boy's father is a friend I cannot lose.", "You let the file dissolve. The disfigured woman gets neither justice nor care, the powerful family walks, and every spurned man with acid and connections takes note.", { FA: 4, MI: 2, EN: -10, GL: -4 }])),

  // ── Missing-persons / disappearance reporting ───────────────────────────────
  ax("Crime Investigation Chief", "people", ["missing-persons", "police", "families"],
    sx("Families of the missing — some lost to crime, some to your own agencies — are turned away from stations that refuse even to file a report. The chief wants a mandatory missing-persons registry and real investigation — which also documents the disappearances the state would rather forget.",
      ["Build a real missing-persons system.", "A family that cannot even file a report has been failed twice.", "You mandate prompt reporting, a public registry, and real investigation. Genuine missing-persons cases get traction, and so does an uncomfortable record of those who vanished into the state's own hands.", { EN: 8, GL: 6, MI: -4 }],
      ["Leave the stations to turn families away.", "A registry of the missing is a registry of our sins.", "You leave the practice untouched. The families keep being turned from the gates, the missing stay officially un-missing, and the disappearances leave no paper trail to haunt you.", { MI: 4, EN: -8, GL: -4 }])),

  // ── Police welfare and morale ───────────────────────────────────────────────
  ax("Police Welfare Director", "general", ["police", "welfare", "morale"],
    sx("The rank-and-file police are overworked, underpaid, and crammed into squalid barracks, which feeds both their brutality and their corruption. The director wants real investment in pay, housing, and hours; the money is large and the public sees only the brutality.",
      ["Invest in police welfare and pay.", "A constable treated like dirt treats the public like dirt.", "You fund better pay, housing, and humane hours. The cost is heavy and the public initially grudging, but morale lifts, and a force that is not desperate leans a little less on the baton and the bribe.", { MI: 4, EN: 4, FI: -6 }],
      ["Leave the rank-and-file to grind.", "The budget has worthier claims than a policeman's pillow.", "You leave the constabulary in its squalor. The money is saved, and the overworked, underpaid force keeps taking its frustration out on the public and its shortfall out of their pockets.", { FI: 4, MI: -2, EN: -4 }])),

  // ── Returning the disappeared ───────────────────────────────────────────────
  ax("Intelligence Chief", "shadow", ["disappearances", "release", "reckoning"],
    sx("Pressure mounts — at home and abroad — to account for the men your agencies disappeared over the years. Quietly begin returning those still alive and acknowledging the dead, or keep denying that any 'enforced disappearances' ever occurred?",
      ["Keep denying everything.", "An admission is a noose I tie for myself.", "You maintain the blanket denial. The denials grow more threadbare as survivors and bodies surface, and the disappearances calcify into the defining crime of your rule.", { MI: 4, EN: -8, GL: -8 }],
      ["Begin returning and accounting for them.", "A wound this deep can only close with the truth.", "You quietly release the living and acknowledge the dead, families weeping at gates and gravesides. The security establishment panics at the precedent, but a monstrous chapter begins, at last, to close.", { EN: 8, GL: 8, MI: -8 }])),

  // ── Hill-district checkpoint abuse ──────────────────────────────────────────
  ax("Hill Tracts Security Officer", "people", ["cht", "checkpoints", "abuse"],
    sx("At the hill-district checkpoints, indigenous travellers are routinely searched, shaken down, and humiliated, while settlers pass freely — a daily grind feeding the old insurgency. Reform the checkpoints' conduct, or keep the hard hand?",
      ["Reform checkpoint conduct.", "A people frisked daily learns to hate daily.", "You enforce conduct rules, end the shakedowns, and treat hill travellers as citizens. The hard-liners in the brass grumble, but the daily humiliation eases and a grievance loses some of its heat.", { EN: 6, GL: 4, MI: -2, FA: -2 }],
      ["Keep the hard hand at the checkpoints.", "A loosened grip in the hills invites the gun.", "You leave the checkpoints to their ways. The settlers pass and the indigenous are shaken down, and every humiliation at the barrier quietly recruits for the insurgency the hard hand was meant to deter.", { MI: 4, EN: -8, GL: -4 }])),

  // ── Counterfeit-medicine ring ───────────────────────────────────────────────
  ax("Drug Administration Chief", "doctor", ["fake-medicine", "health", "crime"],
    sx("Counterfeit and substandard medicines — chalk antibiotics, fake cancer drugs — are killing patients and flooding the pharmacies through a ring reaching into licensed distributors. The chief wants a crackdown and track-and-trace; the trade is lucrative and connected.",
      ["Crack down and mandate track-and-trace.", "A fake pill is a slow bullet.", "You smash the counterfeit ring and require track-and-trace on medicines. The connected distributors fight back, but the fake drugs recede from the pharmacy shelves and patients stop dying from chalk.", { EN: 8, GL: 4, MI: 2, FA: -2 }],
      ["Leave the trade lightly policed.", "A crackdown would disrupt the whole supply.", "You leave the counterfeit trade largely alone. The pharmacies stay stocked and the racket profitable, and patients keep swallowing chalk antibiotics and fake cancer drugs and quietly dying of treatable things.", { FI: 2, EN: -8, GL: -2 }])),

  // ── Plainclothes 'pick-up' arrests ──────────────────────────────────────────
  ax("Police Reform Commissioner", "shadow", ["arrests", "due-process", "abuse"],
    sx("Plainclothes officers in unmarked vehicles routinely 'pick up' suspects without warrants, ID, or any record, erasing the line between arrest and abduction. The commissioner wants mandatory identification and logging; the agencies call it a fatal delay.",
      ["Require ID, warrants, and logging for arrests.", "An arrest with no record is an abduction with a badge.", "You mandate identification, paperwork, and immediate logging for every arrest. The agencies complain about lost speed and surprise, but the line between policing and disappearance is redrawn.", { EN: 8, GL: 6, MI: -4 }],
      ["Leave the plainclothes pick-ups alone.", "An officer slowed by paperwork is an officer outrun.", "You leave the unmarked-car arrests unregulated. The agencies keep their speed and their shadows, and the families keep standing at police gates that deny the person was ever taken.", { MI: 4, EN: -8, GL: -6 }])),

  // ── Festival-season extortion by cadres ─────────────────────────────────────
  ax("District Police Superintendent", "fixer", ["extortion", "cadres", "festival"],
    sx("Before every festival, your party's local cadres run a 'collection' — extorting shopkeepers and transporters under the guise of donations, with the police looking on. Stop the racket, or let the loyal foot-soldiers feed?",
      ["Stop the festival extortion racket.", "A shopkeeper shaken down in my name curses my name.", "You order the police to stop the collections and arrest the worst extortionists. The cadres feel betrayed and the local bosses grumble, but the traders breathe and the party's name stops being a threat.", { EN: 8, GL: 2, MI: -2, FA: -4 }],
      ["Let the cadres make their collection.", "The foot-soldiers must eat between elections.", "You leave the racket alone. The cadres feed and stay loyal, and every festival the shopkeepers and truckers pay a tax to the party's name while the police watch and wet their beaks.", { FA: 6, MI: 2, EN: -8 }])),

  // ── Anti-terror law scope ───────────────────────────────────────────────────
  ax("Law Secretary", "official", ["anti-terror-law", "scope", "dissent"],
    sx("A revised anti-terrorism law could define 'terrorism' so broadly that protest, strikes, and dissent fall within it — a flexible weapon — or narrowly, confined to actual violence. How wide do you draw the net?",
      ["Draw the terror definition broadly.", "A wide net catches the threat before it forms.", "You pass a sweeping definition that sweeps in dissent. Genuine plots and peaceful critics alike now risk the terror label, and the law becomes your most flexible cudgel and a global byword for overreach.", { MI: 6, EN: -8, GL: -6 }],
      ["Confine terrorism to actual violence.", "A law that calls a strike terror is a law against the people.", "You keep the definition tight to real violence. The security hawks complain it ties their hands, but protest and dissent stay outside the terror net, and the law keeps its legitimacy.", { GL: 6, EN: 6, MI: -4 }])),

  // ── Slum-fire investigation ─────────────────────────────────────────────────
  ax("Fire Investigation Officer", "people", ["slum-fire", "arson", "land"],
    sx("A massive fire has gutted a slum on land a developer covets, and the residents swear it was arson to drive them out — a pattern seen before. Mount a real arson investigation reaching toward the developer, or rule it an accidental electrical fire?",
      ["Investigate the fire as possible arson.", "A slum that burns whenever a developer wants it is no accident.", "You launch a real investigation pointing at the land's would-be owner. The developer and his patrons push hard, but the residents see the state take their suspicion seriously for once.", { EN: 8, GL: 4, MI: -2, FA: -4 }],
      ["Rule it an accidental electrical fire.", "An arson case against a developer is a war I need not start.", "You close it as a wiring accident. The developer gets his cleared land in due course, the displaced scatter, and the convenient slum fire joins a long line of convenient slum fires.", { FA: 4, FI: 2, EN: -8, GL: -2 }])),

  // ── Minority-festival security ──────────────────────────────────────────────
  ax("Public Order Officer", "cleric", ["minorities", "festival", "protection"],
    sx("The Hindu, Buddhist, and Christian communities' festivals approach amid online threats and a recent temple attack. Deploy visible, generous protection for the minority celebrations, or keep it minimal to avoid 'provoking' the hardliners?",
      ["Protect the minority festivals generously.", "A festival that needs guarding will be guarded.", "You deploy real protection around the temples, monasteries, and churches. The hardliners mutter about appeasement, but the minorities celebrate in peace and see a state that counts them as its own.", { EN: 8, GL: 4, MI: -2, FA: -2 }],
      ["Keep minority protection minimal.", "I will not garrison every shrine and provoke the majority.", "You provide token security. The hardliners are unprovoked and content, and the minorities celebrate under a shadow, one rumour away from the attack the thin protection cannot stop.", { FA: 2, MI: 2, EN: -8, GL: -4 }])),

  // ── Refugee-camp fencing ────────────────────────────────────────────────────
  ax("Camp Security Chief", "shadow", ["rohingya", "fencing", "confinement"],
    sx("To control the sprawling refugee camps, you can ring them with barbed wire and watchtowers, sealing the refugees in — easing local security fears, and drawing the charge that you have built an open-air prison for a stateless people.",
      ["Fence and seal the camps.", "An unfenced camp leaks crime and militancy into my towns.", "You wire in the camps. The host communities' fears ease and movement is controlled, and the UN and rights world condemn the caging of a stateless people who fled exactly this.", { MI: 6, GL: -6, EN: -4 }],
      ["Manage the camps without sealing them.", "A people who fled a cage should not find another.", "You manage security with policing and registration rather than barbed wire. The host communities fret about the open edges, but you avoid building the prison-camp optics the agencies dread.", { GL: 4, EN: 2, MI: -2 }])),

  // ── Police-station modernisation ────────────────────────────────────────────
  ax("Police Reform Commissioner", "people", ["thana", "modernisation", "service"],
    sx("The local police stations are intimidating, corrupt, and hostile, especially to the poor and to women, who would sooner suffer than enter one. The commissioner proposes citizen-friendly stations — women's help desks, complaint tracking, clean reception — at real cost.",
      ["Modernise the stations as citizen services.", "A thana the poor fear protects no one.", "You rebuild the stations around service — women's desks, tracked complaints, accountable reception. The old culture resists, but ordinary people start to see the police as something other than a threat.", { EN: 8, GL: 4, FI: -4, MI: -2 }],
      ["Leave the thana culture as it is.", "A police station is meant to be feared.", "You leave the stations intimidating and opaque. The money is saved, and the poor and women keep avoiding the very institution meant to protect them, suffering crimes rather than reporting them.", { MI: 2, FA: 2, EN: -6 }])),

  // ── Surveillance of religious gatherings ────────────────────────────────────
  ax("Intelligence Chief", "cleric", ["mosques", "surveillance", "radicalisation"],
    sx("Intelligence wants to plant informants in mosques and religious gatherings to catch radicalisation early. A real counter-terror tool — and a profound intrusion that, exposed, would enrage the devout and confirm every fear of a state spying on the faith.",
      ["Plant informants in religious gatherings.", "Radicalisation is preached before it is plotted.", "You seed the mosques with informants. A few cells are caught early, and when the network is exposed — as it will be — the devout erupt at a state that spies on prayer itself.", { MI: 6, EN: -6, GL: -4 }],
      ["Rely on community engagement instead.", "A spy in the mosque makes an enemy of the congregation.", "You work through trusted community engagement rather than informants. The intelligence is thinner, but you do not pit the entire devout population against a state caught surveilling their worship.", { EN: 4, GL: 2, MI: -2 }])),

  // ── Riot compensation and inquiry ───────────────────────────────────────────
  ax("Home Affairs Coordinator", "people", ["riot", "inquiry", "communal"],
    sx("A communal riot has left a minority neighbourhood gutted and several dead, with credible claims that police stood by or joined in. Mount an independent inquiry and full compensation, or a quiet internal review that shields the force?",
      ["Hold an independent inquiry, compensate fully.", "A pogrom the police watched is a pogrom the state owns.", "You order an independent inquiry and full reparations. The force is rattled and a few officers fall, but the minority community sees accountability and the message lands that the police are not above the law.", { EN: 8, GL: 6, MI: -4, FA: -4 }],
      ["Hold a quiet internal review.", "An independent inquiry indicts the whole force.", "You keep the review in-house and it absolves the police. The compensation is token, the officers protected, and the minority neighbourhood learns that those who burned it and those who watched will answer to no one.", { MI: 4, FA: 2, EN: -8, GL: -6 }])),

  // ── Cyber-patrol of students ────────────────────────────────────────────────
  ax("Cyber Crime Chief", "shadow", ["students", "monitoring", "speech"],
    sx("After the quota unrest organised online, the cyber unit wants to monitor student social-media networks and flag 'instigators' for pre-emptive action. The chief calls it early warning; it is also a chilling watch over a generation's political speech.",
      ["Monitor and pre-empt student networks.", "A movement watched in the cradle is a movement controlled.", "You set the cyber unit on the students' networks and pre-empt 'instigators'. A few flashpoints are defused, and a generation learns that its every online word is watched, breeding the resentment that fuels the next eruption.", { MI: 6, EN: -8, GL: -4 }],
      ["Leave student speech unmonitored.", "A government that surveils its students fears its future.", "You decline to surveil the students. You lose an early-warning tool, but the young keep a space to argue and organise freely, and you are not the government that spied on its own schoolchildren.", { EN: 6, GL: 4, MI: -2 }])),

  // ── Witness-protection programme ────────────────────────────────────────────
  ax("Crime Investigation Chief", "official", ["witnesses", "protection", "justice"],
    sx("Cases against the powerful collapse because witnesses are bought, threatened, or killed, and there is no protection for those who dare testify. The chief wants a real witness-protection programme — costly, complex, and a threat to the untouchable.",
      ["Build a witness-protection programme.", "A witness who can be reached is a verdict that can be bought.", "You build genuine witness protection — relocation, security, anonymity. It is costly and hard to run, but suddenly cases against the powerful hold, and the era of the bought-off witness begins to end.", { EN: 8, GL: 6, FI: -4, FA: -4 }],
      ["Leave witnesses to fend for themselves.", "A protection programme is a budget and a headache.", "You decline the programme. The powerful keep buying and burying witnesses, the cases against them keep collapsing, and the brave who testify keep paying for it in blood or worse.", { FA: 4, FI: 2, EN: -8, GL: -4 }])),

  // ── Border-killing diplomacy at home ────────────────────────────────────────
  ax("Border Guard Director", "general", ["border", "killings", "restraint"],
    sx("Your own border guards have shot dead unarmed villagers crossing for petty trade, mirroring the neighbour's notorious killings. Enforce strict non-lethal rules of engagement, or keep the shoot-to-deter posture the brass prefers?",
      ["Enforce non-lethal rules of engagement.", "A guard who shoots a smuggler boy is no guard.", "You impose strict non-lethal engagement and discipline the trigger-happy. The brass grumbles about a softer border, but the killings of unarmed villagers stop staining your own hands.", { EN: 6, GL: 6, MI: -4 }],
      ["Keep the shoot-to-deter posture.", "A hard border is kept with a hard hand.", "You leave the lethal posture in place. The border looks fierce, and your guards keep killing unarmed villagers over cattle and rice, handing the moral high ground and the headlines to your critics.", { MI: 4, EN: -6, GL: -6 }])),

  // ── Police informant networks in slums ──────────────────────────────────────
  ax("District Police Superintendent", "shadow", ["informants", "slums", "control"],
    sx("A dense informant network in the slums would give you eyes on crime and dissent alike — and turn neighbour against neighbour, breeding fear and false accusations. The superintendent wants it built; the cost is the social fabric of the poorest places.",
      ["Build the slum informant network.", "Eyes in every alley miss nothing.", "You weave informants through the slums. Crime intelligence improves, and so does the fear, as neighbours inform on neighbours and petty grudges become police cases and the poor learn to trust no one.", { MI: 6, EN: -6, GL: -2 }],
      ["Rely on community policing instead.", "A neighbourhood of informers is a neighbourhood at war with itself.", "You build trust-based community policing rather than an informant web. The intelligence is less granular, but the slums keep their fragile social fabric and the police gain genuine cooperation.", { EN: 6, GL: 2, MI: -2 }])),

  // ── Mass-gathering facial scanning ──────────────────────────────────────────
  ax("Surveillance Technology Director", "shadow", ["facial-recognition", "gatherings", "dissent"],
    sx("New software can scan and identify every face at a rally, prayer gathering, or protest in real time against the national ID database. The director wants it live at all major gatherings; civil society warns it ends the anonymity that makes assembly safe.",
      ["Scan every major gathering.", "A face in a crowd should not be a face I cannot name.", "You deploy live facial scanning at gatherings. Every protester, worshipper, and marcher is now identifiable and loggable, and the chilling knowledge of it thins the crowds that dare to assemble.", { MI: 6, EN: -8, GL: -4 }],
      ["Bar facial scanning of gatherings.", "A right to assemble means a right to assemble unnamed.", "You forbid scanning peaceful gatherings. You forgo a powerful identification tool, but the anonymity that lets citizens protest and worship without fear of a logged face survives.", { EN: 6, GL: 4, MI: -2 }])),

  // ── Custodial healthcare ────────────────────────────────────────────────────
  ax("Prisons Medical Officer", "doctor", ["prison", "health", "deaths"],
    sx("Prisoners die of treatable illness for want of any real medical care, the sick ignored until they are corpses. The officer wants proper prison healthcare; it costs money for a constituency — convicts — that wins no votes and earns no sympathy.",
      ["Fund proper prison healthcare.", "A sentence is loss of liberty, not a death warrant.", "You fund real medical care in the jails. There are no votes in it and the cost is real, but prisoners stop dying of treatable illness, and the state stops being a quiet executioner by neglect.", { EN: 8, GL: 4, FI: -4 }],
      ["Leave prison healthcare to rot.", "A convict's health is the lowest claim on the budget.", "You leave the jails without real medicine. The money goes to constituencies that vote, and prisoners keep dying of curable things, their deaths logged as misfortune and forgotten.", { FI: 4, EN: -6, GL: -2 }])),

  // ── Land-dispute violence ───────────────────────────────────────────────────
  ax("Rural Police Chief", "people", ["land", "violence", "powerful"],
    sx("A powerful local man is seizing a poor family's land by force, with hired muscle and a bought local police chief, and the family's appeals go nowhere. Intervene against the powerful grabber, or let the 'private dispute' run its course?",
      ["Intervene against the land-grabber.", "A poor man's deed is worth as much as a rich man's.", "You send honest officers, protect the family, and move against the grabber and the bent local chief. The powerful man rages and pulls strings, but the family keeps its land and the law its meaning.", { EN: 8, GL: 4, MI: -2, FA: -4 }],
      ["Treat it as a private dispute.", "I cannot referee every village land quarrel.", "You stay out and call it a civil matter. The powerful man's muscle prevails, the family is dispossessed, and the lesson spreads that land here belongs to whoever can hire the most fists.", { FA: 4, MI: 2, EN: -8, GL: -2 }])),

  // ── Protest-injury medical neutrality ───────────────────────────────────────
  ax("Hospital Liaison Officer", "doctor", ["protest", "hospitals", "neutrality"],
    sx("During unrest, police have been seizing injured protesters from hospital beds and pressuring doctors to deny treatment or report them. Guarantee medical neutrality — hospitals as sanctuaries — or let the security forces pursue the wounded inside?",
      ["Guarantee hospitals as neutral sanctuaries.", "A wounded man on a gurney is a patient, not a target.", "You order hospitals off-limits to arrests and protect treating doctors. The security forces fume at the sanctuary, but the wounded are treated and the state is not seen dragging the bleeding from their beds.", { EN: 8, GL: 6, MI: -4 }],
      ["Let security forces pursue the wounded.", "A hospital bed is no refuge from the law.", "You let police seize the injured from the wards and lean on the doctors. The wounded learn that to seek treatment is to be arrested, and the images of patients hauled from gurneys travel the world.", { MI: 4, EN: -8, GL: -8 }])),

  // ── The disappearance that touches power ────────────────────────────────────
  ax("Internal Affairs Director", "shadow", ["disappearance", "cover-up", "accountability"],
    sx("A businessman who fell out with a powerful minister has vanished — picked up, witnesses say, by men in plainclothes. The trail leads uncomfortably close to your own circle. Investigate honestly, or quietly close the file?",
      ["Investigate honestly, wherever it leads.", "A disappearance I refuse to solve is one I own.", "You order a real investigation, and it points toward your own. The minister and the agencies close ranks against you, but the businessman's fate is uncovered and the rot, for once, is named.", { EN: 8, GL: 6, MI: -4, FA: -6 }],
      ["Quietly close the file.", "Some threads are better not pulled.", "You bury the investigation. The minister is protected and the agencies reassured, and another man simply ceases to exist, his family left to a silence the state enforces.", { MI: 4, FA: 4, EN: -10, GL: -6 }]),
    sx("The case would not stay buried — a journalist has the witnesses, and the story is about to break regardless. Get ahead of it with a controlled admission and a scapegoat, or crush the story and the journalist with it?",
      ["Crush the story and the journalist.", "What is never reported never happened.", "You spike the story and threaten the journalist into silence. The suppression itself leaks, and now you own both the disappearance and the cover-up of the cover-up, a scandal compounding on itself.", { MI: 4, EN: -8, GL: -8 }],
      ["Get ahead of it with an admission.", "A wound I lance heals; one I hide festers.", "You concede the broad truth, offer a scapegoat and an inquiry, and free what can be freed. The base is unsettled and the agencies wary, but you blunt the story by meeting it rather than fleeing it.", { GL: 4, EN: 4, MI: -4, FA: -2 }])),
];
