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
    sx("The High Commissioner is all warmth and no commitment. \"The Teesta treaty is so close. Delhi simply needs another season — you know how West Bengal complicates these things.\" It is the seventh season. Your northern farmers are watching the river run dry.",
      ["Wait politely for Delhi, again.", "Patience keeps the bigger relationship whole.", "You smile and wait. The dry season ruins another harvest in Rangpur, and your northern MPs seethe.", { GL: 8, EN: -10, FA: -4 }],
      ["Publicly set a deadline for the treaty.", "Seven seasons is long enough to be patient.", "Delhi bristles at the ultimatum; the northern farmers cheer a leader who finally pushed back.", { GL: -8, EN: 8, MI: 4 }]),
    sx("With the treaty stalled, Beijing offers to fund and dredge the entire Teesta basin itself — a billion-dollar river-management project on India's doorstep. Delhi calls it a red line. Your engineers call it the only water plan on the table.",
      ["Take the Chinese project.", "If Delhi will not solve it, someone must.", "The river works begin; the north rejoices. Delhi retaliates quietly on transit and trade, and the West frets about Beijing's footprint.", { RE: 10, EN: 8, GL: -10, FI: 4 }],
      ["Decline, and keep Delhi onside.", "I will not host a great-power quarrel on my river.", "You pass on the project to soothe India. The Teesta stays starved, and your own people ask whose interests you serve.", { GL: 8, EN: -8, FA: -6 }]),
    sx("Both giants now demand a choice. The American envoy adds his voice: \"Distance yourself from Beijing's projects and the GSP and the defence partnership are yours.\" Three patrons, one small country, one chair.",
      ["Tilt openly toward the West and India.", "Our bread is buttered in their markets.", "Garment access and soft loans flow; Beijing's projects freeze mid-dredge, stranding sunk costs and goodwill.", { GL: 8, FI: 8, RE: -8, MI: -4 }],
      ["Hold the non-aligned middle, take from all.", "We bow to no capital. We bargain with all of them.", "You play the patrons against each other. It buys leverage and resentment in equal measure; one misstep and the act collapses.", { GL: -4, FI: 6, MI: 6, RE: 4 }])),

  // ── Rohingya repatriation ───────────────────────────────────────────────────
  ax("UN Refugee Commissioner", "relief", ["rohingya", "myanmar", "refugees"],
    sx("A million Rohingya are packed into the Cox's Bazar camps and the world's cameras have moved on. The Commissioner is blunt: \"Funding is down forty percent. Either you keep feeding them or the camps become something no fence can hold.\"",
      ["Keep the camps fully funded from your budget.", "We sheltered them; we will not starve them.", "The camps hold and the world praises you — while your own coast resents the strain on land, forests, and wages.", { GL: 10, EN: -8, FI: -8, FA: -4 }],
      ["Cut rations to pressure the donors.", "Let the squeeze fall where the money should.", "The donors are shamed into partial funding, but hungry camps breed crime and trafficking, and your humanitarian halo dims.", { FI: 4, GL: -8, EN: -10, MI: -4 }]),
    sx("Myanmar's junta offers a repatriation deal: take back the Rohingya in stages, into 'reception centres' the UN cannot inspect. Beijing brokered it and wants your yes. The refugees themselves are terrified to go.",
      ["Sign the repatriation deal.", "A flawed return is still a return.", "Beijing is pleased and a burden lifts on paper. The first boats go back to camps behind wire; rights groups call it refoulement.", { GL: -6, FI: 6, EN: 4, MI: 4 }],
      ["Refuse to force anyone back.", "I will not deport people into a fire.", "The West applauds; the camps stay. Beijing and the junta mark you as the obstacle, and the bill keeps growing.", { GL: 6, EN: 6, FI: -8, MI: -4 }]),
    sx("A camp-based militancy is growing — armed groups recruiting among the stateless and bleeding across the border. Your generals want a hard security cordon; the aid agencies warn it will collapse the humanitarian access entirely.",
      ["Impose the military cordon.", "A camp is not worth a province.", "The militancy is contained by force. Aid access shrinks, abuse complaints rise, and the camps grow quieter and angrier.", { MI: 10, GL: -8, EN: -8 }],
      ["Fund jobs and schooling inside the camps instead.", "Idle and stateless is how a militia is fed.", "Slowly, the recruiting dries up. It costs years and crores the treasury can barely spare, but the violence ebbs.", { EN: 10, GL: 6, FI: -10, MI: -4 }])),

  // ── IMF programme ───────────────────────────────────────────────────────────
  ax("IMF Mission Chief", "official", ["imf", "subsidies", "reserves"],
    sx("The IMF Mission Chief slides the memorandum across the table. \"The loan is approved — conditional on cutting fuel and power subsidies, raising tariffs, and floating the taka. The reserves cannot hold without us, and you know it.\"",
      ["Accept the conditions in full.", "The reserves come first; the rest is politics.", "The dollars arrive and the reserves steady. Prices jump at every bazaar, and the streets begin to simmer.", { FI: 12, GL: 8, EN: -12, MI: -4 }],
      ["Negotiate a slower, softer reform path.", "I will not gut the poor on a quarterly schedule.", "You win a gentler timeline — and a smaller tranche. The reserves wobble on, the IMF watching every number.", { FI: 4, GL: 4, EN: 4, MI: -4 }])),

  // ── Gulf migrant labour ─────────────────────────────────────────────────────
  ax("Saudi Labour Attaché", "ambassador", ["migrants", "gulf", "remittances"],
    sx("The Gulf attaché is apologetic but firm: a new 'localisation' policy will deport two hundred thousand of your workers within the year. Their remittances are a tenth of everything that keeps your taka standing.",
      ["Plead and concede to keep the quota.", "Those remittances are not optional for us.", "You trade fishing rights and a basing arrangement to slow the deportations. The remittances flow; sovereignty frays a little.", { FI: 8, GL: 4, RE: -6, MI: -4 }],
      ["Accept the returns, pivot to new markets.", "We will not beg to export our people.", "You open labour corridors to Malaysia and Europe with dignity clauses. It is slower money, but the workers return to less abuse.", { GL: 6, EN: 6, FI: -8 }])),

  // ── Western sanctions on the security force ─────────────────────────────────
  ax("US Under-Secretary", "ambassador", ["sanctions", "rights", "trade"],
    sx("Washington has sanctioned your elite security battalion over disappearances and 'crossfire' deaths. The Under-Secretary is plain: \"Reform it visibly, or the next list reaches your trade preferences and your generals' visas.\"",
      ["Rein in the battalion publicly.", "The market is worth more than the muscle.", "You curb the unit and prosecute a few cases. The generals feel betrayed; the West relaxes and the garment buyers stay.", { GL: 10, EN: 8, MI: -10 }],
      ["Defend the force as a sovereign matter.", "No foreign capital commands my security.", "You stand by the battalion. The base is pleased and the cantonment loyal; the sanctions widen and buyers grow nervous.", { MI: 8, GL: -12, FI: -6 }])),

  // ── Climate loss-and-damage ─────────────────────────────────────────────────
  ax("COP Summit President", "official", ["climate", "loss-damage", "delta"],
    sx("At the climate summit you hold the moral high card: a delta nation drowning for emissions it never produced. The chair offers a choice — a loud, confrontational demand for loss-and-damage cash, or a quiet seat in the 'constructive' bloc with vaguer promises.",
      ["Lead the confrontational demand.", "We are sinking; politeness can drown.", "Your speech goes viral and shames the rich world into pledges — pledges that may never arrive, and donors who remember the embarrassment.", { GL: -4, EN: 10, FI: 6 }],
      ["Join the constructive bloc quietly.", "Friends fund faster than rivals.", "You bank concrete adaptation grants now by being agreeable. The activists call you tame; the embankments get built.", { GL: 8, FI: 8, EN: 4 }])),

  // ── Border killings ─────────────────────────────────────────────────────────
  ax("Border Guard Director-General", "general", ["border", "india", "killings"],
    sx("Another teenager is shot dead at the border fence by the neighbour's border force — the fourteenth this year, all 'cattle smugglers'. Your DG wants to retaliate in kind. The footage of the body is already trending.",
      ["Order tit-for-tat firing at the line.", "Our dead deserve more than a démarche.", "The border crackles with exchanges. The nationalist press roars approval; the wider relationship with Delhi ices over fast.", { MI: 8, GL: -10, EN: -4 }],
      ["Demand a joint no-lethal-force protocol.", "I want fewer bodies, not more bullets.", "You push a non-lethal agreement through hard diplomacy. It holds, mostly; your own hawks grumble that you went soft.", { GL: 6, EN: 6, MI: -6 }])),

  // ── Transit / connectivity ──────────────────────────────────────────────────
  ax("Connectivity Negotiator", "official", ["transit", "india", "sovereignty"],
    sx("India wants transit: trucks and goods from its mainland to its landlocked northeast, straight through your territory and ports. The economics are real; the opposition is already calling it selling the country's spine.",
      ["Grant transit for fees and energy deals.", "Geography is an asset; let us bank it.", "Toll and transhipment revenue flows and Delhi warms considerably. The opposition brands you a vassal, loudly.", { FI: 10, GL: 8, FA: -4, EN: -4 }],
      ["Withhold transit pending water and trade parity.", "No corridor until the river runs both ways.", "You make transit a bargaining chip. Delhi is annoyed but engaged; the nationalists, for once, applaud you.", { GL: -6, MI: 4, EN: 4 }])),

  // ── Pakistan thaw ───────────────────────────────────────────────────────────
  ax("Pakistani Envoy", "ambassador", ["pakistan", "1971", "history"],
    sx("A Pakistani envoy proposes a reset: trade, visas, a cricket series. But he will not utter the word 'apology' for 1971, and your war veterans will accept nothing less. \"Let history rest,\" he says. Your fathers' generation cannot.",
      ["Pursue the trade reset, set history aside.", "The living eat; the dead are honoured otherwise.", "Trade and travel resume to modest gain. The veterans and the families of the martyred feel their grief was bartered away.", { FI: 6, GL: 4, EN: -6, FA: -4 }],
      ["Make a formal apology the price of any thaw.", "There is no reset over an unmarked grave.", "You hold firm on the apology. Islamabad balks and the reset stalls; at home, the gesture is honoured as a matter of national dignity.", { EN: 6, FA: 6, GL: -6, FI: -4 }])),

  // ── UN peacekeeping ─────────────────────────────────────────────────────────
  ax("UN Peace Operations Chief", "official", ["peacekeeping", "scandal", "prestige"],
    sx("Your soldiers are among the largest peacekeeping contributors on earth — prestige and hard currency both. Now a misconduct allegation against your contingent in Africa threatens to pull the whole deployment, and the income with it.",
      ["Quietly repatriate the accused, deny the rest.", "Protect the mission, protect the money.", "The deployment survives and the dollars keep coming. The cover-up, if it surfaces, will cost far more than the truth would have.", { FI: 6, MI: 6, GL: -8 }],
      ["Open a transparent court-martial.", "Our blue helmets must be clean or they are nothing.", "You prosecute openly. The UN praises the rare accountability; the army resents the spectacle and the missions continue, reputations intact.", { GL: 10, MI: -6, FI: -4 }])),

  // ── Farakka / dry-season flows ──────────────────────────────────────────────
  ax("Joint Rivers Commissioner", "official", ["farakka", "water", "india"],
    sx("The dry-season flow at the Farakka barrage has been cut again upstream; the southwest is turning saline and the fisheries are dying. The Commissioner offers two roads: a technical, decades-long joint study, or an international arbitration that humiliates a neighbour.",
      ["Agree to another joint technical study.", "Slow water is better than no neighbour.", "The study placates Delhi and buys goodwill. The southwest keeps salting over while committees meet, and your coastal MPs despair.", { GL: 8, EN: -10, RE: -4 }],
      ["Take the dispute to international arbitration.", "If the river is shared, so is the law.", "You internationalise the dispute. Delhi is furious and slows cooperation elsewhere; the coastal districts feel, at last, defended.", { GL: -8, EN: 8, RE: 4, MI: 4 }])),

  // ── BESPOKE INSTALMENT — real regional & global fault lines ─────────────────

  ax("Chinese Belt-and-Road Envoy", "ambassador", ["china", "bri", "port"],
    sx("Beijing offers to build and operate a deep-sea port on your coast — a jewel of the Belt and Road. India calls it a pearl in a hostile string; the West warns of debt and bases.",
      ["Award the deep-sea port to China.", "A great port is worth a great quarrel.", "Cranes and Chinese capital arrive on easy terms. Delhi and Washington both register the strategic shift, coldly.", { RE: 8, FI: 8, GL: -10 }],
      ["Give it to Japan or build it ourselves.", "I will not anchor a foreign navy on my coast.", "You choose a less fraught partner at higher cost and slower pace. Beijing's warmth cools to a correct chill.", { GL: 4, FI: -8, RE: -4 }])),

  ax("Russian Nuclear Delegation", "ambassador", ["russia", "rooppur", "sanctions"],
    sx("Your Russian-built nuclear plant needs a billion-dollar payment Moscow wants in roubles or yuan — but the dollar banking world is sanctioning exactly such transfers. Pay and risk secondary sanctions; refuse and stall the reactor.",
      ["Route the payment around the sanctions.", "The reactor must be fed.", "The plant stays on schedule via a yuan workaround. Western banks and capitals note your sanctions-busting and frown.", { RE: 8, GL: -10, FI: -4 }],
      ["Freeze payment until a clean channel exists.", "I will not be a sanctions test case.", "You pause the transfer to stay clean. The reactor's timeline slips and Moscow grows impatient and cool.", { GL: 6, RE: -8, FI: -4 }])),

  ax("US Indo-Pacific Coordinator", "ambassador", ["usa", "indo-pacific", "quad"],
    sx("Washington wants you inside its Indo-Pacific architecture — naval access, intelligence sharing, a tilt away from Beijing — dangled with trade and defence sweeteners. Saying yes is choosing a side in a cold war on your doorstep.",
      ["Sign on to the Indo-Pacific framework.", "Our future markets are in the West.", "Defence and trade doors swing open and India warms. Beijing reads the alignment and quietly squeezes its projects and loans.", { GL: 8, FI: 6, MI: 4, RE: -6 }],
      ["Stay formally non-aligned.", "We trade with all and salute none.", "You keep your options and your independence. Washington is disappointed; the balancing act grows more precarious by the summit.", { GL: -4, FI: 4, MI: -4 }])),

  ax("Rohingya Prosecution Counsel", "official", ["rohingya", "icj", "genocide"],
    sx("The genocide case against the neighbouring junta grinds on at The Hague, and your testimony and camps are central to it. Pressing hard wins global moral standing but enrages a junta that controls your border and the repatriation you crave.",
      ["Press the genocide case to the hilt.", "The world must name what was done.", "Your moral standing soars in the chancelleries of the West. The junta freezes all repatriation talks and rattles the border.", { GL: 10, EN: 4, MI: -6 }],
      ["Soften your role to keep repatriation alive.", "A million here is a heavier fact than a verdict there.", "You mute your advocacy to court the generals. Rights groups accuse you of trading justice for a deal that may never come.", { GL: -6, MI: 4, EN: -4 }])),

  ax("Refugee Relocation Director", "official", ["rohingya", "bhasan-char", "island"],
    sx("You have built a flood-prone silt island to move a hundred thousand Rohingya off the strained mainland camps. The UN questions its safety and consent; the locals near the camps demand the relocation proceed.",
      ["Push ahead with the island relocation.", "The mainland camps cannot hold them all.", "The pressure on the coast eases as families move. The 'consent' and cyclone questions dog you in every UN briefing.", { EN: 6, MI: 4, GL: -8 }],
      ["Pause until the UN signs off on safety.", "I will not strand the stateless on a sandbar.", "You wait for international clearance. The mainland camps stay overcrowded and the host districts seethe at the delay.", { GL: 6, EN: -6, MI: -4 }])),

  ax("Vaccine Diplomacy Envoy", "ambassador", ["health", "vaccines", "india-china"],
    sx("A pandemic surge has you short of vaccines. India offers doses to keep you in its orbit but throttles exports when its own crisis bites; China offers a steady supply with strings. Lives hinge on whom you thank.",
      ["Pivot to the reliable Chinese supply.", "A dose in the arm beats a promise in the post.", "Vaccines flow and the curve bends; Beijing banks the gratitude. Delhi feels jilted just as its own export ban eases.", { EN: 10, GL: -4, RE: -4 }],
      ["Stay loyal to the Indian supply line.", "Do not abandon the neighbour mid-crisis.", "You wait on Delhi's deliveries, which stutter when India's wards fill. The shortfall costs you lives and patience at home.", { GL: 4, EN: -8 }])),

  ax("Trade Preferences Negotiator", "official", ["ldc-graduation", "gsp", "exports"],
    sx("The country is about to 'graduate' out of least-developed status — a point of pride that strips the duty-free access your garments live on. The negotiator wants years of frantic lobbying for transition deals.",
      ["Throw everything at transition trade deals.", "Graduation must not gut the looms.", "Diplomats fan out for bilateral and EU arrangements. It is costly, uncertain work, but it may save the export engine.", { GL: 6, FI: 4, EN: 4, MI: -4 }],
      ["Embrace graduation and let exporters adapt.", "We cannot stay poor to keep a discount.", "You wear the milestone proudly and tell industry to compete on merit. Margins thin and some factories falter in the cold turn.", { GL: 4, FI: -6, EN: -6 }])),

  ax("Indian Citizenship Envoy", "ambassador", ["india", "nrc", "pushback"],
    sx("Across the border, a citizenship register is branding Bengali-speaking Muslims 'infiltrators', and there are murmurs of pushing them into your territory. The envoy in Delhi waits on your line.",
      ["Protest loudly and prepare the border.", "We will not be the dumping ground for their politics.", "You denounce the pushbacks and harden the frontier. Delhi bristles at the public rebuke and cools cooperation.", { GL: -6, MI: 6, EN: 4, FA: 4 }],
      ["Handle it quietly to protect the relationship.", "A megaphone here costs us the whole partnership.", "You raise it softly behind closed doors. The relationship holds; at home, you look silent while your kin are branded.", { GL: 6, EN: -6, FA: -6 }])),

  ax("OIC Solidarity Delegate", "cleric", ["oic", "islamic-bloc", "rights"],
    sx("As the West sanctions your security forces over rights, the Islamic bloc offers warm solidarity, investment, and cover at the UN — in exchange for louder alignment on their causes and quieter talk of pluralism.",
      ["Lean into the Islamic bloc's embrace.", "Friends who do not lecture are worth keeping.", "Gulf money and diplomatic cover arrive. Your secular and Western ties fray, and minority anxieties at home tick up.", { FI: 6, GL: -4, EN: -6, FA: 4 }],
      ["Keep the bloc at a polite arm's length.", "We take investment, not an ideology.", "You bank goodwill without the strings. The bloc's warmth cools a little; your pluralist credentials stay intact.", { GL: 4, EN: 4, FI: -4 }])),

  ax("Maritime Boundary Commissioner", "official", ["bay-of-bengal", "blue-economy", "maritime"],
    sx("Your hard-won sea territory holds gas, fish, and shipping lanes, but exploiting the 'blue economy' means surveys near contested waters and partnerships with powers your neighbours distrust.",
      ["Open the blue economy aggressively.", "The sea is the next frontier of the nation.", "Surveys and joint ventures promise gas and jobs. The activity ruffles maritime neighbours and draws great-power interest.", { RE: 8, FI: 6, GL: -6 }],
      ["Develop it slowly and cooperatively.", "A calm sea is also an asset.", "You move with joint surveys and caution. The bounty comes slower, but no warship shadows your rigs.", { GL: 6, RE: -6, FI: -4 }])),

  ax("Diaspora Affairs Minister", "people", ["diaspora", "remittances", "votes"],
    sx("Ten million citizens abroad send home the dollars that keep you solvent and want a say — voting rights, dual citizenship, a voice. Granting it courts a powerful constituency you cannot fully control.",
      ["Grant diaspora voting and dual citizenship.", "Those who feed the reserves deserve a vote.", "The diaspora is delighted and engaged; remittances and goodwill rise. An overseas opposition now also has a ballot and a megaphone.", { GL: 6, FI: 6, EN: 4, MI: -4 }],
      ["Keep the diaspora a wallet, not a vote.", "Money yes, a foreign electorate no.", "You take the remittances and withhold the franchise. The expatriates resent being milked without a voice.", { FI: 4, GL: -4, EN: -4 }])),

  ax("Surveillance Tech Vendor", "shadow", ["china", "safe-city", "surveillance"],
    sx("A Chinese firm offers a 'Safe City' package — cameras, facial recognition, a command centre — at a price the budget can almost bear, wiring your capital into a single all-seeing grid run on their software.",
      ["Buy the Safe City surveillance grid.", "Order is worth a few watching eyes.", "Crime data and control both improve under the lenses. The West warns of a panopticon, and the data flows somewhere you cannot audit.", { MI: 8, RE: 4, GL: -8, EN: -4 }],
      ["Decline the all-seeing grid.", "I will not rent my capital's eyes from abroad.", "You pass on the package and its dependencies. You forgo a control tool and keep your streets off a foreign server.", { GL: 6, EN: 4, MI: -4 }])),

  ax("Climate Migration Envoy", "official", ["climate", "migration", "recognition"],
    sx("At the climate talks you can champion legal recognition for 'climate refugees' — millions your delta will produce — pressing the rich world to share the burden, and admitting your own coming displacement.",
      ["Lead the climate-migration push.", "The drowning have a right to somewhere dry.", "You become the moral voice of the climate-displaced and win pledges. You also brand your nation, on the record, as one that will flee its own coast.", { GL: 6, EN: 6, FI: 4 }],
      ["Avoid the refugee framing; ask for adaptation cash.", "Build the walls, do not advertise the flood.", "You steer the talks toward embankment funding instead of migration. Quieter, more fundable, less of a headline that scares investors.", { GL: 4, EN: 4, FI: 4 }])),

  ax("Regional Debt Watcher", "official", ["regional", "default", "contagion"],
    sx("A near neighbour has defaulted and another teeters; markets are lumping the whole region together and eyeing your reserves nervously. The watcher wants a loud public separation from the basket cases.",
      ["Publicly distance from the defaulters.", "We are not them; say it from the rooftops.", "Your spreads ease as investors un-bundle you from the crisis. The shamed neighbours resent being made your foil.", { GL: 4, FI: 6, EN: -4 }],
      ["Show regional solidarity instead.", "Today them, tomorrow perhaps us.", "You stand with the stricken neighbours and pool some risk. Noble, but the markets keep your name in the same anxious sentence.", { GL: 6, FI: -6 }])),

  ax("Gulf Labour Reform Attaché", "ambassador", ["migrants", "gulf", "amnesty"],
    sx("A Gulf state offers an amnesty to regularise tens of thousands of your undocumented workers — if you accept stricter, costlier recruitment rules and a cap going forward. Their wages are a pillar of your reserves.",
      ["Accept the amnesty and the new caps.", "Regularised workers send money home safely.", "Your workers gain legal footing and the remittances stabilise. The tighter caps shrink the future flow of jobs.", { FI: 6, EN: 6, GL: 4 }],
      ["Reject the conditions and lobby for open quotas.", "We will not pay to legalise our own people.", "You hold out for better terms. The amnesty window narrows and undocumented workers stay exposed to raids and ruin.", { GL: -4, FI: 4, EN: -6 }])),

  ax("Japanese Megaproject Lead", "ambassador", ["japan", "matarbari", "infrastructure"],
    sx("Tokyo offers patient, low-interest finance for a deep port and industrial belt — clean money with high standards, but slow disbursement and a quiet expectation that you tilt toward its free-and-open vision over Beijing's.",
      ["Anchor the corridor with Japanese finance.", "Patient money builds the steadiest things.", "A world-class port and industrial belt take shape on clean terms. Beijing reads the tilt and your Chinese projects cool.", { RE: 8, GL: 6, FI: -4 }],
      ["Hedge with both Japanese and Chinese funds.", "Why choose when both will pay?", "You play the two off each other for better terms. The balancing wins money now and trust from neither in the end.", { FI: 6, RE: 4, GL: -4 }])),

  ax("UN Rights Council Delegate", "official", ["unhrc", "resolution", "scrutiny"],
    sx("A draft resolution at the Human Rights Council would put your record on disappearances and press freedom under formal monitoring. You can lobby allies to bury it, or accept scrutiny and promise reform.",
      ["Mobilise allies to kill the resolution.", "No foreign council sits in judgment of us.", "You whip enough votes to shelve it this session. The effort burns diplomatic capital and confirms every critic's suspicion.", { MI: 4, GL: -8, FI: -4 }],
      ["Accept monitoring and pledge reform.", "Sunlight, accepted gracefully, disarms.", "You welcome the scrutiny and announce reforms. The security establishment chafes; your standing in the open world recovers.", { GL: 10, EN: 6, MI: -8 }])),

  ax("Naval Base Suitor", "general", ["base", "great-power", "sovereignty"],
    sx("Two great powers separately, quietly, ask the same thing: a foothold for their navy on your strategic coast — lavish aid for a berth. Granting either makes your shore a chess square in their rivalry.",
      ["Lease a berth to the higher bidder.", "A coast is an asset; let it pay.", "The aid is enormous and immediate. You have planted a foreign flag on your shore and a target on your map.", { FI: 10, MI: 6, GL: -10, RE: -4 }],
      ["Refuse all foreign bases on principle.", "No navy but ours anchors here.", "You forgo the windfall and keep the coast sovereign. Both suitors are disappointed; your neutrality holds, for now.", { GL: 6, MI: -4, FI: -6 }])),

  ax("Hydropower Transit Negotiator", "official", ["nepal", "hydropower", "transit"],
    sx("Nepal and Bhutan have clean hydropower to sell and you need it — but every megawatt must cross India, which controls the wires and the goodwill. A trilateral deal needs Delhi's blessing you cannot take for granted.",
      ["Pursue the trilateral power deal through India.", "Clean current is worth a careful dance.", "You secure Himalayan hydropower via Indian lines. The dependence on Delhi's grid and goodwill deepens with every watt.", { RE: 8, GL: 4, EN: 4 }],
      ["Invest at home rather than rely on the transit.", "I will not run my lights through a neighbour's switch.", "You build domestic capacity instead of importing across the border. Costlier and slower, but no foreign hand on the breaker.", { RE: 4, FI: -6, GL: -4 }])),

  ax("Peacekeeping Expansion Officer", "general", ["peacekeeping", "un", "prestige"],
    sx("The UN wants more of your soldiers for a dangerous new mission — prestige, hard currency, and influence, but also flag-draped coffins coming home from a war that is not yours.",
      ["Commit a large contingent.", "Our blue helmets buy us a seat at the table.", "The deployment lifts your standing and your foreign-currency earnings. The first casualties test the public's stomach for distant wars.", { GL: 8, FI: 6, MI: -4, EN: -4 }],
      ["Send only a token force.", "I will not spend our youth on others' wars.", "You keep the commitment small and the risk low. The UN's gratitude, and the income, are correspondingly modest.", { MI: 4, GL: -4, FI: -4 }])),

  // ── BRI debt trap ───────────────────────────────────────────────────────────
  ax("Belt-and-Road Negotiator", "ambassador", ["china", "bri", "debt"],
    sx("Beijing offers to finance a glittering raft of mega-projects — bridges, rails, power — on opaque terms in dollars, the kind that left a neighbour handing over a port when the bills came due. The negotiator says the steel is real and the catch is later.",
      ["Take the full Belt-and-Road package.", "Bridges now, bills later.", "The cranes arrive and the skyline transforms. The debt accrues in foreign currency on hidden terms, and the cautionary tale of the seized port hangs over every repayment.", { RE: 8, FI: 4, GL: -8 }],
      ["Cherry-pick only the viable projects.", "I will borrow for assets, not for traps.", "You accept a few sound projects and decline the rest. Beijing is cooler and the building slower, but no opaque mountain of debt waits to swallow a national asset.", { GL: 4, FI: -2, RE: -4 }])),

  // ── India trade deficit ─────────────────────────────────────────────────────
  ax("Commerce Envoy to Delhi", "ambassador", ["india", "trade", "deficit"],
    sx("The trade gap with India is vast and lopsided — their goods flood in while non-tariff barriers block yours. The envoy can press hard for market access and risk Delhi's irritation, or keep the relationship smooth and the deficit yawning.",
      ["Press Delhi hard on market access.", "A friendship this one-sided is tribute, not trade.", "You push for real access and parity. Delhi bristles and some files slow, but you signal you will not be a captive market forever.", { GL: 4, FI: 4, RE: -2 }],
      ["Keep the relationship smooth.", "Delhi's goodwill is worth more than a trade column.", "You swallow the imbalance to keep Delhi content. The deficit deepens and exporters fume, but the larger relationship — water, security, borders — stays warm.", { GL: 6, FI: -6 }])),

  // ── US trade preferences & labour ───────────────────────────────────────────
  ax("Washington Trade Liaison", "ambassador", ["usa", "gsp", "labour"],
    sx("Washington has suspended your trade preferences over factory safety and union-busting, and will restore them only with real labour reforms. The liaison says the reforms anger your factory-owner donors but reopen a vital market.",
      ["Enact the labour reforms for access.", "A market reopened is worth a donor's sulk.", "You legalise unions and tighten safety to win the preferences back. The factory owners who fund you seethe, but the export market reopens and the workers gain ground.", { GL: 8, FI: 4, FA: -4 }],
      ["Refuse to bow to foreign labour demands.", "I will not let Washington write my labour law.", "You reject the conditions as interference. The donors are pleased and the unions stay caged, but the preferences lapse and the exporters lose their edge in a key market.", { FA: 4, MI: 2, GL: -8, FI: -4 }])),

  // ── EU EBA garment access ───────────────────────────────────────────────────
  ax("Brussels Trade Envoy", "ambassador", ["eu", "garments", "rights"],
    sx("Your duty-free access to Europe — the lifeline of the garment sector — is under review, with Brussels citing jailed activists and curbed press freedom. The envoy says a few high-profile releases could save billions in exports.",
      ["Release activists to save the EU access.", "Billions in exports outweigh a few prisoners I never needed.", "You quietly free the activists and ease the press curbs. The hardliners grumble at the foreign pressure, but the garment lifeline to Europe is secured.", { GL: 8, FI: 6, EN: 2, MI: -4 }],
      ["Hold firm and risk the trade review.", "I will not free my critics on Brussels' orders.", "You refuse to be leveraged. The activists stay jailed and the review turns sour, putting the garment sector's European lifeline — and a million jobs — at real risk.", { MI: 4, FA: 2, GL: -8, FI: -6 }])),

  // ── Indo-Pacific balancing ──────────────────────────────────────────────────
  ax("Strategic Affairs Adviser", "official", ["indo-pacific", "quad", "china"],
    sx("Washington presses you to join its Indo-Pacific framework as a counterweight to China; Beijing warns that signing would be treated as choosing sides against it. The adviser says your prized non-alignment is getting harder to hold.",
      ["Join the Indo-Pacific framework.", "The future of the seas is being written without me.", "You sign on and gain Western favour and investment. Beijing reads it as a betrayal and the cost will come — in stalled projects and cold summits — soon enough.", { GL: 4, FI: 4, RE: -4 }],
      ["Stay out and keep balancing.", "A small state survives by belonging to no one's bloc.", "You decline to choose, preserving your room to manoeuvre. Both giants court and distrust you, and the tightrope grows narrower each year.", { GL: 6, MI: 2, FI: -2 }])),

  // ── Migrant worker abuse in the Gulf ────────────────────────────────────────
  ax("Expatriate Welfare Director", "people", ["migrants", "gulf", "kafala"],
    sx("Coffins of your migrant workers arrive from the Gulf by the planeload — heatstroke, 'natural causes', suicides under abusive sponsors. The director wants you to confront the host governments over the kafala system, risking the labour markets that send home billions.",
      ["Confront the Gulf states over abuses.", "A citizen's life is not an export commodity.", "You press the host governments hard on worker protections. They resent the lecture and tighten a few quotas, but your workers gain a fraction more dignity and a state that speaks for them.", { GL: 4, EN: 6, FI: -6 }],
      ["Stay quiet to protect the labour market.", "The remittances feed millions; the dead cannot.", "You swallow the protest to keep the visas and remittances flowing. The billions keep coming, and so do the coffins, unremarked and unavenged.", { FI: 8, EN: -8, GL: -2 }])),

  // ── Recruitment syndicate ───────────────────────────────────────────────────
  ax("Manpower Bureau Chief", "fixer", ["migrants", "recruitment", "syndicate"],
    sx("A cartel of recruiting agencies — with patrons in your own party — gouges would-be migrants with crushing fees and sells them into debt bondage abroad. The chief can break the syndicate and cap fees, or keep the lucrative, donor-linked racket running.",
      ["Break the syndicate, cap the fees.", "A worker sold into debt is a citizen failed.", "You smash the cartel and cap recruitment fees. The party patrons who profited rage and threaten, but migration becomes survivable for the poor who stake everything on it.", { GL: 4, EN: 8, FI: -2, FA: -4 }],
      ["Protect the recruitment racket.", "The agencies place a million workers; do not break the machine.", "You leave the syndicate intact. The placements and the kickbacks flow, and the poorest keep mortgaging their land to brokers who deliver them to bondage.", { FI: 6, FA: 4, EN: -8 }])),

  // ── Bhasan Char relocation ──────────────────────────────────────────────────
  ax("Refugee Relief Commissioner", "relief", ["rohingya", "bhasan-char", "relocation"],
    sx("To ease the overcrowded mainland camps, you have built a settlement on a raw silt island in the cyclone-prone bay. The commissioner can press ahead relocating refugees there over UN safety objections, or pause until the agencies sign off.",
      ["Relocate refugees to the island now.", "The mainland camps are a powder keg I must defuse.", "You move tens of thousands to the island, easing the camps. The UN protests the flood-risk and the optics of an offshore camp, and one bad cyclone could turn it into a catastrophe.", { MI: 4, GL: -6, EN: -2 }],
      ["Pause until the UN signs off.", "An island camp drowned would shame us forever.", "You hold the relocation pending safety guarantees. The mainland camps stay dangerously crowded, but you avoid being the government that marooned refugees on a sinking char.", { GL: 4, EN: 2, MI: -4 }])),

  // ── ICJ genocide case against Myanmar ───────────────────────────────────────
  ax("International Law Counsel", "ambassador", ["rohingya", "icj", "justice"],
    sx("The world court is hearing a genocide case against Myanmar over the Rohingya, and you are urged to formally join it. Doing so champions the refugees and your moral standing — and slams the door on the repatriation talks Myanmar's generals still dangle.",
      ["Join the genocide case at the world court.", "A crime this great demands we stand to be counted.", "You join the case to international acclaim and the refugees' gratitude. Naypyidaw freezes the repatriation talks in fury, and the million in the camps may now stay for a generation.", { GL: 8, EN: 4, RE: -4 }],
      ["Stay out to keep repatriation alive.", "A courtroom victory that keeps a million in tents is no victory.", "You decline to join, preserving the fragile repatriation channel. The rights world is disappointed, but you keep the only door — however narrow — back to Myanmar open.", { GL: -2, MI: 2, FI: 2 }])),

  // ── Myanmar border clashes ──────────────────────────────────────────────────
  ax("Border Security Commander", "general", ["myanmar", "border", "spillover"],
    sx("Myanmar's civil war is spilling over — mortar shells landing in your villages, fighters and refugees crossing, a junta that ignores your protests. The commander wants permission for a firm military posture; the diplomats fear provoking a wider clash.",
      ["Take a firm military posture on the border.", "Shells on my soil will be answered.", "You reinforce the border and return fire on incursions. The villages feel defended and the junta takes note, but the risk of a real border war with a chaotic neighbour climbs.", { MI: 8, GL: -4, EN: 2, FI: -2 }],
      ["Keep it diplomatic and contained.", "I will not be dragged into Myanmar's civil war.", "You absorb the provocations and work the channels instead. The border stays tense and the villages exposed, but you avoid a second front no one could afford.", { GL: 4, MI: -4, EN: -2 }])),

  // ── Ukraine war UN vote ─────────────────────────────────────────────────────
  ax("UN Mission Ambassador", "ambassador", ["russia", "ukraine", "vote"],
    sx("A General Assembly vote condemning Russia's invasion is coming, and both blocs are counting heads. The West wants your condemnation; Moscow, your friend on energy, grain, and the nuclear plant, wants your abstention. The ambassador needs your instruction.",
      ["Vote to condemn the invasion.", "Aggression is aggression, whoever the friend.", "You side with the West and earn its warmth and a moral credit. Moscow remembers the slight, and the energy, grain, and nuclear files all turn a degree colder.", { GL: 6, RE: -4, FI: -2 }],
      ["Abstain to protect ties with Moscow.", "A small state does not pick fights between giants.", "You abstain, citing principle and self-interest. Moscow is grateful and the deals stay warm, but the West marks you down as a fence-sitter when it counted.", { RE: 4, FI: 4, GL: -6 }])),

  // ── Sanctions-busting energy deal ───────────────────────────────────────────
  ax("Energy Procurement Envoy", "fixer", ["russia", "sanctions", "energy"],
    sx("Russia offers oil and fertiliser at a steep discount, payable in rupees or yuan to dodge the dollar sanctions. The envoy calls it a lifeline for the reserves; the catch is the wrath of Washington and the banks that clear your trade.",
      ["Take the discounted sanctioned supplies.", "Cheap fuel feeds my people; sanctions are not my law.", "You buy the discounted oil and fertiliser and the reserves breathe. Washington warns of secondary sanctions, and your banks grow nervous about being cut from the dollar system.", { FI: 8, RE: 4, GL: -8 }],
      ["Stay clear of the sanctioned trade.", "A discount that severs me from the dollar is no bargain.", "You forgo the cheap supplies to stay onside with Washington and the banks. Fuel and fertiliser cost more, but your access to the global financial system is unthreatened.", { GL: 4, FI: -6 }])),

  // ── LDC graduation ──────────────────────────────────────────────────────────
  ax("Development Economist", "official", ["ldc", "graduation", "trade"],
    sx("The country is on track to 'graduate' from least-developed status — a point of national pride that also strips away the trade preferences and cheap-loan access that the economy leans on. The economist asks whether to embrace the timeline or seek to delay it.",
      ["Embrace graduation on schedule.", "A nation cannot stay a beggar to keep the alms.", "You proudly cross the threshold on time. The prestige is real, but the preferences and concessional loans fall away, and exporters face a harsher world unprepared.", { GL: 6, EN: 2, FI: -6 }],
      ["Seek to delay and ease the transition.", "Pride that bankrupts the looms is vanity.", "You negotiate a longer runway to keep the preferences while you adapt. The graduation glory is deferred and some call it timid, but the export economy gets time to brace.", { FI: 4, GL: -2 }])),

  // ── Currency swap lifeline ──────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["reserves", "swap", "dependence"],
    sx("With reserves dwindling, a giant neighbour offers a large currency swap to shore them up — a genuine lifeline that also hands that neighbour quiet leverage over your finances. The governor needs an answer before the next import bill.",
      ["Take the neighbour's currency swap.", "Drowning men do not refuse a rope.", "The swap steadies the reserves and calms the markets. Your finances now carry a quiet IOU to a powerful neighbour, one that will be remembered at the next hard bargain.", { FI: 8, GL: -2, RE: 2 }],
      ["Refuse and seek harder fixes at home.", "A rope with a leash on the end is a noose.", "You decline the swap and impose import curbs instead. The reserves stay perilously thin and the squeeze bites, but no foreign capital holds a lever over your treasury.", { FI: -6, GL: 2, EN: -4 }])),

  // ── Foreign-funding NGO crackdown ───────────────────────────────────────────
  ax("NGO Affairs Director", "official", ["ngos", "foreign-funding", "civil-society"],
    sx("A new law lets you choke foreign funding to the human-rights and governance NGOs that needle you, branding them foreign agents. The director says it silences the critics; the donors and Western capitals call it a death sentence for civil society.",
      ["Choke the NGOs' foreign funding.", "Foreign money buys foreign mouths.", "You strangle the critical NGOs' funding and they wither. The domestic noise quiets, but Western capitals and donors recoil, and your aid relationships chill markedly.", { MI: 4, FA: 2, GL: -8, EN: -4 }],
      ["Leave civil society's funding alone.", "A government afraid of NGOs is afraid of mirrors.", "You let the foreign-funded groups operate. They keep publishing inconvenient reports, but your standing with donors and the rights world holds, and civil society breathes.", { GL: 6, EN: 4, MI: -4 }])),

  // ── Hajj quota diplomacy ────────────────────────────────────────────────────
  ax("Religious Affairs Envoy", "cleric", ["hajj", "saudi", "pilgrims"],
    sx("Saudi Arabia controls your annual Hajj quota, and this year hints it could expand it — for a price in diplomatic alignment on a regional quarrel you would rather avoid. The envoy says more pilgrim slots would delight the faithful at home.",
      ["Align with Riyadh to win more pilgrim slots.", "A larger Hajj quota is a gift to the whole nation's faith.", "You back Riyadh's position and the quota grows. The pilgrims and the pious are grateful, but you have tied yourself to a Gulf quarrel that is not yours.", { GL: 2, EN: 4, MI: 2, FI: -2 }],
      ["Keep Hajj diplomacy free of the quarrel.", "I will not trade my foreign policy for pilgrim visas.", "You decline to be leveraged over the Hajj. The quota stays flat and some grumble, but your regional neutrality is intact and unbought.", { GL: 4, EN: -2 }])),

  // ── Arms procurement alignment ──────────────────────────────────────────────
  ax("Defence Procurement Chief", "general", ["arms", "china", "alignment"],
    sx("Your military needs new submarines, jets, and missiles. China offers a full, cheap package on soft loans; the West offers superior kit at a steep price and with human-rights strings. The chief says the choice sets your strategic alignment for decades.",
      ["Buy the cheap Chinese arms package.", "A fleet I can afford beats one I cannot.", "You re-equip the forces cheaply and quickly. The military is grateful, but you have bound your defence supply chain — and your strategic posture — to Beijing for a generation.", { MI: 8, FI: 2, GL: -6 }],
      ["Buy Western kit despite the cost and strings.", "Better arms, and better company, are worth the price.", "You pay the premium and accept the conditions for superior Western systems. The budget groans and the strings chafe, but your alignment tilts toward the wider, richer bloc.", { GL: 6, MI: 4, FI: -8 }])),

  // ── Magnitsky-style visa bans ───────────────────────────────────────────────
  ax("Foreign Secretary", "ambassador", ["sanctions", "elites", "visas"],
    sx("Washington has slapped visa bans on senior officials and their families over election rigging and rights abuses — hitting the elite where it hurts, in their foreign homes and children's schools. The secretary asks whether to retaliate or quietly reform.",
      ["Retaliate with tit-for-tat measures.", "An insult to my officials is an insult to the state.", "You expel diplomats and impose reciprocal curbs. The standoff hardens, your elite's foreign lives stay frozen, and the bilateral relationship sinks into open hostility.", { MI: 4, FA: 2, GL: -8, FI: -4 }],
      ["Quietly reform to get the bans lifted.", "My ministers want their visas back more than their pride.", "You make quiet concessions on the worst abuses to ease the bans. The hardliners call it surrender, but the elite gets its foreign life back and the relationship thaws.", { GL: 6, EN: 4, FA: -4, MI: -2 }])),

  // ── COP / climate finance leadership ────────────────────────────────────────
  ax("Climate Diplomacy Envoy", "ambassador", ["climate", "cop", "leadership"],
    sx("At the global climate summit you can lead the bloc of vulnerable nations in a fierce demand for loss-and-damage cash from the big emitters — winning moral leadership but antagonising the very powers whose investment you court.",
      ["Lead the vulnerable bloc's hard demand.", "Those who flooded us must pay to keep us afloat.", "You front the frontline nations' demand and win global moral stature. The big emitters you also court for investment bristle, and some doors quietly cool.", { GL: 6, EN: 4, FI: -2 }],
      ["Play the quiet, pragmatic broker.", "A loud demand wins applause; a quiet deal wins funds.", "You broker rather than berate, banking concrete pledges over headlines. The frontline activists wanted fire, but the adaptation money that actually arrives is larger for it.", { GL: 4, FI: 4, EN: 2 }])),

  // ── Diaspora voting rights ──────────────────────────────────────────────────
  ax("Expatriate Affairs Secretary", "official", ["diaspora", "voting", "remittances"],
    sx("The millions-strong diaspora — who send home the remittances that prop up the economy — demand the right to vote from abroad. The secretary notes they lean against you; enfranchising them is democratic, and electorally risky.",
      ["Grant the diaspora the vote.", "Those who feed the nation may help choose it.", "You extend voting rights abroad to the diaspora's delight and the world's approval. They lean against you, so you have enfranchised a bloc that may help defeat you — a real democrat's gamble.", { GL: 6, EN: 4, MI: -4 }],
      ["Withhold diaspora voting for now.", "I will not import an opposition by post.", "You keep the franchise within the borders. The diaspora feels used for its money and ignored for its voice, and the easy democratic credit goes unclaimed.", { MI: 2, FI: 2, GL: -4, EN: -2 }])),

  // ── Malaysia labour market reopening ────────────────────────────────────────
  ax("Manpower Bureau Chief", "fixer", ["malaysia", "migrants", "syndicate"],
    sx("Malaysia will reopen to your migrant workers — but only through a closed cartel of a few favoured agencies, a stitch-up that will gouge workers and enrich a handful of well-connected brokers. The chief says taking the deal as-is restarts the flow fastest.",
      ["Accept the closed-syndicate deal.", "A reopened market on bad terms beats a closed one.", "The corridor reopens and the workers go, fleeced by the cartel. The remittances resume, the brokers grow fat, and the migrants carry crushing debts to chase the jobs.", { FI: 6, FA: 2, EN: -6, GL: -2 }],
      ["Demand an open, fair recruitment system.", "I will not reopen a market only to sell my own people.", "You hold out for transparent recruitment and capped fees. The reopening is delayed and the brokers furious, but when the corridor opens it does not begin in debt bondage.", { EN: 6, GL: 2, FI: -4, FA: -4 }])),

  // ── ARSA militancy in the camps ─────────────────────────────────────────────
  ax("Camp Security Chief", "shadow", ["rohingya", "militancy", "drugs"],
    sx("The sprawling refugee camps have bred armed gangs, militant cells, and a methamphetamine pipeline, with killings now nightly. The chief wants a hard security sweep that would punish the many for the few, or a slower community-policing approach the agencies prefer.",
      ["Launch a hard security sweep.", "A camp ruled by gunmen rules itself.", "You flood the camps with a heavy crackdown. The gangs scatter and the killings dip, but mass detentions and abuses draw the agencies' alarm, and the grievances feeding the militancy deepen.", { MI: 8, GL: -6, EN: -4 }],
      ["Build community policing with the agencies.", "You cannot raid a camp into peace.", "You work with the refugees and agencies on community security. It is slow and the violence ebbs unevenly, but the camps do not curdle into an open war you would have to own.", { GL: 4, EN: 4, MI: -4 }])),

  // ── Vaccine diplomacy ───────────────────────────────────────────────────────
  ax("Health Diplomacy Envoy", "doctor", ["vaccines", "china", "west"],
    sx("In a health emergency, the West hoards its vaccines while China offers millions of doses fast — with the unspoken expectation of gratitude and alignment. The envoy says the doses save lives now and tilt you toward Beijing for the watching.",
      ["Take China's fast vaccine supply.", "A dose in the arm beats a promise in a queue.", "The Chinese doses arrive and the inoculation drive surges. Lives are saved and Beijing's goodwill banked, and the West notes which way you turned in the crisis.", { EN: 8, GL: -2, FI: -2 }],
      ["Wait for the Western-led supply.", "I will not let a pandemic redraw my alliances.", "You hold out for the Western and COVAX supply to keep your alignment even. The doses come slower, lives are lost in the wait, but you owe Beijing no debt of gratitude.", { GL: 2, EN: -6 }])),

  // ── UN Security Council seat bid ────────────────────────────────────────────
  ax("UN Mission Ambassador", "ambassador", ["unsc", "prestige", "campaign"],
    sx("A non-permanent seat on the Security Council is winnable — a huge prize of prestige — but the campaign costs a fortune in diplomacy and favours, and the seat would force you to take public sides on quarrels you have spent years dodging.",
      ["Mount the campaign for the Council seat.", "A seat at the great table is worth the price of the chair.", "You win the prestige seat after a costly campaign. The flag flies high, but every crisis vote now forces you off the fence and onto someone's bad side.", { GL: 8, FI: -6, MI: -2 }],
      ["Skip the bid and keep your distance.", "A seat that forces me to choose is a trap with a nameplate.", "You forgo the campaign. The prestige goes to a rival, but you keep your purse and your prized ability to take no public side in the giants' quarrels.", { FI: 4, GL: -4 }])),

  // ── India defence line of credit ────────────────────────────────────────────
  ax("Defence Cooperation Envoy", "general", ["india", "defence", "credit"],
    sx("Delhi offers a billion-dollar defence line of credit to buy Indian-made military equipment — cementing the security partnership and tying your forces to Indian kit and goodwill. The envoy notes the gear is mediocre and the strings are real.",
      ["Take the Indian defence credit.", "A neighbour's arms come with a neighbour's friendship.", "You sign the credit and re-equip from India. The partnership deepens and Delhi is pleased, but your forces grumble at the middling gear and the dependence it locks in.", { GL: 6, MI: 2, FI: 2 }],
      ["Decline and keep procurement diverse.", "I will not arm my forces from one neighbour's catalogue.", "You pass on the tied credit to keep your suppliers varied. Delhi is mildly slighted, but your military avoids a one-source dependence on equipment it does not rate.", { MI: 4, GL: -4 }])),

  // ── Data localisation vs Big Tech ───────────────────────────────────────────
  ax("Digital Sovereignty Adviser", "official", ["data", "big-tech", "sovereignty"],
    sx("You can force the global tech platforms to store citizens' data on local servers and open it to your agencies — 'digital sovereignty', and a surveillance windfall. The platforms threaten to limit services; the West calls it authoritarian overreach.",
      ["Mandate local data and state access.", "Our citizens' data should live under our law.", "You force localisation and gain a surveillance trove. The platforms throttle some services in protest, and Western capitals add 'digital authoritarian' to their dossier on you.", { MI: 6, FI: 2, GL: -6, EN: -2 }],
      ["Keep the open data regime.", "A surveillance windfall is not worth the world's distrust.", "You leave the platforms unburdened. You forgo the surveillance prize, but the services stay full and the West has one less stick to beat you with.", { GL: 6, EN: 2, MI: -4 }])),

  // ── Chittagong port transit for India ───────────────────────────────────────
  ax("Connectivity Negotiator", "ambassador", ["india", "transit", "port"],
    sx("Delhi wants transit rights through your ports and roads to reach its landlocked northeast — a connectivity windfall in fees, but one that nationalists call selling strategic access to a giant for a pittance. The negotiator needs your terms.",
      ["Grant the transit for generous fees.", "A neighbour's cargo is a tollbooth's treasure.", "You open the corridor and the transit fees flow. The economic logic is sound, but the nationalists brand you a vassal, and you have handed Delhi a strategic artery through your land.", { FI: 8, GL: 4, MI: -4 }],
      ["Withhold strategic transit rights.", "Some doors, once opened, never close again.", "You decline the transit deal. The fees are forgone and Delhi disappointed, but you keep a strategic card in hand and the nationalists off your back.", { MI: 4, GL: -4, FI: -4 }])),

  // ── Cyber attack attribution ────────────────────────────────────────────────
  ax("Cyber Security Chief", "shadow", ["cyber", "attack", "attribution"],
    sx("A devastating hack has drained the central bank's reserves through the global payments system, and the trail points to a hostile state's hackers. The chief asks whether to name and shame the culprit publicly, or pursue quiet recovery and avoid a diplomatic rupture.",
      ["Name and shame the state behind it.", "A theft this brazen must be answered in daylight.", "You publicly attribute the heist and demand redress. The world rallies to your side, but the accused state denies all and retaliates, and the diplomatic and cyber fronts both heat up.", { GL: 4, MI: 2, FI: -2 }],
      ["Pursue quiet recovery, avoid rupture.", "Shouting at the thief will not refill the vault.", "You work the back channels and the courts to claw the money back without a public rupture. Less is recovered than hoped, but you avoid a confrontation you cannot win.", { FI: 2, GL: 2, MI: -2 }])),

  // ── Sri Lanka debt lesson ───────────────────────────────────────────────────
  ax("Debt Sustainability Adviser", "official", ["debt", "default", "imf"],
    sx("A neighbour's spectacular debt default and collapse has spooked your lenders, who eye your own swelling foreign loans. The adviser urges a pre-emptive belt-tightening and debt audit now — painful and unpopular — versus borrowing on to keep the showpieces rolling.",
      ["Tighten and audit the debt now.", "Better the medicine now than the collapse later.", "You rein in the borrowing and audit the books before the lenders panic. The mega-projects stall and the public feels the squeeze, but you steer clear of the cliff your neighbour went over.", { FI: 4, GL: 4, EN: -6, RE: -2 }],
      ["Borrow on to keep the showpieces rolling.", "A stalled crane is a confession of weakness.", "You keep borrowing to sustain the building boom. The skyline keeps rising and the optics dazzle, but the debt mounts toward the very precipice your neighbour just demonstrated.", { RE: 4, FI: -6, EN: 2 }])),

  // ── BIMSTEC / regional leadership ───────────────────────────────────────────
  ax("Regional Affairs Envoy", "ambassador", ["bimstec", "saarc", "leadership"],
    sx("With the old South Asian bloc paralysed by the India–Pakistan freeze, you can throw your weight behind the Bay-of-Bengal grouping instead — claiming regional leadership, but tacitly accepting India's framing and sidelining Pakistan and the SAARC dream.",
      ["Champion the Bay-of-Bengal bloc.", "A living forum beats a frozen one.", "You lead the new grouping and gain regional stature. It tilts you toward India's vision of the region and quietly buries the old bloc that gave smaller states a counterweight.", { GL: 6, FI: 2, MI: -2 }],
      ["Work to revive the old South Asian bloc.", "A region whole is stronger than a region halved.", "You push to thaw and revive SAARC, Pakistan and all. The effort mostly stalls against the India–Pakistan wall, but you keep faith with a broader regional idea and Islamabad warms to you.", { GL: 2, FI: -2 }])),

  // ── WTO pharma patent waiver ────────────────────────────────────────────────
  ax("Trade and Health Envoy", "doctor", ["pharma", "patents", "exports"],
    sx("Your generic-drug industry — a lifeline for cheap medicine across the global south — depends on a patent waiver the rich nations want ended. The envoy can lead the fight at the trade body to extend it, antagonising the Western pharma giants and their governments.",
      ["Lead the fight to extend the waiver.", "Cheap medicine for the poor is worth a quarrel with the rich.", "You champion the waiver extension and the global south cheers. Western pharma and their capitals push back hard, but your generic industry and the patients it serves keep their lifeline.", { GL: 4, EN: 6, FI: 2 }],
      ["Accept the phase-out to please the West.", "A quarrel with the pharma powers is a quarrel I cannot win.", "You let the waiver lapse to keep Western goodwill. The pharma giants are pleased, but your generic exporters lose ground and millions across the south face costlier drugs.", { GL: 2, FI: -4, EN: -6 }])),

  // ── Foreign election démarche ───────────────────────────────────────────────
  ax("Foreign Secretary", "ambassador", ["election", "demarche", "legitimacy"],
    sx("A bloc of Western ambassadors has jointly demanded credible elections and warned of 'consequences' for a managed vote. The secretary can treat it as intolerable interference and rebuff them, or quietly accept some monitoring to keep the relationships intact.",
      ["Rebuff the ambassadors' interference.", "No foreign envoy dictates my elections.", "You publicly dress down the ambassadors for meddling. The nationalist base roars approval, but the Western capitals harden, and trade, aid, and visa pressure all tighten in response.", { MI: 4, FA: 2, GL: -8, FI: -2 }],
      ["Quietly accept some monitoring.", "A little daylight now spares a deluge later.", "You concede some observation without ceremony. The hardliners mutter about foreign overlords, but the relationships hold and the next vote carries less of a credibility cloud.", { GL: 6, EN: 2, MI: -2 }])),

  // ── Teesta: China's offer to build ──────────────────────────────────────────
  ax("River Basin Negotiator", "ambassador", ["teesta", "china", "india"],
    sx("Delhi has stalled the Teesta water-sharing treaty for years. Now Beijing offers to fund and build a massive river-management project on the Teesta itself — solving the water problem, and planting China on a river India considers its strategic backyard.",
      ["Accept China's Teesta project.", "If a friend will not share the water, another will manage it.", "You take Beijing's offer and the river works begin. The water problem eases and China gains a foothold on India's doorstep, and Delhi reads it as a strategic betrayal.", { RE: 8, FI: 4, GL: -6 }],
      ["Hold out for the treaty with India.", "I will not plant a rival on the river to spite a friend.", "You decline the Chinese project to keep Delhi from panicking. The water-sharing treaty stays stalled and the dry-season fields stay thirsty, but you avoid a strategic rupture.", { GL: 2, RE: -6, EN: -2 }])),

  // ── Pushed-back 'infiltrators' ──────────────────────────────────────────────
  ax("Border Affairs Secretary", "ambassador", ["india", "citizenship", "pushback"],
    sx("India's citizenship drive in its border states has branded huge numbers as illegal 'Bangladeshis' and is pushing people across the wire into your territory, calling them yours. The secretary asks whether to accept them quietly or make a loud international stand.",
      ["Quietly absorb the pushed-back people.", "A quarrel with Delhi costs more than a few thousand souls.", "You absorb the pushed-back without protest to keep Delhi placid. The relationship stays smooth, but you have tacitly accepted being a dumping ground for a neighbour's citizenship politics.", { GL: 2, EN: -6, FI: -2 }],
      ["Make a loud international stand.", "I will not be the bin for Delhi's citizenship purge.", "You take the pushbacks to the international stage and refuse the stateless. Delhi is angered and the border tenses, but you draw a clear line that these are not yours to absorb.", { GL: 2, MI: 2, EN: 2, FI: -2 }])),

  // ── Indian Ocean island diplomacy ───────────────────────────────────────────
  ax("Maritime Diplomacy Envoy", "ambassador", ["indian-ocean", "small-states", "balance"],
    sx("A small Indian Ocean island nation, squeezed between the same giants you balance, seeks your solidarity in a bloc of small maritime states to resist great-power basing. The envoy says it builds useful leverage — and irritates the very powers you also need.",
      ["Lead the small-states solidarity bloc.", "Many small voices can outweigh one large one.", "You help forge the small-states bloc and gain leverage and goodwill among peers. The great powers note your organising of resistance to their basing, and cool by a degree.", { GL: 4, MI: 2, FI: -2 }],
      ["Stay out and deal bilaterally.", "A small state bargains best alone, not in a chorus.", "You decline the bloc and keep your dealings one-on-one. You preserve flexibility with the giants, but forgo the collective weight that might have protected you all.", { GL: 2, FI: 2 }])),

  // ── Akhaura–Agartala rail link ──────────────────────────────────────────────
  ax("Connectivity Negotiator", "ambassador", ["india", "rail", "integration"],
    sx("A new cross-border rail link would knit your economy to India's and unlock trade — but also deepen an integration that nationalists fear makes you a satellite. The negotiator asks whether to fast-track the rail diplomacy or slow-walk it.",
      ["Fast-track the cross-border rail.", "Steel rails carry prosperity both ways.", "You push the rail link through and trade and goodwill flow. The economy knits tighter to India's, and the nationalists warn, loudly, that every sleeper laid is a step toward satellite status.", { FI: 6, GL: 4, MI: -2 }],
      ["Slow-walk the integration.", "I will connect at my own pace, not Delhi's.", "You let the rail diplomacy crawl. The trade windfall is deferred and Delhi grows impatient, but you keep control of the pace and the nationalists quiet.", { MI: 2, GL: -2, FI: -2 }])),

  // ── Regional counter-terror cooperation ─────────────────────────────────────
  ax("Counter-Terror Liaison", "general", ["terrorism", "intelligence", "cooperation"],
    sx("Western and Indian agencies offer deep counter-terror cooperation — intelligence, training, kit — after a deadly attack. The liaison says it is invaluable, but it would let foreign services deep inside your security apparatus and your secrets.",
      ["Accept the deep counter-terror partnership.", "I will take every weapon against the bombers.", "You open the doors to foreign intelligence cooperation. Your counter-terror capacity leaps, but foreign services now sit inside your security apparatus, privy to far more than terror cells.", { MI: 6, GL: 6, FI: -2 }],
      ["Keep cooperation shallow and guarded.", "A partner inside my secrets is a master in waiting.", "You accept only arms-length cooperation. Your agencies stay sovereign and opaque, but you forgo the intelligence depth that might have stopped the next attack.", { MI: 2, GL: -2 }])),

  // ── 54 shared rivers framework ──────────────────────────────────────────────
  ax("River Basin Negotiator", "ambassador", ["rivers", "india", "treaty"],
    sx("Dozens of rivers cross the border from India, most ungoverned by any treaty, leaving you at the mercy of upstream dams and diversions. The negotiator can push for a comprehensive all-rivers framework — ambitious and likely to stall — or pick off one or two winnable deals.",
      ["Push for the comprehensive river framework.", "Piecemeal deals leave most rivers hostage.", "You demand a grand framework covering all the shared rivers. It is the right ask and it stalls against Delhi's reluctance, leaving you with ambition and little water to show.", { GL: 2, RE: -2 }],
      ["Pick off one or two winnable river deals.", "A bird in hand on one river beats a treaty on fifty.", "You focus on a couple of achievable river-sharing deals. The grand vision is deferred, but you actually secure flows on the rivers that matter most this season.", { RE: 6, GL: 2, FI: -2 }])),

  // ── G20 / great-power outreach ──────────────────────────────────────────────
  ax("Summit Diplomacy Adviser", "ambassador", ["g20", "outreach", "prestige"],
    sx("You have a coveted invitation to a great-power summit as a guest — a chance to be seen among the world's deciders. The adviser notes the platform is golden, but attending means muting your criticism of the host's record on a cause you have long championed.",
      ["Attend and mute your criticism.", "A seat among the great is worth a held tongue.", "You take the prestigious stage and swallow your usual critique. The photo-op elevates your standing, but the cause you championed feels quietly abandoned for a place at the table.", { GL: 6, FI: 2, EN: -4 }],
      ["Decline rather than betray the cause.", "A platform bought with my principles is a trap.", "You skip the summit rather than mute yourself. You forgo the prestige and the host's favour, but keep faith with the cause and the credibility it lends you elsewhere.", { GL: 2, EN: 4, FI: -2 }])),

  // ── Bay-of-Bengal blue economy ──────────────────────────────────────────────
  ax("Blue Economy Envoy", "ambassador", ["maritime", "blue-economy", "investment"],
    sx("With the maritime boundary settled, foreign powers compete to fund a 'blue economy' — deep-sea fishing fleets, seabed survey, offshore wind — each partner wanting exclusive zones and data rights in return. The envoy asks how widely to open the waters.",
      ["Grant a single partner exclusive blue-economy rights.", "One committed patron develops faster than a crowd.", "You hand one power broad exclusive rights and the investment pours in fast. Your waters develop quickly, and one foreign navy's friends now know your seabed better than you do.", { FI: 8, RE: 4, GL: -6 }],
      ["Spread access across many partners.", "No single flag should own my sea.", "You parcel access among several partners and keep the data shared. Development is slower and messier, but no one power gains a monopoly on your maritime future.", { GL: 4, RE: 2, FI: -2 }])),

  // ── Pakistan 1971 apology demand ────────────────────────────────────────────
  ax("Foreign Secretary", "ambassador", ["pakistan", "1971", "reconciliation"],
    sx("Islamabad seeks to warm relations and revive trade, but the wounds of 1971 are unhealed and it has never apologised for the genocide. The secretary asks whether to demand the apology and recognition as the price of normalisation, or to let bygones serve commerce.",
      ["Demand the apology before normalising.", "There is no trade route over an unmarked grave.", "You make the 1971 apology a precondition. Islamabad bristles and the thaw stalls, but you honour the three million dead and the survivors who will not let them be bargained away.", { EN: 4, GL: 2, FI: -2 }],
      ["Let commerce override the old wound.", "The living need trade more than the dead need apology.", "You park the apology and pursue trade and ties. The commerce flows and the relationship warms, and the survivors and the families of the martyrs feel their history quietly sold.", { FI: 4, GL: 2, EN: -6 }])),

  // ── Stranded Biharis ────────────────────────────────────────────────────────
  ax("Refugee Affairs Secretary", "relief", ["biharis", "stateless", "1971"],
    sx("Generations of stranded Urdu-speaking 'Biharis' still live in squalid camps, neither fully citizens here nor accepted by Pakistan — a stateless legacy of 1971. The secretary asks whether to grant them full citizenship and integration, or leave the limbo as it is.",
      ["Grant citizenship and integrate them.", "A people stateless for fifty years is a wound left open.", "You confer full citizenship and fund integration. Some nationalists grumble about the old enemy's kin, but a half-century of statelessness ends and the camps begin to empty into ordinary life.", { EN: 8, GL: 6, FA: -2 }],
      ["Leave the Biharis in limbo.", "Their loyalty in '71 is not so easily forgotten.", "You leave the camps and the limbo untouched. The nationalists are satisfied, and three generations go on stateless in the squalor, a grievance and a shame with no expiry.", { FA: 2, EN: -6, GL: -4 }])),

  // ── Kuwait MP-bribery scandal ───────────────────────────────────────────────
  ax("Expatriate Welfare Director", "ambassador", ["gulf", "corruption", "trafficking"],
    sx("A sitting MP of yours has been convicted abroad for human trafficking and bribery, jailed in a Gulf state — a humiliation splashed across the world's press. The director asks whether to disown and prosecute him at home, or quietly shield a party colleague.",
      ["Disown and prosecute him at home.", "A trafficker with my party's badge shames us all.", "You strip him of his seat and open a home prosecution. The party loses a member and faces the embarrassment squarely, but you signal that even your own answer for trafficking the desperate.", { GL: 6, EN: 6, FA: -6 }],
      ["Quietly shield the party colleague.", "I do not abandon my own to a foreign court.", "You protect his seat and his interests at home. The party closes ranks, and the spectacle of a shielded trafficker-MP becomes a global symbol of the rot you tolerate.", { FA: 4, MI: 2, EN: -8, GL: -8 }])),

  // ── Mediterranean migrant tragedy ───────────────────────────────────────────
  ax("Migration Affairs Envoy", "relief", ["migrants", "mediterranean", "trafficking"],
    sx("A boat has sunk off Libya with scores of your citizens aboard, lured by traffickers toward Europe and drowned in the dark. The envoy asks whether to mount a costly campaign against the trafficking pipelines and for safe legal migration, or to issue condolences and move on.",
      ["Attack the pipelines, push safe migration.", "My citizens drown because no honest door is open.", "You go after the trafficking networks and negotiate legal migration channels with Europe. It is costly and slow, but the death route loses customers as a real door, however narrow, opens.", { EN: 8, GL: 4, FI: -4 }],
      ["Issue condolences and move on.", "I cannot police every desperate boat to Europe.", "You mourn publicly and act little. The traffickers keep filling their boats, the bodies keep washing up on distant shores, and each tragedy is met with the same hollow statement.", { FI: 2, EN: -8, GL: -2 }])),

  // ── Brahmaputra upstream dam ────────────────────────────────────────────────
  ax("Transboundary Water Envoy", "ambassador", ["china", "brahmaputra", "water"],
    sx("China is building a colossal dam on the upper Brahmaputra, with power to throttle or surge the river that feeds your north. The envoy can press Beijing hard for a water-sharing and data treaty — risking the relationship — or trust to quiet diplomacy and hope.",
      ["Press Beijing hard for a water treaty.", "A hand on my river's tap is a hand at my throat.", "You demand a binding water-sharing and flood-data treaty. Beijing resents the pressure and concedes little, but you put the issue on the record and rally regional concern around it.", { GL: 4, RE: 2, FI: -2 }],
      ["Trust to quiet diplomacy.", "One does not shout at the giant who holds the dam.", "You raise it softly and avoid antagonising Beijing. The relationship stays smooth, and the dam rises ungoverned, leaving your north hostage to a sluice gate in another country.", { GL: 2, RE: -4, EN: -2 }])),

  // ── Global minimum corporate tax ────────────────────────────────────────────
  ax("Tax Treaty Negotiator", "ambassador", ["oecd", "tax", "sovereignty"],
    sx("The rich nations' club wants you to sign onto a global minimum corporate tax that would end the tax-holiday incentives you use to lure investors. The negotiator says joining wins legitimacy and a slice of multinational tax; staying out keeps your incentive tools.",
      ["Join the global minimum tax deal.", "A race to the bottom on tax is a race I lose anyway.", "You sign on and gain a share of multinational tax and a seat at the rule-making table. Your tax-holiday lure is blunted, and some footloose investors look to holdout jurisdictions instead.", { GL: 6, FI: 4, EN: 2 }],
      ["Stay out to keep your incentives.", "A small economy needs every lure it has.", "You keep your tax holidays and stay outside the deal. You retain a tool to attract investment, but you are cast as a holdout, and the multinational tax you might have captured flows elsewhere.", { FI: 2, GL: -4 }])),

  // ── International Mother Language soft power ─────────────────────────────────
  ax("Cultural Diplomacy Envoy", "ambassador", ["language", "unesco", "soft-power"],
    sx("The country's gift to the world — International Mother Language Day — is a rare soft-power jewel. The envoy proposes a costly global campaign of language institutes and scholarships to cement it; the finance hawks call it vanity the budget cannot spare.",
      ["Fund the global language soft-power push.", "A nation remembered for a gift to humanity punches above its weight.", "You fund the institutes and scholarships worldwide. The cost is real, but a small nation buys outsized goodwill and recognition as the patron of linguistic diversity.", { GL: 6, EN: 2, FI: -4 }],
      ["Keep the commemoration modest.", "Soft power is a luxury a thin budget cannot buy.", "You keep the day a modest annual ceremony. The budget is spared, and a rare chance to project the country as a global cultural benefactor goes largely unspent.", { FI: 2, GL: -2 }])),

  // ── ILO labour-convention ratification ──────────────────────────────────────
  ax("Labour Diplomacy Officer", "ambassador", ["ilo", "labour", "trade"],
    sx("Western buyers and the labour body press you to ratify and enforce core labour conventions — freedom of association, an end to child labour — as the price of continued market access. The owners who fund you call it surrendering control of the factory floor.",
      ["Ratify and enforce the conventions.", "A market kept is worth a union allowed.", "You ratify the conventions and begin enforcing them. The factory-owner donors fume about unions and oversight, but the export markets stay open and the workers gain rights long denied.", { GL: 6, EN: 6, FI: 2, FA: -4 }],
      ["Resist as foreign interference.", "I will not let Geneva run my factories.", "You decline to ratify, framing it as sovereignty. The owners are pleased and the floor stays controlled, but the buyers grow wary and the market access you depend on starts to wobble.", { FA: 4, MI: 2, GL: -6, FI: -4 }])),

  // ── Climate-migration global compact ────────────────────────────────────────
  ax("Climate Diplomacy Envoy", "ambassador", ["climate-migration", "compact", "recognition"],
    sx("As the seas rise, millions here will be displaced, and the envoy wants you to lead a global push for legal recognition and resettlement pathways for climate refugees — a moral cause that also implies admitting your own coast is being lost.",
      ["Lead the climate-migration recognition drive.", "Those the sea displaces must have somewhere to go.", "You champion legal status and resettlement for climate refugees. The moral leadership is real and the donors approve, and you accept the hard admission that parts of your own coast are doomed.", { GL: 6, EN: 4, FI: -2 }],
      ["Avoid the defeatist framing.", "To plan for retreat is to announce defeat.", "You steer clear of the climate-refugee cause, unwilling to concede the coast is lost. You keep up a defiant face, but the millions who will be displaced gain no legal door, and the world's attention drifts.", { GL: 2, EN: -4 }])),

  // ── Onion-export ban shock ──────────────────────────────────────────────────
  ax("Commerce Envoy to Delhi", "ambassador", ["india", "onions", "food-security"],
    sx("India has abruptly banned onion exports again, and prices have quadrupled overnight in your kitchens and markets, igniting public fury. The envoy can plead with Delhi for an exemption — owing them a favour — or pivot hard to other suppliers and self-sufficiency.",
      ["Plead with Delhi for an exemption.", "The fastest onion is the nearest one.", "You secure a quiet exemption from Delhi and the prices ease. The crisis passes, and you owe a favour and have proved, again, how a single neighbour's whim can empty your kitchens.", { FI: 4, GL: 2, EN: 2, MI: -4 }],
      ["Pivot to other suppliers and self-sufficiency.", "A kitchen hostage to one neighbour is a kitchen unfree.", "You rush imports from elsewhere and fund domestic onion storage and production. The fix is slower and pricier this season, but you start breaking a dependence that Delhi weaponises at will.", { RE: 2, MI: 2, FI: -4, EN: -2 }])),

  // ── Insurgent camps across the border ───────────────────────────────────────
  ax("Security Cooperation Envoy", "general", ["india", "insurgents", "extradition"],
    sx("India accuses you of harbouring separatist insurgents from its northeast and demands you hand them over and raze their camps. Cooperating buys enormous goodwill in Delhi; it also means doing a neighbour's dirty work and stirring sympathies at home.",
      ["Crack down and hand over the insurgents.", "A neighbour's enemies need not be my guests.", "You raze the camps and extradite the insurgents. Delhi is delighted and rewards you richly, and at home some decry doing India's bidding while the handed-over face uncertain justice.", { GL: 8, MI: 2, EN: -2, FI: 2 }],
      ["Refuse to be Delhi's enforcer.", "I will not hunt another's rebels to earn a smile.", "You decline the crackdown. Delhi is angered and goodwill cools, but you avoid the role of a neighbour's gendarme and the domestic backlash that comes with it.", { MI: 2, GL: -6 }])),

  // ── Gulf domestic-worker abuse ──────────────────────────────────────────────
  ax("Expatriate Welfare Director", "people", ["gulf", "housemaids", "abuse"],
    sx("Reports flood in of housemaids sent to the Gulf returning broken, abused, or in coffins. The director can suspend female domestic-worker migration to that state until protections improve — losing remittances and angering recruiters — or keep the flow and the suffering.",
      ["Suspend the migration until protections improve.", "I will not export my daughters into bondage.", "You halt domestic-worker migration to the worst state pending real protections. Recruiters and the remittance lobby howl, but you force the host to negotiate and stop feeding women into abuse.", { EN: 8, GL: 2, FI: -6, FA: -2 }],
      ["Keep the flow for the remittances.", "The money these women send feeds whole villages.", "You keep the corridor open. The remittances keep flowing and the recruiters stay happy, and the coffins and the broken keep coming home, unprotected and unavenged.", { FI: 6, EN: -8 }])),

  // ── Zero-cost migration policy ──────────────────────────────────────────────
  ax("Manpower Bureau Chief", "ambassador", ["migration", "recruitment-cost", "reform"],
    sx("Workers here pay among the world's highest fees to get a foreign job, mortgaging everything to brokers. A 'zero-cost' or employer-pays model, negotiated with destination governments, would free them — and gut the lucrative broker industry tied to your party.",
      ["Negotiate an employer-pays migration model.", "A worker should not pay to be employed.", "You push hard for employer-funded recruitment with destination states. The broker industry and its party patrons rage, but workers stop mortgaging their land to chase a job abroad.", { EN: 8, GL: 4, FI: -2, FA: -4 }],
      ["Keep the worker-pays status quo.", "The broker industry is too entwined to break.", "You leave the worker-pays system intact. The brokers and their patrons prosper, and the poorest keep selling everything they own for the privilege of working abroad.", { FA: 4, FI: 2, EN: -6 }])),

  // ── WTO fisheries-subsidies deal ────────────────────────────────────────────
  ax("Trade Negotiator", "ambassador", ["wto", "fisheries", "subsidies"],
    sx("A global deal would curb the fishing subsidies that empty the seas — good for your overfished waters and your standing — but it also limits the support you give your own small fishers. The negotiator asks whether to sign or to defend the carve-out for artisanal fleets.",
      ["Sign with a strong artisanal carve-out.", "Curb the trawlers, shield the small boats.", "You sign the deal while fighting for an exemption for your small-scale fishers. The industrial subsidy race is curbed and your waters get respite, and the artisanal fleet keeps its modest support.", { GL: 6, RE: 4, EN: 2, FI: -2 }],
      ["Refuse to limit any fishing support.", "I will not sign away my fishers' bread for a global rule.", "You decline the deal to protect every subsidy. Your fishers keep all their support, but the global overfishing race grinds on, your standing dips, and your own waters keep emptying.", { FI: 2, RE: -4, GL: -4 }])),

  // ── Bangabandhu satellite / space diplomacy ─────────────────────────────────
  ax("Space Programme Director", "official", ["satellite", "technology", "prestige"],
    sx("A second communications satellite would project technological prestige and serve broadcasting and connectivity — but it is enormously costly, of marginal economic return, and dependent on a foreign launch partner who would gain leverage. The director awaits your call.",
      ["Commission the prestige satellite.", "A nation in orbit is a nation that has arrived.", "You commission the satellite. The prestige is real and the flag flies in space, but the cost is staggering for the return, and the foreign launch partner banks quiet leverage over you.", { GL: 4, FI: -6, RE: 2 }],
      ["Forgo the second satellite.", "Pride in orbit is a poor return on a poor nation's crores.", "You shelve the satellite as vanity. The prestige is forgone and rivals crow, but the crores go to needs on the ground with a return you can actually measure.", { FI: 4, GL: -2 }])),

  // ── Rohingya repatriation pilot ─────────────────────────────────────────────
  ax("Refugee Affairs Secretary", "ambassador", ["rohingya", "repatriation", "myanmar"],
    sx("Myanmar agrees to take back a token batch of refugees under conditions that guarantee neither safety nor citizenship — a hollow gesture that would let you claim progress. The refugees refuse to go. The secretary asks whether to push the pilot or hold out for real guarantees.",
      ["Push the token repatriation.", "A first batch home is a process begun.", "You press the reluctant pilot forward for the optics of progress. Few or none actually go, the refugees protest being pushed toward danger, and the hollow gesture collapses under its own emptiness.", { GL: 2, MI: 2, EN: -6 }],
      ["Hold out for real safety and citizenship.", "I will not send them back to the knife to claim a headline.", "You refuse the hollow pilot and insist on genuine guarantees. Repatriation stalls and the camps stay full, but you do not herd the persecuted back toward the persecution they fled.", { EN: 6, GL: 4, FI: -2 }])),

  // ── Commonwealth / NAM positioning ──────────────────────────────────────────
  ax("Multilateral Affairs Envoy", "ambassador", ["non-aligned", "blocs", "positioning"],
    sx("In a polarising world, the envoy asks where to plant your flag: deepen the old non-aligned and developing-nation blocs as a champion of the global south, or pivot toward the richer Western-led groupings that hold the capital and the markets.",
      ["Champion the global-south blocs.", "Among equals I lead; among giants I follow.", "You invest in the non-aligned and developing-nation groupings and emerge a southern leader. The moral standing and solidarity are real, and the Western capital you also court eyes you a touch more coolly.", { GL: 4, EN: 2, FI: -2 }],
      ["Pivot toward the Western-led groupings.", "Leadership of the poor pays less than membership of the rich.", "You tilt toward the wealthy Western blocs and their markets and capital. The investment flows, and the global south you once led notes your drift toward the giants' table.", { FI: 4, GL: 2, EN: -2 }])),

  // ── Antimicrobial-resistance global push ────────────────────────────────────
  ax("Health Diplomacy Envoy", "doctor", ["amr", "health", "global"],
    sx("Rampant antibiotic misuse here — in clinics, farms, and pharmacies — makes the country a breeding ground for drug-resistant superbugs, a growing global alarm. The envoy can lead a costly national stewardship drive that wins global credit, or treat it as a distant abstraction.",
      ["Lead a national antibiotic-stewardship drive.", "A superbug bred here is a plague loosed on the world.", "You fund prescription controls, farm-antibiotic limits, and surveillance. The cost and the pushback from pharmacies and farmers are real, but you win global credit and slow a gathering catastrophe.", { GL: 6, EN: 6, FI: -4 }],
      ["Treat resistance as a distant abstraction.", "There are diseases killing my people today.", "You spend the money on present, visible illness instead. The wards are tended now, and the country goes on breeding the resistant strains that will, in time, make those wards far harder to fill safely.", { EN: 2, FI: -2, GL: -2 }])),

  // ── Saudi madrasa funding ───────────────────────────────────────────────────
  ax("Religious Affairs Envoy", "cleric", ["saudi", "funding", "ideology"],
    sx("Gulf donors offer lavish funding for mosques and madrasas — and with it a stricter, imported strain of the faith that unsettles the country's gentler traditions. The envoy weighs the money and the diplomatic warmth against the ideological price.",
      ["Accept the Gulf religious funding.", "Generosity from the holy land is not lightly refused.", "You welcome the funding and the mosques and madrasas multiply. The Gulf ties warm and the treasury is spared the cost, and a harder, imported orthodoxy spreads at the expense of the local syncretic faith.", { FI: 4, GL: 2, EN: -6 }],
      ["Decline the strings-attached funding.", "I will not import a harsher creed with a cheque.", "You turn down the conditional money. The Gulf cools a degree and the religious institutions stay underfunded, but the country's gentler religious traditions are not bought out from under it.", { EN: 4, GL: -2, FI: -2 }])),

  // ── Joint river commission revival ──────────────────────────────────────────
  ax("River Basin Negotiator", "ambassador", ["india", "rivers", "commission"],
    sx("The joint river commission with India has been moribund for years while the shared rivers run dry or flood unmanaged. The negotiator can invest heavily in reviving real, data-driven joint management — slow and dependent on Delhi's goodwill — or let it stay a formality.",
      ["Revive real joint river management.", "Rivers shared must be governed together or ruined apart.", "You push to resurrect genuine joint management with data-sharing and basin planning. Progress depends on Delhi and comes slowly, but the framework for governing the shared rivers begins to function again.", { GL: 4, RE: 4, FI: -2 }],
      ["Let the commission stay a formality.", "A commission that needs Delhi's heart cannot be forced to beat.", "You leave the commission as a ceremonial shell. No diplomatic capital is spent on a likely-futile revival, and the shared rivers go on running dry and flooding ungoverned.", { GL: -2, RE: -4 }])),

  // ── Deportation-cooperation deal ────────────────────────────────────────────
  ax("Migration Affairs Envoy", "ambassador", ["deportation", "europe", "returns"],
    sx("Europe will deepen legal-migration quotas and aid only if you accept the swift return of your nationals it deems illegal — including some it cannot properly identify, who may not be yours. The envoy asks whether to sign the readmission deal.",
      ["Sign the readmission deal.", "A legal door open is worth a back door I must accept.", "You sign, and the legal quotas and aid flow. You also accept rushed returns of people, some perhaps not even yours, and the deportees' grievances and the dubious identifications become your problem.", { GL: 4, FI: 4, EN: -4 }],
      ["Refuse the rushed returns.", "I will not take back people no one can prove are mine.", "You decline the readmission terms. The legal quotas and aid stall, but you do not accept the dumping of un-vetted deportees, sparing yourself a stream of disputed, embittered returnees.", { EN: 2, GL: -4, FI: -2 }])),

  // ── Cyclone-warning regional cooperation ────────────────────────────────────
  ax("Disaster Diplomacy Officer", "ambassador", ["disaster", "regional", "warning"],
    sx("A regional disaster-response and early-warning pact would share cyclone data, relief, and rescue across the bay's nations — saving lives — but it requires hosting foreign assets and sharing sensitive coastal and meteorological data with neighbours and rivals alike.",
      ["Join the regional disaster pact.", "A storm respects no border; nor should the warning.", "You join the pact and the shared warnings and relief save lives across the bay. You also host foreign assets and share sensitive coastal data, a security trade-off you judge worth the lives.", { GL: 6, EN: 6, MI: -2 }],
      ["Keep disaster response national.", "Shared weather data is shared coastal intelligence.", "You keep your disaster systems national and your coastal data close. Security is protected, but you forgo the shared warnings and pooled relief that would have blunted the next great storm.", { MI: 2, EN: -4, GL: -2 }])),

  // ── Vaccine / genome data sharing ───────────────────────────────────────────
  ax("Health Diplomacy Envoy", "doctor", ["pandemic", "data-sharing", "sovereignty"],
    sx("A new global pandemic treaty asks you to share pathogen samples and genomic data promptly in exchange for guaranteed access to vaccines and treatments. The envoy notes the access is vital; the catch is handing your biological data to a system the rich have gamed before.",
      ["Join the data-sharing pandemic treaty.", "A virus shared early is a vaccine shared fairly.", "You sign and share your pathogen data promptly, banking guaranteed access to countermeasures. You trust a system that has favoured the rich before, and gain a seat to push it toward fairness.", { GL: 6, EN: 4, FI: 2 }],
      ["Withhold data without firm guarantees.", "I shared my samples last time and queued for vaccines anyway.", "You refuse to share without ironclad access guarantees, remembering past betrayals. You protect your leverage, but you are cast as obstructing the global response and risk being last in the queue again.", { MI: 2, GL: -4, EN: -2 }])),

  // ── Hajj-management reform ──────────────────────────────────────────────────
  ax("Religious Affairs Envoy", "cleric", ["hajj", "management", "corruption"],
    sx("The Hajj management system is riddled with fraud — fake agencies stranding pilgrims, gouged fares, lost deposits — humiliating the country before the Saudis and the faithful. The envoy wants a clean, state-run digital system; the entrenched agency cartel resists.",
      ["Build a clean state-run Hajj system.", "A pilgrim cheated on the way to Mecca is a sin the state allowed.", "You bring in a transparent, digital Hajj system and break the fraudulent agencies. The cartel fights bitterly, but pilgrims stop being stranded and fleeced, and the country's name is restored before the faithful.", { EN: 6, GL: 4, FA: -4 }],
      ["Leave the Hajj agencies to self-regulate.", "The agency men are pillars of the pious vote.", "You leave the cartel in place. The agency-linked vote stays loyal, and every season fresh stories of stranded, swindled pilgrims humiliate the country before the Saudis and the faithful.", { FA: 4, EN: -6, GL: -2 }])),

  // ── Extradition treaty with India ───────────────────────────────────────────
  ax("Foreign Secretary", "ambassador", ["india", "extradition", "fugitives"],
    sx("Delhi wants a broad extradition treaty to hand back fugitives both ways. It would let you reclaim economic criminals who fled with looted billions — and oblige you to return people Delhi labels criminals who may be dissidents or refugees. The secretary weighs the bargain.",
      ["Sign the broad extradition treaty.", "My looters who fled across the border must come home.", "You sign and reclaim some fugitive looters. You also bind yourself to return whomever Delhi names, dissidents and refugees included, and own the cases where the label does not fit the crime.", { GL: 6, FI: 2, EN: -4 }],
      ["Negotiate a narrow, safeguarded treaty.", "An extradition net with no exceptions catches the innocent.", "You hold out for a narrow treaty with political and refugee safeguards. Fewer of your fugitives return and Delhi grumbles, but you do not become a conveyor belt for a neighbour's political cases.", { GL: 2, EN: 2 }])),

  // ── Inland-water transit fees ───────────────────────────────────────────────
  ax("Connectivity Negotiator", "ambassador", ["india", "river-transit", "fees"],
    sx("India wants to ship cargo through your rivers to its northeast under a transit protocol. You can charge proper fees and use it as leverage on water and trade, or grant it cheaply for goodwill. The negotiator notes the rivers are yours to price.",
      ["Charge proper fees and link it to water.", "My rivers carry their cargo at my price, not their convenience.", "You price the river transit fairly and tie cooperation to water-sharing progress. Delhi grumbles at the cost and the linkage, but you turn a favour into leverage and a revenue stream.", { FI: 4, GL: 2, RE: 2 }],
      ["Grant cheap transit for goodwill.", "A neighbour's gratitude is worth more than a toll.", "You grant the transit cheaply to warm relations. Delhi is pleased and the goodwill banked, and you have given away both revenue and a rare piece of leverage for a smile.", { GL: 4, FI: -2 }])),

  // ── Green Climate Fund access ───────────────────────────────────────────────
  ax("Climate Finance Envoy", "ambassador", ["climate-fund", "access", "capacity"],
    sx("Billions in global climate funds sit nominally available, but accessing them demands rigorous project design, fiduciary standards, and transparency your system lacks. The envoy can invest in the costly capacity to unlock the money, or keep relying on bilateral handouts.",
      ["Build the capacity to access the funds.", "Money left on the table is adaptation left undone.", "You invest in the accreditation, project pipelines, and transparency the global funds demand. The build is costly and slow, but it unlocks a steady stream of climate finance far larger than any handout.", { GL: 4, EN: 4, FI: -4 }],
      ["Rely on bilateral handouts.", "Why jump through hoops when friends give freely?", "You skip the demanding accreditation and lean on bilateral aid. The easy money comes with strings and ends with the giver's mood, and the larger pooled climate funds stay locked beyond your reach.", { FI: 2, GL: -2, EN: -2 }])),

  // ── Carbon-credit sales ─────────────────────────────────────────────────────
  ax("Climate Markets Officer", "ambassador", ["carbon-credits", "forests", "revenue"],
    sx("You can sell carbon credits for your mangroves and forests to rich-world polluters — real revenue for conservation — but tying your forests' carbon to foreign buyers limits your own future use of that land and risks accusations of selling the right to pollute.",
      ["Sell the forest carbon credits.", "Let the world's polluters pay to keep my forests standing.", "You sell the credits and the conservation revenue flows. The forests gain a funded guardian, and your future land-use options narrow as foreign buyers now hold a claim on their carbon.", { FI: 4, EN: 4, RE: 2, GL: 2 }],
      ["Keep the forest carbon unsold.", "I will not mortgage my forests' future to a polluter's ledger.", "You keep the carbon rights unsold and your land options open. The conservation revenue is forgone, and the forests must be protected, if at all, from your own thinner budget.", { RE: 2, EN: 2, FI: -2 }])),

  // ── International Solar Alliance ─────────────────────────────────────────────
  ax("Energy Diplomacy Envoy", "ambassador", ["solar", "alliance", "technology"],
    sx("Joining a global solar alliance would bring cheap finance, technology transfer, and standing in the clean-energy world — and align you closely with the rival giant that leads it, a tilt your other great-power partner will notice and resent.",
      ["Join the solar alliance fully.", "Cheap sun and shared tech outweigh a partner's pout.", "You join and gain solar finance, technology, and green standing. The alliance's leading power is pleased, and your other great-power partner reads the tilt and lets its displeasure be felt elsewhere.", { GL: 2, RE: 4, EN: 2, FI: 2 }],
      ["Engage the alliance at arm's length.", "I will take the sun without taking sides.", "You cooperate selectively without full alignment, preserving your balance. You gain less finance and tech, but neither great power can claim you have chosen its rival's camp.", { GL: 2, RE: 2 }])),

  // ── IMO shipping-emissions rules ────────────────────────────────────────────
  ax("Maritime Affairs Envoy", "ambassador", ["shipping", "emissions", "industry"],
    sx("New global rules would force your shipping and the shipbreaking industry toward costly green standards — clean for the world, brutal for an industry built on cheap, dirty practices. The envoy asks whether to embrace the rules early or fight for a developing-nation exemption.",
      ["Embrace the green shipping standards early.", "A clean fleet is the only fleet with a future.", "You adopt the standards ahead of the curve. The shipping and breaking industries groan at the retooling cost, but you position the country as a clean-maritime leader rather than a dirty laggard.", { GL: 4, EN: 4, FI: -4 }],
      ["Fight for a developing-nation exemption.", "The rich greened on dirty growth; let me grow first.", "You push for a carve-out to protect the cheap, dirty industry a while longer. The industry breathes, and the country is cast among the polluters resisting a cleaner sea.", { FI: 2, EN: -4, GL: -2 }])),

  // ── Nurse / skilled-migration pact ──────────────────────────────────────────
  ax("Skilled Migration Envoy", "ambassador", ["nurses", "skilled-migration", "brain-drain"],
    sx("Rich nations short of nurses offer a managed migration pact — training and good jobs abroad for your nurses, and remittances home — but it would drain the very health workers your own under-staffed hospitals desperately need. The envoy asks how to balance it.",
      ["Sign the managed nurse-migration pact.", "A trained nurse abroad sends home what ten clinics cannot earn.", "You sign and your nurses gain good foreign jobs and send back remittances. The income and goodwill are real, and your own short-staffed wards lose the very hands they trained and needed.", { FI: 6, GL: 4, EN: -6 }],
      ["Restrict the outflow to protect home care.", "I will not export the nurses my own sick are dying for.", "You cap the skilled outflow to keep nurses at home. The wards stay better staffed, but the foreign jobs and remittances are forgone and the trained chafe at being held back.", { EN: 6, FI: -4, GL: -2 }])),

  // ── Body-repatriation and migrant insurance ─────────────────────────────────
  ax("Expatriate Welfare Director", "relief", ["migrants", "death", "insurance"],
    sx("Migrant workers' bodies come home by the thousands, and grieving families bear the crushing cost of repatriation and burial alone. The director wants a state-funded repatriation and death-insurance scheme; the finance hawks call it an open-ended cost.",
      ["Fund repatriation and migrant death-insurance.", "A worker who died earning for the nation comes home with dignity.", "You build the scheme covering repatriation and a death payout. The cost is real and ongoing, but grieving families are spared ruin, and the migrants who power the economy are honoured in death.", { EN: 8, GL: 2, FI: -4 }],
      ["Leave repatriation costs to families.", "An open-ended burial fund is a bottomless line.", "You leave the costs to the bereaved. The budget is protected, and families already shattered by loss are crushed further by the bill to bring their dead and their breadwinner home.", { FI: 4, EN: -6 }])),

  // ── Tipaimukh-style upstream dam ────────────────────────────────────────────
  ax("Transboundary Water Envoy", "ambassador", ["india", "dam", "downstream"],
    sx("India is building a large dam upstream on a shared river of your northeast, which could wreck the downstream flow, fisheries, and farms of a whole region. The envoy can mount a hard international and bilateral campaign against it, or seek a quiet share of its benefits.",
      ["Campaign hard against the upstream dam.", "A dam that drowns my downstream is no neighbour's right.", "You take the fight to Delhi and the international forums. The relationship strains and the dam may proceed anyway, but you put downstream rights on the record and rally regional and global concern.", { GL: 2, RE: 2, EN: 2, FI: -2 }],
      ["Seek a quiet share of the dam's benefits.", "If the dam is coming, let me draw water and power from it.", "You negotiate quietly for irrigation and power shares rather than opposing the dam. You gain some benefit and Delhi's warmth, and your downstream region's losses are traded for a manageable cut.", { RE: 2, GL: 2, EN: -2 }])),

  // ── War-reparations claim on Pakistan ───────────────────────────────────────
  ax("International Law Counsel", "ambassador", ["pakistan", "reparations", "1971"],
    sx("Legal scholars urge a formal international claim against Pakistan for the 1971 genocide and for the share of undivided assets never settled. The counsel says it would be just and rally the survivors; it would also enrage Islamabad and complicate every regional forum.",
      ["Pursue the reparations and asset claim.", "A debt of blood and treasure unpaid is a debt still owed.", "You file the formal claims. Survivors and historians cheer the long-overdue reckoning, Islamabad erupts and blocks you in regional forums, and a fifty-year-old account is finally pressed.", { EN: 4, GL: 2, FI: 2 }],
      ["Leave the old claims dormant.", "A claim that wins nothing but Islamabad's wrath is a luxury.", "You let the reparations question lie. Regional diplomacy stays smoother and Islamabad calmer, and the survivors learn their reckoning is, once again, deferred for the convenience of statecraft.", { GL: 2, EN: -4 }])),

  // ── RCEP / mega-trade bloc ──────────────────────────────────────────────────
  ax("Trade Strategy Envoy", "ambassador", ["rcep", "trade-bloc", "competition"],
    sx("The vast Asian trade bloc invites you to join — tariff-free access to enormous markets, and a flood of cheap manufactured imports that could swamp domestic industry not ready to compete. The envoy asks whether to join now or protect industry and wait.",
      ["Join the mega trade bloc.", "Outside the bloc is outside the future of trade.", "You join and your exporters gain access to colossal markets. The cheap imports also pour in, and domestic industries not yet competitive buckle, forcing a wrenching, painful adjustment.", { GL: 4, FI: 2, EN: -4 }],
      ["Stay out and ready your industry first.", "I will not throw my factories into the deep before they can swim.", "You delay joining to protect and prepare domestic industry. The home producers get breathing room, but your exporters miss the bloc's vast markets and you risk being left outside the regional trade order.", { EN: 2, FI: -2, GL: -2 }])),

  // ── Cyber-norms / lethal-autonomy at the UN ─────────────────────────────────
  ax("Disarmament Envoy", "ambassador", ["cyber", "autonomous-weapons", "norms"],
    sx("At the UN, small states are pushing norms against cyber-attacks on civilian infrastructure and against killer autonomous weapons. The envoy can lead this moral cause, winning standing — or stay quiet to keep open your own option of acquiring such capabilities one day.",
      ["Lead the push for restraint norms.", "A small state's shield is the rule of law.", "You champion the norms against cyber-attacks and autonomous weapons. You win moral standing among the vulnerable, and you forswear, on the record, capabilities you might one day have wanted.", { GL: 6, EN: 2 }],
      ["Stay quiet to keep your options open.", "Norms bind the weak while the strong build the weapons.", "You stay silent to preserve your future options. You keep every capability on the table, and you forgo the standing and solidarity that leading the cause would have brought.", { MI: 2, GL: -2 }])),

  // ── Maldives / small-neighbour rivalry ──────────────────────────────────────
  ax("Indian Ocean Envoy", "ambassador", ["maldives", "neighbours", "influence"],
    sx("A small island neighbour, courted by the rival giant, offers you a partnership to balance against it — ports, fisheries, solidarity. The envoy notes it builds your regional weight and quietly annoys the giant whose backyard you would be stepping into.",
      ["Build the small-neighbour partnership.", "Many small friends balance one large rival.", "You forge the partnership and gain a foothold and an ally in the giant's backyard. Your regional weight grows, and the great power whose sphere you have entered marks the intrusion.", { GL: 4, MI: 2, FI: -2 }],
      ["Keep your distance from the rivalry.", "A small state caught between giants chooses neither's quarrel.", "You decline to entangle yourself in the island's great-power tug-of-war. You keep your balance and your calm, and forgo the influence the partnership would have bought.", { GL: 2, MI: 2 }])),

  // ── ICAO / aviation-safety rating ───────────────────────────────────────────
  ax("Aviation Diplomacy Officer", "ambassador", ["aviation", "safety-rating", "flights"],
    sx("International aviation regulators have flagged your safety oversight, threatening to bar your national carrier from lucrative Western routes unless you overhaul the regulator. The fix is costly and steps on aviation cronies; the alternative is losing the routes and the prestige.",
      ["Overhaul oversight to keep the routes.", "A grounded flag carrier is a humiliation in the sky.", "You rebuild the aviation regulator to international standard. The cost is real and the aviation cronies lose their cosy arrangements, but the carrier keeps its prized Western routes and the country its credibility.", { GL: 6, FI: -4, FA: -2 }],
      ["Let the rating slip and lose the routes.", "A full regulatory overhaul is a budget I would rather spend elsewhere.", "You decline the costly overhaul. The cronies keep their arrangements, the carrier is barred from the lucrative routes, and the downgrade becomes a standing mark against the country's competence.", { FA: 2, FI: 2, GL: -6 }])),

  // ── Diaspora cultural diplomacy ─────────────────────────────────────────────
  ax("Cultural Diplomacy Envoy", "ambassador", ["diaspora", "soft-power", "culture"],
    sx("A network of cultural centres abroad would showcase the country's heritage, bind the diaspora, and build soft power — a costly long-term investment, or a vanity the finance hawks would rather not fund when there are wards and roads unbuilt at home.",
      ["Fund the global cultural-centre network.", "A nation that tells its own story abroad is never small.", "You fund the cultural centres worldwide. The diaspora is bound closer and the country's soft power grows, at a cost the hawks resent for a return measured in decades of goodwill.", { GL: 4, EN: 2, FI: -4 }],
      ["Keep cultural diplomacy minimal.", "Soft power is cold comfort to a patient in an unbuilt ward.", "You keep cultural outreach modest and spend at home. The wards and roads benefit, and a chance to project the nation's heritage and bind its diaspora goes largely untaken.", { EN: 2, FI: 2, GL: -2 }])),

  // ── Coastal-shipping agreement ──────────────────────────────────────────────
  ax("Maritime Trade Negotiator", "ambassador", ["india", "coastal-shipping", "trade"],
    sx("A coastal-shipping agreement with India would cut freight costs and boost trade by letting ships ply directly between your ports and theirs — efficient, and a deeper economic enmeshment that nationalists fear hands your coastal trade to a giant's fleets.",
      ["Sign the coastal-shipping agreement.", "Cheaper freight floats every boat.", "You sign and freight costs fall as direct sailings begin. Trade quickens, and the nationalists warn that your coastal commerce now rides increasingly on a giant's hulls and goodwill.", { FI: 4, GL: 2, EN: 2, MI: -2 }],
      ["Protect your own coastal fleet.", "A coast served by foreign ships is a coast half-owned.", "You decline to open coastal shipping, protecting your own carriers. Freight stays dearer and trade slower, but the coastal trade and the fleet that serves it stay in your own hands.", { MI: 2, FI: -2, GL: -2 }])),

  // ── D-8 / developing-nation leadership ──────────────────────────────────────
  ax("Multilateral Affairs Envoy", "ambassador", ["d8", "developing-nations", "leadership"],
    sx("A grouping of developing Muslim-majority economies offers you a leadership role — prestige and south-south trade ties, but also entanglement in the bloc's internal rivalries and a tilt toward members your Western partners eye warily.",
      ["Take the leadership role.", "Leadership among peers is leverage among giants.", "You take the lead and gain prestige and south-south trade links. You also inherit the bloc's quarrels, and your Western partners note your warmer embrace of members they distrust.", { GL: 4, FI: 2, EN: -2 }],
      ["Stay a quiet member.", "A crown in a quarrelsome bloc is a headache with a title.", "You keep a low profile in the grouping. You avoid its internal feuds and keep your Western partners easy, and forgo the prestige and the trade-deepening the leadership would have brought.", { GL: 2, FI: -2 }])),

  // ── Foreign-preacher visas ──────────────────────────────────────────────────
  ax("Religious Affairs Envoy", "cleric", ["preachers", "visas", "ideology"],
    sx("Charismatic foreign preachers draw vast crowds and please the devout — and some carry hardline ideologies that unsettle the country's pluralist faith and rattle minorities. The envoy asks whether to keep welcoming them freely or to vet and restrict.",
      ["Welcome the foreign preachers freely.", "The faithful will not be denied their teachers.", "You keep the doors open to the foreign preachers. The devout are gratified and the crowds vast, and a harder, imported orthodoxy spreads, and the minorities and moderates grow quietly uneasy.", { FA: 2, EN: -6, GL: -2 }],
      ["Vet and restrict the hardliners.", "A pulpit for hire to extremism is a pulpit I must watch.", "You screen the visiting preachers and bar the hardliners. The devout grumble at the gatekeeping and the hardliners cry persecution, but the country's pluralist faith and its minorities keep their breathing room.", { EN: 4, GL: 2, FA: -4 }])),

  // ── Ganges treaty renewal ───────────────────────────────────────────────────
  ax("River Basin Negotiator", "ambassador", ["india", "ganges", "treaty"],
    sx("The decades-old Ganges water-sharing treaty is up for renewal, and the dry-season flows have dwindled below even its guaranteed minimums. The negotiator can fight hard for a better, enforceable deal — straining ties — or renew the old terms to keep Delhi content.",
      ["Fight for a better, enforceable treaty.", "A treaty that delivers less than it promises is a drought with a signature.", "You push hard for improved, enforceable terms and guaranteed dry-season flows. Delhi resists and the talks grind, but you refuse to renew a deal that has left your fields parched in the lean months.", { RE: 4, GL: -2, EN: 2 }],
      ["Renew the old terms to keep Delhi content.", "A flawed treaty kept beats a quarrel that dries the river entirely.", "You renew the existing terms to preserve the relationship. Delhi is pleased and the broader ties stay warm, and your dry-season farmers keep making do with flows that fall short of even the promised minimum.", { GL: 4, RE: -4, EN: -2 }])),

  // ── Citizenship-by-investment scheme ────────────────────────────────────────
  ax("Investment Diplomacy Officer", "shadow", ["citizenship", "investment", "security"],
    sx("A scheme selling citizenship or residency to wealthy foreigners would raise quick capital and attract investment — and risk laundering fugitives, criminals, and sanctioned money into the country under a passport. The officer asks whether to launch it.",
      ["Launch the citizenship-by-investment scheme.", "A passport is an asset; let the rich buy it.", "You sell citizenship to wealthy foreigners and capital flows in. So do fugitives, launderers, and sanctioned money buying a clean new identity, and the scheme becomes a global money-laundering byword.", { FI: 6, GL: -4, MI: -2 }],
      ["Reject selling citizenship.", "A nationality for sale is a border for sale.", "You refuse to sell citizenship. The quick capital is forgone, but you do not turn your passport into a laundering instrument for the world's fugitives and dirty money.", { GL: 2, MI: 2, FI: -2 }])),

  // ── BSF border-killing diplomacy ────────────────────────────────────────────
  ax("Border Diplomacy Envoy", "ambassador", ["india", "border-killings", "diplomacy"],
    sx("India's border force keeps shooting your unarmed citizens dead along the frontier, and each killing inflames the public. The envoy can make it a loud, public diplomatic confrontation — straining ties — or pursue quiet protests that preserve the relationship but change nothing.",
      ["Make the killings a public confrontation.", "My citizens' blood will not be a footnote to friendship.", "You raise the border killings loudly in every forum and summit. Delhi bristles and ties strain, but the public sees a government that will not let its dead be swept under the diplomatic rug.", { EN: 6, GL: -2, MI: 2 }],
      ["Pursue quiet, deniable protests.", "A loud quarrel costs more than it saves the dead.", "You confine your protest to private channels. The relationship stays smooth, the killings continue unchanged, and the public reads your quiet as the price you put on their lives.", { GL: 4, EN: -6 }])),

  // ── REDD+ forest-protection finance ─────────────────────────────────────────
  ax("Climate Finance Envoy", "ambassador", ["redd", "forests", "communities"],
    sx("A REDD+ scheme would pay you to protect your forests against deforestation — real money, if you can prove and police the protection, and if the forest-dwelling communities are fairly cut in rather than evicted to satisfy distant auditors.",
      ["Adopt REDD+ with community benefit-sharing.", "Pay to protect, and pay those who live by the trees.", "You take the REDD+ money and route benefits to the forest communities who guard the trees. The monitoring is demanding, but conservation gains funding and the communities a stake rather than an eviction.", { EN: 6, RE: 4, FI: 2, GL: 2 }],
      ["Take the money, manage forests centrally.", "The carbon is the state's to sell.", "You take the REDD+ funds but keep control central, sidelining the communities. The money flows and the auditors are satisfied on paper, and the resentful, excluded forest-dwellers undermine the very protection you are paid for.", { FI: 4, RE: -2, EN: -2 }])),

  // ── Arms Trade Treaty accession ─────────────────────────────────────────────
  ax("Disarmament Envoy", "ambassador", ["arms-trade", "treaty", "standing"],
    sx("Acceding to the global Arms Trade Treaty would burnish your standing and commit you to controls on weapons transfers — and constrain some murky procurement and re-export arrangements your security establishment values. The envoy asks whether to sign.",
      ["Accede to the Arms Trade Treaty.", "A nation that signs for restraint is trusted with arms.", "You accede and gain standing as a responsible state. The security establishment loses some of its murkier procurement and re-export latitude, and grumbles, but your international credibility grows.", { GL: 6, MI: -2 }],
      ["Stay out to keep procurement free.", "Treaties bind the buyer while the sellers profit.", "You stay outside the treaty. The security establishment keeps its opaque arms dealings, and you forgo the standing that accession would have lent you in the disarmament forums.", { MI: 2, GL: -4 }])),

  // ── Indian-Ocean Rim chairmanship ───────────────────────────────────────────
  ax("Maritime Diplomacy Envoy", "ambassador", ["iora", "chairmanship", "prestige"],
    sx("You are offered the rotating chairmanship of the Indian Ocean rim body — a platform to drive the blue economy and maritime security agenda. It is prestigious and costly to host well, and it thrusts you into the middle of the great powers' Indian Ocean contest.",
      ["Take the chairmanship and drive the agenda.", "He who chairs the table shapes the meal.", "You take the chair and host a flagship summit. You shape the maritime agenda and gain prestige, at real cost, and find yourself squarely in the middle of the great powers' oceanic rivalry.", { GL: 6, FI: -4, MI: -2 }],
      ["Decline the costly chairmanship.", "A chair in a contested sea is a seat in a crossfire.", "You pass on the chairmanship. You save the cost and avoid the great-power crossfire, and the platform and prestige go to a rival who will shape the agenda without you.", { FI: 2, GL: -2 }])),

  // ── Genocide-recognition campaign ───────────────────────────────────────────
  ax("International Law Counsel", "ambassador", ["1971", "genocide", "recognition"],
    sx("A global campaign to win formal international recognition of the 1971 genocide would honour the three million dead and cement the national narrative — a costly, years-long diplomatic effort that would also reopen wounds and antagonise Pakistan and its friends.",
      ["Launch the genocide-recognition campaign.", "Three million dead deserve the world's acknowledgment.", "You mount the global recognition campaign. It is slow and costly and Pakistan and its friends resist, but parliaments begin to recognise the genocide, and the martyrs gain the world's record of their murder.", { EN: 6, GL: 2, FI: -2 }],
      ["Leave the recognition campaign aside.", "A decades-long crusade for a word costs more than it wins.", "You set the campaign aside as a costly distraction. Diplomacy stays smoother, and the survivors and the descendants of the dead watch the world's acknowledgment deferred yet again.", { GL: 2, EN: -4 }])),

  // ── Camp ration cuts / donor fatigue ────────────────────────────────────────
  ax("Refugee Affairs Secretary", "relief", ["rohingya", "rations", "donors"],
    sx("Donor fatigue has cut the world food agency's funding for the refugee camps, and rations are being slashed toward starvation. The secretary asks whether to mount a loud global appeal and dip into your own strained budget, or let the cuts fall and the camps fend.",
      ["Appeal loudly and backfill the rations.", "Starving the stateless on my soil is a famine I would own.", "You launch a high-profile appeal and divert scarce funds to keep rations up. The budget strains and the world is shamed into some giving, and the camps are pulled back from hunger you would have answered for.", { EN: 6, GL: 4, FI: -6 }],
      ["Let the ration cuts fall.", "I cannot feed the world's refugees from my own thin granary.", "You let the cuts bite. The budget is spared, and hunger, desperation, and militancy rise in the camps, the suffering and its security fallout both landing on your doorstep.", { FI: 4, EN: -6, MI: -2 }])),

  // ── Third-country resettlement ──────────────────────────────────────────────
  ax("Refugee Affairs Secretary", "ambassador", ["rohingya", "resettlement", "burden"],
    sx("A handful of rich nations offer to resettle a small share of the refugees abroad — easing your burden, but a token number that lets them claim virtue while leaving you the million. The secretary asks whether to welcome it gratefully or press for far more.",
      ["Welcome the token resettlement.", "A thousand resettled is a thousand fewer mouths.", "You accept the modest resettlement gratefully. A few thousand find new homes abroad, the rich nations bank their virtue, and you are left thanking them for taking a sliver of the burden they helped create.", { GL: 2, EN: 2 }],
      ["Press hard for real burden-sharing.", "A million on my soil is not eased by a gesture.", "You accept the offer but loudly demand far greater resettlement and funding. The donors bristle at being pushed, but you refuse to let a token gesture pass for the burden-sharing the crisis actually demands.", { GL: 2, EN: 2, FI: -2 }])),

  // ── Peacekeeper-conduct scandal ─────────────────────────────────────────────
  ax("Peacekeeping Affairs Officer", "general", ["peacekeeping", "scandal", "discipline"],
    sx("Your blue helmets on a UN mission are accused of abuse and exploitation of the local population — a scandal that threatens the lucrative peacekeeping role and the nation's proud record. The officer asks whether to investigate transparently or quietly protect the troops.",
      ["Investigate transparently and discipline.", "A blue helmet that preys on the protected shames the flag.", "You order a transparent investigation and court-martial the guilty. The army resents the exposure, but the UN's trust and your peacekeeping standing are preserved by being seen to police your own.", { GL: 6, EN: 4, MI: -4 }],
      ["Quietly protect the troops.", "I do not hand my soldiers to a foreign scandal.", "You shield the accused and stonewall the inquiry. The army is grateful, and the unaddressed abuses leak anyway, staining the peacekeeping record and threatening the role and the income it brings.", { MI: 4, FA: 2, EN: -4, GL: -6 }])),

  // ── Myanmar sanctions and jade trade ────────────────────────────────────────
  ax("Sanctions Policy Envoy", "ambassador", ["myanmar", "sanctions", "trade"],
    sx("The world is sanctioning Myanmar's junta, and you are pressed to join — cutting the quiet border trade in jade, timber, and goods that some of your own businessmen profit from. The envoy asks whether to enforce the sanctions or keep the lucrative trade flowing.",
      ["Join and enforce the junta sanctions.", "I will not bankroll the generals who emptied my camps.", "You enforce the sanctions and choke the border trade. Your businessmen who profited from it howl, but you align with the world against the junta and deny it the revenue that fuels its cruelty.", { GL: 6, EN: 2, FI: -4, FA: -2 }],
      ["Keep the border trade flowing.", "My traders' profits are not Myanmar's politics.", "You keep the quiet trade open. Your businessmen prosper and the border stays busy, and you are seen propping up the very junta whose persecution flooded you with a million refugees.", { FI: 4, FA: 2, GL: -6 }])),

  // ── Nepal transit and trade ─────────────────────────────────────────────────
  ax("Connectivity Negotiator", "ambassador", ["nepal", "transit", "trade"],
    sx("Landlocked Nepal seeks transit through your territory and ports to the sea, and a deal would build south-south solidarity and trade — but every route crosses India, whose cooperation you cannot assume, and who may read the partnership as encirclement.",
      ["Pursue the Nepal transit partnership.", "Two small neighbours together weigh more than apart.", "You strike the transit deal with Nepal, building solidarity and trade. The arrangement leans on Indian cooperation you must court, and Delhi watches the small-neighbour bonding with a wary eye.", { GL: 4, FI: 2, RE: 2, MI: -2 }],
      ["Keep Nepal ties low-key.", "A partnership that needs Delhi's blessing is Delhi's to veto.", "You keep the Nepal relationship modest to avoid antagonising India. You forgo the trade and solidarity, but you do not provoke the giant whose territory every route must cross.", { GL: 2, MI: 2, FI: -2 }])),

  // ── Rupee/yuan trade settlement ─────────────────────────────────────────────
  ax("Central Bank Diplomacy Officer", "ambassador", ["currency", "de-dollarisation", "trade"],
    sx("To ease the dollar crunch, you can settle trade with big neighbours in rupees and yuan instead of dollars — saving scarce hard currency, and deepening dependence on those currencies and the powers behind them, while drawing Washington's unease.",
      ["Settle trade in rupees and yuan.", "A dollar saved is a crisis postponed.", "You shift major trade to local-currency settlement and ease the dollar drain. You also tie your trade to a neighbour's and a rival's currencies and goodwill, and Washington notes the de-dollarising tilt.", { FI: 6, RE: 2, GL: -4 }],
      ["Stick with dollar settlement.", "A pivot off the dollar is a pivot toward a new master.", "You keep trade in dollars to preserve flexibility and Washington's ease. The dollar crunch keeps biting, but you avoid binding your commerce to a neighbour's currency and the leverage it would grant.", { GL: 2, FI: -4 }])),

  // ── High-seas biodiversity treaty ───────────────────────────────────────────
  ax("Ocean Affairs Envoy", "ambassador", ["high-seas", "biodiversity", "treaty"],
    sx("A landmark treaty to protect biodiversity on the high seas beyond national waters is open for signature. Joining wins green standing and a voice in governing the global ocean; it also commits you to obligations and limits on distant-water fishing you might one day want.",
      ["Sign the high-seas biodiversity treaty.", "A healthy global ocean laps on my shores too.", "You sign and gain green standing and a seat in ocean governance. You take on obligations and forgo some future distant-water options, betting that a protected global ocean serves you in the end.", { GL: 6, RE: 2, EN: 2 }],
      ["Hold off to keep your options.", "A treaty on far seas is a constraint I need not adopt.", "You decline to sign for now. You keep your distant-water options unconstrained, and forgo the green standing and the governing voice the treaty would have brought.", { RE: 2, GL: -2 }])),

  // ── Basel hazardous-waste / shipbreaking ────────────────────────────────────
  ax("Environment Diplomacy Officer", "ambassador", ["basel", "shipbreaking", "waste"],
    sx("Global rules on hazardous-waste movement would force your shipbreaking yards to meet strict toxic-handling standards before they can import end-of-life ships — cleaner and safer, but a blow to an industry built on cheap, dirty dismantling. The officer asks whether to comply early.",
      ["Comply early with the hazardous-waste rules.", "A beach of asbestos and oil is no foundation for an industry.", "You adopt the standards ahead of requirement. The shipbreaking industry groans at the cost of safe toxic-handling, but the workers stop dying of poison and the country sheds its 'world's dirtiest beach' label.", { GL: 4, EN: 6, FI: -4 }],
      ["Resist the rules to protect the industry.", "The yards employ thousands the rules would idle.", "You resist the standards to keep the yards cheap. The industry and its jobs are protected, and the beaches stay toxic, the workers keep dying, and the country stays the destination for the world's poison ships.", { FI: 4, EN: -8, GL: -4 }])),

  // ── ASEAN dialogue-partner status ───────────────────────────────────────────
  ax("Regional Affairs Envoy", "ambassador", ["asean", "dialogue-partner", "engagement"],
    sx("You can pursue dialogue-partner status with the Southeast Asian bloc — a gateway to its markets and a louder voice on Myanmar and the Rohingya — through a long, demanding accession effort, or stay focused on your immediate South Asian neighbourhood.",
      ["Pursue ASEAN dialogue-partner status.", "My future trade and my refugee crisis both run east.", "You commit to the long courtship of the eastern bloc. The effort is demanding, but it opens a path to its markets and a stronger platform to press Myanmar on the refugees it sent you.", { GL: 4, FI: 2, EN: 2 }],
      ["Focus on the South Asian neighbourhood.", "I will master my own region before courting another.", "You concentrate on your immediate neighbourhood. The eastern markets and the ASEAN platform on Myanmar stay out of reach, but your diplomatic energy is not stretched across two regions at once.", { GL: 2, FI: -2 }])),

  // ── CITES wildlife-trade controls ───────────────────────────────────────────
  ax("Wildlife Diplomacy Officer", "ambassador", ["cites", "trafficking", "enforcement"],
    sx("International monitors threaten to sanction your wildlife trade unless you crack down on your role as a trafficking transit hub for tigers, pangolins, and rare timber. Real enforcement means confronting connected smuggling networks; ignoring it means trade sanctions.",
      ["Crack down to satisfy the monitors.", "A nation that traffics its neighbours' tigers earns the world's contempt.", "You enforce hard against the trafficking transit trade. The connected smuggling networks fight back, but you dodge the sanctions and shed the reputation as the smugglers' favourite corridor.", { GL: 6, EN: 4, FA: -4 }],
      ["Do the minimum and risk sanctions.", "The networks have patrons I cannot cross lightly.", "You make a cosmetic effort and the trafficking flows on. The connected networks stay protected, the monitors impose trade penalties, and the country's name stays mud in the conservation world.", { FA: 2, GL: -6, EN: -2 }])),

  // ── Bhutan trade and hydropower ─────────────────────────────────────────────
  ax("Regional Trade Envoy", "ambassador", ["bhutan", "trade", "hydropower"],
    sx("Tiny Bhutan offers a friendly trade and hydropower partnership — clean energy and warm south-south ties — but, like all your northern links, it runs through and depends on India's grid and goodwill, deepening the very dependence you seek to dilute.",
      ["Build the Bhutan energy partnership.", "Clean current from a friendly hill is worth the dance with Delhi.", "You forge the partnership and clean Bhutanese power and trade begin to flow. The warmth is real, and so is the deepened reliance on the Indian grid and goodwill every watt must cross.", { GL: 4, RE: 4, EN: 2, MI: -2 }],
      ["Keep the Bhutan link modest.", "Another route through Delhi is another leash in Delhi's hand.", "You keep the Bhutan relationship small. You forgo the clean power and the friendly ties, and avoid adding one more India-dependent link to a chain you already find too tight.", { MI: 2, RE: -2, GL: -2 }])),

  // ── IMF SDR / reserve allocation ────────────────────────────────────────────
  ax("External Finance Secretary", "ambassador", ["imf", "sdr", "reserves"],
    sx("A global allocation of the IMF's reserve asset has handed you a windfall of unconditional reserves. The secretary asks whether to bank it quietly as a buffer against the dollar crunch, or spend it fast on visible development and relief while it sits unspent.",
      ["Bank the SDR windfall as a buffer.", "Free reserves are a wall against the next storm.", "You hold the windfall as reserves. The buffer steadies the currency and reassures lenders, and critics ask why a poor country sits on idle money while needs go unmet.", { FI: 6, GL: 2, EN: -2 }],
      ["Spend it on development and relief now.", "Idle reserves feed no one; spent ones build.", "You convert the windfall into visible projects and relief. The public feels the benefit and the development is real, and the buffer that might have cushioned the next currency shock is gone.", { EN: 6, FI: -4 }])),

  // ── UN special envoy on Myanmar ─────────────────────────────────────────────
  ax("Multilateral Affairs Envoy", "ambassador", ["myanmar", "un", "diplomacy"],
    sx("A UN special envoy seeks to broker the Rohingya's safe return and Myanmar's accountability, and asks you to host talks and lend your weight. It would center you in the diplomacy and the world's gratitude; it would also entangle you in a process that may fail and consume capital.",
      ["Host the talks and drive the process.", "The crisis is on my soil; the solution should run through my hands.", "You host the envoy's talks and throw your weight behind the process. You gain the world's gratitude and a central role, and you stake real diplomatic capital on a process that may yet collapse.", { GL: 6, EN: 2, FI: -2 }],
      ["Keep the process at arm's length.", "I will not own a failure the great powers will not fund.", "You cooperate minimally with the envoy. You preserve your capital for surer gains, and forgo the central role and the credit, leaving the stalled crisis to drift without your push.", { GL: 2, EN: -2 }])),

  // ── Statelessness convention ────────────────────────────────────────────────
  ax("International Law Counsel", "ambassador", ["statelessness", "convention", "rights"],
    sx("Acceding to the global conventions on statelessness would commit you to protecting and eventually integrating the stateless on your soil — the Biharis, some Rohingya-descended, others — a humanitarian and reputational gain that also ties your hands on a politically fraught question.",
      ["Accede to the statelessness conventions.", "A person with no nation is a wound on every nation.", "You accede and commit to protecting the stateless. The humanitarian credit is real, and you tie your own hands on integration questions your hardliners would rather keep open and deniable.", { GL: 6, EN: 4, FA: -2 }],
      ["Stay outside the conventions.", "A binding commitment on the stateless is a politics I cannot control.", "You decline to accede, keeping your discretion on the stateless. You avoid the binding obligations and the domestic fights, and forgo the standing that accession would have lent you.", { FA: 2, GL: -4, EN: -2 }])),

  // ── Plastics treaty negotiation ─────────────────────────────────────────────
  ax("Environment Diplomacy Officer", "ambassador", ["plastics", "treaty", "industry"],
    sx("A global treaty to cap plastic production is being negotiated, and you can join the ambitious bloc demanding hard limits — winning green standing — or side with the producers' bloc resisting caps to protect your own growing plastics and packaging industry.",
      ["Join the ambitious anti-plastics bloc.", "A planet choking on plastic chokes my rivers first.", "You join the bloc demanding hard production caps. You win green standing and align with the future, and your domestic plastics industry warns of the cost of the limits you have embraced.", { GL: 4, EN: 6, FI: -2 }],
      ["Side with the producers' bloc.", "I will not cap an industry that employs and earns for me.", "You join the resisters protecting the plastics industry. The industry is shielded and the jobs held, and the country is counted among those blocking a treaty its own choked rivers desperately need.", { FI: 2, EN: -4, GL: -2 }])),

  // ── Loss-and-damage fund board seat ─────────────────────────────────────────
  ax("Climate Diplomacy Envoy", "ambassador", ["loss-and-damage", "fund", "leadership"],
    sx("The new global loss-and-damage fund is forming its board, and you can fight for a frontline-nation seat to shape who gets the money — a prize of influence and a chance to steer funds home — at the cost of the time, capital, and rivalries that come with the role.",
      ["Fight for the fund board seat.", "A hand on the tap directs the water.", "You win the board seat after a hard campaign. You gain influence over who gets the climate money and a chance to steer it toward frontline nations like yours, and inherit the rivalries of the role.", { GL: 6, EN: 2, FI: 2 }],
      ["Stay off the board and just apply for funds.", "Better a clean applicant than a conflicted gatekeeper.", "You skip the board contest and focus on drawing funds as an applicant. You avoid the politics and rivalries, and forgo the influence to shape where the world's climate reparations actually flow.", { EN: 2, GL: -2 }])),

  // ── Seafarer welfare / flag registry ────────────────────────────────────────
  ax("Maritime Labour Officer", "people", ["seafarers", "labour", "shipping"],
    sx("Your seafarers crew the world's merchant fleets, often abandoned, unpaid, or stranded on flag-of-convenience ships with no protection. The officer wants to ratify the maritime labour convention and build a seafarer-welfare system; the shipping agents resist the cost and oversight.",
      ["Ratify the convention, protect seafarers.", "A sailor abandoned at a foreign port is a citizen failed at sea.", "You ratify the maritime labour convention and build real seafarer protections. The agents grumble at the oversight, but your sailors gain recourse when abandoned, unpaid, or stranded far from home.", { EN: 6, GL: 4, FI: -2, FA: -2 }],
      ["Leave seafarers to the agents.", "The shipping trade runs on the agents I would burden.", "You leave the seafarers unprotected. The agents are content and the trade smooth, and your sailors keep being abandoned and unpaid on distant ships under flags of convenience.", { FI: 2, EN: -6 }])),

  // ── Debt-for-climate swap ───────────────────────────────────────────────────
  ax("External Finance Secretary", "ambassador", ["debt", "climate-swap", "conservation"],
    sx("A creditor offers to forgive a chunk of your foreign debt in exchange for a binding commitment to spend the freed money on protecting your forests and coasts. The swap eases the debt and funds conservation — and hands a foreign creditor a say over your environmental spending.",
      ["Take the debt-for-climate swap.", "A debt traded for forests is a debt twice repaid.", "You take the swap, easing the debt and funding conservation. The relief and the green spending are real, and a foreign creditor now holds a say over how you protect your own land.", { FI: 4, EN: 4, RE: 2, GL: 2 }],
      ["Decline the conditioned swap.", "I will not let a creditor manage my coastline.", "You decline the swap to keep control of your environmental spending. The debt stays heavier and the conservation unfunded by it, but no foreign creditor dictates how you tend your forests and coasts.", { FI: -2, GL: -2 }])),

  // ── Child-labour convention enforcement ─────────────────────────────────────
  ax("Labour Diplomacy Officer", "ambassador", ["child-labour", "convention", "exports"],
    sx("Global scrutiny falls on child labour in your supply chains — leather, fish-drying, brickfields — threatening export bans. The officer can drive hard enforcement and rehabilitation, at real cost to families who rely on the children's wages, or manage the optics and hope.",
      ["Drive enforcement and child rehabilitation.", "A childhood spent in a brickfield is a future burned.", "You enforce the ban hard and fund schooling and family support for the freed children. The transition hurts families who relied on the wages, but the children return to childhood and the exports stay clean.", { EN: 8, GL: 6, FI: -4 }],
      ["Manage the optics and hope.", "A sudden ban starves the families it means to save.", "You make a show of compliance while the child labour persists in the shadows. The families keep the wages, the optics hold for now, and one exposé could trigger the export bans you dread.", { FI: 2, EN: -6, GL: -4 }])),

  // ── Tin Bigha / enclave aftercare ───────────────────────────────────────────
  ax("Border Affairs Secretary", "people", ["enclaves", "border", "integration"],
    sx("Years after the historic enclave exchange with India resolved a tangle of stranded territories, the former enclave-dwellers who chose your citizenship still lack roads, schools, and services, languishing in limbo. The secretary asks whether to fund their full integration or let them wait.",
      ["Fund full integration of the enclave-dwellers.", "A citizen I chose to claim I must not abandon.", "You fund roads, schools, and services for the former enclave residents. The cost is modest and the cause unglamorous, but a stranded people, finally claimed, are made whole as citizens.", { EN: 6, GL: 2, FI: -4 }],
      ["Leave the integration to drift.", "The enclaves are settled on the map; the rest can wait.", "You leave the former enclaves under-served. The budget is spared, and the people who chose your flag in the historic exchange go on waiting in a limbo the map says is over.", { FI: 2, EN: -4 }])),

  // ── Mercury / Minamata e-waste link ─────────────────────────────────────────
  ax("Environment Diplomacy Officer", "ambassador", ["mercury", "treaty", "health"],
    sx("The global mercury convention would force you to phase out mercury in your gold-refining, batteries, and small industry — protecting health and waterways, at real cost to informal operators who poison themselves and their rivers for a living. The officer asks whether to commit fully.",
      ["Commit fully to the mercury phase-out.", "A river laced with mercury poisons generations.", "You commit to the phase-out and fund cleaner methods. The informal operators resist the cost and disruption, but the mercury draining into the rivers and the bloodstreams of the poor begins to ebb.", { EN: 6, GL: 4, FI: -4 }],
      ["Seek a long developing-nation timeline.", "A sudden ban idles the poor who refine by hand.", "You sign but negotiate a long, slow timeline. The informal operators keep their livelihoods a while longer, and the mercury keeps flowing into the water and the workers for years yet.", { FI: 2, EN: -2, GL: -2 }])),

  // ── Rice import from India ──────────────────────────────────────────────────
  ax("Food Diplomacy Envoy", "ambassador", ["india", "rice", "food-security"],
    sx("A poor harvest has left you needing emergency rice imports, and India can supply fast and cheap — deepening food dependence on a neighbour who has banned exports on a whim before — or you can pay more to source from distant, less reliable suppliers for the sake of independence.",
      ["Import the cheap, fast Indian rice.", "A hungry country cannot afford its pride.", "You buy the Indian rice and the shortage eases quickly and cheaply. Your food security leans harder on a neighbour who has weaponised exports before, and may again at the worst moment.", { EN: 6, FI: 2, MI: -4 }],
      ["Source from distant suppliers for independence.", "A granary hostage to one neighbour is a famine waiting on his mood.", "You pay more and wait longer for rice from varied distant sources. The shortage bites harder this season, but you refuse to deepen a food dependence a neighbour could switch off at will.", { MI: 2, FI: -4, EN: -2 }])),

  // ── Biodiversity COP commitments ────────────────────────────────────────────
  ax("Biodiversity Diplomacy Officer", "ambassador", ["biodiversity", "cop", "targets"],
    sx("At the global biodiversity summit you can pledge to protect a third of your land and waters — winning green acclaim and funding — but the protected areas would constrain fishing, farming, and development on land your growing population presses hard against.",
      ["Pledge the ambitious protection target.", "A nation that saves its nature saves itself.", "You pledge to protect a third of your territory. The green acclaim and conservation funding flow, and the protected zones constrain the fishing, farming, and building your crowded population demands.", { GL: 4, EN: 4, RE: 2, FI: -2 }],
      ["Pledge a modest, achievable target.", "I will not fence off land my people need to eat.", "You pledge only what your crowded country can spare. The acclaim is thinner and the funding smaller, but you do not lock away land and waters your growing population presses upon for survival.", { EN: 2, RE: 2, GL: -2 }])),

  // ── Regional reserve-pooling arrangement ────────────────────────────────────
  ax("Central Bank Diplomacy Officer", "ambassador", ["reserves", "regional-pool", "stability"],
    sx("A regional currency-reserve pooling arrangement would let member states lend each other reserves in a crisis — a mutual safety net — but it requires contributing your own scarce reserves and accepting collective oversight of your monetary affairs.",
      ["Join the regional reserve pool.", "A safety net shared catches us all.", "You join the pool, contributing reserves for a mutual crisis backstop. You gain a safety net larger than your own buffer, and accept some collective oversight of your monetary affairs.", { FI: 4, GL: 4, EN: -2 }],
      ["Keep your reserves wholly your own.", "A pooled reserve is a reserve I do not fully command.", "You decline to pool your scarce reserves. You keep full control of your buffer, and forgo the larger mutual safety net that might have caught you in the next crisis.", { FI: 2, GL: -2 }])),

  // ── Cluster-munitions / landmine ban ────────────────────────────────────────
  ax("Disarmament Envoy", "ambassador", ["landmines", "ban", "standing"],
    sx("Joining the global bans on landmines and cluster munitions would burnish your humanitarian standing and commit you to clearing and forswearing such weapons — constraining your military's options along tense borders the brass would rather keep mineable.",
      ["Join the landmine and cluster bans.", "A weapon that maims the farmer long after the war is no defence.", "You accede to the bans, winning humanitarian standing. The army loses the option of mining its tense borders and grumbles, but you align with the world against weapons that maim civilians for decades.", { GL: 6, EN: 2, MI: -4 }],
      ["Stay out to keep the military's options.", "A nation with hard borders cannot disarm its frontier.", "You stay outside the bans to preserve the military's options. The brass keeps its mines and munitions, and you are counted among the holdouts clinging to weapons the world has renounced.", { MI: 4, GL: -4 }])),

  // ── Donor-conference for the camps ──────────────────────────────────────────
  ax("Refugee Affairs Secretary", "ambassador", ["rohingya", "donors", "burden-sharing"],
    sx("You can convene a major international donor conference to fund the refugee response and pressure the world to share the burden — a diplomatic showpiece that could raise real money, or fall flat amid donor fatigue and leave you exposed as unable to rally support.",
      ["Convene the international donor conference.", "If the world made this crisis, the world can fund it.", "You host the donor conference. It raises real funds and re-centres the world's attention on the burden you carry, and risks the embarrassment if the pledges prove thin and slow to arrive.", { GL: 4, EN: 4, FI: 2 }],
      ["Manage the response quietly.", "A conference that flops advertises my weakness.", "You handle the refugee funding through quiet bilateral channels. You avoid the risk of a flat showpiece, and forgo the money and the global pressure a successful conference might have generated.", { FI: -2, EN: -2 }])),
];
