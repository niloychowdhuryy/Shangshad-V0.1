// FINANCE — Finance Ministry (Motijheel). Primary metric: FI.
// Real issues: dwindling forex reserves, IMF tranches, the default-loan/banking
// scandals, remittance vs hundi channels, RMG buyer leverage, megaproject debt,
// capital flight, inflation and subsidy politics, money laundering.
const sx = (prompt, left, right) => ({ prompt, left, right });
const ax = (speaker, portrait, tags, ...stages) => ({ speaker, portrait, tags, stages });

export const FINANCE = [
  // ── The reserves crisis ─────────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["reserves", "forex", "imf"],
    sx("Honourable leader! The bank boss says the country is running out of money fast, but you have been pretending you have more. He says people will find out the truth soon.",
      ["Keep pretending you have lots of money.", "Confidence is a currency too.", "The headline reserves look calm; importers and rating agencies quietly stop believing you, and the black-market dollar climbs.", { FI: 4, GL: -8, EN: -4 }],
      ["Tell the truth about having less money.", "A lie in the books is a run waiting to happen.", "The honesty stings the markets for a week, then steadies them. The IMF, reassured by candour, eases the next tranche.", { FI: -6, GL: 10, MI: -4 }]),
    sx("Sir, urgent news. You are spending all the country's savings to make your money look strong. The bank boss says you must stop, even if it makes things very expensive.",
      ["Stop spending savings and let prices go up.", "Better a fair price than an empty vault.", "The taka drops; exporters and remitters cheer while every imported good — fuel, food, medicine — jumps overnight. The streets feel it instantly.", { FI: 8, GL: 6, EN: -12 }],
      ["Keep spending savings to look strong.", "A cliff-edge devaluation would break the poor.", "You hold the line a while longer at the cost of the vault. The reserves thin toward the danger mark and the market sniffs the weakness.", { FI: -10, EN: 6, GL: -4 }]),
    sx("Sir, forgive me — You are out of money. A big global bank will give you emergency money, but only if you make gas prices very high right now. Your helpers say angry people will fill the streets.",
      ["Take the money and raise gas prices.", "Solvency now, anger managed later.", "Dollars refill the vault as fuel and power prices spike. The crisis on the balance sheet becomes a crisis in the bazaars.", { FI: 12, GL: 8, EN: -14, MI: -4 }],
      ["Say no and look for money somewhere else.", "I will not detonate prices on a foreign schedule.", "You borrow from friendly capitals instead — costlier, with strings of their own. The subsidy holds; the debt stack grows more dangerous.", { FI: 4, GL: -4, EN: 6, RE: -4 }])),

  // ── Default loans / the banking cartel ──────────────────────────────────────
  ax("Bank Reform Commissioner", "official", ["banks", "default-loans", "cronies"],
    sx("A word, sir! Rich families who give you money are secretly stealing from the banks. If you tell the truth, the banks will look broken. If you hide it, the banks will rot from the inside.",
      ["Keep hiding it so the banks look fine.", "These men keep the party funded.", "The books stay pretty and the donors stay loyal. The hole grows in the dark, and one bank's collapse could pull down the rest.", { FI: 6, FA: 4, GL: -8, EN: -4 }],
      ["Tell the truth and make them pay it back.", "A looted bank is a tax on every saver.", "You name the defaulters and freeze their rolling. The donors revolt and the books look grim — but depositors, and the IMF, exhale.", { FI: -8, GL: 10, MI: -4, FA: -6 }]),
    sx("Sir, we have a problem. You caught the biggest bank thief, but he owns TV stations and helps your team. He offers to pay back a little bit and say nice things about you on TV if you let him go.",
      ["Take the deal and the nice TV news.", "Half a recovery and a friendly press is no small thing.", "He repays a fraction and his channels glow for you. Every other defaulter learns the price of getting caught is merely negotiable.", { FI: 4, FA: 6, GL: -6, MI: 4 }],
      ["Make him pay back every penny, no matter what.", "The law cannot have a discount for the loud.", "You break him publicly. His networks turn on you nightly — but the message lands that the era of free money is over.", { FI: 8, GL: 6, FA: -8, MI: -6 }])),

  // ── Remittances vs hundi ────────────────────────────────────────────────────
  ax("Expatriate Welfare Secretary", "official", ["remittances", "hundi", "diaspora"],
    sx("Sir! Workers in other countries are sending money home secretly because it's cheaper. This means your government doesn't get to count it. You can offer them a bonus to send it legally.",
      ["Pay them a bonus to send money legally.", "Buy the dollars back into the system.", "Formal inflows jump and the reserves breathe — at a real fiscal cost, and with smugglers adapting their margins fast.", { FI: 8, EN: 4, GL: 4 }],
      ["Send police to stop the secret money networks.", "Punish the channel, not subsidise the rival.", "Raids disrupt the networks briefly. The operators reroute through crypto and gold; workers, harassed, trust the banks even less.", { FI: -4, MI: 6, GL: -4 }])),

  // ── RMG buyer leverage ──────────────────────────────────────────────────────
  ax("Garment Buyers' Consortium", "official", ["rmg", "exports", "wages"],
    sx("Mr. Prime Minister, sir! People who buy your country's clothes say you must pay workers more and make factories safer, or they will stop buying. Factory owners say paying more will ruin them.",
      ["Force the owners to pay workers more.", "Cheap labour is a race we lose anyway.", "Wages rise; the buyers stay and the workers quiet. Marginal factories shutter, and the owners — your donors — are furious.", { GL: 8, EN: 8, FI: -8, FA: -4 }],
      ["Protect the owners and keep wages low.", "Mills closed help no worker at all.", "The owners are grateful and the lines keep running. Some buyers quietly diversify away, and the wage protests build.", { FI: 8, FA: 6, EN: -10, GL: -6 }])),

  // ── Megaproject debt ────────────────────────────────────────────────────────
  ax("Megaproject Coordinator", "official", ["debt", "infrastructure", "china"],
    sx("Your Excellency! You built giant bridges and trains using borrowed money. Now you must pay it back, but you don't have enough. One lender wants to own your boat docks if you can't pay.",
      ["Let them own the boat docks so you get more time.", "Keep the cranes turning at any cost.", "The repayment is rescheduled and construction continues. A strategic port is now partly mortgaged to a foreign creditor.", { FI: 6, RE: -6, GL: -8, MI: -4 }],
      ["Stop building new things and pay the money back now.", "No more monuments we cannot afford.", "You freeze the ribbon-cuttings to service the debt. The optics dull and contractors grumble, but the balance sheet stops bleeding.", { FI: 8, GL: 4, EN: -4, FA: -4 }])),

  // ── Capital flight / second-home laundering ─────────────────────────────────
  ax("Financial Intelligence Chief", "official", ["laundering", "capital-flight", "elite"],
    sx("Prime Minister! Rich people who complain about the country are secretly hiding their money in other countries. Many of them are your friends.",
      ["Hide the secret so your friends don't get in trouble.", "These are the people who hold the regime up.", "The list disappears and the friends stay close. The reserves keep leaking out the back door you chose not to lock.", { FI: -6, FA: 6, GL: -6 }],
      ["Tell everyone and freeze your friends' money.", "Patriotism that flees with the money is none.", "You name and freeze. The elite is enraged and the courts will be slow — but capital flight stutters and the public roars approval.", { FI: 8, EN: 6, GL: 6, FA: -8 }])),

  // ── Inflation / subsidy politics ────────────────────────────────────────────
  ax("Trade & Prices Adviser", "people", ["inflation", "subsidies", "food"],
    sx("Sir — Food is too expensive and people are hungry and angry. You can buy cheap food from other countries to help, but it will cost the government a lot of money.",
      ["Buy the cheap food from outside to help people.", "An empty plate topples governments faster than deficits.", "Prices ease at the bazaar and tempers cool. The deficit widens and local farmers, undercut, send their own anger upward.", { EN: 10, FI: -8, RE: -4 }],
      ["Do not buy it, and tell people to eat less.", "Cheap imports today, dead farms tomorrow.", "The farmers keep their margins and the budget holds. Urban households seethe as the kitchen stays expensive.", { FI: 6, RE: 4, EN: -10, FA: -4 }])),

  // ── Black-market dollar / rating ────────────────────────────────────────────
  ax("Sovereign Ratings Analyst", "ambassador", ["rating", "markets", "confidence"],
    sx("Honourable leader! A judge who grades your country's money is going to give you a bad grade. He hints he will give you a good grade if you secretly give him gifts.",
      ["Secretly give him gifts to get a good grade.", "A friendly rating is cheaper than a downgrade.", "The downgrade is shelved this cycle. The fix is fragile and faintly corrupt; the next analyst may not be so amenable.", { FI: 6, GL: -6, EN: -4 }],
      ["Show him the honest truth and accept a bad grade.", "I will not bribe my way out of arithmetic.", "You bare the fiscal accounts honestly. The downgrade may come, but investors who reward candour begin, cautiously, to return.", { FI: -6, GL: 8, MI: -2 }])),

  // ── BESPOKE INSTALMENT 1 — real Bangladesh fiscal dilemmas ──────────────────

  ax("NBR Chairman", "official", ["tax", "nbr", "informal"],
    sx("Sir, urgent news. Almost nobody pays taxes. Your helper wants to force shopkeepers to pay, but those shopkeepers give you money for your campaigns.",
      ["Force the shopkeepers to pay taxes.", "A state cannot run on 2% of its people.", "Revenue creeps up and the IMF nods — while market associations declare a shutter-down strike against you.", { FI: 12, GL: 6, EN: -8, FA: -4 }],
      ["Be nice to them and don't force them.", "Do not squeeze the people who keep me standing.", "The committees stay loyal and the books stay thin. The tax-to-GDP ratio remains among the lowest on earth.", { FA: 8, FI: -8, GL: -6 }])),

  ax("Budget Adviser", "official", ["black-money", "whitening", "budget"],
    sx("Sir, forgive me — People are hiding stolen money. You can let them keep it if they pay a tiny tax, and you won't ask any questions. This rewards bad guys but gives you some money.",
      ["Let them keep the stolen money and pay a tiny tax.", "Better the money home than abroad.", "Hidden fortunes surface and the deficit eases. Honest taxpayers fume that crime pays a lower rate than they do.", { FI: 12, EN: -8, GL: -6 }],
      ["Say no to this bad rule.", "I will not legislate a discount for thieves.", "You close the loophole on principle. The flagged billions stay offshore, and the budget must find them elsewhere.", { GL: 6, EN: 6, FI: -10 }])),

  ax("Stock Exchange Chair", "official", ["dse", "market", "retail"],
    sx("A word, sir! The stock market is crashing and normal people are losing their money. They are very angry. Your helper wants to create a fake rule to stop prices from dropping.",
      ["Make the fake rule to stop prices from dropping.", "Stop the bleeding on the screens.", "The index steadies on paper; trading dries up as no one will buy a price that cannot fall. Foreign funds flee the frozen market.", { EN: 6, FI: -6, GL: -8 }],
      ["Let the prices fall naturally and teach people how it works.", "A propped market is a trap with a delay.", "The index overshoots down, then finds a real bottom. The pain is sharp and the recovery, when it comes, is trusted.", { GL: 6, FI: 4, EN: -8 }]),
    sx("Sir, we have a problem. The stock market is broken. A very rich man says he will fix it, but only if you give him a free bank and a phone company in return.",
      ["Give him the bank and phone company so he fixes it.", "A white knight asks his price.", "Shares rally on his buying spree. You have sold public assets to paper over a market panic, and he now owns a piece of the state.", { FI: 8, EN: 4, GL: -8, FA: 4 }],
      ["Say no and let the market fix itself slowly.", "I will not ransom the bourse to one man.", "The market mends slowly without a saviour. The tycoon turns his media against you for the snub.", { GL: 6, FI: -6, MI: -4 }])),

  ax("Debt Management Chief", "official", ["eurobond", "debt", "markets"],
    sx("Sir! You need money fast. You can borrow a lot of money from the world, but you will have to pay back way too much extra money for ten years.",
      ["Borrow the money right now.", "Cash today is worth the coupon.", "Dollars arrive and the reserves breathe. The expensive interest bill compounds quietly for ten years.", { FI: 10, GL: 4, EN: -4 }],
      ["Wait for a better time and stop buying things.", "I will not borrow dear out of panic.", "You squeeze import demand to hold the line. It bites at home now, but spares the country a decade of costly debt.", { FI: -4, EN: -6, GL: 4 }])),

  ax("Agriculture Secretary", "official", ["subsidy", "fertiliser", "farmers"],
    sx("Mr. Prime Minister, sir! Plant food for farmers is very expensive now. If you don't help pay for it, the crops will die. But helping will cost almost all your money.",
      ["Pay for the plant food so crops can grow.", "A failed harvest is a famine and a fall.", "The fields stay green and the farmers bless you. The deficit balloons and the IMF frowns at the next review.", { EN: 10, RE: 4, FI: -10 }],
      ["Pay for just a little bit to save your money.", "The books must balance somewhere.", "You please the creditors and thin the subsidy. Input costs hit the villages, and rural anger ferments.", { FI: 8, GL: 4, EN: -10, FA: -4 }])),

  ax("Pension Authority Head", "official", ["pension", "welfare", "funding"],
    sx("Your Excellency! You promised to give old people money when they retire, and everyone loves it. But secretly, you don't have enough money to pay them later.",
      ["Keep making the promise and worry about the money later.", "The promise wins this decade's votes.", "Millions sign up to applause. You have built a magnificent liability your successors will curse.", { EN: 10, FA: 4, FI: -8 }],
      ["Stop making promises until you actually have the money.", "A pension that bounces is a betrayal.", "You cap the scheme to make it real. The rollout looks timid, but the cheque will clear when it comes due.", { FI: 6, GL: 4, EN: -8 }])),

  ax("Central Bank Governor", "official", ["banks", "merger", "weak-banks"],
    sx("Prime Minister! Five banks are completely broken but pretending to be okay. You can force them to join good banks, but your rich friends will lose their jobs there.",
      ["Force them to join the good banks.", "Let the dead banks be buried.", "The rot is consolidated and capped. The ousted directors — several are donors — swear vengeance.", { FI: 10, GL: 6, FA: -8 }],
      ["Let them pretend to be okay a little longer.", "Not before the election, not these names.", "The zombies shuffle on, draining liquidity. The reckoning is postponed and made larger.", { FA: 6, FI: -8, GL: -4 }])),

  ax("Mobile Finance Regulator", "official", ["mfs", "bkash", "fintech"],
    sx("Sir — Poor people use their phones to get their paychecks. The big phone company wants to charge them more money to get their cash.",
      ["Stop the company from charging more money.", "The garment girl should keep her wage.", "The fee cap eases millions of small lives. The operator threatens to cut rural agents in protest.", { EN: 10, FA: 4, FI: -6 }],
      ["Let the company charge whatever they want.", "A profitable rail keeps expanding.", "The network grows and invests; the daily skim off the poor grows with it.", { FI: 6, GL: 4, EN: -8 }])),

  ax("Customs Intelligence Chief", "shadow", ["misinvoicing", "laundering", "trade"],
    sx("Honourable leader! People are sneaking billions of dollars out of the country using fake shopping bills. The worst bad guys are friends with your leaders.",
      ["Stop the fake bills and catch everyone.", "Plug the hole in the hull.", "Customs tightens and capital flight slows. Powerful importers, exposed, fund your rivals overnight.", { FI: 10, GL: 6, FA: -8 }],
      ["Let them keep doing it quietly.", "Some hulls are best left unexamined.", "The trade continues and the friends stay close. The reserves keep leaking out the side the cameras never see.", { FA: 6, FI: -6, GL: -6 }])),

  ax("Fuel Pricing Board", "official", ["fuel", "bpc", "subsidy"],
    sx("Sir, urgent news. The government sells gas for cars super cheap and loses money every day. You can make a rule so the price changes automatically, so you don't have to be the bad guy.",
      ["Make the automatic price rule.", "Take the politics out of the pump.", "The oil company stops bleeding; fuel jumps with every global tick, and transport strikes follow each rise.", { FI: 10, GL: 6, EN: -10 }],
      ["Keep the price cheap and lose money.", "Cheap diesel keeps the country moving.", "Buses and irrigation pumps run cheap. The subsidy drains the budget and distorts every market it touches.", { EN: 8, FI: -10, RE: -4 }])),

  ax("Treasury Economist", "official", ["currency", "dual-rate", "taka"],
    sx("Sir, forgive me — The official price of your country's money is fake, so people use a secret black market. You can fix the official price, but it will make everything cost more for everyone at once.",
      ["Fix the price and make things cost more.", "One honest price beats two dishonest ones.", "The black market shrinks and exporters cheer; every imported good leaps in price the same morning.", { FI: 8, GL: 6, EN: -10 }],
      ["Keep the fake price and try to control things.", "A sudden devaluation would break the poor.", "You keep the headline rate and dole out scarce dollars by favour — a system that breeds its own corruption.", { FI: -6, EN: 4, GL: -6 }])),

  ax("Foreign Loans Director", "official", ["china", "debt", "geopolitics"],
    sx("A word, sir! China wants to give you cheap money to build a cool new road. Your enemies say it is a trap to make you owe China forever.",
      ["Take China's money to build the road.", "Cheap concrete is cheap concrete.", "The ring road rises on easy terms. The 'debt-trap' headlines and Western coolness are the price of the bargain.", { FI: 10, RE: 6, GL: -8 }],
      ["Say no and ask other places for money instead.", "I will not mortgage the capital to one capital.", "You pay more for diversified financing and Western goodwill. The project crawls; the books strain.", { GL: 6, FI: -8, RE: -4 }])),

  ax("Pay Commission Head", "official", ["wages", "civil-service", "budget"],
    sx("Sir, we have a problem. Millions of government workers want a big pay raise. If you pay them, they will love you, but it will use up all the money meant for building schools and hospitals.",
      ["Give them a giant pay raise.", "A happy bureaucracy is a working one.", "The files move and the clerks smile. The recurring wage bill devours the money meant for bridges and clinics.", { MI: 6, FA: 4, FI: -10, EN: -4 }],
      ["Give them a small raise you can actually afford.", "The state cannot be a charity for itself.", "You protect the development budget. A sullen civil service slow-walks everything for a season.", { FI: 8, EN: 4, MI: -6 }])),

  ax("Export Promotion Chief", "official", ["rmg", "incentive", "exports"],
    sx("Sir! You give extra money to people who sell clothes to other countries. The world bank says this is unfair and you must stop. The clothes makers will be very angry.",
      ["Keep giving them the extra money.", "Do not gift our orders to Hanoi.", "The looms keep their edge and the dollars keep coming. The IMF marks another unmet condition against you.", { FI: 6, GL: -6, EN: 4, FA: 4 }],
      ["Stop giving them the extra money like you promised.", "A crutch carried too long becomes a cast.", "You please the lenders and prod exporters to compete on merit. Margins thin; some marginal factories fold.", { GL: 8, FI: -6, EN: -6 }])),

  ax("Deficit Financing Officer", "official", ["printing", "inflation", "central-bank"],
    sx("Mr. Prime Minister, sir! You don't have enough money to pay your bills. A helper says you can just print fake money to pay them. It feels easy now, but will make everything super expensive later.",
      ["Print fake money to pay the bills.", "No one feels it this quarter.", "The gap is filled with fresh notes. Inflation stirs in the months ahead, a tax no one voted for.", { FI: 8, EN: -10, GL: -4 }],
      ["Say no and borrow real money honestly.", "I will not pay tomorrow's prices for today's gap.", "You raise the money through bonds, dearer but cleaner. The deficit is honest and the taka steadier.", { GL: 6, FI: -4, EN: 4 }])),

  ax("e-Commerce Victims' Delegation", "people", ["scam", "ecommerce", "refunds"],
    sx("Your Excellency! A fake online store stole money from thousands of families. They are crying outside your office and want their money back.",
      ["Use government money to pay them back.", "The state failed to police it; the state pays.", "Families recover a fraction of their savings. The treasury absorbs a scam it did not commit, and others ask why they were not bailed out too.", { EN: 10, FA: 4, FI: -10 }],
      ["Try to catch the bad guys, but don't give the families money.", "I will jail the thieves, not reward the gamble.", "You freeze assets and prosecute. The recovered crumbs disappoint the crowd, but the precedent of no-bailout holds.", { GL: 4, FI: 4, EN: -8 }])),

  ax("Revenue Reform Adviser", "official", ["wealth-tax", "surcharge", "elite"],
    sx("Prime Minister! A helper says you should charge very rich people a big new tax. Normal people will cheer, but your rich friends will be furious.",
      ["Charge the rich people the big new tax.", "Those with the most can give the most.", "Public revenue and approval both rise. The moneyed class opens its war chest against you and its front pages turn cold.", { FI: 10, EN: 8, FA: -8 }],
      ["Do not charge them, to keep your rich friends happy.", "I cannot fight the people who fund me.", "The fortunes stay untaxed and the donors stay sweet. The street notes whose interests the budget serves.", { FA: 6, FI: -6, EN: -6 }])),

  ax("Import Policy Officer", "official", ["lc", "luxury", "reserves"],
    sx("Sir — To save money, you can stop stores from buying fancy things like cars and makeup from other countries. Rich people will be mad when the shelves are empty.",
      ["Stop the fancy things from coming in.", "Dollars are for medicine, not Mercedes.", "Reserves stop bleeding on baubles. The affluent grumble about scarcity, and some smuggling reroutes the trade.", { FI: 8, GL: 4, EN: -4, FA: -4 }],
      ["Keep the fancy things coming so people don't get mad.", "Empty shelves photograph badly.", "The shops stay stocked and the rich content. The reserves keep draining on things the country need not buy.", { FA: 4, FI: -8, GL: -4 }])),

  ax("Loan Classification Board", "official", ["rescheduling", "defaulters", "banks"],
    sx("Honourable leader! People who borrow money and never pay it back want you to change the rules so they look like good guys again. This makes the banks look good but rewards bad behavior.",
      ["Change the rules to make them look like good guys.", "A pretty balance sheet calms the market.", "Default ratios drop on paper overnight. The rot deepens in the dark, and the honest borrower wonders why he bothers.", { FI: 6, GL: -6, FA: 4 }],
      ["Keep strict rules and show who the bad guys are.", "Call a bad loan a bad loan.", "The true scale of default is finally visible. It looks ugly and frightens markets briefly — but the cleanup can begin.", { GL: 6, FI: -6, EN: 4, FA: -4 }])),

  ax("Privatisation Commissioner", "official", ["privatisation", "jute", "state-firms"],
    sx("Sir, urgent news. Old government factories lose money every single year, but they give jobs to many people. Your helper wants to close them.",
      ["Close the old factories.", "Nostalgia is not a business plan.", "The hemorrhage stops and buyers move in. Thousands of mill workers and their unions march on your gate.", { FI: 10, GL: 4, EN: -10, MI: -4 }],
      ["Keep the factories open using government money.", "These looms built the nation.", "The jobs and the heritage survive on subsidy. The losses recur, year after year, a line item that never dies.", { EN: 6, FA: 4, FI: -10 }])),

  ax("National Savings Director", "official", ["sanchayapatra", "savings", "rates"],
    sx("Sir, forgive me — You give old people a really good deal when they save money with the government. But it costs the government too much.",
      ["Stop giving them the really good deal.", "The treasury cannot subsidise every saver.", "The interest bill eases. Pensioners and widows who counted on that return feel the floor drop, and say so loudly.", { FI: 10, GL: 4, EN: -8 }],
      ["Keep giving them the really good deal.", "The widow's certificate is sacred.", "You shield the small savers and eat the cost. The high-rollers exploit the same window, and the bill grows.", { EN: 8, FA: 4, FI: -10 }])),

  ax("Special Economic Zone Director", "official", ["sez", "tax-holiday", "investment"],
    sx("A word, sir! A foreign company wants to build a big factory and create jobs. But they want you to promise they don't have to pay taxes for a very long time.",
      ["Promise they don't have to pay taxes for a long time.", "Jobs now, taxes eventually.", "The cranes arrive and employment rises. The treasury forgoes a fortune for fifteen years to win the ribbon-cutting.", { EN: 8, FI: -6, GL: 6, RE: 4 }],
      ["Tell them they only get a short time without paying taxes.", "I will host investment, not subsidise it forever.", "You drive a harder bargain. The consortium hesitates and shrinks the project — but the state keeps a slice of the upside.", { FI: 6, GL: -4, EN: -4 }])),

  ax("Anti-Tobacco Coalition", "people", ["tobacco", "tax", "health"],
    sx("Sir, we have a problem. Doctors want you to put a huge tax on cigarettes to stop people from getting sick. But cigarette makers pay you a lot of money and many farmers grow the plants.",
      ["Put a huge tax on cigarettes.", "A cigarette tax is a life saved and a taka earned.", "Revenue and public health both rise. The tobacco lobby and its farming districts turn sharply against you.", { FI: 8, EN: 8, FA: -6 }],
      ["Keep the tax on cigarettes very low.", "Do not gut a top taxpayer and a voting belt.", "The companies stay sweet and the leaf districts loyal. The wards fill with the slow harvest of that bargain.", { FI: 4, FA: 4, EN: -10 }])),

  ax("Land Registration Reformer", "official", ["real-estate", "black-money", "registration"],
    sx("Sir! People lie about how much their houses cost on paper so they don't have to pay taxes. If you use computers to fix this, powerful people will be caught.",
      ["Use computers to fix it and catch them.", "Drag the land market into the light.", "Registration revenue surges and a laundering channel narrows. Builders and land barons — and their political patrons — howl.", { FI: 10, EN: 4, GL: 4, FA: -8 }],
      ["Let them keep lying on paper.", "Some ledgers are best left yellowed.", "The cosy undervaluation continues. Black money keeps flowing into bricks while the treasury watches it pass.", { FA: 6, FI: -8, GL: -4 }])),

  ax("Hajj Management Director", "cleric", ["hajj", "pilgrims", "cost"],
    sx("Mr. Prime Minister, sir! Airplanes cost too much for poor families to take their big religious trip. You can use government money to pay for part of their tickets.",
      ["Pay for part of their tickets.", "Let the faithful afford the journey.", "Grateful pilgrims bless your name from Mecca. The treasury and the secular press both wince at the bill.", { FA: 6, EN: 6, FI: -8, GL: -4 }],
      ["Don't pay, but make the travel agents charge less.", "Faith should not be a fiscal line.", "You squeeze the middlemen instead of the budget. The devout are mildly disappointed; the books stay clean.", { FI: 6, GL: 4, EN: -4, FA: -4 }])),

  ax("Climate Fund Auditor", "official", ["climate", "fund", "graft"],
    sx("Your Excellency! The money meant to help save the earth from storms was stolen by your own team members. You can investigate and take it back, but it will embarrass your team.",
      ["Investigate and take the stolen money back.", "Stolen flood money is blood money.", "Recovered crores return to the embankments. The implicated party officials become loud, wounded enemies.", { EN: 8, GL: 8, FI: 4, FA: -8 }],
      ["Hide the secret to protect your team.", "Do not hand the donors a scandal.", "The leak stays hidden and the party intact. The embankments stay thin, and the next flood collects the difference.", { FA: 6, EN: -10, GL: -6 }])),

  ax("Sovereign Fund Proponent", "official", ["reserves", "sovereign-fund", "investment"],
    sx("Prime Minister! A helper wants to take your emergency money from the bank and spend it to build big things at home. It is brave, but if an emergency happens, you will have no money.",
      ["Take the emergency money and build big things.", "Idle reserves should build the country.", "Grand projects get cheap money and momentum. The reserve buffer thins, and a future shock will find less cushion.", { RE: 6, EN: 6, FI: -6, GL: -4 }],
      ["Keep the emergency money safe in the bank.", "Reserves are the wall against the storm.", "You guard the buffer and pass on the projects. Critics call it timid; the next currency scare proves it wise.", { FI: 8, GL: 4, EN: -4 }])),

  ax("VAT Online Director", "official", ["vat", "digitisation", "compliance"],
    sx("Sir — Shopkeepers are putting tax money in their own pockets. You can force them to use smart computers to stop this, but millions of them will be angry and vote against you.",
      ["Force them to use the smart computers.", "An honest till funds an honest state.", "Consumption-tax revenue climbs steadily. A million shopkeepers grumble about the machine watching every sale.", { FI: 10, GL: 4, EN: -4, FA: -4 }],
      ["Let them keep collecting taxes the old way.", "Do not put a meter on every shop counter.", "The shopkeepers stay content and the leakage continues. The treasury collects a fraction of what it is owed.", { FA: 6, FI: -8, GL: -4 }])),

  ax("Garment Buyers' Auditor", "ambassador", ["rmg", "compliance", "wages"],
    sx("Honourable leader! Buyers from other countries want proof that your factories pay workers fairly. Being fair costs owners money. Faking the proof risks losing the buyers forever.",
      ["Force the owners to be completely fair.", "The market is worth more than the margin.", "Buyers are reassured and orders hold; the workers are paid in full. Factory owners — your donors — bristle at the cost.", { GL: 8, EN: 8, FI: -6, FA: -4 }],
      ["Help the owners fake the proof.", "Protect the owners who keep the lines running.", "The audit is smoothed over and margins protected. One leaked payslip could bring the whole edifice down.", { FI: 6, FA: 4, GL: -8, EN: -6 }])),

  // ── Money-whitening scheme ──────────────────────────────────────────────────
  ax("Revenue Board Chairman", "fixer", ["black-money", "tax", "whitening"],
    sx("Sir, urgent news. Bad guys have hidden, stolen money. You can pass a rule that lets them keep it safely if they pay a tiny tax. Honest people think this is very unfair.",
      ["Let them keep it safely for a tiny tax.", "Better the black money working here than hiding abroad.", "The clause passes and laundered crores flood into property and banks. The reserves and the books improve, and every honest taxpayer learns that cheating, in the end, is rewarded.", { FI: 10, FA: 2, EN: -8, GL: -6 }],
      ["Say no to this unfair rule.", "A state that pardons theft for a fee invites more theft.", "You kill the whitening clause. The hidden money stays hidden or flees abroad, and the budget is thinner for it, but the tax system keeps a shred of fairness and credibility.", { GL: 6, EN: 6, FI: -8 }])),

  // ── Stock-market crash bailout ──────────────────────────────────────────────
  ax("Securities Regulator", "official", ["stock-market", "crash", "retail"],
    sx("Sir, forgive me — Bad guys tricked normal people into losing all their money in the stock market. You can spend government money to pay the normal people back and punish the bad guys.",
      ["Pay the normal people back and punish the bad guys.", "A market that eats its small fish breeds no trust.", "You cushion the retail losses and go after the big manipulators. The bailout is costly and the syndicates fight back, but the small investor sees the state will not abandon them to the wolves.", { EN: 8, GL: 4, FI: -8, FA: -4 }],
      ["Let the normal people lose their money.", "A gambler who loses cannot bill the state.", "You let the crash run its course. The treasury is spared, the manipulators keep their gains, and a generation of small savers swears off the market that fleeced them.", { FI: 4, EN: -8, GL: -2 }])),

  // ── Loss-making SOE privatisation ───────────────────────────────────────────
  ax("Privatisation Commission Chief", "official", ["soe", "privatisation", "jobs"],
    sx("A word, sir! The government owns old factories and airplanes that lose money every day. You can shut them down, or keep them running just so workers keep their jobs.",
      ["Shut them down and stop losing money.", "A factory that only makes losses makes nothing.", "You sell or close the bleeding enterprises and stem the subsidy. The freed budget is real, but tens of thousands of workers lose their jobs and turn their fury on you.", { FI: 8, GL: 4, EN: -8 }],
      ["Keep them running to save the jobs.", "A wage lost is a household sunk.", "You keep the loss-makers running for the workers and the patronage. The jobs and the votes are safe, and the subsidy keeps draining money that schools and clinics will never see.", { EN: 6, FA: 4, FI: -8 }])),

  // ── Universal pension scheme ────────────────────────────────────────────────
  ax("Pension Authority Director", "people", ["pension", "welfare", "future"],
    sx("Sir, we have a problem. You want to help poor workers save money for when they get old. You can use government money to help them, or force them to use only their own money.",
      ["Use government money to help them save.", "An old age without dignity is a society's shame.", "You build a pension reaching even the poorest with heavy state top-ups. The fiscal burden is enormous and permanent, but a generation of the elderly is lifted out of destitution.", { EN: 12, GL: 4, FI: -10 }],
      ["Make them use only their own money.", "A promise I cannot fund is a betrayal deferred.", "You launch a modest, mainly contribution-based scheme. It is fiscally sound but reaches the poorest thinly, and the informal workers who most need it can least afford to join.", { FI: 4, EN: 4, GL: 2 }])),

  // ── IMF fuel-subsidy condition ──────────────────────────────────────────────
  ax("IMF Programme Negotiator", "ambassador", ["imf", "subsidy", "austerity"],
    sx("Sir! A big bank will give you important money, but only if you stop helping people pay for gas and electricity. The people will be very angry if prices go up.",
      ["Stop helping people pay so you can get the bank's money.", "The fund's money keeps the lights on at all.", "You slash the subsidies and unlock the tranche. The reserves and the lenders are reassured, and the price of transport, food, and power detonates in every household.", { FI: 8, GL: 6, EN: -12 }],
      ["Keep helping people pay and lose the bank's money.", "I will not buy a loan with my people's hunger.", "You shield the subsidies and the IMF talks stall. The street is spared the shock, but the reserves keep bleeding and the lifeline you turned down may not be offered twice.", { EN: 8, FI: -8, GL: -4 }])),

  // ── Exchange-rate float ──────────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["currency", "float", "devaluation"],
    sx("Mr. Prime Minister, sir! You are burning up all your savings to pretend your country's money is worth a lot. The bank boss says to stop and tell the truth, even if things get expensive.",
      ["Tell the truth and let things get expensive.", "A currency defended past its worth bankrupts the defender.", "You float the taka and the black-market premium vanishes. Import prices and inflation jump painfully, but the ruinous reserve drain stops and the market finds honest footing.", { FI: 6, GL: 4, EN: -8 }],
      ["Burn up more savings to keep pretending.", "A falling taka is a falling government.", "You keep defending the rate. The official price holds and the public is spared the shock for now, but the reserves drain toward empty and the black market thrives in the gap.", { EN: 4, FI: -8, GL: -2 }])),

  // ── Weak-bank merger ────────────────────────────────────────────────────────
  ax("Banking Division Secretary", "official", ["banks", "merger", "npl"],
    sx("Your Excellency! Some banks are broken because bad bosses stole from them. You can force good banks to mix with the bad ones to save people's money, but it rewards the bad bosses.",
      ["Mix the banks to save the people's money.", "A bank run is a fire that spreads.", "You merge the zombie banks into stronger ones and depositors are saved. The looters who gutted them walk away clean, and the healthy banks inherit a mountain of toxic debt.", { FI: 4, EN: 2, GL: -2, FA: -2 }],
      ["Let the bad banks fail so they learn a lesson.", "A bank that is never allowed to die never learns to live.", "You let one rotten bank collapse. Depositors panic and the system shudders, but for once the looters lose their bank, and every other board suddenly takes risk seriously.", { GL: 4, FI: -6, EN: -4 }])),

  // ── Loan rescheduling for big defaulters ────────────────────────────────────
  ax("Banking Division Secretary", "fixer", ["loans", "defaulters", "favours"],
    sx("Prime Minister! Rich people who never pay back their bank loans want you to give them a super easy deal again. It makes the banks look okay on paper, but lets the bad guys win.",
      ["Give them the super easy deal.", "A defaulter's empire employs thousands; do not topple it.", "You let the big defaulters reschedule on featherbed terms. The banks' books look healthier on paper, the connected tycoons stay afloat, and the rot in the banking system deepens out of sight.", { FI: 4, FA: 4, EN: -6, GL: -6 }],
      ["Force them to pay back what they owe.", "A willful defaulter is a thief with a balance sheet.", "You refuse the rescheduling and move to recover or seize. The tycoons rage and call in their political chips, but billions in dead loans start, painfully, to come back.", { GL: 6, FI: 4, EN: 4, FA: -6 }])),

  // ── Eurobond / sovereign debt ───────────────────────────────────────────────
  ax("Debt Management Director", "ambassador", ["eurobond", "debt", "markets"],
    sx("Sir — You can borrow a huge amount of money from the world right now. But you will owe them so much extra money that it will hurt your country for a long time.",
      ["Borrow the huge amount of money.", "Market money comes with no master attached.", "The bond raises the cash quickly and string-free. The high coupon settles onto future budgets, and your fortunes are now hostage to the moods of distant bond markets.", { FI: 6, GL: 2, RE: 2 }],
      ["Say no to borrowing the money.", "A bond at usurer's rates is a trap with a ribbon.", "You skip the expensive bond and live within tighter means. The development plans shrink and the cash crunch bites, but you do not mortgage the next decade to the markets.", { GL: 2, FI: -4, EN: -2 }])),

  // ── Price syndicate (food) ──────────────────────────────────────────────────
  ax("Trading Corporation Chief", "shadow", ["inflation", "syndicate", "food"],
    sx("Honourable leader! Bad sellers are hiding food to make it cost more. Some of them give you money.",
      ["Stop the bad sellers and bring in cheap food.", "A cartel that taxes every plate must be smashed.", "You raid the hoarders and flood the market with state imports. Prices ease and the public exhales, but the cartel bosses — your financiers — turn on you with their wallets shut.", { EN: 10, FI: -4, FA: -6 }],
      ["Protect the bad sellers and let food stay expensive.", "The men who fund the party are not lightly raided.", "You spare the syndicate and the hoarding continues. The financiers stay loyal and generous, and the cost of a meal climbs out of reach for the families who can least bear it.", { FI: 4, FA: 6, EN: -10 }])),

  // ── Customs corruption at the ports ─────────────────────────────────────────
  ax("Customs Commissioner", "fixer", ["customs", "ports", "corruption"],
    sx("Sir, urgent news. Guards at the boat docks are taking secret money instead of charging the right taxes.",
      ["Use computers to stop them from stealing.", "A bribed customs house robs the whole nation.", "You digitise clearance and audit the postings hard. Duty revenue jumps and the rackets wither, and the officers who paid fortunes for the lucrative postings turn bitterly against you.", { FI: 8, GL: 4, EN: 2, FA: -4 }],
      ["Let the guards keep taking secret money.", "The men in the customs houses have powerful patrons.", "You leave the ports' shadow economy intact. The patronage flows smoothly and the postings stay golden, and the treasury keeps collecting a fraction of the duty it is owed.", { FI: -4, FA: 4, EN: -4, GL: -2 }])),

  // ── Tax-GDP and the elite net ───────────────────────────────────────────────
  ax("Revenue Board Chairman", "official", ["tax", "elite", "evasion"],
    sx("Sir, forgive me — Rich people are not paying their taxes, so normal workers have to pay more.",
      ["Force the rich people to pay their taxes.", "A state funded by clerks while tycoons skate is doomed.", "You target the rich evaders, audits reaching into donor and dynastic ledgers. The revenue base broadens and the public cheers, but the powerful you have dunned plot their revenge.", { FI: 8, EN: 8, GL: 4, FA: -8 }],
      ["Keep making the normal workers pay.", "The easy taxpayer is the one who cannot run.", "You leave the rich alone and lean harder on the salaried. The revenue is reliable and the donors content, and the shrinking middle class learns exactly whose shoulders the state rests on.", { FI: 4, FA: 4, EN: -8 }])),

  // ── Mobile financial services vs hundi ──────────────────────────────────────
  ax("Digital Finance Adviser", "official", ["mobile-money", "remittances", "inclusion"],
    sx("A word, sir! Paying with phones can help people send money safely, but regular banks don't like it.",
      ["Help people use their phones to send money safely.", "A phone in every hand is a bank in every village.", "You push incentives for mobile remittances and the formal channels swell. The banks and the hundi networks both lose ground and grumble, but billions enter the legal economy and the unbanked gain access.", { FI: 8, EN: 6, GL: 2, FA: -2 }],
      ["Help the regular banks instead.", "The banks are the system; do not undercut them.", "You shield the banks and leave the mobile push half-hearted. The hundi networks keep their grip on remittances, the reserves miss the inflows, and the village stays unbanked.", { FA: 4, FI: -6, EN: -2 }])),

  // ── Civil-service pay commission ────────────────────────────────────────────
  ax("Pay Commission Chair", "official", ["salaries", "bureaucracy", "budget"],
    sx("Sir, we have a problem. Government workers want a giant raise. If you pay them, they will be happy, but you won't have money for other things.",
      ["Give them the giant raise.", "A well-paid official is a loyal, honest one.", "You award the generous hike and the bureaucracy is delighted and bound to you. Petty bribery eases, but the wage bill swells permanently, crowding out the development budget for years.", { MI: 2, FA: 4, FI: -8, EN: -2 }],
      ["Give them a small raise you can afford.", "A salary I cannot sustain is a strike deferred.", "You give a restrained increase the budget can bear. The civil servants grumble at the modesty and some petty corruption persists, but the fiscal hole stays survivable.", { FI: 4, EN: 2, FA: -2 }])),

  // ── Trade-based money laundering ────────────────────────────────────────────
  ax("Financial Intelligence Chief", "shadow", ["laundering", "over-invoicing", "capital-flight"],
    sx("Sir! Your rich friends are secretly sending their money to other countries.",
      ["Build a strong team to stop them.", "A river of stolen money flowing abroad bleeds us white.", "You stand up real trade-laundering enforcement and the outflows slow. The reserves steady and the world's watchdogs approve, but your backers' escape route is now monitored, and they are furious.", { FI: 6, GL: 6, EN: 4, FA: -6 }],
      ["Let your friends keep sending their money away.", "The men who move that money also fund the party.", "You leave the over-invoicing pipeline flowing. Your backers keep stashing wealth abroad and stay loyal, and the reserves keep haemorrhaging out through a hole you chose not to plug.", { FA: 6, FI: -6, GL: -4 }])),

  // ── Special economic zone tax holidays ──────────────────────────────────────
  ax("Investment Authority Chief", "ambassador", ["sez", "fdi", "incentives"],
    sx("Mr. Prime Minister, sir! Foreign companies want free land and no taxes for a long time to build factories here.",
      ["Give them free things so they build factories.", "An empty zone earns nothing; fill it at any price.", "You hand out the tax holidays and the factories come. Jobs and FDI flow in for the headlines, and the revenue board quietly notes the decade of tax you have signed away.", { FI: 4, EN: 4, GL: 4, RE: -2 }],
      ["Give them fewer free things.", "A zone bought with the whole future is a bad bargain.", "You offer modest, sunset-clause incentives. Some footloose investors look elsewhere and the zones fill slower, but the deals that land actually pay tax within the decade.", { FI: 4, GL: -2, EN: 2 }])),

  // ── Deficit monetisation ────────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["deficit", "printing", "inflation"],
    sx("Your Excellency! You have no money to pay bills. You can print fake money now, but it will ruin everything later.",
      ["Print the fake money to pay bills.", "A bill paid today is a bill paid.", "You lean on the printing press and the bills are met. The relief is immediate and the cost deferred, as the new money seeps into prices and the inflation you deferred compounds.", { FI: 6, EN: -8, GL: -4 }],
      ["Say no to printing fake money.", "A printing press is a slow-motion default.", "You hold the line against monetisation and cut or borrow instead. The squeeze is painful and immediate, but you spare the country the inflationary spiral that has ruined so many.", { GL: 4, FI: -4, EN: -2 }])),

  // ── SME and farmer credit ───────────────────────────────────────────────────
  ax("Agricultural Bank Chairman", "people", ["sme", "farmers", "credit"],
    sx("Prime Minister! Poor farmers can't borrow money because banks only lend to rich people.",
      ["Force banks to lend money to poor farmers.", "A loan to a farmer grows more than a loan to a tycoon.", "You push cheap credit out to farmers and micro-enterprises. Default risk and cost rise, but the rural economy stirs to life and millions feel the state's hand for the first time.", { EN: 10, FI: -6 }],
      ["Let banks keep lending only to the rich.", "A bank that lends to the poor is a bank that fails.", "You keep credit flowing to the safe and the big. The banks' books stay clean, and the small farmer and the micro-trader keep borrowing from the moneylender at ruinous rates.", { FI: 4, EN: -6, FA: 2 }])),

  // ── Festival liquidity / Eid bonus ──────────────────────────────────────────
  ax("Treasury Operations Chief", "official", ["liquidity", "festival", "wages"],
    sx("Sir — A big holiday is coming and factory owners can't pay their workers. The workers will be very mad.",
      ["Give the owners government money to pay the workers.", "A million unpaid workers at Eid is a powder keg.", "You bail out the payrolls and the workers go home paid for the holiday. The owners are rescued from their own mismanagement again, learning once more that the state will always catch them.", { EN: 8, FI: -6, FA: 2 }],
      ["Make the owners fix their own problem.", "I will not bankroll the bonuses of profitable men.", "You refuse the bailout and tell the owners to pay their own way. Some factories erupt in unrest over delayed wages, but the owners learn the treasury is not their overdraft.", { FI: 4, EN: -6, FA: -2 }])),

  // ── Export diversification ──────────────────────────────────────────────────
  ax("Export Promotion Director", "official", ["exports", "diversification", "garments"],
    sx("Honourable leader! Your country only sells clothes to the world. You can try to sell new things like medicine and computers, but it is slow and hard.",
      ["Try to sell new things like medicine and computers.", "An economy on one leg falls when that leg is kicked.", "You back the emerging sectors with incentives and infrastructure. The payoff is slow and some bets will fail, but the export base begins, finally, to broaden beyond the loom.", { FI: 2, GL: 4, EN: 4, RE: 2 }],
      ["Keep focusing only on selling clothes.", "Why bet on maybes when the looms pay now?", "You concentrate support on the proven garment sector. Exports stay strong and the cash flows, and the economy's single point of failure grows ever more dangerous and ever more entrenched.", { FI: 6, EN: -2, GL: -2 }])),

  // ── IT freelancer economy ───────────────────────────────────────────────────
  ax("Digital Economy Adviser", "people", ["it", "freelancers", "youth"],
    sx("Sir, urgent news. Young people making money online are having a hard time getting paid because of bad rules.",
      ["Change the rules to help them get paid easily.", "A laptop in a village earns dollars from the world.", "You smooth payments, ease taxes, and back training for the digital workforce. A new stream of foreign currency grows, and a generation of the young find work without leaving home.", { FI: 6, EN: 6, GL: 2 }],
      ["Do not change the rules.", "A scattered cottage industry is not a strategy.", "You keep the clumsy status quo. The freelancers route their earnings through grey channels or move abroad, and a homegrown export pillar withers before it can take root.", { FI: -2, EN: -4, GL: -2 }])),

  // ── Wealth-flight second homes ──────────────────────────────────────────────
  ax("Financial Intelligence Chief", "ambassador", ["capital-flight", "second-homes", "elite"],
    sx("Sir, forgive me — News reporters found out your leaders secretly own big houses in other countries using stolen money.",
      ["Help catch them and take the money back.", "Stolen money parked abroad still belongs to the people.", "You take up the foreign cooperation and chase the laundered fortunes home. Some assets are frozen and the public is electrified, but the exposed elite — your own ranks — declare quiet war.", { FI: 6, GL: 6, EN: 8, FA: -10 }],
      ["Ignore it and let them keep the houses.", "Half my cabinet owns those flats.", "You decline to pursue the foreign holdings. Your elite's offshore nest eggs stay safe and they stay loyal, and the message that the powerful loot with impunity is stamped a little deeper.", { FA: 8, FI: -4, EN: -8, GL: -6 }])),

  // ── Crypto / digital currency ───────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["crypto", "regulation", "capital-controls"],
    sx("A word, sir! Young people are using digital internet money. It might be dangerous, but everyone is doing it.",
      ["Ban all internet money.", "A currency I cannot see is a hole in the dam.", "You ban crypto and threaten the traders. The official capital controls hold a little better, but the trade simply goes underground, and the tech-savvy young add another grievance to the pile.", { FI: 2, MI: 2, GL: -2, EN: -4 }],
      ["Make rules for it and tax it.", "Better to tax the tide than to forbid it.", "You bring crypto into a regulated, taxed framework. The capital-flight risk is real and the controls leakier, but you tax the activity, attract some fintech, and keep faith with the young.", { FI: 4, GL: 2, EN: 2 }])),

  // ── Public-private partnership ──────────────────────────────────────────────
  ax("PPP Authority Chief", "fixer", ["ppp", "infrastructure", "contracts"],
    sx("Sir, we have a problem. A company wants to build a big road for free, but they will charge everyone to drive on it for a very long time.",
      ["Let them build it and charge people.", "Roads now, paid for by tomorrow's tolls.", "The expressway gets built without upfront state money. The consortium pockets guaranteed returns for decades, and the 'minimum revenue' clause quietly hands the risk back to the public purse.", { RE: 4, FI: 2, EN: 2, GL: -2 }],
      ["Say no and build a fair road yourself.", "A guarantee that the state eats all losses is a gift, not a partnership.", "You refuse the lopsided guarantee and renegotiate or build it yourself. The road is slower to come and the budget strained, but the public is not signed up to underwrite private profit.", { FI: -4, EN: 2, GL: 2 }])),

  // ── ADP underspend / project quality ────────────────────────────────────────
  ax("Planning Commission Member", "official", ["development-budget", "spending", "quality"],
    sx("Sir! Every year, people rush to spend government money on badly made projects just before time runs out.",
      ["Stop the rush and only build a few good things.", "A road built twice is a road paid for thrice.", "You impose vetting and steady disbursement over the year-end splurge. The 'utilisation' numbers dip and the contractors grumble, but the projects that get built actually last.", { FI: 4, EN: 6, GL: 2, FA: -2 }],
      ["Keep rushing to spend the money fast.", "Unspent money is a bureaucrat's failure on paper.", "You let the final-quarter splurge continue. The disbursement targets are hit and everyone looks busy, and the padded, half-built projects crumble within a season or two.", { FA: 2, FI: -2, EN: -6 }])),

  // ── Microfinance regulation ─────────────────────────────────────────────────
  ax("Microfinance Regulator", "people", ["microfinance", "debt", "poverty"],
    sx("Mr. Prime Minister, sir! Poor people are borrowing too much money from too many places and are stuck. You can make rules to stop this, but the lenders will be mad.",
      ["Make rules to protect the poor people.", "A loan that traps is no longer a ladder.", "You cap effective rates and require a shared registry to stop multiple-lending. The big lenders fight the limits, but the rural poor stop drowning under stacked, overlapping loans.", { EN: 8, GL: 2, FI: -2, FA: -2 }],
      ["Let the lenders do whatever they want.", "Do not break the model the world copied.", "You leave the MFIs to their own devices. The model's reputation is preserved, and in the villages the quiet debt spirals tighten, household by over-borrowed household.", { FI: 2, FA: 2, EN: -6 }])),

  // ── Defence budget pressure ─────────────────────────────────────────────────
  ax("Defence Finance Secretary", "general", ["defence", "budget", "spending"],
    sx("Your Excellency! The army wants a lot more money for cool new gear. If you give it to them, you can't build schools and hospitals.",
      ["Give the army the money they want.", "A contented barracks is a sleeping coup.", "You fund the military's wish-list and the brass is reassured of your favour. The barracks stay loyal, and the schools, clinics, and pensions you promised the public quietly shrink to pay for it.", { MI: 8, FA: 2, FI: -6, EN: -6 }],
      ["Say no and spend money on the people instead.", "A nation is defended by its people's wellbeing too.", "You hold the line on defence and protect social spending. The public services hold, but the generals feel slighted and watched, and a restive barracks is a risk you now carry.", { EN: 8, GL: 2, MI: -6, FI: -2 }])),

  // ── Audit of the central bank reserves ──────────────────────────────────────
  ax("Auditor General", "official", ["reserves", "transparency", "audit"],
    sx("Prime Minister! You have been counting money you already promised to others, making you look richer than you are.",
      ["Tell the truth about having less money.", "A number built on a lie collapses worse later.", "You restate the reserves truthfully. The markets and the public are rattled by the lower figure, but the credibility you buy with honesty steadies the longer game and the IMF's trust.", { GL: 6, FI: -4, EN: -2 }],
      ["Keep counting the promised money to look rich.", "A panic today is worse than a problem deferred.", "You keep the flattering figure on the books. The markets stay calm on a number that is not real, and the day the truth finally surfaces, the fall will be all the further.", { FI: 4, GL: -6, EN: -2 }])),

  // ── Bank-fraud scandal ──────────────────────────────────────────────────────
  ax("Bank Inspection Chief", "shadow", ["fraud", "banks", "scandal"],
    sx("Sir — A group of bad guys stole a giant amount of money from a government bank.",
      ["Investigate them in front of everyone.", "A fraud buried festers into a collapse.", "You open a transparent probe and the arrests climb toward the boardroom and beyond. Confidence wobbles at the spectacle, but the looters face justice and the system is forced to clean house.", { GL: 6, EN: 6, FI: -4, FA: -6 }],
      ["Fix it quietly to protect the bank's secret.", "A public scandal runs the depositors to the doors.", "You keep the fraud out of the headlines and settle it in the dark. Confidence holds on the surface, the connected escape, and the hole in the bank is quietly stuffed with public money.", { FI: 2, FA: 4, EN: -6, GL: -6 }]),
    sx("Honourable leader! A second bank was robbed the same way. The checker wants to make strong rules that would stop your friends from controlling the banks.",
      ["Make the strong rules to stop the stealing.", "A watchdog on the owner's leash guards nothing.", "You hand the banking regulator genuine independence and teeth. The politicians who packed the boards lose their grip and rage, but the banking sector gains its first real check in a generation.", { GL: 6, EN: 6, FI: 2, FA: -6 }],
      ["Keep your friends in control of the banks.", "An independent watchdog bites the hand that feeds the party.", "You keep the regulator pliant. The board appointments stay a political spoil, the frauds keep their cover, and the banking system slides deeper toward a reckoning no one is watching for.", { FA: 6, FI: -4, EN: -6, GL: -4 }])),

  // ── Remittance incentive cash ───────────────────────────────────────────────
  ax("Remittance Policy Director", "people", ["remittances", "incentive", "reserves"],
    sx("Sir, urgent news. Workers far away are using secret ways to send money home. You can pay them a bonus to use the safe banks instead.",
      ["Pay the bonus so they use safe banks.", "A bonus on every dollar is a dollar in the vault.", "You pay the incentive and the official remittances surge as hundi loses its edge. The budget takes a real hit, but the reserves swell with the inflows you lured back into the light.", { FI: 6, EN: 4, GL: 2 }],
      ["Save your money and don't pay the bonus.", "I will not pay people to do what they should anyway.", "You forgo the incentive. The budget is spared the cost, but the remittances keep leaking into hundi, the reserves miss the inflows, and the black-market dollar keeps its premium.", { FI: -4, EN: -2, GL: -2 }]),
    sx("Sir, forgive me — Factory owners are jealous of the bonus you gave the workers. They demand a bonus too, or they will hide their money.",
      ["Give the factory owners the bonus too.", "One dollar should be worth another, whoever earned it.", "You level the field and incentivise export proceeds as well. The reserves keep filling and the exporters are placated, but the budget's incentive bill balloons toward the unsustainable.", { FI: 2, GL: 2, EN: -2 }],
      ["Say no, the bonus is only for workers.", "I cannot subsidise every dollar in the economy.", "You refuse to widen the scheme. The budget is protected, but the garment lobby retaliates by parking earnings abroad, and some of the reserve gain leaks back out the other side.", { FI: 2, FA: -2, GL: -2 }])),

  // ── Import-LC restrictions ──────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["imports", "lc", "reserves"],
    sx("A word, sir! You can stop people from buying things from other countries to save money. But this will hurt factories that need parts.",
      ["Stop people from buying things from other countries.", "A dollar saved is a dollar that stays in the vault.", "You ration the LCs and the reserve bleed slows. Factories starved of imported inputs cut shifts, a black market in LC approvals blooms, and the well-connected jump the dollar queue.", { FI: 6, EN: -6, FA: 2, GL: -2 }],
      ["Let them keep buying things and try to save money elsewhere.", "A factory without inputs is a layoff with a delay.", "You keep the import channel open and seek savings elsewhere. Industry keeps running and no corrupt LC queue forms, but the reserves keep draining toward the danger line.", { EN: 4, FI: -6, GL: 2 }]),
    sx("Sir, we have a problem. Stopping buying things caused a big problem. Now there is not enough medicine or food.",
      ["Keep the strict rules to save money.", "The reserves must come first or nothing else holds.", "You maintain the clampdown. The reserves are defended, but the shortages deepen into closed factories and empty pharmacy shelves, and the hardship radiates through the economy.", { FI: 6, EN: -8, GL: -2 }],
      ["Change the rules to buy the most important things.", "I will not ration medicine to save a statistic.", "You carve out medicines, food, and key inputs from the curbs. The reserve relief is smaller, but the worst shortages ease and the factories keep their workers on the line.", { EN: 6, FI: -4, GL: 2 }])),

  // ── GDP rebasing / statistics ───────────────────────────────────────────────
  ax("Statistics Bureau Chief", "shadow", ["gdp", "statistics", "credibility"],
    sx("Sir! You can change the math to make your country look super rich and successful, even if it's a lie.",
      ["Use the fake math to look great.", "A nation grows as fast as its statistics say.", "You release the burnished numbers and top the league tables. The applause is real and the doubt is louder; when reality diverges from the data, the whole record becomes suspect.", { FI: 4, GL: 2, EN: -6 }],
      ["Tell the honest truth, even if it looks less great.", "A growth rate I have to defend is not growth.", "You release credible numbers, modest as they are. The headlines are duller and rivals crow, but the data the country plans by — and the lenders trust — stays sound.", { GL: 4, EN: 2, FI: -4 }])),

  // ── National minimum wage ───────────────────────────────────────────────────
  ax("Wage Commission Chair", "people", ["wages", "labour", "cost"],
    sx("Mr. Prime Minister, sir! You can pass a rule that all workers must be paid a fair amount. The bosses say this will cost them too much money.",
      ["Make a rule that pays workers fairly.", "A wage too low to live on is a subsidy to the boss.", "You set a real floor under wages. Millions of the working poor breathe easier, the donors howl about competitiveness, and a few marginal employers do shed jobs.", { EN: 10, FI: -4, FA: -4 }],
      ["Let the bosses decide how much to pay.", "A floor too high empties the factory.", "You leave wages to the market and the donors content. Competitiveness is protected and the jobs stay, and the working poor keep grinding at a wage that never quite covers the rent.", { FI: 4, FA: 4, EN: -8 }])),

  // ── E-commerce Ponzi collapse ───────────────────────────────────────────────
  ax("Consumer Protection Director", "shadow", ["e-commerce", "ponzi", "fraud"],
    sx("Your Excellency! A famous online store is stealing everyone's money. You need to stop them quickly before they run away.",
      ["Stop them and arrest them immediately.", "A scam this size will not be allowed to vanish.", "You freeze the accounts and arrest the founders before they bolt. Some customer money is clawed back, and the swift action signals that the digital wild-west has a sheriff at last.", { EN: 8, GL: 4, FI: 2 }],
      ["Wait and study the problem slowly.", "A hasty freeze could spook the whole sector.", "You proceed cautiously and the founders launder and flee. The customers' money evaporates, the scandal metastasises, and trust in the entire e-commerce sector collapses.", { FI: -4, EN: -8, GL: -4 }])),

  // ── NBFI scam (PK Halder style) ─────────────────────────────────────────────
  ax("Bank Inspection Chief", "shadow", ["nbfi", "embezzlement", "regulator"],
    sx("Prime Minister! One bad guy stole all the money from a money-lending business and ran away.",
      ["Chase him down and punish the people who helped him.", "A theft this brazen demands a reckoning.", "You launch an international pursuit and turn the lens on the regulators who slept. The fugitive is hunted and some enablers fall, and the financial watchdogs are forced, painfully, to wake.", { GL: 6, EN: 6, FA: -6, FI: 2 }],
      ["Forget about it and let him get away.", "A public hunt only advertises how deep the rot runs.", "You let the loss be quietly absorbed. The fugitive keeps his fortune abroad, the sleeping regulators keep their jobs, and the next operator notes how softly a billion can be stolen here.", { FA: 4, FI: -4, EN: -6, GL: -4 }])),

  // ── Central bank autonomy ───────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["autonomy", "monetary", "independence"],
    sx("Sir — Your helpers want the bank boss to break the rules to make you look good for the election. The bank boss says this is dangerous.",
      ["Force the bank boss to break the rules.", "A bank that defies the government is a rival.", "You subordinate the central bank to the ministry's will. The election-year sugar flows, and the institution's hard-won credibility — the thing that anchors inflation and the currency — bleeds away.", { FI: 4, MI: 2, GL: -6, EN: -4 }],
      ["Let the bank boss do his job the right way.", "A tame central bank is a slow-motion crisis.", "You shield the governor's autonomy. The ministry fumes at being denied its election-year levers, but the bank keeps the credibility that holds the currency and the lenders' trust.", { GL: 6, FI: -2, EN: 2 }])),

  // ── Food-grain procurement price ────────────────────────────────────────────
  ax("Food Directorate Chief", "people", ["procurement", "farmers", "rice"],
    sx("Honourable leader! The farmers picked their rice. You can pay them a high price to help them, or a low price to save government money.",
      ["Pay a high price to help the farmers.", "A farmer paid fairly plants again.", "You buy at a generous price and fill the granary. The growers prosper and the food reserve swells, at a real cost to the budget that the millers' cartel would have pocketed anyway.", { EN: 8, FI: -6 }],
      ["Pay a low price to save money.", "The granary cannot bankrupt the treasury.", "You buy cheap and save the budget. The granary fills at less cost, but the farmer, undercut, sells to the millers' cartel at a loss and curses the season.", { FI: 6, EN: -6 }])),

  // ── Open-market food sales ──────────────────────────────────────────────────
  ax("Food Directorate Chief", "relief", ["oms", "inflation", "poor"],
    sx("Sir, urgent news. Food is too expensive and poor people are starving. You can open the emergency food stores now, or save them just in case things get even worse.",
      ["Open the emergency food stores now.", "A hungry city is a city on the edge.", "You flood the cities with cheap state rice and the queues ease. The reserve drains and skimming creeps in at the trucks, but the poor eat and the streets stay calm.", { EN: 8, FI: -4 }],
      ["Save the food for a worse day.", "A granary emptied early starves a later crisis.", "You ration the reserve against future shortage. The budget and the buffer are protected, but the urban poor go hungry now, and the resentment simmers in the bread queues.", { FI: 4, EN: -8 }])),

  // ── Conditional cash transfer ───────────────────────────────────────────────
  ax("Social Protection Director", "people", ["cash-transfer", "education", "poverty"],
    sx("Sir, forgive me — You can pay poor mothers money if they promise to keep their kids in school and take them to the doctor.",
      ["Pay the mothers to help the kids.", "Money to a mother for her child's schooling pays back for decades.", "You build the scheme and the payments reach poor mothers. The delivery is a logistical mountain and the budget line permanent, but school attendance climbs and a poverty cycle starts to break.", { EN: 10, GL: 4, FI: -8 }],
      ["Just give them free things instead of money.", "A grand transfer scheme is a budget I cannot promise forever.", "You keep the patchy in-kind handouts instead. The budget is spared the permanent commitment, and the chance to bind relief to schooling and health is left on the table.", { FI: 4, EN: -4 }])),

  // ── Property / holding tax ──────────────────────────────────────────────────
  ax("Revenue Board Chairman", "official", ["property-tax", "wealth", "elite"],
    sx("A word, sir! Rich people have giant, empty houses that they don't pay taxes on. You can tax their houses to get money for the country.",
      ["Tax the giant houses.", "A palace should pay more than a payslip.", "You bring in a genuine property tax on the high end. The revenue base broadens onto idle wealth, the affluent grumble and lobby, and for once the rich shoulder a fair share.", { FI: 8, EN: 6, FA: -6, GL: 2 }],
      ["Let the rich people keep their houses untaxed.", "The men in those mansions are the men who fund me.", "You leave the mansions and empty flats lightly taxed. The donors are content and their wealth stays idle and untouched, and the revenue gap is filled, as ever, by those who cannot dodge.", { FA: 4, FI: -4, EN: -6 }])),

  // ── Digital service tax on Big Tech ─────────────────────────────────────────
  ax("Revenue Board Chairman", "ambassador", ["digital-tax", "big-tech", "revenue"],
    sx("Sir, we have a problem. Big internet companies make lots of money in your country but pay no tax. You can make them pay, but they might get angry.",
      ["Make the big internet companies pay tax.", "A giant that earns here pays here.", "You tax the tech giants' local earnings. The revenue is real and popular, but the platforms threaten to throttle services and Washington adds it to a list of grievances against you.", { FI: 6, GL: -4, EN: 2 }],
      ["Wait so they don't get angry.", "A fight with the platforms and Washington at once is a fight I lose.", "You shelve the tax to keep the peace. The giants keep earning tax-free, the revenue stays forgone, and your dependence on their services and Washington's goodwill stays unchallenged.", { GL: 2, FI: -4 }])),

  // ── Diaspora infrastructure bond ────────────────────────────────────────────
  ax("Debt Management Director", "ambassador", ["diaspora-bond", "infrastructure", "funding"],
    sx("Sir! You can ask people from your country living far away to lend you money to build things. But if you lose it, they will be very hurt.",
      ["Ask them to lend you the money.", "Let the children abroad help build the home.", "The diaspora subscribes generously and the projects get cheap funding. You have also taken the savings of trusting expatriates, and any stumble in repayment would be a betrayal felt worldwide.", { FI: 6, GL: 2, RE: 2 }],
      ["Find the money somewhere else.", "I will not stake my people's trust on a bond.", "You decline to tap the diaspora's savings. The funding is costlier and slower, but you do not put the expatriates' faith — and their remittances — on the line.", { GL: 2, FI: -4 }])),

  // ── Fuel subsidy on irrigation ──────────────────────────────────────────────
  ax("Agriculture Finance Secretary", "people", ["diesel", "irrigation", "subsidy"],
    sx("Mr. Prime Minister, sir! The gas farmers need to water their crops is too expensive. You can help pay for the gas, or let the farmers struggle.",
      ["Help pay for the gas to save the crops.", "A dry pump in boro season is a famine in waiting.", "You subsidise the diesel and the pumps keep running through the dry season. The crop is saved and the farmers grateful, at a heavy cost and with the usual leakage at the depots.", { EN: 8, RE: 2, FI: -6 }],
      ["Let the farmers pay the high price.", "I cannot subsidise the world's oil price for every pump.", "You let the diesel cost hit the field. The budget is spared, but the irrigation falters, the boro crop wobbles, and the spectre of a thin harvest looms over the year.", { FI: 4, EN: -6, RE: -2 }])),

  // ── Sin taxes ───────────────────────────────────────────────────────────────
  ax("Revenue Board Chairman", "official", ["sin-tax", "health", "revenue"],
    sx("Your Excellency! You can put a high tax on junk food and cigarettes so people buy less and stay healthy. But the people who make them will be mad.",
      ["Put a high tax on junk food and cigarettes.", "A tax that fills the treasury and empties the wards is a gift.", "You levy the sin taxes and revenue and health both improve. The lobbies fight and the public grumbles at pricier vices, but consumption of the worst products begins to fall.", { FI: 6, EN: 6, FA: -4 }],
      ["Do not add the tax.", "A new tax on small pleasures is a small revolt.", "You hold off on the sin taxes. The lobbies and the public are spared, and so is the disease and the revenue forgone, as the wards fill and the treasury stays thin.", { FA: 2, FI: -4, EN: -4 }])),

  // ── Fiscal responsibility law ───────────────────────────────────────────────
  ax("Budget Secretary", "official", ["fiscal-rule", "debt", "discipline"],
    sx("Prime Minister! You can make a strict law that stops the government from borrowing too much money. This makes you safe but stops you from spending freely.",
      ["Make the strict law to be safe.", "A state that cannot bind itself cannot be trusted.", "You pass the fiscal-responsibility law. The lenders cheer the credibility and the markets calm, and you have tied your own hands against the easy election-year splurge.", { GL: 6, FI: 4, EN: -2 }],
      ["Keep the freedom to spend whatever you want.", "A rule that forbids me to spend in a crisis is a trap.", "You decline the statutory cap. You keep the freedom to splurge when politics demands, and the lenders keep their doubt about whether the deficit will ever truly be controlled.", { FI: -2, EN: 2, GL: -4 }])),

  // ── Transfer pricing by multinationals ──────────────────────────────────────
  ax("Large Taxpayer Unit Chief", "official", ["transfer-pricing", "multinationals", "evasion"],
    sx("Sir — Huge world companies are tricking the math so they don't pay taxes in your country. You can stop them, but they might leave.",
      ["Stop their tricks and make them pay.", "Profits earned here should be taxed here.", "You enforce transfer-pricing rules and claw back real revenue. The multinationals grumble and a few trim investment, but the era of booking local fortunes as foreign losses ends.", { FI: 8, GL: 2, EN: 2 }],
      ["Be gentle so they don't leave.", "A spooked multinational takes its factory elsewhere.", "You go easy to protect the investment climate. The firms keep shifting their profits offshore tax-free, and the revenue you could have captured stays on a balance sheet in another country.", { GL: 2, FI: -6 }])),

  // ── Crop insurance ──────────────────────────────────────────────────────────
  ax("Agriculture Finance Secretary", "people", ["insurance", "farmers", "climate"],
    sx("Honourable leader! Bad weather keeps destroying farmers' crops. You can create an insurance plan to protect them, but it costs a lot to set up.",
      ["Create the insurance plan to protect them.", "A farmer insured plants without fear.", "You stand up crop insurance for the climate-battered. The system is costly and complex to run, but a ruined harvest no longer means a ruined family, and the farmers plant with confidence.", { EN: 8, RE: 2, FI: -6 }],
      ["Just give them a little help after the storms.", "A whole insurance system is a luxury; relief is enough.", "You keep the patchy, after-the-fact relief. It is cheaper and simpler, and each disaster still sweeps another cohort of farmers from their land into the moneylender's grip.", { FI: 4, EN: -4 }])),

  // ── Provident / pension fund investment ─────────────────────────────────────
  ax("Provident Fund Trustee", "official", ["pension-fund", "investment", "risk"],
    sx("Sir, urgent news. Workers' retirement money is safe but growing slowly. You can try to make it grow faster by investing in risky things, but they might lose it all.",
      ["Try to make it grow faster in risky things.", "Idle retirement money should work harder.", "You free the funds to invest in markets and infrastructure. Returns rise in good years, but the workers' retirements now ride the market's moods, and the temptation to steer them into pet projects is real.", { FI: 4, RE: 2, EN: -4 }],
      ["Keep their money safe and boring.", "A pensioner's savings are not a venture fund.", "You keep the funds in safe, dull government paper. The returns are modest, but the workers' retirements are not gambled on markets or raided for politically favoured schemes.", { EN: 4, FI: -2 }])),

  // ── COVID-style stimulus distribution ───────────────────────────────────────
  ax("Stimulus Coordination Chief", "fixer", ["stimulus", "sme", "leakage"],
    sx("Sir, forgive me — You have emergency money to save businesses. If you give it out fast, rich friends will grab it all. If you are careful, it will reach small shops.",
      ["Give it out fast through the banks.", "Speed saves firms; controls can come later.", "You disburse fast through the banks, and the big connected firms hoover up the lion's share. Many are saved, but the small firms that needed it most are left out, and the leakage is enormous.", { FI: 4, FA: 4, EN: -6 }],
      ["Be careful and make sure small shops get it.", "A stimulus that feeds the fed is no stimulus.", "You insist on a slower channel that reaches the genuinely small and informal. The big firms wait and grumble and a few fail in the delay, but the rescue reaches those it was meant for.", { EN: 8, FI: -4, FA: -4 }])),

  // ── IPO pricing manipulation ────────────────────────────────────────────────
  ax("Securities Regulator", "shadow", ["ipo", "market", "manipulation"],
    sx("A word, sir! Rich people are playing a game with the stock market to steal from normal people.",
      ["Make strict rules to keep it fair.", "A market rigged at the listing is rotten at the root.", "You impose disciplined, fundamentals-based pricing. The listings slow and the insiders lose their easy killing, but the retail investor stops being the designated bag-holder.", { GL: 4, EN: 6, FI: -2, FA: -2 }],
      ["Let the rich people keep playing their game.", "A busy market looks like a healthy one.", "You let the rigged IPOs flow. The market looks vibrant and the insiders prosper, and the small investors who buy the dumped shares learn, again, who the market is really for.", { FI: 4, FA: 2, EN: -6 }])),

  // ── Single-borrower exposure limit ──────────────────────────────────────────
  ax("Banking Division Secretary", "official", ["banks", "exposure", "concentration"],
    sx("Sir, we have a problem. A few giant businesses have borrowed almost all the money. If they fail, the country fails. You can force them to stop borrowing so much.",
      ["Force them to stop borrowing so much.", "A bank chained to one tycoon falls with him.", "You force the concentration down. The over-leveraged groups must deleverage and protest bitterly, but the banking system stops being hostage to a handful of empires.", { FI: 4, GL: 4, EN: 4, FA: -6 }],
      ["Let the giant businesses keep borrowing.", "The great groups are the engines; do not stall them.", "You let the concentration ride. The tycoons keep borrowing freely and stay loyal, and the system's fate stays welded to a few balance sheets that are too big to fail and too connected to refuse.", { FI: 2, FA: 4, EN: -4, GL: -4 }])),

  // ── Bank board family-control law ───────────────────────────────────────────
  ax("Banking Division Secretary", "fixer", ["banks", "family-control", "governance"],
    sx("Sir! One family is allowed to control a whole bank forever, which makes it easy for them to steal. You can change the rule, but they are your friends.",
      ["Change the rule to stop them from controlling it forever.", "A bank run as a family fief gets looted as one.", "You cap family directorships and tenure. The banking dynasties rage and lean on their party ties, but the boards open up and the insider-looting machine loses its grease.", { GL: 6, EN: 6, FI: 2, FA: -8 }],
      ["Let them keep controlling the bank.", "The banking families are pillars of the party.", "You keep the family-control law intact. The dynasties stay grateful and entrenched, and the next hollowed-out bank is already being quietly emptied by the board that owns it.", { FA: 6, FI: -2, EN: -6, GL: -4 }])),

  // ── Anti-dumping / cheap imports ────────────────────────────────────────────
  ax("Tariff Commission Chief", "official", ["dumping", "tariffs", "industry"],
    sx("Mr. Prime Minister, sir! Super cheap toys and tools from other countries are hurting your own factories. You can tax them to save your jobs, but things will cost more.",
      ["Tax the cheap foreign things to save your jobs.", "A factory drowned in cheap imports is a town unemployed.", "You shield the domestic industry with duties. The local manufacturers and their workers are saved, the exporting nation protests to the trade body, and consumers pay more for the protected goods.", { FI: 2, EN: 4, GL: -4 }],
      ["Keep the foreign things cheap for shoppers.", "A consumer's cheap goods are a benefit too.", "You leave the market open. Consumers enjoy the cheap imports, but the domestic factories buckle and shed jobs, hollowing out the very industry you hoped to grow.", { GL: 2, FI: -2, EN: -4 }])),

  // ── Quasi-fiscal SOE losses ─────────────────────────────────────────────────
  ax("Budget Secretary", "official", ["soe", "losses", "transparency"],
    sx("Your Excellency! Government factories are losing tons of money secretly. You can tell everyone the truth, which will be shocking, or keep hiding it.",
      ["Tell the honest truth about the lost money.", "A loss hidden is a debt compounding in the dark.", "You consolidate the hidden losses into the open budget. The true deficit number shocks, but the lenders respect the honesty and the bleeding enterprises can finally be confronted.", { GL: 6, EN: 2, FI: -4 }],
      ["Keep hiding the lost money.", "An ugly number published is a panic invited.", "You leave the SOE losses in the shadows. The headline deficit stays flattering, and the hidden hole keeps growing, funded by banks that will one day present the bill.", { FI: 4, GL: -6, EN: -2 }])),

  // ── FATF grey-list threat ───────────────────────────────────────────────────
  ax("Anti-Money-Laundering Director", "ambassador", ["fatf", "compliance", "reputation"],
    sx("Prime Minister! The world says your country lets bad guys hide stolen money. They will punish you unless you stop them, but the bad guys are your friends.",
      ["Stop the bad guys to protect your country.", "A grey-listed nation is a nation cut off.", "You build genuine anti-laundering enforcement and dodge the listing. Correspondent banking stays open and investors calm, but your backers' laundering channels are now watched, and they are furious.", { GL: 8, FI: 4, FA: -6 }],
      ["Do nothing and let the world punish you.", "I will not strangle my friends' money to please a watchdog.", "You make cosmetic changes and your backers keep their channels. The watchdog grey-lists you, correspondent banks pull back, and the cost of every cross-border transaction climbs.", { FA: 4, GL: -8, FI: -6 }])),

  // ── Benami property law ─────────────────────────────────────────────────────
  ax("Land Reform Commissioner", "official", ["benami", "property", "corruption"],
    sx("Sir — Powerful people hide their stolen houses by putting them in other people's names. You can make a law to catch them and take the houses.",
      ["Make the law and take the stolen houses.", "A fortune in a servant's name is a confession.", "You pass the law and begin piercing the false ownership. Illicit fortunes are exposed and some seized, and the powerful who hid behind nominees are suddenly, dangerously visible.", { GL: 6, EN: 8, FI: 4, FA: -8 }],
      ["Leave the hidden houses alone.", "Too many of those names lead back to my own.", "You let the benami fortunes lie. The powerful keep their disguised wealth, the loophole stays wide open, and the corrupt accumulation of decades goes quietly unchallenged.", { FA: 6, FI: -2, EN: -6, GL: -4 }])),

  // ── Gold smuggling vs legal import ──────────────────────────────────────────
  ax("Customs Commissioner", "shadow", ["gold", "smuggling", "policy"],
    sx("Honourable leader! People are secretly sneaking gold through your airports, and the police are helping them for money.",
      ["Make it legal to bring gold in and charge a fair tax.", "A trade taxed in daylight starves the smuggler.", "You open a legal, taxed gold-import channel. The smuggling syndicates lose their edge, the jewellers and the treasury gain, and a shadow trade is dragged into the light.", { FI: 6, GL: 2, EN: 2, FA: -2 }],
      ["Keep it illegal and try to catch them.", "Legalising smuggling rewards the smuggler.", "You keep gold imports banned and chase the couriers. The headline seizures look tough, but the protected syndicates keep the bulk of the trade and the airport rackets stay golden.", { MI: 2, FI: -2, EN: -4 }])),

  // ── VAT refund / duty drawback fraud ────────────────────────────────────────
  ax("Customs Commissioner", "shadow", ["vat-refund", "drawback", "fraud"],
    sx("Sir, urgent news. People are tricking the government into giving them extra money for things they never really made or sold.",
      ["Use computers to check everything and stop the trick.", "A refund on a phantom export is theft with a stamp.", "You digitise and audit the refund system and the phantom claims collapse. Real exporters wait a little longer for genuine refunds, but a vast leak of public money is plugged.", { FI: 8, GL: 2, FA: -4 }],
      ["Leave the system alone and let them trick it.", "A crackdown punishes the honest exporter too.", "You leave the refund pipeline loose. The genuine exporters get their money fast, and so do the fraudsters claiming on exports that never existed, bleeding the treasury all the while.", { FI: -4, FA: 2, EN: -4 }])),

  // ── Bonded-warehouse abuse ──────────────────────────────────────────────────
  ax("Customs Commissioner", "shadow", ["bonded-warehouse", "duty", "diversion"],
    sx("Sir, forgive me — Factory owners get cheap materials to make things to sell far away, but they secretly sell them at home to get richer.",
      ["Check their factories closely to stop the secret selling.", "A duty-free import sold at home is smuggling by license.", "You audit the bonds and catch the diverters. Honest producers stop being undercut and the duty is recovered, and the connected abusers and their patrons turn on you.", { FI: 6, EN: 4, FA: -4 }],
      ["Let the factory owners keep doing it.", "The men running those bonds run the party's accounts.", "You leave the bonded scam alone. The diverted goods keep flooding the local market duty-free, honest producers keep losing, and the racket's patrons stay loyal and rich.", { FA: 4, FI: -4, EN: -4 }])),

  // ── Inheritance tax ─────────────────────────────────────────────────────────
  ax("Revenue Board Chairman", "official", ["inheritance-tax", "wealth", "dynasty"],
    sx("A word, sir! Very rich families pass down all their money to their kids without paying any taxes. You could tax this money to help the country.",
      ["Make them pay a tax when they pass down money.", "A fortune unearned should not pass wholly untouched.", "You levy a tax on great inheritances. Revenue rises and dynastic wealth loosens at the edges, and the established families — yours included — recoil at the precedent.", { FI: 6, EN: 6, FA: -8 }],
      ["Let them pass down the money without any taxes.", "I will not be the one to tax my own children's legacy.", "You spare inheritances the tax. The hereditary elite keeps its fortunes intact across generations, and the chance to broaden revenue and loosen dynastic wealth passes by.", { FA: 6, FI: -4, EN: -4 }])),

  // ── Microinsurance for the poor ─────────────────────────────────────────────
  ax("Insurance Regulator", "people", ["microinsurance", "poverty", "resilience"],
    sx("Sir, we have a problem. Poor families lose everything if someone gets sick or a storm hits. You could help them buy cheap protection plans to keep them safe.",
      ["Help them get cheap protection plans for bad days.", "A few taka of cover stands between a family and ruin.", "You build subsidised, well-regulated microinsurance. The cost and oversight are real, but a flood or a funeral stops meaning the loss of everything for millions of poor households.", { EN: 8, FI: -4, GL: 2 }],
      ["Let them figure it out on their own.", "A whole insurance system for tiny premiums earns nothing.", "You leave the poor to their informal safety nets of debt and charity. The budget is spared, and the next flood or illness keeps sweeping families from the edge into destitution.", { FI: 2, EN: -6 }])),

  // ── Islamic banking / sukuk ─────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["islamic-finance", "sukuk", "savings"],
    sx("Sir! Many religious people won't put money in normal banks because of their religious rules. You can make special religious bank rules for them.",
      ["Make true religious bank rules to help them.", "Faith-shy savings can still build roads.", "You establish credible Islamic-finance rules and issue sukuk. A vast pool of pious savings enters the formal economy and funds development, and the framework's integrity wins trust.", { FI: 6, EN: 4, GL: 2 }],
      ["Just put a fake religious sticker on normal bank rules.", "The label is what the market wants; the substance is detail.", "You relabel conventional products as Islamic without real substance. The savings trickle in, but the scholars cry foul, a mis-selling scandal brews, and trust in the whole sector frays.", { FI: 2, EN: -4, GL: -2 }])),

  // ── Deposit insurance ───────────────────────────────────────────────────────
  ax("Banking Division Secretary", "official", ["deposit-insurance", "savers", "stability"],
    sx("Mr. Prime Minister, sir! Normal people lose all their money if a bank breaks. You can make banks pay a fee to keep people's money safe no matter what.",
      ["Make the banks pay the fee to keep people's money safe.", "A saver who fears for his deposit starts a run.", "You build real deposit insurance funded by a bank levy. The banks grumble at the cost, but small savers gain protection and the system gains a shock absorber against panic.", { FI: 4, EN: 6, GL: 2, FA: -2 }],
      ["Let people risk losing their money.", "A levy on the banks is a cost passed to the customer.", "You decline the scheme to spare the banks the levy. The savers stay exposed, and the next rumour about a weak bank empties its counters before the truth can catch up.", { FI: 2, EN: -6 }])),

  // ── School stipend expansion ────────────────────────────────────────────────
  ax("Education Finance Secretary", "people", ["stipend", "girls", "education"],
    sx("Your Excellency! The money you give poor kids, especially girls, to help them stay in school is too small. Giving them more would help, but it costs a lot.",
      ["Give the kids more money to stay in school.", "A stipend that keeps a girl in school changes a generation.", "You widen and raise the stipend. Enrolment climbs, child marriages slip later, and the budget takes a heavy permanent load for a payoff measured in decades.", { EN: 10, GL: 4, FI: -8 }],
      ["Keep giving them only a tiny bit of money.", "A generous stipend is a budget line forever.", "You keep the stipend lean. The budget is protected, but the poorest children — and the girls most at risk of early marriage — keep dropping out for want of a few taka.", { FI: 4, EN: -4 }])),

  // ── Maternity allowance ─────────────────────────────────────────────────────
  ax("Women's Affairs Finance Officer", "people", ["maternity", "allowance", "poverty"],
    sx("Prime Minister! Poor moms have to work very hard right until their babies are born. You can give them money so they can stay home and rest.",
      ["Give the moms money to rest and care for their babies.", "A nation that will not support its mothers stunts its future.", "You establish the maternity allowance. Mothers rest and nurse, infant health improves, and the budget carries a new permanent burden for a quietly transformative return.", { EN: 10, GL: 4, FI: -6 }],
      ["Let them keep working and hope someone else helps.", "A new allowance is a promise the budget cannot keep.", "You decline the allowance. The treasury is spared, and poor mothers keep labouring to the last day and back, the cost paid in their health and their children's.", { FI: 4, EN: -6 }])),

  // ── Free textbook printing ──────────────────────────────────────────────────
  ax("Education Finance Secretary", "fixer", ["textbooks", "printing", "graft"],
    sx("Sir — The people printing free school books for kids are stealing money and making bad books. They are friends with your team.",
      ["Fix the book printing so kids get good books.", "A child's book should not be a printer's bribe.", "You open the tenders and enforce quality. The party-linked printing cartel rages and threatens delays, but the books arrive better and the graft shrinks.", { EN: 6, FI: 2, GL: 2, FA: -4 }],
      ["Let your friends keep stealing and making bad books.", "The books arrive on time; do not break the machine.", "You leave the cosy contracts intact. The books arrive on schedule, flimsy and over-priced, and the printers' cartel stays a reliable, grateful funder of the party.", { FA: 4, FI: -2, EN: -4 }])),

  // ── Tax net widening ────────────────────────────────────────────────────────
  ax("Revenue Board Chairman", "official", ["tax-net", "informal", "compliance"],
    sx("Honourable leader! Very few people pay taxes. You can ask normal workers and small stores to pay, but they will be very mad because they never have before.",
      ["Make the normal workers and small stores pay taxes.", "A nation where few pay is a nation few can fund.", "You launch the registration and enforcement drive. Revenue broadens onto those long outside the net, the new taxpayers grumble loudly, and the salaried at last get some company in paying.", { FI: 8, EN: 4, FA: -4 }],
      ["Let them keep skipping their taxes.", "A million new tax notices is a million new enemies.", "You hold off on the expansion. The informal middle keeps its untaxed cash, the revenue base stays narrow, and the few who do pay keep carrying the many who do not.", { FA: 2, FI: -4 }])),

  // ── Currency redenomination ─────────────────────────────────────────────────
  ax("Central Bank Governor", "official", ["currency", "redenomination", "confidence"],
    sx("Sir, urgent news. Your money has too many zeros on it because prices went way up over the years. Someone wants to chop the zeros off just to make it look nicer.",
      ["Chop the zeros off to make the money look nicer.", "A proud currency wears fewer zeros.", "You lop the zeros off the taka in a grand relaunch. The notes look tidier and the optics flatter, and the costly, disruptive exercise changes nothing about the inflation that bloated them.", { FI: -4, GL: 2, EN: -2 }],
      ["Say no because it doesn't actually fix anything.", "Zeros are a symptom; cutting them cures nothing.", "You spike the vanity project. There is no relaunch fanfare, but the money and disruption are saved, and you focus on the inflation that actually matters.", { FI: 4, GL: -2 }])),

  // ── Agent banking for the rural unbanked ────────────────────────────────────
  ax("Financial Inclusion Director", "people", ["agent-banking", "rural", "inclusion"],
    sx("Sir, forgive me — You can let tiny village shops act like banks so poor people can easily save money. Big banks are scared they will lose money from fraud.",
      ["Let the tiny shops act like banks.", "A bank counter in every bazaar banks the nation.", "You drive agent banking deep into the villages. The unbanked gain savings, credit, and payments for the first time, and the banks' fraud fears prove manageable against the reach gained.", { EN: 8, FI: 4, GL: 2 }],
      ["Let the big banks decide what to do.", "A reckless rollout invites a fraud scandal.", "You leave the pace to the cautious banks. The fraud risk stays low, and so does the reach, and the villages keep waiting for a banking system that never quite arrives.", { FI: 2, EN: -4 }])),

  // ── World Bank budget support conditions ────────────────────────────────────
  ax("External Finance Secretary", "ambassador", ["world-bank", "conditions", "reform"],
    sx("A word, sir! A big world bank offers you cheap money, but only if you promise to follow their strict rules for how you run things.",
      ["Take the money and follow their strict rules.", "Cheap money and good medicine in one dose.", "You accept the budget support and enact the reforms. The cheap money helps and the governance genuinely improves, and the nationalists grumble about foreign hands on the tiller.", { FI: 6, GL: 4, EN: 2, FA: -2 }],
      ["Say no to the money so you can make your own rules.", "I will not let a foreign bank write my budget.", "You turn down the conditional money on principle. You keep full policy control, but you forgo cheap finance and the reforms that, conditions aside, the country actually needed.", { FA: 2, FI: -6, GL: -2 }])),

  // ── Wage-theft enforcement ──────────────────────────────────────────────────
  ax("Labour Finance Inspector", "people", ["wage-theft", "workers", "enforcement"],
    sx("Sir, we have a problem. Bosses everywhere are tricking workers and not paying them their full money. You can create a strong police team to stop them.",
      ["Create a strong team to make bosses pay the workers.", "A wage withheld is a wage stolen.", "You stand up a unit that actually recovers stolen wages and fines the thieves. Workers start getting their due, the donor-employers cry harassment, and a quiet everyday injustice meets a check.", { EN: 8, GL: 2, FI: -2, FA: -4 }],
      ["Let the workers fight the bosses on their own.", "An employer hounded for back-pay closes the gate.", "You decline to build the unit. The employers keep their impunity, and the workers keep chasing wages already earned and rarely paid in full.", { FA: 4, FI: 2, EN: -6 }])),

  // ── Bank recapitalisation with public money ─────────────────────────────────
  ax("Budget Secretary", "fixer", ["recapitalisation", "banks", "bailout"],
    sx("Sir! Government banks are empty because bad managers stole the money. You need to give them more money to stay open.",
      ["Give them the money with no extra rules.", "A failed state bank cannot simply be allowed to die.", "You pour public money into the looted banks again, no questions asked. They limp on, the loopers and defaulters who emptied them face nothing, and the cycle is set to repeat.", { FI: -4, FA: 4, EN: -6, GL: -4 }],
      ["Give them the money but make them follow strict new rules.", "I will not refill a bucket no one will fix.", "You make the bailout conditional on board purges, recoveries, and reform. The looters and their patrons fight it bitterly, but the public money goes in with at least a chance of staying.", { GL: 4, EN: 4, FI: -4, FA: -6 }])),

  // ── Presumptive / turnover tax on small business ────────────────────────────
  ax("Revenue Board Chairman", "people", ["small-business", "turnover-tax", "simplicity"],
    sx("Mr. Prime Minister, sir! Tiny stores have to do really hard math to pay taxes. You can make it super easy for them, but you might collect less money overall.",
      ["Make the taxes super easy for tiny stores.", "A tax a shopkeeper can compute is a tax a shopkeeper pays.", "You bring in a flat, simple turnover tax for small firms. Compliance jumps as the paperwork and the bribes fall away, and the system gains millions of small, honest taxpayers.", { FI: 4, EN: 6, FA: -2 }],
      ["Keep the hard math rules.", "A flat tax leaves money on the table from the bigger fish.", "You keep the complex regime. The treasury squeezes more from the few who comply, and the rest stay outside, paying the assessor a bribe instead of the state a tax.", { FI: 2, EN: -4 }])),

  // ── Directed lending to favoured sectors ────────────────────────────────────
  ax("Central Bank Governor", "fixer", ["directed-lending", "credit", "distortion"],
    sx("Your Excellency! Your helpers want banks to give cheap money to businesses owned by your friends. The bank boss says this is a bad idea.",
      ["Force the banks to give cheap money to your friends.", "Credit steered to friends is friendship repaid.", "You direct the cheap credit to the favoured firms. They prosper on subsidised loans, the market distorts, and a fresh crop of politically-blessed bad loans begins to sprout.", { FI: 2, FA: 4, EN: -4, GL: -4 }],
      ["Let the bank boss decide who gets the money safely.", "Lending by favour is the seed of every banking crisis.", "You refuse to direct the credit. The favoured firms grumble at being denied their subsidy, but the banks lend on merit and the next wave of bad loans is not sown by decree.", { GL: 4, FI: 2, EN: 2, FA: -4 }])),

  // ── Monetary tightening vs growth ───────────────────────────────────────────
  ax("Central Bank Governor", "official", ["interest-rate", "inflation", "growth"],
    sx("Prime Minister! Everything in the stores costs too much. You can make it harder for people to borrow money to fix prices, but it slows down businesses.",
      ["Make it harder to borrow money so prices drop.", "Unchecked inflation robs every wage and saving.", "You tighten hard and inflation begins, slowly, to ease. Borrowing costs jump, growth cools, the business lobby howls, and the painful medicine works as medicine does.", { FI: 4, GL: 4, EN: -6 }],
      ["Keep it easy to borrow money so businesses stay busy.", "A choked economy is a poorer one for everyone.", "You keep rates low to protect growth and jobs. The business lobby is pleased and the expansion continues, and inflation keeps gnawing at every wage and every saving in the country.", { EN: 2, FI: -4, GL: -2 }])),

  // ── FDI screening for strategic sectors ─────────────────────────────────────
  ax("Investment Authority Chief", "ambassador", ["fdi", "screening", "sovereignty"],
    sx("Sir — Other countries want to buy your boat docks and phone companies. You can check them first to stay safe, or let anyone buy to get money fast.",
      ["Check who is buying things to keep the country safe.", "Some assets must not be owned from abroad.", "You set up a screening regime for strategic sectors. Some investment is deterred and the open-economy purists complain, but no single foreign power buys a chokehold on your ports or banks.", { GL: 2, MI: 4, FI: -4 }],
      ["Let anyone from other countries buy whatever they want.", "Capital is capital; the country needs it.", "You keep the door wide open. The investment flows in handsomely, and with it a foreign power's quiet acquisition of stakes in the infrastructure your security depends on.", { FI: 6, GL: 2, MI: -4 }])),

  // ── Land-mutation digitisation ──────────────────────────────────────────────
  ax("Land Reform Commissioner", "people", ["land-records", "digitisation", "corruption"],
    sx("Honourable leader! The papers that show who owns land are messy and full of lies. You can use computers to fix it, but corrupt helpers will be mad.",
      ["Use computers to make the land papers honest.", "A clear title is the poor man's strongest shield.", "You drive the digitisation through against fierce resistance. The forgers and touts lose their racket, land litigation eases, and the poor gain titles that can finally be defended.", { EN: 8, GL: 4, FI: 2, FA: -4 }],
      ["Leave the messy papers alone.", "Untangling a century of forgery is a war I cannot win.", "You leave the land-records chaos intact. The clerks and touts keep their lucrative fraud, the courts stay clogged with land disputes, and the powerful keep dispossessing the weak by forged deed.", { FA: 4, FI: -2, EN: -6 }])),

  // ── Demurrage / port efficiency ─────────────────────────────────────────────
  ax("Ports Finance Director", "official", ["port", "efficiency", "trade"],
    sx("Sir, urgent news. Your big boat dock is too slow and messy. You can fix it with robots, but the bad groups who make money from the mess will fight you.",
      ["Fix the dock and stop the bad groups.", "A clogged port is a tax on every import and export.", "You automate the port and break the handling syndicates. The demurrage bill plummets and trade speeds up, and the displaced syndicate bosses and their political patrons declare war.", { FI: 6, GL: 4, EN: 2, FA: -4 }],
      ["Leave the messy dock the way it is.", "A port shutdown over reform would cripple the economy.", "You avoid the fight with the port syndicates. The congestion and demurrage grind on as a permanent drag, and the economy quietly pays the syndicates' toll on every container.", { FA: 2, FI: -4, GL: -2 }])),

  // ── Cash-economy to digital push ────────────────────────────────────────────
  ax("Digital Finance Adviser", "people", ["digital-payments", "cash", "transparency"],
    sx("Sir, forgive me — Everyone uses paper money, making it easy to hide stealing. You can force people to pay with phones, but poor people might struggle.",
      ["Force people to start paying with their phones.", "Cash in the dark is where taxes go to die.", "You push hard for digital payments and the tax net widens as cash retreats. Corruption gets harder to hide, and the cash-poor and elderly struggle, needing support to keep up.", { FI: 6, EN: 2, GL: 2 }],
      ["Let people keep paying with paper money.", "A nation forced cashless overnight abandons its poorest.", "You let the transition come gradually. No one is left stranded by a sudden cashless push, but the untraceable cash economy keeps shielding the evaders and the grafters.", { EN: 2, FI: -2 }])),

  // ── Telecom spectrum auction ────────────────────────────────────────────────
  ax("Telecom Finance Director", "ambassador", ["spectrum", "auction", "revenue"],
    sx("A word, sir! You are selling new invisible waves that make cell phones work. You can charge companies a lot, or sell them cheap so internet is cheaper for everyone.",
      ["Charge a lot of money to make the government rich.", "Spectrum is a one-time treasure; sell it dear.", "You squeeze the operators for a record auction haul. The treasury banks a windfall, and the operators, recouping it, keep data dear and coverage thin for years to come.", { FI: 8, EN: -4, RE: -2 }],
      ["Sell them cheap so people get cheaper phone internet.", "Cheap data grows more than a one-time cheque.", "You price the spectrum to spur coverage and affordable data. The one-time haul is smaller, but cheap fast internet spreads, and the digital economy it feeds pays back for years.", { EN: 6, GL: 2, FI: -4 }])),

  // ── Biman / national airline losses ─────────────────────────────────────────
  ax("Aviation Finance Secretary", "fixer", ["airline", "losses", "soe"],
    sx("Sir, we have a problem. Your country's airplane company loses money every day because it's run badly. You keep paying to keep it flying to look cool.",
      ["Fix the airplane company or sell it to someone else.", "A flag that flies on subsidy flies on borrowed time.", "You force the restructuring, cutting the padded leases and the overstaffing. The unions and the brokers who profited rage, but the airline stops being a bottomless drain on the treasury.", { FI: 8, GL: 2, EN: -6, FA: -4 }],
      ["Keep paying government money so it keeps flying.", "A nation's airline is a nation's face.", "You keep the airline aloft on subsidy. The flag flies and the patronage flows, and the padded deals and graft keep the losses mounting flight after flight.", { FA: 4, FI: -6, EN: -2 }])),

  // ── Carbon tax / green levy ─────────────────────────────────────────────────
  ax("Fiscal Climate Adviser", "official", ["carbon-tax", "climate", "revenue"],
    sx("Sir! You can charge a tax on things that make dirty smoke. It helps the earth, but makes things more expensive for people who already don't have enough money.",
      ["Start charging the dirty smoke tax.", "The polluter should pay, and the treasury should collect.", "You bring in a carbon levy. Revenue rises, the economy nudges greener, and the climate donors approve, while industry and consumers feel one more cost in an already pinched year.", { FI: 4, EN: 4, GL: 4, RE: 2 }],
      ["Don't charge the tax right now.", "A new fuel levy amid inflation is a riot ordered in advance.", "You shelve the carbon tax. Industry and consumers are spared another cost, and the revenue, the green nudge, and the donor goodwill all go uncollected.", { FI: -2, EN: -2, GL: -2 }])),

  // ── Capital-gains tax on the bourse ─────────────────────────────────────────
  ax("Revenue Board Chairman", "shadow", ["capital-gains", "stock-market", "elite"],
    sx("Mr. Prime Minister, sir! Rich people who make a lot of money in the stock market don't pay taxes on it. If you tax them, they might crash the market on purpose.",
      ["Make the rich people pay taxes on that money.", "A fortune made on the bourse should pay like any other.", "You tax the big market gains. Revenue rises and fairness with it, the small investor is spared, and the big players stage a noisy sell-off and lean on every connection they have.", { FI: 6, EN: 4, FA: -4 }],
      ["Let them keep the money without paying taxes.", "A capital-gains tax could spook the whole bourse.", "You leave the gains untaxed to keep the market calm. The wealthy and the manipulators keep their tax-free windfalls, and the revenue and the fairness go uncollected.", { FA: 2, FI: -4, EN: -2 }])),

  // ── IMF Article IV honesty ──────────────────────────────────────────────────
  ax("External Finance Secretary", "ambassador", ["imf", "transparency", "data"],
    sx("Your Excellency! The big world bank wants to tell everyone the honest, ugly truth about your country's money problems. You can try to push them to hide it.",
      ["Let them tell everyone the honest truth.", "A diagnosis softened is a disease untreated.", "You let the IMF publish the unvarnished assessment. The numbers sting and the opposition feasts, but the lenders and markets reward the transparency, and the problems can finally be named.", { GL: 6, FI: -2, EN: -2 }],
      ["Push them to hide the bad parts of the story.", "An honest report is a headline against me.", "You lean on the mission for a gentler write-up. The official narrative survives intact, the markets are soothed by a number that is not quite real, and the IMF's quiet doubts deepen.", { FI: 2, GL: -6 }])),

  // ── Garment safety accord funding ───────────────────────────────────────────
  ax("Industrial Safety Secretary", "people", ["garments", "safety", "factories"],
    sx("Prime Minister! A factory broke and fell down. Now everyone demands factories be made safer. Owners want your help to avoid paying for safety.",
      ["Force the owners to make their factories super safe.", "A factory that buries its workers is no asset.", "You enforce the retrofits hard, factory by factory. The owners howl at the cost and a few lines close, but the death-trap buildings are fixed and the buyers keep their orders.", { EN: 10, GL: 6, FI: -4, FA: -4 }],
      ["Help the owners dodge the safety rules.", "Protect the owners who keep a million employed.", "You help the owners paper over the accord. The retrofits go undone, the lines stay cheap, and the next fire or collapse is already being built into a building no one fixed.", { FI: 4, FA: 4, EN: -10, GL: -6 }])),

  // ── Duty-free capital machinery ─────────────────────────────────────────────
  ax("Tariff Commission Chief", "official", ["machinery", "duty", "industry"],
    sx("Sir — Factory bosses want to bring in big machines without paying taxes. But some of them trick you and bring in normal stuff to sell instead.",
      ["Let them bring in all machines without taxes.", "Cheap machines build modern factories.", "You open the duty-free channel wide. Genuine manufacturers re-tool cheaply, and the disguised-import racket revives alongside, smuggling finished goods in under the machinery label.", { FI: -2, EN: 4, RE: 2 }],
      ["Check very carefully before letting anything in without taxes.", "A loophole for machines becomes a loophole for everything.", "You permit duty-free machinery only with strict end-use verification. The honest manufacturers grumble at the paperwork, but the disguised-import loophole stays shut and the duty is protected.", { FI: 4, EN: 2, FA: -2 }])),

  // ── Hi-tech park / IT industry ──────────────────────────────────────────────
  ax("ICT Investment Director", "official", ["it", "hi-tech-park", "jobs"],
    sx("Honourable leader! You can build a giant computer park to create smart jobs. If you don't spend enough money, it will just be empty buildings.",
      ["Spend a lot to make the computer park amazing.", "The future's factories are made of code.", "You back the park with reliable power, fibre, and incentives, and court real anchor tenants. The cost is high and the bet uncertain, but a genuine tech cluster and its skilled jobs begin to form.", { EN: 6, FI: -6, GL: 2, RE: 2 }],
      ["Build it cheaply and hope it works out.", "A grand park half-empty is a grand embarrassment.", "You build a modest version and hope tenants come. The cost is contained, but without serious infrastructure and incentives the park risks joining the country's collection of hollow monuments.", { FI: -2, EN: 2 }])),

  // ── Women-entrepreneur credit fund ──────────────────────────────────────────
  ax("SME Finance Director", "people", ["women", "entrepreneurs", "credit"],
    sx("Sir, urgent news. Women who want to start small shops can't borrow money from banks. You can create a special fund just to help them.",
      ["Create the special fund to help women start shops.", "Half the talent locked out is half the economy lost.", "You build the dedicated fund. Default risk runs higher and the bankers grumble, but a wave of women-led businesses opens, and a vast pool of stifled enterprise finally finds capital.", { EN: 8, FI: -4, GL: 2 }],
      ["Let the banks treat everyone the same.", "Special funds breed special defaults.", "You keep credit 'neutral', which in practice means collateral-bound and male. The default risk stays low and the bankers content, and women entrepreneurs keep borrowing from family or not at all.", { FI: 2, EN: -4 }])),

  // ── MP development fund ──────────────────────────────────────────────────────
  ax("Planning Commission Member", "fixer", ["mp-fund", "patronage", "local"],
    sx("Sir, forgive me — Your politicians get a big bag of money every year to fix their towns. Most of them use it to build their own houses or help friends.",
      ["Keep giving the politicians the bag of money.", "An MP without a chequebook is an MP without friends.", "You keep the funds flowing to the MPs. They build loyalty and the occasional genuine road, and skim and steer the rest to their own contractors and kin, audited by no one.", { FA: 6, MI: 2, EN: -6, FI: -2 }],
      ["Give the money to honest town leaders instead.", "Development should follow a plan, not a member's whim.", "You move the money to audited local councils. The MPs lose a treasured lever and seethe, but the development spreads by need and plan rather than by the member's favour.", { EN: 8, GL: 4, FA: -6 }])),

  // ── Sovereign credit rating ─────────────────────────────────────────────────
  ax("External Finance Secretary", "ambassador", ["rating", "markets", "reform"],
    sx("A word, sir! The world will say your country is bad with money unless you raise taxes and cut help for the poor. People will hate you for it.",
      ["Raise taxes to prove you are good with money.", "A downgrade taxes every loan for a decade.", "You enact the painful reforms and stave off the downgrade. The public feels the squeeze and grumbles, but the rating holds and the country's future borrowing stays affordable.", { GL: 4, FI: 4, EN: -8 }],
      ["Ignore the world and keep people happy for now.", "I will not cut subsidies to please a foreign rating.", "You spare the public the reforms and take the downgrade. The politics stay calm now, and every loan the country raises henceforth carries a higher price for the rating you let slip.", { EN: 4, FI: -6, GL: -4 }])),

  // ── Pay parity / freedom-fighter allowance ──────────────────────────────────
  ax("Budget Secretary", "fixer", ["allowance", "veterans", "spending"],
    sx("Sir, we have a problem. The list of old war heroes who get free money is growing because people are lying and faking papers. You can clean the list up.",
      ["Check the papers and kick the liars off the list.", "A forged certificate dishonours the real heroes.", "You audit the rolls and strip out the forgeries. The genuine veterans are honoured and the fraud purged, and the cleansing of a sacred list draws furious accusations of disrespect.", { FI: 4, GL: 2, EN: 2, FA: -4 }],
      ["Keep paying everyone on the list to avoid anger.", "I will not be the one to question a freedom-fighter's claim.", "You leave the rolls untouched. The genuine and the forged draw the honour allowance alike, the sacred constituency stays placated, and the fraud quietly bloats the budget line.", { FA: 6, FI: -4, EN: -2 }])),

  // ── Ride-share / gig economy ────────────────────────────────────────────────
  ax("Transport Economy Adviser", "people", ["gig-economy", "ride-share", "workers"],
    sx("Sir! Delivery and driving apps give young people jobs, but the bosses don't protect them or pay them enough.",
      ["Make strong rules to protect the delivery drivers.", "A job with no floor is a trap with an app.", "You impose minimum earnings, insurance, and dispute rights on the platforms. Fares rise a little and the apps threaten to scale back, but a precarious workforce gains a measure of security.", { EN: 8, FI: -2, GL: 2 }],
      ["Leave the apps alone so prices stay cheap.", "Cheap rides and easy work are their own reward.", "You leave the platforms free. Fares stay low and the apps expand, and the young riders and drivers keep working without a floor, a benefit, or a safety net beneath them.", { FI: 2, EN: -6 }])),

  // ── Regional free-trade deal ────────────────────────────────────────────────
  ax("Commerce Envoy", "ambassador", ["fta", "regional", "trade"],
    sx("Mr. Prime Minister, sir! You can make a deal to trade freely with neighbors. It helps sell your things, but cheap neighbor things might close your own shops.",
      ["Sign the deal to trade freely with neighbors.", "A market opened both ways favours the competitive.", "You sign the FTA and your exporters gain access to vast new markets. Some domestic industries, undercut by cheaper imports, buckle and shed jobs, and the adjustment is wrenching.", { GL: 6, FI: 2, EN: -4 }],
      ["Say no to protect your own small shops.", "Free trade with a giant is a flood with a treaty.", "You decline the deal to shield domestic industry. The home producers are protected and the jobs held, but your exporters lose the access, and the integration the region is moving toward leaves you behind.", { EN: 2, FI: -2, GL: -4 }])),

  // ── Stamp duty / registration fee ───────────────────────────────────────────
  ax("Revenue Board Chairman", "people", ["stamp-duty", "property", "informality"],
    sx("Your Excellency! The tax to buy a house is so high that everyone lies about the price. If you lower the tax, more people might be honest.",
      ["Lower the tax to make people honest.", "A rate too high is a rate evaded.", "You slash the stamp duty. Declarations jump toward honesty, the property market quickens, and after a brief dip the revenue actually rises as the under-declaration racket collapses.", { FI: 4, EN: 4, GL: 2 }],
      ["Keep the high tax just in case.", "A rate cut is a revenue cut I cannot risk now.", "You keep the duty high. The headline rate looks lucrative, and the universal under-declaration keeps fuelling black money while the treasury collects on fictional sale prices.", { FI: -2, EN: -2 }])),

  // ── Light-engineering / SME cluster ─────────────────────────────────────────
  ax("Industries Secretary", "people", ["sme", "manufacturing", "cluster"],
    sx("Prime Minister! Poor, tiny workshops make important parts for your machines. You can give them training and money to grow big, or ignore them for flashier things.",
      ["Help the tiny workshops grow and become better.", "A nation that makes its own parts depends on no one's.", "You back the workshops with credit, training, and standards. The transformation is slow and unglamorous, but an import-substituting manufacturing base — and skilled jobs — takes root.", { EN: 6, FI: -4, RE: 2 }],
      ["Ignore them and focus on big, shiny projects.", "Workshops do not make headlines.", "You steer support to glossier projects instead. The flagship announcements dazzle, and the unsung workshops that actually keep industry running stay starved and stuck.", { GL: 2, FI: -2, EN: -2 }])),

  // ── ADB megaproject loan ────────────────────────────────────────────────────
  ax("External Finance Secretary", "ambassador", ["adb", "loan", "megaproject"],
    sx("Sir — A bank offers cheap money to build a road, but they demand you build it perfectly without any cheating or stealing by your builders.",
      ["Take the money and build the road perfectly.", "Cheap money and clean procurement together.", "You take the soft loan and accept the rigorous conditions. The build is slower and the contractors are denied their padding, but the corridor is cheaply financed and honestly built.", { FI: 4, GL: 4, EN: 2, FA: -4 }],
      ["Use your own money so your builders can do what they want.", "I will not let a bank's auditors run my project.", "You skip the conditional loan and finance it domestically. The contractors get their padding and the speed they want, and the project costs more, runs dirtier, and strains the budget.", { FA: 4, FI: -6, EN: -2 }])),

  // ── High-denomination note ──────────────────────────────────────────────────
  ax("Central Bank Governor", "shadow", ["currency", "high-note", "black-money"],
    sx("Honourable leader! You can print a really big piece of money. It makes carrying cash easy, but also makes it super easy for bad guys to hide stolen money.",
      ["Print the really big piece of money.", "A bigger note is a smaller suitcase.", "You print the big note. Large cash deals get easier for everyone, including the hoarders, bribers, and launderers who can now move fortunes in a slim envelope.", { FI: 2, EN: -4, GL: -2 }],
      ["Don't print it.", "A big note is a bribe's best friend.", "You refuse the high-denomination note. Large cash deals stay bulky and a little harder to hide, a small friction against the corruption that thrives on portable wealth.", { GL: 2, EN: 2 }])),

  // ── Street-vendor formalisation ─────────────────────────────────────────────
  ax("Urban Economy Officer", "people", ["vendors", "informal", "licensing"],
    sx("Sir, urgent news. People selling food on the street have to pay bad police officers every day to not get kicked out. You can give them real licenses.",
      ["Give the street sellers real licenses so they are safe.", "A hawker licensed is a hawker freed from the mastan.", "You license the vendors and assign them zones. The police and mastans lose their daily extortion and resent it, but the vendors gain legal standing and the footpaths get some order.", { EN: 8, FI: 2, MI: -2, FA: -2 }],
      ["Keep kicking them out of the streets.", "The footpaths belong to the pedestrian.", "You keep mounting eviction drives that scatter the vendors for a day before they return. The bribes keep flowing to police and mastans, and nothing actually changes but the optics.", { MI: 2, FI: -2, EN: -6 }])),

  // ── Railway losses ──────────────────────────────────────────────────────────
  ax("Railway Finance Secretary", "people", ["railway", "losses", "subsidy"],
    sx("Sir, forgive me — Government trains lose money on every ride because tickets are so cheap. But poor people need those cheap trains.",
      ["Make the tickets cost more and fire extra workers.", "A railway that bankrupts itself serves no one long.", "You raise fares, curb the ticketless, and trim the bloat. The losses narrow and the service steadies, but the poor who depend on cheap travel feel the pinch and the unions strike.", { FI: 6, EN: -6, FA: -2 }],
      ["Keep the tickets super cheap and lose money.", "The train is the poor man's only affordable distance.", "You keep fares low and the trains rolling at a loss. The poor keep their cheap lifeline, and the railway keeps draining the budget, its graft and overstaffing untouched.", { EN: 6, FI: -6 }])),

  // ── Pharma API park ─────────────────────────────────────────────────────────
  ax("Industries Secretary", "doctor", ["pharma", "api", "self-reliance"],
    sx("A word, sir! Your medicine makers buy all their magic ingredients from other countries. You can build a special park to make the ingredients at home.",
      ["Build the special park to make the magic ingredients.", "An industry that imports its core imports its fate.", "You commit to the API park. The investment is heavy and the payoff years away, but the pharma industry begins to make its own ingredients and an export edge sharpens.", { FI: -4, EN: 4, GL: 2, RE: 2 }],
      ["Keep buying them from other countries.", "Why build what I can buy?", "You keep relying on imported ingredients. The capital is saved, and the industry stays one foreign supply-shock away from a shortage of the medicines the country and its exports depend on.", { FI: 2, EN: -2, GL: -2 }])),

  // ── Internet / SIM tax ──────────────────────────────────────────────────────
  ax("Revenue Board Chairman", "people", ["sim-tax", "internet", "access"],
    sx("Sir, we have a problem. Phones and internet are taxed heavily to get the government money. But this makes it too expensive for poor people to use the internet.",
      ["Keep the high taxes to make the government rich.", "A connected nation can spare a few taka per gigabyte.", "You raise the connectivity taxes and the revenue flows easily. Data and phones get dearer, the rural poor and the digital economy both feel it, and a regressive levy deepens.", { FI: 6, EN: -6 }],
      ["Lower the taxes so poor people can use the internet.", "A tax on data is a tax on the future.", "You cut the SIM and data taxes. The easy revenue is forgone, but cheaper connectivity spreads to the rural poor and feeds the digital economy that pays back many times over.", { EN: 6, GL: 2, FI: -4 }])),

  // ── Cottage / handloom heritage industry ────────────────────────────────────
  ax("Cottage Industry Director", "people", ["handloom", "heritage", "artisans"],
    sx("Sir! People who make beautiful clothes by hand are going out of business because machines are faster. You can step in to save their art.",
      ["Give them money and help so they can keep making clothes by hand.", "A craft lost is a heritage no money rebuilds.", "You back the weavers with credit, design, and a protected heritage label. The cost is modest and the market still hard, but a dying craft and the communities who keep it get a fighting chance.", { EN: 6, GL: 2, FI: -4 }],
      ["Do nothing and let the machines win.", "Nostalgia cannot outcompete a power loom.", "You let the handloom communities fend for themselves. The cheaper power-loom goods win, the looms fall silent one village at a time, and a centuries-old craft fades toward memory.", { FI: 2, EN: -4 }])),

  // ── EPZ minimum wage ────────────────────────────────────────────────────────
  ax("Export Zone Authority Chief", "people", ["epz", "wages", "investment"],
    sx("Mr. Prime Minister, sir! Special factory zones ban workers from grouping up to ask for better pay. If you let them group up, the foreign owners might get scared and leave.",
      ["Let the workers group up and ask for better pay.", "A showcase built on suppressed wages shames the show.", "You lift the EPZ wage and permit unions. Some investors grumble and threaten to look elsewhere, but the zone workers gain dignity and pay, and the showcase stops being a sweatshop with landscaping.", { EN: 8, GL: 4, FI: -4, FA: -2 }],
      ["Keep the ban so the foreign owners stay happy.", "The investors came for the cheap, calm labour.", "You keep the zones cheap and union-free. The investors stay content and the FDI flows, and the zone workers keep earning below the national floor with no voice to change it.", { FI: 6, FA: 2, EN: -8, GL: -2 }])),

  // ── Advance income tax burden ───────────────────────────────────────────────
  ax("Revenue Board Chairman", "people", ["advance-tax", "compliance", "burden"],
    sx("Your Excellency! The government secretly takes a little tax money from almost everything people do. It's easy money, but it is very unfair to poor people.",
      ["Fix the taxes so they are fair to everyone.", "A tax collected before profit is a tax on existence.", "You prune the tangle of advance taxes. Collection gets a little harder and revenue dips short-term, but the hidden burden on the small and the consumer eases and the system grows fairer.", { EN: 6, GL: 2, FI: -4 }],
      ["Keep taking the easy, secret tax money.", "A tax collected at source is a tax that does not escape.", "You keep the advance-tax web intact. Collection stays easy and leak-proof, and the hidden, regressive burden goes on falling hardest on those least able to reclaim it.", { FI: 4, EN: -4 }])),

  // ── The mega-budget showpiece ───────────────────────────────────────────────
  ax("Budget Secretary", "fixer", ["budget", "deficit", "populism"],
    sx("Prime Minister! Your friends want to promise to give away tons of free stuff right before an election to win votes, even though you don't have the money.",
      ["Promise to give away tons of free stuff to win.", "A budget is a promise, and promises win votes.", "You unveil the record-shattering budget to fanfare. The schemes dazzle and the votes warm, and the fantastical revenue forecasts collapse within months, forcing painful cuts you will own.", { EN: 6, FI: -8, GL: -4 }],
      ["Be honest and only promise what you can afford.", "A budget built on fantasy is a crisis with a launch date.", "You table a realistic budget the numbers actually support. The cabinet grumbles that it lacks fireworks for the campaign, but the lenders trust it and no mid-year reckoning lies in wait.", { GL: 6, FI: 4, EN: -2 }]),
    sx("Sir — You promised to build lots of things, but the money is gone. You can just announce more fake projects to look good, or quietly finish the old ones.",
      ["Announce more fake projects to look good.", "A ribbon cut is worth more than a road finished.", "You keep launching glittering new schemes over the unfinished ones. The headlines flow, the backlog of half-built promises grows, and the public learns that an announcement here rarely becomes a thing.", { FA: 2, EN: -6, FI: -2 }],
      ["Finish what you started and don't make new promises.", "A promise kept quietly beats ten announced loudly.", "You stop the announcement treadmill and fund the existing commitments to completion. There are fewer ribbons to cut, but the schools, roads, and clinics already promised actually get built.", { EN: 8, GL: 2, FI: -4 }])),
];
