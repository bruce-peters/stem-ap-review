import type { ApushTopic } from '../apush-types'

export const period6Topics: ApushTopic[] = [

  // ── People ──────────────────────────────────────────────────────────────────

  {
    id: 'booker-t-washington',
    name: 'Booker T. Washington',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'People',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'comparison'],
    summary: 'Prominent African American educator and spokesman who urged Black Americans to pursue vocational education and economic self-improvement rather than immediate political equality.',
    significance:
      'Washington\'s philosophy, articulated most fully in the Atlanta Compromise speech of 1895, accepted de facto segregation in exchange for white support of Black economic advancement — a pragmatic but deeply contested position. His influence over Black education and his access to white philanthropists made him the dominant Black public figure of the era, but his accommodation of segregation drew fierce criticism from contemporaries like W.E.B. Du Bois. For DBQ and LEQ essays, Washington represents the central debate over the best strategy for Black advancement under the constraints of Jim Crow.',
    context: 'Washington rose during the collapse of Reconstruction; his influence peaked before Du Bois founded the NAACP in 1909, which explicitly rejected accommodation.',
    themes: ['Social Structures', 'American and National Identity', 'Politics and Power'],
    connections: ['atlanta-compromise', 'plessy-v-ferguson', 'jim-crow-laws', 'black-middle-class', 'bourbon-rule'],
    mcqs: [
      {
        question: 'Booker T. Washington\'s Atlanta Compromise most directly reflected which strategic calculation?',
        options: [
          'African Americans should demand immediate political and civil equality through legal challenges',
          'Economic self-sufficiency and vocational skills were more achievable goals than civil rights under current political conditions',
          'Emigration to Africa was the best path forward for Black Americans',
          'Armed resistance to Jim Crow laws would ultimately succeed'
        ],
        answerIndex: 1,
        explanation: 'Washington accepted that fighting segregation head-on was futile in the 1890s South and instead argued that economic independence and skilled labor would eventually earn Black Americans respect and rights. He explicitly opposed immediate political agitation (A), rejected emigration (C), and never endorsed armed resistance (D).',
      },
      {
        question: 'Which of the following best describes the historical debate surrounding Booker T. Washington\'s philosophy?',
        options: [
          'Washington was universally celebrated by both white and Black Americans for his practical approach',
          'His accommodation of segregation was criticized as accepting an unjust system rather than challenging it',
          'Washington\'s ideas were rejected by the federal government as too radical',
          'His emphasis on vocational education had no lasting impact on African American institutions'
        ],
        answerIndex: 1,
        explanation: 'Critics, especially W.E.B. Du Bois, argued that Washington\'s accommodation gave white supremacy a veneer of legitimacy and discouraged the political agitation needed to dismantle it. He had broad white support (A is overstated about Black opinion), the federal government welcomed his accommodation (C is wrong), and he founded Tuskegee Institute which had lasting impact (D is wrong).',
      },
    ],
  },

  {
    id: 'henry-grady',
    name: 'Henry Grady',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'People',
    tags: ['SAQ', 'causation'],
    summary: 'Editor of the Atlanta Constitution who championed the "New South" ideology, arguing that Southern prosperity required industrialization rather than nostalgia for the antebellum plantation economy.',
    significance:
      'Grady\'s "New South" rhetoric represented a minority Southern vision that embraced industrial capitalism and reconciliation with the North, directly challenging the dominant Lost Cause mythology. His arguments acknowledged that the Confederacy lost because of industrial weakness — making him an early voice for Southern modernization. For SAQ and LEQ essays on Reconstruction\'s aftermath, Grady illustrates the tension between reformist impulses and the deeply entrenched resistance to change in the post-war South.',
    context: 'Grady wrote in the 1880s after Reconstruction\'s collapse; his New South vision competed with Lost Cause romanticism and never achieved broad Southern popular support.',
    themes: ['Work, Exchange, and Technology', 'American and Regional Culture', 'American and National Identity'],
    connections: ['railroad-development-south', 'bourbon-rule', 'lost-cause-mythology', 'new-south'],
  },

  {
    id: 'andrew-carnegie',
    name: 'Andrew Carnegie',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'People',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'Scottish immigrant who built Carnegie Steel into the dominant force in American steel production through vertical integration, accumulating one of the largest fortunes in US history.',
    significance:
      'Carnegie personified the Gilded Age "captain of industry" / "robber baron" duality: his business methods — price-cutting, vertical integration, crushing unions — eliminated competition and concentrated wealth, while his later philanthropy promoted the "Gospel of Wealth" justification for inequality. His deal with J.P. Morgan, selling Carnegie Steel for $450 million in 1901, symbolized the era\'s staggering concentration of capital. For DBQ and LEQ essays on industrialization, Carnegie is the central figure illustrating both the power and the social costs of corporate consolidation.',
    context: 'Carnegie opened his Pittsburgh steelworks in 1873 and dominated the industry through the 1890s; the sale to Morgan created U.S. Steel, the first billion-dollar corporation.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'Politics and Power'],
    connections: ['vertical-horizontal-integration', 'henry-clay-frick', 'homestead-strike', 'social-darwinism', 'rapid-corporate-consolidation', 'new-steel-production'],
    mcqs: [
      {
        question: 'Andrew Carnegie\'s rise to dominance in the steel industry most directly illustrates which Gilded Age economic pattern?',
        options: [
          'Government subsidies to strategic industries produced the era\'s largest fortunes',
          'Vertical integration and ruthless cost-cutting allowed single firms to dominate entire industries',
          'Immigrant workers were excluded from ownership and management of major corporations',
          'Free-market competition prevented any single company from controlling an industry'
        ],
        answerIndex: 1,
        explanation: 'Carnegie used vertical integration (controlling ore, transport, and production) and relentless price competition to destroy rivals, epitomizing industrial consolidation. Government subsidies helped railroads but not primarily steelmakers (A), Carnegie himself was an immigrant (C is wrong), and his career proved competition was eliminated rather than preserved (D).',
      },
      {
        question: 'The "Gospel of Wealth" associated with Andrew Carnegie most directly served which ideological purpose?',
        options: [
          'It provided a religious justification for labor unions demanding higher wages',
          'It argued that the wealthy had a social obligation to use their fortunes for public benefit, legitimizing wealth concentration',
          'It challenged Social Darwinism by arguing that the poor deserved government assistance',
          'It encouraged government regulation of corporations to prevent monopoly'
        ],
        answerIndex: 1,
        explanation: 'The Gospel of Wealth argued that concentrated wealth in capable hands was good for society as long as the rich gave back through philanthropy — justifying inequality while deflecting calls for redistribution or regulation. It did not support unions (A), it accepted Social Darwinism rather than challenging it (C), and it opposed government regulation (D).',
      },
    ],
  },

  {
    id: 'john-rockefeller',
    name: 'John D. Rockefeller',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'People',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'Founder of Standard Oil, which used horizontal integration and the trust structure to control 90% of American oil refining, becoming the archetypal Gilded Age monopoly.',
    significance:
      'Standard Oil was the template for the Gilded Age trust: by absorbing or crushing competitors and controlling pipelines and distribution, Rockefeller demonstrated how a single corporation could eliminate competition across an entire industry. The trust mechanism he pioneered spread to railroads, sugar, and steel, producing the concentrated corporate economy that the Sherman Antitrust Act (1890) tried and largely failed to address. For DBQ essays on economic power and inequality, Standard Oil is the essential case study.',
    context: 'Standard Oil was founded in 1870 and reached near-total dominance by the mid-1880s; the Supreme Court ordered its breakup in 1911 under the Sherman Act.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'Social Structures'],
    connections: ['vertical-horizontal-integration', 'trust-agreement', 'rapid-corporate-consolidation', 'sherman-antitrust-act', 'rise-of-petroleum'],
    mcqs: [
      {
        question: 'Rockefeller\'s Standard Oil Company most directly demonstrated which feature of Gilded Age capitalism?',
        options: [
          'Free-market competition naturally produced efficient and affordable goods for consumers',
          'Horizontal integration and trust agreements could eliminate competition and concentrate market control',
          'Government regulation successfully prevented monopoly formation during this period',
          'Immigrant workers were the primary beneficiaries of industrial expansion'
        ],
        answerIndex: 1,
        explanation: 'Standard Oil\'s 90% control of oil refining proved that trusts could effectively destroy competition, foreshadowing the antitrust battles of the Progressive Era. Markets were not self-correcting in this case (A), the Sherman Act failed to break up Standard Oil for decades (C), and workers benefited little from monopoly profits (D).',
      },
    ],
  },

  {
    id: 'eugene-debs',
    name: 'Eugene V. Debs',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'People',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Leader of the American Railway Union who organized the 1894 Pullman Strike, triggering a national railroad shutdown before being jailed when President Cleveland obtained a federal injunction.',
    significance:
      'The Pullman Strike and Debs\'s subsequent imprisonment established two major precedents: that the federal government would use injunctions to break strikes under the rubric of interstate commerce, and that corporate management organizations (like the General Managers\' Association) could coordinate nationally to defeat unions. Debs\'s transformation from mainstream labor leader to socialist was directly caused by his jailing, making him a symbol of how the legal system served capital over labor. For LEQ essays on the limits of labor power, Debs is the central figure.',
    context: 'The Pullman Strike occurred during the severe Depression of 1893; Debs\'s imprisonment radicalized him and he went on to run for president five times as a Socialist.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'Social Structures'],
    connections: ['pullman-strike', 'corporate-strength', 'knights-of-labor', 'afl-agenda', 'haymarket-square'],
  },

  {
    id: 'henry-clay-frick',
    name: 'Henry Clay Frick',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'People',
    tags: ['SAQ', 'causation'],
    summary: 'Carnegie\'s chief lieutenant who provoked the 1892 Homestead Strike by cutting wages and then crushed the union using Pinkerton detectives and the National Guard.',
    significance:
      'The Homestead Strike and Frick\'s victory over the Amalgamated Steel Union demonstrated that even well-organized craft unions could be broken by corporations willing to use private armies and state military power. The union\'s collapse from 24,000 to 7,000 members illustrated the broader weakening of the labor movement in the 1890s. For SAQ and LEQ responses on labor-capital relations, Frick epitomizes how industrialists used force and legal power to defeat collective action.',
    context: 'Frick managed Carnegie Steel during Carnegie\'s absence in 1892; after the strike, Carnegie Steel operated as a non-union shop for decades.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'Social Structures'],
    connections: ['homestead-strike', 'andrew-carnegie', 'corporate-strength', 'union-defeated'],
  },

  {
    id: 'mary-lease',
    name: 'Mary Lease',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'People',
    tags: ['SAQ', 'comparison'],
    summary: 'Kansas Populist orator famous for urging farmers to "raise less corn and more hell," who became one of the most prominent women in the People\'s Party.',
    significance:
      'Lease\'s prominence in the Populist movement illustrates how agrarian radicalism opened political space for women at a time when women lacked the vote nationally — the Farmers\' Alliance and People\'s Party accepted women as full members and speakers. She embodied the fusion of economic grievance and political mobilization that made Populism a genuine threat to the two-party system. For comparison essays contrasting women\'s roles in different reform movements, Lease is a key figure.',
    context: 'Lease rose to prominence in the early 1890s as the People\'s Party formed; the movement collapsed after the 1896 election when it fused with the Democratic Party.',
    themes: ['Politics and Power', 'Social Structures', 'American and National Identity'],
    connections: ['peoples-party', 'grangers', 'farmers-alliance', 'political-gains-women'],
  },

  {
    id: 'oliver-kelley',
    name: 'Oliver H. Kelley',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'People',
    tags: ['SAQ', 'causation'],
    summary: 'Founder of the Grange (Patrons of Husbandry) in the 1860s, the first major national farmers\' organization that pioneered agrarian political activism.',
    significance:
      'Kelley\'s Grange built the organizational infrastructure — cooperative purchasing, political lobbying, and state-level legislation — that subsequent agrarian movements like the Farmers\' Alliance and People\'s Party built upon. The Grange\'s success in pressuring states to regulate railroad rates (Granger Laws) proved that organized farmers could win legislative victories, establishing the template for later Populist demands. For essays on the origins of Populism, Kelley and the Grange represent the critical first step.',
    context: 'Kelley founded the Grange in 1867; membership peaked at nearly 800,000 by 1875 before declining, but the movement\'s political legacy persisted through the Populist era.',
    themes: ['Politics and Power', 'Work, Exchange, and Technology', 'Social Structures'],
    connections: ['grangers', 'interstate-commerce-act', 'farmers-alliance', 'peoples-party'],
  },

  {
    id: 'jacob-riis',
    name: 'Jacob Riis',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'People',
    tags: ['SAQ', 'causation'],
    summary: 'Danish immigrant journalist and photographer whose exposés of New York tenement life, especially "How the Other Half Lives" (1890), brought urban poverty to middle-class attention.',
    significance:
      'Riis pioneered documentary photography as a tool of social reform, forcing comfortable Americans to confront the crowded, unsanitary conditions of immigrant neighborhoods. His work illustrates the limits of Progressive-era reform: exposing the problem raised awareness but did not produce adequate solutions, as reformers tended to destroy tenements without providing alternatives. For SAQ responses on urbanization and reform, Riis is the model of muckraking journalism and its constraints.',
    context: 'Riis published in the 1880s and 1890s as New York\'s population exploded; his work influenced Theodore Roosevelt and later Progressive Era housing reform.',
    themes: ['Social Structures', 'Migration and Settlement', 'American and Regional Culture'],
    connections: ['tenements', 'urban-growth', 'nativism', 'immigration-restriction-league'],
  },

  {
    id: 'chief-joseph',
    name: 'Chief Joseph',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'People',
    tags: ['SAQ', 'causation'],
    summary: 'Leader of the Nez Perce who led approximately 800 people on a 1,400-mile flight toward Canada in 1877 to escape forced removal to a reservation, surrendering just 40 miles from the border.',
    significance:
      'Chief Joseph\'s flight and his famous surrender speech ("I will fight no more forever") symbolized the exhaustion of Native resistance to federal Indian policy and the human cost of reservation policy. His people\'s suffering — multiple reservation transfers, death from starvation and disease — demonstrated the gap between the government\'s assimilationist promises and the reality of reservation life. For SAQ and LEQ essays on federal Indian policy, Chief Joseph represents both the determination of Native resistance and its ultimate failure.',
    context: 'The Nez Perce flight occurred in 1877, a year after the Battle of Little Bighorn; the episode hardened public opinion in favor of assimilation policy rather than treaty accommodation.',
    themes: ['Politics and Power', 'Migration and Settlement', 'Geography and the Environment'],
    connections: ['concentration-policy', 'dawes-act', 'wounded-knee', 'little-bighorn', 'indian-resistance'],
  },

  {
    id: 'henry-george',
    name: 'Henry George',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'People',
    tags: ['SAQ', 'comparison'],
    summary: 'Economist and author of "Progress and Poverty" (1879) who argued that land speculation and monopoly were the root causes of poverty and proposed a "single tax" on unearned land value.',
    significance:
      'George\'s analysis challenged Social Darwinism by locating poverty in structural economic conditions rather than individual inferiority, making him an important intellectual predecessor of Progressive reform. His single tax idea attracted millions of readers and stimulated debate about wealth redistribution, land reform, and the relationship between monopoly and inequality. For comparison essays contrasting responses to industrialization\'s social costs, George represents the reformist intellectual tradition.',
    context: 'George published in 1879 at the height of Gilded Age inequality; his single tax movement faded but his structural critique of capitalism influenced later Progressivism.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'Politics and Power'],
    connections: ['social-darwinism', 'increasing-inequality', 'lester-frank-ward', 'rapid-corporate-consolidation'],
  },

  {
    id: 'lester-frank-ward',
    name: 'Lester Frank Ward',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'People',
    tags: ['SAQ', 'comparison'],
    summary: 'Sociologist who challenged Social Darwinism, arguing that human intelligence and government planning could and should direct social progress rather than leaving outcomes to "natural" competition.',
    significance:
      'Ward provided the intellectual foundation for activist government by arguing that deliberate social planning — not laissez-faire competition — was the hallmark of a civilized society. His rejection of Social Darwinism offered reformers a scientific counterargument to the dominant pro-inequality ideology, helping legitimize government intervention in the economy. For comparison essays on ideological responses to industrialization, Ward stands opposite Herbert Spencer and the Social Darwinists.',
    context: 'Ward published in the 1880s–1890s; his ideas gained traction during the Progressive Era when the limits of laissez-faire became undeniable.',
    themes: ['Politics and Power', 'Social Structures', 'American and National Identity'],
    connections: ['social-darwinism', 'henry-george', 'increasing-inequality'],
  },

  {
    id: 'frederick-jackson-turner',
    name: 'Frederick Jackson Turner',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'People',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Historian who argued in his 1893 "Frontier Thesis" that the availability of free western land had been the defining democratizing force in American life, and that its closing threatened American identity.',
    significance:
      'Turner\'s Frontier Thesis became one of the most influential — and contested — frameworks in American historiography, shaping how Americans understood westward expansion, democracy, and national character. His lament that the frontier\'s closure ended a formative democratic process helped justify later overseas expansion as a substitute frontier. For LEQ essays on American identity and expansion, Turner\'s thesis is essential for understanding why the 1890s produced both the census\'s "closed frontier" declaration and the Spanish-American War.',
    context: 'Turner presented his thesis at the 1893 World\'s Columbian Exposition as the Census Bureau had just declared the frontier closed; subsequent historians have criticized his erasure of Native, Hispanic, and non-white western inhabitants.',
    themes: ['American and National Identity', 'Geography and the Environment', 'America in the World'],
    connections: ['romantic-image-west', 'myth-cowboy', 'psychological-loss', 'western-settlement'],
    mcqs: [
      {
        question: 'Frederick Jackson Turner\'s Frontier Thesis most directly contributed to which later development?',
        options: [
          'Congressional passage of the Dawes Act to protect Native American land rights',
          'Justification for overseas expansion as a necessary substitute for the closed western frontier',
          'Federal regulation of the railroad industry to protect western farmers',
          'A reduction in immigration to fill newly vacated western lands'
        ],
        answerIndex: 1,
        explanation: 'Turner\'s argument that the frontier had made Americans democratic and vigorous was used to justify imperialism — if the domestic frontier was closed, an overseas frontier (in Cuba, the Philippines) would sustain American character. The Dawes Act predated the Frontier Thesis and had opposite goals (A), railroad regulation was driven by farmer grievances not Turner (C), and the thesis had no direct impact on immigration policy (D).',
      },
    ],
  },

  {
    id: 'frederic-remington',
    name: 'Frederic Remington',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'People',
    tags: ['SAQ', 'comparison'],
    summary: 'Painter and sculptor whose idealized images of cowboys, soldiers, and Native Americans created and popularized the romantic mythology of the American West.',
    significance:
      'Remington\'s art was instrumental in constructing a white, masculine frontier mythology that obscured the West\'s actual diversity — the multiracial working class of Chinese, Mexican, and Black cowboys — and the violent dispossession of Native peoples. His work illustrates how cultural production shaped national memory, making the "Wild West" mythology more powerful than historical reality. For comparison essays on the relationship between culture and historical memory, Remington is a key figure.',
    context: 'Remington worked from the 1880s through the early 1900s, producing art as the actual frontier was closing; his romanticized West became the dominant cultural image for generations.',
    themes: ['American and Regional Culture', 'American and National Identity', 'Social Structures'],
    connections: ['myth-cowboy', 'romantic-image-west', 'turner-frontier-thesis'],
  },

  // ── Events ──────────────────────────────────────────────────────────────────

  {
    id: 'bourbon-rule',
    name: 'Bourbon Rule (Redeemers)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The return of conservative white oligarchs — merchants and railroad-connected elites known as Bourbons or Redeemers — to political power in the South after federal troops withdrew in 1877.',
    significance:
      'Bourbon Rule ended Reconstruction\'s experiment in biracial democracy and restored economic and political power to a narrow white elite, demonstrating that without federal enforcement, the rights guaranteed by the Reconstruction Amendments were meaningless. The Bourbons cut investment in schools and infrastructure while concentrating wealth through railroad and land interests, creating the conditions of poverty and underdevelopment that defined the postbellum South. For DBQ and LEQ essays on Reconstruction\'s failure, Bourbon Rule is the political mechanism that destroyed Black political gains.',
    context: 'Bourbon Rule emerged after Hayes withdrew federal troops in 1877; it persisted until the New Deal disrupted Southern politics in the 1930s.',
    themes: ['Politics and Power', 'Social Structures', 'Work, Exchange, and Technology'],
    connections: ['hayes-compromise', 'jim-crow-laws', 'sharecropping', 'convict-lease', 'readjuster-challenge'],
    mcqs: [
      {
        question: 'The rise of Bourbon Rule in the South after 1877 most directly demonstrated which limitation of Reconstruction?',
        options: [
          'The Reconstruction Amendments were poorly written and contained no enforceable rights',
          'Without continued federal military presence, the legal gains of Reconstruction could not be enforced against white resistance',
          'African Americans had shown little interest in exercising the rights granted by the Reconstruction Amendments',
          'The Supreme Court had declared the Fourteenth Amendment unconstitutional'
        ],
        answerIndex: 1,
        explanation: 'Bourbon Rule proved that constitutional rights were only as strong as federal willingness to enforce them; when troops withdrew, Southern whites used violence, law, and economic coercion to nullify Black rights. The amendments were substantive (A is wrong), Black political participation had been robust (C is wrong), and the Court did not strike the 14th Amendment overall (D is wrong).',
      },
      {
        question: 'Bourbon Rule differed from the antebellum planter class primarily in that',
        options: [
          'Bourbons were completely indifferent to racial hierarchy',
          'Bourbons were more commercially oriented, drawing wealth from railroads and industry rather than purely from plantation agriculture',
          'Bourbons actively promoted Black political participation to build a loyal constituency',
          'Bourbons supported industrialization only for the benefit of Black workers'
        ],
        answerIndex: 1,
        explanation: 'While the antebellum South was dominated by plantation agriculture, Bourbon elites were more tied to railroad and commercial interests — though both used racial hierarchy to maintain power. Racial hierarchy was central to Bourbon Rule (A is wrong), Bourbons suppressed Black political participation (C is wrong), and industrialization served white elites not Black workers (D is wrong).',
      },
    ],
  },

  {
    id: 'readjuster-challenge',
    name: 'Readjuster Movement',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Events',
    tags: ['SAQ', 'causation'],
    summary: 'A Virginia political movement of the late 1870s–1880s that united lower-income white farmers and Black voters against the Bourbon oligarchy, arguing that state debt payments should be redirected to public services.',
    significance:
      'The Readjusters briefly demonstrated that cross-racial economic coalitions could challenge Bourbon dominance, winning control of Virginia\'s legislature and governorship and funding public education for both races. Their defeat through racial fearmongering showed how effectively white elites could use racial prejudice to break economic solidarity — a pattern that would recur in the Populist movement of the 1890s. For LEQ essays on the possibilities and limits of interracial coalition politics, the Readjusters are a critical example.',
    context: 'The Readjusters peaked in the early 1880s; their defeat prefigured the racial suppression that would ultimately sink the Populist movement in the South.',
    themes: ['Politics and Power', 'Social Structures', 'American and National Identity'],
    connections: ['bourbon-rule', 'peoples-party', 'white-unity', 'restricting-franchise'],
  },

  {
    id: 'sand-creek-massacre',
    name: 'Sand Creek Massacre (1864)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'Colorado militia under Colonel Chivington massacred over 250 Cheyenne and Arapaho people — mostly women and children — who had camped near Fort Lyon under the promise of safety.',
    significance:
      'Sand Creek was one of the most consequential atrocities in the history of federal Indian policy: it provoked widespread Native resistance across the Plains, intensifying the very violence it claimed to prevent, and triggered national outrage that produced the Peace Commission of 1867 and the reservation policy. The massacre is a defining example of how white westward expansion operated through extermination as much as displacement. For DBQ essays on federal Indian policy and Native resistance, Sand Creek is essential evidence of state-sanctioned violence.',
    context: 'Sand Creek occurred in November 1864 during the Colorado gold rush conflicts; it led directly to renewed plains warfare and eventually the Fort Laramie Treaty of 1868.',
    themes: ['Politics and Power', 'Geography and the Environment', 'Social Structures'],
    connections: ['concentration-policy', 'indian-resistance', 'little-bighorn', 'decimation-buffalo', 'plains-indians'],
    mcqs: [
      {
        question: 'The Sand Creek Massacre most directly illustrates which feature of federal Indian policy in the post-Civil War West?',
        options: [
          'The federal government consistently honored treaty obligations with Native peoples',
          'Military and civilian actors used extreme violence against Native peoples regardless of official peace agreements',
          'Congress prohibited the use of militia against Native Americans who had agreed to reservation terms',
          'Native American resistance was the primary cause of the breakdown in treaty negotiations'
        ],
        answerIndex: 1,
        explanation: 'Sand Creek occurred precisely when the targeted Cheyenne and Arapaho believed they were under federal protection, demonstrating that treaties were routinely violated and that violence against Natives operated independently of official policy. Treaties were systematically broken (A is wrong), militias were not prohibited (C is wrong), and the attack was unprovoked (D is wrong).',
      },
    ],
  },

  {
    id: 'little-bighorn',
    name: 'Battle of Little Bighorn (1876)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Events',
    tags: ['SAQ', 'causation'],
    summary: 'A coalition of Lakota Sioux, Northern Cheyenne, and Arapaho warriors annihilated Lieutenant Colonel George Custer and 264 soldiers of the 7th Cavalry in Montana Territory.',
    significance:
      'Little Bighorn was the most dramatic Native military victory over the U.S. Army in the post-Civil War era, demonstrating that unified inter-tribal resistance could defeat federal military forces. However, it paradoxically accelerated Native defeat: the public outrage over Custer\'s death brought overwhelming military retaliation, and the coalition that won quickly dispersed as supplies ran low. For SAQ and LEQ essays on Native resistance, Little Bighorn is both the high point and the turning point of Plains Indian military resistance.',
    context: 'Little Bighorn was fought during the Black Hills gold rush that violated the Fort Laramie Treaty; within months the coalition had dispersed and most bands had surrendered or been killed.',
    themes: ['Politics and Power', 'Geography and the Environment', 'America in the World'],
    connections: ['indian-resistance', 'concentration-policy', 'chief-joseph', 'wounded-knee', 'sand-creek-massacre'],
  },

  {
    id: 'wounded-knee',
    name: 'Wounded Knee Massacre (1890)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'U.S. Army soldiers killed approximately 250–300 Lakota Sioux men, women, and children near Wounded Knee Creek in South Dakota, ending the Ghost Dance movement and armed Native resistance on the Plains.',
    significance:
      'Wounded Knee marked the effective end of organized Native military resistance in the continental United States and is considered by many historians the final chapter of the Plains Indian Wars. The massacre was triggered by fear of the Ghost Dance religious movement, illustrating how Native cultural and spiritual practices were perceived as existential threats by the federal government. For DBQ essays on the destruction of Native sovereignty and culture, Wounded Knee is the closing event that frames the entire period.',
    context: 'Wounded Knee followed the Ghost Dance movement of 1889–1890; it came thirteen years after Little Bighorn and occurred the same year the Census declared the frontier closed.',
    themes: ['Politics and Power', 'American and Regional Culture', 'Geography and the Environment'],
    connections: ['ghost-dance', 'concentration-policy', 'dawes-act', 'little-bighorn', 'indian-resistance'],
    mcqs: [
      {
        question: 'The Wounded Knee Massacre of 1890 is most significant in the context of APUSH because it',
        options: [
          'Demonstrated the effectiveness of the Dawes Act in integrating Native peoples into American society',
          'Marked the effective end of armed Native American resistance to U.S. expansion on the Great Plains',
          'Prompted Congress to guarantee Native American land rights through new legislation',
          'Showed that the Ghost Dance movement had successfully unified all Plains tribes'
        ],
        answerIndex: 1,
        explanation: 'Wounded Knee ended the last major phase of Plains Indian armed resistance, cementing U.S. control over the continental West. The Dawes Act accelerated land loss rather than integration (A), Congress passed no protective legislation in response (C), and the Ghost Dance had only partially unified tribes before being suppressed (D).',
      },
    ],
  },

  {
    id: 'homestead-strike',
    name: 'Homestead Strike (1892)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'A failed strike at Carnegie Steel\'s Homestead plant after Henry Clay Frick cut wages and locked out the Amalgamated Steel Union, crushed when Pinkerton detectives and the Pennsylvania National Guard broke the strike.',
    significance:
      'Homestead demonstrated that even well-organized craft unions could be defeated by corporations using private armies and state power, dealing a devastating blow to the labor movement. The union\'s collapse from 24,000 to 7,000 members illustrated the broader vulnerability of organized labor in the face of corporate consolidation and government-backed repression. For DBQ essays on the limits of labor power during the Gilded Age, Homestead is the defining case alongside the Pullman Strike.',
    context: 'Homestead occurred during the same year as the Populist Party\'s emergence; the defeat of labor at Homestead and of farmers in 1896 together illustrate the failure of challenges to Gilded Age corporate power.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'Social Structures'],
    connections: ['henry-clay-frick', 'andrew-carnegie', 'union-defeated', 'corporate-strength', 'pullman-strike'],
    mcqs: [
      {
        question: 'The outcome of the Homestead Strike most directly illustrated which feature of Gilded Age labor relations?',
        options: [
          'Skilled craft unions could successfully resist corporate wage cuts through collective action',
          'Corporations with access to private security forces and state National Guards could defeat even well-organized unions',
          'The federal government consistently sided with workers in disputes involving interstate industries',
          'Public opinion strongly supported union workers against corporations during this period'
        ],
        answerIndex: 1,
        explanation: 'Carnegie Steel\'s use of Pinkertons and the National Guard overwhelmed the union, showing that corporations could deploy legal and military resources far beyond labor\'s capacity. The union was decisively defeated (A is wrong), the federal government supported corporations not workers (C is wrong), and public opinion was divided and turned against unions after Pinkerton violence (D is wrong).',
      },
    ],
  },

  {
    id: 'pullman-strike',
    name: 'Pullman Strike (1894)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'A national railroad strike organized by Eugene Debs\'s American Railway Union in support of Pullman workers, broken by a federal injunction and military intervention ordered by President Cleveland.',
    significance:
      'The Pullman Strike established the federal injunction as the primary legal weapon against strikes, allowing courts to bypass labor rights by framing strikes as interference with interstate commerce. The General Managers\' Association\'s coordinated response showed that management had organized nationally to defeat labor just as labor was trying to organize nationally. Cleveland\'s use of federal troops over Illinois Governor Altgeld\'s objection set a precedent for federal strikebreaking that lasted into the 1930s.',
    context: 'The strike occurred during the severe Depression of 1893; Debs\'s jailing radicalized him into socialism, making him the leading American socialist of the early 20th century.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'Social Structures'],
    connections: ['eugene-debs', 'corporate-strength', 'homestead-strike', 'afl-agenda', 'knights-of-labor'],
  },

  {
    id: 'haymarket-square',
    name: 'Haymarket Square Riot (1886)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'A bomb thrown at Chicago police during a labor rally killed several officers, leading to mass arrests of labor activists and a major backlash against the labor movement.',
    significance:
      'Haymarket associated organized labor with anarchism and violence in the public mind, severely damaging the Knights of Labor and shifting public opinion against strikes and unions. The executions of convicted labor activists (with flimsy evidence) demonstrated that the legal system could be used to suppress labor organizing under the guise of public safety. For DBQ essays on the obstacles facing the labor movement, Haymarket is a pivotal turning point that explains the weakening of the Knights and the AFL\'s pivot to bread-and-butter unionism.',
    context: 'Haymarket occurred during the movement for an eight-hour workday in 1886; its fallout accelerated the collapse of the Knights of Labor and the rise of the more cautious AFL.',
    themes: ['Politics and Power', 'Work, Exchange, and Technology', 'Social Structures'],
    connections: ['knights-of-labor', 'afl-agenda', 'corporate-strength', 'molly-maguires'],
    mcqs: [
      {
        question: 'The Haymarket Square Riot most directly affected the labor movement by',
        options: [
          'Inspiring workers to form more militant unions across the country',
          'Associating organized labor with anarchism and violence, turning public opinion against unions',
          'Prompting Congress to pass legislation protecting workers\' right to strike',
          'Causing the American Federation of Labor to adopt revolutionary socialist principles'
        ],
        answerIndex: 1,
        explanation: 'The bombing and subsequent executions of labor leaders on dubious evidence linked unions with terrorism in the public imagination, reducing support for labor organizing. Unions were weakened rather than inspired (A), Congress passed no protective legislation (C), and the AFL deliberately avoided radicalism in response to Haymarket (D).',
      },
    ],
  },

  {
    id: 'great-railroad-strike',
    name: 'Great Railroad Strike (1877)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Events',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'The first major national labor uprising in U.S. history, triggered by a 10% wage cut on railroads, which spread from Baltimore to St. Louis and was suppressed by state and federal troops with significant loss of life.',
    significance:
      'The Great Railroad Strike demonstrated both the potential and the limits of spontaneous national labor action: workers could disrupt commerce across multiple states, but without organization or political allies, the federal government could deploy military force to restore order and the status quo. Its suppression with no substantive worker gains showed that industrial capitalism would not yield to unorganized protest, setting the stage for the creation of formal national unions. For LEQ essays on the development of the labor movement, 1877 is the starting point.',
    context: 'The strike occurred during the Depression of 1873; it preceded the founding of the AFL (1886) and the Knights of Labor\'s peak, revealing the need for organized labor structures.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'Social Structures'],
    connections: ['national-labor-union', 'knights-of-labor', 'corporate-strength', 'railroad-expansion'],
  },

  {
    id: 'taos-rebellion',
    name: 'Taos Pueblo Rebellion (1847)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Events',
    tags: ['SAQ', 'causation'],
    summary: 'A revolt by Taos Pueblo people and Hispanic New Mexicans against American rule after General Kearny appointed white American governors while ignoring the majority Mexican population of the territory.',
    significance:
      'The Taos Rebellion illustrates the immediate resistance to U.S. conquest following the Mexican-American War, showing that incorporation of Mexican and Native peoples into the United States was contested and violent rather than peaceful. Kearny\'s exclusion of 50,000 Mexicans in favor of 1,000 Anglo Americans encapsulates the racial logic of Manifest Destiny expansion. For SAQ and comparison essays on the diverse populations of the West, the Taos Rebellion demonstrates that western "settlement" involved the subjugation of already-settled peoples.',
    context: 'The rebellion occurred in January 1847, months after the United States occupied New Mexico during the Mexican-American War; it was suppressed by U.S. forces with executions of rebel leaders.',
    themes: ['Politics and Power', 'Migration and Settlement', 'Social Structures'],
    connections: ['hispanic-decline', 'western-settlement', 'plains-indians', 'concentration-policy'],
  },

  {
    id: 'comstock-lode',
    name: 'Comstock Lode (1859)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Events',
    tags: ['SAQ', 'causation'],
    summary: 'The discovery of a massive silver deposit in Nevada\'s Washoe district that sparked a major rush from California and led to rapid white settlement of the Nevada region.',
    significance:
      'The Comstock Lode illustrates the "boom-bust" cycle characteristic of western resource extraction: explosive population growth, environmental devastation, and eventual collapse when deposits were exhausted. It also demonstrates how mineral wealth accelerated displacement of Native peoples and how corporate capital quickly replaced individual miners in large-scale extraction. For essays on western economic development, the Comstock Lode exemplifies the mining economy\'s social and environmental costs.',
    context: 'Discovered in 1859 during the Colorado gold rush era, the Comstock redirected California migration northward; its decline by the 1880s typified the mining bust cycle.',
    themes: ['Work, Exchange, and Technology', 'Geography and the Environment', 'Migration and Settlement'],
    connections: ['mining-boom', 'racially-stratified-working-class', 'gender-imbalance-west'],
  },

  {
    id: 'urban-growth',
    name: 'Rapid Urban Growth',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The massive expansion of American cities from the Civil War to 1900, driven by industrialization, immigration, and internal migration, transforming the U.S. from a predominantly rural to an increasingly urban society.',
    significance:
      'Urbanization was the defining demographic transformation of the Gilded Age, concentrating industrial workers, immigrants, and capital in cities while producing new social problems — tenements, pollution, crime, political machines — that demanded new forms of governance and reform. New York approaching 3 million people by 1900 represented a fundamentally different scale of social organization than anything in American history. For DBQ essays on industrialization\'s social consequences, urban growth is the connective tissue linking immigration, labor, reform, and politics.',
    context: 'Cities grew from roughly 20% of the population in 1860 to over 40% by 1900; by the 1920s a majority of Americans lived in urban areas, completing a transformation that began in Period 6.',
    themes: ['Migration and Settlement', 'Work, Exchange, and Technology', 'Social Structures'],
    connections: ['tenements', 'immigration-new-sources', 'boss-rule', 'mass-transit', 'jacob-riis'],
    mcqs: [
      {
        question: 'The rapid urban growth of the Gilded Age most directly produced which set of new social challenges?',
        options: [
          'Declining religious attendance, falling crime rates, and reduced immigration',
          'Overcrowded tenements, inadequate sanitation, political machine corruption, and ethnic tensions',
          'Economic depression caused by the concentration of workers in cities',
          'Rapid decline in manufacturing output as rural labor supply dried up'
        ],
        answerIndex: 1,
        explanation: 'Rapid urbanization without adequate planning produced tenement overcrowding, disease, pollution, crime, and the political machine system as immigrants sought survival strategies. Religious attendance actually increased (A is wrong), urbanization sustained manufacturing (C and D are wrong directions).',
      },
    ],
  },

  // ── Legislation & Documents ──────────────────────────────────────────────────

  {
    id: 'plessy-v-ferguson',
    name: 'Plessy v. Ferguson (1896)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Court Cases',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'Supreme Court ruling that upheld racial segregation under the "separate but equal" doctrine, providing constitutional cover for Jim Crow laws that would define American apartheid for sixty years.',
    significance:
      'Plessy v. Ferguson is arguably the most consequential Supreme Court decision of the Gilded Age: by ruling that segregation did not violate the Fourteenth Amendment\'s equal protection clause, the Court gave judicial sanction to the entire Jim Crow system, enabling states to maintain separate — and systematically inferior — facilities, schools, and public spaces for Black Americans. The decision was not overturned until Brown v. Board of Education in 1954. For DBQ essays on Reconstruction\'s failure or the legal foundations of racial inequality, Plessy is essential.',
    context: 'Plessy was decided in 1896, nearly thirty years after the Fourteenth Amendment\'s ratification; it was the result of a deliberate legal test case organized by New Orleans civil rights activists.',
    themes: ['Politics and Power', 'Social Structures', 'American and National Identity'],
    connections: ['jim-crow-laws', 'restricting-franchise', 'booker-t-washington', 'bourbon-rule', 'lynchings'],
    mcqs: [
      {
        question: 'The Supreme Court\'s "separate but equal" ruling in Plessy v. Ferguson most directly',
        options: [
          'Enforced the Fourteenth Amendment\'s guarantee of equal protection for all citizens',
          'Provided constitutional legitimacy to Jim Crow segregation laws for the next sixty years',
          'Sparked immediate civil rights activism that successfully challenged segregation within a decade',
          'Applied only to transportation and did not extend to schools or other public facilities'
        ],
        answerIndex: 1,
        explanation: 'Plessy\'s "separate but equal" doctrine gave federal constitutional cover to state-level segregation across all public facilities, not just transportation, which remained in force until Brown v. Board in 1954. It violated, not enforced, equal protection in practice (A), civil rights activism was suppressed not energized (C), and the ruling was applied broadly beyond transportation (D).',
      },
      {
        question: 'Which of the following best explains why Homer Plessy\'s lawyers argued that segregated rail cars violated the Fourteenth Amendment?',
        options: [
          'The Fourteenth Amendment explicitly banned racial segregation in public transportation',
          'Separate facilities inherently denied equal protection and equal citizenship status regardless of physical quality',
          'Louisiana\'s law was a state regulation that conflicted with federal commerce authority',
          'Plessy was legally classified as white under Louisiana law and should not have been removed'
        ],
        answerIndex: 1,
        explanation: 'Plessy\'s lawyers argued (and Justice Harlan agreed in dissent) that the separation itself — the legal badge of inferiority — denied equal citizenship, regardless of facility quality. The Fourteenth Amendment does not explicitly name transportation (A), though a commerce argument existed it was not the primary claim (C), and Plessy\'s racial classification was part of the case but not the constitutional core of the argument (D).',
      },
    ],
  },

  {
    id: 'pendleton-act',
    name: 'Pendleton Civil Service Act (1883)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Legislation & Documents',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Federal law requiring competitive examinations for certain federal jobs, replacing the spoils system with merit-based hiring and establishing the Civil Service Commission.',
    significance:
      'The Pendleton Act represented a fundamental shift in how the federal government recruited workers, eroding the patronage system that had produced the political machine era. Ironically passed by Chester Arthur — himself a product of the corrupt Conkling machine — it shows how political assassination (of Garfield) could trigger institutional reform. For LEQ essays on political reform in the Gilded Age, the Pendleton Act is the starting point of professional federal administration.',
    context: 'Passed in response to Garfield\'s assassination by a disappointed office-seeker in 1881; only 10% of federal jobs were initially covered, but coverage expanded over subsequent decades.',
    themes: ['Politics and Power', 'American and National Identity'],
    connections: ['garfield-assassination', 'stalwarts-half-breeds', 'boss-rule', 'graft-corruption'],
    mcqs: [
      {
        question: 'The Pendleton Civil Service Act of 1883 most directly addressed which political problem of the Gilded Age?',
        options: [
          'The excessive power of monopolies over the American economy',
          'The spoils system\'s corruption of federal hiring and the inefficiency of partisan appointment',
          'The disenfranchisement of African American voters in the South',
          'The growing power of labor unions to disrupt interstate commerce'
        ],
        answerIndex: 1,
        explanation: 'The Pendleton Act responded to the assassination of Garfield by a spoils-system office-seeker by establishing competitive exams for federal jobs, directly targeting the patronage corruption the spoils system created. Monopolies were addressed by the Sherman Act (A), disenfranchisement was not addressed by this legislation (C), and labor unions were not the subject of civil service reform (D).',
      },
    ],
  },

  {
    id: 'sherman-antitrust-act',
    name: 'Sherman Antitrust Act (1890)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Legislation & Documents',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'The first federal law targeting monopolistic business combinations, declaring illegal "every contract, combination, or conspiracy in restraint of trade," but largely ineffective in breaking up trusts during the 1890s.',
    significance:
      'The Sherman Act established the principle of federal antitrust authority but its vague language and weak enforcement meant it was more frequently used against labor unions (framed as "restraints of trade") than against actual monopolies. Its initial failure illustrated both the pro-corporate orientation of Gilded Age courts and the difficulty of regulating corporations that had more resources than the government. For LEQ essays on federal economic regulation, the Sherman Act is the starting point — effective only after Theodore Roosevelt\'s aggressive enforcement after 1901.',
    context: 'Passed in 1890 as Standard Oil reached peak dominance; the Supreme Court largely neutered it in the 1895 E.C. Knight case before Theodore Roosevelt revived antitrust enforcement.',
    themes: ['Politics and Power', 'Work, Exchange, and Technology'],
    connections: ['john-rockefeller', 'trust-agreement', 'rapid-corporate-consolidation', 'interstate-commerce-act'],
    mcqs: [
      {
        question: 'The Sherman Antitrust Act\'s failure to break up monopolies during the 1890s most directly illustrates which feature of Gilded Age governance?',
        options: [
          'Congress lacked constitutional authority to regulate interstate commerce',
          'Federal courts interpreted the Act narrowly and favored corporate interests over antitrust enforcement',
          'Americans generally opposed government interference in the economy during this period',
          'The Act was so effective that major monopolies voluntarily dissolved before the courts could act'
        ],
        answerIndex: 1,
        explanation: 'Courts, especially in the 1895 E.C. Knight case, interpreted the Sherman Act so narrowly that manufacturing monopolies were largely immune from prosecution, while labor unions faced antitrust suits. Congress had clear commerce authority (A is wrong), public opinion actually demanded trust-busting (C is wrong), and no major monopoly voluntarily dissolved (D is wrong).',
      },
    ],
  },

  {
    id: 'interstate-commerce-act',
    name: 'Interstate Commerce Act (1887)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Legislation & Documents',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'The first federal law regulating the railroad industry, declaring that rail rates must be "reasonable and just" and creating the Interstate Commerce Commission (ICC) to oversee compliance.',
    significance:
      'The Interstate Commerce Act represented the first significant federal assertion of regulatory authority over private industry, establishing the regulatory commission as an institutional model. However, the ICC lacked enforcement power and courts stripped it of rate-setting authority in the 1890s, making it largely ineffective until the Hepburn Act of 1906. For LEQ essays on the development of federal economic regulation, the ICC is the baseline from which Progressive Era reform departed.',
    context: 'Passed in response to the Supreme Court\'s Wabash ruling that states could not regulate interstate railroad rates; the Grangers and Farmers\' Alliance lobbied intensively for federal action.',
    themes: ['Politics and Power', 'Work, Exchange, and Technology', 'Social Structures'],
    connections: ['grangers', 'railroad-expansion', 'sherman-antitrust-act', 'mckinley-tariff'],
  },

  {
    id: 'chinese-exclusion-act',
    name: 'Chinese Exclusion Act (1882)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Legislation & Documents',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'Federal law barring Chinese laborers from entering the United States, the first and only U.S. law to restrict immigration based on race and nationality of a specific group.',
    significance:
      'The Chinese Exclusion Act established the legal precedent that Congress could restrict immigration on racial and ethnic grounds, a precedent that would be extended to other groups in the Immigration Act of 1924. It demonstrated how economic anxiety and racial prejudice could be translated into federal policy that violated the equal protection principles of the Reconstruction Amendments. For DBQ essays on immigration, nativism, and racial exclusion, the Chinese Exclusion Act is the foundational case.',
    context: 'Passed in 1882 after anti-Chinese agitation grew throughout the 1870s; renewed and made permanent in 1902, it was not repealed until 1943 when China became a WWII ally.',
    themes: ['Politics and Power', 'Migration and Settlement', 'Social Structures'],
    connections: ['anti-coolie-clubs', 'transcontinental-railroad', 'nativism', 'immigration-restriction-league'],
    mcqs: [
      {
        question: 'The Chinese Exclusion Act of 1882 is most significant in APUSH because it',
        options: [
          'Resolved the labor tensions between Chinese and white workers in California',
          'Established the precedent that the federal government could restrict immigration based on race and national origin',
          'Applied equally to all Asian immigrants, including Japanese and Filipino workers',
          'Was immediately declared unconstitutional by the Supreme Court'
        ],
        answerIndex: 1,
        explanation: 'The Act was the first federal law targeting a specific racial group for immigration exclusion, creating the legal template for later restrictions like the 1917 "Asiatic Barred Zone" and 1924 National Origins Act. It did not resolve labor tensions (A), initially applied only to Chinese (C), and the Supreme Court upheld it (D is wrong).',
      },
      {
        question: 'Which of the following best explains why Chinese immigrants faced more severe legal discrimination than European immigrants during this period?',
        options: [
          'Chinese immigrants had a higher crime rate than European immigrants',
          'Racial ideology categorized Chinese as permanently "foreign" and unassimilable while European immigrants were seen as eventually assimilable',
          'Chinese immigrants refused to assimilate into American cultural practices',
          'Chinese immigrants competed with skilled workers while European immigrants only took unskilled jobs'
        ],
        answerIndex: 1,
        explanation: 'The racial hierarchy of the period classified Chinese (and other Asians) as permanently ineligible for citizenship and cultural membership, while European immigrants — even despised ones like Irish and Italians — were ultimately welcomed as assimilable whites. Crime statistics do not support (A), many Chinese immigrants actively sought assimilation (C is wrong), and Chinese workers were often in the same unskilled categories as European immigrants (D is wrong).',
      },
    ],
  },

  {
    id: 'homestead-act',
    name: 'Homestead Act (1862)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Legislation & Documents',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Federal law granting 160 acres of public land to settlers who lived on and improved it for five years, intended to democratize western land ownership but largely failing that goal.',
    significance:
      'The Homestead Act embodied the Jeffersonian ideal of yeoman farmer democracy but in practice failed to deliver it: 160 acres was often insufficient for viable farming in the arid West, settlers could not afford equipment, and wealthy speculators and corporations exploited loopholes to acquire millions of acres. It illustrates the gap between democratic rhetoric and the realities of capitalist land distribution. For LEQ essays on continuity and change in American land policy, the Homestead Act is a critical reference point.',
    context: 'Passed in 1862 during the Civil War; subsequent amendments and additional land grants extended its reach but also its exploitation, ultimately benefiting corporations more than homesteaders.',
    themes: ['Politics and Power', 'Work, Exchange, and Technology', 'Geography and the Environment'],
    connections: ['government-assistance-land', 'limited-social-mobility', 'western-settlement', 'railroad-expansion'],
  },

  {
    id: 'dawes-act',
    name: 'Dawes Severalty Act (1887)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Legislation & Documents',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'Federal law that divided tribal lands into individual family allotments and sent Native children to boarding schools, intended to force assimilation into white American culture and eliminate tribal structures.',
    significance:
      'The Dawes Act was one of the most devastating pieces of legislation in Native American history: by breaking up communal landholding and assigning individual allotments, it transferred approximately 90 million acres from Native hands to white ownership over the next four decades. Boarding schools forcibly separated children from families and cultures, imposing assimilation through the destruction of language, religion, and identity. For DBQ essays on federal Indian policy, the Dawes Act is the defining legislation demonstrating that "civilization" policy was another form of dispossession.',
    context: 'Passed in 1887 following the failure of reservation policy to stop conflict; by 1934 when the Indian Reorganization Act reversed it, Native land holdings had fallen from 138 million to 48 million acres.',
    themes: ['Politics and Power', 'Social Structures', 'American and Regional Culture'],
    connections: ['concentration-policy', 'wounded-knee', 'chief-joseph', 'ghost-dance'],
    mcqs: [
      {
        question: 'The Dawes Severalty Act of 1887 most directly aimed to achieve which goal?',
        options: [
          'Preserve Native American tribal cultures and communal land systems',
          'Destroy tribal structures and assimilate Native peoples into white American society through individual land ownership and education',
          'Provide economic compensation to tribes for land taken during westward expansion',
          'Establish military reservations to protect Native peoples from white settlers'
        ],
        answerIndex: 1,
        explanation: 'The Dawes Act deliberately attacked tribal structures — collective land ownership and cultural practices — as the means of forcing Native assimilation, resulting in massive land loss and cultural destruction. It explicitly dismantled rather than preserved tribal culture (A), provided no compensation (C), and created allotments for individual ownership not military protection (D).',
      },
      {
        question: 'A historian arguing that the Dawes Act was more harmful to Native Americans than open warfare would most likely emphasize',
        options: [
          'The military casualties caused by federal troops enforcing allotment',
          'The loss of 90 million acres of tribal land through allotment and the destruction of cultural identity through boarding schools',
          'The inadequate federal funding provided to Native families under the allotment system',
          'The resistance organized by tribal leaders against the Act\'s implementation'
        ],
        answerIndex: 1,
        explanation: 'The Dawes Act\'s lasting harm was measured in land lost — reducing Native land holdings by two-thirds — and cultural destruction through forced assimilation, a longer-term devastation than battlefield losses. Military casualties from enforcement were limited (A), while funding inadequacy was a symptom not the core harm (C), and resistance ultimately failed (D).',
      },
    ],
  },

  {
    id: 'mckinley-tariff',
    name: 'McKinley Tariff (1890)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Legislation & Documents',
    tags: ['SAQ', 'causation'],
    summary: 'Tariff legislation raising import duties to approximately 50% on foreign goods, protecting American manufacturing from foreign competition at the cost of higher consumer prices.',
    significance:
      'The McKinley Tariff was the centerpiece of Republican economic policy in the Gilded Age, reflecting the alliance between the party and industrial manufacturers who benefited from protection. It raised consumer prices — especially for farmers who bought manufactured goods but sold crops at world prices — fueling agrarian resentment that fed the Populist movement. For essays on the political economy of the Gilded Age, the tariff debate encapsulates the conflict between industrial and agricultural interests.',
    context: 'The McKinley Tariff was passed under President Harrison; its unpopularity among farmers contributed to Democratic gains in 1890 and Cleveland\'s election in 1892.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'America in the World'],
    connections: ['hard-times-farmers', 'peoples-party', 'interstate-commerce-act', 'sherman-antitrust-act'],
  },

  {
    id: 'morrill-land-grant-act',
    name: 'Morrill Land Grant Act (1862)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Legislation & Documents',
    tags: ['SAQ', 'causation'],
    summary: 'Federal law granting states land to establish agricultural and mechanical colleges, laying the foundation for the modern public university system in the United States.',
    significance:
      'The Morrill Act democratized higher education by funding institutions accessible to working- and middle-class Americans rather than exclusively elite institutions, directly producing universities that trained the engineers, scientists, and agricultural experts who drove American industrialization. It reflects the Civil War–era Republican commitment to active government investment in human capital as a driver of economic development. For essays on the relationship between government policy and economic growth, the Morrill Act is a key example of federal investment in education.',
    context: 'Passed in 1862 alongside the Homestead Act and Pacific Railroad Act; the land-grant college system expanded dramatically after the Civil War, producing institutions like Cornell, MIT, and most major state universities.',
    themes: ['Work, Exchange, and Technology', 'American and National Identity', 'Politics and Power'],
    connections: ['transformation-higher-education', 'spread-public-education', 'railroad-expansion'],
  },

  // ── Movements & Ideologies ───────────────────────────────────────────────────

  {
    id: 'social-darwinism',
    name: 'Social Darwinism',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Movements & Ideologies',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'comparison'],
    summary: 'The application of Darwin\'s natural selection to human society, arguing that wealth and success reflected natural superiority and that government intervention to help the poor interfered with beneficial "natural" competition.',
    significance:
      'Social Darwinism was the dominant ideology justifying the Gilded Age\'s extreme inequality: by framing poverty as natural and inevitable, it provided intellectual cover for laissez-faire economics and opposition to labor regulation, progressive taxation, and social welfare. Herbert Spencer\'s formulation ("survival of the fittest") gave industrialists like Carnegie and Rockefeller a respectable scientific vocabulary for their resistance to reform. For DBQ essays on the causes of Gilded Age inequality, Social Darwinism is the ideological linchpin.',
    context: 'Social Darwinism peaked in influence from the 1870s through the 1890s; it was challenged by Lester Frank Ward and others before being largely discredited during the Progressive Era.',
    themes: ['American and National Identity', 'Social Structures', 'Politics and Power'],
    connections: ['lester-frank-ward', 'henry-george', 'justifying-status-quo', 'rapid-corporate-consolidation', 'increasing-inequality'],
    mcqs: [
      {
        question: 'Social Darwinism most directly served which political purpose in Gilded Age America?',
        options: [
          'It provided scientific justification for government regulation of monopolies',
          'It justified laissez-faire economics and opposition to social reform by framing economic inequality as natural and inevitable',
          'It supported labor unions by arguing that workers were naturally superior to idle capitalists',
          'It provided the rationale for progressive taxation on inherited wealth'
        ],
        answerIndex: 1,
        explanation: 'Social Darwinism\'s core claim — that the wealthy were naturally fit and the poor naturally inferior — was used to oppose any government intervention in the economy. It explicitly opposed regulation (A), undermined rather than supported labor (C), and provided arguments against redistribution (D).',
      },
    ],
  },

  {
    id: 'gospel-of-wealth',
    name: 'Gospel of Wealth / Myth of the Self-Made Man',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Movements & Ideologies',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'The Gilded Age ideology that great wealth was available to any hardworking individual and that the rich had a duty to use their fortunes for the public good, associated with Carnegie\'s writings and Horatio Alger\'s novels.',
    significance:
      'The Gospel of Wealth performed two ideological functions: it justified wealth concentration by arguing that capable stewards of capital would benefit society through philanthropy, and the "rags to riches" myth obscured the structural barriers — class, race, gender — that made social mobility nearly impossible for most Americans. Together with Social Darwinism, these ideologies constituted the Gilded Age\'s defense of inequality. For DBQ essays, they are essential counterpoint to the actual conditions documented by labor organizers and muckrakers.',
    context: 'Carnegie published "The Gospel of Wealth" in 1889; Horatio Alger\'s popular novels reinforced the mythology throughout the 1870s–1890s.',
    themes: ['American and National Identity', 'Social Structures', 'Work, Exchange, and Technology'],
    connections: ['social-darwinism', 'increasing-inequality', 'andrew-carnegie', 'russell-conwell', 'horatio-alger'],
  },

  {
    id: 'lost-cause-mythology',
    name: 'Lost Cause Mythology',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Movements & Ideologies',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'A post-Civil War Southern cultural movement that reinterpreted the Confederacy as a noble cause defending states\' rights and honor rather than slavery, romanticizing the antebellum South.',
    significance:
      'Lost Cause mythology was a sophisticated ideological project that shaped public memory of the Civil War for generations, enabling Southern whites to deny slavery\'s centrality to the conflict and to resist Reconstruction as an unjust imposition on a noble society. By romanticizing the antebellum period, it provided cultural legitimacy to the restoration of white supremacy after 1877 and produced the Confederate monuments, textbook revisions, and cultural narratives that continue to shape American politics. For DBQ and LEQ essays on Reconstruction\'s failure and the persistence of racial inequality, Lost Cause ideology is a root cause.',
    context: 'Lost Cause narratives crystallized in the 1870s–1880s after Reconstruction; "The Birth of a Nation" (1915) carried the mythology into the 20th century and sparked a KKK revival.',
    themes: ['American and Regional Culture', 'American and National Identity', 'Social Structures'],
    connections: ['bourbon-rule', 'jim-crow-laws', 'white-unity', 'ideological-limits'],
    mcqs: [
      {
        question: 'The Lost Cause mythology most directly served which political purpose in the post-Reconstruction South?',
        options: [
          'It helped Southern states secure federal funding for rebuilding infrastructure',
          'It provided a cultural framework that denied slavery\'s role in the Civil War, legitimizing resistance to Reconstruction and racial equality',
          'It united white and Black Southerners around shared regional pride',
          'It encouraged the industrialization of the South by celebrating its entrepreneurial heritage'
        ],
        answerIndex: 1,
        explanation: 'Lost Cause ideology reframed the Civil War as a constitutional rather than a slavery dispute, giving white Southerners a morally comfortable narrative that justified opposing Reconstruction as tyranny rather than accepting it as justice. It did not produce federal funding (A), it explicitly excluded Black Southerners (C), and it celebrated the agrarian, not industrial, antebellum South (D).',
      },
    ],
  },

  {
    id: 'ghost-dance',
    name: 'Ghost Dance Movement',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Movements & Ideologies',
    tags: ['SAQ', 'causation'],
    summary: 'A spiritual movement among Plains tribes prophesying a peaceful return of the buffalo, the departure of white settlers, and the resurrection of dead warriors through ceremonial dancing.',
    significance:
      'The Ghost Dance terrified federal authorities who interpreted it as preparation for armed resistance, triggering the military buildup that ended in the Wounded Knee Massacre. It illustrates how Native spiritual and cultural practices were perceived as existential threats by a government committed to assimilation, and how the attempt to maintain Indigenous identity was itself criminalized. For SAQ and DBQ essays on Native American resistance to assimilation, the Ghost Dance shows that spiritual renewal was as politically threatening as armed rebellion.',
    context: 'The movement spread rapidly across the Plains in 1889–1890 as conditions on reservations worsened; its suppression at Wounded Knee marked the effective end of organized Native resistance.',
    themes: ['American and Regional Culture', 'Social Structures', 'Politics and Power'],
    connections: ['wounded-knee', 'dawes-act', 'concentration-policy', 'plains-indians'],
  },

  {
    id: 'nativism',
    name: 'Nativism and the Immigration Restriction League',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Movements & Ideologies',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The belief that native-born Americans deserved political and economic preference over immigrants, manifesting in anti-immigrant organizations, the American Protective Association, and the Immigration Restriction League.',
    significance:
      'Nativism in the Gilded Age reveals the contradiction between America\'s self-image as a nation of immigrants and the racial and ethnic anxieties produced by mass immigration. The Immigration Restriction League\'s literacy test proposal — later vetoed by Cleveland — foreshadowed the restrictive immigration legislation of the 1920s. For DBQ essays connecting immigration, race, and American identity, Gilded Age nativism is the critical precursor to the 1924 National Origins Act.',
    context: 'Nativism intensified as immigration shifted from Northern and Western Europe to Southern and Eastern Europe in the 1880s–1890s; the movement succeeded in restricting Chinese immigration and nearly restricted European immigration during this period.',
    themes: ['American and National Identity', 'Migration and Settlement', 'Social Structures'],
    connections: ['chinese-exclusion-act', 'immigration-new-sources', 'heightened-ethnic-tensions', 'immigration-restriction-league'],
    mcqs: [
      {
        question: 'Gilded Age nativism most directly contributed to which later development in U.S. immigration policy?',
        options: [
          'The expansion of immigrant rights and the elimination of racial barriers to citizenship',
          'The 1924 National Origins Act imposing racially discriminatory immigration quotas',
          'Federal funding for immigrant education and Americanization programs',
          'The repeal of the Chinese Exclusion Act during World War I'
        ],
        answerIndex: 1,
        explanation: 'Nativist arguments that immigrants were racially and culturally inferior — refined in the Gilded Age and Progressive Era — produced the 1924 National Origins Act, which effectively restricted Southern and Eastern European immigration and barred most Asian immigration. Nativism sought restriction, not expansion of rights (A), Americanization was a separate movement (C), and the Exclusion Act was not repealed until 1943 (D).',
      },
    ],
  },

  {
    id: 'peoples-party',
    name: 'People\'s Party (Populists)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Movements & Ideologies',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'The third-party political movement founded in 1892 by agrarian reformers demanding government ownership of railroads, a graduated income tax, direct election of senators, and currency inflation to relieve debtor farmers.',
    significance:
      'The People\'s Party was the most successful third-party challenge to the two-party system in the Gilded Age, winning over 1 million popular votes and 22 electoral votes in 1892. Their platform foreshadowed nearly every major Progressive and New Deal reform — railroad regulation, graduated income tax, direct election of senators, currency reform — making Populism the seedbed of 20th-century reform liberalism. For DBQ and LEQ essays on political reform and the transition from the Gilded Age to the Progressive Era, the Populists are the essential connective tissue.',
    context: 'Founded at the Omaha Convention in 1892; the movement collapsed after fusing with the Democratic Party in 1896 and supporting the losing Bryan candidacy, discrediting fusion as a strategy.',
    themes: ['Politics and Power', 'Work, Exchange, and Technology', 'Social Structures'],
    connections: ['grangers', 'farmers-alliance', 'mary-lease', 'hard-times-farmers', 'mckinley-tariff'],
    mcqs: [
      {
        question: 'The People\'s Party\'s 1892 Omaha Platform is most significant to APUSH because it',
        options: [
          'Represented the first successful third-party takeover of the federal government',
          'Articulated demands — railroad regulation, progressive income tax, direct Senate elections — that became law during the Progressive Era',
          'Achieved all of its major reforms during Grover Cleveland\'s administration',
          'Limited its appeal exclusively to Southern farmers, failing to build a national coalition'
        ],
        answerIndex: 1,
        explanation: 'The Omaha Platform\'s demands became the legislative agenda of the Progressive Era (16th Amendment, 17th Amendment, ICC reform), making the Populists the intellectual authors of early 20th-century reform. The Populists never won the presidency (A), Cleveland opposed most of their platform (C), and the party won votes in Western and some Southern states (D).',
      },
      {
        question: 'The collapse of the People\'s Party after the 1896 election most directly demonstrated which feature of the American political system?',
        options: [
          'Third parties can successfully replace major parties when they nominate popular candidates',
          'The two-party system and fusion with a major party typically destroyed third-party independence and momentum',
          'Agricultural reform movements cannot build lasting coalitions with urban workers',
          'The electoral college system was reformed to prevent third parties from winning any electoral votes'
        ],
        answerIndex: 1,
        explanation: 'The Populists\' decision to fuse with Democrats and support Bryan absorbed their energy into the existing party system; Bryan\'s defeat left the movement without an independent organizational base. Third parties have occasionally replaced major parties (A is too strong a negative), agrarian-labor coalitions were fragile but not impossible (C), and the electoral college was not reformed (D).',
      },
    ],
  },

  {
    id: 'jim-crow-laws',
    name: 'Jim Crow Laws',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Movements & Ideologies',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'State and local laws mandating racial segregation in public facilities, transportation, schools, and virtually all aspects of public life across the South from the 1870s through the 1960s.',
    significance:
      'Jim Crow laws, given constitutional sanction by Plessy v. Ferguson, created a comprehensive legal system of racial apartheid that lasted nearly a century, shaping every aspect of Black life in the South and producing the Great Migration of the early 20th century. The system illustrates how law could be used to perpetuate the social and economic subordination of an entire population without resorting to slavery. For any DBQ or LEQ covering race in periods 6 through 8, Jim Crow is the foundational structural context.',
    context: 'Jim Crow emerged from the 1870s as Reconstruction collapsed; it was dismantled only by the Civil Rights Acts of 1964 and 1965 following decades of sustained movement organizing.',
    themes: ['Social Structures', 'Politics and Power', 'American and National Identity'],
    connections: ['plessy-v-ferguson', 'restricting-franchise', 'lynchings', 'booker-t-washington', 'bourbon-rule'],
    mcqs: [
      {
        question: 'Jim Crow laws most directly built upon which earlier development to maintain racial hierarchy?',
        options: [
          'The antebellum slave codes that had regulated enslaved people\'s movement and conduct',
          'The Black Codes enacted by Southern states during Presidential Reconstruction to restrict freedpeople',
          'The Compromise of 1877 that explicitly authorized racial segregation by law',
          'Supreme Court rulings that had declared the Thirteenth Amendment unconstitutional'
        ],
        answerIndex: 1,
        explanation: 'Jim Crow laws were the third-generation iteration of racial control legislation: antebellum slave codes gave way to Black Codes (1865–66), which gave way to Jim Crow statutes as each earlier mechanism was challenged. The Compromise of 1877 withdrew troops but did not authorize segregation by name (C), and the 13th Amendment was never struck down (D).',
      },
    ],
  },

  // ── Economic Concepts ────────────────────────────────────────────────────────

  {
    id: 'vertical-horizontal-integration',
    name: 'Vertical and Horizontal Integration',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Economic Concepts',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'Corporate strategies for eliminating competition: horizontal integration combined competing firms into a single enterprise; vertical integration absorbed suppliers and distributors to control an entire production chain.',
    significance:
      'These two strategies explain how Gilded Age corporations achieved and maintained monopoly power — Carnegie through vertical integration (iron ore, furnaces, railroads, markets), Rockefeller through horizontal integration (buying out or destroying every rival refinery). Together they produced the concentrated corporate economy the Sherman Act failed to break up. For DBQ essays on the rise of big business and the roots of the regulatory state, integration strategies are the mechanism of monopoly formation.',
    context: 'These strategies emerged in the 1870s–1890s and produced the trust era; they were curtailed by Progressive Era antitrust enforcement and the New Deal but remain central to corporate practice today.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'Social Structures'],
    connections: ['andrew-carnegie', 'john-rockefeller', 'trust-agreement', 'rapid-corporate-consolidation', 'sherman-antitrust-act'],
    mcqs: [
      {
        question: 'Vertical integration as practiced by Andrew Carnegie most directly allowed him to',
        options: [
          'Recruit skilled workers from across the country into a single labor pool',
          'Control every stage of production from raw materials to final sales, eliminating dependence on and competition from suppliers',
          'Combine multiple steel companies into a single legal entity to fix prices',
          'Raise capital from the public through the sale of common stock'
        ],
        answerIndex: 1,
        explanation: 'Carnegie\'s vertical integration controlled iron ore mines, coke fields, railroads, and sales outlets, meaning he paid no intermediaries and could undercut all competitors. That describes horizontal integration not vertical (C), stock sales are related to horizontal integration\'s trust structures (D), and labor recruitment is separate (A).',
      },
    ],
  },

  {
    id: 'trust-agreement',
    name: 'The Trust Agreement',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Economic Concepts',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'A legal structure pioneered by Standard Oil in which stockholders of smaller companies transferred their shares to a central board of trustees in exchange for trust certificates, enabling coordinated control without formal merger.',
    significance:
      'The trust was the legal innovation that made large-scale corporate monopoly possible: by transferring voting control to a small group of trustees while leaving nominal ownership dispersed, trusts could coordinate pricing and eliminate competition across an entire industry. J.P. Morgan perfected the trust as a financial instrument, creating U.S. Steel, General Electric, and other dominant corporations. For LEQ essays on the mechanisms of economic concentration, the trust is the structural explanation for how monopoly operated.',
    context: 'Developed by Standard Oil\'s lawyers in the early 1880s; states responded by allowing corporations to hold stock in other companies (the holding company), which replaced the trust as the dominant monopoly structure.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power'],
    connections: ['john-rockefeller', 'rapid-corporate-consolidation', 'vertical-horizontal-integration', 'sherman-antitrust-act'],
  },

  {
    id: 'railroad-expansion',
    name: 'Rapid Expansion of the Railroads',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Economic Concepts',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'The construction of approximately 140,000 miles of railroad track between 1860 and 1900, creating the first national market, enabling mass industrialization, and making railroad investors among the most powerful figures in the country.',
    significance:
      'Railroad expansion was the infrastructure of the entire Gilded Age economy: it made the steel, oil, and agriculture industries viable at national scale, created the first national market, generated enormous fortunes for investors like Vanderbilt and Huntington, and simultaneously produced the labor exploitation, political corruption, and farmer grievances that drove Progressive reform. For any DBQ or LEQ on industrialization, the railroad is the central technological driver. The railroad also displaced Native peoples and connected eastern capital to western resources.',
    context: 'Railroad expansion accelerated after the Civil War through the 1890s, funded by government land grants and private investment; its completion created the conditions for both Gilded Age prosperity and inequality.',
    themes: ['Work, Exchange, and Technology', 'Geography and the Environment', 'Politics and Power'],
    connections: ['transcontinental-railroad', 'grangers', 'interstate-commerce-act', 'andrew-carnegie', 'hard-times-farmers'],
    mcqs: [
      {
        question: 'The rapid expansion of railroads after the Civil War most directly contributed to which set of developments?',
        options: [
          'A decline in industrial production as resources were diverted to railroad construction',
          'The creation of a national market, the rise of industrial monopolies, and farmer grievances about rate discrimination',
          'Equal distribution of economic opportunity across all regions and social classes',
          'The peaceful integration of western territories without displacement of Native peoples'
        ],
        answerIndex: 1,
        explanation: 'Railroads simultaneously enabled industrial consolidation (by connecting national markets), produced monopoly power (through rate manipulation), and generated farmer anger (through discriminatory rates) — producing both Gilded Age prosperity and the reform movements that challenged it. Industrial production surged rather than declined (A), inequality deepened rather than equalized (C), and railroad construction accelerated Native displacement (D).',
      },
    ],
  },

  {
    id: 'new-steel-production',
    name: 'New Steel Production Techniques (Bessemer Process)',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Economic Concepts',
    tags: ['SAQ', 'causation'],
    summary: 'The adoption of the Bessemer converter and open-hearth furnace, which dramatically reduced the cost and increased the speed of converting iron to high-quality steel, making mass steel production economically viable.',
    significance:
      'Cheap steel made possible the entire infrastructure of industrial America — skyscrapers, bridges, railroads, and eventually automobiles — transforming steel production from a specialty craft into a mass industry centered in Pittsburgh and the Great Lakes region. Carnegie\'s mastery of these techniques explains his competitive dominance and illustrates how technological innovation could be weaponized as a business strategy. For SAQ and LEQ essays on industrialization\'s technological foundations, the Bessemer process is the key example.',
    context: 'The Bessemer process was developed in Britain in the 1850s and adopted in the United States in the 1860s–1870s; it was superseded by the open-hearth furnace by the 1890s.',
    themes: ['Work, Exchange, and Technology', 'Geography and the Environment'],
    connections: ['andrew-carnegie', 'pittsburgh-steel', 'railroad-expansion', 'rise-of-petroleum'],
  },

  {
    id: 'rise-of-petroleum',
    name: 'Rise of the Petroleum Industry',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Economic Concepts',
    tags: ['SAQ', 'causation'],
    summary: 'The emergence of oil drilling and refining in Pennsylvania in the 1860s, which produced kerosene for lighting and lubrication for industrial machinery, creating the industry Rockefeller would monopolize.',
    significance:
      'Petroleum became the second great engine of Gilded Age industrial capitalism after steel, and Standard Oil\'s monopoly over its refining illustrated more clearly than any other industry how a single corporation could control a vital commodity. The industry also laid the organizational and financial foundations for 20th-century oil dependence. For essays on industrial monopoly, the petroleum industry is the clearest case study.',
    context: 'Edwin Drake drilled the first commercial oil well in Titusville, Pennsylvania in 1859; Rockefeller founded Standard Oil in 1870 and achieved near-total refining dominance by the mid-1880s.',
    themes: ['Work, Exchange, and Technology', 'Geography and the Environment'],
    connections: ['john-rockefeller', 'trust-agreement', 'rapid-corporate-consolidation'],
  },

  {
    id: 'sharecropping',
    name: 'Tenancy and Sharecropping',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Economic Concepts',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The system by which landless farmers — overwhelmingly Black but also poor white — worked land owned by others in exchange for a share of the crop, creating a cycle of debt and dependency that replaced slavery as the mechanism of agricultural labor control in the South.',
    significance:
      'Sharecropping is the economic institution that connected the end of slavery to the persistence of racial inequality: freedpeople who gained legal freedom found themselves trapped in a debt-peonage system that replicated slavery\'s fundamental relationship between Black labor and white capital. Combined with Jim Crow laws, sharecropping made Black economic independence nearly impossible and defined Southern agriculture for seventy years. For DBQ essays on continuity and change in race relations, sharecropping is the most important evidence of structural continuity.',
    context: 'Sharecropping emerged immediately after emancipation as freedpeople lacked capital and white landowners lacked cash; it persisted as the dominant Southern labor system until mechanization in the mid-20th century.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'Geography and the Environment'],
    connections: ['bourbon-rule', 'convict-lease', 'jim-crow-laws', 'hard-times-farmers', 'black-middle-class'],
    mcqs: [
      {
        question: 'Sharecropping most directly served which function in the post-Reconstruction South?',
        options: [
          'It provided formerly enslaved people with a path to land ownership within a generation',
          'It replicated the essential economic relationship of slavery — Black labor serving white capital — while maintaining legal freedom',
          'It allowed both Black and white farmers equal access to credit and markets',
          'It was primarily a system used by white farmers, with Black freedpeople finding better economic opportunities in industry'
        ],
        answerIndex: 1,
        explanation: 'Sharecropping created debt cycles that trapped Black farmers in perpetual labor for white landowners, preserving racial economic hierarchy without the legal institution of slavery. It produced debt not land ownership (A), access was deeply unequal (C), and sharecropping disproportionately affected Black freedpeople (D).',
      },
    ],
  },

  {
    id: 'convict-lease',
    name: 'Convict Lease System',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Economic Concepts',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'The practice of Southern states leasing prisoners — disproportionately African American men convicted under Black Codes and vagrancy laws — to private businesses for unpaid, often lethal labor.',
    significance:
      'The convict lease system was a form of re-enslavement enabled by the Thirteenth Amendment\'s "except as punishment for crime" exception: Southern states used selective enforcement of minor laws against Black men to generate a forced labor supply that competed directly with free workers and produced enormous profits for private companies. It illustrates how emancipation produced legal creativity in racial labor control rather than genuine freedom. For DBQ essays on Reconstruction\'s limits and the persistence of coerced labor, convict leasing is essential evidence.',
    context: 'The system emerged during Reconstruction and intensified after 1877 as Bourbon governments maximized revenue from prison labor; it was gradually ended by Progressive Era reforms in the 1910s–1920s.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'Politics and Power'],
    connections: ['bourbon-rule', 'sharecropping', 'jim-crow-laws', 'restricting-franchise'],
    mcqs: [
      {
        question: 'The convict lease system most directly exploited which provision of the Thirteenth Amendment?',
        options: [
          'The clause granting Congress power to enforce the amendment through legislation',
          'The exception allowing involuntary servitude as punishment for crime',
          'The clause abolishing slavery throughout all U.S. territories',
          'The provision granting citizenship to formerly enslaved people'
        ],
        answerIndex: 1,
        explanation: 'Southern states used the Thirteenth Amendment\'s "except as a punishment for crime" clause to re-enslave Black men through selective law enforcement and harsh sentencing, creating a legal form of forced labor. The enforcement clause (A) was used by reformers, not exploiters. Citizenship was the Fourteenth Amendment (D), and territorial abolition was the Thirteenth\'s main clause not the exception (C).',
      },
    ],
  },

  {
    id: 'limited-liability',
    name: 'Limited Liability and Corporate Stock',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Economic Concepts',
    tags: ['SAQ', 'causation'],
    summary: 'The legal principle that corporate shareholders risked only the value of their investment if a company failed, enabling capital accumulation for large industrial enterprises by reducing investment risk.',
    significance:
      'Limited liability was the legal innovation that made mass-scale corporate capitalism possible: by separating investor liability from corporate obligation, it enabled the pooling of capital from thousands of investors who would otherwise risk personal bankruptcy. This financial architecture produced the Gilded Age\'s enormous corporations — and its extreme inequality, as the benefits of industrial growth were captured primarily by shareholders rather than workers. For essays on the institutional foundations of industrial capitalism, limited liability is a foundational concept.',
    context: 'Limited liability for corporations expanded in the 1830s–1840s; by the Gilded Age it was the standard legal form enabling the great corporate consolidations.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power'],
    connections: ['rapid-corporate-consolidation', 'trust-agreement', 'vertical-horizontal-integration'],
  },

  // ── Foreign Policy ───────────────────────────────────────────────────────────

  {
    id: 'new-south',
    name: 'New South Movement',
    period: 6,
    periodLabel: 'Period 6: 1865–1898',
    category: 'Movements & Ideologies',
    tags: ['LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The post-Reconstruction ideology championed by figures like Henry Grady that the South should embrace industrialization, reconcile with the North, and build a diversified economy rather than nostalgia for the plantation past.',
    significance:
      'The New South movement reveals the limits of Southern modernization: despite real industrial growth in textiles and railroads, the South remained economically dependent on Northern capital, politically dominated by Bourbon oligarchs, and socially defined by racial hierarchy. The gap between New South rhetoric and the reality of sharecropping, Jim Crow, and industrial backwardness is a central argument for essays on the continuity of Southern distinctiveness. For LEQ continuity-and-change prompts, New South ideology shows what changed (industrial investment) and what did not (racial inequality, economic dependence).',
    context: 'The New South movement peaked in the 1880s–1890s; limited industrial growth occurred but the South remained the poorest region of the United States through the mid-20th century.',
    themes: ['Work, Exchange, and Technology', 'American and Regional Culture', 'American and National Identity'],
    connections: ['henry-grady', 'railroad-development-south', 'bourbon-rule', 'sharecropping', 'lost-cause-mythology'],
  },

]
