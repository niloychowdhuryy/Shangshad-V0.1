// ENVIRONMENT — Environment & Wellbeing Ministry (Dhanmondi). Primary metric: EN.
// Real issues: cyclones and embankment failures, the world's worst urban air in
// Dhaka, recurring dengue epidemics, the dead Buriganga and tannery relocation,
// climate-driven internal migration to slums, brick-kiln pollution, river
// encroachment, public-health capacity.
const sx = (prompt, left, right) => ({ prompt, left, right });
const ax = (speaker, portrait, tags, ...stages) => ({ speaker, portrait, tags, stages });

export const ENVIRONMENT = [
  // ── Cyclone & embankments ───────────────────────────────────────────────────
  ax("Disaster Management Chief", "official", ["cyclone", "embankment", "coast"],
    sx("A super-cyclone is forty-eight hours out and the coastal embankments — patched, looted, and thin — will not hold a surge like this. The Chief wants a mass evacuation that will cost a fortune and admit the embankments failed. Or you can pray the storm turns.",
      ["Order the full pre-emptive evacuation.", "Better empty villages than full graveyards.", "Millions move inland at great cost and chaos. The surge breaches the embankments as feared — but the death toll is a fraction of what it would have been.", { EN: 12, GL: 6, FI: -10 }],
      ["Wait and hope the track shifts.", "A panic evacuation has its own body count.", "You gamble on the forecast cone. If the storm turns you saved a fortune; this time it does not, and the drowned coast becomes your indelible image.", { FI: 6, EN: -16, GL: -6 }]),
    sx("In the aftermath, the relief is being looted by local officials before it reaches the shelters, and survivors are eating the seed grain meant for next season. An adviser proposes routing aid through the army instead of the civil administration.",
      ["Hand relief logistics to the army.", "Soldiers steal less than clerks, this week.", "The aid reaches the shelters intact and fast. The civilian administration is humiliated and the precedent of military-run relief unsettles some.", { EN: 10, MI: 6, GL: 4, FA: -4 }],
      ["Reform the civil chain and prosecute thieves.", "I will not militarise a soup line.", "You purge the corrupt officials and rebuild the civilian pipeline. It is slower and the hungry wait longer, but the institution is mended, not bypassed.", { EN: 6, GL: 4, FI: -6, MI: -4 }])),

  // ── Dhaka air ───────────────────────────────────────────────────────────────
  ax("Air Quality Scientist", "people", ["air", "dhaka", "kilns"],
    sx("The capital's air is the most poisonous on earth this winter — brick kilns, traffic, and dust shaving years off every lung. The scientist wants the illegal kilns ringing the city shut. The kiln owners build the city's bricks and bankroll local MPs.",
      ["Shut the illegal brick kilns.", "A city that cannot breathe cannot work.", "Hundreds of kilns close and the haze thins by spring. Construction brick prices spike and the kiln-owning MPs turn against you.", { EN: 12, GL: 4, FI: -6, FA: -6 }],
      ["Let the kilns run, issue health advisories.", "We cannot halt the bricks that build the country.", "You swap masks for closures. The skyline keeps rising behind a grey shroud, and the children's wards stay full all winter.", { FI: 4, EN: -12, FA: 4 }])),

  // ── Dengue ──────────────────────────────────────────────────────────────────
  ax("Director-General of Health", "doctor", ["dengue", "epidemic", "hospitals"],
    sx("Dengue has exploded past every previous record; the hospital corridors are lined with stretchers and the test kits are running out. The DG needs an emergency procurement and a city-wide fogging blitz — fast, and without the usual tender delays.",
      ["Fast-track emergency procurement now.", "Bureaucratic tenders do not outrun a mosquito.", "Kits, beds, and fog deploy within days and the curve bends. The single-source contracts you waved through invite the auditors later.", { EN: 12, FI: -8, GL: 4 }],
      ["Run the proper tender to avoid graft.", "An emergency is exactly when they steal most.", "You insist on clean procurement. The process is honest and slow; the wards overflow for the weeks it takes, and people die waiting.", { EN: -10, FI: 4, GL: 4 }])),

  // ── Buriganga / tannery ─────────────────────────────────────────────────────
  ax("River Conservation Commissioner", "official", ["river", "tannery", "pollution"],
    sx("The river through the capital is biologically dead — black with tannery chrome and factory waste. A court has ordered the tanneries relocated to a treatment estate, but the estate's plant does not work and the owners refuse to move. The Commissioner asks you to enforce or excuse.",
      ["Enforce the relocation and fix the treatment plant.", "A capital cannot sit on an open sewer.", "You force the move and fund a working effluent plant. Leather exporters howl about costs, but the river, after a generation, begins to flow grey instead of black.", { EN: 12, GL: 6, FI: -10, FA: -4 }],
      ["Grant the tanneries another extension.", "Leather is jobs and dollars; the river can wait.", "The owners stay put and the exports flow. The river stays dead, the groundwater worsens, and the court's patience thins.", { FI: 6, EN: -12, GL: -4 }])),

  // ── Climate migration / slums ───────────────────────────────────────────────
  ax("Urban Planning Adviser", "people", ["climate-migration", "slums", "cities"],
    sx("Every drowned coastal acre sends thousands to the capital's slums — a million climate migrants a year crowding a city already past breaking. The adviser pitches building secondary 'climate-resilient' towns to absorb them, a vast and unglamorous investment.",
      ["Invest in resilient secondary towns.", "Spread the people before the capital bursts.", "You fund new towns with jobs and drainage. The payoff is years away and invisible now, but the human tide finds somewhere to land that is not a gutter.", { EN: 10, GL: 6, FI: -10 }],
      ["Concentrate spending on the capital alone.", "Visible projects win votes; new towns win none.", "You pour money into the city centre's showpieces. The slums swell unchecked, and each monsoon their misery is one more crisis.", { FI: 4, EN: -10, FA: 4 }])),

  // ── River encroachment by the powerful ──────────────────────────────────────
  ax("Wetlands Inspector", "official", ["encroachment", "wetlands", "elite"],
    sx("A politically connected developer is filling a protected flood-plain wetland to build a luxury enclave — destroying the natural sponge that saves the city from monsoon flooding. The paperwork is forged and the developer dines with your ministers.",
      ["Look the other way for the developer.", "He is a friend of the house and the party.", "The enclave rises on the drained marsh. The next heavy monsoon, the water that wetland used to hold pours into the streets instead.", { FA: 4, FI: 6, EN: -12, GL: -4 }],
      ["Halt the fill and reclaim the wetland.", "The marsh drains the city; the city needs the marsh.", "You stop the bulldozers and restore the flood-plain. A powerful friend becomes an enemy, but the monsoon has somewhere to go.", { EN: 10, GL: 6, FA: -8, FI: -4 }])),

  // ── Public health capacity ──────────────────────────────────────────────────
  ax("Rural Health Director", "doctor", ["healthcare", "rural", "doctors"],
    sx("The rural clinics stand empty of doctors — every graduate wants the city or the Gulf, and the village posts go unfilled for years. The Director proposes a mandatory rural-service bond for new doctors; the medical association, an urban power bloc, will fight it bitterly.",
      ["Impose the rural-service requirement.", "A degree the state paid for owes the state's villages.", "New doctors fan out to the upazila clinics, grumbling. Rural health improves measurably; the medical association mobilises against you.", { EN: 10, FA: -4, GL: 4, FI: -4 }],
      ["Use incentives and telemedicine instead.", "Forced doctors are resentful doctors.", "You sweeten rural posts with pay and remote support. It half-works at real cost; many villages still wait, but the profession stays onside.", { EN: 4, FI: -6, GL: 4 }])),

  // ── Plastics / waterways ────────────────────────────────────────────────────
  ax("Coastal Fisheries Officer", "people", ["plastic", "fisheries", "waste"],
    sx("Plastic chokes the rivers and the catch is shrinking; the fisherfolk haul up more bags than fish. A ban on single-use plastic exists on paper and is universally ignored. The officer wants real enforcement; the plastics industry warns of lost jobs.",
      ["Enforce the plastics ban for real.", "A river of bags feeds no one.", "You make the dormant ban bite. Plastic factories shed jobs and lobby furiously; within a year the nets pull up fish again.", { EN: 10, GL: 6, FI: -6, FA: -4 }],
      ["Promote recycling, leave the ban dormant.", "Jobs today weigh more than nets tomorrow.", "You opt for soft recycling drives over enforcement. The industry is content, the photo-ops are green, and the rivers keep silting up with plastic.", { FI: 4, EN: -8, GL: -4 }])),

  // ── BESPOKE INSTALMENT — real welfare, health & ecology dilemmas ────────────

  ax("Food Safety Director", "official", ["food", "adulteration", "formalin"],
    sx("Markets are awash with formalin-soaked fish, carbide-ripened fruit, and toxic-dyed sweets. The director wants mobile courts and lab testing in every bazaar — a war on the traders who poison the daily plate.",
      ["Wage war on food adulteration.", "No one should fear their own dinner.", "Mobile courts sweep the markets and the poison recedes. The powerful wholesale syndicates lobby and obstruct at every turn.", { EN: 12, GL: 4, FI: -6, FA: -4 }],
      ["Run a token campaign and move on.", "We have louder crises than chemical mangoes.", "A press conference, a few raids, then quiet. The formalin and carbide return to the stalls within the week.", { FI: 4, EN: -10 }])),

  ax("Char Erosion Officer", "people", ["erosion", "rivers", "displacement"],
    sx("The great rivers swallow villages whole each monsoon, turning farmers into landless paupers overnight. The officer wants a serious river-protection and resettlement programme — vast, unglamorous, and expensive.",
      ["Fund river protection and resettlement.", "A nation cannot let its people be eaten by the water.", "Embankments rise and the displaced get land and a start. The cost is enormous and the payoff slow and quiet.", { EN: 12, RE: 4, FI: -10 }],
      ["Offer only emergency relief after each loss.", "We cannot wall every river in the land.", "You hand out tin and rice after each collapse. The char people drift to the city slums, landless and bitter.", { FI: 4, EN: -10, FA: -4 }])),

  ax("Community Clinic Director", "doctor", ["healthcare", "primary-care", "rural"],
    sx("The network of village community clinics — primary care at every doorstep — is starved of medicine and staff. The director wants a big reinvestment; the finance side wants to quietly let them wither.",
      ["Reinvest in the community clinics.", "Health begins at the village door.", "Medicines and medics return to the villages; maternal and child outcomes climb. The recurring bill weighs on a thin budget.", { EN: 12, GL: 4, FI: -8 }],
      ["Let the clinics quietly run down.", "The budget has no room for a clinic per village.", "The clinics empty of medicine and trust. The poor fall back on quacks and distant hospitals, and the indicators slide.", { FI: 4, EN: -12 }])),

  ax("Sanitation Engineer", "official", ["sanitation", "sewage", "water"],
    sx("The capital has almost no sewage treatment; its waste pours raw into the rivers it also drinks from. The engineer's treatment-plant plan is monumental in cost and decades overdue.",
      ["Commit to the sewage treatment build-out.", "A city cannot drink its own waste forever.", "You begin the long, costly work of real sanitation. Invisible for years, it will one day stop a cholera season cold.", { EN: 10, RE: 4, FI: -10 }],
      ["Patch the drains and defer the plants.", "The grand plant can wait another budget.", "You spend a little on drains and call it progress. The rivers stay sewers and the waterborne wards stay full.", { FI: 4, EN: -10 }])),

  ax("Heatwave Response Lead", "people", ["heat", "climate", "urban"],
    sx("A record heatwave is killing the elderly and the rickshaw-pullers and buckling the power grid. The lead wants emergency cooling centres, work-hour limits, and a long-term tree-and-water plan for the baking city.",
      ["Mount a full heat-emergency response.", "The sun is killing the people who built this city.", "Cooling centres and shade plans save lives now and cool the city for years. The emergency spending strains the books.", { EN: 12, FI: -6 }],
      ["Issue advisories and ride it out.", "Heat passes; the budget endures.", "You warn people to drink water and wait for rain. The morgues fill quietly through the worst of the season.", { FI: 4, EN: -10 }])),

  ax("Maternal Health Officer", "doctor", ["maternal", "mortality", "women"],
    sx("Too many mothers still die in childbirth far from any skilled hand. The officer wants midwives in every union and free emergency obstetric transport — cheap lives saved, if you fund the unglamorous plumbing of care.",
      ["Fund midwives and emergency transport.", "No woman should die giving life.", "Skilled birth attendance spreads and maternal deaths fall measurably. The spending is real but the lives are realer.", { EN: 12, GL: 4, FI: -6 }],
      ["Leave it to the existing hospitals.", "The district hospitals must suffice.", "You decline the village-level push. Mothers in the far unions keep dying on the long road to a distant ward.", { FI: 4, EN: -10 }])),

  ax("Anti-Venom Coordinator", "doctor", ["snakebite", "rural", "health"],
    sx("Tens of thousands are bitten by snakes each year and many die because anti-venom is scarce, mismatched to local species, and stocked only in distant towns. The coordinator wants local production and village stockpiles.",
      ["Fund local anti-venom and village stocks.", "A farmer should not die of a bite at his own door.", "Effective anti-venom reaches the villages and the death toll drops. It is a small, cheap, invisible triumph of governance.", { EN: 10, GL: 4, FI: -4 }],
      ["Rely on imports to the town hospitals.", "Centralised stock is easier to manage.", "The anti-venom stays far from the fields where people are bitten. The snakebite season keeps filling rural graves.", { FI: 4, EN: -8 }])),

  ax("Textile Effluent Inspector", "official", ["river", "dyeing", "pollution"],
    sx("The dyeing and washing plants that finish the country's garments dump rivers of chemical effluent, turning whole canals black and the groundwater carcinogenic. Treatment plants are mandatory on paper and absent in fact.",
      ["Force effluent treatment on every plant.", "Our shirts should not cost a river.", "You compel the washing plants to clean their discharge. Costs rise and some close, but the dead canals begin to flow again.", { EN: 12, GL: 6, FI: -6, FA: -4 }],
      ["Grant the plants more time, again.", "Do not throttle the finishing industry.", "The deadlines slip another year and the dye keeps flowing. The canals stay black and the cancers keep coming.", { FI: 4, EN: -12, GL: -4 }])),

  ax("Drug Pricing Board", "doctor", ["medicine", "prices", "pharma"],
    sx("Essential medicine prices are climbing past the poor, while a powerful domestic pharma industry — a rare export success — resists any price control. The board wants caps on life-saving drugs.",
      ["Cap the prices of essential medicines.", "No one should ration their heart pills.", "Life-saving drugs come within reach of the poor. The pharma lobby, a key exporter and donor, fights you bitterly.", { EN: 12, GL: 4, FI: -4, FA: -4 }],
      ["Leave pricing to the pharma market.", "Do not wound a rare export champion.", "The industry thrives and exports grow. The poor cut their pills in half and skip the ones they cannot afford.", { FI: 6, GL: 4, EN: -10 }])),

  ax("Wildlife Warden", "people", ["wildlife", "poaching", "tigers"],
    sx("The mangrove tigers and the river dolphins are being poached and netted toward extinction, sometimes by the very forest-edge poor who have nothing else. The warden wants armed protection and alternative livelihoods.",
      ["Fund protection and livelihoods together.", "A nation that loses its tiger loses itself.", "Patrols and village livelihood schemes slow the killing. It is costly and slow, but the mangrove's last tigers hold on.", { EN: 10, RE: 4, GL: 4, FI: -6 }],
      ["Deprioritise wildlife for human needs.", "I cannot fund tigers over people.", "The conservation budget is cut for more pressing things. The poaching accelerates and an icon slips toward the void.", { FI: 4, EN: -8, GL: -4 }])),

  ax("Oxygen & Pandemic Officer", "doctor", ["pandemic", "oxygen", "preparedness"],
    sx("The last respiratory surge saw patients die for want of oxygen in the corridors. The officer wants a national medical-oxygen and ICU build-out before the next wave, while the danger feels far away.",
      ["Build the oxygen and ICU capacity now.", "Buy the cylinders before the gasping starts.", "Plants, lines, and ICU beds multiply across the country. The spend feels abstract until the next surge, when it saves thousands.", { EN: 10, GL: 4, FI: -8 }],
      ["Defer it; the wave has passed.", "Spend on today's certain needs, not tomorrow's maybe.", "You pocket the saving and move on. When the next wave breaks, the corridors fill with the breathless once more.", { FI: 6, EN: -8 }])),

  ax("Coastal Afforestation Lead", "people", ["mangrove", "coast", "climate"],
    sx("A green belt of mangroves along the cyclone coast would blunt the storm surges that drown thousands — but planting and protecting it means restraining the shrimp farms and settlers who clear the shore.",
      ["Plant and protect the coastal green belt.", "A wall of trees is the cheapest defence we have.", "The mangrove belt spreads and the next surge breaks against living wood. The shrimp and settler lobbies resent the curbs.", { EN: 10, RE: 4, GL: 4, FA: -4 }],
      ["Let the shore stay cleared for shrimp and settlement.", "The coast must earn its keep.", "The dollars and the settlers spread along a bare shore. The next cyclone arrives with nothing left to slow it.", { FI: 6, EN: -10 }])),

  ax("Urban Tree Officer", "people", ["trees", "development", "city"],
    sx("A road-widening scheme would fell the last great avenue of century-old trees that shade and cool the choking capital. The contractors are eager; the citizens have begun to hug the trunks.",
      ["Reroute the road and save the trees.", "You cannot pour concrete over the city's lungs.", "The old avenue stands and the citizens cheer. The road costs more, takes longer, and the contractors grumble.", { EN: 10, GL: 4, FI: -6, FA: -4 }],
      ["Fell the trees for the wider road.", "Traffic will not wait for nostalgia.", "The road widens and the cars move a little faster. The shade is gone, the heat island worsens, and the city mourns.", { RE: 4, FI: 4, EN: -10 }])),

  ax("Char Schools Coordinator", "people", ["education", "char", "children"],
    sx("Children on the shifting river islands grow up without a school in reach, a generation written off by geography. The coordinator wants floating schools and boat-clinics; the cost per child is high and the cameras never come.",
      ["Fund the floating schools and boat-clinics.", "A river child is still a citizen.", "Education and care reach the islands no road serves. Expensive per head, invisible to the press, and quietly transformative.", { EN: 10, FA: 4, FI: -6 }],
      ["Concentrate schools on the mainland.", "Build where the roads and numbers are.", "You invest where it is cheaper and more visible. The char children stay unlettered, adrift between the water and the slum.", { FI: 4, EN: -8 }])),

  ax("Air Quality Commissioner", "people", ["air", "vehicles", "emissions"],
    sx("Beyond the brick kilns, the capital's air is poisoned by ancient diesel buses and trucks belching black smoke. Scrapping or retrofitting them cleans the air and enrages the transport syndicates already at your throat.",
      ["Force old vehicles off the road.", "Every black plume is a child's lungs.", "The worst emitters are scrapped and the winter haze thins. The transport syndicates add this to their list of grievances and strikes.", { EN: 10, GL: 4, MI: -4, FA: -4 }],
      ["Delay enforcement to keep the peace.", "Do not hand the syndicates another cause.", "The smoking fleets keep rolling. The air stays among the world's worst and the children's wards stay full each winter.", { FA: 4, EN: -10 }])),

  ax("Nutrition Programme Head", "doctor", ["nutrition", "stunting", "children"],
    sx("A third of the country's children are stunted by poor early nutrition, a quiet catastrophe for the nation's future minds. The head wants a fortified-food and maternal-nutrition drive that pays off only in twenty years.",
      ["Fund the long nutrition drive.", "A stunted child is a stunted nation.", "Fortification and feeding programmes spread; the next generation grows taller and sharper. The benefit lies a generation away.", { EN: 12, FI: -6 }],
      ["Prioritise spending you can show this term.", "Voters cannot see a synapse.", "You divert the money to visible projects. The hidden epidemic of stunting rolls on, costing a future you won't be billed for.", { FI: 4, EN: -10 }])),

  ax("Waste Management Chief", "official", ["solid-waste", "city", "dumping"],
    sx("The capital generates mountains of garbage and the open dumps are overflowing into the wetlands and the air. The chief wants segregated collection and engineered landfills; the informal haulers and dump bosses resist.",
      ["Modernise waste collection and landfills.", "A city is judged by where it puts its refuse.", "Cleaner streets and engineered sites replace the festering dumps. The informal haulers and the dump syndicates lose ground and fight it.", { EN: 10, RE: 4, FI: -6, FA: -4 }],
      ["Leave the dumps and haulers as they are.", "Do not upend a system that, after all, runs.", "The garbage keeps mounting at the city's edge. It leaches into the water and rises into the air, year on year.", { FA: 4, EN: -8 }])),

  ax("Disability Services Advocate", "people", ["disability", "welfare", "access"],
    sx("Millions live with disabilities almost wholly unserved by the state — no ramps, no allowances, no schools that will take them. The advocate wants a national disability programme; it is right, and it is a cost with no headline.",
      ["Launch the disability services programme.", "A just state carries those it now ignores.", "Allowances, access, and inclusive schools begin to appear. The spending is real and the gratitude quiet but deep.", { EN: 10, GL: 4, FI: -6 }],
      ["Keep it to token charity.", "The budget cannot stretch to every cause.", "You offer a small charitable gesture and little more. Millions stay invisible, and the advocates remember the shrug.", { FI: 4, EN: -8 }])),

  ax("Haor Flash-Flood Officer", "people", ["haor", "flood", "harvest"],
    sx("An early flash flood threatens to drown the entire boro rice harvest of the great wetland basin before it can be cut — a regional famine in the making. The officer needs emergency embankment repair and harvest labour, now.",
      ["Throw everything at saving the harvest.", "The whole basin's year hangs on these days.", "Crash repairs and mobilised labour save much of the crop. The emergency cost is steep, but the basin does not starve.", { EN: 12, RE: 4, FI: -8 }],
      ["Respond at the normal pace.", "Panic spending sets a bad precedent.", "Bureaucracy moves at its usual speed and the water wins. The wetland's rice rots underwater and the region faces a hungry year.", { FI: 4, EN: -12, FA: -4 }])),

  ax("Birth Registration Director", "official", ["children", "registration", "rights"],
    sx("Millions of children have no birth certificate and thus no legal existence — easy prey for trafficking, child marriage, and child labour. The director wants universal digital registration, opposed by those who profit from invisible children.",
      ["Drive universal birth registration.", "An unregistered child is an unprotected one.", "Children gain a legal identity and a shield against exploitation. The traffickers and child-labour users lose their cover of invisibility.", { EN: 10, GL: 6, FA: -4 }],
      ["Leave registration slow and partial.", "It is paperwork, not a priority.", "The registers stay patchy and millions stay invisible. The trade in unrecorded children continues in the gaps.", { FI: 4, EN: -8, GL: -4 }])),

  // ── Cyclone shelter shortage ────────────────────────────────────────────────
  ax("Disaster Management Chief", "relief", ["cyclone", "shelters", "preparedness"],
    sx("A super-cyclone is two days out and the coast has shelters for barely half its people. The chief can order a full pre-emptive evacuation inland — chaotic, costly, and unpopular if the storm veers — or trust the shelters and hope the track holds.",
      ["Order a full pre-emptive evacuation.", "An empty coast loses no lives.", "Millions move inland in a vast, costly scramble. If the storm veers they will curse the false alarm, but if it lands the beaches will be empty when it does.", { EN: 8, FI: -6, MI: -2 }],
      ["Trust the shelters, evacuate only the worst zones.", "I cannot move a coast on a forecast.", "You evacuate selectively and rely on the half-built shelter network. The cost and chaos are less, but if the surge tops the forecast, thousands will have nowhere to run.", { FI: 2, EN: -8 }]),
    sx("The storm has passed, sparing the worst, but it exposed how few and crumbling the shelters are. The chief wants a crash programme to double the shelter network; the treasury says the money is needed elsewhere now the danger has passed.",
      ["Fund the crash shelter programme.", "The next storm is already forming somewhere.", "You commit to doubling the shelters along the coast. The budget strains and the danger feels abstract again, but the next super-cyclone will meet a coast that can take it.", { EN: 10, RE: 2, FI: -8 }],
      ["Defer it now the danger has passed.", "The crisis is over; the budget is not.", "You shelve the programme until next season. The money goes to louder needs, and the coast waits, under-sheltered, for a storm that will not wait for the budget.", { FI: 4, EN: -8 }])),

  // ── Riverbank erosion displacement ──────────────────────────────────────────
  ax("River Erosion Officer", "people", ["erosion", "displacement", "rivers"],
    sx("The great rivers are eating their banks, swallowing whole villages and farms each monsoon and creating a tide of landless climate refugees. The officer can fund expensive bank-protection works for a few key towns, or spread thin cash relief to the displaced everywhere.",
      ["Fund hard bank-protection for key towns.", "Some ground must be held at any cost.", "You armour the banks of the priority towns and they hold. The villages between, unprotected, keep tumbling into the current, their people swelling the slums.", { EN: 4, RE: 4, FI: -8 }],
      ["Spread thin relief to all the displaced.", "I cannot save the land, only the people on it.", "You give cash and resettlement help across the eroding belt. No town is truly saved, but no displaced family is left wholly empty-handed in their flight.", { EN: 8, FI: -6 }])),

  // ── Childhood stunting & nutrition ──────────────────────────────────────────
  ax("Nutrition Programme Director", "doctor", ["nutrition", "children", "stunting"],
    sx("A third of the country's children are stunted, their growth and minds permanently dwarfed by early malnutrition. The director wants a national programme of school meals and fortified food — a slow, costly investment whose payoff is decades away.",
      ["Launch the national nutrition programme.", "A stunted child is a stunted nation.", "School meals and fortified staples reach millions of children. The cost is steep and the gains invisible for years, but a generation will grow taller and think sharper.", { EN: 10, FI: -8 }],
      ["Fund only narrow, cheaper interventions.", "A full programme is a luxury this budget cannot bear.", "You run a few targeted vitamin schemes instead. The money is saved now, but a third of the nation's children keep growing up smaller and slower than they need to.", { FI: 4, EN: -8 }])),

  // ── Immunisation campaign ───────────────────────────────────────────────────
  ax("Immunisation Director", "doctor", ["vaccines", "children", "public-health"],
    sx("A measles-rubella outbreak threatens a mass campaign, but anti-vaccine rumours are spreading through religious networks and social media. The director can push a hard mandatory drive that may provoke a backlash, or run a softer, slower voluntary campaign.",
      ["Push the hard mandatory campaign.", "A disease does not negotiate with rumours.", "Vaccinators fan out and coverage climbs fast. The rumour-mongers cry coercion and a few clashes flare, but the outbreak is choked before it can spread.", { EN: 8, GL: 4, FA: -2 }],
      ["Run a soft voluntary campaign.", "A jab forced breeds ten refusers.", "You persuade rather than compel, working through trusted local figures. Coverage rises more slowly and the outbreak runs longer, but no backlash poisons the next campaign.", { EN: 6, FI: -4 }])),

  // ── Maternal mortality / midwives ───────────────────────────────────────────
  ax("Maternal Health Chief", "doctor", ["maternal", "midwives", "rural"],
    sx("Too many mothers still die in childbirth in the villages, far from any skilled hand. The chief wants thousands of trained community midwives deployed nationwide — a years-long, costly build — versus simply funding more distant city hospitals.",
      ["Train and deploy community midwives.", "A skilled hand in the village beats a far-off ward.", "You build a corps of village midwives. The training is slow and the cost real, but mothers begin surviving births that would once have killed them, far from any hospital.", { EN: 10, FI: -6 }],
      ["Fund central hospitals instead.", "Concentrate the skill where the machines are.", "You pour money into big-city maternity wards. They are excellent and unreachable; the village mother still labours a day's journey from the help she needs.", { EN: 2, FI: -6 }])),

  // ── Tobacco control ─────────────────────────────────────────────────────────
  ax("Tobacco Control Officer", "official", ["tobacco", "health", "revenue"],
    sx("Tobacco kills over a hundred thousand a year here, but the industry — partly state-owned — is a major taxpayer and employer. The officer wants punitive taxes and plain packaging; the finance ministry warns of the revenue and jobs at stake.",
      ["Impose punitive tobacco taxes.", "A tax that saves lives is the best kind.", "Cigarette prices jump and smoking begins to fall, especially among the young. The revenue dips and the growers protest, but the long death toll starts, slowly, to bend.", { EN: 8, FI: -2, FA: -2 }],
      ["Protect the tobacco revenue and jobs.", "The taxes it pays build the clinics it fills.", "You spare the industry the squeeze. The revenue and the tobacco-belt jobs are safe, and so is the steady stream of patients its product sends to the wards.", { FI: 6, EN: -8 }])),

  // ── Road traffic deaths ─────────────────────────────────────────────────────
  ax("Road Safety Authority Head", "official", ["roads", "safety", "transport"],
    sx("The highways are a slaughter — unlicensed drivers, killer buses racing for fares, no enforcement. After a bus killed two students and sparked a youth uprising, the head wants real licensing, speed enforcement, and a crackdown on the transport-owner cartels who block all reform.",
      ["Take on the transport cartels.", "The roads belong to the people, not the syndicates.", "You force licensing reform and speed enforcement against the owners' will. They paralyse the country with strikes in fury, but the road-death curve finally starts to fall.", { EN: 8, GL: 2, FI: -4, FA: -2 }],
      ["Leave the transport syndicates alone.", "A transport strike can topple a government.", "You back off rather than provoke the cartels. The buses keep the country moving and keep killing on the highways, and the students' demands fade into another broken promise.", { FI: 2, EN: -10 }])),

  // ── Launch / ferry overloading ──────────────────────────────────────────────
  ax("Inland Waterways Director", "official", ["ferry", "safety", "disaster"],
    sx("Overloaded river launches capsize every year, drowning hundreds, because owners cram in double the passengers and inspectors are bribed to look away. The director wants strict capacity enforcement and night-sailing bans; the launch owners and the ticketless crowds will both resist.",
      ["Enforce strict capacity and safety rules.", "A launch is not a coffin with an engine.", "You impose load limits, life-jackets, and weather bans, jailing the worst owners. Fares rise and the crush at the ghats worsens, but the rivers stop swallowing a ferry a season.", { EN: 8, FI: -4, FA: -2 }],
      ["Leave the launches to the old ways.", "The poor need cheap passage, not rules.", "You let the overloading continue. The fares stay low and the ghats stay chaotic, and each monsoon a launch goes down with a manifest no one can verify.", { FI: 2, EN: -10 }])),

  // ── Food adulteration (formalin) ────────────────────────────────────────────
  ax("Food Safety Chief", "doctor", ["food", "adulteration", "health"],
    sx("Fish are soaked in formalin, fruit force-ripened with chemicals, milk cut with detergent — the food supply is quietly poisoned for profit. The chief wants mobile courts and harsh penalties; the powerful wholesale syndicates will fight every raid.",
      ["Unleash mobile courts on the adulterators.", "A poisoned plate is a slow murder.", "Mobile courts raid the markets and the worst offenders are jailed and fined. The syndicates push back hard and prices wobble, but the food on the plate grows a little safer.", { EN: 10, FI: -2, FA: -2 }],
      ["Leave enforcement to the under-resourced agencies.", "The market polices itself in time.", "You decline the crackdown and leave the toothless agencies to it. The syndicates breathe easy, and the formalin and the detergent stay in the fish and the milk.", { FI: 2, EN: -10 }])),

  // ── Lead poisoning (turmeric/paint) ─────────────────────────────────────────
  ax("Public Health Toxicologist", "doctor", ["lead", "poisoning", "children"],
    sx("Studies find shocking lead levels in children, traced to lead-chromate dye in turmeric and cheap leaded paint. The toxicologist wants an immediate ban and recall; the spice traders and paint makers deny everything and warn of price chaos.",
      ["Ban the lead additives and recall stock.", "Lead in a child's blood is a verdict on us all.", "You ban the lead-chromate and leaded paint and order recalls. The traders rage and prices jump briefly, but the lead begins, at last, to drain out of the nation's children.", { EN: 10, GL: 4, FI: -4 }],
      ["Wait for more studies before acting.", "A ban on a hunch wrecks an industry.", "You call for more research before acting. The industries are spared and the spice stays golden, and another cohort of children grows up with lead dimming their minds.", { FI: 4, EN: -10 }])),

  // ── Sanitation / open defecation ────────────────────────────────────────────
  ax("Sanitation Programme Head", "people", ["sanitation", "hygiene", "disease"],
    sx("The country has nearly ended open defecation — a genuine triumph — but millions of latrines are unhygienic pits that contaminate the groundwater. The head wants a costly upgrade to safe sanitation; others say the headline victory is already won.",
      ["Fund the upgrade to safe sanitation.", "A latrine that poisons the well is half a solution.", "You push the upgrade to sealed, safe sanitation. The cost is high and the win less photogenic than the first, but the groundwater and the children who drink it are protected.", { EN: 10, RE: 2, FI: -6 }],
      ["Rest on the headline victory.", "We have already done what others could not.", "You declare victory and move the money on. The latrines stay, leaking into the aquifer, and the diarrhoeal disease the campaign was meant to end quietly persists.", { FI: 4, EN: -6 }])),

  // ── Urban heat and tree cover ───────────────────────────────────────────────
  ax("Urban Planning Adviser", "official", ["heat", "trees", "city"],
    sx("The capital is a heat island, its trees felled for roads and towers, its summers turning lethal for the poor and old. The adviser wants protected green corridors and a tree-planting mandate that would block some lucrative development.",
      ["Mandate green corridors, block some towers.", "A city of concrete cooks its own people.", "You protect green corridors and force developers to plant. The real-estate lobby loses prime plots and fumes, but the city gains shade and the killing summers ease a little.", { EN: 8, FI: -4, FA: -2 }],
      ["Let the development proceed unhindered.", "A growing city needs every plot it has.", "You leave the developers free. The towers rise and the canopy falls, and each summer the heat claims a few more of those too poor for a fan.", { FI: 6, EN: -8 }])),

  // ── Hill-cutting and landslides ─────────────────────────────────────────────
  ax("Disaster Management Chief", "people", ["landslide", "hill-cutting", "slums"],
    sx("In the southeast, the poor build on hillsides illegally cut by land-grabbers, and every monsoon landslides bury whole settlements. The chief can evict the hillside slums for their safety — leaving thousands homeless — or jail the land-grabbers and try to stabilise the slopes.",
      ["Evict the hillside settlements.", "A grave is worse than a tent.", "You clear the dangerous slopes for the dwellers' own safety. Thousands are made homeless and bitter, scattered to find new ground, but no landslide will bury them where they were.", { EN: 2, MI: 2, FI: -4, FA: -2 }],
      ["Jail the grabbers, stabilise the slopes.", "Punish those who sold the cliff, not those who bought a roof.", "You go after the land-grabbers and fund slope stabilisation and drainage. It is slow and dear, and one bad season may still kill, but the people keep their homes and gain a defender.", { EN: 8, FI: -6, MI: -2 }])),

  // ── Wetland filling for real estate ─────────────────────────────────────────
  ax("Wetlands Director", "official", ["wetlands", "real-estate", "flooding"],
    sx("Powerful developers are illegally filling the capital's flood-retention wetlands to build housing estates, destroying the city's natural drainage. The director wants the projects demolished; the developers are politically connected and have pre-sold thousands of plots.",
      ["Demolish the illegal wetland fills.", "A city that fills its sponges drowns itself.", "You order the fills demolished and the wetlands restored. The connected developers and their plot-buyers scream betrayal and sue, but the city keeps the sponges that save it from the flood.", { EN: 10, RE: 4, FI: -6, FA: -4 }],
      ["Regularise the fills for a fee.", "The plots are sold; the buyers are voters.", "You legalise the fills against a fine. The developers and buyers are placated and the treasury takes a cut, and the next big rain has nowhere to go but into the streets.", { FI: 6, FA: 2, EN: -10 }])),

  // ── Wildlife trafficking ────────────────────────────────────────────────────
  ax("Wildlife Crime Officer", "official", ["wildlife", "trafficking", "biodiversity"],
    sx("The country is a transit hub for trafficked tigers, pangolins, and rare birds, with officials on the take at every airport and border. The officer wants a hard anti-trafficking unit; it would mean prosecuting some well-connected names.",
      ["Build the hard anti-trafficking unit.", "A nation that sells its tigers has lost its soul.", "You stand up a real enforcement unit and the prosecutions reach uncomfortably high. The trafficking networks are disrupted and a few patrons exposed, to international applause.", { EN: 8, GL: 6, FA: -4 }],
      ["Leave it to the existing channels.", "Some names are better not pursued.", "You decline to disturb the connected. The trafficking flows on through the bribed checkpoints, and the country keeps its quiet reputation as the smugglers' favourite corridor.", { FI: 2, EN: -8, GL: -4 }])),

  // ── Old-age and disability safety net ───────────────────────────────────────
  ax("Social Welfare Secretary", "people", ["welfare", "elderly", "disability"],
    sx("The old-age and disability allowances are tiny, riddled with ghost beneficiaries, and the real needy are often left off the lists by local touts. The secretary wants a digitised, expanded scheme — costly and disruptive to the patronage networks that skim it.",
      ["Digitise and expand the safety net.", "A pension skimmed by touts is no pension.", "You clean the rolls and widen the allowances through direct digital payments. The local middlemen lose their skim and rage, but the real elderly and disabled finally get their due.", { EN: 10, FI: -6, FA: -2 }],
      ["Leave the scheme to the local networks.", "The local leaders know their own poor.", "You leave distribution to the patronage networks. The money flows through familiar hands, ghosts and touts and all, and the genuinely needy keep falling through the gaps.", { FA: 4, FI: 2, EN: -8 }])),

  // ── Quack doctors / unregulated clinics ─────────────────────────────────────
  ax("Health Regulation Chief", "doctor", ["quacks", "clinics", "regulation"],
    sx("Unlicensed 'doctors' and filthy private clinics flourish in the villages and slums, where real care never reaches. The chief wants a crackdown — but shutting them leaves millions with no care at all until something replaces them.",
      ["Crack down on the quacks and dirty clinics.", "A fake doctor is more dangerous than none.", "You shut the worst clinics and prosecute the fraudulent. The dangerous practitioners scatter, but so does the only 'care' many villages had, leaving a vacuum and resentment.", { EN: 4, GL: 2, FI: -2, FA: -2 }],
      ["Train and license them into the system.", "Better a trained village hand than an empty clinic.", "You bring the village practitioners into a training and licensing scheme rather than banning them. Quality rises unevenly, but care keeps reaching the places real doctors never go.", { EN: 8, FI: -4 }])),

  // ── Universal health coverage ───────────────────────────────────────────────
  ax("Health Financing Adviser", "doctor", ["health", "coverage", "poverty"],
    sx("A single illness bankrupts countless families, who pay for almost all care out of pocket. The adviser proposes a national health-insurance scheme starting with the poorest — transformative, but a vast new permanent claim on the budget.",
      ["Launch national health insurance.", "An illness should not be a sentence to ruin.", "You begin a public health scheme for the poorest. The budget takes on a heavy, permanent burden, but families stop being bankrupted by a single hospital stay.", { EN: 12, GL: 4, FI: -10 }],
      ["Keep the out-of-pocket system.", "A new entitlement, once given, can never be withdrawn.", "You hold off on the scheme. The budget is spared a vast commitment, and the sick keep selling their land and cattle to pay for the ward.", { FI: 6, EN: -8 }])),

  // ── Heatwave worker protection ──────────────────────────────────────────────
  ax("Labour Welfare Officer", "people", ["heat", "workers", "outdoor"],
    sx("Record heatwaves are killing outdoor workers — rickshaw-pullers, brick-haulers, farmhands — who cannot stop without starving. The officer wants mandated rest hours, shade, and water during extreme heat; employers say it will halt the work that feeds the workers.",
      ["Mandate heat protections for workers.", "A wage is no good to a corpse.", "You require rest, shade, and water during extreme heat, with relief stipends. Employers grumble about lost hours, but fewer workers collapse and die under the brutal sun.", { EN: 8, FI: -4, FA: -2 }],
      ["Leave it to employers and workers.", "The market sets the pace of work.", "You decline to intervene. The work continues uninterrupted through the killing afternoons, and each heatwave carries off more of those who cannot afford to rest.", { FI: 2, EN: -8 }])),

  // ── Free medicine in public hospitals ───────────────────────────────────────
  ax("Hospital Services Director", "doctor", ["hospitals", "medicine", "corruption"],
    sx("Public hospitals are meant to give medicine free, but most of it is stolen and sold out the back door, forcing patients to buy their own. The director wants a tracked, audited supply chain; the rackets run deep into the staff and unions.",
      ["Track and audit the medicine supply.", "Medicine stolen from the sick is theft twice over.", "You install tracking and audits and break several theft rings. The unions resist and a strike threatens, but the free medicine starts actually reaching the patients it was bought for.", { EN: 10, FI: 2, FA: -4 }],
      ["Leave the supply chain as it is.", "Take on the unions and the wards empty.", "You avoid the fight with the entrenched rackets. The pilferage continues, and the poor keep buying from the very pharmacies the stolen stock supplies.", { FA: 2, EN: -8 }])),

  // ── Snakebite antivenom ─────────────────────────────────────────────────────
  ax("Rural Health Coordinator", "doctor", ["snakebite", "rural", "antivenom"],
    sx("Snakebite kills thousands of villagers a year who reach no antivenom in time, turning instead to faith-healers as they die. The coordinator wants antivenom stocked in every rural clinic and a training drive — cheap in money, hard in logistics and habit.",
      ["Stock antivenom and train rural clinics.", "A vial in the village is a life in the morning.", "You push antivenom and snakebite training into the rural clinics. The logistics are a grind and the old healers resist, but families start reaching real treatment in time.", { EN: 8, FI: -4 }],
      ["Leave rural snakebite care as it is.", "The clinics can barely keep the lights on.", "You leave the gap unaddressed. The antivenom stays in the cities, the faith-healers keep their trade, and the villages keep burying the bitten.", { FI: 2, EN: -8 }])),

  // ── Lightning deaths ────────────────────────────────────────────────────────
  ax("Meteorological Director", "official", ["lightning", "farmers", "warning"],
    sx("Lightning now kills hundreds of farmers a year in the open fields, a toll worsened by felled trees and a warming climate. The director wants a national programme of warning sirens, shelters in the fields, and replanting of tall trees — modest money, scattered impact.",
      ["Fund the lightning-protection programme.", "A farmer struck dead in his own field deserves a warning.", "You build field shelters, early-warning alerts, and tree-planting drives. The deaths are scattered and the gains hard to see, but each monsoon a few hundred farmers live who would not have.", { EN: 8, RE: 2, FI: -4 }],
      ["Treat it as an act of fate.", "No siren can outrun a bolt from the sky.", "You leave the toll to fate and the budget to louder needs. The fields stay exposed, and every storm season the lightning takes its quiet, unremarked harvest of the poor.", { FI: 2, EN: -6 }])),

  // ── Winter cold-wave relief ─────────────────────────────────────────────────
  ax("Relief Coordinator", "relief", ["cold-wave", "poverty", "relief"],
    sx("A severe cold wave is killing the elderly and homeless in the north, who have no blankets and no warm clothes. The coordinator wants an immediate mass blanket-and-fuel distribution; the cynics note that such drives are also easily turned into partisan photo-ops and skimmed.",
      ["Mount a full, transparent relief drive.", "No one should freeze to death in their own country.", "You flood the north with blankets, warm clothes, and fuel through an audited system. The cost is real and the logistics frantic, but the morgues stay emptier through the cold.", { EN: 8, FI: -4 }],
      ["Leave relief to local leaders' discretion.", "The local men know who needs a blanket.", "You channel relief through the local political networks. It arrives unevenly, photographed and skimmed, and in the gaps the cold takes those with no patron to plead for them.", { FA: 4, EN: -6 }])),

  // ── Dengue hospital surge ───────────────────────────────────────────────────
  ax("Hospital Services Director", "doctor", ["dengue", "hospitals", "surge"],
    sx("This year's dengue epidemic is the worst on record and the hospitals are overflowing, patients on floors and in corridors. The director needs emergency field hospitals and a fleet of fogging crews now; the finance ministry balks at the unbudgeted crore.",
      ["Fund the full emergency surge response.", "An overflowing ward is a body count waiting to happen.", "You stand up field hospitals and blanket the city with mosquito control. The unbudgeted cost stings, but the wards decompress and the death toll is pulled down from catastrophe.", { EN: 10, FI: -8 }],
      ["Make do with existing capacity.", "The hospitals have weathered outbreaks before.", "You hold the line on spending and lean on the existing wards. They buckle under the load, patients are turned away to die at home, and the epidemic writes its own grim record.", { FI: 4, EN: -10 }])),

  // ── Urban waterlogging ──────────────────────────────────────────────────────
  ax("City Drainage Engineer", "official", ["waterlogging", "drainage", "city"],
    sx("The port city drowns for days after every heavy rain because its canals are choked with waste and built over. The engineer wants a massive canal-reclamation and drainage rebuild — evicting the encroachers, many of them politically connected — or you can keep pumping after each flood.",
      ["Reclaim the canals, evict the encroachers.", "A city without drains is a city underwater.", "You reclaim and dredge the canals, demolishing the connected encroachments. The owners howl and litigate, but the floodwater finally has somewhere to go.", { EN: 10, RE: 4, FI: -6, FA: -4 }],
      ["Keep pumping after each flood.", "Reclamation means a war with the powerful.", "You avoid the fight and rely on emergency pumps. The city keeps drowning for days each monsoon, its markets ruined and its sick wading through sewage to reach the clinic.", { FA: 2, FI: -2, EN: -8 }])),

  // ── Pesticide overuse and farmer health ─────────────────────────────────────
  ax("Agricultural Health Officer", "doctor", ["pesticides", "farmers", "health"],
    sx("Farmers drench their fields with banned, overstrong pesticides, poisoning themselves, the soil, and the consumers — and the agro-chemical dealers push ever more. The officer wants tight regulation and integrated pest-management training; the dealers and a chemical-dependent harvest resist.",
      ["Regulate pesticides, train in pest management.", "A harvest grown in poison poisons us all.", "You curb the worst chemicals and train farmers in safer methods. Yields wobble during the switch and the dealers fight back, but the fields, the farmers, and the food grow cleaner.", { EN: 8, RE: 4, FI: -4 }],
      ["Leave farmers to the dealers' advice.", "A drenched field is a full granary.", "You leave the chemical regime alone. The harvests stay heavy and the dealers happy, and the poison keeps accumulating in the soil, the rivers, and the people.", { FI: 2, RE: -2, EN: -8 }])),

  // ── Elephant-human conflict ─────────────────────────────────────────────────
  ax("Wildlife Conservator", "people", ["elephants", "conflict", "forest"],
    sx("As forests shrink, wild elephants raid villages for crops and trample people, and furious farmers poison and electrocute the herds in return. The conservator wants protected corridors and compensation for crop loss; the farmers want the dangerous animals simply gone.",
      ["Fund corridors and crop-loss compensation.", "A country that kills its last elephants is poorer for it.", "You protect migration corridors and pay farmers for raided crops. The farmers grumble at the elephants still in their fields, but the killings ebb and a few dozen elephants survive.", { EN: 8, RE: 2, FI: -4 }],
      ["Side with the farmers against the herds.", "A man's life outweighs an elephant's.", "You prioritise removing the elephants from inhabited areas. The farmers are relieved, but the cornered herds dwindle toward local extinction, and the conservationists mourn.", { EN: 2, FA: 2, RE: -4 }])),

  // ── Yaba / drug addiction ───────────────────────────────────────────────────
  ax("Narcotics Control Chief", "shadow", ["drugs", "yaba", "addiction"],
    sx("A flood of methamphetamine pills across the border has hooked a generation of the young. The chief offers two paths: a brutal 'war on drugs' of extrajudicial killings that thrills the public, or a slower build of treatment, rehab, and border interdiction.",
      ["Wage a hard 'war on drugs'.", "A dealer dead deals no more.", "The kill-lists and crossfire deaths mount and the public cheers the toughness. The trade simply goes deeper underground, the body count draws global condemnation, and the addicted are buried, not cured.", { MI: 6, EN: -6, GL: -8 }],
      ["Build treatment, rehab, and interdiction.", "You cannot shoot a country clean of addiction.", "You fund rehabilitation and target the supply chains, not the addicts. The results are slow and unglamorous, but families get their children back instead of their bodies.", { EN: 8, GL: 4, MI: -4 }])),

  // ── Violence against women / shelters ───────────────────────────────────────
  ax("Women's Affairs Secretary", "people", ["women", "violence", "shelters"],
    sx("Domestic violence, dowry abuse, and acid attacks ruin countless women's lives, while shelters are scarce and cases vanish in a hostile justice system. The secretary wants a network of shelters, fast-track courts, and a one-stop crisis service — costly and culturally contentious.",
      ["Build shelters and fast-track courts.", "A woman with nowhere to flee is a prisoner.", "You fund crisis shelters and dedicated courts. Conservatives mutter about meddling in the family, but battered women gain a door to walk through and a court that hears them.", { EN: 10, GL: 4, FI: -6, FA: -2 }],
      ["Leave it to families and existing courts.", "The home is not the state's to enter.", "You defer to family and the clogged ordinary courts. The conservatives are pleased, the budget unspent, and the women keep returning to the houses that harm them.", { FA: 4, EN: -8 }])),

  // ── Child marriage ──────────────────────────────────────────────────────────
  ax("Women's Affairs Secretary", "people", ["child-marriage", "girls", "education"],
    sx("Child marriage remains rampant, pulling girls out of school and into early, dangerous pregnancies. A proposed law would tighten the minimum age — but a contested 'special provision' clause would let parents marry off younger girls 'in special cases', a loophole big enough to drive the practice through.",
      ["Pass the law with the loophole intact.", "A law the families accept is better than one they defy.", "The law passes with its 'special provision'. It looks like progress and changes little; the loophole becomes the rule, and the girls keep leaving school for marriage.", { FA: 2, EN: -4, GL: -2 }],
      ["Close the loophole, enforce the age.", "A loophole for child marriage is a licence for it.", "You strip out the special clause and back enforcement and girls' schooling. Conservative families resist village by village, but the age limit gains real teeth and girls stay in class.", { EN: 10, GL: 6, FA: -4 }])),

  // ── Medical waste and blood safety ──────────────────────────────────────────
  ax("Health Regulation Chief", "doctor", ["medical-waste", "blood", "safety"],
    sx("Hospital waste — syringes, blood bags, organs — is scavenged and resold, and the commercial blood trade runs on paid, untested donors spreading hepatitis and HIV. The chief wants strict tracking and a volunteer blood system; the rackets are lucrative and entrenched.",
      ["Enforce waste tracking and safe blood.", "Recycled needles and dirty blood are an epidemic in waiting.", "You impose medical-waste tracking and a screened, voluntary blood system. The scavenging rings and blood-brokers lose their trade, and a slow-motion disease outbreak is averted.", { EN: 10, GL: 2, FI: -4, FA: -2 }],
      ["Leave the existing system in place.", "The blood banks meet the demand as they are.", "You leave the trade undisturbed. The blood keeps flowing from paid, untested arms, the needles keep reappearing in the bazaars, and the infections keep spreading silently.", { FI: 2, EN: -8 }])),

  // ── Nurse and doctor migration ──────────────────────────────────────────────
  ax("Health Workforce Director", "doctor", ["health-workers", "migration", "rural"],
    sx("Trained nurses and doctors leave for the Gulf and the West the moment they qualify, and almost none will serve in the villages. The director wants bonded rural-service requirements and better pay and housing for those who stay — costly, and resented by the young professionals.",
      ["Require rural service, fund those who stay.", "A doctor trained at the public's cost owes the public.", "You bond new graduates to rural service and improve rural postings. The young doctors resent the leash, but for the first time the villages see a real physician on a regular round.", { EN: 8, FI: -6, FA: -2 }],
      ["Leave health workers free to go.", "A bonded doctor is a resentful one — and leaves anyway.", "You impose no obligation. The professionals keep their freedom and the remittances flow, but the rural clinics stay staffed by no one and the brain-drain bleeds on.", { FI: 4, EN: -8 }])),

  // ── Groundwater subsidence in the capital ───────────────────────────────────
  ax("Geological Survey Director", "official", ["subsidence", "groundwater", "city"],
    sx("The capital is sinking as it sucks its aquifer dry for water, raising the flood risk for millions. The director wants a hard shift to treated surface water and a cap on deep wells — a huge, slow investment — versus the cheap, fast deep-well status quo.",
      ["Shift the city to surface water.", "A city drinking itself into the ground is doomed.", "You fund the costly switch to treated river water and cap the deep wells. The investment is vast and slow, but the aquifer steadies and the city's slow sinking begins to brake.", { EN: 8, RE: 6, FI: -10 }],
      ["Keep drilling deeper wells.", "Surface water is a budget for the next decade, not this one.", "You stick with the cheap, fast deep wells. The water keeps flowing and the city keeps sinking, lowering itself a little further into the path of the next great flood.", { FI: 4, RE: -4, EN: -6 }])),

  // ── Slum upgrading vs eviction ──────────────────────────────────────────────
  ax("Urban Development Secretary", "people", ["slums", "housing", "eviction"],
    sx("A vast slum sits on prime public land a developer covets. The secretary can clear it for a lucrative project and a fat fee to the treasury, or invest in upgrading it in place with water, sanitation, and secure tenure for the half-million who live there.",
      ["Clear the slum for development.", "Prime land cannot house the poorest forever.", "You evict the half-million and hand the land to the developer. The treasury banks the fee, the towers rise, and the displaced melt into other, worse slums across the city.", { FI: 8, FA: 2, EN: -10, MI: -2 }],
      ["Upgrade the slum in place.", "A roof made secure is a family lifted.", "You invest in water, sanitation, and tenure for the slum-dwellers. The developer's fee is forgone and the budget stretched, but half a million people gain a real foothold in the city.", { EN: 10, FI: -8 }])),

  // ── Mental health ───────────────────────────────────────────────────────────
  ax("Mental Health Coordinator", "doctor", ["mental-health", "stigma", "care"],
    sx("Depression, trauma, and suicide go almost entirely untreated, hidden by stigma and a near-total lack of services. The coordinator wants mental health woven into primary care and the chaining of patients in 'healing' shrines outlawed — unglamorous work, easy to deprioritise.",
      ["Build mental health into primary care.", "A mind in pain is as sick as a body.", "You integrate mental health into the clinics and ban the abusive shrines. Progress is quiet and stigma stubborn, but for the first time there is somewhere for the suffering to turn.", { EN: 8, GL: 2, FI: -4 }],
      ["Leave mental health unaddressed.", "There are more visible illnesses to fund.", "You spend the money on more photogenic health needs. The shrines keep their chained patients, the suicides go uncounted, and a vast, silent suffering stays in the dark.", { FI: 2, EN: -6 }])),

  // ── Migratory bird hunting ──────────────────────────────────────────────────
  ax("Wetlands Director", "official", ["birds", "hunting", "wetlands"],
    sx("Each winter, poachers net and poison the migratory birds that flock to the haors by the hundred thousand, selling them in the markets. The director wants armed wetland guards and market raids; the trade feeds poor villagers and a lucrative delicacy market alike.",
      ["Protect the birds with guards and raids.", "A flyway emptied does not refill.", "You deploy wetland guards and raid the bird markets. The poaching networks resist and some villagers lose an income, but the great winter flocks begin, slowly, to return.", { EN: 8, RE: 2, FI: -4 }],
      ["Leave the winter bird trade alone.", "The poor have hunted these marshes forever.", "You let the netting and the markets be. The villagers keep their winter income and the delicacy-sellers their trade, and each year fewer birds come back to the drying haors.", { FI: 2, EN: -6 }])),

  // ── Two-stroke vehicle emissions ────────────────────────────────────────────
  ax("Air Quality Officer", "official", ["air", "vehicles", "emissions"],
    sx("Smoke-belching old buses, trucks, and two-stroke engines are a major source of the capital's lethal air. The officer wants the worst vehicles scrapped and emissions-tested off the road; the transport owners and the legions of poor drivers will fight it hard.",
      ["Scrap and test the dirtiest vehicles.", "Every black-smoke exhaust is a lung's enemy.", "You force emissions testing and scrap the worst polluters. The owners strike and the drivers protest the cost, but the city's air loses some of its poison.", { EN: 8, FI: -4, FA: -2 }],
      ["Leave the old fleet on the road.", "A scrapped bus is a driver's lost livelihood.", "You spare the ageing fleet. The drivers keep their wages and the owners their profits, and the capital keeps breathing the smoke that fills its hospital wards each winter.", { FI: 2, EN: -8 }])),

  // ── River dolphin and biodiversity ──────────────────────────────────────────
  ax("Aquatic Conservator", "relief", ["dolphins", "rivers", "biodiversity"],
    sx("The rare freshwater river dolphins are dying in fishing nets and dredged, poisoned channels — a living symbol of the rivers' decline. The conservator wants protected sanctuary stretches with fishing limits; the fishers in those reaches will lose their grounds.",
      ["Declare protected dolphin sanctuaries.", "A river that loses its dolphins is dying.", "You ring off sanctuary stretches and limit the gear allowed. The fishers in those reaches lose ground and grumble, but the dolphins — and the river health they signal — get a refuge.", { EN: 8, RE: 4, FI: -2 }],
      ["Leave the river reaches open to fishing.", "A fisher's net outweighs a rare fish.", "You decline to restrict the fishing grounds. The fishers keep their reaches, and the dolphins keep drowning in the nets and the dredge-spoil until the rivers fall silent.", { FI: 2, RE: -2, EN: -6 }])),

  // ── Safe-water supply for arsenic belt ──────────────────────────────────────
  ax("Public Health Engineer", "people", ["arsenic", "water", "health"],
    sx("Whole districts still drink arsenic-laced tube-well water, slowly poisoning millions toward cancer and lesions. The engineer wants a deep-well and surface-treatment programme to give them safe water; it is expensive and the harm is slow and invisible.",
      ["Fund the safe-water programme.", "A well that poisons slowly still poisons.", "You build deep safe wells and treatment systems across the arsenic belt. The cost is heavy and the benefit decades-deferred, but millions stop drinking their own slow death.", { EN: 10, RE: 4, FI: -8 }],
      ["Leave the arsenic belt to cope.", "The poison is slow; the budget is urgent.", "You divert the money to faster-burning needs. The tube-wells keep flowing clear and toxic, and a generation of the arsenic districts grows its quiet crop of cancers and lesions.", { FI: 4, EN: -8 }])),

  // ── Waste-to-energy vs recycling ────────────────────────────────────────────
  ax("Solid Waste Director", "official", ["waste", "landfill", "recycling"],
    sx("The capital's mountainous landfills are overflowing and toxic. A foreign firm offers a waste-to-energy incinerator — a fast fix that would undercut the army of informal waste-pickers and lock in decades of burning, versus a slower push for sorting and recycling.",
      ["Build the waste-to-energy incinerator.", "A burning problem needs a burning solution.", "The incinerator rises and the landfills shrink. The waste-pickers lose their livelihood, the contract locks in decades of emissions, and recycling withers before it began.", { RE: 4, FI: -4, EN: -6 }],
      ["Build a sorting and recycling system.", "Waste burned is a resource lost twice.", "You invest in sorting, composting, and bringing the waste-pickers into a formal recycling system. It is slower and messier, but the landfills shrink without a smokestack and the pickers keep their trade.", { EN: 8, RE: 4, FI: -6 }])),

  // ── Inclusive education for the disabled ────────────────────────────────────
  ax("Education Inclusion Officer", "people", ["disability", "education", "inclusion"],
    sx("Children with disabilities are almost entirely shut out of the schools — no ramps, no trained teachers, no will. The officer wants an inclusive-education mandate and accessibility retrofits across the system; it is costly and the demand is politically quiet.",
      ["Mandate inclusive, accessible education.", "A child shut out of school is shut out of the future.", "You fund accessibility and inclusion training system-wide. The cost is real and the lobby for it small, but tens of thousands of disabled children walk into a classroom for the first time.", { EN: 10, GL: 4, FI: -6 }],
      ["Leave special education to charities.", "The mainstream system can barely teach the able.", "You leave disabled children to the scattered charity schools. The budget is spared, the demand stays quiet, and a generation of disabled children grows up unschooled and unseen.", { FI: 2, EN: -6 }])),

  // ── Climate adaptation fund ─────────────────────────────────────────────────
  ax("Climate Resilience Director", "official", ["climate", "adaptation", "funding"],
    sx("Foreign climate funds and your own budget could go either to flashy mitigation showpieces that please donors, or to gritty local adaptation — saline-tolerant seeds, raised homesteads, floating gardens — that actually shields the frontline poor. The director asks where the money should land.",
      ["Spend on donor-friendly showpieces.", "The funders pay for what they can photograph.", "You direct the money to high-visibility projects that delight the donor circuit. The conferences applaud, but the frontline villages drowning and salting see little of it on the ground.", { GL: 6, FI: 2, EN: -6 }],
      ["Fund gritty local adaptation.", "The flood does not care how the project photographs.", "You channel the funds into saline seeds, raised plinths, and floating gardens for the frontline poor. The donor optics are duller, but the families on the climate's edge actually survive another season.", { EN: 10, FI: -2, GL: -2 }])),

  // ── The factory-effluent river belt ─────────────────────────────────────────
  ax("Environment Inspector", "people", ["effluent", "rivers", "industry"],
    sx("The dyeing and washing factories of the industrial belt pour untreated, rainbow-coloured effluent into the rivers, killing them and the villages downstream — but they are the engine of the export boom. The inspector wants effluent-treatment plants made mandatory and enforced.",
      ["Mandate and enforce effluent treatment.", "A river run rainbow is a river run dead.", "You make treatment plants mandatory and start fining and closing violators. The factory owners protest the cost and a few relocate, but the rivers and their villages begin to come back to life.", { EN: 10, RE: 4, FI: -6, FA: -2 }],
      ["Let the factories discharge as they do.", "The export boom cannot be choked by a clause.", "You leave the effluent flowing for the sake of the export earnings. The rivers stay dead, the downstream villages drink poison, and the belt's children break out in chemical rashes.", { FI: 6, EN: -12 }]),
    sx("You ordered treatment, but the factories built the plants and run them only during inspections, switching them off to save power the rest of the time. The inspector wants live, tamper-proof monitoring wired to your office; the owners call it surveillance and overreach.",
      ["Install live tamper-proof monitoring.", "A treatment plant switched off is a lie with a chimney.", "You wire continuous monitors straight to the regulator. The owners rage at the 'surveillance', but the plants finally run around the clock and the rivers stay clean between inspections too.", { EN: 8, RE: 2, FI: -4, FA: -2 }],
      ["Trust the periodic inspections.", "I will not put a spy in every factory.", "You stick with scheduled inspections. The owners keep their plants dark between visits, the effluent flows again by night, and the cleaned-up rivers quietly turn rainbow once more.", { FI: 2, FA: 2, EN: -8 }]),
    sx("With monitoring in place, the worst-offending factory — owned by a major party donor — is caught dumping for months and faces closure. He calls in his debt: a quiet pardon, or he pulls his funding and takes a thousand jobs with him.",
      ["Pardon the donor's factory.", "A thousand jobs and a funder outweigh one river.", "You quietly let the donor off. The funding and the jobs are safe, the monitoring scheme is exposed as selective, and every other polluter learns the rules are for those without patrons.", { FI: 4, FA: 4, EN: -10, GL: -2 }],
      ["Close it like any other violator.", "A law that spares my donors is no law.", "You enforce the closure regardless of who owns it. The donor pulls his money and the jobs are lost in a bitter row, but the principle holds and the rivers gain a true defender.", { EN: 10, GL: 4, FI: -6, FA: -6 }])),

  // ── Tuberculosis control ────────────────────────────────────────────────────
  ax("TB Programme Director", "doctor", ["tuberculosis", "disease", "poverty"],
    sx("Tuberculosis still kills tens of thousands a year here, and drug-resistant strains are spreading because patients drop their long treatment halfway. The director wants a costly nationwide detection-and-adherence push; the disease is unglamorous and the budget tight.",
      ["Fund the full TB control programme.", "A cough ignored becomes a strain no drug can touch.", "You fund active detection, free drugs, and adherence support nationwide. The cost is real and the cause unglamorous, but TB deaths fall and the drug-resistant strains are choked before they spread.", { EN: 10, GL: 4, FI: -6 }],
      ["Run a minimal TB programme.", "There are louder diseases than an old cough.", "You keep TB control to a token effort. The budget is spared, and tuberculosis goes on killing the poor in the tens of thousands while resistant strains breed in the half-treated.", { FI: 4, EN: -8 }])),

  // ── Childhood drowning prevention ───────────────────────────────────────────
  ax("Child Safety Director", "relief", ["drowning", "children", "ponds"],
    sx("Drowning is the leading killer of the country's young children, who slip into the countless ponds and ditches while parents work. The director wants community crèches, pond barriers, and swimming lessons — cheap per life saved, but a scattered, unglamorous effort easily ignored.",
      ["Fund drowning-prevention programmes.", "A child lost to a pond is a death we know how to prevent.", "You fund village crèches, pond barriers, and swimming lessons. The effort is scattered and the gains quiet, but the leading killer of the nation's small children is pushed back, pond by pond.", { EN: 8, FI: -4 }],
      ["Treat drowning as unavoidable.", "A country of water will always lose some children to it.", "You leave the ponds unfenced and the crèches unbuilt. The budget is spared, and small children keep slipping unwatched into the water to die in numbers a few barriers and lessons would have saved.", { FI: 2, EN: -6 }])),

  // ── Nipah virus / date-palm sap ─────────────────────────────────────────────
  ax("Zoonotic Disease Director", "doctor", ["nipah", "zoonosis", "outbreak"],
    sx("Each winter the deadly Nipah virus kills villagers who drink raw date-palm sap contaminated by bats — a small but terrifying outbreak with pandemic potential. The director wants an awareness and safe-sap campaign and bat-habitat research; the cause is niche and the budget contested.",
      ["Fund the Nipah prevention campaign.", "A virus a bat could turn into a pandemic deserves a watch.", "You fund safe-sap awareness, surveillance, and habitat research. The outbreaks shrink and, more importantly, a virus with pandemic potential is watched and contained before it can learn to spread between people.", { EN: 6, GL: 4, FI: -4 }],
      ["Treat Nipah as a rare niche risk.", "A handful of deaths from palm sap is not a budget line.", "You leave Nipah to chance. The budget is spared, and each winter villagers keep dying from the raw sap while a virus with pandemic potential goes unwatched, one mutation from catastrophe.", { FI: 2, EN: -4, GL: -2 }])),

  // ── Infant-formula marketing code ───────────────────────────────────────────
  ax("Child Nutrition Director", "doctor", ["breastfeeding", "formula", "marketing"],
    sx("Aggressive infant-formula marketing is pushing mothers off breastfeeding toward costly formula often mixed with unsafe water, harming babies. The director wants a hard enforcement of the formula-marketing code; the formula industry, a big advertiser and donor, resists.",
      ["Enforce the formula-marketing code hard.", "A mother's milk is the safest first food there is.", "You enforce the marketing ban and promote breastfeeding. The formula industry howls and trims its advertising and donations, but breastfeeding rates climb and fewer babies sicken on formula mixed with bad water.", { EN: 8, GL: 4, FI: -2, FA: -2 }],
      ["Leave formula marketing alone.", "The formula firms are generous friends.", "You leave the marketing unchecked. The industry's ads and donations keep flowing, and mothers keep being pushed toward costly formula and the sick babies that unsafe mixing brings.", { FI: 4, FA: 2, EN: -6 }])),

  // ── Diabetes / NCD epidemic ─────────────────────────────────────────────────
  ax("Non-Communicable Disease Director", "doctor", ["diabetes", "ncd", "prevention"],
    sx("Diabetes, heart disease, and hypertension are exploding — now the country's biggest killers — yet the health system is built for infections, not chronic care. The director wants a costly pivot to NCD screening, prevention, and lifelong management; the payoff is slow and diffuse.",
      ["Pivot the health system toward NCDs.", "The diseases of plenty now kill more than the diseases of want.", "You fund screening, prevention, and chronic-care management for NCDs. The pivot is costly and the gains slow, but the system begins to confront the diabetes and heart disease now killing most.", { EN: 8, GL: 2, FI: -6 }],
      ["Keep the focus on infectious disease.", "The old killers are the ones I know how to fight.", "You keep the system geared to infections. The familiar battles are fought, and the silent epidemic of diabetes and heart disease keeps swelling, untreated and unmanaged, into the leading cause of death.", { FI: 2, EN: -6 }])),

  // ── Trans-fat ban ───────────────────────────────────────────────────────────
  ax("Food Standards Director", "doctor", ["trans-fat", "heart-disease", "food"],
    sx("Industrial trans-fats — in the cheap dalda and baked goods the poor eat most — drive a wave of heart disease, and a hard regulatory limit would save lives at almost no cost to the consumer. The vanaspati and bakery industries lobby hard against it.",
      ["Ban industrial trans-fats.", "A fat that clogs the nation's arteries for a cheaper biscuit is no bargain.", "You impose a strict trans-fat limit. The vanaspati and bakery lobbies fight it, but the change is near-invisible to consumers and a wave of preventable heart disease begins, quietly, to recede.", { EN: 8, GL: 4, FA: -2 }],
      ["Leave trans-fats unregulated.", "A limit on cooking fat is a war with the bakers.", "You spare the industries the limit. The cheap trans-fat-laden food keeps filling the poor's plates, and the heart disease it drives keeps filling the cardiac wards.", { FI: 2, EN: -6 }])),

  // ── Oxygen and ICU capacity ─────────────────────────────────────────────────
  ax("Hospital Capacity Director", "doctor", ["oxygen", "icu", "preparedness"],
    sx("The last respiratory crisis exposed a fatal shortage of medical oxygen and ICU beds, with patients dying in corridors gasping for air. The director wants a permanent build-out of oxygen plants and critical-care capacity; between crises the money is wanted elsewhere.",
      ["Build permanent oxygen and ICU capacity.", "A patient who dies for want of air is a death we chose not to prevent.", "You fund oxygen-generation plants and critical-care beds across the country. The cost is heavy and the danger feels distant between crises, but the next respiratory wave meets a system that can breathe for its patients.", { EN: 10, GL: 2, FI: -8 }],
      ["Rely on emergency procurement.", "A standing ICU network is a fortune for a once-a-decade crisis.", "You lean on scrambling for oxygen and beds when crisis hits. The money is saved between emergencies, and the next respiratory wave finds the same corridors of patients gasping for air the last one did.", { FI: 4, EN: -8 }])),

  // ── Stray-dog / rabies control ──────────────────────────────────────────────
  ax("Public Health Veterinary Officer", "doctor", ["rabies", "dogs", "vaccination"],
    sx("Rabies from dog bites kills hundreds a year, mostly poor children, and the old response — culling strays — only scatters them and fails. The officer wants a humane mass dog-vaccination and sterilisation programme that actually ends rabies; it is costly and slow versus the cheap, futile culls.",
      ["Fund mass dog vaccination and sterilisation.", "A vaccinated dog is a child's life saved.", "You fund humane vaccination and sterilisation at scale. It is costly and slow, but rabies — and the painful deaths of poor children it causes — recedes in a way the futile culls never achieved.", { EN: 8, GL: 2, FI: -4 }],
      ["Stick with periodic culls.", "A cull is cheap and the public wants the strays gone.", "You keep mounting the cheap, periodic culls. They satisfy the public briefly and scatter the survivors, and the rabies and the dead children keep coming because culling never ends it.", { FI: 2, EN: -6 }])),

  // ── Cervical-cancer / HPV vaccine ───────────────────────────────────────────
  ax("Women's Health Director", "doctor", ["hpv", "cancer", "girls"],
    sx("Cervical cancer is a leading cancer killer of the country's women, and an HPV vaccine given to adolescent girls would all but prevent it for a generation. The director wants a national school-based campaign; anti-vaccine rumours and conservative unease about a 'sex' vaccine threaten it.",
      ["Launch the national HPV campaign.", "A vaccine now is a generation of women spared a cancer.", "You roll out HPV vaccination through the schools. The rumours and the conservative grumbling are real, but a generation of girls is shielded from a cancer that kills their mothers and grandmothers.", { EN: 10, GL: 4, FA: -2 }],
      ["Shelve the HPV vaccine drive.", "A 'sex vaccine' for schoolgirls is a fight I need not pick.", "You shelve the campaign to avoid the controversy. The conservatives are unprovoked, and a preventable cancer keeps killing the country's women for want of a vaccine you chose not to give their daughters.", { FA: 2, EN: -8 }])),

  // ── Faecal-sludge management ────────────────────────────────────────────────
  ax("Sanitation Engineering Director", "people", ["sewage", "sludge", "cities"],
    sx("The cities' septic tanks and latrines are emptied by informal crews who dump the raw sludge straight into drains and rivers, undoing the sanitation gains. The director wants a proper faecal-sludge treatment system; it is costly, unglamorous, and easy to keep ignoring.",
      ["Build faecal-sludge treatment.", "A latrine whose waste ends in the river is half a toilet.", "You build sludge-collection and treatment systems. The work is unglamorous and the cost real, but the rivers and drains stop receiving the raw waste, and the sanitation gains are finally completed.", { EN: 8, RE: 2, FI: -6 }],
      ["Leave the informal emptiers be.", "The tanks get emptied; where it goes is detail.", "You leave the dumping unaddressed. The septic tanks get emptied cheaply, and the raw sludge keeps flowing into the drains and rivers, undoing the toilets the country was so proud to build.", { FI: 2, EN: -6 }])),

  // ── Thalassemia screening ───────────────────────────────────────────────────
  ax("Genetic Health Director", "doctor", ["thalassemia", "screening", "prevention"],
    sx("A staggering number of children are born each year with thalassemia, a lifelong blood disorder, because carrier parents never knew. A premarital and prenatal screening programme could prevent most cases; it is costly and touches the sensitive ground of marriage and reproduction.",
      ["Launch a thalassemia screening programme.", "A test before marriage spares a child a lifetime of transfusions.", "You fund carrier screening and counselling. The cost and the sensitivity are real, but the number of children born to a lifetime of transfusions and suffering begins to fall sharply.", { EN: 8, GL: 2, FI: -4 }],
      ["Leave screening to private choice.", "The state has no place in the marriage bed.", "You leave thalassemia screening to those who can pay and think to ask. The budget is spared, and children keep being born to a preventable lifelong disease for want of a test their parents never knew to take.", { FI: 2, EN: -4 }])),

  // ── Occupational lung disease ───────────────────────────────────────────────
  ax("Occupational Health Director", "doctor", ["silicosis", "byssinosis", "workers"],
    sx("Stone-crusher and textile-mill workers are dying of silicosis and byssinosis — lungs destroyed by dust the law says employers must control but never do. The director wants real enforcement, dust controls, and compensation; the industry calls it ruinous.",
      ["Enforce dust controls and compensation.", "A lung filled with dust is a death sentence served slowly.", "You enforce dust controls and a compensation scheme for the afflicted. The stone-crusher and mill owners howl at the cost, but workers stop drowning in their own scarred lungs for want of a mask and a filter.", { EN: 8, GL: 2, FI: -4, FA: -2 }],
      ["Leave occupational dust unregulated.", "The mills and crushers employ thousands the rules would idle.", "You leave the dust unregulated. The industry stays cheap, and the workers keep breathing the silica and cotton dust that fills their lungs and shortens their lives, uncompensated and unprotected.", { FI: 4, EN: -8 }])),

  // ── Mental health in disasters ──────────────────────────────────────────────
  ax("Disaster Health Coordinator", "doctor", ["mental-health", "disaster", "trauma"],
    sx("Survivors of cyclones, floods, and displacement carry untreated trauma that the relief system, focused on food and shelter, entirely ignores. The coordinator wants psychosocial support built into disaster response; the hard-nosed call it a soft luxury when people need rice and roofs.",
      ["Build psychosocial support into relief.", "A roof over a broken mind is only half a rescue.", "You weave mental-health support into disaster response. The hard-nosed scoff at counselling amid the rubble, but survivors begin to recover minds as well as homes, and the long shadow of disaster trauma shortens.", { EN: 6, GL: 2, FI: -2 }],
      ["Keep relief to food and shelter.", "A drowning man needs a rope, not a therapist.", "You keep disaster relief to the material basics. The rice and roofs arrive, and the survivors' untreated trauma festers into a quiet epidemic of broken minds the relief never thought to mend.", { FI: 2, EN: -4 }])),

  // ── Essential-medicines pricing ─────────────────────────────────────────────
  ax("Drug Pricing Director", "doctor", ["medicines", "pricing", "access"],
    sx("Prices of essential, life-saving medicines have crept beyond the poor's reach, while the pharmaceutical industry — a proud export earner and donor — resists price controls. The director wants an enforced essential-medicines price ceiling; the industry threatens to cut investment.",
      ["Cap essential-medicine prices.", "A drug the dying cannot afford is no cure.", "You impose price ceilings on essential medicines. The pharma industry protests and trims some investment, but life-saving drugs come back within reach of the poor who were going without.", { EN: 8, GL: 2, FI: -2, FA: -2 }],
      ["Leave medicine pricing to the market.", "The pharma industry is a jewel I will not dull.", "You leave prices to the market to protect the industry. The exports and donations flow, and the poor keep rationing or skipping the essential medicines that keep them alive.", { FI: 4, FA: 2, EN: -6 }])),

  // ── Doctor absenteeism in rural clinics ─────────────────────────────────────
  ax("Health Services Director", "people", ["doctors", "absenteeism", "rural"],
    sx("The rural health clinics stand staffed on paper but empty in fact, their posted doctors absent in private city practice while villagers find locked doors. The director wants biometric attendance and real consequences; the medical lobby, politically connected, resists fiercely.",
      ["Enforce attendance with real consequences.", "A clinic with a locked door is a lie with a signboard.", "You impose biometric attendance and penalties for absentee doctors. The medical lobby fights and a few connected careers suffer, but the rural clinics start to have a doctor behind the door for once.", { EN: 8, GL: 2, FA: -4 }],
      ["Leave the absenteeism unaddressed.", "The doctors' lobby is not lightly crossed.", "You leave the empty clinics alone. The medical lobby stays content, the doctors keep their lucrative city practices, and the villagers keep finding locked doors where their healthcare should be.", { FA: 2, EN: -6 }])),

  // ── Community-clinic network ────────────────────────────────────────────────
  ax("Primary Health Director", "people", ["clinics", "primary-care", "access"],
    sx("The network of community clinics bringing basic care to the villages is the country's quiet health triumph — but many lack medicine, staff, and repair, sliding back toward uselessness. The director wants a major reinvestment to revive them; the money competes with flashier hospital projects.",
      ["Reinvest in the community clinics.", "A clinic in the village outheals a tower in the capital.", "You reinvest in medicine, staff, and upkeep for the community clinics. The money is unglamorous beside a grand hospital, but basic care reaches the villages again and the country's quiet health triumph is renewed.", { EN: 10, GL: 2, FI: -6 }],
      ["Fund flagship hospitals instead.", "A grand hospital is a monument; a clinic is a footnote.", "You steer the money to showcase hospitals. The ribbon-cuttings dazzle, and the community clinics keep sliding into empty, medicine-less uselessness while the villages lose their nearest care.", { FI: -4, EN: -2 }])),

  // ── Date-rape / spurious-drug nightlife ─────────────────────────────────────
  ax("Adolescent Health Director", "doctor", ["adolescents", "substance", "harm"],
    sx("A wave of cheap intoxicants and adulterated energy drinks is harming the urban young, with no honest information and only a punitive, shaming response. The director wants harm-reduction education and clean-drug enforcement; moralists demand crackdowns and silence instead.",
      ["Fund harm-reduction and honest education.", "A young person warned is a young person who lives.", "You fund honest education and clean-product enforcement over shame. The moralists object to 'condoning' the behaviour, but informed young people make safer choices and the adulterated products are driven out.", { EN: 6, GL: 2, FI: -2, FA: -2 }],
      ["Stick to crackdowns and shaming.", "The young need discipline, not pamphlets.", "You keep the punitive, silent approach. The moralists are satisfied, and the young keep harming themselves on adulterated products in ignorance, criminalised rather than informed.", { FA: 2, MI: 2, EN: -6 }])),

  // ── Faecal-contamination of street food ─────────────────────────────────────
  ax("Urban Food Safety Officer", "doctor", ["street-food", "hygiene", "disease"],
    sx("The street food millions rely on is often prepared with contaminated water and no hygiene, spreading typhoid and diarrhoeal disease. The officer wants licensing, clean-water access, and hygiene training for vendors — or you can keep clearing them in futile drives.",
      ["License and support clean street food.", "The poor's kitchen is the street; clean it, don't raze it.", "You license vendors and give them clean water, hygiene training, and standards. The vendors gain legitimacy and the food gets safer, and the typhoid and diarrhoea the street once spread begin to ebb.", { EN: 8, FI: -2, MI: -2 }],
      ["Keep clearing the street vendors.", "Unlicensed food has no place on the pavement.", "You keep mounting eviction drives that scatter the vendors and change nothing. The street food returns, unlicensed and unclean as ever, and keeps seeding the typhoid and diarrhoea through the city.", { MI: 2, FI: 2, EN: -6 }])),

  // ── Asbestos ban ────────────────────────────────────────────────────────────
  ax("Industrial Health Director", "doctor", ["asbestos", "ban", "construction"],
    sx("Asbestos, banned across much of the world, is still imported and used in cheap roofing and the shipbreaking yards, seeding a slow epidemic of lung cancer decades out. The director wants an import-and-use ban; the cheap-roofing and shipbreaking industries resist.",
      ["Ban asbestos import and use.", "A roof of asbestos is a cancer with a thirty-year fuse.", "You ban asbestos import and use and require safe handling of the existing stock. The cheap-roofing and shipbreaking industries protest the cost, but a slow epidemic of lung cancer is cut off before it can ripen.", { EN: 8, GL: 4, FI: -4 }],
      ["Keep asbestos legal and cheap.", "Cheap roofing shelters the poor today.", "You keep asbestos flowing. The cheap roofing and the breaking yards stay profitable, and the fibres keep lodging in lungs that will, decades hence, fill the cancer wards.", { FI: 4, EN: -8 }])),

  // ── Heat action plan for cities ─────────────────────────────────────────────
  ax("Urban Resilience Officer", "relief", ["heat", "cities", "adaptation"],
    sx("Killer heatwaves are becoming routine, and the cities have no plan — no cooling shelters, no warnings, no protection for the outdoor poor. The officer wants a costly urban heat-action plan; between heatwaves the danger feels abstract and the budget is contested.",
      ["Build urban heat-action plans.", "A heatwave foreseen is a heatwave survived.", "You fund cooling shelters, early warnings, and protections for the outdoor poor. The cost is real and the danger abstract between waves, but the next killer heatwave meets a city that can shelter its people.", { EN: 8, RE: 2, FI: -4 }],
      ["Leave the heat to chance.", "A heat plan is a budget for weather that may not come.", "You leave the cities unprepared. The money goes elsewhere, and each killer heatwave carries off the elderly and the outdoor poor a city with a plan would have sheltered.", { FI: 2, EN: -6 }])),

  // ── Oil-spill / marine pollution response ───────────────────────────────────
  ax("Marine Pollution Officer", "relief", ["oil-spill", "marine", "mangroves"],
    sx("A tanker has spilled furnace oil into the mangrove rivers, coating the forest, the dolphins, and the fishers' grounds, and there is no response capacity worth the name. The officer wants a real marine-spill response system built; for now, all you can do is choose how hard to scramble.",
      ["Mount a maximal cleanup and build capacity.", "A poisoned mangrove is a wound that festers for years.", "You throw everything at the cleanup and commit to building real spill-response capacity. The cost is steep and the damage already done, but the forest is salvaged where it can be and the next spill meets a system that can answer.", { EN: 8, RE: 2, FI: -6 }],
      ["Do a token cleanup and move on.", "A full spill-response service is a fortune for a rare accident.", "You manage a token response and let nature absorb the rest. The money is saved, the mangroves, dolphins, and fishing grounds bear the poison, and the next spill finds you just as unprepared.", { FI: 2, RE: -2, EN: -6 }])),

  // ── Anaemia and deworming ───────────────────────────────────────────────────
  ax("School Health Director", "doctor", ["anaemia", "deworming", "children"],
    sx("Anaemia and intestinal worms sap the health and minds of a huge share of the country's schoolchildren — both cheaply treatable with iron and deworming tablets through the schools. The director wants a universal programme; even this small cost faces budget scrutiny.",
      ["Fund universal school deworming and iron.", "A wormed, iron-fed child learns; a starved one stares.", "You roll out deworming and iron supplements through every school. The cost is small per child, and a huge share of the nation's children grow sharper, healthier, and more able to learn.", { EN: 10, GL: 2, FI: -4 }],
      ["Leave it to families and clinics.", "Pills for worms are a family's small errand.", "You leave deworming and iron to families who mostly never get round to it. The pennies are saved, and a generation of schoolchildren keeps learning dulled by worms and anaemia a tablet would have cured.", { FI: 2, EN: -6 }])),

  // ── Green courts / environmental litigation ─────────────────────────────────
  ax("Environmental Justice Officer", "official", ["green-court", "litigation", "enforcement"],
    sx("Polluters escape because the ordinary courts are too slow and ignorant to try them. A dedicated environmental court with real teeth would change that — and would also turn its gaze on the connected industries and the agencies that rubber-stamp their clearances.",
      ["Establish an empowered green court.", "A polluter who never faces a judge pollutes forever.", "You stand up a real environmental court with teeth. Polluters start losing cases and paying, and the connected industries and the clearance-stamping officials suddenly find themselves answerable to a bench they cannot buy.", { EN: 8, GL: 4, FA: -4 }],
      ["Leave green cases to the ordinary courts.", "Another court is another fight with the industries.", "You leave environmental cases to the slow, overburdened ordinary courts. The polluters keep escaping in the backlog and the ignorance, and the law against them stays a dead letter.", { FA: 2, EN: -6 }])),

  // ── EIA integrity ───────────────────────────────────────────────────────────
  ax("Environmental Clearance Director", "shadow", ["eia", "clearance", "corruption"],
    sx("Environmental impact assessments are a rubber stamp — written by the developers, blessed for a bribe, ignoring every real harm. The director wants independent, credible assessments with public hearings; the developers and the officials who sell the stamps resist hard.",
      ["Make environmental assessment credible.", "A clearance bought is a disaster pre-approved.", "You require independent assessments and genuine public hearings. The developers and the stamp-selling officials rage and lose their racket, but projects are finally judged on their real harms before they are built.", { EN: 8, GL: 4, FI: -2, FA: -4 }],
      ["Keep the clearance a rubber stamp.", "A demanding assessment scares off the investor.", "You leave the clearance process a paid formality. The investment flows fast and unimpeded, and project after harmful project is built on assessments that were written to be ignored.", { FI: 4, FA: 2, EN: -8, GL: -2 }])),

  // ── Newborn-care units ──────────────────────────────────────────────────────
  ax("Maternal Health Director", "doctor", ["newborn", "neonatal", "mortality"],
    sx("Too many newborns die in the first month from causes a basic special-care unit could prevent — warmth, oxygen, infection control. The director wants neonatal units in every district hospital; the cost is real and the deaths, scattered and private, draw little outrage.",
      ["Build neonatal special-care units.", "A baby lost in its first week is a death medicine knows how to stop.", "You build special newborn-care units across the district hospitals. The cost is real, but the newborns who once died of cold, infection, and want of oxygen begin, in their thousands, to live.", { EN: 10, GL: 2, FI: -6 }],
      ["Leave newborn care to existing wards.", "The general wards have always handled the babies.", "You leave newborns to the overstretched general wards. The money is saved, and the babies keep dying in their first weeks of the cold, infection, and oxygen-want a special-care unit would have prevented.", { FI: 4, EN: -6 }])),

  // ── Cyclone early-warning modernisation ─────────────────────────────────────
  ax("Meteorological Director", "relief", ["cyclone", "early-warning", "technology"],
    sx("The cyclone early-warning system — once a world-leading lifesaver — has aged, its radars failing and its last-mile volunteer network fraying. The director wants a costly modernisation of radar, forecasting, and village warning; complacency says the old system still mostly works.",
      ["Modernise the early-warning system.", "A warning that comes late or not at all is a coast unguarded.", "You modernise the radar, forecasting, and the village warning network. The cost is real, but the country's proudest disaster achievement is renewed, and the next great cyclone meets a coast that knows it is coming.", { EN: 8, RE: 2, FI: -6 }],
      ["Rely on the ageing system.", "The old system has saved us before.", "You leave the early-warning system to age. The money is saved, the failing radars and fraying volunteer network limp on, and the next cyclone finds the warnings late and patchy where they were once a marvel.", { FI: 4, EN: -6 }])),

  // ── Family planning / population ────────────────────────────────────────────
  ax("Family Planning Director", "people", ["family-planning", "population", "women"],
    sx("The fertility decline that was a national triumph has stalled, and the field-worker network that drove it is fraying for want of funding. The director wants to revive and modernise it — contraception, counselling, women's choice — against a quiet conservative pushback and budget neglect.",
      ["Revive the family-planning network.", "A choice given to women is a future given to the nation.", "You refund and modernise the family-planning programme. The conservatives grumble quietly, but contraception and counselling reach women again, the stalled fertility decline resumes, and women regain control of their lives.", { EN: 8, GL: 2, FI: -4, FA: -2 }],
      ["Let the programme keep fraying.", "Population is no longer the crisis it was.", "You leave the network to decay. The budget is spared, and as the field-workers vanish the fertility decline reverses in the poorest regions, where women lose the choice the programme once gave them.", { FI: 2, EN: -6 }])),

  // ── Cancer hospital and radiotherapy ────────────────────────────────────────
  ax("Cancer Care Director", "doctor", ["cancer", "radiotherapy", "access"],
    sx("Cancer patients die waiting because the country has a handful of working radiotherapy machines for a population of millions, all in the capital. The director wants regional cancer centres and machines; the cost is enormous and the equipment notoriously prone to lying idle for want of upkeep.",
      ["Build regional cancer centres.", "A cancer patient who must reach the capital to be treated dies on the road.", "You build cancer centres and radiotherapy across the regions, with upkeep contracts. The cost is vast, but cancer patients stop dying in queues for the capital's few machines, treated near home instead.", { EN: 10, GL: 2, FI: -8 }],
      ["Concentrate cancer care in the capital.", "Specialist care belongs where the specialists are.", "You keep cancer care centralised. The capital's centres are excellent and unreachable, and the cancer patients of the provinces keep dying on waiting lists or on the long road to the city.", { FI: 2, EN: -6 }])),

  // ── Public parks and playgrounds ────────────────────────────────────────────
  ax("Urban Open-Space Officer", "people", ["parks", "playgrounds", "children"],
    sx("The cities' last open spaces — parks, playgrounds, water bodies — are being grabbed and built over, leaving children nowhere to play and millions no green to breathe. The officer wants the remaining open spaces protected and reclaimed; developers and land-grabbers covet every inch.",
      ["Protect and reclaim urban open spaces.", "A city with no playground raises its children indoors and ill.", "You protect the parks and reclaim grabbed open spaces. The developers and grabbers rage at the lost plots, but children gain places to play and the suffocating city keeps a few lungs of green.", { EN: 8, RE: 2, FI: -2, FA: -2 }],
      ["Let the open spaces go to development.", "Prime urban land cannot sit idle as grass.", "You let the parks and playgrounds be built over. The land yields its value to developers, and the city's children grow up with nowhere to run and its people with no green to breathe.", { FI: 4, EN: -6 }])),

  // ── Menstrual hygiene / period poverty ──────────────────────────────────────
  ax("Adolescent Girls' Health Director", "people", ["menstruation", "girls", "school"],
    sx("Girls miss school and drop out entirely for want of menstrual products, clean toilets, and an end to the shame around periods. The director wants free pads, school toilets, and education, and to scrap the tax on sanitary products; the cost and the cultural squeamishness both resist.",
      ["Fund menstrual health and scrap the pad tax.", "A girl kept from school by her period is a future taxed away.", "You provide free pads, build girls' school toilets, and cut the sanitary-product tax. The squeamish object and the revenue dips, but girls stop missing school and dropping out over something so preventable.", { EN: 8, GL: 2, FI: -2, FA: -2 }],
      ["Leave menstrual needs to families.", "Sanitary products are a household matter, not a budget line.", "You leave the matter to families and the market. The tax revenue and the awkward conversation are both avoided, and girls keep missing school and dropping out for want of a pad and a clean toilet.", { FI: 2, EN: -6 }])),

  // ── Skeletal fluorosis / water quality ──────────────────────────────────────
  ax("Water Quality Director", "doctor", ["fluoride", "water", "health"],
    sx("In pockets of the country the groundwater carries excess fluoride and iron, crippling people with skeletal and dental fluorosis. The director wants targeted treatment and alternative supply for the affected areas; the harm is localised and the budget always has louder claims.",
      ["Fund treatment for the affected areas.", "A well that cripples is a well that must be fixed.", "You fund de-fluoridation and alternative supply for the affected pockets. The cost is real for a localised harm, but people stop being crippled by the water their own wells draw up.", { EN: 8, RE: 2, FI: -4 }],
      ["Leave the affected pockets to cope.", "A localised problem is a localised cost I can defer.", "You leave the fluoride-stricken areas to their wells. The budget goes to broader needs, and in those pockets people keep being bent and crippled by water no one will treat.", { FI: 2, EN: -4 }])),

  // ── Noise pollution ─────────────────────────────────────────────────────────
  ax("Environmental Health Officer", "people", ["noise", "pollution", "health"],
    sx("The cities are a wall of noise — hydraulic horns, loudspeakers, generators — wrecking hearing, sleep, and hearts, with laws on the books that no one enforces. The officer wants real enforcement and quiet zones around hospitals and schools; drivers and the public resent the crackdown.",
      ["Enforce noise limits and quiet zones.", "A city that never quiets is a city that never heals.", "You enforce the noise laws and ring hospitals and schools with quiet zones. Drivers and the public grumble at the crackdown on horns and loudspeakers, but sleep, hearing, and frayed nerves get a reprieve.", { EN: 6, FI: -2, FA: -2 }],
      ["Leave the noise unaddressed.", "A horn is the least of a driver's sins to police.", "You leave the noise laws unenforced. The horns, loudspeakers, and generators blare on, and the city's hearing, sleep, and hearts keep paying the price of a din no one will silence.", { FI: 2, EN: -4 }])),

  // ── Emergency ambulance / 999 ───────────────────────────────────────────────
  ax("Emergency Services Director", "relief", ["ambulance", "emergency", "trauma"],
    sx("There is no real national ambulance service, so the injured and the labouring reach hospital by rickshaw, too late, and the road-trauma toll is appalling. The director wants a networked ambulance and emergency-response system tied to the 999 line; it is costly to build and staff.",
      ["Build a national ambulance network.", "A golden hour wasted on a rickshaw is a life lost.", "You build a networked ambulance and emergency-response service. The cost to build and staff is heavy, but the injured, the labouring, and the stricken start reaching care in time instead of too late.", { EN: 10, FI: -8 }],
      ["Leave emergency transport to chance.", "A nationwide ambulance fleet is a fortune to run.", "You leave the injured to rickshaws and luck. The money is saved, and the road-trauma victims and the labouring mothers keep dying on the way to a hospital an ambulance would have reached in time.", { FI: 4, EN: -8 }])),

  // ── Kala-azar / neglected tropical disease ──────────────────────────────────
  ax("Neglected Disease Director", "doctor", ["kala-azar", "elimination", "poverty"],
    sx("Kala-azar, a deadly sandfly-borne disease of the poorest districts, is close to elimination — the last push of detection, treatment, and vector control could finish it, or neglect could let it roar back as it has before. The director asks whether to fund the final drive.",
      ["Fund the elimination final push.", "A disease near beaten and then abandoned simply returns.", "You fund the last push of detection, treatment, and sandfly control. The cost is modest for the prize, and a deadly disease of the poorest is driven, this time, to genuine elimination.", { EN: 8, GL: 4, FI: -4 }],
      ["Ease off now it is nearly gone.", "A near-eliminated disease is a problem nearly solved.", "You ease off the programme prematurely. The budget is spared, and kala-azar, denied its final push, simmers and resurges in the poorest districts as it has every time before.", { FI: 2, EN: -6 }])),

  // ── Cataract / preventable blindness ────────────────────────────────────────
  ax("Eye Health Director", "doctor", ["blindness", "cataract", "access"],
    sx("Hundreds of thousands are needlessly blind from cataracts a fifteen-minute surgery would cure, but the surgeons and camps never reach the rural poor. The director wants mass cataract-surgery camps and rural eye care; it is cheap per sight restored, but unglamorous and easily skipped.",
      ["Fund mass cataract-surgery camps.", "A blindness a knife can cure is a blindness we choose to allow.", "You fund cataract camps and rural eye care at scale. The cost per sight restored is tiny, and hundreds of thousands needlessly blind see again, returning to work and life.", { EN: 8, GL: 2, FI: -4 }],
      ["Leave eye care to the cities.", "Specialist surgery belongs in specialist hospitals.", "You keep eye surgery centralised in the cities. The camps go unfunded, and the rural poor keep going needlessly blind from a cataract a brief, cheap surgery would have cured.", { FI: 2, EN: -6 }])),

  // ── Disease surveillance / lab capacity ─────────────────────────────────────
  ax("Disease Surveillance Director", "doctor", ["surveillance", "labs", "outbreaks"],
    sx("The country flies blind into outbreaks for want of real-time disease surveillance, genomic sequencing, and biosafe labs — caught flat-footed every time. The director wants a permanent surveillance-and-lab backbone; the investment is large and invisible until the next epidemic.",
      ["Build the surveillance-and-lab backbone.", "An epidemic seen early is an epidemic stopped.", "You build real-time surveillance, sequencing, and biosafe labs. The investment is large and unseen between crises, but the next outbreak is spotted early instead of discovered in the morgue.", { EN: 8, GL: 4, FI: -6 }],
      ["Stand up surveillance only in crises.", "A standing lab network is a fortune between epidemics.", "You scramble to build surveillance only when an outbreak hits. The money is saved between crises, and the next epidemic again finds the country blind, learning of it only once it is everywhere.", { FI: 4, EN: -6 }])),

  // ── Over-the-counter antibiotics ────────────────────────────────────────────
  ax("Pharmacy Regulation Director", "doctor", ["antibiotics", "pharmacy", "resistance"],
    sx("Antibiotics are sold over the counter like sweets, fuelling the drug resistance that will one day make infections untreatable. The director wants prescription-only enforcement and pharmacist training; the countless unlicensed pharmacies and the public used to self-medicating resist.",
      ["Enforce prescription-only antibiotics.", "An antibiotic sold like a sweet is a superbug bred for free.", "You enforce prescription-only sales and train pharmacists. The unlicensed pharmacies and the self-medicating public resist, but the reckless antibiotic use that breeds resistance begins to fall.", { EN: 8, GL: 4, FI: -2 }],
      ["Leave antibiotics on the open shelf.", "The poor cannot always reach a doctor for a prescription.", "You leave antibiotics freely sold. Access stays easy for those who cannot reach a doctor, and the reckless overuse keeps breeding the resistance that will one day render the drugs useless for all.", { FI: 2, EN: -6, GL: -2 }])),

  // ── Elderly care / ageing population ────────────────────────────────────────
  ax("Social Welfare Director", "relief", ["elderly", "ageing", "care"],
    sx("The population is ageing fast, and the old joint-family care of elders is breaking down, leaving many abandoned and destitute with no system to catch them. The director wants to build elderly day-care, geriatric health, and support; the demographic crisis still feels far off to most.",
      ["Build elderly-care and geriatric services.", "A nation that abandons its old prepares its own abandonment.", "You begin building day-care, geriatric health, and support for the elderly. The cost is real and the crisis still feels distant, but a system rises to catch the growing numbers the breaking joint family no longer can.", { EN: 8, FI: -6 }],
      ["Leave elder care to families.", "The family has always cared for its old.", "You leave the elderly to families increasingly unable to care for them. The budget is spared, and a swelling number of old people slide into abandonment and destitution with no system to catch them.", { FI: 2, EN: -6 }])),

  // ── Hospital-acquired infection control ─────────────────────────────────────
  ax("Hospital Quality Director", "doctor", ["infection-control", "hospitals", "safety"],
    sx("Patients catch deadly drug-resistant infections in the very hospitals meant to heal them, for want of basic infection control — hand hygiene, sterilisation, isolation. The director wants enforced standards and accreditation; the hospitals resent the cost and the scrutiny.",
      ["Enforce infection control and accreditation.", "A hospital that infects its patients is a hazard with a signboard.", "You enforce infection-control standards and accreditation. The hospitals grumble at the cost and the scrutiny, but patients stop catching deadly resistant infections in the wards meant to cure them.", { EN: 8, GL: 4, FI: -4, FA: -2 }],
      ["Leave hospital hygiene to the hospitals.", "Accreditation is a bureaucracy the wards can do without.", "You leave infection control to each hospital's discretion. The cost and scrutiny are avoided, and patients keep walking in with one illness and out with a drug-resistant one the wards bred and gave them.", { FI: 2, EN: -6 }])),

  // ── Composting / organic-waste diversion ────────────────────────────────────
  ax("Solid Waste Director", "official", ["composting", "waste", "landfill"],
    sx("Most of the cities' waste is wet organic matter that rots in the streets and overflows the landfills, when it could be composted into fertiliser. The director wants a citywide source-separation and composting system; it demands public habit-change and steady funding.",
      ["Build citywide composting.", "A banana peel is fertiliser, not a landfill.", "You build source-separation and composting at scale. The habit-change is slow and the funding steady, but the organic waste becomes fertiliser instead of landfill and street-rot, and the dumps stop overflowing.", { EN: 8, RE: 4, FI: -4 }],
      ["Leave waste mixed and dumped.", "Source-separation asks more of the public than they will give.", "You leave the waste mixed and bound for the overflowing landfills. The habit-change is dodged, and the wet organic matter keeps rotting in the streets and the dumps when it could have fed the fields.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Salt-reduction / hypertension ───────────────────────────────────────────
  ax("Public Health Nutrition Director", "doctor", ["salt", "hypertension", "diet"],
    sx("Sky-high salt intake is driving an epidemic of hypertension, strokes, and heart attacks. A national salt-reduction push — reformulating processed food, public awareness, front-of-pack labels — would save many lives cheaply; the food industry resists reformulation.",
      ["Drive the national salt-reduction push.", "A pinch less salt across a nation is a flood of strokes prevented.", "You push reformulation, labels, and awareness. The food industry resists changing its recipes, but salt intake edges down and the strokes and heart attacks it drives begin, across millions, to fall.", { EN: 8, GL: 2, FA: -2 }],
      ["Leave salt to the consumer.", "A man may salt his own food as he likes.", "You leave salt intake to individual choice. The food industry keeps its salty recipes, and the hypertension, strokes, and heart attacks keep mounting on a diet a little less salt would have eased.", { FI: 2, EN: -4 }])),

  // ── Assistive devices for the disabled ──────────────────────────────────────
  ax("Disability Services Director", "relief", ["disability", "assistive-devices", "access"],
    sx("Millions who need wheelchairs, hearing aids, prosthetics, and white canes go without, shut out of work and life for want of a cheap device. The director wants a national assistive-device programme; the constituency is politically quiet and the budget contested.",
      ["Fund a national assistive-device programme.", "A wheelchair is a life returned to the world.", "You fund wheelchairs, hearing aids, prosthetics, and canes at scale. The cost is real for a quiet constituency, but millions shut out for want of a cheap device rejoin work, school, and life.", { EN: 8, GL: 2, FI: -4 }],
      ["Leave assistive devices to charity.", "A device programme is a budget for a quiet few.", "You leave assistive devices to scattered charity. The budget is spared, and millions stay shut out of work and life for want of the wheelchair, hearing aid, or cane they cannot afford.", { FI: 2, EN: -6 }])),

  // ── Green building code ─────────────────────────────────────────────────────
  ax("Building Code Director", "official", ["green-building", "code", "developers"],
    sx("The construction boom throws up energy-guzzling, badly-ventilated buildings with no green standards. A green building code — insulation, ventilation, efficiency, green space — would cut energy and improve health; developers fight every cost-adding rule.",
      ["Enforce a green building code.", "A building built badly is built for fifty years of waste.", "You mandate a green building code on new construction. The developers fight the added cost, but the new buildings use less energy, breathe better, and serve their occupants' health for decades.", { EN: 6, RE: 4, FI: -2, FA: -2 }],
      ["Leave construction to minimal standards.", "A green code is a cost on every brick laid.", "You keep building standards minimal. The developers keep their margins, and the boom keeps throwing up energy-guzzling, ill-ventilated buildings the country will live in, and pay to run, for fifty years.", { FI: 2, RE: -2, EN: -4 }])),

  // ── Animal welfare / cruelty ────────────────────────────────────────────────
  ax("Animal Welfare Officer", "relief", ["animals", "cruelty", "welfare"],
    sx("Working animals, strays, zoo inmates, and livestock suffer routine cruelty under laws a century old and never enforced. The officer wants a modern animal-welfare law and enforcement; the cause is dismissed by many as a luxury when people themselves suffer.",
      ["Enact a modern animal-welfare law.", "A society cruel to its animals is coarsened toward its people too.", "You pass and enforce a modern animal-welfare law. Many dismiss it as a luxury, but the routine cruelty to working animals, strays, and zoo inmates is curbed, and a coarseness is softened.", { EN: 4, GL: 2, FI: -2 }],
      ["Leave animal welfare aside.", "I will not spend on beasts while people suffer.", "You leave animal cruelty to the dead century-old law. The budget and attention stay on human needs, and the routine, casual cruelty to animals carries on unchecked and unremarked.", { FI: 2, EN: -2 }])),

  // ── Vector control / fogging resistance ─────────────────────────────────────
  ax("Vector Control Director", "doctor", ["mosquitoes", "fogging", "dengue"],
    sx("The mosquito-fogging the cities rely on against dengue is now near-useless — the mosquitoes are resistant and the larvae breed on untouched. The director wants a shift to larval-source management and integrated control; the public loves the visible fog and distrusts the invisible fix.",
      ["Shift to larval-source management.", "Fog kills the show; clearing the breeding kills the mosquito.", "You shift from theatrical fogging to larval-source control and integrated management. The public misses the reassuring fog, but the mosquito populations and the dengue they carry actually begin to fall.", { EN: 8, FI: -2 }],
      ["Keep the reassuring fog.", "The public wants to see the trucks fog the streets.", "You keep the visible fogging the public loves. It reassures and achieves little against resistant mosquitoes breeding in untouched larvae, and the dengue seasons keep coming worse each year.", { FA: 2, EN: -6 }])),

  // ── Palliative and hospice care ─────────────────────────────────────────────
  ax("Palliative Care Director", "doctor", ["palliative", "hospice", "dignity"],
    sx("The terminally ill die in agony for want of palliative care and the morphine that could ease them — held back by fear of addiction and a system that abandons those it cannot cure. The director wants a national palliative-care and pain-relief programme; it draws no votes and little notice.",
      ["Build national palliative care.", "A death without dignity is a final cruelty we can prevent.", "You build palliative care and rational pain relief into the health system. There are no votes in dying patients, but the terminally ill stop ending their lives in needless agony, eased and accompanied.", { EN: 8, GL: 2, FI: -4 }],
      ["Leave the dying to cope.", "The budget is for the living and the curable.", "You leave palliative care unfunded. The money goes to the curable, and the terminally ill keep dying in agony, abandoned by a system that has nothing for those it cannot save.", { FI: 2, EN: -4 }])),

  // ── School eye / hearing screening ──────────────────────────────────────────
  ax("School Health Officer", "doctor", ["screening", "children", "education"],
    sx("Children fail and drop out because no one notices they cannot see the board or hear the teacher — uncorrected vision and hearing problems mistaken for stupidity. The director wants universal school screening and free glasses and hearing aids; the cost is small but the programme keeps getting cut.",
      ["Fund universal school screening.", "A child who cannot see the board is failed, not failing.", "You fund vision and hearing screening and free glasses and aids in every school. The cost per child is small, and children once written off as dull turn out simply to have needed glasses, and they flourish.", { EN: 8, GL: 2, FI: -2 }],
      ["Leave screening to parents.", "A child's eyes are a family's errand.", "You leave screening to parents who rarely think of it. The pennies are saved, and children keep failing and dropping out, their uncorrected sight and hearing mistaken for an inability to learn.", { FI: 2, EN: -4 }])),

  // ── Wetland (Ramsar) protection ─────────────────────────────────────────────
  ax("Wetland Conservation Officer", "relief", ["wetland", "ramsar", "biodiversity"],
    sx("A globally important wetland — a wintering ground for migratory birds and a nursery for fish — is being drained and encroached for farmland and development. The officer wants it protected under the international wetland convention; the encroaching farmers and developers resist.",
      ["Protect the wetland under the convention.", "A wetland drained is a thousand species evicted.", "You secure international protection and halt the draining. The encroaching farmers and developers protest the lost land, but the migratory birds, the fish nurseries, and the wetland's flood-buffering all survive.", { EN: 8, RE: 4, FI: -2, FA: -2 }],
      ["Let the wetland be drained.", "Wet land farmed is land made useful.", "You let the wetland go to farmland and development. The land yields its short-term value, and a globally important refuge for birds and fish, and a natural flood-buffer, is drained away forever.", { FI: 4, RE: -2, EN: -6 }])),

  // ── Dental / oral health ────────────────────────────────────────────────────
  ax("Oral Health Director", "doctor", ["dental", "oral-cancer", "betel"],
    sx("Oral disease is rampant and oral cancer — driven by the betel-nut and tobacco quid chewed by millions — is a leading cancer killer, yet dental care barely exists outside private clinics. The director wants public oral health and a betel-quid awareness drive; the betel trade and habit resist.",
      ["Build public oral health and quid awareness.", "A mouth cancer caught late is a death; caught early, a scar.", "You build basic public dental care and a campaign against the carcinogenic betel-tobacco quid. The betel trade and the deep habit resist, but oral disease and the cancers it breeds begin to recede.", { EN: 6, GL: 2, FI: -4 }],
      ["Leave oral health to private clinics.", "A toothache is hardly a national priority.", "You leave dental care to those who can pay. The budget is spared, and oral disease and the betel-driven cancers keep spreading untreated among the millions who never see a dentist.", { FI: 2, EN: -4 }])),

  // ── Industrial-zone air monitoring ──────────────────────────────────────────
  ax("Air Quality Director", "official", ["air-monitoring", "data", "transparency"],
    sx("The country has almost no real air-quality monitoring, so the lethal pollution is unmeasured, undenied, and unaddressed. The officer wants a public network of monitors with open, real-time data; some fear the numbers will be damning and the industries fear the accountability.",
      ["Build an open air-monitoring network.", "Pollution unmeasured is pollution unanswered.", "You build a public, real-time air-monitoring network. The damning numbers embarrass the government and rattle the industries, but for the first time the lethal air can be measured, named, and fought.", { EN: 6, GL: 4, FI: -2, FA: -2 }],
      ["Leave the air unmeasured.", "A number no one has is a scandal no one can prove.", "You leave the air unmonitored. The lethal pollution stays unmeasured and deniable, the industries stay unaccountable, and the public chokes on an air no one will officially admit is killing them.", { FA: 2, FI: 2, EN: -6 }])),

  // ── Earthquake preparedness ─────────────────────────────────────────────────
  ax("Disaster Preparedness Director", "relief", ["earthquake", "buildings", "preparedness"],
    sx("The capital sits on a fault, crammed with buildings that would pancake in a major quake, and the country has almost no urban search-and-rescue capacity. The director wants a costly retrofit, code-enforcement, and rescue-capacity drive; the threat is invisible until the ground moves.",
      ["Fund quake retrofit and rescue capacity.", "A city built to fall is a mass grave waiting for a tremor.", "You fund seismic retrofits, code enforcement, and urban search-and-rescue. The cost is enormous and the danger abstract, but a quake that would have buried hundreds of thousands becomes survivable.", { EN: 8, RE: 2, FI: -10 }],
      ["Hope the big quake holds off.", "A retrofit of a whole city is a fortune against a maybe.", "You leave the city to its fragile buildings and absent rescue capacity. The money goes to present needs, and the capital waits, a single major tremor away from a catastrophe of unimaginable scale.", { FI: 4, EN: -8 }])),

  // ── Pesticide-suicide prevention ────────────────────────────────────────────
  ax("Suicide Prevention Director", "doctor", ["suicide", "pesticide", "rural"],
    sx("Easy access to highly toxic farm pesticides makes them the method of countless impulsive rural suicides, especially among the young and women. The director wants the most lethal pesticides banned and the rest locked in community stores — a proven, cheap lifesaver the agro-chemical lobby resists.",
      ["Ban the most lethal pesticides, lock the rest.", "An impulse survives if the poison is out of reach.", "You ban the deadliest pesticides and require safe community storage. The agro-chemical lobby resists, but rural suicides — so often impulsive and survivable — fall sharply where the poison is no longer at hand.", { EN: 8, GL: 2, FI: -2 }],
      ["Leave the pesticides freely available.", "A farmer needs his chemicals; the misuse is his own.", "You leave the lethal pesticides on the open shelf. The lobby is content, and the impulsive rural suicides keep claiming the young and the despairing who reached, in a dark moment, for what was within arm's reach.", { FI: 2, EN: -6 }])),

  // ── Childhood-immunisation cold chain ───────────────────────────────────────
  ax("Immunisation Logistics Director", "doctor", ["vaccines", "cold-chain", "coverage"],
    sx("The vaccine cold chain — the unbroken refrigeration that keeps childhood vaccines potent from factory to village — is fraying, with failing fridges and gaps that quietly render vaccines useless. The director wants a costly cold-chain overhaul; the failure is invisible until outbreaks return.",
      ["Overhaul the vaccine cold chain.", "A vaccine spoiled by a warm fridge is a child unprotected.", "You overhaul the refrigeration and logistics from factory to village. The cost is real and the gain invisible, but the childhood vaccines that the country is so proud to deliver actually work when they arrive.", { EN: 8, GL: 2, FI: -4 }],
      ["Leave the cold chain to limp along.", "The fridges mostly work; the coverage looks fine on paper.", "You leave the failing cold chain alone. The coverage numbers stay high on paper, and a quiet share of the vaccines reach children already spoiled and useless, until the old diseases creep back.", { FI: 2, EN: -6 }])),

  // ── Dialysis / kidney disease ───────────────────────────────────────────────
  ax("Renal Care Director", "doctor", ["dialysis", "kidney", "access"],
    sx("Chronic kidney disease — driven by diabetes, hypertension, and arsenic — is surging, and dialysis is scarce and ruinously expensive, so the poor simply die. The director wants subsidised dialysis centres across the regions; the per-patient cost is high and unending.",
      ["Build subsidised regional dialysis.", "A kidney patient priced out of dialysis is a patient sentenced to death.", "You build subsidised dialysis across the regions. The per-patient cost is high and unending, but the poor with failing kidneys stop simply dying for want of a treatment the rich take for granted.", { EN: 8, GL: 2, FI: -6 }],
      ["Leave dialysis to private centres.", "Dialysis for all is a cost with no ceiling.", "You leave dialysis to the costly private centres. The open-ended cost is avoided, and the poor with kidney failure keep dying quietly at home, unable to afford the machine that would keep them alive.", { FI: 4, EN: -6 }])),

  // ── WASH in healthcare facilities ───────────────────────────────────────────
  ax("Health Facility Director", "doctor", ["wash", "hospitals", "hygiene"],
    sx("A shocking share of clinics and hospitals lack clean water, functioning toilets, and hand-washing — so the places of healing spread infection and mothers give birth in filth. The director wants a WASH overhaul of every health facility; it is basic, costly, and chronically deprioritised.",
      ["Fund WASH in every health facility.", "A maternity ward without clean water is a death-trap with a midwife.", "You fund clean water, toilets, and hygiene in every clinic and hospital. The cost is real for something so basic, but mothers stop giving birth in filth and the places of healing stop spreading infection.", { EN: 10, GL: 2, FI: -6 }],
      ["Leave facility hygiene as it is.", "The wards function; plumbing is a refinement.", "You leave the clinics without reliable water and toilets. The money goes elsewhere, and the health facilities keep spreading infection and delivering babies into unhygienic conditions that needlessly kill.", { FI: 2, EN: -6 }])),

  // ── Childhood obesity / junk food in schools ────────────────────────────────
  ax("School Nutrition Director", "doctor", ["obesity", "junk-food", "children"],
    sx("As incomes rise, childhood obesity and the junk food driving it are surging in the cities even as stunting persists in the villages — a double burden. The director wants junk food out of schools and healthy-eating standards; the snack industry and the kids resist.",
      ["Ban junk food from schools.", "A childhood fed on junk is a lifetime of disease bought early.", "You ban junk food from schools and set healthy-eating standards. The snack industry and the children grumble, but the rising childhood obesity and the diseases it pre-orders begin to slow.", { EN: 6, GL: 2, FA: -2 }],
      ["Leave school food to the market.", "A ban on a child's snack is a nanny-state errand.", "You leave school food to the snack vendors. The children keep their crisps and fizzy drinks, and childhood obesity and the diabetes and heart disease it seeds keep climbing in the cities.", { FI: 2, EN: -4 }])),

  // ── Flood-resilient housing ─────────────────────────────────────────────────
  ax("Rural Housing Director", "relief", ["flood", "housing", "resilience"],
    sx("In the flood-prone chars and haors, the poor rebuild fragile homes washed away every year. A programme of raised plinths, flood-resilient housing, and protected tube-wells would break the cycle; the alternative is the cheaper, endless ritual of post-flood relief.",
      ["Fund flood-resilient housing.", "A home rebuilt every flood is a poverty rebuilt with it.", "You fund raised plinths, resilient homes, and protected wells in the flood zones. The upfront cost is real, but families stop losing everything each monsoon and the endless cycle of relief and ruin is broken.", { EN: 8, RE: 2, FI: -6 }],
      ["Stick with post-flood relief.", "Resilient housing for the floodplain is a fortune; relief is cheap.", "You keep providing relief after each flood. The upfront cost is dodged, and the floodplain poor keep losing their fragile homes and their meagre gains every single monsoon, trapped in the cycle.", { FI: 4, EN: -6 }])),

  // ── Voluntary blood-donation network ────────────────────────────────────────
  ax("Blood Services Director", "doctor", ["blood", "donation", "safety"],
    sx("The country runs on a commercial blood trade of paid, often-diseased donors, because the voluntary donation network is thin and the safe supply scarce. The director wants to build a real voluntary, screened blood system; it takes sustained funding and a culture shift.",
      ["Build a voluntary, screened blood system.", "Blood bought from the desperate carries their diseases.", "You build a real voluntary blood-donation and screening network. The funding and culture shift take time, but the commercial trade in diseased blood shrinks and patients get a safe supply when they bleed.", { EN: 8, GL: 2, FI: -4 }],
      ["Leave the commercial blood trade.", "The blood banks meet the demand as they are.", "You leave the paid-donor trade in place. The supply is met cheaply, and patients keep receiving blood from paid, unscreened donors that carries hepatitis, HIV, and worse into their veins.", { FI: 2, EN: -6 }])),

  // ── Suicide-reporting and helplines ─────────────────────────────────────────
  ax("Mental Health Director", "doctor", ["suicide", "helplines", "stigma"],
    sx("Suicide is rising, especially among the young and women, hidden by stigma and a law that still criminalises the attempt. The director wants decriminalisation, helplines, and responsible reporting; the conservatives resist 'condoning' it and the law is awkward to change.",
      ["Decriminalise and build prevention.", "A person in despair needs a hand, not handcuffs.", "You decriminalise attempted suicide and build helplines and prevention. The conservatives object, but the despairing can seek help without fear of arrest, and the stigma that drove the silence begins to lift.", { EN: 8, GL: 2, FA: -2 }],
      ["Keep attempt criminalised.", "Decriminalising suicide is seen as blessing it.", "You leave the law and the stigma in place. The conservatives are unprovoked, and the suicidal keep their silence and their fear of the law, dying in numbers that helplines and care would have cut.", { FA: 2, EN: -6 }])),

  // ── Road-helmet and safety law ──────────────────────────────────────────────
  ax("Road Safety Health Officer", "doctor", ["helmets", "trauma", "enforcement"],
    sx("The explosion of motorcycles and ride-share bikes has filled the trauma wards with head injuries, mostly from riders without helmets. The officer wants hard helmet and safety-gear enforcement; riders resent it and the ride-share boom prefers fewer rules.",
      ["Enforce helmet and safety-gear laws.", "A skull is cheaper to protect than to repair.", "You enforce helmet and safety-gear laws hard. The riders and the ride-share lobby grumble, but the head injuries flooding the trauma wards drop and the road-death toll among the young eases.", { EN: 6, FI: -2, FA: -2 }],
      ["Leave helmet use to choice.", "A rider's skull is a rider's business.", "You leave safety gear to personal choice. The riders keep their freedom and the ride-share boom its low friction, and the trauma wards keep filling with the head injuries a helmet would have prevented.", { FI: 2, EN: -4 }])),

  // ── New childhood vaccines (rotavirus/pneumococcal) ─────────────────────────
  ax("Immunisation Policy Director", "doctor", ["vaccines", "children", "introduction"],
    sx("New vaccines against the rotavirus and pneumonia that kill so many small children are available but costly to add to the national schedule. The director wants them introduced now; the finance side balks at the added recurrent cost of protecting against diseases people are used to.",
      ["Introduce the new childhood vaccines.", "A child dead of a vaccine-preventable bug is a death we chose.", "You add the rotavirus and pneumococcal vaccines to the schedule. The recurrent cost is real, but two of the biggest killers of small children — diarrhoea and pneumonia — are pushed back across a generation.", { EN: 10, GL: 4, FI: -6 }],
      ["Delay the costly new vaccines.", "The schedule we have already saves most.", "You hold off on the new vaccines to save the recurrent cost. The existing schedule rolls on, and small children keep dying of the rotavirus and pneumonia the new vaccines would have prevented.", { FI: 4, EN: -6 }])),

  // ── Climate-resilient health systems ────────────────────────────────────────
  ax("Climate Health Director", "doctor", ["climate", "health", "adaptation"],
    sx("Climate change is reshaping disease — dengue spreading, heat killing, floods drowning health facilities, salinity raising blood pressure in coastal women. The director wants the health system climate-proofed and a climate-health surveillance built; it is a diffuse, long-horizon investment.",
      ["Climate-proof the health system.", "A warming world writes new diseases; a wise state reads ahead.", "You climate-proof health facilities and build climate-disease surveillance. The investment is diffuse and long-horizon, but the system braces for the dengue, heat, and salinity illnesses the changing climate is already bringing.", { EN: 8, GL: 4, FI: -6 }],
      ["Address health threats as they come.", "I will fight today's diseases, not the weather's.", "You take climate-driven illness as it arrives. The money is spared the long-horizon investment, and the health system keeps being caught flat-footed by each new wave of climate-shifted disease.", { FI: 2, EN: -6 }])),

  // ── Marine-litter and beach cleanup ─────────────────────────────────────────
  ax("Coastal Environment Officer", "relief", ["marine-litter", "beaches", "plastic"],
    sx("The beaches and coastal waters are drowning in plastic litter — washed down the rivers and dumped by the tourist towns — choking marine life and the tourist economy alike. The officer wants a sustained cleanup, river-interception, and a coastal plastic ban; the cost and the tourist trade resist.",
      ["Fund cleanup and river-litter interception.", "A coast of plastic is a coast of death and lost trade.", "You fund sustained beach cleanup, river-litter interception, and coastal plastic limits. The tourist towns grumble at the rules, but the beaches and waters clear, and the marine life and the tourist draw both recover.", { EN: 8, RE: 4, FI: -4 }],
      ["Leave the litter to the tides.", "A beach cleanup is endless and the tourists come regardless.", "You leave the marine litter to wash where it will. The cost is dodged, and the plastic keeps choking the marine life and burying the beaches the tourist economy depends on.", { FI: 2, RE: -2, EN: -6 }])),

  // ── Autism and developmental services ───────────────────────────────────────
  ax("Child Development Director", "doctor", ["autism", "disability", "children"],
    sx("Children with autism and developmental disorders are hidden, shamed, and shut out entirely for want of any diagnosis, therapy, or schooling. The director wants a national developmental-screening and early-intervention programme; the cause is poorly understood and easily deprioritised.",
      ["Build developmental screening and therapy.", "A child unreached early is a potential lost for life.", "You build early screening, therapy, and inclusive schooling for developmental disorders. The cause is poorly understood, but children once hidden and written off gain diagnosis, support, and a place in the world.", { EN: 8, GL: 2, FI: -4 }],
      ["Leave developmental care to families.", "A niche of children is a poor claim on the budget.", "You leave these children to families with nowhere to turn. The budget is spared, and children with autism and developmental disorders keep being hidden, shamed, and shut out for want of services that would have reached them.", { FI: 2, EN: -4 }])),

  // ── Riverbank solid-waste / urban canals ────────────────────────────────────
  ax("Urban Waterways Officer", "people", ["canals", "waste", "flooding"],
    sx("The cities' canals and riverbanks are choked with dumped solid waste, blocking drainage and breeding disease, while informal settlements and businesses dump with impunity. The officer wants enforced anti-dumping, regular clearing, and waste collection; it means confronting dumpers great and small.",
      ["Enforce anti-dumping and clear the canals.", "A canal of garbage is a flood and a fever waiting to break.", "You enforce anti-dumping, fund regular clearing, and extend collection. Dumpers great and small resist, but the canals flow, the drainage works, and the disease and flooding the garbage bred recede.", { EN: 8, RE: 2, FI: -4, FA: -2 }],
      ["Leave the canals to clog.", "A war on every dumper is a war without end.", "You leave the canals choked with waste. The confrontation is avoided, and the blocked drainage keeps flooding the city and the rotting garbage keeps breeding the disease that fills its clinics.", { FI: 2, EN: -6 }])),

  // ── Workplace creches / women's labour ──────────────────────────────────────
  ax("Labour Welfare Director", "people", ["creches", "women", "workforce"],
    sx("Working mothers, especially the garment workforce, have nowhere safe to leave their infants, so children are neglected and women forced out of work. The law mandates factory creches that almost no one provides. The director wants real enforcement; employers call it an unbearable cost.",
      ["Enforce the workplace-creche mandate.", "A mother who must choose between her baby and her wage is failed by both.", "You enforce the creche mandate and support smaller employers to comply. The factory owners protest the cost, but working mothers gain safe childcare, infants are tended, and women stay in the workforce.", { EN: 8, GL: 2, FI: -2, FA: -2 }],
      ["Leave the creche law unenforced.", "A creche in every factory is a cost the owners will not bear.", "You leave the creche mandate a dead letter. The owners keep their margins, and working mothers keep leaving infants untended or leaving the workforce entirely, the law on the books and ignored.", { FI: 2, EN: -4 }])),

  // ── Cholera / typhoid vaccination ───────────────────────────────────────────
  ax("Enteric Disease Director", "doctor", ["cholera", "typhoid", "vaccines"],
    sx("Cholera and typhoid still sweep the slums and flood zones from filthy water, and oral vaccines now exist to blunt them. The director wants targeted vaccination campaigns in the high-risk areas alongside the slow water fixes; the vaccines are costly and the diseases familiar.",
      ["Run targeted cholera-typhoid vaccination.", "A vaccine now buys time the water fixes will take years to deliver.", "You run oral vaccination campaigns in the slums and flood zones. The cost is real, but cholera and typhoid outbreaks shrink, buying the years the slow clean-water fixes will need to take hold.", { EN: 8, GL: 2, FI: -4 }],
      ["Wait for the water fixes alone.", "A vaccine is a patch; clean water is the cure.", "You rely solely on the slow clean-water work and skip the vaccines. The money is saved, and cholera and typhoid keep sweeping the slums and flood zones in the long years before the water is ever fixed.", { FI: 2, EN: -4 }])),

  // ── Health data / electronic records ────────────────────────────────────────
  ax("Health Information Director", "official", ["health-data", "records", "privacy"],
    sx("A national electronic health-record system would join up fragmented care, cut duplication, and power real planning — and concentrate the population's most intimate data in a system the state has not earned trust to hold securely. The director asks how far to build it.",
      ["Build the integrated health-record system.", "Care that cannot remember the patient repeats every mistake.", "You build the integrated electronic health records. Care joins up and planning sharpens, and the population's most intimate data pools in a system whose security the state must now be trusted to keep.", { EN: 6, GL: 2, FI: -4 }],
      ["Keep records local and fragmented.", "A central trove of every citizen's illness is a breach waiting to happen.", "You keep health records local and disconnected. The intimate data is not pooled into one breachable trove, and care stays fragmented, duplicative, and blind to the patient's own history.", { EN: 2, FI: -2 }])),

  // ── Shisha / vape regulation ────────────────────────────────────────────────
  ax("Tobacco Control Officer", "doctor", ["vaping", "shisha", "youth"],
    sx("Vaping and shisha lounges are spreading among urban youth, marketed as harmless and slipping through the tobacco laws. The officer wants them regulated and taxed like tobacco before the habit entrenches; the lounges and importers, and the youth who enjoy them, push back.",
      ["Regulate and tax vaping like tobacco.", "A new nicotine habit caught early is a generation spared.", "You bring vaping and shisha under tobacco regulation and tax. The lounges and importers protest and the youth grumble, but a new nicotine epidemic is checked before it can entrench across a generation.", { EN: 6, FI: 2, FA: -2 }],
      ["Leave vaping unregulated.", "A trendy vapour is hardly a public-health emergency.", "You leave vaping and shisha outside the tobacco rules. The lounges flourish and the trend spreads, and a fresh nicotine dependence takes root among the young before anyone moves to check it.", { FI: 2, EN: -4 }])),

  // ── Drowning / flood livestock and shelter ──────────────────────────────────
  ax("Disaster Relief Director", "relief", ["flood", "shelter", "livestock"],
    sx("In the floods, the poor lose not just homes but the livestock that is their whole wealth, because the shelters take people but not animals, so families stay in the water to guard their cattle and drown. The director wants combined people-and-livestock shelters; purists call it a misuse of relief.",
      ["Build combined people-and-livestock shelters.", "A family will not flee and leave its only wealth to drown.", "You build shelters that take families and their animals together. The purists grumble about cattle in relief shelters, but families stop staying in the floodwater to guard their livestock, and fewer drown.", { EN: 8, RE: 2, FI: -4 }],
      ["Keep shelters for people only.", "A flood shelter is for human life, not cattle.", "You keep the shelters people-only. The relief stays 'pure', and families keep refusing to flee — or fleeing and losing everything — because the shelter would not take the livestock that is all they own.", { FI: 2, EN: -4 }])),

  // ── Urban green-jobs / waste-pickers ────────────────────────────────────────
  ax("Green Economy Officer", "people", ["waste-pickers", "green-jobs", "informal"],
    sx("An army of informal waste-pickers already recycles much of the cities' waste, unseen, unpaid fairly, and unprotected. The officer wants to formalise them into the recycling system with IDs, fair pay, and gear — dignifying vital work — or leave them to the dumps and the middlemen.",
      ["Formalise the waste-pickers into green jobs.", "The people who already recycle the city deserve to be seen.", "You formalise the waste-pickers with IDs, fair pay, and protective gear. The middlemen who skimmed them resist, but vital, invisible work is dignified and the recycling it drives is strengthened.", { EN: 8, RE: 2, FI: -2, FA: -2 }],
      ["Leave waste-pickers to the dumps.", "The informal trade works; why burden it with payroll?", "You leave the waste-pickers informal and unprotected. The middlemen keep their cut, and the people who recycle the city's waste keep doing it unseen, underpaid, and exposed to every hazard of the dumps.", { FI: 2, EN: -4 }])),

  // ── Hospital accreditation / quality ────────────────────────────────────────
  ax("Health Quality Director", "doctor", ["accreditation", "hospitals", "standards"],
    sx("Private hospitals and diagnostic centres operate with wild variation in quality, some excellent and some lethal, with no accreditation to tell them apart. The director wants mandatory accreditation and public quality ratings; the private health industry, powerful and connected, resists.",
      ["Mandate accreditation and public ratings.", "A patient choosing a hospital blind is a patient gambling with life.", "You mandate accreditation and publish quality ratings. The private health industry fights the scrutiny, but the lethal clinics are exposed and forced to improve or close, and patients can finally choose with open eyes.", { EN: 8, GL: 2, FI: -2, FA: -4 }],
      ["Leave private health unaccredited.", "The private sector is a jewel I will not burden.", "You leave private hospitals unaccredited. The industry stays content and connected, and patients keep gambling their lives on clinics that range, invisibly, from excellent to lethal.", { FA: 2, FI: 2, EN: -6 }])),

  // ── Indoor air / household pollution ────────────────────────────────────────
  ax("Environmental Health Director", "doctor", ["indoor-air", "household", "women"],
    sx("Indoor air pollution from cooking smoke, damp, and crowding quietly kills more than the outdoor smog, striking women and children worst. The director wants a programme of ventilation, clean cooking, and housing improvement; the harm is invisible and inside the home, easily ignored.",
      ["Fund indoor-air and clean-cooking programmes.", "The deadliest air a woman breathes is in her own kitchen.", "You fund ventilation, clean cooking, and housing improvement. The harm is invisible and the work diffuse, but the indoor smoke that quietly kills women and children in their own homes begins to clear.", { EN: 8, RE: 2, FI: -4 }],
      ["Leave indoor air to households.", "What happens inside a home is a family's own.", "You leave indoor air pollution unaddressed. The budget is spared, and women and children keep dying quietly of the cooking smoke, damp, and crowding inside homes no programme reached.", { FI: 2, EN: -6 }])),

  // ── Sugar-sweetened-beverage health drive ───────────────────────────────────
  ax("Public Health Director", "doctor", ["sugar", "drinks", "diabetes"],
    sx("Sugary drinks are flooding the market and driving childhood obesity and diabetes, marketed hardest to the young. Beyond the tax already debated, the director wants marketing curbs, front-of-pack warnings, and a ban on sales near schools; the beverage giants, big advertisers, resist.",
      ["Curb marketing and sales near schools.", "A childhood drowned in sugar is a lifetime of disease prepaid.", "You curb sugary-drink marketing, mandate warning labels, and bar sales near schools. The beverage giants pull their ads and protest, but children's sugar intake falls and the diabetes it pre-orders slows.", { EN: 6, GL: 2, FA: -2 }],
      ["Leave sugary drinks to the market.", "A fizzy drink is a small pleasure to leave alone.", "You leave the beverage market unchecked. The giants keep their ads and their school-gate sales, and childhood obesity and diabetes keep rising on the sugar marketed hardest to the young.", { FI: 2, EN: -4 }])),

  // ── Climate-displaced urban migrants ────────────────────────────────────────
  ax("Urban Migration Director", "relief", ["climate-migrants", "slums", "services"],
    sx("Climate-displaced families from the drowning coast and eroding rivers pour into the city slums by the thousand, straining water, health, and shelter to breaking. The director wants planned reception, services, and secondary-town development to absorb them; the cheaper path is to let the slums swell untended.",
      ["Plan for the climate migrants.", "A city that ignores the tide of the displaced drowns in it.", "You fund slum services, planned reception, and secondary towns to absorb the climate-displaced. The cost is real, but the newcomers find water, health, and a foothold instead of disease and despair in untended slums.", { EN: 8, RE: 2, FI: -6 }],
      ["Let the slums absorb them untended.", "The city has no budget for every family the river evicts.", "You leave the climate migrants to the swelling slums. The money is spared, and the displaced pile into untended settlements with no water, health, or shelter, a humanitarian and disease crisis building street by street.", { FI: 2, EN: -8 }])),
];
