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
    sx("The coal plant near the mangrove forest is built and ready — and so are the protests. \"Switch it on and we add a thousand megawatts tomorrow,\" the Chairman says. \"Leave it dark and we have poured a fortune into a monument to indecision.\" The forest is a UNESCO heritage and the country's storm shield.",
      ["Fire up the coal plant.", "The grid cannot run on heritage.", "The lights brighten across three divisions. The forest scientists warn the ash and warm water will gnaw at the mangroves for decades.", { RE: 12, FI: 6, EN: -14, GL: -6 }],
      ["Mothball it and pivot the site to gas or solar.", "The Sundarbans is a wall against the sea; I will not breach it.", "You eat the stranded cost and convert the plan. Environmentalists rejoice; the power-hungry industrial belt grumbles in the dark.", { EN: 12, GL: 8, FI: -10, RE: -4 }]),
    sx("With the plant running, fishing communities and forest scientists report acidified water and dying spawning grounds. A foreign court is weighing whether to strip the Sundarbans' heritage status — a global humiliation. Your engineers say new scrubbers could cut the damage at a steep price.",
      ["Fund the costly scrubbers and monitoring.", "If it must run, it must not poison.", "The retrofit eases the worst harm and saves the heritage listing. The treasury winces; the fisherfolk cautiously return to the water.", { EN: 8, GL: 6, RE: 4, FI: -10 }],
      ["Dispute the science, keep costs down.", "I will not be lectured by foreign committees.", "You stonewall and save the money. The heritage status is downgraded, the fisheries keep declining, and the issue becomes a global black mark.", { FI: 4, RE: 6, EN: -12, GL: -10 }])),

  // ── The cross-border power contract ─────────────────────────────────────────
  ax("Cross-Border Power Negotiator", "official", ["adani-style", "import", "tariff"],
    sx("A giant Indian conglomerate offers electricity from a dedicated coal plant across the border — power on tap, but at a tariff and on terms that auditors call lopsided in the seller's favour, dollar-indexed and locked for twenty-five years.",
      ["Sign the long import contract.", "Reliable power now beats a fair price later.", "The grid steadies and a powerful neighbour is pleased. The dollar-indexed bill balloons as the taka falls, draining reserves for decades.", { RE: 10, GL: 6, FI: -10, EN: -4 }],
      ["Renegotiate or walk away.", "I will not chain the grid to a quarter-century of someone else's prices.", "You demand fairer terms. The seller threatens to pull out and the supply gap looms — but you keep the country off a 25-year leash.", { FI: 4, RE: -8, GL: -6, MI: 4 }])),

  // ── Quick-rental capacity charges ───────────────────────────────────────────
  ax("Independent Power Producers' Lobby", "fixer", ["capacity-charge", "rental", "subsidy"],
    sx("For years the state has paid 'capacity charges' to private rental power plants — billions for electricity never generated, locked in by indemnity laws. The lobby, thick with party donors, wants the contracts renewed. An adviser says ending them could save the treasury a fortune.",
      ["Renew the capacity-charge contracts.", "These owners fund the machine that funds me.", "The donors are delighted and the idle plants keep cashing cheques. The public learns it pays a king's ransom for power that never flows.", { RE: 4, FA: 6, FI: -10, EN: -6 }],
      ["Let the contracts lapse, hold a real auction.", "I will not pay for electrons that do not exist.", "You end the racket and tender competitively. The donors rage and a short-term supply risk appears; the treasury stops haemorrhaging.", { FI: 10, GL: 6, EN: 4, FA: -8 }])),

  // ── Offshore gas & maritime boundary ────────────────────────────────────────
  ax("Petrobangla Exploration Chief", "official", ["gas", "offshore", "maritime"],
    sx("New offshore blocks sit in waters you won at sea tribunal — but exploring them risks reigniting a maritime spat with a neighbour, and only foreign supermajors have the deep-water rigs. The Chief wants to license fast before the gas crisis bites harder.",
      ["License the supermajors aggressively.", "Domestic gas is worth a diplomatic frown.", "Rigs move in and the prospect of homegrown gas lifts spirits. The neighbour protests the blocks near the line, chilling relations.", { RE: 12, FI: 6, GL: -8 }],
      ["Go slow with joint surveys and shared blocks.", "Gas under disputed water is gas in a lawsuit.", "You pursue cooperative surveys to keep the peace. The crisis deepens while committees map the seabed, and import bills climb.", { GL: 6, RE: -8, FI: -6 }])),

  // ── Ship-breaking ───────────────────────────────────────────────────────────
  ax("Sitakunda Yard Owner", "fixer", ["shipbreaking", "labour", "toxic"],
    sx("The beaching yards that scrap the world's dead ships employ tens of thousands and feed the steel mills — and bury workers under falling plate and toxic ash with grim regularity. International rules would force costly 'green' yards. The owner warns reform means ruin and unemployment.",
      ["Keep the beaching yards as they are.", "Steel and jobs outrank inspectors' ideals.", "The mills stay fed and the owners loyal. The death toll and the poisoned coastline keep the ugly headlines coming.", { RE: 8, FI: 6, EN: -12, GL: -6 }],
      ["Mandate green ship-recycling standards.", "A yard that buries a worker a week is a slaughterhouse.", "You phase in safer yards with a transition fund. Costs rise and some yards close, but the deaths fall and the beaches begin to heal.", { EN: 10, GL: 8, FI: -8, RE: -4 }])),

  // ── Arsenic groundwater ─────────────────────────────────────────────────────
  ax("Public Health Hydrologist", "people", ["arsenic", "water", "wells"],
    sx("The tube-wells that ended cholera are slowly poisoning millions with natural arsenic — the largest mass poisoning in history, the hydrologist says, and barely on anyone's agenda. Safe piped water or deep wells would cost more than any photo-op returns.",
      ["Fund a national safe-water programme.", "A nation cannot be poisoned by its own taps.", "You commit real money to deep wells and filtration. It is unglamorous, expensive, and will quietly save a generation of livers and lives.", { EN: 12, RE: 4, FI: -10 }],
      ["Distribute cheap filters and move on.", "We have louder crises and thinner budgets.", "A token filter scheme lets you claim action for little cost. The cancers and lesions keep spreading where the cameras never go.", { FI: 4, RE: 4, EN: -10 }])),

  // ── River sand mining ───────────────────────────────────────────────────────
  ax("Riverbank Erosion Officer", "official", ["sand-mining", "rivers", "erosion"],
    sx("Illegal sand dredging feeds the construction boom — and eats riverbanks, swallowing villages and bridges into the current. The dredgers are protected by local strongmen tied to your party. The officer wants a real ban; the strongmen want to keep digging.",
      ["Tolerate the dredging for the building boom.", "Cement needs sand, and the party needs the strongmen.", "Construction roars and the local bosses stay loyal. Each monsoon the rivers take more homes, and the displaced have your name to curse.", { RE: 6, FA: 4, EN: -10, FI: 4 }],
      ["Ban illegal mining and break the syndicates.", "A bridge in the river is no one's foundation.", "You move against the sand mafias. Construction costs rise and a few party bosses turn hostile; the riverbanks, and the villages on them, hold.", { EN: 10, GL: 4, RE: -4, FA: -6 }])),

  // ── Solar transition ────────────────────────────────────────────────────────
  ax("Renewables Director", "official", ["solar", "transition", "land"],
    sx("Donors dangle cheap green finance for a solar push, but utility-scale panels need flat land — and the only flat land is fertile farmland in a country that must feed itself. The Director asks where the megawatts should come from.",
      ["Convert farmland to solar parks for the cheap finance.", "Clean power now; we will import the rice.", "The grid greens fast on concessional money. Displaced farmers and a thinner harvest trade one dependency for another.", { RE: 8, GL: 6, EN: 4, FI: -4 }],
      ["Push rooftop and floating solar instead.", "We will not pave our rice fields to please donors.", "You back distributed and floating arrays — slower, dearer per watt, but no farmer loses their field and the food map stays intact.", { EN: 8, RE: 4, FI: -8, GL: 4 }])),

  // ── BESPOKE INSTALMENT — real energy & resource dilemmas ────────────────────

  ax("Phulbari Coalfield Director", "official", ["coal", "open-pit", "displacement"],
    sx("A foreign firm wants to open-pit mine the great northern coal seam — vast cheap energy, but it would uproot tens of thousands of farmers and drop the water table across the breadbasket. The villages there once died protesting this very mine.",
      ["Approve the open-pit mine.", "The seam could power the nation for decades.", "Coal and investment flow north. Whole villages are cleared, the aquifer sinks, and the old protest reignites with funerals behind it.", { RE: 12, FI: 8, EN: -14, GL: -6 }],
      ["Ban open-pit mining for good.", "I will not unhouse the breadbasket for coal.", "You kill the project and honour the dead of the old protests. The energy stays underground and the import bill stays high.", { EN: 12, FA: 4, RE: -8, FI: -6 }])),

  ax("LNG Terminal Operator", "official", ["lng", "gas", "spot-market"],
    sx("Domestic gas is running dry and the country now depends on imported LNG — but the spot price has spiked fourfold and the terminal operator wants you to keep buying at any cost to avoid blackouts.",
      ["Keep buying LNG at the spike price.", "Lights and looms cannot wait for cheap gas.", "The grid holds through the crunch. The import bill devours dollars the reserves can scarcely spare.", { RE: 10, EN: 4, FI: -12 }],
      ["Ration gas and accept rolling blackouts.", "I will not bankrupt us to keep every light on.", "You cut industrial gas and load-shed by schedule. Factories idle and tempers fray, but the dollars are saved.", { FI: 6, RE: -6, EN: -8 }])),

  ax("Power Grid Chief", "official", ["grid", "system-loss", "theft"],
    sx("A fifth of all electricity generated is lost or stolen — illegal hooks, complicit meter-readers, unpaid VIP connections. The chief wants prepaid meters and a purge of the linemen who run the racket.",
      ["Roll out prepaid meters and purge the racket.", "Pay for the power you burn.", "Losses fall and revenue rises sharply. The linemen's union and the freeloading connections — some politically wired — push back hard.", { RE: 8, FI: 8, EN: -4, FA: -4 }],
      ["Leave the connections and the linemen be.", "Do not pick a fight with every substation.", "The pilferage continues and the utilities stay broke. The honest customer subsidises the hook on the next pole.", { FA: 4, RE: -6, FI: -6 }])),

  ax("Industrial Gas Board", "fixer", ["gas", "tariff", "industry"],
    sx("Industry pays a fraction of the cost of its gas, and the board wants a steep price hike to fund new supply. The factory owners — your donors — warn that a hike now closes mills and kills jobs.",
      ["Raise industrial gas prices to cost.", "Subsidised gas is a fire we cannot feed.", "The utilities can finally invest in new supply. The owners howl, some mills close, and your donor base cools.", { RE: 8, FI: 6, EN: -6, FA: -6 }],
      ["Hold the subsidised industrial rate.", "Cheap gas keeps the looms turning.", "The factories stay competitive on cheap energy. The gas sector stays starved of the cash to find more of it.", { FA: 6, EN: 4, RE: -8, FI: -6 }])),

  ax("Hilsa Fishery Officer", "people", ["fishery", "hilsa", "ban"],
    sx("The national fish is overfished to the brink; a strict breeding-season ban would let stocks recover but starve a million fishing families for two months. Enforcement means gunboats against desperate boats.",
      ["Enforce the breeding ban hard.", "No fish tomorrow if we take them all today.", "Stocks rebound within seasons and the catch later booms. For two months the fishing villages go hungry and angry.", { RE: 10, EN: -6, FI: -4 }],
      ["Allow fishing with token restrictions.", "I will not starve a million families now.", "The boats stay out and the families eat this season. The stock thins further toward a collapse that feeds no one.", { EN: 6, RE: -8, FA: 4 }])),

  ax("Bhola Gas Survey Lead", "official", ["gas", "onshore", "exploration"],
    sx("A promising onshore gas field sits under a southern island, but tapping it fast needs a foreign supermajor and a pipeline through fragile wetlands. The survey lead wants speed; the ecologists want caution.",
      ["Fast-track the field with a supermajor.", "Homegrown gas now eases everything.", "Domestic gas flows sooner and the import bill eases. The pipeline scars the wetlands and the ecologists raise the alarm.", { RE: 10, FI: 6, EN: -8 }],
      ["Develop it slowly with a domestic firm.", "Our own gas, on our own careful terms.", "A national company develops it gently over years. The relief is slower; the wetlands and sovereignty are spared.", { RE: 4, EN: 4, FI: -6, GL: -4 }])),

  ax("Heavy Minerals Concessionaire", "fixer", ["minerals", "sand", "coast"],
    sx("The black sands of the southern beaches are rich in rare minerals a foreign miner will pay well to extract — at the cost of churning up the tourist coast and the turtle nesting grounds.",
      ["Grant the coastal mining concession.", "Wealth lies in the sand we walk on.", "Mineral royalties flow into the treasury. The beaches are gouged, the tourism dwindles, and the turtles vanish.", { RE: 8, FI: 8, EN: -12, GL: -4 }],
      ["Protect the coast and refuse the miner.", "Some sand is worth more left lying.", "You keep the beaches whole for tourism and turtles. The mineral fortune stays buried and the miner walks.", { EN: 10, GL: 4, RE: -6, FI: -6 }])),

  ax("Urea Plant Manager", "official", ["fertiliser", "gas-allocation", "agriculture"],
    sx("The state fertiliser plant needs a big gas allocation to run, gas the power sector also wants for the grid. Feed the urea plant and farmers get cheap fertiliser; feed the grid and the lights stay on.",
      ["Allocate the gas to fertiliser.", "Cheap urea is cheap rice is calm.", "Domestic urea keeps farmers and food prices steady. The power sector, short of that gas, load-sheds the cities.", { EN: 8, RE: 4, FI: -4 }],
      ["Allocate the gas to the power grid.", "A dark city is a dangerous city.", "The grid stays lit through peak demand. Fertiliser output drops, prices rise, and the villages feel the pinch.", { RE: 6, MI: 4, EN: -8 }])),

  ax("Irrigation Power Officer", "official", ["irrigation", "subsidy", "groundwater"],
    sx("Farmers pump groundwater for the dry-season rice crop on heavily subsidised electricity, draining both the aquifer and the budget. The officer wants to meter and price the irrigation power.",
      ["Meter and price irrigation power.", "Free power drains the water and the treasury.", "Pumping grows efficient and the aquifer's fall slows. Farmers, hit with new bills, send their anger up the line.", { RE: 8, FI: 6, EN: -8, FA: -4 }],
      ["Keep irrigation power free and flowing.", "The dry-season crop must not fail.", "The harvest is secure and the farmers content. The water table keeps dropping and the subsidy keeps bleeding.", { EN: 6, FA: 4, RE: -8, FI: -6 }])),

  ax("Waste-to-Energy Promoter", "official", ["waste", "incineration", "power"],
    sx("A foreign firm offers to burn the capital's mountains of garbage for electricity — tidy and modern, but the incinerators emit toxins and undercut the tens of thousands who survive by sorting and recycling waste.",
      ["Build the waste-to-energy incinerators.", "Turn the garbage mountains into megawatts.", "The dumps shrink and the grid gains power. The air near the plants worsens and the waste-pickers lose their livelihood.", { RE: 8, FI: 4, EN: -8 }],
      ["Invest in recycling and the informal sector.", "The pickers are a workforce, not a problem.", "You formalise recycling and protect the pickers' living. Less spectacular than a power plant, and the dumps shrink slower.", { EN: 8, RE: -4, FI: -6 }])),

  ax("Rooppur Waste Officer", "official", ["nuclear", "waste", "rooppur"],
    sx("The new nuclear plant will soon produce spent fuel with nowhere safe to go. Russia offers to take it back — at a price and a dependency — or you build a domestic store you have no experience to manage.",
      ["Ship the waste back to Russia.", "Let the builder keep its poison.", "The spent fuel leaves on Russian terms. The cost is steep and the dependency on Moscow deepens with each cask.", { RE: 4, GL: -6, FI: -6 }],
      ["Build a domestic storage facility.", "A nuclear nation must handle its own ash.", "You commit to a homegrown store. It is a daunting first for your engineers, and a risk if mishandled, but it keeps you sovereign.", { RE: 4, EN: -4, FI: -6, GL: 4 }])),

  ax("Tea Estate Labour Commissioner", "people", ["tea", "labour", "wages"],
    sx("The tea-garden workers — generations bonded to the estates on a pittance — are striking for a living wage. The estate owners, a colonial-era elite, warn that doubling the daily rate ruins the gardens.",
      ["Mandate a living wage in the gardens.", "A century of bondage is long enough.", "The pickers win a wage they can live on and bless your name. The estate owners cut output and lobby furiously against you.", { EN: 10, RE: 4, FI: -6, FA: -4 }],
      ["Side with the owners to protect output.", "Ruin the gardens and everyone loses.", "Production holds and the owners stay sweet. The pickers return to their lines and their poverty, and remember who chose.", { RE: 6, FI: 4, EN: -10 }])),

  ax("EV Transition Lead", "official", ["ev", "transport", "grid"],
    sx("Electric three-wheelers and bikes are multiplying, cutting fuel imports but overloading a grid that wasn't built for them and threatening the petrol-pump and CNG economy.",
      ["Embrace the EV surge with charging infrastructure.", "Electrify the streets and cut the fuel bill.", "Fuel imports drop and the air improves. The strained grid groans and the fuel-retail economy contracts painfully.", { RE: 6, EN: 8, FI: 4, FA: -4 }],
      ["Throttle EVs to protect the grid and fuel trade.", "The wires and the pumps cannot take the shock.", "You slow the rollout to spare the grid and the pump owners. Fuel imports stay high and the cleaner future waits.", { RE: 4, FI: -4, EN: -6 }])),

  ax("Forest Conservator", "official", ["forest", "logging", "sundarbans"],
    sx("Organised gangs are felling the protected forests for timber and farmland, often with a forest officer's bribe. A real anti-logging operation means arming rangers against well-connected timber barons.",
      ["Arm the rangers and break the timber gangs.", "A felled forest is a flood let in.", "The chainsaws fall silent under pressure and the canopy holds. The timber barons and their official partners turn dangerous.", { EN: 10, RE: 6, GL: 4, FA: -6 }],
      ["Let the quiet felling continue.", "Do not war with the timber money.", "The forests keep thinning at the edges. Each lost hectare is one less wall against the next cyclone surge.", { FI: 4, EN: -10, RE: -4 }])),

  ax("Household Gas Connection Board", "people", ["gas", "household", "moratorium"],
    sx("There is not enough gas for new household pipeline connections, yet millions on the waiting list — and your MPs — demand them. The board wants the moratorium held; the public wants the queue cleared.",
      ["Lift the moratorium and connect households.", "The people were promised the blue flame.", "Families on the list finally get piped gas and cheer. The supply stretches thinner, pressure drops, and industry is starved.", { EN: 8, FA: 4, RE: -8 }],
      ["Hold the moratorium, push bottled gas instead.", "I cannot pipe gas we do not have.", "You steer households to cylinders and keep the pipeline for industry. The waiting millions grumble at the broken promise.", { RE: 6, FI: -4, EN: -6 }])),

  ax("Renewables Target Auditor", "official", ["renewables", "targets", "credibility"],
    sx("You pledged an ambitious renewable-energy share by 2030 and are nowhere near it. The auditor says you can quietly water down the target, or pour real money into solar and wind to chase it honestly.",
      ["Quietly lower the renewable target.", "A missed pledge is worse than a modest one.", "You revise the goal down before you miss it. The climate world notes the retreat and your green credibility dims.", { RE: 4, FI: 4, GL: -6, EN: -4 }],
      ["Fund a real push to hit the target.", "I will meet the promise, not edit it.", "You commit serious money to solar and wind. The budget strains, but the pledge — and the cleaner grid — start to look real.", { EN: 8, GL: 6, RE: 4, FI: -8 }])),

  ax("Stone Quarry Inspector", "official", ["quarry", "stone", "rivers"],
    sx("Illegal stone extraction in the northeast is gutting riverbeds and hillsides, feeding the construction boom and the pockets of local strongmen. The inspector wants the quarries shut.",
      ["Shut the illegal quarries.", "A gutted hillside is a landslide waiting.", "You halt the extraction and the rivers begin to settle. Construction-stone prices jump and the local bosses lose a racket and turn hostile.", { EN: 8, RE: 4, FI: -4, FA: -6 }],
      ["Tolerate the quarrying for the building boom.", "The country is being built; it needs stone.", "Construction roars on cheap stone. The hills slump, the rivers choke, and the strongmen stay loyal and rich.", { RE: 6, FI: 4, EN: -10 }])),

  ax("Cross-Border Power Renegotiator", "official", ["import-power", "tariff", "india"],
    sx("The dollar-indexed tariff on imported Indian electricity has ballooned as the taka fell, and a lopsided clause lets the seller pass on every cost. The renegotiator wants to reopen the contract — at the risk of the supplier pulling the plug.",
      ["Demand the contract be reopened.", "I will not bleed dollars on a rigged clause.", "You force renegotiation and may claw back terms. The supplier threatens curtailment and a supply gap looms.", { FI: 6, RE: -6, GL: -6 }],
      ["Honour the contract to keep the power flowing.", "A dark grid costs more than a bad clause.", "The electricity keeps coming uninterrupted. The dollar-indexed bill keeps climbing and draining the reserves.", { RE: 8, GL: 4, FI: -10 }])),

  ax("Coastal Salinity Officer", "people", ["salinity", "agriculture", "shrimp"],
    sx("Saltwater shrimp farms are lucrative dollar-earners, but the brine they flood the land with is poisoning the soil and the drinking water of the whole coastal belt. Rice farmers and shrimp barons are at war.",
      ["Curb the shrimp farms, protect the freshwater.", "Salt money is killing the coast's water.", "You roll back the brine and the soil and wells begin to recover. The shrimp barons — major exporters — lobby and resist.", { EN: 10, RE: 4, FI: -6, FA: -4 }],
      ["Let the lucrative shrimp farms expand.", "The dollars from shrimp are real and now.", "Export earnings rise on the back of the brine. The coastal belt's fields and drinking water grow saltier each season.", { FI: 6, RE: 4, EN: -12 }])),

  // ── Rooppur nuclear plant ───────────────────────────────────────────────────
  ax("Atomic Energy Chairman", "official", ["nuclear", "rooppur", "debt"],
    sx("The Russian-built nuclear plant is nearly done, financed by a loan that will shadow the budget for decades. With the country under sanctions pressure for dealing with Moscow, the chairman asks whether to fuel it up on schedule or pause and renegotiate the terms.",
      ["Fuel it on schedule, debt and sanctions be damned.", "A finished reactor left cold is the costliest folly.", "The plant comes online and adds clean baseload power. The repayment millstone settles on the budget, and the Russia tie draws cold stares from the West.", { RE: 10, GL: -8, FI: -6 }],
      ["Pause and renegotiate the loan terms.", "A debt unexamined is a debt that devours.", "You halt commissioning to renegotiate. The power is delayed and Moscow is irritated, but you claw back better terms and a little distance from the sanctions glare.", { FI: 6, GL: 4, RE: -6 }])),

  // ── Phulbari open-pit coal ──────────────────────────────────────────────────
  ax("Mining Concession Director", "official", ["coal", "phulbari", "displacement"],
    sx("A foreign company wants to open-pit mine the vast Phulbari coal seam — enough fuel for decades — but it would displace tens of thousands and drain the aquifer of a whole farming region. The last time it was proposed, three protesters were shot dead.",
      ["Approve the open-pit mine.", "A seam this rich cannot stay buried.", "The contract is signed and the draglines arrive. Villages are marked for clearance, the protests reignite with the memory of the dead, and the region braces for a fight.", { RE: 10, FI: 6, EN: -12, GL: -4 }],
      ["Refuse open-pit; pursue underground only.", "I will not drown a region to dig a hole.", "You bar the open pit and limit any extraction to less-disruptive methods. The yield is smaller and the company walks, but the farmland and the aquifer survive.", { EN: 10, GL: 4, RE: -6, FI: -4 }])),

  // ── Electricity system loss & theft ─────────────────────────────────────────
  ax("Distribution Utility Chief", "official", ["electricity", "theft", "losses"],
    sx("A fifth of the power you generate is stolen or lost — illegal hooks, bribed meter readers, crumbling lines. The chief can fund a hard crackdown with prepaid meters and disconnections, hitting the poor hardest, or absorb the loss and keep the peace.",
      ["Crack down hard with prepaid meters.", "Power given free bankrupts the power.", "The losses fall and the books improve. The poorest, suddenly metered and disconnected, feel the squeeze, and the line workers lose a lucrative racket.", { FI: 8, RE: 6, EN: -8 }],
      ["Phase it in gently, subsidise the poorest.", "A meter that starves a family is a riot in waiting.", "You spread the reform over years with lifeline tariffs. The theft bleeds the utility longer, but no slum erupts over a dark Eid.", { EN: 6, FI: -6, RE: 2 }])),

  // ── Power tariff hike ───────────────────────────────────────────────────────
  ax("Energy Regulator", "official", ["tariff", "subsidy", "cost"],
    sx("Imported fuel costs have blown a hole in the power subsidy. The regulator presents a steep tariff hike to plug it — politically toxic but fiscally vital — or you can hold prices and let the subsidy keep bleeding the treasury.",
      ["Raise the tariff to cover costs.", "Cheap power the state cannot afford is no gift.", "The hike steadies the books and enrages every household and factory. The opposition makes the electricity bill its rallying cry for the season.", { FI: 8, RE: 4, EN: -10 }],
      ["Hold the tariff, eat the subsidy.", "I will not light my own funeral pyre with a price rise.", "Prices stay frozen and the public exhales. The subsidy gouges the budget deeper, crowding out the schools and clinics that might have been built.", { EN: 8, FI: -10, RE: -2 }])),

  // ── LNG terminal expansion ──────────────────────────────────────────────────
  ax("Petrobangla Chairman", "official", ["lng", "import", "dependence"],
    sx("Domestic gas is running dry and a new floating LNG terminal would secure imports — but it locks the country into volatile world prices in dollars you do not have. The chairman wants the deal signed before winter shortages bite.",
      ["Sign the LNG terminal deal.", "A cold factory is worse than an expensive one.", "The terminal is contracted and the supply secured. The country's energy now rides the global spot market, and every price spike abroad becomes a crisis at home.", { RE: 8, FI: -8, GL: 2 }],
      ["Hold off; push domestic exploration first.", "Imported gas is a habit I cannot afford.", "You delay the terminal and pour money into drilling at home. Winter will be tight and shortages likely, but you refuse to mortgage the grid to a foreign spot price.", { RE: -6, FI: 4, EN: -4 }])),

  // ── National exploration (Bapex) vs IOCs ────────────────────────────────────
  ax("Bapex Managing Director", "official", ["exploration", "gas", "sovereignty"],
    sx("The national exploration company swears it can find and develop new gas fields cheaply — if you fund it instead of handing the blocks to international oil majors on production-sharing terms that ship most of the gas value abroad.",
      ["Hand the blocks to the international majors.", "Foreign rigs find gas faster than national pride.", "The majors move in with capital and speed. Gas flows sooner, but the production-sharing terms send the lion's share of the value out of the country.", { RE: 8, FI: 4, GL: 2, EN: -2 }],
      ["Fund Bapex to develop the blocks itself.", "Gas drawn by our own hands stays in our own pockets.", "You back the national company. Development is slower and riskier, but a strike would belong wholly to the nation, building skill that outlasts any contract.", { RE: -2, FI: -6, EN: 4 }])),

  // ── Barind tract groundwater ────────────────────────────────────────────────
  ax("Irrigation Authority Head", "official", ["groundwater", "irrigation", "drought"],
    sx("The deep tube-wells that made the parched Barind tract bloom with rice are draining the aquifer faster than the rains refill it. The head warns of a slow-motion desert; the farmers warn that any cut to pumping means a failed harvest now.",
      ["Keep the pumps running at full tilt.", "A failed harvest topples a government faster than a dry decade.", "The rice keeps coming and the farmers stay calm. The water table sinks another year toward the day the wells suck only dust.", { EN: 4, FI: 2, RE: -10 }],
      ["Cap pumping, shift to drought-hardy crops.", "A region that mines its own water has a deadline.", "You ration the aquifer and push less-thirsty crops. This season's yields dip and the farmers grumble, but the Barind may still have water in a generation.", { RE: 8, EN: -4, FI: -4 }])),

  // ── Tannery pollution relocation ────────────────────────────────────────────
  ax("Environment Inspector", "official", ["tanneries", "pollution", "leather"],
    sx("The leather tanneries, relocated to a new estate, still dump untreated chromium effluent straight into the river because the promised treatment plant was never finished. The inspector wants them shut until it works; the exporters threaten to flee the country.",
      ["Let the tanneries keep running.", "Leather earns dollars the river cannot.", "The exports continue and the chromium flows. A whole river system and the people who drink from it pay the toll, and the unbuilt treatment plant stays a fiction.", { FI: 6, RE: 2, EN: -12 }],
      ["Shut them until the treatment plant works.", "A river is not a sewer for export earnings.", "You close the estate until it cleans up. Exporters rage and some relocate abroad, but the river gets a chance and the rule finally has teeth.", { EN: 10, RE: 4, FI: -8, GL: 2 }])),

  // ── Deep-sea port (Matarbari/Payra) ─────────────────────────────────────────
  ax("Ports Development Chairman", "official", ["port", "infrastructure", "debt"],
    sx("A deep-sea port would transform trade — and three different foreign backers (one Japanese, one Chinese, one Indian) are competing to build it, each deal carrying strategic strings. The chairman needs you to pick a patron, or build it slower on your own dime.",
      ["Take the cheapest foreign deal and its strings.", "A port now is worth a patron's leash.", "Construction races ahead on foreign money. The port rises fast, and so does the geopolitical debt — the chosen patron now has a foothold on your coast.", { RE: 8, FI: 4, GL: -6 }],
      ["Build slower, financed at home.", "A harbour bought with strings docks foreign warships.", "You forgo the fast foreign money for a slower, self-funded build. The port is years away, but no rival power gains a berth in your strategic waters.", { GL: 6, RE: -4, FI: -6 }])),

  // ── Jaflong stone quarrying ─────────────────────────────────────────────────
  ax("District Mineral Officer", "official", ["quarrying", "stone", "rivers"],
    sx("In the northeast, illegal stone quarrying is gutting the riverbeds and hill slopes, feeding the construction boom but collapsing banks and killing labourers in pit cave-ins. The officer asks whether to enforce the ban or keep the cheap aggregate flowing.",
      ["Let the quarrying continue.", "The cities are built on this stone.", "The aggregate keeps the construction sector cheap and humming. The rivers braid into ruin, the slopes slump, and another pit swallows another crew.", { FI: 6, RE: -4, EN: -10 }],
      ["Enforce the quarrying ban.", "Stone pulled from a living river kills it.", "You shut the illegal pits and the riverbeds begin to heal. Construction costs tick up and the local mafias lose a fortune, sending their muscle against your officers.", { EN: 8, RE: 6, FI: -6, MI: -2 }])),

  // ── Hilsa fishery ban season ────────────────────────────────────────────────
  ax("Fisheries Director", "people", ["hilsa", "fishing", "livelihoods"],
    sx("The national fish spawns only if you enforce a strict fishing ban during the breeding season — but that means tens of thousands of fishing families with no income for weeks. The director can enforce the ban hard, or look away to spare the hunger.",
      ["Enforce the breeding-season ban hard.", "A fish that cannot spawn feeds no one next year.", "Patrols keep the nets out of the water and the stocks rebound spectacularly. The fishing families go hungry for the weeks of the ban, and resent every patrol boat.", { RE: 8, EN: -6, FI: 2 }],
      ["Relax the ban to spare the families.", "A starving fisherman cannot wait for next season.", "You ease enforcement and the families eat. The catch this season holds, but the spawning falters and next year's nets come up lighter.", { EN: 6, RE: -8, FI: -2 }])),

  // ── Rooftop solar net metering ──────────────────────────────────────────────
  ax("Renewable Energy Adviser", "official", ["solar", "net-metering", "transition"],
    sx("A net-metering scheme would let factories and homes put rooftop solar on the grid and sell back the surplus — cutting imports and emissions. The utilities resist, since every rooftop panel is a customer they lose. The adviser asks whose side you take.",
      ["Side with the utilities, stall net metering.", "A grid undercut by a million rooftops collapses.", "You protect the utilities' monopoly and the rooftops stay bare. Fuel imports stay high, and the clean-energy future drifts another few years out of reach.", { FI: 2, RE: -4, EN: -6 }],
      ["Mandate generous net metering.", "Every rooftop is a power plant I did not have to build.", "You force the grid open to rooftop solar. The utilities howl about lost revenue, but imports ease, the air clears, and a solar industry takes root.", { EN: 8, RE: 6, FI: -4 }])),

  // ── Cross-border grid import ────────────────────────────────────────────────
  ax("Grid Interconnection Officer", "ambassador", ["grid", "import", "regional"],
    sx("You can import cheap hydropower across the border through a regional grid — clean, plentiful, and a hedge against fuel shocks. But it deepens dependence on a giant neighbour who could, in a quarrel, simply pull the plug.",
      ["Sign the cross-border power import.", "Cheap clean power outweighs a distant risk.", "The hydropower flows in and bills ease. Your grid now leans on a neighbour's goodwill, a switch in a foreign capital that could one day darken your cities.", { RE: 8, FI: 4, GL: 2, MI: -4 }],
      ["Decline; build domestic capacity instead.", "A switch in another's hand is a noose in waiting.", "You forgo the cheap import for self-reliance. Power stays costlier and dirtier for now, but no foreign hand rests on your grid's master switch.", { MI: 4, RE: -4, FI: -4 }])),

  // ── Fertilizer gas feedstock ────────────────────────────────────────────────
  ax("Agriculture Minister", "official", ["fertilizer", "gas", "food"],
    sx("The state fertilizer plants devour scarce gas to make cheap urea for farmers — gas the power sector is desperate for. The minister asks whether to keep feeding the fertilizer plants for food security, or divert the gas to keep the lights on.",
      ["Keep gas flowing to fertilizer.", "Cheap urea is cheap rice is a calm country.", "The farmers get their subsidised urea and the harvest holds. The power sector starves of the diverted gas, and load-shedding creeps back into the cities.", { EN: 6, FI: -4, RE: -4 }],
      ["Divert the gas to power generation.", "A dark grid stops a country faster than dear fertilizer.", "You redirect the gas to the turbines and the lights stay on. Fertilizer prices climb, farmers protest, and the next harvest carries a question mark.", { RE: 6, EN: -6, FI: 2 }])),

  // ── Capacity-charge indemnity renewal ───────────────────────────────────────
  ax("Power Cell Director", "fixer", ["capacity-charge", "indemnity", "rentals"],
    sx("The notorious law that lets you award power-plant contracts with no tender and no legal challenge — the source of the ruinous 'capacity charges' paid to idle plants — is up for renewal. The director's friends in the rental business want it extended again.",
      ["Renew the no-tender indemnity law.", "My donors' plants must keep their guarantees.", "The law is extended and the capacity charges keep flowing to idle plants. Your rental-baron donors are delighted, and the public keeps paying for power it never receives.", { FI: -4, RE: 2, EN: -8, FA: 4 }],
      ["Let the indemnity law lapse.", "Paying for electricity that never comes is a scandal I will end.", "You let the shield expire and open the sector to tenders and lawsuits. The rental barons rage and threaten, but the rip-off capacity charges finally face daylight.", { EN: 8, FI: 6, RE: -2, FA: -4 }])),

  // ── Brick kilns and topsoil ─────────────────────────────────────────────────
  ax("Environment Inspector", "people", ["brick-kilns", "topsoil", "air"],
    sx("Thousands of illegal brick kilns ring the cities, burning coal and the country's fertile topsoil into smog that chokes the capital every winter. The inspector wants them forced onto clean technology or shut; the kiln owners employ a million workers.",
      ["Leave the kilns as they are.", "A million jobs outweigh a season of smog.", "The kilns keep firing and the workers keep their wages. The capital's winter air becomes the world's worst, and the cropland loses its skin one kiln at a time.", { FI: 4, EN: -12, RE: -4 }],
      ["Force clean kilns or closure.", "Bricks baked from topsoil and smog cost more than they earn.", "You mandate cleaner zigzag technology and shut the worst offenders. Some kilns close and workers are displaced, but the air and the farmland get a reprieve.", { EN: 10, RE: 6, FI: -6 }])),

  // ── Marine trawler overfishing ──────────────────────────────────────────────
  ax("Coast Guard Commander", "general", ["fishing", "trawlers", "maritime"],
    sx("Foreign industrial trawlers are sweeping your newly-won maritime zone bare, often with bribed permits, while artisanal fishers come home empty. The commander can mount costly patrols to drive them out, or keep taking the licence fees and look away.",
      ["Keep the licence fees, look away.", "The fees are certain; the patrols are expensive.", "The foreign trawlers keep dragging your waters and the fees fill a ledger. The small fishers' nets come up empty, and the fishery heads toward collapse.", { FI: 6, RE: -8, EN: -6 }],
      ["Patrol hard and expel the trawlers.", "A sea swept bare by foreigners feeds no one here.", "You fund the patrols and drive the foreign fleets out. It costs the navy dearly and angers the licence-buyers' governments, but the stocks and the artisanal fishers recover.", { RE: 8, EN: 6, FI: -6, GL: -2 }])),

  // ── E-waste and recycling ───────────────────────────────────────────────────
  ax("Industries Secretary", "official", ["e-waste", "recycling", "toxics"],
    sx("The country has become a dumping ground for the world's electronic waste, picked apart by hand in toxic backyard yards — including children's. The secretary can crack down and demand a formal recycling industry, or keep the cheap scrap trade flowing.",
      ["Let the informal e-waste trade run.", "Scrap is scrap, and it employs the poor.", "The backyard yards keep smelting circuit boards over open fires. The lead and cadmium seep into the children who work them, and the world keeps shipping its poison here.", { FI: 4, RE: -2, EN: -10 }],
      ["Mandate a formal recycling industry.", "I will not let the world poison our children for scrap.", "You ban the backyard trade and license proper recyclers. The cheap scrap economy contracts, but the toxic exposure falls and a real industry begins to form.", { EN: 8, RE: 4, FI: -4, GL: 2 }])),

  // ── Sundarbans community livelihoods ────────────────────────────────────────
  ax("Forest Conservator", "relief", ["sundarbans", "forest", "livelihoods"],
    sx("To protect the mangrove forest you can bar the honey-collectors, woodcutters, and fishers whose families have lived off it for centuries — or let them keep harvesting and watch the forest thin. The conservator says the forest cannot bear both protection and people forever.",
      ["Bar the forest communities for conservation.", "A forest emptied of axes survives.", "You evict the harvesters and the mangroves recover. Generations of forest families lose their only livelihood, and resentment festers along the forest's edge.", { RE: 8, EN: -6, FA: -2 }],
      ["Let the communities keep harvesting sustainably.", "A forest is kept by those who live in it, not those who fence it.", "You license sustainable, limited harvesting and bring the communities into protection. The forest thins more slowly, and its people become its guardians instead of its enemies.", { EN: 6, RE: 2, FI: -2 }])),

  // ── Jute revival ────────────────────────────────────────────────────────────
  ax("Jute Ministry Secretary", "official", ["jute", "industry", "heritage"],
    sx("The state jute mills — once the 'golden fibre' that built the economy — bleed losses every year, kept alive for the workers and the heritage. The secretary can shut the rotting mills to stop the bleeding, or pour in another bailout and a modernisation gamble.",
      ["Shut the loss-making jute mills.", "Nostalgia is not a balance sheet.", "You close the mills and stem the losses. Tens of thousands of workers and a piece of national identity are cast off, and the jute towns turn against you.", { FI: 8, RE: 2, EN: -8 }],
      ["Bail out and modernise the mills.", "The golden fibre may yet be gold again.", "You fund a modernisation push toward jute textiles and bioplastics. It is a costly gamble, but the workers keep their looms and a heritage industry gets one more chance.", { EN: 6, RE: 4, FI: -8 }])),

  // ── Payra coal terminal ─────────────────────────────────────────────────────
  ax("Coal Import Coordinator", "official", ["coal", "import", "logistics"],
    sx("Your new coal plants need a steady stream of imported coal, and a dedicated deep-water terminal would lock in cheap, reliable supply for decades. It also chains the country to coal long after the world has moved to phase it out — and to financing it.",
      ["Build the dedicated coal terminal.", "My plants are built; they must be fed.", "The terminal secures decades of cheap coal for the plants you have. You also build infrastructure the world is racing to abandon, a stranded asset waiting to happen.", { RE: 8, FI: 2, EN: -10, GL: -4 }],
      ["Cancel the terminal, plan for coal's exit.", "A terminal for a dying fuel is a tomb I am paying to dig.", "You scrap the terminal and begin planning coal's phase-out. The existing plants run short-fed and costly, but you stop sinking money into a stranded future.", { EN: 8, GL: 4, RE: -6, FI: -2 }])),

  // ── Capital water and sewerage overhaul ─────────────────────────────────────
  ax("WASA Managing Director", "people", ["water", "dhaka", "pollution"],
    sx("The capital's piped water is so contaminated that millions boil it or buy it by the jar, while the rivers ringing the city are biologically dead. The MD needs a vast, expensive overhaul of treatment and sewerage — or you can keep patching and let people cope.",
      ["Keep patching the old system.", "A full overhaul is a budget I do not have.", "You make do with repairs and the taps keep running brown. The dead rivers stay dead, the bottled-water bills crush the poor, and waterborne disease simmers on.", { FI: 4, EN: -8, RE: -4 }],
      ["Fund the full water and sewerage overhaul.", "A capital that cannot drink its own water is failing.", "You commit to the costly rebuild of treatment and sewers. The budget groans for years, but a generation may finally drink from the tap without fear.", { EN: 10, RE: 6, FI: -10 }])),

  // ── Magurchhara-style gas blowout ───────────────────────────────────────────
  ax("Petrobangla Chairman", "official", ["gas", "blowout", "compensation"],
    sx("A foreign operator's well has blown out, burning a forest and a gas reserve worth a fortune for weeks. The company offers a token settlement and a denial of liability. The chairman asks whether to fight for full compensation or take the quiet money and move on.",
      ["Take the token settlement quietly.", "A long fight scares off the next investor.", "You accept the pittance and sign away the claim. The reserve and the forest are gone for nothing, and every future operator learns that recklessness here is cheap.", { FI: 2, GL: 2, RE: -8, EN: -6 }],
      ["Demand full compensation in court.", "A burned reserve is a debt the burner will pay.", "You sue for the true value of the lost gas and the scorched land. The investor climate cools and the case drags, but you set a precedent that negligence here has a price.", { RE: 4, EN: 4, FI: -2, GL: -4 }])),

  // ── Household gas connection moratorium ─────────────────────────────────────
  ax("Energy Secretary", "people", ["gas", "households", "rationing"],
    sx("With gas reserves dwindling, you have frozen new household pipeline connections — but millions on the waiting list, who have paid bribes for years, are furious. The secretary can lift the freeze to win goodwill, or hold it to ration the dying reserve for industry.",
      ["Lift the freeze, connect the households.", "A promised connection denied is a vote lost.", "The taps open for the waiting millions and the goodwill flows. The reserve drains faster toward the day the gas simply runs out, for homes and factories alike.", { EN: 8, RE: -10, FI: -2 }],
      ["Hold the freeze, ration gas for industry.", "Gas burned in a stove builds nothing; gas in a factory builds a country.", "You keep the freeze and steer the gas to industry and power. The waiting millions seethe, but the reserve stretches further and the factories keep running.", { RE: 6, FI: 4, EN: -8 }])),

  // ── Karnaphuli tunnel / mega-infra toll ─────────────────────────────────────
  ax("Bridges Authority Chairman", "official", ["infrastructure", "toll", "debt"],
    sx("A signature river tunnel has opened, financed by foreign loans, but traffic is a fraction of the rosy forecasts that justified it. The chairman can set punishing tolls to service the debt, or keep tolls low and let the loss sit on the public books.",
      ["Set high tolls to service the debt.", "The users of the tunnel should pay for it.", "The tolls bite and the debt is serviced. Hauliers reroute to avoid the cost, traffic thins further, and the showpiece becomes a monument to optimistic forecasts.", { FI: 6, RE: 2, EN: -6 }],
      ["Keep tolls low, absorb the loss.", "A tunnel no one can afford to use is a tomb.", "You keep the toll cheap and the traffic builds. The debt sits unpaid on the public ledger, a quiet weight that some future budget will have to carry.", { EN: 6, RE: 2, FI: -8 }])),

  // ── EV and charging transition ──────────────────────────────────────────────
  ax("Transport Electrification Adviser", "official", ["ev", "transport", "imports"],
    sx("Imported fuel for vehicles drains your dollars by the billion. The adviser proposes aggressive incentives for electric vehicles and a charging network — slashing the oil bill over time, but stranding the gas-station economy and demanding more grid power up front.",
      ["Push hard for the EV transition.", "Every electric mile is a dollar that stays home.", "Incentives and chargers roll out and the EVs come. The fuel-import bill begins its long decline, while the grid strains and the petrol-pump economy starts to wither.", { RE: 6, FI: 4, EN: 4, GL: 2 }],
      ["Stick with the existing fuel fleet.", "A grid this fragile cannot charge a nation's cars.", "You hold off and keep the petrol economy intact. The fuel-import bill keeps bleeding dollars, but the strained grid is spared and the pump-workers keep their trade.", { FI: -4, RE: -4, EN: -2 }])),

  // ── Coastal wind power ──────────────────────────────────────────────────────
  ax("Renewable Energy Adviser", "official", ["wind", "coast", "renewables"],
    sx("The coast has strong, steady wind, and a foreign developer offers to build a large wind farm — clean power, but on prime coastal land that fishers and salt-farmers use, and at a guaranteed tariff higher than coal.",
      ["Approve the coastal wind farm.", "Wind is the one fuel no one can embargo.", "The turbines rise and clean power flows. The fishers and salt-farmers lose ground and the tariff is steep, but the country gains a fuel free of import and emission.", { RE: 6, EN: 4, FI: -4 }],
      ["Reject it to protect the coastal commons.", "A green plant on stolen land is not clean.", "You refuse to displace the coastal livelihoods for the turbines. The clean-power gain is forgone, but the fishers and salt-farmers keep the shore they have always worked.", { EN: 4, RE: -4, FI: 2 }])),

  // ── Char land allocation ────────────────────────────────────────────────────
  ax("Land Reform Commissioner", "people", ["char-land", "landless", "grabbing"],
    sx("New river islands — fertile silt 'chars' — have surfaced, and they are state land by law. The commissioner can distribute them to the landless families who already farm them, or let the local strongmen who 'manage' the chars formalise their grab.",
      ["Let the strongmen formalise their hold.", "The chars are already governed by those who hold them.", "The mastans get their titles and the landless become their tenants. A vast tract of fertile new land entrenches the very feudalism land reform was meant to end.", { FI: 2, RE: 2, EN: -8, MI: 2 }],
      ["Distribute the chars to the landless.", "New land should make new owners, not new landlords.", "You title the chars to the families who farm them. The strongmen lose a prize and send their thugs, but thousands of landless households gain ground of their own.", { EN: 10, RE: 4, MI: -4, FA: -2 }])),

  // ── Haor wetland protection ─────────────────────────────────────────────────
  ax("Wetlands Director", "relief", ["haor", "wetland", "flash-flood"],
    sx("The vast northeastern haor wetlands — a single boro rice crop, a fishery, a bird sanctuary — are being diked and converted to year-round farming, which raises yields but destroys the flood-pulse the whole ecosystem depends on. The director begs you to choose.",
      ["Allow the diking for higher yields.", "More crops from the same water is progress.", "The dikes go up and the rice doubles for a while. The fishery crashes, the birds vanish, and one bad flash-flood now drowns a crop the wetland used to absorb.", { FI: 4, RE: -6, EN: -8 }],
      ["Protect the natural flood-pulse.", "A wetland drained is a famine deferred.", "You halt the conversion and protect the flood-pulse. The single-crop yields stay modest, but the fishery, the birds, and the wetland's flood defence all survive.", { EN: 8, RE: 6, FI: -4 }])),

  // ── St Martin's coral island ────────────────────────────────────────────────
  ax("Tourism Board Chair", "official", ["coral", "tourism", "island"],
    sx("The country's only coral island is being loved to death — hotels on the dunes, day-trippers trampling the reef, plastic everywhere. The chair can cap visitors and tear down illegal resorts to save the reef, or keep the tourist revenue flowing.",
      ["Keep the tourism flowing.", "The island earns its keep in tourist taka.", "The hotels stay and the boats keep coming. The reef bleaches and breaks under the crowds, and the one coral ecosystem in the country slides toward death.", { FI: 6, RE: -4, EN: -8 }],
      ["Cap visitors, demolish illegal resorts.", "A dead reef draws no one.", "You ration access and raze the illegal hotels. The local tourist economy takes a blow and the resort-owners sue, but the reef gets a fighting chance to recover.", { EN: 8, RE: 6, FI: -6 }])),

  // ── National plastics ban ───────────────────────────────────────────────────
  ax("Environment Secretary", "official", ["plastic", "pollution", "ban"],
    sx("Single-use plastic chokes every drain, river, and field in the country — and clogs the very canals whose blockage floods the capital. The secretary proposes a hard ban and a jute-bag mandate. The plastics industry, a big employer and donor, will fight to the death.",
      ["Hold off on the plastics ban.", "A ban that kills an industry kills jobs and donors.", "You spare the plastics industry and the bags keep flowing. The drains clog, the floods worsen, and the microplastics work their way into the fish and the people.", { FI: 4, FA: 2, EN: -10, RE: -4 }],
      ["Enforce the ban, mandate jute bags.", "A drain choked with plastic drowns a city.", "You ban the worst single-use plastics and revive the jute-bag trade. The plastics lobby rages and some jobs vanish, but the drains clear and a jute revival stirs.", { EN: 10, RE: 6, FI: -6, FA: -2 }])),

  // ── Heavy mineral sands ─────────────────────────────────────────────────────
  ax("Geological Survey Director", "official", ["minerals", "sands", "mining"],
    sx("The coastal beaches hold valuable heavy-mineral sands — zircon, titanium, rare earths — that a foreign miner wants to extract. It would earn real money, but strip-mining the beaches would gut the storm-buffering dunes and the turtle nesting grounds.",
      ["Approve the beach mineral mining.", "Rare earths in the sand are riches wasted unmined.", "The miners move in and the export earnings begin. The dunes that blunt the cyclones are carried away by the truckload, and the coast loses its natural armour.", { FI: 8, RE: 6, EN: -10 }],
      ["Keep the beaches and dunes intact.", "Dunes that stop a cyclone are worth more than zircon.", "You refuse the concession. The mineral wealth stays buried, but the dunes keep standing between the storms and the people behind them.", { EN: 8, RE: -2, FI: -4 }])),

  // ── Embankment and polder repair ────────────────────────────────────────────
  ax("Water Development Chief", "people", ["embankment", "polder", "flood"],
    sx("The coastal embankments that hold back the tides are decades old and failing; one big surge could drown a district. The chief needs a massive repair programme — or you can keep doing emergency patch-jobs after each breach, cheaper now and catastrophic later.",
      ["Keep patching breaches as they come.", "A full rebuild is a budget I will spend on the next disaster.", "You fund only the emergency repairs. Each cyclone breaches the weak embankments anew, salting fields and drowning homes the rebuild would have saved.", { FI: 4, RE: -4, EN: -8 }],
      ["Fund the full embankment rebuild.", "An embankment is cheap next to the district it saves.", "You commit to rebuilding the polders properly. The cost is huge and slow to show, but a coastal district gains a real wall against the rising, angrier sea.", { EN: 10, RE: 6, FI: -10 }])),

  // ── Cement limestone import dependence ──────────────────────────────────────
  ax("Industries Secretary", "official", ["cement", "limestone", "import"],
    sx("The construction boom runs on cement made from imported clinker and limestone, draining dollars. A domestic limestone quarry in the hills could cut the import bill — at the cost of blasting a forested range the indigenous communities hold sacred.",
      ["Open the domestic limestone quarry.", "A boom this big cannot run on imports forever.", "The quarry opens and the cement-import bill eases. The sacred range is blasted apart, the indigenous communities are displaced, and another grievance hardens in the hills.", { FI: 6, RE: 6, EN: -10 }],
      ["Keep importing, spare the sacred range.", "Some hills are worth more standing than crushed.", "You leave the range intact and keep paying for imports. The dollar drain continues, but the forest and the communities who revere it are spared the dynamite.", { EN: 8, RE: -4, FI: -4 }])),

  // ── Antibiotic-laden fish feed ──────────────────────────────────────────────
  ax("Fisheries Director", "doctor", ["aquaculture", "antibiotics", "exports"],
    sx("The booming farmed-fish and shrimp sector dopes its ponds with banned antibiotics, and Europe is threatening to reject the exports over residue limits. The director can crack down hard — costly and unpopular with farmers — or keep certifying and hope the testing misses it.",
      ["Keep certifying, hope the tests miss it.", "A crackdown now empties a thousand ponds.", "You keep the exports flowing on a wink. One bad batch detected abroad triggers a blanket ban, and a whole export sector collapses overnight on a gamble.", { FI: 4, RE: 2, EN: -6, GL: -4 }],
      ["Crack down on the banned antibiotics.", "An export caught dirty loses the whole market.", "You enforce the residue limits hard. The farmers howl at the cost and the disease losses, but the exports clear European labs and the market stays open.", { GL: 6, EN: 4, FI: -4, RE: 2 }])),

  // ── Capital dredging of rivers ──────────────────────────────────────────────
  ax("Water Development Chief", "official", ["dredging", "rivers", "navigation"],
    sx("The country's rivers — its cheapest highways — are silting up, stranding the cargo boats that move grain and goods. A vast dredging programme would reopen them, but the dredged spoil has to go somewhere, and the cheapest dumping ruins floodplains and fisheries.",
      ["Dredge fast and dump spoil cheaply.", "Open rivers move a nation; tidy disposal can wait.", "The channels reopen and the cargo flows again. The carelessly dumped spoil buries floodplains and chokes fisheries, trading one waterway's life for another's.", { RE: 6, FI: 4, EN: -8 }],
      ["Dredge carefully with managed spoil.", "A river reopened by ruining another is no gain.", "You dredge with proper spoil management and floodplain protection. It is slower and dearer, but the rivers reopen without killing the wetlands beside them.", { RE: 6, EN: 4, FI: -6 }])),

  // ── Offshore gas bidding round ──────────────────────────────────────────────
  ax("Petrobangla Chairman", "ambassador", ["offshore", "gas", "bidding"],
    sx("With the maritime boundary settled, you can finally open the deep offshore blocks to international bidding. The majors want generous, low-royalty terms to take the deep-water risk. The chairman asks how hard to bargain — gas in hand, or the nation's full share.",
      ["Offer generous terms to attract the majors.", "Gas undiscovered earns nothing; bring the rigs.", "The sweet terms draw the majors and the drilling begins. Gas may flow within years, but the low royalties mean the nation pockets a thin slice of its own seabed.", { RE: 8, GL: 4, FI: -2 }],
      ["Bargain hard for the nation's full share.", "Our seabed, our terms.", "You hold out for higher royalties and faster work commitments. Some bidders walk and exploration slows, but any gas found will pay the nation what it is worth.", { FI: 4, RE: -4, GL: -2 }])),

  // ── Salt farmers vs industrial salt ─────────────────────────────────────────
  ax("Commerce Secretary", "people", ["salt", "farmers", "import"],
    sx("A glut has crashed the price of locally-farmed salt, ruining the coastal salt-farmers, while industry lobbies to import cheap foreign salt for its factories. The secretary asks whether to protect the farmers with an import ban or let the cheap salt in.",
      ["Allow the cheap salt imports.", "Industry runs on the cheapest input.", "The factories get their cheap salt and the lobby is pleased. The coastal salt-farmers, undercut to ruin, abandon the pans, and a coastal livelihood dies out.", { FI: 4, RE: -2, EN: -8 }],
      ["Ban imports to protect the salt-farmers.", "A coast of ruined salt-pans is a coast of empty hands.", "You shut out the foreign salt and prop up the local price. Industry grumbles at the cost, but the salt-farmers keep their pans and their precarious living.", { EN: 8, RE: 2, FI: -4 }])),

  // ── Forest plantation monoculture ───────────────────────────────────────────
  ax("Forest Conservator", "official", ["forest", "plantation", "biodiversity"],
    sx("To hit your 'green coverage' targets cheaply, the department wants to blanket cleared hills with fast-growing acacia and eucalyptus monoculture — green on paper, but a desert for wildlife that sucks the water table dry. The alternative is slower native-species restoration.",
      ["Plant the fast monoculture for green targets.", "A number on a chart is a number won.", "The hills go green with acacia and the coverage statistics soar. Beneath the uniform canopy nothing lives, and the water table drops under the thirsty exotics.", { RE: 4, FI: 2, EN: -6 }],
      ["Restore slow native forest instead.", "A plantation is not a forest.", "You fund mixed native restoration. The 'green coverage' rises slowly and the targets slip, but a real forest — water, wildlife, and all — begins to return.", { EN: 8, RE: 4, FI: -4 }])),

  // ── New gas discovery windfall ──────────────────────────────────────────────
  ax("Petrobangla Chairman", "official", ["gas", "discovery", "windfall"],
    sx("Exploration has struck a major new onshore gas field — a genuine windfall. The chairman asks how to use it: burn it fast and cheap to win an easy few years of plenty, or husband it as a long-term reserve and feedstock for industry.",
      ["Burn it fast for a few easy years.", "Plenty now buys loyalty now.", "You open the taps and the country enjoys cheap, abundant gas. The field empties in a handful of years, and the windfall is gone before it built anything lasting.", { EN: 8, RE: -6, FI: 2 }],
      ["Husband it as a long-term reserve.", "A field burned in five years is five years of folly.", "You meter the new field for industry and the long haul. The public sees no instant bonanza, but the reserve underwrites a decade of factories and fertiliser.", { RE: 10, FI: 4, EN: -2 }])),

  // ── Rampal expansion phase two ──────────────────────────────────────────────
  ax("Power Development Chairman", "official", ["coal", "sundarbans", "expansion"],
    sx("The coal plant beside the mangrove forest is running, and its backers now want a second, larger unit on the same site. The chairman calls it cheap megawatts on proven ground; the scientists warn it doubles the threat to the forest the country shelters behind.",
      ["Approve the second coal unit.", "Proven ground builds the cheapest megawatts.", "The expansion is greenlit and the capacity doubles. So does the ash, the warm effluent, and the shipping traffic gnawing at the forest's edge.", { RE: 8, FI: 4, EN: -12, GL: -4 }],
      ["Cap the site, build clean capacity elsewhere.", "I will not double a bet against the forest.", "You forbid the second unit and steer new capacity to cleaner sites. The cheap megawatts are forgone, but the mangrove shield is not made to carry twice the load.", { EN: 10, GL: 4, RE: -4, FI: -2 }])),

  // ── Indigenous mineral rights ───────────────────────────────────────────────
  ax("Hill Resources Officer", "people", ["indigenous", "minerals", "cht"],
    sx("A survey has found valuable minerals under indigenous land in the hill tracts. The communities, citing the peace accord, demand consent and a share; the mining lobby says national resources belong to the nation, accord or not. The officer awaits your call.",
      ["Mine without indigenous consent.", "The nation's minerals are the nation's, not a clan's.", "You authorise extraction over the communities' objections. The minerals flow and so does the fury; the peace accord, already brittle, cracks a little wider.", { RE: 8, FI: 4, EN: -10, GL: -4 }],
      ["Require consent and a community share.", "Wealth dug from a people's land owes that people.", "You make extraction conditional on consent and royalties to the communities. The lobby fumes at the precedent, but the hills, for once, share in their own ground's wealth.", { EN: 8, GL: 4, RE: -2, FI: -4 }])),

  // ── Prepaid irrigation metering ─────────────────────────────────────────────
  ax("Irrigation Authority Head", "people", ["irrigation", "water", "metering"],
    sx("Free and unmetered irrigation power has farmers pumping groundwater with abandon. The head proposes prepaid meters on the irrigation pumps to curb the waste and the subsidy bleed — but a metered pump in a bad season is a farmer's ruin.",
      ["Meter the irrigation pumps.", "Water and power given free are water and power wasted.", "The meters go on and the reckless pumping eases, sparing the aquifer and the subsidy. In the dry years, though, a metered pump becomes one more cost a failing farmer cannot meet.", { RE: 6, FI: 6, EN: -8 }],
      ["Keep irrigation free and unmetered.", "A meter on a farmer's pump is a meter on his harvest.", "You leave the pumps free and the farmers easy. The aquifer keeps falling and the subsidy keeps bleeding, but no farmer loses a crop to a card with no credit on it.", { EN: 6, RE: -6, FI: -6 }])),

  // ── Ship-breaking worker safety ─────────────────────────────────────────────
  ax("Labour Inspector", "doctor", ["ship-breaking", "safety", "workers"],
    sx("The ship-breaking beaches that feed the country's steel are death-traps — no safety gear, asbestos, men cut in half by falling plate, child labour at the torches. The inspector demands enforced standards; the yard owners say the margins cannot bear them.",
      ["Leave the yards to their own ways.", "Cheap steel needs cheap hands.", "The yards keep running on blood and asbestos. The steel stays cheap, the casualty list grows, and the next exposé brands the beaches the world's most lethal workplace.", { FI: 6, RE: 4, EN: -10 }],
      ["Enforce hard safety standards.", "Steel bought with a man a week is too dear.", "You force protective gear, asbestos controls, and an end to child labour. Margins thin and some yards close, but men stop dying by the dozen on the tide line.", { EN: 10, GL: 4, FI: -6, RE: -2 }])),

  // ── The grand inter-river link canal ────────────────────────────────────────
  ax("Water Development Chief", "official", ["rivers", "canal", "mega-project"],
    sx("Engineers propose a colossal canal to divert water from the wet south to the drought-prone north — a nation-reshaping project. The chief calls it a permanent answer to the north's thirst; ecologists warn it could wreck the river systems at both ends.",
      ["Greenlight the grand canal.", "A nation that moves its own water masters its fate.", "The mega-project launches to fanfare and a flood of contracts. The drought-prone north dreams of water, while ecologists count the rivers the canal will starve and drown.", { RE: 6, FI: -6, EN: -4 }],
      ["Shelve it for smaller, local schemes.", "A canal that breaks two rivers to fill one is folly.", "You set aside the grand scheme for modest local water projects. The headline-grabbing fix is gone, but the rivers keep their flow and the money spreads wider.", { EN: 6, RE: 2, FI: -2 }]),
    sx("You pressed ahead, and the canal's upstream intake has dried the wetlands and fisheries of the donor basin, igniting protests there even as the north celebrates its new water. The donor districts demand the intake be throttled back.",
      ["Keep the intake at full flow for the north.", "The north's thirst was the whole point.", "You hold the flow and the north blooms. The donor basin's fisheries collapse and its people, betrayed, turn the canal into a symbol of one region drained for another.", { RE: 4, EN: -10, FI: 2 }],
      ["Throttle the intake to spare the donor basin.", "I will not drown one region to water another.", "You cut the diversion back to a sustainable flow. The north's gains shrink and its boosters grumble, but the donor basin's wetlands and fishers are pulled back from ruin.", { EN: 8, RE: -2, FI: -2 }]),
    sx("With the canal half-built and half-cursed, the contractors — politically connected — demand the full budget regardless of the scaled-back flow, threatening to abandon the works and sue. You can pay them off or face a stalled, litigated ruin in the landscape.",
      ["Pay the contractors in full.", "A half-dug canal is worse than none.", "You pay out to keep the works moving. The connected contractors pocket the windfall, the budget bleeds, and the project limps on under a cloud of inflated bills.", { RE: 2, FI: -8, FA: 2, EN: -2 }],
      ["Hold them to the scaled-back contract.", "I will not be extorted by my own diggers.", "You refuse the padded claim and renegotiate to the reduced scope. The contractors threaten and litigate, but the public is spared paying full price for half a canal.", { FI: 4, EN: 2, FA: -2, RE: -2 }])),

  // ── National grid single point of failure ───────────────────────────────────
  ax("Grid Operations Chief", "official", ["grid", "blackout", "resilience"],
    sx("The national grid is so brittle that a single fault can — and once did — black out the entire country at once. The chief wants a costly redesign with regional islanding and redundancy; the money is wanted elsewhere until the next nationwide blackout.",
      ["Fund the grid-resilience redesign.", "A grid that fails all at once fails the whole nation at once.", "You fund islanding, redundancy, and modern controls. The cost is heavy and the benefit invisible between failures, but a single fault can no longer plunge the entire country into darkness.", { RE: 8, EN: 4, FI: -8 }],
      ["Patch the grid and hope.", "A full redesign is a budget for a disaster that may not come.", "You make do with patches. The money goes elsewhere, the brittle grid stays brittle, and the country waits, one bad fault away from another total nationwide blackout.", { FI: 4, RE: -6, EN: -4 }])),

  // ── Solar home systems vs grid extension ────────────────────────────────────
  ax("Rural Electrification Chief", "people", ["solar", "off-grid", "rural"],
    sx("Remote villages can be reached either by costly grid extension or by the off-grid solar home systems the country pioneered. The chief asks whether to push solar to the last villages now, or wait years to bring them the grid that powers heavier loads.",
      ["Push off-grid solar to the last villages.", "Light tonight beats a grid in a decade.", "You blanket the remote villages with solar home systems. Millions get clean light and phone-charging now, though the small panels cannot run the mills and pumps a grid eventually would.", { EN: 8, RE: 4, FI: -4 }],
      ["Wait and extend the full grid.", "A village deserves real power, not a panel.", "You hold out to bring the villages the full grid. They wait years longer in darkness, but when the lines arrive they carry the heavy loads that solar panels never could.", { RE: 4, EN: -4, FI: -2 }])),

  // ── Coal-plant retirement / just transition ─────────────────────────────────
  ax("Power Transition Adviser", "people", ["coal", "retirement", "workers"],
    sx("Pressure mounts to retire the ageing, dirty coal plants ahead of schedule. Doing so cleans the air and the country's image, but strands billions in assets and throws thousands of plant and mine workers out of work in towns built around the coal.",
      ["Retire the coal plants with a just transition.", "A dying industry should be eased to rest, not abandoned.", "You retire the plants early and fund retraining and new industry for the coal towns. The stranded-asset cost is steep, but the air clears, the image brightens, and the workers are not simply discarded.", { EN: 8, GL: 4, RE: -2, FI: -8 }],
      ["Keep the coal plants running to term.", "I will not strand billions and a workforce for an early exit.", "You keep the coal plants running to their full life. The assets and jobs are preserved, the towns stay employed, and the dirty smoke and the climate criticism keep mounting year on year.", { RE: 4, FI: 2, EN: -8, GL: -4 }])),

  // ── Strategic petroleum reserve ─────────────────────────────────────────────
  ax("Energy Security Director", "official", ["fuel", "reserve", "resilience"],
    sx("The country holds only days of fuel stock, leaving it dangerously exposed to any supply shock or blockade. The director wants a costly strategic petroleum reserve and bigger storage depots; the capital is large and the threat feels abstract in calm times.",
      ["Build a strategic fuel reserve.", "A nation with days of fuel is a nation days from paralysis.", "You build the strategic reserve and expand storage. The capital outlay is large, but the next supply shock or blockade meets a buffer instead of an instant fuel crisis.", { RE: 8, MI: 2, FI: -8 }],
      ["Run on thin fuel stocks.", "A reserve is a fortune frozen against a maybe.", "You keep stocks thin to save the capital. The money stays free for other needs, and the country stays days away from paralysis should any supply shock or blockade come.", { FI: 4, RE: -6, MI: -2 }])),

  // ── LPG for rural cooking ───────────────────────────────────────────────────
  ax("Energy Access Director", "people", ["lpg", "cooking", "health"],
    sx("Most rural households still cook on smoky biomass, ruining women's lungs and the forests. A push to make bottled LPG cheap and available would change that — through subsidy and a safe distribution network, or you can leave the woodsmoke as it is.",
      ["Subsidise rural LPG access.", "A woman's lungs are worth more than the price of a cylinder.", "You subsidise LPG and build safe distribution. Woodsmoke recedes from kitchens, women's health improves and the forests get a reprieve, and the subsidy and cylinder-safety burden fall on the budget.", { EN: 8, RE: 4, FI: -6 }],
      ["Leave rural cooking to biomass.", "An LPG subsidy is a cost the budget cannot carry.", "You leave rural kitchens to firewood and dung. The budget is spared, and women keep breathing woodsmoke into ruined lungs while the forests keep falling for fuel.", { FI: 4, RE: -4, EN: -6 }])),

  // ── Gas pipeline from a neighbour ───────────────────────────────────────────
  ax("Energy Diplomacy Director", "ambassador", ["pipeline", "gas", "dependence"],
    sx("A regional gas pipeline could bring steady, cheaper gas across borders for decades — energy security of a kind — but it threads through and depends on neighbours' goodwill, and chains your grid to a fuel and a transit route others control.",
      ["Commit to the cross-border gas pipeline.", "Steady gas for decades is worth a careful diplomacy.", "You commit to the pipeline and cheaper gas begins to flow. Your energy security improves and your dependence deepens, your grid now hostage to a transit route and a neighbour's goodwill.", { RE: 8, FI: 2, GL: 2, MI: -4 }],
      ["Invest in domestic supply instead.", "A pipeline through a neighbour is a valve in his hand.", "You forgo the pipeline for domestic exploration and LNG. The gas is costlier and slower, but no foreign hand rests on the valve that feeds your grid.", { MI: 4, RE: -4, FI: -4 }])),

  // ── Nuclear-waste storage ───────────────────────────────────────────────────
  ax("Atomic Energy Chairman", "official", ["nuclear", "waste", "safety"],
    sx("The new nuclear plant will soon produce spent fuel that must be stored safely for generations, and no permanent solution exists. The chairman can fund a proper long-term storage and safety regime now, or rely on the foreign builder's vague take-back promise and hope.",
      ["Fund proper long-term waste storage.", "A poison that lasts ten thousand years deserves a plan.", "You invest in genuine spent-fuel storage and safety. The cost is large and the benefit unseen for decades, but you do not leave a radioactive legacy to be improvised by your grandchildren.", { RE: 4, EN: 6, FI: -8 }],
      ["Rely on the builder's take-back promise.", "The Russians said they would handle it; let them.", "You lean on the foreign builder's vague assurances and defer the problem. The money is saved now, and a growing pile of spent fuel waits on a promise no contract firmly guarantees.", { FI: 4, RE: 2, EN: -6 }])),

  // ── Captive industrial power ────────────────────────────────────────────────
  ax("Power Regulator", "official", ["captive-power", "industry", "grid"],
    sx("Big factories run their own gas-fired captive power plants, abandoning the grid because it is unreliable — which starves the grid of its best customers and worsens it for everyone else. The regulator can force them back onto the grid, or let industry self-supply.",
      ["Force big industry back onto the grid.", "A grid the strong abandon collapses on the weak.", "You compel the factories to draw from the grid and surrender their gas. The grid's finances and reliability improve for all, and the industrialists rage at losing their dependable captive power.", { RE: 6, EN: 4, FI: 2, FA: -4 }],
      ["Let industry keep captive power.", "A factory that cannot trust the grid will make its own.", "You let the factories self-supply. Industry keeps its reliable power, and the grid, abandoned by its best customers, grows weaker and dearer for the households and small firms left on it.", { RE: -4, FA: 2, EN: -4 }])),

  // ── GM crop / Bt brinjal ────────────────────────────────────────────────────
  ax("Agriculture Research Director", "doctor", ["gm-crops", "seeds", "farmers"],
    sx("A genetically-modified pest-resistant crop could cut pesticide use and lift yields, but activists warn of seed-company dependence and unknown risks, and the public is uneasy. The director asks whether to approve and promote it or hold back.",
      ["Approve and promote the GM crop.", "A crop that needs no poison feeds more for less.", "You approve the GM variety and yields rise as pesticide use falls. The activists protest seed dependence and unknown risks, and farmers gain a hardier crop and a tie to the seed company that owns it.", { RE: 6, EN: 2, FI: 2 }],
      ["Hold back on the GM crop.", "I will not bet the food supply on an untested gene.", "You decline to approve it, citing precaution. The pesticide-heavy status quo persists and yields stay flat, but the food supply is not staked on a technology the public distrusts and a seed firm controls.", { EN: 2, RE: -2 }])),

  // ── Coastal greenbelt mangroves ─────────────────────────────────────────────
  ax("Coastal Afforestation Chief", "relief", ["mangroves", "greenbelt", "cyclone"],
    sx("A planted mangrove greenbelt along the coast would blunt cyclones and storm surges and nurse fisheries — but the land is coveted for shrimp farms and salt pans, and the planting is slow and easily encroached. The chief asks whether to commit to the greenbelt.",
      ["Commit to the coastal mangrove greenbelt.", "A wall of trees stops a wave no concrete can.", "You commit land and money to the greenbelt and protect it from encroachment. The shrimp and salt interests resist losing the coast, but a living storm-barrier rises and the fisheries it nurses revive.", { EN: 8, RE: 4, FI: -4, FA: -2 }],
      ["Leave the coast to shrimp and salt.", "The coast earns more in ponds than in trees.", "You let the lucrative shrimp and salt keep the coast. The export earnings flow, the greenbelt goes unplanted, and the next cyclone hits a shore stripped of the trees that would have softened it.", { FI: 4, RE: -2, EN: -6 }])),

  // ── Reserve-forest encroachment ─────────────────────────────────────────────
  ax("Forest Conservator", "shadow", ["forest", "encroachment", "powerful"],
    sx("Reserve forest is being carved up and grabbed for resorts, plantations, and estates by the politically powerful, the boundary pillars quietly moved. The conservator can mount evictions and restore the boundaries, confronting connected grabbers, or look the other way.",
      ["Evict the grabbers, restore the forest.", "A reserve forest sold off in pieces is a lung removed.", "You evict the encroachers and reset the boundaries, however connected they are. The powerful grabbers rage and litigate, but the reserve forest is clawed back from the resort-builders and planters.", { EN: 8, RE: 6, FA: -6 }],
      ["Look the other way.", "The men moving those pillars are men I rely on.", "You leave the encroachments alone. The connected grabbers keep their slices of forest, the boundary pillars stay where they were quietly moved, and the reserve shrinks resort by resort.", { FA: 4, FI: 2, EN: -8, RE: -4 }])),

  // ── Rooftop / floating solar mandate ────────────────────────────────────────
  ax("Renewable Energy Adviser", "official", ["solar", "floating", "land"],
    sx("Land is scarce, but your reservoirs, canals, and factory rooftops could host vast floating and rooftop solar arrays. The adviser wants a hard mandate and incentives to cover them; the utilities and some industries resist the disruption and cost.",
      ["Mandate floating and rooftop solar.", "A nation short of land is rich in roofs and water.", "You mandate solar on reservoirs, canals, and rooftops. The utilities and industries grumble at the cost and disruption, but clean power grows without consuming farmland, and imports ease.", { EN: 6, RE: 6, FI: -4 }],
      ["Leave solar deployment to the market.", "A mandate forces cost on the unwilling.", "You leave solar to voluntary uptake. The disruption and cost are avoided, and the rooftops and reservoirs stay bare while the country keeps burning imported fuel it need not.", { FI: 2, RE: -4, EN: -4 }])),

  // ── Hard-rock mine at Maddhapara ────────────────────────────────────────────
  ax("Mining Bureau Director", "fixer", ["hard-rock", "mining", "contracts"],
    sx("The country's only hard-rock mine, run at a chronic loss under a padded foreign operating contract, supplies stone the construction boom craves. The director can renegotiate the corrupt contract and modernise — angering connected middlemen — or keep importing the difference.",
      ["Renegotiate the contract and modernise.", "A mine that loses money on every stone is a contract, not a mine.", "You tear up the padded contract and modernise operations. The connected middlemen who skimmed it howl, but the mine moves toward profit and supplies the construction stone now imported at cost.", { RE: 6, FI: 4, FA: -4 }],
      ["Keep the contract and import the rest.", "The men running that contract are not lightly crossed.", "You leave the loss-making contract intact and import the shortfall. The middlemen stay happy and the mine stays a drain, and the construction boom keeps paying to import stone you have under your own ground.", { FA: 4, RE: -2, FI: -4 }])),

  // ── Rock-phosphate / fertilizer feedstock ───────────────────────────────────
  ax("Fertilizer Supply Director", "official", ["fertilizer", "phosphate", "import"],
    sx("The country imports nearly all the rock phosphate and potash its fertilizer depends on, leaving farmers exposed to world price spikes. The director wants costly long-term supply contracts and buffer stocks; the alternative is cheaper spot buying and exposure to the next shock.",
      ["Lock in long-term supply and buffers.", "A harvest hostage to a world price is a famine on a futures chart.", "You sign long-term phosphate and potash contracts and build buffer stocks. The cost and commitment are real, but the farmers are shielded from the next world price spike that would have wrecked a season.", { RE: 6, EN: 4, FI: -6 }],
      ["Buy cheap on the spot market.", "Why pay to hedge a price that might fall?", "You keep buying fertilizer feedstock cheaply on the spot market. The savings are real in calm years, and the next price spike passes straight through to the farmers and the harvest.", { FI: 4, RE: -4, EN: -4 }])),

  // ── Improved cookstove programme ────────────────────────────────────────────
  ax("Energy Access Director", "people", ["cookstoves", "health", "forests"],
    sx("Cheap, clean-burning improved cookstoves would cut the woodsmoke killing rural women and the deforestation feeding their fires — a modest, proven intervention that nonetheless needs subsidy, distribution, and the patience to change a deep habit.",
      ["Roll out improved cookstoves widely.", "A better stove is a longer life and a standing tree.", "You subsidise and distribute clean cookstoves across the villages. The habit is slow to change and the cost real, but women's lungs and the forests both get relief, fire by fire.", { EN: 6, RE: 4, FI: -4 }],
      ["Leave cooking habits alone.", "A stove programme is a small return for a real cost.", "You skip the cookstove push. The budget is spared, and rural women keep cooking over smoky open fires, their lungs and the surrounding forests paying the quiet price.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Independent power-producer renegotiation ────────────────────────────────
  ax("Power Cell Director", "fixer", ["ipp", "contracts", "renegotiation"],
    sx("The old independent power-producer contracts lock in dollar-indexed tariffs far above today's market, draining the utility — and they were signed with firms tied to your own party. The director can force a renegotiation, angering the donors, or honour the ruinous terms.",
      ["Force the IPP contracts down.", "A tariff from a fatter year is a wound in a leaner one.", "You force the IPPs to renegotiate toward market rates. The party-linked producers rage and threaten arbitration, but the utility stops bleeding dollars on power priced for a richer decade.", { RE: 4, FI: 6, FA: -6 }],
      ["Honour the costly IPP terms.", "My donors' contracts are not lightly reopened.", "You honour the old terms to keep the donor-producers content. They stay loyal and rich, and the utility keeps paying dollar-indexed tariffs that drain it and, through it, every consumer.", { FA: 4, RE: -2, FI: -6 }])),

  // ── Surface-water city supply ───────────────────────────────────────────────
  ax("Water Supply Director", "official", ["water", "surface", "groundwater"],
    sx("The big cities drink their aquifers dry because surface-water treatment is costly to build. The director wants a major shift to treated river water to save the sinking groundwater; the capital is enormous and the rivers themselves are filthy and need cleaning first.",
      ["Build the surface-water supply system.", "A city drinking its own foundations away is doomed.", "You commit to treated surface water and the river-cleaning it requires. The capital is vast and the build long, but the aquifers steady and the cities gain a sustainable source of drink.", { RE: 6, EN: 6, FI: -10 }],
      ["Keep pumping the groundwater.", "Surface water is a budget for the next decade, not this one.", "You keep the cities on cheap, fast groundwater. The money is saved now, and the aquifers keep falling and the land keeps sinking toward the day the wells run dry or the ground gives way.", { FI: 4, RE: -6, EN: -4 }])),

  // ── Dairy and livestock self-sufficiency ────────────────────────────────────
  ax("Livestock Development Director", "people", ["dairy", "livestock", "imports"],
    sx("The country imports most of its milk powder while smallholder dairy farmers struggle for want of feed, breeds, and a fair market. The director wants a costly push for domestic dairy self-sufficiency; the importers and the cheaper foreign powder resist.",
      ["Drive domestic dairy self-sufficiency.", "A nation that imports its milk has surrendered its breakfast.", "You invest in feed, breeds, chilling, and markets for smallholder dairy. The importers fight and the build is slow, but domestic milk grows and a vast cohort of small farmers gains a living.", { EN: 8, RE: 2, FI: -6 }],
      ["Keep importing cheap milk powder.", "Cheap powder feeds children the budget cannot.", "You keep relying on imported powder. Milk stays cheap on the shelf, and the smallholder dairy farmers keep struggling against a foreign product the state will not help them beat.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Pond and canal re-excavation ────────────────────────────────────────────
  ax("Water Development Officer", "people", ["ponds", "canals", "irrigation"],
    sx("A vast programme to re-excavate the silted-up ponds and canals would restore irrigation, fish, and flood-buffering across the countryside — labour-intensive, leak-prone to local graft, but transformative for rural water. The officer asks whether to launch it big.",
      ["Launch the big re-excavation programme.", "A cleared canal waters a hundred fields.", "You launch the mass re-excavation, creating rural jobs and restoring water bodies. Some funds leak to local graft, but irrigation, fisheries, and flood-buffering revive across the countryside.", { EN: 8, RE: 6, FI: -6 }],
      ["Keep it small and tightly controlled.", "A vast labour scheme is a vast skimming opportunity.", "You run only a modest, closely-audited version. The graft is contained, and most silted ponds and canals stay choked, their irrigation and flood-buffering lost to the countryside.", { FI: 2, RE: 2, EN: -2 }])),

  // ── Seed-company monopoly ───────────────────────────────────────────────────
  ax("Agriculture Research Director", "people", ["seeds", "monopoly", "sovereignty"],
    sx("A handful of seed companies are cornering the market with hybrids that cannot be saved and replanted, binding farmers to buy anew each season. The director wants a strong public seed system to preserve farmer-saved varieties; the seed firms lobby hard against it.",
      ["Build a strong public seed system.", "A farmer who cannot save his seed is a tenant of a corporation.", "You fund public seed banks and farmer-saved varieties alongside the hybrids. The seed companies lobby furiously, but farmers keep an alternative to buying their seed anew every single season.", { EN: 6, RE: 4, FI: -4 }],
      ["Leave seeds to the market.", "The hybrids yield more; the market knows best.", "You leave the seed market to the companies. Yields from the hybrids are high, and the farmers grow ever more dependent on buying patented seed each season from a shrinking handful of firms.", { RE: 2, FI: 2, EN: -4 }])),

  // ── Eastern refinery expansion ──────────────────────────────────────────────
  ax("Petroleum Refining Director", "official", ["refinery", "fuel", "self-reliance"],
    sx("The country's lone, ancient oil refinery meets a fraction of fuel demand, so most fuel is imported already-refined at a premium. The director wants a costly second refinery for self-reliance; the alternative is to keep importing refined product and skip the capital.",
      ["Build the second refinery.", "A nation that cannot refine its own crude pays twice.", "You commit to a modern second refinery. The capital is enormous and the build long, but the country gains the capacity to refine its own and stops paying the premium on imported product.", { RE: 6, FI: -8, EN: 2 }],
      ["Keep importing refined fuel.", "A refinery is a fortune for a margin I can simply pay.", "You keep importing refined fuel and skip the capital. The money stays free for other needs, and the country stays dependent on foreign refineries and the premium they charge.", { FI: 4, RE: -4 }])),

  // ── Groundwater recharge / rainwater ────────────────────────────────────────
  ax("Water Resources Officer", "people", ["recharge", "rainwater", "aquifer"],
    sx("As aquifers fall, a programme of managed recharge — capturing monsoon rain to refill the groundwater — could slow the decline. The officer wants mandatory rainwater harvesting in cities and recharge structures in the countryside; it is cheap per site but vast in scale and easy to neglect.",
      ["Mandate recharge and rainwater harvesting.", "Water taken from the ground must be paid back to it.", "You mandate harvesting and recharge at scale. Enforcement is a grind across countless sites, but the monsoon's water starts refilling the aquifers instead of running wasted to the sea.", { RE: 6, EN: 4, FI: -4 }],
      ["Leave water use to draw down freely.", "A mandate on every roof and field is unenforceable.", "You skip the recharge mandate as impractical. The administrative burden is avoided, and the aquifers keep falling as the monsoon runs off unwasted-into-the-sea and the wells sink deeper.", { FI: 2, RE: -6, EN: -2 }])),

  // ── Crop diversification away from rice ─────────────────────────────────────
  ax("Agriculture Policy Director", "people", ["crops", "diversification", "water"],
    sx("The obsession with thirsty rice drains the aquifers and leaves diets and incomes undiversified. The director wants incentives to shift toward less-thirsty, higher-value crops — pulses, oilseeds, vegetables — against the grain of farmer habit and rice-centric food policy.",
      ["Incentivise crop diversification.", "A country that grows only rice mines its own water.", "You incentivise the shift to less-thirsty, higher-value crops. Farmer habit and the rice-first policy resist, but diets diversify, incomes rise, and the aquifer-draining rice monoculture loosens its grip.", { EN: 6, RE: 6, FI: -4 }],
      ["Keep the rice-first policy.", "Rice is food security; do not gamble the staple.", "You keep prioritising rice. Food security feels assured and farmers stay on familiar ground, and the thirsty monoculture keeps draining the aquifers and narrowing the nation's diet and incomes.", { EN: 2, RE: -4, FI: 2 }])),

  // ── Turtle and marine hatchery ──────────────────────────────────────────────
  ax("Marine Conservation Officer", "relief", ["turtles", "marine", "tourism"],
    sx("The coast's sea-turtle nesting beaches are being lost to lights, nets, and development. A protected hatchery-and-beach programme would save them and draw eco-tourism, at the cost of restricting the fishing and building that the coastal economy leans on.",
      ["Protect the nesting beaches and hatcheries.", "A coast that loses its turtles loses a wonder and a draw.", "You ring off nesting beaches, fund hatcheries, and curb the lights and nets. The coastal fishers and developers chafe at the limits, but the turtles return and eco-tourism follows.", { EN: 6, RE: 2, FI: -2 }],
      ["Leave the coast to fishing and building.", "A turtle is a poor return on prime coast.", "You leave the beaches to development and nets. The coastal economy keeps its ground, and the turtle populations dwindle toward local extinction under the lights and the trawls.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Grid-scale battery storage ──────────────────────────────────────────────
  ax("Grid Modernisation Director", "official", ["storage", "battery", "renewables"],
    sx("Solar and wind are useless after dark and in calm without storage, and the grid cannot absorb them. The director wants a costly grid-scale battery programme to make renewables dispatchable; the alternative is to keep leaning on fossil plants for reliable power.",
      ["Invest in grid-scale battery storage.", "Sunshine saved for the evening is sunshine that counts.", "You fund battery storage and the grid can finally absorb and time-shift renewables. The capital is steep, but solar and wind become reliable power instead of daytime novelties, and fossil dependence eases.", { RE: 8, EN: 4, FI: -8 }],
      ["Keep leaning on fossil baseload.", "Batteries are a fortune for power I already have.", "You skip the storage and keep the fossil plants as backbone. The money is saved, and the renewables you build stay a fair-weather supplement the grid cannot truly rely on.", { FI: 4, RE: -4, EN: -4 }])),

  // ── Gas-system loss / illegal connections ───────────────────────────────────
  ax("Gas Distribution Chief", "shadow", ["gas", "system-loss", "theft"],
    sx("A fifth of the piped gas vanishes through illegal connections, tampered meters, and bribed staff, much of it serving captive industrial and elite users. The chief can mount a hard anti-theft drive that hits connected beneficiaries, or keep absorbing the loss.",
      ["Crack down on the gas theft.", "Gas stolen by the connected is paid for by the metered.", "You hunt the illegal connections and tampered meters and purge the complicit staff. The connected thieves and their patrons rage, but the system loss falls and the honest stop subsidising the powerful.", { RE: 6, FI: 4, FA: -4 }],
      ["Absorb the system loss.", "A theft drive against the connected is a war I need not start.", "You leave the gas theft alone. The connected keep their illegal taps and tampered meters, and the vanishing fifth of the gas is quietly billed, through tariffs, to those who actually pay.", { FA: 2, RE: -4, FI: -2 }])),

  // ── Social forestry vs reserve protection ───────────────────────────────────
  ax("Forest Department Chief", "people", ["forestry", "communities", "livelihoods"],
    sx("A social-forestry scheme would let poor villagers grow and harvest trees on degraded state land — income for them, green cover for the country — but done carelessly it becomes a backdoor to clear-felling and grabbing the very forest it should grow. The chief asks how to design it.",
      ["Run a genuine community social-forestry scheme.", "A forest the poor profit from is a forest the poor defend.", "You design a real benefit-sharing scheme on degraded land with safeguards against grabbing. The poor gain income and the country green cover, and the forest gains guardians instead of poachers.", { EN: 6, RE: 4, FI: -2 }],
      ["Let the scheme run loose.", "Trees planted are trees planted, however it is done.", "You roll it out without tight safeguards. The headline planting numbers rise, and the scheme becomes a backdoor for clear-felling and grabbing the forest under cover of growing it.", { RE: -2, FA: 2, EN: -4 }])),

  // ── Tidal / coastal renewable pilot ─────────────────────────────────────────
  ax("Renewable Research Director", "official", ["tidal", "pilot", "innovation"],
    sx("The strong tidal range of the estuaries could, in theory, drive tidal power — a clean, novel source. A pilot would be costly and unproven, a gamble on innovation; the safe path is to stick with proven solar and wind and let others pioneer the tides.",
      ["Fund the tidal-energy pilot.", "A nation of rivers should learn to harvest its tides.", "You fund the tidal pilot. It is a gamble on unproven technology, and if it works the estuaries gain a clean, novel power source the country could pioneer for the region.", { RE: 4, EN: 2, FI: -6 }],
      ["Stick with proven solar and wind.", "Let richer nations gamble on the tides.", "You skip the tidal gamble for proven renewables. The capital is spared the risk, and the chance to pioneer a novel clean source suited to your estuaries passes to someone else.", { RE: 2, FI: 2, EN: 2 }])),

  // ── Edible-oil import vs domestic oilseed ───────────────────────────────────
  ax("Agriculture Policy Director", "people", ["edible-oil", "oilseed", "imports"],
    sx("The country imports almost all its cooking oil, draining dollars and leaving prices hostage to world markets. A push for domestic mustard, sunflower, and soy oilseed would build self-reliance — slow, and competing for the same scarce land as food grains.",
      ["Drive domestic oilseed self-reliance.", "A kitchen run on imported oil is a kitchen run from abroad.", "You incentivise oilseed cultivation and crushing. It competes for scarce land and the payoff is slow, but the cooking-oil import bill begins to fall and prices steady against world shocks.", { RE: 4, EN: 4, FI: -2 }],
      ["Keep importing cheap cooking oil.", "Imported oil is cheap and the land is needed for rice.", "You keep relying on imported edible oil. The land stays in grain and the oil stays cheap on the shelf, and every world price spike passes straight into the nation's kitchens.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Sugar mills (loss-making SOE) ───────────────────────────────────────────
  ax("Sugar Corporation Chief", "people", ["sugar-mills", "soe", "farmers"],
    sx("The state sugar mills lose money every year on obsolete machinery and graft, but tens of thousands of cane farmers and mill workers depend on them. The chief can shut or privatise the worst, stemming the losses, or pour in another bailout and modernisation gamble.",
      ["Shut or privatise the loss-making mills.", "A mill that only crushes losses crushes nothing.", "You close or sell the worst mills and stem the bleeding. The freed budget is real, and the cane farmers and mill towns built around the mills are left stranded and furious.", { FI: 8, RE: 2, EN: -8 }],
      ["Bail out and modernise the mills.", "The cane belt has nowhere else to turn.", "You fund a modernisation gamble to save the mills and the cane belt. The cost is heavy and the odds uncertain, but the farmers and workers keep their livelihood and a chance at a viable industry.", { EN: 6, RE: 2, FI: -8 }])),

  // ── Post-harvest loss / cold chain ──────────────────────────────────────────
  ax("Agriculture Marketing Director", "people", ["post-harvest", "cold-chain", "waste"],
    sx("A third of the fruit and vegetables rot between farm and market for want of storage, cold chain, and roads — a staggering waste that beggars farmers and inflates prices. The director wants a costly cold-chain and storage build; the capital is large and the gain diffuse.",
      ["Build the cold chain and storage.", "A harvest that rots on the road feeds no one and ruins the grower.", "You invest in cold storage, packhouses, and farm-to-market links. The capital is heavy, but the rotting waste falls sharply, farmers earn more, and consumers pay less for what no longer spoils.", { EN: 6, RE: 4, FI: -6 }],
      ["Leave the supply chain as it is.", "A cold chain is a fortune for a problem the market lives with.", "You leave the produce to rot as it always has. The capital is spared, and a third of the harvest keeps spoiling between farm and plate, beggaring farmers and inflating prices.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Fly-ash brick from coal plants ──────────────────────────────────────────
  ax("Industries Resource Officer", "official", ["fly-ash", "bricks", "topsoil"],
    sx("The coal plants pile up fly-ash as toxic waste, while the brick kilns devour the country's topsoil. Mandating fly-ash bricks would solve both — using the waste, sparing the soil — but it disrupts the entrenched clay-brick industry and its army of workers.",
      ["Mandate fly-ash brick production.", "A waste that builds is better than a soil that burns.", "You mandate fly-ash bricks. The clay-kiln industry resists and some workers are displaced, but the toxic ash finds a use, the topsoil is spared, and the smoggy clay kilns lose their grip.", { EN: 6, RE: 4, FI: -2 }],
      ["Leave the clay-brick industry alone.", "A million kiln workers outweigh a pile of ash.", "You leave the clay kilns be. The workers keep their jobs, and the fly-ash keeps piling up toxic while the kilns keep burning the country's topsoil into bricks.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Marine protected area ───────────────────────────────────────────────────
  ax("Marine Resources Director", "relief", ["marine", "protected-area", "fisheries"],
    sx("Declaring a large marine protected area in the bay would let the overfished stocks recover and safeguard biodiversity — a long-term gift to the fishery — but it locks the trawler fleet and the artisanal fishers out of rich grounds in the short term.",
      ["Declare the marine protected area.", "A sea given rest is a sea that feeds again.", "You ring off the protected area and the stocks within it rebound, spilling fish into the surrounding waters over time. The trawlers and fishers locked out protest the short-term loss bitterly.", { RE: 6, EN: 4, FI: -4 }],
      ["Keep the grounds open to fishing.", "A fisher kept off the water today does not eat today.", "You leave the rich grounds open. The fishers keep their catch this season, and the overfished stocks slide further toward collapse, taking the fishery's future down with them.", { FI: 2, RE: -6, EN: -2 }])),

  // ── Transmission line right-of-way ──────────────────────────────────────────
  ax("Grid Expansion Director", "people", ["transmission", "land", "evacuation"],
    sx("New power plants sit idle for want of transmission lines to evacuate their power, and the lines are stalled by land disputes and farmers refusing the towers across their fields. The director can force the right-of-way through with compulsory acquisition, or negotiate slow and fair.",
      ["Force the right-of-way through.", "A plant that cannot send its power is a monument.", "You push the lines through with compulsory acquisition. The towers rise fast and the stranded plants finally deliver, and the dispossessed farmers, paid little and asked less, nurse a lasting grievance.", { RE: 6, FI: 2, EN: -6 }],
      ["Negotiate fair, slow right-of-way.", "A tower on a man's field should be a deal, not a decree.", "You negotiate fair compensation and routing with the farmers. The lines come slowly and the plants stay idle longer, but the right-of-way is won by consent rather than coercion.", { EN: 6, RE: -2, FI: -4 }])),

  // ── Tea-garden expansion into forest ────────────────────────────────────────
  ax("Plantation Affairs Officer", "fixer", ["tea", "forest", "expansion"],
    sx("Tea companies want to expand their estates into adjoining reserve forest and indigenous land — more export tea, at the cost of felled forest and displaced hill communities. The officer asks whether to grant the leases or protect the forest and the people on it.",
      ["Grant the tea-estate expansion.", "Tea is dollars; forest is just trees.", "You grant the leases and the estates spread into the forest. Export tea grows, and felled forest and displaced hill communities pay for it, and another grievance hardens in the hills.", { FI: 6, RE: -4, EN: -8 }],
      ["Protect the forest and the communities.", "An estate built on a felled forest and a displaced people is a poor brew.", "You refuse the expansion into forest and indigenous land. The tea companies lose their growth and grumble, but the forest stands and the hill communities keep the ground beneath them.", { EN: 8, RE: 4, FI: -4, FA: -2 }])),

  // ── Solar irrigation pumps ──────────────────────────────────────────────────
  ax("Irrigation Technology Director", "people", ["solar-pumps", "irrigation", "diesel"],
    sx("Replacing the diesel and grid pumps that irrigate the fields with solar-powered ones would slash the fuel bill and emissions and free farmers from fuel-price shocks — a large upfront cost, against the cheap, familiar diesel status quo.",
      ["Drive the solar-irrigation rollout.", "A pump that runs on sunlight runs on nothing dear.", "You subsidise solar irrigation pumps across the farmland. The upfront cost is large, but farmers escape diesel-price shocks, the fuel bill and emissions fall, and the fields water themselves on sunshine.", { RE: 6, EN: 6, FI: -6 }],
      ["Stick with diesel and grid pumps.", "A solar pump is a fortune against a jerrycan of diesel.", "You leave irrigation on diesel and grid power. The upfront cost is dodged, and the farmers stay hostage to fuel prices while the pumps keep burning diesel and draining the subsidy.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Dried-fish (shutki) and coastal trade ───────────────────────────────────
  ax("Coastal Fisheries Officer", "people", ["dried-fish", "pesticides", "exports"],
    sx("The dried-fish trade — a coastal staple and growing export — is rife with illegal pesticide use to keep flies off the drying racks, poisoning consumers and threatening the export market. The officer wants enforcement and clean drying tech; the traders resist the cost.",
      ["Enforce clean drying, ban the pesticides.", "A staple cured in poison is a slow harm to millions.", "You ban the pesticides and fund clean drying technology. The traders resist the cost, but the dried fish on the nation's plates and in the export crates stops carrying its hidden poison.", { EN: 6, RE: 2, FI: -2 }],
      ["Leave the dried-fish trade alone.", "The trade is cheap and the demand is high.", "You leave the drying racks and their pesticides be. The trade stays cheap and busy, and the dried fish keeps reaching plates and export markets laced with the chemicals that keep the flies off.", { FI: 2, EN: -6, RE: -2 }])),

  // ── Mineral / geological survey ─────────────────────────────────────────────
  ax("Geological Survey Director", "official", ["minerals", "survey", "sovereignty"],
    sx("A thorough national mineral survey could reveal coal, gas, hard rock, and rare minerals worth fortunes — knowledge that is power, and a magnet for foreign extractors and the conflicts that follow discovery. The director asks whether to survey aggressively or tread lightly.",
      ["Survey aggressively and map the wealth.", "A nation ignorant of its own ground is poorer for it.", "You fund an aggressive survey and the map of the country's mineral wealth fills in. Knowledge is gained, and so is the attention of foreign extractors and the disputes that ride on every discovery.", { RE: 6, FI: 2, EN: -2 }],
      ["Survey cautiously and slowly.", "A discovery is a curse as often as a blessing.", "You proceed with a slow, cautious survey. You forgo the rush of knowledge and investment, and avoid lighting the fuse of extraction conflicts and foreign appetite that a full mineral map would.", { EN: 2, RE: -2 }])),

  // ── Char afforestation ──────────────────────────────────────────────────────
  ax("Coastal Afforestation Officer", "relief", ["char", "afforestation", "land"],
    sx("Planting forests on the new coastal chars would stabilise the silt islands, buffer storms, and eventually create land for the landless — slow, unglamorous work, easily neglected, competing with the rush to hand the chars to shrimp farms and grabbers.",
      ["Fund char afforestation and stabilisation.", "A planted char becomes solid ground for the landless.", "You fund the slow work of foresting and stabilising the chars. The shrimp interests and grabbers eye the land hungrily, but the islands solidify, buffer the storms, and become future homes for the landless.", { EN: 6, RE: 6, FI: -4, FA: -2 }],
      ["Hand the chars to shrimp and developers.", "The chars earn more in ponds than in saplings.", "You let the chars go to shrimp farms and grabbers. The export earnings flow and the powerful are pleased, and the unstabilised islands stay storm-prone and the landless landless.", { FI: 4, RE: -4, EN: -4, FA: 2 }])),

  // ── Land-ceiling enforcement ────────────────────────────────────────────────
  ax("Land Reform Commissioner", "people", ["land-ceiling", "landless", "elite"],
    sx("Land-ceiling laws meant to cap how much one family can own are flouted wholesale through benami holdings, while millions are landless. The commissioner wants real enforcement and redistribution of the surplus; the great landholders, many connected, will fight to the death.",
      ["Enforce the land ceiling and redistribute.", "Land hoarded past the law is land owed to the landless.", "You enforce the ceiling, pierce the benami holdings, and redistribute surplus land. The great landholders rage and pull every string, but millions of the landless gain ground of their own.", { EN: 10, RE: 4, FA: -8 }],
      ["Leave the land ceiling unenforced.", "The great landholders are the spine of rural power.", "You leave the ceiling a dead letter. The connected landlords keep their vast holdings behind false names, and the landless millions stay landless, tenants and labourers on ground the law says they should share.", { FA: 6, FI: 2, EN: -8 }])),

  // ── Agricultural mechanisation ──────────────────────────────────────────────
  ax("Farm Mechanisation Director", "people", ["mechanisation", "labour", "yields"],
    sx("Mechanising the farms — harvesters, tillers, transplanters — would raise yields and ease the brutal labour, especially as workers leave for the cities. But it would also throw landless farm labourers, who have nothing else, out of their only work. The director asks how hard to push.",
      ["Push mechanisation hard.", "A farm that cannot find hands must find machines.", "You subsidise farm machinery widely. Yields rise and the labour eases as workers drift cityward, and the landless labourers who relied on harvest wages find the machines have taken their last work.", { RE: 6, FI: -4, EN: -4 }],
      ["Mechanise gently, protect farm labour.", "A machine that idles the landless feeds the slum, not the field.", "You phase mechanisation in slowly with retraining for displaced labourers. Yields rise more modestly, but the landless are not thrown off the land all at once into the cities' slums.", { EN: 6, RE: 2, FI: -4 }])),

  // ── Used-oil and tyre recycling ─────────────────────────────────────────────
  ax("Industrial Waste Officer", "official", ["recycling", "used-oil", "pollution"],
    sx("Used engine oil and scrap tyres are dumped or burned in toxic backyard operations that poison soil and air. A formal recycling and pyrolysis industry could turn the waste to value cleanly — at a cost the informal burners and dumpers will resist.",
      ["Build formal oil and tyre recycling.", "A tyre burned in a yard is a poison breathed in a slum.", "You license clean recycling and pyrolysis and crack down on backyard burning. The informal operators resist losing their cheap trade, but the toxic dumping and burning recede and the waste finds clean value.", { EN: 6, RE: 4, FI: -2 }],
      ["Leave waste-oil and tyres to the informal trade.", "The backyard burners harm no one the budget answers for.", "You leave the backyard burning and dumping be. The cheap informal trade carries on, and the used oil and burning tyres keep poisoning the soil, the air, and the slums around them.", { FI: 2, RE: -2, EN: -6 }])),

  // ── Net-billing / feed-in tariff ────────────────────────────────────────────
  ax("Energy Regulator", "official", ["feed-in-tariff", "solar", "investment"],
    sx("A generous feed-in tariff guaranteeing a good price for renewable power fed to the grid would unleash private solar and wind investment — at a cost locked in for years that the utility, and ultimately the consumer, must bear. The regulator asks how generous to be.",
      ["Set a generous feed-in tariff.", "A guaranteed price is the spark that lights the investment.", "You set an attractive feed-in tariff and private renewable investment surges. Clean capacity grows fast, and the above-market price is locked in for years, a cost the utility and consumers carry.", { RE: 6, EN: 4, FI: -4 }],
      ["Set a lean, market-linked tariff.", "A subsidy locked in for years is a debt locked in for years.", "You keep the tariff lean and market-linked. The renewable investment comes slower and thinner, but the grid and consumers are not saddled with years of above-market payments.", { FI: 4, RE: -2 }])),

  // ── Continental-shelf resource claim ────────────────────────────────────────
  ax("Maritime Resources Envoy", "ambassador", ["continental-shelf", "seabed", "claim"],
    sx("With the maritime boundary settled, you can press an extended continental-shelf claim to vast seabed resources beyond — a potential bonanza of gas and minerals, and a costly, years-long legal and survey effort that may antagonise neighbours with overlapping claims.",
      ["Press the extended shelf claim.", "The seabed beyond the line may hold the next bonanza.", "You mount the costly claim to the extended shelf. The survey and legal effort are long, and if it succeeds the country gains rights to vast seabed gas and minerals — and the neighbours' overlapping resentment.", { RE: 6, GL: -2, FI: -4 }],
      ["Settle for the established boundary.", "A bird of gas in hand beats a seabed in court.", "You content yourself with the settled waters. You forgo a potential seabed bonanza and the costly fight for it, and keep the maritime peace with your neighbours unruffled.", { GL: 2, RE: -2 }])),

  // ── Eco-park / safari-park development ───────────────────────────────────────
  ax("Forest Tourism Officer", "fixer", ["eco-park", "tourism", "conservation"],
    sx("A grand safari park and eco-resort carved out of a forest reserve would draw tourists and revenue — and fragment the habitat, cage wildlife for show, and hand prime forest to resort developers. The officer asks whether to build the attraction or protect the reserve intact.",
      ["Build the safari park and eco-resort.", "A forest that pays for itself survives.", "You greenlight the safari park and resort. Tourist revenue flows and the project dazzles, and the reserve is fragmented, its wildlife caged for show and its prime tracts handed to developers.", { FI: 6, RE: -2, EN: -6 }],
      ["Protect the reserve intact.", "A caged forest is a zoo, not a wild.", "You refuse to carve up the reserve for an attraction. The tourist revenue is forgone and the developers disappointed, but the habitat stays whole and its wildlife wild.", { EN: 6, RE: 4, FI: -4 }])),

  // ── Ethanol / biofuel blending ──────────────────────────────────────────────
  ax("Biofuel Policy Officer", "official", ["biofuel", "ethanol", "food"],
    sx("Molasses from the sugar mills could be turned into ethanol to blend with petrol, cutting fuel imports and using a waste stream — or that same feedstock and land could feed the food and drink industries. The officer asks whether to mandate biofuel blending.",
      ["Mandate ethanol blending.", "A waste turned to fuel is a dollar kept home.", "You mandate ethanol blending from molasses. The fuel-import bill eases and a waste stream finds value, and the food and drink industries that wanted the same molasses pay more for it.", { RE: 4, EN: 2, FI: 2 }],
      ["Keep molasses for food and drink.", "I will not turn the nation's sugar into the nation's petrol.", "You decline the blending mandate. The molasses stays with the food industries, and the chance to cut fuel imports with a domestic biofuel goes untaken.", { EN: 2, RE: -2 }])),

  // ── Hydro / pumped-storage gamble ───────────────────────────────────────────
  ax("Power Planning Director", "official", ["pumped-storage", "hydro", "storage"],
    sx("With little room for big dams, the engineers propose a pumped-storage scheme in the hills — a giant battery using water and gravity to store surplus power. It is costly, geologically risky, and would flood a hill valley, displacing the communities who live there.",
      ["Build the pumped-storage scheme.", "A mountain battery is worth a flooded valley.", "You build the pumped-storage project. The grid gains vast storage and renewables become dispatchable, and a hill valley is flooded and its communities displaced for the reservoir.", { RE: 6, EN: -4, FI: -6, FA: -2 }],
      ["Drop the pumped-storage plan.", "I will not drown a valley to store electrons.", "You cancel the scheme. The grid loses a great store of power and renewables stay harder to balance, but the hill valley and the communities in it are spared the flood.", { EN: 4, RE: -4, FI: 2 }])),

  // ── Salt iodisation ─────────────────────────────────────────────────────────
  ax("Food Fortification Officer", "doctor", ["salt", "iodine", "health"],
    sx("Iodine deficiency still stunts minds in the regions where un-iodised salt slips through, and enforcement of universal salt iodisation is lax. The officer wants a hard enforcement and monitoring drive; the small, scattered salt producers resist the cost and oversight.",
      ["Enforce universal salt iodisation.", "A pinch of iodine is a child's whole future.", "You enforce iodisation hard and monitor the supply. The small producers resist the cost, but iodine deficiency and the stunting it causes recede from the regions that fell through the gaps.", { EN: 6, RE: 2, FI: -2 }],
      ["Leave iodisation lightly enforced.", "The salt trade is too scattered to police.", "You leave enforcement lax. The administrative burden is avoided, and un-iodised salt keeps slipping through to the regions where it quietly goes on stunting children's minds.", { FI: 2, EN: -4 }])),

  // ── Strategic grain silos ───────────────────────────────────────────────────
  ax("Food Storage Director", "official", ["grain", "silos", "food-security"],
    sx("The country's grain reserve rots in damp, rat-infested warehouses, losing a fortune and leaving the buffer unreliable in a crisis. The director wants modern steel silos to hold a real reserve; the capital is large and the warehouse-supply rackets that profit from the chaos resist.",
      ["Build modern grain silos.", "A reserve that rots is no reserve at all.", "You build modern silos and the grain reserve becomes real and reliable. The capital is steep and the warehouse rackets lose their cosy losses, but the food buffer can finally be trusted in a crisis.", { EN: 6, RE: 4, FI: -6, FA: -2 }],
      ["Keep the old warehouses.", "Silos are a fortune for grain that mostly keeps.", "You keep the damp warehouses and their rackets. The capital is spared, the grain keeps rotting and the rats keep feeding, and the reserve stays a number on paper that a real crisis would expose.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Poultry biosecurity / bird flu ──────────────────────────────────────────
  ax("Livestock Health Director", "doctor", ["poultry", "bird-flu", "biosecurity"],
    sx("The booming backyard and commercial poultry industry — cheap protein for millions — is a tinderbox for bird flu, with poor biosecurity and a culling-compensation system too stingy to stop farmers hiding outbreaks. The director wants real biosecurity and fair compensation; it is costly.",
      ["Fund biosecurity and fair culling pay.", "A hidden outbreak today is a pandemic tomorrow.", "You fund biosecurity standards and fair compensation so farmers report outbreaks instead of hiding them. The cost is real, but bird flu is contained before it can leap to a wider catastrophe.", { EN: 6, RE: 2, FI: -4 }],
      ["Leave poultry biosecurity thin.", "The industry has weathered flu before.", "You leave biosecurity weak and compensation stingy. The cheap chicken keeps coming, and farmers keep hiding outbreaks until one slips its cage into a crisis the thin defences cannot hold.", { FI: 2, EN: -6 }])),

  // ── Sharecropper tenancy rights ─────────────────────────────────────────────
  ax("Land Reform Officer", "people", ["sharecroppers", "tenancy", "rights"],
    sx("Millions of sharecroppers till others' land for a punishing share of the crop, with no security and no recourse when a landlord evicts them at whim. The officer wants enforceable tenancy rights and a fairer crop-share; the landlord class, woven into local power, resists fiercely.",
      ["Enforce tenancy rights and a fair share.", "A farmer who can be evicted at whim plants in fear.", "You legislate secure tenancy and a fairer crop-share, and enforce it. The landlord class fights bitterly through every local lever, but the sharecroppers gain security and a fairer return on their toil.", { EN: 8, RE: 2, FA: -6 }],
      ["Leave the tenancy system as it is.", "The landlords are the rural order I depend on.", "You leave the sharecroppers to the landlords' mercy. The rural power structure stays content, and millions keep tilling on a punishing share, one whim away from eviction.", { FA: 4, FI: 2, EN: -8 }])),

  // ── Building / appliance energy standards ───────────────────────────────────
  ax("Energy Efficiency Director", "official", ["efficiency", "standards", "demand"],
    sx("The cheapest power is the power not used, and mandatory energy-efficiency standards for buildings, motors, and appliances would cut demand more cheaply than any new plant. The director wants hard standards; manufacturers and developers resist the cost and the enforcement.",
      ["Mandate hard efficiency standards.", "A kilowatt saved is a kilowatt I need not build.", "You mandate efficiency standards across buildings, motors, and appliances. Manufacturers and developers grumble at the cost, but demand growth slows, the grid breathes, and you avoid building plants you would otherwise have needed.", { RE: 6, EN: 4, FI: 2 }],
      ["Leave efficiency to the market.", "A mandate is a cost forced on the builder and the buyer.", "You leave efficiency voluntary. The builders and manufacturers keep their cheap, wasteful ways, and demand climbs unchecked, forcing you to build power you could have simply saved.", { FI: 2, RE: -4, EN: -2 }])),

  // ── Deep-sea fishing fleet ──────────────────────────────────────────────────
  ax("Marine Fisheries Director", "official", ["deep-sea", "fleet", "sovereignty"],
    sx("Your fishers work only the crowded coastal waters while the rich deep-sea zone of your own maritime territory is fished by licensed foreign trawlers. The director wants to build a national deep-sea fleet to claim that catch; it is costly and the fishers lack the vessels and skills.",
      ["Build a national deep-sea fleet.", "My own deep waters should feed my own fishers.", "You invest in deep-sea vessels, training, and landing infrastructure. The cost is heavy and the skills slow to build, but the catch from your own deep waters starts flowing to your own fishers instead of foreign trawlers.", { RE: 6, EN: 4, FI: -6 }],
      ["Keep licensing the foreign trawlers.", "The fees are sure; a fleet is a gamble.", "You keep taking the foreign trawler licence fees. The revenue is easy and certain, and the wealth of your own deep waters keeps sailing away in foreign holds while your fishers crowd the coast.", { FI: 4, RE: -2, EN: -2 }])),

  // ── Horticulture / fruit export ─────────────────────────────────────────────
  ax("Agriculture Export Director", "people", ["horticulture", "fruit", "exports"],
    sx("The country's mangoes, jackfruit, and vegetables could earn real export money, but they rot for want of cold chain, fail foreign pesticide-residue tests, and lack branding. The director wants a costly push for export-grade horticulture; the alternative is to keep them a domestic crop.",
      ["Invest in export-grade horticulture.", "A mango that meets the world's bar earns the world's price.", "You fund cold chain, residue control, and branding for fruit and vegetable exports. The investment is real, but a new export stream and better farmer incomes grow from crops that once just rotted or sold cheap.", { RE: 4, EN: 4, FI: -4, GL: 2 }],
      ["Keep horticulture a domestic crop.", "Feeding my own market is achievement enough.", "You leave the fruit and vegetables to the domestic market. The export earnings are forgone, and the surplus keeps rotting in gluts that crash prices and beggar the growers each season.", { EN: 2, RE: -2, FI: 2 }])),

  // ── Bamboo / cane and forest craft ──────────────────────────────────────────
  ax("Cottage Resources Officer", "people", ["bamboo", "craft", "livelihoods"],
    sx("Bamboo and cane sustain vast craft and construction livelihoods and could anchor a sustainable green industry — but the resource is being stripped unsustainably and the artisans are sliding into poverty. The officer wants a managed-cultivation and value-chain push, or you can let it dwindle.",
      ["Build a sustainable bamboo value chain.", "A fast-growing reed is a green industry waiting to be grown.", "You fund managed bamboo cultivation, processing, and the artisans' value chain. A renewable green industry takes root, livelihoods stabilise, and the wild stands are spared the strip-harvesting.", { EN: 6, RE: 6, FI: -4 }],
      ["Let the bamboo trade dwindle.", "A reed and a basket are not a development strategy.", "You leave the bamboo trade to its decline. The investment is spared, and the wild stands keep being stripped while the artisans slide deeper into poverty and the craft fades.", { FI: 2, RE: -4, EN: -4 }])),

  // ── Shrimp-disease / hatchery quality ───────────────────────────────────────
  ax("Aquaculture Director", "doctor", ["shrimp", "disease", "hatchery"],
    sx("Disease keeps wiping out the shrimp farms — a major export — because the hatcheries sell weak, virus-laden post-larvae and farmers lack any quality control. The director wants certified disease-free hatcheries and farmer training; the cheap-PL hatchery trade resists.",
      ["Mandate certified disease-free hatcheries.", "A pond stocked with sick larvae is a harvest already lost.", "You mandate certified, disease-free post-larvae and train farmers in biosecurity. The cheap-PL hatcheries fight the cost, but the devastating disease wipeouts ebb and the shrimp export stabilises.", { RE: 4, EN: 4, FI: -2 }],
      ["Leave the hatchery trade unregulated.", "The cheap larvae keep the ponds stocked.", "You leave the hatcheries to sell their cheap, weak larvae. The ponds stay cheaply stocked, and disease keeps sweeping the farms, wiping out harvests and the export earnings with them.", { FI: 2, RE: -4, EN: -2 }])),

  // ── District cooling / urban efficiency ─────────────────────────────────────
  ax("Urban Energy Officer", "official", ["cooling", "efficiency", "demand"],
    sx("Air-conditioning is exploding with the heat and the middle class, spiking peak demand and the grid's strain. A district-cooling and efficiency push could blunt it; the developers and the AC-importing lobby prefer the cheap, wasteful status quo.",
      ["Push district cooling and AC standards.", "A city cooled efficiently is a grid not buckled.", "You promote district cooling and strict AC efficiency standards. The developers and importers resist, but the peak demand growth slows, sparing the grid the strain of cooling a warming, richer city.", { RE: 6, EN: 4, FI: -2 }],
      ["Let cooling demand run.", "A growing middle class has earned its cool air.", "You leave cooling to grow unchecked. The middle class enjoys its air-conditioning, peak demand spikes, and the grid strains and the bills climb to chill a city you could have cooled more cheaply.", { EN: 2, RE: -4, FI: -2 }])),

  // ── River-training works ────────────────────────────────────────────────────
  ax("Water Development Engineer", "official", ["river-training", "erosion", "megaproject"],
    sx("A vast river-training scheme could tame the great river's wandering, stop the erosion swallowing districts, and reclaim land — a mega-project of guide bunds and revetments, hugely costly, technically fraught, and a magnet for contractor padding.",
      ["Launch the river-training mega-project.", "A river that wanders unchecked eats a district a year.", "You launch the guide-bund and revetment scheme. The cost is colossal and the contractors pad it, but if the engineering holds, the river is pinned, the erosion slows, and land is reclaimed.", { RE: 6, EN: 4, FI: -8, FA: -2 }],
      ["Stick with local erosion protection.", "A grand scheme to tame a great river is a fortune gambled on hydraulics.", "You fund only targeted local bank protection. The grand reclamation is forgone, the river keeps wandering and eating its banks, but you avoid betting a fortune on a fraught mega-project.", { FI: 2, RE: -2, EN: -2 }])),

  // ── Organic / safe-food certification ───────────────────────────────────────
  ax("Food Standards Director", "people", ["organic", "certification", "exports"],
    sx("A credible safe-food and organic certification scheme would let farmers earn premiums at home and abroad and reassure consumers poisoned by adulteration — a costly system to build and police, easily faked into a meaningless sticker if done on the cheap.",
      ["Build a rigorous certification scheme.", "A label that means nothing is worse than no label.", "You build a properly policed certification system. The cost and enforcement are real, but the certified food earns genuine premiums, consumers gain trust, and the export door opens to clean produce.", { EN: 6, RE: 2, FI: -4, GL: 2 }],
      ["Run a cheap, lightly-policed scheme.", "A sticker is cheaper than a system.", "You roll out a low-cost certification with weak policing. The labels proliferate and quickly become meaningless as fakes flood in, and consumers and export buyers learn to distrust the sticker entirely.", { FI: 2, EN: -4 }])),

  // ── Smart metering rollout ──────────────────────────────────────────────────
  ax("Utility Modernisation Director", "people", ["smart-meters", "billing", "losses"],
    sx("Smart meters would end the bribed meter-readers, estimated bills, and theft that plague the utilities — and let you bill accurately and cut losses. They are costly to roll out, and consumers fear higher, harder-to-dodge bills and the surveillance of their usage.",
      ["Roll out smart meters widely.", "A meter that cannot be bribed bills the truth.", "You fund a wide smart-meter rollout. The capital is heavy and consumers wary of accurate, undodgeable bills, but the meter-reader bribery and theft collapse and the utilities' losses fall sharply.", { RE: 6, FI: 4, EN: -2 }],
      ["Stick with the old meters.", "A meter rollout is a fortune and a fight over every bill.", "You keep the old meters and their bribed readers. The capital is spared and consumers undisturbed, and the estimated bills, the theft, and the meter-reader rackets all carry quietly on.", { FA: 2, RE: -4, FI: -2 }])),

  // ── Medicinal-plant and biodiversity value ──────────────────────────────────
  ax("Biodiversity Resources Officer", "doctor", ["medicinal-plants", "biopiracy", "communities"],
    sx("The country's forests hold medicinal plants and genetic resources that foreign firms quietly harvest and patent — biopiracy of a heritage worth fortunes. The officer wants a benefit-sharing and protection regime; it is complex and could deter the research investment too.",
      ["Build a benefit-sharing protection regime.", "A heritage patented abroad is a heritage stolen.", "You establish access rules and benefit-sharing for the country's genetic resources. The bureaucracy is complex, but biopiracy is curbed and the communities and the nation share in the value of their own heritage.", { EN: 6, RE: 4, GL: 2 }],
      ["Leave the genetic resources open.", "Rules on every leaf will scare off the researchers too.", "You leave access unregulated to keep research investment flowing. The foreign firms keep harvesting and patenting freely, and a heritage worth fortunes drains abroad uncompensated.", { RE: 2, GL: 2, EN: -4 }])),

  // ── Fishery co-management ───────────────────────────────────────────────────
  ax("Inland Fisheries Director", "people", ["fisheries", "co-management", "commons"],
    sx("The open-water fisheries — the beels and floodplains feeding millions — are being plundered by leaseholders and gear that wipe out the stocks. The director wants community co-management handing the waters to the fishers who depend on them; the politically-connected leaseholders resist.",
      ["Hand the waters to community co-management.", "A fishery the fishers govern is a fishery that lasts.", "You transfer the open waters to community co-management with rules the fishers set and keep. The connected leaseholders lose their plunder and rage, but the stocks recover and the fishing communities thrive.", { EN: 8, RE: 6, FA: -4 }],
      ["Keep the leasehold system.", "The leaseholders pay their fees and back the party.", "You keep the waters under the connected leaseholders. The fees and the loyalty flow, and the leaseholders keep plundering the beels with destructive gear until the stocks, and the fishers' living, collapse.", { FA: 4, FI: 2, RE: -6, EN: -4 }])),

  // ── Biogas from waste ───────────────────────────────────────────────────────
  ax("Renewable Energy Officer", "people", ["biogas", "waste", "rural"],
    sx("Rural cattle dung and farm waste could fuel village-scale biogas plants — clean cooking gas and fertiliser slurry from waste — cutting woodsmoke and firewood demand. The officer wants a national biogas push; uptake has always stalled on cost, maintenance, and habit.",
      ["Drive a national biogas programme.", "A cow's waste can light a kitchen and feed a field.", "You subsidise and support village biogas plants at scale. Maintenance and habit slow the uptake, but clean cooking gas and fertiliser flow from waste, easing woodsmoke and firewood demand where it takes hold.", { EN: 6, RE: 4, FI: -4 }],
      ["Leave biogas to the enthusiasts.", "A scheme that always stalls is a scheme not worth the subsidy.", "You decline a national push, leaving biogas to scattered enthusiasts. The subsidy is saved, and the dung and farm waste keep going unused while the villages keep cooking on smoky firewood.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Cattle / dairy feed import ──────────────────────────────────────────────
  ax("Livestock Feed Director", "people", ["feed", "import", "livestock"],
    sx("Livestock and dairy are throttled by costly imported feed, and the maize and fodder to grow it domestically compete for land with food grains. The director wants a feed-crop and fodder push to cut the import bill; the land is scarce and the food-first lobby resists.",
      ["Push domestic feed and fodder.", "A herd fed on imports is a herd fed from abroad.", "You incentivise maize, fodder, and feed-milling at home. It competes for scarce land and the food-first lobby grumbles, but the feed-import bill falls and the livestock and dairy sectors strengthen.", { RE: 4, EN: 4, FI: -2 }],
      ["Keep importing the feed.", "The land is needed for the people's grain, not the cow's.", "You keep relying on imported feed. The land stays in food grain, and the livestock and dairy sectors stay hostage to the price and supply of feed shipped in from abroad.", { FI: 2, RE: -2, EN: -2 }])),

  // ── Condensate / refinery byproduct ─────────────────────────────────────────
  ax("Petroleum Resources Officer", "shadow", ["condensate", "refining", "graft"],
    sx("Condensate — a valuable liquid byproduct of gas extraction — is being siphoned to private 'fractionation' plants owned by connected operators at giveaway prices, robbing the state of the value. The officer can reclaim and properly auction it, or leave the cosy arrangement.",
      ["Reclaim and auction the condensate.", "A byproduct gifted to the connected is a theft by another name.", "You reclaim the condensate and auction it at fair value. The connected fractionators lose their giveaway and rage, but the state captures the value of its own gas byproduct.", { RE: 4, FI: 4, FA: -4 }],
      ["Leave the condensate arrangement be.", "The fractionators are friends I would rather not make enemies.", "You leave the cosy condensate deal alone. The connected operators keep their giveaway, and the state keeps forgoing the real value of a byproduct of its own gas.", { FA: 4, RE: -2, FI: -4 }])),

  // ── Floating agriculture (climate adaptation) ───────────────────────────────
  ax("Climate Agriculture Officer", "relief", ["floating-agriculture", "wetlands", "adaptation"],
    sx("In the flood-prone wetlands, the old craft of floating gardens — crops grown on rafts of water hyacinth — could feed communities as the waters rise. The officer wants to revive and scale it as climate adaptation; it is labour-intensive and unfamiliar to most.",
      ["Revive and scale floating agriculture.", "When the land floods, the garden must float.", "You fund the revival and spread of floating-garden techniques across the flood-prone wetlands. The labour is intensive and the learning slow, but communities gain food security as the rising waters take the solid ground.", { EN: 6, RE: 4, FI: -2 }],
      ["Leave it to tradition.", "A niche craft is no answer to a national flood.", "You leave floating agriculture to the few who still practise it. The investment is spared, and as the waters rise the flood-prone communities lose their cropland with no floating alternative at scale.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Drip / efficient irrigation ─────────────────────────────────────────────
  ax("Irrigation Efficiency Director", "people", ["drip", "irrigation", "water"],
    sx("The flood-irrigation that waters the fields wastes most of the water it draws, draining the aquifers faster than need demands. Drip and sprinkler systems would slash that waste; they are costly upfront and unfamiliar, and the water and power are cheap enough that few farmers bother.",
      ["Subsidise efficient irrigation.", "A field flooded to grow a crop drowns the water table.", "You subsidise drip and sprinkler systems and train farmers. The upfront cost is real and the habit slow to change, but the water waste falls sharply and the aquifers drain more slowly.", { RE: 6, EN: 4, FI: -4 }],
      ["Leave farmers to flood-irrigate.", "Cheap water flooded on a field is what the farmer knows.", "You leave irrigation to the wasteful flood method. The farmers stick with what is cheap and familiar, and the aquifers keep falling under fields that drink far more than the crops require.", { FI: 2, RE: -6, EN: -2 }])),

  // ── Industrial captive-power efficiency ─────────────────────────────────────
  ax("Industrial Energy Officer", "official", ["industry", "efficiency", "cogeneration"],
    sx("Factories waste vast energy through old motors, leaky steam, and dumped waste-heat. Mandating energy audits and cogeneration would cut industry's huge energy bill and the grid's load; the manufacturers resist the audits and the retrofit cost.",
      ["Mandate industrial energy audits and retrofits.", "Heat dumped from a factory is money dumped with it.", "You mandate audits and cogeneration retrofits in heavy industry. The manufacturers grumble at the cost, but their energy bills fall, waste-heat is captured, and the grid sheds a heavy, needless load.", { RE: 6, EN: 2, FI: 2 }],
      ["Leave industrial energy use alone.", "An audit forced on a factory is a cost it resents.", "You leave industry to its wasteful ways. The manufacturers avoid the retrofit cost, and the dumped heat, leaky steam, and old motors keep wasting energy the grid must keep generating.", { FI: 2, RE: -4 }])),

  // ── Fish-landing and ice infrastructure ─────────────────────────────────────
  ax("Fisheries Infrastructure Officer", "people", ["fish-landing", "ice", "waste"],
    sx("A huge share of the marine catch spoils for want of ice, landing centres, and cold storage at the coast, beggaring fishers and wasting protein. The director wants a coastal cold-chain and landing-centre build; the capital is large and the gain spread thinly along the coast.",
      ["Build coastal landing and cold storage.", "A catch that rots on the jetty feeds no one.", "You build ice plants, landing centres, and cold storage along the coast. The capital is heavy, but the spoilage falls, the fishers earn more for fish that keeps, and the wasted protein reaches plates.", { EN: 6, RE: 4, FI: -6 }],
      ["Leave the coast without cold chain.", "A coastal cold-chain is a fortune for a diffuse gain.", "You leave the coast without ice and storage. The capital is spared, and a great share of the catch keeps rotting on the jetties, beggaring the fishers and wasting the protein.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Granite / dimension-stone quarrying ─────────────────────────────────────
  ax("Mineral Resources Officer", "official", ["granite", "quarrying", "environment"],
    sx("A granite deposit could supply valuable dimension stone and cut imports, but quarrying it means blasting a forested hill that buffers a watershed and shelters indigenous hamlets. The officer asks whether to open the quarry or leave the hill standing.",
      ["Open the granite quarry.", "Stone in the ground earns nothing.", "You open the quarry and the dimension stone flows, cutting imports. The forested hill is blasted away, the watershed it buffered destabilised, and the indigenous hamlets displaced.", { RE: 6, FI: 4, EN: -8 }],
      ["Leave the hill standing.", "A hill that holds a watershed is worth more than its stone.", "You refuse the quarry. The granite stays buried and the imports continue, but the forested hill keeps buffering its watershed and sheltering the communities who live beneath it.", { EN: 6, RE: -2, FI: -2 }])),

  // ── Demand-side management / peak shaving ───────────────────────────────────
  ax("Grid Demand Manager", "official", ["demand", "peak", "tariff"],
    sx("Peak evening demand strains the grid to breaking, forcing costly, dirty peaker plants to fire up. Time-of-use tariffs and demand-management could shave the peak cheaply; consumers resent paying more at peak hours and the populist instinct is to keep one flat, low price.",
      ["Introduce time-of-use tariffs.", "A peak shaved is a peaker plant not built.", "You bring in time-of-use pricing and demand management. Consumers grumble at pricier peak hours, but the evening spike flattens, the dirty peakers fire less, and the grid is spared costly new capacity.", { RE: 6, EN: 2, FI: 2 }],
      ["Keep one flat, low tariff.", "A meter that charges more at dinnertime is a meter people hate.", "You keep the flat tariff. Consumers are content with the simple low price, and the evening peak keeps straining the grid, firing the dirty peakers, and forcing capacity you need not have built.", { EN: 2, RE: -4, FI: -2 }])),

  // ── Palm-oil import vs domestic edible oil ──────────────────────────────────
  ax("Commerce Resources Officer", "people", ["palm-oil", "import", "health"],
    sx("Cheap imported palm oil dominates the cooking-oil market — affordable, but linked to poorer health and to rainforest destruction abroad your imports fund. The officer asks whether to tax and curb it in favour of domestic and healthier oils, or keep the cheap staple flowing.",
      ["Curb palm oil for domestic, healthier oils.", "Cheap oil that harms the body and the world's forests is dear.", "You tax palm oil and back domestic mustard and rice-bran oil. The cooking oil costs a little more, but the diet grows healthier, the domestic oilseed sector strengthens, and your imports stop funding distant deforestation.", { EN: 4, RE: 4, FI: -2 }],
      ["Keep the cheap palm oil flowing.", "The poor need affordable oil, not a lecture on forests.", "You keep palm oil cheap and dominant. The kitchens stay affordable, and the diet stays palm-heavy while your imports keep funding the rainforest clearance abroad that grows it.", { FI: 2, EN: -4, GL: -2 }])),

  // ── The national energy-mix gamble ──────────────────────────────────────────
  ax("Energy Planning Chairman", "official", ["energy-mix", "strategy", "future"],
    sx("The decades-long power master plan must be set, and the chairman lays out the fork: double down on cheap, reliable imported coal and LNG for the growth the economy demands, or stake the future on a costlier, slower pivot to renewables and efficiency.",
      ["Build the fossil-heavy power plan.", "Growth needs power now, not a green promise.", "You lock in a coal-and-LNG-heavy plan. The cheap, reliable power fuels growth for now, and you chain the country to volatile fuel imports and stranded fossil assets the world is racing to abandon.", { RE: 8, FI: 2, EN: -8, GL: -4 }],
      ["Build the renewables-and-efficiency plan.", "A plan for the last fuel is a plan for the last decade.", "You stake the master plan on renewables, storage, and efficiency. Power is costlier and the build slower in the near term, but the country bets on the energy future instead of its past.", { EN: 8, GL: 4, RE: -4, FI: -6 }]),
    sx("Years into the plan you chose, the bills are coming due — fuel-price shocks battering the fossil bet, or intermittency and cost straining the green one. The chairman asks whether to stay the course or hedge with a costly mid-stream correction.",
      ["Stay the course you set.", "A plan abandoned midway wastes the whole journey.", "You hold to the strategy despite its strains. The consistency saves the cost of a pivot, and the weaknesses of the path you chose — fuel shocks or intermittency — go on biting unhedged.", { RE: 4, FI: 2, EN: -4 }],
      ["Hedge with a costly correction.", "A plan too rigid to bend is a plan that breaks.", "You spend to diversify and patch the plan's weaknesses mid-stream. The correction is expensive and admits the original bet was imperfect, but the energy system grows more resilient for it.", { RE: 4, EN: 4, FI: -6 }]),
    sx("The energy strategy has become a political symbol — the opposition hammers every blackout or price rise as proof of your folly, while your base defends the plan as visionary. The chairman asks whether to defend it loudly or quietly let the next plan correct it.",
      ["Defend the strategy loudly.", "A plan I will not defend is a plan I have already lost.", "You stake your name on defending the energy plan. The base rallies and the symbol holds, and every future blackout and price rise becomes a personal referendum on your judgment.", { FA: 2, RE: 2, GL: -2, EN: -2 }],
      ["Let the next plan quietly correct it.", "A strategy is a tool, not a tomb to die in.", "You stop defending the plan as gospel and let the next revision quietly fix its flaws. The base grumbles at the lack of conviction, but the energy strategy is freed to evolve rather than ossify.", { EN: 4, GL: 2, FA: -2 }])),
];
