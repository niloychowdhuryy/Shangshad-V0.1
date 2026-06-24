// RESOURCES — Resources Ministry (Bashundhara). Primary metric: RE.
// Real issues: the Rampal coal plant beside the Sundarbans, LNG import
// dependence, the cross-border Adani power contract, quick-rental 'capacity
// charge' plants, offshore gas blocks and the maritime boundary, Chittagong
// ship-breaking, arsenic groundwater, river sand mining, solar transition.
const sx = (prompt, left, right) => ({ prompt, left, right });
const ax = (speaker, portrait, tags, ...stages) => ({ speaker, portrait, tags, stages });

export const RESOURCES = [
  // ── Rampal & the Sundarbans ─────────────────────────────────────────────────
  ax("Power Development Chairman", "official", ["coal", "sundarbans", "energy"],
    sx("Dear Sir — A giant, dirty power plant is ready to turn on right next to a famous, beautiful forest. People are protesting.",
      ["Turn on the dirty power plant for electricity.", "The grid cannot run on heritage.", "The lights brighten across three divisions. The forest scientists warn the ash and warm water will gnaw at the mangroves for decades.", { RE: 12, FI: 6, EN: -14, GL: -6 }],
      ["Keep it turned off and find clean energy instead.", "The Sundarbans is a wall against the sea; I will not breach it.", "You eat the stranded cost and convert the plan. Environmentalists rejoice; the power-hungry industrial belt grumbles in the dark.", { EN: 12, GL: 8, FI: -10, RE: -4 }]),
    sx("Honourable leader! The dirty power plant is killing the fish and the forest. You can buy expensive filters to stop the pollution.",
      ["Buy the expensive filters to save the forest.", "If it must run, it must not poison.", "The retrofit eases the worst harm and saves the heritage listing. The treasury winces; the fisherfolk cautiously return to the water.", { EN: 8, GL: 6, RE: 4, FI: -10 }],
      ["Pretend the pollution isn't real to save money.", "I will not be lectured by foreign committees.", "You stonewall and save the money. The heritage status is downgraded, the fisheries keep declining, and the issue becomes a global black mark.", { FI: 4, RE: 6, EN: -12, GL: -10 }])),

  // ── The cross-border power contract ─────────────────────────────────────────
  ax("Cross-Border Power Negotiator", "official", ["adani-style", "import", "tariff"],
    sx("Cross-Border Power Negotiator reports: A big company from another country wants to sell you electricity, but the rules are very unfair and will trap you for 25 years.",
      ["Sign the unfair deal to get the electricity.", "Reliable power now beats a fair price later.", "The grid steadies and a powerful neighbour is pleased. The dollar-indexed bill balloons as the taka falls, draining reserves for decades.", { RE: 10, GL: 6, FI: -10, EN: -4 }],
      ["Say no to the bad deal and walk away.", "I will not chain the grid to a quarter-century of someone else's prices.", "You demand fairer terms. The seller threatens to pull out and the supply gap looms — but you keep the country off a 25-year leash.", { FI: 4, RE: -8, GL: -6, MI: 4 }])),

  // ── Quick-rental capacity charges ───────────────────────────────────────────
  ax("Independent Power Producers' Lobby", "fixer", ["capacity-charge", "rental", "subsidy"],
    sx("A note from the Energy Ministry reads: The government is paying rich friends billions of dollars for power plants that don't even make electricity.",
      ["Keep paying your friends for doing nothing.", "These owners fund the machine that funds me.", "The donors are delighted and the idle plants keep cashing cheques. The public learns it pays a king's ransom for power that never flows.", { RE: 4, FA: 6, FI: -10, EN: -6 }],
      ["Stop paying them and save the money.", "I will not pay for electrons that do not exist.", "You end the racket and tender competitively. The donors rage and a short-term supply risk appears; the treasury stops haemorrhaging.", { FI: 10, GL: 6, EN: 4, FA: -8 }])),

  // ── Offshore gas & maritime boundary ────────────────────────────────────────
  ax("Petrobangla Exploration Chief", "official", ["gas", "offshore", "maritime"],
    sx("Word from the Energy Ministry, sir — There might be valuable gas deep in your ocean. You can let big foreign companies try to find it fast, but neighbors might get mad.",
      ["Let the foreign companies look for the gas fast.", "Domestic gas is worth a diplomatic frown.", "Rigs move in and the prospect of homegrown gas lifts spirits. The neighbour protests the blocks near the line, chilling relations.", { RE: 12, FI: 6, GL: -8 }],
      ["Go slowly and share the ocean with your neighbors safely.", "Gas under disputed water is gas in a lawsuit.", "You pursue cooperative surveys to keep the peace. The crisis deepens while committees map the seabed, and import bills climb.", { GL: 6, RE: -8, FI: -6 }])),

  // ── Ship-breaking ───────────────────────────────────────────────────────────
  ax("Sitakunda Yard Owner", "fixer", ["shipbreaking", "labour", "toxic"],
    sx("Sitakunda Yard Owner: The beaches where workers break old ships are very dangerous and toxic. You can force them to be safe, but it costs a lot.",
      ["Leave the beaches dangerous and cheap.", "Steel and jobs outrank inspectors' ideals.", "The mills stay fed and the owners loyal. The death toll and the poisoned coastline keep the ugly headlines coming.", { RE: 8, FI: 6, EN: -12, GL: -6 }],
      ["Force them to make the beaches safe and clean.", "A yard that buries a worker a week is a slaughterhouse.", "You phase in safer yards with a transition fund. Costs rise and some yards close, but the deaths fall and the beaches begin to heal.", { EN: 10, GL: 8, FI: -8, RE: -4 }])),

  // ── Arsenic groundwater ─────────────────────────────────────────────────────
  ax("Public Health Hydrologist", "people", ["arsenic", "water", "wells"],
    sx("Sir, a message from the Energy Ministry: The water wells people drink from have natural poison in them, slowly making millions sick. Fixing it costs a lot of money.",
      ["Spend a lot of money to give everyone clean, safe water.", "A nation cannot be poisoned by its own taps.", "You commit real money to deep wells and filtration. It is unglamorous, expensive, and will quietly save a generation of livers and lives.", { EN: 12, RE: 4, FI: -10 }],
      ["Just hand out cheap filters and forget about it.", "We have louder crises and thinner budgets.", "A token filter scheme lets you claim action for little cost. The cancers and lesions keep spreading where the cameras never go.", { FI: 4, RE: 4, EN: -10 }])),

  // ── River sand mining ───────────────────────────────────────────────────────
  ax("Riverbank Erosion Officer", "official", ["sand-mining", "rivers", "erosion"],
    sx("Bad gangs are digging up too much sand from the river, which makes the land collapse and destroys villages. What are your orders, sir?",
      ["Let them keep digging so builders have sand.", "Cement needs sand, and the party needs the strongmen.", "Construction roars and the local bosses stay loyal. Each monsoon the rivers take more homes, and the displaced have your name to curse.", { RE: 6, FA: 4, EN: -10, FI: 4 }],
      ["Stop the gangs and protect the villages.", "A bridge in the river is no one's foundation.", "You move against the sand mafias. Construction costs rise and a few party bosses turn hostile; the riverbanks, and the villages on them, hold.", { EN: 10, GL: 4, RE: -4, FA: -6 }])),

  // ── Solar transition ────────────────────────────────────────────────────────
  ax("Renewables Director", "official", ["solar", "transition", "land"],
    sx("Renewables Director awaits your word. You can get cheap money to build giant solar panels, but they take up the good dirt needed to grow food.",
      ["Put the solar panels on the good farming dirt.", "Clean power now; we will import the rice.", "The grid greens fast on concessional money. Displaced farmers and a thinner harvest trade one dependency for another.", { RE: 8, GL: 6, EN: 4, FI: -4 }],
      ["Put the solar panels on roofs instead to save the farms.", "We will not pave our rice fields to please donors.", "You back distributed and floating arrays — slower, dearer per watt, but no farmer loses their field and the food map stays intact.", { EN: 8, RE: 4, FI: -8, GL: 4 }])),

  // ── BESPOKE INSTALMENT — real energy & resource dilemmas ────────────────────

  ax("Phulbari Coalfield Director", "official", ["coal", "open-pit", "displacement"],
    sx("Sir! A company wants to dig a giant coal mine, but they have to destroy many farms and homes to do it.",
      ["Let them destroy the farms to dig the giant mine.", "The seam could power the nation for decades.", "Coal and investment flow north. Whole villages are cleared, the aquifer sinks, and the old protest reignites with funerals behind it.", { RE: 12, FI: 8, EN: -14, GL: -6 }],
      ["Say no to the giant mine to protect the farms.", "I will not unhouse the breadbasket for coal.", "You kill the project and honour the dead of the old protests. The energy stays underground and the import bill stays high.", { EN: 12, FA: 4, RE: -8, FI: -6 }])),

  ax("LNG Terminal Operator", "official", ["lng", "gas", "spot-market"],
    sx("Mr. Prime Minister, sir! The gas you buy from other countries just got super expensive. You can keep buying it, or let the lights go out sometimes.",
      ["Keep buying the gas even though it is super expensive.", "Lights and looms cannot wait for cheap gas.", "The grid holds through the crunch. The import bill devours dollars the reserves can scarcely spare.", { RE: 10, EN: 4, FI: -12 }],
      ["Stop buying it and let the power turn off sometimes.", "I will not bankrupt us to keep every light on.", "You cut industrial gas and load-shed by schedule. Factories idle and tempers fray, but the dollars are saved.", { FI: 6, RE: -6, EN: -8 }])),

  ax("Power Grid Chief", "official", ["grid", "system-loss", "theft"],
    sx("Your Excellency! People are stealing a lot of the country's electricity, and the meter checkers are helping them.",
      ["Stop the stealing by making everyone use prepaid cards.", "Pay for the power you burn.", "Losses fall and revenue rises sharply. The linemen's union and the freeloading connections — some politically wired — push back hard.", { RE: 8, FI: 8, EN: -4, FA: -4 }],
      ["Ignore it and let them keep stealing.", "Do not pick a fight with every substation.", "The pilferage continues and the utilities stay broke. The honest customer subsidises the hook on the next pole.", { FA: 4, RE: -6, FI: -6 }])),

  ax("Industrial Gas Board", "fixer", ["gas", "tariff", "industry"],
    sx("Dear Sir — Rich factory owners pay almost nothing for their gas. You can make them pay full price, but they will be angry.",
      ["Make the factory owners pay full price.", "Subsidised gas is a fire we cannot feed.", "The utilities can finally invest in new supply. The owners howl, some mills close, and your donor base cools.", { RE: 8, FI: 6, EN: -6, FA: -6 }],
      ["Let them keep paying almost nothing.", "Cheap gas keeps the looms turning.", "The factories stay competitive on cheap energy. The gas sector stays starved of the cash to find more of it.", { FA: 6, EN: 4, RE: -8, FI: -6 }])),

  ax("Hilsa Fishery Officer", "people", ["fishery", "hilsa", "ban"],
    sx("Honourable leader! The country's favorite fish are almost all gone. You need to stop people from fishing for two months so the babies can grow, but the fishers will be hungry.",
      ["Stop all fishing to save the fish.", "No fish tomorrow if we take them all today.", "Stocks rebound within seasons and the catch later booms. For two months the fishing villages go hungry and angry.", { RE: 10, EN: -6, FI: -4 }],
      ["Let them fish a little so they don't starve.", "I will not starve a million families now.", "The boats stay out and the families eat this season. The stock thins further toward a collapse that feeds no one.", { EN: 6, RE: -8, FA: 4 }])),

  ax("Bhola Gas Survey Lead", "official", ["gas", "onshore", "exploration"],
    sx("Bhola Gas Survey Lead reports: There is gas under a beautiful nature island. Big companies want to dig it up fast, but it might ruin the island.",
      ["Let them dig it up fast.", "Homegrown gas now eases everything.", "Domestic gas flows sooner and the import bill eases. The pipeline scars the wetlands and the ecologists raise the alarm.", { RE: 10, FI: 6, EN: -8 }],
      ["Dig very slowly and carefully to protect the island.", "Our own gas, on our own careful terms.", "A national company develops it gently over years. The relief is slower; the wetlands and sovereignty are spared.", { RE: 4, EN: 4, FI: -6, GL: -4 }])),

  ax("Heavy Minerals Concessionaire", "fixer", ["minerals", "sand", "coast"],
    sx("A note from the Energy Ministry reads: A company will pay you to dig up the beautiful tourist beaches to find rare rocks. It will ruin the beach for turtles and tourists.",
      ["Let them dig up the beach for money.", "Wealth lies in the sand we walk on.", "Mineral royalties flow into the treasury. The beaches are gouged, the tourism dwindles, and the turtles vanish.", { RE: 8, FI: 8, EN: -12, GL: -4 }],
      ["Protect the beach and say no to the company.", "Some sand is worth more left lying.", "You keep the beaches whole for tourism and turtles. The mineral fortune stays buried and the miner walks.", { EN: 10, GL: 4, RE: -6, FI: -6 }])),

  ax("Urea Plant Manager", "official", ["fertiliser", "gas-allocation", "agriculture"],
    sx("Word from the Energy Ministry, sir — You only have enough gas to make plant food for farmers OR to keep the lights on in the city. You must choose one.",
      ["Use the gas to make plant food for farmers.", "Cheap urea is cheap rice is calm.", "Domestic urea keeps farmers and food prices steady. The power sector, short of that gas, load-sheds the cities.", { EN: 8, RE: 4, FI: -4 }],
      ["Use the gas to keep the city lights on.", "A dark city is a dangerous city.", "The grid stays lit through peak demand. Fertiliser output drops, prices rise, and the villages feel the pinch.", { RE: 6, MI: 4, EN: -8 }])),

  ax("Irrigation Power Officer", "official", ["irrigation", "subsidy", "groundwater"],
    sx("Irrigation Power Officer: Farmers get nearly free electricity to pump water, but they are wasting the water and costing you money.",
      ["Charge the farmers for electricity so they stop wasting it.", "Free power drains the water and the treasury.", "Pumping grows efficient and the aquifer's fall slows. Farmers, hit with new bills, send their anger up the line.", { RE: 8, FI: 6, EN: -8, FA: -4 }],
      ["Let the farmers keep using free electricity.", "The dry-season crop must not fail.", "The harvest is secure and the farmers content. The water table keeps dropping and the subsidy keeps bleeding.", { EN: 6, FA: 4, RE: -8, FI: -6 }])),

  ax("Waste-to-Energy Promoter", "official", ["waste", "incineration", "power"],
    sx("Sir, a message from the Energy Ministry: A company wants to burn the city's trash to make power, but the smoke is bad and it takes jobs from poor trash-sorters.",
      ["Let them burn the trash to make power.", "Turn the garbage mountains into megawatts.", "The dumps shrink and the grid gains power. The air near the plants worsens and the waste-pickers lose their livelihood.", { RE: 8, FI: 4, EN: -8 }],
      ["Help the poor workers sort and recycle the trash instead.", "The pickers are a workforce, not a problem.", "You formalise recycling and protect the pickers' living. Less spectacular than a power plant, and the dumps shrink slower.", { EN: 8, RE: -4, FI: -6 }])),

  ax("Rooppur Waste Officer", "official", ["nuclear", "waste", "rooppur"],
    sx("Your new power plant makes dangerous, glowing trash. Russia will take it away if you pay them, or you can try to store it safely yourself. What are your orders, sir?",
      ["Pay Russia to take the dangerous trash away.", "Let the builder keep its poison.", "The spent fuel leaves on Russian terms. The cost is steep and the dependency on Moscow deepens with each cask.", { RE: 4, GL: -6, FI: -6 }],
      ["Build a place to hide the dangerous trash yourself.", "A nuclear nation must handle its own ash.", "You commit to a homegrown store. It is a daunting first for your engineers, and a risk if mishandled, but it keeps you sovereign.", { RE: 4, EN: -4, FI: -6, GL: 4 }])),

  ax("Tea Estate Labour Commissioner", "people", ["tea", "labour", "wages"],
    sx("Tea Estate Labour Commissioner awaits your word. The poor people who pick tea leaves want to be paid a fair amount. The rich owners say paying more will ruin their business.",
      ["Force the owners to pay the workers fairly.", "A century of bondage is long enough.", "The pickers win a wage they can live on and bless your name. The estate owners cut output and lobby furiously against you.", { EN: 10, RE: 4, FI: -6, FA: -4 }],
      ["Help the owners keep the pay very low.", "Ruin the gardens and everyone loses.", "Production holds and the owners stay sweet. The pickers return to their lines and their poverty, and remember who chose.", { RE: 6, FI: 4, EN: -10 }])),

  ax("EV Transition Lead", "official", ["ev", "transport", "grid"],
    sx("Sir! Many people are driving electric bikes, which saves gas but breaks the electric grid because it can't handle them all.",
      ["Build more charging stations to help the electric bikes.", "Electrify the streets and cut the fuel bill.", "Fuel imports drop and the air improves. The strained grid groans and the fuel-retail economy contracts painfully.", { RE: 6, EN: 8, FI: 4, FA: -4 }],
      ["Try to stop people from using electric bikes.", "The wires and the pumps cannot take the shock.", "You slow the rollout to spare the grid and the pump owners. Fuel imports stay high and the cleaner future waits.", { RE: 4, FI: -4, EN: -6 }])),

  ax("Forest Conservator", "official", ["forest", "logging", "sundarbans"],
    sx("Mr. Prime Minister, sir! Bad gangs are chopping down the protected forests to sell the wood. You need to give park rangers guns to stop them.",
      ["Give the rangers guns to stop the gangs.", "A felled forest is a flood let in.", "The chainsaws fall silent under pressure and the canopy holds. The timber barons and their official partners turn dangerous.", { EN: 10, RE: 6, GL: 4, FA: -6 }],
      ["Let the gangs keep chopping down the trees.", "Do not war with the timber money.", "The forests keep thinning at the edges. Each lost hectare is one less wall against the next cyclone surge.", { FI: 4, EN: -10, RE: -4 }])),

  ax("Household Gas Connection Board", "people", ["gas", "household", "moratorium"],
    sx("Your Excellency! There isn't enough gas for new homes, but angry people are demanding it because they already paid bribes to get it.",
      ["Give the gas to the homes even though you don't have enough.", "The people were promised the blue flame.", "Families on the list finally get piped gas and cheer. The supply stretches thinner, pressure drops, and industry is starved.", { EN: 8, FA: 4, RE: -8 }],
      ["Say no and tell them to use bottled gas instead.", "I cannot pipe gas we do not have.", "You steer households to cylinders and keep the pipeline for industry. The waiting millions grumble at the broken promise.", { RE: 6, FI: -4, EN: -6 }])),

  ax("Renewables Target Auditor", "official", ["renewables", "targets", "credibility"],
    sx("Dear Sir — You promised the world you would use clean energy, but you lied and didn't build any.",
      ["Quietly change your promise so you don't look bad.", "A missed pledge is worse than a modest one.", "You revise the goal down before you miss it. The climate world notes the retreat and your green credibility dims.", { RE: 4, FI: 4, GL: -6, EN: -4 }],
      ["Spend a lot of money right now to build the clean energy.", "I will meet the promise, not edit it.", "You commit serious money to solar and wind. The budget strains, but the pledge — and the cleaner grid — start to look real.", { EN: 8, GL: 6, RE: 4, FI: -8 }])),

  ax("Stone Quarry Inspector", "official", ["quarry", "stone", "rivers"],
    sx("Honourable leader! People are illegally breaking stones from the rivers, destroying nature, to build cities.",
      ["Stop them from digging up the rivers.", "A gutted hillside is a landslide waiting.", "You halt the extraction and the rivers begin to settle. Construction-stone prices jump and the local bosses lose a racket and turn hostile.", { EN: 8, RE: 4, FI: -4, FA: -6 }],
      ["Let them keep digging so builders have stones.", "The country is being built; it needs stone.", "Construction roars on cheap stone. The hills slump, the rivers choke, and the strongmen stay loyal and rich.", { RE: 6, FI: 4, EN: -10 }])),

  ax("Cross-Border Power Renegotiator", "official", ["import-power", "tariff", "india"],
    sx("Cross-Border Power Renegotiator reports: The price of electricity you buy from a neighbor has gotten crazy high because of a bad contract.",
      ["Demand they lower the price and fix the contract.", "I will not bleed dollars on a rigged clause.", "You force renegotiation and may claw back terms. The supplier threatens curtailment and a supply gap looms.", { FI: 6, RE: -6, GL: -6 }],
      ["Keep paying the crazy high price to be safe.", "A dark grid costs more than a bad clause.", "The electricity keeps coming uninterrupted. The dollar-indexed bill keeps climbing and draining the reserves.", { RE: 8, GL: 4, FI: -10 }])),

  ax("Coastal Salinity Officer", "people", ["salinity", "agriculture", "shrimp"],
    sx("A note from the Energy Ministry reads: Shrimp farms make a lot of money, but the salty water they use is destroying the land where poor farmers grow rice.",
      ["Stop the shrimp farms to protect the farmers' land.", "Salt money is killing the coast's water.", "You roll back the brine and the soil and wells begin to recover. The shrimp barons — major exporters — lobby and resist.", { EN: 10, RE: 4, FI: -6, FA: -4 }],
      ["Let the shrimp farms grow because they make so much money.", "The dollars from shrimp are real and now.", "Export earnings rise on the back of the brine. The coastal belt's fields and drinking water grow saltier each season.", { FI: 6, RE: 4, EN: -12 }])),

  // ── Rooppur nuclear plant ───────────────────────────────────────────────────
  ax("Atomic Energy Chairman", "official", ["nuclear", "rooppur", "debt"],
    sx("Word from the Energy Ministry, sir — Your big power plant from Russia is almost ready, but the rest of the world says you shouldn't work with Russia right now.",
      ["Turn the plant on anyway, even if the world is mad.", "A finished reactor left cold is the costliest folly.", "The plant comes online and adds clean baseload power. The repayment millstone settles on the budget, and the Russia tie draws cold stares from the West.", { RE: 10, GL: -8, FI: -6 }],
      ["Stop working on the plant until you fix the rules with everyone.", "A debt unexamined is a debt that devours.", "You halt commissioning to renegotiate. The power is delayed and Moscow is irritated, but you claw back better terms and a little distance from the sanctions glare.", { FI: 6, GL: 4, RE: -6 }])),

  // ── Phulbari open-pit coal ──────────────────────────────────────────────────
  ax("Mining Concession Director", "official", ["coal", "phulbari", "displacement"],
    sx("Mining Concession Director: A big company wants to dig a massive hole to find coal. It will ruin the water for farmers and make people very angry.",
      ["Let them dig the giant hole.", "A seam this rich cannot stay buried.", "The contract is signed and the draglines arrive. Villages are marked for clearance, the protests reignite with the memory of the dead, and the region braces for a fight.", { RE: 10, FI: 6, EN: -12, GL: -4 }],
      ["Tell them no, they have to dig underground tunnels instead.", "I will not drown a region to dig a hole.", "You bar the open pit and limit any extraction to less-disruptive methods. The yield is smaller and the company walks, but the farmland and the aquifer survive.", { EN: 10, GL: 4, RE: -6, FI: -4 }])),

  // ── Electricity system loss & theft ─────────────────────────────────────────
  ax("Distribution Utility Chief", "official", ["electricity", "theft", "losses"],
    sx("Sir, a message from the Energy Ministry: People are stealing electricity. You can force everyone to use prepaid cards to stop it, but poor people will struggle.",
      ["Force everyone to use prepaid cards immediately.", "Power given free bankrupts the power.", "The losses fall and the books improve. The poorest, suddenly metered and disconnected, feel the squeeze, and the line workers lose a lucrative racket.", { FI: 8, RE: 6, EN: -8 }],
      ["Add the cards slowly and help the poor people pay.", "A meter that starves a family is a riot in waiting.", "You spread the reform over years with lifeline tariffs. The theft bleeds the utility longer, but no slum erupts over a dark Eid.", { EN: 6, FI: -6, RE: 2 }])),

  // ── Power tariff hike ───────────────────────────────────────────────────────
  ax("Energy Regulator", "official", ["tariff", "subsidy", "cost"],
    sx("Gas is too expensive. You have to raise the price of electricity for your people, or the government will run out of money. What are your orders, sir?",
      ["Raise the price of electricity for everyone.", "Cheap power the state cannot afford is no gift.", "The hike steadies the books and enrages every household and factory. The opposition makes the electricity bill its rallying cry for the season.", { FI: 8, RE: 4, EN: -10 }],
      ["Keep it cheap and let the government lose money.", "I will not light my own funeral pyre with a price rise.", "Prices stay frozen and the public exhales. The subsidy gouges the budget deeper, crowding out the schools and clinics that might have been built.", { EN: 8, FI: -10, RE: -2 }])),

  // ── LNG terminal expansion ──────────────────────────────────────────────────
  ax("Petrobangla Chairman", "official", ["lng", "import", "dependence"],
    sx("Petrobangla Chairman awaits your word. You can buy a giant floating gas tank from other countries to keep the lights on, but the price might jump wildly.",
      ["Buy the giant floating gas tank.", "A cold factory is worse than an expensive one.", "The terminal is contracted and the supply secured. The country's energy now rides the global spot market, and every price spike abroad becomes a crisis at home.", { RE: 8, FI: -8, GL: 2 }],
      ["Don't buy it, and try to find more gas at home instead.", "Imported gas is a habit I cannot afford.", "You delay the terminal and pour money into drilling at home. Winter will be tight and shortages likely, but you refuse to mortgage the grid to a foreign spot price.", { RE: -6, FI: 4, EN: -4 }])),

  // ── National exploration (Bapex) vs IOCs ────────────────────────────────────
  ax("Bapex Managing Director", "official", ["exploration", "gas", "sovereignty"],
    sx("Sir! Your own workers say they can find gas for cheap. Or you can hire foreign companies, who are faster but keep most of the money.",
      ["Hire the foreign companies to do it fast.", "Foreign rigs find gas faster than national pride.", "The majors move in with capital and speed. Gas flows sooner, but the production-sharing terms send the lion's share of the value out of the country.", { RE: 8, FI: 4, GL: 2, EN: -2 }],
      ["Let your own workers do it to save money.", "Gas drawn by our own hands stays in our own pockets.", "You back the national company. Development is slower and riskier, but a strike would belong wholly to the nation, building skill that outlasts any contract.", { RE: -2, FI: -6, EN: 4 }])),

  // ── Barind tract groundwater ────────────────────────────────────────────────
  ax("Irrigation Authority Head", "official", ["groundwater", "irrigation", "drought"],
    sx("Mr. Prime Minister, sir! Farmers are pumping too much water out of the ground to grow rice. Soon the land will turn into a desert.",
      ["Let them keep pumping water to grow rice now.", "A failed harvest topples a government faster than a dry decade.", "The rice keeps coming and the farmers stay calm. The water table sinks another year toward the day the wells suck only dust.", { EN: 4, FI: 2, RE: -10 }],
      ["Stop them from pumping so much, even if the rice dies.", "A region that mines its own water has a deadline.", "You ration the aquifer and push less-thirsty crops. This season's yields dip and the farmers grumble, but the Barind may still have water in a generation.", { RE: 8, EN: -4, FI: -4 }])),

  // ── Tannery pollution relocation ────────────────────────────────────────────
  ax("Environment Inspector", "official", ["tanneries", "pollution", "leather"],
    sx("Your Excellency! Leather factories are dumping poison chemicals right into the river because they didn't finish building their cleaner.",
      ["Let the factories keep running and dumping poison.", "Leather earns dollars the river cannot.", "The exports continue and the chromium flows. A whole river system and the people who drink from it pay the toll, and the unbuilt treatment plant stays a fiction.", { FI: 6, RE: 2, EN: -12 }],
      ["Shut the factories down until they fix their cleaner.", "A river is not a sewer for export earnings.", "You close the estate until it cleans up. Exporters rage and some relocate abroad, but the river gets a chance and the rule finally has teeth.", { EN: 10, RE: 4, FI: -8, GL: 2 }])),

  // ── Deep-sea port (Matarbari/Payra) ─────────────────────────────────────────
  ax("Ports Development Chairman", "official", ["port", "infrastructure", "debt"],
    sx("Dear Sir — Big countries want to build a deep ocean dock for you, but they will want to control you if they do.",
      ["Pick the cheapest big country and let them build it.", "A port now is worth a patron's leash.", "Construction races ahead on foreign money. The port rises fast, and so does the geopolitical debt — the chosen patron now has a foothold on your coast.", { RE: 8, FI: 4, GL: -6 }],
      ["Build it slowly yourself with your own money.", "A harbour bought with strings docks foreign warships.", "You forgo the fast foreign money for a slower, self-funded build. The port is years away, but no rival power gains a berth in your strategic waters.", { GL: 6, RE: -4, FI: -6 }])),

  // ── Jaflong stone quarrying ─────────────────────────────────────────────────
  ax("District Mineral Officer", "official", ["quarrying", "stone", "rivers"],
    sx("Honourable leader! People are illegally breaking stones from the hillsides to build cities. It destroys nature and kills workers when rocks fall.",
      ["Let them keep breaking the stones.", "The cities are built on this stone.", "The aggregate keeps the construction sector cheap and humming. The rivers braid into ruin, the slopes slump, and another pit swallows another crew.", { FI: 6, RE: -4, EN: -10 }],
      ["Send police to stop them completely.", "Stone pulled from a living river kills it.", "You shut the illegal pits and the riverbeds begin to heal. Construction costs tick up and the local mafias lose a fortune, sending their muscle against your officers.", { EN: 8, RE: 6, FI: -6, MI: -2 }])),

  // ── Hilsa fishery ban season ────────────────────────────────────────────────
  ax("Fisheries Director", "people", ["hilsa", "fishing", "livelihoods"],
    sx("Fisheries Director reports: You have to ban fishing while the fish have babies, but this means poor fishing families will have no food for weeks.",
      ["Enforce the strict ban to save the fish.", "A fish that cannot spawn feeds no one next year.", "Patrols keep the nets out of the water and the stocks rebound spectacularly. The fishing families go hungry for the weeks of the ban, and resent every patrol boat.", { RE: 8, EN: -6, FI: 2 }],
      ["Let them fish a little so they don't starve.", "A starving fisherman cannot wait for next season.", "You ease enforcement and the families eat. The catch this season holds, but the spawning falters and next year's nets come up lighter.", { EN: 6, RE: -8, FI: -2 }])),

  // ── Rooftop solar net metering ──────────────────────────────────────────────
  ax("Renewable Energy Adviser", "official", ["solar", "net-metering", "transition"],
    sx("A note from the Energy Ministry reads: You can let people put solar panels on their roofs and sell extra power back to the government. Power companies hate this.",
      ["Side with the power companies and say no to roof panels.", "A grid undercut by a million rooftops collapses.", "You protect the utilities' monopoly and the rooftops stay bare. Fuel imports stay high, and the clean-energy future drifts another few years out of reach.", { FI: 2, RE: -4, EN: -6 }],
      ["Say yes to the roof panels and let people sell power.", "Every rooftop is a power plant I did not have to build.", "You force the grid open to rooftop solar. The utilities howl about lost revenue, but imports ease, the air clears, and a solar industry takes root.", { EN: 8, RE: 6, FI: -4 }])),

  // ── Cross-border grid import ────────────────────────────────────────────────
  ax("Grid Interconnection Officer", "ambassador", ["grid", "import", "regional"],
    sx("Word from the Energy Ministry, sir — You can buy cheap, clean power from a neighbor, but they could shut your lights off easily if they get mad at you.",
      ["Buy the cheap power from the neighbor.", "Cheap clean power outweighs a distant risk.", "The hydropower flows in and bills ease. Your grid now leans on a neighbour's goodwill, a switch in a foreign capital that could one day darken your cities.", { RE: 8, FI: 4, GL: 2, MI: -4 }],
      ["Don't buy it, and build your own power plants safely.", "A switch in another's hand is a noose in waiting.", "You forgo the cheap import for self-reliance. Power stays costlier and dirtier for now, but no foreign hand rests on your grid's master switch.", { MI: 4, RE: -4, FI: -4 }])),

  // ── Fertilizer gas feedstock ────────────────────────────────────────────────
  ax("Agriculture Minister", "official", ["fertilizer", "gas", "food"],
    sx("Agriculture Minister: You only have enough gas to make plant food for the farms OR to keep the city's power on.",
      ["Give the gas to the farms for food.", "Cheap urea is cheap rice is a calm country.", "The farmers get their subsidised urea and the harvest holds. The power sector starves of the diverted gas, and load-shedding creeps back into the cities.", { EN: 6, FI: -4, RE: -4 }],
      ["Give the gas to the city for power.", "A dark grid stops a country faster than dear fertilizer.", "You redirect the gas to the turbines and the lights stay on. Fertilizer prices climb, farmers protest, and the next harvest carries a question mark.", { RE: 6, EN: -6, FI: 2 }])),

  // ── Capacity-charge indemnity renewal ───────────────────────────────────────
  ax("Power Cell Director", "fixer", ["capacity-charge", "indemnity", "rentals"],
    sx("Sir, a message from the Energy Ministry: There is a bad rule that lets you give big contracts to your rich friends without checking if it's a fair price.",
      ["Keep the bad rule so your friends stay rich.", "My donors' plants must keep their guarantees.", "The law is extended and the capacity charges keep flowing to idle plants. Your rental-baron donors are delighted, and the public keeps paying for power it never receives.", { FI: -4, RE: 2, EN: -8, FA: 4 }],
      ["Get rid of the bad rule to make things fair.", "Paying for electricity that never comes is a scandal I will end.", "You let the shield expire and open the sector to tenders and lawsuits. The rental barons rage and threaten, but the rip-off capacity charges finally face daylight.", { EN: 8, FI: 6, RE: -2, FA: -4 }])),

  // ── Brick kilns and topsoil ─────────────────────────────────────────────────
  ax("Environment Inspector", "people", ["brick-kilns", "topsoil", "air"],
    sx("Dirty brick factories are making the city air poisonous. You can shut them down, but thousands of poor workers will lose their jobs. What are your orders, sir?",
      ["Leave the dirty brick factories open for the jobs.", "A million jobs outweigh a season of smog.", "The kilns keep firing and the workers keep their wages. The capital's winter air becomes the world's worst, and the cropland loses its skin one kiln at a time.", { FI: 4, EN: -12, RE: -4 }],
      ["Force them to be clean or shut them down.", "Bricks baked from topsoil and smog cost more than they earn.", "You mandate cleaner zigzag technology and shut the worst offenders. Some kilns close and workers are displaced, but the air and the farmland get a reprieve.", { EN: 10, RE: 6, FI: -6 }])),

  // ── Marine trawler overfishing ──────────────────────────────────────────────
  ax("Coast Guard Commander", "general", ["fishing", "trawlers", "maritime"],
    sx("Coast Guard Commander awaits your word. Giant ships from other countries are stealing all the fish from your ocean.",
      ["Look away because the giant ships pay you secret fees.", "The fees are certain; the patrols are expensive.", "The foreign trawlers keep dragging your waters and the fees fill a ledger. The small fishers' nets come up empty, and the fishery heads toward collapse.", { FI: 6, RE: -8, EN: -6 }],
      ["Send your guards to chase the giant ships away.", "A sea swept bare by foreigners feeds no one here.", "You fund the patrols and drive the foreign fleets out. It costs the navy dearly and angers the licence-buyers' governments, but the stocks and the artisanal fishers recover.", { RE: 8, EN: 6, FI: -6, GL: -2 }])),

  // ── E-waste and recycling ───────────────────────────────────────────────────
  ax("Industries Secretary", "official", ["e-waste", "recycling", "toxics"],
    sx("Sir! Other countries are dumping their broken computers and phones here. Poor kids are taking them apart with their bare hands in toxic dirt.",
      ["Let them keep taking apart the toxic garbage.", "Scrap is scrap, and it employs the poor.", "The backyard yards keep smelting circuit boards over open fires. The lead and cadmium seep into the children who work them, and the world keeps shipping its poison here.", { FI: 4, RE: -2, EN: -10 }],
      ["Make strict rules so it is done safely in real factories.", "I will not let the world poison our children for scrap.", "You ban the backyard trade and license proper recyclers. The cheap scrap economy contracts, but the toxic exposure falls and a real industry begins to form.", { EN: 8, RE: 4, FI: -4, GL: 2 }])),

  // ── Sundarbans community livelihoods ────────────────────────────────────────
  ax("Forest Conservator", "relief", ["sundarbans", "forest", "livelihoods"],
    sx("Mr. Prime Minister, sir! To save the big forest, you have to kick out the poor villagers who collect honey and catch fish there to survive.",
      ["Kick the poor villagers out to save the forest.", "A forest emptied of axes survives.", "You evict the harvesters and the mangroves recover. Generations of forest families lose their only livelihood, and resentment festers along the forest's edge.", { RE: 8, EN: -6, FA: -2 }],
      ["Let the villagers stay and gather a little bit of food.", "A forest is kept by those who live in it, not those who fence it.", "You license sustainable, limited harvesting and bring the communities into protection. The forest thins more slowly, and its people become its guardians instead of its enemies.", { EN: 6, RE: 2, FI: -2 }])),

  // ── Jute revival ────────────────────────────────────────────────────────────
  ax("Jute Ministry Secretary", "official", ["jute", "industry", "heritage"],
    sx("Your Excellency! Old government factories are losing money every day. You can shut them down, or pay to fix them up even though it's risky.",
      ["Shut down the losing factories.", "Nostalgia is not a balance sheet.", "You close the mills and stem the losses. Tens of thousands of workers and a piece of national identity are cast off, and the jute towns turn against you.", { FI: 8, RE: 2, EN: -8 }],
      ["Pay to fix them up and keep trying.", "The golden fibre may yet be gold again.", "You fund a modernisation push toward jute textiles and bioplastics. It is a costly gamble, but the workers keep their looms and a heritage industry gets one more chance.", { EN: 6, RE: 4, FI: -8 }])),

  // ── Payra coal terminal ─────────────────────────────────────────────────────
  ax("Coal Import Coordinator", "official", ["coal", "import", "logistics"],
    sx("Dear Sir — Your power plants need dirty coal to run. You can build a giant dock just for coal, which means you'll be stuck using dirty coal for years.",
      ["Build the giant coal dock.", "My plants are built; they must be fed.", "The terminal secures decades of cheap coal for the plants you have. You also build infrastructure the world is racing to abandon, a stranded asset waiting to happen.", { RE: 8, FI: 2, EN: -10, GL: -4 }],
      ["Say no and start moving away from dirty coal.", "A terminal for a dying fuel is a tomb I am paying to dig.", "You scrap the terminal and begin planning coal's phase-out. The existing plants run short-fed and costly, but you stop sinking money into a stranded future.", { EN: 8, GL: 4, RE: -6, FI: -2 }])),

  // ── Capital water and sewerage overhaul ─────────────────────────────────────
  ax("WASA Managing Director", "people", ["water", "dhaka", "pollution"],
    sx("Honourable leader! The city's water is so dirty everyone has to boil it before drinking. Fixing the pipes will cost a huge amount of money.",
      ["Keep the old, dirty pipes and let people boil water.", "A full overhaul is a budget I do not have.", "You make do with repairs and the taps keep running brown. The dead rivers stay dead, the bottled-water bills crush the poor, and waterborne disease simmers on.", { FI: 4, EN: -8, RE: -4 }],
      ["Pay the huge amount of money to completely fix the pipes.", "A capital that cannot drink its own water is failing.", "You commit to the costly rebuild of treatment and sewers. The budget groans for years, but a generation may finally drink from the tap without fear.", { EN: 10, RE: 6, FI: -10 }])),

  // ── Magurchhara-style gas blowout ───────────────────────────────────────────
  ax("Petrobangla Chairman", "official", ["gas", "blowout", "compensation"],
    sx("Petrobangla Chairman reports: A foreign company's gas well blew up, burning a forest and lots of gas. They offer a tiny bit of money and say it's not their fault.",
      ["Take the tiny bit of money quietly.", "A long fight scares off the next investor.", "You accept the pittance and sign away the claim. The reserve and the forest are gone for nothing, and every future operator learns that recklessness here is cheap.", { FI: 2, GL: 2, RE: -8, EN: -6 }],
      ["Take them to court and demand all the money to fix the forest.", "A burned reserve is a debt the burner will pay.", "You sue for the true value of the lost gas and the scorched land. The investor climate cools and the case drags, but you set a precedent that negligence here has a price.", { RE: 4, EN: 4, FI: -2, GL: -4 }])),

  // ── Household gas connection moratorium ─────────────────────────────────────
  ax("Energy Secretary", "people", ["gas", "households", "rationing"],
    sx("A note from the Energy Ministry reads: Gas is running out, so you stopped giving gas pipes to new homes. Millions of angry people are waiting.",
      ["Give gas to the homes to make people happy.", "A promised connection denied is a vote lost.", "The taps open for the waiting millions and the goodwill flows. The reserve drains faster toward the day the gas simply runs out, for homes and factories alike.", { EN: 8, RE: -10, FI: -2 }],
      ["Keep the gas locked up and save it for factories.", "Gas burned in a stove builds nothing; gas in a factory builds a country.", "You keep the freeze and steer the gas to industry and power. The waiting millions seethe, but the reserve stretches further and the factories keep running.", { RE: 6, FI: 4, EN: -8 }])),

  // ── Karnaphuli tunnel / mega-infra toll ─────────────────────────────────────
  ax("Bridges Authority Chairman", "official", ["infrastructure", "toll", "debt"],
    sx("Word from the Energy Ministry, sir — A cool new river tunnel was built with borrowed money, but hardly anyone drives through it.",
      ["Charge a high price to drive through so you can pay back the loan.", "The users of the tunnel should pay for it.", "The tolls bite and the debt is serviced. Hauliers reroute to avoid the cost, traffic thins further, and the showpiece becomes a monument to optimistic forecasts.", { FI: 6, RE: 2, EN: -6 }],
      ["Keep the price low and let the government lose money.", "A tunnel no one can afford to use is a tomb.", "You keep the toll cheap and the traffic builds. The debt sits unpaid on the public ledger, a quiet weight that some future budget will have to carry.", { EN: 6, RE: 2, FI: -8 }])),

  // ── EV and charging transition ──────────────────────────────────────────────
  ax("Transport Electrification Adviser", "official", ["ev", "transport", "imports"],
    sx("Transport Electrification Adviser: Buying gas from other countries costs too much money. You can help people buy electric cars instead, but it will upset the gas stations and use a lot of electricity.",
      ["Push hard to get everyone electric cars.", "Every electric mile is a dollar that stays home.", "Incentives and chargers roll out and the EVs come. The fuel-import bill begins its long decline, while the grid strains and the petrol-pump economy starts to wither.", { RE: 6, FI: 4, EN: 4, GL: 2 }],
      ["Keep using regular gas cars.", "A grid this fragile cannot charge a nation's cars.", "You hold off and keep the petrol economy intact. The fuel-import bill keeps bleeding dollars, but the strained grid is spared and the pump-workers keep their trade.", { FI: -4, RE: -4, EN: -2 }])),

  // ── Coastal wind power ──────────────────────────────────────────────────────
  ax("Renewable Energy Adviser", "official", ["wind", "coast", "renewables"],
    sx("Sir, a message from the Energy Ministry: A foreign company wants to build giant windmills on the beach for clean power. But this will take up the land where fishermen and farmers work.",
      ["Say yes and build the windmills on the beach.", "Wind is the one fuel no one can embargo.", "The turbines rise and clean power flows. The fishers and salt-farmers lose ground and the tariff is steep, but the country gains a fuel free of import and emission.", { RE: 6, EN: 4, FI: -4 }],
      ["Say no to protect the fishermen and farmers.", "A green plant on stolen land is not clean.", "You refuse to displace the coastal livelihoods for the turbines. The clean-power gain is forgone, but the fishers and salt-farmers keep the shore they have always worked.", { EN: 4, RE: -4, FI: 2 }])),

  // ── Char land allocation ────────────────────────────────────────────────────
  ax("Land Reform Commissioner", "people", ["char-land", "landless", "grabbing"],
    sx("New mud islands just popped up in the river, and they belong to the government. What are your orders, sir?",
      ["Let rich bullies steal the islands.", "The chars are already governed by those who hold them.", "The mastans get their titles and the landless become their tenants. A vast tract of fertile new land entrenches the very feudalism land reform was meant to end.", { FI: 2, RE: 2, EN: -8, MI: 2 }],
      ["Give the islands to poor, homeless farmers.", "New land should make new owners, not new landlords.", "You title the chars to the families who farm them. The strongmen lose a prize and send their thugs, but thousands of landless households gain ground of their own.", { EN: 10, RE: 4, MI: -4, FA: -2 }])),

  // ── Haor wetland protection ─────────────────────────────────────────────────
  ax("Wetlands Director", "relief", ["haor", "wetland", "flash-flood"],
    sx("Wetlands Director awaits your word. Farmers are building walls in the big wetlands to grow more food. But the walls destroy nature and hurt the birds and fish.",
      ["Let them build walls to grow more food.", "More crops from the same water is progress.", "The dikes go up and the rice doubles for a while. The fishery crashes, the birds vanish, and one bad flash-flood now drowns a crop the wetland used to absorb.", { FI: 4, RE: -6, EN: -8 }],
      ["Stop them to protect nature and the animals.", "A wetland drained is a famine deferred.", "You halt the conversion and protect the flood-pulse. The single-crop yields stay modest, but the fishery, the birds, and the wetland's flood defence all survive.", { EN: 8, RE: 6, FI: -4 }])),

  // ── St Martin's coral island ────────────────────────────────────────────────
  ax("Tourism Board Chair", "official", ["coral", "tourism", "island"],
    sx("Sir! Your beautiful coral island is being ruined by too many tourists and their trash.",
      ["Let everyone keep coming for the money.", "The island earns its keep in tourist taka.", "The hotels stay and the boats keep coming. The reef bleaches and breaks under the crowds, and the one coral ecosystem in the country slides toward death.", { FI: 6, RE: -4, EN: -8 }],
      ["Stop some people from visiting and tear down bad hotels.", "A dead reef draws no one.", "You ration access and raze the illegal hotels. The local tourist economy takes a blow and the resort-owners sue, but the reef gets a fighting chance to recover.", { EN: 8, RE: 6, FI: -6 }])),

  // ── National plastics ban ───────────────────────────────────────────────────
  ax("Environment Secretary", "official", ["plastic", "pollution", "ban"],
    sx("Mr. Prime Minister, sir! Plastic trash is clogging up all the rivers and making the city flood. A helper wants to ban plastic bags completely, but plastic makers will be very angry.",
      ["Don't ban the plastic bags yet.", "A ban that kills an industry kills jobs and donors.", "You spare the plastics industry and the bags keep flowing. The drains clog, the floods worsen, and the microplastics work their way into the fish and the people.", { FI: 4, FA: 2, EN: -10, RE: -4 }],
      ["Ban the plastic bags and force people to use safe cloth bags.", "A drain choked with plastic drowns a city.", "You ban the worst single-use plastics and revive the jute-bag trade. The plastics lobby rages and some jobs vanish, but the drains clear and a jute revival stirs.", { EN: 10, RE: 6, FI: -6, FA: -2 }])),

  // ── Heavy mineral sands ─────────────────────────────────────────────────────
  ax("Geological Survey Director", "official", ["minerals", "sands", "mining"],
    sx("Your Excellency! The beaches have special sand that a company wants to dig up for money. But digging it up will destroy the beach and the turtle nests.",
      ["Let them dig up the beach for money.", "Rare earths in the sand are riches wasted unmined.", "The miners move in and the export earnings begin. The dunes that blunt the cyclones are carried away by the truckload, and the coast loses its natural armour.", { FI: 8, RE: 6, EN: -10 }],
      ["Say no and protect the beach and turtles.", "Dunes that stop a cyclone are worth more than zircon.", "You refuse the concession. The mineral wealth stays buried, but the dunes keep standing between the storms and the people behind them.", { EN: 8, RE: -2, FI: -4 }])),

  // ── Embankment and polder repair ────────────────────────────────────────────
  ax("Water Development Chief", "people", ["embankment", "polder", "flood"],
    sx("Dear Sir — The walls holding the ocean back are old and breaking. A big storm could drown everyone.",
      ["Just patch the broken spots for now.", "A full rebuild is a budget I will spend on the next disaster.", "You fund only the emergency repairs. Each cyclone breaches the weak embankments anew, salting fields and drowning homes the rebuild would have saved.", { FI: 4, RE: -4, EN: -8 }],
      ["Spend a lot of money to completely rebuild the walls.", "An embankment is cheap next to the district it saves.", "You commit to rebuilding the polders properly. The cost is huge and slow to show, but a coastal district gains a real wall against the rising, angrier sea.", { EN: 10, RE: 6, FI: -10 }])),

  // ── Cement limestone import dependence ──────────────────────────────────────
  ax("Industries Secretary", "official", ["cement", "limestone", "import"],
    sx("Honourable leader! Builders are buying rocks from other countries. You can blast your own hills to get rocks instead, but those hills are sacred to native people.",
      ["Blast the sacred hills for rocks.", "A boom this big cannot run on imports forever.", "The quarry opens and the cement-import bill eases. The sacred range is blasted apart, the indigenous communities are displaced, and another grievance hardens in the hills.", { FI: 6, RE: 6, EN: -10 }],
      ["Keep buying rocks from other countries.", "Some hills are worth more standing than crushed.", "You leave the range intact and keep paying for imports. The dollar drain continues, but the forest and the communities who revere it are spared the dynamite.", { EN: 8, RE: -4, FI: -4 }])),

  // ── Antibiotic-laden fish feed ──────────────────────────────────────────────
  ax("Fisheries Director", "doctor", ["aquaculture", "antibiotics", "exports"],
    sx("Fisheries Director reports: Fish farmers are giving their fish illegal medicine. Other countries won't buy the fish if they find out.",
      ["Pretend you didn't notice and hope no one finds out.", "A crackdown now empties a thousand ponds.", "You keep the exports flowing on a wink. One bad batch detected abroad triggers a blanket ban, and a whole export sector collapses overnight on a gamble.", { FI: 4, RE: 2, EN: -6, GL: -4 }],
      ["Stop the farmers from using the illegal medicine.", "An export caught dirty loses the whole market.", "You enforce the residue limits hard. The farmers howl at the cost and the disease losses, but the exports clear European labs and the market stays open.", { GL: 6, EN: 4, FI: -4, RE: 2 }])),

  // ── Capital dredging of rivers ──────────────────────────────────────────────
  ax("Water Development Chief", "official", ["dredging", "rivers", "navigation"],
    sx("A note from the Energy Ministry reads: The rivers are full of mud and big boats are getting stuck. You can dig the mud out fast and dump it anywhere, or do it carefully so it doesn't hurt the fish.",
      ["Dig fast and dump the mud anywhere.", "Open rivers move a nation; tidy disposal can wait.", "The channels reopen and the cargo flows again. The carelessly dumped spoil buries floodplains and chokes fisheries, trading one waterway's life for another's.", { RE: 6, FI: 4, EN: -8 }],
      ["Dig carefully so you don't hurt the fish.", "A river reopened by ruining another is no gain.", "You dredge with proper spoil management and floodplain protection. It is slower and dearer, but the rivers reopen without killing the wetlands beside them.", { RE: 6, EN: 4, FI: -6 }])),

  // ── Offshore gas bidding round ──────────────────────────────────────────────
  ax("Petrobangla Chairman", "ambassador", ["offshore", "gas", "bidding"],
    sx("Word from the Energy Ministry, sir — Big companies want to dig for gas deep in your ocean. They want an easy deal where they keep most of the money.",
      ["Give them an easy deal so they start working fast.", "Gas undiscovered earns nothing; bring the rigs.", "The sweet terms draw the majors and the drilling begins. Gas may flow within years, but the low royalties mean the nation pockets a thin slice of its own seabed.", { RE: 8, GL: 4, FI: -2 }],
      ["Demand a fair share for your country.", "Our seabed, our terms.", "You hold out for higher royalties and faster work commitments. Some bidders walk and exploration slows, but any gas found will pay the nation what it is worth.", { FI: 4, RE: -4, GL: -2 }])),

  // ── Salt farmers vs industrial salt ─────────────────────────────────────────
  ax("Commerce Secretary", "people", ["salt", "farmers", "import"],
    sx("Commerce Secretary: The price of salt is too low, and your poor salt farmers are going broke. Other countries sell it even cheaper.",
      ["Let the cheap salt in from other countries.", "Industry runs on the cheapest input.", "The factories get their cheap salt and the lobby is pleased. The coastal salt-farmers, undercut to ruin, abandon the pans, and a coastal livelihood dies out.", { FI: 4, RE: -2, EN: -8 }],
      ["Ban the cheap salt to protect your poor farmers.", "A coast of ruined salt-pans is a coast of empty hands.", "You shut out the foreign salt and prop up the local price. Industry grumbles at the cost, but the salt-farmers keep their pans and their precarious living.", { EN: 8, RE: 2, FI: -4 }])),

  // ── Forest plantation monoculture ───────────────────────────────────────────
  ax("Forest Conservator", "official", ["forest", "plantation", "biodiversity"],
    sx("Sir, a message from the Energy Ministry: You need to plant more trees. You can plant cheap, fast-growing trees that hurt the soil, or slow, natural trees that help animals.",
      ["Plant the cheap, fast trees.", "A number on a chart is a number won.", "The hills go green with acacia and the coverage statistics soar. Beneath the uniform canopy nothing lives, and the water table drops under the thirsty exotics.", { RE: 4, FI: 2, EN: -6 }],
      ["Plant the slow, natural trees.", "A plantation is not a forest.", "You fund mixed native restoration. The 'green coverage' rises slowly and the targets slip, but a real forest — water, wildlife, and all — begins to return.", { EN: 8, RE: 4, FI: -4 }])),

  // ── New gas discovery windfall ──────────────────────────────────────────────
  ax("Petrobangla Chairman", "official", ["gas", "discovery", "windfall"],
    sx("You found a lot of extra gas under the ground. Use it all up fast so things are cheap right now, or save it for the future? What are your orders, sir?",
      ["Use it up fast to make things cheap now.", "Plenty now buys loyalty now.", "You open the taps and the country enjoys cheap, abundant gas. The field empties in a handful of years, and the windfall is gone before it built anything lasting.", { EN: 8, RE: -6, FI: 2 }],
      ["Save it carefully for the future.", "A field burned in five years is five years of folly.", "You meter the new field for industry and the long haul. The public sees no instant bonanza, but the reserve underwrites a decade of factories and fertiliser.", { RE: 10, FI: 4, EN: -2 }])),

  // ── Rampal expansion phase two ──────────────────────────────────────────────
  ax("Power Development Chairman", "official", ["coal", "sundarbans", "expansion"],
    sx("Power Development Chairman awaits your word. The dirty power plant next to the beautiful forest wants to build a second, bigger plant right next to it. Scientists say this is a terrible idea.",
      ["Let them build the second dirty power plant.", "Proven ground builds the cheapest megawatts.", "The expansion is greenlit and the capacity doubles. So does the ash, the warm effluent, and the shipping traffic gnawing at the forest's edge.", { RE: 8, FI: 4, EN: -12, GL: -4 }],
      ["Say no and build clean power somewhere else.", "I will not double a bet against the forest.", "You forbid the second unit and steer new capacity to cleaner sites. The cheap megawatts are forgone, but the mangrove shield is not made to carry twice the load.", { EN: 10, GL: 4, RE: -4, FI: -2 }])),

  // ── Indigenous mineral rights ───────────────────────────────────────────────
  ax("Hill Resources Officer", "people", ["indigenous", "minerals", "cht"],
    sx("Sir! You found valuable rocks under the land where native people live in the hills. They say you must ask permission and share the money.",
      ["Take the rocks without asking permission.", "The nation's minerals are the nation's, not a clan's.", "You authorise extraction over the communities' objections. The minerals flow and so does the fury; the peace accord, already brittle, cracks a little wider.", { RE: 8, FI: 4, EN: -10, GL: -4 }],
      ["Ask permission and share the money with them.", "Wealth dug from a people's land owes that people.", "You make extraction conditional on consent and royalties to the communities. The lobby fumes at the precedent, but the hills, for once, share in their own ground's wealth.", { EN: 8, GL: 4, RE: -2, FI: -4 }])),

  // ── Prepaid irrigation metering ─────────────────────────────────────────────
  ax("Irrigation Authority Head", "people", ["irrigation", "water", "metering"],
    sx("Mr. Prime Minister, sir! Farmers pump water for free, but they waste a lot. You can make them pay for it using prepaid cards, but they might go broke if it's a bad year.",
      ["Make them use prepaid cards to pay for water.", "Water and power given free are water and power wasted.", "The meters go on and the reckless pumping eases, sparing the aquifer and the subsidy. In the dry years, though, a metered pump becomes one more cost a failing farmer cannot meet.", { RE: 6, FI: 6, EN: -8 }],
      ["Let them keep pumping water for free.", "A meter on a farmer's pump is a meter on his harvest.", "You leave the pumps free and the farmers easy. The aquifer keeps falling and the subsidy keeps bleeding, but no farmer loses a crop to a card with no credit on it.", { EN: 6, RE: -6, FI: -6 }])),

  // ── Ship-breaking worker safety ─────────────────────────────────────────────
  ax("Labour Inspector", "doctor", ["ship-breaking", "safety", "workers"],
    sx("Your Excellency! The places where men take apart old ships are deadly. People get hurt or die. Bosses say making it safe costs too much money.",
      ["Leave the deadly shipyards alone.", "Cheap steel needs cheap hands.", "The yards keep running on blood and asbestos. The steel stays cheap, the casualty list grows, and the next exposé brands the beaches the world's most lethal workplace.", { FI: 6, RE: 4, EN: -10 }],
      ["Force the bosses to make the shipyards safe.", "Steel bought with a man a week is too dear.", "You force protective gear, asbestos controls, and an end to child labour. Margins thin and some yards close, but men stop dying by the dozen on the tide line.", { EN: 10, GL: 4, FI: -6, RE: -2 }])),

  // ── The grand inter-river link canal ────────────────────────────────────────
  ax("Water Development Chief", "official", ["rivers", "canal", "mega-project"],
    sx("Dear Sir — Engineers want to dig a giant ditch to move water from wet places to dry places. It costs a fortune and might ruin the rivers.",
      ["Say yes to digging the giant water ditch.", "A nation that moves its own water masters its fate.", "The mega-project launches to fanfare and a flood of contracts. The drought-prone north dreams of water, while ecologists count the rivers the canal will starve and drown.", { RE: 6, FI: -6, EN: -4 }],
      ["Say no and stick to smaller, safer ideas.", "A canal that breaks two rivers to fill one is folly.", "You set aside the grand scheme for modest local water projects. The headline-grabbing fix is gone, but the rivers keep their flow and the money spreads wider.", { EN: 6, RE: 2, FI: -2 }]),
    sx("Honourable leader! The giant ditch is taking too much water. The wet places are now drying out, and angry people want you to turn the water down.",
      ["Keep taking all the water to the dry places.", "The north's thirst was the whole point.", "You hold the flow and the north blooms. The donor basin's fisheries collapse and its people, betrayed, turn the canal into a symbol of one region drained for another.", { RE: 4, EN: -10, FI: 2 }],
      ["Turn the water down to save the wet places.", "I will not drown one region to water another.", "You cut the diversion back to a sustainable flow. The north's gains shrink and its boosters grumble, but the donor basin's wetlands and fishers are pulled back from ruin.", { EN: 8, RE: -2, FI: -2 }]),
    sx("Water Development Chief reports: The builders of the ditch are mad because you slowed them down. They threaten to quit unless you pay them all the money anyway.",
      ["Pay the builders all the money.", "A half-dug canal is worse than none.", "You pay out to keep the works moving. The connected contractors pocket the windfall, the budget bleeds, and the project limps on under a cloud of inflated bills.", { RE: 2, FI: -8, FA: 2, EN: -2 }],
      ["Tell them to follow the rules and only pay for what they do.", "I will not be extorted by my own diggers.", "You refuse the padded claim and renegotiate to the reduced scope. The contractors threaten and litigate, but the public is spared paying full price for half a canal.", { FI: 4, EN: 2, FA: -2, RE: -2 }])),

  // ── National grid single point of failure ───────────────────────────────────
  ax("Grid Operations Chief", "official", ["grid", "blackout", "resilience"],
    sx("A note from the Energy Ministry reads: The country's power wires are so weak that one mistake could turn off the lights for everyone at once. Fixing it costs a ton of money.",
      ["Spend the money to fix the wires perfectly.", "A grid that fails all at once fails the whole nation at once.", "You fund islanding, redundancy, and modern controls. The cost is heavy and the benefit invisible between failures, but a single fault can no longer plunge the entire country into darkness.", { RE: 8, EN: 4, FI: -8 }],
      ["Just put tape on it and hope the lights stay on.", "A full redesign is a budget for a disaster that may not come.", "You make do with patches. The money goes elsewhere, the brittle grid stays brittle, and the country waits, one bad fault away from another total nationwide blackout.", { FI: 4, RE: -6, EN: -4 }])),

  // ── Solar home systems vs grid extension ────────────────────────────────────
  ax("Rural Electrification Chief", "people", ["solar", "off-grid", "rural"],
    sx("Word from the Energy Ministry, sir — Faraway villages don't have electricity. You can give them small solar panels now, or make them wait years for big power lines to be built.",
      ["Give them the small solar panels right now.", "Light tonight beats a grid in a decade.", "You blanket the remote villages with solar home systems. Millions get clean light and phone-charging now, though the small panels cannot run the mills and pumps a grid eventually would.", { EN: 8, RE: 4, FI: -4 }],
      ["Make them wait for the big power lines.", "A village deserves real power, not a panel.", "You hold out to bring the villages the full grid. They wait years longer in darkness, but when the lines arrive they carry the heavy loads that solar panels never could.", { RE: 4, EN: -4, FI: -2 }])),

  // ── Coal-plant retirement / just transition ─────────────────────────────────
  ax("Power Transition Adviser", "people", ["coal", "retirement", "workers"],
    sx("Power Transition Adviser: People want you to shut down old, dirty coal plants early to clean the air. But shutting them down will leave thousands of workers without jobs.",
      ["Shut down the dirty plants and try to help the workers.", "A dying industry should be eased to rest, not abandoned.", "You retire the plants early and fund retraining and new industry for the coal towns. The stranded-asset cost is steep, but the air clears, the image brightens, and the workers are not simply discarded.", { EN: 8, GL: 4, RE: -2, FI: -8 }],
      ["Keep the dirty plants open so workers keep their jobs.", "I will not strand billions and a workforce for an early exit.", "You keep the coal plants running to their full life. The assets and jobs are preserved, the towns stay employed, and the dirty smoke and the climate criticism keep mounting year on year.", { RE: 4, FI: 2, EN: -8, GL: -4 }])),

  // ── Strategic petroleum reserve ─────────────────────────────────────────────
  ax("Energy Security Director", "official", ["fuel", "reserve", "resilience"],
    sx("Sir, a message from the Energy Ministry: The country only has enough gas for a few days if there is an emergency. Building a giant tank to save extra gas costs a lot.",
      ["Build the giant tank to save extra gas for emergencies.", "A nation with days of fuel is a nation days from paralysis.", "You build the strategic reserve and expand storage. The capital outlay is large, but the next supply shock or blockade meets a buffer instead of an instant fuel crisis.", { RE: 8, MI: 2, FI: -8 }],
      ["Do not build the tank and hope there are no emergencies.", "A reserve is a fortune frozen against a maybe.", "You keep stocks thin to save the capital. The money stays free for other needs, and the country stays days away from paralysis should any supply shock or blockade come.", { FI: 4, RE: -6, MI: -2 }])),

  // ── LPG for rural cooking ───────────────────────────────────────────────────
  ax("Energy Access Director", "people", ["lpg", "cooking", "health"],
    sx("People in villages cook over smoky fires that hurt their lungs and chop down too many trees. You can pay to help them buy clean cooking gas. What are your orders, sir?",
      ["Help pay for clean cooking gas.", "A woman's lungs are worth more than the price of a cylinder.", "You subsidise LPG and build safe distribution. Woodsmoke recedes from kitchens, women's health improves and the forests get a reprieve, and the subsidy and cylinder-safety burden fall on the budget.", { EN: 8, RE: 4, FI: -6 }],
      ["Let them keep cooking over smoky fires.", "An LPG subsidy is a cost the budget cannot carry.", "You leave rural kitchens to firewood and dung. The budget is spared, and women keep breathing woodsmoke into ruined lungs while the forests keep falling for fuel.", { FI: 4, RE: -4, EN: -6 }])),

  // ── Gas pipeline from a neighbour ───────────────────────────────────────────
  ax("Energy Diplomacy Director", "ambassador", ["pipeline", "gas", "dependence"],
    sx("Energy Diplomacy Director awaits your word. You can share a big gas pipe with a neighbor for cheap energy. But if you get in a fight, they could turn off your gas.",
      ["Build the shared gas pipe.", "Steady gas for decades is worth a careful diplomacy.", "You commit to the pipeline and cheaper gas begins to flow. Your energy security improves and your dependence deepens, your grid now hostage to a transit route and a neighbour's goodwill.", { RE: 8, FI: 2, GL: 2, MI: -4 }],
      ["Don't do it, and find your own gas at home.", "A pipeline through a neighbour is a valve in his hand.", "You forgo the pipeline for domestic exploration and LNG. The gas is costlier and slower, but no foreign hand rests on the valve that feeds your grid.", { MI: 4, RE: -4, FI: -4 }])),

  // ── Nuclear-waste storage ───────────────────────────────────────────────────
  ax("Atomic Energy Chairman", "official", ["nuclear", "waste", "safety"],
    sx("Sir! The nuclear plant will make dangerous glowing trash. You can spend money to build a safe hiding spot, or trust the builders who pinky-promised to take it back later.",
      ["Spend the money to build a safe hiding spot now.", "A poison that lasts ten thousand years deserves a plan.", "You invest in genuine spent-fuel storage and safety. The cost is large and the benefit unseen for decades, but you do not leave a radioactive legacy to be improvised by your grandchildren.", { RE: 4, EN: 6, FI: -8 }],
      ["Trust the builders to take it back later.", "The Russians said they would handle it; let them.", "You lean on the foreign builder's vague assurances and defer the problem. The money is saved now, and a growing pile of spent fuel waits on a promise no contract firmly guarantees.", { FI: 4, RE: 2, EN: -6 }])),

  // ── Captive industrial power ────────────────────────────────────────────────
  ax("Power Regulator", "official", ["captive-power", "industry", "grid"],
    sx("Mr. Prime Minister, sir! Big factories are building their own private power plants because the city's power breaks too much. This makes the city's power even worse for normal people.",
      ["Force the factories to use the city's power.", "A grid the strong abandon collapses on the weak.", "You compel the factories to draw from the grid and surrender their gas. The grid's finances and reliability improve for all, and the industrialists rage at losing their dependable captive power.", { RE: 6, EN: 4, FI: 2, FA: -4 }],
      ["Let the factories use their own private power.", "A factory that cannot trust the grid will make its own.", "You let the factories self-supply. Industry keeps its reliable power, and the grid, abandoned by its best customers, grows weaker and dearer for the households and small firms left on it.", { RE: -4, FA: 2, EN: -4 }])),

  // ── GM crop / Bt brinjal ────────────────────────────────────────────────────
  ax("Agriculture Research Director", "doctor", ["gm-crops", "seeds", "farmers"],
    sx("Your Excellency! Scientists made special seeds that bugs won't eat. It helps grow more food, but people are scared it's unnatural and gives too much power to the seed company.",
      ["Use the special seeds to grow more food.", "A crop that needs no poison feeds more for less.", "You approve the GM variety and yields rise as pesticide use falls. The activists protest seed dependence and unknown risks, and farmers gain a hardier crop and a tie to the seed company that owns it.", { RE: 6, EN: 2, FI: 2 }],
      ["Say no to the special seeds.", "I will not bet the food supply on an untested gene.", "You decline to approve it, citing precaution. The pesticide-heavy status quo persists and yields stay flat, but the food supply is not staked on a technology the public distrusts and a seed firm controls.", { EN: 2, RE: -2 }])),

  // ── Coastal greenbelt mangroves ─────────────────────────────────────────────
  ax("Coastal Afforestation Chief", "relief", ["mangroves", "greenbelt", "cyclone"],
    sx("Dear Sir — Planting a wall of trees by the ocean will stop big waves from killing people during storms. But rich guys want that land for shrimp farms.",
      ["Plant the trees to save people from storms.", "A wall of trees stops a wave no concrete can.", "You commit land and money to the greenbelt and protect it from encroachment. The shrimp and salt interests resist losing the coast, but a living storm-barrier rises and the fisheries it nurses revive.", { EN: 8, RE: 4, FI: -4, FA: -2 }],
      ["Let the rich guys use the land for shrimp farms.", "The coast earns more in ponds than in trees.", "You let the lucrative shrimp and salt keep the coast. The export earnings flow, the greenbelt goes unplanted, and the next cyclone hits a shore stripped of the trees that would have softened it.", { FI: 4, RE: -2, EN: -6 }])),

  // ── Reserve-forest encroachment ─────────────────────────────────────────────
  ax("Forest Conservator", "shadow", ["forest", "encroachment", "powerful"],
    sx("Honourable leader! Powerful people are sneaking into the protected forest and building hotels. You can kick them out, or pretend you didn't see.",
      ["Kick them out and save the forest.", "A reserve forest sold off in pieces is a lung removed.", "You evict the encroachers and reset the boundaries, however connected they are. The powerful grabbers rage and litigate, but the reserve forest is clawed back from the resort-builders and planters.", { EN: 8, RE: 6, FA: -6 }],
      ["Pretend you didn't see anything.", "The men moving those pillars are men I rely on.", "You leave the encroachments alone. The connected grabbers keep their slices of forest, the boundary pillars stay where they were quietly moved, and the reserve shrinks resort by resort.", { FA: 4, FI: 2, EN: -8, RE: -4 }])),

  // ── Rooftop / floating solar mandate ────────────────────────────────────────
  ax("Renewable Energy Adviser", "official", ["solar", "floating", "land"],
    sx("Renewable Energy Adviser reports: You can force big factories to put solar panels on their roofs and over canals to make clean power. The factory bosses will complain about the cost.",
      ["Force the factories to put up solar panels.", "A nation short of land is rich in roofs and water.", "You mandate solar on reservoirs, canals, and rooftops. The utilities and industries grumble at the cost and disruption, but clean power grows without consuming farmland, and imports ease.", { EN: 6, RE: 6, FI: -4 }],
      ["Let the factories choose if they want solar panels or not.", "A mandate forces cost on the unwilling.", "You leave solar to voluntary uptake. The disruption and cost are avoided, and the rooftops and reservoirs stay bare while the country keeps burning imported fuel it need not.", { FI: 2, RE: -4, EN: -4 }])),

  // ── Hard-rock mine at Maddhapara ────────────────────────────────────────────
  ax("Mining Bureau Director", "fixer", ["hard-rock", "mining", "contracts"],
    sx("A note from the Energy Ministry reads: The only rock mine in the country loses money because of a bad contract with a foreign company. If you change it, the rich middlemen will be angry.",
      ["Fix the bad contract and make the mine better.", "A mine that loses money on every stone is a contract, not a mine.", "You tear up the padded contract and modernise operations. The connected middlemen who skimmed it howl, but the mine moves toward profit and supplies the construction stone now imported at cost.", { RE: 6, FI: 4, FA: -4 }],
      ["Keep the bad contract and buy rocks from other countries.", "The men running that contract are not lightly crossed.", "You leave the loss-making contract intact and import the shortfall. The middlemen stay happy and the mine stays a drain, and the construction boom keeps paying to import stone you have under your own ground.", { FA: 4, RE: -2, FI: -4 }])),

  // ── Rock-phosphate / fertilizer feedstock ───────────────────────────────────
  ax("Fertilizer Supply Director", "official", ["fertilizer", "phosphate", "import"],
    sx("Word from the Energy Ministry, sir — Farmers need plant food from other countries. You can sign a long, expensive contract to be safe, or just buy it when you need it and hope the price is low.",
      ["Sign the long, expensive contract to be safe.", "A harvest hostage to a world price is a famine on a futures chart.", "You sign long-term phosphate and potash contracts and build buffer stocks. The cost and commitment are real, but the farmers are shielded from the next world price spike that would have wrecked a season.", { RE: 6, EN: 4, FI: -6 }],
      ["Buy it cheap right now and risk higher prices later.", "Why pay to hedge a price that might fall?", "You keep buying fertilizer feedstock cheaply on the spot market. The savings are real in calm years, and the next price spike passes straight through to the farmers and the harvest.", { FI: 4, RE: -4, EN: -4 }])),

  // ── Improved cookstove programme ────────────────────────────────────────────
  ax("Energy Access Director", "people", ["cookstoves", "health", "forests"],
    sx("Energy Access Director: You can give village moms special new stoves that don't make deadly smoke. But they cost money and people are used to their old smoky fires.",
      ["Give out the special new stoves.", "A better stove is a longer life and a standing tree.", "You subsidise and distribute clean cookstoves across the villages. The habit is slow to change and the cost real, but women's lungs and the forests both get relief, fire by fire.", { EN: 6, RE: 4, FI: -4 }],
      ["Leave the old smoky fires alone.", "A stove programme is a small return for a real cost.", "You skip the cookstove push. The budget is spared, and rural women keep cooking over smoky open fires, their lungs and the surrounding forests paying the quiet price.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Independent power-producer renegotiation ────────────────────────────────
  ax("Power Cell Director", "fixer", ["ipp", "contracts", "renegotiation"],
    sx("Sir, a message from the Energy Ministry: The government pays crazy high prices for power from factories owned by your friends. You can force them to lower the prices, but they will be mad.",
      ["Force your friends to lower the prices.", "A tariff from a fatter year is a wound in a leaner one.", "You force the IPPs to renegotiate toward market rates. The party-linked producers rage and threaten arbitration, but the utility stops bleeding dollars on power priced for a richer decade.", { RE: 4, FI: 6, FA: -6 }],
      ["Keep paying your friends the crazy high prices.", "My donors' contracts are not lightly reopened.", "You honour the old terms to keep the donor-producers content. They stay loyal and rich, and the utility keeps paying dollar-indexed tariffs that drain it and, through it, every consumer.", { FA: 4, RE: -2, FI: -6 }])),

  // ── Surface-water city supply ───────────────────────────────────────────────
  ax("Water Supply Director", "official", ["water", "surface", "groundwater"],
    sx("The city is drinking all the underground water. You can build a giant system to clean river water instead, but it costs a lot and the rivers are gross. What are your orders, sir?",
      ["Build the giant system to clean river water.", "A city drinking its own foundations away is doomed.", "You commit to treated surface water and the river-cleaning it requires. The capital is vast and the build long, but the aquifers steady and the cities gain a sustainable source of drink.", { RE: 6, EN: 6, FI: -10 }],
      ["Keep drinking the underground water.", "Surface water is a budget for the next decade, not this one.", "You keep the cities on cheap, fast groundwater. The money is saved now, and the aquifers keep falling and the land keeps sinking toward the day the wells run dry or the ground gives way.", { FI: 4, RE: -6, EN: -4 }])),

  // ── Dairy and livestock self-sufficiency ────────────────────────────────────
  ax("Livestock Development Director", "people", ["dairy", "livestock", "imports"],
    sx("Livestock Development Director awaits your word. You buy almost all your milk powder from other countries. You can spend a lot of money to help your own farmers make milk, or just keep buying it cheap from away.",
      ["Spend money to help your own farmers make milk.", "A nation that imports its milk has surrendered its breakfast.", "You invest in feed, breeds, chilling, and markets for smallholder dairy. The importers fight and the build is slow, but domestic milk grows and a vast cohort of small farmers gains a living.", { EN: 8, RE: 2, FI: -6 }],
      ["Keep buying cheap milk powder from other countries.", "Cheap powder feeds children the budget cannot.", "You keep relying on imported powder. Milk stays cheap on the shelf, and the smallholder dairy farmers keep struggling against a foreign product the state will not help them beat.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Pond and canal re-excavation ────────────────────────────────────────────
  ax("Water Development Officer", "people", ["ponds", "canals", "irrigation"],
    sx("Sir! The old village ponds are full of mud. You can pay people to dig them out so fish can live there again, but local bosses might steal some of the money.",
      ["Pay to dig out the old ponds.", "A cleared canal waters a hundred fields.", "You launch the mass re-excavation, creating rural jobs and restoring water bodies. Some funds leak to local graft, but irrigation, fisheries, and flood-buffering revive across the countryside.", { EN: 8, RE: 6, FI: -6 }],
      ["Keep it small and safe so nobody steals money.", "A vast labour scheme is a vast skimming opportunity.", "You run only a modest, closely-audited version. The graft is contained, and most silted ponds and canals stay choked, their irrigation and flood-buffering lost to the countryside.", { FI: 2, RE: 2, EN: -2 }])),

  // ── Seed-company monopoly ───────────────────────────────────────────────────
  ax("Agriculture Research Director", "people", ["seeds", "monopoly", "sovereignty"],
    sx("Mr. Prime Minister, sir! A few companies sell seeds that farmers have to buy brand new every year. You can help farmers save their own seeds, but the seed companies will be angry.",
      ["Help farmers save their own seeds.", "A farmer who cannot save his seed is a tenant of a corporation.", "You fund public seed banks and farmer-saved varieties alongside the hybrids. The seed companies lobby furiously, but farmers keep an alternative to buying their seed anew every single season.", { EN: 6, RE: 4, FI: -4 }],
      ["Let the companies keep selling new seeds every year.", "The hybrids yield more; the market knows best.", "You leave the seed market to the companies. Yields from the hybrids are high, and the farmers grow ever more dependent on buying patented seed each season from a shrinking handful of firms.", { RE: 2, FI: 2, EN: -4 }])),

  // ── Eastern refinery expansion ──────────────────────────────────────────────
  ax("Petroleum Refining Director", "official", ["refinery", "fuel", "self-reliance"],
    sx("Your Excellency! The country's lone, ancient oil refinery meets a fraction of fuel demand, so most fuel is imported already-refined at a premium. Build a costly second refinery for self-reliance, or keep importing refined product and skip the capital?",
      ["Build the second refinery.", "A nation that cannot refine its own crude pays twice.", "You commit to a modern second refinery. The capital is enormous and the build long, but the country gains the capacity to refine its own and stops paying the premium on imported product.", { RE: 6, FI: -8, EN: 2 }],
      ["Keep importing refined fuel.", "A refinery is a fortune for a margin I can simply pay.", "You keep importing refined fuel and skip the capital. The money stays free for other needs, and the country stays dependent on foreign refineries and the premium they charge.", { FI: 4, RE: -4 }])),

  // ── Groundwater recharge / rainwater ────────────────────────────────────────
  ax("Water Resources Officer", "people", ["recharge", "rainwater", "aquifer"],
    sx("Dear Sir — As aquifers fall, a programme of managed recharge — capturing monsoon rain to refill the groundwater — could slow the decline. The officer wants mandatory rainwater harvesting and recharge structures; it is cheap per site but vast in scale and easy to neglect.",
      ["Mandate recharge and rainwater harvesting.", "Water taken from the ground must be paid back to it.", "You mandate harvesting and recharge at scale. Enforcement is a grind across countless sites, but the monsoon's water starts refilling the aquifers instead of running wasted to the sea.", { RE: 6, EN: 4, FI: -4 }],
      ["Leave water use to draw down freely.", "A mandate on every roof and field is unenforceable.", "You skip the recharge mandate as impractical. The administrative burden is avoided, and the aquifers keep falling as the monsoon runs off unwasted-into-the-sea and the wells sink deeper.", { FI: 2, RE: -6, EN: -2 }])),

  // ── Crop diversification away from rice ─────────────────────────────────────
  ax("Agriculture Policy Director", "people", ["crops", "diversification", "water"],
    sx("Honourable leader! The obsession with thirsty rice drains the aquifers and leaves diets and incomes undiversified. The director wants incentives to shift toward less-thirsty, higher-value crops — pulses, oilseeds, vegetables — against the grain of habit and rice-first policy.",
      ["Incentivise crop diversification.", "A country that grows only rice mines its own water.", "You incentivise the shift to less-thirsty, higher-value crops. Farmer habit and the rice-first policy resist, but diets diversify, incomes rise, and the aquifer-draining rice monoculture loosens its grip.", { EN: 6, RE: 6, FI: -4 }],
      ["Keep the rice-first policy.", "Rice is food security; do not gamble the staple.", "You keep prioritising rice. Food security feels assured and farmers stay on familiar ground, and the thirsty monoculture keeps draining the aquifers and narrowing the nation's diet and incomes.", { EN: 2, RE: -4, FI: 2 }])),

  // ── Turtle and marine hatchery ──────────────────────────────────────────────
  ax("Marine Conservation Officer", "relief", ["turtles", "marine", "tourism"],
    sx("Marine Conservation Officer reports: The coast's sea-turtle nesting beaches are being lost to lights, nets, and development. A protected hatchery-and-beach programme would save them and draw eco-tourism, at the cost of restricting the fishing and building the coastal economy leans on.",
      ["Protect the nesting beaches and hatcheries.", "A coast that loses its turtles loses a wonder and a draw.", "You ring off nesting beaches, fund hatcheries, and curb the lights and nets. The coastal fishers and developers chafe at the limits, but the turtles return and eco-tourism follows.", { EN: 6, RE: 2, FI: -2 }],
      ["Leave the coast to fishing and building.", "A turtle is a poor return on prime coast.", "You leave the beaches to development and nets. The coastal economy keeps its ground, and the turtle populations dwindle toward local extinction under the lights and the trawls.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Grid-scale battery storage ──────────────────────────────────────────────
  ax("Grid Modernisation Director", "official", ["storage", "battery", "renewables"],
    sx("A note from the Energy Ministry reads: Solar and wind are useless after dark and in calm without storage, and the grid cannot absorb them. Invest in a costly grid-scale battery programme to make renewables dispatchable, or keep leaning on fossil plants for reliable power?",
      ["Invest in grid-scale battery storage.", "Sunshine saved for the evening is sunshine that counts.", "You fund battery storage and the grid can finally absorb and time-shift renewables. The capital is steep, but solar and wind become reliable power instead of daytime novelties, and fossil dependence eases.", { RE: 8, EN: 4, FI: -8 }],
      ["Keep leaning on fossil baseload.", "Batteries are a fortune for power I already have.", "You skip the storage and keep the fossil plants as backbone. The money is saved, and the renewables you build stay a fair-weather supplement the grid cannot truly rely on.", { FI: 4, RE: -4, EN: -4 }])),

  // ── Gas-system loss / illegal connections ───────────────────────────────────
  ax("Gas Distribution Chief", "shadow", ["gas", "system-loss", "theft"],
    sx("Word from the Energy Ministry, sir — A fifth of the piped gas vanishes through illegal connections, tampered meters, and bribed staff, much of it serving captive industrial and elite users. Mount a hard anti-theft drive that hits connected beneficiaries, or keep absorbing the loss?",
      ["Crack down on the gas theft.", "Gas stolen by the connected is paid for by the metered.", "You hunt the illegal connections and tampered meters and purge the complicit staff. The connected thieves and their patrons rage, but the system loss falls and the honest stop subsidising the powerful.", { RE: 6, FI: 4, FA: -4 }],
      ["Absorb the system loss.", "A theft drive against the connected is a war I need not start.", "You leave the gas theft alone. The connected keep their illegal taps and tampered meters, and the vanishing fifth of the gas is quietly billed, through tariffs, to those who actually pay.", { FA: 2, RE: -4, FI: -2 }])),

  // ── Social forestry vs reserve protection ───────────────────────────────────
  ax("Forest Department Chief", "people", ["forestry", "communities", "livelihoods"],
    sx("Forest Department Chief: A social-forestry scheme would let poor villagers grow and harvest trees on degraded state land — income for them, green cover for the country — but done carelessly it becomes a backdoor to clear-felling and grabbing the very forest it should grow. How do you design it?",
      ["Run a genuine community social-forestry scheme.", "A forest the poor profit from is a forest the poor defend.", "You design a real benefit-sharing scheme on degraded land with safeguards against grabbing. The poor gain income and the country green cover, and the forest gains guardians instead of poachers.", { EN: 6, RE: 4, FI: -2 }],
      ["Let the scheme run loose.", "Trees planted are trees planted, however it is done.", "You roll it out without tight safeguards. The headline planting numbers rise, and the scheme becomes a backdoor for clear-felling and grabbing the forest under cover of growing it.", { RE: -2, FA: 2, EN: -4 }])),

  // ── Tidal / coastal renewable pilot ─────────────────────────────────────────
  ax("Renewable Research Director", "official", ["tidal", "pilot", "innovation"],
    sx("Sir, a message from the Energy Ministry: The strong tidal range of the estuaries could, in theory, drive tidal power — a clean, novel source. A pilot would be a costly, unproven gamble on innovation; the safe path is to stick with proven solar and wind and let others pioneer the tides.",
      ["Fund the tidal-energy pilot.", "A nation of rivers should learn to harvest its tides.", "You fund the tidal pilot. It is a gamble on unproven technology, and if it works the estuaries gain a clean, novel power source the country could pioneer for the region.", { RE: 4, EN: 2, FI: -6 }],
      ["Stick with proven solar and wind.", "Let richer nations gamble on the tides.", "You skip the tidal gamble for proven renewables. The capital is spared the risk, and the chance to pioneer a novel clean source suited to your estuaries passes to someone else.", { RE: 2, FI: 2, EN: 2 }])),

  // ── Edible-oil import vs domestic oilseed ───────────────────────────────────
  ax("Agriculture Policy Director", "people", ["edible-oil", "oilseed", "imports"],
    sx("The country imports almost all its cooking oil, draining dollars and leaving prices hostage to world markets. A push for domestic mustard, sunflower, and soy oilseed would build self-reliance — slow, and competing for the scarce land that grows food grains. What are your orders, sir?",
      ["Drive domestic oilseed self-reliance.", "A kitchen run on imported oil is a kitchen run from abroad.", "You incentivise oilseed cultivation and crushing. It competes for scarce land and the payoff is slow, but the cooking-oil import bill begins to fall and prices steady against world shocks.", { RE: 4, EN: 4, FI: -2 }],
      ["Keep importing cheap cooking oil.", "Imported oil is cheap and the land is needed for rice.", "You keep relying on imported edible oil. The land stays in grain and the oil stays cheap on the shelf, and every world price spike passes straight into the nation's kitchens.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Sugar mills (loss-making SOE) ───────────────────────────────────────────
  ax("Sugar Corporation Chief", "people", ["sugar-mills", "soe", "farmers"],
    sx("Sugar Corporation Chief awaits your word. The state sugar mills lose money every year on obsolete machinery and graft, but tens of thousands of cane farmers and mill workers depend on them. Shut or privatise the worst to stem the losses, or pour in another bailout and modernisation gamble?",
      ["Shut or privatise the loss-making mills.", "A mill that only crushes losses crushes nothing.", "You close or sell the worst mills and stem the bleeding. The freed budget is real, and the cane farmers and mill towns built around the mills are left stranded and furious.", { FI: 8, RE: 2, EN: -8 }],
      ["Bail out and modernise the mills.", "The cane belt has nowhere else to turn.", "You fund a modernisation gamble to save the mills and the cane belt. The cost is heavy and the odds uncertain, but the farmers and workers keep their livelihood and a chance at a viable industry.", { EN: 6, RE: 2, FI: -8 }])),

  // ── Post-harvest loss / cold chain ──────────────────────────────────────────
  ax("Agriculture Marketing Director", "people", ["post-harvest", "cold-chain", "waste"],
    sx("Sir! A third of the fruit and vegetables rot between farm and market for want of storage, cold chain, and roads — a staggering waste that beggars farmers and inflates prices. The director wants a costly cold-chain build; the capital is large and the gain diffuse.",
      ["Build the cold chain and storage.", "A harvest that rots on the road feeds no one and ruins the grower.", "You invest in cold storage, packhouses, and farm-to-market links. The capital is heavy, but the rotting waste falls sharply, farmers earn more, and consumers pay less for what no longer spoils.", { EN: 6, RE: 4, FI: -6 }],
      ["Leave the supply chain as it is.", "A cold chain is a fortune for a problem the market lives with.", "You leave the produce to rot as it always has. The capital is spared, and a third of the harvest keeps spoiling between farm and plate, beggaring farmers and inflating prices.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Fly-ash brick from coal plants ──────────────────────────────────────────
  ax("Industries Resource Officer", "official", ["fly-ash", "bricks", "topsoil"],
    sx("Mr. Prime Minister, sir! The coal plants pile up fly-ash as toxic waste, while the brick kilns devour the country's topsoil. Mandating fly-ash bricks would solve both — using the waste, sparing the soil — but it disrupts the entrenched clay-brick industry and its workers.",
      ["Mandate fly-ash brick production.", "A waste that builds is better than a soil that burns.", "You mandate fly-ash bricks. The clay-kiln industry resists and some workers are displaced, but the toxic ash finds a use, the topsoil is spared, and the smoggy clay kilns lose their grip.", { EN: 6, RE: 4, FI: -2 }],
      ["Leave the clay-brick industry alone.", "A million kiln workers outweigh a pile of ash.", "You leave the clay kilns be. The workers keep their jobs, and the fly-ash keeps piling up toxic while the kilns keep burning the country's topsoil into bricks.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Marine protected area ───────────────────────────────────────────────────
  ax("Marine Resources Director", "relief", ["marine", "protected-area", "fisheries"],
    sx("Your Excellency! Declaring a large marine protected area in the bay would let the overfished stocks recover and safeguard biodiversity — a long-term gift to the fishery — but it locks both trawlers and artisanal fishers out of rich grounds in the short term.",
      ["Declare the marine protected area.", "A sea given rest is a sea that feeds again.", "You ring off the protected area and the stocks within it rebound, spilling fish into the surrounding waters over time. The trawlers and fishers locked out protest the short-term loss bitterly.", { RE: 6, EN: 4, FI: -4 }],
      ["Keep the grounds open to fishing.", "A fisher kept off the water today does not eat today.", "You leave the rich grounds open. The fishers keep their catch this season, and the overfished stocks slide further toward collapse, taking the fishery's future down with them.", { FI: 2, RE: -6, EN: -2 }])),

  // ── Transmission line right-of-way ──────────────────────────────────────────
  ax("Grid Expansion Director", "people", ["transmission", "land", "evacuation"],
    sx("Dear Sir — New power plants sit idle for want of transmission lines, and the lines are stalled by land disputes and farmers refusing the towers across their fields. Force the right-of-way through with compulsory acquisition, or negotiate slow and fair?",
      ["Force the right-of-way through.", "A plant that cannot send its power is a monument.", "You push the lines through with compulsory acquisition. The towers rise fast and the stranded plants finally deliver, and the dispossessed farmers, paid little and asked less, nurse a lasting grievance.", { RE: 6, FI: 2, EN: -6 }],
      ["Negotiate fair, slow right-of-way.", "A tower on a man's field should be a deal, not a decree.", "You negotiate fair compensation and routing with the farmers. The lines come slowly and the plants stay idle longer, but the right-of-way is won by consent rather than coercion.", { EN: 6, RE: -2, FI: -4 }])),

  // ── Tea-garden expansion into forest ────────────────────────────────────────
  ax("Plantation Affairs Officer", "fixer", ["tea", "forest", "expansion"],
    sx("Honourable leader! Tea companies want to expand their estates into adjoining reserve forest and indigenous land — more export tea, at the cost of felled forest and displaced hill communities. Grant the leases, or protect the forest and the people on it?",
      ["Grant the tea-estate expansion.", "Tea is dollars; forest is just trees.", "You grant the leases and the estates spread into the forest. Export tea grows, and felled forest and displaced hill communities pay for it, and another grievance hardens in the hills.", { FI: 6, RE: -4, EN: -8 }],
      ["Protect the forest and the communities.", "An estate built on a felled forest and a displaced people is a poor brew.", "You refuse the expansion into forest and indigenous land. The tea companies lose their growth and grumble, but the forest stands and the hill communities keep the ground beneath them.", { EN: 8, RE: 4, FI: -4, FA: -2 }])),

  // ── Solar irrigation pumps ──────────────────────────────────────────────────
  ax("Irrigation Technology Director", "people", ["solar-pumps", "irrigation", "diesel"],
    sx("Irrigation Technology Director reports: Replacing the diesel and grid pumps that irrigate the fields with solar ones would slash the fuel bill and emissions and free farmers from fuel-price shocks — a large upfront cost, against the cheap, familiar diesel status quo.",
      ["Drive the solar-irrigation rollout.", "A pump that runs on sunlight runs on nothing dear.", "You subsidise solar irrigation pumps across the farmland. The upfront cost is large, but farmers escape diesel-price shocks, the fuel bill and emissions fall, and the fields water themselves on sunshine.", { RE: 6, EN: 6, FI: -6 }],
      ["Stick with diesel and grid pumps.", "A solar pump is a fortune against a jerrycan of diesel.", "You leave irrigation on diesel and grid power. The upfront cost is dodged, and the farmers stay hostage to fuel prices while the pumps keep burning diesel and draining the subsidy.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Dried-fish (shutki) and coastal trade ───────────────────────────────────
  ax("Coastal Fisheries Officer", "people", ["dried-fish", "pesticides", "exports"],
    sx("A note from the Energy Ministry reads: The dried-fish trade — a coastal staple and growing export — is rife with illegal pesticide use to keep flies off the racks, poisoning consumers and threatening the export market. The officer wants enforcement and clean drying tech; the traders resist the cost.",
      ["Enforce clean drying, ban the pesticides.", "A staple cured in poison is a slow harm to millions.", "You ban the pesticides and fund clean drying technology. The traders resist the cost, but the dried fish on the nation's plates and in the export crates stops carrying its hidden poison.", { EN: 6, RE: 2, FI: -2 }],
      ["Leave the dried-fish trade alone.", "The trade is cheap and the demand is high.", "You leave the drying racks and their pesticides be. The trade stays cheap and busy, and the dried fish keeps reaching plates and export markets laced with the chemicals that keep the flies off.", { FI: 2, EN: -6, RE: -2 }])),

  // ── Mineral / geological survey ─────────────────────────────────────────────
  ax("Geological Survey Director", "official", ["minerals", "survey", "sovereignty"],
    sx("Word from the Energy Ministry, sir — A thorough national mineral survey could reveal coal, gas, hard rock, and rare minerals worth fortunes — knowledge that is power, and a magnet for foreign extractors and the conflicts that follow discovery. Survey aggressively, or tread lightly?",
      ["Survey aggressively and map the wealth.", "A nation ignorant of its own ground is poorer for it.", "You fund an aggressive survey and the map of the country's mineral wealth fills in. Knowledge is gained, and so is the attention of foreign extractors and the disputes that ride on every discovery.", { RE: 6, FI: 2, EN: -2 }],
      ["Survey cautiously and slowly.", "A discovery is a curse as often as a blessing.", "You proceed with a slow, cautious survey. You forgo the rush of knowledge and investment, and avoid lighting the fuse of extraction conflicts and foreign appetite that a full mineral map would.", { EN: 2, RE: -2 }])),

  // ── Char afforestation ──────────────────────────────────────────────────────
  ax("Coastal Afforestation Officer", "relief", ["char", "afforestation", "land"],
    sx("Coastal Afforestation Officer: Planting forests on the new coastal chars would stabilise the silt islands, buffer storms, and eventually create land for the landless — slow, unglamorous work, easily neglected against the rush to hand the chars to shrimp farms and grabbers.",
      ["Fund char afforestation and stabilisation.", "A planted char becomes solid ground for the landless.", "You fund the slow work of foresting and stabilising the chars. The shrimp interests and grabbers eye the land hungrily, but the islands solidify, buffer the storms, and become future homes for the landless.", { EN: 6, RE: 6, FI: -4, FA: -2 }],
      ["Hand the chars to shrimp and developers.", "The chars earn more in ponds than in saplings.", "You let the chars go to shrimp farms and grabbers. The export earnings flow and the powerful are pleased, and the unstabilised islands stay storm-prone and the landless landless.", { FI: 4, RE: -4, EN: -4, FA: 2 }])),

  // ── Land-ceiling enforcement ────────────────────────────────────────────────
  ax("Land Reform Commissioner", "people", ["land-ceiling", "landless", "elite"],
    sx("Sir, a message from the Energy Ministry: Land-ceiling laws meant to cap how much one family can own are flouted wholesale through benami holdings, while millions are landless. The commissioner wants real enforcement and redistribution of the surplus; the great landholders, many connected, will fight hard.",
      ["Enforce the land ceiling and redistribute.", "Land hoarded past the law is land owed to the landless.", "You enforce the ceiling, pierce the benami holdings, and redistribute surplus land. The great landholders rage and pull every string, but millions of the landless gain ground of their own.", { EN: 10, RE: 4, FA: -8 }],
      ["Leave the land ceiling unenforced.", "The great landholders are the spine of rural power.", "You leave the ceiling a dead letter. The connected landlords keep their vast holdings behind false names, and the landless millions stay landless, tenants and labourers on ground the law says they should share.", { FA: 6, FI: 2, EN: -8 }])),

  // ── Agricultural mechanisation ──────────────────────────────────────────────
  ax("Farm Mechanisation Director", "people", ["mechanisation", "labour", "yields"],
    sx("Mechanising the farms — harvesters, tillers, transplanters — would raise yields and ease the brutal labour as workers leave for the cities. But it would also throw landless farm labourers, who have nothing else, out of their only work. How hard do you push? What are your orders, sir?",
      ["Push mechanisation hard.", "A farm that cannot find hands must find machines.", "You subsidise farm machinery widely. Yields rise and the labour eases as workers drift cityward, and the landless labourers who relied on harvest wages find the machines have taken their last work.", { RE: 6, FI: -4, EN: -4 }],
      ["Mechanise gently, protect farm labour.", "A machine that idles the landless feeds the slum, not the field.", "You phase mechanisation in slowly with retraining for displaced labourers. Yields rise more modestly, but the landless are not thrown off the land all at once into the cities' slums.", { EN: 6, RE: 2, FI: -4 }])),

  // ── Used-oil and tyre recycling ─────────────────────────────────────────────
  ax("Industrial Waste Officer", "official", ["recycling", "used-oil", "pollution"],
    sx("Industrial Waste Officer awaits your word. Used engine oil and scrap tyres are dumped or burned in toxic backyard operations that poison soil and air. A formal recycling and pyrolysis industry could turn the waste to value cleanly — at a cost the informal burners will resist.",
      ["Build formal oil and tyre recycling.", "A tyre burned in a yard is a poison breathed in a slum.", "You license clean recycling and pyrolysis and crack down on backyard burning. The informal operators resist losing their cheap trade, but the toxic dumping and burning recede and the waste finds clean value.", { EN: 6, RE: 4, FI: -2 }],
      ["Leave waste-oil and tyres to the informal trade.", "The backyard burners harm no one the budget answers for.", "You leave the backyard burning and dumping be. The cheap informal trade carries on, and the used oil and burning tyres keep poisoning the soil, the air, and the slums around them.", { FI: 2, RE: -2, EN: -6 }])),

  // ── Net-billing / feed-in tariff ────────────────────────────────────────────
  ax("Energy Regulator", "official", ["feed-in-tariff", "solar", "investment"],
    sx("Sir! A generous feed-in tariff guaranteeing a good price for renewable power fed to the grid would unleash private solar and wind investment — at a cost locked in for years that the utility, and ultimately the consumer, must bear. How generous do you set it?",
      ["Set a generous feed-in tariff.", "A guaranteed price is the spark that lights the investment.", "You set an attractive feed-in tariff and private renewable investment surges. Clean capacity grows fast, and the above-market price is locked in for years, a cost the utility and consumers carry.", { RE: 6, EN: 4, FI: -4 }],
      ["Set a lean, market-linked tariff.", "A subsidy locked in for years is a debt locked in for years.", "You keep the tariff lean and market-linked. The renewable investment comes slower and thinner, but the grid and consumers are not saddled with years of above-market payments.", { FI: 4, RE: -2 }])),

  // ── Continental-shelf resource claim ────────────────────────────────────────
  ax("Maritime Resources Envoy", "ambassador", ["continental-shelf", "seabed", "claim"],
    sx("Mr. Prime Minister, sir! With the maritime boundary settled, you can press an extended continental-shelf claim to the seabed beyond — a potential bonanza of gas and minerals, and a costly, years-long legal and survey effort that may antagonise neighbours with overlapping claims.",
      ["Press the extended shelf claim.", "The seabed beyond the line may hold the next bonanza.", "You mount the costly claim to the extended shelf. The survey and legal effort are long, and if it succeeds the country gains rights to vast seabed gas and minerals — and the neighbours' overlapping resentment.", { RE: 6, GL: -2, FI: -4 }],
      ["Settle for the established boundary.", "A bird of gas in hand beats a seabed in court.", "You content yourself with the settled waters. You forgo a potential seabed bonanza and the costly fight for it, and keep the maritime peace with your neighbours unruffled.", { GL: 2, RE: -2 }])),

  // ── Eco-park / safari-park development ───────────────────────────────────────
  ax("Forest Tourism Officer", "fixer", ["eco-park", "tourism", "conservation"],
    sx("Your Excellency! A grand safari park and eco-resort carved out of a forest reserve would draw tourists and revenue — and fragment the habitat, cage wildlife for show, and hand prime forest to resort developers. Build the attraction, or protect the reserve intact?",
      ["Build the safari park and eco-resort.", "A forest that pays for itself survives.", "You greenlight the safari park and resort. Tourist revenue flows and the project dazzles, and the reserve is fragmented, its wildlife caged for show and its prime tracts handed to developers.", { FI: 6, RE: -2, EN: -6 }],
      ["Protect the reserve intact.", "A caged forest is a zoo, not a wild.", "You refuse to carve up the reserve for an attraction. The tourist revenue is forgone and the developers disappointed, but the habitat stays whole and its wildlife wild.", { EN: 6, RE: 4, FI: -4 }])),

  // ── Ethanol / biofuel blending ──────────────────────────────────────────────
  ax("Biofuel Policy Officer", "official", ["biofuel", "ethanol", "food"],
    sx("Dear Sir — Molasses from the sugar mills could be turned into ethanol to blend with petrol, cutting fuel imports and using a waste stream — or that same feedstock could feed the food and drink industries. Mandate biofuel blending?",
      ["Mandate ethanol blending.", "A waste turned to fuel is a dollar kept home.", "You mandate ethanol blending from molasses. The fuel-import bill eases and a waste stream finds value, and the food and drink industries that wanted the same molasses pay more for it.", { RE: 4, EN: 2, FI: 2 }],
      ["Keep molasses for food and drink.", "I will not turn the nation's sugar into the nation's petrol.", "You decline the blending mandate. The molasses stays with the food industries, and the chance to cut fuel imports with a domestic biofuel goes untaken.", { EN: 2, RE: -2 }])),

  // ── Hydro / pumped-storage gamble ───────────────────────────────────────────
  ax("Power Planning Director", "official", ["pumped-storage", "hydro", "storage"],
    sx("Honourable leader! With little room for big dams, the engineers propose a pumped-storage scheme in the hills — a giant battery using water and gravity to store surplus power. It is costly, geologically risky, and would flood a hill valley, displacing its communities.",
      ["Build the pumped-storage scheme.", "A mountain battery is worth a flooded valley.", "You build the pumped-storage project. The grid gains vast storage and renewables become dispatchable, and a hill valley is flooded and its communities displaced for the reservoir.", { RE: 6, EN: -4, FI: -6, FA: -2 }],
      ["Drop the pumped-storage plan.", "I will not drown a valley to store electrons.", "You cancel the scheme. The grid loses a great store of power and renewables stay harder to balance, but the hill valley and the communities in it are spared the flood.", { EN: 4, RE: -4, FI: 2 }])),

  // ── Salt iodisation ─────────────────────────────────────────────────────────
  ax("Food Fortification Officer", "doctor", ["salt", "iodine", "health"],
    sx("Food Fortification Officer reports: Iodine deficiency still stunts minds in the regions where un-iodised salt slips through, and enforcement of universal salt iodisation is lax. The officer wants a hard enforcement drive; the small, scattered salt producers resist the cost and oversight.",
      ["Enforce universal salt iodisation.", "A pinch of iodine is a child's whole future.", "You enforce iodisation hard and monitor the supply. The small producers resist the cost, but iodine deficiency and the stunting it causes recede from the regions that fell through the gaps.", { EN: 6, RE: 2, FI: -2 }],
      ["Leave iodisation lightly enforced.", "The salt trade is too scattered to police.", "You leave enforcement lax. The administrative burden is avoided, and un-iodised salt keeps slipping through to the regions where it quietly goes on stunting children's minds.", { FI: 2, EN: -4 }])),

  // ── Strategic grain silos ───────────────────────────────────────────────────
  ax("Food Storage Director", "official", ["grain", "silos", "food-security"],
    sx("A note from the Energy Ministry reads: The country's grain reserve rots in damp, rat-infested warehouses, losing a fortune and leaving the buffer unreliable in a crisis. The director wants modern steel silos; the capital is large and the warehouse rackets that profit from the chaos resist.",
      ["Build modern grain silos.", "A reserve that rots is no reserve at all.", "You build modern silos and the grain reserve becomes real and reliable. The capital is steep and the warehouse rackets lose their cosy losses, but the food buffer can finally be trusted in a crisis.", { EN: 6, RE: 4, FI: -6, FA: -2 }],
      ["Keep the old warehouses.", "Silos are a fortune for grain that mostly keeps.", "You keep the damp warehouses and their rackets. The capital is spared, the grain keeps rotting and the rats keep feeding, and the reserve stays a number on paper that a real crisis would expose.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Poultry biosecurity / bird flu ──────────────────────────────────────────
  ax("Livestock Health Director", "doctor", ["poultry", "bird-flu", "biosecurity"],
    sx("Word from the Energy Ministry, sir — The booming poultry industry — cheap protein for millions — is a tinderbox for bird flu, with poor biosecurity and culling-compensation too stingy to stop farmers hiding outbreaks. The director wants real biosecurity and fair compensation; it is costly.",
      ["Fund biosecurity and fair culling pay.", "A hidden outbreak today is a pandemic tomorrow.", "You fund biosecurity standards and fair compensation so farmers report outbreaks instead of hiding them. The cost is real, but bird flu is contained before it can leap to a wider catastrophe.", { EN: 6, RE: 2, FI: -4 }],
      ["Leave poultry biosecurity thin.", "The industry has weathered flu before.", "You leave biosecurity weak and compensation stingy. The cheap chicken keeps coming, and farmers keep hiding outbreaks until one slips its cage into a crisis the thin defences cannot hold.", { FI: 2, EN: -6 }])),

  // ── Sharecropper tenancy rights ─────────────────────────────────────────────
  ax("Land Reform Officer", "people", ["sharecroppers", "tenancy", "rights"],
    sx("Land Reform Officer: Millions of sharecroppers till others' land for a punishing share of the crop, with no security and no recourse when a landlord evicts them at whim. The officer wants enforceable tenancy rights and a fairer share; the landlord class resists fiercely.",
      ["Enforce tenancy rights and a fair share.", "A farmer who can be evicted at whim plants in fear.", "You legislate secure tenancy and a fairer crop-share, and enforce it. The landlord class fights bitterly through every local lever, but the sharecroppers gain security and a fairer return on their toil.", { EN: 8, RE: 2, FA: -6 }],
      ["Leave the tenancy system as it is.", "The landlords are the rural order I depend on.", "You leave the sharecroppers to the landlords' mercy. The rural power structure stays content, and millions keep tilling on a punishing share, one whim away from eviction.", { FA: 4, FI: 2, EN: -8 }])),

  // ── Building / appliance energy standards ───────────────────────────────────
  ax("Energy Efficiency Director", "official", ["efficiency", "standards", "demand"],
    sx("Sir, a message from the Energy Ministry: The cheapest power is the power not used, and mandatory energy-efficiency standards for buildings, motors, and appliances would cut demand more cheaply than any new plant. The director wants hard standards; manufacturers and developers resist the cost.",
      ["Mandate hard efficiency standards.", "A kilowatt saved is a kilowatt I need not build.", "You mandate efficiency standards across buildings, motors, and appliances. Manufacturers and developers grumble at the cost, but demand growth slows, the grid breathes, and you avoid building plants you would otherwise have needed.", { RE: 6, EN: 4, FI: 2 }],
      ["Leave efficiency to the market.", "A mandate is a cost forced on the builder and the buyer.", "You leave efficiency voluntary. The builders and manufacturers keep their cheap, wasteful ways, and demand climbs unchecked, forcing you to build power you could have simply saved.", { FI: 2, RE: -4, EN: -2 }])),

  // ── Deep-sea fishing fleet ──────────────────────────────────────────────────
  ax("Marine Fisheries Director", "official", ["deep-sea", "fleet", "sovereignty"],
    sx("Your fishers work only the crowded coastal waters while the rich deep-sea zone of your own maritime territory is fished by licensed foreign trawlers. The director wants a national deep-sea fleet to claim that catch; it is costly and the fishers lack the vessels and skills. What are your orders, sir?",
      ["Build a national deep-sea fleet.", "My own deep waters should feed my own fishers.", "You invest in deep-sea vessels, training, and landing infrastructure. The cost is heavy and the skills slow to build, but the catch from your own deep waters starts flowing to your own fishers instead of foreign trawlers.", { RE: 6, EN: 4, FI: -6 }],
      ["Keep licensing the foreign trawlers.", "The fees are sure; a fleet is a gamble.", "You keep taking the foreign trawler licence fees. The revenue is easy and certain, and the wealth of your own deep waters keeps sailing away in foreign holds while your fishers crowd the coast.", { FI: 4, RE: -2, EN: -2 }])),

  // ── Horticulture / fruit export ─────────────────────────────────────────────
  ax("Agriculture Export Director", "people", ["horticulture", "fruit", "exports"],
    sx("Agriculture Export Director awaits your word. The country's mangoes, jackfruit, and vegetables could earn real export money, but they rot for want of cold chain, fail foreign pesticide tests, and lack branding. Invest in a costly push for export-grade horticulture, or keep them a domestic crop?",
      ["Invest in export-grade horticulture.", "A mango that meets the world's bar earns the world's price.", "You fund cold chain, residue control, and branding for fruit and vegetable exports. The investment is real, but a new export stream and better farmer incomes grow from crops that once just rotted or sold cheap.", { RE: 4, EN: 4, FI: -4, GL: 2 }],
      ["Keep horticulture a domestic crop.", "Feeding my own market is achievement enough.", "You leave the fruit and vegetables to the domestic market. The export earnings are forgone, and the surplus keeps rotting in gluts that crash prices and beggar the growers each season.", { EN: 2, RE: -2, FI: 2 }])),

  // ── Bamboo / cane and forest craft ──────────────────────────────────────────
  ax("Cottage Resources Officer", "people", ["bamboo", "craft", "livelihoods"],
    sx("Sir! Bamboo and cane sustain vast craft and construction livelihoods and could anchor a sustainable green industry — but the resource is being stripped bare and the artisans are sliding into poverty. Build a managed-cultivation and value-chain push, or let it dwindle?",
      ["Build a sustainable bamboo value chain.", "A fast-growing reed is a green industry waiting to be grown.", "You fund managed bamboo cultivation, processing, and the artisans' value chain. A renewable green industry takes root, livelihoods stabilise, and the wild stands are spared the strip-harvesting.", { EN: 6, RE: 6, FI: -4 }],
      ["Let the bamboo trade dwindle.", "A reed and a basket are not a development strategy.", "You leave the bamboo trade to its decline. The investment is spared, and the wild stands keep being stripped while the artisans slide deeper into poverty and the craft fades.", { FI: 2, RE: -4, EN: -4 }])),

  // ── Shrimp-disease / hatchery quality ───────────────────────────────────────
  ax("Aquaculture Director", "doctor", ["shrimp", "disease", "hatchery"],
    sx("Mr. Prime Minister, sir! Disease keeps wiping out the shrimp farms — a major export — because the hatcheries sell weak, virus-laden post-larvae and farmers lack any quality control. The director wants certified disease-free hatcheries and training; the cheap-PL hatchery trade resists.",
      ["Mandate certified disease-free hatcheries.", "A pond stocked with sick larvae is a harvest already lost.", "You mandate certified, disease-free post-larvae and train farmers in biosecurity. The cheap-PL hatcheries fight the cost, but the devastating disease wipeouts ebb and the shrimp export stabilises.", { RE: 4, EN: 4, FI: -2 }],
      ["Leave the hatchery trade unregulated.", "The cheap larvae keep the ponds stocked.", "You leave the hatcheries to sell their cheap, weak larvae. The ponds stay cheaply stocked, and disease keeps sweeping the farms, wiping out harvests and the export earnings with them.", { FI: 2, RE: -4, EN: -2 }])),

  // ── District cooling / urban efficiency ─────────────────────────────────────
  ax("Urban Energy Officer", "official", ["cooling", "efficiency", "demand"],
    sx("Your Excellency! Air-conditioning is exploding with the heat and the middle class, spiking peak demand and grid strain. A district-cooling and efficiency push could blunt it; the developers and the AC-importing lobby prefer the cheap, wasteful status quo.",
      ["Push district cooling and AC standards.", "A city cooled efficiently is a grid not buckled.", "You promote district cooling and strict AC efficiency standards. The developers and importers resist, but the peak demand growth slows, sparing the grid the strain of cooling a warming, richer city.", { RE: 6, EN: 4, FI: -2 }],
      ["Let cooling demand run.", "A growing middle class has earned its cool air.", "You leave cooling to grow unchecked. The middle class enjoys its air-conditioning, peak demand spikes, and the grid strains and the bills climb to chill a city you could have cooled more cheaply.", { EN: 2, RE: -4, FI: -2 }])),

  // ── River-training works ────────────────────────────────────────────────────
  ax("Water Development Engineer", "official", ["river-training", "erosion", "megaproject"],
    sx("Dear Sir — A vast river-training scheme could tame the great river's wandering, stop the erosion swallowing districts, and reclaim land — a mega-project of guide bunds and revetments, hugely costly, technically fraught, and a magnet for contractor padding.",
      ["Launch the river-training mega-project.", "A river that wanders unchecked eats a district a year.", "You launch the guide-bund and revetment scheme. The cost is colossal and the contractors pad it, but if the engineering holds, the river is pinned, the erosion slows, and land is reclaimed.", { RE: 6, EN: 4, FI: -8, FA: -2 }],
      ["Stick with local erosion protection.", "A grand scheme to tame a great river is a fortune gambled on hydraulics.", "You fund only targeted local bank protection. The grand reclamation is forgone, the river keeps wandering and eating its banks, but you avoid betting a fortune on a fraught mega-project.", { FI: 2, RE: -2, EN: -2 }])),

  // ── Organic / safe-food certification ───────────────────────────────────────
  ax("Food Standards Director", "people", ["organic", "certification", "exports"],
    sx("Honourable leader! A credible safe-food and organic certification scheme would let farmers earn premiums and reassure consumers poisoned by adulteration — a costly system to build and police, easily faked into a meaningless sticker if done on the cheap.",
      ["Build a rigorous certification scheme.", "A label that means nothing is worse than no label.", "You build a properly policed certification system. The cost and enforcement are real, but the certified food earns genuine premiums, consumers gain trust, and the export door opens to clean produce.", { EN: 6, RE: 2, FI: -4, GL: 2 }],
      ["Run a cheap, lightly-policed scheme.", "A sticker is cheaper than a system.", "You roll out a low-cost certification with weak policing. The labels proliferate and quickly become meaningless as fakes flood in, and consumers and export buyers learn to distrust the sticker entirely.", { FI: 2, EN: -4 }])),

  // ── Smart metering rollout ──────────────────────────────────────────────────
  ax("Utility Modernisation Director", "people", ["smart-meters", "billing", "losses"],
    sx("Utility Modernisation Director reports: Smart meters would end the bribed meter-readers, estimated bills, and theft that plague the utilities — and let you bill accurately and cut losses. They are costly to roll out, and consumers fear higher, harder-to-dodge bills.",
      ["Roll out smart meters widely.", "A meter that cannot be bribed bills the truth.", "You fund a wide smart-meter rollout. The capital is heavy and consumers wary of accurate, undodgeable bills, but the meter-reader bribery and theft collapse and the utilities' losses fall sharply.", { RE: 6, FI: 4, EN: -2 }],
      ["Stick with the old meters.", "A meter rollout is a fortune and a fight over every bill.", "You keep the old meters and their bribed readers. The capital is spared and consumers undisturbed, and the estimated bills, the theft, and the meter-reader rackets all carry quietly on.", { FA: 2, RE: -4, FI: -2 }])),

  // ── Medicinal-plant and biodiversity value ──────────────────────────────────
  ax("Biodiversity Resources Officer", "doctor", ["medicinal-plants", "biopiracy", "communities"],
    sx("A note from the Energy Ministry reads: The country's forests hold medicinal plants and genetic resources that foreign firms quietly harvest and patent — biopiracy of a heritage worth fortunes. The officer wants a benefit-sharing and protection regime; it is complex and could deter research investment too.",
      ["Build a benefit-sharing protection regime.", "A heritage patented abroad is a heritage stolen.", "You establish access rules and benefit-sharing for the country's genetic resources. The bureaucracy is complex, but biopiracy is curbed and the communities and the nation share in the value of their own heritage.", { EN: 6, RE: 4, GL: 2 }],
      ["Leave the genetic resources open.", "Rules on every leaf will scare off the researchers too.", "You leave access unregulated to keep research investment flowing. The foreign firms keep harvesting and patenting freely, and a heritage worth fortunes drains abroad uncompensated.", { RE: 2, GL: 2, EN: -4 }])),

  // ── Fishery co-management ───────────────────────────────────────────────────
  ax("Inland Fisheries Director", "people", ["fisheries", "co-management", "commons"],
    sx("Word from the Energy Ministry, sir — The open-water fisheries — the beels and floodplains feeding millions — are being plundered by leaseholders and gear that wipe out the stocks. The director wants community co-management handing the waters to the fishers; the connected leaseholders resist.",
      ["Hand the waters to community co-management.", "A fishery the fishers govern is a fishery that lasts.", "You transfer the open waters to community co-management with rules the fishers set and keep. The connected leaseholders lose their plunder and rage, but the stocks recover and the fishing communities thrive.", { EN: 8, RE: 6, FA: -4 }],
      ["Keep the leasehold system.", "The leaseholders pay their fees and back the party.", "You keep the waters under the connected leaseholders. The fees and the loyalty flow, and the leaseholders keep plundering the beels with destructive gear until the stocks, and the fishers' living, collapse.", { FA: 4, FI: 2, RE: -6, EN: -4 }])),

  // ── Biogas from waste ───────────────────────────────────────────────────────
  ax("Renewable Energy Officer", "people", ["biogas", "waste", "rural"],
    sx("Renewable Energy Officer: Rural cattle dung and farm waste could fuel village-scale biogas plants — clean cooking gas and fertiliser slurry from waste — cutting woodsmoke and firewood demand. The officer wants a national biogas push; uptake has always stalled on cost and habit.",
      ["Drive a national biogas programme.", "A cow's waste can light a kitchen and feed a field.", "You subsidise and support village biogas plants at scale. Maintenance and habit slow the uptake, but clean cooking gas and fertiliser flow from waste, easing woodsmoke and firewood demand where it takes hold.", { EN: 6, RE: 4, FI: -4 }],
      ["Leave biogas to the enthusiasts.", "A scheme that always stalls is a scheme not worth the subsidy.", "You decline a national push, leaving biogas to scattered enthusiasts. The subsidy is saved, and the dung and farm waste keep going unused while the villages keep cooking on smoky firewood.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Cattle / dairy feed import ──────────────────────────────────────────────
  ax("Livestock Feed Director", "people", ["feed", "import", "livestock"],
    sx("Sir, a message from the Energy Ministry: Livestock and dairy are throttled by costly imported feed, and the maize and fodder to grow it at home compete for land with food grains. The director wants a feed-crop push to cut the import bill; the land is scarce and the food-first lobby resists.",
      ["Push domestic feed and fodder.", "A herd fed on imports is a herd fed from abroad.", "You incentivise maize, fodder, and feed-milling at home. It competes for scarce land and the food-first lobby grumbles, but the feed-import bill falls and the livestock and dairy sectors strengthen.", { RE: 4, EN: 4, FI: -2 }],
      ["Keep importing the feed.", "The land is needed for the people's grain, not the cow's.", "You keep relying on imported feed. The land stays in food grain, and the livestock and dairy sectors stay hostage to the price and supply of feed shipped in from abroad.", { FI: 2, RE: -2, EN: -2 }])),

  // ── Condensate / refinery byproduct ─────────────────────────────────────────
  ax("Petroleum Resources Officer", "shadow", ["condensate", "refining", "graft"],
    sx("Condensate — a valuable liquid byproduct of gas extraction — is being siphoned to private 'fractionation' plants owned by connected operators at giveaway prices, robbing the state. Reclaim and properly auction it, or leave the cosy arrangement? What are your orders, sir?",
      ["Reclaim and auction the condensate.", "A byproduct gifted to the connected is a theft by another name.", "You reclaim the condensate and auction it at fair value. The connected fractionators lose their giveaway and rage, but the state captures the value of its own gas byproduct.", { RE: 4, FI: 4, FA: -4 }],
      ["Leave the condensate arrangement be.", "The fractionators are friends I would rather not make enemies.", "You leave the cosy condensate deal alone. The connected operators keep their giveaway, and the state keeps forgoing the real value of a byproduct of its own gas.", { FA: 4, RE: -2, FI: -4 }])),

  // ── Floating agriculture (climate adaptation) ───────────────────────────────
  ax("Climate Agriculture Officer", "relief", ["floating-agriculture", "wetlands", "adaptation"],
    sx("Climate Agriculture Officer awaits your word. In the flood-prone wetlands, the old craft of floating gardens — crops grown on rafts of water hyacinth — could feed communities as the waters rise. The officer wants to revive and scale it as climate adaptation; it is labour-intensive and unfamiliar to most.",
      ["Revive and scale floating agriculture.", "When the land floods, the garden must float.", "You fund the revival and spread of floating-garden techniques across the flood-prone wetlands. The labour is intensive and the learning slow, but communities gain food security as the rising waters take the solid ground.", { EN: 6, RE: 4, FI: -2 }],
      ["Leave it to tradition.", "A niche craft is no answer to a national flood.", "You leave floating agriculture to the few who still practise it. The investment is spared, and as the waters rise the flood-prone communities lose their cropland with no floating alternative at scale.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Drip / efficient irrigation ─────────────────────────────────────────────
  ax("Irrigation Efficiency Director", "people", ["drip", "irrigation", "water"],
    sx("Sir! The flood-irrigation that waters the fields wastes most of the water it draws, draining the aquifers faster than need demands. Drip and sprinkler systems would slash that waste; they are costly upfront, and water and power are cheap enough that few farmers bother.",
      ["Subsidise efficient irrigation.", "A field flooded to grow a crop drowns the water table.", "You subsidise drip and sprinkler systems and train farmers. The upfront cost is real and the habit slow to change, but the water waste falls sharply and the aquifers drain more slowly.", { RE: 6, EN: 4, FI: -4 }],
      ["Leave farmers to flood-irrigate.", "Cheap water flooded on a field is what the farmer knows.", "You leave irrigation to the wasteful flood method. The farmers stick with what is cheap and familiar, and the aquifers keep falling under fields that drink far more than the crops require.", { FI: 2, RE: -6, EN: -2 }])),

  // ── Industrial captive-power efficiency ─────────────────────────────────────
  ax("Industrial Energy Officer", "official", ["industry", "efficiency", "cogeneration"],
    sx("Mr. Prime Minister, sir! Factories waste vast energy through old motors, leaky steam, and dumped waste-heat. Mandating energy audits and cogeneration would cut industry's energy bill and the grid's load; the manufacturers resist the audits and the retrofit cost.",
      ["Mandate industrial energy audits and retrofits.", "Heat dumped from a factory is money dumped with it.", "You mandate audits and cogeneration retrofits in heavy industry. The manufacturers grumble at the cost, but their energy bills fall, waste-heat is captured, and the grid sheds a heavy, needless load.", { RE: 6, EN: 2, FI: 2 }],
      ["Leave industrial energy use alone.", "An audit forced on a factory is a cost it resents.", "You leave industry to its wasteful ways. The manufacturers avoid the retrofit cost, and the dumped heat, leaky steam, and old motors keep wasting energy the grid must keep generating.", { FI: 2, RE: -4 }])),

  // ── Fish-landing and ice infrastructure ─────────────────────────────────────
  ax("Fisheries Infrastructure Officer", "people", ["fish-landing", "ice", "waste"],
    sx("Your Excellency! A huge share of the marine catch spoils for want of ice, landing centres, and cold storage at the coast, beggaring fishers and wasting protein. The director wants a coastal cold-chain and landing-centre build; the capital is large and the gain spread thin.",
      ["Build coastal landing and cold storage.", "A catch that rots on the jetty feeds no one.", "You build ice plants, landing centres, and cold storage along the coast. The capital is heavy, but the spoilage falls, the fishers earn more for fish that keeps, and the wasted protein reaches plates.", { EN: 6, RE: 4, FI: -6 }],
      ["Leave the coast without cold chain.", "A coastal cold-chain is a fortune for a diffuse gain.", "You leave the coast without ice and storage. The capital is spared, and a great share of the catch keeps rotting on the jetties, beggaring the fishers and wasting the protein.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Granite / dimension-stone quarrying ─────────────────────────────────────
  ax("Mineral Resources Officer", "official", ["granite", "quarrying", "environment"],
    sx("Dear Sir — A granite deposit could supply valuable dimension stone and cut imports, but quarrying it means blasting a forested hill that buffers a watershed and shelters indigenous hamlets. Open the quarry, or leave the hill standing?",
      ["Open the granite quarry.", "Stone in the ground earns nothing.", "You open the quarry and the dimension stone flows, cutting imports. The forested hill is blasted away, the watershed it buffered destabilised, and the indigenous hamlets displaced.", { RE: 6, FI: 4, EN: -8 }],
      ["Leave the hill standing.", "A hill that holds a watershed is worth more than its stone.", "You refuse the quarry. The granite stays buried and the imports continue, but the forested hill keeps buffering its watershed and sheltering the communities who live beneath it.", { EN: 6, RE: -2, FI: -2 }])),

  // ── Demand-side management / peak shaving ───────────────────────────────────
  ax("Grid Demand Manager", "official", ["demand", "peak", "tariff"],
    sx("Honourable leader! Peak evening demand strains the grid to breaking, forcing costly, dirty peaker plants to fire up. Time-of-use tariffs and demand-management could shave the peak cheaply; consumers resent paying more at peak hours and the populist instinct is one flat, low price.",
      ["Introduce time-of-use tariffs.", "A peak shaved is a peaker plant not built.", "You bring in time-of-use pricing and demand management. Consumers grumble at pricier peak hours, but the evening spike flattens, the dirty peakers fire less, and the grid is spared costly new capacity.", { RE: 6, EN: 2, FI: 2 }],
      ["Keep one flat, low tariff.", "A meter that charges more at dinnertime is a meter people hate.", "You keep the flat tariff. Consumers are content with the simple low price, and the evening peak keeps straining the grid, firing the dirty peakers, and forcing capacity you need not have built.", { EN: 2, RE: -4, FI: -2 }])),

  // ── Palm-oil import vs domestic edible oil ──────────────────────────────────
  ax("Commerce Resources Officer", "people", ["palm-oil", "import", "health"],
    sx("Commerce Resources Officer reports: Cheap imported palm oil dominates the cooking-oil market — affordable, but linked to poorer health and to rainforest destruction your imports fund. Tax and curb it in favour of domestic, healthier oils, or keep the cheap staple flowing?",
      ["Curb palm oil for domestic, healthier oils.", "Cheap oil that harms the body and the world's forests is dear.", "You tax palm oil and back domestic mustard and rice-bran oil. The cooking oil costs a little more, but the diet grows healthier, the domestic oilseed sector strengthens, and your imports stop funding distant deforestation.", { EN: 4, RE: 4, FI: -2 }],
      ["Keep the cheap palm oil flowing.", "The poor need affordable oil, not a lecture on forests.", "You keep palm oil cheap and dominant. The kitchens stay affordable, and the diet stays palm-heavy while your imports keep funding the rainforest clearance abroad that grows it.", { FI: 2, EN: -4, GL: -2 }])),

  // ── The national energy-mix gamble ──────────────────────────────────────────
  ax("Energy Planning Chairman", "official", ["energy-mix", "strategy", "future"],
    sx("A note from the Energy Ministry reads: The decades-long power master plan must be set, and the chairman lays out the fork: double down on cheap, reliable imported coal and LNG for the growth the economy demands, or stake the future on a costlier, slower pivot to renewables?",
      ["Build the fossil-heavy power plan.", "Growth needs power now, not a green promise.", "You lock in a coal-and-LNG-heavy plan. The cheap, reliable power fuels growth for now, and you chain the country to volatile fuel imports and stranded fossil assets the world is racing to abandon.", { RE: 8, FI: 2, EN: -8, GL: -4 }],
      ["Build the renewables-and-efficiency plan.", "A plan for the last fuel is a plan for the last decade.", "You stake the master plan on renewables, storage, and efficiency. Power is costlier and the build slower in the near term, but the country bets on the energy future instead of its past.", { EN: 8, GL: 4, RE: -4, FI: -6 }]),
    sx("Word from the Energy Ministry, sir — Years into the plan you chose, the bills are coming due — fuel-price shocks battering the fossil bet, or intermittency and cost straining the green one. Stay the course, or hedge with a costly mid-stream correction?",
      ["Stay the course you set.", "A plan abandoned midway wastes the whole journey.", "You hold to the strategy despite its strains. The consistency saves the cost of a pivot, and the weaknesses of the path you chose — fuel shocks or intermittency — go on biting unhedged.", { RE: 4, FI: 2, EN: -4 }],
      ["Hedge with a costly correction.", "A plan too rigid to bend is a plan that breaks.", "You spend to diversify and patch the plan's weaknesses mid-stream. The correction is expensive and admits the original bet was imperfect, but the energy system grows more resilient for it.", { RE: 4, EN: 4, FI: -6 }]),
    sx("Energy Planning Chairman: The energy strategy has become a political symbol — the opposition hammers every blackout or price rise as proof of your folly, while your base defends the plan as visionary. Defend it loudly, or quietly let the next plan correct it?",
      ["Defend the strategy loudly.", "A plan I will not defend is a plan I have already lost.", "You stake your name on defending the energy plan. The base rallies and the symbol holds, and every future blackout and price rise becomes a personal referendum on your judgment.", { FA: 2, RE: 2, GL: -2, EN: -2 }],
      ["Let the next plan quietly correct it.", "A strategy is a tool, not a tomb to die in.", "You stop defending the plan as gospel and let the next revision quietly fix its flaws. The base grumbles at the lack of conviction, but the energy strategy is freed to evolve rather than ossify.", { EN: 4, GL: 2, FA: -2 }])),
];
