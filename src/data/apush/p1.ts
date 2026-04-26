import type { ApushTopic } from '../apush-types'

export const period1Topics: ApushTopic[] = [
  // ── People ──────────────────────────────────────────────────────────────────

  {
    id: 'john-cabot',
    name: 'John Cabot',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'People',
    tags: ['comparison'],
    summary: 'Italian explorer commissioned by England who was the first European after the Norse to reach North America.',
    significance:
      'Cabot\'s 1497 voyage gave England its earliest territorial claim to North America, laying the legal groundwork for later English colonization. Unlike Spanish explorers who traveled south, Cabot\'s northern route shaped the geographic footprint of English settlement. His failure to find a Northwest Passage demonstrated the continent\'s vast width and redirected English ambitions toward coastal settlement.',
    context: 'Cabot sailed a generation after Columbus\'s 1492 voyage inspired all European powers to seek Atlantic routes; his mission preceded permanent English settlement by over a century.',
    themes: ['America in the World', 'Migration and Settlement'],
    connections: ['humphrey-gilbert', 'walter-raleigh', 'henry-hudson'],
  },

  {
    id: 'henry-hudson',
    name: 'Henry Hudson',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'People',
    tags: ['comparison'],
    summary: 'English explorer employed by the Dutch who sailed up the river now bearing his name and established the basis for Dutch colonial claims in North America.',
    significance:
      'Hudson\'s explorations on behalf of the Dutch East India Company led directly to the founding of New Netherland and New Amsterdam, creating a multi-ethnic, commercially oriented colony distinct from English settlements. The Dutch presence in the Hudson Valley introduced the patroon system and intensified competition among European powers for North American territory. His voyages illustrate how exploration was a tool of mercantile rivalry as much as geographic curiosity.',
    context: 'Hudson sailed in 1609, decades after Cabot\'s English claims and amid growing European competition; New Netherland would later be seized by England and renamed New York in 1664.',
    themes: ['America in the World', 'Work, Exchange, and Technology'],
    connections: ['new-amsterdam', 'john-cabot'],
  },

  {
    id: 'humphrey-gilbert',
    name: 'Sir Humphrey Gilbert',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'People',
    tags: ['comparison'],
    summary: 'English nobleman who received a royal patent from Queen Elizabeth I to explore and claim American lands and who pioneered the plantation model derived from English tactics in Ireland.',
    significance:
      'Gilbert\'s role in the subjugation of Ireland directly transferred brutal colonial tactics to the Americas, establishing a template of forced displacement that English colonizers would use against Native peoples. His royal patent system became the legal mechanism for all subsequent English colonial ventures, from Roanoke to Jamestown. His death at sea before establishing a colony underscored the extreme difficulty and cost of early English colonization.',
    context: 'Gilbert operated in the context of English-Irish conflict and Elizabethan competition with Spain; his failure passed the baton directly to his half-brother Walter Raleigh.',
    themes: ['Politics and Power', 'Migration and Settlement'],
    connections: ['walter-raleigh', 'subjugation-of-ireland', 'plantation-model', 'john-cabot'],
  },

  {
    id: 'walter-raleigh',
    name: 'Sir Walter Raleigh',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'People',
    tags: ['SAQ', 'comparison'],
    summary: 'English courtier and explorer who organized the Roanoke expeditions, the first English attempts to plant a permanent settlement in North America.',
    significance:
      'Raleigh\'s Roanoke ventures, though they ended in mysterious failure, proved that private, crown-backed enterprises could attempt colonization and helped define the chartered-company model used at Jamestown. The lessons of Roanoke — underfunding, poor site selection, strained Native relations — were directly applied (with mixed success) to later settlements. Raleigh\'s promotion of Virginia tobacco back in England also seeded the economic rationale that would eventually sustain Jamestown.',
    context: 'Raleigh inherited Gilbert\'s patent after 1583 and launched the Roanoke expeditions in 1585 and 1587; the "Lost Colony" mystery persisted while Jamestown was founded twenty years later.',
    themes: ['America in the World', 'Migration and Settlement'],
    connections: ['humphrey-gilbert', 'first-roanoke-colony', 'new-colonial-charters'],
    mcqs: [
      {
        question: 'The failure of Sir Walter Raleigh\'s Roanoke Colony most directly contributed to which later development?',
        options: [
          'England abandoning all colonial ambitions in North America',
          'A shift toward the chartered-company model for financing and governing colonies',
          'Spain gaining dominance over the North American eastern seaboard',
          'France establishing rival settlements along the Virginia coast'
        ],
        answerIndex: 1,
        explanation: 'Roanoke\'s failure under direct royal patronage demonstrated that colonization required broader capital and governance structures, leading directly to the Virginia Company\'s chartered model at Jamestown. England did not abandon colonization (A), Spain did not gain the eastern seaboard (C), and France focused on Canada and the Mississippi, not Virginia (D).',
      },
      {
        question: 'Which of the following best explains why English colonization in North America lagged behind Spanish colonization in the Caribbean and South America?',
        options: [
          'England lacked the naval technology to cross the Atlantic',
          'The English Reformation created political instability and redirected royal resources away from colonization',
          'English explorers were legally prohibited from claiming non-Christian lands',
          'England had no mercantilist interest in overseas trade'
        ],
        answerIndex: 1,
        explanation: 'The English Reformation, Henry VIII\'s break with Rome, conflicts over the succession, and the threat from Catholic Spain all consumed English resources and attention, delaying sustained colonization. England clearly had Atlantic naval capability (A is false), the Doctrine of Discovery was a papal not English restriction (C is wrong), and England was deeply mercantilist (D is false).',
      },
    ],
  },

  {
    id: 'john-rolfe',
    name: 'John Rolfe',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'People',
    tags: ['LEQ', 'causation'],
    summary: 'English colonist at Jamestown who crossbred Virginia and South American tobacco strains to produce a commercially viable crop that saved the colony.',
    significance:
      'Rolfe\'s tobacco hybrid transformed Jamestown from a failing settlement into a profitable commercial enterprise and established the plantation economy that would define the Chesapeake region for generations. The explosive demand for tobacco land drove English colonists deep into Native territory, directly causing the deterioration of relations with the Powhatan Confederacy and setting the pattern of settler expansion at indigenous expense. Tobacco\'s labor intensity also became a primary driver of indentured servitude and, later, the African slave trade in British North America.',
    context: 'Rolfe introduced commercial tobacco around 1614, after the near-collapse of Jamestown during the Starving Time; his crop\'s success encouraged the headright system and mass migration to Virginia.',
    themes: ['Work, Exchange, and Technology', 'Social Structures'],
    connections: ['emergence-of-tobacco-economy', 'headright-system', 'early-problems-jamestown', 'starving-time'],
    mcqs: [
      {
        question: 'John Rolfe\'s development of a marketable tobacco strain in Virginia most directly led to which of the following?',
        options: [
          'Peaceful coexistence between English settlers and the Powhatan Confederacy',
          'Increased English encroachment on Native land and deteriorating colonial-Native relations',
          'The rapid transition from indentured servitude to free labor in the Chesapeake',
          'Spain abandoning its own tobacco production in the Caribbean'
        ],
        answerIndex: 1,
        explanation: 'Tobacco\'s profitability caused insatiable demand for arable land, pushing colonists into Powhatan territory and destroying the cooperative relationship that had sustained early Jamestown. Relations did not improve (A is wrong), indentured servitude expanded before eventually giving way to enslaved labor (C is wrong), and Spain maintained Caribbean tobacco (D is wrong).',
      },
      {
        question: 'The emergence of the tobacco economy in early Virginia is best understood as an example of which APUSH theme?',
        options: [
          'American and National Identity',
          'Politics and Power',
          'Work, Exchange, and Technology',
          'Migration and Settlement'
        ],
        answerIndex: 2,
        explanation: 'Tobacco\'s rise reflects how new agricultural techniques and transatlantic commercial networks reshaped colonial labor, land use, and trade — the core of the Work, Exchange, and Technology theme. National identity was not yet relevant in 1614 (A), politics followed the economy here rather than leading it (B), and while migration occurred, the driving force was economic technology (D).',
      },
    ],
  },

  {
    id: 'richard-hakluyt',
    name: 'Richard Hakluyt',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'People',
    tags: ['SAQ', 'causation'],
    summary: 'English writer and clergyman whose published arguments promoted English colonization as a solution to overpopulation and a source of new commercial markets.',
    significance:
      'Hakluyt\'s writings gave intellectual and economic justification to English colonization at a time when the crown needed persuading, helping build the mercantilist consensus that colonies were essential to national wealth. His argument that colonies would absorb England\'s surplus poor linked domestic social problems directly to overseas expansion. For the APUSH exam, Hakluyt represents how ideological and economic motivations intertwined to drive English imperialism.',
    context: 'Hakluyt wrote in the 1580s–1590s during the Enclosure Movement\'s displacement crisis and growing rivalry with Spain; his ideas fed directly into the chartered-company ventures of the early 1600s.',
    themes: ['America in the World', 'Work, Exchange, and Technology'],
    connections: ['enclosure-movement', 'mercantilism', 'chartered-companies', 'walter-raleigh'],
  },

  {
    id: 'john-calvin',
    name: 'John Calvin',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'People',
    tags: ['LEQ', 'causation'],
    summary: 'French Protestant theologian whose doctrine of predestination shaped the beliefs of the Puritans and Calvinist colonists who settled New England.',
    significance:
      'Calvinist theology, particularly predestination and the idea that worldly success signaled divine election, infused New England Puritan society with a distinctive work ethic and sense of providential mission that shaped American cultural identity for centuries. The Puritan belief that they were building a "city upon a hill" influenced American exceptionalism and concepts of national purpose. For the APUSH exam, Calvin\'s influence connects religious motivation to colonial migration and the formation of distinct regional cultures.',
    context: 'Calvin built on Luther\'s Protestant Reformation in the mid-1500s; Calvinist ideas traveled to England through the Puritans and then to New England in the 1620s–1630s.',
    themes: ['American and Regional Culture', 'American and National Identity'],
    connections: ['doctrine-of-predestination', 'puritan-separatists', 'english-reformation'],
  },

  // ── Events ───────────────────────────────────────────────────────────────────

  {
    id: 'pueblo-revolt-1680',
    name: 'Pueblo Revolt of 1680',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'A coordinated uprising by Pueblo peoples in New Mexico that drove the Spanish out of the region for twelve years and forced a major reform of the encomienda system.',
    significance:
      'The Pueblo Revolt stands as one of the most successful acts of Native resistance to European colonization in North American history, demonstrating that indigenous peoples were active agents capable of fundamentally reshaping colonial policy. Spain\'s resulting concessions — reducing labor demands, allowing cultural practices, and requiring only baptism of newborns — show that Native resistance could force structural change in colonial systems. For the DBQ and LEQ, this event is essential for arguments about Native agency, limits of colonial power, and the causes and consequences of cultural suppression.',
    context: 'The revolt emerged after decades of encomienda exploitation and forced cultural assimilation under Spanish rule; after the Spanish reconquered the region in 1692, they governed with significantly lighter control.',
    themes: ['Politics and Power', 'Social Structures', 'American and Regional Culture'],
    connections: ['encomienda-system', 'catholic-missions', 'st-augustine', 'ordinances-of-discovery'],
    mcqs: [
      {
        question: 'The Pueblo Revolt of 1680 is most significant to APUSH historians because it demonstrates that',
        options: [
          'Spanish colonizers abandoned all efforts to convert Native peoples after the revolt',
          'Native peoples could exercise agency and compel changes in European colonial policy',
          'The encomienda system was uniformly applied across all Spanish territories',
          'Religious conversion was the primary cause of Native resistance to Spanish rule'
        ],
        answerIndex: 1,
        explanation: 'The revolt forced Spain to reform the encomienda system and permit Pueblo cultural practices, proving that coordinated Native resistance could reshape colonial institutions — a key argument for LEQ and DBQ essays about Native agency. Spain did not abandon conversion (A); encomienda varied by region (C); cultural suppression, not just religion, drove the revolt (D).',
      },
      {
        question: 'Which of the following best explains why Spain made concessions to the Pueblo people after reconquering the region in 1692?',
        options: [
          'The Spanish crown had become ideologically committed to indigenous rights',
          'The Pueblo Revolt had demonstrated that extreme exploitation and cultural suppression were unsustainable',
          'France threatened to ally with the Pueblo people against Spain',
          'The Catholic Church pressured the crown to end all forms of forced labor'
        ],
        answerIndex: 1,
        explanation: 'Spain\'s post-1692 reforms were pragmatic responses to the lesson of the revolt: the old system had provoked a catastrophic uprising. There is no evidence of an ideological shift in the crown (A), a French-Pueblo alliance was not a major factor (C), and the Church had long tolerated encomienda labor (D).',
      },
    ],
  },

  {
    id: 'collision-of-cultures',
    name: 'Collision of Cultures',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'comparison'],
    summary: 'The broad contact and cultural exchange between European colonizers and Native American peoples that transformed both groups and reshaped the Americas.',
    significance:
      'The collision of cultures is the master narrative of Period 1: it explains demographic catastrophe, the Columbian Exchange, the emergence of racial hierarchies, and the varied strategies different European powers used to control Native populations. For any LEQ or DBQ on Period 1, recognizing that different colonial powers (Spanish, French, English, Dutch) interacted with Natives in distinct ways is essential for earning complexity points. The long-term consequences — demographic collapse, new crop economies, African slavery — all flow from this initial contact.',
    context: 'Contact intensified after 1492 and throughout the 1500s; the patterns established in this period (trade partnerships, missions, encomienda, plantation) set the template for all subsequent colonial-Native relations.',
    themes: ['America in the World', 'Social Structures', 'Geography and the Environment'],
    connections: ['columbian-exchange', 'demographic-catastrophe', 'a-complex-racial-hierarchy', 'increasing-levels-of-exchange'],
    mcqs: [
      {
        question: 'Which of the following best illustrates how different European colonial powers varied in their interactions with Native Americans during Period 1?',
        options: [
          'All European powers relied primarily on military conquest to subdue indigenous populations',
          'The Spanish used the encomienda system while the French depended on fur-trade partnerships with Native peoples',
          'English colonizers adopted Native agricultural practices while Spanish colonizers rejected them',
          'All European powers eventually abolished forced Native labor after the Pueblo Revolt'
        ],
        answerIndex: 1,
        explanation: 'The contrast between Spanish extraction (encomienda, missions) and French partnership (coureurs de bois, fur trade) is a central comparison point for Period 1 essays. Not all European powers relied primarily on military conquest (A); English colonizers rejected, not adopted, Native integration (C); forced labor was never universally abolished (D).',
      },
      {
        question: 'A historian arguing that Native Americans were active agents rather than passive victims during Period 1 would most likely cite which of the following as evidence?',
        options: [
          'The Columbian Exchange',
          'The demographic catastrophe caused by European disease',
          'The Pueblo Revolt of 1680 and Native introduction of crops to Europeans',
          'The encomienda system'
        ],
        answerIndex: 2,
        explanation: 'The Pueblo Revolt shows coordinated resistance that changed colonial policy, and Native agricultural knowledge was essential to European survival — both demonstrate agency. The Columbian Exchange was largely involuntary for Natives (A), disease was something done to Natives not by them (B), and encomienda was imposed on Natives (D).',
      },
    ],
  },

  {
    id: 'demographic-catastrophe',
    name: 'Demographic Catastrophe',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'The devastating population collapse of Native American peoples caused primarily by European diseases, killing an estimated 90% of indigenous populations across the Americas.',
    significance:
      'The demographic catastrophe was arguably the single most consequential event of Period 1: it destabilized Native political structures, made large territories seem empty to European eyes (justifying land seizure), and created the labor shortage that drove African enslavement. The scale — surpassing even the Black Death — transformed the entire Western Hemisphere. For DBQ and LEQ essays, this event is essential for explaining why European colonization succeeded at all and why African slavery became the labor system of choice.',
    context: 'Disease spread ahead of European settlement, meaning many colonizers encountered already-depopulated lands; the catastrophe began with Columbus\'s arrival in 1492 and continued for over a century.',
    themes: ['Geography and the Environment', 'Social Structures', 'Migration and Settlement'],
    connections: ['columbian-exchange', 'collision-of-cultures', 'deliberate-subjugation', 'varied-labor-system', 'growth-of-african-slave-trade'],
    mcqs: [
      {
        question: 'The demographic catastrophe caused by European diseases most directly contributed to which later development in colonial North America?',
        options: [
          'The establishment of the encomienda system in New Spain',
          'The growth of African slavery as a replacement labor source',
          'The Pueblo Revolt of 1680',
          'The founding of Jesuit missions in Florida'
        ],
        answerIndex: 1,
        explanation: 'As Native populations collapsed, the available forced labor pool shrank dramatically, making enslaved Africans the preferred labor solution, especially in plantation agriculture. The encomienda preceded much of the catastrophe\'s full impact (A), the Pueblo Revolt was driven by cultural suppression more than disease (C), and missions were a response to surviving Native populations (D).',
      },
      {
        question: 'Which of the following best describes why European colonizers often perceived the Americas as "empty" or "available" for settlement?',
        options: [
          'Native peoples were nomadic and did not use the land productively',
          'Disease had already depopulated many regions before permanent European settlements arrived',
          'Native peoples voluntarily relocated to avoid European contact',
          'Spanish missionaries had persuaded Native peoples to abandon their traditional lands'
        ],
        answerIndex: 1,
        explanation: 'Epidemic diseases spread faster than European settlers, so colonizers often encountered already-devastated communities, which they interpreted as Providence clearing land for them. Most Native peoples were not nomadic (A), relocation was not voluntary (C), and missionaries encouraged settlement on missions, not abandonment of land (D).',
      },
    ],
  },

  {
    id: 'gilbert-expedition-newfoundland',
    name: "Gilbert's Expedition to Newfoundland",
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['comparison'],
    summary: 'Sir Humphrey Gilbert\'s 1583 voyage to Newfoundland under a royal patent, which ended with his death at sea but established the precedent for English land claims and royal patents in North America.',
    significance:
      'Gilbert\'s expedition established the legal and procedural framework — the royal patent granting exclusive rights to explore and settle — that all subsequent English colonizers relied upon. His failure underscored that private ventures needed better funding and organization, pushing England toward the chartered-company model. The expedition also illustrated how colonial ventures were funded through the same aristocratic networks that conducted Irish colonization.',
    context: 'Gilbert received his patent in 1578 during Elizabethan competition with Spain; his failure passed the opportunity directly to Walter Raleigh, who sponsored the Roanoke expeditions.',
    themes: ['Politics and Power', 'America in the World'],
    connections: ['humphrey-gilbert', 'walter-raleigh', 'chartered-companies', 'subjugation-of-ireland'],
  },

  {
    id: 'first-roanoke-colony',
    name: 'First and Second Roanoke Colonies',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['SAQ', 'causation'],
    summary: 'Two consecutive English settlement attempts on Roanoke Island (1585, 1587) sponsored by Walter Raleigh, the second of which vanished entirely — the "Lost Colony."',
    significance:
      'Roanoke\'s failures demonstrated the critical importance of adequate provisioning, site selection, and Native relations for successful colonization, lessons that Jamestown\'s founders studied directly. The destruction of a Native village over a minor theft illustrated how quickly colonial-Native relations could collapse, foreshadowing the violent cycle of the Chesapeake. The mystery of the Lost Colony also fueled English interest in what a permanent North American colony would require.',
    context: 'Roanoke was attempted amid the Anglo-Spanish War (1585–1604), which delayed resupply; Jamestown was founded just twenty years later in 1607 with the chartered-company model Roanoke lacked.',
    themes: ['Migration and Settlement', 'America in the World'],
    connections: ['walter-raleigh', 'humphrey-gilbert', 'new-colonial-charters', 'early-problems-jamestown'],
  },

  {
    id: 'early-problems-jamestown',
    name: 'Early Problems at Jamestown',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'The severe difficulties faced by the 1607 Jamestown settlers, including disease, poor site selection, lack of agricultural focus, and conflict with the Powhatan Confederacy.',
    significance:
      'Jamestown\'s early near-failure illustrates the gap between the mercantilist fantasy of easy colonial wealth and the brutal reality of North American settlement. Survival depended on Native assistance — Powhatan food supplies and agricultural knowledge — which reveals how dependent early English colonies were on indigenous peoples they simultaneously sought to displace. For LEQ essays on colonial development, Jamestown shows that English colonization succeeded despite its founders, not because of them.',
    context: 'Jamestown was chartered by the Virginia Company in 1606 and settled in 1607 in the context of intense English-Spanish rivalry; the Starving Time of 1609–1610 nearly ended the experiment entirely.',
    themes: ['Migration and Settlement', 'Work, Exchange, and Technology', 'Geography and the Environment'],
    connections: ['starving-time', 'emergence-of-tobacco-economy', 'headright-system', 'first-roanoke-colony', 'new-colonial-charters'],
    mcqs: [
      {
        question: 'The early difficulties at Jamestown most directly illustrate which of the following about English colonization?',
        options: [
          'English settlers were well-prepared for the agricultural demands of North America',
          'The chartered-company profit motive conflicted with the practical needs of sustainable settlement',
          'Native American peoples consistently refused to assist European colonizers',
          'England\'s government provided strong logistical support for colonial ventures'
        ],
        answerIndex: 1,
        explanation: 'The Virginia Company sent settlers focused on finding gold rather than building a food supply, demonstrating that profit-seeking investors and colonists\' survival needs were often at odds. Settlers were demonstrably unprepared (A is wrong), Powhatan assistance was crucial (C is wrong), and the English government offered little direct logistical support (D is wrong).',
      },
      {
        question: 'Which of the following best explains why Jamestown ultimately survived its early crises?',
        options: [
          'The arrival of skilled farmers from England solved the food shortage',
          'Discovery of gold deposits provided immediate economic viability',
          'Native American agricultural assistance and the development of tobacco as a cash crop',
          'The Virginia Company sent military reinforcements to pacify the region'
        ],
        answerIndex: 2,
        explanation: 'Powhatan food and farming knowledge sustained Jamestown through its worst years, and John Rolfe\'s tobacco breakthrough provided the long-term economic foundation. No gold was found (B), skilled farmers did not solve the crisis (A), and military reinforcement alone could not address starvation (D).',
      },
    ],
  },

  {
    id: 'starving-time',
    name: 'The Starving Time',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['SAQ', 'causation'],
    summary: 'The catastrophic winter of 1609–1610 at Jamestown during which the population fell from roughly 600 to 60 due to starvation, disease, and conflict.',
    significance:
      'The Starving Time encapsulates the consequences of the Virginia Company\'s failure to prepare settlers for colonial realities — prioritizing gold-seeking over agriculture led to mass death. The event also reflects the breakdown of Native-English cooperation: cut off from Powhatan food supplies, the colony nearly perished. For SAQ responses, the Starving Time is a concrete example of the gap between English colonial ambitions and the actual conditions of early settlement.',
    context: 'The Starving Time followed a leadership crisis and Native conflict in late 1609; it preceded the discovery of tobacco\'s commercial value and the stabilization of Jamestown.',
    themes: ['Migration and Settlement', 'Geography and the Environment'],
    connections: ['early-problems-jamestown', 'emergence-of-tobacco-economy', 'de-la-warr-harsh-discipline', 'headright-system'],
  },

  {
    id: 'spanish-armada',
    name: 'Defeat of the Spanish Armada',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'England\'s defeat of the Spanish Armada in 1588, which crippled Spanish naval dominance and opened the Atlantic to English colonial expansion.',
    significance:
      'The Armada\'s defeat was a turning point that transferred Atlantic dominance from Spain to England, removing the primary military obstacle to English colonization of North America. Because Spanish colonies were state-funded, the blow to Spain\'s treasury undermined its colonial infrastructure, while England\'s victory gave private investors confidence to fund ventures like Roanoke and, eventually, Jamestown. For LEQ essays comparing European colonization, the Armada explains why English colonization accelerated in the late 1580s–1600s.',
    context: 'The defeat came in 1588 after decades of English-Spanish rivalry over religion, trade, and Atlantic routes; Raleigh\'s second Roanoke expedition followed almost immediately, and Jamestown was founded nineteen years later.',
    themes: ['America in the World', 'Politics and Power'],
    connections: ['walter-raleigh', 'first-roanoke-colony', 'chartered-companies', 'spains-vast-empire'],
    mcqs: [
      {
        question: 'England\'s defeat of the Spanish Armada in 1588 most directly contributed to which of the following developments?',
        options: [
          'Spain abandoning all its American colonies within the next decade',
          'Increased English confidence and investment in North American colonization',
          'France becoming the dominant naval power in the Atlantic',
          'The end of the encomienda system in Spanish territories'
        ],
        answerIndex: 1,
        explanation: 'The Armada\'s defeat removed the immediate Spanish military threat to English Atlantic ventures and inspired confidence in private investors, accelerating the push toward permanent English colonies. Spain retained its colonies for centuries (A), France did not dominate the Atlantic thereafter (C), and encomienda persisted until the Pueblo Revolt forced reforms (D).',
      },
      {
        question: 'The relationship between Spain\'s state-funded colonial model and the Armada\'s defeat best illustrates which historical pattern?',
        options: [
          'Centralized government control of colonies tends to produce more stable and prosperous settlements',
          'Military defeats can undermine state-funded colonial enterprises more severely than private ones',
          'Naval power had little bearing on the success of land-based colonial ventures',
          'Protestant nations were more committed to colonization than Catholic ones'
        ],
        answerIndex: 1,
        explanation: 'Because Spanish colonies depended on crown funding, the Armada\'s drain on the treasury directly weakened the colonial system; England\'s private chartered model was more resilient to military setbacks. State control did not consistently produce stability (A), naval power was essential to protecting trade routes (C), and religious identity did not straightforwardly predict colonial commitment (D).',
      },
    ],
  },

  // ── Legislation & Documents ──────────────────────────────────────────────────

  {
    id: 'ordinances-of-discovery',
    name: 'Ordinances of Discovery',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Legislation & Documents',
    tags: ['SAQ', 'causation'],
    summary: 'Spanish laws passed in 1573 that prohibited outright military conquest of Native peoples, mandating instead the use of Catholic missionaries to incorporate indigenous populations.',
    significance:
      'The Ordinances reveal the Spanish crown\'s awareness that pure military conquest was both morally contested and economically inefficient, showing that colonial policy could be shaped by moral arguments (particularly from the Church). By substituting missionaries for soldiers as the primary tool of empire, Spain created a distinctive colonial model — the mission system — that shaped the cultural geography of the American Southwest for centuries. For APUSH essays, the Ordinances illustrate that Spanish colonialism was not monolithic and that indigenous resistance could prompt reform.',
    context: 'The Ordinances emerged after decades of brutal conquest and debates like the Valladolid Controversy (1550–1551); they shaped the mission system that the Pueblo people later revolted against in 1680.',
    themes: ['Politics and Power', 'American and Regional Culture'],
    connections: ['catholic-missions', 'encomienda-system', 'pueblo-revolt-1680', 'st-augustine'],
  },

  {
    id: 'new-colonial-charters',
    name: 'Virginia Company Charters (1606)',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Legislation & Documents',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Royal charters granted by James I that divided the American eastern seaboard between the London Company (Chesapeake) and Plymouth Company (New England), institutionalizing the chartered-company model of colonization.',
    significance:
      'The charters created the legal and financial architecture of English colonial America, establishing that private joint-stock companies — not the crown — would bear the cost and governance of settlement. This division between north and south encoded regional differences in colonial organization, culture, and economy that persisted through the Civil War. For APUSH essays, the charters are a key piece of evidence for arguments about how English colonization differed from Spanish (state-directed) colonization.',
    context: 'The charters were granted in 1606, building on Walter Raleigh\'s failed patent model and the lessons of Roanoke; they directly produced Jamestown\'s 1607 founding.',
    themes: ['Politics and Power', 'Work, Exchange, and Technology'],
    connections: ['walter-raleigh', 'first-roanoke-colony', 'early-problems-jamestown', 'chartered-companies'],
    mcqs: [
      {
        question: 'The 1606 Virginia Company Charters most directly reflect which feature of English colonial policy?',
        options: [
          'The crown\'s desire to maintain direct administrative control over all American settlements',
          'A preference for private, profit-seeking enterprises to fund and govern colonial ventures',
          'English commitment to protecting Native American land rights',
          'Parliamentary authority over colonial affairs'
        ],
        answerIndex: 1,
        explanation: 'The charters delegated settlement to private joint-stock companies, reflecting England\'s reliance on commercial capital rather than crown funding. The crown did not maintain direct control (A), Native rights were not protected (C), and Parliament played no significant role in early colonial charters (D).',
      },
      {
        question: 'The geographic division created by the 1606 charters between the London and Plymouth companies foreshadowed which later development?',
        options: [
          'The establishment of the Mason-Dixon line',
          'The emergence of culturally and economically distinct northern and southern colonial regions',
          'The formation of the First Continental Congress',
          'Religious conflict between Anglican Chesapeake settlers and Puritan New Englanders'
        ],
        answerIndex: 1,
        explanation: 'The north-south charter division reinforced the development of the Chesapeake plantation economy versus New England\'s mixed economy and town-meeting governance — distinctions that shaped American sectionalism. The Mason-Dixon line came later and for different reasons (A), the Continental Congress was a product of eighteenth-century events (C), and religious conflict was real but secondary to the broader economic-cultural divergence (D).',
      },
    ],
  },

  // ── Movements & Ideologies ───────────────────────────────────────────────────

  {
    id: 'columbian-exchange',
    name: 'Columbian Exchange',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Movements & Ideologies',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The transatlantic transfer of plants, animals, diseases, and peoples between the Old World and the Americas that followed Columbus\'s 1492 voyage.',
    significance:
      'The Columbian Exchange fundamentally transformed global ecology, demography, and economics: European livestock reshaped Native land use, American crops (corn, potatoes) eventually sustained massive European population growth, and European diseases devastated indigenous populations. For any APUSH essay on Period 1, the Columbian Exchange is the connective tissue — it explains the demographic catastrophe, the shift to African slavery, and the emergence of new colonial economies. It is one of the most tested topics across DBQ, LEQ, and SAQ formats.',
    context: 'The Exchange began immediately after 1492 and accelerated with permanent Spanish settlement; its biological effects (disease especially) moved far ahead of European settlers themselves.',
    themes: ['Geography and the Environment', 'Work, Exchange, and Technology', 'Social Structures'],
    connections: ['demographic-catastrophe', 'new-crops-agricultural-techniques', 'increasing-levels-of-exchange', 'collision-of-cultures', 'growth-of-african-slave-trade'],
    mcqs: [
      {
        question: 'Which of the following was the most significant immediate consequence of the Columbian Exchange for Native American peoples?',
        options: [
          'Access to European metal tools improved Native agricultural productivity',
          'Introduction of European livestock transformed Plains Native hunting cultures',
          'European diseases caused catastrophic population decline across the Americas',
          'Trade relationships with Europeans strengthened most Native political structures'
        ],
        answerIndex: 2,
        explanation: 'Disease was by far the most immediately devastating aspect of the Exchange for Native peoples, killing an estimated 90% of some populations within decades of contact. Metal tools came later and varied by region (A), horses transformed Plains cultures but this developed over time (B), and trade generally weakened rather than strengthened Native political structures (D).',
      },
      {
        question: 'The Columbian Exchange best supports which of the following historical arguments?',
        options: [
          'European colonization was primarily driven by religious motives',
          'Biological and ecological factors were as important as military conquest in shaping colonial outcomes',
          'Native Americans and Europeans engaged in equal and mutually beneficial exchange',
          'European colonization had minimal long-term environmental impact on the Americas'
        ],
        answerIndex: 1,
        explanation: 'The Exchange demonstrates that disease, crops, and animals — not just weapons — determined who survived and who perished, making ecology central to colonial history. Religion was one motive among many (A), the exchange was profoundly unequal (C), and environmental impact was massive (D).',
      },
    ],
  },

  {
    id: 'encomienda-system',
    name: 'Encomienda System',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Movements & Ideologies',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'The Spanish colonial labor system that granted conquistadors and colonists the right to extract tribute and forced labor from Native American communities in exchange for supposed Christian instruction.',
    significance:
      'The encomienda system institutionalized the exploitation of Native labor at a scale that fueled Spain\'s vast colonial empire and drove the demographic catastrophe. Its brutal application — especially in the silver mines — generated both immense wealth for Spain and moral opposition that eventually produced legal reforms like the Ordinances of Discovery. For APUSH essays, the encomienda is the defining example of extractive colonial labor and a critical comparison point with English indentured servitude and later African slavery.',
    context: 'The encomienda was established in the early 1500s; abuses prompted the New Laws of 1542 and the Ordinances of 1573, and Native resistance in the Pueblo Revolt of 1680 effectively ended it in New Mexico.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'Politics and Power'],
    connections: ['pueblo-revolt-1680', 'ordinances-of-discovery', 'spains-vast-empire', 'demographic-catastrophe', 'varied-labor-system'],
    mcqs: [
      {
        question: 'The encomienda system in Spanish America most directly resulted in which of the following?',
        options: [
          'The peaceful integration of Native peoples into Spanish colonial society',
          'Massive extraction of Native labor and resources that funded Spanish imperial expansion',
          'The rapid development of a free-market economy in the Americas',
          'Widespread conversion of Native peoples to Catholicism without coercion'
        ],
        answerIndex: 1,
        explanation: 'Encomienda\'s forced labor, especially in silver mines, generated the wealth that made Spain the dominant world power in the 1500s. There was no peaceful integration (A), markets were mercantilist not free (C), and religious conversion was deeply coercive (D).',
      },
      {
        question: 'How does the encomienda system compare to English indentured servitude in early Virginia?',
        options: [
          'Both systems were abolished by their respective governments within a generation',
          'Both exploited coerced labor to produce export commodities, but differed in the legal status and ethnicity of workers',
          'Both systems relied exclusively on African workers',
          'Both systems were voluntary arrangements offering workers land upon completion of service'
        ],
        answerIndex: 1,
        explanation: 'Both encomienda and indentured servitude exploited labor for commodity production (silver/tobacco), but encomienda used conquered Native peoples under permanent coercion while indentured servitude was nominally contractual and used primarily European workers. Neither was quickly abolished (A), neither relied exclusively on Africans (C), and encomienda was never voluntary (D).',
      },
    ],
  },

  {
    id: 'mercantilism',
    name: 'Mercantilism',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Movements & Ideologies',
    tags: ['LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The dominant European economic theory that colonies existed to enrich the mother country by maximizing exports and minimizing imports, making national wealth the supreme goal of trade policy.',
    significance:
      'Mercantilism was the ideological engine behind all European colonization: it justified extraction, colonial monopolies, and the suppression of colonial economic independence. For APUSH essays spanning multiple periods, mercantilism is a continuity that stretches from Period 1 through the Navigation Acts (Period 2) to the colonial grievances that sparked the Revolution (Period 3). Understanding mercantilism as the framework within which all colonial policies operated is essential for answering causation and continuity-and-change prompts.',
    context: 'Mercantilism rose alongside the Portuguese and Spanish empires in the 1400s–1500s and was refined by England throughout the 1600s; it remained dominant colonial policy until the late 1700s.',
    themes: ['Work, Exchange, and Technology', 'America in the World', 'Politics and Power'],
    connections: ['spains-vast-empire', 'chartered-companies', 'richard-hakluyt', 'encomienda-system'],
    mcqs: [
      {
        question: 'Mercantilist theory most directly shaped which feature of European colonial policy in Period 1?',
        options: [
          'The use of missionary activity to convert indigenous peoples',
          'The extraction of resources and prohibition of colonial manufacturing to benefit the mother country',
          'The establishment of democratic self-governance in colonial settlements',
          'The promotion of free trade between colonies and foreign nations'
        ],
        answerIndex: 1,
        explanation: 'Mercantilism dictated that colonies exist to supply raw materials and buy finished goods from the metropole, directly producing the extractive labor systems (encomienda, tobacco plantations) of Period 1. Missionary activity served religious and political, not strictly mercantilist, goals (A), mercantilism opposed self-governance (C), and it explicitly opposed free trade (D).',
      },
      {
        question: 'Which of the following best represents a continuity in APUSH from Period 1 through Period 3?',
        options: [
          'European powers pursued mercantilist colonial policies that subordinated colonial economic interests to the mother country\'s',
          'Native Americans maintained political independence throughout the colonial era',
          'African slavery was the primary labor system across all colonial regions',
          'Protestant religious motivations drove all European colonial ventures'
        ],
        answerIndex: 0,
        explanation: 'Mercantilist policy — from Spanish encomienda to English Navigation Acts — consistently subordinated colonial economies to metropolitan interests across Periods 1–3, making it a textbook continuity. Native independence was progressively eroded (B), slavery expanded but was not universal in Period 1 (C), and Catholic Spain and France were major colonial powers (D).',
      },
    ],
  },

  {
    id: 'doctrine-of-predestination',
    name: 'Doctrine of Predestination',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Movements & Ideologies',
    tags: ['LEQ', 'causation'],
    summary: 'John Calvin\'s theological teaching that God has predetermined whether each soul is saved or damned, which shaped Puritan identity and motivated migration to the Americas.',
    significance:
      'Predestination gave Puritans a powerful psychological incentive to demonstrate their elect status through hard work, moral rigor, and community building — creating the cultural foundation for New England\'s distinctive work ethic and civic culture. The belief that visible success (material and moral) signaled divine election connected Calvinist theology directly to economic behavior, a link Max Weber later called the "Protestant ethic." For LEQ essays comparing colonial regions, predestination explains why New England developed differently from the Chesapeake.',
    context: 'Calvin developed predestination theology in the mid-1500s; it reached the American colonies via English Puritans fleeing persecution in the 1620s–1630s.',
    themes: ['American and Regional Culture', 'American and National Identity', 'Social Structures'],
    connections: ['john-calvin', 'puritan-separatists', 'english-reformation', 'puritan-discontent'],
  },

  {
    id: 'english-reformation',
    name: 'The English Reformation',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Movements & Ideologies',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: "Henry VIII's break with the Catholic Church in the 1530s, which created the Church of England and set off decades of religious conflict that eventually drove Puritan settlers to America.",
    significance:
      'The English Reformation created the religious instability — competing factions of Catholics, Anglicans, and Puritans — that made the Americas attractive as a refuge for religious dissenters. Without the Reformation, there would be no Puritan migration and no distinctly Protestant New England. For APUSH causation essays, the Reformation is a root cause linking Period 1 religious conflict to the Puritan Great Migration of Period 2.',
    context: "Henry VIII broke with Rome in 1534; his daughter Mary I's Catholic persecution and Elizabeth I's Protestant settlement intensified religious divisions that peaked under James I's persecution of Puritans.",
    themes: ['American and Regional Culture', 'Politics and Power', 'Migration and Settlement'],
    connections: ['puritan-separatists', 'puritan-discontent', 'doctrine-of-predestination', 'john-calvin'],
    mcqs: [
      {
        question: 'The English Reformation most directly contributed to which of the following developments in the American colonies?',
        options: [
          'The establishment of Catholic missions along the eastern seaboard',
          'The migration of religious dissenters who shaped the cultural character of New England',
          'Parliamentary authority over colonial religious affairs',
          'A unified Protestant religious culture across all English colonies'
        ],
        answerIndex: 1,
        explanation: 'The Reformation\'s religious turmoil produced Puritans and Separatists who emigrated to New England, giving that region its distinctive theocratic and civic culture. The eastern seaboard missions were Spanish, not English (A), Parliament had no authority over colonial religion at this stage (C), and colonial religious culture was far from unified (D).',
      },
      {
        question: 'How did the English Reformation differ most fundamentally from the Protestant Reformation led by Martin Luther?',
        options: [
          'The English Reformation was motivated primarily by royal political interests rather than theological disagreement',
          'Luther\'s Reformation rejected all sacraments while the English church retained them',
          'The English Reformation was a grassroots popular movement while Luther acted alone',
          'Luther\'s Reformation created a state church while the English church remained independent of government'
        ],
        answerIndex: 0,
        explanation: 'Henry VIII broke with Rome primarily because the Pope refused to annul his marriage — a political and dynastic dispute — not because of deep theological convictions, unlike Luther\'s doctrinal objections to Catholic teaching. Both reformations retained some sacraments (B), the English Reformation was largely crown-directed (C), and Luther\'s churches became deeply intertwined with German princes (D).',
      },
    ],
  },

  {
    id: 'puritan-separatists',
    name: 'Puritan Separatists',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Movements & Ideologies',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Radical Protestants who sought to completely separate from the Church of England, and whose persecution in England made American colonies an attractive destination.',
    significance:
      'Puritan Separatists represent the religious-liberty motive for English colonization — a fundamentally different driver than the economic motives behind Jamestown. Their migration would create the Puritan colonies of New England, establishing a regionally distinct culture defined by congregational church governance, high literacy (for Bible reading), and strong civic community institutions. For LEQ and SAQ comparisons between Chesapeake and New England, Puritan Separatists are the starting point.',
    context: 'Separatist ideas developed in the late 1500s–early 1600s; actual migration began with the Pilgrims in 1620 (technically outside Period 1 but rooted in Period 1 tensions).',
    themes: ['American and Regional Culture', 'Migration and Settlement', 'American and National Identity'],
    connections: ['english-reformation', 'puritan-discontent', 'doctrine-of-predestination', 'john-calvin'],
    mcqs: [
      {
        question: 'The Puritan Separatists\' decision to emigrate to North America was most directly caused by',
        options: [
          'Economic hardship from the Enclosure Movement',
          'Religious persecution and lack of toleration within the Church of England',
          'Spanish military threats to English Protestant communities',
          'Royal grants of free land in the American colonies'
        ],
        answerIndex: 1,
        explanation: 'Separatists emigrated primarily to escape the persecution they faced as dissenters from the Church of England under James I and Charles I. The Enclosure Movement affected a different population (A), Spanish threats were not directed at English Puritans internally (C), and land grants were a secondary pull factor, not the primary push (D).',
      },
      {
        question: 'Compared to Jamestown settlers, Puritan Separatists who founded New England colonies were most distinguished by',
        options: [
          'Their desire to create profitable tobacco plantations',
          'Their primary motivation of religious freedom and community covenant',
          'Their willingness to integrate with Native American societies',
          'Their dependence on African enslaved labor from the start'
        ],
        answerIndex: 1,
        explanation: 'While Jamestown was driven by profit (tobacco, gold), New England Puritans\' primary goal was establishing a godly community — a religiously motivated covenant society. Neither group was known for Native integration (C), and African slavery came to New England later and at far lower scale (D).',
      },
    ],
  },

  {
    id: 'puritan-discontent',
    name: 'Puritan Discontent under James I',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Movements & Ideologies',
    tags: ['causation'],
    summary: 'The growing alienation of English Puritans under James I, who antagonized them through arbitrary taxation, favoritism toward Catholics, and refusal to reform the Church of England.',
    significance:
      'Puritan discontent under James I transformed abstract religious dissent into practical migration pressure, making American colonization a concrete escape option for tens of thousands. This discontent also reveals the political dimensions of English colonization: the same royal arbitrary power that drove Puritans to America also fueled the parliamentary conflicts that would eventually produce the English Civil War. For APUSH causation essays, James I\'s policies are a proximate cause of the Great Migration.',
    context: 'James I succeeded Elizabeth I in 1603; his religious favoritism and tax policies escalated under his son Charles I, culminating in the Great Migration of the 1630s.',
    themes: ['Politics and Power', 'Migration and Settlement'],
    connections: ['puritan-separatists', 'english-reformation', 'doctrine-of-predestination'],
  },

  {
    id: 'plantation-model',
    name: 'The Plantation Model',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Movements & Ideologies',
    tags: ['LEQ', 'SAQ', 'comparison', 'causation'],
    summary: 'The English colonial strategy of establishing fenced, self-contained European settlements that excluded and displaced Native peoples, derived from English colonization practices in Ireland.',
    significance:
      'The plantation model explains why English colonization was more territorially aggressive and culturally exclusive than French or Spanish approaches: rather than trading or missionizing within Native societies, the English built enclosed communities that required clearing Native people from the land. This model directly produced the cycle of encroachment and conflict that characterized English-Native relations in Virginia. For comparison essays, the plantation model is the key structural difference between English and French colonial strategies.',
    context: 'Developed from English governance of Ireland in the mid-to-late 1500s; applied at Roanoke and then Jamestown, and replicated throughout British North America.',
    themes: ['Migration and Settlement', 'Geography and the Environment', 'Social Structures'],
    connections: ['subjugation-of-ireland', 'humphrey-gilbert', 'walter-raleigh', 'first-roanoke-colony', 'early-problems-jamestown'],
    mcqs: [
      {
        question: 'The English plantation model of colonization, as derived from practices in Ireland, differed most fundamentally from French colonization in that',
        options: [
          'English colonies were funded by the crown while French colonies were privately funded',
          'English colonizers sought to displace Native peoples and create separate communities, while French colonizers built trade networks within Native societies',
          'English colonies relied on African slave labor while French colonies did not',
          'English colonizers converted Native peoples to Protestantism while the French did not attempt conversion'
        ],
        answerIndex: 1,
        explanation: 'The plantation model\'s defining feature was exclusion: English settlers built walled or bounded communities that required Native displacement, whereas French coureurs de bois and traders operated within Native social and economic networks. Both crown and private funding models existed in both nations (A), labor systems varied (C), and French Jesuits did attempt conversion (D).',
      },
      {
        question: 'The origins of the English plantation model in Ireland most directly illustrates which broader historical pattern?',
        options: [
          'Colonial practices developed in one context were frequently transferred and applied in new settings',
          'England had more experience with colonization than Spain or France',
          'Religious differences were the primary source of conflict between colonial powers',
          'Indigenous peoples in Ireland and America shared similar cultural responses to colonization'
        ],
        answerIndex: 0,
        explanation: 'The direct transfer of Irish displacement tactics to the Americas — with many of the same individuals involved — exemplifies how colonial methods were iterated across different theaters. England was a relative latecomer to colonization (B), religious conflict was one of many sources of tension (C), and the Irish and Native American responses were different in important ways (D).',
      },
    ],
  },

  // ── Economic Concepts ────────────────────────────────────────────────────────

  {
    id: 'spains-vast-empire',
    name: "Spain's Vast Empire",
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Economic Concepts',
    tags: ['LEQ', 'SAQ', 'comparison', 'causation'],
    summary: "Spain's dominant colonial empire built on silver and gold extraction from the Americas, which gave Spain control of roughly 90% of global precious metals and made it the world's preeminent power.",
    significance:
      "Spain's silver wealth funded its military and political dominance throughout the 1500s but also created inflation (the \"price revolution\") that destabilized European economies. The centralized, state-directed nature of Spain's colonial empire contrasted sharply with England's chartered-company model, making Spain's vulnerability to military setbacks (like the Armada) much greater. For LEQ comparison essays, Spain's empire is the baseline against which all other European colonial models are measured.",
    context: "Spanish dominance was established by the mid-1500s; it began to erode after the Armada's defeat in 1588 and as silver production declined in the early 1600s.",
    themes: ['Work, Exchange, and Technology', 'America in the World', 'Politics and Power'],
    connections: ['encomienda-system', 'mercantilism', 'spanish-armada', 'rigid-royal-control'],
    mcqs: [
      {
        question: "Spain's dominance of global silver production in the 1500s most directly resulted from",
        options: [
          'Voluntary trade agreements with indigenous peoples in the Americas',
          'The encomienda system\'s forced extraction of Native American labor in mines',
          'Superior Spanish mining technology developed in Europe',
          'The Columbian Exchange\'s introduction of new agricultural crops'
        ],
        answerIndex: 1,
        explanation: "Spain's silver dominance came from forced Native labor (and later African slave labor) in mines like Potosí, organized through the encomienda system. Indigenous peoples were coerced, not willing partners (A), technology played a secondary role to coerced labor (C), and agricultural crops were not the source of silver wealth (D).",
      },
      {
        question: "Compared to England's chartered-company colonial model, Spain's state-directed colonial empire was most vulnerable to",
        options: [
          'Lack of private investment in colonial infrastructure',
          'Military and political setbacks that directly undermined crown-funded colonial finances',
          'Religious conflicts between colonial settlers and the crown',
          'Competition from Dutch trading companies in the Caribbean'
        ],
        answerIndex: 1,
        explanation: "Because Spain's colonies depended on crown funding, the Armada defeat and subsequent military costs drained the treasury and weakened the colonial system — a vulnerability England's privately funded model avoided. Both models had investment (A), religious conflicts were not Spain's primary vulnerability (C), and Dutch competition came later (D).",
      },
    ],
  },

  {
    id: 'enclosure-movement',
    name: 'The Enclosure Movement',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Economic Concepts',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'The conversion of English common farmland into private sheep pastures by large landowners, which displaced thousands of tenant farmers and created a surplus landless population that became a source of colonial migrants.',
    significance:
      'The Enclosure Movement is the domestic English economic crisis that made colonization attractive to ordinary people: displaced farmers had nothing to lose by emigrating to America. This surplus population was what Richard Hakluyt argued colonies would absorb, and it supplied the indentured servants who populated Virginia. For causation essays, the Enclosure Movement is a root cause connecting English economic changes directly to the labor supply of the early Chesapeake.',
    context: 'Enclosure accelerated from the 1400s through the 1600s during the global mini ice age that raised wool demand; its displaced population became indentured servants in the American colonies.',
    themes: ['Work, Exchange, and Technology', 'Migration and Settlement', 'Social Structures'],
    connections: ['richard-hakluyt', 'mercantilism', 'headright-system', 'varied-labor-system'],
    mcqs: [
      {
        question: 'The Enclosure Movement in England most directly contributed to which development in the American colonies?',
        options: [
          'The establishment of a wool-based economy in New England',
          'A surplus of landless English workers available for colonial indentured servitude',
          'The rapid growth of a middle-class merchant population in Virginia',
          'Parliamentary support for increased royal taxation to fund colonial ventures'
        ],
        answerIndex: 1,
        explanation: "Enclosure created a mass of dispossessed farmers who, with no land or prospects in England, were willing to accept indentures to work in Virginia — supplying the Chesapeake's early labor force. No wool economy developed in the colonies (A), a merchant middle class came later (C), and Enclosure actually reduced support for royal taxation (D).",
      },
      {
        question: 'Which of the following is the most accurate causal chain linking the Enclosure Movement to the tobacco economy of early Virginia?',
        options: [
          'Enclosure → surplus wool → trade with Virginia → tobacco exchange',
          'Enclosure → displaced farmers → indentured servants in Virginia → tobacco labor force',
          'Enclosure → English famine → crown subsidies → Virginia food production',
          'Enclosure → urbanization → merchant class → Virginia Company investment'
        ],
        answerIndex: 1,
        explanation: 'Enclosure displaced farmers who became indentured servants, and their labor in Virginia enabled the tobacco economy to function. The other chains contain factual gaps or reversals (A, C, D).',
      },
    ],
  },

  {
    id: 'headright-system',
    name: 'The Headright System',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Economic Concepts',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'The Virginia policy of granting 50 acres of land to any colonist who paid their own passage or sponsored another settler\'s migration, designed to attract population to the struggling colony.',
    significance:
      'The headright system solved Jamestown\'s labor shortage by incentivizing both migration and sponsorship, but it simultaneously created a class of wealthy planters who accumulated vast landholdings at the expense of the landless. Over time, the system\'s failure to deliver on land promises to freed indentured servants became a cause of social unrest, contributing to Bacon\'s Rebellion in 1676. For LEQ essays, the headright system illustrates how colonial labor policies created the social hierarchies that destabilized later colonial Virginia.',
    context: 'The headright system was introduced around 1618 to address chronic labor shortages after the Starving Time; it operated alongside the tobacco economy through most of the seventeenth century.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'Migration and Settlement'],
    connections: ['emergence-of-tobacco-economy', 'enclosure-movement', 'early-problems-jamestown', 'varied-labor-system'],
    mcqs: [
      {
        question: 'The headright system in Virginia was primarily designed to address which colonial problem?',
        options: [
          'Religious conflict between Anglican and Puritan settlers',
          'Chronic labor shortages in the tobacco-growing Chesapeake region',
          'The threat of Spanish military incursion into Virginia territory',
          'Overproduction of tobacco that depressed colonial prices'
        ],
        answerIndex: 1,
        explanation: 'The headright system incentivized migration and sponsorship to build the labor force the tobacco economy required. Religious conflict was minimal in early Virginia (A), Spanish threats were not the primary concern (C), and tobacco overproduction came later (D).',
      },
      {
        question: 'A historian arguing that the headright system contributed to long-term social instability in Virginia would most likely emphasize which consequence?',
        options: [
          'It created large land holdings for wealthy planters while leaving freed servants landless',
          'It brought too many skilled craftsmen who competed with tobacco planters',
          'It reduced the incentive for planters to import African enslaved laborers',
          'It caused rapid deforestation that made tobacco farming unsustainable'
        ],
        answerIndex: 0,
        explanation: 'Wealthy planters accumulated land through headrights while many freed indentured servants received nothing, creating a landless class whose frustration fueled events like Bacon\'s Rebellion (1676). The system brought laborers, not craftsmen (B), it actually prefigured the transition to enslaved labor (C), and deforestation was not its primary consequence (D).',
      },
    ],
  },

  {
    id: 'varied-labor-system',
    name: 'Varied Labor Systems in Early Colonies',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Economic Concepts',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'comparison'],
    summary: 'The mix of Native coerced labor, European indentured servitude, and early African enslavement that colonial powers used to meet the labor demands of plantation and mining economies.',
    significance:
      'The evolution of colonial labor systems — from Native encomienda to European indenture to African slavery — is one of the most important causation stories in APUSH, connecting Period 1 through Period 5. Each transition was driven by labor supply crises: Native population collapse pushed Spanish colonizers to Africans; freed indentured servants demanding land pushed Chesapeake planters toward permanent African slavery. For DBQ essays on colonial labor or slavery\'s origins, varied labor systems is the framework.',
    context: 'Labor system variety was most pronounced in Period 1–2 before African chattel slavery consolidated as the dominant model in the Chesapeake after roughly 1670.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'Migration and Settlement'],
    connections: ['encomienda-system', 'headright-system', 'growth-of-african-slave-trade', 'demographic-catastrophe', 'enclosure-movement'],
    mcqs: [
      {
        question: 'Which of the following best explains the transition from Native American to African enslaved labor in Spanish American colonies?',
        options: [
          'Africans were better suited to tropical climates than Native Americans',
          'The demographic collapse of Native populations created a labor shortage that African enslaved labor filled',
          'The Spanish crown prohibited Native labor in all forms after 1542',
          'African workers were cheaper than Native workers due to established trade networks'
        ],
        answerIndex: 1,
        explanation: 'Disease killed enormous numbers of indigenous workers, making them an unreliable labor supply; African enslavement filled the gap. Climate arguments are racist and historically inaccurate (A), the New Laws of 1542 restricted but did not universally prohibit Native labor (C), and cost calculations favored enslaved Africans for different structural reasons (D).',
      },
      {
        question: 'The variety of labor systems in early colonial America best supports which historical argument?',
        options: [
          'Colonial labor systems were determined primarily by racial ideology from the start',
          'Colonial labor systems evolved pragmatically in response to labor supply and economic demand',
          'All European colonial powers eventually adopted identical labor systems',
          'Religious beliefs were the primary determinant of which labor systems colonizers chose'
        ],
        answerIndex: 1,
        explanation: 'The shift from one labor system to another (Native → indentured → enslaved African) followed economic need and labor supply realities, not a predetermined racial plan — racial ideology hardened later to justify existing systems. Labor systems varied significantly across colonial powers (C is wrong), and religious beliefs were not the primary labor determinant (D).',
      },
    ],
  },

  // ── Sub-entries: Economic and Social Concepts ────────────────────────────────

  {
    id: 'chartered-companies',
    name: 'Chartered Companies',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Economic Concepts',
    tags: ['LEQ', 'SAQ', 'comparison'],
    summary: 'Joint-stock companies granted royal charters giving them trade, exploration, and settlement rights in exchange for bearing the costs and risks of colonization.',
    significance:
      'Chartered companies were England\'s mechanism for privatizing the costs and risks of colonization, allowing the crown to expand its empire without direct treasury expenditure. This model produced fundamentally different colonial governance than Spain\'s state-directed system: company shareholders sought profit, which shaped everything from land policy to labor recruitment. The Virginia Company\'s eventual bankruptcy (1624) also demonstrated the model\'s fragility and forced the crown to take direct control of Virginia.',
    context: 'Chartered companies emerged in the late 1500s–early 1600s as England refined its colonial strategy after the Roanoke failures; the Virginia Company founded Jamestown in 1607.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'America in the World'],
    connections: ['mercantilism', 'richard-hakluyt', 'new-colonial-charters', 'early-problems-jamestown'],
  },

  {
    id: 'emergence-of-tobacco-economy',
    name: 'Emergence of the Tobacco Economy',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Economic Concepts',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'The development of tobacco as the primary cash crop of colonial Virginia after John Rolfe\'s 1614 hybrid, which saved Jamestown and shaped the Chesapeake\'s plantation economy.',
    significance:
      'Tobacco transformed Virginia from a failing settlement into the foundation of England\'s most profitable colony, but at enormous social cost: it drove Native land dispossession, created the insatiable demand for labor that produced African chattel slavery, and established the plantation as the defining institution of the American South. For LEQ essays on colonial economic development or the origins of slavery, the tobacco economy is the pivot point. It also illustrates how a single commodity crop can reshape an entire region\'s social structure.',
    context: 'Tobacco cultivation began around 1614 after the Starving Time nearly ended Jamestown; by the 1620s it dominated Chesapeake land use and labor recruitment.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'Geography and the Environment'],
    connections: ['john-rolfe', 'headright-system', 'early-problems-jamestown', 'varied-labor-system', 'de-la-warr-harsh-discipline'],
  },

  {
    id: 'de-la-warr-harsh-discipline',
    name: "De La Warr's Harsh Discipline",
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'People',
    tags: ['causation'],
    summary: "Virginia Governor De La Warr's severe martial law regime at Jamestown, which used brutal punishment to enforce labor but was replaced by incentive-based land grants after proving unpopular.",
    significance:
      "De La Warr's tenure illustrates the fundamental tension in early colonial governance between coercion and incentive as tools for maintaining a labor force. His failure and replacement by a land-grant policy (the headright system) shows how colonial leaders learned that voluntary settlement required positive incentives, foreshadowing the shift from indenture to enslaved labor when voluntary migration proved insufficient. For SAQ responses about early Jamestown, this episode demonstrates how governance evolved under pressure.",
    context: "De La Warr arrived at Jamestown in 1610 immediately after the Starving Time; his successor's land-grant approach produced the headright system that shaped Virginia migration for decades.",
    themes: ['Politics and Power', 'Work, Exchange, and Technology'],
    connections: ['starving-time', 'headright-system', 'emergence-of-tobacco-economy', 'early-problems-jamestown'],
  },

  // ── Social / Cultural Concepts ───────────────────────────────────────────────

  {
    id: 'a-complex-racial-hierarchy',
    name: 'Complex Racial Hierarchy in Spanish Colonies',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Movements & Ideologies',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'comparison'],
    summary: 'The formal caste system in Spanish American colonies that ranked people by racial mixture, placing Spanish-born Europeans at the top, mixed-race Mestizos in the middle, and indigenous peoples at the bottom.',
    significance:
      'The Spanish racial hierarchy (the "casta" system) was a formalized, legalized structure that embedded racial inequality into law and social institutions, contrasting with the more fluid but equally oppressive racial hierarchies that developed in English colonies. For APUSH comparison essays, the casta system illustrates that racial hierarchy was not uniquely English or American but a recurring colonial tool for managing mixed populations. It also shows how colonial labor exploitation generated social stratification that outlasted the colonial period.',
    context: 'The casta system crystallized in the mid-1500s as Spanish colonies mixed European, indigenous, and African populations; it persisted through Latin American independence movements.',
    themes: ['Social Structures', 'Politics and Power', 'American and Regional Culture'],
    connections: ['encomienda-system', 'varied-labor-system', 'collision-of-cultures', 'growth-of-african-slave-trade'],
    mcqs: [
      {
        question: 'The Spanish casta system in colonial America most directly reflected which colonial priority?',
        options: [
          'Promoting cultural exchange between European and indigenous peoples',
          'Maintaining social control over a mixed-race population and protecting elite Spanish privilege',
          'Ensuring equal legal rights for baptized indigenous peoples',
          'Encouraging intermarriage to integrate indigenous peoples into colonial society'
        ],
        answerIndex: 1,
        explanation: 'The casta system legally encoded racial hierarchy to preserve Spanish-born elite privilege and manage a complex, mixed population in ways that maintained labor and social order. It actively discouraged rather than promoted cultural equality (A), baptized natives still faced discrimination (C), and while intermarriage was common, it was managed to reinforce hierarchy (D).',
      },
      {
        question: 'Compared to English colonial racial categories, the Spanish casta system was most distinct in that',
        options: [
          'It applied only to enslaved Africans and their descendants',
          'It created formal legal gradations for people of mixed European, indigenous, and African ancestry',
          'It was enforced uniformly across all Spanish territories',
          'It was abolished by the Spanish crown before the end of Period 1'
        ],
        answerIndex: 1,
        explanation: "The casta system's key distinction was its elaborate formal taxonomy of mixed-race categories (Mestizo, Mulato, etc.) that carried specific legal rights and restrictions — English colonial law tended toward binary (Black/white) rather than graduated distinctions. It applied to all racial mixtures, not just Africans (A), enforcement varied widely (C), and it persisted into the 19th century (D).",
      },
    ],
  },

  {
    id: 'increasing-levels-of-exchange',
    name: 'Increasing Levels of Exchange',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'causation', 'continuity-and-change'],
    summary: 'The growing mutual influence between Europeans and Native Americans, including transfers of crops, livestock (especially horses), and diseases that transformed both cultures.',
    significance:
      'The exchanges of Period 1 were not symmetric — disease and displacement disproportionately harmed Natives while Europeans gained crops and lands — but they demonstrate that contact produced cultural transformation in both directions. The introduction of the horse to Plains peoples, for example, fundamentally reshaped Native societies over the next two centuries. For DBQ essays requiring evidence of both continuity and change, the Columbian Exchange and its evolving consequences are central evidence.',
    context: 'Exchange accelerated with permanent European settlement after 1492; the horse\'s diffusion northward from Spanish territories took decades, transforming Plains cultures well into the 1700s.',
    themes: ['Geography and the Environment', 'Work, Exchange, and Technology', 'Social Structures'],
    connections: ['columbian-exchange', 'collision-of-cultures', 'new-crops-agricultural-techniques', 'demographic-catastrophe'],
  },

  {
    id: 'new-crops-agricultural-techniques',
    name: 'New Crops and Agricultural Techniques',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['SAQ', 'causation'],
    summary: "Native Americans' introduction of corn, potatoes, beans, tomatoes, tobacco, and techniques like girdling and controlled burning to European colonizers, transforming colonial agriculture.",
    significance:
      'Native agricultural knowledge was essential to European colonial survival: without Native crops and farming methods, early settlements like Jamestown would not have survived. The global spread of American crops (especially corn and potatoes) eventually enabled massive European population growth, demonstrating that the Columbian Exchange\'s benefits flowed primarily back to Europe. For SAQ responses about Native-European interaction, this topic shows that Natives actively contributed to colonial development rather than merely being displaced by it.',
    context: 'Native agricultural assistance was concentrated in the earliest contact years; European colonizers then adapted and expanded these crops within their own agricultural systems.',
    themes: ['Work, Exchange, and Technology', 'Geography and the Environment'],
    connections: ['columbian-exchange', 'increasing-levels-of-exchange', 'early-problems-jamestown', 'collision-of-cultures'],
  },

  {
    id: 'deliberate-subjugation',
    name: 'Deliberate Subjugation and Extermination',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'causation'],
    summary: 'The intentional use of violence, forced labor, and weaponized disease by Spanish colonizers to subdue and in some cases eliminate indigenous populations.',
    significance:
      'Beyond accidental disease transmission, Spanish colonizers sometimes deliberately used violence and biological agents as tools of conquest, demonstrating that the demographic catastrophe was not entirely unintentional. This challenges narratives that reduce indigenous death entirely to accidental disease spread and supports arguments about colonial genocide for DBQ essays. The pattern of deliberate subjugation also connects to the legal and moral debates that produced the Ordinances of Discovery.',
    context: 'Deliberate violence was most intense during the initial conquest period of the early 1500s; the resulting moral debates produced the Valladolid Controversy and eventually the Ordinances of 1573.',
    themes: ['Politics and Power', 'Social Structures', 'Geography and the Environment'],
    connections: ['demographic-catastrophe', 'encomienda-system', 'ordinances-of-discovery', 'collision-of-cultures'],
  },

  {
    id: 'subjugation-of-ireland',
    name: 'Subjugation of Ireland',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['LEQ', 'SAQ', 'comparison', 'causation'],
    summary: "England's violent colonization of Ireland in the mid-to-late 1500s, which gave English colonizers like Gilbert and Raleigh experience with displacement tactics that they later applied in North America.",
    significance:
      "Ireland was England's colonial laboratory: the rhetoric of 'savagery,' the plantation model, and the use of private military contractors were all refined there before being exported to America. For APUSH comparison essays, the Irish example shows that English colonial violence was not improvised but drew on a pre-existing playbook, and that the categorization of peoples as 'uncivilized' was a strategic tool to justify dispossession. This context is essential for understanding why English-Native relations differed so markedly from French-Native relations.",
    context: 'English colonization of Ireland intensified in the 1560s–1580s; many of the same men (Gilbert, Raleigh) moved directly from Ireland to organizing American ventures.',
    themes: ['Politics and Power', 'Migration and Settlement', 'Social Structures'],
    connections: ['humphrey-gilbert', 'walter-raleigh', 'plantation-model', 'collision-of-cultures'],
    mcqs: [
      {
        question: 'The English subjugation of Ireland in the 1500s is most relevant to APUSH because it',
        options: [
          'Established a model of violent displacement that English colonizers directly applied to Native Americans',
          'Provided England with a large pool of Irish settlers for American colonies',
          'Demonstrated to England that indigenous peoples could be peacefully converted to Christianity',
          'Created economic competition between Ireland and the American colonies'
        ],
        answerIndex: 0,
        explanation: "The plantation model and 'savage' rhetoric developed in Ireland were directly transferred to America by the same individuals, making Ireland the template for English colonial violence. Ireland did not produce the primary settler population for America (B), Irish colonization was not peaceful (C), and economic competition between Ireland and America was not the relevant connection (D).",
      },
      {
        question: 'The comparison between English colonization in Ireland and in North America best supports which conclusion?',
        options: [
          'English colonizers treated all indigenous peoples identically regardless of geography',
          'Colonial practices and justifications were developed iteratively across different colonial contexts',
          'England\'s colonial agenda was primarily motivated by religious conversion',
          'The plantation model was equally successful in Ireland and North America'
        ],
        answerIndex: 1,
        explanation: 'The direct transfer of Irish plantation tactics to America shows how colonizers refined their methods across different settings — a key insight for complexity arguments in APUSH essays. English treatment of peoples varied by context (A), religion was one of several motivations (C), and the plantation model faced serious failures in both Ireland and America (D).',
      },
    ],
  },

  {
    id: 'catholic-missions',
    name: 'Catholic Missions and Missionaries',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Movements & Ideologies',
    tags: ['SAQ', 'comparison', 'causation'],
    summary: 'Spanish religious missions staffed by Catholic priests sent to convert Native Americans to Christianity, often built alongside military forts (presidios) to protect them.',
    significance:
      'The mission system was Spain\'s primary instrument for cultural transformation of Native peoples after the Ordinances of Discovery discouraged pure military conquest. Missions created coercive religious and labor environments that suppressed indigenous cultural practices, directly causing events like the Pueblo Revolt. For comparison essays, the Spanish mission model contrasts with the French fur-trade partnership and the English plantation model as a third distinct approach to incorporating Native peoples into colonial systems.',
    context: 'The mission system expanded rapidly in the Americas from the mid-1500s; the Pueblo Revolt of 1680 forced significant reforms to how missions could operate.',
    themes: ['American and Regional Culture', 'Politics and Power', 'Migration and Settlement'],
    connections: ['ordinances-of-discovery', 'pueblo-revolt-1680', 'st-augustine', 'collision-of-cultures'],
  },

  {
    id: 'st-augustine',
    name: 'St. Augustine',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['SAQ', 'comparison'],
    summary: 'Established in 1565, St. Augustine in present-day Florida was the first permanent European settlement in what is now the United States, serving as a Spanish military outpost.',
    significance:
      'St. Augustine\'s founding predates Jamestown by 42 years and the Plymouth Colony by 55 years, which is important for challenging Anglo-centric narratives of American colonial history. As a military outpost rather than an agricultural settlement, it demonstrates the diversity of colonial purposes: defense of Spanish Caribbean routes, not farming or trade, was the priority. For SAQ comparison questions contrasting Spanish and English settlement patterns, St. Augustine is the Spanish anchor point.',
    context: 'St. Augustine was founded to challenge French Huguenot settlements in Florida; it was the northernmost outpost of Spain\'s Caribbean empire and survived repeated English and Native attacks.',
    themes: ['America in the World', 'Migration and Settlement', 'Politics and Power'],
    connections: ['catholic-missions', 'ordinances-of-discovery', 'spains-vast-empire', 'rigid-royal-control'],
  },

  {
    id: 'rigid-royal-control',
    name: 'Rigid Royal Control in Spanish Colonies',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Movements & Ideologies',
    tags: ['LEQ', 'comparison'],
    summary: "The Spanish crown's direct administrative control over its American colonies through viceroys and royal councils, as opposed to England's delegation of authority to private companies.",
    significance:
      "Spain's top-down governance model created efficient extraction of resources but made colonial administration entirely dependent on the crown's fiscal and military health — a vulnerability exposed by the Armada's defeat. For LEQ comparison essays, rigid royal control is the defining institutional feature that distinguished Spanish from English colonialism: England\'s private company model produced more chaotic but more resilient colonial governance. The contrast also explains why Spanish colonies remained under crown control centuries longer than English ones.",
    context: "Royal control was established with the conquest of Hispaniola and Mexico in the early 1500s; the Council of the Indies governed all Spanish American territories from Madrid.",
    themes: ['Politics and Power', 'America in the World'],
    connections: ['spains-vast-empire', 'encomienda-system', 'spanish-armada', 'mercantilism'],
  },

  {
    id: 'growth-of-african-slave-trade',
    name: 'Growth of the African Slave Trade',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The expansion of the transatlantic trade in enslaved Africans, initially dominated by the Portuguese and then Spain, Dutch, and English, driven by the labor demands of New World plantations.',
    significance:
      'The Atlantic slave trade was the defining demographic and moral catastrophe of the early modern period, forcibly transporting millions of Africans to the Americas and creating the racial slave economies that dominated the Western Hemisphere for centuries. Its origins in Period 1 — fueled by Native population collapse and Caribbean sugar production — connect directly to the later development of African slavery in the English colonies (Period 2–3). For DBQ essays on slavery\'s origins or the Columbian Exchange\'s human costs, this topic is essential.',
    context: 'The Portuguese pioneered the African slave trade in the early 1400s; Spanish demand accelerated it after the Caribbean Native population collapsed; English involvement grew rapidly after 1600.',
    themes: ['Social Structures', 'Work, Exchange, and Technology', 'Migration and Settlement'],
    connections: ['demographic-catastrophe', 'varied-labor-system', 'ghana-mali', 'matrilineal-societies', 'encomienda-system'],
    mcqs: [
      {
        question: 'The initial growth of the African slave trade in the Americas was most directly caused by',
        options: [
          'The profitability of tobacco cultivation in Virginia',
          'The demographic collapse of Native American populations that eliminated the indigenous labor supply',
          'English supremacy over the Atlantic following the Armada\'s defeat',
          'African kingdoms\' refusal to engage in any other form of trade with Europeans'
        ],
        answerIndex: 1,
        explanation: 'The Caribbean\'s Native population was virtually destroyed by disease, eliminating the labor force for sugar production and driving colonizers to import enslaved Africans. Tobacco came later and in a different colony (A), English supremacy came after the initial growth (C), and African kingdoms actively participated in but did not force the trade (D).',
      },
      {
        question: 'Which of the following best explains why the Caribbean became the initial primary destination for enslaved Africans?',
        options: [
          'The Caribbean had the most favorable climate for agricultural production',
          'Native populations had been largely destroyed by disease, creating a labor vacuum for sugar production',
          'Caribbean colonizers were the first to develop a legal framework for African slavery',
          'Spain preferred to use African labor in the Caribbean and Native labor on the mainland'
        ],
        answerIndex: 1,
        explanation: 'Disease had virtually eliminated the Caribbean\'s indigenous population, making it impossible to exploit Native labor, while sugar\'s extreme labor demands required a large workforce — creating ideal conditions for African enslavement. Climate was secondary (A), legal frameworks developed alongside economic need (C), and Spanish labor strategies varied but were not this neatly divided (D).',
      },
    ],
  },

  {
    id: 'ghana-mali',
    name: 'Ghana and Mali Empires',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['SAQ', 'comparison'],
    summary: 'Two powerful West African empires whose economies centered on gold, ivory, and slave trading, and whose sophistication drew European merchants and eventually colonizers to the region.',
    significance:
      'Ghana and Mali demonstrate that Africa was not a passive source of enslaved peoples but rather a continent of sophisticated, organized states with established trade networks that Europeans entered as customers before becoming extractors. For APUSH SAQ questions requiring context about the African origins of the slave trade, these empires show that African elites initially controlled and profited from the trade in enslaved people before European demand overwhelmed African agency. They also illustrate the deep roots of Atlantic commerce.',
    context: 'Ghana dominated West Africa from roughly 300–1200 CE; Mali rose after it, reaching its peak in the 1300s; both were in decline by the time Portuguese traders arrived in the 1400s.',
    themes: ['Work, Exchange, and Technology', 'America in the World', 'Social Structures'],
    connections: ['growth-of-african-slave-trade', 'benin-congo-songhay', 'matrilineal-societies'],
  },

  {
    id: 'benin-congo-songhay',
    name: 'Benin, Congo, and Songhay',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['SAQ', 'comparison'],
    summary: 'Smaller but economically sophisticated West and Central African kingdoms whose production of textiles, ceramics, and ironwork sustained African trade networks and shaped the continent\'s economic capacity.',
    significance:
      'These kingdoms demonstrate Africa\'s economic diversity and sophistication before and during the Atlantic slave trade, countering any notion that Africa lacked complex political or economic organization. Their participation in the slave trade — often as suppliers of enslaved war captives — illustrates the complex and tragic ways that African states were drawn into and transformed by the Atlantic system. For APUSH context about the origins of African slavery, these kingdoms provide essential background.',
    context: 'These kingdoms thrived from roughly the 1000s–1600s; European demand for enslaved labor transformed their economies as they shifted toward capturing and selling people to Atlantic traders.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'America in the World'],
    connections: ['ghana-mali', 'growth-of-african-slave-trade', 'matrilineal-societies'],
  },

  {
    id: 'matrilineal-societies',
    name: 'Matrilineal African Societies',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Movements & Ideologies',
    tags: ['SAQ', 'comparison'],
    summary: 'West and Central African societies organized around maternal lineage, in which property, land, and social status passed through the mother\'s line and women played significant public roles.',
    significance:
      'African matrilineal social organization contrasted sharply with both European patriarchal structures and the patrilineal societies some Native Americans maintained, demonstrating that "African" was not a monolithic identity but encompassed enormous cultural diversity. For APUSH comparison questions about social organization across pre-contact and contact-era societies, matrilineal structures provide an important counterpoint. They also matter because enslaved Africans brought these social patterns to the Americas, where they influenced the development of African American family and community structures.',
    context: 'Matrilineal social structures were common across much of West and Central Africa before and during the Atlantic slave trade era; they persisted in modified forms among African-descended communities in the Americas.',
    themes: ['Social Structures', 'American and Regional Culture'],
    connections: ['ghana-mali', 'benin-congo-songhay', 'growth-of-african-slave-trade'],
  },

  {
    id: 'coureurs-de-bois',
    name: 'Coureurs de Bois',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'People',
    tags: ['LEQ', 'SAQ', 'comparison'],
    summary: 'French fur trappers and traders who acted as middlemen between Native American hunters and European markets, integrating deeply into Native societies unlike English planters.',
    significance:
      'The coureurs de bois represent the French model of colonial interaction: integration within Native trade networks rather than displacement of Native peoples. This model created lasting French-Native alliances that gave France outsized influence in North America relative to its settler population, and it helps explain why Native peoples often allied with France against England. For LEQ comparison essays contrasting colonial powers, the coureurs de bois are the defining example of French colonial strategy.',
    context: 'French fur trading expanded throughout the 1600s during a global mini ice age that drove European demand for pelts; the trade network extended from the St. Lawrence River to the Great Lakes.',
    themes: ['Work, Exchange, and Technology', 'America in the World', 'Social Structures'],
    connections: ['henry-hudson', 'new-amsterdam', 'collision-of-cultures', 'plantation-model'],
    mcqs: [
      {
        question: 'The coureurs de bois of New France most directly illustrate which contrast with English colonial strategy?',
        options: [
          'French colonizers were more interested in converting Native peoples to Christianity than the English',
          'French colonizers built their economy around integration within Native trade networks while English colonizers displaced Native peoples',
          'French colonizers established more permanent agricultural settlements than the English',
          'French colonizers received more royal support than English chartered companies'
        ],
        answerIndex: 1,
        explanation: 'Coureurs de bois worked within Native economic and social structures to acquire furs, creating interdependence rather than displacement — the opposite of the English plantation model. The French had missionaries (Jesuits) but that was separate from the fur trade (A), English settlements were more agricultural (C), and French royal support varied (D).',
      },
      {
        question: 'Which of the following best explains why the fur trade produced different Native-European relations than the plantation economy?',
        options: [
          'Fur trading required violent conquest to access trapping territories',
          'Fur trading depended on Native knowledge and cooperation, creating interdependence rather than displacement',
          'Plantation agriculture was more profitable than fur trading, reducing conflict',
          'Fur trading was exclusively conducted by Native peoples without European participation'
        ],
        answerIndex: 1,
        explanation: 'Successful fur trading required Native hunters, guides, and trade partners — which meant French traders had to maintain positive relations with Native communities. Plantation agriculture required land cleared of Natives (A is wrong direction), profitability is not the relevant variable (C), and Europeans were deeply involved in the trade (D).',
      },
    ],
  },

  {
    id: 'new-amsterdam',
    name: 'New Amsterdam and New Netherland',
    period: 1,
    periodLabel: 'Period 1: 1491–1607',
    category: 'Events',
    tags: ['comparison', 'SAQ'],
    summary: 'The Dutch colonial settlement at the mouth of the Hudson River (present-day New York City) and its surrounding colony, maintained through the patroon system of large land grants.',
    significance:
      'New Amsterdam became one of the most commercially diverse and ethnically pluralistic cities in colonial North America, reflecting the Dutch Republic\'s mercantile and tolerant character. The patroon system introduced a Dutch variant of landed aristocracy to North America. Its later seizure by England (1664) and renaming as New York illustrates how European imperial competition directly shaped the political geography of North America. For comparison essays, New Amsterdam represents a third colonial model distinct from both Spanish and English approaches.',
    context: "Henry Hudson's 1609 voyage established Dutch claims; New Amsterdam was founded around 1626 and grew rapidly before being taken by England in 1664.",
    themes: ['Work, Exchange, and Technology', 'Migration and Settlement', 'America in the World'],
    connections: ['henry-hudson', 'coureurs-de-bois', 'chartered-companies'],
  },
]
