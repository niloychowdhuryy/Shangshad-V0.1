// UN — Global Relations (Gulshan). Primary metric: GL.
// Real fault lines: Teesta/Farakka water with India, Rohingya & Myanmar, the
// China–India balancing act and BRI debt, IMF conditionality, Gulf migrant
// labour, Western sanctions tied to security forces and market access, climate
// loss-and-damage, border killings. Personas fictional; dilemmas real.
const sx = (prompt, left, right) => ({ prompt, left, right });
const ax = (speaker, portrait, tags, ...stages) => ({ speaker, portrait, tags, stages });

export const UN = [
  // ── Teesta water & the China–India squeeze ──────────────────────────────────
  ax("India's High Commissioner", "ambassador", ["water", "india", "teesta"],
    sx("Honourable leader! A neighboring country keeps making you wait for a deal to share river water. Your farmers really need the water right now to grow their food.",
      ["Wait nicely for the neighbor to decide.", "Patience keeps the bigger relationship whole.", "You smile and wait. The dry season ruins another harvest in Rangpur, and your northern MPs seethe.", { GL: 8, EN: -10, FA: -4 }],
      ["Tell them they must decide by a certain day.", "Seven seasons is long enough to be patient.", "Delhi bristles at the ultimatum; the northern farmers cheer a leader who finally pushed back.", { GL: -8, EN: 8, MI: 4 }]),
    sx("Sir, urgent news. China offers a lot of money to fix your big river. Your neighbor says they will be very angry if you let China build things so close to them.",
      ["Say yes to China and fix the river.", "If Delhi will not solve it, someone must.", "The river works begin; the north rejoices. Delhi retaliates quietly on transit and trade, and the West frets about Beijing's footprint.", { RE: 10, EN: 8, GL: -10, FI: 4 }],
      ["Say no to China to keep your neighbor happy.", "I will not host a great-power quarrel on my river.", "You pass on the project to soothe India. The Teesta stays starved, and your own people ask whose interests you serve.", { GL: 8, EN: -8, FA: -6 }]),
    sx("Sir, forgive me — Three big, powerful countries all want you to pick their side and be their best friend. You only have one country to run.",
      ["Pick a side to be safe with them.", "Our bread is buttered in their markets.", "Garment access and soft loans flow; Beijing's projects freeze mid-dredge, stranding sunk costs and goodwill.", { GL: 8, FI: 8, RE: -8, MI: -4 }],
      ["Stay in the middle and take gifts from everyone.", "We bow to no capital. We bargain with all of them.", "You play the patrons against each other. It buys leverage and resentment in equal measure; one misstep and the act collapses.", { GL: -4, FI: 6, MI: 6, RE: 4 }])),

  // ── Rohingya repatriation ───────────────────────────────────────────────────
  ax("UN Refugee Commissioner", "relief", ["rohingya", "myanmar", "refugees"],
    sx("A word, sir! The camps for homeless people from another country are running out of food money. They will get very angry and might escape if they starve.",
      ["Pay for their food using your own country's money.", "We sheltered them; we will not starve them.", "The camps hold and the world praises you — while your own coast resents the strain on land, forests, and wages.", { GL: 10, EN: -8, FI: -8, FA: -4 }],
      ["Give them less food so other countries feel bad and help.", "Let the squeeze fall where the money should.", "The donors are shamed into partial funding, but hungry camps breed crime and trafficking, and your humanitarian halo dims.", { FI: 4, GL: -8, EN: -10, MI: -4 }]),
    sx("Sir, we have a problem. The mean leaders of the country the homeless people ran away from say they can come back. But the people are very scared to go back there.",
      ["Agree to the deal and send them back.", "A flawed return is still a return.", "Beijing is pleased and a burden lifts on paper. The first boats go back to camps behind wire; rights groups call it refoulement.", { GL: -6, FI: 6, EN: 4, MI: 4 }],
      ["Say no because you won't force scared people to go.", "I will not deport people into a fire.", "The West applauds; the camps stay. Beijing and the junta mark you as the obstacle, and the bill keeps growing.", { GL: 6, EN: 6, FI: -8, MI: -4 }]),
    sx("Sir! Bad guys with weapons are hiding inside the homeless camps. Your army wants to lock the camps down, but helpers say that will stop food from getting in.",
      ["Send the army to lock down the camps.", "A camp is not worth a province.", "The militancy is contained by force. Aid access shrinks, abuse complaints rise, and the camps grow quieter and angrier.", { MI: 10, GL: -8, EN: -8 }],
      ["Give the people jobs and schools instead to keep them busy.", "Idle and stateless is how a militia is fed.", "Slowly, the recruiting dries up. It costs years and crores the treasury can barely spare, but the violence ebbs.", { EN: 10, GL: 6, FI: -10, MI: -4 }])),

  // ── IMF programme ───────────────────────────────────────────────────────────
  ax("IMF Mission Chief", "official", ["imf", "subsidies", "reserves"],
    sx("Mr. Prime Minister, sir! A giant bank will lend you money to save your country, but only if you make gas and electricity very expensive for your people right now.",
      ["Agree to all their rules and take the money.", "The reserves come first; the rest is politics.", "The dollars arrive and the reserves steady. Prices jump at every bazaar, and the streets begin to simmer.", { FI: 12, GL: 8, EN: -12, MI: -4 }],
      ["Ask them to make the rules easier and slower.", "I will not gut the poor on a quarterly schedule.", "You win a gentler timeline — and a smaller tranche. The reserves wobble on, the IMF watching every number.", { FI: 4, GL: 4, EN: 4, MI: -4 }])),

  // ── Gulf migrant labour ─────────────────────────────────────────────────────
  ax("Saudi Labour Attaché", "ambassador", ["migrants", "gulf", "remittances"],
    sx("Your Excellency! Another country wants to send many of your workers back home to make room for their own people. Those workers send a lot of money to help your country survive.",
      ["Beg them to let your workers stay.", "Those remittances are not optional for us.", "You trade fishing rights and a basing arrangement to slow the deportations. The remittances flow; sovereignty frays a little.", { FI: 8, GL: 4, RE: -6, MI: -4 }],
      ["Let them come home and try to find new places for them to work.", "We will not beg to export our people.", "You open labour corridors to Malaysia and Europe with dignity clauses. It is slower money, but the workers return to less abuse.", { GL: 6, EN: 6, FI: -8 }])),

  // ── Western sanctions on the security force ─────────────────────────────────
  ax("US Under-Secretary", "ambassador", ["sanctions", "rights", "trade"],
    sx("Prime Minister! America is punishing your special police for hurting people. They say you must fix your police or they will punish your businesses too.",
      ["Fix the police so everyone can see you did it.", "The market is worth more than the muscle.", "You curb the unit and prosecute a few cases. The generals feel betrayed; the West relaxes and the garment buyers stay.", { GL: 10, EN: 8, MI: -10 }],
      ["Defend your police and tell America it's none of their business.", "No foreign capital commands my security.", "You stand by the battalion. The base is pleased and the cantonment loyal; the sanctions widen and buyers grow nervous.", { MI: 8, GL: -12, FI: -6 }])),

  // ── Climate loss-and-damage ─────────────────────────────────────────────────
  ax("COP Summit President", "official", ["climate", "loss-damage", "delta"],
    sx("Sir — Your country is flooding because of pollution from bigger countries. At a big world meeting, you can yell for them to pay you for the damage, or sit quietly.",
      ["Yell loudly and demand they pay for the damage.", "We are sinking; politeness can drown.", "Your speech goes viral and shames the rich world into pledges — pledges that may never arrive, and donors who remember the embarrassment.", { GL: -4, EN: 10, FI: 6 }],
      ["Stay quiet and work politely with the others.", "Friends fund faster than rivals.", "You bank concrete adaptation grants now by being agreeable. The activists call you tame; the embankments get built.", { GL: 8, FI: 8, EN: 4 }])),

  // ── Border killings ─────────────────────────────────────────────────────────
  ax("Border Guard Director-General", "general", ["border", "india", "killings"],
    sx("Honourable leader! The guards from the country next door keep shooting people crossing the border. Your guards want to start shooting back.",
      ["Tell your guards to shoot back.", "Our dead deserve more than a démarche.", "The border crackles with exchanges. The nationalist press roars approval; the wider relationship with Delhi ices over fast.", { MI: 8, GL: -10, EN: -4 }],
      ["Demand the other country promises to stop shooting.", "I want fewer bodies, not more bullets.", "You push a non-lethal agreement through hard diplomacy. It holds, mostly; your own hawks grumble that you went soft.", { GL: 6, EN: 6, MI: -6 }])),

  // ── Transit / connectivity ──────────────────────────────────────────────────
  ax("Connectivity Negotiator", "official", ["transit", "india", "sovereignty"],
    sx("Sir, urgent news. Your neighbor wants to drive their delivery trucks straight through your country to save time. Some people think this gives them too much power over your roads.",
      ["Let them drive through and charge them money.", "Geography is an asset; let us bank it.", "Toll and transhipment revenue flows and Delhi warms considerably. The opposition brands you a vassal, loudly.", { FI: 10, GL: 8, FA: -4, EN: -4 }],
      ["Say no until they treat you better on other deals.", "No corridor until the river runs both ways.", "You make transit a bargaining chip. Delhi is annoyed but engaged; the nationalists, for once, applaud you.", { GL: -6, MI: 4, EN: 4 }])),

  // ── Pakistan thaw ───────────────────────────────────────────────────────────
  ax("Pakistani Envoy", "ambassador", ["pakistan", "1971", "history"],
    sx("Sir, forgive me — An old enemy wants to be friends and play sports with you. But they refuse to say sorry for a very bad war from a long time ago, and older people are mad.",
      ["Be friends and trade, and forget the past.", "The living eat; the dead are honoured otherwise.", "Trade and travel resume to modest gain. The veterans and the families of the martyred feel their grief was bartered away.", { FI: 6, GL: 4, EN: -6, FA: -4 }],
      ["Tell them they must say sorry before you can be friends.", "There is no reset over an unmarked grave.", "You hold firm on the apology. Islamabad balks and the reset stalls; at home, the gesture is honoured as a matter of national dignity.", { EN: 6, FA: 6, GL: -6, FI: -4 }])),

  // ── UN peacekeeping ─────────────────────────────────────────────────────────
  ax("UN Peace Operations Chief", "official", ["peacekeeping", "scandal", "prestige"],
    sx("A word, sir! Your soldiers who are helping in another country are accused of doing bad things. You could lose a lot of money if they are sent home in disgrace.",
      ["Secretly bring the accused soldiers home and lie about the rest.", "Protect the mission, protect the money.", "The deployment survives and the dollars keep coming. The cover-up, if it surfaces, will cost far more than the truth would have.", { FI: 6, MI: 6, GL: -8 }],
      ["Have a fair trial where everyone can see the truth.", "Our blue helmets must be clean or they are nothing.", "You prosecute openly. The UN praises the rare accountability; the army resents the spectacle and the missions continue, reputations intact.", { GL: 10, MI: -6, FI: -4 }])),

  // ── Farakka / dry-season flows ──────────────────────────────────────────────
  ax("Joint Rivers Commissioner", "official", ["farakka", "water", "india"],
    sx("Sir, we have a problem. A neighbor stopped a river from flowing into your country, causing your fish to die. You can study it for a long time, or take them to a big global court and embarrass them.",
      ["Agree to study the problem slowly together.", "Slow water is better than no neighbour.", "The study placates Delhi and buys goodwill. The southwest keeps salting over while committees meet, and your coastal MPs despair.", { GL: 8, EN: -10, RE: -4 }],
      ["Take them to the big global court.", "If the river is shared, so is the law.", "You internationalise the dispute. Delhi is furious and slows cooperation elsewhere; the coastal districts feel, at last, defended.", { GL: -8, EN: 8, RE: 4, MI: 4 }])),

  // ── BESPOKE INSTALMENT — real regional & global fault lines ─────────────────

  ax("Chinese Belt-and-Road Envoy", "ambassador", ["china", "bri", "port"],
    sx("Sir! China wants to build a giant boat dock on your beach. Other big countries say this is dangerous and China will use it for their navy.",
      ["Let China build the giant dock.", "A great port is worth a great quarrel.", "Cranes and Chinese capital arrive on easy terms. Delhi and Washington both register the strategic shift, coldly.", { RE: 8, FI: 8, GL: -10 }],
      ["Say no and build it yourself or with a different friend.", "I will not anchor a foreign navy on my coast.", "You choose a less fraught partner at higher cost and slower pace. Beijing's warmth cools to a correct chill.", { GL: 4, FI: -8, RE: -4 }])),

  ax("Russian Nuclear Delegation", "ambassador", ["russia", "rooppur", "sanctions"],
    sx("Mr. Prime Minister, sir! You owe Russia a lot of money for a power plant, but global rules say you aren't allowed to send them money right now because they are in trouble.",
      ["Break the rules to send the money secretly.", "The reactor must be fed.", "The plant stays on schedule via a yuan workaround. Western banks and capitals note your sanctions-busting and frown.", { RE: 8, GL: -10, FI: -4 }],
      ["Refuse to pay until the rules change, even if the plant stops working.", "I will not be a sanctions test case.", "You pause the transfer to stay clean. The reactor's timeline slips and Moscow grows impatient and cool.", { GL: 6, RE: -8, FI: -4 }])),

  ax("US Indo-Pacific Coordinator", "ambassador", ["usa", "indo-pacific", "quad"],
    sx("Your Excellency! America wants you to join their team to stand against China. If you join, you have to pick a side in a big fight right next door.",
      ["Join America's team.", "Our future markets are in the West.", "Defence and trade doors swing open and India warms. Beijing reads the alignment and quietly squeezes its projects and loans.", { GL: 8, FI: 6, MI: 4, RE: -6 }],
      ["Stay out of their fight to be safe.", "We trade with all and salute none.", "You keep your options and your independence. Washington is disappointed; the balancing act grows more precarious by the summit.", { GL: -4, FI: 4, MI: -4 }])),

  ax("Rohingya Prosecution Counsel", "official", ["rohingya", "icj", "genocide"],
    sx("Prime Minister! There is a big court case to punish the bad leaders next door for hurting people. If you yell at them in court, they will definitely refuse to take the homeless people back.",
      ["Yell at them in court to punish them.", "The world must name what was done.", "Your moral standing soars in the chancelleries of the West. The junta freezes all repatriation talks and rattles the border.", { GL: 10, EN: 4, MI: -6 }],
      ["Stay quiet so they might take the homeless people back.", "A million here is a heavier fact than a verdict there.", "You mute your advocacy to court the generals. Rights groups accuse you of trading justice for a deal that may never come.", { GL: -6, MI: 4, EN: -4 }])),

  ax("Refugee Relocation Director", "official", ["rohingya", "bhasan-char", "island"],
    sx("Sir — You built a new mud island to move some homeless people there. The world says it might flood, but your local people want the homeless moved right now.",
      ["Move the people to the island right now.", "The mainland camps cannot hold them all.", "The pressure on the coast eases as families move. The 'consent' and cyclone questions dog you in every UN briefing.", { EN: 6, MI: 4, GL: -8 }],
      ["Wait to make sure the island is totally safe first.", "I will not strand the stateless on a sandbar.", "You wait for international clearance. The mainland camps stay overcrowded and the host districts seethe at the delay.", { GL: 6, EN: -6, MI: -4 }])),

  ax("Vaccine Diplomacy Envoy", "ambassador", ["health", "vaccines", "india-china"],
    sx("Honourable leader! You need medicine for a sickness fast. One neighbor gives it slowly, but China will give it fast if you act like they are your best friend.",
      ["Take China's fast medicine.", "A dose in the arm beats a promise in the post.", "Vaccines flow and the curve bends; Beijing banks the gratitude. Delhi feels jilted just as its own export ban eases.", { EN: 10, GL: -4, RE: -4 }],
      ["Wait for the slower medicine from your neighbor.", "Do not abandon the neighbour mid-crisis.", "You wait on Delhi's deliveries, which stutter when India's wards fill. The shortfall costs you lives and patience at home.", { GL: 4, EN: -8 }])),

  ax("Trade Preferences Negotiator", "official", ["ldc-graduation", "gsp", "exports"],
    sx("Sir, urgent news. Your country is getting richer, so other places won't give you special cheap prices for your clothes anymore.",
      ["Fight hard to keep the special cheap prices.", "Graduation must not gut the looms.", "Diplomats fan out for bilateral and EU arrangements. It is costly, uncertain work, but it may save the export engine.", { GL: 6, FI: 4, EN: 4, MI: -4 }],
      ["Accept that you are richer and let businesses adjust.", "We cannot stay poor to keep a discount.", "You wear the milestone proudly and tell industry to compete on merit. Margins thin and some factories falter in the cold turn.", { GL: 4, FI: -6, EN: -6 }])),

  ax("Indian Citizenship Envoy", "ambassador", ["india", "nrc", "pushback"],
    sx("Sir, forgive me — Your neighbor is calling some of their people illegal and might push them over the fence into your country.",
      ["Yell at them and guard your borders loudly.", "We will not be the dumping ground for their politics.", "You denounce the pushbacks and harden the frontier. Delhi bristles at the public rebuke and cools cooperation.", { GL: -6, MI: 6, EN: 4, FA: 4 }],
      ["Talk to them quietly to stay friends.", "A megaphone here costs us the whole partnership.", "You raise it softly behind closed doors. The relationship holds; at home, you look silent while your kin are branded.", { GL: 6, EN: -6, FA: -6 }])),

  ax("OIC Solidarity Delegate", "cleric", ["oic", "islamic-bloc", "rights"],
    sx("A word, sir! A group of religious countries offers you money and help, but only if you agree with their strict rules and support their fights.",
      ["Take their money and agree with them.", "Friends who do not lecture are worth keeping.", "Gulf money and diplomatic cover arrive. Your secular and Western ties fray, and minority anxieties at home tick up.", { FI: 6, GL: -4, EN: -6, FA: 4 }],
      ["Be polite but stay away from their strict rules.", "We take investment, not an ideology.", "You bank goodwill without the strings. The bloc's warmth cools a little; your pluralist credentials stay intact.", { GL: 4, EN: 4, FI: -4 }])),

  ax("Maritime Boundary Commissioner", "official", ["bay-of-bengal", "blue-economy", "maritime"],
    sx("Sir, we have a problem. You own ocean water that has gas and fish. Powerful countries want to help you get it quickly, but your neighbors don't trust those powerful countries.",
      ["Work fast with the powerful countries to get the treasure.", "The sea is the next frontier of the nation.", "Surveys and joint ventures promise gas and jobs. The activity ruffles maritime neighbours and draws great-power interest.", { RE: 8, FI: 6, GL: -6 }],
      ["Work slowly and safely with your neighbors.", "A calm sea is also an asset.", "You move with joint surveys and caution. The bounty comes slower, but no warship shadows your rigs.", { GL: 6, RE: -6, FI: -4 }])),

  ax("Diaspora Affairs Minister", "people", ["diaspora", "remittances", "votes"],
    sx("Sir! Millions of your people live far away but send you money to help the country. Now they want to vote in your elections, which is risky for you.",
      ["Let them vote from far away.", "Those who feed the reserves deserve a vote.", "The diaspora is delighted and engaged; remittances and goodwill rise. An overseas opposition now also has a ballot and a megaphone.", { GL: 6, FI: 6, EN: 4, MI: -4 }],
      ["Take their money but don't let them vote.", "Money yes, a foreign electorate no.", "You take the remittances and withhold the franchise. The expatriates resent being milked without a voice.", { FI: 4, GL: -4, EN: -4 }])),

  ax("Surveillance Tech Vendor", "shadow", ["china", "safe-city", "surveillance"],
    sx("Mr. Prime Minister, sir! A company wants to sell you magic cameras that watch everyone in the city at all times and know their faces.",
      ["Buy the cameras to watch everyone.", "Order is worth a few watching eyes.", "Crime data and control both improve under the lenses. The West warns of a panopticon, and the data flows somewhere you cannot audit.", { MI: 8, RE: 4, GL: -8, EN: -4 }],
      ["Say no because people need their privacy.", "I will not rent my capital's eyes from abroad.", "You pass on the package and its dependencies. You forgo a control tool and keep your streets off a foreign server.", { GL: 6, EN: 4, MI: -4 }])),

  ax("Climate Migration Envoy", "official", ["climate", "migration", "recognition"],
    sx("Your Excellency! The oceans are rising. You can ask big countries to let your people move there as \"climate refugees,\" but this means admitting your land will sink.",
      ["Ask them to let your people move there.", "The drowning have a right to somewhere dry.", "You become the moral voice of the climate-displaced and win pledges. You also brand your nation, on the record, as one that will flee its own coast.", { GL: 6, EN: 6, FI: 4 }],
      ["Don't use the word \"refugee\" and ask for money to build walls instead.", "Build the walls, do not advertise the flood.", "You steer the talks toward embankment funding instead of migration. Quieter, more fundable, less of a headline that scares investors.", { GL: 4, EN: 4, FI: 4 }])),

  ax("Regional Debt Watcher", "official", ["regional", "default", "contagion"],
    sx("Prime Minister! A nearby country completely ran out of money. Banks are scared your country will run out too.",
      ["Tell everyone loudly that you are much better than that broken country.", "We are not them; say it from the rooftops.", "Your spreads ease as investors un-bundle you from the crisis. The shamed neighbours resent being made your foil.", { GL: 4, FI: 6, EN: -4 }],
      ["Be nice and show you support your neighbor.", "Today them, tomorrow perhaps us.", "You stand with the stricken neighbours and pool some risk. Noble, but the markets keep your name in the same anxious sentence.", { GL: 6, FI: -6 }])),

  ax("Gulf Labour Reform Attaché", "ambassador", ["migrants", "gulf", "amnesty"],
    sx("Sir — A faraway country says your illegal workers can stay safely, but only if you follow strict new rules that cost a lot of money.",
      ["Accept the strict rules so they can stay.", "Regularised workers send money home safely.", "Your workers gain legal footing and the remittances stabilise. The tighter caps shrink the future flow of jobs.", { FI: 6, EN: 6, GL: 4 }],
      ["Say no and ask for better, fairer rules.", "We will not pay to legalise our own people.", "You hold out for better terms. The amnesty window narrows and undocumented workers stay exposed to raids and ruin.", { GL: -4, FI: 4, EN: -6 }])),

  ax("Japanese Megaproject Lead", "ambassador", ["japan", "matarbari", "infrastructure"],
    sx("Honourable leader! A rich country offers cheap money to build a giant dock, but they secretly expect you to stop being friends with China.",
      ["Take their money to build the dock.", "Patient money builds the steadiest things.", "A world-class port and industrial belt take shape on clean terms. Beijing reads the tilt and your Chinese projects cool.", { RE: 8, GL: 6, FI: -4 }],
      ["Take money from both countries to be safe.", "Why choose when both will pay?", "You play the two off each other for better terms. The balancing wins money now and trust from neither in the end.", { FI: 6, RE: 4, GL: -4 }])),

  ax("UN Rights Council Delegate", "official", ["unhrc", "resolution", "scrutiny"],
    sx("Sir, urgent news. A group wants to put a team in your country to officially watch if you are being mean to reporters and citizens.",
      ["Ask your friends to stop the team from coming.", "No foreign council sits in judgment of us.", "You whip enough votes to shelve it this session. The effort burns diplomatic capital and confirms every critic's suspicion.", { MI: 4, GL: -8, FI: -4 }],
      ["Let the team watch you and promise to be better.", "Sunlight, accepted gracefully, disarms.", "You welcome the scrutiny and announce reforms. The security establishment chafes; your standing in the open world recovers.", { GL: 10, EN: 6, MI: -8 }])),

  ax("Naval Base Suitor", "general", ["base", "great-power", "sovereignty"],
    sx("Sir, forgive me — Two huge countries want to park their army boats on your beaches and will pay you lots of money to do it.",
      ["Let the one who pays the most park their boats.", "A coast is an asset; let it pay.", "The aid is enormous and immediate. You have planted a foreign flag on your shore and a target on your map.", { FI: 10, MI: 6, GL: -10, RE: -4 }],
      ["Say no to all army boats to keep your beaches safe.", "No navy but ours anchors here.", "You forgo the windfall and keep the coast sovereign. Both suitors are disappointed; your neutrality holds, for now.", { GL: 6, MI: -4, FI: -6 }])),

  ax("Hydropower Transit Negotiator", "official", ["nepal", "hydropower", "transit"],
    sx("A word, sir! You want to buy clean electricity from a country far away, but the wires have to go right through a grumpy neighbor's land.",
      ["Try to make a deal with the grumpy neighbor.", "Clean current is worth a careful dance.", "You secure Himalayan hydropower via Indian lines. The dependence on Delhi's grid and goodwill deepens with every watt.", { RE: 8, GL: 4, EN: 4 }],
      ["Give up and build your own power plants at home instead.", "I will not run my lights through a neighbour's switch.", "You build domestic capacity instead of importing across the border. Costlier and slower, but no foreign hand on the breaker.", { RE: 4, FI: -6, GL: -4 }])),

  ax("Peacekeeping Expansion Officer", "general", ["peacekeeping", "un", "prestige"],
    sx("Sir, we have a problem. The world wants your soldiers to go fight in a very dangerous war that isn't yours. They will pay you, but soldiers might die.",
      ["Send a large group of soldiers for the money.", "Our blue helmets buy us a seat at the table.", "The deployment lifts your standing and your foreign-currency earnings. The first casualties test the public's stomach for distant wars.", { GL: 8, FI: 6, MI: -4, EN: -4 }],
      ["Send only a tiny group of soldiers.", "I will not spend our youth on others' wars.", "You keep the commitment small and the risk low. The UN's gratitude, and the income, are correspondingly modest.", { MI: 4, GL: -4, FI: -4 }])),

  // ── BRI debt trap ───────────────────────────────────────────────────────────
  ax("Belt-and-Road Negotiator", "ambassador", ["china", "bri", "debt"],
    sx("Sir! A huge country offers to build bridges and trains, but the rules are secret and you might owe them too much money later and lose your things.",
      ["Take the deal and build everything.", "Bridges now, bills later.", "The cranes arrive and the skyline transforms. The debt accrues in foreign currency on hidden terms, and the cautionary tale of the seized port hangs over every repayment.", { RE: 8, FI: 4, GL: -8 }],
      ["Only build a few very safe things.", "I will borrow for assets, not for traps.", "You accept a few sound projects and decline the rest. Beijing is cooler and the building slower, but no opaque mountain of debt waits to swallow a national asset.", { GL: 4, FI: -2, RE: -4 }])),

  // ── India trade deficit ─────────────────────────────────────────────────────
  ax("Commerce Envoy to Delhi", "ambassador", ["india", "trade", "deficit"],
    sx("Mr. Prime Minister, sir! Your big neighbor sells you lots of things, but won't let you sell your things to them.",
      ["Fight with them hard to let you sell your things.", "A friendship this one-sided is tribute, not trade.", "You push for real access and parity. Delhi bristles and some files slow, but you signal you will not be a captive market forever.", { GL: 4, FI: 4, RE: -2 }],
      ["Keep them happy and don't fight.", "Delhi's goodwill is worth more than a trade column.", "You swallow the imbalance to keep Delhi content. The deficit deepens and exporters fume, but the larger relationship — water, security, borders — stays warm.", { GL: 6, FI: -6 }])),

  // ── US trade preferences & labour ───────────────────────────────────────────
  ax("Washington Trade Liaison", "ambassador", ["usa", "gsp", "labour"],
    sx("Your Excellency! A faraway country stopped buying your clothes because they say you treat workers badly. Your factory owners will be very angry if you change the rules.",
      ["Change the rules to help workers and sell clothes again.", "A market reopened is worth a donor's sulk.", "You legalise unions and tighten safety to win the preferences back. The factory owners who fund you seethe, but the export market reopens and the workers gain ground.", { GL: 8, FI: 4, FA: -4 }],
      ["Say no and tell them to mind their own business.", "I will not let Washington write my labour law.", "You reject the conditions as interference. The donors are pleased and the unions stay caged, but the preferences lapse and the exporters lose their edge in a key market.", { FA: 4, MI: 2, GL: -8, FI: -4 }])),

  // ── EU EBA garment access ───────────────────────────────────────────────────
  ax("Brussels Trade Envoy", "ambassador", ["eu", "garments", "rights"],
    sx("Prime Minister! Another country says they will stop giving you good deals unless you let some protesters out of jail and allow free news.",
      ["Let the protesters out to save your business deals.", "Billions in exports outweigh a few prisoners I never needed.", "You quietly free the activists and ease the press curbs. The hardliners grumble at the foreign pressure, but the garment lifeline to Europe is secured.", { GL: 8, FI: 6, EN: 2, MI: -4 }],
      ["Keep them in jail and risk losing the money.", "I will not free my critics on Brussels' orders.", "You refuse to be leveraged. The activists stay jailed and the review turns sour, putting the garment sector's European lifeline — and a million jobs — at real risk.", { MI: 4, FA: 2, GL: -8, FI: -6 }])),

  // ── Indo-Pacific balancing ──────────────────────────────────────────────────
  ax("Strategic Affairs Adviser", "official", ["indo-pacific", "quad", "china"],
    sx("Sir — Two giant countries are fighting and both want you to pick their side. If you pick one, the other will be very mad.",
      ["Pick a side and join the team.", "The future of the seas is being written without me.", "You sign on and gain Western favour and investment. Beijing reads it as a betrayal and the cost will come — in stalled projects and cold summits — soon enough.", { GL: 4, FI: 4, RE: -4 }],
      ["Stay out of it and try to be friends with both.", "A small state survives by belonging to no one's bloc.", "You decline to choose, preserving your room to manoeuvre. Both giants court and distrust you, and the tightrope grows narrower each year.", { GL: 6, MI: 2, FI: -2 }])),

  // ── Migrant worker abuse in the Gulf ────────────────────────────────────────
  ax("Expatriate Welfare Director", "people", ["migrants", "gulf", "kafala"],
    sx("Honourable leader! Your workers in other countries are dying because their bosses treat them terribly. If you yell at the bosses, they might fire everyone from your country.",
      ["Yell at the bosses to protect your workers.", "A citizen's life is not an export commodity.", "You press the host governments hard on worker protections. They resent the lecture and tighten a few quotas, but your workers gain a fraction more dignity and a state that speaks for them.", { GL: 4, EN: 6, FI: -6 }],
      ["Stay quiet to keep the jobs safe.", "The remittances feed millions; the dead cannot.", "You swallow the protest to keep the visas and remittances flowing. The billions keep coming, and so do the coffins, unremarked and unavenged.", { FI: 8, EN: -8, GL: -2 }])),

  // ── Recruitment syndicate ───────────────────────────────────────────────────
  ax("Manpower Bureau Chief", "fixer", ["migrants", "recruitment", "syndicate"],
    sx("Sir, urgent news. Bad groups charge poor people way too much money to find jobs far away. These bad groups are friends with your own government helpers.",
      ["Break up the bad groups and stop the high prices.", "A worker sold into debt is a citizen failed.", "You smash the cartel and cap recruitment fees. The party patrons who profited rage and threaten, but migration becomes survivable for the poor who stake everything on it.", { GL: 4, EN: 8, FI: -2, FA: -4 }],
      ["Protect the bad groups so they keep making money.", "The agencies place a million workers; do not break the machine.", "You leave the syndicate intact. The placements and the kickbacks flow, and the poorest keep mortgaging their land to brokers who deliver them to bondage.", { FI: 6, FA: 4, EN: -8 }])),

  // ── Bhasan Char relocation ──────────────────────────────────────────────────
  ax("Refugee Relief Commissioner", "relief", ["rohingya", "bhasan-char", "relocation"],
    sx("Sir, forgive me — You built a new mud island for homeless people, but experts say it's not safe from storms.",
      ["Move the people there right now anyway.", "The mainland camps are a powder keg I must defuse.", "You move tens of thousands to the island, easing the camps. The UN protests the flood-risk and the optics of an offshore camp, and one bad cyclone could turn it into a catastrophe.", { MI: 4, GL: -6, EN: -2 }],
      ["Wait for the experts to say it is completely safe.", "An island camp drowned would shame us forever.", "You hold the relocation pending safety guarantees. The mainland camps stay dangerously crowded, but you avoid being the government that marooned refugees on a sinking char.", { GL: 4, EN: 2, MI: -4 }])),

  // ── ICJ genocide case against Myanmar ───────────────────────────────────────
  ax("International Law Counsel", "ambassador", ["rohingya", "icj", "justice"],
    sx("A word, sir! The world court wants to punish the bad leaders next door for hurting people. If you join the court, the bad leaders will never take the homeless people back.",
      ["Join the court to punish the bad leaders.", "A crime this great demands we stand to be counted.", "You join the case to international acclaim and the refugees' gratitude. Naypyidaw freezes the repatriation talks in fury, and the million in the camps may now stay for a generation.", { GL: 8, EN: 4, RE: -4 }],
      ["Stay out of it so they might take people back.", "A courtroom victory that keeps a million in tents is no victory.", "You decline to join, preserving the fragile repatriation channel. The rights world is disappointed, but you keep the only door — however narrow — back to Myanmar open.", { GL: -2, MI: 2, FI: 2 }])),

  // ── Myanmar border clashes ──────────────────────────────────────────────────
  ax("Border Security Commander", "general", ["myanmar", "border", "spillover"],
    sx("Sir, we have a problem. Your neighbor's war is coming across your borders with bombs and fighters. Your army wants to stand strong and fight back.",
      ["Send your army to stand strong and fight back.", "Shells on my soil will be answered.", "You reinforce the border and return fire on incursions. The villages feel defended and the junta takes note, but the risk of a real border war with a chaotic neighbour climbs.", { MI: 8, GL: -4, EN: 2, FI: -2 }],
      ["Just talk to them nicely to try and stop it.", "I will not be dragged into Myanmar's civil war.", "You absorb the provocations and work the channels instead. The border stays tense and the villages exposed, but you avoid a second front no one could afford.", { GL: 4, MI: -4, EN: -2 }])),

  // ── Ukraine war UN vote ─────────────────────────────────────────────────────
  ax("UN Mission Ambassador", "ambassador", ["russia", "ukraine", "vote"],
    sx("Sir! The whole world is voting to tell Russia they are bad for starting a war. Russia is your friend and helps you with energy and food.",
      ["Vote to tell Russia they are bad.", "Aggression is aggression, whoever the friend.", "You side with the West and earn its warmth and a moral credit. Moscow remembers the slight, and the energy, grain, and nuclear files all turn a degree colder.", { GL: 6, RE: -4, FI: -2 }],
      ["Don't vote at all to stay friends with Russia.", "A small state does not pick fights between giants.", "You abstain, citing principle and self-interest. Moscow is grateful and the deals stay warm, but the West marks you down as a fence-sitter when it counted.", { RE: 4, FI: 4, GL: -6 }])),

  // ── Sanctions-busting energy deal ───────────────────────────────────────────
  ax("Energy Procurement Envoy", "fixer", ["russia", "sanctions", "energy"],
    sx("Mr. Prime Minister, sir! Russia offers you super cheap oil, but powerful countries say you are absolutely not allowed to buy it.",
      ["Buy the cheap oil anyway.", "Cheap fuel feeds my people; sanctions are not my law.", "You buy the discounted oil and fertiliser and the reserves breathe. Washington warns of secondary sanctions, and your banks grow nervous about being cut from the dollar system.", { FI: 8, RE: 4, GL: -8 }],
      ["Stay safe and do not buy the banned oil.", "A discount that severs me from the dollar is no bargain.", "You forgo the cheap supplies to stay onside with Washington and the banks. Fuel and fertiliser cost more, but your access to the global financial system is unthreatened.", { GL: 4, FI: -6 }])),

  // ── LDC graduation ──────────────────────────────────────────────────────────
  ax("Development Economist", "official", ["ldc", "graduation", "trade"],
    sx("Your Excellency! Your country is growing up and won't be called \"very poor\" anymore. This is proud, but it means you lose free help and cheap loans.",
      ["Be proud and stop taking the free help on time.", "A nation cannot stay a beggar to keep the alms.", "You proudly cross the threshold on time. The prestige is real, but the preferences and concessional loans fall away, and exporters face a harsher world unprepared.", { GL: 6, EN: 2, FI: -6 }],
      ["Beg to keep the free help a little longer.", "Pride that bankrupts the looms is vanity.", "You negotiate a longer runway to keep the preferences while you adapt. The graduation glory is deferred and some call it timid, but the export economy gets time to brace.", { FI: 4, GL: -2 }])),

  // ── Currency swap lifeline ──────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["reserves", "swap", "dependence"],
    sx("Prime Minister! You are running out of money. India offers to trade a huge amount of money with you, but they will have secret power over you.",
      ["Take their money to survive.", "Drowning men do not refuse a rope.", "The swap steadies the reserves and calms the markets. Your finances now carry a quiet IOU to a powerful neighbour, one that will be remembered at the next hard bargain.", { FI: 8, GL: -2, RE: 2 }],
      ["Say no and try to fix it yourself with harder rules.", "A rope with a leash on the end is a noose.", "You decline the swap and impose import curbs instead. The reserves stay perilously thin and the squeeze bites, but no foreign capital holds a lever over your treasury.", { FI: -6, GL: 2, EN: -4 }])),

  // ── Foreign-funding NGO crackdown ───────────────────────────────────────────
  ax("NGO Affairs Director", "official", ["ngos", "foreign-funding", "civil-society"],
    sx("Sir — A new rule lets you block money from going to groups that complain about you. It makes them quiet, but the world thinks this is very mean.",
      ["Block their money to make them quiet.", "Foreign money buys foreign mouths.", "You strangle the critical NGOs' funding and they wither. The domestic noise quiets, but Western capitals and donors recoil, and your aid relationships chill markedly.", { MI: 4, FA: 2, GL: -8, EN: -4 }],
      ["Let them have their money and keep complaining.", "A government afraid of NGOs is afraid of mirrors.", "You let the foreign-funded groups operate. They keep publishing inconvenient reports, but your standing with donors and the rights world holds, and civil society breathes.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Hajj quota diplomacy ────────────────────────────────────────────────────
  ax("Religious Affairs Envoy", "cleric", ["hajj", "saudi", "pilgrims"],
    sx("Honourable leader! A faraway country says more of your people can come pray, but you have to pick their side in a fight.",
      ["Pick their side to get more spots to pray.", "A larger Hajj quota is a gift to the whole nation's faith.", "You back Riyadh's position and the quota grows. The pilgrims and the pious are grateful, but you have tied yourself to a Gulf quarrel that is not yours.", { GL: 2, EN: 4, MI: 2, FI: -2 }],
      ["Stay out of the fight and keep the spots you have.", "I will not trade my foreign policy for pilgrim visas.", "You decline to be leveraged over the Hajj. The quota stays flat and some grumble, but your regional neutrality is intact and unbought.", { GL: 4, EN: -2 }])),

  // ── Arms procurement alignment ──────────────────────────────────────────────
  ax("Defence Procurement Chief", "general", ["arms", "china", "alignment"],
    sx("Sir, urgent news. You need weapons for your army. China sells them cheap, but America sells better ones with strict rules about being nice to people.",
      ["Buy the cheap weapons from China.", "A fleet I can afford beats one I cannot.", "You re-equip the forces cheaply and quickly. The military is grateful, but you have bound your defence supply chain — and your strategic posture — to Beijing for a generation.", { MI: 8, FI: 2, GL: -6 }],
      ["Buy the expensive ones from America with the strict rules.", "Better arms, and better company, are worth the price.", "You pay the premium and accept the conditions for superior Western systems. The budget groans and the strings chafe, but your alignment tilts toward the wider, richer bloc.", { GL: 6, MI: 4, FI: -8 }])),

  // ── Magnitsky-style visa bans ───────────────────────────────────────────────
  ax("Foreign Secretary", "ambassador", ["sanctions", "elites", "visas"],
    sx("Sir, forgive me — America is punishing your helpers because they think you cheated in an election.",
      ["Punish America back.", "An insult to my officials is an insult to the state.", "You expel diplomats and impose reciprocal curbs. The standoff hardens, your elite's foreign lives stay frozen, and the bilateral relationship sinks into open hostility.", { MI: 4, FA: 2, GL: -8, FI: -4 }],
      ["Fix your rules quietly so they stop punishing you.", "My ministers want their visas back more than their pride.", "You make quiet concessions on the worst abuses to ease the bans. The hardliners call it surrender, but the elite gets its foreign life back and the relationship thaws.", { GL: 6, EN: 4, FA: -4, MI: -2 }])),

  // ── COP / climate finance leadership ────────────────────────────────────────
  ax("Climate Diplomacy Envoy", "ambassador", ["climate", "cop", "leadership"],
    sx("A word, sir! You are at a big meeting about the earth getting too hot. You can demand big countries pay for the damage, but they might get mad.",
      ["Be loud and demand the money.", "Those who flooded us must pay to keep us afloat.", "You front the frontline nations' demand and win global moral stature. The big emitters you also court for investment bristle, and some doors quietly cool.", { GL: 6, EN: 4, FI: -2 }],
      ["Be quiet and polite to keep them happy.", "A loud demand wins applause; a quiet deal wins funds.", "You broker rather than berate, banking concrete pledges over headlines. The frontline activists wanted fire, but the adaptation money that actually arrives is larger for it.", { GL: 4, FI: 4, EN: 2 }])),

  // ── Diaspora voting rights ──────────────────────────────────────────────────
  ax("Expatriate Affairs Secretary", "official", ["diaspora", "voting", "remittances"],
    sx("Sir, we have a problem. Millions of your people live far away and send money home. They want to vote, but they might vote against you.",
      ["Let them vote from far away.", "Those who feed the nation may help choose it.", "You extend voting rights abroad to the diaspora's delight and the world's approval. They lean against you, so you have enfranchised a bloc that may help defeat you — a real democrat's gamble.", { GL: 6, EN: 4, MI: -4 }],
      ["Say no so they can't vote against you.", "I will not import an opposition by post.", "You keep the franchise within the borders. The diaspora feels used for its money and ignored for its voice, and the easy democratic credit goes unclaimed.", { MI: 2, FI: 2, GL: -4, EN: -2 }])),

  // ── Malaysia labour market reopening ────────────────────────────────────────
  ax("Manpower Bureau Chief", "fixer", ["malaysia", "migrants", "syndicate"],
    sx("Sir! Another country will let your workers in, but only if you use a bad group that charges workers too much money.",
      ["Use the bad group to get jobs fast.", "A reopened market on bad terms beats a closed one.", "The corridor reopens and the workers go, fleeced by the cartel. The remittances resume, the brokers grow fat, and the migrants carry crushing debts to chase the jobs.", { FI: 6, FA: 2, EN: -6, GL: -2 }],
      ["Say no and demand fair rules for the workers.", "I will not reopen a market only to sell my own people.", "You hold out for transparent recruitment and capped fees. The reopening is delayed and the brokers furious, but when the corridor opens it does not begin in debt bondage.", { EN: 6, GL: 2, FI: -4, FA: -4 }])),

  // ── ARSA militancy in the camps ─────────────────────────────────────────────
  ax("Camp Security Chief", "shadow", ["rohingya", "militancy", "drugs"],
    sx("Mr. Prime Minister, sir! There are bad gangs and danger in the homeless camps. A guard wants to sweep the camps with force, but helpers want to do it nicely.",
      ["Use strong force to clean the camps.", "A camp ruled by gunmen rules itself.", "You flood the camps with a heavy crackdown. The gangs scatter and the killings dip, but mass detentions and abuses draw the agencies' alarm, and the grievances feeding the militancy deepen.", { MI: 8, GL: -6, EN: -4 }],
      ["Work nicely with the helpers to stop the gangs.", "You cannot raid a camp into peace.", "You work with the refugees and agencies on community security. It is slow and the violence ebbs unevenly, but the camps do not curdle into an open war you would have to own.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Vaccine diplomacy ───────────────────────────────────────────────────────
  ax("Health Diplomacy Envoy", "doctor", ["vaccines", "china", "west"],
    sx("Your Excellency! You need medicine fast. China will give it now if you act like their best friend, but other countries will take longer.",
      ["Take China's fast medicine.", "A dose in the arm beats a promise in a queue.", "The Chinese doses arrive and the inoculation drive surges. Lives are saved and Beijing's goodwill banked, and the West notes which way you turned in the crisis.", { EN: 8, GL: -2, FI: -2 }],
      ["Wait for the other countries.", "I will not let a pandemic redraw my alliances.", "You hold out for the Western and COVAX supply to keep your alignment even. The doses come slower, lives are lost in the wait, but you owe Beijing no debt of gratitude.", { GL: 2, EN: -6 }])),

  // ── UN Security Council seat bid ────────────────────────────────────────────
  ax("UN Mission Ambassador", "ambassador", ["unsc", "prestige", "campaign"],
    sx("Prime Minister! You can get a special, famous seat at a big world meeting. It costs a lot of money and forces you to pick sides in fights.",
      ["Try to win the special seat.", "A seat at the great table is worth the price of the chair.", "You win the prestige seat after a costly campaign. The flag flies high, but every crisis vote now forces you off the fence and onto someone's bad side.", { GL: 8, FI: -6, MI: -2 }],
      ["Don't try for the seat and stay out of fights.", "A seat that forces me to choose is a trap with a nameplate.", "You forgo the campaign. The prestige goes to a rival, but you keep your purse and your prized ability to take no public side in the giants' quarrels.", { FI: 4, GL: -4 }])),

  // ── India defence line of credit ────────────────────────────────────────────
  ax("Defence Cooperation Envoy", "general", ["india", "defence", "credit"],
    sx("Sir — Your neighbor offers a lot of money to buy their army gear. The gear is just okay, and they will control you more.",
      ["Take their money and buy their gear.", "A neighbour's arms come with a neighbour's friendship.", "You sign the credit and re-equip from India. The partnership deepens and Delhi is pleased, but your forces grumble at the middling gear and the dependence it locks in.", { GL: 6, MI: 2, FI: 2 }],
      ["Say no and buy gear from other places.", "I will not arm my forces from one neighbour's catalogue.", "You pass on the tied credit to keep your suppliers varied. Delhi is mildly slighted, but your military avoids a one-source dependence on equipment it does not rate.", { MI: 4, GL: -4 }])),

  // ── Data localisation vs Big Tech ───────────────────────────────────────────
  ax("Digital Sovereignty Adviser", "official", ["data", "big-tech", "sovereignty"],
    sx("Honourable leader! You can force big internet companies to keep people's data in your country so you can see it. They might leave if you do.",
      ["Force them to let you see the data.", "Our citizens' data should live under our law.", "You force localisation and gain a surveillance trove. The platforms throttle some services in protest, and Western capitals add 'digital authoritarian' to their dossier on you.", { MI: 6, FI: 2, GL: -6, EN: -2 }],
      ["Let them keep the data private and safe.", "A surveillance windfall is not worth the world's distrust.", "You leave the platforms unburdened. You forgo the surveillance prize, but the services stay full and the West has one less stick to beat you with.", { GL: 6, EN: 2, MI: -4 }])),

  // ── Chittagong port transit for India ───────────────────────────────────────
  ax("Connectivity Negotiator", "ambassador", ["india", "transit", "port"],
    sx("Sir, urgent news. Your neighbor wants to drive their delivery trucks through your land. You can charge them money, but people will say you sold your country.",
      ["Let them drive through and charge money.", "A neighbour's cargo is a tollbooth's treasure.", "You open the corridor and the transit fees flow. The economic logic is sound, but the nationalists brand you a vassal, and you have handed Delhi a strategic artery through your land.", { FI: 8, GL: 4, MI: -4 }],
      ["Say no to keep your land private.", "Some doors, once opened, never close again.", "You decline the transit deal. The fees are forgone and Delhi disappointed, but you keep a strategic card in hand and the nationalists off your back.", { MI: 4, GL: -4, FI: -4 }])),

  // ── Cyber attack attribution ────────────────────────────────────────────────
  ax("Cyber Security Chief", "shadow", ["cyber", "attack", "attribution"],
    sx("Sir, forgive me — A bad country stole your country's money using computers. You know who did it.",
      ["Tell everyone loudly who stole it.", "A theft this brazen must be answered in daylight.", "You publicly attribute the heist and demand redress. The world rallies to your side, but the accused state denies all and retaliates, and the diplomatic and cyber fronts both heat up.", { GL: 4, MI: 2, FI: -2 }],
      ["Try to get the money back quietly without a fight.", "Shouting at the thief will not refill the vault.", "You work the back channels and the courts to claw the money back without a public rupture. Less is recovered than hoped, but you avoid a confrontation you cannot win.", { FI: 2, GL: 2, MI: -2 }])),

  // ── Sri Lanka debt lesson ───────────────────────────────────────────────────
  ax("Debt Sustainability Adviser", "official", ["debt", "default", "imf"],
    sx("A word, sir! A nearby country ran out of money. Banks want you to stop spending so much to prove you are safe, but people like your big projects.",
      ["Stop spending money and check your debts.", "Better the medicine now than the collapse later.", "You rein in the borrowing and audit the books before the lenders panic. The mega-projects stall and the public feels the squeeze, but you steer clear of the cliff your neighbour went over.", { FI: 4, GL: 4, EN: -6, RE: -2 }],
      ["Keep spending money to keep people happy.", "A stalled crane is a confession of weakness.", "You keep borrowing to sustain the building boom. The skyline keeps rising and the optics dazzle, but the debt mounts toward the very precipice your neighbour just demonstrated.", { RE: 4, FI: -6, EN: 2 }])),

  // ── BIMSTEC / regional leadership ───────────────────────────────────────────
  ax("Regional Affairs Envoy", "ambassador", ["bimstec", "saarc", "leadership"],
    sx("Sir, we have a problem. You can join a new group of neighbor countries and be the leader, but it means leaving out an old enemy.",
      ["Join the new group and be the leader.", "A living forum beats a frozen one.", "You lead the new grouping and gain regional stature. It tilts you toward India's vision of the region and quietly buries the old bloc that gave smaller states a counterweight.", { GL: 6, FI: 2, MI: -2 }],
      ["Try to fix the old group so everyone is included.", "A region whole is stronger than a region halved.", "You push to thaw and revive SAARC, Pakistan and all. The effort mostly stalls against the India–Pakistan wall, but you keep faith with a broader regional idea and Islamabad warms to you.", { GL: 2, FI: -2 }])),

  // ── WTO pharma patent waiver ────────────────────────────────────────────────
  ax("Trade and Health Envoy", "doctor", ["pharma", "patents", "exports"],
    sx("Sir! Your country makes cheap medicine for poor people. Rich countries want to stop this.",
      ["Fight the rich countries to keep making cheap medicine.", "Cheap medicine for the poor is worth a quarrel with the rich.", "You champion the waiver extension and the global south cheers. Western pharma and their capitals push back hard, but your generic industry and the patients it serves keep their lifeline.", { GL: 4, EN: 6, FI: 2 }],
      ["Stop making cheap medicine to make the rich countries happy.", "A quarrel with the pharma powers is a quarrel I cannot win.", "You let the waiver lapse to keep Western goodwill. The pharma giants are pleased, but your generic exporters lose ground and millions across the south face costlier drugs.", { GL: 2, FI: -4, EN: -6 }])),

  // ── Foreign election démarche ───────────────────────────────────────────────
  ax("Foreign Secretary", "ambassador", ["election", "demarche", "legitimacy"],
    sx("Mr. Prime Minister, sir! Other countries warn you to have a fair election, or they will punish you.",
      ["Tell them to mind their own business.", "No foreign envoy dictates my elections.", "You publicly dress down the ambassadors for meddling. The nationalist base roars approval, but the Western capitals harden, and trade, aid, and visa pressure all tighten in response.", { MI: 4, FA: 2, GL: -8, FI: -2 }],
      ["Let them watch the election quietly.", "A little daylight now spares a deluge later.", "You concede some observation without ceremony. The hardliners mutter about foreign overlords, but the relationships hold and the next vote carries less of a credibility cloud.", { GL: 6, EN: 2, MI: -2 }])),

  // ── Teesta: China's offer to build ──────────────────────────────────────────
  ax("River Basin Negotiator", "ambassador", ["teesta", "china", "india"],
    sx("Your Excellency! China offers to fix a big river. India will be very angry if you let China build things near their border.",
      ["Let China fix the river.", "If a friend will not share the water, another will manage it.", "You take Beijing's offer and the river works begin. The water problem eases and China gains a foothold on India's doorstep, and Delhi reads it as a strategic betrayal.", { RE: 8, FI: 4, GL: -6 }],
      ["Say no and wait to make a deal with India.", "I will not plant a rival on the river to spite a friend.", "You decline the Chinese project to keep Delhi from panicking. The water-sharing treaty stays stalled and the dry-season fields stay thirsty, but you avoid a strategic rupture.", { GL: 2, RE: -6, EN: -2 }])),

  // ── Pushed-back 'infiltrators' ──────────────────────────────────────────────
  ax("Border Affairs Secretary", "ambassador", ["india", "citizenship", "pushback"],
    sx("Prime Minister! Your neighbor is pushing poor people over the border into your land, calling them your people.",
      ["Take the people in quietly.", "A quarrel with Delhi costs more than a few thousand souls.", "You absorb the pushed-back without protest to keep Delhi placid. The relationship stays smooth, but you have tacitly accepted being a dumping ground for a neighbour's citizenship politics.", { GL: 2, EN: -6, FI: -2 }],
      ["Yell at your neighbor loudly in front of the world.", "I will not be the bin for Delhi's citizenship purge.", "You take the pushbacks to the international stage and refuse the stateless. Delhi is angered and the border tenses, but you draw a clear line that these are not yours to absorb.", { GL: 2, MI: 2, EN: 2, FI: -2 }])),

  // ── Indian Ocean island diplomacy ───────────────────────────────────────────
  ax("Maritime Diplomacy Envoy", "ambassador", ["indian-ocean", "small-states", "balance"],
    sx("Sir — A tiny island country asks you to team up to stop big countries from bossing you both around. This might make the big countries mad.",
      ["Team up with the tiny island.", "Many small voices can outweigh one large one.", "You help forge the small-states bloc and gain leverage and goodwill among peers. The great powers note your organising of resistance to their basing, and cool by a degree.", { GL: 4, MI: 2, FI: -2 }],
      ["Stay out of it and handle the big countries alone.", "A small state bargains best alone, not in a chorus.", "You decline the bloc and keep your dealings one-on-one. You preserve flexibility with the giants, but forgo the collective weight that might have protected you all.", { GL: 2, FI: 2 }])),

  // ── Akhaura–Agartala rail link ──────────────────────────────────────────────
  ax("Connectivity Negotiator", "ambassador", ["india", "rail", "integration"],
    sx("Honourable leader! You can build a train track to connect to a giant neighbor. It helps business but makes you need them more.",
      ["Build the train track fast.", "Steel rails carry prosperity both ways.", "You push the rail link through and trade and goodwill flow. The economy knits tighter to India's, and the nationalists warn, loudly, that every sleeper laid is a step toward satellite status.", { FI: 6, GL: 4, MI: -2 }],
      ["Build the train track very slowly.", "I will connect at my own pace, not Delhi's.", "You let the rail diplomacy crawl. The trade windfall is deferred and Delhi grows impatient, but you keep control of the pace and the nationalists quiet.", { MI: 2, GL: -2, FI: -2 }])),

  // ── Regional counter-terror cooperation ─────────────────────────────────────
  ax("Counter-Terror Liaison", "general", ["terrorism", "intelligence", "cooperation"],
    sx("Sir, urgent news. After a scary attack, big countries want to train your police and share secrets. This lets them see how your police work.",
      ["Let them train your police.", "I will take every weapon against the bombers.", "You open the doors to foreign intelligence cooperation. Your counter-terror capacity leaps, but foreign services now sit inside your security apparatus, privy to far more than terror cells.", { MI: 6, GL: 6, FI: -2 }],
      ["Keep them away to protect your secrets.", "A partner inside my secrets is a master in waiting.", "You accept only arms-length cooperation. Your agencies stay sovereign and opaque, but you forgo the intelligence depth that might have stopped the next attack.", { MI: 2, GL: -2 }])),

  // ── 54 shared rivers framework ──────────────────────────────────────────────
  ax("River Basin Negotiator", "ambassador", ["rivers", "india", "treaty"],
    sx("Sir, forgive me — Many rivers come from your neighbor, and they control the water. You can ask for one giant deal for all rivers, or just fix one river at a time.",
      ["Ask for one giant deal for all rivers.", "Piecemeal deals leave most rivers hostage.", "You demand a grand framework covering all the shared rivers. It is the right ask and it stalls against Delhi's reluctance, leaving you with ambition and little water to show.", { GL: 2, RE: -2 }],
      ["Just fix one river at a time.", "A bird in hand on one river beats a treaty on fifty.", "You focus on a couple of achievable river-sharing deals. The grand vision is deferred, but you actually secure flows on the rivers that matter most this season.", { RE: 6, GL: 2, FI: -2 }])),

  // ── G20 / great-power outreach ──────────────────────────────────────────────
  ax("Summit Diplomacy Adviser", "ambassador", ["g20", "outreach", "prestige"],
    sx("A word, sir! You are invited to a giant world party with powerful leaders. But you have to promise not to complain about the host's bad rules.",
      ["Go to the party and stay quiet.", "A seat among the great is worth a held tongue.", "You take the prestigious stage and swallow your usual critique. The photo-op elevates your standing, but the cause you championed feels quietly abandoned for a place at the table.", { GL: 6, FI: 2, EN: -4 }],
      ["Don't go so you can keep complaining.", "A platform bought with my principles is a trap.", "You skip the summit rather than mute yourself. You forgo the prestige and the host's favour, but keep faith with the cause and the credibility it lends you elsewhere.", { GL: 2, EN: 4, FI: -2 }])),

  // ── Bay-of-Bengal blue economy ──────────────────────────────────────────────
  ax("Blue Economy Envoy", "ambassador", ["maritime", "blue-economy", "investment"],
    sx("Sir, we have a problem. You own ocean water. Many big countries want to explore it. You can pick just one to do everything, or let many of them try.",
      ["Pick just one country to explore the ocean.", "One committed patron develops faster than a crowd.", "You hand one power broad exclusive rights and the investment pours in fast. Your waters develop quickly, and one foreign navy's friends now know your seabed better than you do.", { FI: 8, RE: 4, GL: -6 }],
      ["Let many countries explore it together.", "No single flag should own my sea.", "You parcel access among several partners and keep the data shared. Development is slower and messier, but no one power gains a monopoly on your maritime future.", { GL: 4, RE: 2, FI: -2 }])),

  // ── Pakistan 1971 apology demand ────────────────────────────────────────────
  ax("Foreign Secretary", "ambassador", ["pakistan", "1971", "reconciliation"],
    sx("Sir! An old enemy wants to trade and be nice again, but they won't say sorry for a very bad war.",
      ["Demand they say sorry first.", "There is no trade route over an unmarked grave.", "You make the 1971 apology a precondition. Islamabad bristles and the thaw stalls, but you honour the three million dead and the survivors who will not let them be bargained away.", { EN: 4, GL: 2, FI: -2 }],
      ["Forget the past and trade with them.", "The living need trade more than the dead need apology.", "You park the apology and pursue trade and ties. The commerce flows and the relationship warms, and the survivors and the families of the martyrs feel their history quietly sold.", { FI: 4, GL: 2, EN: -6 }])),

  // ── Stranded Biharis ────────────────────────────────────────────────────────
  ax("Refugee Affairs Secretary", "relief", ["biharis", "stateless", "1971"],
    sx("Mr. Prime Minister, sir! Many people are stuck in old camps from a war long ago. No country wants them. You can make them citizens of your country, or leave them stuck.",
      ["Make them citizens and welcome them.", "A people stateless for fifty years is a wound left open.", "You confer full citizenship and fund integration. Some nationalists grumble about the old enemy's kin, but a half-century of statelessness ends and the camps begin to empty into ordinary life.", { EN: 8, GL: 6, FA: -2 }],
      ["Leave them stuck in the camps.", "Their loyalty in '71 is not so easily forgotten.", "You leave the camps and the limbo untouched. The nationalists are satisfied, and three generations go on stateless in the squalor, a grievance and a shame with no expiry.", { FA: 2, EN: -6, GL: -4 }])),

  // ── Kuwait MP-bribery scandal ───────────────────────────────────────────────
  ax("Expatriate Welfare Director", "ambassador", ["gulf", "corruption", "trafficking"],
    sx("Your Excellency! A leader from your team got put in jail in another country for doing bad things to poor workers.",
      ["Kick him off your team and punish him at home.", "A trafficker with my party's badge shames us all.", "You strip him of his seat and open a home prosecution. The party loses a member and faces the embarrassment squarely, but you signal that even your own answer for trafficking the desperate.", { GL: 6, EN: 6, FA: -6 }],
      ["Secretly protect him because he is on your team.", "I do not abandon my own to a foreign court.", "You protect his seat and his interests at home. The party closes ranks, and the spectacle of a shielded trafficker-MP becomes a global symbol of the rot you tolerate.", { FA: 4, MI: 2, EN: -8, GL: -8 }])),

  // ── Mediterranean migrant tragedy ───────────────────────────────────────────
  ax("Migration Affairs Envoy", "relief", ["migrants", "mediterranean", "trafficking"],
    sx("Prime Minister! A boat sank far away, and many of your people died trying to sneak into rich countries.",
      ["Spend money to stop the bad guys who sneak people on boats.", "My citizens drown because no honest door is open.", "You go after the trafficking networks and negotiate legal migration channels with Europe. It is costly and slow, but the death route loses customers as a real door, however narrow, opens.", { EN: 8, GL: 4, FI: -4 }],
      ["Just say you are sad and do nothing else.", "I cannot police every desperate boat to Europe.", "You mourn publicly and act little. The traffickers keep filling their boats, the bodies keep washing up on distant shores, and each tragedy is met with the same hollow statement.", { FI: 2, EN: -8, GL: -2 }])),

  // ── Brahmaputra upstream dam ────────────────────────────────────────────────
  ax("Transboundary Water Envoy", "ambassador", ["china", "brahmaputra", "water"],
    sx("Sir — A big country is building a giant dam that could stop your river's water. You can yell at them, or talk to them nicely.",
      ["Yell at them and demand a water deal.", "A hand on my river's tap is a hand at my throat.", "You demand a binding water-sharing and flood-data treaty. Beijing resents the pressure and concedes little, but you put the issue on the record and rally regional concern around it.", { GL: 4, RE: 2, FI: -2 }],
      ["Talk to them quietly and nicely.", "One does not shout at the giant who holds the dam.", "You raise it softly and avoid antagonising Beijing. The relationship stays smooth, and the dam rises ungoverned, leaving your north hostage to a sluice gate in another country.", { GL: 2, RE: -4, EN: -2 }])),

  // ── Global minimum corporate tax ────────────────────────────────────────────
  ax("Tax Treaty Negotiator", "ambassador", ["oecd", "tax", "sovereignty"],
    sx("Honourable leader! Rich countries want everyone to make businesses pay the same amount of tax. If you agree, you can't offer cheap taxes to invite new businesses anymore.",
      ["Agree to the new tax rule.", "A race to the bottom on tax is a race I lose anyway.", "You sign on and gain a share of multinational tax and a seat at the rule-making table. Your tax-holiday lure is blunted, and some footloose investors look to holdout jurisdictions instead.", { GL: 6, FI: 4, EN: 2 }],
      ["Keep your cheap taxes to invite businesses.", "A small economy needs every lure it has.", "You keep your tax holidays and stay outside the deal. You retain a tool to attract investment, but you are cast as a holdout, and the multinational tax you might have captured flows elsewhere.", { FI: 2, GL: -4 }])),

  // ── International Mother Language soft power ─────────────────────────────────
  ax("Cultural Diplomacy Envoy", "ambassador", ["language", "unesco", "soft-power"],
    sx("Sir, urgent news. You can spend a lot of money to teach the world about your country's language day, but some say you should save the money.",
      ["Spend the money to share your language.", "A nation remembered for a gift to humanity punches above its weight.", "You fund the institutes and scholarships worldwide. The cost is real, but a small nation buys outsized goodwill and recognition as the patron of linguistic diversity.", { GL: 6, EN: 2, FI: -4 }],
      ["Keep the celebration small and save money.", "Soft power is a luxury a thin budget cannot buy.", "You keep the day a modest annual ceremony. The budget is spared, and a rare chance to project the country as a global cultural benefactor goes largely unspent.", { FI: 2, GL: -2 }])),

  // ── ILO labour-convention ratification ──────────────────────────────────────
  ax("Labour Diplomacy Officer", "ambassador", ["ilo", "labour", "trade"],
    sx("Sir, forgive me — Buyers want you to promise that kids won't work in factories and workers can complain. Factory owners say this will ruin them.",
      ["Agree to the rules to help the workers.", "A market kept is worth a union allowed.", "You ratify the conventions and begin enforcing them. The factory-owner donors fume about unions and oversight, but the export markets stay open and the workers gain rights long denied.", { GL: 6, EN: 6, FI: 2, FA: -4 }],
      ["Say no because it's your country's business.", "I will not let Geneva run my factories.", "You decline to ratify, framing it as sovereignty. The owners are pleased and the floor stays controlled, but the buyers grow wary and the market access you depend on starts to wobble.", { FA: 4, MI: 2, GL: -6, FI: -4 }])),

  // ── Climate-migration global compact ────────────────────────────────────────
  ax("Climate Diplomacy Envoy", "ambassador", ["climate-migration", "compact", "recognition"],
    sx("A word, sir! The ocean is rising, and people will lose their homes. You can lead a team asking for help for \"climate refugees,\" but it sounds like you are giving up your land.",
      ["Lead the team and ask for help for refugees.", "Those the sea displaces must have somewhere to go.", "You champion legal status and resettlement for climate refugees. The moral leadership is real and the donors approve, and you accept the hard admission that parts of your own coast are doomed.", { GL: 6, EN: 4, FI: -2 }],
      ["Don't use the word \"refugee\" and ask for money to build walls instead.", "To plan for retreat is to announce defeat.", "You steer clear of the climate-refugee cause, unwilling to concede the coast is lost. You keep up a defiant face, but the millions who will be displaced gain no legal door, and the world's attention drifts.", { GL: 2, EN: -4 }])),

  // ── Onion-export ban shock ──────────────────────────────────────────────────
  ax("Commerce Envoy to Delhi", "ambassador", ["india", "onions", "food-security"],
    sx("Sir, we have a problem. Your neighbor stopped selling you onions, and now they are too expensive. People are very mad.",
      ["Beg your neighbor to sell you onions again.", "The fastest onion is the nearest one.", "You secure a quiet exemption from Delhi and the prices ease. The crisis passes, and you owe a favour and have proved, again, how a single neighbour's whim can empty your kitchens.", { FI: 4, GL: 2, EN: 2, MI: -4 }],
      ["Grow your own onions and buy from others.", "A kitchen hostage to one neighbour is a kitchen unfree.", "You rush imports from elsewhere and fund domestic onion storage and production. The fix is slower and pricier this season, but you start breaking a dependence that Delhi weaponises at will.", { RE: 2, MI: 2, FI: -4, EN: -2 }])),

  // ── Insurgent camps across the border ───────────────────────────────────────
  ax("Security Cooperation Envoy", "general", ["india", "insurgents", "extradition"],
    sx("Sir! Your neighbor says bad guys who attack them are hiding in your country. They want you to catch them.",
      ["Catch the bad guys and give them to your neighbor.", "A neighbour's enemies need not be my guests.", "You raze the camps and extradite the insurgents. Delhi is delighted and rewards you richly, and at home some decry doing India's bidding while the handed-over face uncertain justice.", { GL: 8, MI: 2, EN: -2, FI: 2 }],
      ["Refuse to do your neighbor's dirty work.", "I will not hunt another's rebels to earn a smile.", "You decline the crackdown. Delhi is angered and goodwill cools, but you avoid the role of a neighbour's gendarme and the domestic backlash that comes with it.", { MI: 2, GL: -6 }])),

  // ── Gulf domestic-worker abuse ──────────────────────────────────────────────
  ax("Expatriate Welfare Director", "people", ["gulf", "housemaids", "abuse"],
    sx("Mr. Prime Minister, sir! Maids who work in other countries are getting hurt. You can stop women from going there, but they won't make money.",
      ["Stop women from going until it is safe.", "I will not export my daughters into bondage.", "You halt domestic-worker migration to the worst state pending real protections. Recruiters and the remittance lobby howl, but you force the host to negotiate and stop feeding women into abuse.", { EN: 8, GL: 2, FI: -6, FA: -2 }],
      ["Let them keep going so they can make money.", "The money these women send feeds whole villages.", "You keep the corridor open. The remittances keep flowing and the recruiters stay happy, and the coffins and the broken keep coming home, unprotected and unavenged.", { FI: 6, EN: -8 }])),

  // ── Zero-cost migration policy ──────────────────────────────────────────────
  ax("Manpower Bureau Chief", "ambassador", ["migration", "recruitment-cost", "reform"],
    sx("Your Excellency! Poor workers have to pay bad bosses a lot of money just to get a job in another country. You can make rules so the company pays instead.",
      ["Make the company pay instead of the worker.", "A worker should not pay to be employed.", "You push hard for employer-funded recruitment with destination states. The broker industry and its party patrons rage, but workers stop mortgaging their land to chase a job abroad.", { EN: 8, GL: 4, FI: -2, FA: -4 }],
      ["Let the bad bosses keep charging the workers.", "The broker industry is too entwined to break.", "You leave the worker-pays system intact. The brokers and their patrons prosper, and the poorest keep selling everything they own for the privilege of working abroad.", { FA: 4, FI: 2, EN: -6 }])),

  // ── WTO fisheries-subsidies deal ────────────────────────────────────────────
  ax("Trade Negotiator", "ambassador", ["wto", "fisheries", "subsidies"],
    sx("Prime Minister! The world wants to stop giving money to fishers, to save the fish in the ocean. But your poor fishers need that money.",
      ["Agree, but ask to keep helping your poorest fishers.", "Curb the trawlers, shield the small boats.", "You sign the deal while fighting for an exemption for your small-scale fishers. The industrial subsidy race is curbed and your waters get respite, and the artisanal fleet keeps its modest support.", { GL: 6, RE: 4, EN: 2, FI: -2 }],
      ["Refuse to stop helping your fishers.", "I will not sign away my fishers' bread for a global rule.", "You decline the deal to protect every subsidy. Your fishers keep all their support, but the global overfishing race grinds on, your standing dips, and your own waters keep emptying.", { FI: 2, RE: -4, GL: -4 }])),

  // ── Bangabandhu satellite / space diplomacy ─────────────────────────────────
  ax("Space Programme Director", "official", ["satellite", "technology", "prestige"],
    sx("Sir — You can buy a second satellite for space. It looks cool but costs tons of money and gives power to the country that launches it.",
      ["Buy the cool space satellite.", "A nation in orbit is a nation that has arrived.", "You commission the satellite. The prestige is real and the flag flies in space, but the cost is staggering for the return, and the foreign launch partner banks quiet leverage over you.", { GL: 4, FI: -6, RE: 2 }],
      ["Don't buy the satellite.", "Pride in orbit is a poor return on a poor nation's crores.", "You shelve the satellite as vanity. The prestige is forgone and rivals crow, but the crores go to needs on the ground with a return you can actually measure.", { FI: 4, GL: -2 }])),

  // ── Rohingya repatriation pilot ─────────────────────────────────────────────
  ax("Refugee Affairs Secretary", "ambassador", ["rohingya", "repatriation", "myanmar"],
    sx("Honourable leader! Another country will take a few homeless people back, but won't promise to keep them safe. The people are too scared to go.",
      ["Force the few people to go back anyway.", "A first batch home is a process begun.", "You press the reluctant pilot forward for the optics of progress. Few or none actually go, the refugees protest being pushed toward danger, and the hollow gesture collapses under its own emptiness.", { GL: 2, MI: 2, EN: -6 }],
      ["Wait until they are promised safety.", "I will not send them back to the knife to claim a headline.", "You refuse the hollow pilot and insist on genuine guarantees. Repatriation stalls and the camps stay full, but you do not herd the persecuted back toward the persecution they fled.", { EN: 6, GL: 4, FI: -2 }])),

  // ── Commonwealth / NAM positioning ──────────────────────────────────────────
  ax("Multilateral Affairs Envoy", "ambassador", ["non-aligned", "blocs", "positioning"],
    sx("Sir, urgent news. Do you want to be friends with poorer countries and be their hero, or be friends with rich countries who have all the money?",
      ["Be friends with the poorer countries.", "Among equals I lead; among giants I follow.", "You invest in the non-aligned and developing-nation groupings and emerge a southern leader. The moral standing and solidarity are real, and the Western capital you also court eyes you a touch more coolly.", { GL: 4, EN: 2, FI: -2 }],
      ["Be friends with the rich countries.", "Leadership of the poor pays less than membership of the rich.", "You tilt toward the wealthy Western blocs and their markets and capital. The investment flows, and the global south you once led notes your drift toward the giants' table.", { FI: 4, GL: 2, EN: -2 }])),

  // ── Antimicrobial-resistance global push ────────────────────────────────────
  ax("Health Diplomacy Envoy", "doctor", ["amr", "health", "global"],
    sx("Sir, forgive me — People take too much medicine when they aren't sick, making super-bugs that can't be stopped. You can spend money to teach people to stop.",
      ["Spend money to stop the super-bugs.", "A superbug bred here is a plague loosed on the world.", "You fund prescription controls, farm-antibiotic limits, and surveillance. The cost and the pushback from pharmacies and farmers are real, but you win global credit and slow a gathering catastrophe.", { GL: 6, EN: 6, FI: -4 }],
      ["Ignore the bugs because it's too much work.", "There are diseases killing my people today.", "You spend the money on present, visible illness instead. The wards are tended now, and the country goes on breeding the resistant strains that will, in time, make those wards far harder to fill safely.", { EN: 2, FI: -2, GL: -2 }])),

  // ── Saudi madrasa funding ───────────────────────────────────────────────────
  ax("Religious Affairs Envoy", "cleric", ["saudi", "funding", "ideology"],
    sx("A word, sir! Rich countries offer to build schools and places to pray, but they will teach very strict, scary rules.",
      ["Take the money and let them teach the strict rules.", "Generosity from the holy land is not lightly refused.", "You welcome the funding and the mosques and madrasas multiply. The Gulf ties warm and the treasury is spared the cost, and a harder, imported orthodoxy spreads at the expense of the local syncretic faith.", { FI: 4, GL: 2, EN: -6 }],
      ["Say no to their money and their strict rules.", "I will not import a harsher creed with a cheque.", "You turn down the conditional money. The Gulf cools a degree and the religious institutions stay underfunded, but the country's gentler religious traditions are not bought out from under it.", { EN: 4, GL: -2, FI: -2 }])),

  // ── Joint river commission revival ──────────────────────────────────────────
  ax("River Basin Negotiator", "ambassador", ["india", "rivers", "commission"],
    sx("Sir, we have a problem. The rivers you share with a neighbor are drying up. You can spend money to study the rivers together, but it takes a long time.",
      ["Spend money to study and fix the rivers together.", "Rivers shared must be governed together or ruined apart.", "You push to resurrect genuine joint management with data-sharing and basin planning. Progress depends on Delhi and comes slowly, but the framework for governing the shared rivers begins to function again.", { GL: 4, RE: 4, FI: -2 }],
      ["Do nothing and let the rivers dry up.", "A commission that needs Delhi's heart cannot be forced to beat.", "You leave the commission as a ceremonial shell. No diplomatic capital is spent on a likely-futile revival, and the shared rivers go on running dry and flooding ungoverned.", { GL: -2, RE: -4 }])),

  // ── Deportation-cooperation deal ────────────────────────────────────────────
  ax("Migration Affairs Envoy", "ambassador", ["deportation", "europe", "returns"],
    sx("Sir! Faraway countries will let more of your people work there, but only if you agree to take back anyone they kick out quickly.",
      ["Agree to take everyone back quickly.", "A legal door open is worth a back door I must accept.", "You sign, and the legal quotas and aid flow. You also accept rushed returns of people, some perhaps not even yours, and the deportees' grievances and the dubious identifications become your problem.", { GL: 4, FI: 4, EN: -4 }],
      ["Say no because they might kick out the wrong people.", "I will not take back people no one can prove are mine.", "You decline the readmission terms. The legal quotas and aid stall, but you do not accept the dumping of un-vetted deportees, sparing yourself a stream of disputed, embittered returnees.", { EN: 2, GL: -4, FI: -2 }])),

  // ── Cyclone-warning regional cooperation ────────────────────────────────────
  ax("Disaster Diplomacy Officer", "ambassador", ["disaster", "regional", "warning"],
    sx("Mr. Prime Minister, sir! You can make a deal to share storm warnings and help with neighbors. But this means sharing your secrets with them.",
      ["Share secrets to save lives in a storm.", "A storm respects no border; nor should the warning.", "You join the pact and the shared warnings and relief save lives across the bay. You also host foreign assets and share sensitive coastal data, a security trade-off you judge worth the lives.", { GL: 6, EN: 6, MI: -2 }],
      ["Keep your secrets and handle storms alone.", "Shared weather data is shared coastal intelligence.", "You keep your disaster systems national and your coastal data close. Security is protected, but you forgo the shared warnings and pooled relief that would have blunted the next great storm.", { MI: 2, EN: -4, GL: -2 }])),

  // ── Vaccine / genome data sharing ───────────────────────────────────────────
  ax("Health Diplomacy Envoy", "doctor", ["pandemic", "data-sharing", "sovereignty"],
    sx("Your Excellency! A new rule asks you to share your sickness secrets so the world can make medicine. But rich countries might keep the medicine for themselves.",
      ["Share your secrets to help the world.", "A virus shared early is a vaccine shared fairly.", "You sign and share your pathogen data promptly, banking guaranteed access to countermeasures. You trust a system that has favoured the rich before, and gain a seat to push it toward fairness.", { GL: 6, EN: 4, FI: 2 }],
      ["Don't share until they promise you get the medicine too.", "I shared my samples last time and queued for vaccines anyway.", "You refuse to share without ironclad access guarantees, remembering past betrayals. You protect your leverage, but you are cast as obstructing the global response and risk being last in the queue again.", { MI: 2, GL: -4, EN: -2 }])),

  // ── Hajj-management reform ──────────────────────────────────────────────────
  ax("Religious Affairs Envoy", "cleric", ["hajj", "management", "corruption"],
    sx("Prime Minister! Bad travel agents are stealing money from people going on big religious trips. You can make a new government computer system to stop them.",
      ["Make the new computer system to protect the people.", "A pilgrim cheated on the way to Mecca is a sin the state allowed.", "You bring in a transparent, digital Hajj system and break the fraudulent agencies. The cartel fights bitterly, but pilgrims stop being stranded and fleeced, and the country's name is restored before the faithful.", { EN: 6, GL: 4, FA: -4 }],
      ["Let the bad travel agents keep doing what they do.", "The agency men are pillars of the pious vote.", "You leave the cartel in place. The agency-linked vote stays loyal, and every season fresh stories of stranded, swindled pilgrims humiliate the country before the Saudis and the faithful.", { FA: 4, EN: -6, GL: -2 }])),

  // ── Extradition treaty with India ───────────────────────────────────────────
  ax("Foreign Secretary", "ambassador", ["india", "extradition", "fugitives"],
    sx("Sir — A neighbor wants to trade runaway criminals with you. This helps you catch thieves, but they might ask you to give back innocent people.",
      ["Agree to trade criminals with them.", "My looters who fled across the border must come home.", "You sign and reclaim some fugitive looters. You also bind yourself to return whomever Delhi names, dissidents and refugees included, and own the cases where the label does not fit the crime.", { GL: 6, FI: 2, EN: -4 }],
      ["Only agree to a very careful, safe deal.", "An extradition net with no exceptions catches the innocent.", "You hold out for a narrow treaty with political and refugee safeguards. Fewer of your fugitives return and Delhi grumbles, but you do not become a conveyor belt for a neighbour's political cases.", { GL: 2, EN: 2 }])),

  // ── Inland-water transit fees ───────────────────────────────────────────────
  ax("Connectivity Negotiator", "ambassador", ["india", "river-transit", "fees"],
    sx("Honourable leader! A neighbor wants to ship boxes on your rivers. You can charge them a lot of money, or let them do it cheap to be nice.",
      ["Charge them a lot of money to use your rivers.", "My rivers carry their cargo at my price, not their convenience.", "You price the river transit fairly and tie cooperation to water-sharing progress. Delhi grumbles at the cost and the linkage, but you turn a favour into leverage and a revenue stream.", { FI: 4, GL: 2, RE: 2 }],
      ["Let them use the rivers cheap to be nice.", "A neighbour's gratitude is worth more than a toll.", "You grant the transit cheaply to warm relations. Delhi is pleased and the goodwill banked, and you have given away both revenue and a rare piece of leverage for a smile.", { GL: 4, FI: -2 }])),

  // ── Green Climate Fund access ───────────────────────────────────────────────
  ax("Climate Finance Envoy", "ambassador", ["climate-fund", "access", "capacity"],
    sx("Sir, urgent news. There is free money for the environment, but you have to do hard paperwork and show you are honest to get it.",
      ["Do the hard paperwork to get the free money.", "Money left on the table is adaptation left undone.", "You invest in the accreditation, project pipelines, and transparency the global funds demand. The build is costly and slow, but it unlocks a steady stream of climate finance far larger than any handout.", { GL: 4, EN: 4, FI: -4 }],
      ["Don't do the paperwork and ask friends for money instead.", "Why jump through hoops when friends give freely?", "You skip the demanding accreditation and lean on bilateral aid. The easy money comes with strings and ends with the giver's mood, and the larger pooled climate funds stay locked beyond your reach.", { FI: 2, GL: -2, EN: -2 }])),

  // ── Carbon-credit sales ─────────────────────────────────────────────────────
  ax("Climate Markets Officer", "ambassador", ["carbon-credits", "forests", "revenue"],
    sx("Sir, forgive me — You can sell the clean air from your forests to dirty countries for money. But people might say you are letting them pollute.",
      ["Sell the clean air for money.", "Let the world's polluters pay to keep my forests standing.", "You sell the credits and the conservation revenue flows. The forests gain a funded guardian, and your future land-use options narrow as foreign buyers now hold a claim on their carbon.", { FI: 4, EN: 4, RE: 2, GL: 2 }],
      ["Keep your forests and don't sell the clean air.", "I will not mortgage my forests' future to a polluter's ledger.", "You keep the carbon rights unsold and your land options open. The conservation revenue is forgone, and the forests must be protected, if at all, from your own thinner budget.", { RE: 2, EN: 2, FI: -2 }])),

  // ── International Solar Alliance ─────────────────────────────────────────────
  ax("Energy Diplomacy Envoy", "ambassador", ["solar", "alliance", "technology"],
    sx("A word, sir! You can join a solar power team for cheap energy, but you have to be best friends with the giant country running it.",
      ["Join the solar team and be their best friend.", "Cheap sun and shared tech outweigh a partner's pout.", "You join and gain solar finance, technology, and green standing. The alliance's leading power is pleased, and your other great-power partner reads the tilt and lets its displeasure be felt elsewhere.", { GL: 2, RE: 4, EN: 2, FI: 2 }],
      ["Join a little bit but keep your distance.", "I will take the sun without taking sides.", "You cooperate selectively without full alignment, preserving your balance. You gain less finance and tech, but neither great power can claim you have chosen its rival's camp.", { GL: 2, RE: 2 }])),

  // ── IMO shipping-emissions rules ────────────────────────────────────────────
  ax("Maritime Affairs Envoy", "ambassador", ["shipping", "emissions", "industry"],
    sx("Sir, we have a problem. New rules say boats must be super clean. It is good for the world, but it will cost your boat builders a lot of money.",
      ["Follow the clean boat rules early.", "A clean fleet is the only fleet with a future.", "You adopt the standards ahead of the curve. The shipping and breaking industries groan at the retooling cost, but you position the country as a clean-maritime leader rather than a dirty laggard.", { GL: 4, EN: 4, FI: -4 }],
      ["Ask to break the rules because you are a poorer country.", "The rich greened on dirty growth; let me grow first.", "You push for a carve-out to protect the cheap, dirty industry a while longer. The industry breathes, and the country is cast among the polluters resisting a cleaner sea.", { FI: 2, EN: -4, GL: -2 }])),

  // ── Nurse / skilled-migration pact ──────────────────────────────────────────
  ax("Skilled Migration Envoy", "ambassador", ["nurses", "skilled-migration", "brain-drain"],
    sx("Sir! Rich countries want to take your nurses to work for them. The nurses will make money, but your own sick people will have no one to help them.",
      ["Let the nurses go to the rich countries.", "A trained nurse abroad sends home what ten clinics cannot earn.", "You sign and your nurses gain good foreign jobs and send back remittances. The income and goodwill are real, and your own short-staffed wards lose the very hands they trained and needed.", { FI: 6, GL: 4, EN: -6 }],
      ["Make the nurses stay home to help your sick people.", "I will not export the nurses my own sick are dying for.", "You cap the skilled outflow to keep nurses at home. The wards stay better staffed, but the foreign jobs and remittances are forgone and the trained chafe at being held back.", { EN: 6, FI: -4, GL: -2 }])),

  // ── Body-repatriation and migrant insurance ─────────────────────────────────
  ax("Expatriate Welfare Director", "relief", ["migrants", "death", "insurance"],
    sx("Mr. Prime Minister, sir! When workers die far away, their families have to pay to bring them home. You can use the country's money to pay for this instead.",
      ["Use the country's money to bring them home.", "A worker who died earning for the nation comes home with dignity.", "You build the scheme covering repatriation and a death payout. The cost is real and ongoing, but grieving families are spared ruin, and the migrants who power the economy are honoured in death.", { EN: 8, GL: 2, FI: -4 }],
      ["Make the families pay for it themselves.", "An open-ended burial fund is a bottomless line.", "You leave the costs to the bereaved. The budget is protected, and families already shattered by loss are crushed further by the bill to bring their dead and their breadwinner home.", { FI: 4, EN: -6 }])),

  // ── Tipaimukh-style upstream dam ────────────────────────────────────────────
  ax("Transboundary Water Envoy", "ambassador", ["india", "dam", "downstream"],
    sx("Your Excellency! A neighbor is building a dam that will dry up your river and kill your fish. You can fight them loudly, or try to get a little bit of the water quietly.",
      ["Fight them loudly to stop the dam.", "A dam that drowns my downstream is no neighbour's right.", "You take the fight to Delhi and the international forums. The relationship strains and the dam may proceed anyway, but you put downstream rights on the record and rally regional and global concern.", { GL: 2, RE: 2, EN: 2, FI: -2 }],
      ["Ask them quietly for a share of the water.", "If the dam is coming, let me draw water and power from it.", "You negotiate quietly for irrigation and power shares rather than opposing the dam. You gain some benefit and Delhi's warmth, and your downstream region's losses are traded for a manageable cut.", { RE: 2, GL: 2, EN: -2 }])),

  // ── War-reparations claim on Pakistan ───────────────────────────────────────
  ax("International Law Counsel", "ambassador", ["pakistan", "reparations", "1971"],
    sx("Prime Minister! You can ask a big court to make an old enemy pay for a war from long ago. It is fair, but it will make them very angry.",
      ["Ask the court to make them pay.", "A debt of blood and treasure unpaid is a debt still owed.", "You file the formal claims. Survivors and historians cheer the long-overdue reckoning, Islamabad erupts and blocks you in regional forums, and a fifty-year-old account is finally pressed.", { EN: 4, GL: 2, FI: 2 }],
      ["Forget about the old war and move on.", "A claim that wins nothing but Islamabad's wrath is a luxury.", "You let the reparations question lie. Regional diplomacy stays smoother and Islamabad calmer, and the survivors learn their reckoning is, once again, deferred for the convenience of statecraft.", { GL: 2, EN: -4 }])),

  // ── RCEP / mega-trade bloc ──────────────────────────────────────────────────
  ax("Trade Strategy Envoy", "ambassador", ["rcep", "trade-bloc", "competition"],
    sx("Sir — You can join a giant club where countries sell things to each other for free. It could ruin your own small stores because foreign things are cheaper.",
      ["Join the giant selling club.", "Outside the bloc is outside the future of trade.", "You join and your exporters gain access to colossal markets. The cheap imports also pour in, and domestic industries not yet competitive buckle, forcing a wrenching, painful adjustment.", { GL: 4, FI: 2, EN: -4 }],
      ["Stay out and protect your own stores.", "I will not throw my factories into the deep before they can swim.", "You delay joining to protect and prepare domestic industry. The home producers get breathing room, but your exporters miss the bloc's vast markets and you risk being left outside the regional trade order.", { EN: 2, FI: -2, GL: -2 }])),

  // ── Cyber-norms / lethal-autonomy at the UN ─────────────────────────────────
  ax("Disarmament Envoy", "ambassador", ["cyber", "autonomous-weapons", "norms"],
    sx("Honourable leader! Small countries want to stop bad robot weapons. You can help lead them, or stay quiet just in case you want to buy those weapons later.",
      ["Lead the team to stop the robot weapons.", "A small state's shield is the rule of law.", "You champion the norms against cyber-attacks and autonomous weapons. You win moral standing among the vulnerable, and you forswear, on the record, capabilities you might one day have wanted.", { GL: 6, EN: 2 }],
      ["Stay quiet so you can buy them later.", "Norms bind the weak while the strong build the weapons.", "You stay silent to preserve your future options. You keep every capability on the table, and you forgo the standing and solidarity that leading the cause would have brought.", { MI: 2, GL: -2 }])),

  // ── Maldives / small-neighbour rivalry ──────────────────────────────────────
  ax("Indian Ocean Envoy", "ambassador", ["maldives", "neighbours", "influence"],
    sx("Sir, urgent news. A tiny island country wants to be friends to protect themselves from big countries. The big countries won't like it.",
      ["Be friends with the tiny island.", "Many small friends balance one large rival.", "You forge the partnership and gain a foothold and an ally in the giant's backyard. Your regional weight grows, and the great power whose sphere you have entered marks the intrusion.", { GL: 4, MI: 2, FI: -2 }],
      ["Stay away to keep the big countries happy.", "A small state caught between giants chooses neither's quarrel.", "You decline to entangle yourself in the island's great-power tug-of-war. You keep your balance and your calm, and forgo the influence the partnership would have bought.", { GL: 2, MI: 2 }])),

  // ── ICAO / aviation-safety rating ───────────────────────────────────────────
  ax("Aviation Diplomacy Officer", "ambassador", ["aviation", "safety-rating", "flights"],
    sx("Sir, forgive me — Experts say your airplanes aren't safe. They will ban them unless you fire the bad safety bosses and fix the rules.",
      ["Fire the bosses and fix the rules.", "A grounded flag carrier is a humiliation in the sky.", "You rebuild the aviation regulator to international standard. The cost is real and the aviation cronies lose their cosy arrangements, but the carrier keeps its prized Western routes and the country its credibility.", { GL: 6, FI: -4, FA: -2 }],
      ["Do nothing and let them ban your airplanes.", "A full regulatory overhaul is a budget I would rather spend elsewhere.", "You decline the costly overhaul. The cronies keep their arrangements, the carrier is barred from the lucrative routes, and the downgrade becomes a standing mark against the country's competence.", { FA: 2, FI: 2, GL: -6 }])),

  // ── Diaspora cultural diplomacy ─────────────────────────────────────────────
  ax("Cultural Diplomacy Envoy", "ambassador", ["diaspora", "soft-power", "culture"],
    sx("A word, sir! You can spend money to build places in other countries to show off your art and songs. Some people say you should spend that money on roads instead.",
      ["Spend the money to show off your art.", "A nation that tells its own story abroad is never small.", "You fund the cultural centres worldwide. The diaspora is bound closer and the country's soft power grows, at a cost the hawks resent for a return measured in decades of goodwill.", { GL: 4, EN: 2, FI: -4 }],
      ["Don't spend the money on art.", "Soft power is cold comfort to a patient in an unbuilt ward.", "You keep cultural outreach modest and spend at home. The wards and roads benefit, and a chance to project the nation's heritage and bind its diaspora goes largely untaken.", { EN: 2, FI: 2, GL: -2 }])),

  // ── Coastal-shipping agreement ──────────────────────────────────────────────
  ax("Maritime Trade Negotiator", "ambassador", ["india", "coastal-shipping", "trade"],
    sx("Sir, we have a problem. You can make a deal to let your neighbor's ships deliver things right to your docks to save money, but they might take over your ocean jobs.",
      ["Make the deal to save money.", "Cheaper freight floats every boat.", "You sign and freight costs fall as direct sailings begin. Trade quickens, and the nationalists warn that your coastal commerce now rides increasingly on a giant's hulls and goodwill.", { FI: 4, GL: 2, EN: 2, MI: -2 }],
      ["Say no to protect your own ocean jobs.", "A coast served by foreign ships is a coast half-owned.", "You decline to open coastal shipping, protecting your own carriers. Freight stays dearer and trade slower, but the coastal trade and the fleet that serves it stay in your own hands.", { MI: 2, FI: -2, GL: -2 }])),

  // ── D-8 / developing-nation leadership ──────────────────────────────────────
  ax("Multilateral Affairs Envoy", "ambassador", ["d8", "developing-nations", "leadership"],
    sx("Sir! A group of countries wants you to be their leader. It makes you look strong, but you will have to deal with all their fights.",
      ["Become the leader of the group.", "Leadership among peers is leverage among giants.", "You take the lead and gain prestige and south-south trade links. You also inherit the bloc's quarrels, and your Western partners note your warmer embrace of members they distrust.", { GL: 4, FI: 2, EN: -2 }],
      ["Just be a quiet member of the group.", "A crown in a quarrelsome bloc is a headache with a title.", "You keep a low profile in the grouping. You avoid its internal feuds and keep your Western partners easy, and forgo the prestige and the trade-deepening the leadership would have brought.", { GL: 2, FI: -2 }])),

  // ── Foreign-preacher visas ──────────────────────────────────────────────────
  ax("Religious Affairs Envoy", "cleric", ["preachers", "visas", "ideology"],
    sx("Mr. Prime Minister, sir! Famous speakers are coming from far away to talk to big crowds. Some of them teach scary, mean rules that scare your people.",
      ["Let anyone come and speak.", "The faithful will not be denied their teachers.", "You keep the doors open to the foreign preachers. The devout are gratified and the crowds vast, and a harder, imported orthodoxy spreads, and the minorities and moderates grow quietly uneasy.", { FA: 2, EN: -6, GL: -2 }],
      ["Stop the scary, mean speakers from coming.", "A pulpit for hire to extremism is a pulpit I must watch.", "You screen the visiting preachers and bar the hardliners. The devout grumble at the gatekeeping and the hardliners cry persecution, but the country's pluralist faith and its minorities keep their breathing room.", { EN: 4, GL: 2, FA: -4 }])),

  // ── Ganges treaty renewal ───────────────────────────────────────────────────
  ax("River Basin Negotiator", "ambassador", ["india", "ganges", "treaty"],
    sx("Your Excellency! An old deal about sharing river water is almost over, and your neighbor isn't giving you enough water. You can fight for a better deal or just keep the bad one.",
      ["Fight your neighbor for a better water deal.", "A treaty that delivers less than it promises is a drought with a signature.", "You push hard for improved, enforceable terms and guaranteed dry-season flows. Delhi resists and the talks grind, but you refuse to renew a deal that has left your fields parched in the lean months.", { RE: 4, GL: -2, EN: 2 }],
      ["Keep the bad deal so they stay happy.", "A flawed treaty kept beats a quarrel that dries the river entirely.", "You renew the existing terms to preserve the relationship. Delhi is pleased and the broader ties stay warm, and your dry-season farmers keep making do with flows that fall short of even the promised minimum.", { GL: 4, RE: -4, EN: -2 }])),

  // ── Citizenship-by-investment scheme ────────────────────────────────────────
  ax("Investment Diplomacy Officer", "shadow", ["citizenship", "investment", "security"],
    sx("Prime Minister! You can sell passports to rich foreigners for a lot of money. But bad criminals might buy them to hide in your country.",
      ["Sell the passports for money.", "A passport is an asset; let the rich buy it.", "You sell citizenship to wealthy foreigners and capital flows in. So do fugitives, launderers, and sanctioned money buying a clean new identity, and the scheme becomes a global money-laundering byword.", { FI: 6, GL: -4, MI: -2 }],
      ["Say no and do not sell passports.", "A nationality for sale is a border for sale.", "You refuse to sell citizenship. The quick capital is forgone, but you do not turn your passport into a laundering instrument for the world's fugitives and dirty money.", { GL: 2, MI: 2, FI: -2 }])),

  // ── BSF border-killing diplomacy ────────────────────────────────────────────
  ax("Border Diplomacy Envoy", "ambassador", ["india", "border-killings", "diplomacy"],
    sx("Sir — Your neighbor's guards keep shooting your people at the border. You can yell at them loudly, or send quiet letters that don't do much.",
      ["Yell at them loudly so everyone hears.", "My citizens' blood will not be a footnote to friendship.", "You raise the border killings loudly in every forum and summit. Delhi bristles and ties strain, but the public sees a government that will not let its dead be swept under the diplomatic rug.", { EN: 6, GL: -2, MI: 2 }],
      ["Send quiet letters so you don't start a big fight.", "A loud quarrel costs more than it saves the dead.", "You confine your protest to private channels. The relationship stays smooth, the killings continue unchanged, and the public reads your quiet as the price you put on their lives.", { GL: 4, EN: -6 }])),

  // ── REDD+ forest-protection finance ─────────────────────────────────────────
  ax("Climate Finance Envoy", "ambassador", ["redd", "forests", "communities"],
    sx("Honourable leader! A group will pay you money if you promise not to chop down your forests. You can share the money with the people living there, or keep it for the government.",
      ["Share the money with the people living in the forest.", "Pay to protect, and pay those who live by the trees.", "You take the REDD+ money and route benefits to the forest communities who guard the trees. The monitoring is demanding, but conservation gains funding and the communities a stake rather than an eviction.", { EN: 6, RE: 4, FI: 2, GL: 2 }],
      ["Keep the money for the government.", "The carbon is the state's to sell.", "You take the REDD+ funds but keep control central, sidelining the communities. The money flows and the auditors are satisfied on paper, and the resentful, excluded forest-dwellers undermine the very protection you are paid for.", { FI: 4, RE: -2, EN: -2 }])),

  // ── Arms Trade Treaty accession ─────────────────────────────────────────────
  ax("Disarmament Envoy", "ambassador", ["arms-trade", "treaty", "standing"],
    sx("Sir, urgent news. You can sign a rule to stop selling bad weapons, which makes you look good. But it means your army can't make secret weapon deals anymore.",
      ["Sign the rule to stop selling bad weapons.", "A nation that signs for restraint is trusted with arms.", "You accede and gain standing as a responsible state. The security establishment loses some of its murkier procurement and re-export latitude, and grumbles, but your international credibility grows.", { GL: 6, MI: -2 }],
      ["Say no so your army can keep its secrets.", "Treaties bind the buyer while the sellers profit.", "You stay outside the treaty. The security establishment keeps its opaque arms dealings, and you forgo the standing that accession would have lent you in the disarmament forums.", { MI: 2, GL: -4 }])),

  // ── Indian-Ocean Rim chairmanship ───────────────────────────────────────────
  ax("Maritime Diplomacy Envoy", "ambassador", ["iora", "chairmanship", "prestige"],
    sx("Sir, forgive me — You are asked to host a huge, expensive party for countries near the ocean. It makes you look important, but it puts you right in the middle of big fights.",
      ["Host the huge party and be the boss.", "He who chairs the table shapes the meal.", "You take the chair and host a flagship summit. You shape the maritime agenda and gain prestige, at real cost, and find yourself squarely in the middle of the great powers' oceanic rivalry.", { GL: 6, FI: -4, MI: -2 }],
      ["Say no because it's too expensive.", "A chair in a contested sea is a seat in a crossfire.", "You pass on the chairmanship. You save the cost and avoid the great-power crossfire, and the platform and prestige go to a rival who will shape the agenda without you.", { FI: 2, GL: -2 }])),

  // ── Genocide-recognition campaign ───────────────────────────────────────────
  ax("International Law Counsel", "ambassador", ["1971", "genocide", "recognition"],
    sx("A word, sir! You can start a big campaign to make the world remember a terrible war from long ago. It will cost a lot of money and make your old enemy very mad.",
      ["Start the campaign to remember the war.", "Three million dead deserve the world's acknowledgment.", "You mount the global recognition campaign. It is slow and costly and Pakistan and its friends resist, but parliaments begin to recognise the genocide, and the martyrs gain the world's record of their murder.", { EN: 6, GL: 2, FI: -2 }],
      ["Leave the past alone.", "A decades-long crusade for a word costs more than it wins.", "You set the campaign aside as a costly distraction. Diplomacy stays smoother, and the survivors and the descendants of the dead watch the world's acknowledgment deferred yet again.", { GL: 2, EN: -4 }])),

  // ── Camp ration cuts / donor fatigue ────────────────────────────────────────
  ax("Refugee Affairs Secretary", "relief", ["rohingya", "rations", "donors"],
    sx("Sir, we have a problem. The world is running out of money to feed the homeless people in your camps. You can use your own money to feed them, or let them go hungry.",
      ["Yell for help and use your own money to feed them.", "Starving the stateless on my soil is a famine I would own.", "You launch a high-profile appeal and divert scarce funds to keep rations up. The budget strains and the world is shamed into some giving, and the camps are pulled back from hunger you would have answered for.", { EN: 6, GL: 4, FI: -6 }],
      ["Let the food run out and let them go hungry.", "I cannot feed the world's refugees from my own thin granary.", "You let the cuts bite. The budget is spared, and hunger, desperation, and militancy rise in the camps, the suffering and its security fallout both landing on your doorstep.", { FI: 4, EN: -6, MI: -2 }])),

  // ── Third-country resettlement ──────────────────────────────────────────────
  ax("Refugee Affairs Secretary", "ambassador", ["rohingya", "resettlement", "burden"],
    sx("Sir! Rich countries say they will take a tiny handful of the homeless people. They want to look like heroes, leaving you with the rest.",
      ["Say thank you and let the tiny handful go.", "A thousand resettled is a thousand fewer mouths.", "You accept the modest resettlement gratefully. A few thousand find new homes abroad, the rich nations bank their virtue, and you are left thanking them for taking a sliver of the burden they helped create.", { GL: 2, EN: 2 }],
      ["Say it's not enough and demand they take more.", "A million on my soil is not eased by a gesture.", "You accept the offer but loudly demand far greater resettlement and funding. The donors bristle at being pushed, but you refuse to let a token gesture pass for the burden-sharing the crisis actually demands.", { GL: 2, EN: 2, FI: -2 }])),

  // ── Peacekeeper-conduct scandal ─────────────────────────────────────────────
  ax("Peacekeeping Affairs Officer", "general", ["peacekeeping", "scandal", "discipline"],
    sx("Mr. Prime Minister, sir! Your soldiers acting as peacekeepers in another country did very bad things to the people there.",
      ["Check what happened fairly and punish the bad soldiers.", "A blue helmet that preys on the protected shames the flag.", "You order a transparent investigation and court-martial the guilty. The army resents the exposure, but the UN's trust and your peacekeeping standing are preserved by being seen to police your own.", { GL: 6, EN: 4, MI: -4 }],
      ["Hide the truth to protect your soldiers.", "I do not hand my soldiers to a foreign scandal.", "You shield the accused and stonewall the inquiry. The army is grateful, and the unaddressed abuses leak anyway, staining the peacekeeping record and threatening the role and the income it brings.", { MI: 4, FA: 2, EN: -4, GL: -6 }])),

  // ── Myanmar sanctions and jade trade ────────────────────────────────────────
  ax("Sanctions Policy Envoy", "ambassador", ["myanmar", "sanctions", "trade"],
    sx("Your Excellency! The world is blocking your bad neighbor from trading. You can join the block, or let your businessmen sneak stuff over the border to make money.",
      ["Block the trade to follow the world's rules.", "I will not bankroll the generals who emptied my camps.", "You enforce the sanctions and choke the border trade. Your businessmen who profited from it howl, but you align with the world against the junta and deny it the revenue that fuels its cruelty.", { GL: 6, EN: 2, FI: -4, FA: -2 }],
      ["Let the secret trading keep happening.", "My traders' profits are not Myanmar's politics.", "You keep the quiet trade open. Your businessmen prosper and the border stays busy, and you are seen propping up the very junta whose persecution flooded you with a million refugees.", { FI: 4, FA: 2, GL: -6 }])),

  // ── Nepal transit and trade ─────────────────────────────────────────────────
  ax("Connectivity Negotiator", "ambassador", ["nepal", "transit", "trade"],
    sx("Prime Minister! A country with no oceans wants to use your docks to ship things. But they have to cross through a grumpy giant neighbor's land first to get to you.",
      ["Make the deal and try to help them.", "Two small neighbours together weigh more than apart.", "You strike the transit deal with Nepal, building solidarity and trade. The arrangement leans on Indian cooperation you must court, and Delhi watches the small-neighbour bonding with a wary eye.", { GL: 4, FI: 2, RE: 2, MI: -2 }],
      ["Say no to keep things simple.", "A partnership that needs Delhi's blessing is Delhi's to veto.", "You keep the Nepal relationship modest to avoid antagonising India. You forgo the trade and solidarity, but you do not provoke the giant whose territory every route must cross.", { GL: 2, MI: 2, FI: -2 }])),

  // ── Rupee/yuan trade settlement ─────────────────────────────────────────────
  ax("Central Bank Diplomacy Officer", "ambassador", ["currency", "de-dollarisation", "trade"],
    sx("Sir — To save money, you can start paying big neighbors with their own special coins instead of standard world dollars. This makes them more powerful over you.",
      ["Start using their special coins.", "A dollar saved is a crisis postponed.", "You shift major trade to local-currency settlement and ease the dollar drain. You also tie your trade to a neighbour's and a rival's currencies and goodwill, and Washington notes the de-dollarising tilt.", { FI: 6, RE: 2, GL: -4 }],
      ["Stick to using regular world dollars.", "A pivot off the dollar is a pivot toward a new master.", "You keep trade in dollars to preserve flexibility and Washington's ease. The dollar crunch keeps biting, but you avoid binding your commerce to a neighbour's currency and the leverage it would grant.", { GL: 2, FI: -4 }])),

  // ── High-seas biodiversity treaty ───────────────────────────────────────────
  ax("Ocean Affairs Envoy", "ambassador", ["high-seas", "biodiversity", "treaty"],
    sx("Honourable leader! There is a new rule to keep the deep ocean clean and safe. If you sign it, you can't fish out there if you ever want to.",
      ["Sign the rule to protect the deep ocean.", "A healthy global ocean laps on my shores too.", "You sign and gain green standing and a seat in ocean governance. You take on obligations and forgo some future distant-water options, betting that a protected global ocean serves you in the end.", { GL: 6, RE: 2, EN: 2 }],
      ["Don't sign it so you can fish there later.", "A treaty on far seas is a constraint I need not adopt.", "You decline to sign for now. You keep your distant-water options unconstrained, and forgo the green standing and the governing voice the treaty would have brought.", { RE: 2, GL: -2 }])),

  // ── Basel hazardous-waste / shipbreaking ────────────────────────────────────
  ax("Environment Diplomacy Officer", "ambassador", ["basel", "shipbreaking", "waste"],
    sx("Sir, urgent news. New rules say you have to handle old, broken ships safely because they are toxic. Your ship breakers don't want to spend the money to be safe.",
      ["Make them follow the safe, clean rules.", "A beach of asbestos and oil is no foundation for an industry.", "You adopt the standards ahead of requirement. The shipbreaking industry groans at the cost of safe toxic-handling, but the workers stop dying of poison and the country sheds its 'world's dirtiest beach' label.", { GL: 4, EN: 6, FI: -4 }],
      ["Ignore the rules so it stays cheap.", "The yards employ thousands the rules would idle.", "You resist the standards to keep the yards cheap. The industry and its jobs are protected, and the beaches stay toxic, the workers keep dying, and the country stays the destination for the world's poison ships.", { FI: 4, EN: -8, GL: -4 }])),

  // ── ASEAN dialogue-partner status ───────────────────────────────────────────
  ax("Regional Affairs Envoy", "ambassador", ["asean", "dialogue-partner", "engagement"],
    sx("Sir, forgive me — You can try to join a rich group of countries far away, which takes a lot of hard work, or just stick to your normal neighbors.",
      ["Work hard to join the faraway rich group.", "My future trade and my refugee crisis both run east.", "You commit to the long courtship of the eastern bloc. The effort is demanding, but it opens a path to its markets and a stronger platform to press Myanmar on the refugees it sent you.", { GL: 4, FI: 2, EN: 2 }],
      ["Just stick to your normal neighbors.", "I will master my own region before courting another.", "You concentrate on your immediate neighbourhood. The eastern markets and the ASEAN platform on Myanmar stay out of reach, but your diplomatic energy is not stretched across two regions at once.", { GL: 2, FI: -2 }])),

  // ── CITES wildlife-trade controls ───────────────────────────────────────────
  ax("Wildlife Diplomacy Officer", "ambassador", ["cites", "trafficking", "enforcement"],
    sx("A word, sir! Bad guys are sneaking rare animals like tigers through your country. The world will punish you unless you stop the bad guys, who have powerful friends.",
      ["Stop the bad guys to save the animals.", "A nation that traffics its neighbours' tigers earns the world's contempt.", "You enforce hard against the trafficking transit trade. The connected smuggling networks fight back, but you dodge the sanctions and shed the reputation as the smugglers' favourite corridor.", { GL: 6, EN: 4, FA: -4 }],
      ["Ignore the bad guys and risk being punished.", "The networks have patrons I cannot cross lightly.", "You make a cosmetic effort and the trafficking flows on. The connected networks stay protected, the monitors impose trade penalties, and the country's name stays mud in the conservation world.", { FA: 2, GL: -6, EN: -2 }])),

  // ── Bhutan trade and hydropower ─────────────────────────────────────────────
  ax("Regional Trade Envoy", "ambassador", ["bhutan", "trade", "hydropower"],
    sx("Sir, we have a problem. A tiny, friendly country wants to share clean electricity with you. But the wires have to cross the grumpy giant neighbor's land.",
      ["Try to share electricity with the friendly country.", "Clean current from a friendly hill is worth the dance with Delhi.", "You forge the partnership and clean Bhutanese power and trade begin to flow. The warmth is real, and so is the deepened reliance on the Indian grid and goodwill every watt must cross.", { GL: 4, RE: 4, EN: 2, MI: -2 }],
      ["Keep the deal small so the giant neighbor doesn't care.", "Another route through Delhi is another leash in Delhi's hand.", "You keep the Bhutan relationship small. You forgo the clean power and the friendly ties, and avoid adding one more India-dependent link to a chain you already find too tight.", { MI: 2, RE: -2, GL: -2 }])),

  // ── IMF SDR / reserve allocation ────────────────────────────────────────────
  ax("External Finance Secretary", "ambassador", ["imf", "sdr", "reserves"],
    sx("Sir! The world bank just gave you a giant pile of free money. You can save it for an emergency, or spend it all right now to make people happy.",
      ["Save the money for an emergency.", "Free reserves are a wall against the next storm.", "You hold the windfall as reserves. The buffer steadies the currency and reassures lenders, and critics ask why a poor country sits on idle money while needs go unmet.", { FI: 6, GL: 2, EN: -2 }],
      ["Spend it right now to make people happy.", "Idle reserves feed no one; spent ones build.", "You convert the windfall into visible projects and relief. The public feels the benefit and the development is real, and the buffer that might have cushioned the next currency shock is gone.", { EN: 6, FI: -4 }])),

  // ── UN special envoy on Myanmar ─────────────────────────────────────────────
  ax("Multilateral Affairs Envoy", "ambassador", ["myanmar", "un", "diplomacy"],
    sx("Mr. Prime Minister, sir! A leader wants you to host a big meeting to help the homeless people. It makes you look like a hero, but it will be very hard and might fail.",
      ["Host the meeting and try to help.", "The crisis is on my soil; the solution should run through my hands.", "You host the envoy's talks and throw your weight behind the process. You gain the world's gratitude and a central role, and you stake real diplomatic capital on a process that may yet collapse.", { GL: 6, EN: 2, FI: -2 }],
      ["Say no and let someone else do it.", "I will not own a failure the great powers will not fund.", "You cooperate minimally with the envoy. You preserve your capital for surer gains, and forgo the central role and the credit, leaving the stalled crisis to drift without your push.", { GL: 2, EN: -2 }])),

  // ── Statelessness convention ────────────────────────────────────────────────
  ax("International Law Counsel", "ambassador", ["statelessness", "convention", "rights"],
    sx("Your Excellency! You can sign a rule that says you must protect people who have no country at all. It is kind, but it means you can never make them leave.",
      ["Sign the rule to protect them.", "A person with no nation is a wound on every nation.", "You accede and commit to protecting the stateless. The humanitarian credit is real, and you tie your own hands on integration questions your hardliners would rather keep open and deniable.", { GL: 6, EN: 4, FA: -2 }],
      ["Don't sign the rule.", "A binding commitment on the stateless is a politics I cannot control.", "You decline to accede, keeping your discretion on the stateless. You avoid the binding obligations and the domestic fights, and forgo the standing that accession would have lent you.", { FA: 2, GL: -4, EN: -2 }])),

  // ── Plastics treaty negotiation ─────────────────────────────────────────────
  ax("Environment Diplomacy Officer", "ambassador", ["plastics", "treaty", "industry"],
    sx("Prime Minister! The world is making a rule to stop making so much plastic trash. You can join the group stopping plastic, or help the plastic makers in your country.",
      ["Join the group to stop plastic trash.", "A planet choking on plastic chokes my rivers first.", "You join the bloc demanding hard production caps. You win green standing and align with the future, and your domestic plastics industry warns of the cost of the limits you have embraced.", { GL: 4, EN: 6, FI: -2 }],
      ["Help your plastic makers instead.", "I will not cap an industry that employs and earns for me.", "You join the resisters protecting the plastics industry. The industry is shielded and the jobs held, and the country is counted among those blocking a treaty its own choked rivers desperately need.", { FI: 2, EN: -4, GL: -2 }])),

  // ── Loss-and-damage fund board seat ─────────────────────────────────────────
  ax("Climate Diplomacy Envoy", "ambassador", ["loss-and-damage", "fund", "leadership"],
    sx("Sir — There is a new bank that gives money for climate damage. You can fight hard to be on the board that controls the money, or just wait in line to ask for some.",
      ["Fight to be a boss on the board.", "A hand on the tap directs the water.", "You win the board seat after a hard campaign. You gain influence over who gets the climate money and a chance to steer it toward frontline nations like yours, and inherit the rivalries of the role.", { GL: 6, EN: 2, FI: 2 }],
      ["Just wait in line and ask for money.", "Better a clean applicant than a conflicted gatekeeper.", "You skip the board contest and focus on drawing funds as an applicant. You avoid the politics and rivalries, and forgo the influence to shape where the world's climate reparations actually flow.", { EN: 2, GL: -2 }])),

  // ── Seafarer welfare / flag registry ────────────────────────────────────────
  ax("Maritime Labour Officer", "people", ["seafarers", "labour", "shipping"],
    sx("Honourable leader! Your sailors on big ships get treated terribly by bad captains. You can sign a rule to protect them, but the ship owners will complain it costs too much.",
      ["Sign the rule to protect your sailors.", "A sailor abandoned at a foreign port is a citizen failed at sea.", "You ratify the maritime labour convention and build real seafarer protections. The agents grumble at the oversight, but your sailors gain recourse when abandoned, unpaid, or stranded far from home.", { EN: 6, GL: 4, FI: -2, FA: -2 }],
      ["Let the ship owners treat them badly.", "The shipping trade runs on the agents I would burden.", "You leave the seafarers unprotected. The agents are content and the trade smooth, and your sailors keep being abandoned and unpaid on distant ships under flags of convenience.", { FI: 2, EN: -6 }])),

  // ── Debt-for-climate swap ───────────────────────────────────────────────────
  ax("External Finance Secretary", "ambassador", ["debt", "climate-swap", "conservation"],
    sx("Sir, urgent news. A bank will forget about money you owe them, but only if you spend money planting trees instead. It means they tell you what to do with your money.",
      ["Agree to plant trees so they forget the debt.", "A debt traded for forests is a debt twice repaid.", "You take the swap, easing the debt and funding conservation. The relief and the green spending are real, and a foreign creditor now holds a say over how you protect your own land.", { FI: 4, EN: 4, RE: 2, GL: 2 }],
      ["Say no because they shouldn't tell you what to do.", "I will not let a creditor manage my coastline.", "You decline the swap to keep control of your environmental spending. The debt stays heavier and the conservation unfunded by it, but no foreign creditor dictates how you tend your forests and coasts.", { FI: -2, GL: -2 }])),

  // ── Child-labour convention enforcement ─────────────────────────────────────
  ax("Labour Diplomacy Officer", "ambassador", ["child-labour", "convention", "exports"],
    sx("Sir, forgive me — The world sees kids working in your dirty factories and wants you to stop it. If you do, those poor kids won't have any money for food.",
      ["Stop the kids from working and try to help them.", "A childhood spent in a brickfield is a future burned.", "You enforce the ban hard and fund schooling and family support for the freed children. The transition hurts families who relied on the wages, but the children return to childhood and the exports stay clean.", { EN: 8, GL: 6, FI: -4 }],
      ["Pretend to fix it but let them keep working.", "A sudden ban starves the families it means to save.", "You make a show of compliance while the child labour persists in the shadows. The families keep the wages, the optics hold for now, and one exposé could trigger the export bans you dread.", { FI: 2, EN: -6, GL: -4 }])),

  // ── Tin Bigha / enclave aftercare ───────────────────────────────────────────
  ax("Border Affairs Secretary", "people", ["enclaves", "border", "integration"],
    sx("A word, sir! Years ago, some people traded land with a neighbor and became your citizens. They still have no roads or schools.",
      ["Spend money to build them roads and schools.", "A citizen I chose to claim I must not abandon.", "You fund roads, schools, and services for the former enclave residents. The cost is modest and the cause unglamorous, but a stranded people, finally claimed, are made whole as citizens.", { EN: 6, GL: 2, FI: -4 }],
      ["Ignore them and let them wait longer.", "The enclaves are settled on the map; the rest can wait.", "You leave the former enclaves under-served. The budget is spared, and the people who chose your flag in the historic exchange go on waiting in a limbo the map says is over.", { FI: 2, EN: -4 }])),

  // ── Mercury / Minamata e-waste link ─────────────────────────────────────────
  ax("Environment Diplomacy Officer", "ambassador", ["mercury", "treaty", "health"],
    sx("Sir, we have a problem. The world wants to ban a poisonous silver liquid called mercury. It hurts rivers and people, but poor workers use it to find gold.",
      ["Ban the poison completely.", "A river laced with mercury poisons generations.", "You commit to the phase-out and fund cleaner methods. The informal operators resist the cost and disruption, but the mercury draining into the rivers and the bloodstreams of the poor begins to ebb.", { EN: 6, GL: 4, FI: -4 }],
      ["Ask for a lot more time before you ban it.", "A sudden ban idles the poor who refine by hand.", "You sign but negotiate a long, slow timeline. The informal operators keep their livelihoods a while longer, and the mercury keeps flowing into the water and the workers for years yet.", { FI: 2, EN: -2, GL: -2 }])),

  // ── Rice import from India ──────────────────────────────────────────────────
  ax("Food Diplomacy Envoy", "ambassador", ["india", "rice", "food-security"],
    sx("Sir! You need to buy rice fast. Your tricky neighbor sells it cheap, or you can pay a lot more to buy it from far away so your neighbor doesn't trick you again.",
      ["Buy the cheap rice from the tricky neighbor.", "A hungry country cannot afford its pride.", "You buy the Indian rice and the shortage eases quickly and cheaply. Your food security leans harder on a neighbour who has weaponised exports before, and may again at the worst moment.", { EN: 6, FI: 2, MI: -4 }],
      ["Pay more to buy it from far away.", "A granary hostage to one neighbour is a famine waiting on his mood.", "You pay more and wait longer for rice from varied distant sources. The shortage bites harder this season, but you refuse to deepen a food dependence a neighbour could switch off at will.", { MI: 2, FI: -4, EN: -2 }])),

  // ── Biodiversity COP commitments ────────────────────────────────────────────
  ax("Biodiversity Diplomacy Officer", "ambassador", ["biodiversity", "cop", "targets"],
    sx("Mr. Prime Minister, sir! You can promise the world you will save a lot of land and water for nature. It looks great, but your people won't be able to build or farm there.",
      ["Promise to save a giant amount of land.", "A nation that saves its nature saves itself.", "You pledge to protect a third of your territory. The green acclaim and conservation funding flow, and the protected zones constrain the fishing, farming, and building your crowded population demands.", { GL: 4, EN: 4, RE: 2, FI: -2 }],
      ["Promise to save only a small amount.", "I will not fence off land my people need to eat.", "You pledge only what your crowded country can spare. The acclaim is thinner and the funding smaller, but you do not lock away land and waters your growing population presses upon for survival.", { EN: 2, RE: 2, GL: -2 }])),

  // ── Regional reserve-pooling arrangement ────────────────────────────────────
  ax("Central Bank Diplomacy Officer", "ambassador", ["reserves", "regional-pool", "stability"],
    sx("Your Excellency! You can put your money in a giant shared piggy bank with other countries. They will help you if you run out, but they get to check your spending.",
      ["Join the shared piggy bank.", "A safety net shared catches us all.", "You join the pool, contributing reserves for a mutual crisis backstop. You gain a safety net larger than your own buffer, and accept some collective oversight of your monetary affairs.", { FI: 4, GL: 4, EN: -2 }],
      ["Keep your money all to yourself.", "A pooled reserve is a reserve I do not fully command.", "You decline to pool your scarce reserves. You keep full control of your buffer, and forgo the larger mutual safety net that might have caught you in the next crisis.", { FI: 2, GL: -2 }])),

  // ── Cluster-munitions / landmine ban ────────────────────────────────────────
  ax("Disarmament Envoy", "ambassador", ["landmines", "ban", "standing"],
    sx("Prime Minister! You can promise never to use hidden bomb traps in the ground. It is the nice thing to do, but your army wants to keep them just in case.",
      ["Promise to ban the hidden bomb traps.", "A weapon that maims the farmer long after the war is no defence.", "You accede to the bans, winning humanitarian standing. The army loses the option of mining its tense borders and grumbles, but you align with the world against weapons that maim civilians for decades.", { GL: 6, EN: 2, MI: -4 }],
      ["Keep the traps so the army can use them.", "A nation with hard borders cannot disarm its frontier.", "You stay outside the bans to preserve the military's options. The brass keeps its mines and munitions, and you are counted among the holdouts clinging to weapons the world has renounced.", { MI: 4, GL: -4 }])),

  // ── Donor-conference for the camps ──────────────────────────────────────────
  ax("Refugee Affairs Secretary", "ambassador", ["rohingya", "donors", "burden-sharing"],
    sx("Sir — You can throw a giant world party to ask for money for the homeless people. You might get a lot of money, or nobody might show up and you'll look silly.",
      ["Throw the giant party to ask for money.", "If the world made this crisis, the world can fund it.", "You host the donor conference. It raises real funds and re-centres the world's attention on the burden you carry, and risks the embarrassment if the pledges prove thin and slow to arrive.", { GL: 4, EN: 4, FI: 2 }],
      ["Don't throw the party and stay quiet.", "A conference that flops advertises my weakness.", "You handle the refugee funding through quiet bilateral channels. You avoid the risk of a flat showpiece, and forgo the money and the global pressure a successful conference might have generated.", { FI: -2, EN: -2 }])),
];
