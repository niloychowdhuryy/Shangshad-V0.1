// HOME — the Residence (Ganabhaban). Primary metric: FA (Family Ties).
// Dynastic politics: a fictional Bangladeshi first family. Each arc escalates
// across stages with its own bespoke choices at every step.
const sx = (prompt, left, right) => ({ prompt, left, right });
const ax = (speaker, portrait, tags, ...stages) => ({ speaker, portrait, tags, stages });

export const HOME = [
  // ── Nasrin & the offshore account ──────────────────────────────────────────
  ax('Nasrin, your spouse', 'spouse', ['family', 'money', 'leak'],
    sx("Listen to me — Nasrin says calmly that a reporter knows about the secret bank account you made in her name.",
      ['Move the money tonight and keep it a secret.', 'What she does not know cannot be tortured out of her.', 'The account empties by dawn. She notices the silence between you and begins her own quiet inquiries.', { FI: -6, FA: -8, MI: 6 }],
      ['Tell her everything and share the secret.', 'A shared secret is a shared cage.', 'She agrees, eyes hard. The marriage holds — but now she owns the same noose you do.', { FA: 10, FI: 4, GL: -6 }]),
    sx("We need to talk. A new story tells everyone the bank name and your kids' names. Nasrin is upset that you still got caught.",
      ['Blame a helper and fire him in front of everyone.', 'Someone must wear this, and it cannot be us.', 'The aide is destroyed to save you; every other aide now knows exactly how loyalty is repaid.', { MI: 6, FA: 4, GL: -8, EN: -4 }],
      ['Take the blame yourself to protect her name.', 'I will not let our children watch their mother burn.', 'You absorb the scandal alone. The polls dip; Nasrin looks at you as she has not in years.', { FA: 14, GL: -6, MI: -4 }]),
    sx("Nasrin pulls you aside. The police want to ask Nasrin questions. She says she will lie to protect you if you ask her to.",
      ['Let her lie to keep you both safe.', 'We sink together or not at all.', 'She testifies flawlessly. The file closes — and she has proof, now, that you let her risk prison.', { FA: -6, MI: 6, FI: 4, GL: -6 }],
      ['Stop her from lying and pay the fine instead.', 'No more of my sins in your mouth.', 'You take the fine and the headlines. The account dies; something tired between you finally rests.', { FI: -12, FA: 12, GL: 6 }])),

  // ── Rashed & the Padma embankment graft ─────────────────────────────────────
  ax('Rashed, your elder brother', 'sibling', ['corruption', 'contracts', 'rivalry'],
    sx("Between us — Rashed shows you a plan to build a dam. He says your cousins will get the money and no one will check if it's fair.",
      ['Sign it so your family gets the money.', 'Better our cousins eat than strangers.', 'The cash flows; the embankment is built thin. The haor will remember every monsoon.', { FI: 14, FA: 8, EN: -12, RE: -6 }],
      ['Stop the plan and make it fair for everyone.', "I will not drown villages to fatten Rashed.", 'He calls you a traitor to your blood and takes his network to a rival MP.', { FA: -14, FI: -8, EN: 10, GL: 4 }]),
    sx("Rashed says, quietly: The dam Rashed built broke, and water flooded many homes on live TV. Rashed tells you to blame the builders.",
      ['Pay a builder to take the blame.', 'A confession is cheaper than a reckoning.', 'A scapegoat is produced and jailed. The rivers keep the receipts, and so does Rashed.', { MI: 4, FA: 6, EN: -8, GL: -8 }],
      ['Do a real check and tell people it was Rashed\'s fault.', 'Let the water lead where it leads.', 'The inquiry reaches your brother. The family declares war; the drowned districts, for once, believe you.', { FA: -16, EN: 12, GL: 8, FI: -6 }]),
    sx("Hear me out — Rashed holds a computer drive and says he has proof of your secrets. He will tell everyone unless you give him a big promotion.",
      ['Give him the promotion and hide the proof.', 'A brother bought is a brother contained.', 'Rashed rises to your second chair — and stands one heartbeat from yours, holding your ruin in his pocket.', { MI: 6, FA: 8, GL: -8, EN: -4 }],
      ['Tell him you aren\'t scared and let him share it.', 'Burn us both, then. I am done being owned.', 'You refuse. The drive leaks; the storm is brutal — but you are no longer his hostage, and the country sees a man who chose truth over blood.', { GL: 6, EN: 8, FA: -14, FI: -8 }])),

  // ── Tania: daughter, scandal, then politician ───────────────────────────────
  ax('Tania, your daughter', 'child', ['scandal', 'press', 'succession'],
    sx("A police boss calls late at night. Tania was at a party where kids got sick from bad drugs, and her name is on the list. You can hide it before morning. What will you do?",
      ['Erase her name before people find out.', 'She is young and made a young mistake.', 'The record dissolves; a duty doctor is transferred to Rangamati. A debt now waits in your name.', { FA: 12, MI: -8, EN: -12 }],
      ['Leave her name on the list like the others.', 'If the law bends for us it breaks for the poor.', 'The talk shows call it integrity. Tania calls it betrayal and stops your calls. The polls climb.', { FA: -16, EN: 12, GL: 6 }]),
    sx("Listen to me — Tania wants to be the leader of the young group. She says she has a secret video and will show everyone if you don't make her the leader.",
      ['Let her be the leader.', 'Better her ambition harnessed than aimed at me.', 'She seizes the wing and remakes it in her image — loyal to her, watching the chair you sit in.', { FA: 6, MI: 6, EN: -4, GL: -4 }],
      ['Say no and let her tell the secret.', 'You will not blackmail your own father.', 'She is stunned that you called it. The footage stays buried, but a coldness enters her that does not leave.', { FA: -10, MI: 4, FI: 4 }]),
    sx("We need to talk. Tania wants to marry the son of your biggest enemy. She says it will fix the fight between your families and asks you to agree.",
      ['Say yes to the marriage to stop the fighting.', 'She offers a treaty; I am no fool.', 'Two houses bind in blood. Tania becomes a queen of both, loyal to whichever serves her best.', { MI: 8, GL: 4, FA: -4, FI: 4 }],
      ['Say no because you shouldn\'t trade your daughter like that.', 'You are not a clause, child.', 'She is almost insulted by the tenderness. The rival dynasty stays a dynasty — and an enemy.', { FA: 10, MI: -8, GL: -4 }])),

  // ── Begum Sufia: the matriarch, decline, and the trust ──────────────────────
  ax('Begum Sufia, your mother', 'matriarch', ['succession', 'loyalty', 'inheritance'],
    sx("Begum Sufia pulls you aside. At dinner, your mother says she changed the family rules. She says you only get the money if the family stays together.",
      ['Agree with your mother and bow down.', 'Blood sits above any office.', 'The family closes ranks behind you — at the price of every favour they will now call in.', { FA: 16, FI: -6, MI: -4 }],
      ['Remind her that you are the boss now.', 'The house serves the chair, Mother.', 'She sets down her spoon. The room goes cold. The throne is wholly yours; so is her enmity.', { FA: -16, MI: 10, FI: 6 }]),
    sx("Between us — The doctor tells you privately that your mother's brain is getting sick. She still controls all the family money and people listen to her.",
      ['Take control of the money now while keeping it a secret.', 'The house cannot drift while she fades.', 'You secure the estate before the decline shows — and your siblings smell the manoeuvre.', { FI: 8, FA: -10, MI: 6 }],
      ['Keep her secret safe and protect her feelings.', 'She gave me everything; she keeps her crown.', 'You guard her in silence. The cost is real: decisions delayed, rivals circling the vacuum.', { FA: 14, FI: -6, MI: -4 }]),
    sx("Begum Sufia says, quietly: Your mother is very sick in bed. She asks you to promise to take care of everyone, or she won't give you the money.",
      ['Promise her so you get all the money.', 'I will hold them together, Mother.', 'She names you and is gone by dawn. The family, bound by her last word, watches to see if you keep it.', { FA: 8, FI: 8, MI: 4 }],
      ['Tell her you can\'t promise something you aren\'t sure about.', 'I will not lie to a dying woman.', 'She dies without naming an heir. The trust enters probate; the siblings enter open war.', { FA: -8, FI: -6, MI: -6 }])),

  // ── The blackmail photographs ───────────────────────────────────────────────
  ax('An unsigned courier', 'shadow', ['blackmail', 'betrayal', 'security'],
    sx("Sir! You get a secret letter with photos of you meeting someone you shouldn't have. The letter says your sister wants a lot of money to give back the real photos.",
      ['Pay your sister so she gives you the photos.', 'Keep it in the blood, keep it buried.', 'She takes the money and the leverage both. You have taught your own family you can be squeezed.', { FA: -8, FI: -14, MI: 4 }],
      ['Tell the truth to everyone yourself.', 'A scandal you announce is one you survive.', "The press feeds for a week then tires. The opposition's bomb is a dud — but the wound is real.", { GL: -10, EN: -6, MI: 6, FA: -6 }]),
    sx("Mr. Prime Minister, sir! You paid your sister, but she comes back. She says she made copies of the photos and wants even more money now.",
      ['Pay her more money, even if you are angry.', 'One more time. Only once more.', 'The money vanishes and the threat does not. You are now a reliable income for your own blood.', { FI: -12, FA: -6, MI: -4 }],
      ['Stop paying her and get better security guards.', 'The well is closed. Do your worst.', 'You stop paying and brace for the leak. She hesitates — destroying you ends her income too. An ugly truce holds.', { MI: 8, FA: -8, FI: 6 }])),

  // ── Faisal & the garment factory ────────────────────────────────────────────
  ax('Faisal, your son-in-law', 'inlaw', ['garments', 'labour', 'safety'],
    sx("Hear me out — Faisal says his factory failed a fire safety test. He can pay a bad guy to ignore it, or shut down all the machines.",
      ['Pay the bad guy so the factory stays open.', 'The buyers do not wait and neither do wages.', 'The looms roar on. Next monsoon a stairwell jams, and the wound is permanent.', { FI: 10, FA: 4, EN: -14, GL: -6 }],
      ['Shut down the factory and fix the safety rules.', 'No Rana Plaza with our name on it.', 'You eat the loss and the layoffs. For once, labour leaders speak your name kindly.', { FI: -12, EN: 12, GL: 6, FA: -6 }]),
    sx("Buyers from far away want to see if your factories are safe. Faisal wants to trick them by only showing one fake safe floor. What will you do?",
      ['Show them the one fake safe floor.', 'Show them the Bangladesh they want to see.', 'The buyers leave reassured; the orders stay. The unshown floors stay exactly as deadly as before.', { FI: 8, GL: 6, EN: -10, FA: 4 }],
      ['Show them the real floors and ask for help to make them safe.', 'Let them see it, then let them fund it.', 'The honesty stuns them. Some buyers flee; others co-fund the retrofit. The workers notice who told the truth.', { GL: 8, EN: 10, FI: -10, FA: -4 }])),

  // ── Imran & the overseas wealth ─────────────────────────────────────────────
  ax('Imran, your son', 'child', ['money', 'overseas', 'laundering'],
    sx("Listen to me — Imran says people in Canada want to meet the real owner of his secret houses. He asks what to do.",
      ['Send a fake person to pretend to be the owner.', 'Theatre is cheaper than honesty.', 'The frontman performs — and now knows exactly which thread unravels your whole estate.', { FI: 6, FA: 4, GL: -8, MI: -4 }],
      ['Sell the houses and close the secret group.', 'I will not be hostage to a condo abroad.', 'You take the loss. Imran sulks; Nasrin, quietly, is relieved.', { FI: -12, FA: 6, GL: 8 }]),
    sx("We need to talk. The news shows that Imran hid millions of dollars in Canada. People are very angry, but he wants to come home to fix the papers.",
      ['Bring him home and hide him from reporters.', 'Out of sight, out of the headlines.', 'He vanishes from view; the silence reads as guilt. The story metastasises without his face on it.', { FA: 6, GL: -8, EN: -6, FI: -4 }],
      ["Give the hidden money back to the country publicly.", 'Turn the shame into a spectacle of penance.', 'The dramatic repatriation steadies the taka and the optics. Imran is humiliated; the treasury is not.', { FI: 10, GL: 6, FA: -8 }])),

  // ── Mizan & the student-wing violence ───────────────────────────────────────
  ax('Mizan, your nephew', 'sibling', ['campus', 'violence', 'party'],
    sx("Mizan pulls you aside. Mizan's school group hurt a rival student really badly. He asks you to protect him from the police.",
      ['Protect him so he can help you later.', 'A loyal mob is still loyalty.', 'The universities fall silent with fear — and so does every student who might have voted for you.', { MI: 10, FA: 6, EN: -14, GL: -6 }],
      ['Let the police arrest him.', 'A body is a body, even by my blood.', 'Mizan is charged. The family howls betrayal; the campuses, warily, exhale.', { FA: -14, EN: 10, GL: 6, MI: -6 }]),
    sx("Between us — People are protesting at the school because of the hurt student. They want Mizan's group to be banned completely.",
      ['Ban Mizan\'s student group.', 'Sacrifice the limb to save the body.', 'You dissolve your own machine. Mizan is finished; the streets calm; your party fixers seethe at the amputation.', { EN: 12, GL: 6, MI: -8, FA: -8 }],
      ['Stop the protesters using force instead.', 'No mob dictates terms to this chair.', 'The crackdown holds the campuses by force. The images travel the world; a generation marks your name.', { MI: 8, EN: -16, GL: -8, FA: 4 }])),

  // ── Standalone family beats (single-stage) ──────────────────────────────────
  ax('Hafiz, the household imam', 'cleric', ['religion', 'legitimacy'],
    sx("Your Excellency! The family priest asks for a big favor. If you say no, he will tell everyone your son drinks alcohol.",
      ['Do the favor for him in front of everyone.', 'Three seats are three seats.', 'The constituencies fall in line — and so do their demands on your courts and curriculum.', { MI: 8, FA: 6, EN: -8, GL: -6 }],
      ['Say no and keep the rules fair for all.', 'The mosque does not staff my cabinet.', "The imam's sermon turns cool. Whispers about your household reach the bazaars.", { FA: -6, EN: 6, GL: 6, MI: -8 }])),

  ax('Joya, your youngest', 'child', ['love', 'class', 'image'],
    sx("Joya says, quietly: Your youngest daughter wants to marry a poor driver's son. She says you can agree happily, or she will do it anyway and it will be in the news.",
      ["Agree and look like a nice person.", 'Let the nation see we marry its own.', 'The match becomes a parable of your humility. The old families sneer; the streets adore you.', { EN: 10, FA: 4, GL: 4, FI: -4 }],
      ['Say no to protect the family name.', 'Love is not a constituency, Joya.', 'She marries him anyway, in a registry office, and your name is absent from the only photo she keeps.', { FA: -16, MI: 4, EN: -8 }])),

  ax('Anwar, your father-in-law', 'inlaw', ['banking', 'finance'],
    sx("Hear me out — Your father-in-law's bank gave money to your own family's companies. He wants you to fire the bank boss, or your family will get in trouble.",
      ['Fire the bank boss and put your friend in charge.', 'A friendly regulator is a quiet bank.', 'The loans stay "standard" on paper. The market is not fooled and the taka softens.', { FA: 8, FI: 6, GL: -8 }],
      ['Let the bank boss do his job.', 'I will not break the central bank for a balance sheet.', "Anwar's bank takes the hit; the in-laws blame you for every crore. Markets trust you more.", { FA: -12, FI: -8, GL: 10 }])),

  ax('Belal, your driver of twenty years', 'servant', ['loyalty', 'people'],
    sx("Dear Sir — Your driver's son is very sick and needs a new body part. He is far behind in the waiting line and asks for your help.",
      ['Move his son to the front of the line.', 'This man kept me alive in the lean years.', 'The boy lives. Eight hundred families wait one place further back — and one of them is a journalist.', { FA: 6, EN: -6, MI: 4, GL: -4 }],
      ['Pay your own money for a doctor far away.', 'Help him without robbing the queue.', "Your own purse sends the boy to Chennai. Quiet, clean, expensive — and Belal's loyalty is now iron.", { FI: -8, FA: 8, EN: 4 }])),

  ax('Saima, your daughter-in-law', 'inlaw', ['dignity', 'abuse', 'press'],
    sx("Your son's wife has bruises. She says your son hit her and wants your help, or she will tell the news reporters. What will you do?",
      ['Help her and stop your son.', 'No name of mine excuses this.', 'You break with Imran publicly. The family fractures; the country, watching, respects you for it.', { FA: -12, EN: 12, GL: 8 }],
      ['Give her money to leave quietly.', 'A quiet, generous divorce.', 'She leaves with money and a sealed mouth. You have made your house safe and your conscience smaller.', { FI: -8, FA: 4, EN: -10, GL: -6 }])),

  ax('Karim, the cabinet secretary', 'official', ['nepotism', 'state'],
    sx("Honourable leader! Your helper says you are giving almost all the government jobs to your own family and friends.",
      ['Thank him, but change nothing.', 'Trust is thicker than merit.', 'Loyalists fill every desk — and not one will bring you bad news until it is a catastrophe.', { FA: 8, MI: 4, EN: -8, GL: -6 }],
      ['Give the next jobs to other people.', 'The state cannot be a family business.', 'The bureaucracy straightens its back. Your relatives, passed over, begin to murmur.', { FA: -10, EN: 8, GL: 6, FI: 4 }])),

  ax('Nasrin, your spouse', 'spouse', ['marriage', 'exit', 'love'],
    sx("Listen to me — Your wife packs her bags. She says she will only stay if you truly love her, not just because you need her help to look good.",
      ['Tell her you love her and ask her to stay.', 'Not the office. You. Only ever you.', 'Something worn rekindles. She unpacks. For the first time in years the house feels like a home, not a set.', { FA: 16, EN: 4 }],
      ['Let her leave nicely and make up a story.', 'If staying is a cage, I will not lock it.', 'She leaves gracefully; the press is fed "rest, retreat". The house is quieter, emptier, steadier.', { FA: -12, GL: -4, MI: 4 }])),

  ax('Bakar, the village headman', 'people', ['roots', 'patronage'],
    sx("Bakar, the village headman reports: Your village leader says a flood destroyed homes, and your cousin stole the help money.",
      ['Fire your cousin and give the help yourself.', 'The village made me; I will not let it drown.', 'The relief arrives; the village weeps your name. Your cousin’s branch turns cold.', { EN: 8, FA: -4, FI: -6, GL: 4 }],
      ['Let your cousin go fix his own mistake.', 'Keep the family in the loop, and the credit.', 'The cousin pockets half again. The village learns its son hears them only through a thief.', { FA: 6, EN: -10, MI: -4 }])),

  // ── Shafiq, the son-in-law's ambition ───────────────────────────────────────
  ax("Shafiq, your son-in-law", "fixer", ["in-law", "ambition", "power"],
    sx("A note from the Residence reads: Your daughter's husband wants a big job in the government. He is smart but greedy. Your daughter might be sad if you say no.",
      ["Give him the big job.", "Better an ambition I can watch up close.", "Shafiq is sworn in, delighted and dangerous. He serves ably and builds his own faction, and the family now has a second centre of gravity that is not your blood.", { FA: 4, MI: 2, EN: -4, GL: -4 }],
      ["Say no to him.", "A throne is not a wedding gift.", "You deny Shafiq the seat. Your daughter is wounded and the marriage tenses, but you have kept an outsider's ambition from rooting itself in the cabinet.", { GL: 2, MI: -2, FA: -6 }]),
    sx("Word from the Residence, sir — Your daughter's husband is making secret deals with your enemies. Your daughter is caught in the middle.",
      ["Face him and make him choose a side.", "A man in my family chooses my side or no side.", "You face Shafiq down and demand loyalty. He bends, humiliated, and your daughter resents the ultimatum, but the hedging stops and the line is drawn.", { FA: -4, MI: 4, GL: 2 }],
      ["Give him a bigger prize so he stays loyal.", "Ambition fed is ambition leashed.", "You hand Shafiq a lucrative portfolio to bind him close. He is loyal for now and richer for it, and you have taught the family that disloyalty is a negotiating tactic.", { FA: 6, FI: -4, EN: -4 }])),

  // ── Arif's wedding of the century ───────────────────────────────────────────
  ax("Arif, your grandson", "sibling", ["wedding", "excess", "optics"],
    sx("We need to talk. Your grandson wants a super expensive wedding, but the country is trying to save money. People would be angry to see it.",
      ["Let him have the giant party.", "A family celebrates as a family pleases.", "The wedding dazzles and the family glows. The footage of the excess goes viral against a backdrop of queues and price rises, and 'let them eat cake' attaches itself to your name.", { FA: 8, EN: -8, GL: -6 }],
      ["Tell him to have a small, simple wedding.", "I will not feast while the country fasts.", "You rein Arif in to a dignified wedding. The boy sulks and the family grumbles at your stinginess, but no viral video of dynastic excess hands your rivals their week.", { GL: 4, EN: 4, FA: -6 }])),

  // ── Kamal and the bank licence ──────────────────────────────────────────────
  ax("Kamal, your brother", "sibling", ["banking", "favour", "graft"],
    sx("Kamal pulls you aside. Your brother wants to open his own bank with your permission.",
      ["Let him open his bank.", "Blood should bank with blood.", "Kamal gets his licence and the family gains a private treasury. It funds the dynasty handsomely and becomes, in time, the very symbol of crony capture critics needed.", { FA: 8, FI: 4, EN: -8, GL: -6 }],
      ["Say no to your own brother.", "A family bank is a family scandal with a vault.", "You refuse Kamal. He is bitter and the family divided, but you have denied your enemies the cleanest possible proof that the state is your household's piggy bank.", { GL: 4, EN: 4, FA: -8 }])),

  // ── Imran's foreign citizenship ─────────────────────────────────────────────
  ax("Imran, your son", "sibling", ["citizenship", "exposure", "hypocrisy"],
    sx("Between us — Your son secretly became a citizen of another country. A reporter is about to tell everyone.",
      ["Stop the reporter from telling the story.", "A family's private papers are not the public's.", "You lean on the outlet and the story is spiked — for now. The suppression itself leaks, doubling the scandal, and your son's escape hatch becomes a national talking point anyway.", { MI: 2, FA: 4, EN: -8, GL: -8 }],
      ["Tell the truth first and make your son give it up.", "Better a confession on my terms than an exposé on theirs.", "You have Imran publicly renounce the foreign passport before the story runs. The hypocrisy stings briefly, but the contrition defuses it, and the journalist's scoop deflates.", { GL: 2, EN: 2, FA: -4 }])),

  // ── Roksana's land empire ───────────────────────────────────────────────────
  ax("Roksana, your sister-in-law", "sibling", ["land", "grabbing", "family"],
    sx("Roksana says, quietly: Your sister-in-law is taking land from poor people and using your name to hide. People are starting to complain.",
      ["Stop her and give the land back.", "Her greed will be carved on my tombstone.", "You force Roksana to disgorge the most egregious seizures. The family accuses you of siding with strangers against your own, but a swelling scandal is starved of its fuel.", { EN: 8, GL: 4, FA: -8 }],
      ["Protect her and ignore the complaints.", "I will not feed my brother's wife to the courts.", "You quash the petitions and protect Roksana's holdings. The family closes ranks gratefully, and the dispossessed learn the family name is a deed no court will challenge.", { FA: 8, MI: 2, EN: -10, GL: -4 }])),

  // ── Begum Sufia's memoir ────────────────────────────────────────────────────
  ax("Begum Sufia, the matriarch", "spouse", ["memoir", "legacy", "secrets"],
    sx("Hear me out — Your sick mother is writing a book about her life. She might accidentally share big family secrets.",
      ["Let the book be printed with all the secrets.", "Let the old woman have her truth.", "The memoir is published as dictated, secrets and all. It is a literary sensation and a political grenade, scattering revelations your enemies will mine for years.", { FA: 4, EN: 2, GL: -6, MI: -4 }],
      ["Change the book to hide the dangerous secrets.", "A memory is a weapon; I will hold this one.", "You have the explosive passages quietly excised. The matriarch's truth is dulled and she senses the betrayal, but the family's buried dead stay buried.", { MI: 4, FA: -4, GL: 2 }])),

  // ── Tania's NGO slush fund ──────────────────────────────────────────────────
  ax("Tania, your daughter", "sibling", ["ngo", "funds", "scandal"],
    sx("Your daughter's charity is actually hiding stolen money. Checkers are coming to look at the money, and she wants you to stop them. What will you do?",
      ["Make the checkers go away.", "I will not let my daughter's good name be soiled.", "You pull strings and the audit is deflected. Tania is grateful and the foundation's books stay sealed, but the suppressed audit is a time bomb in the hands of any future investigator.", { FA: 8, EN: -4, GL: -6 }],
      ["Let them check and clean up the charity.", "A charity that launders is a scandal that detonates.", "You let the audit run and force the foundation onto clean rails. Tania is furious and exposed to embarrassment, but a far worse reckoning is averted before it could ripen.", { GL: 6, EN: 4, FA: -8 }])),

  // ── The favourite versus the capable ────────────────────────────────────────
  ax("Begum Sufia, the matriarch", "spouse", ["succession", "children", "merit"],
    sx("Listen to me — Your mother wants you to pick your fun but silly child to be the next leader, instead of your smart but cold child.",
      ["Pick the fun child everyone likes.", "A dynasty runs on devotion, not spreadsheets.", "You bless the charismatic elder child as successor. The crowds adore the choice, the party despairs in private, and the dynasty's future rests on a smile and little else.", { FA: 8, EN: -4, GL: -4 }],
      ["Pick the smart child who works hard.", "Better a successor who can rule than one who can wave.", "You favour the competent younger child over the family's darling. The matriarch is wounded and the elder humiliated, but the dynasty gains a head that can actually govern.", { GL: 4, MI: 2, FA: -8 }])),

  // ── The leaked family audio ─────────────────────────────────────────────────
  ax("Hashem, your private secretary", "fixer", ["leak", "audio", "betrayal"],
    sx("Hashem, your private secretary: Someone shared a secret recording of you making fun of people.",
      ["Lie and say the recording is fake.", "What cannot be proven did not happen.", "You brand the audio a fabricated deepfake. The denial muddies the water for your base, but experts authenticate it, and the lie compounds the candour caught on tape.", { MI: 2, FA: 2, EN: -6, GL: -6 }],
      ["Tell the truth and say you were just joking.", "Yes, I speak bluntly behind closed doors. Who does not?", "You own the recording and recast it as refreshing candour. It is a gamble; some are scandalised, but the disarming honesty blunts the weapon better than any denial could.", { GL: 2, FA: -2, EN: 2 }])),

  // ── Treatment abroad for the matriarch ──────────────────────────────────────
  ax("Family Physician", "doctor", ["health", "matriarch", "optics"],
    sx("Sir, a message from the Residence: Your mother needs very expensive medicine far away, but poor people in your country cannot even get basic doctors.",
      ["Send her far away using the country's money.", "She gave her life to this country; it can give her this.", "The matriarch flies out for the best care money can buy. The family is relieved, and the contrast with the crumbling public wards she built her name on is noted, bitterly, at home.", { FA: 8, FI: -4, EN: -6 }],
      ["Keep her home and give the money to the poor hospitals.", "If our hospitals are not good enough for her, fix them.", "You keep her treatment at home and pour money into the ward instead. The family fears for her and resents the symbolism, but the gesture toward the public is real and seen.", { EN: 8, GL: 4, FA: -8, FI: -4 }])),

  // ── Standalone family beats ─────────────────────────────────────────────────
  ax("Quddus, the old bodyguard", "people", ["loyalty", "pension", "memory"],
    sx("Your old guard who saved your life is dying poor. He knows lots of your secrets. What are your orders, sir?",
      ["Give him lots of money and care for him openly.", "A man who bled for me will not die a beggar.", "You provide for Quddus and honour him publicly. The loyalty it signals to your guard is priceless, and his secrets stay safe behind a debt generously repaid.", { FA: 6, MI: 4, FI: -2 }],
      ["Send him a little money secretly and stay away.", "Gratitude is best paid in cash, not cameras.", "You send discreet support without the spotlight. Quddus is cared for and the secrets contained, but the old guard notes how quietly a hero was thanked.", { FA: 2, MI: -2, FI: -2 }])),

  ax("Nadia, your niece", "sibling", ["scandal", "youth", "media"],
    sx("We need to talk. Your niece got drunk and crashed her fast car into a poor man. There is a video of it. Your family wants to hide the video, but people online are angry.",
      ["Hide the video and pay the poor man secretly.", "A child's mistake should not end a life — hers.", "You make the case vanish and pay the puller's family for silence. Nadia walks free, the cover-up leaks, and the dynasty's impunity is the lesson everyone takes away.", { FA: 6, EN: -8, GL: -4 }],
      ["Let the police do their job.", "If my niece is above the law, so is my fall.", "You let Nadia face charges like anyone else. The family is aghast at the betrayal, but a stunned public sees, for once, the powerful answer for their wreckage.", { GL: 6, EN: 6, FA: -8 }])),

  ax("Faisal, your son", "sibling", ["business", "monopoly", "favour"],
    sx("Faisal pulls you aside. Your son Faisal wants to buy a big phone company. He says he needs it to keep things safe. Other people say your family is taking over everything.",
      ["Help Faisal get the phone company.", "Strategic assets belong with people I trust.", "Faisal wins the licence and the family's empire grows another limb. The convenience is enormous and so is the proof, for critics, that no sector is safe from the dynasty's reach.", { FA: 8, FI: 4, EN: -6, GL: -6 }],
      ["Let everyone play fair and don't help him.", "My son can win on merit or not at all.", "You stay out and let the licence go to open bidding. Faisal loses and fumes, but the telecom sector is spared becoming one more wing of the family business.", { GL: 6, EN: 4, FA: -8 }])),

  ax("The Palace Chief of Staff", "official", ["household", "budget", "excess"],
    sx("The Palace Chief of Staff awaits your word. It costs way too much money to run your big house. People would be angry if they knew.",
      ["Spend less money on the house.", "A leaner house is a harder target.", "You cut the residence's bloated costs. The family chafes at the downgrade, but you have removed a scandal-in-waiting and can point to your own belt tightening.", { GL: 4, EN: 4, FA: -6, FI: 2 }],
      ["Hide the costs so no one finds out.", "The house must reflect the office's dignity.", "You keep the lavishness and bury it across obscure budget lines. The comfort continues, and the day an auditor untangles it, the dynasty's appetite becomes front-page arithmetic.", { FA: 6, FI: -2, EN: -6, GL: -2 }])),

  ax("Begum Sufia, the matriarch", "spouse", ["mausoleum", "legacy", "cult"],
    sx("Between us — Your sick mother wants a giant, expensive building built for her when she dies. The country would have to pay for it forever.",
      ["Build the giant building for her.", "A dynasty unremembered is a dynasty undone.", "You commission the marble and endow the foundation. The matriarch is at peace and the cult is set in stone, and the treasury and the school calendar bend forever to the family's memory.", { FA: 8, FI: -4, EN: -6, GL: -4 }],
      ["Promise her a small, quiet grave instead.", "Let our works be the monument, not the marble.", "You gently refuse the grand scheme for something private and small. The matriarch is disappointed and the family stung, but the state is not conscripted into worshipping your bloodline.", { GL: 4, EN: 2, FA: -6 }])),

  ax("Imran, your son", "sibling", ["addiction", "rehab", "secret"],
    sx("Imran says, quietly: Your son Imran took too many bad drugs and got very sick. Your family hid him in a secret hospital. Some say he needs real help where everyone can see.",
      ["Keep it a secret and help him quietly.", "My son's weakness is not the nation's business.", "You bury the overdose and manage Imran behind closed doors. The secret holds precariously, and the strain of hiding a deteriorating son begins to warp the family from within.", { FA: 4, EN: -2, MI: -2 }],
      ["Get him real help, even if people find out.", "I would rather a living son than a hidden one.", "You put Imran into genuine, sustained treatment, knowing it cannot stay wholly secret. The whispers come, but handled with candour they soften, and your son has a chance to live.", { FA: -2, EN: 4, GL: 2 }])),

  ax("Shahana, the estranged sister", "sibling", ["family", "feud", "threat"],
    sx("Hear me out — Your sister, who you don't talk to, comes back. She wrote a book about all the bad things your family did. She will print it unless you pay her and act like friends.",
      ["Act like friends and pay her.", "Better a sister at the table than at the microphone.", "You make peace with Shahana and fold her back into the fold. The manuscript is shelved and the secrets contained, but an old enemy now sits inside the family's councils again.", { FA: 4, FI: -4, MI: 2 }],
      ["Tell her no and let her print the book.", "I will not be ransomed by my own sister.", "You refuse to pay and dare her to publish. She may yet detonate the family's secrets, but you have signalled that blood is not a blank cheque, and the next blackmailer takes note.", { MI: 4, FA: -6, GL: -2 }])),

  ax("Rashed, the fixer-cousin", "fixer", ["contracts", "kickbacks", "exposure"],
    sx("Sir! Your cousin Rashed, who helps the family make secret deals, is in trouble with the police in another country. He wants you to protect him.",
      ["Protect Rashed no matter what.", "He carried our secrets; I will carry him.", "You shield Rashed with every lever you have. The machine stays hidden for now, but you have tied your fate openly to a man under foreign indictment, and the knot will only tighten.", { FA: 6, MI: 2, EN: -6, GL: -8 }],
      ["Stop helping Rashed to save your family's name.", "One cousin is a cheaper loss than the whole house.", "You sever ties with Rashed and let him face the music alone. He is dangerous now, knowing all he knows, but the family's machine is given distance from a man going down.", { GL: 4, FA: -8, MI: -2 }])),

  ax("Nasrin, your spouse", "spouse", ["spouse", "politics", "ambition"],
    sx("Your wife Nasrin wants a big government job of her own. This would make her very powerful too. What will you do?",
      ["Give Nasrin a real government job.", "She has earned a stage of her own.", "Nasrin steps into public life and shines, to the women's wing's delight. She is fulfilled and formidable, and the household now contains a politician who is also the one who knows you best.", { FA: 6, EN: 4, GL: 2, MI: -2 }],
      ["Tell her to stay as just your helper.", "One throne in a marriage is enough.", "You gently keep Nasrin offstage. She accepts it with a cooling smile, the marriage quietly diminished, and an asset and an ally is left underused beside you.", { MI: 2, FA: -8 }])),

  ax("The Dynasty's Pollster", "official", ["image", "family", "strategy"],
    sx("Mr. Prime Minister, sir! A helper tells you that young people do not like your family anymore. They think your family acts spoiled. He says you need to change how you look, which costs money.",
      ["Pay money to change how your family looks.", "A legend that stops evolving becomes a joke.", "You invest in modernising the family's image and message. It is expensive and the old guard hates the changes, but the dynasty starts, haltingly, to speak to a generation that owes it nothing.", { GL: 4, EN: 4, FA: 2, FI: -4 }],
      ["Ignore him and believe people still like you.", "Our name has carried us for fifty years.", "You wave the warning away and trust the founding myth. The halo keeps dimming unattended, and the distance between the dynasty and the young it rules quietly widens.", { FA: 4, EN: -4, GL: -4 }])),

  ax("Arif, your grandson", "sibling", ["succession", "youth", "abroad"],
    sx("Listen to me — Your grandson Arif is supposed to be the leader one day, but he doesn't want to. He wants to live far away and be normal.",
      ["Let Arif go live his own normal life.", "A throne forced on a boy breaks them both.", "You release Arif from the dynasty's expectations. He leaves grateful and whole, and the succession is left a generation thinner, with no obvious blood to carry the name forward.", { EN: 4, GL: 2, FA: -8 }],
      ["Force Arif to stay and be the leader.", "The dynasty is not a choice; it is a birthright and a debt.", "You bind Arif to his inheritance against his will. The line of succession holds, but you have made an heir of a hostage, and resentment now sits at the heart of the family's future.", { FA: 8, MI: 2, EN: -6 }])),

  // ── The second family ───────────────────────────────────────────────────────
  ax("Karim, your private secretary", "fixer", ["secret", "scandal", "family"],
    sx("Your Excellency! Your helper brings proof that you have a secret second family. The newspapers might tell everyone soon.",
      ["Tell everyone the truth and take care of them openly.", "I will not deny my own blood to save my face.", "You acknowledge and provide for them, weathering the storm. Nasrin is wounded and the press feasts for a week, but the truth, owned, loses its power to be wielded against you.", { FA: -6, GL: 2, EN: 2 }],
      ["Pay the newspapers to keep it a secret.", "Some doors must stay closed for the house to stand.", "You buy silence and hide them deeper. The secret holds, precariously, and you have handed anyone who learns it a permanent lever over you, and a child grows up a deniable shadow.", { FA: 4, MI: 2, EN: -4, GL: -2 }])),

  // ── The matriarch's faith healer ────────────────────────────────────────────
  ax("The Palace Physician", "doctor", ["matriarch", "superstition", "health"],
    sx("Dear Sir — Your sick mother is listening to a magic healer instead of her real doctor. She is getting much sicker.",
      ["Make the magic healer leave and give her real medicine.", "I will not let a charlatan kill my mother.", "You banish the healer and restore her medicine, over her protests. She rallies physically and resents the betrayal, and the family whispers that you defied her sacred wishes.", { FA: -2, EN: 4, GL: 2 }],
      ["Let her do what she wants with the magic healer.", "A dying woman's belief is hers to keep.", "You let the matriarch keep her healer and her amulets. The family is spared the confrontation, and she declines faster than she need have, her treatable ailment left to the charlatan's charms.", { FA: 4, EN: -6 }])),

  // ── The wayward heir online ─────────────────────────────────────────────────
  ax("The Dynasty's Media Manager", "fixer", ["heir", "social-media", "image"],
    sx("Honourable leader! The person who will be leader after you is posting pictures of expensive things online and making fun of poor people.",
      ["Take away their phone and delete the pictures.", "An heir who cannot govern a phone cannot govern a country.", "You take control of the accounts and rein the heir in. The reckless posts vanish and the damage stops, and the humiliated heir nurses a sullen grudge against the leash.", { FA: -2, GL: 2, EN: 2 }],
      ["Let them keep posting whatever they want.", "I will not muzzle my own child.", "You leave the heir to post as they please. The family's indulgence shows in every flaunted holiday and sneer at the poor, and the dynasty's image curdles a little further with each upload.", { FA: 2, EN: -6, GL: -4 }])),

  // ── Nasrin's jealousy of an aide ────────────────────────────────────────────
  ax("Nasrin, your spouse", "spouse", ["marriage", "trust", "aide"],
    sx("We need to talk. Your wife Nasrin is angry and wants you to fire your best helper. She thinks you like the helper too much.",
      ["Fire the helper to keep your wife happy.", "No staffer is worth my wife's trust.", "You let the indispensable aide go. Nasrin softens and the household steadies, and your office loses its sharpest mind to a suspicion you could not dispel.", { FA: 8, EN: -2, GL: -2 }],
      ["Keep the helper and tell your wife not to worry.", "I will not sacrifice competence to jealousy.", "You keep the aide and try to reassure Nasrin. The office keeps its best mind, and a cold front settles over the marriage that no reassurance quite melts.", { FA: -6, GL: 2, MI: 2 }])),

  // ── The cousin's TV channel ─────────────────────────────────────────────────
  ax("Jalal, your cousin", "fixer", ["media", "family", "propaganda"],
    sx("Jalal, your cousin reports: Your cousin Jalal wants the government to pay for his own TV station. He will use it to say good things about your family.",
      ["Give Jalal the TV station and the money.", "A friendly screen in the family is worth its price.", "Jalal gets his channel and his state ad revenue. It sings your praises nightly, and it becomes a byword for the family's capture of the airwaves and the public purse alike.", { FA: 6, MI: 2, EN: -4, GL: -4 }],
      ["Say no to the family TV station.", "I will not fund a cousin's vanity with the people's money.", "You deny Jalal his channel. He sulks and the family grumbles at the snub, but you spare yourself a scandal of a state-funded dynastic mouthpiece.", { GL: 4, EN: 2, FA: -6 }])),

  // ── The grandchild's foreign wedding alliance ───────────────────────────────
  ax("Begum Sufia, the matriarch", "spouse", ["marriage", "alliance", "dynasty"],
    sx("Begum Sufia pulls you aside. Your mother set up a marriage for your grandchild with another powerful family. Your grandchild doesn't know them.",
      ["Say yes to the marriage to make the families stronger together.", "Two houses joined are a fortress doubled.", "You bless the match and the alliance is sealed. The family's reach and vote bank swell, and your grandchild is wed to strategy, a person traded for a partnership.", { FA: 6, MI: 4, EN: -4 }],
      ["Let your grandchild pick who they want to marry.", "A marriage is a life, not a merger.", "You refuse to trade your grandchild into an alliance. The matriarch is furious and the strategic match is lost, but your grandchild keeps the right to a life of their own choosing.", { EN: 4, GL: 2, FA: -6 }])),

  // ── The leader's mortality ──────────────────────────────────────────────────
  ax("The Palace Physician", "doctor", ["health", "mortality", "succession"],
    sx("A note from the Residence reads: Your doctor says your heart is sick and you don't have many years left to live. Being the boss makes it worse.",
      ["Step down slowly and let someone else be boss.", "A reign that ruins the man it crowns is a poor reign.", "You begin easing your grip and grooming a successor on your own terms. Your authority wanes the moment the change shows, but the dynasty gains a real chance of surviving you, and you a few more years.", { FA: 4, GL: 2, EN: 2, MI: -4 }],
      ["Stay the boss until the very end.", "I will rule until the last beat, not fade into a managed dusk.", "You grip the wheel and let the office consume you. Your authority stays total and undimmed, and the succession stays a vacuum the family will fight over the moment your failing heart gives out.", { MI: 4, FA: 2, EN: -4 }])),

  // ── The relative's manslaughter ─────────────────────────────────────────────
  ax("Karim, your private secretary", "fixer", ["scandal", "justice", "family"],
    sx("Word from the Residence, sir — A young family member drove drunk and killed someone walking. Your helper can make the police report disappear.",
      ["Let the police arrest your family member.", "A life taken is a life answered for, kin or not.", "You let the case proceed and your relative faces justice. The family is aghast at the betrayal, but a stunned public sees, for once, that the dynasty's blood does not buy immunity from a death.", { GL: 6, EN: 6, FA: -8 }],
      ["Make the police report go away.", "I will not feed my own to the courts over an accident.", "You bury the case and pay the dead pedestrian's family for silence. Your relative walks free, the cover-up seeps out, and the impunity of the family's blood is stamped a little deeper into the public's mind.", { FA: 6, EN: -8, GL: -4 }])),

  // ── The son's gambling debts ────────────────────────────────────────────────
  ax("Imran, your son", "sibling", ["gambling", "debt", "blackmail"],
    sx("Between us — Your son Imran played games for money and lost a lot to bad people. They will tell the news if you don't pay his debt.",
      ["Pay the bad guys to keep it quiet.", "I will not let loan sharks own a piece of my son.", "You quietly settle the debts and pull Imran home. The leverage is bought off for now, and you have taught your son that the family's purse will always cover his recklessness.", { FA: 4, FI: -4, EN: -2 }],
      ["Refuse to pay and make him face his mistake.", "A debt forgiven is a lesson unlearned.", "You refuse to bail Imran out and let him face the consequences. He is humiliated and exposed to danger and scandal, but the bottomless family rescue ends, and so perhaps the recklessness.", { FA: -4, GL: 2, EN: 2 }])),

  // ── The matriarch in the cabinet ────────────────────────────────────────────
  ax("Begum Sufia, the matriarch", "spouse", ["interference", "cabinet", "power"],
    sx("Begum Sufia says, quietly: Your mother is acting like she is the boss of the country, telling your helpers what to do. Your helpers are very mad.",
      ["Tell your mother to stop acting like the boss.", "There is one government in this house, and it is mine.", "You firmly but gently end her shadow rule. The cabinet exhales and governance steadies, and the matriarch, wounded and sidelined, turns cold toward the child who clipped her wings.", { GL: 4, EN: 2, MI: 2, FA: -8 }],
      ["Let your mother keep telling them what to do.", "She built this house; let her move within it.", "You let the matriarch keep her shadow government. The family hierarchy is honoured, and your ministers learn to serve two masters, governance muddled by a second, unelected centre of power.", { FA: 8, GL: -4, EN: -4 }])),

  // ── The estranged child returns ─────────────────────────────────────────────
  ax("Tania, your daughter", "sibling", ["reconciliation", "estrangement", "family"],
    sx("Hear me out — Your daughter Tania, who you fought with long ago, comes back. She wants to be friends again and help the family.",
      ["Be friends and welcome her back.", "A door closed in anger can still be opened in love.", "You make peace with Tania and bring her home. The family is made warmer and more whole, and an old wound, tended at last, begins to heal.", { FA: 12, EN: 2 }],
      ["Stay mad and keep her away.", "Some breaks do not mend, and pretending they do breaks worse.", "You keep your distance from Tania. The old grievance stays unhealed, the family stays fractured, and the chair she might have filled stays empty and accusing.", { FA: -8, MI: 2, EN: -2 }])),

  // ── The biographer ──────────────────────────────────────────────────────────
  ax("The Official Biographer", "official", ["legacy", "history", "truth"],
    sx("The Official Biographer: A writer is making a book about you. They found out bad things you did as well as good things. They ask if they should write the total truth or just the good parts.",
      ["Tell them to write the total truth.", "A legacy that cannot bear the truth was never solid.", "You let the biographer write honestly. The hard truths sting and the family protests the warts, but the resulting history carries the weight and credibility that no hagiography ever could.", { GL: 4, EN: 2, FA: -4 }],
      ["Tell them to only write good things.", "Let history remember the triumphs, not the stumbles.", "You order the flattering version. The official history glows, and everyone who lived through the rule knows it for the airbrushed propaganda it is, and trusts it accordingly.", { FA: 4, GL: -4, EN: -2 }])),

  // ── The family's frozen foreign assets ──────────────────────────────────────
  ax("Karim, your private secretary", "ambassador", ["assets", "foreign", "exposure"],
    sx("Sir, a message from the Residence: Another country's police locked your family's secret bank accounts because they think the money is stolen.",
      ["Let them keep the money so they don't look closer.", "Better to lose the money than to map the trail.", "You abandon the frozen assets rather than fight and expose the web. The wealth is lost, but the paper trail back to the family is not paraded through a foreign court for the world to read.", { FA: -2, FI: -4, GL: 2 }],
      ["Fight them in court to get the money back.", "I will not surrender what is ours to a foreign whim.", "You fight publicly through lawyers to reclaim the assets. The case drags the family's overseas wealth and its murky origins into open court, a slow-motion exposé of how the fortune was made.", { FA: 4, FI: 2, GL: -6, EN: -2 }])),

  // ── The cook who saw too much ───────────────────────────────────────────────
  ax("The Household Steward", "people", ["servant", "loyalty", "secret"],
    sx("An old helper who knows all your family secrets is leaving. Someone offered them a lot of money to tell the secrets. They ask you for money instead. What are your orders, sir?",
      ["Give the helper a lot of money.", "Loyalty repaid is loyalty kept.", "You pension the old servant handsomely and with warmth. The secrets stay safe behind a debt of gratitude generously honoured, and the household's other staff see how loyalty is rewarded.", { FA: 6, FI: -2 }],
      ["Scare them so they stay quiet.", "A servant who talks is a servant who is dealt with.", "You menace the servant into signing away their story. The tell-all is killed, and decades of loyalty curdle into fear and a grievance that may yet find another, angrier outlet.", { MI: 2, FA: -4, EN: -2 }])),

  // ── The relative's safe-seat demand ─────────────────────────────────────────
  ax("Faisal, your son", "sibling", ["nepotism", "seat", "politics"],
    sx("Your son Faisal wants to be a leader without doing any hard work first. The people who worked hard will be mad. What will you do?",
      ["Give Faisal the leader job easily.", "An heir must begin somewhere.", "You parachute Faisal into the safe seat. The family is pleased, and the grassroots workers who earned their place watch an unearned son leapfrog them, and the resentment festers in the ward.", { FA: 6, MI: 2, EN: -6 }],
      ["Make Faisal work hard to earn the job.", "A seat handed to the unproven rots the party beneath it.", "You refuse Faisal the parachute and tell him to earn it. He fumes and the family mutters about cold parenting, but the grassroots see that even the leader's son must climb the ladder like anyone.", { GL: 4, EN: 4, FA: -6 }])),

  // ── The dynasty's private guards ────────────────────────────────────────────
  ax("Mizan, the security chief", "shadow", ["guards", "militia", "family"],
    sx("Mizan, the security chief awaits your word. Mizan wants to make a giant private army just for your family.",
      ["Build the private army to keep your family super safe.", "A family this exposed needs guns it can trust absolutely.", "You build the private security force. The family is made untouchable, and a praetorian guard loyal to your blood alone now sits at the heart of the state, a coup-in-waiting or a shield, depending on the day.", { FA: 6, MI: 4, EN: -6, GL: -4 }],
      ["Say no and just use the country's normal police.", "A private army is a dynasty's first step to its own coup.", "You keep the family's protection within the regular forces' chain of command. The family is a little more exposed, but no private army festers at the state's heart to one day turn on its master.", { GL: 4, MI: -2, FA: -4 }])),

  // ── The activist grandchild ─────────────────────────────────────────────────
  ax("Arif, your grandson", "sibling", ["activism", "dissent", "family"],
    sx("Listen to me — Your grandson Arif is yelling at your government in public. He says you are doing bad things. Your friends want you to stop him.",
      ["Let Arif keep yelling.", "A grandchild with a conscience is not a traitor.", "You let Arif speak, weathering the embarrassment. The opposition makes hay and the hardliners fume, but the family is seen to contain an honest voice, and it humanises a dynasty grown remote.", { GL: 4, EN: 4, FA: -4 }],
      ["Stop him or kick him out of the family.", "Dissent under my own roof is a wound I cannot show.", "You move to silence Arif and, failing that, distance the family from him. The embarrassment is contained, and a young idealist learns that the family prizes its image over his conscience, and the rift hardens.", { FA: 4, MI: 2, EN: -4, GL: -4 }])),

  // ── The family astrologer ───────────────────────────────────────────────────
  ax("The Court Astrologer", "shadow", ["superstition", "decisions", "influence"],
    sx("Sir! A magic star-reader tells your mother when to make big government choices. The smart people are very mad about this.",
      ["Listen to the magic star-reader.", "It costs little to keep the stars and the matriarch content.", "You let the astrologer's readings shape the calendar. The matriarch is pleased and the family soothed, and your government's decisions come, embarrassingly, to be timed by the heavens, to the rationalists' despair.", { FA: 4, GL: -4, EN: -2 }],
      ["Tell the star-reader to go away.", "A nation will not be governed by horoscopes.", "You bar the astrologer from matters of state. The matriarch is wounded and the family unsettled, but government decisions are once again made by reason rather than the alignment of the stars.", { GL: 4, EN: 2, FA: -6 }])),

  // ── The ancestral home dispute ──────────────────────────────────────────────
  ax("Kamal, your brother", "sibling", ["inheritance", "property", "feud"],
    sx("We need to talk. Your brother Kamal is suing you for the family house. If he goes to court, everyone will hear family secrets. He will stop if you give him what he wants privately.",
      ["Give him what he wants privately.", "A family quarrel aired in court is a gift to my enemies.", "You swallow the unfair terms to keep the feud private. Kamal gets his lion's share and you keep the dirty laundry out of court, at the cost of a rankling injustice within the family.", { FA: 2, FI: -2, EN: -2 }],
      ["Say no and fight him in court.", "I will not be extorted out of my birthright by my own brother.", "You refuse Kamal and let the suit proceed. The family's wealth and feuds are aired before the nation, but you do not surrender your birthright to a brother's greed.", { FA: -4, GL: -2, EN: -2 }])),

  // ── The spouse's charity empire ─────────────────────────────────────────────
  ax("Nasrin, your spouse", "spouse", ["charity", "foundation", "scrutiny"],
    sx("Nasrin pulls you aside. People think your wife Nasrin is stealing money from her charity. Checkers are coming. She cries and asks you to stop the checkers.",
      ["Let the checkers do their job honestly.", "A charity that cannot bear an audit is not a charity.", "You let the audit run its course. Nasrin is hurt and some embarrassment surfaces, but her foundation emerges either cleared or cleaned, and its good name rests on truth rather than your protection.", { GL: 4, EN: 2, FA: -4 }],
      ["Stop the checkers to protect Nasrin.", "I will not let my wife's life's work be soiled.", "You make the audit disappear to protect Nasrin. She is grateful and her pride intact, and the unexamined foundation becomes one more shielded family vehicle, a scandal deferred and compounding.", { FA: 6, EN: -4, GL: -4 }])),

  // ── The cousin who lost an election ─────────────────────────────────────────
  ax("Jalal, your cousin", "fixer", ["election", "loss", "consolation"],
    sx("Mr. Prime Minister, sir! Your cousin Jalal lost his big election. Now he is sad and demands a big government job anyway to feel better.",
      ["Give Jalal a big job to make him feel better.", "A defeated cousin cannot be left with nothing.", "You hand Jalal a plum sinecure. The family's appearances are preserved, and a man the voters rejected is rewarded with high office anyway, to the merit-minded's disgust.", { FA: 6, EN: -4, GL: -2 }],
      ["Tell Jalal he lost and gets nothing.", "The voters spoke; I will not overrule them with a sinecure.", "You decline to reward Jalal's defeat. He sulks and the family grumbles, but you signal that the people's verdict means something even within the dynasty.", { GL: 4, EN: 4, FA: -6 }])),

  // ── The leader's private diary ──────────────────────────────────────────────
  ax("Karim, your private secretary", "fixer", ["diary", "secrets", "legacy"],
    sx("Your Excellency! Someone stole a page from your secret diary where you wrote mean things about people.",
      ["Hunt down the thief and punish them.", "A stolen confidence is a wound that must be cauterised.", "You launch a ruthless hunt for the leaker. The household is gripped by fear and suspicion, and the hunt itself signals there is much in the diary worth stealing, drawing more interest, not less.", { MI: 2, FA: -2, EN: -2, GL: -2 }],
      ["Print a nice, clean version of the diary yourself to trick people.", "Better I tell my story than have it told for me.", "You pre-empt the leak by publishing a curated memoir. You shape the narrative on your own terms, and the stolen pages lose their value beside the version you chose to tell.", { GL: 4, FA: 2, EN: 2 }])),

  // ── The dynasty's anniversary cult ──────────────────────────────────────────
  ax("The Culture Secretary", "official", ["cult", "anniversary", "legacy"],
    sx("Dear Sir — Someone wants to throw a giant, expensive party for your family's history, making everyone celebrate it.",
      ["Throw the giant party.", "A founding remembered is a movement renewed.", "You decree the spectacle, the holiday, and the portraits. The reverence is total and enforced, and the cult around your bloodline deepens into something the schoolchildren will recite by rote and the critics will name a personality cult.", { FA: 8, MI: 2, EN: -6, GL: -4 }],
      ["Have a small, quiet party instead.", "A dynasty secure in itself need not command worship.", "You keep the anniversary a dignified, modest affair. The family's mythmakers are disappointed at the restraint, but the state is spared a day of compelled reverence to your bloodline.", { GL: 4, EN: 2, FA: -6 }])),

  // ── The child's hidden depression ───────────────────────────────────────────
  ax("The Palace Physician", "doctor", ["children", "mental-health", "secret"],
    sx("Honourable leader! The doctor says your youngest child is very, very sad inside. Your family thinks being sad is a weakness.",
      ["Get your child real help openly.", "My child's mind matters more than the family's face.", "You arrange genuine treatment and ease the public burden on your youngest, shame be damned. The family whispers, but your child begins, slowly, to heal, and learns the name is not a cage they must suffer in silence.", { FA: 4, EN: 4, GL: 2 }],
      ["Hide it and try to fix it secretly.", "A weakness seen is a weakness exploited.", "You hide the depression and manage it behind closed doors. The family's face is preserved, and your youngest carries their darkness alone, untreated, beneath the smiling public mask the dynasty demands.", { FA: 2, EN: -4 }])),

  // ── The matriarch's death and the will ──────────────────────────────────────
  ax("The Family Lawyer", "official", ["matriarch", "death", "succession"],
    sx("The Family Lawyer reports: Your mother died and her will gives all the money to one favorite child, leaving the others with nothing. They will fight over it.",
      ["Follow the will exactly as it says.", "A mother's last word is not for me to edit.", "You execute the will as written, favourite and slights and all. The matriarch's wishes are honoured, and the slighted siblings nurse a burning grievance that festers into the succession war she half-designed.", { FA: 2, MI: 2, EN: -2 }],
      ["Fix the will so everyone gets a fair share.", "A will that breeds a war serves no one's memory.", "You quietly renegotiate an even division among the siblings. The matriarch's exact wishes are bent, but the family holds together and the succession war her will would have lit is smothered before it sparks.", { FA: 6, EN: 2 }])),

  // ── The relative's smuggling ring ───────────────────────────────────────────
  ax("Karim, your private secretary", "shadow", ["smuggling", "family", "scandal"],
    sx("A note from the Residence reads: A family member is secretly stealing gold, and the police are getting close to catching them.",
      ["Stop the stealing and let the family member get in trouble.", "A smuggler in the family is a scandal with my name on it.", "You shut the ring and let the relative face the investigators. The family accuses you of feeding your own to the wolves, but a ticking scandal is defused before it could detonate under the dynasty.", { GL: 4, EN: 4, FA: -6 }],
      ["Stop the police from looking.", "I do not hand my blood to customs men.", "You bury the investigation and shield the relative. The smuggling continues under the family's cover, and you have tied the dynasty's name openly to a racket that one leak could blow wide open.", { FA: 6, FI: 2, EN: -6, GL: -4 }])),

  // ── The daughter's divorce ──────────────────────────────────────────────────
  ax("Tania, your daughter", "sibling", ["divorce", "scandal", "family"],
    sx("Between us — Your daughter Tania wants to leave her mean husband. His family is powerful, and everyone will gossip. She wants your help.",
      ["Help Tania leave her mean husband.", "No child of mine stays in a cage for my image.", "You back Tania publicly and weather the scandal and the in-laws' fury. The conservatives tut and a feud opens, but your daughter is freed from an abusive marriage and knows her father chose her over appearances.", { FA: 6, EN: 4, GL: -2 }],
      ["Tell her to stay married so people don't gossip.", "A divorce in the family is a wound the public will not forget.", "You pressure Tania to stay for the family's image. The scandal is avoided and the powerful in-laws appeased, and your daughter remains trapped with an abuser, learning her suffering counts for less than the dynasty's face.", { FA: -2, MI: 2, EN: -6 }])),

  // ── The aide's overreach ────────────────────────────────────────────────────
  ax("Karim, your private secretary", "fixer", ["aide", "overreach", "power"],
    sx("Word from the Residence, sir — Your best helper is making big choices without asking you and keeping money for himself. People are scared of him.",
      ["Fire the helper for taking too much power.", "No hand of mine signs my name without my leave.", "You strip the aide of his shadow authority and his cuts. You lose a formidable right hand and the convenience he provided, but the ministers answer to you again rather than to a courtier trading on your name.", { FA: 2, GL: 2, MI: 2, EN: 2 }],
      ["Let the helper keep his secret power.", "He gets things done; do not break what works.", "You leave the aide his unchecked authority. The machine runs smoothly on his energy, and a courtier accountable to no one grows ever larger, trading on your name and skimming as he pleases.", { FA: -2, MI: -2, EN: -4 }])),

  // ── The heir's reluctant grooming ───────────────────────────────────────────
  ax("The Dynasty's Mentor", "official", ["heir", "grooming", "succession"],
    sx("The Dynasty's Mentor: The teacher says the child you picked to be the next leader is not smart enough and people don't like them.",
      ["Keep pushing your chosen child to lead.", "A succession reopened is a succession war declared.", "You push the unready heir forward regardless. The family's plan holds and the war is deferred, and the country is set to inherit a leader the party does not trust and the heir cannot become.", { FA: 6, EN: -4, GL: -2 }],
      ["Pick a smarter person to lead instead.", "A throne is not a prize for the unready, even of my blood.", "You face the family and reopen the question to abler candidates. The chosen heir is wounded and the family thrown into turmoil, but the dynasty's future is no longer staked on someone unfit to carry it.", { GL: 4, MI: 2, EN: 2, FA: -8 }])),

  // ── The relative's defection threat ─────────────────────────────────────────
  ax("Kamal, your brother", "sibling", ["defection", "rival", "loyalty"],
    sx("Kamal says, quietly: Your brother Kamal is angry and says he will join the bad guys and tell your secrets unless you pay him lots of money.",
      ["Pay Kamal what he wants so he stays.", "A brother in the opposition is a knife I gave them.", "You meet Kamal's price and bind him close again. The split is averted and the secrets contained, and you have taught your own family that the surest way to riches is to threaten betrayal.", { FA: 2, FI: -2, MI: 2, EN: -4 }],
      ["Let Kamal leave.", "I will not be blackmailed by my own brother.", "You refuse Kamal's terms and let him go. He defects, splitting the family and arming your enemies with his secrets, but you do not reward extortion, and the rest of the family learns where the line is.", { MI: -2, FA: -6, EN: 2 }])),

  // ── The family's university ─────────────────────────────────────────────────
  ax("Roksana, your sister-in-law", "fixer", ["university", "family", "patronage"],
    sx("Sir, a message from the Residence: Your sister-in-law Roksana is selling fake school grades for money. People are getting mad. She wants you to protect her.",
      ["Protect Roksana's bad school.", "A family institution is not lightly disowned.", "You protect Roksana and her degree-selling fief. The family institution stays in family hands, and its rotten accreditation and sold degrees become a brewing scandal with the dynasty's name stamped on it.", { FA: 6, FI: 2, EN: -6, GL: -4 }],
      ["Make her clean up the school and stop cheating.", "A degree sold in my name dishonours every honest graduate.", "You force Roksana to clean up the university or lose your shield. She rages at the betrayal, but the sold degrees and crony faculty are purged, and the institution stops being a scandal waiting to break.", { GL: 4, EN: 4, FA: -6 }])),

  // ── The spouse's failing health ─────────────────────────────────────────────
  ax("The Palace Physician", "spouse", ["spouse", "health", "duty"],
    sx("Hear me out — Your wife Nasrin is very sick and might die soon. She needs you, but your big job keeps you away.",
      ["Stop working so hard and stay with Nasrin.", "The office can wait; she cannot.", "You step back from the relentless schedule to be with Nasrin in her illness. Governance drifts in your partial absence, and you are present for the woman who anchored your whole life, whatever the cost to the office.", { FA: 12, GL: -2, MI: -2 }],
      ["Keep working and only visit her sometimes.", "A nation does not pause for one man's grief.", "You keep the wheel turning and snatch what time you can at her bedside. The office stays steady, and Nasrin fades largely alone, and you will carry the choice for the rest of your days.", { MI: 2, FA: -8, EN: -2 }])),

  // ── The child's failed business bailout ─────────────────────────────────────
  ax("Faisal, your son", "sibling", ["business", "bailout", "favour"],
    sx("Your son Faisal's business failed and he owes a lot of money. He wants you to make the country's bank forget about his debt. What will you do?",
      ["Make the bank secretly forget his debt.", "I will not let my son be ruined in public.", "You have the state bank quietly absolve Faisal's debts. He is saved from ruin, and the public purse eats his failure, one more connected bailout that erodes the banks and the public's last faith in fairness.", { FA: 4, FI: -4, EN: -6, GL: -2 }],
      ["Let Faisal's business fail on its own.", "A son bailed out learns nothing but the next bailout.", "You refuse to rescue Faisal and let his venture fail like any other. He is humiliated and the family stung, but the banks are spared another political write-off and the public sees the rules apply to your son too.", { GL: 4, EN: 4, FA: -6 }])),

  // ── The family priest's influence ───────────────────────────────────────────
  ax("The Household Imam", "cleric", ["religion", "influence", "decisions"],
    sx("The family priest wants you to change the country's laws to be very strict about religion. If you say no, religious people will be mad. What are your orders, sir?",
      ["Tell the priest to stick to praying, not laws.", "A priest may guide my prayers, not my policy.", "You gently confine the imam to the family's spiritual life and keep him out of state policy. The matriarch and the devout grumble, but the constitution's secular spine and the rights of women and minorities are not bent to one cleric's lights.", { GL: 4, EN: 4, FA: -6 }],
      ["Let the priest change the laws.", "The family's faith is the family's compass.", "You let the household imam's conservative counsel shape state policy. The family and the pious are gratified, and the curriculum narrows, women's reforms stall, and minorities feel the chill of one cleric's hand on the tiller.", { FA: 6, EN: -8, GL: -6 }])),

  // ── The exile contingency ───────────────────────────────────────────────────
  ax("Mizan, the security chief", "shadow", ["exile", "contingency", "survival"],
    sx("Mizan, the security chief awaits your word. Your guard says things are dangerous and you should secretly prepare an airplane to run away to another country if bad things happen.",
      ["Secretly prepare the airplane to run away.", "A wise captain knows where the lifeboats are.", "You let Mizan quietly arrange the haven, the assets, the standby plane. The escape hatch is ready should the worst come, and the very existence of it, if it ever leaks, will be read as the regime expecting its own end.", { MI: 2, FA: 2, FI: -2, EN: -2 }],
      ["Say no and refuse to run away.", "A leader who packs a bag has already half-fled.", "You refuse to prepare an exit, staking everything on staying. The signal of confidence is total, and if the worst does come you will face it with no lifeboat, no haven, and no plane on the tarmac.", { MI: 2, EN: 2, FA: -2 }])),

  // ── The grandchild's reckless friends ───────────────────────────────────────
  ax("Karim, your private secretary", "fixer", ["grandchild", "scandal", "influence"],
    sx("Sir! Your grandchild is hanging out with bad friends who do bad things. It might be on the news soon.",
      ["Step in and pull your grandchild away from the bad friends.", "I will not watch a grandchild ruined by jackals.", "You intervene hard, breaking up the decadent crowd and reining the grandchild in. They resent the heavy hand, but they are pulled back from the brink of the scandal that crowd was steering them toward.", { FA: 2, EN: 2 }],
      ["Let your grandchild figure things out alone.", "A grandchild smothered only rebels harder.", "You let the grandchild keep their friends and learn their own lessons. They may find their way, or the fast crowd may steer them into the viral scandal you saw coming and chose not to prevent.", { FA: 2, EN: -4, GL: -2 }])),

  // ── The matriarch's last wish ───────────────────────────────────────────────
  ax("The Family Lawyer", "spouse", ["matriarch", "promise", "legacy"],
    sx("Listen to me — Before she died, your mother made you promise something you know is a bad idea. The lawyer asks if you will still do it.",
      ["Keep the promise because she was dying.", "A vow to the dying is a vow doubled.", "You keep the promise though it cuts against your judgment. The matriarch's memory is honoured and the family moved, and you carry out a wish you know to be unwise out of love and duty to the dead.", { FA: 6, EN: -2, GL: -2 }],
      ["Break the promise secretly because it's a bad idea.", "A promise that harms the living serves no memory.", "You quietly let the unwise promise lapse. The family that knows of it whispers of betrayal, but you spare the country and the dynasty the cost of a deathbed wish your better judgment rejected.", { GL: 2, EN: 2, FA: -6 }])),

  // ── The relative in the opposition's pay ────────────────────────────────────
  ax("Mizan, the security chief", "shadow", ["betrayal", "family", "leak"],
    sx("Mr. Prime Minister, sir! Your guard found out a family member is secretly selling your secrets to your enemies for money.",
      ["Tell everyone what they did and kick them out.", "A leak in the family must be sealed, in daylight.", "You confront and expel the treacherous relative publicly. The family is shaken and the betrayal aired, but the leak is sealed and a warning blazes to anyone else tempted to sell the dynasty's secrets.", { MI: 2, FA: -4, GL: 2, EN: 2 }],
      ["Give them fake secrets to trick your enemies.", "A known traitor is a channel I can poison.", "You leave the traitor in place and feed them carefully chosen lies. The leak becomes your weapon against the opposition, and you live with a known Judas at the family table, useful and despised.", { MI: 4, FA: -2, EN: -2 }])),

  // ── The dynasty's contingency heir ──────────────────────────────────────────
  ax("The Dynasty's Mentor", "official", ["succession", "heir", "backup"],
    sx("Your Excellency! The teacher says you should secretly train a second child to be leader, just in case the first one fails. If they find out, they will fight.",
      ["Secretly train a second child.", "A dynasty with one heir is a dynasty one accident from collapse.", "You quietly prepare a second heir as insurance. The dynasty gains resilience against the first faltering, and the seeds of a rivalry are sown that, if ever exposed, will split the family into warring camps.", { FA: 2, MI: 2, EN: -2 }],
      ["Put all your hope in the first child.", "Two heirs is two factions; I will not divide my own house.", "You commit fully to the single heir and refuse a backup. The family stays united behind one successor, and the whole dynastic future rests, undiversified, on whether that one heir proves equal to it.", { FA: 4, EN: -2, MI: -2 }])),

  // ── The leader's burnout ────────────────────────────────────────────────────
  ax("The Palace Physician", "doctor", ["burnout", "health", "judgment"],
    sx("Dear Sir — Your doctor says you are too tired to think straight and are making mistakes.",
      ["Take a long rest and let others do the work.", "A mind worn to nothing makes the worst decisions of all.", "You step back to genuinely rest and hand real authority to trusted hands. Your judgment clears and your health recovers, and the delegation reveals who can be trusted with power — and who covets it.", { EN: 2, GL: 2, FA: 2, MI: -2 }],
      ["Keep working hard even though you are exhausted.", "A leader rests when the work is done, and it is never done.", "You refuse to rest and push on through the fog. The work never pauses, and your fraying judgment — brittle, suspicious, error-prone — begins to show in decisions sharper rest would have softened.", { MI: 2, EN: -4, GL: -2 }])),

  // ── The family's jewels and gold ────────────────────────────────────────────
  ax("The Family Treasurer", "fixer", ["wealth", "gold", "exposure"],
    sx("Honourable leader! Your family has a giant pile of secret gold and jewels. If anyone finds it, you will be in trouble.",
      ["Tell the truth about the gold and pay taxes on it.", "A fortune hidden is a fortune that one day damns me.", "You declare and pay tax on the hoard, defusing its danger. The family balks at the cost and the exposure, but the undeclared wealth that could have damned you becomes merely embarrassing rather than criminal.", { FA: -2, FI: -2, GL: 2, EN: 2 }],
      ["Keep the gold hidden.", "What is not declared cannot be questioned.", "You keep the gold and jewels hidden and deniable. The fortune stays intact and untaxed, and it sits as a time bomb that any serious investigation or disclosure rule could one day detonate under the dynasty.", { FA: 2, FI: 2, EN: -4, GL: -2 }])),

  // ── The question of stepping down ───────────────────────────────────────────
  ax("Nasrin, your spouse", "spouse", ["power", "legacy", "stepping-down"],
    sx("We need to talk. Nasrin asks if you should quit being the boss now while people still like you, instead of waiting until people hate you and force you out.",
      ["Plan to quit nicely while you are ahead.", "A leader who leaves on his own feet writes his own ending.", "You begin planning a dignified, managed exit while the legacy holds. The hardliners and the family who feed on your power are aghast, but you choose to author your own ending rather than have it authored for you.", { GL: 4, EN: 4, FA: 2, MI: -4 }],
      ["Stay the boss until the very end.", "Power surrendered is power that turns on you.", "You reject the idea of stepping down and resolve to hold on. The family's grip is preserved, and you set the dynasty on the path of clinging until it is dragged down or carried out, the exit no longer yours to write.", { MI: 2, FA: 2, EN: -4, GL: -2 }])),

  // ── The nephew's foreign-education debt ─────────────────────────────────────
  ax("Karim, your private secretary", "fixer", ["nepotism", "education", "favour"],
    sx("Karim, your private secretary reports: Your nephew in school far away spent too much money. You can pay for it with your own money or steal government money to pay for it.",
      ["Pay for it with your own family money.", "I will not raid the public purse for a nephew's whims.", "You cover the nephew's lavish bills from the family's own pocket. The cost stings the family fortune, but no scholarship fund or embassy budget is quietly raided to fund a relative's foreign indulgence.", { FA: 2, FI: -2 }],
      ["Steal government money to pay for it.", "A scholarship fund will not miss a slice.", "You quietly divert public money to settle the nephew's debts. The family fortune is spared, and a scholarship fund meant for the deserving poor is skimmed to keep a nephew in foreign luxury, a small theft waiting to surface.", { FA: 4, FI: 2, EN: -6, GL: -2 }])),

  // ── The sibling rivalry erupts ──────────────────────────────────────────────
  ax("Tania, your daughter", "sibling", ["rivalry", "succession", "feud"],
    sx("Tania pulls you aside. Your two best children are fighting meanly over who gets to be the leader next.",
      ["Pick one child now to stop the fight.", "A festering rivalry rots worse than a clean cut.", "You name one of your children heir and end the limbo. The chosen rises and the rejected becomes, perhaps forever, an enemy within your own blood, but the poisonous uncertainty is at last resolved.", { FA: -2, MI: 2, EN: 2 }],
      ["Force them to share the power and be friends.", "I will not break my family to crown one half of it.", "You refuse to choose and force a shared settlement on the rivals. Neither is satisfied and the tension simmers, but you keep both children and avoid making a lifelong enemy of one, betting reconciliation can hold.", { FA: 4, EN: -2, GL: -2 }])),

  // ── The relative's medical-negligence scandal ───────────────────────────────
  ax("Karim, your private secretary", "doctor", ["scandal", "hospital", "family"],
    sx("A note from the Residence reads: A hospital owned by your family is very dirty and patients are dying. The checkers want to punish them.",
      ["Let the checkers punish the dirty hospital.", "A hospital that kills must answer, whoever owns it.", "You let the regulators shut and prosecute the negligent hospital, family-owned or not. The relative rages and the family is embarrassed, but the dead are honoured and the public sees the dynasty's clinics are not above the law.", { GL: 6, EN: 6, FA: -6 }],
      ["Protect your family's hospital from the checkers.", "I will not let regulators ruin a family asset.", "You shield the hospital from the full force of the regulators. The family asset and its owner are protected, and the negligence and the deaths it caused are papered over, the outrage left to fester against you.", { FA: 6, FI: 2, EN: -8, GL: -4 }])),

  // ── The decision to anoint, at last ─────────────────────────────────────────
  ax("The Party Elders' Council", "official", ["succession", "anointment", "dynasty"],
    sx("Word from the Residence, sir — The older leaders want you to pick the next leader right now. If you do, people might stop listening to you because they know you are leaving soon.",
      ["Pick the next leader in front of everyone now.", "An uncertain succession is a wound that bleeds the whole reign.", "You formally anoint your heir and begin the public handover. The speculation ends and the dynasty's continuity is assured, and your own authority starts draining toward the successor from the moment you name them.", { FA: 6, GL: 2, MI: -4 }],
      ["Keep it a secret and stay the main boss.", "An anointed heir is a rival with my blessing.", "You refuse to name a successor and keep all eyes on yourself. Your authority stays undivided and absolute, and the dangerous uncertainty over what follows you festers on, weakening the dynasty's future to preserve your present.", { MI: 4, FA: 2, EN: -2, GL: -2 }])),

  // ── The loyalist's plea for the inner circle ────────────────────────────────
  ax("The Cabinet Secretary", "official", ["inner-circle", "loyalty", "competence"],
    sx("The Cabinet Secretary: Your friends only tell you good things and lie to make you happy. A helper says you need to listen to honest people, but your friends will be mad.",
      ["Let the honest people in to tell the truth.", "A circle of yes-men is a king walking blind.", "You bring abler, franker voices into the inner circle. The old loyalists are wounded and warn of disloyalty, but you begin to hear the hard truths a clique of flatterers had been hiding from you.", { GL: 4, EN: 4, MI: 2, FA: -4 }],
      ["Keep only your old friends around you.", "Loyalty proven over decades is worth more than candour.", "You keep the circle to its aging loyalists. They stay devoted and comfortable, and you keep governing on the flattering, partial picture they paint, the abler outsiders and the harder truths frozen out.", { FA: 6, GL: -2, EN: -4 }])),

  // ── The reckoning with the heir ─────────────────────────────────────────────
  ax("Tania, your daughter", "sibling", ["heir", "trust", "succession"],
    sx("Between us — Tania asks you a hard question: is she supposed to help the country, or just make your family richer?",
      ["Tell her she must help the country.", "I leave you a duty, not a property.", "You charge Tania to serve the nation, not milk it. She takes the weight gravely, and the dynasty's heir is set, at least in intent, toward stewardship rather than extraction.", { EN: 6, GL: 4, FA: 2 }],
      ["Tell her she must keep the family rich and powerful.", "Power is the family's; tend it and it tends you.", "You teach Tania that power is the family's possession to keep and feed. She learns the lesson well, and the dynasty's future hardens into one more generation of the machine consuming the state it sits on.", { FA: 6, MI: 2, EN: -6, GL: -4 }]),
    sx("Tania says, quietly: Tania finds out your family is doing bad, secret things for money. She asks if she can stop it and punish them.",
      ["Let her stop the bad things and clean up the family.", "An heir who will not face our own rot is no heir.", "You back Tania to clean the family's own house. Relatives and donors howl betrayal and some turn on you both, but the dynasty is purged of a rot that would have doomed it, and the heir proves her steel.", { GL: 6, EN: 6, FA: -8 }],
      ["Tell her not to touch the family's secret money.", "Reform the country if you must, but not your own blood.", "You let Tania reform anything but the family. She learns the dynasty's true rule — that the rot is sacred — and the corruption running through the family enterprises stays untouched, awaiting its eventual reckoning.", { FA: 6, EN: -6, GL: -4 }]),
    sx("Hear me out — Tania asks if you will leave your job nicely so she can take over easily, or if you will cling to it until everything is broken.",
      ["Leave nicely and help her take over.", "My last gift is a beginning, not a battlefield.", "You commit to a clean handover, easing your grip so Tania inherits a stable transition rather than a war. Your power fades early, but the dynasty passes to its heir intact, and your ending is one you authored.", { GL: 6, EN: 4, FA: 4, MI: -6 }],
      ["Cling to the job and let her fix the mess later.", "The throne is taken, never given; let her earn it as I did.", "You cling to power to the last and leave Tania to fight for the succession from the ruins. The dynasty's continuity is thrown to chance and conflict, and your final act is to make your heir's beginning a battlefield.", { MI: 2, FA: -4, EN: -4, GL: -2 }])),
];
