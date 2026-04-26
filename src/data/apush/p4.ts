import type { ApushTopic } from '../apush-types'

export const period4Topics: ApushTopic[] = [
  // ── PEOPLE ──────────────────────────────────────────────────────────────────
  {
    id: 'thomas-jefferson-presidency',
    name: 'Thomas Jefferson (President)',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'Third president whose "Revolution of 1800" shifted power from Federalists to Democratic-Republicans and reshaped federal government philosophy.',
    significance: 'Jefferson\'s presidency demonstrated that power could transfer peacefully between parties, establishing a democratic precedent. His expansion of executive power through the Louisiana Purchase contradicted his own strict-constructionist philosophy, showing how governing realities often override ideological principles. Jefferson\'s reductions in the military, debt, and federal spending defined the Democratic-Republican vision for decades.',
    context: 'Jefferson\'s election ended twelve years of Federalist dominance under Washington and Adams; his two terms (1801–1809) were followed by his ally James Madison, extending the "Virginia Dynasty."',
    themes: ['Politics and Power', 'American and National Identity'],
    connections: ['louisiana-purchase', 'marbury-v-madison', 'embargo-act', 'jeffersonian-vision', 'judiciary-act-1801'],
    mcqs: [
      {
        question: 'Jefferson\'s purchase of the Louisiana Territory in 1803 is historically significant primarily because it',
        options: [
          'demonstrated strict constructionist principles in action',
          'showed that practical necessity could override ideological consistency',
          'was unanimously supported by both political parties',
          'required a constitutional amendment before taking effect'
        ],
        answerIndex: 1,
        explanation: 'Jefferson had long argued that the federal government could only do what the Constitution explicitly permitted—yet the Constitution said nothing about acquiring territory. His decision to proceed anyway illustrates how governing realities forced him to adopt a loose-constructionist position, undermining his own ideology. The other options are incorrect: Congress was not unanimous, no amendment was passed, and the purchase was the opposite of strict construction.'
      },
      {
        question: 'Which of the following best describes the "Revolution of 1800"?',
        options: [
          'A military overthrow of the Adams administration',
          'The first peaceful transfer of power between rival political parties in U.S. history',
          'A series of constitutional amendments that expanded voting rights',
          'Jefferson\'s program to abolish the national bank and standing army'
        ],
        answerIndex: 1,
        explanation: 'The "Revolution of 1800" refers to the first peaceful transition of executive power from one political party (Federalists) to another (Democratic-Republicans), which Jefferson himself called revolutionary precisely because it happened without violence. No military action, amendments, or bank abolition define the term.'
      }
    ]
  },
  {
    id: 'john-marshall',
    name: 'John Marshall',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'Federalist Chief Justice who shaped the Supreme Court into a co-equal branch of government through landmark rulings on judicial review and federal supremacy.',
    significance: 'Marshall\'s tenure established judicial review (Marbury v. Madison), confirmed federal supremacy over states (McCulloch v. Maryland), and protected corporations from state interference (Dartmouth College v. Woodward). His rulings consistently promoted nationalism and economic development, counterbalancing the Democratic-Republican preference for state power. Without Marshall, the federal government\'s authority over the economy and the judiciary\'s role as co-equal branch might have developed very differently.',
    context: 'Marshall was appointed by President Adams in 1801 just before Jefferson took office; he served until 1835, surviving through multiple Democratic-Republican and Jacksonian administrations that opposed his nationalist rulings.',
    themes: ['Politics and Power', 'American and National Identity'],
    connections: ['marbury-v-madison', 'mcculloch-v-maryland', 'dartmouth-college-v-woodward', 'worcester-v-georgia', 'judicial-review'],
    mcqs: [
      {
        question: 'John Marshall\'s Supreme Court decisions most consistently advanced which principle?',
        options: [
          'States\' rights and nullification',
          'Strict constructionist interpretation of the Constitution',
          'Federal supremacy and a strong national government',
          'Expansion of voting rights for all citizens'
        ],
        answerIndex: 2,
        explanation: 'Marshall\'s key rulings—Marbury v. Madison, McCulloch v. Maryland, and Dartmouth College v. Woodward—all expanded federal authority over states and protected national institutions. States\' rights and nullification were championed by Calhoun and the South; Marshall opposed both. Strict construction was Jefferson\'s philosophy, which Marshall\'s decisions frequently countered.'
      },
      {
        question: 'The significance of the impeachment trial of Justice Samuel Chase (1804) was that it',
        options: [
          'successfully removed a Federalist judge from the bench',
          'established that impeachment could not be used as a partisan political tool',
          'gave Congress authority to overturn Supreme Court rulings',
          'led directly to the repeal of the Judiciary Act of 1801'
        ],
        answerIndex: 1,
        explanation: 'Chase was acquitted by the Senate, establishing the precedent that disagreeing with a judge\'s political views was not sufficient grounds for removal. This protected judicial independence. He was not removed, Congress gained no new power over the Court, and the Judiciary Act was already being addressed separately.'
      }
    ]
  },
  {
    id: 'andrew-jackson',
    name: 'Andrew Jackson',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'Seventh president who expanded democracy for white males while simultaneously removing Native Americans, destroying the national bank, and confronting the nullification crisis.',
    significance: 'Jackson\'s presidency redefined American democracy, broadening the franchise for white men and championing the "common man" while excluding African Americans, women, and Native peoples. His destruction of the Second Bank of the United States destabilized the financial system for decades, contributing directly to the Panic of 1837. His forceful suppression of South Carolina\'s nullification attempt preserved federal authority, but his defiance of the Supreme Court in the Cherokee removal cases demonstrated that executive power could override judicial decisions.',
    context: 'Jackson rose to fame at the Battle of New Orleans (1815) and was elected president in 1828 after the "corrupt bargain" of 1824; he served two terms, and his Democratic Party became the oldest continuing political party in U.S. history.',
    themes: ['Politics and Power', 'American and National Identity', 'Social Structures'],
    connections: ['indian-removal-act', 'trail-of-tears', 'nullification-crisis', 'jacksons-veto-bank', 'spoils-system', 'second-party-system', 'worcester-v-georgia', 'battle-of-new-orleans', 'broadening-the-franchise'],
    mcqs: [
      {
        question: 'Andrew Jackson\'s veto of the re-charter of the Second Bank of the United States in 1832 reflected his belief that',
        options: [
          'the Bank had failed to stabilize the national currency',
          'the Bank represented a corrupt monopoly that favored wealthy elites over ordinary citizens',
          'a central bank was unconstitutional under any circumstances',
          'state banks were uniformly more reliable than the national bank'
        ],
        answerIndex: 1,
        explanation: 'Jackson\'s veto message framed the Bank as an undemocratic institution that gave unfair economic privileges to wealthy Eastern businessmen and foreign investors at the expense of ordinary farmers and workers. He did not argue the Bank was unconstitutional per se—the Supreme Court had already ruled it was constitutional in McCulloch v. Maryland. He did not praise state banks; his later Specie Circular showed distrust of paper money broadly.'
      },
      {
        question: 'Which of the following best characterizes the contradictions of Jacksonian Democracy?',
        options: [
          'It expanded political participation for all Americans while limiting economic opportunity',
          'It championed the rights of the common man for white males while dispossessing Native Americans and restricting African Americans',
          'It favored federal power over state governments in all areas of policy',
          'It promoted industrialization while opposing agricultural expansion'
        ],
        answerIndex: 1,
        explanation: 'Jacksonian Democracy broadened voting rights and political access for white men but simultaneously enacted Indian removal, restricted free Black Americans\' rights, and enslaved people remained property. Jackson also notably used federal power against South Carolina in the nullification crisis, so option C is too absolute. He was not a champion of industrialization—that was the Whig platform.'
      }
    ]
  },
  {
    id: 'henry-clay',
    name: 'Henry Clay',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Kentucky congressman and senator known as the "Great Compromiser" who championed the American System, brokered the Missouri Compromise, and led the Whig Party.',
    significance: 'Clay\'s American System—combining protective tariffs, a national bank, and federally funded internal improvements—offered a coherent nationalist economic vision that shaped Whig ideology and later influenced Republican economic policy. His ability to engineer the Missouri Compromise (1820) and the Compromise Tariff (1833) delayed the sectional crisis over slavery, earning him the nickname "Great Compromiser." His three failed presidential bids show how ideological clarity could be a liability in an era of mass democratic politics.',
    context: 'Clay entered Congress in 1811 as a War Hawk; he became Speaker of the House and a central figure in American politics through the 1850s, serving as a bridge between the early republic\'s elite political culture and Jacksonian mass democracy.',
    themes: ['Politics and Power', 'Work, Exchange, and Technology', 'American and National Identity'],
    connections: ['american-system', 'missouri-compromise', 'nullification-crisis', 'second-party-system', 'war-hawks'],
  },
  {
    id: 'john-c-calhoun',
    name: 'John C. Calhoun',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'South Carolina politician and former vice president who developed the theory of nullification as a defense of states\' rights and the Southern slave economy.',
    significance: 'Calhoun\'s nullification theory—that states could void federal laws they deemed unconstitutional—became the intellectual foundation for Southern sectionalism and, ultimately, secession. His transformation from a nationalist War Hawk to the leading champion of states\' rights reflects how Southern economic dependence on slavery made compromise with an industrializing North increasingly untenable. His arguments foreshadowed the constitutional crisis that would produce the Civil War.',
    context: 'Calhoun served as War of 1812-era nationalist, then as vice president under both Adams and Jackson, before breaking with Jackson over nullification and becoming the South\'s most articulate defender of slavery as a "positive good."',
    themes: ['Politics and Power', 'Social Structures', 'American and National Identity'],
    connections: ['nullification-crisis', 'calhouns-nullification-theory', 'tariff-of-abominations', 'second-party-system'],
  },
  {
    id: 'martin-van-buren',
    name: 'Martin Van Buren',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['SAQ', 'causation'],
    summary: 'Jackson\'s political strategist, secretary of state, and eighth president who oversaw the Panic of 1837 and established the Independent Treasury.',
    significance: 'Van Buren was the architect of the modern Democratic Party, demonstrating that organized party machinery could mobilize mass voters and win elections. His presidency was crippled by the Panic of 1837, which discredited Democratic laissez-faire economics and ushered in the Whig victory of 1840. His Independent Treasury plan—separating government funds from private banks—represented a significant if ultimately limited response to Jacksonian financial chaos.',
    context: 'Van Buren rose through New York machine politics, masterminded Jackson\'s 1828 victory, and became president in 1837, only to face the worst economic depression in American history to that point.',
    themes: ['Politics and Power', 'Work, Exchange, and Technology'],
    connections: ['panic-of-1837', 'independent-treasury', 'second-party-system', 'distribution-act'],
  },
  {
    id: 'tecumseh',
    name: 'Tecumseh',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Shawnee war chief who attempted to build a pan-tribal confederacy to halt American westward expansion before being killed at the Battle of the Thames (1813).',
    significance: 'Tecumseh\'s confederacy was the most serious attempt by Native Americans to halt U.S. expansion through unified resistance, and his alliance with Britain during the War of 1812 made him a major military threat. His defeat and death at the Thames shattered Indigenous military resistance in the Northwest, opening the region to rapid American settlement. His strategy of arguing that no single tribe could sell land that belonged to all peoples challenged the legal framework the U.S. used to dispossess Native nations.',
    context: 'Tecumseh built his movement in the aftermath of the Treaty of Greenville (1795), which had already forced major land cessions; his defeat at Tippecanoe (1811) weakened but did not destroy the confederacy before the War of 1812 ended it.',
    themes: ['Geography and the Environment', 'Politics and Power', 'Migration and Settlement'],
    connections: ['battle-of-tippecanoe', 'tenskwatawa', 'william-henry-harrison', 'war-of-1812'],
  },
  {
    id: 'tenskwatawa',
    name: 'Tenskwatawa (The Prophet)',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['SAQ'],
    summary: 'Shawnee religious leader and brother of Tecumseh whose spiritual revival movement urged Native peoples to reject Euro-American culture and unite against white encroachment.',
    significance: 'Tenskwatawa\'s religious message gave Tecumseh\'s political-military movement a spiritual legitimacy that attracted followers from many tribes. His prophecy that Prophetstown was divinely protected was discredited when Harrison burned it at Tippecanoe, undermining his authority and showing how religious nationalism could both fuel and fracture resistance movements.',
    context: 'Tenskwatawa\'s revival emerged in the early 1800s amid the social crisis caused by land loss and alcohol; it paralleled similar Native religious movements like that of Handsome Lake among the Seneca.',
    themes: ['American and Regional Culture', 'Social Structures', 'Geography and the Environment'],
    connections: ['tecumseh', 'battle-of-tippecanoe', 'handsome-lake'],
  },
  {
    id: 'william-henry-harrison',
    name: 'William Henry Harrison',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['SAQ'],
    summary: 'Military officer and politician who defeated Tecumseh\'s confederacy at Tippecanoe and the Thames, implemented the Harrison Land Law, and briefly served as ninth president.',
    significance: 'Harrison\'s military victories over Native confederacies opened the Northwest Territory to white settlement, and his Harrison Land Law (1800) made western land accessible to middle-class settlers by allowing installment purchases. His 1840 presidential campaign pioneered modern political techniques—slogans, rallies, penny press—demonstrating the full arrival of mass democratic politics.',
    context: 'Harrison served as congressional delegate for the Northwest Territory before his military career; he died after one month in office, making John Tyler president and triggering the first major Whig political crisis.',
    themes: ['Politics and Power', 'Migration and Settlement', 'Geography and the Environment'],
    connections: ['tecumseh', 'battle-of-tippecanoe', 'harrison-land-law', 'whigs-break-with-tyler'],
  },
  {
    id: 'noah-webster',
    name: 'Noah Webster',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: [],
    summary: 'Lexicographer whose "blue-backed speller" and American Dictionary standardized American English spelling and promoted a distinctive national cultural identity.',
    significance: 'Webster\'s linguistic project was an act of cultural nationalism—by creating a distinctly American standard for spelling and vocabulary, he helped forge a common identity separate from Britain. His works sold in the tens of millions, making them among the most widely distributed texts in early American history and demonstrating how print culture could build national cohesion.',
    context: 'Webster\'s speller appeared in 1783, at the close of the Revolution; his dictionary was completed in 1828, by which time American literary culture was striving to match European achievements.',
    themes: ['American and National Identity', 'American and Regional Culture'],
    connections: ['establishment-of-national-culture', 'washington-irving'],
  },
  {
    id: 'washington-irving',
    name: 'Washington Irving',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: [],
    summary: 'New York author whose tales of Rip Van Winkle and Ichabod Crane made him the first internationally acclaimed American literary figure.',
    significance: 'Irving demonstrated that American literature could achieve international recognition and cultural prestige, helping establish the idea of a distinct American cultural identity. His work contributed to the broader project of cultural nationalism that sought to prove American civilization\'s equality with Europe\'s.',
    context: 'Irving wrote in the Jeffersonian era when the new nation was anxious to prove its cultural legitimacy; he preceded the transcendentalists and the Hudson River School in asserting a uniquely American aesthetic.',
    themes: ['American and National Identity', 'American and Regional Culture'],
    connections: ['establishment-of-national-culture', 'noah-webster', 'hudson-river-school'],
  },
  {
    id: 'ralph-waldo-emerson',
    name: 'Ralph Waldo Emerson',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['LEQ', 'SAQ'],
    summary: 'Essayist and philosopher who founded Transcendentalism, emphasizing individual self-reliance, the goodness of human nature, and a spiritual relationship with the natural world.',
    significance: 'Emerson\'s Transcendentalist philosophy provided the intellectual foundation for multiple antebellum reform movements, including abolitionism and women\'s rights, by asserting the moral worth of every individual. His emphasis on self-reliance and anti-institutional thinking also fed into the era\'s democratic spirit, while his critique of materialism challenged the Market Revolution\'s values. Transcendentalism represents a major thread of American intellectual identity that continues to influence reform movements.',
    context: 'Emerson emerged in the 1830s as a reaction against both orthodox Calvinism and the materialism of the Market Revolution; his movement influenced Thoreau, the Brook Farm experiment, and abolitionist thought.',
    themes: ['American and National Identity', 'American and Regional Culture', 'Social Structures'],
    connections: ['transcendentalism', 'thoreau-civil-disobedience', 'brook-farm', 'second-great-awakening'],
  },
  {
    id: 'william-lloyd-garrison',
    name: 'William Lloyd Garrison',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'Radical abolitionist editor of The Liberator who demanded immediate emancipation and co-founded the American Anti-Slavery Society.',
    significance: 'Garrison\'s uncompromising demand for immediate emancipation (as opposed to gradual colonization) transformed abolitionism from a marginal movement into a morally urgent national debate. His newspaper reached thousands of readers and his arguments forced Americans to confront the full moral horror of slavery, deepening sectional tensions that contributed to the Civil War. His movement also advanced women\'s rights, as female abolitionists used the movement as a training ground for feminist activism.',
    context: 'Garrison founded The Liberator in 1831, the same year as Nat Turner\'s rebellion; his radical rhetoric alarmed the South and divided Northern abolitionists between moderates and extremists throughout the 1830s–1850s.',
    themes: ['Social Structures', 'American and National Identity', 'Politics and Power'],
    connections: ['american-anti-slavery-society', 'frederick-douglass', 'american-colonization-society', 'abolitionisms-enduring-influence', 'nat-turner-gabriel-prosser-rebellions'],
    mcqs: [
      {
        question: 'William Lloyd Garrison\'s approach to abolitionism differed from earlier antislavery advocates primarily because he',
        options: [
          'supported gradual emancipation through colonization in Africa',
          'demanded immediate, uncompensated emancipation and rejected colonization',
          'focused exclusively on ending the slave trade rather than slavery itself',
          'argued that slavery was a necessary evil required by the Constitution'
        ],
        answerIndex: 1,
        explanation: 'Garrison explicitly rejected the gradual colonization approach of the American Colonization Society and demanded immediate abolition, centering his argument on the moral harm to enslaved people rather than to white society. The other options describe positions Garrison actively opposed; he considered colonization insulting to African Americans who were native-born Americans.'
      },
      {
        question: 'The abolitionist movement of the 1830s and 1840s contributed most directly to which long-term development?',
        options: [
          'The immediate passage of emancipation legislation by Congress',
          'Deepening sectional tensions that eventually contributed to the Civil War',
          'The successful integration of African Americans into Northern political life',
          'A rapid decline in Southern cotton production'
        ],
        answerIndex: 1,
        explanation: 'Abolitionist agitation intensified Southern defensiveness about slavery, increased Northern moral opposition to its expansion, and made compromise increasingly difficult—all factors that contributed to the Civil War. Congress did not pass emancipation legislation in this period; free Black Northerners faced severe discrimination; and Southern cotton production continued to grow.'
      }
    ]
  },
  {
    id: 'frederick-douglass',
    name: 'Frederick Douglass',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['DBQ frequent', 'LEQ', 'SAQ'],
    summary: 'Self-emancipated formerly enslaved man who became the foremost African American abolitionist speaker and writer of the antebellum era.',
    significance: 'Douglass\'s firsthand testimony about slavery gave the abolitionist movement an unassailable moral authority that abstract arguments could not match, and his eloquence refuted claims of Black intellectual inferiority. His presence in the movement demonstrated that African Americans were active agents in their own liberation rather than passive victims. He later convinced Lincoln to allow Black soldiers in the Union Army and to support civil rights, making him a bridge between the abolitionist period and the Civil War era.',
    context: 'Douglass escaped slavery in 1838 and published his Narrative in 1845; he became internationally famous during a period when even Northern states sharply limited Black civil rights.',
    themes: ['Social Structures', 'American and National Identity'],
    connections: ['american-anti-slavery-society', 'william-lloyd-garrison', 'abolitionisms-enduring-influence', 'slave-resistance'],
  },
  {
    id: 'harriet-beecher-stowe',
    name: 'Harriet Beecher Stowe',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['SAQ', 'causation'],
    summary: 'Author of Uncle Tom\'s Cabin (1852), the antislavery novel that became the second best-selling book in 19th-century America and inflamed sectional tensions.',
    significance: 'Uncle Tom\'s Cabin translated the abstract moral arguments of abolitionism into an emotionally compelling narrative that reached hundreds of thousands of readers who had never engaged with abolitionist pamphlets. Its massive circulation demonstrated how print culture and mass literacy could shape national political opinion, and it deepened the North-South divide by making slavery\'s human cost vivid to ordinary Northerners.',
    context: 'Stowe wrote the novel in 1851–52, directly in response to the Fugitive Slave Act of 1850, which required Northerners to assist in returning escaped slaves—a law that had outraged many previously indifferent Northerners.',
    themes: ['Social Structures', 'American and National Identity', 'American and Regional Culture'],
    connections: ['william-lloyd-garrison', 'abolitionisms-enduring-influence', 'penny-press'],
  },
  {
    id: 'francis-cabot-lowell',
    name: 'Francis Cabot Lowell',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Boston merchant who built America\'s first integrated textile mill combining spinning and weaving, launching the factory system and the Lowell System of female labor.',
    significance: 'Lowell\'s mill at Waltham (1813) introduced the integrated factory system to America, transforming textile production from a cottage industry to an industrial one. The "Lowell System" of housing young women workers in supervised boardinghouses became a national model, drawing hundreds of thousands of New England farm women into wage labor and creating a new class of industrial workers. This shift represents a key moment in the Market Revolution that restructured gender roles, labor relations, and regional economies.',
    context: 'Lowell built his mill during the War of 1812, when British imports were cut off; his model factory expanded into the town of Lowell, Massachusetts, which became the showcase of American industrialization.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'American and National Identity'],
    connections: ['lowell-system', 'growth-of-textile-industry', 'women-workers', 'market-revolution'],
    mcqs: [
      {
        question: 'The Lowell System of the early nineteenth century is historically significant primarily because it',
        options: [
          'established the first labor unions in the United States',
          'brought young women into industrial wage labor on a large scale, reshaping gender roles and the economy',
          'demonstrated that enslaved labor could be used profitably in Northern factories',
          'proved that American textile manufacturing could not compete with British imports'
        ],
        answerIndex: 1,
        explanation: 'The Lowell System drew thousands of young New England women away from farm households into factory wage labor, creating a new class of female industrial workers and fundamentally altering the relationship between gender and economic production. It preceded the first major labor unions; it employed free white women, not enslaved people; and it succeeded precisely because it competed with British imports during the embargo period.'
      }
    ]
  },
  {
    id: 'eli-whitney',
    name: 'Eli Whitney',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Inventor of the cotton gin (1793) and pioneer of interchangeable parts manufacturing, whose cotton gin paradoxically entrenched slavery in the South.',
    significance: 'Whitney\'s cotton gin made short-staple cotton enormously profitable, which vastly increased the demand for enslaved labor and spread the plantation system across the Deep South—the opposite of what many hoped mechanization would do. His development of interchangeable parts for manufacturing (initially for muskets) laid the groundwork for mass production and the industrial revolution in America. The cotton gin is thus a pivotal cause of both the expansion of slavery and the intensification of the sectional crisis.',
    context: 'Whitney invented the cotton gin in 1793, just as the slave trade was about to be cut off in 1808; the gin created an enormous new demand for enslaved labor at precisely the moment supply was being legally restricted, driving up slave prices and the domestic slave trade.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'Geography and the Environment'],
    connections: ['cotton-gin', 'expansion-of-slavery', 'short-staple-cotton', 'spread-of-cotton-production'],
    mcqs: [
      {
        question: 'The most significant unintended consequence of Eli Whitney\'s invention of the cotton gin was that it',
        options: [
          'reduced the need for enslaved labor by automating cotton processing',
          'vastly increased the demand for enslaved labor by making cotton cultivation highly profitable',
          'encouraged Southern planters to diversify their crops',
          'accelerated industrialization in the South by spurring demand for textile mills'
        ],
        answerIndex: 1,
        explanation: 'The cotton gin removed the bottleneck in cotton processing, making cotton cultivation so profitable that planters dramatically expanded their acreage—which required far more enslaved labor to pick and plant. The gin processed cotton; it did not plant or harvest it, so human labor remained essential. Southern diversification and industrialization did not follow; instead the South doubled down on cotton monoculture.'
      }
    ]
  },
  {
    id: 'horace-mann',
    name: 'Horace Mann',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: ['SAQ'],
    summary: 'Massachusetts education reformer who led the push for state-funded public schools, better-paid teachers, and a universal common school system in the 1830s–40s.',
    significance: 'Mann\'s reforms established the principle that public education was a civic obligation of the state, not just a private or religious matter. His work set the precedent for tax-funded universal schooling that became the American standard by the Civil War era, directly linked to democratic ideals that an informed citizenry was essential to self-government.',
    context: 'Mann\'s crusade came during the Second Great Awakening era when reformers believed human improvement was possible through proper institutions; he worked alongside other benevolent reformers in the temperance, prison reform, and women\'s rights movements.',
    themes: ['American and National Identity', 'Social Structures'],
    connections: ['rapid-growth-of-public-education', 'second-great-awakening', 'benevolent-empire'],
  },
  {
    id: 'robert-fulton',
    name: 'Robert Fulton',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: [],
    summary: 'Engineer who launched the first commercially successful steamboat, the Clermont, on the Hudson River in 1807.',
    significance: 'Fulton\'s steamboat proved that steam-powered river travel was commercially viable, launching a transportation revolution that dramatically reduced the cost and time of moving goods and people along America\'s inland waterways. Steamboats enabled the agricultural West to ship goods to Eastern and Southern markets, integrating the national economy and fueling both western settlement and Southern cotton expansion.',
    context: 'Fulton\'s Clermont appeared in 1807, at the start of the Jeffersonian economic transformation; steamboats then became central to the Market Revolution, connecting the interior to coastal markets before railroads surpassed them in the 1840s–50s.',
    themes: ['Work, Exchange, and Technology', 'Geography and the Environment'],
    connections: ['steamboats', 'erie-canal', 'market-revolution', 'transportation-revolution'],
  },
  {
    id: 'cyrus-mccormick',
    name: 'Cyrus McCormick',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'People',
    tags: [],
    summary: 'Inventor of the mechanical reaper (patented 1834) that mechanized wheat harvesting and launched mass agricultural production in the Northwest.',
    significance: 'The McCormick reaper allowed a single worker to harvest as much grain as many hand laborers, making large-scale wheat farming in the Northwest commercially viable and further integrating American agriculture into the market economy. By 1860 over 100,000 reapers were in use, helping make the Northwest the breadbasket of the nation and strengthening the economic ties between the Northwest and the industrial Northeast—a North-North alliance that would prove crucial in the Civil War.',
    context: 'McCormick patented his reaper in 1834 and built his Chicago factory in 1847, just as the railroad was connecting the Northwest to Eastern markets; his invention complemented the Erie Canal in making the region agriculturally dominant.',
    themes: ['Work, Exchange, and Technology', 'Geography and the Environment'],
    connections: ['new-agricultural-technologies', 'transportation-revolution', 'industrialization-old-northwest', 'market-revolution'],
  },

  // ── EVENTS ──────────────────────────────────────────────────────────────────
  {
    id: 'louisiana-purchase',
    name: 'Louisiana Purchase',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'Jefferson\'s 1803 purchase of ~828,000 square miles from France for $15 million, doubling the size of the United States.',
    significance: 'The Louisiana Purchase was the single largest territorial acquisition in U.S. history and set the precedent for expansionist foreign policy by executive action. It demonstrated the contradiction at the heart of Jeffersonian ideology: a strict constructionist president used broad implied powers to acquire territory the Constitution never authorized. The purchase opened the continent to westward expansion, eventually forcing the slavery question into every new territory and fueling the sectional crisis.',
    context: 'Napoleon offered the territory in 1803 because his army had been destroyed by disease in Haiti and he needed funds for European wars; Jefferson had sought only to purchase New Orleans to protect Mississippi River trade.',
    themes: ['Geography and the Environment', 'Politics and Power', 'America in the World'],
    connections: ['thomas-jefferson-presidency', 'zebulon-pike', 'toussaint-louverture', 'reasons-for-westward-expansion', 'manifest-destiny'],
    mcqs: [
      {
        question: 'The Louisiana Purchase of 1803 created a constitutional dilemma for Jefferson primarily because',
        options: [
          'the Senate refused to ratify the treaty',
          'the Constitution did not explicitly grant the federal government the power to acquire new territory',
          'France demanded that the U.S. also accept responsibility for French debts in the territory',
          'the purchase required the U.S. to guarantee the rights of French citizens living there'
        ],
        answerIndex: 1,
        explanation: 'Jefferson was a strict constructionist who believed the federal government could only exercise powers explicitly granted by the Constitution—and the Constitution said nothing about purchasing foreign territory. He had to set aside his own principles to complete the purchase. The Senate did ratify the treaty; debt assumption and citizen rights were concerns but not the constitutional core of the dilemma.'
      }
    ]
  },
  {
    id: 'chesapeake-leopard-incident',
    name: 'Chesapeake-Leopard Incident',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Events',
    tags: ['SAQ', 'causation'],
    summary: 'The 1807 British naval attack on the U.S.S. Chesapeake, which inflamed American outrage and pushed Jefferson toward the Embargo Act.',
    significance: 'The incident crystallized American grievances about British impressment and disregard for American sovereignty, nearly provoking a declaration of war. It demonstrated that the young republic lacked the naval power to defend its neutrality rights, pushing Jefferson toward economic coercion (the Embargo) rather than military confrontation. The episode shows how European wars constrained American foreign policy and fueled the nationalism that eventually led to the War of 1812.',
    context: 'The incident occurred amid the Napoleonic Wars when both Britain and France were seizing American ships; it followed years of British impressment of American sailors and came just months before Jefferson signed the Embargo Act.',
    themes: ['America in the World', 'Politics and Power', 'American and National Identity'],
    connections: ['embargo-act', 'napoleonic-wars', 'war-of-1812', 'thomas-jefferson-presidency'],
  },
  {
    id: 'battle-of-tippecanoe',
    name: 'Battle of Tippecanoe',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Events',
    tags: ['SAQ', 'causation'],
    summary: 'William Henry Harrison\'s 1811 attack on Prophetstown that destroyed the headquarters of Tenskwatawa\'s movement and weakened Tecumseh\'s confederacy.',
    significance: 'The battle discredited Tenskwatawa\'s claim that Prophetstown was spiritually protected, undermining the religious cohesion of the pan-tribal confederacy just as Tecumseh was trying to expand it. It also provided Harrison with a campaign slogan ("Tippecanoe and Tyler Too") that carried him to the presidency in 1840, showing how military victories over Native peoples became political capital. The battle pushed remaining Native confederates into the arms of the British, contributing to the War of 1812.',
    context: 'The battle occurred while Tecumseh was traveling south to recruit Southern tribes; Harrison chose to strike during Tecumseh\'s absence, and the resulting destruction of Prophetstown proved a critical blow to the confederacy.',
    themes: ['Geography and the Environment', 'Politics and Power', 'Migration and Settlement'],
    connections: ['tecumseh', 'tenskwatawa', 'william-henry-harrison', 'war-of-1812'],
  },
  {
    id: 'war-of-1812',
    name: 'War of 1812',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'The conflict between the United States and Britain (1812–1815) sparked by impressment, trade restrictions, and western expansion, which ended in a military stalemate but fostered intense American nationalism.',
    significance: 'Though the war ended in a draw, it produced a surge of American nationalism, discredited the Federalists (via the Hartford Convention), and enabled westward expansion by breaking Native resistance in the Northwest and South. The war\'s economic disruptions also spurred American manufacturing, as the British blockade cut off imports and forced domestic production, accelerating the Market Revolution. Andrew Jackson\'s victory at New Orleans made him a national hero and launched his political career.',
    context: 'The war followed years of British impressment and trade restrictions during the Napoleonic Wars; it was declared by a Congress dominated by War Hawks like Henry Clay who wanted to conquer Canada and end British support for Native resistance.',
    themes: ['America in the World', 'American and National Identity', 'Politics and Power'],
    connections: ['war-hawks', 'battle-of-new-orleans', 'hartford-convention', 'treaty-of-ghent', 'tecumseh', 'chesapeake-leopard-incident', 'growth-of-textile-industry'],
    mcqs: [
      {
        question: 'Which of the following was the most significant domestic consequence of the War of 1812?',
        options: [
          'The destruction of the Federalist Party due to its opposition to the war',
          'The acquisition of Canada as a new U.S. territory',
          'The permanent resolution of border disputes with Britain',
          'The abolition of impressment by the British navy'
        ],
        answerIndex: 0,
        explanation: 'The Hartford Convention, in which Federalists discussed secession and proposed constitutional amendments during wartime, permanently discredited the party as disloyal, hastening its collapse. Canada was not acquired—the U.S. failed in every attempt to invade. The Treaty of Ghent resolved little on the border question, and the British did not formally renounce impressment in the treaty.'
      }
    ]
  },
  {
    id: 'battle-of-new-orleans',
    name: 'Battle of New Orleans',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Events',
    tags: ['SAQ'],
    summary: 'Andrew Jackson\'s decisive victory over British forces in January 1815, fought after the Treaty of Ghent had already been signed, which made him a national hero.',
    significance: 'The victory created a mythic narrative of American triumph that overshadowed the war\'s overall stalemate, providing a powerful boost to national pride and Jacksonian political mythology. Ironically fought after peace had been declared, it shaped public memory of the war as an American victory and launched Jackson\'s political career.',
    context: 'The battle was fought on January 8, 1815, roughly two weeks after the Treaty of Ghent was signed on December 24, 1814; word of peace had not yet reached the combatants.',
    themes: ['America in the World', 'American and National Identity'],
    connections: ['war-of-1812', 'andrew-jackson', 'hartford-convention', 'treaty-of-ghent'],
  },
  {
    id: 'election-of-1824',
    name: 'Election of 1824 / "Corrupt Bargain"',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Events',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'The disputed presidential election in which John Quincy Adams was chosen by the House of Representatives over popular-vote winner Andrew Jackson, which Jackson\'s supporters called a "corrupt bargain."',
    significance: 'The election\'s outcome delegitimized the old congressional caucus system for nominating presidents and permanently split the Democratic-Republican Party into Jacksonian Democrats and National Republicans (later Whigs). Jackson\'s supporters\' fury over the "corrupt bargain" energized a new style of democratic politics based on popular sovereignty, leading directly to Jackson\'s landslide victory in 1828 and the rise of the Second Party System.',
    context: 'No candidate won a majority in the Electoral College; the House chose Adams when Henry Clay (who had been eliminated as fourth-place finisher) threw his support to Adams, and Adams then appointed Clay as Secretary of State—which Jackson\'s allies labeled a deal.',
    themes: ['Politics and Power', 'American and National Identity'],
    connections: ['andrew-jackson', 'henry-clay', 'second-party-system', 'end-of-caucus-system', 'tariff-of-abominations'],
  },
  {
    id: 'nullification-crisis',
    name: 'Nullification Crisis',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'The 1832–33 confrontation in which South Carolina declared the Tariffs of 1828 and 1832 void within its borders, and Jackson threatened military force to enforce federal law.',
    significance: 'The crisis established that no single state could unilaterally nullify federal law—a precedent Jackson enforced through a force bill and military threats. However, the compromise tariff engineered by Clay also showed that Southern grievances could extract concessions, encouraging future Southern threats of nullification. The crisis previewed the larger struggle over federal versus state authority that would culminate in the Civil War.',
    context: 'South Carolina\'s action was driven by the "Tariff of Abominations" (1828) and further protective tariffs that benefited Northern manufacturers at Southern consumers\' expense; Calhoun\'s nullification theory provided the intellectual justification.',
    themes: ['Politics and Power', 'American and National Identity', 'Work, Exchange, and Technology'],
    connections: ['andrew-jackson', 'john-c-calhoun', 'calhouns-nullification-theory', 'tariff-of-abominations', 'henry-clay'],
    mcqs: [
      {
        question: 'The Nullification Crisis of 1832–33 is significant primarily because it',
        options: [
          'resulted in the permanent repeal of all protective tariffs',
          'established that states could nullify federal laws they considered unconstitutional',
          'demonstrated that federal authority over the states would be enforced, while also showing that Southern grievances could win tariff concessions',
          'led directly to the dissolution of the Democratic Party'
        ],
        answerIndex: 2,
        explanation: 'Jackson\'s force bill and military threats established that no state could unilaterally nullify federal law, preserving federal supremacy. However, Henry Clay\'s compromise tariff also reduced rates, showing that Southern threats could produce concessions. Tariffs were not permanently repealed; nullification was not validated; and the Democratic Party survived and thrived under Jackson.'
      }
    ]
  },
  {
    id: 'trail-of-tears',
    name: 'Trail of Tears',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The forced removal of approximately 17,000 Cherokee (and other tribes) from their homelands in the Southeast to Indian Territory in Oklahoma during the winter of 1838–39, in which thousands died.',
    significance: 'The Trail of Tears represents one of the most catastrophic episodes of federal policy toward Native peoples, demonstrating that the U.S. government would use military force to remove Indigenous peoples from economically valuable land regardless of treaty rights or Supreme Court rulings. Jackson\'s defiance of Worcester v. Georgia showed that executive power could override judicial decisions, setting a troubling precedent. The event was central to the destruction of the Five Civilized Tribes\' sovereignty and the consolidation of the Cotton South.',
    context: 'The removal followed the Indian Removal Act (1830) and the Supreme Court\'s ruling in Worcester v. Georgia (1832) that the Cherokee Nation had sovereignty—a ruling Jackson famously ignored, reportedly saying "John Marshall has made his decision; now let him enforce it."',
    themes: ['Geography and the Environment', 'Migration and Settlement', 'Politics and Power', 'Social Structures'],
    connections: ['indian-removal-act', 'andrew-jackson', 'worcester-v-georgia', 'agrarian-tribes-of-south', 'five-civilized-tribes'],
    mcqs: [
      {
        question: 'The Trail of Tears reveals which fundamental tension in Jacksonian America?',
        options: [
          'Between Northern industrialists and Southern planters over tariff policy',
          'Between democratic ideals of popular sovereignty and the violent dispossession of Native peoples',
          'Between strict and loose constructionist interpretations of the Constitution',
          'Between the executive and legislative branches over war-making authority'
        ],
        answerIndex: 1,
        explanation: 'The Trail of Tears exposes the central contradiction of Jacksonian democracy: a period celebrated for expanding rights and opportunities for ordinary (white) Americans simultaneously carried out a brutal campaign of ethnic cleansing against Native peoples. Jackson justified it as protecting Native peoples, but the removal was driven by white demand for Cherokee land. The tariff conflict, constitutional interpretation debates, and separation of powers, while real issues of the era, are not what the Trail of Tears most directly illustrates.'
      }
    ]
  },
  {
    id: 'panic-of-1837',
    name: 'Panic of 1837',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Events',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'The severe economic depression triggered by Jackson\'s Specie Circular (1836), bank failures, and a contraction of British credit, lasting through the early 1840s.',
    significance: 'The Panic of 1837 was the worst economic depression in U.S. history to that point, demonstrating the dangerous consequences of Jackson\'s destruction of the national bank and his hard-money Specie Circular. It discredited the Democrats and enabled the Whig victory of 1840, showing how economic crises could reshape party politics. Van Buren\'s laissez-faire response—the Independent Treasury—also established a precedent of government non-intervention in economic crises that would persist until the Progressive Era.',
    context: 'The panic followed Jackson\'s destruction of the Second Bank, the resulting proliferation of unregulated state banks, wild land speculation, and the Specie Circular; it was worsened by a simultaneous British economic contraction that pulled investment from the U.S.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power'],
    connections: ['martin-van-buren', 'jacksons-veto-bank', 'independent-treasury', 'second-bank-of-us', 'distribution-act'],
  },
  {
    id: 'seneca-falls-convention',
    name: 'Seneca Falls Convention',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'The 1848 women\'s rights convention in New York that produced the Declaration of Sentiments, demanding equal rights including suffrage for women.',
    significance: 'Seneca Falls launched the organized women\'s suffrage movement in the United States, articulating for the first time a comprehensive demand for women\'s legal, political, and social equality. The convention demonstrated how the reform impulses of the Second Great Awakening and abolitionism trained women as public advocates who then applied those skills to their own rights. Women would not gain the vote until 1920, but the convention established the ideological foundation and organizational model for seven decades of activism.',
    context: 'The convention was organized by Elizabeth Cady Stanton and Lucretia Mott, both of whom had been excluded from the 1840 World Anti-Slavery Convention in London; the abolitionist movement had thus directly spawned the feminist movement.',
    themes: ['Social Structures', 'American and National Identity', 'Politics and Power'],
    connections: ['reform-movements-feminism', 'second-great-awakening', 'american-anti-slavery-society', 'william-lloyd-garrison'],
    mcqs: [
      {
        question: 'The Seneca Falls Convention of 1848 was most directly influenced by which preceding reform movement?',
        options: [
          'The temperance movement',
          'The abolitionist movement, which trained women as public advocates and then excluded them from leadership',
          'The transcendentalist movement of Ralph Waldo Emerson',
          'The Jacksonian democratic movement, which had expanded voting rights'
        ],
        answerIndex: 1,
        explanation: 'Women such as Elizabeth Cady Stanton and Lucretia Mott developed their organizational and oratorical skills in the abolitionist movement, but were excluded from the World Anti-Slavery Convention in 1840—an experience that directly motivated them to organize for women\'s rights. Temperance and transcendentalism were related reform currents but were not the direct institutional cause. Jacksonian democracy had explicitly excluded women from expanded franchise.'
      }
    ]
  },
  {
    id: 'dorr-rebellion',
    name: 'Dorr Rebellion',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Events',
    tags: ['SAQ'],
    summary: 'The 1842 uprising in Rhode Island in which Thomas Dorr and his followers attempted to force the adoption of a new constitution expanding suffrage.',
    significance: 'The Dorr Rebellion illustrated the limits of Jacksonian democratic reform: even as other states were expanding the franchise for white men, Rhode Island\'s archaic property requirements excluded most men. Although Dorr\'s armed coup failed, it pressured Rhode Island to adopt a more democratic constitution, demonstrating that popular pressure could force political reform without full revolution.',
    context: 'Rhode Island was an outlier in the era of expanding white male suffrage; the rebellion occurred in 1842, by which point most other states had already moved to universal white male suffrage.',
    themes: ['Politics and Power', 'American and National Identity'],
    connections: ['broadening-the-franchise', 'andrew-jackson', 'democratic-reforms'],
  },
  {
    id: 'second-great-awakening',
    name: 'Second Great Awakening',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The nationwide Protestant religious revival of the early 19th century, beginning around 1800, that emphasized individual salvation, moral reform, and active piety.',
    significance: 'The Second Great Awakening was the primary engine of antebellum reform: by teaching that individuals could perfect themselves and society, it launched the temperance, abolitionist, women\'s rights, prison reform, and education movements. Its democratic theology—rejecting predestination in favor of individual choice—reinforced Jacksonian democratic culture. The Awakening also created new denominations (especially Methodist and Baptist), transformed African American religious life, and sparked utopian community experiments.',
    context: 'The Awakening emerged after a period of rationalist Deism and followed the first Great Awakening of the 1740s; Cane Ridge (1801) was its symbolic beginning, and it intensified through the 1830s–40s in what Charles Finney called the "Burned-Over District" of New York.',
    themes: ['American and Regional Culture', 'Social Structures', 'American and National Identity'],
    connections: ['cane-ridge', 'charles-finney', 'american-society-temperance', 'seneca-falls-convention', 'american-anti-slavery-society', 'ralph-waldo-emerson', 'african-americans-and-revivals'],
    mcqs: [
      {
        question: 'The Second Great Awakening most directly contributed to which of the following developments?',
        options: [
          'A return to strict Calvinist predestination among Protestant denominations',
          'The rise of antebellum reform movements including abolitionism and women\'s rights',
          'A decline in church membership as rationalist Deism spread',
          'The consolidation of a single unified Protestant church in America'
        ],
        answerIndex: 1,
        explanation: 'The Second Great Awakening\'s emphasis on individual moral agency and the possibility of perfecting society directly inspired reform movements: if individuals could be saved, so could society. It expanded church membership dramatically—especially Methodist and Baptist—not declined it. Deism declined as revivalism grew. Rather than unifying denominations, the Awakening proliferated them.'
      }
    ]
  },

  // ── LEGISLATION & DOCUMENTS ─────────────────────────────────────────────────
  {
    id: 'judiciary-act-1801',
    name: 'Judiciary Act of 1801',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Legislation & Documents',
    tags: ['SAQ', 'causation'],
    summary: 'Federalist-passed law expanding the federal judiciary with new judgeships, allowing Adams to pack the courts before Jefferson took office.',
    significance: 'The act set up the conflict leading to Marbury v. Madison by creating the "midnight appointments" Jefferson refused to honor. More broadly, it represents Federalist strategy to preserve influence through the judiciary after losing the elected branches—a tactic that ultimately succeeded, as John Marshall shaped the Court\'s direction for three decades.',
    context: 'Passed during the Federalist lame-duck Congress after the 1800 election; Jefferson\'s Republicans tried to repeal it immediately, setting up Marbury v. Madison.',
    themes: ['Politics and Power'],
    connections: ['marbury-v-madison', 'john-marshall', 'thomas-jefferson-presidency'],
  },
  {
    id: 'embargo-act',
    name: 'Embargo Act of 1807',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Legislation & Documents',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Jefferson\'s law banning all American exports and closing U.S. ports to foreign trade, intended to coerce Britain and France into respecting American neutrality.',
    significance: 'The Embargo was a catastrophic policy failure that devastated New England merchants and shipowners without significantly altering British or French behavior, demonstrating the limits of economic coercion as a foreign policy tool. Its economic damage hardened New England Federalism and contributed to the Hartford Convention mentality. It also inadvertently spurred American manufacturing by cutting off British imports—an unintended step toward the Market Revolution.',
    context: 'Jefferson signed the Embargo in December 1807 following the Chesapeake-Leopard Incident and Napoleon\'s Continental System; it was replaced by the Non-Intercourse Act in 1809 at the end of his presidency.',
    themes: ['America in the World', 'Work, Exchange, and Technology', 'Politics and Power'],
    connections: ['chesapeake-leopard-incident', 'napoleonic-wars', 'non-intercourse-act', 'thomas-jefferson-presidency', 'hartford-convention'],
  },
  {
    id: 'non-intercourse-act',
    name: 'Non-Intercourse Act & Macon\'s Bill No. 2',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Legislation & Documents',
    tags: ['SAQ'],
    summary: 'Laws replacing the Embargo Act that reopened trade with all nations except Britain and France, then offered to restore trade with whichever power first respected American neutrality.',
    significance: 'These acts illustrated the weakness of American diplomatic leverage: Napoleon exploited Macon\'s Bill No. 2 by falsely promising to respect American neutrality, leading Madison to reimpose restrictions on Britain and inadvertently accelerating the path to the War of 1812. The sequence demonstrated how European great powers could manipulate American trade policy and how economic coercion repeatedly failed as a substitute for military power.',
    context: 'The Non-Intercourse Act (1809) replaced the disastrous Embargo; Macon\'s Bill (1810) was a further attempt to use trade as leverage—one Napoleon exploited to draw the U.S. into a de facto alliance against Britain.',
    themes: ['America in the World', 'Work, Exchange, and Technology'],
    connections: ['embargo-act', 'napoleonic-wars', 'war-of-1812'],
  },
  {
    id: 'harrison-land-law',
    name: 'Harrison Land Law of 1800',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Legislation & Documents',
    tags: ['SAQ', 'causation'],
    summary: 'Federal law that halved the minimum price of western land and allowed installment purchases, opening the frontier to middle-class settlers.',
    significance: 'By making land affordable on credit, the Harrison Land Law dramatically accelerated settlement of the western territories, displacing Native peoples and intensifying the conflict over land that would dominate the first half of the 19th century. It also tied western settlement to debt, making settlers vulnerable to economic downturns and creating political pressures for debt relief that shaped early national politics.',
    context: 'The law was passed when the Northwest Territory was being organized into states; it preceded the Indian Removal Act by three decades but set the demographic conditions that made removal politically irresistible.',
    themes: ['Geography and the Environment', 'Migration and Settlement', 'Work, Exchange, and Technology'],
    connections: ['william-henry-harrison', 'reasons-for-westward-expansion', 'jeffersons-offer-natives'],
  },
  {
    id: 'missouri-compromise',
    name: 'Missouri Compromise',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Legislation & Documents',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'Henry Clay\'s 1820 legislative solution admitting Missouri as a slave state and Maine as a free state, while prohibiting slavery north of the 36°30\' line in the Louisiana Territory.',
    significance: 'The Missouri Compromise temporarily resolved the crisis over slavery\'s westward expansion by establishing a geographical dividing line, but it also made explicit that slavery would be the defining issue of every future territorial expansion. John Quincy Adams called it "a title page to a great tragic volume," recognizing that it only postponed, not prevented, the inevitable confrontation. The compromise established the political pattern of balancing slave and free states that would eventually become unworkable.',
    context: 'The crisis was triggered by Missouri\'s application for statehood as a slave state in 1819, threatening the Senate\'s equal balance of 11 free and 11 slave states; it was the first major congressional battle over slavery\'s expansion.',
    themes: ['Politics and Power', 'Social Structures', 'Geography and the Environment'],
    connections: ['henry-clay', 'tallmadge-amendment', 'expansion-of-slavery', 'spread-of-cotton-production'],
    mcqs: [
      {
        question: 'The Missouri Compromise of 1820 revealed which fundamental challenge facing the United States?',
        options: [
          'The difficulty of building roads and canals to connect the western territories',
          'The inability of Congress to balance the competing economic interests of North and South over the expansion of slavery',
          'The weakness of the federal government in controlling state militias',
          'The growing conflict between Federalists and Democratic-Republicans over banking policy'
        ],
        answerIndex: 1,
        explanation: 'The Missouri crisis was the first moment when Congress faced the question of whether slavery would expand into new territories, revealing that North and South had fundamentally incompatible economic systems that made territorial expansion a zero-sum game. The compromise provided a temporary solution but exposed the impossibility of indefinitely postponing the slavery question. Infrastructure, militia control, and banking were separate issues.'
      }
    ]
  },
  {
    id: 'protective-tariff-1816',
    name: 'Protective Tariff of 1816',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Legislation & Documents',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'America\'s first explicitly protective tariff, designed to shield new domestic manufacturers from cheaper British imports after the War of 1812.',
    significance: 'The 1816 tariff marked a turning point in American economic policy, establishing the precedent of using federal power to protect domestic industry from foreign competition. It launched a decades-long debate over protective tariffs that would deepen the sectional divide: Northern manufacturers benefited while the South, which produced raw materials and consumed manufactured goods, bore the costs—tensions that would explode in the Nullification Crisis of 1832.',
    context: 'The tariff was passed with broad support from war-era nationalists, including Calhoun, who only later became its enemy when South Carolina felt its burden; the "Tariff of Abominations" (1828) was a more extreme successor that triggered the nullification crisis.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'American and National Identity'],
    connections: ['american-system', 'henry-clay', 'tariff-of-abominations', 'nullification-crisis', 'growth-of-textile-industry'],
  },
  {
    id: 'tariff-of-abominations',
    name: 'Tariff of Abominations (1828)',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Legislation & Documents',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'The 1828 tariff imposing heavy duties on imported goods that outraged the South and triggered South Carolina\'s nullification movement.',
    significance: 'The "Tariff of Abominations" became the flashpoint for the nullification crisis, with South Carolina arguing that a tariff benefiting Northern manufacturers at Southern expense was unconstitutional. It crystallized Southern arguments that the federal government had become an instrument of Northern economic domination, deepening the sectional tensions that would ultimately produce the Civil War. The tariff also demonstrates how economic policy became inseparable from the slavery debate.',
    context: 'The tariff was passed partly to help Northern and Western manufacturers, but Southern leaders saw it as proof that a Northern-dominated Congress would sacrifice Southern interests; Calhoun\'s "South Carolina Exposition and Protest" (1828) first laid out the nullification doctrine in response.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'Social Structures'],
    connections: ['nullification-crisis', 'john-c-calhoun', 'andrew-jackson', 'protective-tariff-1816'],
  },
  {
    id: 'indian-removal-act',
    name: 'Indian Removal Act (1830)',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Legislation & Documents',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'Jackson\'s 1830 law authorizing the forced relocation of Native tribes east of the Mississippi to Indian Territory in present-day Oklahoma.',
    significance: 'The Removal Act was the legal foundation for one of the most devastating episodes in American history, the forced removal of the Five Civilized Tribes, culminating in the Trail of Tears. It represents the ultimate expression of the belief that Native peoples had no right to land that white Americans wanted, regardless of treaties or court decisions. The act enabled the massive expansion of the Cotton South in the 1830s–40s, which in turn deepened the slave system.',
    context: 'Passed in 1830 despite significant Congressional opposition; it was implemented against tribes who had often adopted American-style governance and agriculture, refuting the "savagery" justification used to legitimize removal.',
    themes: ['Geography and the Environment', 'Migration and Settlement', 'Politics and Power', 'Social Structures'],
    connections: ['trail-of-tears', 'andrew-jackson', 'worcester-v-georgia', 'five-civilized-tribes', 'changing-attitudes-toward-indians'],
    mcqs: [
      {
        question: 'The Indian Removal Act of 1830 contradicted which Supreme Court ruling?',
        options: [
          'Marbury v. Madison, which established judicial review',
          'Worcester v. Georgia, which recognized the sovereignty of the Cherokee Nation',
          'McCulloch v. Maryland, which confirmed federal supremacy',
          'Dartmouth College v. Woodward, which protected private contracts'
        ],
        answerIndex: 1,
        explanation: 'In Worcester v. Georgia (1832), the Marshall Court ruled that Georgia had no authority over Cherokee lands and that the Cherokee Nation was a distinct sovereign entity. Jackson refused to enforce this ruling and proceeded with removal, defying the judiciary in a way that set a troubling precedent for executive disregard of court decisions. The other cases concerned judicial review, banking, and corporate charters—unrelated to Indian removal.'
      }
    ]
  },
  {
    id: 'monroe-doctrine',
    name: 'Monroe Doctrine',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Legislation & Documents',
    tags: ['LEQ', 'SAQ', 'continuity-and-change'],
    summary: 'President Monroe\'s 1823 declaration (drafted largely by John Quincy Adams) warning European powers not to colonize or interfere in the affairs of the Western Hemisphere.',
    significance: 'The Monroe Doctrine was a bold assertion of American hemispheric hegemony at a time when the U.S. lacked the military power to enforce it—backed in practice by the British navy, which also opposed European re-colonization of Latin America. It became the foundational statement of American foreign policy, invoked throughout the 19th and 20th centuries to justify U.S. intervention in Latin America. The doctrine expressed growing American nationalism and the desire for independence from European entanglement.',
    context: 'The doctrine was prompted by fears that Spain\'s European allies (the Holy Alliance) might help Spain reconquer its newly independent Latin American colonies; Secretary of State John Quincy Adams was its principal architect.',
    themes: ['America in the World', 'American and National Identity'],
    connections: ['revolution-in-latin-america', 'thomas-jefferson-presidency', 'adams-onis-treaty'],
    mcqs: [
      {
        question: 'The Monroe Doctrine of 1823 was significant primarily because it',
        options: [
          'was immediately backed by sufficient U.S. military force to deter European intervention',
          'asserted American hegemony over the Western Hemisphere as a foundational principle of U.S. foreign policy',
          'resulted in a formal military alliance with Britain to defend Latin America',
          'was the first instance of the U.S. intervening militarily in a Latin American country'
        ],
        answerIndex: 1,
        explanation: 'The Monroe Doctrine established the principle of American opposition to European colonization of the Americas, which became a cornerstone of U.S. foreign policy invoked repeatedly for over a century. The U.S. had no military power to enforce it in 1823—it was backed by British naval power. It was not a formal alliance with Britain, and it was a declaration, not a military intervention.'
      }
    ]
  },
  {
    id: 'treaty-of-ghent',
    name: 'Treaty of Ghent',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Legislation & Documents',
    tags: ['SAQ'],
    summary: 'The December 1814 treaty ending the War of 1812 on the basis of status quo ante bellum—each side returning to pre-war borders.',
    significance: 'The treaty\'s status quo terms confirmed that the war ended in a military draw, but it enabled American nationalists to claim victory (especially after Jackson\'s Battle of New Orleans) and helped usher in the "Era of Good Feelings." The treaty launched a series of follow-on agreements that gradually normalized Anglo-American relations, including commercial treaties and the Rush-Bagot Agreement, which demilitarized the Great Lakes—a model of peaceful border resolution.',
    context: 'Signed Christmas Eve 1814, before news of the battle of New Orleans reached either side; it restored pre-war boundaries and called for both nations to work toward ending the slave trade.',
    themes: ['America in the World', 'Politics and Power'],
    connections: ['war-of-1812', 'rush-bagot-agreement', 'battle-of-new-orleans', 'hartford-convention'],
  },
  {
    id: 'rush-bagot-agreement',
    name: 'Rush-Bagot Agreement',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Legislation & Documents',
    tags: [],
    summary: 'The 1817 agreement between the U.S. and Britain demilitarizing the Great Lakes by limiting naval vessels on both sides.',
    significance: 'The Rush-Bagot Agreement was the first bilateral disarmament treaty in American history and set the precedent for peaceful resolution of Anglo-American border tensions. It helped transform the U.S.-Canada border into the world\'s longest undefended border and reflected the post-War of 1812 normalization of relations between the former enemies.',
    context: 'Negotiated just two years after the War of 1812 ended; it was part of a broader normalization of U.S.-British relations that culminated in the 1817 commercial treaty and the Adams-Onís Treaty (1819).',
    themes: ['America in the World'],
    connections: ['treaty-of-ghent', 'war-of-1812', 'adams-onis-treaty'],
  },
  {
    id: 'adams-onis-treaty',
    name: 'Adams-Onís Treaty (1819)',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Legislation & Documents',
    tags: ['SAQ'],
    summary: 'Treaty in which Spain ceded Florida to the United States in exchange for the U.S. renouncing its claims to Texas.',
    significance: 'The treaty secured Florida for the United States without war, demonstrating John Quincy Adams\'s skill as a diplomat and the power of credible military threat (Jackson\'s invasion) as a negotiating tool. However, the U.S. gave up Texas—a decision that would prove enormously consequential when Texas became a flashpoint for the Mexican-American War. The treaty also extended the U.S.-Spanish boundary to the Pacific, establishing an American claim to the Oregon coast.',
    context: 'Negotiated after Jackson\'s unauthorized invasion of Florida in 1817–18; Spain, weakened by its colonial revolts, had no ability to resist American pressure.',
    themes: ['America in the World', 'Geography and the Environment'],
    connections: ['seminole-war', 'monroe-doctrine', 'manifest-destiny', 'andrew-jackson'],
  },
  {
    id: 'webster-ashburton-treaty',
    name: 'Webster-Ashburton Treaty (1842)',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Legislation & Documents',
    tags: [],
    summary: 'Treaty between the U.S. and Britain resolving the disputed Maine-Canada border and other outstanding issues, defusing Anglo-American tensions.',
    significance: 'The treaty settled a boundary dispute that had led to the "Aroostook War" skirmish and demonstrated that the U.S. and Britain could resolve conflicts diplomatically. It helped secure the northeastern border and protected key trade routes, reflecting the post-War of 1812 trend toward normalized Anglo-American relations that would eventually produce a strong strategic partnership.',
    context: 'Negotiated by Secretary of State Daniel Webster and British diplomat Lord Ashburton in 1842, concurrent with the Caroline Affair and Aroostook War tensions.',
    themes: ['America in the World'],
    connections: ['aroostook-war', 'caroline-affair'],
  },

  // ── COURT CASES ─────────────────────────────────────────────────────────────
  {
    id: 'marbury-v-madison',
    name: 'Marbury v. Madison (1803)',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Court Cases',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'Landmark 1803 Supreme Court case in which Chief Justice Marshall established the principle of judicial review—the Court\'s power to strike down laws as unconstitutional.',
    significance: 'Marbury v. Madison is arguably the most important court case in American history, establishing the judiciary as a co-equal branch capable of nullifying both congressional legislation and executive actions. By striking down part of the Judiciary Act of 1789, Marshall seized power for the Court while simultaneously avoiding a direct confrontation with Jefferson—a masterpiece of judicial politics. Without judicial review, the checks-and-balances system and constitutional supremacy would be unenforceable.',
    context: 'The case arose from Adams\'s "midnight appointments" and Jefferson\'s refusal to deliver Marbury\'s commission; Marshall used the dispute to establish a doctrine of far greater constitutional importance than the original controversy.',
    themes: ['Politics and Power', 'American and National Identity'],
    connections: ['john-marshall', 'judiciary-act-1801', 'judicial-review', 'thomas-jefferson-presidency'],
    mcqs: [
      {
        question: 'The most lasting significance of Marbury v. Madison (1803) was that it',
        options: [
          'guaranteed Marbury his commission as justice of the peace',
          'established the Supreme Court\'s power to declare acts of Congress unconstitutional',
          'limited the president\'s ability to make appointments during a lame-duck period',
          'required the Senate to confirm all judicial appointments within 30 days'
        ],
        answerIndex: 1,
        explanation: 'Marshall\'s ruling established judicial review—the Court\'s authority to nullify laws that conflict with the Constitution—making the Supreme Court a genuine co-equal branch of government. Ironically, Marbury did NOT receive his commission (Marshall ruled the Court lacked jurisdiction). The case established no specific time limits on Senate confirmation and did not directly address lame-duck appointments as a general practice.'
      }
    ]
  },
  {
    id: 'mcculloch-v-maryland',
    name: 'McCulloch v. Maryland (1819)',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Court Cases',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Marshall Court ruling that confirmed Congress\'s power to create a national bank (implied powers) and that states could not tax federal institutions.',
    significance: 'McCulloch v. Maryland is the foundational case for the doctrine of implied powers—that Congress may exercise powers "necessary and proper" to carry out its enumerated functions. By ruling that Maryland could not tax the Bank of the U.S., Marshall also established that federal law is supreme over state law in areas of constitutional federal authority. Together, these holdings dramatically expanded federal power and provided the constitutional basis for later federal economic programs.',
    context: 'The case arose during the Era of Good Feelings when Maryland tried to tax the Second Bank of the United States; Daniel Webster argued for the bank, and Marshall\'s ruling came just as states\' rights sentiment was beginning to grow.',
    themes: ['Politics and Power', 'Work, Exchange, and Technology', 'American and National Identity'],
    connections: ['john-marshall', 'second-bank-of-us', 'dartmouth-college-v-woodward', 'calhouns-nullification-theory'],
    mcqs: [
      {
        question: 'McCulloch v. Maryland (1819) most directly addressed which constitutional question?',
        options: [
          'Whether states could nullify federal laws',
          'Whether Congress had the implied power to charter a national bank and whether states could tax it',
          'Whether the Supreme Court could overturn acts of Congress',
          'Whether the president had the authority to remove appointees from office'
        ],
        answerIndex: 1,
        explanation: 'The case asked two questions: could Congress create a bank not explicitly mentioned in the Constitution (answered yes, via the Necessary and Proper Clause), and could a state tax that federal bank (answered no, because "the power to tax is the power to destroy"). Nullification was a later doctrine addressed in the nullification crisis; judicial review had been established in Marbury v. Madison; removal power was a separate executive question.'
      }
    ]
  },
  {
    id: 'dartmouth-college-v-woodward',
    name: 'Dartmouth College v. Woodward (1819)',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Court Cases',
    tags: ['SAQ'],
    summary: 'Marshall Court ruling protecting the private charter of Dartmouth College from state interference, establishing that contracts are binding on states.',
    significance: 'The ruling extended the Constitution\'s Contract Clause to restrict state governments from modifying or revoking corporate charters, providing crucial legal protection to the growing business corporation and enabling American corporate capitalism to develop. It helped create a stable legal environment for private investment, contributing to the Market Revolution. The case shows Marshall\'s consistent project of using the judiciary to protect private economic institutions from democratic state interference.',
    context: 'New Hampshire\'s Republican-controlled legislature had tried to convert Dartmouth into a public university; Daniel Webster\'s emotional argument for the college\'s independence won a landmark corporate rights ruling.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power'],
    connections: ['john-marshall', 'mcculloch-v-maryland', 'market-revolution'],
  },
  {
    id: 'worcester-v-georgia',
    name: 'Worcester v. Georgia (1832)',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Court Cases',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Marshall Court ruling that recognized the Cherokee Nation\'s sovereignty and invalidated Georgia\'s laws extending state authority over Cherokee lands.',
    significance: 'The ruling was a legal vindication of Native sovereignty, but Jackson\'s refusal to enforce it demonstrated that executive power could override judicial decisions when the political will to do so existed. The case is the starkest example of the gap between legal principle and political reality in the Jacksonian era, and it set a precedent that federal protection of minority rights could be nullified by executive inaction. The Cherokee were removed anyway, making the ruling a pyrrhic judicial victory.',
    context: 'The case came just two years after the Indian Removal Act (1830); Georgia was already seizing Cherokee lands, and the Marshall Court\'s ruling came too late and too weakly to stop the removal.',
    themes: ['Politics and Power', 'Social Structures', 'Geography and the Environment'],
    connections: ['john-marshall', 'andrew-jackson', 'trail-of-tears', 'indian-removal-act', 'five-civilized-tribes'],
  },
  {
    id: 'charles-river-bridge-v-warren',
    name: 'Charles River Bridge v. Warren Bridge (1837)',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Court Cases',
    tags: ['SAQ'],
    summary: 'Taney Court ruling that states could authorize competing enterprises even if it reduced the value of older corporate charters, reflecting Jacksonian anti-monopoly values.',
    significance: 'The ruling signaled a shift from the Marshall Court\'s pro-corporate, contract-protecting stance toward the Jacksonian ideal of competitive opportunity over established privilege. By ruling that older corporate charters could not block competition, the decision encouraged entrepreneurship and economic dynamism—but also made long-term investment in infrastructure less secure. The case shows how courts reflected the shifting political philosophy from Federalist nationalism to Jacksonian democracy.',
    context: 'The case was decided by Jackson appointee Chief Justice Roger Taney in 1837, explicitly departing from Marshall\'s precedent; it reflects the shift in judicial philosophy that accompanied Jacksonian political dominance.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power'],
    connections: ['john-marshall', 'andrew-jackson', 'market-revolution', 'second-party-system'],
  },
  {
    id: 'commonwealth-v-hunt',
    name: 'Commonwealth v. Hunt (1842)',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Court Cases',
    tags: ['SAQ'],
    summary: 'Massachusetts Supreme Court ruling declaring labor unions legal organizations and that strikes were a lawful form of protest.',
    significance: 'The ruling was a significant legal milestone for the labor movement, establishing that unions were not criminal conspiracies—a crucial recognition of workers\' rights to organize. However, its practical effect was limited because the huge supply of immigrant labor willing to work for low wages made strikes largely ineffective, demonstrating that legal rights without economic power provide limited protection.',
    context: 'The decision came in 1842, just as immigration was surging and the factory system was rapidly expanding; it came too late to help the dying craft union movement of the 1830s.',
    themes: ['Work, Exchange, and Technology', 'Social Structures'],
    connections: ['national-trade-unions', 'immigrant-labor', 'market-revolution'],
  },

  // ── MOVEMENTS & IDEOLOGIES ───────────────────────────────────────────────────
  {
    id: 'jeffersonian-vision',
    name: 'Jeffersonian Vision',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Movements & Ideologies',
    tags: ['LEQ', 'SAQ', 'continuity-and-change'],
    summary: 'Jefferson\'s political ideal of a republic of independent yeoman farmers, limited central government, and agrarian virtue as the foundation of democracy.',
    significance: 'The Jeffersonian vision defined the Democratic-Republican political philosophy that dominated American politics from 1800 to the 1820s and influenced Jacksonian democracy. However, it was increasingly contradicted by economic reality—America was industrializing, urbanizing, and commercializing despite Jefferson\'s preferences. The tension between the agrarian ideal and the Market Revolution is a central thread of American political culture throughout Period 4.',
    context: 'The Jeffersonian ideal drew on Enlightenment republicanism and contrasted sharply with Hamilton\'s pro-industrial, urban vision; the two competed throughout the early republic before the Market Revolution largely vindicated Hamilton\'s economic predictions.',
    themes: ['American and National Identity', 'Politics and Power', 'Work, Exchange, and Technology'],
    connections: ['thomas-jefferson-presidency', 'american-system', 'market-revolution', 'second-party-system'],
  },
  {
    id: 'manifest-destiny',
    name: 'Manifest Destiny',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Movements & Ideologies',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The widespread belief in the 1840s that American expansion to the Pacific was divinely ordained, inevitable, and justified by racial and cultural superiority.',
    significance: 'Manifest Destiny provided the ideological justification for the dispossession of Native peoples, the Mexican-American War, and the rapid territorial expansion that by 1848 stretched the U.S. from the Atlantic to the Pacific. It linked expansion to American national identity and democratic mission, making territorial growth seem both inevitable and righteous. Critically, every new territory acquired under Manifest Destiny reignited the explosive question of whether it would be slave or free.',
    context: 'The term was coined in 1845, but the ideology built on decades of westward expansion; it fueled the annexation of Texas, the Oregon compromise with Britain, and the Mexican-American War, all within a few years.',
    themes: ['American and National Identity', 'Geography and the Environment', 'America in the World', 'Social Structures'],
    connections: ['oregon-trail', 'stephen-austin', 'racial-justification', 'opposition-to-annexation', 'louisiana-purchase'],
    mcqs: [
      {
        question: 'The concept of Manifest Destiny in the 1840s most directly contributed to which development?',
        options: [
          'The peaceful diplomatic resolution of all territorial disputes with European powers',
          'The expansion of U.S. territory to the Pacific, while reigniting the debate over slavery\'s expansion',
          'The decline of nativist sentiment as Americans united around a common expansionist mission',
          'The end of Native American resistance to U.S. settlement in the Far West'
        ],
        answerIndex: 1,
        explanation: 'Manifest Destiny drove the annexation of Texas, the Oregon Territory acquisition, and the Mexican-American War, extending the U.S. to the Pacific by 1848—but each new territory immediately became a battleground over slavery\'s expansion, deepening sectional tensions. The period saw rising, not declining, nativist sentiment. Border disputes with Britain over Oregon required significant diplomatic negotiation, not peaceful resolution through manifest destiny. Native resistance continued well past this period.'
      }
    ]
  },
  {
    id: 'second-party-system',
    name: 'Second Party System (Democrats vs. Whigs)',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Movements & Ideologies',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'comparison', 'continuity-and-change'],
    summary: 'The partisan alignment from roughly 1828–1854 pitting Andrew Jackson\'s Democrats against the Whigs, representing competing visions of government\'s role in the economy.',
    significance: 'The Second Party System established the organizational patterns of modern American democratic politics—mass voter mobilization, national conventions, campaign slogans and imagery, and party loyalty across regions and classes. The contrast between Jacksonian Democrats (limited government, agrarian expansion, white male equality) and Whigs (active government, industrial development, moral reform) mapped onto sectional, class, and ethnic divisions that would shape the Civil War era.',
    context: 'The system emerged from the breakup of the Era of Good Feelings\' single-party politics after 1824; it collapsed in the 1850s when the slavery issue destroyed the Whig Party and created the Republicans.',
    themes: ['Politics and Power', 'American and National Identity', 'Social Structures'],
    connections: ['andrew-jackson', 'henry-clay', 'american-system', 'spoils-system', 'election-of-1824', 'whigs-break-with-tyler'],
    mcqs: [
      {
        question: 'The most important difference between Jacksonian Democrats and Whigs in the 1830s–1840s concerned',
        options: [
          'the abolition of slavery',
          'the role of the federal government in promoting economic development',
          'the expansion of voting rights to African Americans',
          'the annexation of Texas as a slave state'
        ],
        answerIndex: 1,
        explanation: 'Democrats favored limited government, opposing a national bank, protective tariffs, and federally funded internal improvements; Whigs favored Henry Clay\'s American System of active federal investment in all three. Neither party took a clear abolitionist stance, and neither championed Black voting rights. Texas annexation was a contentious issue that cut across party lines.'
      }
    ]
  },
  {
    id: 'transcendentalism',
    name: 'Transcendentalism',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Movements & Ideologies',
    tags: ['LEQ', 'SAQ', 'continuity-and-change'],
    summary: 'New England intellectual movement led by Emerson and Thoreau that emphasized individual self-reliance, intuition over reason, the spiritual significance of nature, and moral reform.',
    significance: 'Transcendentalism was the most influential American intellectual movement of the antebellum era, providing the philosophical foundation for abolitionism, civil disobedience, and individual moral conscience over unjust laws. Thoreau\'s essay on civil disobedience directly influenced later reform movements including Gandhi\'s independence movement and the American Civil Rights Movement. The movement also represents a distinctly American contribution to Western philosophy.',
    context: 'Transcendentalism emerged in the 1830s partly as a reaction against Calvinist orthodoxy and the materialism of the Market Revolution; it drew on German Romanticism and was centered in Concord, Massachusetts.',
    themes: ['American and National Identity', 'American and Regional Culture', 'Social Structures'],
    connections: ['ralph-waldo-emerson', 'thoreau-civil-disobedience', 'brook-farm', 'second-great-awakening', 'reform-movements-feminism'],
  },
  {
    id: 'calhouns-nullification-theory',
    name: 'Calhoun\'s Theory of Nullification',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Movements & Ideologies',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'John C. Calhoun\'s doctrine that individual states had the constitutional right to declare federal laws null and void within their borders.',
    significance: 'Nullification theory was the most dangerous constitutional doctrine of the antebellum era, providing an intellectual framework that could justify secession. While Jackson crushed it in 1833, Calhoun\'s arguments became the basis for Southern sectionalism and ultimately the Confederate theory of voluntary union. The theory revived and extended the Virginia and Kentucky Resolutions of 1798–99 and positioned states\' rights as a defense of the slave system against federal interference.',
    context: 'Calhoun developed nullification theory in his 1828 "South Carolina Exposition and Protest" in response to the Tariff of Abominations; the theory was tested and defeated in the Nullification Crisis of 1832–33.',
    themes: ['Politics and Power', 'American and National Identity', 'Social Structures'],
    connections: ['john-c-calhoun', 'nullification-crisis', 'tariff-of-abominations', 'andrew-jackson', 'second-party-system'],
  },
  {
    id: 'market-revolution',
    name: 'Market Revolution',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Movements & Ideologies',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The broad economic transformation of the early 19th century in which a self-sufficient agricultural economy gave way to a commercially integrated, industrializing market economy.',
    significance: 'The Market Revolution is the central economic development of Period 4, transforming how Americans worked, where they lived, and how they related to each other. It created an industrial working class in the North, entrenched cotton slavery in the South, generated massive wealth inequality, spurred reform movements, and deepened sectional differences that would eventually produce the Civil War. Every major political debate of the era—tariffs, banking, internal improvements, slavery—ultimately derives from the Market Revolution\'s uneven effects across regions and classes.',
    context: 'The revolution built on the transportation innovations of the 1810s–30s (canals, steamboats, railroads, telegraph) and the manufacturing advances begun during the Embargo/War of 1812 period; it accelerated dramatically from the 1820s through the 1850s.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'Geography and the Environment', 'Migration and Settlement'],
    connections: ['lowell-system', 'erie-canal', 'transportation-revolution', 'cotton-gin', 'expansion-of-slavery', 'increasing-wealth-inequalities', 'rapid-urbanization'],
    mcqs: [
      {
        question: 'Which of the following best describes a major social consequence of the Market Revolution in the antebellum North?',
        options: [
          'A decline in immigration as native-born workers filled all available factory jobs',
          'The creation of a distinct industrial working class living in urban areas and dependent on wages',
          'An increase in the economic independence of women as factory wages surpassed farm income',
          'A reduction in wealth inequality as factory production made goods affordable for all'
        ],
        answerIndex: 1,
        explanation: 'The Market Revolution drew both native-born farm workers and immigrants into wage-labor factories in rapidly growing cities, creating for the first time a class of workers who owned no land and depended entirely on wages for survival. Immigration surged rather than declined. Women in the Lowell System gained wage income but were subject to strict supervision and declining wages; their economic position was not independent. Wealth inequality increased dramatically as factory owners accumulated capital.'
      }
    ]
  },
  {
    id: 'american-system',
    name: 'American System',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Movements & Ideologies',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Henry Clay\'s economic program combining protective tariffs, a national bank, and federally funded internal improvements to build an integrated national economy.',
    significance: 'The American System represented the most coherent nationalist economic vision of the era and directly opposed Jacksonian laissez-faire philosophy. Its three pillars reflected the belief that federal investment could bind the nation\'s regions into a mutually beneficial whole. While largely blocked by Jackson\'s vetoes, its vision ultimately succeeded: the Republican Party implemented protective tariffs, a national banking system, and transcontinental railroads after the South left the Union, vindicating Clay\'s program.',
    context: 'Clay proposed the American System in the 1820s, building on his War of 1812-era nationalism; it was embraced by National Republicans and Whigs and consistently opposed by Jacksonian Democrats who feared centralized economic power.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'American and National Identity'],
    connections: ['henry-clay', 'protective-tariff-1816', 'second-bank-of-us', 'government-funded-roads', 'second-party-system'],
  },

  // ── ECONOMIC CONCEPTS ───────────────────────────────────────────────────────
  {
    id: 'second-bank-of-us',
    name: 'Second Bank of the United States',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Economic Concepts',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'The federally chartered national bank (1816–1836) that regulated currency and credit, destroyed by Andrew Jackson\'s veto of its re-charter in 1832.',
    significance: 'The Bank War was one of the defining political conflicts of the Jacksonian era, pitting Jackson\'s vision of democratic anti-monopoly politics against Whig economic nationalism. Jackson\'s veto message—arguing the Bank was an aristocratic institution that favored the wealthy over ordinary citizens—became a founding document of Democratic Party ideology. The Bank\'s destruction led to a fragmented, unstable banking system that contributed directly to the Panic of 1837, demonstrating how populist politics could have severe economic consequences.',
    context: 'The Second Bank was chartered in 1816 to stabilize currency after the chaos of the War of 1812; Nicholas Biddle ran it effectively until Jackson\'s political war against it; after the veto, government deposits were moved to state "pet banks."',
    themes: ['Work, Exchange, and Technology', 'Politics and Power'],
    connections: ['andrew-jackson', 'jacksons-veto-bank', 'panic-of-1837', 'nicholas-biddle', 'american-system', 'mcculloch-v-maryland'],
    mcqs: [
      {
        question: 'Andrew Jackson\'s destruction of the Second Bank of the United States most directly led to',
        options: [
          'a period of sustained economic growth and stability',
          'the Panic of 1837 and an unstable banking system lasting for decades',
          'the creation of a more democratic banking system controlled by ordinary citizens',
          'reduced speculation in western land as credit became more difficult to obtain'
        ],
        answerIndex: 1,
        explanation: 'Without the Bank\'s regulatory function, state "pet banks" issued excessive paper currency, fueling wild speculation. Jackson\'s Specie Circular (1836), which required hard money for land purchases, then triggered a credit collapse, causing the Panic of 1837—the worst depression in American history to that point. The new system was not more democratic in practice; power shifted to politically connected state banks. Speculation increased, not decreased, in the period before the Panic.'
      }
    ]
  },
  {
    id: 'cotton-economy',
    name: 'Cotton Economy and the Expansion of Slavery',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Economic Concepts',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The dominance of short-staple cotton as the South\'s cash crop after 1793, which by the Civil War era constituted two-thirds of all U.S. exports and enslaved millions.',
    significance: 'The cotton economy tied the South\'s prosperity irreversibly to slave labor, making the planter class deeply resistant to any threat to slavery and willing to fight to preserve it. "King Cotton" also tied Northern textile mills to Southern raw material, creating a powerful economic argument against abolition in the North. The cotton boom drove the expansion of slavery westward into new states, ensuring that every new territory became a battleground over slavery\'s expansion.',
    context: 'Short-staple cotton replaced the declining tobacco economy after Eli Whitney\'s cotton gin (1793) made processing profitable; by 1850 the South produced 3 million bales annually, and the slave population had grown proportionally.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'Geography and the Environment'],
    connections: ['eli-whitney', 'expansion-of-slavery', 'spread-of-cotton-production', 'planter-aristocracy', 'slave-markets', 'short-staple-cotton'],
    mcqs: [
      {
        question: 'The growth of the cotton economy in the antebellum South most directly resulted in',
        options: [
          'the diversification of the Southern economy as planters invested profits in manufacturing',
          'a massive increase in enslaved labor and the domestic slave trade as cotton cultivation expanded westward',
          'improved economic conditions for non-slaveholding white Southerners as cotton profits trickled down',
          'the decline of slavery in the Upper South as cotton cultivation moved further west'
        ],
        answerIndex: 1,
        explanation: 'As cotton cultivation spread across the Deep South and into new western states, demand for enslaved labor grew enormously—Alabama\'s slave population grew tenfold in this period. This expansion required and intensified the domestic slave trade as enslaved people were sold from the Upper South to the Deep South. The South did not diversify; planters reinvested in more land and slaves. Poor whites did not benefit significantly from cotton profits. While the Upper South did sell enslaved people west, slavery did not decline there; it adapted.'
      }
    ]
  },
  {
    id: 'transportation-revolution',
    name: 'Transportation Revolution',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Economic Concepts',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'The transformation of American transportation infrastructure through turnpikes, canals (especially the Erie Canal), steamboats, and railroads that integrated the national market economy.',
    significance: 'The Transportation Revolution was the physical foundation of the Market Revolution, dramatically reducing the cost of moving goods and people and connecting regional economies into a national market. The Erie Canal (1825) made New York the dominant commercial city; railroads then displaced canals and connected the Northwest to the Northeast rather than the South, a geographic shift with enormous implications for the Civil War-era political alignment. The revolution accelerated westward migration, urban growth, and industrial development.',
    context: 'The revolution began with turnpikes in the 1790s, accelerated with the Erie Canal (1825) and steamboats, and culminated with the railroad boom of the 1840s–50s; government funding at federal and state levels was crucial to the canal era, while railroads attracted private capital.',
    themes: ['Work, Exchange, and Technology', 'Geography and the Environment', 'Migration and Settlement'],
    connections: ['erie-canal', 'steamboats', 'railroad-development', 'market-revolution', 'government-funded-roads'],
    mcqs: [
      {
        question: 'The completion of the Erie Canal (1825) was most significant because it',
        options: [
          'connected the South\'s cotton-growing regions to Northern textile mills',
          'made New York City the dominant commercial hub by linking it to the Great Lakes and western markets',
          'was funded entirely by private enterprise without government involvement',
          'demonstrated that canal transportation was superior to railroads in all weather conditions'
        ],
        answerIndex: 1,
        explanation: 'The Erie Canal ran from the Hudson River (and thus New York City) to Lake Erie, opening up direct, cheap water transportation to the Great Lakes and the Northwest. This made New York the nation\'s leading commercial city and the gateway to the interior. The canal connected the Northwest to the Northeast, not the South. It was funded by New York State government, not private enterprise. Railroads eventually surpassed canals, especially in winter when canals froze.'
      }
    ]
  },
  {
    id: 'lowell-system',
    name: 'Lowell System',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Economic Concepts',
    tags: ['LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The factory model pioneered at Lowell, Massachusetts, that employed young women from farm families in supervised boardinghouses, creating America\'s first industrial working class.',
    significance: 'The Lowell System represented both the promise and the exploitation of early industrialism: it drew women into wage labor and provided a degree of social mobility and education, but also subjected them to strict supervision, long hours, and declining wages as competition intensified. The system\'s decline as immigrant labor replaced Yankee farm women illustrates how immigration transformed the American workforce and pushed workers toward labor organization.',
    context: 'The system began in the 1820s at Waltham and Lowell; it was initially presented as a model of benevolent capitalism with good working conditions, but by the 1840s conditions had deteriorated significantly as competition increased and immigrant workers replaced Yankees.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'Migration and Settlement'],
    connections: ['francis-cabot-lowell', 'growth-of-textile-industry', 'women-workers', 'immigrant-labor', 'national-trade-unions'],
  },
  {
    id: 'planter-aristocracy',
    name: 'Planter Aristocracy',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Economic Concepts',
    tags: ['LEQ', 'SAQ', 'continuity-and-change'],
    summary: 'The small elite of large slaveholding planters who dominated Southern society, politics, and culture through their control of land and enslaved labor.',
    significance: 'The planter aristocracy\'s dominance over Southern society helps explain why non-slaveholding white Southerners nevertheless supported slavery: they depended on planters for cotton gins, markets, and credit, were often related to planter families, and found racial solidarity across class lines more compelling than class solidarity with enslaved people. This social structure made the South politically unified in defense of slavery despite the majority of white Southerners owning no slaves.',
    context: 'The planter class emerged with the tobacco economy and consolidated with the cotton boom; they dominated Southern state legislatures, the Democratic Party\'s Southern wing, and social culture through the antebellum period.',
    themes: ['Social Structures', 'Work, Exchange, and Technology', 'Politics and Power'],
    connections: ['cotton-economy', 'slavery-legal-basis', 'cavalier-image', 'limited-class-conflict', 'southern-romanticism'],
  },

  // ── FOREIGN POLICY ──────────────────────────────────────────────────────────
  {
    id: 'napoleonic-wars',
    name: 'Napoleonic Wars and American Neutrality',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Foreign Policy',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'The European conflict (1803–1815) that repeatedly threatened American neutral trade, leading to the Embargo Act, the War of 1812, and ultimately American economic nationalism.',
    significance: 'The Napoleonic Wars forced the United States to navigate between two great powers while unable to militarily defend its interests, repeatedly demonstrating the limits of American power. The trade restrictions and humiliations they produced drove American policy from economic coercion (Embargo) to war, and the war\'s aftermath produced both nationalist policies (protective tariffs, national bank) and the transportation revolution. The period shows how European conflicts shaped American domestic development.',
    context: 'The wars escalated after 1803 and involved American trade from 1806 onward; the British Orders in Council and Napoleon\'s Continental System both targeted neutral American shipping.',
    themes: ['America in the World', 'Work, Exchange, and Technology'],
    connections: ['embargo-act', 'chesapeake-leopard-incident', 'war-of-1812', 'non-intercourse-act'],
  },
  {
    id: 'seminole-war',
    name: 'Seminole War (First and Second)',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Foreign Policy',
    tags: ['SAQ'],
    summary: 'Military conflicts between U.S. forces and the Seminole Nation in Florida—the First (1817–18) led to the Adams-Onís Treaty, the Second (1835–42) was one of the costliest Indian wars in U.S. history.',
    significance: 'The First Seminole War, begun by Jackson\'s unauthorized invasion, pressured Spain to cede Florida and demonstrated how aggressive military commanders could create facts on the ground that diplomacy then had to ratify. The Second Seminole War, in which Seminole warriors under Osceola used guerrilla tactics for seven years, was the most expensive Native resistance campaign in U.S. history and showed the limits of American military power against determined irregular resistance.',
    context: 'The First War preceded the Indian Removal Act; the Second War was a direct consequence of it, as the Seminoles resisted the 1832–33 treaties that had ceded their lands.',
    themes: ['America in the World', 'Geography and the Environment', 'Politics and Power'],
    connections: ['andrew-jackson', 'adams-onis-treaty', 'indian-removal-act', 'trail-of-tears', 'five-civilized-tribes'],
  },
  {
    id: 'oregon-dispute',
    name: 'Oregon Territory Dispute',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Foreign Policy',
    tags: ['SAQ'],
    summary: 'The joint U.S.-British occupation of the Oregon Territory (present-day Oregon, Washington, Idaho, and parts of Montana and Wyoming) from 1818 until the 1846 boundary settlement.',
    significance: 'The Oregon dispute illustrates the intersection of Manifest Destiny, Anglo-American diplomacy, and westward migration: hundreds of thousands of Americans traveled the Oregon Trail before the boundary was formally settled, creating facts on the ground through settlement. The peaceful resolution of the dispute at the 49th parallel demonstrated that Anglo-American conflicts could be resolved diplomatically, contrasting with the simultaneous military conflict with Mexico over Texas.',
    context: 'Joint occupation began after the War of 1812; "Fifty-Four Forty or Fight" was the Polk campaign slogan, but the 1846 Oregon Treaty compromised at the 49th parallel rather than demanding all of Oregon.',
    themes: ['America in the World', 'Geography and the Environment', 'Migration and Settlement'],
    connections: ['manifest-destiny', 'oregon-trail', 'adams-onis-treaty'],
  },
  {
    id: 'texas-annexation',
    name: 'Texas and the Debate over Annexation',
    period: 4,
    periodLabel: 'Period 4: 1800–1848',
    category: 'Foreign Policy',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'The politically explosive process by which American settlers in Texas revolted against Mexico (1836), declared independence, and eventually sought annexation to the United States (achieved 1845).',
    significance: 'Texas annexation reignited the sectional crisis over slavery\'s expansion: Texas was a slave republic, and its admission would upset the balance between slave and free states while potentially triggering war with Mexico. The fact that annexation had been delayed for nearly a decade due to the slavery controversy shows how deeply divisive the issue had become by the 1840s. The Mexican-American War that followed produced an enormous territorial acquisition that immediately became the new battleground for the slavery debate.',
    context: 'American settlers, many of them Southern slaveholders, had been invited to Texas by Mexico in the 1820s; by 1836 they outnumbered Mexicans and revolted. Texas was an independent republic from 1836–1845 before annexation.',
    themes: ['America in the World', 'Geography and the Environment', 'Politics and Power', 'Social Structures'],
    connections: ['stephen-austin', 'manifest-destiny', 'opposition-to-annexation', 'oregon-dispute'],
    mcqs: [
      {
        question: 'The debate over the annexation of Texas in the 1830s and 1840s was primarily delayed because',
        options: [
          'Mexico threatened military retaliation that the U.S. could not afford to risk',
          'adding Texas as a slave state would upset the congressional balance between slave and free states',
          'most Americans opposed westward expansion in principle',
          'the cost of acquiring Texas was prohibitively expensive'
        ],
        answerIndex: 1,
        explanation: 'Texas was a slave republic, and its annexation would have added a slave state without a corresponding free state, upsetting the balance that had been maintained since the Missouri Compromise. Northern politicians refused to allow this. Mexico\'s military threat was real but not the primary political obstacle. Most Americans supported westward expansion; cost was not the issue since no purchase was required after Texas was already independent.'
      }
    ]
  },
]
