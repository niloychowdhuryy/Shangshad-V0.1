// HOME — the Residence (Ganabhaban). Primary metric: FA (Family Ties).
// Dynastic politics: a fictional Bangladeshi first family. Each arc escalates
// across stages with its own bespoke choices at every step.
const sx = (prompt, left, right) => ({ prompt, left, right });
const ax = (speaker, portrait, tags, ...stages) => ({ speaker, portrait, tags, stages });

export const HOME = [
  // ── Nasrin & the offshore account ──────────────────────────────────────────
  ax('Nasrin, your spouse', 'spouse', ['family', 'money', 'leak'],
    sx("Nasrin sits at the edge of the bed, phone face-down. 'A Gulshan journalist called me by my maiden name. He knew about the Singapore account before I did.' You opened it in her name so it could never touch yours.",
      ['Move the money tonight, tell her nothing.', 'What she does not know cannot be tortured out of her.', 'The account empties by dawn. She notices the silence between you and begins her own quiet inquiries.', { FI: -6, FA: -8, MI: 6 }],
      ['Bring her in as a full partner in it.', 'A shared secret is a shared cage.', 'She agrees, eyes hard. The marriage holds — but now she owns the same noose you do.', { FA: 10, FI: 4, GL: -6 }]),
    sx("The journalist did not stop. A second story names the bank, the dates, the children as beneficiaries. Nasrin reads it before you can speak. 'You moved it,' she says quietly. 'And you still got us caught.'",
      ['Blame a rogue aide and sack him publicly.', 'Someone must wear this, and it cannot be us.', 'The aide is destroyed to save you; every other aide now knows exactly how loyalty is repaid.', { MI: 6, FA: 4, GL: -8, EN: -4 }],
      ['Take the blame yourself, shield her name.', 'I will not let our children watch their mother burn.', 'You absorb the scandal alone. The polls dip; Nasrin looks at you as she has not in years.', { FA: 14, GL: -6, MI: -4 }]),
    sx("The anti-corruption commission requests Nasrin's testimony. She is ready to go in and lie for you, calmly, the way she does everything. 'One word from you,' she says, 'and I never opened that account.'",
      ['Let her perjure herself to save you both.', 'We sink together or not at all.', 'She testifies flawlessly. The file closes — and she has proof, now, that you let her risk prison.', { FA: -6, MI: 6, FI: 4, GL: -6 }],
      ['Stop her. Settle and pay the penalty.', 'No more of my sins in your mouth.', 'You take the fine and the headlines. The account dies; something tired between you finally rests.', { FI: -12, FA: 12, GL: 6 }])),

  // ── Rashed & the Padma embankment graft ─────────────────────────────────────
  ax('Rashed, your elder brother', 'sibling', ['corruption', 'contracts', 'rivalry'],
    sx("Rashed spreads the Padma embankment tender on your desk. 'Three firms, all ours through cousins. Flood-protection money — nobody audits flood money.' The bid papers already carry your ministry's seal.",
      ['Sign. Keep it in the family.', 'Better our cousins eat than strangers.', 'The cash flows; the embankment is built thin. The haor will remember every monsoon.', { FI: 14, FA: 8, EN: -12, RE: -6 }],
      ['Kill the bid. Order a clean tender.', "I will not drown villages to fatten Rashed.", 'He calls you a traitor to your blood and takes his network to a rival MP.', { FA: -14, FI: -8, EN: 10, GL: 4 }]),
    sx("The embankment you let Rashed build has breached. Forty villages are under water on live television, and a leaked memo carries your seal. Rashed phones, unbothered: 'Blame the contractor. We can find one who'll confess for a price.'",
      ['Buy a contractor to take the fall.', 'A confession is cheaper than a reckoning.', 'A scapegoat is produced and jailed. The rivers keep the receipts, and so does Rashed.', { MI: 4, FA: 6, EN: -8, GL: -8 }],
      ['Order a real inquiry, name Rashed in it.', 'Let the water lead where it leads.', 'The inquiry reaches your brother. The family declares war; the drowned districts, for once, believe you.', { FA: -16, EN: 12, GL: 8, FI: -6 }]),
    sx("Rashed, cornered, comes to your study with a thumb drive. 'Everything I did, I did with your seal — and I kept copies. Make me Deputy PM and the drive disappears. Move against me and it goes to Delhi and Washington both.'",
      ['Promote him. Bury the drive.', 'A brother bought is a brother contained.', 'Rashed rises to your second chair — and stands one heartbeat from yours, holding your ruin in his pocket.', { MI: 6, FA: 8, GL: -8, EN: -4 }],
      ['Call his bluff. Dare him to release it.', 'Burn us both, then. I am done being owned.', 'You refuse. The drive leaks; the storm is brutal — but you are no longer his hostage, and the country sees a man who chose truth over blood.', { GL: 6, EN: 8, FA: -14, FI: -8 }])),

  // ── Tania: daughter, scandal, then politician ───────────────────────────────
  ax('Tania, your daughter', 'child', ['scandal', 'press', 'succession'],
    sx("The Home Secretary calls at 3 a.m. 'Tania and the cricketer were at a Banani rooftop where two boys overdosed. The hospital intake has her name. By morning it is buried or it is a headline.'",
      ['Have it scrubbed before the presses run.', 'She is young and made a young mistake.', 'The record dissolves; a duty doctor is transferred to Rangamati. A debt now waits in your name.', { FA: 12, MI: -8, EN: -12 }],
      ['Let her name stand with everyone else.', 'If the law bends for us it breaks for the poor.', 'The talk shows call it integrity. Tania calls it betrayal and stops your calls. The polls climb.', { FA: -16, EN: 12, GL: 6 }]),
    sx("Two years on, Tania has turned sharp and ambitious. She wants the party's youth wing — and she has the footage of that scrubbed police file, kept as insurance. 'Give it to me,' she says, 'or I wonder aloud how it vanished.'",
      ['Hand her the youth wing.', 'Better her ambition harnessed than aimed at me.', 'She seizes the wing and remakes it in her image — loyal to her, watching the chair you sit in.', { FA: 6, MI: 6, EN: -4, GL: -4 }],
      ['Refuse, and dare her to talk.', 'You will not blackmail your own father.', 'She is stunned that you called it. The footage stays buried, but a coldness enters her that does not leave.', { FA: -10, MI: 4, FI: 4 }]),
    sx("Tania proposes her own marriage to the son of your fiercest rival. 'It neutralises his whole dynasty in one wedding. I am offering you my marriage as a treaty — do not waste it on sentiment.'",
      ['Accept the dynastic marriage.', 'She offers a treaty; I am no fool.', 'Two houses bind in blood. Tania becomes a queen of both, loyal to whichever serves her best.', { MI: 8, GL: 4, FA: -4, FI: 4 }],
      ['Refuse to trade your daughter, even at her asking.', 'You are not a clause, child.', 'She is almost insulted by the tenderness. The rival dynasty stays a dynasty — and an enemy.', { FA: 10, MI: -8, GL: -4 }])),

  // ── Begum Sufia: the matriarch, decline, and the trust ──────────────────────
  ax('Begum Sufia, your mother', 'matriarch', ['succession', 'loyalty', 'inheritance'],
    sx("Your mother gathers the family at Dhanmondi. Without looking up from her plate she announces she has rewritten the trust: your name stays on it only 'while the family remains whole.' The message is for you; the whole table heard it.",
      ['Bow to the matriarch.', 'Blood sits above any office.', 'The family closes ranks behind you — at the price of every favour they will now call in.', { FA: 16, FI: -6, MI: -4 }],
      ['Remind her the army answers to you now.', 'The house serves the chair, Mother.', 'She sets down her spoon. The room goes cold. The throne is wholly yours; so is her enmity.', { FA: -16, MI: 10, FI: 6 }]),
    sx("Dr. Kabir tells you privately: your mother's tremor is early dementia. 'Perhaps two lucid years.' She still controls the trust, the loyalists, and half your party's heart.",
      ['Move now to take the trust quietly.', 'The house cannot drift while she fades.', 'You secure the estate before the decline shows — and your siblings smell the manoeuvre.', { FI: 8, FA: -10, MI: 6 }],
      ['Protect her dignity. Tell no one.', 'She gave me everything; she keeps her crown.', 'You guard her in silence. The cost is real: decisions delayed, rivals circling the vacuum.', { FA: 14, FI: -6, MI: -4 }]),
    sx("Lucid for one last evening, she calls you to her bedside. 'I will name you the heir of all of it, tonight, if you swear to keep the others fed. Or I die undecided and you tear each other apart.'",
      ['Swear it. Take the inheritance whole.', 'I will hold them together, Mother.', 'She names you and is gone by dawn. The family, bound by her last word, watches to see if you keep it.', { FA: 8, FI: 8, MI: 4 }],
      ['Refuse to promise what you cannot guarantee.', 'I will not lie to a dying woman.', 'She dies without naming an heir. The trust enters probate; the siblings enter open war.', { FA: -8, FI: -6, MI: -6 }])),

  // ── The blackmail photographs ───────────────────────────────────────────────
  ax('An unsigned courier', 'shadow', ['blackmail', 'betrayal', 'security'],
    sx("A plain envelope clears the morning sweep. Three photographs of you with the Defence Attaché somewhere you were never meant to be, and one line: 'The opposition has copies. Your sister has the originals. Choose who you fear more by Friday.'",
      ['Pay your sister for the originals.', 'Keep it in the blood, keep it buried.', 'She takes the money and the leverage both. You have taught your own family you can be squeezed.', { FA: -8, FI: -14, MI: 4 }],
      ['Confess first, on your own terms.', 'A scandal you announce is one you survive.', "The press feeds for a week then tires. The opposition's bomb is a dud — but the wound is real.", { GL: -10, EN: -6, MI: 6, FA: -6 }]),
    sx("Your sister, paid once, returns for more. 'The originals were copies of copies, brother. There is always one more.' She names a sum that would fund a ministry.",
      ['Pay again, and hate it.', 'One more time. Only once more.', 'The money vanishes and the threat does not. You are now a reliable income for your own blood.', { FI: -12, FA: -6, MI: -4 }],
      ['Cut her off and harden your security.', 'The well is closed. Do your worst.', 'You stop paying and brace for the leak. She hesitates — destroying you ends her income too. An ugly truce holds.', { MI: 8, FA: -8, FI: 6 }])),

  // ── Faisal & the garment factory ────────────────────────────────────────────
  ax('Faisal, your son-in-law', 'inlaw', ['garments', 'labour', 'safety'],
    sx("Faisal runs the family garment group. 'The Ashulia unit failed its fire inspection. I can pay the inspector, or shut three thousand machines for a month. Your name is on the gate, not mine.'",
      ['Pay the inspector. Keep the lines running.', 'The buyers do not wait and neither do wages.', 'The looms roar on. Next monsoon a stairwell jams, and the wound is permanent.', { FI: 10, FA: 4, EN: -14, GL: -6 }],
      ['Shut it. Retrofit it properly.', 'No Rana Plaza with our name on it.', 'You eat the loss and the layoffs. For once, labour leaders speak your name kindly.', { FI: -12, EN: 12, GL: 6, FA: -6 }]),
    sx("The Accord auditors and three Western buyers want a tour of the family's factories after a rival's collapse. Faisal panics: 'Half our units would fail. Show them the model floor and keep them off the rest.'",
      ['Stage the model-floor tour.', 'Show them the Bangladesh they want to see.', 'The buyers leave reassured; the orders stay. The unshown floors stay exactly as deadly as before.', { FI: 8, GL: 6, EN: -10, FA: 4 }],
      ['Open the real floors and ask for help to fix them.', 'Let them see it, then let them fund it.', 'The honesty stuns them. Some buyers flee; others co-fund the retrofit. The workers notice who told the truth.', { GL: 8, EN: 10, FI: -10, FA: -4 }])),

  // ── Imran & the overseas wealth ─────────────────────────────────────────────
  ax('Imran, your son', 'child', ['money', 'overseas', 'laundering'],
    sx("Imran flies in from Toronto, gripping a laptop. 'The condos under the numbered company — the Canadians want to meet the real owner. I told them a businessman. Now they want him in a room.'",
      ['Send a frontman to play the owner.', 'Theatre is cheaper than honesty.', 'The frontman performs — and now knows exactly which thread unravels your whole estate.', { FI: 6, FA: 4, GL: -8, MI: -4 }],
      ['Order the holdings dissolved.', 'I will not be hostage to a condo abroad.', 'You take the loss. Imran sulks; Nasrin, quietly, is relieved.', { FI: -12, FA: 6, GL: 8 }]),
    sx("A leaked offshore database — the 'Begumpara files' — names Imran's Toronto holdings on the front page. Students chant about laundered millions while reserves run thin. Imran wants to fly back and 'sort the paperwork.'",
      ['Bring him home and hide him from the press.', 'Out of sight, out of the headlines.', 'He vanishes from view; the silence reads as guilt. The story metastasises without his face on it.', { FA: 6, GL: -8, EN: -6, FI: -4 }],
      ["Repatriate the money publicly as a gift to the reserves.", 'Turn the shame into a spectacle of penance.', 'The dramatic repatriation steadies the taka and the optics. Imran is humiliated; the treasury is not.', { FI: 10, GL: 6, FA: -8 }])),

  // ── Mizan & the student-wing violence ───────────────────────────────────────
  ax('Mizan, your nephew', 'sibling', ['campus', 'violence', 'party'],
    sx("Your nephew Mizan leads the party's student front at Dhaka University. Tonight his boys put a rival in the morgue. 'It was him or us, chacha,' he says, blood on his sleeve. 'Protect me and I deliver every campus.'",
      ['Shield him. Use the campuses.', 'A loyal mob is still loyalty.', 'The universities fall silent with fear — and so does every student who might have voted for you.', { MI: 10, FA: 6, EN: -14, GL: -6 }],
      ['Let the law take him.', 'A body is a body, even by my blood.', 'Mizan is charged. The family howls betrayal; the campuses, warily, exhale.', { FA: -14, EN: 10, GL: 6, MI: -6 }]),
    sx("The killing has sparked a campus uprising — the very 'anti-violence' movement that toppled a neighbour's government. They demand Mizan's wing be banned outright. The cantonment is watching how you handle a crowd.",
      ['Ban the student wing entirely.', 'Sacrifice the limb to save the body.', 'You dissolve your own machine. Mizan is finished; the streets calm; your party fixers seethe at the amputation.', { EN: 12, GL: 6, MI: -8, FA: -8 }],
      ['Crack down on the protesters instead.', 'No mob dictates terms to this chair.', 'The crackdown holds the campuses by force. The images travel the world; a generation marks your name.', { MI: 8, EN: -16, GL: -8, FA: 4 }])),

  // ── Standalone family beats (single-stage) ──────────────────────────────────
  ax('Hafiz, the household imam', 'cleric', ['religion', 'legitimacy'],
    sx("The imam who married you asks a favour after Jummah. 'The madrasa board will deliver three constituencies for your endorsement — or remember, loudly, that your son drinks.'",
      ['Give the endorsement publicly.', 'Three seats are three seats.', 'The constituencies fall in line — and so do their demands on your courts and curriculum.', { MI: 8, FA: 6, EN: -8, GL: -6 }],
      ['Refuse and keep the state secular.', 'The mosque does not staff my cabinet.', "The imam's sermon turns cool. Whispers about your household reach the bazaars.", { FA: -6, EN: 6, GL: 6, MI: -8 }])),

  ax('Joya, your youngest', 'child', ['love', 'class', 'image'],
    sx("Joya brings home a rickshaw-puller's son — first in his family to read, full of love for her and no fear of you. 'I am marrying him. You can bless it from the dais or read about it in the papers.'",
      ["Bless it. Make a virtue of the people's son.", 'Let the nation see we marry its own.', 'The match becomes a parable of your humility. The old families sneer; the streets adore you.', { EN: 10, FA: 4, GL: 4, FI: -4 }],
      ['Forbid it to protect the family standing.', 'Love is not a constituency, Joya.', 'She marries him anyway, in a registry office, and your name is absent from the only photo she keeps.', { FA: -16, MI: 4, EN: -8 }])),

  ax('Anwar, your father-in-law', 'inlaw', ['banking', 'finance'],
    sx("Anwar chairs the family bank. 'We have lent eight hundred crore to companies that are, let us say, ours. The central bank governor wants to classify the loans. Replace him, or our bank is the next headline.'",
      ['Replace the governor with our man.', 'A friendly regulator is a quiet bank.', 'The loans stay "standard" on paper. The market is not fooled and the taka softens.', { FA: 8, FI: 6, GL: -8 }],
      ['Let the governor do his job.', 'I will not break the central bank for a balance sheet.', "Anwar's bank takes the hit; the in-laws blame you for every crore. Markets trust you more.", { FA: -12, FI: -8, GL: 10 }])),

  ax('Belal, your driver of twenty years', 'servant', ['loyalty', 'people'],
    sx("Belal has driven you since the opposition years. His son needs a kidney; the matched donor is in a state queue eight hundred deep. 'I have never asked you for anything, sir,' he says, not asking now either.",
      ['Move the boy to the front of the queue.', 'This man kept me alive in the lean years.', 'The boy lives. Eight hundred families wait one place further back — and one of them is a journalist.', { FA: 6, EN: -6, MI: 4, GL: -4 }],
      ['Pay privately for treatment abroad.', 'Help him without robbing the queue.', "Your own purse sends the boy to Chennai. Quiet, clean, expensive — and Belal's loyalty is now iron.", { FI: -8, FA: 8, EN: 4 }])),

  ax('Saima, your daughter-in-law', 'inlaw', ['dignity', 'abuse', 'press'],
    sx("Saima, Imran's wife, comes to you bruised at the wrist and steady in the voice. 'Your son raises his hand. I will not smile for the cameras while he does it. Help me, or I go to the press myself.'",
      ['Stand with her. Confront your son.', 'No name of mine excuses this.', 'You break with Imran publicly. The family fractures; the country, watching, respects you for it.', { FA: -12, EN: 12, GL: 8 }],
      ['Buy her silence and her exit.', 'A quiet, generous divorce.', 'She leaves with money and a sealed mouth. You have made your house safe and your conscience smaller.', { FI: -8, FA: 4, EN: -10, GL: -6 }])),

  ax('Karim, the cabinet secretary', 'official', ['nepotism', 'state'],
    sx("Karim lays the posting list before you, jaw tight. 'Of the last forty senior appointments, thirty-one share your village or your blood. The service is becoming a family firm. I had to say it.'",
      ['Thank him, change nothing.', 'Trust is thicker than merit.', 'Loyalists fill every desk — and not one will bring you bad news until it is a catastrophe.', { FA: 8, MI: 4, EN: -8, GL: -6 }],
      ['Open the next ten posts to the service.', 'The state cannot be a family business.', 'The bureaucracy straightens its back. Your relatives, passed over, begin to murmur.', { FA: -10, EN: 8, GL: 6, FI: 4 }])),

  ax('Nasrin, your spouse', 'spouse', ['marriage', 'exit', 'love'],
    sx("Nasrin packs a single bag, calmly. 'I have been your wife, your shield, your alibi for thirty years, and I am tired. Ask me to stay because you need the marriage and I will. Ask me to stay because you love me, and I might believe it.'",
      ['Ask her to stay — and mean it.', 'Not the office. You. Only ever you.', 'Something worn rekindles. She unpacks. For the first time in years the house feels like a home, not a set.', { FA: 16, EN: 4 }],
      ['Let her go with dignity and a story.', 'If staying is a cage, I will not lock it.', 'She leaves gracefully; the press is fed "rest, retreat". The house is quieter, emptier, steadier.', { FA: -12, GL: -4, MI: 4 }])),

  ax('Bakar, the village headman', 'people', ['roots', 'patronage'],
    sx("A delegation from your ancestral village arrives with garlands and grievances. 'The river took forty homes and the relief never came — your cousin the UNO sold it. We do not want charity. We want our son to remember whose soil he sprang from.'",
      ['Sack the cousin, deliver relief yourself.', 'The village made me; I will not let it drown.', 'The relief arrives; the village weeps your name. Your cousin’s branch turns cold.', { EN: 8, FA: -4, FI: -6, GL: 4 }],
      ['Send the cousin to smooth it over.', 'Keep the family in the loop, and the credit.', 'The cousin pockets half again. The village learns its son hears them only through a thief.', { FA: 6, EN: -10, MI: -4 }])),

  // ── Shafiq, the son-in-law's ambition ───────────────────────────────────────
  ax("Shafiq, your son-in-law", "fixer", ["in-law", "ambition", "power"],
    sx("Shafiq, married into the family and hungry, asks for a cabinet seat — 'to serve, and to keep power in trusted hands.' He is competent and grasping in equal measure, and your daughter's marriage may sour if you refuse him.",
      ["Give Shafiq the cabinet seat.", "Better an ambition I can watch up close.", "Shafiq is sworn in, delighted and dangerous. He serves ably and builds his own faction, and the family now has a second centre of gravity that is not your blood.", { FA: 4, MI: 2, EN: -4, GL: -4 }],
      ["Refuse him a post.", "A throne is not a wedding gift.", "You deny Shafiq the seat. Your daughter is wounded and the marriage tenses, but you have kept an outsider's ambition from rooting itself in the cabinet.", { GL: 2, MI: -2, FA: -6 }]),
    sx("Passed over — or empowered — Shafiq is now quietly meeting your rivals, hedging his bets, and your daughter is caught between her husband and her father. An aide brings you the surveillance log and waits for your word.",
      ["Confront Shafiq, force him to choose.", "A man in my family chooses my side or no side.", "You face Shafiq down and demand loyalty. He bends, humiliated, and your daughter resents the ultimatum, but the hedging stops and the line is drawn.", { FA: -4, MI: 4, GL: 2 }],
      ["Buy his loyalty with a bigger prize.", "Ambition fed is ambition leashed.", "You hand Shafiq a lucrative portfolio to bind him close. He is loyal for now and richer for it, and you have taught the family that disloyalty is a negotiating tactic.", { FA: 6, FI: -4, EN: -4 }])),

  // ── Arif's wedding of the century ───────────────────────────────────────────
  ax("Arif, your grandson", "sibling", ["wedding", "excess", "optics"],
    sx("Your grandson Arif plans a wedding of obscene splendour — foreign popstars, a fleet of imported cars, a guest list of oligarchs — while the country tightens its belt. The family wants the spectacle; the optics would be a gift to your enemies.",
      ["Let Arif have his grand wedding.", "A family celebrates as a family pleases.", "The wedding dazzles and the family glows. The footage of the excess goes viral against a backdrop of queues and price rises, and 'let them eat cake' attaches itself to your name.", { FA: 8, EN: -8, GL: -6 }],
      ["Insist on a modest ceremony.", "I will not feast while the country fasts.", "You rein Arif in to a dignified wedding. The boy sulks and the family grumbles at your stinginess, but no viral video of dynastic excess hands your rivals their week.", { GL: 4, EN: 4, FA: -6 }])),

  // ── Kamal and the bank licence ──────────────────────────────────────────────
  ax("Kamal, your brother", "sibling", ["banking", "favour", "graft"],
    sx("Your brother Kamal wants a licence for a new private bank — a licence that, in your family's hands, is a money machine and a scandal in waiting. 'Every dynasty has its bank,' he says. 'Why should ours beg from strangers?'",
      ["Grant Kamal his bank licence.", "Blood should bank with blood.", "Kamal gets his licence and the family gains a private treasury. It funds the dynasty handsomely and becomes, in time, the very symbol of crony capture critics needed.", { FA: 8, FI: 4, EN: -8, GL: -6 }],
      ["Deny the licence to your own brother.", "A family bank is a family scandal with a vault.", "You refuse Kamal. He is bitter and the family divided, but you have denied your enemies the cleanest possible proof that the state is your household's piggy bank.", { GL: 4, EN: 4, FA: -8 }])),

  // ── Imran's foreign citizenship ─────────────────────────────────────────────
  ax("Imran, your son", "sibling", ["citizenship", "exposure", "hypocrisy"],
    sx("It emerges that your son Imran quietly took a second, foreign citizenship years ago — a safety hatch, and a humiliation for a leader who preaches sovereignty. A journalist has the documents and is days from publishing.",
      ["Pressure the journalist to kill the story.", "A family's private papers are not the public's.", "You lean on the outlet and the story is spiked — for now. The suppression itself leaks, doubling the scandal, and your son's escape hatch becomes a national talking point anyway.", { MI: 2, FA: 4, EN: -8, GL: -8 }],
      ["Get ahead of it, have Imran renounce.", "Better a confession on my terms than an exposé on theirs.", "You have Imran publicly renounce the foreign passport before the story runs. The hypocrisy stings briefly, but the contrition defuses it, and the journalist's scoop deflates.", { GL: 2, EN: 2, FA: -4 }])),

  // ── Roksana's land empire ───────────────────────────────────────────────────
  ax("Roksana, your sister-in-law", "sibling", ["land", "grabbing", "family"],
    sx("Your sister-in-law Roksana has been seizing public and minority land across a district using the family name as a shield, and the dispossessed are starting to petition and protest. She insists she is 'only developing what others wasted.'",
      ["Rein Roksana in, return the worst grabs.", "Her greed will be carved on my tombstone.", "You force Roksana to disgorge the most egregious seizures. The family accuses you of siding with strangers against your own, but a swelling scandal is starved of its fuel.", { EN: 8, GL: 4, FA: -8 }],
      ["Shield Roksana, suppress the petitions.", "I will not feed my brother's wife to the courts.", "You quash the petitions and protect Roksana's holdings. The family closes ranks gratefully, and the dispossessed learn the family name is a deed no court will challenge.", { FA: 8, MI: 2, EN: -10, GL: -4 }])),

  // ── Begum Sufia's memoir ────────────────────────────────────────────────────
  ax("Begum Sufia, the matriarch", "spouse", ["memoir", "legacy", "secrets"],
    sx("The ailing matriarch is dictating her memoirs, and her failing discretion means decades of family secrets — deals, betrayals, a death never explained — may end up in print. Her ghostwriter quietly asks you whether to publish faithfully or sanitise.",
      ["Let the unvarnished memoir stand.", "Let the old woman have her truth.", "The memoir is published as dictated, secrets and all. It is a literary sensation and a political grenade, scattering revelations your enemies will mine for years.", { FA: 4, EN: 2, GL: -6, MI: -4 }],
      ["Sanitise the dangerous passages.", "A memory is a weapon; I will hold this one.", "You have the explosive passages quietly excised. The matriarch's truth is dulled and she senses the betrayal, but the family's buried dead stay buried.", { MI: 4, FA: -4, GL: 2 }])),

  // ── Tania's NGO slush fund ──────────────────────────────────────────────────
  ax("Tania, your daughter", "sibling", ["ngo", "funds", "scandal"],
    sx("Your daughter Tania's glittering charity foundation — the family's philanthropic face abroad — is quietly doubling as a slush fund and a soft-power vehicle. An international audit is sniffing close, and Tania begs you to make it go away.",
      ["Make the audit disappear.", "I will not let my daughter's good name be soiled.", "You pull strings and the audit is deflected. Tania is grateful and the foundation's books stay sealed, but the suppressed audit is a time bomb in the hands of any future investigator.", { FA: 8, EN: -4, GL: -6 }],
      ["Let the audit proceed, clean the foundation.", "A charity that launders is a scandal that detonates.", "You let the audit run and force the foundation onto clean rails. Tania is furious and exposed to embarrassment, but a far worse reckoning is averted before it could ripen.", { GL: 6, EN: 4, FA: -8 }])),

  // ── The favourite versus the capable ────────────────────────────────────────
  ax("Begum Sufia, the matriarch", "spouse", ["succession", "children", "merit"],
    sx("The matriarch presses you to anoint your charming, beloved, hopeless elder child over your cold, capable younger one as the dynasty's future. 'The people love the elder,' she says. 'The party fears the younger. A throne needs love.'",
      ["Anoint the beloved but hopeless heir.", "A dynasty runs on devotion, not spreadsheets.", "You bless the charismatic elder child as successor. The crowds adore the choice, the party despairs in private, and the dynasty's future rests on a smile and little else.", { FA: 8, EN: -4, GL: -4 }],
      ["Back the capable but cold one.", "Better a successor who can rule than one who can wave.", "You favour the competent younger child over the family's darling. The matriarch is wounded and the elder humiliated, but the dynasty gains a head that can actually govern.", { GL: 4, MI: 2, FA: -8 }])),

  // ── The leaked family audio ─────────────────────────────────────────────────
  ax("Hashem, your private secretary", "fixer", ["leak", "audio", "betrayal"],
    sx("Hashem brings grim news: a recording of a candid family dinner — you, mocking allies, scheming against rivals, dismissing the public — has been leaked and is spreading. He asks how to respond before it consumes the cycle.",
      ["Deny it as a deepfake.", "What cannot be proven did not happen.", "You brand the audio a fabricated deepfake. The denial muddies the water for your base, but experts authenticate it, and the lie compounds the candour caught on tape.", { MI: 2, FA: 2, EN: -6, GL: -6 }],
      ["Own it, reframe it as plain speech.", "Yes, I speak bluntly behind closed doors. Who does not?", "You own the recording and recast it as refreshing candour. It is a gamble; some are scandalised, but the disarming honesty blunts the weapon better than any denial could.", { GL: 2, FA: -2, EN: 2 }])),

  // ── Treatment abroad for the matriarch ──────────────────────────────────────
  ax("Family Physician", "doctor", ["health", "matriarch", "optics"],
    sx("The matriarch needs advanced treatment available only abroad — at vast expense, on a state aircraft, while ordinary citizens die waiting in the public wards she once championed. The physician needs your decision quietly and fast.",
      ["Send her abroad on the state's dime.", "She gave her life to this country; it can give her this.", "The matriarch flies out for the best care money can buy. The family is relieved, and the contrast with the crumbling public wards she built her name on is noted, bitterly, at home.", { FA: 8, FI: -4, EN: -6 }],
      ["Treat her at home, fund the public ward.", "If our hospitals are not good enough for her, fix them.", "You keep her treatment at home and pour money into the ward instead. The family fears for her and resents the symbolism, but the gesture toward the public is real and seen.", { EN: 8, GL: 4, FA: -8, FI: -4 }])),

  // ── Standalone family beats ─────────────────────────────────────────────────
  ax("Quddus, the old bodyguard", "people", ["loyalty", "pension", "memory"],
    sx("Quddus, who took a bullet for you decades ago, is dying poor and forgotten, and his family quietly asks for help — and carries, in his failing memory, secrets from your hardest years. Loyalty and liability sit in the same frail body.",
      ["Care for Quddus lavishly and openly.", "A man who bled for me will not die a beggar.", "You provide for Quddus and honour him publicly. The loyalty it signals to your guard is priceless, and his secrets stay safe behind a debt generously repaid.", { FA: 6, MI: 4, FI: -2 }],
      ["Send quiet money, keep your distance.", "Gratitude is best paid in cash, not cameras.", "You send discreet support without the spotlight. Quddus is cared for and the secrets contained, but the old guard notes how quietly a hero was thanked.", { FA: 2, MI: -2, FI: -2 }])),

  ax("Nadia, your niece", "sibling", ["scandal", "youth", "media"],
    sx("Your niece Nadia, drunk and filmed, has crashed her imported sports car into a rickshaw, injuring the puller, and the video is everywhere. The family wants the matter buried; the rickshaw-puller's family wants justice and the internet wants blood.",
      ["Bury it; settle the puller quietly.", "A child's mistake should not end a life — hers.", "You make the case vanish and pay the puller's family for silence. Nadia walks free, the cover-up leaks, and the dynasty's impunity is the lesson everyone takes away.", { FA: 6, EN: -8, GL: -4 }],
      ["Let the law take its course.", "If my niece is above the law, so is my fall.", "You let Nadia face charges like anyone else. The family is aghast at the betrayal, but a stunned public sees, for once, the powerful answer for their wreckage.", { GL: 6, EN: 6, FA: -8 }])),

  ax("Faisal, your son", "sibling", ["business", "monopoly", "favour"],
    sx("Your son Faisal's conglomerate is bidding for a national telecom licence, and a word from you would settle it. He frames it as keeping a strategic asset in safe hands; the regulator frames it as the family swallowing another sector.",
      ["Tilt the licence to Faisal.", "Strategic assets belong with people I trust.", "Faisal wins the licence and the family's empire grows another limb. The convenience is enormous and so is the proof, for critics, that no sector is safe from the dynasty's reach.", { FA: 8, FI: 4, EN: -6, GL: -6 }],
      ["Keep the bidding clean.", "My son can win on merit or not at all.", "You stay out and let the licence go to open bidding. Faisal loses and fumes, but the telecom sector is spared becoming one more wing of the family business.", { GL: 6, EN: 4, FA: -8 }])),

  ax("The Palace Chief of Staff", "official", ["household", "budget", "excess"],
    sx("The cost of running the residence has ballooned — a fleet of cars, a small army of staff, foreign renovations — into a line item that, if leaked, would enrage a struggling public. The chief of staff asks whether to trim it or bury it deeper in the budget.",
      ["Trim the household lavishness.", "A leaner house is a harder target.", "You cut the residence's bloated costs. The family chafes at the downgrade, but you have removed a scandal-in-waiting and can point to your own belt tightening.", { GL: 4, EN: 4, FA: -6, FI: 2 }],
      ["Hide the costs deeper in the budget.", "The house must reflect the office's dignity.", "You keep the lavishness and bury it across obscure budget lines. The comfort continues, and the day an auditor untangles it, the dynasty's appetite becomes front-page arithmetic.", { FA: 6, FI: -2, EN: -6, GL: -2 }])),

  ax("Begum Sufia, the matriarch", "spouse", ["mausoleum", "legacy", "cult"],
    sx("The matriarch, sensing the end, wants a grand family mausoleum and a perpetual state-funded foundation to tend the dynasty's memory forever. 'Let them not forget what we built,' she says. The price is a permanent claim on the treasury and the calendar.",
      ["Build the grand mausoleum and foundation.", "A dynasty unremembered is a dynasty undone.", "You commission the marble and endow the foundation. The matriarch is at peace and the cult is set in stone, and the treasury and the school calendar bend forever to the family's memory.", { FA: 8, FI: -4, EN: -6, GL: -4 }],
      ["Promise a modest, private memorial.", "Let our works be the monument, not the marble.", "You gently refuse the grand scheme for something private and small. The matriarch is disappointed and the family stung, but the state is not conscripted into worshipping your bloodline.", { GL: 4, EN: 2, FA: -6 }])),

  ax("Imran, your son", "sibling", ["addiction", "rehab", "secret"],
    sx("Your son Imran's drug problem has spiralled, and an overdose has been hushed up at a private clinic. The family wants it sealed forever; a quieter voice says he needs real, visible help that cannot stay secret for long.",
      ["Seal it; manage him in secret.", "My son's weakness is not the nation's business.", "You bury the overdose and manage Imran behind closed doors. The secret holds precariously, and the strain of hiding a deteriorating son begins to warp the family from within.", { FA: 4, EN: -2, MI: -2 }],
      ["Get him real help, accept the exposure.", "I would rather a living son than a hidden one.", "You put Imran into genuine, sustained treatment, knowing it cannot stay wholly secret. The whispers come, but handled with candour they soften, and your son has a chance to live.", { FA: -2, EN: 4, GL: 2 }])),

  ax("Shahana, the estranged sister", "sibling", ["family", "feud", "threat"],
    sx("Your long-estranged sister Shahana, cut off years ago in a bitter inheritance feud, resurfaces with a manuscript of grievances and a media deal — unless you reconcile and pay. She knows where every body in the family is buried.",
      ["Reconcile and bring her back in.", "Better a sister at the table than at the microphone.", "You make peace with Shahana and fold her back into the fold. The manuscript is shelved and the secrets contained, but an old enemy now sits inside the family's councils again.", { FA: 4, FI: -4, MI: 2 }],
      ["Call her bluff and let her talk.", "I will not be ransomed by my own sister.", "You refuse to pay and dare her to publish. She may yet detonate the family's secrets, but you have signalled that blood is not a blank cheque, and the next blackmailer takes note.", { MI: 4, FA: -6, GL: -2 }])),

  ax("Rashed, the fixer-cousin", "fixer", ["contracts", "kickbacks", "exposure"],
    sx("Your cousin Rashed, who has greased the family's deals for decades, is named in a foreign bribery indictment that could drag the dynasty's whole contracting machine into the light. He asks, with quiet menace, that you protect him as he has always protected you.",
      ["Protect Rashed at all costs.", "He carried our secrets; I will carry him.", "You shield Rashed with every lever you have. The machine stays hidden for now, but you have tied your fate openly to a man under foreign indictment, and the knot will only tighten.", { FA: 6, MI: 2, EN: -6, GL: -8 }],
      ["Cut Rashed loose to save the dynasty.", "One cousin is a cheaper loss than the whole house.", "You sever ties with Rashed and let him face the music alone. He is dangerous now, knowing all he knows, but the family's machine is given distance from a man going down.", { GL: 4, FA: -8, MI: -2 }])),

  ax("Nasrin, your spouse", "spouse", ["spouse", "politics", "ambition"],
    sx("Nasrin, long your quiet shield, now wants a public political role of her own — a ministry, a platform, a legacy beyond being your wife. It would delight her and the women's wing, and plant a second power in your own bed.",
      ["Give Nasrin a real public role.", "She has earned a stage of her own.", "Nasrin steps into public life and shines, to the women's wing's delight. She is fulfilled and formidable, and the household now contains a politician who is also the one who knows you best.", { FA: 6, EN: 4, GL: 2, MI: -2 }],
      ["Keep her to the supporting role.", "One throne in a marriage is enough.", "You gently keep Nasrin offstage. She accepts it with a cooling smile, the marriage quietly diminished, and an asset and an ally is left underused beside you.", { MI: 2, FA: -8 }])),

  ax("The Dynasty's Pollster", "official", ["image", "family", "strategy"],
    sx("The pollster lays it bare: the family brand is curdling, the young see entitlement where their parents saw sacrifice, and the dynasty's halo is fading with the generation that remembers its founding. He offers a costly rebrand, or the comfort of denial.",
      ["Commission the honest rebrand.", "A legend that stops evolving becomes a joke.", "You invest in modernising the family's image and message. It is expensive and the old guard hates the changes, but the dynasty starts, haltingly, to speak to a generation that owes it nothing.", { GL: 4, EN: 4, FA: 2, FI: -4 }],
      ["Dismiss it; trust the legend.", "Our name has carried us for fifty years.", "You wave the warning away and trust the founding myth. The halo keeps dimming unattended, and the distance between the dynasty and the young it rules quietly widens.", { FA: 4, EN: -4, GL: -4 }])),

  ax("Arif, your grandson", "sibling", ["succession", "youth", "abroad"],
    sx("Your grandson Arif, groomed since birth as a future heir, confesses he wants none of it — he means to stay abroad, study, marry a foreigner, and never return to the cage of the dynasty. The line of succession trembles on his answer.",
      ["Let Arif go and live his own life.", "A throne forced on a boy breaks them both.", "You release Arif from the dynasty's expectations. He leaves grateful and whole, and the succession is left a generation thinner, with no obvious blood to carry the name forward.", { EN: 4, GL: 2, FA: -8 }],
      ["Pressure Arif to accept his duty.", "The dynasty is not a choice; it is a birthright and a debt.", "You bind Arif to his inheritance against his will. The line of succession holds, but you have made an heir of a hostage, and resentment now sits at the heart of the family's future.", { FA: 8, MI: 2, EN: -6 }])),

  // ── The second family ───────────────────────────────────────────────────────
  ax("Karim, your private secretary", "fixer", ["secret", "scandal", "family"],
    sx("Karim brings the file you dreaded: proof of a second family — a woman and a child kept quietly for years — now at risk of exposure by a tabloid. He waits, expressionless, for how you wish the matter handled.",
      ["Provide for them openly and own it.", "I will not deny my own blood to save my face.", "You acknowledge and provide for them, weathering the storm. Nasrin is wounded and the press feasts for a week, but the truth, owned, loses its power to be wielded against you.", { FA: -6, GL: 2, EN: 2 }],
      ["Pay for silence and bury it.", "Some doors must stay closed for the house to stand.", "You buy silence and hide them deeper. The secret holds, precariously, and you have handed anyone who learns it a permanent lever over you, and a child grows up a deniable shadow.", { FA: 4, MI: 2, EN: -4, GL: -2 }])),

  // ── The matriarch's faith healer ────────────────────────────────────────────
  ax("The Palace Physician", "doctor", ["matriarch", "superstition", "health"],
    sx("The ailing matriarch has fallen under the sway of a faith healer who forbids her medicine and prescribes amulets, and her health is failing fast. The physician begs you to intervene; the family fears crossing her will and her belief.",
      ["Remove the healer, restore her treatment.", "I will not let a charlatan kill my mother.", "You banish the healer and restore her medicine, over her protests. She rallies physically and resents the betrayal, and the family whispers that you defied her sacred wishes.", { FA: -2, EN: 4, GL: 2 }],
      ["Defer to her faith and the healer.", "A dying woman's belief is hers to keep.", "You let the matriarch keep her healer and her amulets. The family is spared the confrontation, and she declines faster than she need have, her treatable ailment left to the charlatan's charms.", { FA: 4, EN: -6 }])),

  // ── The wayward heir online ─────────────────────────────────────────────────
  ax("The Dynasty's Media Manager", "fixer", ["heir", "social-media", "image"],
    sx("Your designated heir is posting reckless luxury and intemperate opinions across social media — fast cars, foreign holidays, scorn for the 'ungrateful' poor — while the country tightens its belt. The manager wants the accounts seized and scrubbed; the heir resists fiercely.",
      ["Seize and scrub the heir's accounts.", "An heir who cannot govern a phone cannot govern a country.", "You take control of the accounts and rein the heir in. The reckless posts vanish and the damage stops, and the humiliated heir nurses a sullen grudge against the leash.", { FA: -2, GL: 2, EN: 2 }],
      ["Let the heir post freely.", "I will not muzzle my own child.", "You leave the heir to post as they please. The family's indulgence shows in every flaunted holiday and sneer at the poor, and the dynasty's image curdles a little further with each upload.", { FA: 2, EN: -6, GL: -4 }])),

  // ── Nasrin's jealousy of an aide ────────────────────────────────────────────
  ax("Nasrin, your spouse", "spouse", ["marriage", "trust", "aide"],
    sx("Nasrin, cold and certain, demands you dismiss your brilliant, indispensable young chief of staff, convinced — rightly or not — that the closeness between you has gone beyond work. The aide is the best you have. The marriage trembles on your answer.",
      ["Dismiss the aide to save the marriage.", "No staffer is worth my wife's trust.", "You let the indispensable aide go. Nasrin softens and the household steadies, and your office loses its sharpest mind to a suspicion you could not dispel.", { FA: 8, EN: -2, GL: -2 }],
      ["Keep the aide, reassure Nasrin.", "I will not sacrifice competence to jealousy.", "You keep the aide and try to reassure Nasrin. The office keeps its best mind, and a cold front settles over the marriage that no reassurance quite melts.", { FA: -6, GL: 2, MI: 2 }])),

  // ── The cousin's TV channel ─────────────────────────────────────────────────
  ax("Jalal, your cousin", "fixer", ["media", "family", "propaganda"],
    sx("Your cousin Jalal wants a licence and state advertising to launch a television channel — a family mouthpiece, he says, to defend the dynasty. It would be a loyal megaphone and a private fiefdom funded, in effect, by the public purse.",
      ["Grant Jalal his channel and ad money.", "A friendly screen in the family is worth its price.", "Jalal gets his channel and his state ad revenue. It sings your praises nightly, and it becomes a byword for the family's capture of the airwaves and the public purse alike.", { FA: 6, MI: 2, EN: -4, GL: -4 }],
      ["Refuse the family channel.", "I will not fund a cousin's vanity with the people's money.", "You deny Jalal his channel. He sulks and the family grumbles at the snub, but you spare yourself a scandal of a state-funded dynastic mouthpiece.", { GL: 4, EN: 2, FA: -6 }])),

  // ── The grandchild's foreign wedding alliance ───────────────────────────────
  ax("Begum Sufia, the matriarch", "spouse", ["marriage", "alliance", "dynasty"],
    sx("The matriarch has arranged for your grandchild to marry into another political dynasty — a powerful alliance that would knit two houses and two vote banks, and bind your grandchild to a stranger for the sake of the family's reach.",
      ["Bless the dynastic marriage alliance.", "Two houses joined are a fortress doubled.", "You bless the match and the alliance is sealed. The family's reach and vote bank swell, and your grandchild is wed to strategy, a person traded for a partnership.", { FA: 6, MI: 4, EN: -4 }],
      ["Let the grandchild choose for themselves.", "A marriage is a life, not a merger.", "You refuse to trade your grandchild into an alliance. The matriarch is furious and the strategic match is lost, but your grandchild keeps the right to a life of their own choosing.", { EN: 4, GL: 2, FA: -6 }])),

  // ── The leader's mortality ──────────────────────────────────────────────────
  ax("The Palace Physician", "doctor", ["health", "mortality", "succession"],
    sx("The physician, grave, tells you in private that your own heart is failing and the years left are few — and that the strain of office is hastening the end. You can step back toward a managed succession, or burn what remains holding absolute power.",
      ["Step back toward a managed succession.", "A reign that ruins the man it crowns is a poor reign.", "You begin easing your grip and grooming a successor on your own terms. Your authority wanes the moment the change shows, but the dynasty gains a real chance of surviving you, and you a few more years.", { FA: 4, GL: 2, EN: 2, MI: -4 }],
      ["Burn what remains holding power.", "I will rule until the last beat, not fade into a managed dusk.", "You grip the wheel and let the office consume you. Your authority stays total and undimmed, and the succession stays a vacuum the family will fight over the moment your failing heart gives out.", { MI: 4, FA: 2, EN: -4 }])),

  // ── The relative's manslaughter ─────────────────────────────────────────────
  ax("Karim, your private secretary", "fixer", ["scandal", "justice", "family"],
    sx("A drunk young relative has run down and killed a pedestrian, and Karim has the police report in hand before the press. He can make the case vanish, or you can let the law take its course against your own blood.",
      ["Let the law take its course.", "A life taken is a life answered for, kin or not.", "You let the case proceed and your relative faces justice. The family is aghast at the betrayal, but a stunned public sees, for once, that the dynasty's blood does not buy immunity from a death.", { GL: 6, EN: 6, FA: -8 }],
      ["Make the case vanish.", "I will not feed my own to the courts over an accident.", "You bury the case and pay the dead pedestrian's family for silence. Your relative walks free, the cover-up seeps out, and the impunity of the family's blood is stamped a little deeper into the public's mind.", { FA: 6, EN: -8, GL: -4 }])),

  // ── The son's gambling debts ────────────────────────────────────────────────
  ax("Imran, your son", "sibling", ["gambling", "debt", "blackmail"],
    sx("Your son Imran has run up ruinous gambling debts to dangerous people abroad, who now hint they will sell the story — and the leverage — unless quietly paid. Imran, shamefaced, begs you to settle it.",
      ["Pay the debts and contain it.", "I will not let loan sharks own a piece of my son.", "You quietly settle the debts and pull Imran home. The leverage is bought off for now, and you have taught your son that the family's purse will always cover his recklessness.", { FA: 4, FI: -4, EN: -2 }],
      ["Refuse to pay, force him to face it.", "A debt forgiven is a lesson unlearned.", "You refuse to bail Imran out and let him face the consequences. He is humiliated and exposed to danger and scandal, but the bottomless family rescue ends, and so perhaps the recklessness.", { FA: -4, GL: 2, EN: 2 }])),

  // ── The matriarch in the cabinet ────────────────────────────────────────────
  ax("Begum Sufia, the matriarch", "spouse", ["interference", "cabinet", "power"],
    sx("The matriarch, though holding no office, summons your ministers, overrules your decisions, and runs a shadow government from the residence. The cabinet seethes in private; to confront her is to wound the woman who built the dynasty.",
      ["Rein in the matriarch's interference.", "There is one government in this house, and it is mine.", "You firmly but gently end her shadow rule. The cabinet exhales and governance steadies, and the matriarch, wounded and sidelined, turns cold toward the child who clipped her wings.", { GL: 4, EN: 2, MI: 2, FA: -8 }],
      ["Defer to the matriarch's hand.", "She built this house; let her move within it.", "You let the matriarch keep her shadow government. The family hierarchy is honoured, and your ministers learn to serve two masters, governance muddled by a second, unelected centre of power.", { FA: 8, GL: -4, EN: -4 }])),

  // ── The estranged child returns ─────────────────────────────────────────────
  ax("Tania, your daughter", "sibling", ["reconciliation", "estrangement", "family"],
    sx("Your daughter Tania, long estranged after a bitter falling-out, returns — older, softer, seeking reconciliation, and perhaps a place in the family's future. The old wound aches; so does the empty chair she might fill.",
      ["Reconcile and welcome her back.", "A door closed in anger can still be opened in love.", "You make peace with Tania and bring her home. The family is made warmer and more whole, and an old wound, tended at last, begins to heal.", { FA: 12, EN: 2 }],
      ["Keep the estrangement.", "Some breaks do not mend, and pretending they do breaks worse.", "You keep your distance from Tania. The old grievance stays unhealed, the family stays fractured, and the chair she might have filled stays empty and accusing.", { FA: -8, MI: 2, EN: -2 }])),

  // ── The biographer ──────────────────────────────────────────────────────────
  ax("The Official Biographer", "official", ["legacy", "history", "truth"],
    sx("The biographer commissioned to write the authorised history of your rule has uncovered the hard truths alongside the triumphs, and asks whether to write honestly — warts and all — or to produce the burnished hagiography the family expects.",
      ["Commission an honest biography.", "A legacy that cannot bear the truth was never solid.", "You let the biographer write honestly. The hard truths sting and the family protests the warts, but the resulting history carries the weight and credibility that no hagiography ever could.", { GL: 4, EN: 2, FA: -4 }],
      ["Demand the burnished version.", "Let history remember the triumphs, not the stumbles.", "You order the flattering version. The official history glows, and everyone who lived through the rule knows it for the airbrushed propaganda it is, and trusts it accordingly.", { FA: 4, GL: -4, EN: -2 }])),

  // ── The family's frozen foreign assets ──────────────────────────────────────
  ax("Karim, your private secretary", "ambassador", ["assets", "foreign", "exposure"],
    sx("A foreign government, investigating money-laundering, has frozen a web of the family's overseas accounts and properties and is asking pointed questions. Karim asks whether to fight it openly through lawyers, or quietly let the assets go to avoid the trail leading home.",
      ["Quietly let the frozen assets go.", "Better to lose the money than to map the trail.", "You abandon the frozen assets rather than fight and expose the web. The wealth is lost, but the paper trail back to the family is not paraded through a foreign court for the world to read.", { FA: -2, FI: -4, GL: 2 }],
      ["Fight openly to reclaim the assets.", "I will not surrender what is ours to a foreign whim.", "You fight publicly through lawyers to reclaim the assets. The case drags the family's overseas wealth and its murky origins into open court, a slow-motion exposé of how the fortune was made.", { FA: 4, FI: 2, GL: -6, EN: -2 }])),

  // ── The cook who saw too much ───────────────────────────────────────────────
  ax("The Household Steward", "people", ["servant", "loyalty", "secret"],
    sx("An old household servant, privy to decades of the family's private dramas and secrets, is retiring — and a publisher has approached them with a fortune for a tell-all. The steward, loyal but poor, has come to you first, asking only to be looked after.",
      ["Provide generously for the servant.", "Loyalty repaid is loyalty kept.", "You pension the old servant handsomely and with warmth. The secrets stay safe behind a debt of gratitude generously honoured, and the household's other staff see how loyalty is rewarded.", { FA: 6, FI: -2 }],
      ["Threaten them into silence.", "A servant who talks is a servant who is dealt with.", "You menace the servant into signing away their story. The tell-all is killed, and decades of loyalty curdle into fear and a grievance that may yet find another, angrier outlet.", { MI: 2, FA: -4, EN: -2 }])),

  // ── The relative's safe-seat demand ─────────────────────────────────────────
  ax("Faisal, your son", "sibling", ["nepotism", "seat", "politics"],
    sx("Your son Faisal, with no record of service, demands a safe parliamentary seat as his due — a launchpad for his own ambitions. The local party workers who earned their place resent the parachute; the family expects you to provide for your own.",
      ["Hand Faisal the safe seat.", "An heir must begin somewhere.", "You parachute Faisal into the safe seat. The family is pleased, and the grassroots workers who earned their place watch an unearned son leapfrog them, and the resentment festers in the ward.", { FA: 6, MI: 2, EN: -6 }],
      ["Make Faisal earn his place.", "A seat handed to the unproven rots the party beneath it.", "You refuse Faisal the parachute and tell him to earn it. He fumes and the family mutters about cold parenting, but the grassroots see that even the leader's son must climb the ladder like anyone.", { GL: 4, EN: 4, FA: -6 }])),

  // ── The dynasty's private guards ────────────────────────────────────────────
  ax("Mizan, the security chief", "shadow", ["guards", "militia", "family"],
    sx("Mizan proposes expanding the family's personal security into a large, loyal private force — answerable only to the dynasty, beyond the regular chain of command. It would make the family untouchable; it would also be a private army at the heart of the state.",
      ["Build the loyal private force.", "A family this exposed needs guns it can trust absolutely.", "You build the private security force. The family is made untouchable, and a praetorian guard loyal to your blood alone now sits at the heart of the state, a coup-in-waiting or a shield, depending on the day.", { FA: 6, MI: 4, EN: -6, GL: -4 }],
      ["Keep security within the state's command.", "A private army is a dynasty's first step to its own coup.", "You keep the family's protection within the regular forces' chain of command. The family is a little more exposed, but no private army festers at the state's heart to one day turn on its master.", { GL: 4, MI: -2, FA: -4 }])),

  // ── The activist grandchild ─────────────────────────────────────────────────
  ax("Arif, your grandson", "sibling", ["activism", "dissent", "family"],
    sx("Your grandson Arif, idealistic and furious, has begun publicly criticising your government's record on rights and corruption, embarrassing the family and delighting the opposition. He will not be silenced by family pressure. The hardliners want him disowned.",
      ["Tolerate Arif's dissent.", "A grandchild with a conscience is not a traitor.", "You let Arif speak, weathering the embarrassment. The opposition makes hay and the hardliners fume, but the family is seen to contain an honest voice, and it humanises a dynasty grown remote.", { GL: 4, EN: 4, FA: -4 }],
      ["Silence or disown him.", "Dissent under my own roof is a wound I cannot show.", "You move to silence Arif and, failing that, distance the family from him. The embarrassment is contained, and a young idealist learns that the family prizes its image over his conscience, and the rift hardens.", { FA: 4, MI: 2, EN: -4, GL: -4 }])),

  // ── The family astrologer ───────────────────────────────────────────────────
  ax("The Court Astrologer", "shadow", ["superstition", "decisions", "influence"],
    sx("A revered astrologer the matriarch trusts has begun advising on the timing of cabinet decisions, elections, and appointments — and the family takes the readings seriously. The rationalists in your circle are appalled; the matriarch is adamant.",
      ["Indulge the astrologer's counsel.", "It costs little to keep the stars and the matriarch content.", "You let the astrologer's readings shape the calendar. The matriarch is pleased and the family soothed, and your government's decisions come, embarrassingly, to be timed by the heavens, to the rationalists' despair.", { FA: 4, GL: -4, EN: -2 }],
      ["Banish the astrologer from affairs of state.", "A nation will not be governed by horoscopes.", "You bar the astrologer from matters of state. The matriarch is wounded and the family unsettled, but government decisions are once again made by reason rather than the alignment of the stars.", { GL: 4, EN: 2, FA: -6 }])),

  // ── The ancestral home dispute ──────────────────────────────────────────────
  ax("Kamal, your brother", "sibling", ["inheritance", "property", "feud"],
    sx("Your brother Kamal is suing over the ancestral family home and lands, claiming the lion's share against the other siblings — a feud that, if it reaches open court, will air the family's dirty laundry and wealth before the nation. He offers a private settlement on his terms.",
      ["Settle privately on Kamal's terms.", "A family quarrel aired in court is a gift to my enemies.", "You swallow the unfair terms to keep the feud private. Kamal gets his lion's share and you keep the dirty laundry out of court, at the cost of a rankling injustice within the family.", { FA: 2, FI: -2, EN: -2 }],
      ["Refuse and let it go to court.", "I will not be extorted out of my birthright by my own brother.", "You refuse Kamal and let the suit proceed. The family's wealth and feuds are aired before the nation, but you do not surrender your birthright to a brother's greed.", { FA: -4, GL: -2, EN: -2 }])),

  // ── The spouse's charity empire ─────────────────────────────────────────────
  ax("Nasrin, your spouse", "spouse", ["charity", "foundation", "scrutiny"],
    sx("Nasrin's beloved charitable foundation — her life's work and public pride — is facing whispers that its accounts are loose and some funds have strayed. An audit looms. She is wounded by the suspicion and begs you to make it go away.",
      ["Let the audit proceed honestly.", "A charity that cannot bear an audit is not a charity.", "You let the audit run its course. Nasrin is hurt and some embarrassment surfaces, but her foundation emerges either cleared or cleaned, and its good name rests on truth rather than your protection.", { GL: 4, EN: 2, FA: -4 }],
      ["Quash the audit to spare Nasrin.", "I will not let my wife's life's work be soiled.", "You make the audit disappear to protect Nasrin. She is grateful and her pride intact, and the unexamined foundation becomes one more shielded family vehicle, a scandal deferred and compounding.", { FA: 6, EN: -4, GL: -4 }])),

  // ── The cousin who lost an election ─────────────────────────────────────────
  ax("Jalal, your cousin", "fixer", ["election", "loss", "consolation"],
    sx("Your cousin Jalal, parachuted into a seat he then lost, demands a consolation — a plum ministry, a corporation chairmanship, an ambassadorship — to soothe his wounded pride and keep up appearances. The family expects you to provide; the merit-minded are appalled.",
      ["Consolation prize for Jalal.", "A defeated cousin cannot be left with nothing.", "You hand Jalal a plum sinecure. The family's appearances are preserved, and a man the voters rejected is rewarded with high office anyway, to the merit-minded's disgust.", { FA: 6, EN: -4, GL: -2 }],
      ["Let Jalal sit with his defeat.", "The voters spoke; I will not overrule them with a sinecure.", "You decline to reward Jalal's defeat. He sulks and the family grumbles, but you signal that the people's verdict means something even within the dynasty.", { GL: 4, EN: 4, FA: -6 }])),

  // ── The leader's private diary ──────────────────────────────────────────────
  ax("Karim, your private secretary", "fixer", ["diary", "secrets", "legacy"],
    sx("Your candid private diary — decades of unguarded thoughts, deals, and judgments of allies and enemies — has been quietly copied, and a page has surfaced. Karim asks whether to hunt the leak ruthlessly or to pre-empt it by publishing a curated version yourself.",
      ["Hunt the leak ruthlessly.", "A stolen confidence is a wound that must be cauterised.", "You launch a ruthless hunt for the leaker. The household is gripped by fear and suspicion, and the hunt itself signals there is much in the diary worth stealing, drawing more interest, not less.", { MI: 2, FA: -2, EN: -2, GL: -2 }],
      ["Publish a curated version yourself.", "Better I tell my story than have it told for me.", "You pre-empt the leak by publishing a curated memoir. You shape the narrative on your own terms, and the stolen pages lose their value beside the version you chose to tell.", { GL: 4, FA: 2, EN: 2 }])),

  // ── The dynasty's anniversary cult ──────────────────────────────────────────
  ax("The Culture Secretary", "official", ["cult", "anniversary", "legacy"],
    sx("A grand state spectacle is proposed for the dynasty's founding anniversary — compulsory school assemblies, a national holiday, portraits in every office, a day of enforced reverence. The family glows at the idea; critics see a personality cult cast across the calendar.",
      ["Stage the grand reverence.", "A founding remembered is a movement renewed.", "You decree the spectacle, the holiday, and the portraits. The reverence is total and enforced, and the cult around your bloodline deepens into something the schoolchildren will recite by rote and the critics will name a personality cult.", { FA: 8, MI: 2, EN: -6, GL: -4 }],
      ["Mark it modestly.", "A dynasty secure in itself need not command worship.", "You keep the anniversary a dignified, modest affair. The family's mythmakers are disappointed at the restraint, but the state is spared a day of compelled reverence to your bloodline.", { GL: 4, EN: 2, FA: -6 }])),

  // ── The child's hidden depression ───────────────────────────────────────────
  ax("The Palace Physician", "doctor", ["children", "mental-health", "secret"],
    sx("The physician confides that your youngest, crushed by the weight of the family name and a life lived in public, is severely depressed and hiding it. The family treats such things as shameful weakness. The physician asks how to proceed.",
      ["Get the child real, open help.", "My child's mind matters more than the family's face.", "You arrange genuine treatment and ease the public burden on your youngest, shame be damned. The family whispers, but your child begins, slowly, to heal, and learns the name is not a cage they must suffer in silence.", { FA: 4, EN: 4, GL: 2 }],
      ["Keep it hidden, manage it quietly.", "A weakness seen is a weakness exploited.", "You hide the depression and manage it behind closed doors. The family's face is preserved, and your youngest carries their darkness alone, untreated, beneath the smiling public mask the dynasty demands.", { FA: 2, EN: -4 }])),

  // ── The matriarch's death and the will ──────────────────────────────────────
  ax("The Family Lawyer", "official", ["matriarch", "death", "succession"],
    sx("The matriarch has died, and her will divides her vast holdings and her blessing unequally among the siblings — naming a favourite and slighting the rest, with a clause that could ignite a succession war. The lawyer asks whether to honour it strictly or quietly broker an even peace.",
      ["Honour the will exactly.", "A mother's last word is not for me to edit.", "You execute the will as written, favourite and slights and all. The matriarch's wishes are honoured, and the slighted siblings nurse a burning grievance that festers into the succession war she half-designed.", { FA: 2, MI: 2, EN: -2 }],
      ["Broker an even peace among the siblings.", "A will that breeds a war serves no one's memory.", "You quietly renegotiate an even division among the siblings. The matriarch's exact wishes are bent, but the family holds together and the succession war her will would have lit is smothered before it sparks.", { FA: 6, EN: 2 }])),

  // ── The relative's smuggling ring ───────────────────────────────────────────
  ax("Karim, your private secretary", "shadow", ["smuggling", "family", "scandal"],
    sx("Karim brings evidence that a relative has been running a gold-and-goods smuggling ring under the family's protective shadow, and customs investigators are circling. He asks whether to shut it down and cut the relative loose, or quash the investigation.",
      ["Shut it down, cut the relative loose.", "A smuggler in the family is a scandal with my name on it.", "You shut the ring and let the relative face the investigators. The family accuses you of feeding your own to the wolves, but a ticking scandal is defused before it could detonate under the dynasty.", { GL: 4, EN: 4, FA: -6 }],
      ["Quash the investigation.", "I do not hand my blood to customs men.", "You bury the investigation and shield the relative. The smuggling continues under the family's cover, and you have tied the dynasty's name openly to a racket that one leak could blow wide open.", { FA: 6, FI: 2, EN: -6, GL: -4 }])),

  // ── The daughter's divorce ──────────────────────────────────────────────────
  ax("Tania, your daughter", "sibling", ["divorce", "scandal", "family"],
    sx("Your daughter Tania wants to divorce her abusive, well-connected husband — a step the conservative public and her in-laws' powerful family will turn into a scandal and a feud. She asks for your backing against the pressure to endure for the family's image.",
      ["Back Tania's divorce fully.", "No child of mine stays in a cage for my image.", "You back Tania publicly and weather the scandal and the in-laws' fury. The conservatives tut and a feud opens, but your daughter is freed from an abusive marriage and knows her father chose her over appearances.", { FA: 6, EN: 4, GL: -2 }],
      ["Pressure her to endure for appearances.", "A divorce in the family is a wound the public will not forget.", "You pressure Tania to stay for the family's image. The scandal is avoided and the powerful in-laws appeased, and your daughter remains trapped with an abuser, learning her suffering counts for less than the dynasty's face.", { FA: -2, MI: 2, EN: -6 }])),

  // ── The aide's overreach ────────────────────────────────────────────────────
  ax("Karim, your private secretary", "fixer", ["aide", "overreach", "power"],
    sx("Your most trusted aide has begun acting in your name without leave — issuing orders, brokering deals, taking cuts — wielding a shadow authority that ministers now fear more than yours. Karim warns the aide has grown too large; cutting him loose means losing your right hand.",
      ["Cut the overreaching aide down.", "No hand of mine signs my name without my leave.", "You strip the aide of his shadow authority and his cuts. You lose a formidable right hand and the convenience he provided, but the ministers answer to you again rather than to a courtier trading on your name.", { FA: 2, GL: 2, MI: 2, EN: 2 }],
      ["Let the aide keep his shadow power.", "He gets things done; do not break what works.", "You leave the aide his unchecked authority. The machine runs smoothly on his energy, and a courtier accountable to no one grows ever larger, trading on your name and skimming as he pleases.", { FA: -2, MI: -2, EN: -4 }])),

  // ── The heir's reluctant grooming ───────────────────────────────────────────
  ax("The Dynasty's Mentor", "official", ["heir", "grooming", "succession"],
    sx("The chosen heir is being groomed for power, but the mentor reports they are out of their depth — indecisive, unloved by the party, unready. You can keep forcing the unsuited heir forward, or face the family and reopen the succession to someone abler.",
      ["Keep forcing the chosen heir.", "A succession reopened is a succession war declared.", "You push the unready heir forward regardless. The family's plan holds and the war is deferred, and the country is set to inherit a leader the party does not trust and the heir cannot become.", { FA: 6, EN: -4, GL: -2 }],
      ["Reopen the succession to someone abler.", "A throne is not a prize for the unready, even of my blood.", "You face the family and reopen the question to abler candidates. The chosen heir is wounded and the family thrown into turmoil, but the dynasty's future is no longer staked on someone unfit to carry it.", { GL: 4, MI: 2, EN: 2, FA: -8 }])),

  // ── The relative's defection threat ─────────────────────────────────────────
  ax("Kamal, your brother", "sibling", ["defection", "rival", "loyalty"],
    sx("Your brother Kamal, passed over and embittered, threatens to defect to the opposition and take his faction and his secrets with him — a betrayal that would split the family and arm your enemies. He hints what it would take to keep him: power, money, a free hand.",
      ["Pay Kamal's price to keep him.", "A brother in the opposition is a knife I gave them.", "You meet Kamal's price and bind him close again. The split is averted and the secrets contained, and you have taught your own family that the surest way to riches is to threaten betrayal.", { FA: 2, FI: -2, MI: 2, EN: -4 }],
      ["Let Kamal walk.", "I will not be blackmailed by my own brother.", "You refuse Kamal's terms and let him go. He defects, splitting the family and arming your enemies with his secrets, but you do not reward extortion, and the rest of the family learns where the line is.", { MI: -2, FA: -6, EN: 2 }])),

  // ── The family's university ─────────────────────────────────────────────────
  ax("Roksana, your sister-in-law", "fixer", ["university", "family", "patronage"],
    sx("Your sister-in-law Roksana runs the family's private university as a personal fief — selling admissions and degrees, packing the faculty with cronies, while trading on the dynasty's name for accreditation. A scandal is brewing. She asks for your shield.",
      ["Shield Roksana's university.", "A family institution is not lightly disowned.", "You protect Roksana and her degree-selling fief. The family institution stays in family hands, and its rotten accreditation and sold degrees become a brewing scandal with the dynasty's name stamped on it.", { FA: 6, FI: 2, EN: -6, GL: -4 }],
      ["Force the university to clean up.", "A degree sold in my name dishonours every honest graduate.", "You force Roksana to clean up the university or lose your shield. She rages at the betrayal, but the sold degrees and crony faculty are purged, and the institution stops being a scandal waiting to break.", { GL: 4, EN: 4, FA: -6 }])),

  // ── The spouse's failing health ─────────────────────────────────────────────
  ax("The Palace Physician", "spouse", ["spouse", "health", "duty"],
    sx("Nasrin, your spouse and lifelong anchor, is gravely ill and needs you at her side — but the demands of office pull you away at every turn, and she is fading while you govern. The physician asks, gently, where you will be in the time she has left.",
      ["Step back to be with Nasrin.", "The office can wait; she cannot.", "You step back from the relentless schedule to be with Nasrin in her illness. Governance drifts in your partial absence, and you are present for the woman who anchored your whole life, whatever the cost to the office.", { FA: 12, GL: -2, MI: -2 }],
      ["Keep governing, visit when you can.", "A nation does not pause for one man's grief.", "You keep the wheel turning and snatch what time you can at her bedside. The office stays steady, and Nasrin fades largely alone, and you will carry the choice for the rest of your days.", { MI: 2, FA: -8, EN: -2 }])),

  // ── The child's failed business bailout ─────────────────────────────────────
  ax("Faisal, your son", "sibling", ["business", "bailout", "favour"],
    sx("Your son Faisal's grand business venture has collapsed under debt and mismanagement, and he begs you to have a state bank quietly write off his loans and bail him out — as such favours have rescued the connected before. The bankers await your word.",
      ["Arrange the quiet state bailout.", "I will not let my son be ruined in public.", "You have the state bank quietly absolve Faisal's debts. He is saved from ruin, and the public purse eats his failure, one more connected bailout that erodes the banks and the public's last faith in fairness.", { FA: 4, FI: -4, EN: -6, GL: -2 }],
      ["Let Faisal's business fail.", "A son bailed out learns nothing but the next bailout.", "You refuse to rescue Faisal and let his venture fail like any other. He is humiliated and the family stung, but the banks are spared another political write-off and the public sees the rules apply to your son too.", { GL: 4, EN: 4, FA: -6 }])),

  // ── The family priest's influence ───────────────────────────────────────────
  ax("The Household Imam", "cleric", ["religion", "influence", "decisions"],
    sx("The family's revered household imam has begun pressing you, through the devout matriarch and the family, to shape state policy to his conservative lights — curriculum, women's rights, minority matters. To heed him pleases the family and the pious; to refuse risks their wrath.",
      ["Keep the imam to spiritual matters.", "A priest may guide my prayers, not my policy.", "You gently confine the imam to the family's spiritual life and keep him out of state policy. The matriarch and the devout grumble, but the constitution's secular spine and the rights of women and minorities are not bent to one cleric's lights.", { GL: 4, EN: 4, FA: -6 }],
      ["Let the imam shape policy.", "The family's faith is the family's compass.", "You let the household imam's conservative counsel shape state policy. The family and the pious are gratified, and the curriculum narrows, women's reforms stall, and minorities feel the chill of one cleric's hand on the tiller.", { FA: 6, EN: -8, GL: -6 }])),

  // ── The exile contingency ───────────────────────────────────────────────────
  ax("Mizan, the security chief", "shadow", ["exile", "contingency", "survival"],
    sx("With unrest rising, Mizan quietly proposes preparing an exile contingency — foreign assets, a safe haven, a plane on standby — should the worst come. To prepare it is prudent survival; to be discovered preparing it would signal you expect to fall, and hasten the fall.",
      ["Prepare the exile contingency quietly.", "A wise captain knows where the lifeboats are.", "You let Mizan quietly arrange the haven, the assets, the standby plane. The escape hatch is ready should the worst come, and the very existence of it, if it ever leaks, will be read as the regime expecting its own end.", { MI: 2, FA: 2, FI: -2, EN: -2 }],
      ["Refuse to plan for flight.", "A leader who packs a bag has already half-fled.", "You refuse to prepare an exit, staking everything on staying. The signal of confidence is total, and if the worst does come you will face it with no lifeboat, no haven, and no plane on the tarmac.", { MI: 2, EN: 2, FA: -2 }])),

  // ── The grandchild's reckless friends ───────────────────────────────────────
  ax("Karim, your private secretary", "fixer", ["grandchild", "scandal", "influence"],
    sx("Your grandchild has fallen in with a fast, decadent crowd of the wealthy young — drugs, scandal, ruinous influence — that is dragging them toward the next viral embarrassment. Karim asks whether to forcibly intervene or trust the young to find their own way.",
      ["Intervene and cut off the bad crowd.", "I will not watch a grandchild ruined by jackals.", "You intervene hard, breaking up the decadent crowd and reining the grandchild in. They resent the heavy hand, but they are pulled back from the brink of the scandal that crowd was steering them toward.", { FA: 2, EN: 2 }],
      ["Trust the young to find their way.", "A grandchild smothered only rebels harder.", "You let the grandchild keep their friends and learn their own lessons. They may find their way, or the fast crowd may steer them into the viral scandal you saw coming and chose not to prevent.", { FA: 2, EN: -4, GL: -2 }])),

  // ── The matriarch's last wish ───────────────────────────────────────────────
  ax("The Family Lawyer", "spouse", ["matriarch", "promise", "legacy"],
    sx("On her deathbed the matriarch extracted a promise from you — to elevate a particular grandchild, or pursue a pet cause, or shield a favoured relative — that now binds you against your better judgment. The lawyer asks whether to honour the deathbed promise or quietly set it aside.",
      ["Honour the deathbed promise.", "A vow to the dying is a vow doubled.", "You keep the promise though it cuts against your judgment. The matriarch's memory is honoured and the family moved, and you carry out a wish you know to be unwise out of love and duty to the dead.", { FA: 6, EN: -2, GL: -2 }],
      ["Quietly set the promise aside.", "A promise that harms the living serves no memory.", "You quietly let the unwise promise lapse. The family that knows of it whispers of betrayal, but you spare the country and the dynasty the cost of a deathbed wish your better judgment rejected.", { GL: 2, EN: 2, FA: -6 }])),

  // ── The relative in the opposition's pay ────────────────────────────────────
  ax("Mizan, the security chief", "shadow", ["betrayal", "family", "leak"],
    sx("Surveillance reveals a trusted relative has been quietly feeding the family's secrets and your plans to the opposition for money. Mizan has the proof. You can expose and cast them out, or feed them false information and turn the leak into a weapon.",
      ["Expose and cast out the traitor.", "A leak in the family must be sealed, in daylight.", "You confront and expel the treacherous relative publicly. The family is shaken and the betrayal aired, but the leak is sealed and a warning blazes to anyone else tempted to sell the dynasty's secrets.", { MI: 2, FA: -4, GL: 2, EN: 2 }],
      ["Feed them false intelligence.", "A known traitor is a channel I can poison.", "You leave the traitor in place and feed them carefully chosen lies. The leak becomes your weapon against the opposition, and you live with a known Judas at the family table, useful and despised.", { MI: 4, FA: -2, EN: -2 }])),

  // ── The dynasty's contingency heir ──────────────────────────────────────────
  ax("The Dynasty's Mentor", "official", ["succession", "heir", "backup"],
    sx("With the chosen heir untested and the times dangerous, the mentor urges you to quietly groom a second, backup heir — insurance against the first faltering. To do so is prudent; if it is discovered, it will pit the two against each other and split the family in two.",
      ["Quietly groom a backup heir.", "A dynasty with one heir is a dynasty one accident from collapse.", "You quietly prepare a second heir as insurance. The dynasty gains resilience against the first faltering, and the seeds of a rivalry are sown that, if ever exposed, will split the family into warring camps.", { FA: 2, MI: 2, EN: -2 }],
      ["Stake everything on the one heir.", "Two heirs is two factions; I will not divide my own house.", "You commit fully to the single heir and refuse a backup. The family stays united behind one successor, and the whole dynastic future rests, undiversified, on whether that one heir proves equal to it.", { FA: 4, EN: -2, MI: -2 }])),

  // ── The leader's burnout ────────────────────────────────────────────────────
  ax("The Palace Physician", "doctor", ["burnout", "health", "judgment"],
    sx("The physician warns that exhaustion is eroding your judgment — the sleepless nights, the relentless decisions, the isolation are making you brittle, suspicious, and prone to error. You can take a real rest and delegate, or push on through the fog by sheer will.",
      ["Take a real rest and delegate.", "A mind worn to nothing makes the worst decisions of all.", "You step back to genuinely rest and hand real authority to trusted hands. Your judgment clears and your health recovers, and the delegation reveals who can be trusted with power — and who covets it.", { EN: 2, GL: 2, FA: 2, MI: -2 }],
      ["Push on through the exhaustion.", "A leader rests when the work is done, and it is never done.", "You refuse to rest and push on through the fog. The work never pauses, and your fraying judgment — brittle, suspicious, error-prone — begins to show in decisions sharper rest would have softened.", { MI: 2, EN: -4, GL: -2 }])),

  // ── The family's jewels and gold ────────────────────────────────────────────
  ax("The Family Treasurer", "fixer", ["wealth", "gold", "exposure"],
    sx("The family's vast hoard of undeclared gold and jewels — accumulated over the dynasty's years in power — is a fortune that an asset-disclosure rule or an investigation could expose. The treasurer asks whether to quietly declare and regularise it, or keep it hidden and deniable.",
      ["Quietly declare and regularise the hoard.", "A fortune hidden is a fortune that one day damns me.", "You declare and pay tax on the hoard, defusing its danger. The family balks at the cost and the exposure, but the undeclared wealth that could have damned you becomes merely embarrassing rather than criminal.", { FA: -2, FI: -2, GL: 2, EN: 2 }],
      ["Keep the hoard hidden.", "What is not declared cannot be questioned.", "You keep the gold and jewels hidden and deniable. The fortune stays intact and untaxed, and it sits as a time bomb that any serious investigation or disclosure rule could one day detonate under the dynasty.", { FA: 2, FI: 2, EN: -4, GL: -2 }])),

  // ── The question of stepping down ───────────────────────────────────────────
  ax("Nasrin, your spouse", "spouse", ["power", "legacy", "stepping-down"],
    sx("Nasrin, who has watched power hollow you out, asks the unaskable: whether it is time to step down with dignity while the legacy is intact, rather than cling on until you are dragged down or carried out. The whole dynasty's future hangs on the answer.",
      ["Plan a dignified exit while ahead.", "A leader who leaves on his own feet writes his own ending.", "You begin planning a dignified, managed exit while the legacy holds. The hardliners and the family who feed on your power are aghast, but you choose to author your own ending rather than have it authored for you.", { GL: 4, EN: 4, FA: 2, MI: -4 }],
      ["Cling to power to the end.", "Power surrendered is power that turns on you.", "You reject the idea of stepping down and resolve to hold on. The family's grip is preserved, and you set the dynasty on the path of clinging until it is dragged down or carried out, the exit no longer yours to write.", { MI: 2, FA: 2, EN: -4, GL: -2 }])),

  // ── The nephew's foreign-education debt ─────────────────────────────────────
  ax("Karim, your private secretary", "fixer", ["nepotism", "education", "favour"],
    sx("A nephew studying lavishly abroad has run up enormous bills the family is expected to cover from somewhere — and the easiest somewhere is a quiet diversion of a scholarship fund or an embassy budget. Karim asks how to settle it.",
      ["Pay the nephew's bills from family funds.", "I will not raid the public purse for a nephew's whims.", "You cover the nephew's lavish bills from the family's own pocket. The cost stings the family fortune, but no scholarship fund or embassy budget is quietly raided to fund a relative's foreign indulgence.", { FA: 2, FI: -2 }],
      ["Divert public funds to cover it.", "A scholarship fund will not miss a slice.", "You quietly divert public money to settle the nephew's debts. The family fortune is spared, and a scholarship fund meant for the deserving poor is skimmed to keep a nephew in foreign luxury, a small theft waiting to surface.", { FA: 4, FI: 2, EN: -6, GL: -2 }])),

  // ── The sibling rivalry erupts ──────────────────────────────────────────────
  ax("Tania, your daughter", "sibling", ["rivalry", "succession", "feud"],
    sx("Your two ablest children, Tania and Faisal, are now in open, poisonous rivalry over the succession, each building a faction, each demanding you anoint them and crush the other. To choose is to make an enemy of one child; to delay is to let the feud consume the family.",
      ["Choose one and settle it now.", "A festering rivalry rots worse than a clean cut.", "You name one of your children heir and end the limbo. The chosen rises and the rejected becomes, perhaps forever, an enemy within your own blood, but the poisonous uncertainty is at last resolved.", { FA: -2, MI: 2, EN: 2 }],
      ["Force them to share and reconcile.", "I will not break my family to crown one half of it.", "You refuse to choose and force a shared settlement on the rivals. Neither is satisfied and the tension simmers, but you keep both children and avoid making a lifelong enemy of one, betting reconciliation can hold.", { FA: 4, EN: -2, GL: -2 }])),

  // ── The relative's medical-negligence scandal ───────────────────────────────
  ax("Karim, your private secretary", "doctor", ["scandal", "hospital", "family"],
    sx("A hospital owned by a family member has been caught in a deadly negligence scandal — patients dead from filth and unqualified staff — and the bodies and the outrage are mounting. Karim asks whether to let regulators act fully or to shield the family's hospital.",
      ["Let the regulators act fully.", "A hospital that kills must answer, whoever owns it.", "You let the regulators shut and prosecute the negligent hospital, family-owned or not. The relative rages and the family is embarrassed, but the dead are honoured and the public sees the dynasty's clinics are not above the law.", { GL: 6, EN: 6, FA: -6 }],
      ["Shield the family's hospital.", "I will not let regulators ruin a family asset.", "You shield the hospital from the full force of the regulators. The family asset and its owner are protected, and the negligence and the deaths it caused are papered over, the outrage left to fester against you.", { FA: 6, FI: 2, EN: -8, GL: -4 }])),

  // ── The decision to anoint, at last ─────────────────────────────────────────
  ax("The Party Elders' Council", "official", ["succession", "anointment", "dynasty"],
    sx("The elders, anxious for certainty, press you to formally and publicly anoint your successor now and begin the handover — ending the speculation that weakens you, at the cost of becoming, the moment you do, a lame duck whose power drains to the heir.",
      ["Anoint the successor publicly now.", "An uncertain succession is a wound that bleeds the whole reign.", "You formally anoint your heir and begin the public handover. The speculation ends and the dynasty's continuity is assured, and your own authority starts draining toward the successor from the moment you name them.", { FA: 6, GL: 2, MI: -4 }],
      ["Keep the succession open and yourself central.", "An anointed heir is a rival with my blessing.", "You refuse to name a successor and keep all eyes on yourself. Your authority stays undivided and absolute, and the dangerous uncertainty over what follows you festers on, weakening the dynasty's future to preserve your present.", { MI: 4, FA: 2, EN: -2, GL: -2 }])),

  // ── The loyalist's plea for the inner circle ────────────────────────────────
  ax("The Cabinet Secretary", "official", ["inner-circle", "loyalty", "competence"],
    sx("Your inner circle has calcified into a clique of aging loyalists who tell you only what you wish to hear, while abler outsiders are frozen out. The secretary gently urges you to open the circle to fresh, candid voices; the loyalists, sensing the threat, resist.",
      ["Open the inner circle to candid voices.", "A circle of yes-men is a king walking blind.", "You bring abler, franker voices into the inner circle. The old loyalists are wounded and warn of disloyalty, but you begin to hear the hard truths a clique of flatterers had been hiding from you.", { GL: 4, EN: 4, MI: 2, FA: -4 }],
      ["Keep the trusted loyalists close.", "Loyalty proven over decades is worth more than candour.", "You keep the circle to its aging loyalists. They stay devoted and comfortable, and you keep governing on the flattering, partial picture they paint, the abler outsiders and the harder truths frozen out.", { FA: 6, GL: -2, EN: -4 }])),

  // ── The reckoning with the heir ─────────────────────────────────────────────
  ax("Tania, your daughter", "sibling", ["heir", "trust", "succession"],
    sx("Tania, the child you have finally settled on as heir, comes to you not with gratitude but with a hard question: does she inherit a country or a cage — a state to serve, or a family machine to feed? How you answer will shape what she becomes.",
      ["Tell her she inherits a country to serve.", "I leave you a duty, not a property.", "You charge Tania to serve the nation, not milk it. She takes the weight gravely, and the dynasty's heir is set, at least in intent, toward stewardship rather than extraction.", { EN: 6, GL: 4, FA: 2 }],
      ["Tell her she inherits a machine to keep.", "Power is the family's; tend it and it tends you.", "You teach Tania that power is the family's possession to keep and feed. She learns the lesson well, and the dynasty's future hardens into one more generation of the machine consuming the state it sits on.", { FA: 6, MI: 2, EN: -6, GL: -4 }]),
    sx("Tania, now trusted with real authority, uncovers a vast corruption running through the family's own enterprises and brings the evidence to you, asking whether she may clean it out — even though it means turning on relatives and donors who fed the dynasty for decades.",
      ["Let her clean out the family's corruption.", "An heir who will not face our own rot is no heir.", "You back Tania to clean the family's own house. Relatives and donors howl betrayal and some turn on you both, but the dynasty is purged of a rot that would have doomed it, and the heir proves her steel.", { GL: 6, EN: 6, FA: -8 }],
      ["Forbid her from touching family interests.", "Reform the country if you must, but not your own blood.", "You let Tania reform anything but the family. She learns the dynasty's true rule — that the rot is sacred — and the corruption running through the family enterprises stays untouched, awaiting its eventual reckoning.", { FA: 6, EN: -6, GL: -4 }]),
    sx("With your reign drawing toward its end, Tania asks for the one thing left to settle: whether you will leave on your own terms and hand her a clean transition, or cling to the last and leave her to seize what she can from the wreckage of a contested succession.",
      ["Hand her a clean, managed transition.", "My last gift is a beginning, not a battlefield.", "You commit to a clean handover, easing your grip so Tania inherits a stable transition rather than a war. Your power fades early, but the dynasty passes to its heir intact, and your ending is one you authored.", { GL: 6, EN: 4, FA: 4, MI: -6 }],
      ["Cling on and leave her the wreckage.", "The throne is taken, never given; let her earn it as I did.", "You cling to power to the last and leave Tania to fight for the succession from the ruins. The dynasty's continuity is thrown to chance and conflict, and your final act is to make your heir's beginning a battlefield.", { MI: 2, FA: -4, EN: -4, GL: -2 }])),
];
