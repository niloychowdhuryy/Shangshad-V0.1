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
    sx("Students are blocking the roads peacefully to protest an unfair rule. The police chief wants to force them to leave right now.",
      ["Tell the police to force the students off the roads.", "A crowd unanswered only multiplies.", "The batons and gas clear the roads for a day. The footage of bloodied students travels the world and triples the next crowd.", { MI: 6, EN: -14, GL: -8 }],
      ["Tell the police to wait and try talking to the students.", "You cannot tear-gas a generation into loving you.", "You meet the student leaders. The cantonment frets that you flinched; the campuses, astonished, lower the temperature.", { EN: 10, GL: 6, MI: -8 }]),
    sx("A video shows a police officer shooting an unarmed student. Everyone is very angry. Your strict friends want you to lock everyone inside and turn off the internet.",
      ["Lock everyone inside and turn off the internet.", "Silence the signal, scatter the crowd.", "The blackout buys an eerie quiet and global condemnation. Businesses lose crores a day and the anger compounds in the dark.", { MI: 8, EN: -12, GL: -10, FI: -6 }],
      ["Keep the internet on and investigate the shooting.", "A government that hides has already lost.", "You name an inquiry and let the country watch. It is a gamble on transparency; the movement, given a hearing, begins to fracture between moderates and absolutists.", { EN: 8, GL: 6, MI: -6 }]),
    sx("The protesters want you to fire the leaders who ordered the police to hurt people. The army says they won't help you hurt students anymore.",
      ["Fire the leaders who ordered the bad things.", "Better to lose a wing than the whole bird.", "You dismiss the ministers blamed for the deaths. The crowd claims a scalp and pauses; your inner circle learns no one is safe.", { EN: 12, GL: 6, MI: -4, FA: -6 }],
      ["Protect your leaders and don't give up.", "I will not feed my own people to a mob.", "You refuse to bend and rally the loyal core. But with the army unwilling to shoot, your authority now rests on a crowd's patience.", { MI: -8, EN: -10, FA: 6, GL: -6 }])),

  // ── The elite battalion & disappearances ────────────────────────────────────
  ax("Rights Commission Chair", "official", ["disappearances", "rab", "torture"],
    sx("A helper brings proof that your secret police kidnapped people and hid them in secret jails. Some are still alive.",
      ["Hide the proof and do nothing.", "The battalion is the spine of internal order.", "The file vanishes and the cells stay full. The disappeared remain disappeared, and the rot spreads through the ranks that learn it is permitted.", { MI: 6, EN: -10, GL: -8 }],
      ["Free the hidden people and investigate.", "A state that disappears its own has already fallen.", "Survivors come home to weeping families and cameras. The battalion's commanders feel the betrayal; the world cautiously applauds.", { EN: 10, GL: 10, MI: -10 }]),
    sx("The police are scared they will get in trouble for the bad things they did. They want you to promise to protect them, or they might stop listening to you.",
      ["Promise to protect them so they stay loyal.", "Loyalty now outweighs justice later.", "The officers stand down, reassured. Impunity is enshrined, and the families of the disappeared learn there will be no reckoning.", { MI: 8, EN: -8, GL: -6, FA: 4 }],
      ["Refuse to protect them and fix the police force instead.", "I will not be blackmailed by my own guns.", "You retire the worst commanders and split the battalion's powers. It is dangerous — a wounded force is unpredictable — but the precedent of accountability holds.", { GL: 8, EN: 8, MI: -10 }])),

  // ── Digital Security Act / press ─────────────────────────────────────────────
  ax("ICT Enforcement Director", "official", ["dsa", "press", "speech"],
    sx("People are in jail just for drawing funny pictures or writing jokes about your family online. The police want to arrest more people.",
      ["Arrest more people to scare everyone into being quiet.", "Mockery unchecked becomes contempt.", "The arrests chill the newsrooms into caution. Editors self-censor, and 'press freedom' becomes the West's favourite stick to beat you with.", { MI: 6, FA: 4, EN: -10, GL: -8 }],
      ["Let the jokers out of jail and change the harsh rule.", "A government afraid of cartoons is afraid of itself.", "The journalists walk free to grateful coverage. Your thin-skinned loyalists fume; your standing with the open world recovers.", { EN: 8, GL: 8, MI: -6, FA: -4 }])),

  // ── Communal violence ───────────────────────────────────────────────────────
  ax("District Magistrate, riot zone", "official", ["communal", "minorities", "puja"],
    sx("An untrue rumor made angry people start breaking into homes and temples. The local police are just watching and not helping.",
      ["Send good police fast to arrest the bad people breaking things.", "A pogrom on my watch is my disgrace.", "Troops restore order overnight and the ringleaders are jailed. The hardline preachers who fanned it turn their sermons against you.", { EN: 10, GL: 8, MI: -4, FA: -4 }],
      ["Send a polite message but don't take sides.", "Do not inflame the majority before an election.", "You stay above it and let it burn out. The minorities learn their safety is negotiable; the cynics call it electoral arithmetic.", { MI: 4, FA: 4, EN: -12, GL: -8 }])),

  // ── Surveillance tooling ────────────────────────────────────────────────────
  ax("Cyber Intelligence Vendor", "shadow", ["surveillance", "spyware", "rights"],
    sx("A salesman offers you a secret tool to hack into anyone's phone and read their messages.",
      ["Buy the secret hacking tool and use it on anyone.", "Knowledge of every plot is worth the cost.", "You gain a god's-eye view of your enemies — and your allies. When its existence leaks, as such things do, the scandal is radioactive.", { MI: 10, FI: -6, GL: -8, EN: -4 }],
      ["Say no, or only use it when a judge says it's okay.", "A tool with no leash is a leash on me.", "You either pass or wrap it in court oversight. You lose some omniscience; you keep a state that can still call itself lawful.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Police reform / custodial death ─────────────────────────────────────────
  ax("Reform-minded Police Superintendent", "official", ["police", "torture", "reform"],
    sx("A good young police boss says a bad officer hurt a poor man until he died, then lied about it.",
      ["Tell the good boss to sign the lie and stay quiet.", "One hawker is not worth a war in the ranks.", "The report is falsified and the SP, complicit now, climbs. Every constable learns the lock-up has no witnesses that matter.", { MI: 4, EN: -10, GL: -4 }],
      ["Help the good boss and arrest the bad officer.", "A force that tortures the poor protects no one.", "You make the honest officer a symbol and the OC an example. The old guard closes ranks against you; the public, briefly, believes in the police.", { EN: 10, GL: 6, MI: -6 }])),

  // ── Border / refugee camp policing ──────────────────────────────────────────
  ax("Camp Security Commander", "general", ["rohingya", "camps", "trafficking"],
    sx("Bad gangs are doing illegal things in the homeless camps. The guard wants to use strong force to clean it up, but that will be very violent.",
      ["Let the guard use strong force to clean the camps.", "A lawless camp threatens the whole coast.", "The gangs are crushed and the camp goes quiet. Civilian casualties and footage of the sweep hand your critics a year of ammunition.", { MI: 10, EN: -8, GL: -8 }],
      ["Ask safe helpers to build a better, kinder camp police.", "Order earned beats order imposed.", "You stand up a joint, accountable force. It is slow and imperfect, but the worst gangs lose their grip without a massacre.", { MI: 4, GL: 6, EN: 6, FI: -6 }])),

  // ── Election-eve crackdown ──────────────────────────────────────────────────
  ax("Special Branch Director", "shadow", ["election", "opposition", "arrests"],
    sx("An election is coming. A spy boss wants to arrest your enemies now for fake reasons so they can't campaign against you.",
      ["Say yes and arrest your enemies.", "A contest you control is a contest you win.", "Thousands of organisers are jailed on old cases. The opposition cries foul to a sympathetic world; the result is yours and tainted.", { MI: 8, FA: 4, GL: -10, EN: -8 }],
      ["Say no and let them campaign fairly.", "A win that needs empty jails is a loss in disguise.", "You let the opposition march. The contest is real and dangerous; if you win, you win something worth holding.", { GL: 8, EN: 8, MI: -8 }])),

  // ── BESPOKE INSTALMENT — real internal-security dilemmas ────────────────────

  ax("Anti-Narcotics Director", "general", ["yaba", "drug-war", "crossfire"],
    sx("Bad drugs are everywhere. The police want to fight a harsh war and might accidentally kill people they think are selling drugs.",
      ["Let the police fight the harsh, dangerous war.", "Burn the trade out, root and branch.", "The headlines blaze with seizures. The 'crossfire' bodies pile up, many of them poor and unproven, and the rights world recoils.", { MI: 8, EN: -10, GL: -8 }],
      ["Treat drug users like sick people and only chase the big bosses.", "You cannot shoot your way out of a chemical.", "You build clinics and chase the financiers instead. It is slow and unglamorous; the slums, in time, breathe easier.", { EN: 8, GL: 6, MI: -6, FI: -4 }])),

  ax("Road Safety Movement", "people", ["students", "road-safety", "protest"],
    sx("A bad bus driver ran over two students. Now all the kids are in the streets demanding safer roads.",
      ["Agree with the kids and make strict rules for safe roads.", "The children are policing what we would not.", "You meet their demands and jail the worst operators. The transport-owner lobby, thick with your men, is enraged.", { EN: 12, GL: 6, MI: -6, FA: -4 }],
      ["Force the kids off the streets and say they are lying.", "Schoolchildren do not run my roads.", "Your cadres and police break the movement. The images of beaten students travel the world and stain the year.", { MI: 6, EN: -14, GL: -8 }])),

  ax("District Police Super", "official", ["lynching", "rumour", "mob"],
    sx("A fake story on phones about people stealing children is making angry mobs beat up innocent strangers.",
      ["Turn off the phones and internet to stop the rumor.", "Silence the lie, save the lives.", "The lynchings ebb as connectivity drops and patrols rise. Businesses and rights groups protest the heavy throttle.", { MI: 8, EN: 4, GL: -6 }],
      ["Keep the internet on and tell everyone the truth loudly.", "You fight a rumour with the truth, not a blackout.", "You blanket the airwaves with the facts and arrest ringleaders. Slower to bite, but the open net is preserved.", { EN: 8, GL: 6, MI: -4 }])),

  ax("Hill Tracts Commander", "general", ["cht", "insurgency", "indigenous"],
    sx("People in the hills are fighting because an old peace promise is falling apart. The army wants to go in strong.",
      ["Send the army in strong to stop the fighting.", "Restore the writ of the state in the hills.", "The faction scatters under pressure. Indigenous villages report abuses, settlers push deeper, and the grievance hardens.", { MI: 10, EN: -8, GL: -6 }],
      ["Fix the peace promise and protect the hill people.", "The hills were promised autonomy; honour it.", "You restart talks and halt the land grab. The settler lobby and some generals seethe; the hills, warily, quiet.", { EN: 8, GL: 6, MI: -6, FA: -4 }])),

  ax("Women's Rights Commission", "people", ["gender", "rape-law", "justice"],
    sx("A woman was hurt very badly. People are marching and demanding that the bad guys be put to death.",
      ["Make a law to put them to death to make the crowd happy.", "Give the street the sentence it demands.", "The crowd is sated by the gallows clause. Conviction rates barely move; the deeper rot in policing and courts is untouched.", { EN: 6, MI: 4, GL: -4 }],
      ["Build faster, better courts to protect women properly.", "A noose is not a justice system.", "You fund the slow machinery of real protection. Less cathartic, but conviction and reporting finally begin to climb.", { EN: 10, GL: 8, FI: -6 }])),

  ax("Anti-Trafficking Chief", "official", ["trafficking", "migration", "mediterranean"],
    sx("Bad men in your country are tricking poor people onto dangerous boats to go far away. The bad men pay the police to look the other way.",
      ["Stop the bad men and the dirty police.", "We bury our youth in the Mediterranean.", "You jail brokers and the officers on their payroll. The trade fragments; the bought policemen and their patrons turn on you.", { EN: 8, GL: 8, MI: -4, FA: -4 }],
      ["Ignore it because those poor people might send money back later.", "Desperate men will go regardless.", "The boats keep sailing and the brokers keep paying. Every drowned son's family learns the state shrugged.", { FI: 4, MI: 4, EN: -10, GL: -6 }])),

  ax("Prisons Inspector-General", "official", ["prisons", "overcrowding", "political"],
    sx("The jails are way too full, mostly with your enemies who never got a fair trial. People are getting sick.",
      ["Let the people who haven't had a trial go home for now.", "A prison of the un-charged is a scandal.", "Thousands walk free pending trial; the jails decompress. Your hardliners call it surrender to the opposition.", { EN: 8, GL: 8, MI: -8 }],
      ["Keep them all in jail and try to build more rooms.", "The streets are safer with them inside.", "You keep the jails full and pour money into more bars. The outbreak spreads, and the world counts your political prisoners.", { MI: 6, FI: -6, EN: -8, GL: -6 }])),

  ax("Fire Service Director", "official", ["fire", "building-code", "safety"],
    sx("A secret chemical room caught fire and many people died. The fire boss wants to shut down every unsafe building, but your rich friends own them.",
      ["Shut down all the unsafe buildings.", "No more pyres in the old city.", "Inspectors padlock hundreds of illegal premises. Commerce screams and powerful landlords mobilise against the crackdown.", { EN: 12, GL: 6, FI: -6, FA: -6 }],
      ["Just give them a small fine and let them stay open.", "You cannot empty half the old city.", "A few fines, a press conference, and the lanes reopen as before. The next fire is already being stacked, drum by drum.", { FI: 4, FA: 4, EN: -12, GL: -4 }])),

  ax("Immigration Director", "official", ["passport", "corruption", "bribery"],
    sx("Getting a passport takes forever unless you pay a secret bribe. You can make a new computer system to stop the bribes, but your workers will be mad.",
      ["Make the new computer system to stop the bribes.", "A passport is a right, not a bribe.", "The brokers lose their grip and applicants their agony. The displaced officers sabotage and slander the new system.", { EN: 8, GL: 6, MI: -4, FA: -4 }],
      ["Leave it alone and let the workers keep taking bribes.", "Do not provoke the whole department at once.", "The counters stay, and so does the toll on every citizen. The racket hums on under your seal.", { FA: 4, EN: -8, GL: -4 }])),

  ax("VIP Protocol Officer", "official", ["vip", "convoy", "privilege"],
    sx("A very important leader's fast car hit a poor man. The leader didn't stop, and an ambulance was stuck behind them. Everyone saw the video.",
      ["Punish the important leader and stop letting them drive so fast.", "No siren outruns an ambulance.", "You publicly clip the privilege and the minister. The cabinet's grandees fume at the humiliation; the street cheers.", { EN: 10, GL: 4, FA: -6, MI: -4 }],
      ["Protect the leader and try to hide the story.", "One does not feed a colleague to a mob.", "The story is smothered and the convoys roll on. The dead man's family, and the watching city, file it away.", { MI: 4, FA: 4, EN: -10, GL: -4 }])),

  ax("NID Database Chief", "shadow", ["surveillance", "data", "privacy"],
    sx("A computer expert wants to connect everyone's fingerprints and photos to cameras that watch the city. This could find bad guys, but it also spies on everyone.",
      ["Connect the cameras to spy on everyone.", "A state that sees all fears nothing.", "You gain a near-omniscient eye over the country. When its reach leaks, the outrage at home and abroad is volcanic.", { MI: 10, FI: -6, GL: -8, EN: -6 }],
      ["Make strict rules so the cameras can't spy on innocent people.", "A tool that watches everyone is a chain on everyone.", "You keep the ID system civil, not panoptic. You lose an instrument of control and keep a shred of liberty.", { GL: 8, EN: 6, MI: -6 }])),

  ax("Cyber Crime Unit Head", "official", ["cybercrime", "gambling", "scams"],
    sx("Bad gangs online are stealing people's money using games. Some of your own young helpers are secretly part of the gangs.",
      ["Stop everyone, even your own helpers.", "Cut the scam off at the local hand.", "Arrests roll up the fraud rings and the party-linked agents both. A slice of your youth wing is suddenly facing court.", { EN: 8, GL: 6, FI: 4, FA: -6 }],
      ["Only go after the gangs from other countries, not your helpers.", "Do not jail our own boys over a side hustle.", "You block sites and spare the agents. The fraud reroutes and the public keeps bleeding small sums into the dark.", { MI: 4, FA: 4, EN: -8 }])),

  ax("Police Recruitment Board", "official", ["police", "recruitment", "merit"],
    sx("People have to pay giant bribes just to get a job as a police officer. This makes them bad police officers later.",
      ["Stop the bribes and only hire the best people.", "A bought constable polices for his broker.", "Honest recruits enter a cleaner force. The recruitment mafias and the local bosses who ran them lose a fortune and turn hostile.", { EN: 8, GL: 4, MI: 4, FA: -8 }],
      ["Let people keep paying bribes for jobs.", "Do not war with every thana at once.", "The jobs keep selling and the new constables keep extorting to clear their debts. The rot renews itself.", { FA: 4, MI: 4, EN: -10 }])),

  ax("Transport Authority Chief", "official", ["traffic", "unfit-vehicles", "gridlock"],
    sx("The city is full of old, broken, dangerous buses run by mean groups. If you get rid of the bad buses, the groups might strike and stop all traffic.",
      ["Get rid of the broken, dangerous buses.", "A city cannot run on rolling coffins.", "Dangerous buses come off the road and the air clears a little. The transport syndicates shut the city down in retaliation.", { EN: 8, GL: 4, MI: -6, FA: -4 }],
      ["Be nice to the mean groups so they don't strike.", "They can paralyse the capital in an hour.", "You trade enforcement for peace with the bosses. The coffins keep rolling and the gridlock thickens.", { MI: 4, FA: 4, EN: -8 }])),

  ax("Counter-Terror Chief", "general", ["militancy", "terror", "raids"],
    sx("After a scary attack, the police want to break into homes to stop bad guys before they do anything. This might make innocent people angry.",
      ["Let the police break into homes.", "Strike the cells before they strike us.", "The plots are disrupted and the world credits your resolve. Heavy-handed raids on the wrong doors breed quiet new grievances.", { MI: 10, GL: 6, EN: -6 }],
      ["Be careful and try to teach people not to be bad guys instead.", "You cannot raid a sermon out of a mind.", "You blend precise arrests with community work. Slower reassurance for the West, but a thinner recruiting ground over time.", { EN: 8, GL: 4, MI: -4, FI: -4 }])),

  ax("Slum Eviction Magistrate", "official", ["eviction", "slum", "land"],
    sx("A rich builder wants to tear down a giant neighborhood where very poor people live so he can build something fancy.",
      ["Tear down the poor people's homes for the builder.", "The land is worth more than the shanties.", "The towers will rise and the treasury will profit. Half a million are scattered into the monsoon, and they remember your name.", { FI: 8, FA: 4, EN: -14, GL: -4 }],
      ["Stop the builder and let the poor people stay safely.", "You do not bulldoze your own people for a tower.", "You give the slum legal footing and basic services. The developer and his patrons lose a fortune and your favour.", { EN: 12, GL: 4, FI: -8, FA: -4 }])),

  ax("Special Branch Analyst", "shadow", ["dissent", "journalists", "watchlist"],
    sx("Your spies have a list of writers and complainers. They want to follow them and scare them so they stop complaining.",
      ["Let the spies follow and scare them.", "Know your critics before they move.", "You blind-side dissent before it organises. When the watchlist leaks, every name becomes a martyr and a headline.", { MI: 8, FA: 4, GL: -10, EN: -8 }],
      ["Tell the spies to throw away the list.", "A state afraid of its scholars is already weak.", "You stand down the dragnet. You lose an early-warning net and keep the country a place thought can still be spoken.", { GL: 8, EN: 8, MI: -8 }])),

  ax("Border Guard Sector Commander", "general", ["border", "smuggling", "haats"],
    sx("People sneak things over the border to make money, and guards shoot them. You could build safe, legal markets there instead.",
      ["Build safe, legal markets on the border.", "Trade in daylight beats trade under fire.", "Sanctioned haats pull commerce into the open and cut the killings. The smuggling syndicates lose their margins and snarl.", { GL: 6, EN: 8, FI: 4, MI: -4 }],
      ["Keep it illegal and punish the sneekers.", "Smuggling is smuggling; stamp it out.", "Raids choke the trade and the border economy collapses. The villages, robbed of their living, curse the state that 'saved' them.", { MI: 6, EN: -10, FA: -4 }])),

  ax("Riot Control Commander", "general", ["protest", "crowd", "force"],
    sx("A giant crowd of your enemies is having a peaceful meeting. Your police boss wants to use sticks and gas to make them run away.",
      ["Use sticks and gas to make them run away.", "A crowd that size is a threat, not a meeting.", "The avenue is cleared in a haze of gas and blood. The footage hardens the opposition and shames you abroad.", { MI: 8, EN: -12, GL: -8 }],
      ["Let them have their peaceful meeting.", "Let them shout; tomorrow they go home.", "The rally swells, peaks, and disperses on its own. Your hawks call it weakness; the day passes without a martyr.", { EN: 8, GL: 6, MI: -6 }])),

  ax("Disappearances Liaison", "official", ["disappearances", "families", "white-vans"],
    sx("Mothers of people who were kidnapped by the police are standing together crying. The world wants to send a team to investigate.",
      ["Let the world team come and find the truth.", "A state that hides its vans has lost its soul.", "Some of the missing surface; the world cautiously applauds the candour. The agencies responsible feel the ground shift beneath them.", { EN: 10, GL: 10, MI: -10 }],
      ["Keep the team out and force the mothers to leave.", "No foreigner audits our security.", "You bar the investigators and clear the vigil. The mothers' grief becomes the opposition's sharpest, most enduring weapon.", { MI: 6, FA: 4, GL: -12, EN: -8 }])),

  ax("Domestic Worker Advocate", "people", ["labour", "abuse", "children"],
    sx("A little girl working as a maid in a rich house was hurt very badly. A helper wants to check all rich houses to make sure maids are safe.",
      ["Check the houses to keep the maids safe.", "No child should vanish behind a rich gate.", "Inspections begin to pierce the private cruelty. The affluent — many of them your supporters — resent the intrusion.", { EN: 10, GL: 6, FA: -6 }],
      ["Say no because it is their private house.", "The state does not enter the drawing room.", "You leave the gates closed and the maids unseen. The next tortured child is another headline you will have to manage.", { FA: 4, EN: -10, GL: -4 }])),

  ax("Election Security Chief", "general", ["election", "violence", "centres"],
    sx("Voting day is coming and people might fight. You can put the army everywhere to keep it fair, or only put them where it helps you win.",
      ["Put the army everywhere to keep the vote completely fair.", "Let the count be clean or not at all.", "The vote passes with rare calm and credibility. Your own machine grumbles that you gave away the home advantage.", { GL: 10, EN: 8, MI: -6 }],
      ["Put the army only where it helps you win.", "Security is also strategy.", "Your centres are safe; the opposition's are not. You bank the seats and the observers' damning footnotes both.", { MI: 8, FA: 4, GL: -10, EN: -6 }])),

  ax("Acid & Dowry Cell", "people", ["acid", "dowry", "women"],
    sx("Mean people are throwing bad chemicals that burn women's faces. You can make it very hard to buy these chemicals, but store owners will complain.",
      ["Make it very hard to buy the bad chemicals and punish the mean people.", "A face burned for a dowry is a state's failure.", "Open acid vanishes from the bazaars and convictions quicken. The chemical traders lobby and grumble, but the wards see fewer victims.", { EN: 10, GL: 6, FI: -4, FA: -4 }],
      ["Let the stores keep selling the chemicals easily.", "Do not strangle a whole trade over a few cases.", "Acid stays cheap and available. Another disfigured woman, another vigil, another file you will answer for.", { FI: 4, EN: -10, GL: -4 }])),

  ax("Crowd Safety Officer", "official", ["events", "stampede", "public"],
    sx("Two huge events are happening at the same time. Last year, a crowd pushed too hard and people died. A helper wants strict rules to keep crowds small and safe.",
      ["Make strict rules to keep the crowds safe.", "I will not preside over another stampede.", "The events run safely under tight management. Some call the controls heavy-handed and the charity less generous.", { EN: 8, MI: 4, FI: -4 }],
      ["Let everyone go without rules.", "Do not fence in the people's gatherings.", "The crowds flow free and vast. The risk you waved away is one bad surge from becoming your next tragedy.", { EN: -8, FA: 4, GL: -4 }])),

  // ── Café siege / militant attack ────────────────────────────────────────────
  ax("Counter-Terror Commander", "general", ["terrorism", "siege", "militants"],
    sx("Bad guys with weapons took over a fancy restaurant and are hurting people inside.",
      ["Send the police rushing in immediately to fight them.", "Every hour of delay is another execution.", "Commandos breach and end the siege in blood. Some hostages die in the assault, but the militants are wiped out and the state shows it will not be held to ransom.", { MI: 8, GL: -2, EN: -4 }],
      ["Wait and try to talk to them to save lives safely.", "A panicked assault fills the morgue.", "You hold off and work for a safer resolution. The standoff drags agonisingly and the watching world frets, but a patient rescue may yet save those still alive inside.", { GL: 2, MI: -2, EN: -2 }]),
    sx("The bad guys from the restaurant turned out to be rich, smart kids from good families. Your friends are terrified.",
      ["Have the police arrest lots of young people to be safe.", "Root out the rot before it spreads.", "Mass detentions sweep up the young and the bearded. A few cells are broken, but the dragnet radicalises as many as it catches, and the abuses pile up.", { MI: 8, EN: -8, GL: -4 }],
      ["Try to gently teach young people not to join bad groups.", "You cannot arrest your way out of an idea.", "You build counselling, monitoring, and community programmes instead of mass arrests. The results are slow and invisible, but the pipeline of recruits begins, quietly, to thin.", { EN: 6, GL: 4, MI: -4 }])),

  // ── Mob lynching ────────────────────────────────────────────────────────────
  ax("Inspector-General of Police", "official", ["lynching", "rumour", "mob"],
    sx("A fake story about strangers stealing kids for a bridge is making mobs beat innocent people to death.",
      ["Tell police they can shoot the angry mobs.", "A mob that kills must fear the gun.", "Police open fire to break the worst mobs and the lynchings ebb. The deaths at police hands draw their own outcry, and the underlying panic still smoulders online.", { MI: 6, EN: -4, GL: -4 }],
      ["Stop the fake story and arrest the people who started the mob.", "Kill the lie and the mob dissolves.", "You flood the networks with truth, arrest instigators, and protect the accused. It is slower than bullets, but the panic deflates without the state adding to the body count.", { EN: 6, GL: 4, MI: -2 }])),

  // ── Hefazat mass protest ────────────────────────────────────────────────────
  ax("Home Secretary", "cleric", ["islamist", "protest", "blasphemy"],
    sx("A huge group of religious people blocked the whole city. They demand you destroy a statue they don't like.",
      ["Send the police at night to force them all to leave.", "The capital cannot be held hostage.", "Police and paramilitaries clear the square in a dark, bloody operation. The occupation ends and rumours of a massacre spread; the movement gains martyrs and a grievance that will not die.", { MI: 8, EN: -8, GL: -6 }],
      ["Talk to them and maybe give them a little bit of what they want.", "A square emptied by talk leaves no martyrs.", "You move the disputed sculpture and promise to 'study' their demands, and the occupation disperses. Secularists feel betrayed by the concession, but the capital is spared a massacre.", { EN: 2, MI: -2, GL: 2, FA: -2 }])),

  // ── Pegasus-style spyware ───────────────────────────────────────────────────
  ax("Intelligence Procurement Chief", "shadow", ["spyware", "surveillance", "dissent"],
    sx("You can buy a super-secret tool to read everyone's phone messages. But if you buy it, everyone will eventually find out you spy on them.",
      ["Buy the super-secret spy tool.", "A leader who cannot read the room is blind.", "You acquire the spyware and the secrets pour in. Every rival's phone is an open book — until the purchase leaks, and the word 'surveillance state' attaches to your name for good.", { MI: 8, GL: -6, EN: -6 }],
      ["Do not buy the spy tool.", "A tool that reads everyone eventually reads its master's enemies into power.", "You pass on the spyware. You forgo a formidable surveillance edge, but you are spared the day an exposé reveals you bugged judges, journalists, and your own ministers.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Political prisoners / overcrowded jails ─────────────────────────────────
  ax("Prisons Inspector-General", "official", ["prisons", "political", "overcrowding"],
    sx("The jails are completely packed because you arrested so many people who don't like you. You can let the harmless ones go home.",
      ["Keep them all in jail and try to build more space.", "A freed activist is a refilled street.", "You keep the jails packed and order new prisons built. The opposition stays caged and the streets quiet, but the deaths in custody and the cost of the cells both keep climbing.", { MI: 6, FI: -4, EN: -8, GL: -4 }],
      ["Let the harmless people go home.", "A jail bursting with the innocent shames the state.", "You free thousands held on flimsy mass cases. The hardliners warn the streets will fill, but the custodial deaths fall and the courts and jails can breathe.", { EN: 8, GL: 6, MI: -6 }])),

  // ── Campus killing (Abrar-style) ────────────────────────────────────────────
  ax("University Affairs Officer", "people", ["students", "campus", "torture"],
    sx("Students from your own team beat another student until he died just for writing something bad about you online.",
      ["Protect your team members so they don't go to jail.", "I do not feed my own loyalists to a mob.", "You quietly protect the killers and float counter-narratives. The cover-up enrages the campuses further, and the dead student becomes a permanent symbol of your wing's impunity.", { MI: 2, FA: 2, EN: -12, GL: -6 }],
      ["Send them to jail for what they did.", "A boy tortured to death is not a loyalty test.", "You let the cadres be arrested and charged. The student wing feels betrayed and the machine grumbles, but the campuses, stunned, see a flicker of accountability.", { EN: 8, GL: 6, MI: -4, FA: -4 }])),

  // ── Facial recognition city ─────────────────────────────────────────────────
  ax("Smart City Director", "official", ["cctv", "facial-recognition", "privacy"],
    sx("You can put cameras everywhere that know exactly who everyone is and where they go. It stops crime but means no one has any privacy.",
      ["Put up the cameras that track everyone's faces.", "A watched city is a safe city.", "Cameras and face-tracking blanket the capital. Street crime and terror plots get easier to foil, and so does following every activist from home to rally to home.", { MI: 8, EN: -6, GL: -4 }],
      ["Put up regular cameras that don't track faces.", "I will deter the mugger without indexing the marcher.", "You install the cameras but bar the face-recognition layer. You gain real crime deterrence without building a tool to map every dissident's movements.", { MI: 4, EN: 4, GL: 2, FI: -2 }])),

  // ── RAB reform under sanctions ──────────────────────────────────────────────
  ax("Security Reform Adviser", "general", ["rab", "sanctions", "reform"],
    sx("Your strict police stopped killing bad guys because the world was watching. But now crime is coming back. Your strict friends want the police to start killing again.",
      ["Let the police start secretly killing again.", "Fear was the only law the criminals respected.", "You ease the leash and the 'crossfire' deaths quietly return. Crime dips and the hardliners cheer, but the sanctions harden and the reform's brief promise dies.", { MI: 8, EN: -6, GL: -8 }],
      ["Stop them from killing and make them do things by the rules.", "A force that murders cannot be trusted to police.", "You lock in the restraint and rebuild the battalion around oversight and proper investigation. Crime-fighting is slower and the hardliners scornful, but the sanctions ease and a killing machine becomes a police force.", { GL: 8, EN: 6, MI: -6 }])),

  // ── Thana-level police bribery ──────────────────────────────────────────────
  ax("Police Reform Commissioner", "official", ["police", "corruption", "bribery"],
    sx("Local police stations are very mean and won't help anyone unless they pay a bribe. You can try to make them clean and nice, but the police will fight you.",
      ["Force the police stations to be clean and nice.", "A police that sells justice is a syndicate in uniform.", "You impose digital records, citizen oversight, and anti-bribery teams. The rank-and-file seethe and slow-walk, but ordinary people start getting served without paying for it.", { EN: 8, GL: 4, MI: -4 }],
      ["Leave the mean police stations alone.", "A demoralised force is a useless one.", "You decline to disturb the station-house economy. The constables stay content and pliable, and the poor keep paying a bribe for every scrap of justice the state owes them free.", { MI: 4, FA: 2, EN: -8 }])),

  // ── Human trafficking boat ring ─────────────────────────────────────────────
  ax("Anti-Trafficking Chief", "shadow", ["trafficking", "boats", "syndicate"],
    sx("Bad guys are putting poor men on broken boats to go to another country, and the police are helping the bad guys.",
      ["Stop everyone, even the police who are helping.", "A trade in drowning men cannot have a uniform's blessing.", "You break the syndicate and expose the officers shielding it. The trafficking route is disrupted and the corrupt purged, to international relief and some internal fury.", { EN: 8, GL: 6, MI: -2, FA: -4 }],
      ["Only stop the boat drivers and leave the police alone.", "Some uniforms are better left unexamined.", "You arrest the front-line smugglers and leave their protectors untouched. The route reopens under new management within weeks, and the boats keep sailing into the dark.", { MI: 2, FI: 2, EN: -6, GL: -4 }])),

  // ── Minority sect protection ────────────────────────────────────────────────
  ax("Religious Harmony Officer", "cleric", ["minorities", "sect", "violence"],
    sx("A big angry crowd is attacking a small group of people who pray differently.",
      ["Use the police to protect the small group.", "The state shields the few from the many, or it shields no one.", "You deploy security to defend the sect's mosques and arrest the instigators. The hardline preachers turn their fury on you, but the constitution's promise of equal protection holds.", { EN: 8, GL: 6, MI: -2, FA: -4 }],
      ["Give the angry crowd what they want to make them happy.", "I will not burn the country for one small sect.", "You quietly distance the state from the sect to placate the mob. The hardliners are triumphant, the violence subsides, and a small community learns the state will trade them for peace.", { MI: 4, FA: 2, EN: -8, GL: -6 }])),

  // ── Cultural festival under threat ──────────────────────────────────────────
  ax("Cultural Affairs Officer", "official", ["culture", "festival", "extremism"],
    sx("People want to have a big, fun new year party with music and masks. But grumpy people say it is bad and threaten to ruin it with a bomb.",
      ["Throw the party anyway and put lots of guards around it.", "Our culture will not be cancelled by a threat.", "You ring the festival with security and it goes ahead, defiant and joyous. The cost and the tension are high, but the secular tradition stands and the militants are denied their veto.", { EN: 8, GL: 4, MI: -2, FI: -4 }],
      ["Cancel the party to be safe and make the grumpy people happy.", "A dead crowd is too high a price for a parade.", "You call it off, citing the threat. The zealots quietly celebrate the cancellation they wanted, the secularists mourn a tradition surrendered, and the militants learn that a threat is enough.", { MI: 2, FA: -2, EN: -6, GL: -4 }])),

  // ── Whistleblower officer ───────────────────────────────────────────────────
  ax("Internal Affairs Director", "official", ["whistleblower", "police", "accountability"],
    sx("An honest police officer shared secret papers proving his boss ordered the police to kill people.",
      ["Punish the honest officer for sharing secrets and hide the papers.", "A leaker is a traitor whatever he reveals.", "You jail the whistleblower and quash the story. The killings stay covered, but the lesson lands in every honest officer: speak, and the state will break you, not the killer.", { MI: 6, FA: 2, EN: -8, GL: -6 }],
      ["Protect the honest officer and punish his bad boss.", "An officer with a conscience is worth ten without.", "You shield the whistleblower and move against the commander. The old guard is shaken and warns of low morale, but a culture of impunity takes its first real blow.", { EN: 8, GL: 6, MI: -6 }])),

  // ── Section 144 / rally ban ─────────────────────────────────────────────────
  ax("District Magistrate", "official", ["protest", "ban", "assembly"],
    sx("Your enemies are planning a giant meeting. You can use an old rule to make it illegal, but that might make them so angry they fight you.",
      ["Make the meeting illegal.", "A rally forbidden is a rally that cannot grow.", "You blanket the city in an assembly ban and flood it with police. The rally is throttled, but the heavy-handed lockdown of the capital becomes the story, and the grievance hardens.", { MI: 6, EN: -6, GL: -4 }],
      ["Let them have the meeting, but with safety rules.", "A banned gathering becomes a battle; a permitted one becomes a speech.", "You allow the rally within agreed limits. The opposition gets its day and its crowd, but the feared confrontation never comes, and the state looks confident rather than afraid.", { GL: 4, EN: 4, MI: -2 }])),

  // ── Firearms licences for party men ─────────────────────────────────────────
  ax("Arms Licensing Officer", "fixer", ["firearms", "party", "patronage"],
    sx("Your local friends want you to give them licenses to carry guns. They say it's for safety, but they really want to scare people during elections.",
      ["Give your friends the gun licenses.", "An armed friend is a loyal friend.", "You sign off on the licences and the local strongmen are armed. They deliver elections and intimidate rivals, and the country grows a little more lawless, district by district.", { MI: 4, FA: 4, EN: -8, GL: -2 }],
      ["Say no and take guns away from them.", "A party with guns is a militia in waiting.", "You clamp down on private firearms, your own side included. The local leaders feel disarmed and betrayed, but the cycle of armed political muscle loosens its grip.", { EN: 6, GL: 4, MI: -2, FA: -4 }])),

  // ── Returning foreign fighters ──────────────────────────────────────────────
  ax("Counter-Terror Commander", "general", ["extremism", "foreign-fighters", "deradicalisation"],
    sx("Some people who left to join a bad terrorist group want to come back home with their kids.",
      ["Do not let them come back, or lock them in jail forever.", "A trained jihadi is a threat, not a project.", "You refuse entry or jail those who slip back. The hard line plays well, but the stranded radicalise further abroad and the children pay for their fathers' choices, drawing rights criticism.", { MI: 6, EN: -2, GL: -4 }],
      ["Let them come back, but watch them very closely and help them change.", "A child of the caliphate is still a child.", "You bring them home into monitoring and de-radicalisation, prosecuting the guilty. It is a risk and the public is uneasy, but you reclaim the salvageable and the innocent rather than abandoning them.", { GL: 4, EN: 4, MI: -2 }])),

  // ── Press accreditation purge ───────────────────────────────────────────────
  ax("Information Security Officer", "official", ["press", "accreditation", "surveillance"],
    sx("You can secretly take away the special passes from reporters who write mean things about you, so they can't do their jobs.",
      ["Take away the passes from the mean reporters.", "Access is a privilege for the friendly.", "The critical reporters lose their passes and their scoops. The press corps gets the message and softens, and 'managed media' becomes one more charge in the indictment of your rule.", { MI: 4, FA: 2, EN: -6, GL: -6 }],
      ["Let all reporters keep their passes.", "A press corps of flatterers tells me nothing.", "You leave access untouched, critics and all. The tough questions keep coming at every briefing, but your government keeps a free press it can point to abroad.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Jailbreak / militant escape ─────────────────────────────────────────────
  ax("Prisons Inspector-General", "general", ["jailbreak", "militants", "security"],
    sx("Very bad terrorists escaped from a super safe prison because someone inside helped them.",
      ["Send police everywhere to search every corner of the country.", "Flood the country until they surface.", "Checkpoints and sweeps blanket the nation. The disruption is enormous and the wrongful detentions many, and the fugitives may still slip the clumsy net.", { MI: 6, EN: -6, FI: -2 }],
      ["Use smart clues to track them quietly.", "A scalpel catches what a sledgehammer scatters.", "You hunt the escapees quietly through intelligence and informants. It is slower and the public nervous, but the country is not paralysed and the inside helpers are traced too.", { MI: 4, GL: 2, EN: 2 }])),

  // ── Garment worker protest policing ─────────────────────────────────────────
  ax("Industrial Police Chief", "general", ["labour", "garments", "protest"],
    sx("Thousands of factory workers blocked the road because they haven't been paid. The factory owners want you to send the police to beat them and clear the road.",
      ["Send the police to beat the workers and clear the road.", "The export zones cannot be held hostage.", "The police clear the highways with batons and tear gas, and a worker or two die. The owners are grateful and the lines restart, but the deaths become a global stain on the garment brand.", { MI: 6, FI: 4, EN: -10, GL: -6 }],
      ["Help the workers get the money they are owed.", "Unpaid workers are a fire; do not fan it with batons.", "You force the owners to pay the arrears and mediate a raise. The donors grumble at the squeeze, but the highways clear peacefully and the workers go back with their dignity.", { EN: 8, GL: 4, FI: -4, FA: -4 }])),

  // ── Vested-property land grab ───────────────────────────────────────────────
  ax("Land Records Commissioner", "people", ["minorities", "land", "grabbing"],
    sx("Powerful people in your group stole land from a smaller religion using a bad, old rule. You can force them to give it back.",
      ["Force them to give the stolen land back.", "Land stolen under a bigot's law must go home.", "You push to return the seized property to its rightful owners. The connected grabbers rage and resist parcel by parcel, but a historic injustice begins, at last, to be undone.", { EN: 8, GL: 6, MI: -2, FA: -6 }],
      ["Let them keep the stolen land.", "I will not evict my own base for old ghosts.", "You let the grabbers keep their spoils. Your local power-holders are secured, and the minority families learn once more that the law that robbed them will not give it back.", { FA: 6, MI: 2, EN: -8, GL: -4 }])),

  // ── National ID surveillance database ───────────────────────────────────────
  ax("NID Database Director", "official", ["nid", "database", "surveillance"],
    sx("You can connect everyone's ID cards, phones, and bank accounts into one giant computer file. It is helpful, but lets the government know everything about everyone.",
      ["Build the giant computer file.", "A state that knows its citizens governs them well.", "You fuse the databases into one omniscient citizen profile. Services get slicker and fraud harder, and the state acquires a dossier on every life that no future ruler will ever dismantle.", { MI: 6, FI: 4, EN: -6, GL: -4 }],
      ["Keep everything separate to protect people's privacy.", "A single key to every life is too much for any hand.", "You bar the full integration and keep firewalls between the systems. Government is clunkier and some fraud slips through, but no all-seeing profile of the citizenry is ever assembled.", { EN: 6, GL: 4, FI: -2, MI: -2 }])),

  // ── Madrasa regulation ──────────────────────────────────────────────────────
  ax("Education-Security Liaison", "cleric", ["madrasa", "curriculum", "extremism"],
    sx("Many religious schools are not registered, and some might be teaching kids to be angry and mean. You can force them to register and learn math and science.",
      ["Force them to register and learn normal school subjects.", "A school the state cannot see is a school it cannot trust.", "You bring the madrasas under registration and a broadened curriculum. The clerics protest the intrusion and some resist, but a generation gains numeracy and a window onto the wider world.", { EN: 6, GL: 4, MI: -2, FA: -4 }],
      ["Leave the religious schools alone.", "I will not pick a fight with every mosque in the land.", "You leave the madrasas to themselves to keep the clergy onside. The establishment is grateful, but a vast parallel education stays beyond the state's sight, curriculum and all.", { FA: 6, MI: 2, EN: -6, GL: -2 }])),

  // ── Traffic police extortion ────────────────────────────────────────────────
  ax("Traffic Division Chief", "official", ["traffic", "extortion", "corruption"],
    sx("The traffic police take a little bit of secret money from every single bus and truck on the road.",
      ["Stop the traffic police from taking secret money.", "A road tax in a constable's pocket is theft with a whistle.", "You bring in cashless fines, cameras, and oversight. The constables lose their daily skim and resent it, but the roads grow fractionally fairer and safer.", { EN: 6, GL: 2, MI: -4 }],
      ["Let the traffic police keep taking the money.", "A contented constable is a compliant one.", "You leave the roadside economy alone. The force stays loyal and well-fed on bribes, and the buses that pay keep killing on the highways while the honest pay the fines.", { MI: 4, FA: 2, EN: -6 }])),

  // ── Sufi shrine attacks ─────────────────────────────────────────────────────
  ax("Counter-Terror Commander", "cleric", ["shrines", "sufi", "militants"],
    sx("Mean people are attacking gentle, peaceful religious places. The police want to guard the places and arrest the loud speakers who tell people to attack.",
      ["Guard the places and arrest the mean speakers.", "The faith of the saints will not be bombed into silence.", "You guard the shrines and move against the preachers fuelling the attacks. The powerful clerics rage at being named, but the pluralist tradition gains a defender and the killings slow.", { EN: 6, GL: 4, MI: -2, FA: -4 }],
      ["Guard the places but leave the speakers alone.", "I will protect the shrine without naming the mosque.", "You post guards but avoid confronting the inciting clerics. The attacks continue, fed by sermons you dare not touch, and the shrine-keepers learn that protection stops at the pulpit.", { MI: 2, FA: 2, EN: -4, GL: -2 }])),

  // ── High-profile rape case ──────────────────────────────────────────────────
  ax("Inspector-General of Police", "people", ["women", "rape", "justice"],
    sx("A group of boys did a terrible thing to a girl and filmed it. They are friends with important people. The whole country is demanding they be punished.",
      ["Make sure the boys are punished, no matter who they know.", "A crime this vile cannot buy its way free.", "You let the case proceed hard against the well-connected accused. Their patrons lean on you and lose, the protesters are vindicated, and rare faith in justice flickers back to life.", { EN: 10, GL: 6, MI: -2, FA: -6 }],
      ["Secretly slow down the police work so they don't get in trouble.", "Their families are friends I cannot afford to lose.", "You let the case sink into delay and lost evidence. The connected walk, the protests curdle into cynicism, and every woman in the country reads the verdict on whose justice this is.", { FA: 6, MI: 2, EN: -12, GL: -6 }])),

  // ── Border guard smuggling ──────────────────────────────────────────────────
  ax("Border Guard Director", "shadow", ["border", "smuggling", "corruption"],
    sx("Your own border guards are helping bad guys sneak cows, gold, and drugs across the fence for money.",
      ["Fire the bad guards and clean up the border.", "A border guard who smuggles guards nothing.", "You root out the corrupt commanders and break the rackets. Morale dips and the border briefly wobbles, but the contraband flood eases and the force's discipline begins to mend.", { EN: 4, GL: 4, MI: -2, FI: 2 }],
      ["Ignore it and let them keep sneaking things.", "A purge now leaves the wire unwatched.", "You leave the smuggling economy intact to keep the battalions content. The border stays manned and the contraband — drugs especially — keeps pouring across into the towns.", { MI: 4, FA: 2, EN: -8 }])),

  // ── Curfew during unrest ────────────────────────────────────────────────────
  ax("Home Secretary", "general", ["curfew", "unrest", "order"],
    sx("People are angry and filling the streets in every city. A helper wants you to order everyone to stay inside and tell the police to shoot anyone they see.",
      ["Order everyone inside and tell the police to shoot.", "Order restored at dawn is worth a hard night.", "The curfew empties the streets and the unrest is frozen by force. The shoot-on-sight deaths become infamous, and the quiet you buy is the quiet of a country holding its breath in fear.", { MI: 8, EN: -10, GL: -8 }],
      ["Order everyone inside but tell the police not to shoot.", "A curfew is a pause, not a firing line.", "You order a curfew but forbid shooting into crowds, relying on presence and arrests. The streets clear more slowly and unevenly, but the night does not end with a massacre to answer for.", { MI: 4, EN: -2, GL: -2 }])),

  // ── Internet blackout during unrest ─────────────────────────────────────────
  ax("Telecom Security Officer", "shadow", ["internet", "blackout", "unrest"],
    sx("Protesters are using their phones to plan things. You can completely turn off the internet and phone signals for the whole country to stop them.",
      ["Turn off the internet and phones for everyone.", "Cut the signal and the crowd cannot gather.", "The country goes dark and the protests fragment. Commerce freezes, hospitals scramble, and the blackout itself — and what it hides — becomes the global headline against you.", { MI: 6, FI: -6, EN: -8, GL: -8 }],
      ["Keep the internet on and only track the leaders.", "A nation blinded is a nation that assumes the worst.", "You leave the internet up and pursue specific organisers instead. The protests stay coordinated, but the economy runs, the hospitals function, and your forces act in daylight.", { GL: 4, FI: 2, EN: 2, MI: -2 }])),

  // ── Police body cameras ─────────────────────────────────────────────────────
  ax("Police Reform Commissioner", "official", ["police", "accountability", "body-cameras"],
    sx("People hate the police because the police are mean. A helper wants to make police wear cameras to prove they are acting nice. The police really hate this idea.",
      ["Make the police wear cameras.", "A camera on the badge is a witness for the citizen.", "You force body cameras and an independent complaints body. The commanders bristle and the footage occasionally damns them, but public trust in the police, long dead, stirs faintly.", { EN: 8, GL: 4, MI: -4 }],
      ["Don't make them wear cameras.", "A leashed force is a hesitant one when it matters.", "You shelve the cameras and the commission to keep the force happy. The brutality goes on unrecorded, and the gulf between the police and the people they answer to yawns wider.", { MI: 4, FA: 2, EN: -8 }])),

  // ── Vigilante morality policing ─────────────────────────────────────────────
  ax("District Magistrate", "cleric", ["morality", "vigilantes", "youth"],
    sx("Groups of bossy people are walking around parks and yelling at boys and girls for hanging out together or wearing normal clothes.",
      ["Arrest the bossy groups for bothering people.", "The state polices the streets, not a self-righteous mob.", "You jail the vigilantes and protect the harassed. The hardline preachers howl about defending vice, but the parks and streets become a little freer and a little safer.", { EN: 8, GL: 4, MI: -2, FA: -4 }],
      ["Let the bossy groups keep yelling at people.", "Let the pious keep the streets decent.", "You look away as the squads enforce their code. The hardliners are gratified, and a creeping, unofficial morality police takes root, answering to no law but its own.", { FA: 4, MI: 2, EN: -8, GL: -4 }])),

  // ── Secret detention site exposed ───────────────────────────────────────────
  ax("Intelligence Chief", "shadow", ["disappearances", "detention", "exposure"],
    sx("People found out you have a secret prison with mirrored walls where you hide people who disappear. The news is about to tell everyone.",
      ["Lie about it and quickly bury the secret prison.", "A secret admitted is a secret weaponised.", "You raze the site, scrub the records, and deny it ever existed. The denials collapse under the survivors' testimony, and the secret prison becomes the defining symbol of your rule.", { MI: 4, EN: -10, GL: -8 }],
      ["Tell the truth and let the hidden people go free.", "A crime confessed can at least be ended.", "You shut the site, release the held, and promise an inquiry. The admission is a bombshell and the security establishment panics, but the disappeared come home and a monstrous chapter closes.", { EN: 8, GL: 8, MI: -8 }])),

  // ── Hill tracts checkpoints ─────────────────────────────────────────────────
  ax("Hill Tracts Security Officer", "general", ["cht", "insurgency", "checkpoints"],
    sx("The army is bossing around the people who live in the hills. An old promise says the army should leave, but the army wants to stay and stay strict.",
      ["Let the army stay and keep being strict.", "A drawdown invites the insurgents back.", "You keep the camps and checkpoints in place. The settlers and brass are reassured, but indigenous resentment festers under the daily indignity, and the accord rots another year.", { MI: 6, EN: -8, GL: -4 }],
      ["Make the army leave like you promised long ago.", "A region held at gunpoint is never truly held.", "You pull back camps and ease the checkpoints as the accord requires. The army and settlers warn of chaos, but the hill peoples breathe, and a buried peace process stirs.", { EN: 8, GL: 6, MI: -6, FA: -2 }])),

  // ── Riot over a blasphemous post ────────────────────────────────────────────
  ax("District Magistrate", "cleric", ["communal", "blasphemy", "rumour"],
    sx("Someone made a fake picture to make it look like a boy insulted a religion. Now an angry mob is burning down the boy's village.",
      ["Protect the village and find out who made the fake picture.", "A village burned on a forgery is a crime against us all.", "You deploy force to shield the village and pursue whoever forged the post. The mob's instigators are exposed and jailed, and the framed youth is spared a fate sealed by a lie.", { EN: 8, GL: 6, MI: -2, FA: -4 }],
      ["Arrest the boy just to calm the angry mob down.", "An arrest now is cheaper than a riot tonight.", "You jail the accused youth to placate the crowd, guilt unproven. The village still smoulders, the real forgers go free, and the law bends, once again, to whoever can summon a mob.", { MI: 4, FA: 2, EN: -10, GL: -6 }])),

  // ── VIP security drain ──────────────────────────────────────────────────────
  ax("Protocol Security Chief", "general", ["vip", "security", "resources"],
    sx("Most of your police are busy guarding rich politicians, so normal neighborhoods have no protection.",
      ["Take the guards away from politicians and protect normal people.", "A constable guarding a minister's nephew is stolen from a slum.", "You cut the bloated VIP details and push police back into the neighbourhoods. The elite fume at their shrunken entourages, but ordinary streets see a uniform again.", { EN: 8, GL: 2, MI: 2, FA: -6 }],
      ["Keep all the guards protecting the rich politicians.", "An exposed minister is an unstable government.", "You leave the entourages intact. The elite feel safe and flattered, and the ordinary neighbourhoods keep waiting for a police presence that is parked outside someone's mansion.", { FA: 6, MI: 2, EN: -8 }])),

  // ── Cyber patrol against dissent ────────────────────────────────────────────
  ax("Cyber Patrol Commander", "shadow", ["online", "dissent", "speech"],
    sx("A special computer police team wants to arrest anyone who posts jokes or complaints about the country online. This would put many teenagers in jail.",
      ["Let the computer police arrest people for jokes.", "A nation's mood is made on its phones; watch them.", "The unit trawls the feeds and the arrests for posts begin. Online criticism withers into silence, and the spectacle of teenagers jailed over memes draws global derision.", { MI: 6, EN: -8, GL: -6 }],
      ["Tell them to only arrest people making real, dangerous threats.", "A meme is not a crime, and a jail is not a comments section.", "You confine the unit to real incitement and terror, not criticism. The dissent stays loud and irritating online, but the jails are not filled with children over Facebook posts.", { GL: 4, EN: 6, MI: -4 }])),

  // ── Forced eviction enforcement ─────────────────────────────────────────────
  ax("Inspector-General of Police", "people", ["eviction", "slums", "force"],
    sx("A judge said the police must use bulldozers to destroy a giant neighborhood of poor people.",
      ["Send the bulldozers in the morning to destroy it.", "A court order is a court order.", "Bulldozers and baton charges clear the slum at first light. The land is cleared and the optics are savage — families weeping over rubble — and the resentment will outlast the headlines.", { MI: 4, FI: 2, EN: -10, GL: -4 }],
      ["Go very slowly and help the poor people find new homes first.", "I will not bulldoze the poor into the street at dawn.", "You delay enforcement and press for relocation sites before any clearance. The landowner and the court grow impatient, but the eviction, when it comes, does not begin with families in the rain.", { EN: 8, GL: 2, MI: -2, FI: -2 }])),

  // ── Ansar / village defence force ───────────────────────────────────────────
  ax("Auxiliary Forces Director", "general", ["ansar", "village", "militia"],
    sx("You could give guns to normal villagers to help the police. But they might use the guns to bully their neighbors.",
      ["Give the villagers guns to help the police.", "A loyal force in every village is a state in every village.", "You arm and expand the auxiliaries into a rural security web. Coverage spreads cheaply, and so does the abuse, as local commanders use their new authority to settle old scores.", { MI: 6, EN: -6, FA: 2 }],
      ["Keep the villagers unarmed.", "An armed militia in every village is a thousand small tyrannies.", "You keep the force unarmed and tightly bounded. Rural security leans more on the regular police, but you avoid seeding the countryside with armed men answering to local bosses.", { EN: 4, GL: 2, MI: -2 }])),

  // ── Counterfeit currency ring ───────────────────────────────────────────────
  ax("Financial Crimes Chief", "shadow", ["counterfeit", "currency", "crime"],
    sx("Bad guys from another country are flooding your stores with fake, printed money. People are losing trust in their cash.",
      ["Spend money to catch them and make new, safe paper money.", "Fake money is a slow poison in the bloodstream.", "You smash the distribution networks and roll out harder-to-forge notes. The operation is costly and disruptive at the tills, but trust in the cash in people's hands is restored.", { MI: 2, FI: 4, EN: 2, GL: 2 }],
      ["Ignore it and try to fix the problems quietly.", "A currency overhaul is a budget I will not spend on a nuisance.", "You leave the ring largely alone and absorb the losses. The fakes keep circulating, the cash economy frays at the edges, and the cross-border syndicate grows bolder.", { FI: -2, EN: -4, MI: -2 }])),

  // ── Eve-teasing / public harassment ─────────────────────────────────────────
  ax("Women's Safety Officer", "people", ["women", "harassment", "safety"],
    sx("Mean boys yell at girls on the street so much that some girls are terrified to go outside. You can make special police catch the mean boys.",
      ["Make it a real crime and catch the mean boys.", "A girl afraid to walk to school is a society failing her.", "You stand up rapid-response teams and mobile courts and start jailing harassers. The cultural grumbling is loud, but girls and women begin, cautiously, to reclaim the streets.", { EN: 8, GL: 4, MI: -2, FA: -2 }],
      ["Do nothing and let society figure it out.", "The street cannot be policed for every catcall.", "You decline to make it a priority. The harassment goes on unchecked, the streets stay hostile to half the population, and another schoolgirl's suicide note names names no one will pursue.", { FA: 2, EN: -8, GL: -2 }])),

  // ── Atheist blogger killings ────────────────────────────────────────────────
  ax("Counter-Terror Commander", "shadow", ["bloggers", "extremism", "secularism"],
    sx("Bad guys with big knives are attacking writers who don't believe in their strict rules.",
      ["Protect the writers and hunt down the bad guys.", "A citizen's life is not forfeit for a sentence he wrote.", "You assign protection to the listed and hunt the killers hard. The hardliners mutter that you defend blasphemers, but the murders slow and the state shows it shields even those it disagrees with.", { EN: 8, GL: 6, MI: 2, FA: -4 }],
      ["Ignore it quietly because some people didn't like the writers anyway.", "I will not spend the force defending men who provoke the pious.", "You offer little protection and a soft pursuit. The hardliners are satisfied, the hit-list lengthens, and the world watches secular voices hacked down while the state looks away.", { FA: 4, MI: 2, EN: -10, GL: -8 }])),

  // ── Remand and torture for confessions ──────────────────────────────────────
  ax("Police Reform Commissioner", "doctor", ["remand", "torture", "confession"],
    sx("The police solve crimes by hitting people until they confess, even if they are innocent. A helper wants to buy science tools to solve crimes the right way.",
      ["Stop the hitting and buy the science tools.", "A confession under torture convicts the innocent and frees the guilty.", "You ban torture-remand and invest in forensics and training. The old guard complains their hands are tied, but wrongful convictions fall and real evidence starts to convict the real culprits.", { EN: 8, GL: 6, MI: -4 }],
      ["Let the police keep hitting people to get confessions.", "A force without remand is a force without leverage.", "You leave the beat-a-confession culture untouched. Cases 'close' fast on coerced statements, innocents hang, and the real criminals — and the rot in the method — go on undisturbed.", { MI: 4, EN: -8, GL: -6 }])),

  // ── Passport and immigration racket ─────────────────────────────────────────
  ax("Immigration Director", "fixer", ["passport", "immigration", "corruption"],
    sx("The passport office is very corrupt. People pay secret money to get their passports faster, and bad guys use it to get fake ones.",
      ["Use computers to clean up the office and stop the stealing.", "A passport sold to a trafficker is a border breached.", "You automate and audit the offices and the bribery withers. Honest applicants get served and the document-for-criminals trade is choked, and the counter staff who lived on bribes seethe.", { EN: 6, GL: 4, MI: 2, FA: -2 }],
      ["Leave the passport office the way it is.", "A demoralised office processes nothing.", "You leave the racket running. The bribes flow and the queues move for those who pay, and genuine passports keep finding their way into the hands of traffickers and fugitives.", { MI: 2, FA: 2, EN: -6, GL: -4 }])),

  // ── Death-row mercy petition ────────────────────────────────────────────────
  ax("Law Secretary", "official", ["death-penalty", "mercy", "justice"],
    sx("A man is about to be hanged for a crime, but there is proof the trial was unfair and he might be totally innocent. Angry people want him hanged anyway.",
      ["Let him be hanged anyway.", "The court has spoken; mercy is weakness.", "You reject the petition and the man hangs. The base is satisfied, and the unexamined doubts about his guilt harden into a likely miscarriage you can never undo.", { MI: 4, FA: 2, EN: -6, GL: -4 }],
      ["Stop the hanging and look at the evidence again.", "A doubt this size cannot end on a gallows.", "You commute the sentence and order the doubts examined. The base howls about coddling criminals, but you refuse to make the state the executioner of a man it may have wronged.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Fire-service capacity ───────────────────────────────────────────────────
  ax("Fire Service Director", "relief", ["fire", "safety", "capacity"],
    sx("The fire trucks don't have ladders long enough to reach the tall buildings in the city. It costs a lot of money to buy new ones.",
      ["Spend the money to buy the tall fire ladders.", "A ladder too short is a coffin with a view.", "You re-equip the fire service with tall ladders, working hydrants, and training. The cost is heavy and the danger feels abstract between fires, but the next tower blaze meets a service that can reach it.", { EN: 8, FI: -6 }],
      ["Wait until after the next big fire to buy them.", "The budget has louder claims than a quiet ladder.", "You put the modernisation off. The money goes to noisier needs, and the next high-rise fire finds the same dry hydrants and short ladders, and the same trapped people at the windows.", { FI: 4, EN: -8 }])),

  // ── Cattle and contraband border haats ──────────────────────────────────────
  ax("Border Guard Director", "people", ["border", "haats", "smuggling"],
    sx("People on the border are secretly trading things. You can build safe, legal markets for them so they don't have to sneak around.",
      ["Build the safe, legal border markets.", "A legal stall starves an illegal smuggler.", "You expand the border haats and the petty trade comes into the open. The smuggling mafias lose ground, border communities prosper, and tensions along the wire ease a little.", { EN: 6, FI: 2, GL: 2, MI: -2 }],
      ["Keep the border closed and illegal.", "An open market is an open door.", "You keep the border tight and the haats few. Security looks robust on paper, and the smuggling mafias keep their monopoly on the trade the locals will pursue regardless.", { MI: 4, EN: -4, FI: -2 }])),

  // ── Kidnap-for-ransom wave ──────────────────────────────────────────────────
  ax("Crime Investigation Chief", "general", ["kidnapping", "ransom", "crime"],
    sx("Bad groups are kidnapping rich people for money. Some of the kidnappers are actually off-duty police officers and political friends.",
      ["Catch all the kidnappers, even the police and friends.", "A kidnapper in uniform is the worst kind.", "You pursue every thread, including the police and cadres involved. The business class is reassured and the connected are rattled and angry, but the kidnapping wave breaks.", { MI: 4, EN: 8, GL: 4, FA: -6 }],
      ["Only catch the normal bad guys and leave your friends alone.", "Some uniforms are better not investigated.", "You round up the freelance gangs and leave the connected untouched. The headlines look tough, but the protected predators keep operating and the business class quietly moves its families abroad.", { MI: 4, FI: -2, EN: -6, GL: -2 }])),

  // ── Shalish village arbitration abuse ───────────────────────────────────────
  ax("Rural Justice Officer", "cleric", ["shalish", "fatwa", "women"],
    sx("In small villages, unofficial judges are whipping women as a cruel punishment. You can send the real police to stop them.",
      ["Send the real police to stop the cruel punishments.", "A village court that lashes women is a crime, not a custom.", "You move to subordinate the shalish to formal law and prosecute the cruellest verdicts. The rural clergy protest the intrusion, but women gain protection from punishments dressed as tradition.", { EN: 8, GL: 6, MI: -2, FA: -4 }],
      ["Leave the village judges alone.", "I will not fight every village elder in the land.", "You leave the shalish to their ways. The rural power-holders are placated, and the lashings, the hilla marriages, and the village 'justice' against women grind on beyond the law's reach.", { FA: 4, MI: 2, EN: -8, GL: -6 }])),

  // ── Lawful interception law ─────────────────────────────────────────────────
  ax("Telecom Security Director", "shadow", ["interception", "wiretap", "oversight"],
    sx("The police want a new rule to let them read anyone's phone messages whenever they want, without asking a judge first.",
      ["Let them read messages without asking a judge.", "A warrant is a delay a plot does not grant me.", "You take the warrantless powers. The agencies move fast on real threats and faster on inconvenient critics, and the surveillance state gains a legal blank cheque that will outlast you.", { MI: 6, EN: -6, GL: -6 }],
      ["Make them ask a judge first to protect privacy.", "A wiretap with no judge is a weapon with no safety.", "You insist on warrants and oversight. The agencies grumble about delay, but interception keeps a check against the day it would otherwise be turned wholesale on dissent.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Highway dacoity ─────────────────────────────────────────────────────────
  ax("Highway Police Chief", "general", ["dacoity", "highways", "safety"],
    sx("Bad guys with guns are robbing the big delivery buses at night. The police chief wants money to build special highway patrols to stop them.",
      ["Give money for the special highway patrols.", "A highway ruled by dacoits is an economy held hostage.", "You blanket the highways with patrols and the robberies fall. The cost is real and the checkpoints slow some traffic, but the night roads grow safe enough to move goods and people again.", { EN: 6, MI: 4, FI: -4 }],
      ["Do not give money; it's a small problem.", "A few highway robberies do not justify a national force.", "You leave the highways lightly policed. The budget is spared, the dacoit gangs grow bolder, and the long-haul transport that feeds the cities runs scared and dear after dark.", { FI: 2, MI: -2, EN: -6 }])),

  // ── Beggar / trafficking syndicate ──────────────────────────────────────────
  ax("Social Crime Officer", "shadow", ["trafficking", "begging", "children"],
    sx("Terrible groups are hurting children and forcing them to beg for money on the streets.",
      ["Stop the terrible groups and help the children.", "A child maimed for alms is a crime crying out.", "You break the begging syndicates and build rehabilitation for the rescued. The work is hard and costly and the rings fight back, but maimed children are freed instead of just swept from view.", { EN: 8, GL: 4, MI: 2, FA: -2 }],
      ["Just kick the begging children off the streets so it looks nice.", "The tourists and the elite want clean pavements.", "You mount street-clearing drives for the optics. The pavements look tidier for visitors, the syndicates simply relocate, and the trafficked children keep being maimed for someone else's alms.", { MI: 2, FI: 2, EN: -6, GL: -2 }])),

  // ── VIP motorcade road closures ─────────────────────────────────────────────
  ax("Protocol Security Chief", "official", ["vip", "traffic", "public"],
    sx("Every time a politician drives somewhere, the police block all the roads. It causes giant traffic jams and even traps ambulances.",
      ["Stop blocking the roads for politicians.", "A minister's ten minutes is not worth a city's hour.", "You slash the motorcade privileges and the blanket closures. The elite chafe at sharing the roads, but ambulances move, commuters get home, and the city sees its rulers join the traffic.", { EN: 8, GL: 2, FA: -6 }],
      ["Keep blocking the roads so politicians can drive fast.", "A minister stuck in traffic is a state diminished.", "You keep the motorcade closures. The elite glide through on cleared roads, and the rest of the capital — ambulances and all — sits choking in the gridlock the convoys leave behind.", { FA: 6, MI: 2, EN: -8 }])),

  // ── Building-collapse criminal liability ────────────────────────────────────
  ax("Crime Investigation Chief", "people", ["building-collapse", "liability", "developers"],
    sx("A poorly built building collapsed and killed many people. The builder paid secret money to ignore the rules, and he gives money to your team.",
      ["Punish the rich builder for his crime.", "A builder who buries his buyers must answer for it.", "You charge the developer himself, donor or not. The party loses a funder and the building lobby trembles, but the bereaved see real accountability and the inspectors are not the only scapegoats.", { EN: 8, GL: 6, MI: -2, FA: -6 }],
      ["Let the builder go free and blame the inspectors instead.", "A donor toppled topples a wing of the party.", "You confine the blame to a few inspectors and shield the developer. The party keeps its funder, the building lobby relaxes, and the next shoddy tower is already rising on a bribed certificate.", { FA: 6, FI: 2, EN: -8, GL: -4 }])),

  // ── Online fraud / scam call centres ────────────────────────────────────────
  ax("Cyber Crime Chief", "shadow", ["fraud", "scams", "online"],
    sx("Scammers are calling people on the phone and tricking them into giving away all their money. It costs a lot to build a police team to catch them.",
      ["Build a special police team to catch the scammers.", "A scam centre is a thief that never sleeps.", "You fund a proper cyber-fraud unit with bank and telecom cooperation. The scam centres are raided and the insider leaks plugged, and citizens' savings grow a little safer online.", { EN: 6, FI: 2, GL: 2, MI: 2 }],
      ["Leave it to the normal, busy police.", "Online fraud is a nuisance, not a priority.", "You leave cyber-fraud to thinly-spread local stations that cannot trace it. The scam centres flourish, the insider leaks continue, and the public learns that money lost online is money gone.", { FI: -2, EN: -6 }])),

  // ── Religious procession security ───────────────────────────────────────────
  ax("Public Order Officer", "cleric", ["procession", "security", "communal"],
    sx("Two different religious groups are planning big parades on the exact same street on the same day. They might fight.",
      ["Make strict rules and force them to use different streets.", "Two flashpoints kept apart make no fire.", "You enforce separate routes and tight timings. Both communities grumble at the heavy hand, but the processions pass without collision and the day ends without a riot to mourn.", { MI: 4, EN: 2, FA: -2 }],
      ["Let them parade however they want and hope they are nice.", "A festival smothered in police is no festival.", "You keep policing light and trust the community leaders. The day may pass in peace and harmony — or one hot-headed clash may ignite the riot the light touch failed to prevent.", { EN: 2, FA: 2, MI: -4 }])),

  // ── Eid homebound travel safety ─────────────────────────────────────────────
  ax("Transport Security Coordinator", "people", ["eid", "travel", "safety"],
    sx("Before a big holiday, millions of people crowd onto unsafe, broken boats and buses to get home. Many die in crashes every year.",
      ["Make strict safety rules, even if it makes travel slower and cost more.", "A homecoming should not end in a hearse.", "You enforce capacity limits and roadworthiness through the rush. Fares rise and the crush at the terminals worsens, but the holiday's grim death toll on the roads and rivers falls sharply.", { EN: 8, FI: -2, FA: -2 }],
      ["Let everyone travel cheaply and dangerously like they always do.", "The poor must reach home for Eid, rules or no.", "You ease enforcement so everyone can afford to travel. The buses and ferries overload as always, the homecoming proceeds cheap and chaotic, and the holiday claims its usual harvest of the dead.", { FA: 2, EN: -8 }])),

  // ── Arms-recovery amnesty ───────────────────────────────────────────────────
  ax("Crime Investigation Chief", "general", ["firearms", "amnesty", "recovery"],
    sx("There are too many illegal guns. You can offer a deal: if people give you their guns, you won't ask any questions or punish them. This gets rid of guns but lets bad guys off the hook.",
      ["Offer the deal to collect the guns without questions.", "A gun surrendered is a gun that kills no one.", "You run the amnesty and weapons pour in by the thousand. The streets grow a little safer, and a number of past crimes lose the evidence that might have solved them.", { EN: 6, MI: 2, GL: 2 }],
      ["Send police to raid houses to find the guns instead.", "An amnesty launders the gunman with his gun.", "You hunt the illegal arms through raids and intelligence. Fewer weapons come in and the operation is dangerous and slow, but the guns recovered come with the cases attached to them.", { MI: 6, EN: 2, FI: -2 }])),

  // ── Foreign-aid worker security ─────────────────────────────────────────────
  ax("Diplomatic Security Chief", "general", ["foreigners", "security", "aid-workers"],
    sx("People from other countries are scared of being attacked. They want heavy police guards everywhere, but that makes the city look very scary.",
      ["Put heavy police guards everywhere for them.", "A dead foreigner is a global headline I cannot afford.", "You blanket the foreign community in visible heavy security. The agencies stay, but the fortress optics signal a dangerous country, and the bubble itself becomes a target and a symbol.", { MI: 4, GL: 2, FI: -4, EN: -2 }],
      ["Protect them quietly and smartly so it doesn't look scary.", "A fortress says 'flee' louder than any threat.", "You opt for intelligence-led, lighter protection and quiet reassurance. It is a calculated risk, but the agencies stay, the country looks governable rather than besieged, and normal life goes on.", { GL: 4, MI: 2, EN: 2 }])),

  // ── Juvenile justice ────────────────────────────────────────────────────────
  ax("Social Welfare Magistrate", "doctor", ["juvenile", "justice", "children"],
    sx("Kids who get in trouble are thrown into scary jails with adult criminals, which makes the kids worse. A helper wants to build a nice place to help kids learn to be good.",
      ["Build a nice place to help the kids.", "A child jailed with hardened men comes out a hardened man.", "You build diversion, separate facilities, and rehabilitation for child offenders. The tough-on-crime crowd scoffs, but children get a path back instead of a finishing school for criminals.", { EN: 8, GL: 4, FI: -4 }],
      ["Keep throwing the kids in the scary adult jails.", "A young criminal is still a criminal.", "You keep juveniles in the adult-adjacent system. It looks tough and costs little now, and each cohort of abused children graduates from the cells into the very crime the harshness was meant to stop.", { MI: 2, EN: -6, GL: -4 }])),

  // ── Drone and aerial surveillance ───────────────────────────────────────────
  ax("Surveillance Technology Director", "shadow", ["drones", "surveillance", "protest"],
    sx("You can buy flying camera drones to watch everyone at protests from the sky. People say this is spying on them.",
      ["Use the flying cameras to watch everyone at protests.", "An eye in the sky misses nothing.", "You acquire the drone fleet with crowd-monitoring. Borders and crime hotspots are watched, and so is every protest, every gathering, every face that ever assembles against you.", { MI: 6, EN: -6, GL: -4 }],
      ["Only use the flying cameras for safe things like watching borders.", "A drone over every march is a state over every shoulder.", "You confine the drones to borders, disasters, and crime scenes, barring protest surveillance. You gain real operational reach without building an aerial panopticon over public dissent.", { MI: 4, EN: 2, GL: 2 }])),

  // ── Organ-trafficking ring ──────────────────────────────────────────────────
  ax("Health Crime Officer", "doctor", ["organ-trafficking", "poverty", "crime"],
    sx("A terrible group is tricking poor villagers and taking their kidneys to sell to rich people. Some doctors and rich hospitals are part of the secret group.",
      ["Stop the whole group, even the rich doctors.", "A poor man's kidney is not a commodity.", "You break the ring, clinics and brokers and all, however connected. The transplant-tourism money dries up and powerful doctors face the law, and the cheated villagers gain a defender.", { EN: 8, GL: 6, MI: 2, FA: -4 }],
      ["Only arrest the poor people tricking the villagers.", "The clinics have patrons I cannot afford to cross.", "You arrest the low-level brokers and spare the connected clinics. The visible end of the trade is disrupted, the lucrative clinical core survives, and the poor keep being harvested for parts.", { MI: 2, FI: -2, EN: -6, GL: -2 }])),

  // ── SIM biometric registration ──────────────────────────────────────────────
  ax("Telecom Security Officer", "official", ["sim", "biometric", "privacy"],
    sx("You can force everyone to give their fingerprint when they buy a phone card. This stops bad guys from using secret phones, but it tracks everyone else too.",
      ["Force everyone to give their fingerprint.", "An anonymous phone is a criminal's best friend.", "You require fingerprint registration for every SIM. Anonymous crime-phones vanish, and the state acquires a fingerprint-linked map of every phone and, through it, every person who carries one.", { MI: 6, EN: -4, GL: -4 }],
      ["Let people buy phone cards without fingerprints.", "A fingerprint for a phone number is a price too high.", "You require ID but bar the biometric linkage. You gain most of the accountability without building a national fingerprint-to-phone database ripe for abuse.", { EN: 4, GL: 2, MI: -2 }])),

  // ── Custodial-death independent inquiry ─────────────────────────────────────
  ax("Internal Affairs Director", "official", ["custodial-death", "inquiry", "accountability"],
    sx("People are dying while locked in police jails, and the police always lie and say it was an accident.",
      ["Make a special, honest group investigate every death.", "A death in a cell the state cannot explain is a death the state caused.", "You set up independent inquiries with real powers. The force resists and a few careers end, but the era of automatic 'heart attack' verdicts cracks, and custody grows a little less lethal.", { EN: 8, GL: 6, MI: -4 }],
      ["Let the police keep investigating themselves.", "An independent inquiry indicts the whole force.", "You keep custodial deaths investigated by the police themselves. The verdicts stay tidy and the force protected, and the families learn that a death in custody here has only one official cause: misfortune.", { MI: 4, FA: 2, EN: -8, GL: -6 }])),

  // ── Highway / river piracy on the rivers ────────────────────────────────────
  ax("River Police Chief", "general", ["piracy", "rivers", "fishermen"],
    sx("Bad guys with guns are attacking boats on the river and stealing things. The police boss needs money for fast boats to stop them.",
      ["Give money for fast boats to stop the river pirates.", "A river ruled by pirates is a river lost.", "You fund fast boats and clean out the complicit officers. The pirate gangs are broken, the fishermen and cargo boats breathe, and the river patrols' own corruption is purged.", { EN: 6, MI: 4, FI: -4, FA: -2 }],
      ["Leave the rivers without much protection.", "A few river pirates do not justify a navy.", "You leave the rivers thinly policed. The budget is saved, the pirate gangs and their police protectors thrive, and the fishermen pay their ransoms and their bribes as a cost of the water.", { FI: 2, MI: -2, EN: -6 }])),

  // ── Exit control / travel ban on critics ────────────────────────────────────
  ax("Immigration Director", "shadow", ["travel-ban", "critics", "control"],
    sx("You can secretly put the names of people who complain about you on a list at the airport so they are never allowed to leave the country.",
      ["Put the complainers on the list so they can't leave.", "A man who cannot flee can be reached.", "You list the critics and they are turned back at the airport, bewildered. The leash is effective and deniable, until the pattern leaks and 'jailed within their own country' becomes the headline.", { MI: 6, EN: -6, GL: -6 }],
      ["Only put real, dangerous criminals on the list.", "An exit ban on a critic is a confession of fear.", "You confine the list to actual suspects with cases. The critics keep their freedom to come and go, and you are spared the spectacle of dissidents stranded at the departure gate.", { GL: 6, EN: 4, MI: -2 }])),

  // ── Public-exam question leaks ──────────────────────────────────────────────
  ax("Education Board Chairman", "shadow", ["exams", "leaks", "fraud"],
    sx("Secret school tests are being stolen and sold online. You can use computers to keep them safe, but the bad guys who steal them will fight back.",
      ["Use computers to keep the tests safe.", "An exam sold in advance is a generation cheated.", "You break the leak ring and move to secure digital question delivery. The protected racket fights back and one rollout stumbles, but the exams stop being an open auction and merit means something again.", { EN: 8, GL: 4, MI: 2, FA: -2 }],
      ["Keep the old way and hope it works.", "A radical overhaul could collapse the whole exam.", "You make cosmetic fixes and leave the ring largely intact. The exams proceed, the papers keep leaking to those who pay, and the honest student keeps losing to the connected cheat.", { FA: 2, EN: -6, GL: -2 }])),

  // ── Recruitment-exam fraud ──────────────────────────────────────────────────
  ax("Public Service Commission Liaison", "shadow", ["recruitment", "exam", "corruption"],
    sx("People are cheating and paying secret money to pass tests for government jobs.",
      ["Fix the tests and catch the cheaters.", "A job bought is a youth's dream stolen.", "You secure the exams with biometrics and audits and void the fraudulent results. The connected who bought their posts are exposed and furious, but a generation sees that merit might finally count.", { EN: 8, GL: 4, MI: -2, FA: -4 }],
      ["Let the cheating continue to keep things easy.", "Too many of the bought belong to the party.", "You leave the exams compromised. The posts keep going to the connected and the payers, and the honest, brilliant youth who studied for years learn what their merit is worth here.", { FA: 4, FI: 2, EN: -8, GL: -2 }])),

  // ── Hooch / illegal liquor deaths ───────────────────────────────────────────
  ax("Narcotics Control Officer", "doctor", ["liquor", "poison", "poverty"],
    sx("People are making poison drinks that are killing poor villagers. Bad police officers protect the drink makers.",
      ["Stop the bad people making the poison drinks.", "Poison sold as drink is murder by the bottle.", "You raid the bootleg syndicates and their police protectors. The killer batches are seized, but prohibition stays, the trade regroups underground, and the next toxic batch is already brewing.", { MI: 4, EN: 4, FA: -2 }],
      ["Make safe, legal drinks and tax them instead.", "Banning a drink only hands it to poisoners.", "You move toward regulating and taxing safe alcohol, draining the bootleggers' market. The pious are scandalised and the politics are hard, but the poor stop dying from methanol in a bottle.", { EN: 6, FI: 4, GL: 2, FA: -6 }])),

  // ── Women's prison conditions ───────────────────────────────────────────────
  ax("Prisons Inspector-General", "doctor", ["women", "prison", "rights"],
    sx("The jails for women are too crowded and very mean. Innocent women and their children are stuck there in bad conditions.",
      ["Fix the jails to treat women better.", "A jail that degrades women degrades the state that runs it.", "You fund better facilities, legal aid, and a review that frees the wrongly held. The cost and effort are real, but women and their children stop rotting in conditions no law intended.", { EN: 8, GL: 4, FI: -4 }],
      ["Leave the women's jails the way they are.", "The prisons have louder problems than comfort.", "You leave the women's wings to their squalor. The budget is spared, and women on petty and fabricated charges keep languishing, their children growing up behind bars beside them.", { FI: 2, EN: -6, GL: -4 }])),

  // ── Online gambling crackdown ───────────────────────────────────────────────
  ax("Cyber Crime Chief", "shadow", ["gambling", "online", "addiction"],
    sx("Bad phone games from other countries are tricking kids into losing their money. Some of your own helpers are taking a cut of the money.",
      ["Stop the bad games and punish everyone, even helpers.", "An app that bankrupts the young is a crime, not a game.", "You block the apps, choke the payment channels, and prosecute the local agents. The trade is disrupted and the capital flight slowed, and the officials who took their cut go quiet and resentful.", { EN: 6, FI: 2, MI: 2, FA: -2 }],
      ["Let the games keep running.", "A vice this profitable has many friends.", "You leave the betting apps largely alone. The palms stay greased and the trade flourishes, and the young keep gambling their families' money into accounts somewhere overseas.", { FA: 2, FI: -2, EN: -6 }])),

  // ── Forensic-lab backlog ────────────────────────────────────────────────────
  ax("Forensic Services Director", "doctor", ["forensics", "backlog", "justice"],
    sx("The police science lab is too busy, so innocent people sit in jail while waiting for proof. You can spend money to build more science labs.",
      ["Spend money to build more science labs.", "Justice without science is justice by guesswork.", "You fund new labs, equipment, and forensic scientists. The backlog shrinks over years, evidence starts reaching trials in time, and the reliance on beaten confessions slowly gives way to proof.", { EN: 8, GL: 4, FI: -6 }],
      ["Leave the lab busy and let people wait in jail.", "Labs are a luxury; confessions are free.", "You leave the single lab to drown in its backlog. The budget is spared, and the courts keep convicting on confession and guesswork while the science gathers dust in an evidence locker.", { FI: 4, EN: -6, GL: -2 }])),

  // ── Riot-control weapons import ─────────────────────────────────────────────
  ax("Police Procurement Chief", "general", ["riot-gear", "less-lethal", "force"],
    sx("A seller wants to give you big, scary weapons like water cannons to use on angry crowds.",
      ["Buy the big, scary weapons.", "A well-equipped force controls a crowd without a massacre.", "You acquire the arsenal. Crowd control gets a notch less lethal in theory, and in untrained hands the rubber bullets and gas still maim and kill, just with deniability.", { MI: 6, EN: -4, FI: -4, GL: -2 }],
      ["Buy safer tools and teach the police to be careful.", "A weapon is only as humane as the hand that wields it.", "You buy a modest kit and invest in restraint and training. The arsenal is smaller, but the officers learn to use it as a last resort, and crowd policing grows genuinely less deadly.", { EN: 4, MI: 2, GL: 2, FI: -2 }])),

  // ── Dowry-murder prosecution ────────────────────────────────────────────────
  ax("Women's Crime Officer", "people", ["dowry", "murder", "justice"],
    sx("A young wife was hurt by her powerful new family, and they are paying the police to hide the crime.",
      ["Fight hard to punish the powerful family.", "A bride burned for money will have her day in court.", "You protect the witnesses and push the case against the powerful in-laws. They lean on every connection and lose, and for once a dowry murder ends in a verdict instead of a settlement.", { EN: 8, GL: 4, MI: -2, FA: -4 }],
      ["Let the powerful family get away with it.", "The in-laws have friends I would rather keep.", "You let the case dissolve in bought witnesses and lost files. The powerful in-laws walk, the dead bride joins the uncounted, and every dowry-taker learns the price of a daughter-in-law's life.", { FA: 4, MI: 2, EN: -8, GL: -4 }])),

  // ── VPN / circumvention crackdown ───────────────────────────────────────────
  ax("Telecom Security Director", "shadow", ["vpn", "censorship", "control"],
    sx("People are using secret phone tools to read news you banned. You can block the secret tools too, but people will be mad.",
      ["Block the secret tools and track the people using them.", "A wall with a tunnel under it is no wall.", "You move to block VPNs and flag their users. The information bubble tightens toward North-Korean completeness, the tech-savvy find new tunnels anyway, and the censorship draws global scorn.", { MI: 6, EN: -6, GL: -8 }],
      ["Accept that you can't block everything on the internet.", "A government at war with VPNs is a government afraid of news.", "You stop chasing VPNs. The blocks stay porous and the banned sites reachable, but you are spared the futile, reputation-shredding crusade against the open internet.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Street-children rehabilitation ──────────────────────────────────────────
  ax("Social Welfare Director", "relief", ["street-children", "shelter", "poverty"],
    sx("Many poor children live on the city streets and are in danger. You can build safe homes for them, or just keep chasing them away.",
      ["Build safe homes to help the street children.", "A child on the street is a future thrown away.", "You build shelters, schooling, and family-tracing for street children. The cost is real and the work slow, but children are pulled off the streets into something like a childhood.", { EN: 10, GL: 4, FI: -6 }],
      ["Just keep chasing them off the streets.", "A shelter network is a budget I do not have.", "You keep the cheap round-up drives that scoop children up and dump them elsewhere. The streets look briefly clearer, and the children drift back to the glue, the gangs, and the traffickers.", { FI: 2, EN: -6 }])),

  // ── Sextortion / online image abuse ─────────────────────────────────────────
  ax("Cyber Crime Chief", "doctor", ["sextortion", "women", "online"],
    sx("Bad people are using fake pictures online to bully and scare girls.",
      ["Build a special, safe police team to help the girls.", "A girl shamed to death by a screen deserved a state that fought for her.", "You stand up a confidential unit that pursues the blackmailers and protects the victims. The cultural pushback is real, but women begin to report without being destroyed for it.", { EN: 8, GL: 4, MI: 2, FA: -2 }],
      ["Leave it to the regular police.", "These are private matters, not police priorities.", "You leave image-abuse to the ordinary stations that blame and expose the victims. The blackmailers operate freely, and the suicides keep coming, each one a girl the state would not protect.", { FA: 2, EN: -8, GL: -2 }])),

  // ── Concert and festival crowd safety ───────────────────────────────────────
  ax("Public Order Officer", "official", ["crowd", "concert", "safety"],
    sx("There are too many giant parties happening at once, and crowds might get squished and hurt.",
      ["Make strict rules to keep the crowds safe.", "A joyous crowd can become a crush in a heartbeat.", "You enforce capacity caps, exits, and crowd management. The organisers grumble at the cost and the public at the fences, but the weekend's celebrations end without a stampede to bury.", { EN: 6, MI: 2, FI: -2, FA: -2 }],
      ["Let the parties happen without safety rules.", "Do not smother a celebration in barriers.", "You keep the events open and lightly managed. The crowds flow free and vast and joyous, and the absence of a plan means one surge from turning a festival into a funeral.", { EN: -6, FA: 4, GL: -2 }])),

  // ── Witch-hunting / superstition violence ───────────────────────────────────
  ax("Rural Justice Officer", "people", ["superstition", "violence", "minorities"],
    sx("In faraway villages, angry mobs are hurting poor women by calling them witches.",
      ["Send police to punish the mobs and teach them it is wrong.", "A woman killed as a witch is a murder, not a custom.", "You prosecute the mob leaders and run awareness drives with the rural clergy and schools. Change is slow against deep superstition, but the killings draw consequences and the accused gain protectors.", { EN: 8, GL: 4, MI: -2, FA: -2 }],
      ["Ignore it and say it's just their old tradition.", "I cannot police every village's superstitions.", "You leave the matter to the locals. The 'healers' keep naming witches, the mobs keep their impunity, and poor women keep being beaten and burned for crimes that do not exist.", { FA: 2, EN: -8, GL: -4 }])),

  // ── Fake NID / citizenship fraud ────────────────────────────────────────────
  ax("NID Database Director", "shadow", ["nid", "fraud", "citizenship"],
    sx("Bad workers are secretly selling your country's official ID cards to strangers and criminals.",
      ["Catch the bad workers and stop the fake cards.", "A citizenship sold is a nation cheapened.", "You audit the database, cancel the fraudulent IDs, and jail the officials who sold them. The system's integrity is restored at the cost of a noisy scandal and some genuinely caught-up innocents.", { EN: 6, MI: 4, GL: 2, FA: -4 }],
      ["Hide the problem so you don't look silly.", "A public purge advertises how porous we are.", "You handle it discreetly, cancelling a few cards and hushing the rest. The scandal stays small, and the corrupt officials and the trade in genuine IDs to non-citizens carry quietly on.", { MI: 2, FA: 2, EN: -4, GL: -4 }])),

  // ── Marriage / nikah registrar corruption ───────────────────────────────────
  ax("Registrar General", "official", ["marriage", "registration", "child-marriage"],
    sx("People are changing papers to let little girls get married illegally. You can use computers to stop this.",
      ["Use computers to prove real ages and protect girls.", "A registrar who forges a child's age is an accomplice to her ruin.", "You digitise registration with hard age verification. The registrars' guild howls at the lost fees, but child marriages lose their paper cover and the registry stops abetting them.", { EN: 8, GL: 4, MI: -2, FA: -2 }],
      ["Let the people keep changing the papers.", "A connected guild is not lightly disturbed.", "You leave the marriage registry as it is. The registrars keep their fees and their forgeries, and the falsified ages keep legalising the marriage of children across the country.", { FA: 4, FI: 2, EN: -8, GL: -2 }])),

  // ── Drug-rehabilitation capacity ────────────────────────────────────────────
  ax("Narcotics Control Chief", "doctor", ["drugs", "rehab", "addiction"],
    sx("Hundreds of thousands of people are sick from bad drugs. You can build nice hospitals to help them, or keep throwing them in jail.",
      ["Build nice hospitals to help sick drug users.", "An addict is a patient, not a body for the morgue.", "You build accessible, humane rehabilitation as the spine of drug policy. The tough-on-drugs crowd scoffs, but families get their children back from addiction instead of from the river.", { EN: 8, GL: 4, FI: -6 }],
      ["Keep throwing them in jail.", "Treatment coddles the weak; fear deters the rest.", "You keep drug policy punitive. The squalid centres stay squalid and the addicted cycle through cells and crossfire, and the addiction the crackdowns were meant to crush keeps spreading.", { MI: 4, EN: -6, GL: -4 }])),

  // ── Sand-mafia violence ─────────────────────────────────────────────────────
  ax("District Police Superintendent", "shadow", ["sand-mafia", "extortion", "rivers"],
    sx("Bad gangs with guns are digging up the rivers to sell the sand, and paying police to stay quiet.",
      ["Fight the gangs and stop them from ruining the river.", "A river ruled by armed thieves is a writ of failure.", "You move hard against the sand mafias and the officers and politicians shielding them. It is dangerous — they fight and kill — but the riverbanks are wrested back and the racket's cover is torn off.", { EN: 6, MI: 4, FI: -2, FA: -4 }],
      ["Let the gangs keep digging up the sand.", "The men who run the sand also run the wards.", "You leave the sand mafias to their riverbanks. The peace holds and the cover stays, and the illegal dredging guts the rivers while anyone who objects risks a body in the current.", { FA: 4, MI: 2, EN: -8 }])),

  // ── Encroachment eviction by the powerful ───────────────────────────────────
  ax("Anti-Encroachment Officer", "people", ["encroachment", "land", "powerful"],
    sx("You are knocking down houses built in the wrong places. But you only knock down poor people's houses, not rich people's big buildings.",
      ["Knock down the rich people's illegal buildings too.", "A bulldozer that only finds the poor is a class weapon.", "You redirect the drive at the powerful's illegal grabs — the riverside mansions, the encroaching towers. The connected scream and litigate, but the law's bulldozer finally faces upward.", { EN: 8, GL: 4, MI: -2, FA: -6 }],
      ["Only knock down the poor people's houses.", "The big buildings have lawyers; the slums do not.", "You keep the drive pointed at the slums and hawkers. The optics of progress are cheap and easy, the powerful's grand encroachments stand serene, and the poor learn whose law this is.", { FA: 4, FI: 2, EN: -8, GL: -2 }])),

  // ── Load-shedding unrest ────────────────────────────────────────────────────
  ax("Public Order Officer", "people", ["load-shedding", "protest", "unrest"],
    sx("The electricity keeps turning off in the summer, and angry people are breaking things in the street.",
      ["Use the police to force the angry people away.", "A mob at the substation is a mob, whatever its grievance.", "You break up the protests with force. The streets clear and the substations are guarded, but beating people over power cuts they did not cause only stokes the anger in the dark.", { MI: 4, EN: -8, GL: -4 }],
      ["Show you are sorry and focus on fixing the electricity.", "You cannot baton a country into cool patience.", "You pull police back, publicise load-shedding equally for the elite too, and rush repairs. The protests cool as people see the burden shared, and the anger drains toward patience.", { EN: 6, GL: 2, MI: -2 }])),

  // ── Airport security and smuggling ──────────────────────────────────────────
  ax("Aviation Security Chief", "shadow", ["airport", "smuggling", "security"],
    sx("Airport workers are helping bad guys sneak gold and drugs through the airport.",
      ["Fire the bad workers and make the airport safe.", "An airport for sale is a border for sale.", "You overhaul screening and purge the complicit staff. Foreign airlines relax, the smuggling chokes, and the ground-staff syndicates and their patrons lose a goldmine and turn on you.", { MI: 4, GL: 6, EN: 2, FA: -4 }],
      ["Let the airport workers keep sneaking things.", "A purge would ground half the staff and the flights.", "You leave the airport's shadow economy intact. The flights run smoothly and the rackets thrive, and the gold and drugs keep flowing while foreign carriers quietly downgrade their security rating of you.", { FA: 2, FI: 2, EN: -4, GL: -6 }])),

  // ── Prison labour and overcrowding ──────────────────────────────────────────
  ax("Prisons Inspector-General", "doctor", ["prison", "labour", "reform"],
    sx("The jails are way too full. You can teach prisoners good skills to use when they get out, or let bad guards force them to work for free.",
      ["Teach the prisoners good skills to help them.", "A prisoner taught a trade returns a citizen.", "You build a real rehabilitation-through-work programme with wages and training. The reform is costly and the corrupt officers lose their private labour racket, but inmates leave with a skill instead of a grudge.", { EN: 8, GL: 4, FI: -4, FA: -2 }],
      ["Let the guards force them to work for free.", "A busy prisoner is a quiet prisoner.", "You leave prison labour to the officers' private schemes. Some inmates are quietly exploited for profit, the overcrowding and idleness fester, and the jails keep manufacturing hardened, embittered men.", { FA: 2, FI: 2, EN: -6 }])),

  // ── Migrant-return reintegration ────────────────────────────────────────────
  ax("Returnee Affairs Officer", "relief", ["migrants", "return", "reintegration"],
    sx("Many workers lost their jobs in other countries and came back with no money.",
      ["Spend money to help them find new jobs at home.", "A returnee abandoned is a grievance recruited.", "You build reintegration support — credit, retraining, counselling — for the returnees. The cost is real, but a destabilising mass of broke, angry men is turned toward livelihoods instead of unrest.", { EN: 8, MI: 2, FI: -6 }],
      ["Let them figure it out on their own.", "The state did not send them; it cannot catch them all.", "You leave the returnees to their own devices. The budget is spared, and a vast cohort of jobless, indebted, traumatised men sinks into despair, crime, and the recruiters' waiting arms.", { FI: 4, MI: -2, EN: -6 }])),

  // ── Diplomatic enclave / embassy threat ─────────────────────────────────────
  ax("Diplomatic Security Chief", "general", ["embassy", "threat", "diplomacy"],
    sx("Spies say bad guys want to attack a building where people from other countries work.",
      ["Put lots of loud, visible police everywhere to scare bad guys.", "A guarded embassy is a standing embassy.", "You ring the enclave with heavy security. The diplomats are reassured and the plot likely deterred, but the fortress optics broadcast a country under siege and unsettle the very investors you court.", { MI: 4, GL: 2, FI: -2, EN: -2 }],
      ["Use secret spies to catch the bad guys quietly.", "A wall of guns advertises the fear it answers.", "You opt for discreet, intelligence-driven security and roll up the plotters quietly. It is a gamble on your spies being right, but the enclave stays calm and the country looks composed.", { GL: 4, MI: 2, EN: 2 }])),

  // ── No-fly / aviation watchlist ─────────────────────────────────────────────
  ax("Aviation Security Chief", "official", ["watchlist", "aviation", "rights"],
    sx("You can make a list of bad people who aren't allowed to fly on airplanes. But you might be tempted to put reporters and enemies on the list too.",
      ["Make a big list and include your enemies.", "Better a hundred grounded than one bomber boarding.", "You build a broad watchlist with loose criteria. A few genuine threats are grounded, and so are journalists and activists who find themselves quietly barred from boarding under a label they cannot contest.", { MI: 6, EN: -4, GL: -4 }],
      ["Make a strict list only for real, dangerous bad guys.", "A watchlist with no judge is a blacklist with wings.", "You build a narrow list with judicial review and appeal. It is slower and the security hawks complain, but it stops the terror label from becoming a travel ban on dissent.", { GL: 4, EN: 4, MI: -2 }])),

  // ── Cybercafe and gaming-den surveillance ───────────────────────────────────
  ax("District Police Superintendent", "shadow", ["cybercafe", "surveillance", "youth"],
    sx("The police want a rule to collect the names of every kid who plays video games at the store, just to spy on them.",
      ["Make the stores collect everyone's names.", "A screen unwatched is a plot unseen.", "You require the logs and the software. A few real cases surface, and every student who plays a game or reads the news in a cybercafe now does so under the state's recorded eye.", { MI: 4, EN: -4, GL: -2 }],
      ["Let the kids play games in private.", "A boy at a screen is not a suspect.", "You drop the surveillance mandate. You forgo a thin investigative edge, but the cybercafes stay places of private curiosity rather than logged interrogation rooms.", { EN: 4, GL: 2, MI: -2 }])),

  // ── Acid-attack survivor justice ────────────────────────────────────────────
  ax("Women's Crime Officer", "doctor", ["acid", "survivors", "justice"],
    sx("A rich, powerful boy threw chemicals at a girl's face. His family is paying the police to drop the case.",
      ["Fight the rich family and protect the girl.", "A face melted for a refusal will have its reckoning.", "You protect the witnesses, fund the survivor's reconstruction, and push the case against the powerful family. They lean and lose, and an acid attacker faces the gallows the law prescribes.", { EN: 8, GL: 4, MI: -2, FA: -4 }],
      ["Let the case quietly disappear.", "The boy's father is a friend I cannot lose.", "You let the file dissolve. The disfigured woman gets neither justice nor care, the powerful family walks, and every spurned man with acid and connections takes note.", { FA: 4, MI: 2, EN: -10, GL: -4 }])),

  // ── Missing-persons / disappearance reporting ───────────────────────────────
  ax("Crime Investigation Chief", "people", ["missing-persons", "police", "families"],
    sx("People's family members are going missing, and the police refuse to even help search for them.",
      ["Make a real rule that police must help search for missing people.", "A family that cannot even file a report has been failed twice.", "You mandate prompt reporting, a public registry, and real investigation. Genuine missing-persons cases get traction, and so does an uncomfortable record of those who vanished into the state's own hands.", { EN: 8, GL: 6, MI: -4 }],
      ["Let the police keep ignoring the families.", "A registry of the missing is a registry of our sins.", "You leave the practice untouched. The families keep being turned from the gates, the missing stay officially un-missing, and the disappearances leave no paper trail to haunt you.", { MI: 4, EN: -8, GL: -4 }])),

  // ── Police welfare and morale ───────────────────────────────────────────────
  ax("Police Welfare Director", "general", ["police", "welfare", "morale"],
    sx("Your normal police officers are tired, poor, and live in dirty rooms. This makes them mean and want bribes.",
      ["Spend money to pay them better and give them nice rooms.", "A constable treated like dirt treats the public like dirt.", "You fund better pay, housing, and humane hours. The cost is heavy and the public initially grudging, but morale lifts, and a force that is not desperate leans a little less on the baton and the bribe.", { MI: 4, EN: 4, FI: -6 }],
      ["Leave the police poor and tired.", "The budget has worthier claims than a policeman's pillow.", "You leave the constabulary in its squalor. The money is saved, and the overworked, underpaid force keeps taking its frustration out on the public and its shortfall out of their pockets.", { FI: 4, MI: -2, EN: -4 }])),

  // ── Returning the disappeared ───────────────────────────────────────────────
  ax("Intelligence Chief", "shadow", ["disappearances", "release", "reckoning"],
    sx("The world wants to know what happened to the people your secret police kidnapped.",
      ["Keep lying and say you don't know anything.", "An admission is a noose I tie for myself.", "You maintain the blanket denial. The denials grow more threadbare as survivors and bodies surface, and the disappearances calcify into the defining crime of your rule.", { MI: 4, EN: -8, GL: -8 }],
      ["Bring back the ones who are alive and tell the truth.", "A wound this deep can only close with the truth.", "You quietly release the living and acknowledge the dead, families weeping at gates and gravesides. The security establishment panics at the precedent, but a monstrous chapter begins, at last, to close.", { EN: 8, GL: 8, MI: -8 }])),

  // ── Hill-district checkpoint abuse ──────────────────────────────────────────
  ax("Hill Tracts Security Officer", "people", ["cht", "checkpoints", "abuse"],
    sx("Soldiers are being very mean to the native people in the hills, searching them for no reason.",
      ["Tell the soldiers to be nice and respectful.", "A people frisked daily learns to hate daily.", "You enforce conduct rules, end the shakedowns, and treat hill travellers as citizens. The hard-liners in the brass grumble, but the daily humiliation eases and a grievance loses some of its heat.", { EN: 6, GL: 4, MI: -2, FA: -2 }],
      ["Let the soldiers keep being mean.", "A loosened grip in the hills invites the gun.", "You leave the checkpoints to their ways. The settlers pass and the indigenous are shaken down, and every humiliation at the barrier quietly recruits for the insurgency the hard hand was meant to deter.", { MI: 4, EN: -8, GL: -4 }])),

  // ── Counterfeit-medicine ring ───────────────────────────────────────────────
  ax("Drug Administration Chief", "doctor", ["fake-medicine", "health", "crime"],
    sx("Stores are selling fake medicine that doesn't work and hurts sick people.",
      ["Stop the fake medicine and check every pill.", "A fake pill is a slow bullet.", "You smash the counterfeit ring and require track-and-trace on medicines. The connected distributors fight back, but the fake drugs recede from the pharmacy shelves and patients stop dying from chalk.", { EN: 8, GL: 4, MI: 2, FA: -2 }],
      ["Let the stores keep selling whatever they want.", "A crackdown would disrupt the whole supply.", "You leave the counterfeit trade largely alone. The pharmacies stay stocked and the racket profitable, and patients keep swallowing chalk antibiotics and fake cancer drugs and quietly dying of treatable things.", { FI: 2, EN: -8, GL: -2 }])),

  // ── Plainclothes 'pick-up' arrests ──────────────────────────────────────────
  ax("Police Reform Commissioner", "shadow", ["arrests", "due-process", "abuse"],
    sx("Secret police in normal clothes are grabbing people off the street without rules.",
      ["Force the police to wear uniforms and follow the rules.", "An arrest with no record is an abduction with a badge.", "You mandate identification, paperwork, and immediate logging for every arrest. The agencies complain about lost speed and surprise, but the line between policing and disappearance is redrawn.", { EN: 8, GL: 6, MI: -4 }],
      ["Let the secret police keep grabbing people.", "An officer slowed by paperwork is an officer outrun.", "You leave the unmarked-car arrests unregulated. The agencies keep their speed and their shadows, and the families keep standing at police gates that deny the person was ever taken.", { MI: 4, EN: -8, GL: -6 }])),

  // ── Festival-season extortion by cadres ─────────────────────────────────────
  ax("District Police Superintendent", "fixer", ["extortion", "cadres", "festival"],
    sx("Before big parties, your team forces store owners to give them \"donations\" of money.",
      ["Stop your team from forcing people to pay.", "A shopkeeper shaken down in my name curses my name.", "You order the police to stop the collections and arrest the worst extortionists. The cadres feel betrayed and the local bosses grumble, but the traders breathe and the party's name stops being a threat.", { EN: 8, GL: 2, MI: -2, FA: -4 }],
      ["Let your team keep taking the money.", "The foot-soldiers must eat between elections.", "You leave the racket alone. The cadres feed and stay loyal, and every festival the shopkeepers and truckers pay a tax to the party's name while the police watch and wet their beaks.", { FA: 6, MI: 2, EN: -8 }])),

  // ── Anti-terror law scope ───────────────────────────────────────────────────
  ax("Law Secretary", "official", ["anti-terror-law", "scope", "dissent"],
    sx("You can write a new law that says anyone who complains about you is a \"terrorist.\"",
      ["Write the unfair law to lock up complainers.", "A wide net catches the threat before it forms.", "You pass a sweeping definition that sweeps in dissent. Genuine plots and peaceful critics alike now risk the terror label, and the law becomes your most flexible cudgel and a global byword for overreach.", { MI: 6, EN: -8, GL: -6 }],
      ["Make sure the law is only for real, dangerous terrorists.", "A law that calls a strike terror is a law against the people.", "You keep the definition tight to real violence. The security hawks complain it ties their hands, but protest and dissent stay outside the terror net, and the law keeps its legitimacy.", { GL: 6, EN: 6, MI: -4 }])),

  // ── Slum-fire investigation ─────────────────────────────────────────────────
  ax("Fire Investigation Officer", "people", ["slum-fire", "arson", "land"],
    sx("A rich builder probably started a fire to burn down poor people's houses so he can take their land.",
      ["Investigate the rich builder for starting the fire.", "A slum that burns whenever a developer wants it is no accident.", "You launch a real investigation pointing at the land's would-be owner. The developer and his patrons push hard, but the residents see the state take their suspicion seriously for once.", { EN: 8, GL: 4, MI: -2, FA: -4 }],
      ["Lie and say it was just an accidental fire.", "An arson case against a developer is a war I need not start.", "You close it as a wiring accident. The developer gets his cleared land in due course, the displaced scatter, and the convenient slum fire joins a long line of convenient slum fires.", { FA: 4, FI: 2, EN: -8, GL: -2 }])),

  // ── Minority-festival security ──────────────────────────────────────────────
  ax("Public Order Officer", "cleric", ["minorities", "festival", "protection"],
    sx("Small religious groups are having parties, but they are getting threats online. You can send extra police to protect them.",
      ["Send lots of police to protect their parties.", "A festival that needs guarding will be guarded.", "You deploy real protection around the temples, monasteries, and churches. The hardliners mutter about appeasement, but the minorities celebrate in peace and see a state that counts them as its own.", { EN: 8, GL: 4, MI: -2, FA: -2 }],
      ["Don't send extra police, to keep the big angry groups happy.", "I will not garrison every shrine and provoke the majority.", "You provide token security. The hardliners are unprovoked and content, and the minorities celebrate under a shadow, one rumour away from the attack the thin protection cannot stop.", { FA: 2, MI: 2, EN: -8, GL: -4 }])),

  // ── Refugee-camp fencing ────────────────────────────────────────────────────
  ax("Camp Security Chief", "shadow", ["rohingya", "fencing", "confinement"],
    sx("You can put sharp fences and guard towers around the homeless camps like a giant prison to keep everyone inside.",
      ["Build the sharp fences around the camps.", "An unfenced camp leaks crime and militancy into my towns.", "You wire in the camps. The host communities' fears ease and movement is controlled, and the UN and rights world condemn the caging of a stateless people who fled exactly this.", { MI: 6, GL: -6, EN: -4 }],
      ["Manage the camps without turning them into a prison.", "A people who fled a cage should not find another.", "You manage security with policing and registration rather than barbed wire. The host communities fret about the open edges, but you avoid building the prison-camp optics the agencies dread.", { GL: 4, EN: 2, MI: -2 }])),

  // ── Police-station modernisation ────────────────────────────────────────────
  ax("Police Reform Commissioner", "people", ["thana", "modernisation", "service"],
    sx("Police stations are scary and mean to poor people and women. You can spend money to make them friendly and helpful.",
      ["Make the police stations friendly and helpful.", "A thana the poor fear protects no one.", "You rebuild the stations around service — women's desks, tracked complaints, accountable reception. The old culture resists, but ordinary people start to see the police as something other than a threat.", { EN: 8, GL: 4, FI: -4, MI: -2 }],
      ["Leave the police stations scary and mean.", "A police station is meant to be feared.", "You leave the stations intimidating and opaque. The money is saved, and the poor and women keep avoiding the very institution meant to protect them, suffering crimes rather than reporting them.", { MI: 2, FA: 2, EN: -6 }])),

  // ── Surveillance of religious gatherings ────────────────────────────────────
  ax("Intelligence Chief", "cleric", ["mosques", "surveillance", "radicalisation"],
    sx("Spies want to sneak into places where people pray to secretly listen to what they say.",
      ["Let the spies secretly listen to people praying.", "Radicalisation is preached before it is plotted.", "You seed the mosques with informants. A few cells are caught early, and when the network is exposed — as it will be — the devout erupt at a state that spies on prayer itself.", { MI: 6, EN: -6, GL: -4 }],
      ["Do not spy on people when they are praying.", "A spy in the mosque makes an enemy of the congregation.", "You work through trusted community engagement rather than informants. The intelligence is thinner, but you do not pit the entire devout population against a state caught surveilling their worship.", { EN: 4, GL: 2, MI: -2 }])),

  // ── Riot compensation and inquiry ───────────────────────────────────────────
  ax("Home Affairs Coordinator", "people", ["riot", "inquiry", "communal"],
    sx("An angry mob burned a neighborhood, and the police just watched.",
      ["Find out the truth openly and pay the victims for the damage.", "A pogrom the police watched is a pogrom the state owns.", "You order an independent inquiry and full reparations. The force is rattled and a few officers fall, but the minority community sees accountability and the message lands that the police are not above the law.", { EN: 8, GL: 6, MI: -4, FA: -4 }],
      ["Hide the truth to protect the police who watched.", "An independent inquiry indicts the whole force.", "You keep the review in-house and it absolves the police. The compensation is token, the officers protected, and the minority neighbourhood learns that those who burned it and those who watched will answer to no one.", { MI: 4, FA: 2, EN: -8, GL: -6 }])),

  // ── Cyber-patrol of students ────────────────────────────────────────────────
  ax("Cyber Crime Chief", "shadow", ["students", "monitoring", "speech"],
    sx("The computer police want to spy on all students' internet posts to see if they are planning protests.",
      ["Let the police spy on the students' internet posts.", "A movement watched in the cradle is a movement controlled.", "You set the cyber unit on the students' networks and pre-empt 'instigators'. A few flashpoints are defused, and a generation learns that its every online word is watched, breeding the resentment that fuels the next eruption.", { MI: 6, EN: -8, GL: -4 }],
      ["Leave the students' internet posts alone.", "A government that surveils its students fears its future.", "You decline to surveil the students. You lose an early-warning tool, but the young keep a space to argue and organise freely, and you are not the government that spied on its own schoolchildren.", { EN: 6, GL: 4, MI: -2 }])),

  // ── Witness-protection programme ────────────────────────────────────────────
  ax("Crime Investigation Chief", "official", ["witnesses", "protection", "justice"],
    sx("Rich criminals go free because they scare the people who saw the crime. You can spend money to protect the witnesses.",
      ["Create a safe program to protect the witnesses.", "A witness who can be reached is a verdict that can be bought.", "You build genuine witness protection — relocation, security, anonymity. It is costly and hard to run, but suddenly cases against the powerful hold, and the era of the bought-off witness begins to end.", { EN: 8, GL: 6, FI: -4, FA: -4 }],
      ["Let the rich criminals keep scaring the witnesses.", "A protection programme is a budget and a headache.", "You decline the programme. The powerful keep buying and burying witnesses, the cases against them keep collapsing, and the brave who testify keep paying for it in blood or worse.", { FA: 4, FI: 2, EN: -8, GL: -4 }])),

  // ── Border-killing diplomacy at home ────────────────────────────────────────
  ax("Border Guard Director", "general", ["border", "killings", "restraint"],
    sx("Your border guards shot poor, unarmed villagers for crossing the line to trade.",
      ["Make a strict rule that guards cannot shoot unarmed people.", "A guard who shoots a smuggler boy is no guard.", "You impose strict non-lethal engagement and discipline the trigger-happy. The brass grumbles about a softer border, but the killings of unarmed villagers stop staining your own hands.", { EN: 6, GL: 6, MI: -4 }],
      ["Let the guards keep shooting people to scare them.", "A hard border is kept with a hard hand.", "You leave the lethal posture in place. The border looks fierce, and your guards keep killing unarmed villagers over cattle and rice, handing the moral high ground and the headlines to your critics.", { MI: 4, EN: -6, GL: -6 }])),

  // ── Police informant networks in slums ──────────────────────────────────────
  ax("District Police Superintendent", "shadow", ["informants", "slums", "control"],
    sx("The police want to pay poor people to spy on their neighbors. This will make everyone afraid of each other.",
      ["Pay people to spy on their neighbors.", "Eyes in every alley miss nothing.", "You weave informants through the slums. Crime intelligence improves, and so does the fear, as neighbours inform on neighbours and petty grudges become police cases and the poor learn to trust no one.", { MI: 6, EN: -6, GL: -2 }],
      ["Trust the community instead of paying spies.", "A neighbourhood of informers is a neighbourhood at war with itself.", "You build trust-based community policing rather than an informant web. The intelligence is less granular, but the slums keep their fragile social fabric and the police gain genuine cooperation.", { EN: 6, GL: 2, MI: -2 }])),

  // ── Mass-gathering facial scanning ──────────────────────────────────────────
  ax("Surveillance Technology Director", "shadow", ["facial-recognition", "gatherings", "dissent"],
    sx("You can use computers to scan everyone's faces in a crowd to know exactly who went to a protest.",
      ["Scan the faces of everyone in the crowd.", "A face in a crowd should not be a face I cannot name.", "You deploy live facial scanning at gatherings. Every protester, worshipper, and marcher is now identifiable and loggable, and the chilling knowledge of it thins the crowds that dare to assemble.", { MI: 6, EN: -8, GL: -4 }],
      ["Ban the computers from scanning people's faces at protests.", "A right to assemble means a right to assemble unnamed.", "You forbid scanning peaceful gatherings. You forgo a powerful identification tool, but the anonymity that lets citizens protest and worship without fear of a logged face survives.", { EN: 6, GL: 4, MI: -2 }])),

  // ── Custodial healthcare ────────────────────────────────────────────────────
  ax("Prisons Medical Officer", "doctor", ["prison", "health", "deaths"],
    sx("Prisoners are getting sick and dying because there are no doctors in the jails.",
      ["Spend money to bring doctors to the jails.", "A sentence is loss of liberty, not a death warrant.", "You fund real medical care in the jails. There are no votes in it and the cost is real, but prisoners stop dying of treatable illness, and the state stops being a quiet executioner by neglect.", { EN: 8, GL: 4, FI: -4 }],
      ["Let the prisoners stay sick without doctors.", "A convict's health is the lowest claim on the budget.", "You leave the jails without real medicine. The money goes to constituencies that vote, and prisoners keep dying of curable things, their deaths logged as misfortune and forgotten.", { FI: 4, EN: -6, GL: -2 }])),

  // ── Land-dispute violence ───────────────────────────────────────────────────
  ax("Rural Police Chief", "people", ["land", "violence", "powerful"],
    sx("A rich bully is stealing a poor family's land, and he paid the local police to ignore it.",
      ["Stop the rich bully and protect the poor family.", "A poor man's deed is worth as much as a rich man's.", "You send honest officers, protect the family, and move against the grabber and the bent local chief. The powerful man rages and pulls strings, but the family keeps its land and the law its meaning.", { EN: 8, GL: 4, MI: -2, FA: -4 }],
      ["Ignore it and pretend it's none of your business.", "I cannot referee every village land quarrel.", "You stay out and call it a civil matter. The powerful man's muscle prevails, the family is dispossessed, and the lesson spreads that land here belongs to whoever can hire the most fists.", { FA: 4, MI: 2, EN: -8, GL: -2 }])),

  // ── Protest-injury medical neutrality ───────────────────────────────────────
  ax("Hospital Liaison Officer", "doctor", ["protest", "hospitals", "neutrality"],
    sx("The police are going into hospitals and dragging hurt protesters out of their beds to arrest them.",
      ["Make hospitals safe places where police cannot arrest sick people.", "A wounded man on a gurney is a patient, not a target.", "You order hospitals off-limits to arrests and protect treating doctors. The security forces fume at the sanctuary, but the wounded are treated and the state is not seen dragging the bleeding from their beds.", { EN: 8, GL: 6, MI: -4 }],
      ["Let the police keep taking hurt people from hospitals.", "A hospital bed is no refuge from the law.", "You let police seize the injured from the wards and lean on the doctors. The wounded learn that to seek treatment is to be arrested, and the images of patients hauled from gurneys travel the world.", { MI: 4, EN: -8, GL: -8 }])),

  // ── The disappearance that touches power ────────────────────────────────────
  ax("Internal Affairs Director", "shadow", ["disappearance", "cover-up", "accountability"],
    sx("A man who argued with your powerful friend was kidnapped by secret police.",
      ["Investigate honestly and find the man, even if your friend is guilty.", "A disappearance I refuse to solve is one I own.", "You order a real investigation, and it points toward your own. The minister and the agencies close ranks against you, but the businessman's fate is uncovered and the rot, for once, is named.", { EN: 8, GL: 6, MI: -4, FA: -6 }],
      ["Secretly close the case to protect your friend.", "Some threads are better not pulled.", "You bury the investigation. The minister is protected and the agencies reassured, and another man simply ceases to exist, his family left to a silence the state enforces.", { MI: 4, FA: 4, EN: -10, GL: -6 }]),
    sx("A reporter found out about the kidnapped man and is going to tell the world.",
      ["Hurt the reporter to stop the story.", "What is never reported never happened.", "You spike the story and threaten the journalist into silence. The suppression itself leaks, and now you own both the disappearance and the cover-up of the cover-up, a scandal compounding on itself.", { MI: 4, EN: -8, GL: -8 }],
      ["Admit it happened and blame one bad helper.", "A wound I lance heals; one I hide festers.", "You concede the broad truth, offer a scapegoat and an inquiry, and free what can be freed. The base is unsettled and the agencies wary, but you blunt the story by meeting it rather than fleeing it.", { GL: 4, EN: 4, MI: -4, FA: -2 }])),
];
