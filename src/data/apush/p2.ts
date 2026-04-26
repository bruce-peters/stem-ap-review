import type { ApushTopic } from "../apush-types";

export const period2Topics: ApushTopic[] = [
  // ── People ───────────────────────────────────────────────────────────────────

  {
    id: "p2-william-bradford",
    name: "William Bradford",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "People",
    tags: ["LEQ", "comparison"],
    summary:
      "Pilgrim leader elected governor of Plymouth Colony and author of Of Plymouth Plantation.",
    significance:
      "Bradford's thirty-year governorship stabilized Plymouth and established a model of communal self-governance that informed later New England politics. His chronicle Of Plymouth Plantation remains the primary firsthand account of early Pilgrim-Wampanoag relations and serves as a key DBQ source. Bradford's emphasis on covenant and community directly shaped the Puritan social framework that defined New England identity.",
    context:
      "Elected governor after the Mayflower landed in 1620; Plymouth was absorbed into Massachusetts Bay Colony in 1691.",
    themes: ["Politics and Power", "American and National Identity"],
    connections: [
      "p2-mayflower-compact",
      "p2-plymouth-indian-relations",
      "p2-massachusetts-bay-company",
    ],
  },

  {
    id: "p2-john-winthrop",
    name: "John Winthrop",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "People",
    tags: ["LEQ", "comparison"],
    summary:
      'First governor of Massachusetts Bay Colony and author of "A Model of Christian Charity," envisioning the colony as a "city upon a hill."',
    significance:
      'Winthrop\'s "city upon a hill" sermon is the definitive statement of Puritan mission and American exceptionalism — examiners regularly ask students to use it in DBQs and LEQs about colonial identity. Under his leadership Boston grew rapidly, demonstrating how strong theocratic governance could build a stable colony. His exclusion of dissenters like Roger Williams and Anne Hutchinson illustrates the limits of Puritan religious liberty.',
    context:
      "Winthrop arrived with the Great Migration of 1630 when thousands of Puritans fled Charles I's religious persecution; Massachusetts Bay became the dominant New England colony.",
    themes: ["American and National Identity", "Politics and Power"],
    connections: [
      "p2-massachusetts-bay-company",
      "p2-congregational-church",
      "p2-theocratic-society",
      "p2-roger-williams",
      "p2-anne-hutchinson",
    ],
    mcqs: [
      {
        question:
          'John Winthrop\'s "city upon a hill" sermon most directly reflected which Puritan belief about Massachusetts Bay Colony?',
        options: [
          "The colony should remain politically separate from England",
          "The colonists had a divine covenant to model a godly society for the world to observe",
          "Religious freedom should be extended to all Christian sects",
          "Economic prosperity was the primary sign of divine favor",
        ],
        answerIndex: 1,
        explanation:
          "Winthrop argued the colonists had a covenant with God to build a righteous society visible to the world, making Massachusetts a moral example. He did not advocate political separation from England (A), Puritans excluded non-Puritan sects (C), and while prosperity mattered, Winthrop's sermon centered on communal obligation and divine mission, not personal wealth (D).",
      },
      {
        question:
          "Which of the following best illustrates the contradiction in Winthrop's vision of Massachusetts as a godly community?",
        options: [
          "His support for separation from the Church of England",
          "His expulsion of Roger Williams and Anne Hutchinson for religious dissent",
          "His encouragement of trade with non-English colonies",
          "His alliance with the Pequot against the Narragansett",
        ],
        answerIndex: 1,
        explanation:
          'Winthrop presided over the banishment of Williams (1636) and the trial of Hutchinson (1637–38), revealing that Puritan "freedom" applied only to those who conformed to the established church — directly contradicting the idea of a welcoming godly community. The other options are either inaccurate or not connected to Winthrop\'s covenant vision.',
      },
    ],
  },

  {
    id: "p2-roger-williams",
    name: "Roger Williams",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "People",
    tags: ["SAQ", "comparison", "LEQ"],
    summary:
      "Puritan minister in Massachusetts who advocated separation of church and state and fair purchase of Native land; founded Rhode Island after banishment.",
    significance:
      "Williams's expulsion from Massachusetts and founding of Rhode Island established the first colonial government explicitly separating civil authority from religious enforcement, a radical precedent. His insistence that land must be purchased from Native peoples, not simply granted by royal charter, challenged the legal basis of English colonialism. Williams is central to LEQ and SAQ questions comparing colonial approaches to religious tolerance.",
    context:
      "Banished from Massachusetts in 1636 after clashing with Winthrop's government; Rhode Island became a refuge for religious dissenters throughout the colonial period.",
    themes: [
      "Politics and Power",
      "American and Regional Culture",
      "American and National Identity",
    ],
    connections: [
      "p2-john-winthrop",
      "p2-anne-hutchinson",
      "p2-growing-religious-dissent",
      "p2-theocratic-society",
    ],
    mcqs: [
      {
        question:
          "Roger Williams's founding of Rhode Island most directly challenged which assumption underlying Massachusetts Bay Colony?",
        options: [
          "That the English crown had authority over colonial governments",
          "That civil government had the right and duty to enforce religious conformity",
          "That the Puritan covenant required economic self-sufficiency",
          "That Native peoples were obstacles to be removed rather than traded with",
        ],
        answerIndex: 1,
        explanation:
          "Williams argued that the state had no authority over individual conscience — civil government and church were separate spheres. This directly opposed Massachusetts Bay's theocratic model where the government enforced Puritan orthodoxy. He did not challenge crown authority per se (A), his colony was not defined by economics (C), and he actually advocated for fair treatment of Natives (D).",
      },
      {
        question:
          "How did Roger Williams's views on Native American land rights differ from the mainstream English colonial position?",
        options: [
          "He believed Native peoples should be forcibly converted before land could be purchased",
          "He argued that royal charters gave colonists no valid title to land without Native consent and purchase",
          "He supported granting Natives full English citizenship in exchange for land cessions",
          "He agreed with Puritan leaders that Native land was legally vacant and open to settlement",
        ],
        answerIndex: 1,
        explanation:
          'Williams contended that the king had no right to grant land already occupied by Native peoples — colonists must purchase it directly. This directly challenged the legal fiction of terra nullius and royal charter authority. He did not advocate forced conversion as a precondition (A), did not propose citizenship (C), and explicitly rejected the "vacuum domicilium" argument mainstream Puritans used (D).',
      },
    ],
  },

  {
    id: "p2-anne-hutchinson",
    name: "Anne Hutchinson",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "People",
    tags: ["SAQ", "comparison"],
    summary:
      "Puritan woman in Massachusetts who challenged ministerial authority by holding religious meetings in her home and teaching antinomian theology; tried for heresy and banished.",
    significance:
      "Hutchinson's trial exposed the gender and religious fault lines in Puritan Massachusetts — her condemnation was explicitly tied to her being a woman who presumed to teach theology in public. Her antinomian claim that grace was internal rather than proven by outward behavior threatened the entire covenant theology that justified Puritan governance. Her case is a frequent SAQ prompt on how colonial leaders handled religious and gender dissent.",
    context:
      "Hutchinson held meetings in Boston in the mid-1630s attracting hundreds of followers; banished in 1638, she moved to Rhode Island and later New Netherland, where she was killed in a Native raid.",
    themes: [
      "Social Structures",
      "Politics and Power",
      "American and Regional Culture",
    ],
    connections: [
      "p2-john-winthrop",
      "p2-roger-williams",
      "p2-growing-religious-dissent",
      "p2-theocratic-society",
    ],
  },

  {
    id: "p2-william-penn",
    name: "William Penn",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "People",
    tags: ["comparison", "LEQ"],
    summary:
      "Quaker proprietor of Pennsylvania who founded a colony based on religious tolerance, representative government, and peaceful relations with Native peoples.",
    significance:
      "Penn's \"Holy Experiment\" made Pennsylvania the most religiously diverse and tolerant colony in British North America, attracting waves of German, Dutch, and Scots-Irish immigrants. His policy of purchasing Native land rather than seizing it produced decades of comparatively peaceful coexistence — a stark contrast to Virginia or New England. Pennsylvania's Frame of Government became a model for representative assemblies and influenced later constitutional thought.",
    context:
      "Penn received his charter from Charles II in 1681 as payment of a royal debt; Pennsylvania rapidly became the most prosperous middle colony.",
    themes: [
      "Politics and Power",
      "Migration and Settlement",
      "American and Regional Culture",
    ],
    connections: [
      "p2-society-of-friends",
      "p2-charter-of-liberties",
      "p2-new-proprietary-colonies",
      "p2-incentives-for-settlement",
    ],
  },

  {
    id: "p2-james-oglethorpe",
    name: "James Oglethorpe",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "People",
    tags: ["comparison"],
    summary:
      "English general and parliamentarian who founded Georgia in 1733 as a buffer colony against Spanish Florida and a refuge for debtors.",
    significance:
      "Oglethorpe's dual vision — humanitarian refuge and military buffer — shows how strategic imperial interests shaped colonial founding. His initial ban on slavery distinguished Georgia from other southern colonies, demonstrating that economic structures were choices, not inevitabilities, making it useful for comparison LEQs. Georgia's eventual transformation into a slave-based plantation colony after the ban was lifted illustrates how economic pressures overwhelmed idealistic plans.",
    context:
      "Georgia was founded in 1733 as the last British mainland colony; Oglethorpe fought off a Spanish attack at the Battle of Bloody Marsh in 1742.",
    themes: [
      "America in the World",
      "Politics and Power",
      "Geography and the Environment",
    ],
    connections: [
      "p2-oglethorpe-georgia",
      "p2-georgia-military-rationale",
      "p2-transformation-of-georgia",
      "p2-southeast-hostilities",
    ],
  },

  {
    id: "p2-edmund-andros",
    name: "Sir Edmund Andros",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "People",
    tags: ["causation"],
    summary:
      "Royal governor of the Dominion of New England appointed by James II, whose authoritarian rule provoked colonial resistance and was overthrown during the Glorious Revolution.",
    significance:
      "Andros's imposition of Anglican worship, nullification of colonial land titles, and suppression of local assemblies crystallized colonial opposition to arbitrary royal authority, foreshadowing the arguments of the 1760s–70s. His overthrow the moment news of the Glorious Revolution arrived shows how dependent crown power in the colonies was on metropolitan legitimacy. Andros is a key cause-and-effect link between Stuart absolutism and the flowering of colonial self-governance.",
    context:
      "Appointed 1686 to govern the consolidated Dominion; colonists jailed him in 1689 as soon as William and Mary took the throne.",
    themes: ["Politics and Power", "American and National Identity"],
    connections: [
      "p2-dominion-of-new-england",
      "p2-glorious-revolution",
      "p2-end-of-dominion",
    ],
  },

  {
    id: "p2-jacob-leisler",
    name: "Jacob Leisler",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "People",
    tags: ["causation"],
    summary:
      "Dutch-descended New York merchant who seized control of the colony's fort during the Glorious Revolution and governed for two years before being arrested and executed for treason.",
    significance:
      "Leisler's Rebellion exposed the deep class and ethnic fault lines in New York politics — his merchant Protestant base against elite Anglican landowners. His execution by the new royal governor intensified factional conflict that dominated New York politics for decades, demonstrating how the Glorious Revolution's instability rippled through the colonies in unpredictable ways. His case shows that colonial political order was fragile and contested, not simply imposed from above.",
    context:
      "Leisler seized Fort James in 1689 following the fall of Governor Nicholson; William and Mary's new governor had him tried and hanged in 1691.",
    themes: ["Politics and Power", "Social Structures"],
    connections: [
      "p2-glorious-revolution",
      "p2-end-of-dominion",
      "p2-dominion-of-new-england",
    ],
  },

  // ── Events ───────────────────────────────────────────────────────────────────

  {
    id: "p2-powhatan-confederacy",
    name: "Suppression of the Powhatan Confederacy",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Events",
    tags: ["causation", "DBQ frequent"],
    summary:
      "Series of violent English campaigns against the Powhatan Confederacy in Virginia, including the capture of Pocahontas, that broke Indigenous resistance in the Chesapeake.",
    significance:
      "The suppression of the Powhatans established a pattern of English dispossession through military force that would repeat across every colonial frontier. By eliminating the primary indigenous power in the Chesapeake, English settlers freed tobacco lands for rapid expansion, cementing a plantation economy built on coerced labor. The episode shows how colonial settlement and Indigenous decline were not accidental but products of deliberate, violent policy.",
    context:
      "Came after years of uneasy coexistence following Jamestown's founding in 1607; the Anglo-Powhatan Wars (1610–1646) ended organized Native resistance in the Tidewater.",
    themes: [
      "Geography and the Environment",
      "America in the World",
      "Migration and Settlement",
    ],
    connections: [
      "p2-demise-virginia-company",
      "p2-virginia-westward-expansion",
      "p2-indian-agricultural-techniques",
      "p2-shifting-attitudes-indigenous",
    ],
  },

  {
    id: "p2-demise-virginia-company",
    name: "Demise of the Virginia Company",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Events",
    tags: ["causation"],
    summary:
      "James I revoked the Virginia Company's charter in 1624 after it failed to produce profits and mismanaged conflicts with the Powhatan, making Virginia a royal colony.",
    significance:
      "The transition from corporate to royal governance set a precedent: when private ventures failed to manage colonies profitably or peacefully, the crown stepped in directly. Royal Virginia's House of Burgesses survived the change, establishing the principle that colonists retained representative institutions even under crown control. This shift also meant the crown, not merchants, now bore responsibility for Virginia's defense and administration.",
    context:
      "The company had been founded in 1606 and sponsored Jamestown; after the 1622 Powhatan massacre killed 347 colonists, its failures became impossible to ignore.",
    themes: ["Politics and Power", "Work, Exchange, and Technology"],
    connections: [
      "p2-powhatan-confederacy",
      "p2-proprietary-rule",
      "p2-incentives-for-settlement",
    ],
  },

  {
    id: "p2-bacons-rebellion",
    name: "Bacon's Rebellion",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Events",
    tags: ["DBQ frequent", "LEQ", "causation"],
    summary:
      "Armed uprising in Virginia in 1676 led by Nathaniel Bacon against Governor Berkeley, joining frontier planters, indentured servants, and enslaved Africans in revolt.",
    significance:
      "Bacon's Rebellion is the most important domestic event of 17th-century colonial America for the AP exam. The multiracial coalition of poor whites and Black enslaved people terrified the planter elite, directly accelerating the shift from indentured servitude to race-based chattel slavery — planters concluded that African slaves, stripped of legal rights and separated from poor whites by race, were easier to control. It also shows that class grievances, not just racial ones, drove early American conflict.",
    context:
      "Berkeley's refusal to retaliate against all Native groups angered frontier settlers; Bacon led raids, burned Jamestown, and died of disease before the rebellion collapsed.",
    themes: [
      "Politics and Power",
      "Social Structures",
      "Work, Exchange, and Technology",
    ],
    connections: [
      "p2-berkeley-autocratic-rule",
      "p2-slave-codes",
      "p2-indentured-servitude",
      "p2-virginia-westward-expansion",
      "p2-stratified-southern-society",
    ],
    mcqs: [
      {
        question:
          "Bacon's Rebellion of 1676 most directly led to which long-term development in the Chesapeake colonies?",
        options: [
          "The abolition of indentured servitude in favor of free wage labor",
          "An accelerated shift toward African chattel slavery to reduce the threat of multiracial class revolt",
          "The establishment of a representative assembly to address frontier grievances",
          "Greater crown oversight of Virginia's governance to prevent future rebellions",
        ],
        answerIndex: 1,
        explanation:
          "Planter elites responded to the rebellion's dangerous multiracial coalition by replacing indentured servants (who gained freedom and became discontented) with African slaves, whose rights could be permanently stripped and who could be racially divided from poor whites. The House of Burgesses already existed (C), crown oversight increased but was not the primary long-term effect (D), and servitude was replaced by slavery, not free labor (A).",
      },
      {
        question:
          "Which of the following best explains why Nathaniel Bacon was able to attract both poor white settlers and enslaved Africans to his rebellion?",
        options: [
          "Both groups had been promised land grants by the Virginia Company",
          "Both groups shared grievances rooted in economic exploitation and exclusion from political power",
          "Both groups were motivated primarily by religious disagreements with Governor Berkeley",
          "Both groups sought to establish trade agreements with neighboring Native peoples",
        ],
        answerIndex: 1,
        explanation:
          "Bacon's coalition united people at the bottom of Virginia's social hierarchy — indentured servants nearing freedom with no land prospects, enslaved Africans with no rights at all, and backcountry planters excluded from Berkeley's patronage network. Their shared economic marginalization, not religion (C) or land grants (A) or trade ambitions (D), produced the unlikely alliance that so alarmed the elite.",
      },
    ],
  },

  {
    id: "p2-pequot-war",
    name: "Pequot War",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Events",
    tags: ["SAQ", "causation"],
    summary:
      "Conflict in 1636–1638 in Connecticut in which English colonists and their Mohegan and Narragansett allies nearly exterminated the Pequot people.",
    significance:
      "The Pequot War established the template for English-Native warfare in New England: colonists formed alliances with rival Native nations, then used overwhelming firepower to achieve near-total destruction of targeted peoples. The massacre at Mystic Fort, where hundreds of Pequot men, women, and children were burned alive, signaled that the English would not fight by Native conventions of limited warfare. It demonstrates how commercial and territorial rivalry — not simply cultural misunderstanding — drove violent dispossession.",
    context:
      "Tension rose from Pequot trade competition with the Dutch; followed decades of uneasy coexistence and preceded King Philip's War by nearly forty years.",
    themes: ["Geography and the Environment", "America in the World"],
    connections: [
      "p2-king-philips-war",
      "p2-shifting-attitudes-indigenous",
      "p2-conflict-of-accommodation",
    ],
  },

  {
    id: "p2-king-philips-war",
    name: "King Philip's War",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Events",
    tags: ["SAQ", "causation", "DBQ frequent"],
    summary:
      'Devastating conflict (1675–1676) in which Wampanoag leader Metacomet ("King Philip") led a multi-tribe coalition against English settlements across New England.',
    significance:
      "King Philip's War was proportionally the deadliest conflict in American history — it killed a larger share of the colonial population than any subsequent war. The Wampanoag use of flintlock muskets over English matchlocks showed Native peoples could adopt and out-adapt European technology. The English victory, aided by Mohawk intervention, ended organized Native resistance in southern New England and opened vast tracts to English settlement, accelerating the dispossession process that continued westward.",
    context:
      "Followed decades of land pressure on the Wampanoag after the Pilgrim alliance at Plymouth; the war's end in 1676 eliminated the Wampanoag as a political force.",
    themes: [
      "Geography and the Environment",
      "America in the World",
      "Politics and Power",
    ],
    connections: [
      "p2-pequot-war",
      "p2-shifting-attitudes-indigenous",
      "p2-plymouth-indian-relations",
      "p2-virginia-westward-expansion",
    ],
    mcqs: [
      {
        question:
          "King Philip's War (1675–1676) most directly demonstrated which of the following about Native-English relations in New England?",
        options: [
          "Native peoples had been fully assimilated into English colonial society by the 1670s",
          "Decades of English land encroachment destroyed the alliance-based peace that had existed since the Pilgrim era",
          "The English crown intervened militarily to protect its Native allies from colonial aggression",
          "Trade networks between Native peoples and English colonists prevented open conflict until the 1700s",
        ],
        answerIndex: 1,
        explanation:
          "The Wampanoag, who had been English allies since the 1621 treaty, took up arms because relentless English settlement had reduced their territory and sovereignty to the point of desperation. The war shows that early cooperative relations were unsustainable under colonial expansion. The crown did not intervene militarily (C), assimilation had not occurred (A), and trade had not prevented conflict — economic competition was part of the problem (D).",
      },
      {
        question:
          "The outcome of King Philip's War most directly contributed to which development?",
        options: [
          "Formal English recognition of Native land rights in southern New England",
          "A sharp increase in the importation of enslaved Africans to replace Native labor",
          "The removal of the last major barrier to English settlement expansion in southern New England",
          "A military alliance between the English colonies and the Iroquois Confederacy",
        ],
        answerIndex: 2,
        explanation:
          "With the Wampanoag coalition destroyed, no organized Native force remained to contest English expansion in southern New England, opening the region to rapid settlement growth. Native land rights were not recognized (A), the war did not directly cause an African slave import surge in New England (B), and while Mohawks aided the English, a formal Iroquois alliance came later through the Covenant Chain (D).",
      },
    ],
  },

  {
    id: "p2-english-civil-war",
    name: "English Civil War",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Events",
    tags: ["causation", "LEQ"],
    summary:
      "Conflict (1642–1651) between Charles I's Royalist Cavaliers and Parliament's Roundheads, ending in Charles I's execution and Parliament's victory under Oliver Cromwell.",
    significance:
      "The Civil War disrupted English colonial oversight, giving American colonies a decade of de facto self-governance that deepened habits of self-rule. Parliament's victory and Charles I's execution established that monarchs could be held accountable — a precedent later invoked in colonial resistance rhetoric. The eventual Restoration under Charles II and the proprietary colony grants that followed directly reshaped the colonial map of North America.",
    context:
      "Charles I had dissolved Parliament repeatedly; the war followed years of religious and constitutional conflict and preceded the Restoration (1660) and Glorious Revolution (1688).",
    themes: ["Politics and Power", "America in the World"],
    connections: [
      "p2-new-proprietary-colonies",
      "p2-glorious-revolution",
      "p2-dominion-of-new-england",
    ],
  },

  {
    id: "p2-capture-new-amsterdam",
    name: "Capture of New Amsterdam",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Events",
    tags: ["causation"],
    summary:
      "English seizure in 1664 of the Dutch colony of New Amsterdam under the Articles of Capitulation, renaming it New York.",
    significance:
      "The bloodless conquest eliminated the Dutch wedge between the New England and Chesapeake colonies, allowing England to consolidate a continuous Atlantic seaboard. New York's diverse Dutch population was integrated into the English imperial system, creating a multi-ethnic middle colony unlike the more homogeneous New England settlements. The acquisition of the Hudson Valley also gave England control of a major interior trade route and the fur trade network the Dutch had built.",
    context:
      "Dutch and English had competed commercially for decades; the seizure was authorized by Charles II granting the territory to his brother James, Duke of York.",
    themes: [
      "America in the World",
      "Work, Exchange, and Technology",
      "Politics and Power",
    ],
    connections: [
      "p2-new-proprietary-colonies",
      "p2-new-jersey",
      "p2-english-civil-war",
    ],
  },

  {
    id: "p2-glorious-revolution",
    name: "Glorious Revolution",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Events",
    tags: ["LEQ", "causation", "DBQ frequent"],
    summary:
      "Bloodless overthrow of James II in 1688–1689, replacing him with his Protestant daughter Mary II and her husband William of Orange, fundamentally limiting royal power.",
    significance:
      "The Glorious Revolution's ripple effects in the colonies were immediate: colonial assemblies reasserted authority, the Dominion of New England collapsed, and royal governors like Andros were overthrown. The English Bill of Rights (1689) that accompanied the revolution codified parliamentary supremacy and individual rights, establishing a framework that colonial leaders would later invoke against Parliament itself. It marks a turning point toward a constitutional monarchy that colonists understood as protecting their own liberties.",
    context:
      "James II's Catholic sympathies and authoritarian rule in both England and the colonies triggered the crisis; William and Mary's accession began a generation of Whig-dominated constitutional government.",
    themes: ["Politics and Power", "American and National Identity"],
    connections: [
      "p2-dominion-of-new-england",
      "p2-edmund-andros",
      "p2-end-of-dominion",
      "p2-jacob-leisler",
      "p2-john-coode-rebellion",
    ],
    mcqs: [
      {
        question:
          "The Glorious Revolution of 1688–1689 most directly affected the American colonies by",
        options: [
          "Expanding royal authority over colonial trade and taxation",
          "Causing the immediate collapse of the Dominion of New England and the restoration of colonial self-governance",
          "Establishing direct parliamentary representation for the colonies at Westminster",
          "Triggering a wave of religious persecution against Catholics in New England",
        ],
        answerIndex: 1,
        explanation:
          "News of James II's flight prompted Boston colonists to jail Andros and dismantle the Dominion, restoring individual colonial charters and assemblies. Parliament gained authority but did not give colonists representation (C), and while anti-Catholicism existed, the primary political effect was the restoration of self-governance (D). The revolution reduced, not expanded, royal prerogative (A).",
      },
      {
        question:
          "Which long-term significance of the Glorious Revolution is most relevant to understanding the causes of the American Revolution?",
        options: [
          "It demonstrated that monarchs could be removed when they violated the rights of their subjects",
          "It established the precedent that Parliament could tax colonies without their consent",
          "It gave the colonies permanent exemption from parliamentary legislation",
          "It created a standing army in the colonies that later enforced unpopular policies",
        ],
        answerIndex: 0,
        explanation:
          "The Glorious Revolution established that sovereignty resided in Parliament and that rulers who violated rights could be replaced — colonists later applied this Whig logic to argue that Parliament itself, when it violated their rights, had forfeited its authority over them. Option B is the opposite of the revolution's intent (it limited arbitrary taxation), C and D are inaccurate.",
      },
    ],
  },

  {
    id: "p2-end-of-dominion",
    name: "End of the Dominion of New England",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Events",
    tags: ["causation"],
    summary:
      "Collapse of the Dominion of New England in 1689 when colonists jailed Governor Andros and restored individual colonial charters following news of the Glorious Revolution.",
    significance:
      "The swift dismantling of the Dominion revealed the limits of metropolitan coercion: crown authority in the colonies depended on local consent, and when that was withdrawn, even royal governors were powerless. The restoration of colonial charters entrenched habits of self-governance and made future attempts at consolidation — like the Stamp Act — explosive. It demonstrated that American colonists interpreted English constitutional changes as directly applicable to themselves.",
    context:
      "Followed the Glorious Revolution of 1688; Massachusetts received a new charter in 1691 that combined Plymouth and Massachusetts Bay but required a royal governor.",
    themes: ["Politics and Power", "American and National Identity"],
    connections: [
      "p2-dominion-of-new-england",
      "p2-glorious-revolution",
      "p2-edmund-andros",
    ],
  },

  {
    id: "p2-john-coode-rebellion",
    name: "John Coode's Rebellion",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Events",
    tags: ["causation"],
    summary:
      "Protestant-led overthrow of the Catholic proprietors of Maryland in 1689, inspired by the Glorious Revolution, which converted Maryland into a royal colony.",
    significance:
      "Coode's rebellion illustrates how local religious and factional conflicts in the colonies attached themselves to metropolitan constitutional shifts — colonists used the Glorious Revolution as cover and legitimation for overthrowing unpopular proprietary regimes. Maryland's conversion to a royal colony, combined with Catholics losing rights to hold office, shows that religious toleration was always contested and politically contingent in colonial America. It also demonstrates that the colonies were integrated into Atlantic political culture, not isolated backwaters.",
    context:
      "Immediately followed news of James II's fall; Baltimore's Catholic proprietorship had long antagonized Maryland's Protestant majority.",
    themes: ["Politics and Power", "American and Regional Culture"],
    connections: [
      "p2-glorious-revolution",
      "p2-proprietary-rule",
      "p2-maryland-toleration-act",
      "p2-anti-catholicism",
    ],
  },

  {
    id: "p2-slave-revolts-caribbean",
    name: "Caribbean Slave Revolts",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Events",
    tags: ["causation", "comparison"],
    summary:
      "Seven major slave revolts in the English Caribbean where enslaved Africans vastly outnumbered white planters, leading to increasingly brutal surveillance and slave codes.",
    significance:
      "The frequency of Caribbean revolts proved to mainland colonial planters that a numerically dominant enslaved population required intensive legal and physical control — this lesson directly shaped the draconian slave codes adopted in South Carolina and Virginia. The revolts show that enslaved people consistently resisted their condition, challenging the mythology of passive acceptance. Caribbean slave society became the explicit model that South Carolina planters imported, including its methods of violent suppression.",
    context:
      "Occurred across the 17th and early 18th centuries; the Stono Rebellion in South Carolina (1739) was directly inspired by the Caribbean pattern.",
    themes: ["Social Structures", "Work, Exchange, and Technology"],
    connections: [
      "p2-sugar-and-slavery",
      "p2-slave-codes",
      "p2-stono-rebellion",
      "p2-north-south-carolina",
    ],
  },

  {
    id: "p2-stono-rebellion",
    name: "Stono Rebellion",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Events",
    tags: ["SAQ", "causation", "DBQ frequent"],
    summary:
      "Largest slave revolt in colonial British America, in which approximately 100 enslaved Africans rose up in South Carolina in 1739, killed over 20 white colonists, and marched toward Spanish Florida.",
    significance:
      "The Stono Rebellion produced the Negro Act of 1740, the most comprehensive slave code in colonial North America, which prohibited enslaved people from learning to read, assembling freely, or earning money — a direct crackdown on every avenue of resistance. It shows that enslaved Africans were active agents who sought freedom by exploiting the English-Spanish imperial rivalry (Spain had promised freedom to escaped slaves). The rebellion demonstrates that the brutality of Southern slavery was a response to, not just a cause of, enslaved resistance.",
    context:
      "Occurred during the War of Jenkins' Ear (1739) when English-Spanish tensions made Florida a viable escape destination; followed the 1705 Virginia slave codes.",
    themes: [
      "Social Structures",
      "Work, Exchange, and Technology",
      "America in the World",
    ],
    connections: [
      "p2-slave-codes",
      "p2-slave-culture",
      "p2-growing-slave-population",
      "p2-southeast-hostilities",
      "p2-north-south-carolina",
    ],
    mcqs: [
      {
        question: "The Stono Rebellion of 1739 most directly resulted in",
        options: [
          "The gradual emancipation of enslaved people in South Carolina",
          "More restrictive slave codes that further stripped enslaved people of legal protections",
          "A diplomatic agreement with Spain to stop sheltering escaped slaves",
          "The disbanding of slave patrols in favor of a professional colonial militia",
        ],
        answerIndex: 1,
        explanation:
          "South Carolina responded with the Negro Act of 1740, prohibiting enslaved people from learning to read, assembling, or earning their own money — among the harshest slave codes in colonial North America. Gradual emancipation (A) was the opposite of what happened; the Spanish agreement (C) was not the legislative outcome; and slave patrols were expanded, not disbanded (D).",
      },
      {
        question:
          "Which of the following best explains why Stono Rebellion participants marched south toward Florida?",
        options: [
          "They hoped to join Spanish Florida, where Spain had promised freedom to enslaved people who converted to Catholicism and fought for the crown",
          "They believed French Louisiana would offer them land grants and freedom",
          "They were trying to reach a free Black settlement established in Georgia",
          "They were fleeing to Native American territory where they had existing alliances",
        ],
        answerIndex: 0,
        explanation:
          "Spain had issued the Decree of 1693 offering freedom to escaped English slaves who reached Florida and converted to Catholicism, creating Fort Mose as a free Black settlement near St. Augustine. The rebels were heading specifically toward this Spanish offer, not to French territory (B), a non-existent Georgia settlement (C), or Native alliances (D).",
      },
    ],
  },

  {
    id: "p2-salem-witch-trials",
    name: "Salem Witch Trials",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Events",
    tags: ["SAQ", "comparison"],
    summary:
      "Series of hearings and prosecutions in 1692 in Salem, Massachusetts in which over 200 people were accused of witchcraft and 19 were executed.",
    significance:
      "The Salem trials reveal how the Puritan theocratic system could weaponize social anxieties — accusations disproportionately targeted women who owned property, showed unusual independence, or had no male protectors, revealing gender and property tensions beneath the religious surface. The trials ultimately discredited spectral evidence and contributed to a broader decline of Puritan theocratic authority. For the exam, Salem is a strong example of how social strain (land disputes, generational conflict, declining Puritan cohesion) expressed itself through religious frameworks.",
    context:
      "Occurred amid declining Puritan authority, border wars with Native peoples, and loss of the original Massachusetts charter; Puritan minister Cotton Mather was a prominent figure in the crisis.",
    themes: [
      "Social Structures",
      "American and Regional Culture",
      "Politics and Power",
    ],
    connections: [
      "p2-theocratic-society",
      "p2-puritan-democracy",
      "p2-jeremiads",
      "p2-patriarchal-puritan-family",
    ],
  },

  {
    id: "p2-southeast-hostilities",
    name: "English-Spanish Hostilities in the Southeast",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Events",
    tags: ["causation", "comparison"],
    summary:
      "Ongoing proxy conflict between English Carolina and Spanish Florida involving pirates, Native allies, and escaped slaves, ultimately confining Spain to St. Augustine.",
    significance:
      "The Southeast conflict shows how European imperial rivalries played out through colonial proxies — English pirates, Native allies, and eventually formal military forces. Spain's strategy of offering freedom to escaped enslaved Africans (Fort Mose, 1738) transformed a territorial dispute into a direct threat to the South Carolina slave system. English success in confining Spain to St. Augustine after the Seven Years' War opened Florida to English settlement and set up the dynamics that led to the American Revolution.",
    context:
      "Escalated from piracy raids to formal conflict during Queen Anne's War (1702–1713) and continued through the War of Jenkins' Ear (1739) and the Seven Years' War.",
    themes: ["America in the World", "Politics and Power"],
    connections: [
      "p2-oglethorpe-georgia",
      "p2-stono-rebellion",
      "p2-georgia-military-rationale",
    ],
  },

  // ── Legislation & Documents ──────────────────────────────────────────────────

  {
    id: "p2-mayflower-compact",
    name: "Mayflower Compact",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Legislation & Documents",
    tags: ["LEQ", "DBQ frequent", "comparison"],
    summary:
      "Agreement signed in 1620 by Pilgrim men aboard the Mayflower establishing a self-governing civil body and pledging loyalty to the English crown.",
    significance:
      "The Mayflower Compact is the first written framework for self-government in English North America, establishing the principle that governmental authority derives from the consent of the governed — a concept later foundational to the Declaration of Independence. Exam essays frequently use it as evidence of colonial traditions of self-governance that predated and ultimately conflicted with Parliamentary control. It demonstrates that even before landing, colonists assumed the right to govern themselves.",
    context:
      "Signed in 1620 because the Pilgrims landed outside their authorized territory (the Hudson River mouth) and feared some passengers would claim no legal authority applied; preceded all formal charters for New England.",
    themes: ["Politics and Power", "American and National Identity"],
    connections: [
      "p2-william-bradford",
      "p2-plymouth-indian-relations",
      "p2-puritan-democracy",
    ],
    mcqs: [
      {
        question:
          "The Mayflower Compact of 1620 is historically significant primarily because it",
        options: [
          "Established religious freedom for all Christian denominations in Plymouth",
          "Created the first written framework asserting that government derives its authority from the consent of the governed",
          "Granted the Pilgrims a formal charter from the English crown to settle in New England",
          "Formalized a military alliance between the Plymouth colonists and the Wampanoag people",
        ],
        answerIndex: 1,
        explanation:
          "The Compact's signatories agreed to create 'just and equal laws' by mutual consent — the first written articulation of popular sovereignty in English North America. It did not establish broad religious freedom (Pilgrims were intolerant of non-Separatists) (A), it was not a royal charter (C), and the Wampanoag alliance was a separate diplomatic achievement (D).",
      },
      {
        question:
          "Which of the following best describes the circumstances that necessitated the Mayflower Compact?",
        options: [
          "The Pilgrims needed a document to present to the Wampanoag as proof of peaceful intentions",
          "Because the Pilgrims landed outside the jurisdiction of their Virginia Company patent, some passengers argued no legal authority existed and any could act freely",
          "The English crown required all colonial ventures to establish written charters before landing",
          "Pilgrim leaders feared Native attack and needed a military command structure",
        ],
        answerIndex: 1,
        explanation:
          "The Pilgrims had a patent for land in Virginia; landing in Cape Cod was outside that jurisdiction. Non-Separatist 'strangers' among the passengers argued this freed them from any obligation to the group's leadership, so the Compact was drafted to create binding civil authority. It was not for the Wampanoag (A), not a crown requirement (C), and was a civil, not military, document (D).",
      },
    ],
  },

  {
    id: "p2-maryland-toleration-act",
    name: "Maryland Toleration Act",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Legislation & Documents",
    tags: ["comparison", "LEQ"],
    summary:
      "Maryland law of 1649 granting religious freedom to all trinitarian Christians in the colony, designed to protect Catholics as Protestants became a majority.",
    significance:
      "The Act is often cited as an early example of religious tolerance, but its limits reveal how contingent colonial tolerance was — it protected Christians only, explicitly excluded Jews and atheists, and was passed to protect a Catholic minority from a Protestant majority, not from principled pluralism. When Protestants gained full control after the Glorious Revolution, they repealed it and stripped Catholics of civil rights, demonstrating that tolerance was a political tool, not an enduring value. Useful in comparison with Rhode Island's broader tolerance.",
    context:
      "Passed as Catholics became a minority in a colony founded for them by the Calvert family; repealed after John Coode's rebellion converted Maryland to a royal colony.",
    themes: ["American and Regional Culture", "Politics and Power"],
    connections: [
      "p2-proprietary-rule",
      "p2-anti-catholicism",
      "p2-john-coode-rebellion",
      "p2-roger-williams",
    ],
  },

  {
    id: "p2-fundamental-constitution-carolina",
    name: "Fundamental Constitution of Carolina",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Legislation & Documents",
    tags: ["comparison"],
    summary:
      "Constitution for the Carolina colony drafted by John Locke and the Earl of Shaftesbury (Ashley Cooper) in 1669, attempting to establish a feudal aristocracy with religious toleration.",
    significance:
      "The Fundamental Constitution is historically notable because it was drafted by John Locke, whose later political philosophy (natural rights, consent of the governed) would become foundational to American revolutionary ideology — yet the document itself established a rigid, hereditary aristocracy. The contradiction between Locke's authorship and the Constitution's feudal content shows that Enlightenment thinkers did not automatically apply liberal principles to colonial societies. The colonists largely ignored its aristocratic provisions, illustrating the gap between metropolitan planning and colonial reality.",
    context:
      "Drafted in 1669 for the proprietary colony granted to eight Lords Proprietors by Charles II; most provisions were never implemented.",
    themes: ["Politics and Power", "Social Structures"],
    connections: [
      "p2-north-south-carolina",
      "p2-new-proprietary-colonies",
      "p2-incentives-for-settlement",
    ],
  },

  {
    id: "p2-charter-of-liberties",
    name: "Charter of Liberties (Pennsylvania)",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Legislation & Documents",
    tags: ["comparison"],
    summary:
      "William Penn's 1701 document that transferred governing authority in Pennsylvania from the proprietor to a popularly elected assembly, becoming the colony's constitution.",
    significance:
      "The Charter of Liberties made Pennsylvania's assembly among the most powerful in colonial British America, reducing the proprietor's role to near-ceremonial status. This shift toward popular legislative authority deepened colonial habits of self-governance and established a precedent that assemblies, not proprietors or crown appointees, were the legitimate source of colonial law. Pennsylvania's robust assembly tradition made it a center of colonial political theory and a natural venue for the Continental Congress.",
    context:
      "Issued after colonists demanded a reduction in Penn's proprietary power; Penn was facing financial difficulties and needed colonial cooperation.",
    themes: ["Politics and Power", "American and National Identity"],
    connections: [
      "p2-william-penn",
      "p2-society-of-friends",
      "p2-incentives-for-settlement",
    ],
  },

  {
    id: "p2-navigation-acts",
    name: "Navigation Acts",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Legislation & Documents",
    tags: ["DBQ frequent", "LEQ", "causation"],
    summary:
      "Series of English laws beginning in 1651 requiring colonial trade to be conducted on English ships, routed through English ports, and subject to English customs.",
    significance:
      "The Navigation Acts are the defining legislation of English mercantilism in the colonies — they structured the entire Atlantic economy to benefit England, forcing colonists to buy manufactured goods at inflated English prices while selling raw materials at controlled rates. Colonial merchants openly violated them, developing black-market trade networks with the French and Dutch West Indies that financed the emerging merchant class. The acts set up the central colonial grievance that Parliament could legislate their trade without consent, a direct cause of the Revolution.",
    context:
      "First passed under Cromwell's Commonwealth in 1651; strengthened repeatedly through 1696 under Charles II and later monarchs.",
    themes: [
      "Work, Exchange, and Technology",
      "Politics and Power",
      "America in the World",
    ],
    connections: [
      "p2-mercantilism",
      "p2-triangular-trade",
      "p2-emerging-merchant-class",
      "p2-dominion-of-new-england",
    ],
    mcqs: [
      {
        question:
          "The Navigation Acts were most significant in colonial American history because they",
        options: [
          "Provided a steady source of revenue that funded colonial infrastructure",
          "Structured colonial trade to benefit England at colonial expense, fostering grievances that contributed to the Revolution",
          "Prevented colonial merchants from trading with Native American nations",
          "Required colonists to quarter British troops enforcing customs regulations",
        ],
        answerIndex: 1,
        explanation:
          "The Acts forced colonists to ship goods on English vessels through English ports, paying duties that enriched England rather than the colonies. Colonial merchants responded with widespread smuggling, and the later attempt to actually enforce the Acts in the 1760s became a central grievance. They did not fund colonial infrastructure (A), did not restrict Native trade (C), and quartering was a separate issue (D).",
      },
      {
        question:
          "Colonial merchants' widespread violation of the Navigation Acts most directly illustrates which historical pattern?",
        options: [
          "Colonial dependence on British manufactured goods made trade restrictions welcome",
          'A long tradition of "salutary neglect" in which Britain chose not to strictly enforce its trade laws, allowing colonial self-interest to prevail',
          "The Navigation Acts were largely symbolic and had no real economic impact",
          "Colonial assemblies formally repealed the Navigation Acts before the Revolution",
        ],
        answerIndex: 1,
        explanation:
          "For nearly a century, Britain allowed widespread violation of the Navigation Acts — a policy historians call 'salutary neglect.' When Britain began strict enforcement after the Seven Years' War, colonists experienced it as a sudden violation of long-established custom. The Acts had real economic impact (C is wrong), colonial assemblies had no power to repeal English laws (D), and colonists resented the restrictions, not welcomed them (A).",
      },
    ],
  },

  {
    id: "p2-slave-codes",
    name: "Slave Codes",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Legislation & Documents",
    tags: ["DBQ frequent", "LEQ", "causation"],
    summary:
      "Colonial laws, beginning with Virginia in 1705, that defined enslaved status as hereditary, permanent, and race-based, stripping enslaved Africans of all legal rights.",
    significance:
      "The slave codes transformed slavery from a labor arrangement into a racial caste system — by tying enslaved status permanently to Black ancestry, they created a self-perpetuating hierarchy that survived the abolition of individual contracts. The codes were a direct response to Bacon's Rebellion: by racially separating poor whites from enslaved Africans, planters divided a coalition that had nearly overthrown them. This deliberate legal construction of race is central to DBQ arguments about how slavery was built, not inherited.",
    context:
      "Virginia's 1705 code codified rules developed piecemeal since the 1660s; South Carolina's codes drew on the Barbados slave code; strengthened again after the Stono Rebellion (1740).",
    themes: [
      "Social Structures",
      "Politics and Power",
      "Work, Exchange, and Technology",
    ],
    connections: [
      "p2-bacons-rebellion",
      "p2-growing-slave-population",
      "p2-slave-culture",
      "p2-stono-rebellion",
      "p2-uncertain-slave-status",
    ],
    mcqs: [
      {
        question:
          "The development of race-based slave codes in the late 17th century was most directly a response to",
        options: [
          "The rapid growth of the African slave trade, which required legal regulation",
          "Bacon's Rebellion, which alarmed planters by uniting poor whites and enslaved Africans against the elite",
          "Puritan religious pressure to define the moral status of enslaved people",
          "Spanish competition for enslaved labor in the Caribbean",
        ],
        answerIndex: 1,
        explanation:
          "Bacon's Rebellion showed Virginia planters that poor whites and enslaved Africans shared common grievances and could form dangerous coalitions. Race-based codes were designed to give poor whites a legal, social superiority over Black people regardless of their own poverty, driving a wedge between potential allies. The slave trade growth (A) was a parallel development, not the direct cause; Puritans (C) were in New England; Spanish competition (D) was not the driver of Virginia or Carolina codes.",
      },
      {
        question:
          "Which of the following best describes the significance of defining enslaved status as hereditary in the colonial slave codes?",
        options: [
          "It ensured enslaved people could inherit property from their masters",
          "It made slavery a permanent, self-perpetuating racial caste by passing slave status through the mother regardless of the father's status",
          "It allowed free Black people to purchase their relatives' freedom through legal means",
          "It created a path to freedom for enslaved people born in the colonies rather than Africa",
        ],
        answerIndex: 1,
        explanation:
          "The partus sequitur ventrem principle — status follows the mother — meant that any child born of an enslaved woman was enslaved regardless of the father. This prevented free Black fathers from freeing their children and created a self-reproducing enslaved population with no legal route to freedom through birth. Options A, C, and D describe the opposite of what the codes actually did.",
      },
    ],
  },

  // ── Movements & Ideologies ───────────────────────────────────────────────────

  {
    id: "p2-puritan-religious-repression",
    name: "Puritan Religious Repression in England",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Movements & Ideologies",
    tags: ["causation", "comparison"],
    summary:
      "Systematic persecution of Puritan Separatists under James I and Charles I that drove tens of thousands to emigrate to New England in the 1620s–1640s.",
    significance:
      "Religious persecution was the primary push factor for New England colonization — without it, Massachusetts Bay and Plymouth would not have existed on the scale they did. The Great Migration (1630–1642) brought over 20,000 Puritans, establishing the population base and cultural infrastructure of New England. This migration created a colonial society uniquely shaped by religious ideology, making New England distinct from the economically motivated Chesapeake and Caribbean colonies.",
    context:
      "Charles I's Archbishop Laud systematically harassed Puritan ministers in the 1630s; the English Civil War (1642) briefly relieved pressure and slowed emigration.",
    themes: ["Migration and Settlement", "American and Regional Culture"],
    connections: [
      "p2-massachusetts-bay-company",
      "p2-john-winthrop",
      "p2-mayflower-compact",
      "p2-congregational-church",
    ],
  },

  {
    id: "p2-congregational-church",
    name: "Congregational Church",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Movements & Ideologies",
    tags: ["comparison"],
    summary:
      "Puritan church structure in New England in which each congregation governed itself independently, cutting functional ties with the hierarchical Church of England.",
    significance:
      "The Congregational model embedded self-governance into the daily religious practice of New England — every church member participated in congregational decisions, building democratic habits that transferred naturally into political life. By rejecting episcopacy (rule by bishops), Congregationalists also rejected the idea that authority flows top-down, a principle they would later apply to king and Parliament. The system is a key comparison point with hierarchical Anglican and Catholic church structures.",
    context:
      "Developed from the 1630s as Massachusetts Bay churches organized independently; the Halfway Covenant (1662) later weakened membership standards to accommodate a declining conversion rate.",
    themes: ["American and Regional Culture", "Politics and Power"],
    connections: [
      "p2-theocratic-society",
      "p2-puritan-democracy",
      "p2-growing-religious-dissent",
      "p2-massachusetts-bay-company",
    ],
  },

  {
    id: "p2-theocratic-society",
    name: "Massachusetts Theocratic Society",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Movements & Ideologies",
    tags: ["comparison", "LEQ"],
    summary:
      "The fusion of religious and civil authority in Massachusetts Bay Colony, where church membership determined political participation and ministers shaped public policy.",
    significance:
      'Massachusetts theocracy is the defining example of how religious ideology structured colonial governance — only "visible saints" (church members) could vote, effectively making the colony a religious oligarchy. It produced a coherent, highly motivated society but also suppressed dissent, driving out Roger Williams and Anne Hutchinson and creating the conditions for the Salem Witch Trials. For exam purposes it is the key comparison with the more secular or tolerant governments of Pennsylvania and Rhode Island.',
    context:
      "Established under John Winthrop in the 1630s; theocratic control weakened after the 1691 charter required property rather than church membership for voting.",
    themes: [
      "Politics and Power",
      "American and Regional Culture",
      "Social Structures",
    ],
    connections: [
      "p2-congregational-church",
      "p2-john-winthrop",
      "p2-roger-williams",
      "p2-anne-hutchinson",
      "p2-salem-witch-trials",
    ],
  },

  {
    id: "p2-society-of-friends",
    name: "Society of Friends (Quakers)",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Movements & Ideologies",
    tags: ["comparison", "LEQ"],
    summary:
      'Radical Protestant sect founded in England that rejected predestination, believed in the "inner light" of every person, and practiced gender equality and pacifism.',
    significance:
      "Quaker beliefs produced the most egalitarian colonial society in British North America — women could preach and hold positions of spiritual authority, and non-resistance extended to relatively peaceful Native relations under Penn. Their rejection of oaths and military service put them in perpetual conflict with colonial and later revolutionary governments. Quakers are the premier comparison case for examining how religious ideology shaped colonial social structures.",
    context:
      "Heavily persecuted in England and early Massachusetts; found refuge in Pennsylvania after William Penn secured a charter in 1681.",
    themes: [
      "Social Structures",
      "American and Regional Culture",
      "Migration and Settlement",
    ],
    connections: [
      "p2-william-penn",
      "p2-charter-of-liberties",
      "p2-religious-toleration",
    ],
  },

  {
    id: "p2-growing-religious-dissent",
    name: "Growing Religious Dissent in Massachusetts",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Movements & Ideologies",
    tags: ["causation", "continuity-and-change"],
    summary:
      "The influx of non-Puritan settlers into Massachusetts Bay Colony created persistent dissent, driving the founding of Connecticut, Rhode Island, and New Hampshire.",
    significance:
      "Religious dissent in Massachusetts generated new colonies — Thomas Hooker's departure to Connecticut, Roger Williams's founding of Rhode Island, and John Wheelwright's settlement of Exeter (New Hampshire) all resulted from Massachusetts's inability to contain heterodoxy. This fragmentation created the pluralistic colonial landscape that made a single established church impossible to sustain across New England. The pattern shows that religious coercion consistently produced new settlements rather than conformity.",
    context:
      "Dissent grew from the mid-1630s as the Great Migration brought thousands of people with varying degrees of Puritan commitment; accelerated after the Hutchinson crisis of 1637–38.",
    themes: ["Migration and Settlement", "American and Regional Culture"],
    connections: [
      "p2-roger-williams",
      "p2-anne-hutchinson",
      "p2-new-hampshire-maine",
      "p2-theocratic-society",
    ],
  },

  {
    id: "p2-old-lights-new-lights",
    name: "Old Lights and New Lights",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Movements & Ideologies",
    tags: ["LEQ", "continuity-and-change", "comparison"],
    summary:
      'Division during the First Great Awakening between "New Lights" who embraced emotional revivalism and "Old Lights" who defended traditional rational, ordered worship.',
    significance:
      "The Old Light / New Light split is the most important religious development of Period 2 for the AP exam because it illustrates how the Great Awakening simultaneously democratized religion (anyone could experience direct conversion regardless of education or status) and fractured existing denominational authority. New Light emphasis on personal, emotional faith undermined the authority of educated ministers — a challenge to traditional hierarchy that paralleled Enlightenment challenges to political authority. Both impulses fed into the revolutionary generation's skepticism of inherited authority.",
    context:
      "The Great Awakening (c. 1730s–1740s) featured itinerant preachers like George Whitefield and Jonathan Edwards; the split persisted in denominational divisions for decades.",
    themes: [
      "American and Regional Culture",
      "Social Structures",
      "American and National Identity",
    ],
    connections: [
      "p2-jeremiads",
      "p2-enlightenment-challenge",
      "p2-congregational-church",
      "p2-religious-toleration",
    ],
    mcqs: [
      {
        question:
          'The First Great Awakening\'s division between "Old Lights" and "New Lights" most directly contributed to which long-term development?',
        options: [
          "The establishment of a national Protestant church that unified all denominations",
          "An erosion of traditional clerical authority and the democratization of religious experience, which paralleled Enlightenment challenges to political authority",
          "The suppression of itinerant preaching by colonial assemblies throughout New England",
          "A sharp decline in church membership across all colonial denominations",
        ],
        answerIndex: 1,
        explanation:
          "New Light revivalism emphasized personal conversion over learned theology, effectively telling ordinary colonists their direct relationship with God was more valid than a minister's training — destabilizing the same hierarchy of inherited authority that the Enlightenment challenged in politics. No national church was created (A), some assemblies tried to suppress itinerant preachers but failed broadly (C), and overall church membership grew rather than declined during the Awakening (D).",
      },
      {
        question:
          "George Whitefield's Great Awakening revivals most directly challenged which existing colonial institution?",
        options: [
          "The political authority of colonial assemblies",
          "The established churches and their educated, ordained clergy",
          "The economic dominance of the merchant class in port cities",
          "The legal status of enslaved people in the southern colonies",
        ],
        answerIndex: 1,
        explanation:
          "Whitefield preached without a fixed congregation, often outdoors, drawing crowds away from established churches and delivering messages that salvation required personal emotional transformation — not learned theology or clerical mediation. This directly undermined the authority of ordained ministers and established churches. He did not primarily challenge assemblies (A), merchants (C), or slavery, though he did preach to enslaved people (D).",
      },
    ],
  },

  {
    id: "p2-enlightenment-challenge",
    name: "Traditional Authority Challenged (Enlightenment)",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Movements & Ideologies",
    tags: ["LEQ", "continuity-and-change"],
    summary:
      "Growing Enlightenment influence in colonial America that encouraged rational inquiry, skepticism of inherited authority, and interest in science, politics, and philosophy.",
    significance:
      "The Enlightenment gave educated colonists an intellectual framework for questioning authority that complemented the Great Awakening's emotional challenge — together they eroded deference to tradition and hierarchy. Figures like Benjamin Franklin embodied colonial Enlightenment by applying reason to practical problems (electricity, civic institutions). The political implications were profound: if natural reason, not divine right, was the source of authority, then governmental legitimacy had to be justified rationally.",
    context:
      "European Enlightenment thinkers (Locke, Newton, Voltaire) influenced colonial colleges from the 1720s–1740s; coffeehouse culture in cities provided spaces for Enlightenment debate.",
    themes: ["American and National Identity", "American and Regional Culture"],
    connections: [
      "p2-old-lights-new-lights",
      "p2-jeremiads",
      "p2-colonial-cities",
      "p2-city-commercial-culture",
    ],
  },

  {
    id: "p2-jeremiads",
    name: "Jeremiads",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Movements & Ideologies",
    tags: ["continuity-and-change"],
    summary:
      '"Sermons of despair" preached by Puritan ministers lamenting the moral decline of New England and calling colonists back to the original covenant with God.',
    significance:
      "Jeremiads reveal that by the late 17th century, Puritan ministers recognized their community was losing the intense religious focus of the founding generation — a crisis of continuity-and-change central to understanding New England's development. Their calls for moral renewal directly contributed to the climate that produced the Great Awakening. For the exam, jeremiads are evidence of how Puritan identity was simultaneously central to colonial self-understanding and increasingly difficult to maintain in a growing commercial society.",
    context:
      "Proliferated from the 1660s–1690s as Massachusetts's original charter was revoked, King Philip's War devastated the colony, and the Salem crisis struck; preceded the Great Awakening by a generation.",
    themes: ["American and Regional Culture", "American and National Identity"],
    connections: [
      "p2-old-lights-new-lights",
      "p2-salem-witch-trials",
      "p2-congregational-church",
    ],
  },

  {
    id: "p2-anti-catholicism",
    name: "Anti-Catholicism in Colonial America",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Movements & Ideologies",
    tags: ["comparison"],
    summary:
      "Widespread Protestant hostility toward Catholicism in the colonies that drove anti-Catholic legislation and shaped colonial identity in opposition to French and Spanish Catholic empires.",
    significance:
      'Colonial anti-Catholicism was not simply religious bigotry — it was inseparable from imperial rivalry, as France and Spain were Catholic empires and England\'s Protestant identity defined its geopolitical position. Anti-Catholic sentiment helped unite diverse Protestant colonists across regional and denominational lines in opposition to "popish" arbitrary government, language that would later be applied to Parliament. In Maryland, anti-Catholicism stripped the founding minority of their civil rights after the Glorious Revolution.',
    context:
      "Rooted in the English Reformation and intensified by the Thirty Years' War, the English Civil War, and the French and Indian Wars; shaped colonial views of liberty as inherently Protestant.",
    themes: ["American and Regional Culture", "America in the World"],
    connections: [
      "p2-maryland-toleration-act",
      "p2-john-coode-rebellion",
      "p2-glorious-revolution",
      "p2-religious-toleration",
    ],
  },

  {
    id: "p2-religious-toleration",
    name: "Roots of Religious Toleration",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Movements & Ideologies",
    tags: ["comparison", "continuity-and-change"],
    summary:
      "The gradual, pragmatic emergence of religious tolerance in the American colonies driven by religious diversity, the practical impossibility of enforcement, and the examples of Rhode Island and Pennsylvania.",
    significance:
      "Colonial religious tolerance grew from necessity more than principle — the sheer variety of Protestant sects made a single established church unenforceable. However, this pragmatic tolerance created a tradition that later generations could invoke as a founding value. The contrast with European religious persecution was central to how colonists understood American liberty as exceptional. It also limited the political power of any single church, keeping civil governance relatively secular compared to Europe.",
    context:
      "Developed gradually from the 1640s; the Church of England was nominally established in most colonies but lacked the personnel and resources to enforce conformity.",
    themes: ["American and Regional Culture", "American and National Identity"],
    connections: [
      "p2-roger-williams",
      "p2-society-of-friends",
      "p2-maryland-toleration-act",
      "p2-anti-catholicism",
      "p2-old-lights-new-lights",
    ],
  },

  // ── Economic Concepts ────────────────────────────────────────────────────────

  {
    id: "p2-mercantilism",
    name: "Mercantilism",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["LEQ", "DBQ frequent", "causation"],
    summary:
      "Economic theory holding that a nation's wealth depended on accumulating gold and silver through a favorable balance of trade, used by England to structure its colonial economy.",
    significance:
      "Mercantilism is the conceptual foundation underlying the Navigation Acts, the plantation economy, and English colonial policy — understanding it is essential for explaining why the colonial relationship turned adversarial. England viewed colonies as suppliers of raw materials and captive markets for manufactured goods, deliberately preventing colonial manufacturing that might compete with English industries. The colonial economy's structural subordination under mercantilism created the economic grievances that fueled revolutionary sentiment.",
    context:
      "Dominated English economic policy from the mid-17th century; challenged by Adam Smith's free-market arguments in The Wealth of Nations (1776).",
    themes: ["Work, Exchange, and Technology", "America in the World"],
    connections: [
      "p2-navigation-acts",
      "p2-triangular-trade",
      "p2-emerging-merchant-class",
      "p2-tobacco",
      "p2-diverse-northern-economy",
    ],
    mcqs: [
      {
        question:
          "English mercantilist policy toward the American colonies was primarily designed to",
        options: [
          "Promote colonial manufacturing to reduce England's dependence on European goods",
          "Ensure the colonies provided raw materials and markets for English goods while preventing colonial economic independence",
          "Allow colonies to freely trade with any nation to maximize total Atlantic commerce",
          "Subsidize colonial infrastructure to attract skilled immigrants from continental Europe",
        ],
        answerIndex: 1,
        explanation:
          "Mercantilism treated the colonies as an economic appendage of England — sources of raw materials (tobacco, timber, furs) and captive consumers of English manufactured goods. Colonial manufacturing was deliberately suppressed to prevent competition. Options A, C, and D describe policies that would contradict mercantilist logic by empowering colonial economic independence.",
      },
      {
        question:
          "Which of the following best illustrates colonial resistance to English mercantile policy?",
        options: [
          "Colonial assemblies petitioned Parliament to repeal the Navigation Acts",
          "Colonial merchants developed illegal trade networks with the French and Dutch West Indies to find markets and goods outside British control",
          "Colonial planters shifted from tobacco to grain to bypass Navigation Act regulations on enumerated goods",
          "Colonial governors refused to enforce the Navigation Acts in open defiance of the crown",
        ],
        answerIndex: 1,
        explanation:
          "Smuggling to the French and Dutch West Indies was the primary form of colonial resistance to Navigation Acts — merchants found higher prices and goods unavailable through legal channels. Assemblies petitioned but did not formally challenge Navigation Acts in this period (A), tobacco-to-grain shifts were market-driven, not regulatory evasion (C), and governors generally enforced the Acts to keep their positions (D).",
      },
    ],
  },

  {
    id: "p2-triangular-trade",
    name: "Triangular Trade",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["DBQ frequent", "LEQ", "causation"],
    summary:
      "Atlantic trading network exchanging enslaved Africans, sugar and rum, manufactured goods, and raw materials among Africa, the Caribbean/Americas, and England.",
    significance:
      "Triangular trade integrated colonial America into a global commercial system built on enslaved labor — without it, the sugar and tobacco economies that funded English prosperity could not have functioned. The trade network also created an emerging colonial merchant class that operated semi-independently of English control, accumulating capital that financed both political independence and the early republic's economy. The human cost — the Middle Passage — makes this the moral center of any DBQ on Atlantic commerce.",
    context:
      "Developed through the 17th century as sugar and tobacco production scaled up; the British slave trade peaked in the 1780s–1790s.",
    themes: [
      "Work, Exchange, and Technology",
      "America in the World",
      "Social Structures",
    ],
    connections: [
      "p2-middle-passage",
      "p2-sugar-and-slavery",
      "p2-mercantilism",
      "p2-navigation-acts",
      "p2-emerging-merchant-class",
      "p2-caribbean-north-america-trade",
    ],
    mcqs: [
      {
        question:
          "The Atlantic triangular trade system most directly demonstrates which historical argument?",
        options: [
          "European colonization of the Americas was primarily motivated by religious missionary work",
          "Colonial American prosperity was structurally dependent on the forced labor of enslaved Africans and the exploitation of Atlantic trade networks",
          "England and its colonies operated as equal economic partners sharing the benefits of Atlantic commerce",
          "Colonial merchants' compliance with Navigation Acts eliminated the need for illegal trade",
        ],
        answerIndex: 1,
        explanation:
          "The triangular trade shows that colonial wealth — from New England rum to Chesapeake tobacco to Caribbean sugar — was generated by and dependent on enslaved African labor, with profits flowing disproportionately to England and planter elites. The partnership was deeply unequal (C is wrong), smuggling was widespread (D is wrong), and religious motivation played no role in the trade system (A is wrong).",
      },
      {
        question:
          "Which of the following best explains why New England merchants were deeply involved in the triangular trade despite having no plantation economy?",
        options: [
          "New England produced the sugar and tobacco that were the trade's primary commodities",
          "New England's diverse economy — shipbuilding, rum distilling, fishing — made it the commercial intermediary linking the Caribbean, Africa, and England",
          "New England merchants were required by the Navigation Acts to carry enslaved people from Africa",
          "New England had a large enslaved population that it exported to the Caribbean in exchange for manufactured goods",
        ],
        answerIndex: 1,
        explanation:
          "New England distilled Caribbean molasses into rum (traded for enslaved people in Africa), built the ships that carried goods throughout the Atlantic, and supplied the Caribbean with food and timber. New England produced neither sugar nor tobacco (A), the Navigation Acts did not mandate slave trading (C), and New England had a relatively small enslaved population that it did not export (D).",
      },
    ],
  },

  {
    id: "p2-tobacco",
    name: "Tobacco",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["causation", "DBQ frequent"],
    summary:
      "Primary cash crop of Virginia and Maryland that saved Jamestown from failure, drove labor demand that led to indentured servitude and then chattel slavery, and shaped Chesapeake society.",
    significance:
      "Tobacco is the economic engine of the colonial Chesapeake — it explains the demand for labor (indentured servants, then enslaved Africans), the formation of a planter elite, and the vulnerability of the plantation economy to price swings. The tobacco monoculture made planters dependent on a single volatile commodity and on English merchants for credit and marketing, creating economic grievances alongside political ones. Without tobacco, there is no plantation economy, no slavery at scale, and no Chesapeake aristocracy.",
    context:
      "John Rolfe introduced commercially viable tobacco to Virginia in 1612; overproduction crises repeatedly crashed prices throughout the 17th century.",
    themes: ["Work, Exchange, and Technology", "Social Structures"],
    connections: [
      "p2-plantation-economy-vagaries",
      "p2-stratified-southern-society",
      "p2-indentured-servitude",
      "p2-bacons-rebellion",
      "p2-mercantilism",
    ],
  },

  {
    id: "p2-indigo",
    name: "Indigo",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["comparison"],
    summary:
      "Blue dye crop cultivated in South Carolina that complemented rice cultivation and was in high demand in European textile industries.",
    significance:
      "Indigo's development as a cash crop — largely due to Eliza Lucas Pinckney's experiments in the 1740s — diversified South Carolina's economy beyond rice and strengthened the colony's ties to British textile markets. Its ability to grow in upland areas where rice could not expanded plantation agriculture across a wider geographic range. Indigo production reinforced South Carolina's deep reliance on enslaved labor since it was highly labor-intensive.",
    context:
      "Developed commercially in the 1740s; British Parliament subsidized indigo production to reduce dependence on French sources.",
    themes: ["Work, Exchange, and Technology", "Geography and the Environment"],
    connections: [
      "p2-tobacco",
      "p2-north-south-carolina",
      "p2-stratified-southern-society",
      "p2-sugar-and-slavery",
    ],
  },

  {
    id: "p2-sugar-and-slavery",
    name: "Sugar and Slavery",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["DBQ frequent", "causation"],
    summary:
      "The Caribbean sugar economy's extreme labor demands drove the mass importation of enslaved Africans, establishing sugar plantations as the economic and moral foundation of the Atlantic slave trade.",
    significance:
      "Sugar production was so labor-intensive — and profits so enormous — that Caribbean planters calculated enslaved labor was more cost-effective than indentured servitude, transforming the Atlantic slave trade from a small-scale practice into a massive system. Caribbean sugar colonies generated more wealth for Britain than all mainland colonies combined, giving the slave trade powerful economic defenders. The sugar-slavery nexus directly inspired mainland plantation models in South Carolina and Virginia.",
    context:
      "English Caribbean sugar production scaled up from the 1640s–1650s; by 1700 the Caribbean received far more enslaved Africans than mainland North America.",
    themes: [
      "Work, Exchange, and Technology",
      "Social Structures",
      "America in the World",
    ],
    connections: [
      "p2-triangular-trade",
      "p2-middle-passage",
      "p2-slave-revolts-caribbean",
      "p2-english-caribbean",
      "p2-caribbean-north-america-trade",
    ],
  },

  {
    id: "p2-middle-passage",
    name: "Middle Passage",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["DBQ frequent", "SAQ", "causation"],
    summary:
      "The transatlantic voyage of enslaved Africans from West Africa to the Americas, characterized by brutal conditions in which an estimated 15–20% of captives died en route.",
    significance:
      "The Middle Passage is the physical and moral center of the Atlantic slave trade — the mechanism by which approximately 12 million Africans were forcibly transplanted, constituting one of history's largest forced migrations. Conditions deliberately stripped enslaved people of language, family connections, and cultural identity, serving the interests of a system that required psychological destruction as well as physical control. For the exam, the Middle Passage is evidence in DBQ arguments about how the colonial economy was built on deliberate human brutality, not just labor scarcity.",
    context:
      "Operated continuously from the 1520s through the 1860s; the British slave trade carried approximately 3.1 million Africans, second only to Portugal.",
    themes: [
      "Social Structures",
      "Work, Exchange, and Technology",
      "Migration and Settlement",
    ],
    connections: [
      "p2-triangular-trade",
      "p2-growing-slave-population",
      "p2-sugar-and-slavery",
      "p2-slave-culture",
    ],
    mcqs: [
      {
        question:
          "The Middle Passage most directly illustrates which argument about the colonial Atlantic economy?",
        options: [
          "African merchants were equal partners in the Atlantic trade system",
          "Colonial prosperity was built on a foundation of deliberate, systematic human brutality and forced migration at an industrial scale",
          "European nations competed primarily to rescue enslaved Africans from worse conditions in rival colonies",
          "The death rate on slave ships was primarily caused by poor navigation rather than deliberately inhumane conditions",
        ],
        answerIndex: 1,
        explanation:
          "The Middle Passage — chains, extreme crowding, disease, deliberate deprivation — shows that enslaved people were treated as cargo, not humans, to maximize profits. Death rates of 15–20% were accepted as economically tolerable. African merchants participated but were not equal partners in the broader system (A), no nation framed slaving as rescue (C), and conditions were inhumane by design, not navigational error (D).",
      },
      {
        question:
          "Which of the following best explains why slavers used extreme crowding on Middle Passage ships despite the resulting high death rates?",
        options: [
          "Slavers believed cramped conditions prevented enslaved people from organizing resistance",
          "Ship captains were paid per voyage rather than per enslaved person delivered alive",
          "The enormous profit per enslaved person made it economically rational to pack ships beyond safe capacity even accounting for deaths",
          "English law required minimum numbers of enslaved people per ship to qualify for trade licenses",
        ],
        answerIndex: 2,
        explanation:
          "The economics of the slave trade were brutal: each enslaved person who survived sold for a high price, so even losing 15–20% to disease and brutality was profitable if you packed enough captives aboard. Captains were actually often paid per head surviving (which contradicts B), space did not prevent resistance — revolts occurred regularly (A is false), and no such licensing law existed (D).",
      },
    ],
  },

  {
    id: "p2-indentured-servitude",
    name: "Realities of Indentured Servitude",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["causation", "comparison"],
    summary:
      "Labor system in which English workers paid for Atlantic passage by contracting 4–7 years of labor, after which they were legally free — but rarely received the promised land and tools.",
    significance:
      "Indentured servitude was the primary labor system in the Chesapeake before 1680 and its failures directly produced Bacon's Rebellion: freed servants who received no land became a landless, angry class that fueled the uprising. The collapse of indentured servitude as a stable labor system — servants expected land that was no longer cheap — is the direct cause of planters' shift to race-based chattel slavery. The contrast between promise and reality illustrates how colonial economic structures systematically exploited poor migrants.",
    context:
      "Dominant in Virginia and Maryland from the 1620s through 1670s; gradually replaced by enslaved African labor after Bacon's Rebellion made a free landless class dangerous.",
    themes: [
      "Work, Exchange, and Technology",
      "Social Structures",
      "Migration and Settlement",
    ],
    connections: [
      "p2-bacons-rebellion",
      "p2-slave-codes",
      "p2-tobacco",
      "p2-stratified-southern-society",
    ],
  },

  {
    id: "p2-plantation-economy-vagaries",
    name: "Vagaries of the Plantation Economy",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["causation"],
    summary:
      "The extreme volatility of tobacco prices, driven by overproduction, created boom-bust cycles that winnowed out weaker planters and concentrated land in fewer hands.",
    significance:
      "Tobacco price crashes periodically devastated smaller planters while large-scale planters with diversified holdings could survive downturns, accelerating the concentration of land and power in a planter elite. This economic pressure is part of the structural context for Bacon's Rebellion — smaller planters and servants with no economic buffer had the most grievances. The instability also pushed colonists to diversify into other crops (indigo, rice) and forced dependency on English merchant credit.",
    context:
      "Tobacco overproduction crises occurred repeatedly in the 1620s, 1660s, and 1680s; the industry only stabilized with diversification in the 18th century.",
    themes: ["Work, Exchange, and Technology", "Social Structures"],
    connections: [
      "p2-tobacco",
      "p2-stratified-southern-society",
      "p2-bacons-rebellion",
      "p2-mercantilism",
    ],
  },

  {
    id: "p2-stratified-southern-society",
    name: "Stratified Southern Society",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["comparison", "DBQ frequent"],
    summary:
      "Hierarchical social structure in the southern colonies with large planters at the top, small farmers in the middle, and enslaved Africans and landless poor at the bottom.",
    significance:
      "Southern stratification differed fundamentally from New England's more egalitarian (among whites) structure — it produced a self-perpetuating planter aristocracy that dominated colonial legislatures, controlled the best land, and shaped southern culture around honor, leisure, and enslaved labor. This stratification is crucial for comparison essays contrasting regional colonial societies. The gap between rich planters and poor white farmers also created the political tensions that Bacon's Rebellion exposed.",
    context:
      "Solidified after 1700 as tobacco and rice plantation agriculture matured and chattel slavery replaced indentured servitude; the planter class dominated Virginia and Carolina politics.",
    themes: ["Social Structures", "Work, Exchange, and Technology"],
    connections: [
      "p2-tobacco",
      "p2-plantation-economy-vagaries",
      "p2-bacons-rebellion",
      "p2-slave-codes",
      "p2-indentured-servitude",
    ],
  },

  {
    id: "p2-diverse-northern-economy",
    name: "More Diverse Economy in the North",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["comparison", "LEQ"],
    summary:
      "Northern colonial economies diversified beyond agriculture into fishing, lumbering, shipbuilding, and manufacturing, developing a commercial class absent in the plantation South.",
    significance:
      "Northern economic diversity explains why the North developed a dynamic merchant class, craft trades, and urban commercial culture while the South remained tied to a plantation monoculture — a foundational sectional difference. The northern commercial economy also created greater social mobility than the plantation South, since success depended on skill and entrepreneurship rather than land ownership. This economic divergence is the structural basis for the sectional tensions that intensify in later periods.",
    context:
      "New England's rocky soil and cold winters prevented large-scale agriculture; the middle colonies (New York, Pennsylvania) exported wheat while developing trades.",
    themes: ["Work, Exchange, and Technology", "Geography and the Environment"],
    connections: [
      "p2-mercantilism",
      "p2-emerging-merchant-class",
      "p2-extractive-industries",
      "p2-saugus-ironworks",
      "p2-social-mobility",
    ],
  },

  {
    id: "p2-saugus-ironworks",
    name: "Saugus Ironworks",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["comparison"],
    summary:
      "First significant iron manufacturing facility in colonial America, established in Massachusetts in the 1640s using water power; a technological success but financial failure that closed in 1668.",
    significance:
      "The Saugus ironworks represents early colonial attempts to build an industrial base that England would later actively discourage under mercantile policy. Its financial failure despite technological viability shows the challenge of establishing capital-intensive industry without stable markets or sufficient investment — problems that would characterize American manufacturing attempts for a century. It is notable as evidence of colonial innovation within the constraints of a mercantilist system.",
    context:
      "Built after iron ore deposits were discovered near Lynn, Massachusetts in the 1640s; closed due to financial difficulties, not technical failures.",
    themes: ["Work, Exchange, and Technology"],
    connections: [
      "p2-diverse-northern-economy",
      "p2-extractive-industries",
      "p2-mercantilism",
    ],
  },

  {
    id: "p2-extractive-industries",
    name: "Extractive Industries",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["comparison"],
    summary:
      "Northern colonial industries that exploited natural resources — lumbering, fishing, mining, and the fur trade — producing exports for England in exchange for manufactured goods.",
    significance:
      "Extractive industries formed the economic backbone of the northern colonies and produced the commodities England actually needed — ship timber, fish, furs — under the mercantilist system. These industries also required fewer workers than plantations, preventing mass slavery from taking hold in the North and creating a more wage-based labor economy. The commercial networks built around fish, timber, and rum laid the foundation for the northern merchant class that would later challenge British trade restrictions.",
    context:
      "Replaced the declining fur trade as the primary northern exports by the mid-17th century; fishing and timber remained key exports through the Revolution.",
    themes: ["Work, Exchange, and Technology", "Geography and the Environment"],
    connections: [
      "p2-diverse-northern-economy",
      "p2-emerging-merchant-class",
      "p2-triangular-trade",
    ],
  },

  {
    id: "p2-caribbean-north-america-trade",
    name: "Caribbean–North America Trade Connection",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["causation"],
    summary:
      "Economic linkage between the English Caribbean sugar islands and the mainland colonies, with sugar, molasses, and rum flowing north in exchange for food, timber, and horses.",
    significance:
      "The Caribbean trade connection made New England's commercial economy possible — distilling Caribbean molasses into rum was New England's most profitable industry, and the profit margins funded merchant capital accumulation. Caribbean plantation methods and legal structures (Barbados slave codes) directly transferred to South Carolina, making the connection a cultural as well as economic pipeline. The trade also illustrated colonial willingness to violate Navigation Acts by trading with French and Dutch Caribbean islands.",
    context:
      "Developed from the mid-17th century; New England supplied food to Caribbean plantations that grew sugar exclusively, creating mutual dependency.",
    themes: ["Work, Exchange, and Technology", "America in the World"],
    connections: [
      "p2-triangular-trade",
      "p2-sugar-and-slavery",
      "p2-emerging-merchant-class",
      "p2-navigation-acts",
    ],
  },

  {
    id: "p2-emerging-merchant-class",
    name: "Emerging Merchant Class",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["comparison", "LEQ"],
    summary:
      "A colonial commercial elite that grew from Atlantic trade networks, operating semi-independently of English regulations and accumulating capital through both legal and illegal commerce.",
    significance:
      "The merchant class is the social embodiment of colonial economic maturation — its members operated outside England's legal trade framework, built transatlantic networks, and accumulated enough capital to fund the Revolution and the early republic. Their economic independence from England made political independence thinkable. In New England and the middle colonies, the merchant class's wealth gave it political influence rivaling that of the planter elite in the South.",
    context:
      "Emerged through the late 17th and early 18th centuries as trade networks stabilized; cities like Boston, Philadelphia, and New York became merchant headquarters.",
    themes: ["Work, Exchange, and Technology", "Social Structures"],
    connections: [
      "p2-navigation-acts",
      "p2-mercantilism",
      "p2-triangular-trade",
      "p2-diverse-northern-economy",
      "p2-colonial-cities",
    ],
  },

  {
    id: "p2-growing-consumerism",
    name: "Growing Consumerism",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["continuity-and-change"],
    summary:
      "Expansion of consumer culture in 18th-century colonial America driven by increased income, early industrialization, and the availability of British manufactured goods.",
    significance:
      "Colonial consumerism deepened American dependency on British manufactured goods, making later non-importation boycotts (1765, 1768) both economically painful and politically powerful. The consumer revolution also created a shared material culture across colonial regions — colonists who read the same magazines, drank from similar teacups, and wore similar fashions developed a transatlantic cultural identity. Consumer culture thus paradoxically both integrated colonists into the British empire and gave them the economic leverage to resist it.",
    context:
      "Accelerated from the 1720s–1740s as British industrial output grew and colonial incomes rose; preceded the non-importation movements of the 1760s.",
    themes: ["Work, Exchange, and Technology", "American and Regional Culture"],
    connections: [
      "p2-social-consequences-consumerism",
      "p2-social-mobility",
      "p2-emerging-merchant-class",
      "p2-city-commercial-culture",
    ],
  },

  {
    id: "p2-social-consequences-consumerism",
    name: "Social Consequences of Consumerism",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["continuity-and-change"],
    summary:
      "Consumer culture drove wealthy colonists to adopt refined English manners, commission portraits, furnish homes with luxury goods, and model themselves on the English gentry.",
    significance:
      "The social consequences of consumerism show how economic integration with Britain created a cultural integration that elite colonists actively sought — an Anglicization of colonial manners and aspirations. This made later anti-British political sentiment a rupture from, not a continuation of, colonial cultural trends, giving the Revolution an element of genuine cultural transformation. It also reinforced class stratification as luxury goods marked social distance between prosperous colonists and the laboring poor.",
    context:
      "Most pronounced in port cities from the 1730s–1760s; paralleled by a consumer revolution in Britain itself.",
    themes: ["Social Structures", "American and Regional Culture"],
    connections: [
      "p2-growing-consumerism",
      "p2-social-mobility",
      "p2-colonial-cities",
    ],
  },

  {
    id: "p2-social-mobility",
    name: "Social Mobility in the Colonies",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["comparison", "LEQ"],
    summary:
      "Greater opportunity for upward social movement in the American colonies than in England, driven by abundant land and labor scarcity — though far less than idealized.",
    significance:
      "Colonial social mobility is central to the emerging American identity of self-made independence and is contrasted in exam essays with rigid English class structure. The abundance of land meant property ownership — the key to political participation — was accessible to far more people than in England. However, mobility had sharp racial and gender limits: it applied almost exclusively to free white men, making it as much an exclusionary as an inclusionary concept.",
    context:
      "Most pronounced in the early colonial period; mobility narrowed as land became scarce and a planter/merchant elite consolidated power by the early 18th century.",
    themes: ["Social Structures", "American and National Identity"],
    connections: [
      "p2-stratified-southern-society",
      "p2-diverse-northern-economy",
      "p2-growing-consumerism",
      "p2-immigration-natural-increase",
    ],
  },

  {
    id: "p2-myth-self-sufficiency",
    name: "Myth of Colonial Self-Sufficiency",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["comparison"],
    summary:
      "The reality that colonial farmers were deeply integrated into market economies and dependent on credit, trade, and imported goods, contradicting the image of the self-reliant yeoman.",
    significance:
      "Recognizing that colonists were market-dependent rather than self-sufficient is essential for understanding why the Navigation Acts and British trade policy mattered. Colonists who relied on English credit to finance tobacco crops, or who bought British cloth rather than weaving their own, were economically vulnerable to British commercial policy in ways that made later trade restrictions explosive. It also challenges the romantic myth of the independent frontier farmer that shaped American political mythology.",
    context:
      "True of both rural and urban colonists; most grain farmers sold surplus at market rather than consuming all their produce.",
    themes: ["Work, Exchange, and Technology"],
    connections: [
      "p2-mercantilism",
      "p2-diverse-northern-economy",
      "p2-emerging-merchant-class",
    ],
  },

  {
    id: "p2-currency-shortage",
    name: "Shortage of Currency",
    period: 2,
    periodLabel: "Period 2: 1607–1754",
    category: "Economic Concepts",
    tags: ["causation"],
    summary:
      "Chronic lack of hard currency in the colonies caused by mercantilist drain of gold and silver to England, forcing colonists to use barter, commodity money, and eventually paper currency.",
    significance:
      "Currency shortage was a structural consequence of mercantilism — specie (gold and silver) flowed to England to pay for manufactured goods but never returned in sufficient quantities, leaving the colonial economy perpetually cash-starved. Colonial paper money experiments (like Massachusetts Bay's bills of credit) were repeatedly restricted by Parliament, creating grievances about British interference in colonial economic life. The currency crisis also reinforced colonial dependence on English merchant credit, deepening economic subordination.",
    context:
      "A persistent problem from the early colonial period; Parliament's Currency Acts (1751, 1764) restricting paper money were later listed as colonial grievances.",
    themes: ["Work, Exchange, and Technology"],
    connections: [
      "p2-mercantilism",
      "p2-navigation-acts",
      "p2-emerging-merchant-class",
    ],
  },
];
