// FINANCE — Finance Ministry (Motijheel). Primary metric: FI.
// Real issues: dwindling forex reserves, IMF tranches, the default-loan/banking
// scandals, remittance vs hundi channels, RMG buyer leverage, megaproject debt,
// capital flight, inflation and subsidy politics, money laundering.
const sx = (prompt, left, right) => ({ prompt, left, right });
const ax = (speaker, portrait, tags, ...stages) => ({ speaker, portrait, tags, stages });

export const FINANCE = [
  // ── The reserves crisis ─────────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["reserves", "forex", "imf"],
    sx("The Governor lays the reserves chart on your desk — sliding toward three months of imports. \"We've been counting money we don't have. The real number is worse, and the IMF will see through it at the next review.\"",
      ["Keep publishing the flattering number.", "Confidence is a currency too.", "The headline reserves look calm; importers and rating agencies quietly stop believing you, and the black-market dollar climbs.", { FI: 4, GL: -8, EN: -4 }],
      ["Publish the true, lower figure.", "A lie in the books is a run waiting to happen.", "The honesty stings the markets for a week, then steadies them. The IMF, reassured by candour, eases the next tranche.", { FI: -6, GL: 10, MI: -4 }]),
    sx("You've been burning reserves to hold the taka's peg. The Governor says: let the currency float and watch prices leap, or keep bleeding dollars to defend a number you cannot hold.",
      ["Float the taka.", "Better a fair price than an empty vault.", "The taka drops; exporters and remitters cheer while every imported good — fuel, food, medicine — jumps overnight. The streets feel it instantly.", { FI: 8, GL: 6, EN: -12 }],
      ["Keep defending the peg.", "A cliff-edge devaluation would break the poor.", "You hold the line a while longer at the cost of the vault. The reserves thin toward the danger mark and the market sniffs the weakness.", { FI: -10, EN: 6, GL: -4 }]),
    sx("Reserves hit the red line. The IMF will release an emergency tranche — but only if you cut energy subsidies the same week. Advisors warn the price shock could put people on the streets within days.",
      ["Take the tranche, cut the subsidies.", "Solvency now, anger managed later.", "Dollars refill the vault as fuel and power prices spike. The crisis on the balance sheet becomes a crisis in the bazaars.", { FI: 12, GL: 8, EN: -14, MI: -4 }],
      ["Refuse the conditions, seek bilateral loans.", "I will not detonate prices on a foreign schedule.", "You borrow from friendly capitals instead — costlier, with strings of their own. The subsidy holds; the debt stack grows more dangerous.", { FI: 4, GL: -4, EN: 6, RE: -4 }])),

  // ── Default loans / the banking cartel ──────────────────────────────────────
  ax("Bank Reform Commissioner", "official", ["banks", "default-loans", "cronies"],
    sx("The Commissioner names the rot: a few business families have looted the banks through endlessly 'rescheduled' loans — and several fund your campaigns. \"Classify them honestly and the banks look insolvent. Hide them and they rot from inside.\"",
      ["Keep rescheduling the cronies' loans.", "These men keep the party funded.", "The books stay pretty and the donors stay loyal. The hole grows in the dark, and one bank's collapse could pull down the rest.", { FI: 6, FA: 4, GL: -8, EN: -4 }],
      ["Force honest classification and recovery.", "A looted bank is a tax on every saver.", "You name the defaulters and freeze their rolling. The donors revolt and the books look grim — but depositors, and the IMF, exhale.", { FI: -8, GL: 10, MI: -4, FA: -6 }]),
    sx("Your classification drive has cornered the country's biggest loan defaulter — who owns three TV channels and a slice of your party's purse. He offers a deal: partial repayment and his media's loyalty, if you call off the rest.",
      ["Take the partial deal and the loyalty.", "Half a recovery and a friendly press is no small thing.", "He repays a fraction and his channels glow for you. Every other defaulter learns the price of getting caught is merely negotiable.", { FI: 4, FA: 6, GL: -6, MI: 4 }],
      ["Pursue full recovery, channels be damned.", "The law cannot have a discount for the loud.", "You break him publicly. His networks turn on you nightly — but the message lands that the era of free money is over.", { FI: 8, GL: 6, FA: -8, MI: -6 }])),

  // ── Remittances vs hundi ────────────────────────────────────────────────────
  ax("Expatriate Welfare Secretary", "official", ["remittances", "hundi", "diaspora"],
    sx("Migrant workers send their money home through the illegal hundi network — better rates, no questions — and billions bypass the reserves entirely. The Secretary wants a 2.5% cash incentive to lure them back.",
      ["Pay the incentive on legal remittances.", "Buy the dollars back into the system.", "Formal inflows jump and the reserves breathe — at a real fiscal cost, and with smugglers adapting their margins fast.", { FI: 8, EN: 4, GL: 4 }],
      ["Crack down on hundi operators instead.", "Punish the channel, not subsidise the rival.", "Raids disrupt the networks briefly. The operators reroute through crypto and gold; workers, harassed, trust the banks even less.", { FI: -4, MI: 6, GL: -4 }])),

  // ── RMG buyer leverage ──────────────────────────────────────────────────────
  ax("Garment Buyers' Consortium", "official", ["rmg", "exports", "wages"],
    sx("The Western buyers' consortium that takes most of your garments issues an ultimatum dressed as concern: raise the minimum wage and improve safety, or they shift orders elsewhere. Your factory owners say a wage hike will close mills.",
      ["Mandate the wage rise the buyers want.", "Cheap labour is a race we lose anyway.", "Wages rise; the buyers stay and the workers quiet. Marginal factories shutter, and the owners — your donors — are furious.", { GL: 8, EN: 8, FI: -8, FA: -4 }],
      ["Protect the owners, keep wages flat.", "Mills closed help no worker at all.", "The owners are grateful and the lines keep running. Some buyers quietly diversify away, and the wage protests build.", { FI: 8, FA: 6, EN: -10, GL: -6 }])),

  // ── Megaproject debt ────────────────────────────────────────────────────────
  ax("Megaproject Coordinator", "official", ["debt", "infrastructure", "china"],
    sx("The grand projects — bridges, rail, power plants — are monuments and millstones both. The coordinator warns the foreign loans behind them balloon next year, and one lender wants port-equity collateral if you cannot pay on time.",
      ["Offer port equity to roll the debt.", "Keep the cranes turning at any cost.", "The repayment is rescheduled and construction continues. A strategic port is now partly mortgaged to a foreign creditor.", { FI: 6, RE: -6, GL: -8, MI: -4 }],
      ["Pause new projects and prioritise repayment.", "No more monuments we cannot afford.", "You freeze the ribbon-cuttings to service the debt. The optics dull and contractors grumble, but the balance sheet stops bleeding.", { FI: 8, GL: 4, EN: -4, FA: -4 }])),

  // ── Capital flight / second-home laundering ─────────────────────────────────
  ax("Financial Intelligence Chief", "official", ["laundering", "capital-flight", "elite"],
    sx("The FIU chief shows you the outflows: the same elite that complains about the dollar shortage is quietly wiring fortunes into second homes abroad. \"They starve the reserves, then blame you. I can name them — many are friends.\"",
      ["Bury the report to protect the names.", "These are the people who hold the regime up.", "The list disappears and the friends stay close. The reserves keep leaking out the back door you chose not to lock.", { FI: -6, FA: 6, GL: -6 }],
      ["Publish it and freeze the worst offenders.", "Patriotism that flees with the money is none.", "You name and freeze. The elite is enraged and the courts will be slow — but capital flight stutters and the public roars approval.", { FI: 8, EN: 6, GL: 6, FA: -8 }])),

  // ── Inflation / subsidy politics ────────────────────────────────────────────
  ax("Trade & Prices Adviser", "people", ["inflation", "subsidies", "food"],
    sx("Rice, oil, and onions have outrun wages and the kitchen is now a battlefield. The adviser offers two levers: open emergency duty-free imports that hammer the budget, or hold firm and tell people to tighten belts already cinched.",
      ["Flood the market with duty-free imports.", "An empty plate topples governments faster than deficits.", "Prices ease at the bazaar and tempers cool. The deficit widens and local farmers, undercut, send their own anger upward.", { EN: 10, FI: -8, RE: -4 }],
      ["Hold firm and protect domestic farmers.", "Cheap imports today, dead farms tomorrow.", "The farmers keep their margins and the budget holds. Urban households seethe as the kitchen stays expensive.", { FI: 6, RE: 4, EN: -10, FA: -4 }])),

  // ── Black-market dollar / rating ────────────────────────────────────────────
  ax("Sovereign Ratings Analyst", "ambassador", ["rating", "markets", "confidence"],
    sx("A ratings agency is poised to downgrade you to junk, spiking borrowing costs across the board. The analyst hints it could 'go either way' with the right gestures — fiscal transparency, or a quietly arranged hospitality.",
      ["Arrange the quiet hospitality.", "A friendly rating is cheaper than a downgrade.", "The downgrade is shelved this cycle. The fix is fragile and faintly corrupt; the next analyst may not be so amenable.", { FI: 6, GL: -6, EN: -4 }],
      ["Open the books and take the rating you earn.", "I will not bribe my way out of arithmetic.", "You bare the fiscal accounts honestly. The downgrade may come, but investors who reward candour begin, cautiously, to return.", { FI: -6, GL: 8, MI: -2 }])),

  // ── BESPOKE INSTALMENT 1 — real Bangladesh fiscal dilemmas ──────────────────

  ax("NBR Chairman", "official", ["tax", "nbr", "informal"],
    sx("Barely 2% of the country files taxes; the chairman wants an aggressive drive to widen the net into the informal economy. The shopkeepers and traders who fund half your local committees are already calling.",
      ["Push the tax-net drive hard.", "A state cannot run on 2% of its people.", "Revenue creeps up and the IMF nods — while market associations declare a shutter-down strike against you.", { FI: 12, GL: 6, EN: -8, FA: -4 }],
      ["Go gently, spare the traders.", "Do not squeeze the people who keep me standing.", "The committees stay loyal and the books stay thin. The tax-to-GDP ratio remains among the lowest on earth.", { FA: 8, FI: -8, GL: -6 }])),

  ax("Budget Adviser", "official", ["black-money", "whitening", "budget"],
    sx("The adviser proposes the familiar budget clause: let undisclosed 'black money' be whitened at a flat low tax, no questions asked. It would pull billions into the formal economy — and reward exactly the people who hid it.",
      ["Keep the whitening window open.", "Better the money home than abroad.", "Hidden fortunes surface and the deficit eases. Honest taxpayers fume that crime pays a lower rate than they do.", { FI: 12, EN: -8, GL: -6 }],
      ["Scrap the whitening scheme.", "I will not legislate a discount for thieves.", "You close the loophole on principle. The flagged billions stay offshore, and the budget must find them elsewhere.", { GL: 6, EN: 6, FI: -10 }])),

  ax("Stock Exchange Chair", "official", ["dse", "market", "retail"],
    sx("The share index is in free-fall and small investors are burning effigies outside the exchange. The chair wants you to impose an artificial 'floor price' to stop shares falling further.",
      ["Impose the floor price.", "Stop the bleeding on the screens.", "The index steadies on paper; trading dries up as no one will buy a price that cannot fall. Foreign funds flee the frozen market.", { EN: 6, FI: -6, GL: -8 }],
      ["Let the market clear and fund investor education.", "A propped market is a trap with a delay.", "The index overshoots down, then finds a real bottom. The pain is sharp and the recovery, when it comes, is trusted.", { GL: 6, FI: 4, EN: -8 }]),
    sx("With the market cratered, a tycoon offers to 'rescue' it by buying en masse — if you hand his group a state bank and a telecom licence in return.",
      ["Take the tycoon's rescue.", "A white knight asks his price.", "Shares rally on his buying spree. You have sold public assets to paper over a market panic, and he now owns a piece of the state.", { FI: 8, EN: 4, GL: -8, FA: 4 }],
      ["Refuse and let a real recovery take its time.", "I will not ransom the bourse to one man.", "The market mends slowly without a saviour. The tycoon turns his media against you for the snub.", { GL: 6, FI: -6, MI: -4 }])),

  ax("Debt Management Chief", "official", ["eurobond", "debt", "markets"],
    sx("Reserves are tight and the chief proposes a debut dollar Eurobond — quick foreign cash, but at a punishing coupon that locks in high interest for a decade if markets smell desperation.",
      ["Issue the Eurobond now.", "Cash today is worth the coupon.", "Dollars arrive and the reserves breathe. The expensive interest bill compounds quietly for ten years.", { FI: 10, GL: 4, EN: -4 }],
      ["Wait for calmer markets and cut imports instead.", "I will not borrow dear out of panic.", "You squeeze import demand to hold the line. It bites at home now, but spares the country a decade of costly debt.", { FI: -4, EN: -6, GL: 4 }])),

  ax("Agriculture Secretary", "official", ["subsidy", "fertiliser", "farmers"],
    sx("Global fertiliser prices have tripled. The secretary warns that without a fat subsidy the next harvest fails — but the subsidy alone would blow a hole in the budget the IMF is watching.",
      ["Fund the full fertiliser subsidy.", "A failed harvest is a famine and a fall.", "The fields stay green and the farmers bless you. The deficit balloons and the IMF frowns at the next review.", { EN: 10, RE: 4, FI: -10 }],
      ["Trim the subsidy to satisfy the lenders.", "The books must balance somewhere.", "You please the creditors and thin the subsidy. Input costs hit the villages, and rural anger ferments.", { FI: 8, GL: 4, EN: -10, FA: -4 }])),

  ax("Pension Authority Head", "official", ["pension", "welfare", "funding"],
    sx("Your flagship universal pension scheme is wildly popular — and quietly unfunded past the first few years. Keep enrolling millions on a promise the treasury cannot yet keep?",
      ["Keep enrolling — worry about funding later.", "The promise wins this decade's votes.", "Millions sign up to applause. You have built a magnificent liability your successors will curse.", { EN: 10, FA: 4, FI: -8 }],
      ["Slow enrolment until it is actuarially sound.", "A pension that bounces is a betrayal.", "You cap the scheme to make it real. The rollout looks timid, but the cheque will clear when it comes due.", { FI: 6, GL: 4, EN: -8 }])),

  ax("Central Bank Governor", "official", ["banks", "merger", "weak-banks"],
    sx("Five insolvent banks are walking corpses, kept alive by central-bank liquidity. The governor wants to force-merge them into stronger ones — wiping out politically-connected directors.",
      ["Force the mergers through.", "Let the dead banks be buried.", "The rot is consolidated and capped. The ousted directors — several are donors — swear vengeance.", { FI: 10, GL: 6, FA: -8 }],
      ["Keep them on life support a while longer.", "Not before the election, not these names.", "The zombies shuffle on, draining liquidity. The reckoning is postponed and made larger.", { FA: 6, FI: -8, GL: -4 }])),

  ax("Mobile Finance Regulator", "official", ["mfs", "bkash", "fintech"],
    sx("Mobile money moves the whole working class's wages now, and the dominant operator wants to raise cash-out fees. The poorest pay those fees; the operator employs thousands and lobbies hard.",
      ["Cap the cash-out fees.", "The garment girl should keep her wage.", "The fee cap eases millions of small lives. The operator threatens to cut rural agents in protest.", { EN: 10, FA: 4, FI: -6 }],
      ["Let the operator set its fees.", "A profitable rail keeps expanding.", "The network grows and invests; the daily skim off the poor grows with it.", { FI: 6, GL: 4, EN: -8 }])),

  ax("Customs Intelligence Chief", "shadow", ["misinvoicing", "laundering", "trade"],
    sx("The chief lays out how billions leave through fake import invoices — over-paying foreign 'suppliers' who are really the importers' own offshore shells. The biggest offenders dine with your ministers.",
      ["Order a real crackdown on misinvoicing.", "Plug the hole in the hull.", "Customs tightens and capital flight slows. Powerful importers, exposed, fund your rivals overnight.", { FI: 10, GL: 6, FA: -8 }],
      ["Let the audit quietly stall.", "Some hulls are best left unexamined.", "The trade continues and the friends stay close. The reserves keep leaking out the side the cameras never see.", { FA: 6, FI: -6, GL: -6 }])),

  ax("Fuel Pricing Board", "official", ["fuel", "bpc", "subsidy"],
    sx("The state oil company bleeds crores a day selling diesel below cost. The board wants an automatic price-adjustment formula — fuel prices that rise with the world market, untouched by your hand.",
      ["Adopt the automatic formula.", "Take the politics out of the pump.", "The oil company stops bleeding; fuel jumps with every global tick, and transport strikes follow each rise.", { FI: 10, GL: 6, EN: -10 }],
      ["Keep prices fixed and eat the loss.", "Cheap diesel keeps the country moving.", "Buses and irrigation pumps run cheap. The subsidy drains the budget and distorts every market it touches.", { EN: 8, FI: -10, RE: -4 }])),

  ax("Treasury Economist", "official", ["currency", "dual-rate", "taka"],
    sx("A grey gap has opened between the official taka rate and the street rate, breeding arbitrage and a black market. The economist says you must unify the rates — a one-time devaluation that will sting everyone at once.",
      ["Unify the rate, take the devaluation.", "One honest price beats two dishonest ones.", "The black market shrinks and exporters cheer; every imported good leaps in price the same morning.", { FI: 8, GL: 6, EN: -10 }],
      ["Hold the official rate and ration dollars.", "A sudden devaluation would break the poor.", "You keep the headline rate and dole out scarce dollars by favour — a system that breeds its own corruption.", { FI: -6, EN: 4, GL: -6 }])),

  ax("Foreign Loans Director", "official", ["china", "debt", "geopolitics"],
    sx("Beijing offers soft loans for a glittering ring road, far cheaper than the markets. The opposition is already chanting 'debt trap', and the West is watching whose money paves your capital.",
      ["Take the Chinese loan.", "Cheap concrete is cheap concrete.", "The ring road rises on easy terms. The 'debt-trap' headlines and Western coolness are the price of the bargain.", { FI: 10, RE: 6, GL: -8 }],
      ["Decline and tender it to the markets.", "I will not mortgage the capital to one capital.", "You pay more for diversified financing and Western goodwill. The project crawls; the books strain.", { GL: 6, FI: -8, RE: -4 }])),

  ax("Pay Commission Head", "official", ["wages", "civil-service", "budget"],
    sx("Two million civil servants want a new pay scale, and they staff every office you rely on. A generous raise wins a loyal bureaucracy; it also locks in a wage bill that eats the development budget.",
      ["Grant the generous pay rise.", "A happy bureaucracy is a working one.", "The files move and the clerks smile. The recurring wage bill devours the money meant for bridges and clinics.", { MI: 6, FA: 4, FI: -10, EN: -4 }],
      ["Offer a modest, affordable raise.", "The state cannot be a charity for itself.", "You protect the development budget. A sullen civil service slow-walks everything for a season.", { FI: 8, EN: 4, MI: -6 }])),

  ax("Export Promotion Chief", "official", ["rmg", "incentive", "exports"],
    sx("Exporters get a cash incentive on every dollar of garments shipped — a subsidy the IMF calls a distortion and wants gone. The factory owners say cutting it now hands the orders to Vietnam.",
      ["Keep the export cash incentive.", "Do not gift our orders to Hanoi.", "The looms keep their edge and the dollars keep coming. The IMF marks another unmet condition against you.", { FI: 6, GL: -6, EN: 4, FA: 4 }],
      ["Phase out the incentive as promised.", "A crutch carried too long becomes a cast.", "You please the lenders and prod exporters to compete on merit. Margins thin; some marginal factories fold.", { GL: 8, FI: -6, EN: -6 }])),

  ax("Deficit Financing Officer", "official", ["printing", "inflation", "central-bank"],
    sx("Short of cash before the budget, an officer suggests the oldest trick: have the central bank simply print money to cover the gap. It is invisible today and inflationary tomorrow.",
      ["Print to cover the deficit.", "No one feels it this quarter.", "The gap is filled with fresh notes. Inflation stirs in the months ahead, a tax no one voted for.", { FI: 8, EN: -10, GL: -4 }],
      ["Refuse and borrow honestly instead.", "I will not pay tomorrow's prices for today's gap.", "You raise the money through bonds, dearer but cleaner. The deficit is honest and the taka steadier.", { GL: 6, FI: -4, EN: 4 }])),

  ax("e-Commerce Victims' Delegation", "people", ["scam", "ecommerce", "refunds"],
    sx("A glittering online marketplace took advance payments for goods it never had and collapsed, taking the savings of a hundred thousand families. They camp outside your office demanding their money back.",
      ["Order a state-backed refund fund.", "The state failed to police it; the state pays.", "Families recover a fraction of their savings. The treasury absorbs a scam it did not commit, and others ask why they were not bailed out too.", { EN: 10, FA: 4, FI: -10 }],
      ["Pursue the founders, but no public refund.", "I will jail the thieves, not reward the gamble.", "You freeze assets and prosecute. The recovered crumbs disappoint the crowd, but the precedent of no-bailout holds.", { GL: 4, FI: 4, EN: -8 }])),

  ax("Revenue Reform Adviser", "official", ["wealth-tax", "surcharge", "elite"],
    sx("The adviser proposes a stiff surcharge on the largest fortunes — popular with the street, loathed by the class that funds campaigns and owns the newspapers.",
      ["Impose the wealth surcharge.", "Those with the most can give the most.", "Public revenue and approval both rise. The moneyed class opens its war chest against you and its front pages turn cold.", { FI: 10, EN: 8, FA: -8 }],
      ["Shelve it to keep the donors close.", "I cannot fight the people who fund me.", "The fortunes stay untaxed and the donors stay sweet. The street notes whose interests the budget serves.", { FA: 6, FI: -6, EN: -6 }])),

  ax("Import Policy Officer", "official", ["lc", "luxury", "reserves"],
    sx("To defend the reserves, an officer wants to choke letters of credit for 'luxury' imports — cars, cosmetics, fruit. It saves dollars and irritates exactly the affluent who notice empty shelves.",
      ["Restrict the luxury LCs.", "Dollars are for medicine, not Mercedes.", "Reserves stop bleeding on baubles. The affluent grumble about scarcity, and some smuggling reroutes the trade.", { FI: 8, GL: 4, EN: -4, FA: -4 }],
      ["Keep imports open to avoid the optics of scarcity.", "Empty shelves photograph badly.", "The shops stay stocked and the rich content. The reserves keep draining on things the country need not buy.", { FA: 4, FI: -8, GL: -4 }])),

  ax("Loan Classification Board", "official", ["rescheduling", "defaulters", "banks"],
    sx("The board can relax the loan-rescheduling rules so habitual defaulters look 'regular' again with a token down-payment. It flatters the banks' books and rewards the very borrowers who never pay.",
      ["Relax the rules, flatter the books.", "A pretty balance sheet calms the market.", "Default ratios drop on paper overnight. The rot deepens in the dark, and the honest borrower wonders why he bothers.", { FI: 6, GL: -6, FA: 4 }],
      ["Tighten classification to the real number.", "Call a bad loan a bad loan.", "The true scale of default is finally visible. It looks ugly and frightens markets briefly — but the cleanup can begin.", { GL: 6, FI: -6, EN: 4, FA: -4 }])),

  ax("Privatisation Commissioner", "official", ["privatisation", "jute", "state-firms"],
    sx("The state jute and textile mills lose money every single year, yet they employ tens of thousands and carry the romance of the founding economy. The commissioner wants them sold or shut.",
      ["Shut and sell the loss-making mills.", "Nostalgia is not a business plan.", "The hemorrhage stops and buyers move in. Thousands of mill workers and their unions march on your gate.", { FI: 10, GL: 4, EN: -10, MI: -4 }],
      ["Keep the mills open with state money.", "These looms built the nation.", "The jobs and the heritage survive on subsidy. The losses recur, year after year, a line item that never dies.", { EN: 6, FA: 4, FI: -10 }])),

  ax("National Savings Director", "official", ["sanchayapatra", "savings", "rates"],
    sx("Government savings certificates pay pensioners and widows a generous fixed return — and cost the treasury dearly as everyone piles in. The director wants to cut the rate.",
      ["Cut the savings-certificate rate.", "The treasury cannot subsidise every saver.", "The interest bill eases. Pensioners and widows who counted on that return feel the floor drop, and say so loudly.", { FI: 10, GL: 4, EN: -8 }],
      ["Protect the small savers' rate.", "The widow's certificate is sacred.", "You shield the small savers and eat the cost. The high-rollers exploit the same window, and the bill grows.", { EN: 8, FA: 4, FI: -10 }])),

  ax("Special Economic Zone Director", "official", ["sez", "tax-holiday", "investment"],
    sx("A foreign consortium will build a vast economic zone and bring jobs — if you grant a fifteen-year tax holiday so generous the project pays almost nothing into the treasury for a generation.",
      ["Grant the long tax holiday.", "Jobs now, taxes eventually.", "The cranes arrive and employment rises. The treasury forgoes a fortune for fifteen years to win the ribbon-cutting.", { EN: 8, FI: -6, GL: 6, RE: 4 }],
      ["Negotiate a shorter, fairer holiday.", "I will host investment, not subsidise it forever.", "You drive a harder bargain. The consortium hesitates and shrinks the project — but the state keeps a slice of the upside.", { FI: 6, GL: -4, EN: -4 }])),

  ax("Anti-Tobacco Coalition", "people", ["tobacco", "tax", "health"],
    sx("Doctors want tobacco taxed steeply to curb a public-health disaster; the tobacco giants are among your largest taxpayers and employ a vast leaf-growing belt that votes.",
      ["Tax tobacco hard.", "A cigarette tax is a life saved and a taka earned.", "Revenue and public health both rise. The tobacco lobby and its farming districts turn sharply against you.", { FI: 8, EN: 8, FA: -6 }],
      ["Keep tobacco taxes low.", "Do not gut a top taxpayer and a voting belt.", "The companies stay sweet and the leaf districts loyal. The wards fill with the slow harvest of that bargain.", { FI: 4, FA: 4, EN: -10 }])),

  ax("Land Registration Reformer", "official", ["real-estate", "black-money", "registration"],
    sx("Property is bought at a fraction of its true value on paper, hiding black money and starving the treasury of registration tax. Digitising and revaluing it would expose a lot of powerful people.",
      ["Digitise and revalue property.", "Drag the land market into the light.", "Registration revenue surges and a laundering channel narrows. Builders and land barons — and their political patrons — howl.", { FI: 10, EN: 4, GL: 4, FA: -8 }],
      ["Leave the registers as they are.", "Some ledgers are best left yellowed.", "The cosy undervaluation continues. Black money keeps flowing into bricks while the treasury watches it pass.", { FA: 6, FI: -8, GL: -4 }])),

  ax("Hajj Management Director", "cleric", ["hajj", "pilgrims", "cost"],
    sx("Airfares and Saudi fees have pushed the pilgrimage beyond ordinary families. The director asks whether to subsidise Hajj from the budget — pious and popular, or a costly precedent the secularists will attack.",
      ["Subsidise the pilgrimage.", "Let the faithful afford the journey.", "Grateful pilgrims bless your name from Mecca. The treasury and the secular press both wince at the bill.", { FA: 6, EN: 6, FI: -8, GL: -4 }],
      ["Keep Hajj unsubsidised but cut the agents' fees.", "Faith should not be a fiscal line.", "You squeeze the middlemen instead of the budget. The devout are mildly disappointed; the books stay clean.", { FI: 6, GL: 4, EN: -4, FA: -4 }])),

  ax("Climate Fund Auditor", "official", ["climate", "fund", "graft"],
    sx("The donor-funded climate adaptation pot — embankments, shelters, resilient seed — has leaked badly into the pockets of local officials. A hard audit would recover money and embarrass your own party men.",
      ["Order the hard audit and claw the money back.", "Stolen flood money is blood money.", "Recovered crores return to the embankments. The implicated party officials become loud, wounded enemies.", { EN: 8, GL: 8, FI: 4, FA: -8 }],
      ["Bury the audit to protect the party.", "Do not hand the donors a scandal.", "The leak stays hidden and the party intact. The embankments stay thin, and the next flood collects the difference.", { FA: 6, EN: -10, GL: -6 }])),

  ax("Sovereign Fund Proponent", "official", ["reserves", "sovereign-fund", "investment"],
    sx("An adviser wants to carve a sovereign wealth fund out of the foreign reserves to invest in big domestic projects. Bold — but every dollar parked in concrete is a dollar not defending the taka in a crisis.",
      ["Launch the sovereign fund from reserves.", "Idle reserves should build the country.", "Grand projects get cheap money and momentum. The reserve buffer thins, and a future shock will find less cushion.", { RE: 6, EN: 6, FI: -6, GL: -4 }],
      ["Keep the reserves as a war chest.", "Reserves are the wall against the storm.", "You guard the buffer and pass on the projects. Critics call it timid; the next currency scare proves it wise.", { FI: 8, GL: 4, EN: -4 }])),

  ax("VAT Online Director", "official", ["vat", "digitisation", "compliance"],
    sx("Electronic VAT machines would capture billions that retailers currently pocket — but every shopkeeper sees a spy in the till, and they are a million-strong voting bloc.",
      ["Mandate the electronic VAT machines.", "An honest till funds an honest state.", "Consumption-tax revenue climbs steadily. A million shopkeepers grumble about the machine watching every sale.", { FI: 10, GL: 4, EN: -4, FA: -4 }],
      ["Keep VAT collection manual and negotiable.", "Do not put a meter on every shop counter.", "The shopkeepers stay content and the leakage continues. The treasury collects a fraction of what it is owed.", { FA: 6, FI: -8, GL: -4 }])),

  ax("Garment Buyers' Auditor", "ambassador", ["rmg", "compliance", "wages"],
    sx("After a competitor's scandal, Western buyers demand audited proof that your factories pay the legal wage and the promised bonuses. Real compliance costs the owners; faking it risks the whole export market.",
      ["Enforce real wage compliance.", "The market is worth more than the margin.", "Buyers are reassured and orders hold; the workers are paid in full. Factory owners — your donors — bristle at the cost.", { GL: 8, EN: 8, FI: -6, FA: -4 }],
      ["Help the owners present a compliant face.", "Protect the owners who keep the lines running.", "The audit is smoothed over and margins protected. One leaked payslip could bring the whole edifice down.", { FI: 6, FA: 4, GL: -8, EN: -6 }])),

  // ── Money-whitening scheme ──────────────────────────────────────────────────
  ax("Revenue Board Chairman", "fixer", ["black-money", "tax", "whitening"],
    sx("A budget clause would legalise undisclosed 'black money' at a flat low tax, no questions asked — luring billions into property and banks. The chairman calls it pragmatic; honest taxpayers call it a reward for the crooked.",
      ["Offer the no-questions whitening scheme.", "Better the black money working here than hiding abroad.", "The clause passes and laundered crores flood into property and banks. The reserves and the books improve, and every honest taxpayer learns that cheating, in the end, is rewarded.", { FI: 10, FA: 2, EN: -8, GL: -6 }],
      ["Refuse to legalise undisclosed wealth.", "A state that pardons theft for a fee invites more theft.", "You kill the whitening clause. The hidden money stays hidden or flees abroad, and the budget is thinner for it, but the tax system keeps a shred of fairness and credibility.", { GL: 6, EN: 6, FI: -8 }])),

  // ── Stock-market crash bailout ──────────────────────────────────────────────
  ax("Securities Regulator", "official", ["stock-market", "crash", "retail"],
    sx("The bourse has crashed after a manipulated bubble, wiping out hundreds of thousands of small investors lured in by insiders who cashed out at the top. Mount a costly retail bailout and prosecute the manipulators, or let the market clear?",
      ["Bail out small investors, prosecute manipulators.", "A market that eats its small fish breeds no trust.", "You cushion the retail losses and go after the big manipulators. The bailout is costly and the syndicates fight back, but the small investor sees the state will not abandon them to the wolves.", { EN: 8, GL: 4, FI: -8, FA: -4 }],
      ["Let the market clear on its own.", "A gambler who loses cannot bill the state.", "You let the crash run its course. The treasury is spared, the manipulators keep their gains, and a generation of small savers swears off the market that fleeced them.", { FI: 4, EN: -8, GL: -2 }])),

  // ── Loss-making SOE privatisation ───────────────────────────────────────────
  ax("Privatisation Commission Chief", "official", ["soe", "privatisation", "jobs"],
    sx("Dozens of state enterprises — mills, factories, a national airline — bleed subsidy every year, kept alive for the jobs and the patronage. Privatise or shut the worst to stem the losses, or keep them on life support to protect the workers and votes?",
      ["Privatise or shut the loss-makers.", "A factory that only makes losses makes nothing.", "You sell or close the bleeding enterprises and stem the subsidy. The freed budget is real, but tens of thousands of workers lose their jobs and turn their fury on you.", { FI: 8, GL: 4, EN: -8 }],
      ["Keep the enterprises on life support.", "A wage lost is a household sunk.", "You keep the loss-makers running for the workers and the patronage. The jobs and the votes are safe, and the subsidy keeps draining money that schools and clinics will never see.", { EN: 6, FA: 4, FI: -8 }])),

  // ── Universal pension scheme ────────────────────────────────────────────────
  ax("Pension Authority Director", "people", ["pension", "welfare", "future"],
    sx("A national pension scheme would give the vast informal workforce security in old age — a transformative legacy — but it demands either contributions the poor can barely make or a vast permanent subsidy. The director needs your design.",
      ["Launch a generously subsidised pension.", "An old age without dignity is a society's shame.", "You build a pension reaching even the poorest with heavy state top-ups. The fiscal burden is enormous and permanent, but a generation of the elderly is lifted out of destitution.", { EN: 12, GL: 4, FI: -10 }],
      ["Build a lean contributory pension.", "A promise I cannot fund is a betrayal deferred.", "You launch a modest, mainly contribution-based scheme. It is fiscally sound but reaches the poorest thinly, and the informal workers who most need it can least afford to join.", { FI: 4, EN: 4, GL: 2 }])),

  // ── IMF fuel-subsidy condition ──────────────────────────────────────────────
  ax("IMF Programme Negotiator", "ambassador", ["imf", "subsidy", "austerity"],
    sx("The next IMF tranche hinges on slashing fuel and electricity subsidies — steadying the budget while detonating the cost of living. The negotiator says the money is vital; the street says the price rises are unbearable.",
      ["Cut the subsidies for the IMF tranche.", "The fund's money keeps the lights on at all.", "You slash the subsidies and unlock the tranche. The reserves and the lenders are reassured, and the price of transport, food, and power detonates in every household.", { FI: 8, GL: 6, EN: -12 }],
      ["Protect the subsidies, risk the tranche.", "I will not buy a loan with my people's hunger.", "You shield the subsidies and the IMF talks stall. The street is spared the shock, but the reserves keep bleeding and the lifeline you turned down may not be offered twice.", { EN: 8, FI: -8, GL: -4 }])),

  // ── Exchange-rate float ──────────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["currency", "float", "devaluation"],
    sx("The taka is propped at an artificial rate the reserves can no longer defend, feeding a black market. The governor urges letting it float — ending the drain, but spiking import prices overnight — or burning more reserves to hold the peg.",
      ["Let the taka float to its real value.", "A currency defended past its worth bankrupts the defender.", "You float the taka and the black-market premium vanishes. Import prices and inflation jump painfully, but the ruinous reserve drain stops and the market finds honest footing.", { FI: 6, GL: 4, EN: -8 }],
      ["Burn reserves to hold the peg.", "A falling taka is a falling government.", "You keep defending the rate. The official price holds and the public is spared the shock for now, but the reserves drain toward empty and the black market thrives in the gap.", { EN: 4, FI: -8, GL: -2 }])),

  // ── Weak-bank merger ────────────────────────────────────────────────────────
  ax("Banking Division Secretary", "official", ["banks", "merger", "npl"],
    sx("Several banks are insolvent, hollowed out by insider looting, and one is days from collapse. Force mergers into healthier banks — protecting depositors but rewarding the looters — or let a bank fail and shock the system into discipline?",
      ["Force mergers to protect depositors.", "A bank run is a fire that spreads.", "You merge the zombie banks into stronger ones and depositors are saved. The looters who gutted them walk away clean, and the healthy banks inherit a mountain of toxic debt.", { FI: 4, EN: 2, GL: -2, FA: -2 }],
      ["Let an insolvent bank fail.", "A bank that is never allowed to die never learns to live.", "You let one rotten bank collapse. Depositors panic and the system shudders, but for once the looters lose their bank, and every other board suddenly takes risk seriously.", { GL: 4, FI: -6, EN: -4 }])),

  // ── Loan rescheduling for big defaulters ────────────────────────────────────
  ax("Banking Division Secretary", "fixer", ["loans", "defaulters", "favours"],
    sx("The biggest loan defaulters — industrialists with party ties — want their bad loans rescheduled on absurdly soft terms again. It props up the banks' books on paper; it also lets the willful defaulters off the hook forever.",
      ["Grant the soft rescheduling again.", "A defaulter's empire employs thousands; do not topple it.", "You let the big defaulters reschedule on featherbed terms. The banks' books look healthier on paper, the connected tycoons stay afloat, and the rot in the banking system deepens out of sight.", { FI: 4, FA: 4, EN: -6, GL: -6 }],
      ["Force repayment or seizure.", "A willful defaulter is a thief with a balance sheet.", "You refuse the rescheduling and move to recover or seize. The tycoons rage and call in their political chips, but billions in dead loans start, painfully, to come back.", { GL: 6, FI: 4, EN: 4, FA: -6 }])),

  // ── Eurobond / sovereign debt ───────────────────────────────────────────────
  ax("Debt Management Director", "ambassador", ["eurobond", "debt", "markets"],
    sx("You can raise a large sum fast on the international bond markets — no IMF conditions, no neighbourly strings — but at a steep interest rate that mortgages future budgets and leaves you at the mercy of global bond traders.",
      ["Issue the international bond.", "Market money comes with no master attached.", "The bond raises the cash quickly and string-free. The high coupon settles onto future budgets, and your fortunes are now hostage to the moods of distant bond markets.", { FI: 6, GL: 2, RE: 2 }],
      ["Avoid the costly market borrowing.", "A bond at usurer's rates is a trap with a ribbon.", "You skip the expensive bond and live within tighter means. The development plans shrink and the cash crunch bites, but you do not mortgage the next decade to the markets.", { GL: 2, FI: -4, EN: -2 }])),

  // ── Price syndicate (food) ──────────────────────────────────────────────────
  ax("Trading Corporation Chief", "shadow", ["inflation", "syndicate", "food"],
    sx("A cartel of wholesalers is hoarding rice, onions, and oil to spike prices at will — and several cartel bosses are party financiers. Break the syndicate with raids and state imports, or protect the donors and let prices ride?",
      ["Break the price syndicate.", "A cartel that taxes every plate must be smashed.", "You raid the hoarders and flood the market with state imports. Prices ease and the public exhales, but the cartel bosses — your financiers — turn on you with their wallets shut.", { EN: 10, FI: -4, FA: -6 }],
      ["Protect the donors, let prices ride.", "The men who fund the party are not lightly raided.", "You spare the syndicate and the hoarding continues. The financiers stay loyal and generous, and the cost of a meal climbs out of reach for the families who can least bear it.", { FI: 4, FA: 6, EN: -10 }])),

  // ── Customs corruption at the ports ─────────────────────────────────────────
  ax("Customs Commissioner", "fixer", ["customs", "ports", "corruption"],
    sx("The ports leak billions in duty through under-invoicing and bribed clearance, the customs houses among the most lucrative postings in the state. Automate and audit the whole system to break the rackets, or leave the golden geese to lay?",
      ["Automate and audit customs.", "A bribed customs house robs the whole nation.", "You digitise clearance and audit the postings hard. Duty revenue jumps and the rackets wither, and the officers who paid fortunes for the lucrative postings turn bitterly against you.", { FI: 8, GL: 4, EN: 2, FA: -4 }],
      ["Leave the customs rackets running.", "The men in the customs houses have powerful patrons.", "You leave the ports' shadow economy intact. The patronage flows smoothly and the postings stay golden, and the treasury keeps collecting a fraction of the duty it is owed.", { FI: -4, FA: 4, EN: -4, GL: -2 }])),

  // ── Tax-GDP and the elite net ───────────────────────────────────────────────
  ax("Revenue Board Chairman", "official", ["tax", "elite", "evasion"],
    sx("The tax-to-GDP ratio is among the world's lowest because the wealthy simply do not pay, while the board squeezes the salaried middle. Go after the rich evaders — donors and dynasts among them — or keep milking the easy salaried base?",
      ["Go after the wealthy evaders.", "A state funded by clerks while tycoons skate is doomed.", "You target the rich evaders, audits reaching into donor and dynastic ledgers. The revenue base broadens and the public cheers, but the powerful you have dunned plot their revenge.", { FI: 8, EN: 8, GL: 4, FA: -8 }],
      ["Keep squeezing the salaried base.", "The easy taxpayer is the one who cannot run.", "You leave the rich alone and lean harder on the salaried. The revenue is reliable and the donors content, and the shrinking middle class learns exactly whose shoulders the state rests on.", { FI: 4, FA: 4, EN: -8 }])),

  // ── Mobile financial services vs hundi ──────────────────────────────────────
  ax("Digital Finance Adviser", "official", ["mobile-money", "remittances", "inclusion"],
    sx("Mobile money has banked the unbanked and could pull remittances out of the illegal hundi channels — if you incentivise it. The banks lobby against it, and the hundi networks have their own quiet patrons.",
      ["Boost mobile money and formal remittances.", "A phone in every hand is a bank in every village.", "You push incentives for mobile remittances and the formal channels swell. The banks and the hundi networks both lose ground and grumble, but billions enter the legal economy and the unbanked gain access.", { FI: 8, EN: 6, GL: 2, FA: -2 }],
      ["Protect the banks, let hundi persist.", "The banks are the system; do not undercut them.", "You shield the banks and leave the mobile push half-hearted. The hundi networks keep their grip on remittances, the reserves miss the inflows, and the village stays unbanked.", { FA: 4, FI: -6, EN: -2 }])),

  // ── Civil-service pay commission ────────────────────────────────────────────
  ax("Pay Commission Chair", "official", ["salaries", "bureaucracy", "budget"],
    sx("A new pay commission recommends a huge salary hike for the civil service — buying the bureaucracy's loyalty and curbing petty corruption, but blowing a vast hole in the recurrent budget for years.",
      ["Grant the full pay rise.", "A well-paid official is a loyal, honest one.", "You award the generous hike and the bureaucracy is delighted and bound to you. Petty bribery eases, but the wage bill swells permanently, crowding out the development budget for years.", { MI: 2, FA: 4, FI: -8, EN: -2 }],
      ["Grant a modest, affordable rise.", "A salary I cannot sustain is a strike deferred.", "You give a restrained increase the budget can bear. The civil servants grumble at the modesty and some petty corruption persists, but the fiscal hole stays survivable.", { FI: 4, EN: 2, FA: -2 }])),

  // ── Trade-based money laundering ────────────────────────────────────────────
  ax("Financial Intelligence Chief", "shadow", ["laundering", "over-invoicing", "capital-flight"],
    sx("Billions flee each year through over- and under-invoiced trade, spiriting wealth to second homes abroad — and the launderers include some of your biggest backers. Build a real enforcement net, or keep the channel quietly open for friends?",
      ["Build the anti-laundering net.", "A river of stolen money flowing abroad bleeds us white.", "You stand up real trade-laundering enforcement and the outflows slow. The reserves steady and the world's watchdogs approve, but your backers' escape route is now monitored, and they are furious.", { FI: 6, GL: 6, EN: 4, FA: -6 }],
      ["Keep the laundering channel open.", "The men who move that money also fund the party.", "You leave the over-invoicing pipeline flowing. Your backers keep stashing wealth abroad and stay loyal, and the reserves keep haemorrhaging out through a hole you chose not to plug.", { FA: 6, FI: -6, GL: -4 }])),

  // ── Special economic zone tax holidays ──────────────────────────────────────
  ax("Investment Authority Chief", "ambassador", ["sez", "fdi", "incentives"],
    sx("To lure foreign factories into the new economic zones, investors demand decade-long tax holidays, free land, and guaranteed power. The jobs and FDI are real; the revenue board warns you are giving away the future tax base for a present photo-op.",
      ["Grant the generous investor incentives.", "An empty zone earns nothing; fill it at any price.", "You hand out the tax holidays and the factories come. Jobs and FDI flow in for the headlines, and the revenue board quietly notes the decade of tax you have signed away.", { FI: 4, EN: 4, GL: 4, RE: -2 }],
      ["Offer leaner, time-limited incentives.", "A zone bought with the whole future is a bad bargain.", "You offer modest, sunset-clause incentives. Some footloose investors look elsewhere and the zones fill slower, but the deals that land actually pay tax within the decade.", { FI: 4, GL: -2, EN: 2 }])),

  // ── Deficit monetisation ────────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["deficit", "printing", "inflation"],
    sx("The government is broke and the bills are due. The easiest fix is to have the central bank print money to cover the deficit — painless today, a slow detonator of inflation tomorrow. The governor warns it is the road every ruined economy has walked.",
      ["Print money to cover the deficit.", "A bill paid today is a bill paid.", "You lean on the printing press and the bills are met. The relief is immediate and the cost deferred, as the new money seeps into prices and the inflation you deferred compounds.", { FI: 6, EN: -8, GL: -4 }],
      ["Refuse to monetise the deficit.", "A printing press is a slow-motion default.", "You hold the line against monetisation and cut or borrow instead. The squeeze is painful and immediate, but you spare the country the inflationary spiral that has ruined so many.", { GL: 4, FI: -4, EN: -2 }])),

  // ── SME and farmer credit ───────────────────────────────────────────────────
  ax("Agricultural Bank Chairman", "people", ["sme", "farmers", "credit"],
    sx("Small farmers and tiny businesses are starved of credit by banks that lend only to the big and connected. The chairman wants a subsidised small-credit drive to the grassroots — risky, costly, politically golden — versus keeping lending safe and concentrated.",
      ["Drive subsidised credit to the grassroots.", "A loan to a farmer grows more than a loan to a tycoon.", "You push cheap credit out to farmers and micro-enterprises. Default risk and cost rise, but the rural economy stirs to life and millions feel the state's hand for the first time.", { EN: 10, FI: -6 }],
      ["Keep lending safe and concentrated.", "A bank that lends to the poor is a bank that fails.", "You keep credit flowing to the safe and the big. The banks' books stay clean, and the small farmer and the micro-trader keep borrowing from the moneylender at ruinous rates.", { FI: 4, EN: -6, FA: 2 }])),

  // ── Festival liquidity / Eid bonus ──────────────────────────────────────────
  ax("Treasury Operations Chief", "official", ["liquidity", "festival", "wages"],
    sx("Eid is days away and the garment factories cannot make payroll and bonuses for millions of workers, who will riot if sent home empty-handed. Extend emergency state liquidity to the owners, or let them face their own workers?",
      ["Extend emergency liquidity to the factories.", "A million unpaid workers at Eid is a powder keg.", "You bail out the payrolls and the workers go home paid for the holiday. The owners are rescued from their own mismanagement again, learning once more that the state will always catch them.", { EN: 8, FI: -6, FA: 2 }],
      ["Let the owners face their workers.", "I will not bankroll the bonuses of profitable men.", "You refuse the bailout and tell the owners to pay their own way. Some factories erupt in unrest over delayed wages, but the owners learn the treasury is not their overdraft.", { FI: 4, EN: -6, FA: -2 }])),

  // ── Export diversification ──────────────────────────────────────────────────
  ax("Export Promotion Director", "official", ["exports", "diversification", "garments"],
    sx("The economy is dangerously dependent on garments for almost all its exports. The director wants to pour incentives into new sectors — pharma, leather, IT, shipbuilding — a slow, uncertain bet, versus doubling down on the garment cash cow that already works.",
      ["Invest in export diversification.", "An economy on one leg falls when that leg is kicked.", "You back the emerging sectors with incentives and infrastructure. The payoff is slow and some bets will fail, but the export base begins, finally, to broaden beyond the loom.", { FI: 2, GL: 4, EN: 4, RE: 2 }],
      ["Double down on garments.", "Why bet on maybes when the looms pay now?", "You concentrate support on the proven garment sector. Exports stay strong and the cash flows, and the economy's single point of failure grows ever more dangerous and ever more entrenched.", { FI: 6, EN: -2, GL: -2 }])),

  // ── IT freelancer economy ───────────────────────────────────────────────────
  ax("Digital Economy Adviser", "people", ["it", "freelancers", "youth"],
    sx("Hundreds of thousands of young freelancers earn foreign currency online, but they are taxed clumsily and blocked from easy payment channels. The adviser wants a freelancer-friendly regime of easy payments and tax breaks to grow a new export pillar.",
      ["Build the freelancer-friendly regime.", "A laptop in a village earns dollars from the world.", "You smooth payments, ease taxes, and back training for the digital workforce. A new stream of foreign currency grows, and a generation of the young find work without leaving home.", { FI: 6, EN: 6, GL: 2 }],
      ["Leave the freelancers to fend for themselves.", "A scattered cottage industry is not a strategy.", "You keep the clumsy status quo. The freelancers route their earnings through grey channels or move abroad, and a homegrown export pillar withers before it can take root.", { FI: -2, EN: -4, GL: -2 }])),

  // ── Wealth-flight second homes ──────────────────────────────────────────────
  ax("Financial Intelligence Chief", "ambassador", ["capital-flight", "second-homes", "elite"],
    sx("Exposés abroad reveal your elite — ministers, MPs, tycoons — own fortunes in foreign property they could never have earned honestly. The world offers cooperation to trace and freeze it. Pursue the trail, or quietly let it lie?",
      ["Pursue and repatriate the hidden wealth.", "Stolen money parked abroad still belongs to the people.", "You take up the foreign cooperation and chase the laundered fortunes home. Some assets are frozen and the public is electrified, but the exposed elite — your own ranks — declare quiet war.", { FI: 6, GL: 6, EN: 8, FA: -10 }],
      ["Let the trail go cold.", "Half my cabinet owns those flats.", "You decline to pursue the foreign holdings. Your elite's offshore nest eggs stay safe and they stay loyal, and the message that the powerful loot with impunity is stamped a little deeper.", { FA: 8, FI: -4, EN: -8, GL: -6 }])),

  // ── Crypto / digital currency ───────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["crypto", "regulation", "capital-controls"],
    sx("Cryptocurrency is spreading among the young as a hedge against the falling taka and a hole in your capital controls. Ban it outright as a laundering and flight risk, or regulate and tax it as an inevitable new asset?",
      ["Ban cryptocurrency outright.", "A currency I cannot see is a hole in the dam.", "You ban crypto and threaten the traders. The official capital controls hold a little better, but the trade simply goes underground, and the tech-savvy young add another grievance to the pile.", { FI: 2, MI: 2, GL: -2, EN: -4 }],
      ["Regulate and tax it instead.", "Better to tax the tide than to forbid it.", "You bring crypto into a regulated, taxed framework. The capital-flight risk is real and the controls leakier, but you tax the activity, attract some fintech, and keep faith with the young.", { FI: 4, GL: 2, EN: 2 }])),

  // ── Public-private partnership ──────────────────────────────────────────────
  ax("PPP Authority Chief", "fixer", ["ppp", "infrastructure", "contracts"],
    sx("A private consortium offers to build and run a major toll expressway — sparing the budget the upfront cost, but locking the public into decades of tolls and a sweetheart guarantee that the state covers any shortfall.",
      ["Sign the PPP with the state guarantee.", "Roads now, paid for by tomorrow's tolls.", "The expressway gets built without upfront state money. The consortium pockets guaranteed returns for decades, and the 'minimum revenue' clause quietly hands the risk back to the public purse.", { RE: 4, FI: 2, EN: 2, GL: -2 }],
      ["Demand fair terms or build it publicly.", "A guarantee that the state eats all losses is a gift, not a partnership.", "You refuse the lopsided guarantee and renegotiate or build it yourself. The road is slower to come and the budget strained, but the public is not signed up to underwrite private profit.", { FI: -4, EN: 2, GL: 2 }])),

  // ── ADP underspend / project quality ────────────────────────────────────────
  ax("Planning Commission Member", "official", ["development-budget", "spending", "quality"],
    sx("The annual development budget is chronically rushed out in the final months in a splurge of padded, low-quality projects, so the money is 'spent' on paper. The member wants fewer, well-vetted projects — slower disbursement, better roads — over the year-end dash.",
      ["Reform toward fewer, better projects.", "A road built twice is a road paid for thrice.", "You impose vetting and steady disbursement over the year-end splurge. The 'utilisation' numbers dip and the contractors grumble, but the projects that get built actually last.", { FI: 4, EN: 6, GL: 2, FA: -2 }],
      ["Keep the year-end spending dash.", "Unspent money is a bureaucrat's failure on paper.", "You let the final-quarter splurge continue. The disbursement targets are hit and everyone looks busy, and the padded, half-built projects crumble within a season or two.", { FA: 2, FI: -2, EN: -6 }])),

  // ── Microfinance regulation ─────────────────────────────────────────────────
  ax("Microfinance Regulator", "people", ["microfinance", "debt", "poverty"],
    sx("The microfinance sector the country pioneered now risks over-lending, trapping the rural poor in spirals of debt to multiple lenders. The regulator wants rate caps and a shared credit registry; the big MFIs, politically influential, resist.",
      ["Cap rates and build a debt registry.", "A loan that traps is no longer a ladder.", "You cap effective rates and require a shared registry to stop multiple-lending. The big lenders fight the limits, but the rural poor stop drowning under stacked, overlapping loans.", { EN: 8, GL: 2, FI: -2, FA: -2 }],
      ["Leave the sector to self-regulate.", "Do not break the model the world copied.", "You leave the MFIs to their own devices. The model's reputation is preserved, and in the villages the quiet debt spirals tighten, household by over-borrowed household.", { FI: 2, FA: 2, EN: -6 }])),

  // ── Defence budget pressure ─────────────────────────────────────────────────
  ax("Defence Finance Secretary", "general", ["defence", "budget", "spending"],
    sx("The military, restive and powerful, wants a major budget increase for new hardware and perks — loyalty insurance for a government that needs the barracks onside. But the money would gut the social spending you promised the public.",
      ["Grant the military budget increase.", "A contented barracks is a sleeping coup.", "You fund the military's wish-list and the brass is reassured of your favour. The barracks stay loyal, and the schools, clinics, and pensions you promised the public quietly shrink to pay for it.", { MI: 8, FA: 2, FI: -6, EN: -6 }],
      ["Hold the defence budget, fund the public.", "A nation is defended by its people's wellbeing too.", "You hold the line on defence and protect social spending. The public services hold, but the generals feel slighted and watched, and a restive barracks is a risk you now carry.", { EN: 8, GL: 2, MI: -6, FI: -2 }])),

  // ── Audit of the central bank reserves ──────────────────────────────────────
  ax("Auditor General", "official", ["reserves", "transparency", "audit"],
    sx("The true, spendable level of the reserves has been quietly overstated for years by counting funds already committed. An honest restatement would spook the markets; continued obfuscation buys time but compounds the reckoning.",
      ["Publish the honest, lower reserve figure.", "A number built on a lie collapses worse later.", "You restate the reserves truthfully. The markets and the public are rattled by the lower figure, but the credibility you buy with honesty steadies the longer game and the IMF's trust.", { GL: 6, FI: -4, EN: -2 }],
      ["Keep counting the committed funds.", "A panic today is worse than a problem deferred.", "You keep the flattering figure on the books. The markets stay calm on a number that is not real, and the day the truth finally surfaces, the fall will be all the further.", { FI: 4, GL: -6, EN: -2 }])),

  // ── Bank-fraud scandal ──────────────────────────────────────────────────────
  ax("Bank Inspection Chief", "shadow", ["fraud", "banks", "scandal"],
    sx("A colossal loan fraud has surfaced at a state bank — thousands of crores siphoned out on forged collateral by a ring reaching into the board and the regulator. Mount a full public investigation, or contain it quietly to protect confidence and connected names?",
      ["Order a full public investigation.", "A fraud buried festers into a collapse.", "You open a transparent probe and the arrests climb toward the boardroom and beyond. Confidence wobbles at the spectacle, but the looters face justice and the system is forced to clean house.", { GL: 6, EN: 6, FI: -4, FA: -6 }],
      ["Contain it quietly.", "A public scandal runs the depositors to the doors.", "You keep the fraud out of the headlines and settle it in the dark. Confidence holds on the surface, the connected escape, and the hole in the bank is quietly stuffed with public money.", { FI: 2, FA: 4, EN: -6, GL: -6 }]),
    sx("Now a second bank reports a similar hole. The chief warns the rot is systemic and demands a sweeping regulatory overhaul with real independence — which would clip the wings of the very politicians who appoint the boards.",
      ["Grant the regulator real independence.", "A watchdog on the owner's leash guards nothing.", "You hand the banking regulator genuine independence and teeth. The politicians who packed the boards lose their grip and rage, but the banking sector gains its first real check in a generation.", { GL: 6, EN: 6, FI: 2, FA: -6 }],
      ["Keep the regulator under political control.", "An independent watchdog bites the hand that feeds the party.", "You keep the regulator pliant. The board appointments stay a political spoil, the frauds keep their cover, and the banking system slides deeper toward a reckoning no one is watching for.", { FA: 6, FI: -4, EN: -6, GL: -4 }])),

  // ── Remittance incentive cash ───────────────────────────────────────────────
  ax("Remittance Policy Director", "people", ["remittances", "incentive", "reserves"],
    sx("Remittances are slipping into the illegal hundi channel because the official rate is poor. The director proposes a cash incentive on every dollar sent home through banks — costly, but a magnet to pull billions back into the reserves.",
      ["Fund the remittance cash incentive.", "A bonus on every dollar is a dollar in the vault.", "You pay the incentive and the official remittances surge as hundi loses its edge. The budget takes a real hit, but the reserves swell with the inflows you lured back into the light.", { FI: 6, EN: 4, GL: 2 }],
      ["Skip the incentive to save the budget.", "I will not pay people to do what they should anyway.", "You forgo the incentive. The budget is spared the cost, but the remittances keep leaking into hundi, the reserves miss the inflows, and the black-market dollar keeps its premium.", { FI: -4, EN: -2, GL: -2 }]),
    sx("The incentive worked, but exporters cry foul: migrant dollars now fetch a better rate than export dollars, and the garment lobby demands equal treatment or threatens to hold earnings offshore.",
      ["Extend the incentive to exporters too.", "One dollar should be worth another, whoever earned it.", "You level the field and incentivise export proceeds as well. The reserves keep filling and the exporters are placated, but the budget's incentive bill balloons toward the unsustainable.", { FI: 2, GL: 2, EN: -2 }],
      ["Hold the line, remittances only.", "I cannot subsidise every dollar in the economy.", "You refuse to widen the scheme. The budget is protected, but the garment lobby retaliates by parking earnings abroad, and some of the reserve gain leaks back out the other side.", { FI: 2, FA: -2, GL: -2 }])),

  // ── Import-LC restrictions ──────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["imports", "lc", "reserves"],
    sx("To stem the reserve drain, the governor can choke the letters of credit that finance imports — banning 'luxury' goods and rationing dollars. It saves reserves, but starves factories of raw materials and spawns a corrupt queue for dollars.",
      ["Clamp down hard on import LCs.", "A dollar saved is a dollar that stays in the vault.", "You ration the LCs and the reserve bleed slows. Factories starved of imported inputs cut shifts, a black market in LC approvals blooms, and the well-connected jump the dollar queue.", { FI: 6, EN: -6, FA: 2, GL: -2 }],
      ["Keep imports flowing, defend reserves elsewhere.", "A factory without inputs is a layoff with a delay.", "You keep the import channel open and seek savings elsewhere. Industry keeps running and no corrupt LC queue forms, but the reserves keep draining toward the danger line.", { EN: 4, FI: -6, GL: 2 }]),
    sx("The import curbs hit a nerve: shortages of medicines, industrial inputs, and some foods are biting, and manufacturers warn of mass layoffs. Keep the squeeze, or selectively reopen the most essential imports?",
      ["Hold the squeeze to protect reserves.", "The reserves must come first or nothing else holds.", "You maintain the clampdown. The reserves are defended, but the shortages deepen into closed factories and empty pharmacy shelves, and the hardship radiates through the economy.", { FI: 6, EN: -8, GL: -2 }],
      ["Reopen essential imports selectively.", "I will not ration medicine to save a statistic.", "You carve out medicines, food, and key inputs from the curbs. The reserve relief is smaller, but the worst shortages ease and the factories keep their workers on the line.", { EN: 6, FI: -4, GL: 2 }])),

  // ── GDP rebasing / statistics ───────────────────────────────────────────────
  ax("Statistics Bureau Chief", "shadow", ["gdp", "statistics", "credibility"],
    sx("The bureau can 'rebase' and massage the GDP figures into a glittering growth rate that flatters your rule and tops the regional league tables. Economists already mutter the numbers don't match the power use or imports. The chief awaits your nod.",
      ["Publish the flattering growth figures.", "A nation grows as fast as its statistics say.", "You release the burnished numbers and top the league tables. The applause is real and the doubt is louder; when reality diverges from the data, the whole record becomes suspect.", { FI: 4, GL: 2, EN: -6 }],
      ["Publish honest, humbler figures.", "A growth rate I have to defend is not growth.", "You release credible numbers, modest as they are. The headlines are duller and rivals crow, but the data the country plans by — and the lenders trust — stays sound.", { GL: 4, EN: 2, FI: -4 }])),

  // ── National minimum wage ───────────────────────────────────────────────────
  ax("Wage Commission Chair", "people", ["wages", "labour", "cost"],
    sx("A national minimum wage covering every sector would lift millions of the working poor — and the employers, your donors, warn it will price out jobs and torch competitiveness. The chair needs the level set.",
      ["Set a meaningful national minimum wage.", "A wage too low to live on is a subsidy to the boss.", "You set a real floor under wages. Millions of the working poor breathe easier, the donors howl about competitiveness, and a few marginal employers do shed jobs.", { EN: 10, FI: -4, FA: -4 }],
      ["Keep wages to the market.", "A floor too high empties the factory.", "You leave wages to the market and the donors content. Competitiveness is protected and the jobs stay, and the working poor keep grinding at a wage that never quite covers the rent.", { FI: 4, FA: 4, EN: -8 }])),

  // ── E-commerce Ponzi collapse ───────────────────────────────────────────────
  ax("Consumer Protection Director", "shadow", ["e-commerce", "ponzi", "fraud"],
    sx("A wildly popular e-commerce platform turns out to be a Ponzi scheme — taking advance payments for goods it never delivers, hundreds of thousands of customers' money gone. Move now to freeze and prosecute, or hesitate while the founders flee?",
      ["Freeze and prosecute immediately.", "A scam this size will not be allowed to vanish.", "You freeze the accounts and arrest the founders before they bolt. Some customer money is clawed back, and the swift action signals that the digital wild-west has a sheriff at last.", { EN: 8, GL: 4, FI: 2 }],
      ["Move slowly and study the case.", "A hasty freeze could spook the whole sector.", "You proceed cautiously and the founders launder and flee. The customers' money evaporates, the scandal metastasises, and trust in the entire e-commerce sector collapses.", { FI: -4, EN: -8, GL: -4 }])),

  // ── NBFI scam (PK Halder style) ─────────────────────────────────────────────
  ax("Bank Inspection Chief", "shadow", ["nbfi", "embezzlement", "regulator"],
    sx("A non-bank financial institution has been looted to its bones by a single fugitive operator who captured its board — with the regulator asleep or complicit. Pursue the fugitive and the enablers, or quietly write it off?",
      ["Pursue the fugitive and the enablers.", "A theft this brazen demands a reckoning.", "You launch an international pursuit and turn the lens on the regulators who slept. The fugitive is hunted and some enablers fall, and the financial watchdogs are forced, painfully, to wake.", { GL: 6, EN: 6, FA: -6, FI: 2 }],
      ["Write it off quietly.", "A public hunt only advertises how deep the rot runs.", "You let the loss be quietly absorbed. The fugitive keeps his fortune abroad, the sleeping regulators keep their jobs, and the next operator notes how softly a billion can be stolen here.", { FA: 4, FI: -4, EN: -6, GL: -4 }])),

  // ── Central bank autonomy ───────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["autonomy", "monetary", "independence"],
    sx("The finance ministry wants the central bank to bend monetary policy to the government's election-year wishes — cheap credit, a propped currency, printed money — over the governor's professional judgment. He asks you to protect his independence, or to bring the bank to heel.",
      ["Bring the central bank to heel.", "A bank that defies the government is a rival.", "You subordinate the central bank to the ministry's will. The election-year sugar flows, and the institution's hard-won credibility — the thing that anchors inflation and the currency — bleeds away.", { FI: 4, MI: 2, GL: -6, EN: -4 }],
      ["Protect the central bank's independence.", "A tame central bank is a slow-motion crisis.", "You shield the governor's autonomy. The ministry fumes at being denied its election-year levers, but the bank keeps the credibility that holds the currency and the lenders' trust.", { GL: 6, FI: -2, EN: 2 }])),

  // ── Food-grain procurement price ────────────────────────────────────────────
  ax("Food Directorate Chief", "people", ["procurement", "farmers", "rice"],
    sx("Harvest is in, and you set the price at which the state buys rice from farmers. A high procurement price rewards the farmer and floods the public granary at cost; a low one saves money but leaves the grower at the mercy of the millers' cartel.",
      ["Set a high, farmer-friendly price.", "A farmer paid fairly plants again.", "You buy at a generous price and fill the granary. The growers prosper and the food reserve swells, at a real cost to the budget that the millers' cartel would have pocketed anyway.", { EN: 8, FI: -6 }],
      ["Set a low procurement price.", "The granary cannot bankrupt the treasury.", "You buy cheap and save the budget. The granary fills at less cost, but the farmer, undercut, sells to the millers' cartel at a loss and curses the season.", { FI: 6, EN: -6 }])),

  // ── Open-market food sales ──────────────────────────────────────────────────
  ax("Food Directorate Chief", "relief", ["oms", "inflation", "poor"],
    sx("Food prices have spiked and the urban poor are skipping meals. The chief can throw open the state granary in subsidised open-market sales across the cities — costly, and a magnet for skimming — or hold the reserve against a worse shortage to come.",
      ["Open the granary in subsidised sales.", "A hungry city is a city on the edge.", "You flood the cities with cheap state rice and the queues ease. The reserve drains and skimming creeps in at the trucks, but the poor eat and the streets stay calm.", { EN: 8, FI: -4 }],
      ["Hold the reserve for a worse day.", "A granary emptied early starves a later crisis.", "You ration the reserve against future shortage. The budget and the buffer are protected, but the urban poor go hungry now, and the resentment simmers in the bread queues.", { FI: 4, EN: -8 }])),

  // ── Conditional cash transfer ───────────────────────────────────────────────
  ax("Social Protection Director", "people", ["cash-transfer", "education", "poverty"],
    sx("A conditional cash-transfer scheme would pay poor mothers to keep their children in school and at the clinic — proven to cut poverty and stunting — but it demands a vast, well-run delivery system and a permanent budget line the finance hawks resist.",
      ["Launch the conditional cash transfer.", "Money to a mother for her child's schooling pays back for decades.", "You build the scheme and the payments reach poor mothers. The delivery is a logistical mountain and the budget line permanent, but school attendance climbs and a poverty cycle starts to break.", { EN: 10, GL: 4, FI: -8 }],
      ["Stick with cheaper in-kind handouts.", "A grand transfer scheme is a budget I cannot promise forever.", "You keep the patchy in-kind handouts instead. The budget is spared the permanent commitment, and the chance to bind relief to schooling and health is left on the table.", { FI: 4, EN: -4 }])),

  // ── Property / holding tax ──────────────────────────────────────────────────
  ax("Revenue Board Chairman", "official", ["property-tax", "wealth", "elite"],
    sx("The cities are full of untaxed mansions and empty investment flats hoarded by the rich, while the state scrapes for revenue. A real property tax would tap that idle wealth — and fall squarely on the affluent, donors and dynasts among them.",
      ["Introduce a real property tax.", "A palace should pay more than a payslip.", "You bring in a genuine property tax on the high end. The revenue base broadens onto idle wealth, the affluent grumble and lobby, and for once the rich shoulder a fair share.", { FI: 8, EN: 6, FA: -6, GL: 2 }],
      ["Leave property lightly taxed.", "The men in those mansions are the men who fund me.", "You leave the mansions and empty flats lightly taxed. The donors are content and their wealth stays idle and untouched, and the revenue gap is filled, as ever, by those who cannot dodge.", { FA: 4, FI: -4, EN: -6 }])),

  // ── Digital service tax on Big Tech ─────────────────────────────────────────
  ax("Revenue Board Chairman", "ambassador", ["digital-tax", "big-tech", "revenue"],
    sx("The global tech giants earn fortunes in advertising here while paying almost no tax. A digital-services tax would capture that — and risk retaliation, throttled services, and a quarrel with Washington.",
      ["Impose the digital-services tax.", "A giant that earns here pays here.", "You tax the tech giants' local earnings. The revenue is real and popular, but the platforms threaten to throttle services and Washington adds it to a list of grievances against you.", { FI: 6, GL: -4, EN: 2 }],
      ["Hold off to avoid the quarrel.", "A fight with the platforms and Washington at once is a fight I lose.", "You shelve the tax to keep the peace. The giants keep earning tax-free, the revenue stays forgone, and your dependence on their services and Washington's goodwill stays unchallenged.", { GL: 2, FI: -4 }])),

  // ── Diaspora infrastructure bond ────────────────────────────────────────────
  ax("Debt Management Director", "ambassador", ["diaspora-bond", "infrastructure", "funding"],
    sx("You can raise development funds by selling a patriotic bond to the diaspora — cheaper than markets — but a default or scandal would betray the very people who trusted you most, and they vote and remit.",
      ["Issue the diaspora infrastructure bond.", "Let the children abroad help build the home.", "The diaspora subscribes generously and the projects get cheap funding. You have also taken the savings of trusting expatriates, and any stumble in repayment would be a betrayal felt worldwide.", { FI: 6, GL: 2, RE: 2 }],
      ["Fund development through other means.", "I will not stake my people's trust on a bond.", "You decline to tap the diaspora's savings. The funding is costlier and slower, but you do not put the expatriates' faith — and their remittances — on the line.", { GL: 2, FI: -4 }])),

  // ── Fuel subsidy on irrigation ──────────────────────────────────────────────
  ax("Agriculture Finance Secretary", "people", ["diesel", "irrigation", "subsidy"],
    sx("Diesel for the irrigation pumps has spiked with world prices, threatening the boro rice crop that feeds the nation. Fund an emergency diesel subsidy for farmers — costly and leak-prone — or let the fuel price pass through to the field?",
      ["Fund the emergency irrigation subsidy.", "A dry pump in boro season is a famine in waiting.", "You subsidise the diesel and the pumps keep running through the dry season. The crop is saved and the farmers grateful, at a heavy cost and with the usual leakage at the depots.", { EN: 8, RE: 2, FI: -6 }],
      ["Let the fuel price pass through.", "I cannot subsidise the world's oil price for every pump.", "You let the diesel cost hit the field. The budget is spared, but the irrigation falters, the boro crop wobbles, and the spectre of a thin harvest looms over the year.", { FI: 4, EN: -6, RE: -2 }])),

  // ── Sin taxes ───────────────────────────────────────────────────────────────
  ax("Revenue Board Chairman", "official", ["sin-tax", "health", "revenue"],
    sx("Steep new taxes on tobacco, sugary drinks, and processed junk would raise revenue and improve public health at once — a rare win-win — but the food and tobacco lobbies, and the price-sensitive public, will both push back hard.",
      ["Impose the health-protecting sin taxes.", "A tax that fills the treasury and empties the wards is a gift.", "You levy the sin taxes and revenue and health both improve. The lobbies fight and the public grumbles at pricier vices, but consumption of the worst products begins to fall.", { FI: 6, EN: 6, FA: -4 }],
      ["Spare the consumer and the lobbies.", "A new tax on small pleasures is a small revolt.", "You hold off on the sin taxes. The lobbies and the public are spared, and so is the disease and the revenue forgone, as the wards fill and the treasury stays thin.", { FA: 2, FI: -4, EN: -4 }])),

  // ── Fiscal responsibility law ───────────────────────────────────────────────
  ax("Budget Secretary", "official", ["fiscal-rule", "debt", "discipline"],
    sx("A fiscal-responsibility law would cap the deficit and debt by statute, binding you and every successor to discipline — a credibility prize for the lenders, and a straitjacket that forbids the populist splurges that win elections.",
      ["Enact the binding fiscal rule.", "A state that cannot bind itself cannot be trusted.", "You pass the fiscal-responsibility law. The lenders cheer the credibility and the markets calm, and you have tied your own hands against the easy election-year splurge.", { GL: 6, FI: 4, EN: -2 }],
      ["Keep your fiscal hands free.", "A rule that forbids me to spend in a crisis is a trap.", "You decline the statutory cap. You keep the freedom to splurge when politics demands, and the lenders keep their doubt about whether the deficit will ever truly be controlled.", { FI: -2, EN: 2, GL: -4 }])),

  // ── Transfer pricing by multinationals ──────────────────────────────────────
  ax("Large Taxpayer Unit Chief", "official", ["transfer-pricing", "multinationals", "evasion"],
    sx("Multinational firms shift their local profits abroad through rigged internal pricing, paying almost no tax here. The chief wants a hard transfer-pricing crackdown; the firms threaten to scale back investment and lobby their embassies.",
      ["Crack down on transfer-pricing abuse.", "Profits earned here should be taxed here.", "You enforce transfer-pricing rules and claw back real revenue. The multinationals grumble and a few trim investment, but the era of booking local fortunes as foreign losses ends.", { FI: 8, GL: 2, EN: 2 }],
      ["Tread softly to keep the investors sweet.", "A spooked multinational takes its factory elsewhere.", "You go easy to protect the investment climate. The firms keep shifting their profits offshore tax-free, and the revenue you could have captured stays on a balance sheet in another country.", { GL: 2, FI: -6 }])),

  // ── Crop insurance ──────────────────────────────────────────────────────────
  ax("Agriculture Finance Secretary", "people", ["insurance", "farmers", "climate"],
    sx("Floods, cyclones, and droughts wipe out farmers' crops and push them into ruinous debt every year. A subsidised crop-insurance scheme would cushion them — a costly, complex new system, versus the cheaper status quo of ad-hoc disaster relief.",
      ["Build the subsidised crop-insurance scheme.", "A farmer insured plants without fear.", "You stand up crop insurance for the climate-battered. The system is costly and complex to run, but a ruined harvest no longer means a ruined family, and the farmers plant with confidence.", { EN: 8, RE: 2, FI: -6 }],
      ["Stick with ad-hoc disaster relief.", "A whole insurance system is a luxury; relief is enough.", "You keep the patchy, after-the-fact relief. It is cheaper and simpler, and each disaster still sweeps another cohort of farmers from their land into the moneylender's grip.", { FI: 4, EN: -4 }])),

  // ── Provident / pension fund investment ─────────────────────────────────────
  ax("Provident Fund Trustee", "official", ["pension-fund", "investment", "risk"],
    sx("The vast public provident and pension funds sit in low-yield government paper. A reform would let them chase higher market returns — and expose millions of workers' retirements to risk, manipulation, and the temptation to fund pet projects.",
      ["Let the funds chase higher market returns.", "Idle retirement money should work harder.", "You free the funds to invest in markets and infrastructure. Returns rise in good years, but the workers' retirements now ride the market's moods, and the temptation to steer them into pet projects is real.", { FI: 4, RE: 2, EN: -4 }],
      ["Keep retirement money safe and dull.", "A pensioner's savings are not a venture fund.", "You keep the funds in safe, dull government paper. The returns are modest, but the workers' retirements are not gambled on markets or raided for politically favoured schemes.", { EN: 4, FI: -2 }])),

  // ── COVID-style stimulus distribution ───────────────────────────────────────
  ax("Stimulus Coordination Chief", "fixer", ["stimulus", "sme", "leakage"],
    sx("A huge emergency stimulus must flow fast to keep firms alive through a shock — but speed means weak controls, and the big connected firms are already first in the queue while the small ones that need it most cannot claim it.",
      ["Push the money out fast through the banks.", "Speed saves firms; controls can come later.", "You disburse fast through the banks, and the big connected firms hoover up the lion's share. Many are saved, but the small firms that needed it most are left out, and the leakage is enormous.", { FI: 4, FA: 4, EN: -6 }],
      ["Build a fair channel to the small firms.", "A stimulus that feeds the fed is no stimulus.", "You insist on a slower channel that reaches the genuinely small and informal. The big firms wait and grumble and a few fail in the delay, but the rescue reaches those it was meant for.", { EN: 8, FI: -4, FA: -4 }])),

  // ── IPO pricing manipulation ────────────────────────────────────────────────
  ax("Securities Regulator", "shadow", ["ipo", "market", "manipulation"],
    sx("A wave of companies wants to list, and insiders are pricing the IPOs to enrich a favoured few before dumping on the retail crowd. Enforce fair, fundamentals-based pricing — slowing the listings — or let the lucrative game run?",
      ["Enforce fair IPO pricing.", "A market rigged at the listing is rotten at the root.", "You impose disciplined, fundamentals-based pricing. The listings slow and the insiders lose their easy killing, but the retail investor stops being the designated bag-holder.", { GL: 4, EN: 6, FI: -2, FA: -2 }],
      ["Let the listing game run.", "A busy market looks like a healthy one.", "You let the rigged IPOs flow. The market looks vibrant and the insiders prosper, and the small investors who buy the dumped shares learn, again, who the market is really for.", { FI: 4, FA: 2, EN: -6 }])),

  // ── Single-borrower exposure limit ──────────────────────────────────────────
  ax("Banking Division Secretary", "official", ["banks", "exposure", "concentration"],
    sx("A few giant business groups have borrowed so heavily that the failure of any one could topple the system. The secretary wants strict single-borrower limits enforced; the groups — major donors — call it a chokehold on the economy's engines.",
      ["Enforce strict single-borrower limits.", "A bank chained to one tycoon falls with him.", "You force the concentration down. The over-leveraged groups must deleverage and protest bitterly, but the banking system stops being hostage to a handful of empires.", { FI: 4, GL: 4, EN: 4, FA: -6 }],
      ["Relax the limits for the big groups.", "The great groups are the engines; do not stall them.", "You let the concentration ride. The tycoons keep borrowing freely and stay loyal, and the system's fate stays welded to a few balance sheets that are too big to fail and too connected to refuse.", { FI: 2, FA: 4, EN: -4, GL: -4 }])),

  // ── Bank board family-control law ───────────────────────────────────────────
  ax("Banking Division Secretary", "fixer", ["banks", "family-control", "governance"],
    sx("A law lets a single family hold a bank's board for years through multiple directorships — a recipe for the insider looting that has hollowed banks before. A reform would break the grip; the banking dynasties, tied to your party, will fight it.",
      ["Break the family grip on bank boards.", "A bank run as a family fief gets looted as one.", "You cap family directorships and tenure. The banking dynasties rage and lean on their party ties, but the boards open up and the insider-looting machine loses its grease.", { GL: 6, EN: 6, FI: 2, FA: -8 }],
      ["Preserve the family directorships.", "The banking families are pillars of the party.", "You keep the family-control law intact. The dynasties stay grateful and entrenched, and the next hollowed-out bank is already being quietly emptied by the board that owns it.", { FA: 6, FI: -2, EN: -6, GL: -4 }])),

  // ── Anti-dumping / cheap imports ────────────────────────────────────────────
  ax("Tariff Commission Chief", "official", ["dumping", "tariffs", "industry"],
    sx("A flood of cheap, possibly dumped, foreign goods is undercutting your domestic manufacturers. Slap on protective anti-dumping duties to save local industry and jobs — raising prices for consumers — or keep the market open and cheap?",
      ["Impose protective anti-dumping duties.", "A factory drowned in cheap imports is a town unemployed.", "You shield the domestic industry with duties. The local manufacturers and their workers are saved, the exporting nation protests to the trade body, and consumers pay more for the protected goods.", { FI: 2, EN: 4, GL: -4 }],
      ["Keep the market open and cheap.", "A consumer's cheap goods are a benefit too.", "You leave the market open. Consumers enjoy the cheap imports, but the domestic factories buckle and shed jobs, hollowing out the very industry you hoped to grow.", { GL: 2, FI: -2, EN: -4 }])),

  // ── Quasi-fiscal SOE losses ─────────────────────────────────────────────────
  ax("Budget Secretary", "official", ["soe", "losses", "transparency"],
    sx("The state enterprises' staggering losses are hidden off-budget, funded by directed bank loans and never shown to parliament. Bring them onto the books for honest accounting — a shocking number — or keep them comfortably in the shadows?",
      ["Bring the SOE losses onto the budget.", "A loss hidden is a debt compounding in the dark.", "You consolidate the hidden losses into the open budget. The true deficit number shocks, but the lenders respect the honesty and the bleeding enterprises can finally be confronted.", { GL: 6, EN: 2, FI: -4 }],
      ["Keep the losses off-budget.", "An ugly number published is a panic invited.", "You leave the SOE losses in the shadows. The headline deficit stays flattering, and the hidden hole keeps growing, funded by banks that will one day present the bill.", { FI: 4, GL: -6, EN: -2 }])),

  // ── FATF grey-list threat ───────────────────────────────────────────────────
  ax("Anti-Money-Laundering Director", "ambassador", ["fatf", "compliance", "reputation"],
    sx("The global financial watchdog threatens to grey-list the country over weak money-laundering controls — a label that would choke correspondent banking and scare investors. Fixing it means real enforcement against laundering your own backers enjoy.",
      ["Enforce hard to avoid the grey list.", "A grey-listed nation is a nation cut off.", "You build genuine anti-laundering enforcement and dodge the listing. Correspondent banking stays open and investors calm, but your backers' laundering channels are now watched, and they are furious.", { GL: 8, FI: 4, FA: -6 }],
      ["Do the minimum and risk the listing.", "I will not strangle my friends' money to please a watchdog.", "You make cosmetic changes and your backers keep their channels. The watchdog grey-lists you, correspondent banks pull back, and the cost of every cross-border transaction climbs.", { FA: 4, GL: -8, FI: -6 }])),

  // ── Benami property law ─────────────────────────────────────────────────────
  ax("Land Reform Commissioner", "official", ["benami", "property", "corruption"],
    sx("Vast wealth hides in 'benami' property — assets held in others' names to disguise the true, often corrupt, owner. A law to pierce these veils and seize illicit holdings would be transformative — and expose fortunes held by the very powerful.",
      ["Enact and enforce the benami law.", "A fortune in a servant's name is a confession.", "You pass the law and begin piercing the false ownership. Illicit fortunes are exposed and some seized, and the powerful who hid behind nominees are suddenly, dangerously visible.", { GL: 6, EN: 8, FI: 4, FA: -8 }],
      ["Leave benami holdings undisturbed.", "Too many of those names lead back to my own.", "You let the benami fortunes lie. The powerful keep their disguised wealth, the loophole stays wide open, and the corrupt accumulation of decades goes quietly unchallenged.", { FA: 6, FI: -2, EN: -6, GL: -4 }])),

  // ── Gold smuggling vs legal import ──────────────────────────────────────────
  ax("Customs Commissioner", "shadow", ["gold", "smuggling", "policy"],
    sx("Tonnes of gold pass through the country's airports as smuggled transit, enriching syndicates with airport and police protection. Legalise and tax gold imports to kill the smuggling's logic, or keep cracking down while the rackets thrive?",
      ["Legalise and tax gold imports.", "A trade taxed in daylight starves the smuggler.", "You open a legal, taxed gold-import channel. The smuggling syndicates lose their edge, the jewellers and the treasury gain, and a shadow trade is dragged into the light.", { FI: 6, GL: 2, EN: 2, FA: -2 }],
      ["Keep the ban and the crackdowns.", "Legalising smuggling rewards the smuggler.", "You keep gold imports banned and chase the couriers. The headline seizures look tough, but the protected syndicates keep the bulk of the trade and the airport rackets stay golden.", { MI: 2, FI: -2, EN: -4 }])),

  // ── VAT refund / duty drawback fraud ────────────────────────────────────────
  ax("Customs Commissioner", "shadow", ["vat-refund", "drawback", "fraud"],
    sx("Exporters claim duty drawbacks and VAT refunds on goods never made or shipped, draining the treasury through forged paperwork blessed by bribed officers. Install a tracked, audited system, or leave the lucrative scam alone?",
      ["Track and audit every refund claim.", "A refund on a phantom export is theft with a stamp.", "You digitise and audit the refund system and the phantom claims collapse. Real exporters wait a little longer for genuine refunds, but a vast leak of public money is plugged.", { FI: 8, GL: 2, FA: -4 }],
      ["Leave the refund system as it is.", "A crackdown punishes the honest exporter too.", "You leave the refund pipeline loose. The genuine exporters get their money fast, and so do the fraudsters claiming on exports that never existed, bleeding the treasury all the while.", { FI: -4, FA: 2, EN: -4 }])),

  // ── Bonded-warehouse abuse ──────────────────────────────────────────────────
  ax("Customs Commissioner", "shadow", ["bonded-warehouse", "duty", "diversion"],
    sx("Duty-free raw materials imported for export factories under the bonded-warehouse scheme are being diverted onto the local market, undercutting honest producers and dodging duty. Audit the bonds hard, or protect the well-connected abusers?",
      ["Audit the bonded warehouses hard.", "A duty-free import sold at home is smuggling by license.", "You audit the bonds and catch the diverters. Honest producers stop being undercut and the duty is recovered, and the connected abusers and their patrons turn on you.", { FI: 6, EN: 4, FA: -4 }],
      ["Protect the connected abusers.", "The men running those bonds run the party's accounts.", "You leave the bonded scam alone. The diverted goods keep flooding the local market duty-free, honest producers keep losing, and the racket's patrons stay loyal and rich.", { FA: 4, FI: -4, EN: -4 }])),

  // ── Inheritance tax ─────────────────────────────────────────────────────────
  ax("Revenue Board Chairman", "official", ["inheritance-tax", "wealth", "dynasty"],
    sx("Great fortunes pass untaxed from one generation to the next, entrenching a hereditary elite. An inheritance tax would raise revenue and loosen the dynastic grip — and fall hardest on the established families, your own circle among them.",
      ["Introduce an inheritance tax.", "A fortune unearned should not pass wholly untouched.", "You levy a tax on great inheritances. Revenue rises and dynastic wealth loosens at the edges, and the established families — yours included — recoil at the precedent.", { FI: 6, EN: 6, FA: -8 }],
      ["Leave inheritances untaxed.", "I will not be the one to tax my own children's legacy.", "You spare inheritances the tax. The hereditary elite keeps its fortunes intact across generations, and the chance to broaden revenue and loosen dynastic wealth passes by.", { FA: 6, FI: -4, EN: -4 }])),

  // ── Microinsurance for the poor ─────────────────────────────────────────────
  ax("Insurance Regulator", "people", ["microinsurance", "poverty", "resilience"],
    sx("A single illness, death, or flood pushes poor families into destitution. A microinsurance push — tiny premiums, simple payouts via mobile money — would cushion them, but it needs subsidy and tight regulation to stop insurers cheating the poor.",
      ["Drive a regulated microinsurance scheme.", "A few taka of cover stands between a family and ruin.", "You build subsidised, well-regulated microinsurance. The cost and oversight are real, but a flood or a funeral stops meaning the loss of everything for millions of poor households.", { EN: 8, FI: -4, GL: 2 }],
      ["Leave the poor to informal coping.", "A whole insurance system for tiny premiums earns nothing.", "You leave the poor to their informal safety nets of debt and charity. The budget is spared, and the next flood or illness keeps sweeping families from the edge into destitution.", { FI: 2, EN: -6 }])),

  // ── Islamic banking / sukuk ─────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["islamic-finance", "sukuk", "savings"],
    sx("A large, pious pool of savings sits outside the banks because it shuns interest. A proper Islamic-finance framework and sovereign sukuk could mobilise it for development — but it demands real Sharia governance, not a cosmetic relabelling that invites scandal.",
      ["Build genuine Islamic finance and sukuk.", "Faith-shy savings can still build roads.", "You establish credible Islamic-finance rules and issue sukuk. A vast pool of pious savings enters the formal economy and funds development, and the framework's integrity wins trust.", { FI: 6, EN: 4, GL: 2 }],
      ["Slap an Islamic label on conventional products.", "The label is what the market wants; the substance is detail.", "You relabel conventional products as Islamic without real substance. The savings trickle in, but the scholars cry foul, a mis-selling scandal brews, and trust in the whole sector frays.", { FI: 2, EN: -4, GL: -2 }])),

  // ── Deposit insurance ───────────────────────────────────────────────────────
  ax("Banking Division Secretary", "official", ["deposit-insurance", "savers", "stability"],
    sx("Small savers have almost no protection if a bank fails, and rumours of trouble trigger panicked runs. A deposit-insurance scheme would protect savers and calm the system — funded by a levy the banks will resist.",
      ["Establish robust deposit insurance.", "A saver who fears for his deposit starts a run.", "You build real deposit insurance funded by a bank levy. The banks grumble at the cost, but small savers gain protection and the system gains a shock absorber against panic.", { FI: 4, EN: 6, GL: 2, FA: -2 }],
      ["Leave savers to take their chances.", "A levy on the banks is a cost passed to the customer.", "You decline the scheme to spare the banks the levy. The savers stay exposed, and the next rumour about a weak bank empties its counters before the truth can catch up.", { FI: 2, EN: -6 }])),

  // ── School stipend expansion ────────────────────────────────────────────────
  ax("Education Finance Secretary", "people", ["stipend", "girls", "education"],
    sx("The school stipend that keeps poor children — especially girls — in class is too small and reaches too few. Expanding it would lift enrolment and delay child marriage, at a steep and permanent cost to the budget.",
      ["Expand the school stipend widely.", "A stipend that keeps a girl in school changes a generation.", "You widen and raise the stipend. Enrolment climbs, child marriages slip later, and the budget takes a heavy permanent load for a payoff measured in decades.", { EN: 10, GL: 4, FI: -8 }],
      ["Keep the stipend small and targeted.", "A generous stipend is a budget line forever.", "You keep the stipend lean. The budget is protected, but the poorest children — and the girls most at risk of early marriage — keep dropping out for want of a few taka.", { FI: 4, EN: -4 }])),

  // ── Maternity allowance ─────────────────────────────────────────────────────
  ax("Women's Affairs Finance Officer", "people", ["maternity", "allowance", "poverty"],
    sx("Poor pregnant and nursing women work to the day they give birth and back, harming mother and child for want of support. A national maternity allowance would change that — a costly, permanent commitment the hawks call unaffordable.",
      ["Fund a national maternity allowance.", "A nation that will not support its mothers stunts its future.", "You establish the maternity allowance. Mothers rest and nurse, infant health improves, and the budget carries a new permanent burden for a quietly transformative return.", { EN: 10, GL: 4, FI: -6 }],
      ["Leave maternity support to charity.", "A new allowance is a promise the budget cannot keep.", "You decline the allowance. The treasury is spared, and poor mothers keep labouring to the last day and back, the cost paid in their health and their children's.", { FI: 4, EN: -6 }])),

  // ── Free textbook printing ──────────────────────────────────────────────────
  ax("Education Finance Secretary", "fixer", ["textbooks", "printing", "graft"],
    sx("The annual free-textbook programme — hundreds of millions of books to every child — is riddled with printing-contract graft and quality-skimping. Clean up the tenders, angering a cartel of party-linked printers, or keep the books flowing on the corrupt status quo?",
      ["Clean up the textbook tenders.", "A child's book should not be a printer's bribe.", "You open the tenders and enforce quality. The party-linked printing cartel rages and threatens delays, but the books arrive better and the graft shrinks.", { EN: 6, FI: 2, GL: 2, FA: -4 }],
      ["Keep the printing cartel happy.", "The books arrive on time; do not break the machine.", "You leave the cosy contracts intact. The books arrive on schedule, flimsy and over-priced, and the printers' cartel stays a reliable, grateful funder of the party.", { FA: 4, FI: -2, EN: -4 }])),

  // ── Tax net widening ────────────────────────────────────────────────────────
  ax("Revenue Board Chairman", "official", ["tax-net", "informal", "compliance"],
    sx("Only a tiny fraction of citizens file taxes, and the chairman wants a drive to pull the informal middle — traders, professionals, landlords — into the net. It would broaden revenue fairly, and knock on a million doors that have never paid and will resent it.",
      ["Drive a broad tax-net expansion.", "A nation where few pay is a nation few can fund.", "You launch the registration and enforcement drive. Revenue broadens onto those long outside the net, the new taxpayers grumble loudly, and the salaried at last get some company in paying.", { FI: 8, EN: 4, FA: -4 }],
      ["Leave the informal economy untaxed.", "A million new tax notices is a million new enemies.", "You hold off on the expansion. The informal middle keeps its untaxed cash, the revenue base stays narrow, and the few who do pay keep carrying the many who do not.", { FA: 2, FI: -4 }])),

  // ── Currency redenomination ─────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["currency", "redenomination", "confidence"],
    sx("Years of inflation have left the currency cluttered with zeros, and a vanity proposal would lop several off to 'restore the taka's dignity'. The governor warns it is costly, disruptive, and purely cosmetic — fixing none of the inflation behind the zeros.",
      ["Redenominate the currency.", "A proud currency wears fewer zeros.", "You lop the zeros off the taka in a grand relaunch. The notes look tidier and the optics flatter, and the costly, disruptive exercise changes nothing about the inflation that bloated them.", { FI: -4, GL: 2, EN: -2 }],
      ["Reject the cosmetic redenomination.", "Zeros are a symptom; cutting them cures nothing.", "You spike the vanity project. There is no relaunch fanfare, but the money and disruption are saved, and you focus on the inflation that actually matters.", { FI: 4, GL: -2 }])),

  // ── Agent banking for the rural unbanked ────────────────────────────────────
  ax("Financial Inclusion Director", "people", ["agent-banking", "rural", "inclusion"],
    sx("Agent banking — local shopkeepers acting as bank outlets — could bring real banking to villages that have never seen a branch. The director wants an aggressive rollout; the banks fear the fraud risk and the threat to their branches.",
      ["Push aggressive agent-banking rollout.", "A bank counter in every bazaar banks the nation.", "You drive agent banking deep into the villages. The unbanked gain savings, credit, and payments for the first time, and the banks' fraud fears prove manageable against the reach gained.", { EN: 8, FI: 4, GL: 2 }],
      ["Let the banks set the pace.", "A reckless rollout invites a fraud scandal.", "You leave the pace to the cautious banks. The fraud risk stays low, and so does the reach, and the villages keep waiting for a banking system that never quite arrives.", { FI: 2, EN: -4 }])),

  // ── World Bank budget support conditions ────────────────────────────────────
  ax("External Finance Secretary", "ambassador", ["world-bank", "conditions", "reform"],
    sx("The World Bank offers cheap budget support tied to governance reforms — procurement transparency, SOE discipline, subsidy reform. The money is cheap and the reforms sound; the catch is foreign conditions on domestic policy.",
      ["Take the support and the reforms.", "Cheap money and good medicine in one dose.", "You accept the budget support and enact the reforms. The cheap money helps and the governance genuinely improves, and the nationalists grumble about foreign hands on the tiller.", { FI: 6, GL: 4, EN: 2, FA: -2 }],
      ["Refuse the conditional support.", "I will not let a foreign bank write my budget.", "You turn down the conditional money on principle. You keep full policy control, but you forgo cheap finance and the reforms that, conditions aside, the country actually needed.", { FA: 2, FI: -6, GL: -2 }])),

  // ── Wage-theft enforcement ──────────────────────────────────────────────────
  ax("Labour Finance Inspector", "people", ["wage-theft", "workers", "enforcement"],
    sx("Across the informal economy and even the factories, employers routinely withhold wages, overtime, and legal dues with near-total impunity. The inspector wants an enforcement unit with teeth; the employers, many of them donors, call it harassment.",
      ["Build a wage-enforcement unit with teeth.", "A wage withheld is a wage stolen.", "You stand up a unit that actually recovers stolen wages and fines the thieves. Workers start getting their due, the donor-employers cry harassment, and a quiet everyday injustice meets a check.", { EN: 8, GL: 2, FI: -2, FA: -4 }],
      ["Leave wage disputes to the workers.", "An employer hounded for back-pay closes the gate.", "You decline to build the unit. The employers keep their impunity, and the workers keep chasing wages already earned and rarely paid in full.", { FA: 4, FI: 2, EN: -6 }])),

  // ── Bank recapitalisation with public money ─────────────────────────────────
  ax("Budget Secretary", "fixer", ["recapitalisation", "banks", "bailout"],
    sx("The state banks, looted into insolvency, need recapitalising again — public money poured into holes dug by the very managers and defaulters who looted them. Pay up, or attach hard conditions?",
      ["Recapitalise with no strings.", "A failed state bank cannot simply be allowed to die.", "You pour public money into the looted banks again, no questions asked. They limp on, the loopers and defaulters who emptied them face nothing, and the cycle is set to repeat.", { FI: -4, FA: 4, EN: -6, GL: -4 }],
      ["Attach hard reform conditions.", "I will not refill a bucket no one will fix.", "You make the bailout conditional on board purges, recoveries, and reform. The looters and their patrons fight it bitterly, but the public money goes in with at least a chance of staying.", { GL: 4, EN: 4, FI: -4, FA: -6 }])),

  // ── Presumptive / turnover tax on small business ────────────────────────────
  ax("Revenue Board Chairman", "people", ["small-business", "turnover-tax", "simplicity"],
    sx("Small businesses are crushed by complex tax paperwork and the bribes that come with assessment. A simple flat turnover tax would ease their burden and pull them into the system — at the cost of some revenue from the more honest.",
      ["Introduce the simple turnover tax.", "A tax a shopkeeper can compute is a tax a shopkeeper pays.", "You bring in a flat, simple turnover tax for small firms. Compliance jumps as the paperwork and the bribes fall away, and the system gains millions of small, honest taxpayers.", { FI: 4, EN: 6, FA: -2 }],
      ["Keep the existing complex assessment.", "A flat tax leaves money on the table from the bigger fish.", "You keep the complex regime. The treasury squeezes more from the few who comply, and the rest stay outside, paying the assessor a bribe instead of the state a tax.", { FI: 2, EN: -4 }])),

  // ── Directed lending to favoured sectors ────────────────────────────────────
  ax("Central Bank Governor", "fixer", ["directed-lending", "credit", "distortion"],
    sx("The ministry wants the central bank to order the banks to pump cheap, directed credit into politically favoured firms. The governor warns it distorts the market and breeds bad loans; the politics says those firms are friends who must be fed.",
      ["Order the directed lending.", "Credit steered to friends is friendship repaid.", "You direct the cheap credit to the favoured firms. They prosper on subsidised loans, the market distorts, and a fresh crop of politically-blessed bad loans begins to sprout.", { FI: 2, FA: 4, EN: -4, GL: -4 }],
      ["Let credit follow the market.", "Lending by favour is the seed of every banking crisis.", "You refuse to direct the credit. The favoured firms grumble at being denied their subsidy, but the banks lend on merit and the next wave of bad loans is not sown by decree.", { GL: 4, FI: 2, EN: 2, FA: -4 }])),

  // ── Monetary tightening vs growth ───────────────────────────────────────────
  ax("Central Bank Governor", "official", ["interest-rate", "inflation", "growth"],
    sx("Inflation is biting hard, and the textbook answer is to raise interest rates and choke it — at the cost of slowing growth and raising borrowing costs. Tighten, or keep money cheap?",
      ["Raise rates to crush inflation.", "Unchecked inflation robs every wage and saving.", "You tighten hard and inflation begins, slowly, to ease. Borrowing costs jump, growth cools, the business lobby howls, and the painful medicine works as medicine does.", { FI: 4, GL: 4, EN: -6 }],
      ["Keep money cheap to protect growth.", "A choked economy is a poorer one for everyone.", "You keep rates low to protect growth and jobs. The business lobby is pleased and the expansion continues, and inflation keeps gnawing at every wage and every saving in the country.", { EN: 2, FI: -4, GL: -2 }])),

  // ── FDI screening for strategic sectors ─────────────────────────────────────
  ax("Investment Authority Chief", "ambassador", ["fdi", "screening", "sovereignty"],
    sx("Foreign capital wants to buy into ports, telecoms, and banks — strategic sectors. A screening regime would protect national security from a single foreign power buying influence; an open door would maximise the investment you desperately need.",
      ["Screen FDI in strategic sectors.", "Some assets must not be owned from abroad.", "You set up a screening regime for strategic sectors. Some investment is deterred and the open-economy purists complain, but no single foreign power buys a chokehold on your ports or banks.", { GL: 2, MI: 4, FI: -4 }],
      ["Keep an open door for all FDI.", "Capital is capital; the country needs it.", "You keep the door wide open. The investment flows in handsomely, and with it a foreign power's quiet acquisition of stakes in the infrastructure your security depends on.", { FI: 6, GL: 2, MI: -4 }])),

  // ── Land-mutation digitisation ──────────────────────────────────────────────
  ax("Land Reform Commissioner", "people", ["land-records", "digitisation", "corruption"],
    sx("Land records are a chaos of forgeries and bribes, the biggest source of litigation and graft in the country. Digitising them would end a century of fraud — and gut a lucrative ecosystem of clerks, touts, and forgers tied to local power.",
      ["Digitise the land records.", "A clear title is the poor man's strongest shield.", "You drive the digitisation through against fierce resistance. The forgers and touts lose their racket, land litigation eases, and the poor gain titles that can finally be defended.", { EN: 8, GL: 4, FI: 2, FA: -4 }],
      ["Leave the paper land records be.", "Untangling a century of forgery is a war I cannot win.", "You leave the land-records chaos intact. The clerks and touts keep their lucrative fraud, the courts stay clogged with land disputes, and the powerful keep dispossessing the weak by forged deed.", { FA: 4, FI: -2, EN: -6 }])),

  // ── Demurrage / port efficiency ─────────────────────────────────────────────
  ax("Ports Finance Director", "official", ["port", "efficiency", "trade"],
    sx("The main port's chronic congestion costs the economy billions in demurrage, but fixing it means automating operations and breaking the entrenched handling syndicates that profit from the chaos. Take them on?",
      ["Modernise the port, break the syndicates.", "A clogged port is a tax on every import and export.", "You automate the port and break the handling syndicates. The demurrage bill plummets and trade speeds up, and the displaced syndicate bosses and their political patrons declare war.", { FI: 6, GL: 4, EN: 2, FA: -4 }],
      ["Leave the port and its syndicates be.", "A port shutdown over reform would cripple the economy.", "You avoid the fight with the port syndicates. The congestion and demurrage grind on as a permanent drag, and the economy quietly pays the syndicates' toll on every container.", { FA: 2, FI: -4, GL: -2 }])),

  // ── Cash-economy to digital push ────────────────────────────────────────────
  ax("Digital Finance Adviser", "people", ["digital-payments", "cash", "transparency"],
    sx("The economy runs on untraceable cash, fuelling tax evasion and graft. A hard push toward digital payments would widen the tax net and cut corruption, but it sidelines the cash-poor and the elderly and threatens the informal traders.",
      ["Drive the shift to digital payments.", "Cash in the dark is where taxes go to die.", "You push hard for digital payments and the tax net widens as cash retreats. Corruption gets harder to hide, and the cash-poor and elderly struggle, needing support to keep up.", { FI: 6, EN: 2, GL: 2 }],
      ["Let cash and digital coexist gently.", "A nation forced cashless overnight abandons its poorest.", "You let the transition come gradually. No one is left stranded by a sudden cashless push, but the untraceable cash economy keeps shielding the evaders and the grafters.", { EN: 2, FI: -2 }])),

  // ── Telecom spectrum auction ────────────────────────────────────────────────
  ax("Telecom Finance Director", "ambassador", ["spectrum", "auction", "revenue"],
    sx("New mobile spectrum is up for auction. Set a punishing reserve price to milk the operators for maximum one-time revenue, or price it to spur cheap, fast data and broad coverage that grows the digital economy for years?",
      ["Maximise the auction revenue.", "Spectrum is a one-time treasure; sell it dear.", "You squeeze the operators for a record auction haul. The treasury banks a windfall, and the operators, recouping it, keep data dear and coverage thin for years to come.", { FI: 8, EN: -4, RE: -2 }],
      ["Price spectrum for cheap, wide data.", "Cheap data grows more than a one-time cheque.", "You price the spectrum to spur coverage and affordable data. The one-time haul is smaller, but cheap fast internet spreads, and the digital economy it feeds pays back for years.", { EN: 6, GL: 2, FI: -4 }])),

  // ── Biman / national airline losses ─────────────────────────────────────────
  ax("Aviation Finance Secretary", "fixer", ["airline", "losses", "soe"],
    sx("The national airline bleeds money on padded leasing deals, overstaffing, and graft, kept aloft for prestige and patronage. Force a painful restructuring or privatisation, or keep subsidising the flag in the sky?",
      ["Restructure or privatise the airline.", "A flag that flies on subsidy flies on borrowed time.", "You force the restructuring, cutting the padded leases and the overstaffing. The unions and the brokers who profited rage, but the airline stops being a bottomless drain on the treasury.", { FI: 8, GL: 2, EN: -6, FA: -4 }],
      ["Keep subsidising the flag carrier.", "A nation's airline is a nation's face.", "You keep the airline aloft on subsidy. The flag flies and the patronage flows, and the padded deals and graft keep the losses mounting flight after flight.", { FA: 4, FI: -6, EN: -2 }])),

  // ── Carbon tax / green levy ─────────────────────────────────────────────────
  ax("Fiscal Climate Adviser", "official", ["carbon-tax", "climate", "revenue"],
    sx("A modest carbon levy on fuels and heavy industry would raise revenue, nudge the economy greener, and please climate donors. It would also raise costs across the board and hit industries and consumers already squeezed by inflation.",
      ["Introduce the carbon levy.", "The polluter should pay, and the treasury should collect.", "You bring in a carbon levy. Revenue rises, the economy nudges greener, and the climate donors approve, while industry and consumers feel one more cost in an already pinched year.", { FI: 4, EN: 4, GL: 4, RE: 2 }],
      ["Hold off on the carbon tax.", "A new fuel levy amid inflation is a riot ordered in advance.", "You shelve the carbon tax. Industry and consumers are spared another cost, and the revenue, the green nudge, and the donor goodwill all go uncollected.", { FI: -2, EN: -2, GL: -2 }])),

  // ── Capital-gains tax on the bourse ─────────────────────────────────────────
  ax("Revenue Board Chairman", "shadow", ["capital-gains", "stock-market", "elite"],
    sx("Large stock-market gains go almost entirely untaxed, a quiet gift to the wealthy and the manipulators. A capital-gains tax would be fair and raise real revenue — and the well-connected big investors warn it will crash the market in protest.",
      ["Tax large capital gains.", "A fortune made on the bourse should pay like any other.", "You tax the big market gains. Revenue rises and fairness with it, the small investor is spared, and the big players stage a noisy sell-off and lean on every connection they have.", { FI: 6, EN: 4, FA: -4 }],
      ["Leave market gains untaxed.", "A capital-gains tax could spook the whole bourse.", "You leave the gains untaxed to keep the market calm. The wealthy and the manipulators keep their tax-free windfalls, and the revenue and the fairness go uncollected.", { FA: 2, FI: -4, EN: -2 }])),

  // ── IMF Article IV honesty ──────────────────────────────────────────────────
  ax("External Finance Secretary", "ambassador", ["imf", "transparency", "data"],
    sx("The IMF's annual review will publish a candid assessment — the real reserves, the hidden debts, the bad loans. Cooperate fully and let the unflattering truth out, or pressure for a softened report that protects the rosy official narrative?",
      ["Cooperate fully with a candid review.", "A diagnosis softened is a disease untreated.", "You let the IMF publish the unvarnished assessment. The numbers sting and the opposition feasts, but the lenders and markets reward the transparency, and the problems can finally be named.", { GL: 6, FI: -2, EN: -2 }],
      ["Pressure for a softened report.", "An honest report is a headline against me.", "You lean on the mission for a gentler write-up. The official narrative survives intact, the markets are soothed by a number that is not quite real, and the IMF's quiet doubts deepen.", { FI: 2, GL: -6 }])),

  // ── Garment safety accord funding ───────────────────────────────────────────
  ax("Industrial Safety Secretary", "people", ["garments", "safety", "factories"],
    sx("After a catastrophic factory collapse, a binding international safety accord requires costly retrofits — fire exits, structural fixes — that the buyers demand and the owners resist. Enforce the accord fully, or help owners dodge it?",
      ["Enforce the safety accord fully.", "A factory that buries its workers is no asset.", "You enforce the retrofits hard, factory by factory. The owners howl at the cost and a few lines close, but the death-trap buildings are fixed and the buyers keep their orders.", { EN: 10, GL: 6, FI: -4, FA: -4 }],
      ["Help owners dodge the costly retrofits.", "Protect the owners who keep a million employed.", "You help the owners paper over the accord. The retrofits go undone, the lines stay cheap, and the next fire or collapse is already being built into a building no one fixed.", { FI: 4, FA: 4, EN: -10, GL: -6 }])),

  // ── Duty-free capital machinery ─────────────────────────────────────────────
  ax("Tariff Commission Chief", "official", ["machinery", "duty", "industry"],
    sx("Industrialists want all imported capital machinery to come in duty-free to spur investment. It would genuinely help manufacturers re-tool — and it is a famous loophole for importing finished goods disguised as 'machinery' to dodge duty.",
      ["Grant broad duty-free machinery imports.", "Cheap machines build modern factories.", "You open the duty-free channel wide. Genuine manufacturers re-tool cheaply, and the disguised-import racket revives alongside, smuggling finished goods in under the machinery label.", { FI: -2, EN: 4, RE: 2 }],
      ["Allow it narrowly with tight verification.", "A loophole for machines becomes a loophole for everything.", "You permit duty-free machinery only with strict end-use verification. The honest manufacturers grumble at the paperwork, but the disguised-import loophole stays shut and the duty is protected.", { FI: 4, EN: 2, FA: -2 }])),

  // ── Hi-tech park / IT industry ──────────────────────────────────────────────
  ax("ICT Investment Director", "official", ["it", "hi-tech-park", "jobs"],
    sx("A flagship hi-tech park could anchor a software and electronics industry and tens of thousands of skilled jobs — if it gets real power, connectivity, and tenants. Too many such parks become empty monuments. Commit fully, or modestly?",
      ["Commit fully to the hi-tech park.", "The future's factories are made of code.", "You back the park with reliable power, fibre, and incentives, and court real anchor tenants. The cost is high and the bet uncertain, but a genuine tech cluster and its skilled jobs begin to form.", { EN: 6, FI: -6, GL: 2, RE: 2 }],
      ["Build it modestly and hope.", "A grand park half-empty is a grand embarrassment.", "You build a modest version and hope tenants come. The cost is contained, but without serious infrastructure and incentives the park risks joining the country's collection of hollow monuments.", { FI: -2, EN: 2 }])),

  // ── Women-entrepreneur credit fund ──────────────────────────────────────────
  ax("SME Finance Director", "people", ["women", "entrepreneurs", "credit"],
    sx("Women entrepreneurs are almost entirely locked out of formal credit by collateral demands and bias. A dedicated, lightly-collateralised fund would unleash a wave of women-led businesses — at higher default risk and the grumbling of bankers who call it charity.",
      ["Launch the women-entrepreneur credit fund.", "Half the talent locked out is half the economy lost.", "You build the dedicated fund. Default risk runs higher and the bankers grumble, but a wave of women-led businesses opens, and a vast pool of stifled enterprise finally finds capital.", { EN: 8, FI: -4, GL: 2 }],
      ["Leave SME credit gender-blind.", "Special funds breed special defaults.", "You keep credit 'neutral', which in practice means collateral-bound and male. The default risk stays low and the bankers content, and women entrepreneurs keep borrowing from family or not at all.", { FI: 2, EN: -4 }])),

  // ── MP development fund ──────────────────────────────────────────────────────
  ax("Planning Commission Member", "fixer", ["mp-fund", "patronage", "local"],
    sx("Each MP gets a large annual development fund for their constituency — a patronage machine that builds loyalty and, often, the MP's own house and friends' contracts. Keep the fund, or route the money through audited local government?",
      ["Keep the MP development funds.", "An MP without a chequebook is an MP without friends.", "You keep the funds flowing to the MPs. They build loyalty and the occasional genuine road, and skim and steer the rest to their own contractors and kin, audited by no one.", { FA: 6, MI: 2, EN: -6, FI: -2 }],
      ["Route the money through local government.", "Development should follow a plan, not a member's whim.", "You move the money to audited local councils. The MPs lose a treasured lever and seethe, but the development spreads by need and plan rather than by the member's favour.", { EN: 8, GL: 4, FA: -6 }])),

  // ── Sovereign credit rating ─────────────────────────────────────────────────
  ax("External Finance Secretary", "ambassador", ["rating", "markets", "reform"],
    sx("The credit-rating agencies will downgrade the country unless you show real fiscal reform — but the reforms, subsidy cuts and tax rises, are politically toxic. A downgrade raises every future borrowing cost; ignoring it keeps the politics easy and the future dear.",
      ["Reform to protect the rating.", "A downgrade taxes every loan for a decade.", "You enact the painful reforms and stave off the downgrade. The public feels the squeeze and grumbles, but the rating holds and the country's future borrowing stays affordable.", { GL: 4, FI: 4, EN: -8 }],
      ["Ignore the agencies, keep the politics easy.", "I will not cut subsidies to please a foreign rating.", "You spare the public the reforms and take the downgrade. The politics stay calm now, and every loan the country raises henceforth carries a higher price for the rating you let slip.", { EN: 4, FI: -6, GL: -4 }])),

  // ── Pay parity / freedom-fighter allowance ──────────────────────────────────
  ax("Budget Secretary", "fixer", ["allowance", "veterans", "spending"],
    sx("The freedom-fighter honour allowance is being expanded again, the rolls swelling implausibly as genuine veterans age and 'new' ones appear with forged certificates. Audit and clean the rolls, angering a sacred constituency, or keep paying all comers?",
      ["Audit and clean the veteran rolls.", "A forged certificate dishonours the real heroes.", "You audit the rolls and strip out the forgeries. The genuine veterans are honoured and the fraud purged, and the cleansing of a sacred list draws furious accusations of disrespect.", { FI: 4, GL: 2, EN: 2, FA: -4 }],
      ["Keep paying the swollen rolls.", "I will not be the one to question a freedom-fighter's claim.", "You leave the rolls untouched. The genuine and the forged draw the honour allowance alike, the sacred constituency stays placated, and the fraud quietly bloats the budget line.", { FA: 6, FI: -4, EN: -2 }])),

  // ── Ride-share / gig economy ────────────────────────────────────────────────
  ax("Transport Economy Adviser", "people", ["gig-economy", "ride-share", "workers"],
    sx("Ride-share and delivery apps have created work for hundreds of thousands of young people — and stripped them of any protection, pay floor, or benefits. The adviser wants minimum earnings and insurance; the apps and the cheap-fare public resist.",
      ["Regulate the gig platforms.", "A job with no floor is a trap with an app.", "You impose minimum earnings, insurance, and dispute rights on the platforms. Fares rise a little and the apps threaten to scale back, but a precarious workforce gains a measure of security.", { EN: 8, FI: -2, GL: 2 }],
      ["Leave the gig economy unregulated.", "Cheap rides and easy work are their own reward.", "You leave the platforms free. Fares stay low and the apps expand, and the young riders and drivers keep working without a floor, a benefit, or a safety net beneath them.", { FI: 2, EN: -6 }])),

  // ── Regional free-trade deal ────────────────────────────────────────────────
  ax("Commerce Envoy", "ambassador", ["fta", "regional", "trade"],
    sx("A regional free-trade agreement would open big neighbouring markets to your exports — and open yours to a flood of their cheaper goods that could swamp domestic industry. Sign the deal, or protect the home market?",
      ["Sign the regional free-trade deal.", "A market opened both ways favours the competitive.", "You sign the FTA and your exporters gain access to vast new markets. Some domestic industries, undercut by cheaper imports, buckle and shed jobs, and the adjustment is wrenching.", { GL: 6, FI: 2, EN: -4 }],
      ["Protect the home market.", "Free trade with a giant is a flood with a treaty.", "You decline the deal to shield domestic industry. The home producers are protected and the jobs held, but your exporters lose the access, and the integration the region is moving toward leaves you behind.", { EN: 2, FI: -2, GL: -4 }])),

  // ── Stamp duty / registration fee ───────────────────────────────────────────
  ax("Revenue Board Chairman", "people", ["stamp-duty", "property", "informality"],
    sx("Property-transfer stamp duty is so high that almost everyone under-declares the sale price, fuelling black money and starving the treasury. Cutting the rate would boost honest declarations; the hawks fear the short-term revenue dip.",
      ["Cut the stamp duty to boost compliance.", "A rate too high is a rate evaded.", "You slash the stamp duty. Declarations jump toward honesty, the property market quickens, and after a brief dip the revenue actually rises as the under-declaration racket collapses.", { FI: 4, EN: 4, GL: 2 }],
      ["Keep the high stamp duty.", "A rate cut is a revenue cut I cannot risk now.", "You keep the duty high. The headline rate looks lucrative, and the universal under-declaration keeps fuelling black money while the treasury collects on fictional sale prices.", { FI: -2, EN: -2 }])),

  // ── Light-engineering / SME cluster ─────────────────────────────────────────
  ax("Industries Secretary", "people", ["sme", "manufacturing", "cluster"],
    sx("A gritty cluster of small workshops makes the spare parts that keep industry and agriculture running — undercapitalised, unregulated, ignored. A push of credit, training, and standards could turn it into a real manufacturing base, or you can keep chasing flashier prizes.",
      ["Invest in the light-engineering cluster.", "A nation that makes its own parts depends on no one's.", "You back the workshops with credit, training, and standards. The transformation is slow and unglamorous, but an import-substituting manufacturing base — and skilled jobs — takes root.", { EN: 6, FI: -4, RE: 2 }],
      ["Chase the flashier industrial prizes.", "Workshops do not make headlines.", "You steer support to glossier projects instead. The flagship announcements dazzle, and the unsung workshops that actually keep industry running stay starved and stuck.", { GL: 2, FI: -2, EN: -2 }])),

  // ── ADB megaproject loan ────────────────────────────────────────────────────
  ax("External Finance Secretary", "ambassador", ["adb", "loan", "megaproject"],
    sx("A development bank offers a large soft loan for a flagship transport corridor — cheaper than markets, but with rigorous procurement and environmental conditions that slow the build and block the cost-padding your contractors expect.",
      ["Take the loan with all its conditions.", "Cheap money and clean procurement together.", "You take the soft loan and accept the rigorous conditions. The build is slower and the contractors are denied their padding, but the corridor is cheaply financed and honestly built.", { FI: 4, GL: 4, EN: 2, FA: -4 }],
      ["Fund it your own way, conditions-free.", "I will not let a bank's auditors run my project.", "You skip the conditional loan and finance it domestically. The contractors get their padding and the speed they want, and the project costs more, runs dirtier, and strains the budget.", { FA: 4, FI: -6, EN: -2 }])),

  // ── High-denomination note ──────────────────────────────────────────────────
  ax("Central Bank Governor", "shadow", ["currency", "high-note", "black-money"],
    sx("A new high-denomination note would ease large cash transactions — convenient, and a famous enabler of hoarding, bribery, and black money. Print it, or hold the line on the largest note?",
      ["Introduce the high-denomination note.", "A bigger note is a smaller suitcase.", "You print the big note. Large cash deals get easier for everyone, including the hoarders, bribers, and launderers who can now move fortunes in a slim envelope.", { FI: 2, EN: -4, GL: -2 }],
      ["Hold the line on the largest note.", "A big note is a bribe's best friend.", "You refuse the high-denomination note. Large cash deals stay bulky and a little harder to hide, a small friction against the corruption that thrives on portable wealth.", { GL: 2, EN: 2 }])),

  // ── Street-vendor formalisation ─────────────────────────────────────────────
  ax("Urban Economy Officer", "people", ["vendors", "informal", "licensing"],
    sx("The cities run on hundreds of thousands of street vendors who block footpaths, pay daily bribes to police and mastans, and have no legal standing. Formalise them with licences and zones, or keep clearing them in periodic, futile drives?",
      ["Formalise and license the vendors.", "A hawker licensed is a hawker freed from the mastan.", "You license the vendors and assign them zones. The police and mastans lose their daily extortion and resent it, but the vendors gain legal standing and the footpaths get some order.", { EN: 8, FI: 2, MI: -2, FA: -2 }],
      ["Keep clearing them in periodic drives.", "The footpaths belong to the pedestrian.", "You keep mounting eviction drives that scatter the vendors for a day before they return. The bribes keep flowing to police and mastans, and nothing actually changes but the optics.", { MI: 2, FI: -2, EN: -6 }])),

  // ── Railway losses ──────────────────────────────────────────────────────────
  ax("Railway Finance Secretary", "people", ["railway", "losses", "subsidy"],
    sx("The state railway loses money on every ticket — cheap fares, overstaffing, ticketless travel, graft — yet it is the lifeline of the poor. Hike fares and cut staff to stem the losses, or keep the cheap, bleeding service running?",
      ["Reform fares and staffing.", "A railway that bankrupts itself serves no one long.", "You raise fares, curb the ticketless, and trim the bloat. The losses narrow and the service steadies, but the poor who depend on cheap travel feel the pinch and the unions strike.", { FI: 6, EN: -6, FA: -2 }],
      ["Keep the cheap service bleeding.", "The train is the poor man's only affordable distance.", "You keep fares low and the trains rolling at a loss. The poor keep their cheap lifeline, and the railway keeps draining the budget, its graft and overstaffing untouched.", { EN: 6, FI: -6 }])),

  // ── Pharma API park ─────────────────────────────────────────────────────────
  ax("Industries Secretary", "doctor", ["pharma", "api", "self-reliance"],
    sx("The proud pharmaceutical industry imports nearly all its active ingredients, leaving it hostage to foreign supply. A dedicated API park would build self-reliance and an export edge — a costly, slow industrial bet versus simply importing as before.",
      ["Build the pharmaceutical API park.", "An industry that imports its core imports its fate.", "You commit to the API park. The investment is heavy and the payoff years away, but the pharma industry begins to make its own ingredients and an export edge sharpens.", { FI: -4, EN: 4, GL: 2, RE: 2 }],
      ["Keep importing the active ingredients.", "Why build what I can buy?", "You keep relying on imported ingredients. The capital is saved, and the industry stays one foreign supply-shock away from a shortage of the medicines the country and its exports depend on.", { FI: 2, EN: -2, GL: -2 }])),

  // ── Internet / SIM tax ──────────────────────────────────────────────────────
  ax("Revenue Board Chairman", "people", ["sim-tax", "internet", "access"],
    sx("Taxes on SIM cards, handsets, and data are an easy revenue stream — and a regressive tax on the very connectivity that drives the digital economy and reaches the rural poor. Raise these taxes, or cut them?",
      ["Raise the SIM and data taxes.", "A connected nation can spare a few taka per gigabyte.", "You raise the connectivity taxes and the revenue flows easily. Data and phones get dearer, the rural poor and the digital economy both feel it, and a regressive levy deepens.", { FI: 6, EN: -6 }],
      ["Cut the regressive connectivity taxes.", "A tax on data is a tax on the future.", "You cut the SIM and data taxes. The easy revenue is forgone, but cheaper connectivity spreads to the rural poor and feeds the digital economy that pays back many times over.", { EN: 6, GL: 2, FI: -4 }])),

  // ── Cottage / handloom heritage industry ────────────────────────────────────
  ax("Cottage Industry Director", "people", ["handloom", "heritage", "artisans"],
    sx("The famed handloom weavers — keepers of a heritage craft — are being wiped out by cheap power-loom imitations and debt. A revival of credit, design support, and a protected 'heritage' label could save them, or you can let the market take its course.",
      ["Fund the handloom revival.", "A craft lost is a heritage no money rebuilds.", "You back the weavers with credit, design, and a protected heritage label. The cost is modest and the market still hard, but a dying craft and the communities who keep it get a fighting chance.", { EN: 6, GL: 2, FI: -4 }],
      ["Let the market take its course.", "Nostalgia cannot outcompete a power loom.", "You let the handloom communities fend for themselves. The cheaper power-loom goods win, the looms fall silent one village at a time, and a centuries-old craft fades toward memory.", { FI: 2, EN: -4 }])),

  // ── EPZ minimum wage ────────────────────────────────────────────────────────
  ax("Export Zone Authority Chief", "people", ["epz", "wages", "investment"],
    sx("The export-processing zones, your showcase for foreign investors, run on a wage floor below the national minimum and a ban on unions. Raising the EPZ wage and allowing unions would be just — and might spook the investors the zones were built to attract.",
      ["Raise EPZ wages and allow unions.", "A showcase built on suppressed wages shames the show.", "You lift the EPZ wage and permit unions. Some investors grumble and threaten to look elsewhere, but the zone workers gain dignity and pay, and the showcase stops being a sweatshop with landscaping.", { EN: 8, GL: 4, FI: -4, FA: -2 }],
      ["Keep the EPZ wages low and unions banned.", "The investors came for the cheap, calm labour.", "You keep the zones cheap and union-free. The investors stay content and the FDI flows, and the zone workers keep earning below the national floor with no voice to change it.", { FI: 6, FA: 2, EN: -8, GL: -2 }])),

  // ── Advance income tax burden ───────────────────────────────────────────────
  ax("Revenue Board Chairman", "people", ["advance-tax", "compliance", "burden"],
    sx("The web of advance and source taxes on imports, utilities, and transactions has become a hidden, regressive burden — easy to collect, but falling regardless of actual profit and impossible for the small to reclaim. Rationalise it?",
      ["Rationalise the advance-tax web.", "A tax collected before profit is a tax on existence.", "You prune the tangle of advance taxes. Collection gets a little harder and revenue dips short-term, but the hidden burden on the small and the consumer eases and the system grows fairer.", { EN: 6, GL: 2, FI: -4 }],
      ["Keep the easy advance-tax collection.", "A tax collected at source is a tax that does not escape.", "You keep the advance-tax web intact. Collection stays easy and leak-proof, and the hidden, regressive burden goes on falling hardest on those least able to reclaim it.", { FI: 4, EN: -4 }])),

  // ── The mega-budget showpiece ───────────────────────────────────────────────
  ax("Budget Secretary", "fixer", ["budget", "deficit", "populism"],
    sx("Election year, and the cabinet wants the largest budget in history — a blizzard of new schemes, subsidies, and giveaways — funded by optimistic forecasts and borrowing. The secretary warns the numbers don't add up; the politics says they don't have to.",
      ["Unveil the record populist budget.", "A budget is a promise, and promises win votes.", "You unveil the record-shattering budget to fanfare. The schemes dazzle and the votes warm, and the fantastical revenue forecasts collapse within months, forcing painful cuts you will own.", { EN: 6, FI: -8, GL: -4 }],
      ["Present a sober, credible budget.", "A budget built on fantasy is a crisis with a launch date.", "You table a realistic budget the numbers actually support. The cabinet grumbles that it lacks fireworks for the campaign, but the lenders trust it and no mid-year reckoning lies in wait.", { GL: 6, FI: 4, EN: -2 }]),
    sx("The budget is passed, and the gap between the grand announcements and the money actually disbursed yawns wide — schemes launched with fanfare sit unfunded and half-built. Chase headline announcements, or quietly fund what was already promised?",
      ["Announce yet more new schemes.", "A ribbon cut is worth more than a road finished.", "You keep launching glittering new schemes over the unfinished ones. The headlines flow, the backlog of half-built promises grows, and the public learns that an announcement here rarely becomes a thing.", { FA: 2, EN: -6, FI: -2 }],
      ["Fund and finish what was promised.", "A promise kept quietly beats ten announced loudly.", "You stop the announcement treadmill and fund the existing commitments to completion. There are fewer ribbons to cut, but the schools, roads, and clinics already promised actually get built.", { EN: 8, GL: 2, FI: -4 }])),
];
