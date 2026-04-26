import type { ApushTopic } from '../apush-types'

export const period9Topics: ApushTopic[] = [
  // ─── PEOPLE ────────────────────────────────────────────────────────────────

  {
    id: 'ronald-reagan',
    name: 'Ronald Reagan',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'People',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'Former actor and California governor who became the 40th U.S. president, leading a conservative revolution from 1981 to 1989.',
    significance: 'Reagan fundamentally reshaped American politics by championing supply-side economics, deregulation, and anti-communism, shifting the country decisively rightward after the liberalism of the 1960s–70s. His presidency accelerated the growth of the national debt, gutted welfare programs, and intensified Cold War pressure on the USSR — developments still debated today. For DBQ and LEQ purposes, Reagan represents the culmination of the post-1960s conservative backlash and is central to any argument about political realignment in the late 20th century.',
    context: 'Reagan rose to prominence as the New Right coalesced in reaction to the New Deal welfare state, Great Society, and the social upheaval of the 1960s; his presidency set the template for Republican politics that shaped George W. Bush, the Tea Party, and beyond.',
    themes: ['Politics and Power', 'Work, Exchange, and Technology', 'American and National Identity'],
    connections: ['reaganomics', 'reagan-doctrine', 'sdi', 'iran-contra', 'deregulation', 'new-right', 'neoconservatives', '1980-election', 'soaring-national-debt'],
    mcqs: [
      {
        question: 'Which of the following best describes the primary economic philosophy of Reagan\'s administration?',
        options: [
          'Keynesian demand-side stimulus through increased government spending',
          'Supply-side economics featuring tax cuts for corporations and the wealthy to spur investment',
          'Protectionist trade policy with high tariffs to shield American manufacturing',
          'Socialist redistribution of wealth through expanded welfare programs'
        ],
        answerIndex: 1,
        explanation: 'Reagan championed supply-side ("trickle-down") economics, cutting taxes for corporations and the wealthy on the theory that new investment would benefit everyone. Keynesian demand-side policy (A) was what Reagan opposed. Protectionism (C) and redistribution (D) are contrary to his free-market ideology.'
      },
      {
        question: 'Reagan\'s political coalition in 1980 was MOST distinctive for combining which groups?',
        options: [
          'Urban progressives, labor unions, and civil rights activists',
          'Corporate elites, neoconservatives, and populist evangelical Christians',
          'Isolationists, small farmers, and anti-war veterans',
          'Moderate Republicans, New Deal Democrats, and civil libertarians'
        ],
        answerIndex: 1,
        explanation: 'Reagan united corporate elites who wanted deregulation and tax cuts, neoconservatives who pushed aggressive anti-communism, and populist religious conservatives who opposed social liberalism. The other coalitions describe different political traditions (New Deal Democrats, progressives, isolationists) that Reagan explicitly ran against.'
      }
    ]
  },

  {
    id: 'mikhail-gorbachev',
    name: 'Mikhail Gorbachev',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'People',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Final leader of the Soviet Union whose reforms (glasnost and perestroika) accelerated the USSR\'s collapse in 1991.',
    significance: 'Gorbachev\'s twin policies of glasnost (political openness) and perestroika (economic restructuring) were intended to modernize the USSR but instead unleashed forces the Soviet system could not contain, leading to the peaceful dissolution of the superpower on Christmas Day 1991. His willingness to release satellite states and reduce nuclear arsenals through negotiations with Reagan made him pivotal to ending the Cold War. For LEQ essays on why the Cold War ended, Gorbachev\'s reforms are essential internal evidence alongside external U.S. pressure.',
    context: 'Gorbachev came to power in 1985 as the Soviet economy stagnated under decades of central planning; his collapse of the USSR left the U.S. as the world\'s sole superpower and opened a new era of American foreign policy.',
    themes: ['America in the World', 'Politics and Power'],
    connections: ['dissolution-of-the-ussr', 'reagan-doctrine', 'sdi', 'end-of-cold-war'],
    mcqs: [
      {
        question: 'Mikhail Gorbachev\'s reforms in the Soviet Union most directly contributed to which development in American foreign policy?',
        options: [
          'The expansion of NATO to include former Warsaw Pact nations',
          'The end of the Cold War and emergence of the United States as the world\'s sole superpower',
          'A shift toward isolationism as the Soviet threat disappeared',
          'American military intervention in the Persian Gulf to protect oil supplies'
        ],
        answerIndex: 1,
        explanation: 'Gorbachev\'s glasnost and perestroika destabilized the Soviet system, leading to the USSR\'s dissolution in 1991 and leaving the U.S. as the sole superpower — directly ending the Cold War framework. NATO expansion (A) came after and is a consequence, not the most direct result. Isolationism (C) did not follow; the U.S. remained globally engaged. Gulf War intervention (D) related to Iraq, not Soviet collapse.'
      }
    ]
  },

  {
    id: 'bill-clinton',
    name: 'Bill Clinton',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'People',
    tags: ['SAQ', 'continuity-and-change'],
    summary: '42nd U.S. president (1993–2001) whose centrist "Third Way" politics balanced budget surpluses with free trade expansion while navigating impeachment.',
    significance: 'Clinton\'s presidency demonstrated that Democrats could govern from the center, embracing free trade (NAFTA, GATT) and budget discipline while presiding over the longest economic expansion in U.S. history through the 1990s tech boom. His impeachment over the Monica Lewinsky scandal — and subsequent Senate acquittal — illustrated the intensifying partisan polarization that would define American politics into the 21st century. Clinton represents a useful comparison point for arguments about continuity and change in Democratic Party ideology after the New Deal era.',
    context: 'Clinton won the 1992 election as a "New Democrat" after 12 years of Republican dominance; his presidency bridged the Cold War\'s end and the post-9/11 era, leaving office with high approval ratings despite personal scandal.',
    themes: ['Politics and Power', 'Work, Exchange, and Technology'],
    connections: ['nafta', 'budget-surpluses', 'monica-lewinsky-impeachment', 'clinton-v-dole-1996', 'failure-of-healthcare-reform', 'kosovo'],
    mcqs: []
  },

  {
    id: 'ross-perot',
    name: 'Ross Perot',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'People',
    tags: [],
    summary: 'Texas billionaire and third-party candidate who captured nearly 19% of the popular vote in the 1992 presidential election.',
    significance: 'Perot\'s strong third-party showing in 1992 demonstrated widespread voter frustration with both major parties and their handling of the budget deficit, presaging the anti-establishment politics that would continue to surge in subsequent decades. His campaign drew support that likely came at Bush\'s expense, contributing to Clinton\'s victory.',
    context: 'Perot entered the 1992 race as public anger over the national debt and economic recession mounted, then withdrew before rejoining; his campaign is often cited as evidence of growing disillusionment with the two-party system.',
    themes: ['Politics and Power'],
    connections: ['bill-clinton', '1992-election'],
    mcqs: []
  },

  {
    id: 'george-w-bush',
    name: 'George W. Bush',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'People',
    tags: ['SAQ', 'causation'],
    summary: '43rd U.S. president (2001–2009) whose response to the 9/11 attacks reshaped American foreign policy and civil liberties through the War on Terror.',
    significance: 'Bush\'s presidency is defined by two watersheds: the 9/11 attacks and the 2003 invasion of Iraq, both of which remade American foreign policy and drained political capital and treasury. His $1.35 trillion tax cut in 2001 extended supply-side economics while critics argued it deepened inequality; Hurricane Katrina\'s mismanaged response and the 2008 financial crisis destroyed his approval ratings. Bush is central to SAQ arguments about how post-Cold War foreign policy choices created long-term consequences.',
    context: 'Bush won the disputed 2000 election in one of the closest contests in American history; his presidency ended with the U.S. in two wars and in the midst of the worst financial crisis since the Great Depression.',
    themes: ['Politics and Power', 'America in the World'],
    connections: ['bush-v-gore-2000', 'bush-tax-cuts', 'al-qaeda-war-on-terror', 'hurricane-katrina', 'invasion-of-iraq', 'patriot-act'],
    mcqs: []
  },

  {
    id: 'barack-obama',
    name: 'Barack Obama',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'People',
    tags: ['SAQ', 'continuity-and-change'],
    summary: '44th U.S. president and first African American president (2009–2017), who enacted the Affordable Care Act and navigated the 2008 financial crisis aftermath.',
    significance: 'Obama\'s election represented a historic milestone in American race relations and carried enormous symbolic weight after centuries of racial exclusion from the highest office, even as persistent inequality and police violence sparked the Black Lives Matter movement during his tenure. His Affordable Care Act was the most significant expansion of the social safety net since Medicare in 1965, though fierce Republican opposition embodied by the Tea Party limited further reform. For continuity-and-change arguments, Obama illustrates both progress in racial inclusion and the limits of that progress as income inequality and political polarization deepened.',
    context: 'Obama won the 2008 election amid the financial crisis with historic minority and youth turnout; his two terms saw economic recovery and expanded healthcare coverage but also unprecedented congressional gridlock and the rise of populist opposition movements.',
    themes: ['Politics and Power', 'Social Structures', 'American and National Identity'],
    connections: ['affordable-care-act', 'stimulus-package-2009', 'tea-party', 'occupy-wall-street', 'black-lives-matter', 'nsa-controversy', 'diplomatic-efforts-obama', 'political-gridlock-obama'],
    mcqs: []
  },

  {
    id: 'edward-snowden',
    name: 'Edward Snowden',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'People',
    tags: ['SAQ'],
    summary: 'NSA contractor who leaked classified documents in 2013 revealing mass government surveillance of American citizens\' phone and internet data.',
    significance: 'Snowden\'s leaks forced a national reckoning with the tension between national security and civil liberties, directly challenging the legal framework built after 9/11 through legislation like the PATRIOT Act. His revelations stoked debates about government overreach that echo earlier controversies like COINTELPRO and Nixon\'s wiretapping, making him useful for SAQ continuity arguments about surveillance and civil liberties.',
    context: 'Snowden acted during the height of post-9/11 surveillance expansion; after fleeing to Russia, he became a polarizing figure — traitor to some, whistleblower hero to others — and his leaks prompted modest surveillance reform legislation.',
    themes: ['Politics and Power', 'American and National Identity'],
    connections: ['nsa-controversy', 'al-qaeda-war-on-terror', 'patriot-act'],
    mcqs: []
  },

  // ─── EVENTS ────────────────────────────────────────────────────────────────

  {
    id: '1980-election',
    name: '1980 Presidential Election',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'causation'],
    summary: 'Reagan defeated incumbent Jimmy Carter by 10 points (51%–41%), signaling a decisive rightward shift in American political culture.',
    significance: 'The 1980 election is widely considered the most consequential electoral realignment since FDR\'s 1932 victory, as it brought the New Right to power and began dismantling the New Deal coalition that had dominated American politics for half a century. Reagan\'s landslide revealed the power of the Sunbelt, white suburban voters, and evangelical Christians as a new Republican base. For DBQ and LEQ arguments about political change, 1980 is the single most important pivot point of the era.',
    context: 'Carter\'s presidency was plagued by stagflation, the Iranian Hostage Crisis, and energy shortages; Reagan\'s campaign capitalized on these failures with the question "Are you better off than you were four years ago?" and promises of tax cuts and renewed national strength.',
    themes: ['Politics and Power', 'American and National Identity'],
    connections: ['ronald-reagan', 'reaganomics', 'new-right', 'neoconservatives', 'proposition-13'],
    mcqs: [
      {
        question: 'The 1980 presidential election is most significant in U.S. history because it',
        options: [
          'Was the first election decided by the Supreme Court',
          'Marked the end of the New Deal political coalition and the rise of the New Right',
          'Resulted in the first president elected from the South since Reconstruction',
          'Demonstrated the strength of third-party candidates in national politics'
        ],
        answerIndex: 1,
        explanation: 'Reagan\'s landslide victory is historically significant as it broke apart the New Deal coalition (urban workers, unions, minorities, Southern whites) and established a new conservative Republican majority built on the Sunbelt, evangelicals, and suburban voters. The Supreme Court election (A) describes 2000. Carter (D), a Southerner, had already been elected in 1976. Third-party strength (D) better describes 1992 with Perot.'
      },
      {
        question: 'Which of the following best explains why many working-class Democrats voted for Reagan in 1980?',
        options: [
          'Reagan promised to expand union bargaining rights and increase the minimum wage',
          'Reagan\'s anti-communist, anti-tax message resonated amid economic stagnation and foreign policy frustrations',
          'Reagan pledged to restore the gold standard and abolish the Federal Reserve',
          'Working-class voters were primarily drawn to Reagan\'s environmental protection agenda'
        ],
        answerIndex: 1,
        explanation: '"Reagan Democrats" crossed party lines because stagflation had eroded their living standards and the Iranian Hostage Crisis made Carter look weak; Reagan\'s promises to cut taxes, strengthen the military, and restore national pride spoke directly to those frustrations. Expanding union rights (A) was the opposite of Reagan\'s position. The gold standard (C) and environmentalism (D) were not central Reagan appeals.'
      }
    ]
  },

  {
    id: 'dissolution-of-the-ussr',
    name: 'Dissolution of the USSR',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'The Soviet Union officially dissolved on December 25, 1991, ending the Cold War and leaving the United States as the world\'s sole superpower.',
    significance: 'The USSR\'s collapse fundamentally transformed the global order, removing the ideological and military rival that had shaped U.S. foreign and domestic policy since 1945 and validating Reagan-era arguments that aggressive anti-communism had won the Cold War. Without a clear enemy, the U.S. faced difficult questions about its global role — debates that shaped interventions in Somalia, Kosovo, and eventually the War on Terror. For LEQ arguments about causation in Period 9, the dissolution is the defining foreign policy event from which nearly everything else flows.',
    context: 'Gorbachev\'s glasnost and perestroika destabilized the Soviet system, satellite states broke free in 1989 (including the fall of the Berlin Wall), and 15 republics declared independence; the USSR formally ceased to exist on Christmas Day 1991.',
    themes: ['America in the World', 'Politics and Power'],
    connections: ['mikhail-gorbachev', 'reagan-doctrine', 'sdi', 'end-of-cold-war', 'tiananmen-square'],
    mcqs: [
      {
        question: 'The dissolution of the Soviet Union in 1991 most directly led to which debate in American foreign policy?',
        options: [
          'Whether to expand nuclear arsenals to maintain deterrence',
          'How to define America\'s global role without a clear ideological rival',
          'Whether to rejoin the League of Nations',
          'How to respond to Chinese communist expansion in Southeast Asia'
        ],
        answerIndex: 1,
        explanation: 'With the Cold War\'s bipolar framework gone, U.S. policymakers debated whether to pursue humanitarian intervention (Somalia, Kosovo), promote democracy, or retrench — questions that led directly to the disagreements over Iraq and Afghanistan. Expanding nuclear arsenals (A) was the opposite of post-Cold War arms reduction. The League of Nations (C) dissolved in 1946. Chinese expansion in Southeast Asia (D) describes the 1950s–70s context.'
      }
    ]
  },

  {
    id: 'tiananmen-square',
    name: 'Tiananmen Square Massacre',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['SAQ'],
    summary: 'In June 1989, Chinese authorities deployed tanks and soldiers to crush pro-democracy student protests in Beijing\'s Tiananmen Square, killing hundreds.',
    significance: 'Tiananmen Square placed the U.S. in a difficult position: condemning the massacre conflicted with growing economic ties to China, previewing the ongoing tension between human rights advocacy and trade interests that would define U.S.-China relations for decades. The CCP\'s brutal suppression and subsequent cover-up showed that not all communist regimes would follow the Soviet path of liberalization, complicating American assumptions about the universal spread of democracy.',
    context: 'The protests occurred during the same year as the fall of the Berlin Wall and Gorbachev\'s reforms, making 1989 a global watershed for democratic movements; unlike Eastern Europe, China violently suppressed its democracy movement.',
    themes: ['America in the World', 'Politics and Power'],
    connections: ['dissolution-of-the-ussr', 'mikhail-gorbachev', 'end-of-cold-war'],
    mcqs: []
  },

  {
    id: 'end-of-cold-war',
    name: 'End of the Cold War',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'causation'],
    summary: 'The Cold War\'s conclusion by 1991 ended four decades of superpower rivalry and left the U.S. as the unipolar global power.',
    significance: 'The Cold War\'s end validated the decades-long strategy of containment and generated debate about whether Reagan\'s military buildup or Gorbachev\'s internal reforms deserved more credit — an argument directly suited to LEQ causation prompts. The sudden absence of a unifying threat exposed deep domestic divisions previously papered over by anti-communism and forced a rethinking of military spending, foreign aid, and national purpose. America\'s post-Cold War "unipolar moment" set the context for every major foreign policy decision of Period 9.',
    context: 'The Cold War had structured American domestic and foreign policy since 1947; its end triggered NATO debates, economic globalization, and eventually — through the power vacuum it left — the rise of new threats like Islamic fundamentalism and international terrorism.',
    themes: ['America in the World', 'Politics and Power', 'American and National Identity'],
    connections: ['dissolution-of-the-ussr', 'mikhail-gorbachev', 'reagan-doctrine', 'sdi', 'rise-of-islamic-fundamentalism'],
    mcqs: [
      {
        question: 'Historians debate the primary cause of the Cold War\'s end. Which of the following arguments would BEST support the claim that internal Soviet factors were more important than American pressure?',
        options: [
          'Reagan\'s SDI program forced the Soviets to bankrupt themselves trying to keep pace',
          'The Reagan Doctrine successfully rolled back Soviet-backed regimes in Central America and Afghanistan',
          'Gorbachev\'s glasnost and perestroika reforms unleashed political forces the Soviet system could not survive',
          'U.S. nuclear superiority in the 1980s made Soviet military competition unsustainable'
        ],
        answerIndex: 2,
        explanation: 'The argument for internal Soviet causation centers on Gorbachev\'s own reforms — glasnost (openness) and perestroika (restructuring) — which inadvertently empowered nationalist and democratic movements the party could no longer control. Options A, B, and D all emphasize American external pressure as the driving cause, which represents the opposing historical argument.'
      }
    ]
  },

  {
    id: 'iran-contra',
    name: 'Iran-Contra Scandal',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['SAQ', 'causation'],
    summary: 'Secret Reagan administration scheme that sold weapons to Iran and illegally funneled profits to Nicaraguan Contra rebels, bypassing a Congressional ban.',
    significance: 'Iran-Contra revealed that Reagan officials had secretly circumvented Congressional authority — a direct violation of the Boland Amendment — raising profound questions about executive power, oversight, and the limits of the Reagan Doctrine\'s anti-communist zeal. The scandal demonstrated the dangers of covert operations and unchecked executive action, a theme with clear continuity to earlier controversies (Watergate, Pentagon Papers) and later ones (post-9/11 surveillance). Reagan\'s personal popularity helped him survive politically, but the scandal damaged his second term.',
    context: 'The scheme occurred as Congress had cut off official Contra funding; it was exposed in 1986 and led to the conviction of several administration officials, though most convictions were later overturned or pardoned.',
    themes: ['Politics and Power', 'America in the World'],
    connections: ['ronald-reagan', 'reagan-doctrine', 'savings-and-loan-crisis'],
    mcqs: []
  },

  {
    id: 'savings-and-loan-crisis',
    name: 'Savings and Loan Crisis',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['causation'],
    summary: 'Collapse of hundreds of savings and loan institutions in the 1980s–90s, costing taxpayers approximately $124 billion, directly caused by Reagan-era deregulation.',
    significance: 'The S&L crisis was a direct consequence of financial deregulation that allowed savings institutions to take on far riskier investments without adequate oversight — a preview of the 2008 financial crisis and a powerful counter-argument to deregulation\'s supposed benefits. The massive taxpayer bailout contradicted Reagan\'s free-market rhetoric and demonstrated that deregulation could socialize risk even as it privatized profits. This event is useful for causation arguments linking deregulation to economic instability.',
    context: 'Reagan-era deregulation loosened restrictions on what S&Ls could invest in; widespread fraud and bad investments followed, with the full cost falling on federal deposit insurance and, ultimately, taxpayers.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power'],
    connections: ['deregulation', 'reagan-omics', 'reaganomics', '1990-recession'],
    mcqs: []
  },

  {
    id: '1990-recession',
    name: '1990 Recession',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['causation'],
    summary: 'Economic downturn from July 1990 to March 1991 triggered by corporate over-leveraging, the S&L crisis, and the aftermath of Reagan-era deregulation.',
    significance: 'The 1990 recession exposed the limits of Reaganomics: corporate debt, junk bond speculation, and S&L failures — all enabled by deregulation — produced widespread bankruptcies and mass layoffs that fell hardest on working-class Americans. The recession cost George H.W. Bush his presidency when combined with his "no new taxes" pledge reversal, illustrating how economic conditions directly drive political realignment. This is strong causation evidence for arguments about how deregulation\'s consequences outlasted Reagan himself.',
    context: 'The recession followed a decade of debt-fueled growth and financial deregulation; its severity contradicted supply-side predictions and opened the door for Clinton\'s 1992 "It\'s the economy, stupid" campaign.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power'],
    connections: ['reaganomics', 'deregulation', 'savings-and-loan-crisis', 'bill-clinton'],
    mcqs: []
  },

  {
    id: 'invasion-of-kuwait',
    name: 'Gulf War / Invasion of Kuwait (Operation Desert Storm)',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['SAQ', 'causation'],
    summary: 'After Iraq\'s Saddam Hussein invaded Kuwait in 1990, the U.S. led a 34-nation coalition that expelled Iraqi forces in a six-week campaign with 141 U.S. casualties.',
    significance: 'Operation Desert Storm demonstrated the overwhelming conventional military superiority the U.S. had built during the Cold War, and the "Powell Doctrine" of using overwhelming force with a clear exit strategy set the template for post-Cold War intervention — a template later abandoned in Iraq in 2003. The war also revealed America\'s strategic interest in Middle Eastern oil and set the stage for continued U.S. military presence in the region. Critics argue it left Saddam in power and created unresolved tensions that made the 2003 Iraq War nearly inevitable.',
    context: 'Iraq invaded Kuwait in August 1990; the UN authorized force and the U.S. deployed 400,000 troops; the war ended quickly in early 1991 but left underlying regional instability that would culminate in September 11 and the Iraq War.',
    themes: ['America in the World', 'Politics and Power'],
    connections: ['george-w-bush', 'al-qaeda-war-on-terror', 'rise-of-islamic-fundamentalism', 'critics-of-intervention'],
    mcqs: []
  },

  {
    id: 'kosovo',
    name: 'Kosovo Intervention (1999)',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['SAQ'],
    summary: 'NATO, led by the U.S., launched a 78-day bombing campaign against Yugoslavia in 1999 to halt ethnic cleansing of Albanians in Kosovo.',
    significance: 'Kosovo represented the Clinton administration\'s embrace of humanitarian intervention as a post-Cold War foreign policy doctrine, demonstrating the U.S. willingness to use force without a direct national security threat — a sharp contrast to the Gulf War\'s clear oil/security rationale. The intervention\'s success without U.S. ground casualties seemed to validate airpower-centric interventionism, but critics (from both left and right) questioned whether the U.S. had overextended itself into regional conflicts with no vital interests.',
    context: 'The Kosovo crisis emerged from the breakup of Yugoslavia in the early 1990s; it followed earlier inaction during the Bosnian genocide and was framed as a lesson learned; the eventual ceasefire was widely viewed in the Clinton administration as a major success.',
    themes: ['America in the World', 'Politics and Power'],
    connections: ['bill-clinton', 'critics-of-intervention'],
    mcqs: []
  },

  {
    id: 'bush-v-gore-2000',
    name: 'Bush v. Gore / 2000 Election',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['SAQ', 'causation'],
    summary: 'The disputed 2000 presidential election was resolved by a 5-4 Supreme Court decision halting Florida\'s recount, awarding the presidency to George W. Bush despite Al Gore winning the popular vote.',
    significance: 'Bush v. Gore intensified partisan distrust in American institutions, with Democrats seeing the conservative Supreme Court majority as having stolen the election and Republicans defending the Court\'s authority. The decision raised lasting questions about the electoral college, judicial impartiality, and democratic legitimacy that echo through debates about the 2020 election and beyond. For SAQ prompts about political polarization, the 2000 election is a key escalation point.',
    context: 'The election hinged on Florida\'s 537-vote margin; hanging chads, butterfly ballots, and a Republican secretary of state\'s certification created the crisis; the Supreme Court split 5-4 along ideological lines to stop the recount.',
    themes: ['Politics and Power', 'American and National Identity'],
    connections: ['george-w-bush', 'bush-tax-cuts', 'political-gridlock'],
    mcqs: []
  },

  {
    id: 'hurricane-katrina',
    name: 'Hurricane Katrina',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['SAQ', 'causation'],
    summary: 'A Category 5 hurricane that devastated the Gulf Coast in August 2005; the federal government\'s botched response revealed deep failures in FEMA and racial/economic inequality in disaster preparedness.',
    significance: 'Katrina exposed how decades of disinvestment in infrastructure, poverty, and racial inequality in New Orleans\'s Lower Ninth Ward made poor Black residents far more vulnerable to the disaster and far less likely to receive adequate government aid. The federal response disaster — symbolized by FEMA Director Michael Brown — devastated Bush\'s approval ratings and contributed to Republican losses in 2006 midterms, demonstrating that domestic governance failures have direct political consequences. Katrina is a powerful example for DBQ and LEQ arguments about the relationship between race, poverty, and government responsibility.',
    context: 'Katrina struck on August 29, 2005; the levee failures flooded 80% of New Orleans; over 1,800 people died; widespread criticism of the Bush administration\'s slow response fueled broader discontent that helped Democrats retake Congress in 2006.',
    themes: ['Social Structures', 'Politics and Power', 'Geography and the Environment'],
    connections: ['george-w-bush', 'african-american-economic-progress', 'the-underclass'],
    mcqs: []
  },

  {
    id: 'financial-crisis-2008',
    name: 'Financial Crisis of 2008',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['DBQ frequent', 'LEQ', 'causation'],
    summary: 'The collapse of the housing market and financial sector in 2008 triggered the worst economic crisis since the Great Depression, leading to massive federal bailouts and the Obama stimulus package.',
    significance: 'The 2008 crisis demonstrated the catastrophic consequences of decades of financial deregulation beginning with Reagan, as complex mortgage-backed securities and predatory lending created a systemic collapse that wiped out trillions in household wealth and cost millions their jobs and homes. The crisis directly produced Obama\'s presidency and the stimulus debate, the Tea Party backlash against bailouts, and Occupy Wall Street\'s protest against wealth inequality — making it the economic pivot point of the entire period. For DBQ and LEQ arguments about deregulation\'s consequences, the 2008 crisis is the culminating evidence.',
    context: 'Built on a foundation of deregulated financial markets, lax mortgage standards, and exotic financial instruments pioneered during the 1990s–2000s, the crisis was triggered by the housing bubble\'s collapse; the Troubled Asset Relief Program (TARP) authorized $700 billion in bailouts.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'Social Structures'],
    connections: ['deregulation', 'stimulus-package-2009', 'tea-party', 'occupy-wall-street', 'barack-obama'],
    mcqs: [
      {
        question: 'The 2008 financial crisis most directly resulted from which long-term trend in the American economy?',
        options: [
          'Excessive government regulation that prevented banks from adapting to new markets',
          'Decades of financial deregulation that allowed risky mortgage lending and complex financial speculation',
          'High tariffs that caused American manufacturers to lose global competitiveness',
          'Runaway inflation caused by excessive government spending on social programs'
        ],
        answerIndex: 1,
        explanation: 'The 2008 crisis was rooted in financial deregulation dating to the Reagan era: loosened lending standards, repeal of Glass-Steagall provisions, and unregulated derivatives markets enabled the predatory mortgage lending and systemic risk that caused the collapse. Excessive regulation (A) is the opposite of what occurred. Tariffs (C) and social spending inflation (D) were not primary factors in the housing and financial sector collapse.'
      },
      {
        question: 'Which political movements MOST directly emerged as opposing reactions to the 2008 financial crisis and its aftermath?',
        options: [
          'The Religious Right and the New Right',
          'The Tea Party (right) and Occupy Wall Street (left)',
          'The civil rights movement and the antiwar movement',
          'The neoconservative movement and the Democratic Leadership Council'
        ],
        answerIndex: 1,
        explanation: 'The Tea Party arose in 2009 from right-wing anger at government bailouts and Obama\'s stimulus spending, while Occupy Wall Street arose in 2011 from left-wing anger at corporate greed and wealth inequality — both directly responding to the 2008 crisis. The Religious Right (A) predates 2008. Civil rights and antiwar movements (C) are mid-20th-century phenomena. Neoconservatism and DLC (D) predate 2008 as well.'
      }
    ]
  },

  // ─── LEGISLATION & DOCUMENTS ──────────────────────────────────────────────

  {
    id: 'reaganomics',
    name: 'Reaganomics / Supply-Side Economics',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Legislation & Documents',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'Reagan\'s economic program of deep tax cuts for corporations and the wealthy, deregulation, and reduced domestic spending, premised on the theory that wealth would "trickle down" to ordinary Americans.',
    significance: 'Reaganomics produced the largest tax cut in American history to that point, shifted the tax burden away from the wealthy, and set off a three-decade era of rising income inequality — making it the single most consequential domestic policy of the period for DBQ or LEQ arguments. While corporate profits and the stock market grew, wages for working-class Americans stagnated, the national debt tripled during Reagan\'s two terms, and the promised "trickle-down" effects never materialized for most Americans. Supply-side economics reshaped both parties: Clinton embraced free trade, and Bush doubled down on tax cuts.',
    context: 'Reaganomics was a direct repudiation of Keynesian New Deal economics that had dominated policy since the 1930s; it drew on Milton Friedman\'s free-market theories and was institutionalized in the Economic Recovery Tax Act of 1981.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'Social Structures'],
    connections: ['ronald-reagan', 'deregulation', 'soaring-national-debt', 'savings-and-loan-crisis', '1990-recession', 'financial-crisis-2008'],
    mcqs: [
      {
        question: 'A historian arguing that Reaganomics worsened economic inequality would BEST support their argument with which evidence?',
        options: [
          'Reagan\'s tax cuts reduced the top marginal rate from 70% to 28% while the national debt tripled',
          'Reagan increased military spending, which created manufacturing jobs',
          'The stock market rose sharply during the Reagan years, benefiting middle-class investors',
          'Reagan\'s deregulation made it easier for small businesses to get loans'
        ],
        answerIndex: 0,
        explanation: 'The most powerful evidence for Reaganomics increasing inequality is that the top marginal tax rate was slashed from 70% to 28% — disproportionately benefiting the wealthy — while the national debt tripled (indicating the promised growth did not generate enough revenue). Military spending creating jobs (B) and stock market gains (C) could support counterarguments. Easier small business loans (D) is also a potential counterargument to the inequality claim.'
      },
      {
        question: 'How did Reagan justify reducing taxes on corporations and the wealthy despite the potential increase in the federal deficit?',
        options: [
          'He argued that a larger deficit would stimulate consumer spending through increased government contracts',
          'He claimed tax cuts would generate enough economic growth to increase total tax revenues over time',
          'He proposed eliminating Social Security and Medicare to offset the lost revenue',
          'He argued the Federal Reserve should print money to cover any shortfall'
        ],
        answerIndex: 1,
        explanation: 'Reagan\'s supply-side argument (based on the "Laffer Curve") held that cutting tax rates would stimulate so much economic growth that total tax revenues would actually increase — "the rising tide lifts all boats." In practice, the deficit grew substantially. Deficit spending for stimulus (A) describes Keynesian policy. Eliminating Social Security (C) was politically impossible and not Reagan\'s stated plan. Printing money (D) contradicts Reagan\'s inflation-fighting stance.'
      }
    ]
  },

  {
    id: 'deregulation',
    name: 'Deregulation',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Legislation & Documents',
    tags: ['DBQ frequent', 'LEQ', 'causation', 'continuity-and-change'],
    summary: 'Reagan\'s systematic rollback of federal regulations covering environmental protections, financial institutions, workplace safety, and civil rights enforcement.',
    significance: 'Deregulation had cascading consequences well beyond Reagan\'s presidency: loosened financial rules contributed to the S&L crisis of the 1980s and the 2008 financial collapse; reduced environmental enforcement intensified pollution in poor and minority communities; and weakened labor regulations accelerated the decline of union power and wage stagnation. For DBQ arguments about continuity and change in economic policy, deregulation is the thread that links Reaganomics to every subsequent economic crisis through 2008. Even Democratic administrations largely maintained the deregulatory framework, illustrating ideological continuity.',
    context: 'Deregulation built on earlier Carter-era airline and trucking deregulation but vastly expanded its scope; Reagan cut the EPA\'s budget, slashed OSHA enforcement, and appointed industry-friendly regulators across agencies.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'Geography and the Environment'],
    connections: ['reaganomics', 'ronald-reagan', 'savings-and-loan-crisis', '1990-recession', 'financial-crisis-2008', 'soaring-national-debt'],
    mcqs: [
      {
        question: 'Reagan\'s deregulation policies most directly affected which groups negatively, according to critics?',
        options: [
          'Corporations and investors, who lost profit opportunities in regulated markets',
          'Working-class Americans and the environment, as safety regulations and environmental protections were reduced',
          'Wealthy Americans, who faced increased competition from newly deregulated foreign companies',
          'The military, whose budget was cut to offset lost regulatory revenue'
        ],
        answerIndex: 1,
        explanation: 'Critics argued deregulation harmed workers (reduced OSHA enforcement), the environment (weakened EPA rules), and consumers (financial deregulation that enabled predatory practices). Corporations (A) were the primary beneficiaries of deregulation, not those harmed by it. Wealthy Americans (C) generally benefited. Military spending (D) actually increased under Reagan.'
      }
    ]
  },

  {
    id: 'nafta',
    name: 'NAFTA (North American Free Trade Agreement)',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Legislation & Documents',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'Free trade agreement among the U.S., Canada, and Mexico enacted in 1994 under Clinton, eliminating most trade tariffs among the three nations.',
    significance: 'NAFTA accelerated the deindustrialization of America\'s manufacturing belt by incentivizing companies to move production to Mexico\'s lower-wage economy, displacing an estimated 700,000 U.S. manufacturing jobs — a transformation that fueled the working-class resentment that would power anti-globalization movements from Perot in 1992 to Trump in 2016. At the same time, it lowered consumer prices and boosted exports, illustrating the distributional conflicts at the heart of globalization: aggregate gains accompanied by concentrated losses among specific communities. NAFTA is essential for LEQ and DBQ arguments about deindustrialization, globalization, and economic inequality.',
    context: 'NAFTA was negotiated under Bush and signed by Clinton over fierce union opposition; Clinton also pushed through GATT and U.S. entry into the WTO; together they embedded the U.S. in a globalized trading system with major domestic consequences.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power', 'Migration and Settlement'],
    connections: ['bill-clinton', 'globalization-protests', 'critics-of-intervention', 'new-business-practices', 'technology-industries'],
    mcqs: [
      {
        question: 'Which of the following groups most strongly opposed NAFTA when it was being debated in 1993–94?',
        options: [
          'American corporations seeking access to cheaper Mexican labor and markets',
          'Labor unions and workers in manufacturing industries who feared job losses to Mexico',
          'Environmental organizations who wanted to open more U.S. markets to green technology',
          'The American military concerned about security implications of open borders with Mexico'
        ],
        answerIndex: 1,
        explanation: 'Labor unions, led by the AFL-CIO, were the loudest opponents of NAFTA, arguing correctly that eliminating tariffs would incentivize companies to move manufacturing jobs to Mexico where wages were far lower. American corporations (A) generally supported NAFTA. Environmental groups (C) had mixed views but this was not their primary concern. Military security (D) was not the central opposition argument.'
      },
      {
        question: 'NAFTA\'s long-term political significance is BEST demonstrated by which development?',
        options: [
          'The rapid growth of American exports to Canada and Mexico in the 1990s',
          'The rise of anti-trade, anti-globalization sentiment among working-class voters in the 2000s–2010s',
          'The strengthening of American labor unions as wages rose in competing countries',
          'The reduction of immigration from Mexico as Mexican wages rose toward American levels'
        ],
        answerIndex: 1,
        explanation: 'NAFTA\'s most significant long-term political consequence was the deindustrialization and wage stagnation it contributed to in the American Midwest and South, fueling the working-class anti-globalization resentment that drove movements from Occupy Wall Street to Trump\'s 2016 campaign. Export growth (A) is a positive economic outcome, not the political significance. Labor unions (C) weakened, not strengthened. Immigration from Mexico (D) actually increased during the NAFTA era.'
      }
    ]
  },

  {
    id: 'bush-tax-cuts',
    name: 'Bush Tax Cuts (2001)',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Legislation & Documents',
    tags: ['SAQ', 'continuity-and-change', 'causation'],
    summary: 'The Economic Growth and Tax Relief Reconciliation Act of 2001 enacted the largest tax cut in U.S. history — $1.35 trillion — continuing the supply-side tradition of Reagan.',
    significance: 'The Bush tax cuts represented the continuation of Reaganomics under a new administration, erasing the budget surpluses Clinton had built and converting them to deficits — illustrating that supply-side orthodoxy had become Republican Party doctrine regardless of fiscal conditions. Combined with the costs of two wars in Afghanistan and Iraq, the cuts contributed to a dramatic increase in the national debt. They also deepened income inequality by disproportionately benefiting the wealthiest Americans, reinforcing arguments about the cumulative effects of post-1980 tax policy.',
    context: 'Bush argued the Clinton-era surpluses should be returned to taxpayers; the cuts passed in 2001 and were extended in 2003; the Congressional Budget Office projected they would eliminate the surplus and return the country to deficits.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power'],
    connections: ['george-w-bush', 'reaganomics', 'soaring-national-debt', 'financial-crisis-2008'],
    mcqs: []
  },

  {
    id: 'patriot-act',
    name: 'USA PATRIOT Act (2001)',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Legislation & Documents',
    tags: ['SAQ', 'causation', 'continuity-and-change'],
    summary: 'Post-9/11 legislation that dramatically expanded government surveillance powers, allowing warrantless wiretapping, extended detention, and broad monitoring of financial and communications records.',
    significance: 'The PATRIOT Act represented the most significant expansion of domestic surveillance since COINTELPRO, creating a legal framework that authorized mass collection of Americans\' phone and internet data — practices later exposed by Edward Snowden in 2013. The law generated lasting debate about the trade-off between security and civil liberties, particularly its disproportionate impact on Muslim American communities subjected to surveillance without individualized suspicion. For continuity-and-change arguments, the PATRIOT Act fits into a long pattern of wartime civil liberties restriction (Alien and Sedition Acts, Japanese internment, McCarthyism).',
    context: 'Passed within six weeks of 9/11 with near-unanimous Congressional support, the PATRIOT Act was renewed multiple times; key provisions were challenged in court and partially reformed after Snowden\'s revelations, but the surveillance apparatus largely remained.',
    themes: ['Politics and Power', 'American and National Identity'],
    connections: ['al-qaeda-war-on-terror', 'george-w-bush', 'nsa-controversy', 'edward-snowden'],
    mcqs: []
  },

  {
    id: 'affordable-care-act',
    name: 'Affordable Care Act (ACA / "Obamacare")',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Legislation & Documents',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'continuity-and-change', 'causation'],
    summary: 'Landmark 2010 legislation that expanded health insurance coverage to approximately 20 million Americans through insurance exchanges, Medicaid expansion, and an individual mandate.',
    significance: 'The ACA was the most significant expansion of the American social safety net since the Great Society programs of the 1960s, moving the U.S. closer to — but not reaching — universal health coverage and demonstrating that progressive legislation remained achievable even in a polarized political environment. The fierce Republican opposition, symbolized by Tea Party protests and over 50 repeal votes in Congress, illustrated how health care had become the defining fault line of American political identity. For LEQ and DBQ arguments about the role of government in social welfare, the ACA represents continuity with New Deal/Great Society liberalism and contrast with Reagan-era rollback.',
    context: 'Clinton\'s 1994 health care reform had failed amid industry opposition; Obama\'s ACA passed on a party-line vote after a year of debate; the Supreme Court upheld its constitutionality in NFIB v. Sebelius (2012), though the individual mandate was later zeroed out.',
    themes: ['Politics and Power', 'Social Structures', 'American and National Identity'],
    connections: ['barack-obama', 'tea-party', 'failure-of-healthcare-reform', 'stimulus-package-2009'],
    mcqs: [
      {
        question: 'In the context of American history, the Affordable Care Act is MOST significant because it',
        options: [
          'Created a single-payer government health insurance system similar to Canada\'s',
          'Represented the largest expansion of the social safety net since Medicare and Medicaid in 1965',
          'Eliminated private health insurance companies and replaced them with government-run plans',
          'Was the first piece of major social legislation passed since the Reagan Revolution of 1980'
        ],
        answerIndex: 1,
        explanation: 'The ACA is historically significant as the largest expansion of social welfare coverage since LBJ\'s Great Society created Medicare and Medicaid in 1965, extending coverage to ~20 million previously uninsured Americans. It did not create single-payer (A) — private insurance was preserved. Private insurers (C) were not eliminated. There was social legislation after 1980 (D), including CHIP in 1997.'
      }
    ]
  },

  {
    id: 'stimulus-package-2009',
    name: 'American Recovery and Reinvestment Act (2009 Stimulus)',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Legislation & Documents',
    tags: ['SAQ', 'causation'],
    summary: 'Obama\'s $787 billion economic stimulus package enacted in response to the 2008 financial crisis, combining tax cuts, government spending, and investment in infrastructure and clean energy.',
    significance: 'The stimulus represented the largest peacetime economic intervention since the New Deal and reignited the fundamental debate about government\'s role in the economy: economists credited it with saving millions of jobs and preventing a second Great Depression, while critics argued it increased debt without producing sufficient growth. The conservative backlash to the stimulus directly birthed the Tea Party movement and hardened the Republican opposition strategy of total obstruction that defined the Obama years. For causation arguments, the stimulus and its political backlash explain much of the polarization of the 2010s.',
    context: 'The stimulus passed in February 2009 with zero Republican House votes; the Congressional Budget Office estimated it saved or created 2–3 million jobs; the political battle over its size and effectiveness shaped every subsequent fiscal debate of the Obama era.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power'],
    connections: ['barack-obama', 'financial-crisis-2008', 'tea-party', 'affordable-care-act'],
    mcqs: []
  },

  // ─── COURT CASES ──────────────────────────────────────────────────────────

  {
    id: 'citizens-united',
    name: 'Citizens United v. FEC (2010)',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Court Cases',
    tags: ['SAQ', 'causation', 'continuity-and-change'],
    summary: 'Supreme Court 5-4 ruling that corporations and unions have First Amendment rights to spend unlimited money on political campaigns, opening the floodgates to "Super PAC" spending.',
    significance: 'Citizens United transformed American electoral politics by allowing corporations and billionaires to spend unlimited sums through nominally independent Super PACs, amplifying the influence of money in politics and deepening inequality in political representation. The decision directly fueled the Occupy Wall Street movement\'s argument that democracy had been captured by the "1%," and sparked ongoing debate about whether money equals speech and corporations deserve constitutional personhood. For SAQ arguments about political institutions and inequality, Citizens United is pivotal evidence.',
    context: 'The ruling overturned decades of campaign finance regulation dating to the post-Watergate era; in its wake, outside spending in elections increased dramatically — from $338 million in 2008 to over $1 billion in 2012.',
    themes: ['Politics and Power', 'Social Structures'],
    connections: ['occupy-wall-street', 'political-gridlock-obama', 'political-gridlock'],
    mcqs: []
  },

  // ─── MOVEMENTS & IDEOLOGIES ────────────────────────────────────────────────

  {
    id: 'new-right',
    name: 'The New Right / Conservative Movement',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Movements & Ideologies',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation', 'continuity-and-change', 'comparison'],
    summary: 'Broad coalition of evangelical Christians, corporate elites, neoconservatives, and populist anti-government voters that rose to power with Reagan\'s 1980 election and reshaped American politics.',
    significance: 'The New Right represented the most successful political coalition-building project since FDR\'s New Deal, uniting theologically conservative Christians, free-market capitalists, and Cold War hawks under a single anti-liberal banner. Its rise fundamentally shifted the center of American politics rightward, forced Democrats to move toward the center (Clinton\'s "Third Way"), and laid the ideological groundwork for every subsequent Republican administration. For DBQ and LEQ arguments about political realignment, the New Right is the organizing concept for the entire period.',
    context: 'The New Right coalesced in reaction to the perceived excesses of 1960s liberalism — civil rights enforcement, feminism, Vietnam, and the Great Society — and built organizational infrastructure through evangelical churches, think tanks (Heritage Foundation), and direct-mail fundraising throughout the 1970s.',
    themes: ['Politics and Power', 'American and National Identity', 'American and Regional Culture'],
    connections: ['ronald-reagan', '1980-election', 'neoconservatives', 'populist-conservatives', 'right-to-life-movement', 'proposition-13', 'reaganomics'],
    mcqs: [
      {
        question: 'Which of the following developments most directly created the conditions for the rise of the New Right in the 1970s–80s?',
        options: [
          'The expansion of civil rights and social programs under the Great Society, which conservative Americans viewed as federal overreach',
          'The end of World War II and the GI Bill, which created a prosperous middle class',
          'The economic boom of the 1950s, which made Americans complacent about politics',
          'Nixon\'s Environmental Protection Agency, which angered corporate interests'
        ],
        answerIndex: 0,
        explanation: 'The New Right was primarily a reaction against Great Society liberalism — civil rights enforcement busing, welfare expansion, affirmative action, and the cultural changes of the 1960s. Conservative religious and economic actors organized in opposition to federal power\'s expansion. WWII/GI Bill (B) and 1950s prosperity (C) predate and don\'t directly explain the New Right\'s rise. Nixon\'s EPA (D) angered corporations but was not the New Right\'s organizing grievance.'
      },
      {
        question: 'Which of the following BEST illustrates how the New Right successfully built a broad coalition?',
        options: [
          'By appealing exclusively to wealthy Americans who wanted lower taxes',
          'By uniting evangelical Christians around social issues with corporate interests around deregulation and tax cuts',
          'By emphasizing racial equality and civil rights to attract minority voters',
          'By promising to expand Social Security and Medicare to attract older voters'
        ],
        answerIndex: 1,
        explanation: 'The New Right\'s genius was combining groups with different primary motivations: evangelical Christians motivated by abortion, school prayer, and moral decline; corporations and the wealthy motivated by taxes and regulation; and Cold War hawks motivated by anti-communism. This coalition held together under Reagan because each group got something. Appealing only to the wealthy (A) would not have produced electoral majorities. The New Right did not emphasize racial equality (C) or expand entitlements (D).'
      }
    ]
  },

  {
    id: 'neoconservatives',
    name: 'Neoconservatives',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Movements & Ideologies',
    tags: ['LEQ', 'causation'],
    summary: 'Political intellectuals, many former liberals, who argued for aggressive anti-communism abroad and rejected what they saw as the radical cultural changes threatening American institutions.',
    significance: 'Neoconservatives provided the intellectual framework for Reagan\'s aggressive Cold War posture and later for the George W. Bush administration\'s doctrine of pre-emptive war and democracy promotion in the Middle East — making them the ideological architects of U.S. foreign policy from the 1980s through the Iraq War. Their belief that American power should actively reshape the world rather than merely contain threats represented a significant departure from Cold War realism. For LEQ arguments about foreign policy continuity and change, neoconservatism is the bridge between Reagan\'s Cold War and Bush\'s War on Terror.',
    context: 'Neoconservatism emerged in the 1970s from former Cold War liberals disillusioned with the left\'s anti-war turn; figures like Irving Kristol and Norman Podhoretz shaped its intellectual core; Dick Cheney and Paul Wolfowitz carried it into the Bush administration.',
    themes: ['Politics and Power', 'America in the World'],
    connections: ['new-right', 'ronald-reagan', 'reagan-doctrine', 'invasion-of-iraq', 'al-qaeda-war-on-terror'],
    mcqs: []
  },

  {
    id: 'populist-conservatives',
    name: 'Populist Conservatives',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Movements & Ideologies',
    tags: [],
    summary: 'Grassroots conservative faction suspicious of elite power, centralized government, and hidden forces manipulating American life, forming part of Reagan\'s coalition.',
    significance: 'Populist conservatives voiced a deeply rooted American suspicion of concentrated power — whether governmental, corporate, or hidden elites — that gave the New Right its emotional energy beyond tax policy and anti-communism. This strand of conservatism, with its conspiracist tendencies, would re-emerge in later decades through the Tea Party and beyond, making it a useful comparison for arguments about continuity in American political culture.',
    context: 'Populist conservatives drew on a long tradition of American anti-elitism stretching back to Jacksonian democracy and the original Populist Party; their modern iteration channeled anxieties about globalization, cultural change, and government overreach.',
    themes: ['Politics and Power', 'American and National Identity'],
    connections: ['new-right', 'ronald-reagan', 'tea-party'],
    mcqs: []
  },

  {
    id: 'right-to-life-movement',
    name: 'Right-to-Life (Anti-Abortion) Movement',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Movements & Ideologies',
    tags: ['LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'Grassroots movement, anchored in Catholic and evangelical communities, that mobilized to restrict and ultimately overturn abortion rights following Roe v. Wade (1973).',
    significance: 'The right-to-life movement became one of the most sustained and ultimately successful social movements of the late 20th century, helping to build the evangelical-Republican coalition that elected Reagan and every subsequent Republican president, and culminating in the Supreme Court\'s Dobbs v. Jackson decision (2022) overturning Roe v. Wade. For LEQ and SAQ arguments about social movements and political change, this movement illustrates how grassroots organizing over decades can reshape both party coalitions and constitutional law. It also shows how "culture war" issues energized low-propensity voters into a powerful political force.',
    context: 'The movement emerged directly from Roe v. Wade (1973) and found institutional support in the Catholic Church and later the Protestant evangelical movement; Reagan\'s endorsement in 1980 formally aligned the Republican Party with the movement\'s goals.',
    themes: ['Politics and Power', 'American and National Identity', 'Social Structures'],
    connections: ['pro-choice-movement', 'new-right', 'ronald-reagan', 'bill-clinton'],
    mcqs: []
  },

  {
    id: 'pro-choice-movement',
    name: 'Pro-Choice Movement',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Movements & Ideologies',
    tags: ['SAQ', 'continuity-and-change', 'comparison'],
    summary: 'Movement defending women\'s reproductive rights and the legal right to abortion, countering the right-to-life movement\'s efforts to restrict abortion access.',
    significance: 'The pro-choice movement reframed abortion not just as a medical question but as a fundamental right to bodily autonomy, connecting reproductive rights to broader feminist arguments about women\'s equality and self-determination. Its strength under Clinton gave way to increased vulnerability under Bush, illustrating how social movements\' fortunes are tied to which party holds power. The movement\'s eventual loss at the Supreme Court with Dobbs (2022) demonstrates both the long-term consequences of judicial appointments and the stakes of the culture wars.',
    context: 'The pro-choice movement defended the framework established by Roe v. Wade (1973); Clinton was its ally and protected abortion rights during his presidency; the Reagan/Bush/Bush judicial appointments progressively shifted the Supreme Court against them.',
    themes: ['Social Structures', 'American and National Identity', 'Politics and Power'],
    connections: ['right-to-life-movement', 'bill-clinton', 'george-w-bush'],
    mcqs: []
  },

  {
    id: 'rise-of-islamic-fundamentalism',
    name: 'Rise of Islamic Fundamentalism',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Movements & Ideologies',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'Beginning with the Iranian Revolution (1979), radical Islamist movements proliferated across the Middle East and Asia, using terrorism to challenge Western influence and secular governments.',
    significance: 'The rise of Islamic fundamentalism transformed the global security environment and ultimately produced the 9/11 attacks that reshaped American domestic and foreign policy more profoundly than any event since Pearl Harbor. Understanding its origins — rooted in Cold War proxy conflicts, Western support for authoritarian Arab governments, and the Iranian Revolution — is essential context for evaluating American foreign policy decisions from the Reagan Doctrine (funding Afghan mujahideen) to the War on Terror. For LEQ causation arguments, this movement is the direct predecessor to al-Qaeda and 9/11.',
    context: 'The 1979 Iranian Revolution installed the first modern Islamist theocracy; the Soviet-Afghan War (1979–89) further radicalized Islamist fighters, some of whom later became al-Qaeda; U.S. support for these fighters during the Cold War had unintended consequences.',
    themes: ['America in the World', 'American and Regional Culture'],
    connections: ['al-qaeda-war-on-terror', 'reagan-doctrine', 'origins-of-terrorism', 'invasion-of-kuwait'],
    mcqs: []
  },

  {
    id: 'aids-epidemic',
    name: 'AIDS Epidemic',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Movements & Ideologies',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'HIV/AIDS epidemic that emerged in the early 1980s and killed hundreds of thousands of Americans, predominantly gay men, amid government indifference during the Reagan years.',
    significance: 'The AIDS crisis exposed the devastating consequences of the Reagan administration\'s failure to respond to a public health emergency because it primarily affected a stigmatized minority — gay men — whose suffering conservative America was willing to ignore. The epidemic galvanized the LGBTQ+ rights movement, producing organizations like ACT UP that used direct action to force government response, transforming gay men from victims into political actors. For DBQ and LEQ arguments about government responsibility, social movements, and civil rights, AIDS is one of the most powerful examples of the period: it connects Reagan-era social conservatism, public health, and the long struggle for LGBTQ+ equality.',
    context: 'AIDS was identified in 1981; Reagan did not publicly mention it until 1987 — by which point over 25,000 Americans had died; the epidemic also devastated communities in Africa and Haiti and transformed global public health policy.',
    themes: ['Social Structures', 'Politics and Power', 'American and National Identity'],
    connections: ['ronald-reagan', 'african-american-economic-progress', 'the-underclass'],
    mcqs: [
      {
        question: 'The Reagan administration\'s initial response to the AIDS epidemic is significant to historians primarily because it',
        options: [
          'Demonstrated Reagan\'s commitment to protecting vulnerable minority communities',
          'Revealed how political ideology and social stigma can determine which Americans receive government protection',
          'Showed that the federal government lacked the scientific capacity to respond to new diseases',
          'Led Reagan to increase funding for the Centers for Disease Control'
        ],
        answerIndex: 1,
        explanation: 'Reagan\'s refusal to acknowledge AIDS publicly for years while tens of thousands died is historically significant as evidence of how social stigma (against gay men) and conservative ideology shaped which communities received government intervention. It was not a commitment to protect minorities (A) — the opposite. The CDC had capacity (C) but was underfunded for AIDS research. Reagan cut CDC AIDS funding (D) rather than increasing it.'
      }
    ]
  },

  {
    id: 'tea-party',
    name: 'Tea Party Movement',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Movements & Ideologies',
    tags: ['SAQ', 'causation', 'continuity-and-change'],
    summary: 'Conservative grassroots movement that emerged in 2009 opposing Obama\'s stimulus, the ACA, and government spending, electing dozens of Congress members in the 2010 midterms.',
    significance: 'The Tea Party transformed the Republican Party from within, pushing it toward harder ideological positions and uncompromising opposition to Democratic legislation, which deepened Congressional gridlock and made bipartisan governance nearly impossible. Its energy came from the intersection of economic anxiety (2008 crisis), racial resentment of the first Black president, and libertarian anti-government ideology — a combination that proved electorally powerful in 2010 and presaged the more extreme populism of later years. For SAQ continuity arguments, the Tea Party represents the New Right\'s populist strand re-energized by new grievances.',
    context: 'The Tea Party coalesced in early 2009 after CNBC commentator Rick Santelli\'s on-air rant about mortgage bailouts; it channeled opposition to TARP, the stimulus, and Obamacare; it elected over 60 House members in 2010, giving Republicans their majority.',
    themes: ['Politics and Power', 'American and National Identity'],
    connections: ['barack-obama', 'affordable-care-act', 'stimulus-package-2009', 'financial-crisis-2008', 'populist-conservatives', 'political-gridlock-obama'],
    mcqs: []
  },

  {
    id: 'occupy-wall-street',
    name: 'Occupy Wall Street',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Movements & Ideologies',
    tags: ['SAQ', 'causation'],
    summary: 'Protest movement launched in September 2011 that encamped in New York\'s Zuccotti Park to protest economic inequality and corporate influence over democracy under the slogan "We are the 99%."',
    significance: 'Occupy Wall Street placed income inequality and the power of the "1%" at the center of American political discourse, shifting the national conversation in ways that influenced progressive politics for the next decade — from Bernie Sanders\' campaigns to the progressive wing of the Democratic Party. The movement demonstrated both the power and limitations of leaderless horizontal organizing: it changed the narrative but lacked the organizational infrastructure to translate protests into policy. For SAQ arguments about economic inequality and political mobilization, Occupy is essential alongside Citizens United.',
    context: 'Occupy emerged in the aftermath of the 2008 financial crisis and the bailout of Wall Street banks; inspired by the Arab Spring, it spread to over 900 cities globally before police cleared encampments in late 2011.',
    themes: ['Social Structures', 'Politics and Power', 'Work, Exchange, and Technology'],
    connections: ['financial-crisis-2008', 'citizens-united', 'barack-obama', 'nafta'],
    mcqs: []
  },

  {
    id: 'black-lives-matter',
    name: 'Black Lives Matter',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Movements & Ideologies',
    tags: ['SAQ', 'continuity-and-change'],
    summary: 'Civil rights movement founded in 2013 in response to the acquittal of Trayvon Martin\'s killer, which grew into a national movement against police brutality and systemic racism.',
    significance: 'Black Lives Matter represents the continuation of African American civil rights activism into the 21st century, arguing that formal legal equality achieved in the 1960s has not translated into equal protection under law — particularly in interactions with police. The movement sparked the largest sustained protest wave in American history following George Floyd\'s murder in 2020 and forced national conversations about policing, criminal justice reform, and structural racism. For continuity-and-change SAQ arguments, BLM illustrates both the progress since the civil rights movement and the persistent racial inequalities it left unaddressed.',
    context: 'Founded by Alicia Garza, Patrisse Cullors, and Opal Tometi after George Zimmerman\'s acquittal in 2013; the movement grew through the Ferguson uprising (2014) and exploded globally following George Floyd\'s murder in May 2020.',
    themes: ['Social Structures', 'American and National Identity', 'Politics and Power'],
    connections: ['african-american-economic-progress', 'the-underclass', 'barack-obama'],
    mcqs: []
  },

  // ─── ECONOMIC CONCEPTS ────────────────────────────────────────────────────

  {
    id: 'soaring-national-debt',
    name: 'Soaring National Debt',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Economic Concepts',
    tags: ['LEQ', 'causation', 'continuity-and-change'],
    summary: 'The U.S. national debt tripled during the Reagan years — accumulating more debt than in the entire preceding history of the republic — driven by tax cuts and increased military spending.',
    significance: 'The explosion of national debt under Reagan directly contradicted supply-side predictions that tax cuts would pay for themselves through growth, and set a precedent of deficit spending that subsequent Republican administrations (Bush, Trump) replicated. The debt constrained government\'s ability to fund social programs and infrastructure, contributing to the widening of inequality over the subsequent decades. For LEQ arguments about economic continuity and change, the trajectory of national debt from Reagan through the 21st century is crucial evidence against supply-side economics.',
    context: 'Before Reagan, the national debt was approximately $1 trillion; by the end of his two terms it was nearly $3 trillion; it continued to grow under Bush I, was partially arrested under Clinton\'s surplus, then exploded again under Bush II\'s tax cuts and wars.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power'],
    connections: ['reaganomics', 'deregulation', 'ronald-reagan', 'welfare-benefits-cut', 'bush-tax-cuts'],
    mcqs: []
  },

  {
    id: 'welfare-benefits-cut',
    name: 'Welfare Cuts Under Reagan',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Economic Concepts',
    tags: ['LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'Reagan\'s Omnibus Budget Reconciliation Act (1981) cut federal spending on food stamps, Medicaid, housing assistance, and other programs while military spending surged.',
    significance: 'Reagan\'s welfare cuts represented the first significant rollback of the New Deal/Great Society social safety net, disproportionately harming poor and minority Americans while military budgets increased — a reallocation of federal priorities that deepened inequality and poverty. The cuts also accelerated the deterioration of inner-city communities by reducing federal housing, education, and anti-poverty funding, contributing directly to the social crises (drugs, crime, homelessness) of the 1980s. For LEQ continuity-and-change arguments, these cuts mark the turning point from New Deal liberalism to market-oriented conservatism.',
    context: 'The cuts were politically enabled by the "welfare queen" rhetoric that Reagan employed to build public support for reducing programs associated with Black poverty; they contrasted sharply with Reagan\'s simultaneous increases in defense spending.',
    themes: ['Social Structures', 'Politics and Power', 'Work, Exchange, and Technology'],
    connections: ['reaganomics', 'ronald-reagan', 'soaring-national-debt', 'the-underclass', 'african-american-economic-progress'],
    mcqs: []
  },

  {
    id: 'new-business-practices',
    name: 'New Business Practices & Deindustrialization',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Economic Concepts',
    tags: ['LEQ', 'causation', 'continuity-and-change'],
    summary: 'Post-1970s shift in the American economy from manufacturing to services, driven by globalization, technology investment, and corporations\' move toward cheap offshore labor.',
    significance: 'Deindustrialization hollowed out the American manufacturing sector and with it the union movement, steadily eroding the middle-class wages that had been built since World War II — making it one of the central economic stories of the era. Corporate investment in technology and the shift to cheap labor markets (accelerated by NAFTA) created enormous wealth for shareholders and executives while displacing millions of blue-collar workers, driving the income inequality that would fuel populist anger from both left and right in subsequent decades. For LEQ arguments about economic transformation, deindustrialization is the structural foundation.',
    context: 'The transition from an industrial to a service and knowledge economy began in the 1970s with stagflation and competition from rebuilt European and Japanese manufacturers; it accelerated through the 1980s–90s as deregulation and globalization removed barriers to offshoring.',
    themes: ['Work, Exchange, and Technology', 'Social Structures', 'Migration and Settlement'],
    connections: ['nafta', 'technology-industries', 'reaganomics', 'deregulation', 'financial-crisis-2008'],
    mcqs: []
  },

  {
    id: 'technology-industries',
    name: 'Technology Industries & the Digital Revolution',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Economic Concepts',
    tags: ['LEQ', 'SAQ', 'causation', 'continuity-and-change'],
    summary: 'The rise of personal computers, the internet, and digital industries transformed the American economy in the 1990s–2000s, creating vast new wealth while also disrupting traditional employment.',
    significance: 'The technology revolution produced the 1990s boom that Clinton presided over, generated new forms of communication and commerce, and created billionaire class dominance in the new economy — deepening wealth concentration even as it raised overall productivity. The digital economy also undermined traditional media and information gatekeepers, eventually enabling the social media environment that altered political discourse and enabled disinformation. For LEQ arguments about economic change, the tech revolution and its social consequences are the defining transformation of the late 20th and early 21st centuries.',
    context: 'Intel\'s microprocessor (1971) enabled the personal computer revolution; Apple and IBM PCs entered homes in the early 1980s; ARPA\'s internet became the World Wide Web in 1991; the dot-com boom peaked in 2000 before crashing; social media platforms proliferated in the 2000s–2010s.',
    themes: ['Work, Exchange, and Technology', 'American and Regional Culture', 'Social Structures'],
    connections: ['world-wide-web', 'arpa', 'development-of-the-pc', 'social-media', 'new-business-practices', 'globalization-protests'],
    mcqs: [
      {
        question: 'The rise of technology industries in the 1990s most directly contributed to which economic development?',
        options: [
          'A reduction in income inequality as technology jobs were accessible to all Americans',
          'The longest economic expansion in U.S. history, accompanied by growing wealth concentration at the top',
          'A revival of American manufacturing as tech companies built factories domestically',
          'The elimination of the federal budget deficit through massive tech-sector tax revenues'
        ],
        answerIndex: 1,
        explanation: 'The 1990s tech boom produced the longest peacetime economic expansion in U.S. history, but the gains were highly concentrated — technology wealth flowed disproportionately to educated workers and investors, widening the income gap. Reducing inequality (A) is the opposite of what occurred. Tech companies did not revive manufacturing (C) — they tended to offshore hardware production. Clinton\'s surpluses came partly from tech growth but also from tax increases (D); the tech sector alone did not eliminate the deficit.'
      }
    ]
  },

  {
    id: 'opioid-crisis',
    name: 'Opioid Crisis',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Economic Concepts',
    tags: ['SAQ', 'causation'],
    summary: 'Beginning in the late 1990s, overprescription of opioid painkillers triggered a wave of addiction and overdose deaths that killed 500,000 Americans between 1999 and 2019 and cost $80 billion annually.',
    significance: 'The opioid crisis illustrated how deregulated pharmaceutical marketing — drugmakers like Purdue Pharma deliberately misrepresented oxycodone\'s addiction potential — combined with inadequate government oversight to create a public health catastrophe that devastated predominantly white working-class and rural communities. The crisis highlighted how economic despair following deindustrialization made communities vulnerable to addiction, and how pharmaceutical industry lobbying had shaped regulatory failures. For SAQ arguments about corporate power and government responsibility, the opioid crisis is powerful contemporary evidence.',
    context: 'Opioid prescriptions surged after Purdue Pharma\'s 1996 marketing of OxyContin; when the government restricted prescriptions, users turned to cheaper heroin and fentanyl; overdose deaths continue to rise, exceeding 80,000 annually by the early 2020s.',
    themes: ['Social Structures', 'Work, Exchange, and Technology'],
    connections: ['the-underclass', 'new-business-practices', 'deregulation'],
    mcqs: []
  },

  {
    id: 'african-american-economic-progress',
    name: 'African American Economic Progress & Limits',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Economic Concepts',
    tags: ['LEQ', 'SAQ', 'continuity-and-change', 'comparison'],
    summary: 'By 2000, over half of African Americans had entered the middle class — a remarkable post-civil rights achievement — while a third remained trapped in persistent poverty with unemployment above 60%.',
    significance: 'The bifurcation of Black America into a thriving middle class and a deeply disadvantaged "underclass" demonstrates both the successes and limits of the civil rights movement: formal legal equality and anti-discrimination laws enabled upward mobility for many, while structural factors including deindustrialization, drug enforcement policy, and welfare cuts trapped others in cycles of poverty. This dual reality is essential evidence for nuanced DBQ and LEQ arguments about whether the late 20th century represented progress or persistent inequality for African Americans. The contrast also reveals how class divisions within minority communities complicate simple narratives.',
    context: 'The civil rights movement\'s legislative victories of 1964–65 opened professional and educational opportunities; the Black middle class expanded through the 1970s–90s; simultaneously, Reagan\'s welfare cuts, deindustrialization, and the crack cocaine epidemic devastated inner-city communities.',
    themes: ['Social Structures', 'American and National Identity', 'Work, Exchange, and Technology'],
    connections: ['the-underclass', 'welfare-benefits-cut', 'aids-epidemic', 'black-lives-matter', 'hurricane-katrina'],
    mcqs: []
  },

  {
    id: 'the-underclass',
    name: 'The "Underclass" and Urban Poverty',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Economic Concepts',
    tags: ['LEQ', 'causation', 'continuity-and-change'],
    summary: 'Roughly a third of Black Americans, disproportionately in inner cities, experienced deepening poverty in the 1980s–90s: over 60% unemployed, high school dropout rates above 50%, and drug epidemics fed by gang networks.',
    significance: 'The persistence of a structurally poor "underclass" alongside the expanding Black middle class demonstrates that civil rights legislation was necessary but insufficient to overcome the compounding effects of historical exclusion, deindustrialization, and Reagan-era welfare cuts. The War on Drugs, which disproportionately incarcerated Black men for non-violent drug offenses, intensified poverty by removing breadwinners and barring ex-felons from housing and employment assistance. For LEQ continuity-and-change arguments, the "underclass" shows that racial economic inequality persisted — and in some ways worsened — despite formal legal equality.',
    context: 'The "underclass" concept emerged in academic and journalistic discourse in the 1980s; debates about its causes divided along ideological lines — conservatives blamed individual behavior, progressives blamed structural discrimination and policy failure; the crack cocaine epidemic of the late 1980s accelerated its deterioration.',
    themes: ['Social Structures', 'Work, Exchange, and Technology', 'Migration and Settlement'],
    connections: ['african-american-economic-progress', 'welfare-benefits-cut', 'opioid-crisis', 'aids-epidemic', 'black-lives-matter'],
    mcqs: []
  },

  // ─── FOREIGN POLICY ───────────────────────────────────────────────────────

  {
    id: 'reagan-doctrine',
    name: 'Reagan Doctrine',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Foreign Policy',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'Reagan\'s foreign policy strategy of actively funding and arming anti-communist rebel groups — including in Nicaragua, Afghanistan, and Angola — to roll back Soviet-backed regimes rather than merely containing communism.',
    significance: 'The Reagan Doctrine marked a major shift from Containment to active rollback of Soviet influence, reflecting neoconservative arguments that détente had been weak-willed; in Nicaragua it produced the Iran-Contra scandal, and in Afghanistan the U.S.-funded mujahideen included fighters who later became al-Qaeda — making the doctrine\'s unintended consequences among the most consequential of the period. For LEQ causation arguments about both the Cold War\'s end and the origins of terrorism, the Reagan Doctrine is indispensable. It also illustrates the recurring American tendency to support authoritarian forces against communism regardless of human rights consequences.',
    context: 'The Reagan Doctrine replaced Carter\'s human rights-centered foreign policy and Nixon\'s détente; it was operationalized through CIA funding and arms transfers; in Afghanistan it intensified the Soviet quagmire that helped bankrupt the USSR.',
    themes: ['America in the World', 'Politics and Power'],
    connections: ['ronald-reagan', 'iran-contra', 'neoconservatives', 'rise-of-islamic-fundamentalism', 'al-qaeda-war-on-terror', 'dissolution-of-the-ussr'],
    mcqs: [
      {
        question: 'The most significant long-term unintended consequence of the Reagan Doctrine was',
        options: [
          'The spread of democracy throughout Latin America',
          'The inadvertent arming and training of fighters who later formed or joined al-Qaeda',
          'The permanent defeat of Soviet-backed communism in Africa',
          'The weakening of U.S. military alliances in Western Europe'
        ],
        answerIndex: 1,
        explanation: 'U.S. funding and arming of Afghan mujahideen to fight the Soviets created battle-hardened Islamist fighters and networks that later contributed to al-Qaeda\'s formation — the classic blowback scenario that directly connected Reagan\'s Cold War strategy to the 9/11 attacks. Democracy in Latin America (A) was mixed at best; the Contras did not democratize Nicaragua. Soviet-backed communism in Africa (C) was not permanently defeated. U.S.-European alliances (D) were strengthened by Reagan\'s anti-Soviet stance.'
      }
    ]
  },

  {
    id: 'sdi',
    name: 'Strategic Defense Initiative (SDI / "Star Wars")',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Foreign Policy',
    tags: ['SAQ', 'causation'],
    summary: 'Reagan\'s 1983 proposal to develop a space-based missile defense system that would render nuclear weapons obsolete, nicknamed "Star Wars" and ultimately never successfully deployed.',
    significance: 'SDI was strategically significant whether or not it actually worked: it alarmed Soviet military planners who worried the U.S. might achieve a first-strike capability, pressuring the USSR to accelerate an arms race it could not afford and contributing to the economic strain that hastened Soviet collapse. At the same time, SDI\'s failure to produce an operational system reinforced critics\' arguments about the limits of military spending as foreign policy. Reagan\'s refusal to trade SDI for dramatic arms reductions at the Reykjavik summit (1986) also showed the ideological rigidity that defined his foreign policy.',
    context: 'SDI was announced in March 1983 as a futuristic research program; Gorbachev made abandoning SDI a precondition for major arms reduction; Reagan refused; limited versions were developed and became the basis for today\'s missile defense programs and conceptually the U.S. Space Force.',
    themes: ['America in the World', 'Work, Exchange, and Technology'],
    connections: ['ronald-reagan', 'mikhail-gorbachev', 'dissolution-of-the-ussr', 'end-of-cold-war', 'reagan-doctrine'],
    mcqs: []
  },

  {
    id: 'al-qaeda-war-on-terror',
    name: 'Al-Qaeda & the War on Terror',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Foreign Policy',
    tags: ['DBQ frequent', 'LEQ', 'SAQ', 'causation'],
    summary: 'Al-Qaeda\'s 9/11 attacks (2001) killed nearly 3,000 Americans and triggered a global War on Terror, including invasions of Afghanistan and Iraq, mass surveillance, and Guantanamo Bay detention.',
    significance: 'September 11 was the most transformative single event of Period 9, fundamentally reshaping American foreign policy from post-Cold War retrenchment debates to open-ended global counter-terrorism campaigns that lasted over two decades, cost trillions, and killed hundreds of thousands. The resulting PATRIOT Act and surveillance state represented the most significant expansion of government power at the expense of civil liberties since WWII; Guantanamo\'s detention of suspects without trial violated habeas corpus and damaged America\'s international standing. For DBQ and LEQ arguments about continuity and change in American foreign policy and civil liberties, 9/11 is the pivotal event.',
    context: '9/11 was carried out by 19 hijackers affiliated with al-Qaeda; the U.S. invaded Afghanistan in October 2001, toppling the Taliban government that harbored bin Laden; Osama bin Laden was not killed until 2011 under Obama; the 2003 Iraq invasion — based on false WMD claims — became a separate and far more costly conflict.',
    themes: ['America in the World', 'Politics and Power', 'American and National Identity'],
    connections: ['george-w-bush', 'reagan-doctrine', 'rise-of-islamic-fundamentalism', 'patriot-act', 'neoconservatives', 'invasion-of-iraq', 'invasion-of-kuwait'],
    mcqs: [
      {
        question: 'The 9/11 attacks most directly caused which LASTING change in American domestic policy?',
        options: [
          'The elimination of the federal budget deficit through emergency wartime spending cuts',
          'The creation of a vast domestic surveillance apparatus authorized by the PATRIOT Act',
          'The reinstatement of the military draft to staff expanded armed forces',
          'The withdrawal of U.S. forces from NATO commitments in Europe'
        ],
        answerIndex: 1,
        explanation: 'The most lasting domestic policy consequence of 9/11 was the surveillance state authorized by the PATRIOT Act — mass collection of phone and internet records, expanded wiretapping, and intelligence agency powers — revealed in full by Snowden\'s 2013 leaks. The deficit (A) exploded with war spending rather than being eliminated. The military draft (C) was not reinstated; the U.S. used an all-volunteer military. NATO commitments (D) were maintained and invoked (Article 5 was triggered in response to 9/11).'
      },
      {
        question: 'Historians connecting the Reagan Doctrine to the 9/11 attacks would emphasize which of the following?',
        options: [
          'Reagan\'s refusal to fund Afghan rebels left them poorly equipped to resist Soviet influence',
          'U.S. funding of Afghan mujahideen against the Soviets created battle networks that later became al-Qaeda',
          'Reagan\'s strong stance against terrorism prevented any attacks during the 1980s',
          'The Reagan administration\'s support for Iran strengthened Islamist movements globally'
        ],
        answerIndex: 1,
        explanation: 'The "blowback" argument holds that CIA funding and weapons provided to Afghan mujahideen fighters (including Arabs like Osama bin Laden who came to fight the Soviets) created the organizational and military infrastructure that later became al-Qaeda. Reagan funded rebels heavily (A is wrong). There were terrorist attacks in the 1980s including the Beirut barracks bombing (C is wrong). Reagan sold weapons to Iran (Iran-Contra) but framed it around hostages, not broadly strengthening Islamism (D misframes it).'
      }
    ]
  },

  {
    id: 'invasion-of-iraq',
    name: 'Iraq War (2003)',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Foreign Policy',
    tags: ['LEQ', 'SAQ', 'causation'],
    summary: 'The U.S. invaded Iraq in March 2003, toppling Saddam Hussein based on intelligence claims of WMDs later proven false, leading to an eight-year occupation with massive human and financial costs.',
    significance: 'The Iraq War represented the most consequential foreign policy decision since Vietnam: justified by flawed intelligence and neoconservative ideology, it destabilized the Middle East, created a power vacuum that spawned ISIS, cost over 4,400 American lives and $2 trillion, and deeply damaged American credibility and soft power globally. The failure to find WMDs eroded public trust in government intelligence assessments and made the public far more skeptical of future military interventions. For LEQ and SAQ arguments about post-Cold War American foreign policy, Iraq is the defining failure that contrasts with the Gulf War\'s quick success.',
    context: 'Bush administration officials made the case for invasion based on alleged Iraqi WMDs and claimed links to al-Qaeda; no WMDs were found; the rapid military victory over Saddam\'s forces was followed by years of insurgency, sectarian violence, and instability.',
    themes: ['America in the World', 'Politics and Power'],
    connections: ['george-w-bush', 'al-qaeda-war-on-terror', 'neoconservatives', 'invasion-of-kuwait', 'critics-of-intervention'],
    mcqs: []
  },

  {
    id: 'critics-of-intervention',
    name: 'Critics of U.S. Interventionism & Globalization',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Foreign Policy',
    tags: ['SAQ', 'comparison', 'continuity-and-change'],
    summary: 'Post-Cold War critics from both left and right challenged American military interventionism and economic globalization, arguing they served corporate interests at the expense of workers, sovereignty, and human rights.',
    significance: 'Anti-interventionist and anti-globalization critiques challenged the bipartisan Washington consensus that free trade and liberal interventionism were automatically beneficial, articulating concerns that proved prescient about deindustrialization, democratic backsliding in recipient countries, and the blowback from regime change. These critics represent a continuity-and-change argument: a new form of the old American debate between internationalism and restraint that stretches back to debates over the League of Nations and Vietnam. For comparison SAQs, left and right critiques of intervention share surprising common ground despite their different premises.',
    context: 'Anti-globalization protests at the 1999 Seattle WTO meeting brought together labor unions, environmentalists, and human rights activists; anti-war sentiment before the Iraq War produced the largest pre-war protest in history; critics on the right, like Pat Buchanan, opposed nation-building from a nationalist perspective.',
    themes: ['America in the World', 'Politics and Power', 'Work, Exchange, and Technology'],
    connections: ['nafta', 'globalization-protests', 'invasion-of-iraq', 'invasion-of-kuwait', 'kosovo'],
    mcqs: []
  },

  {
    id: 'diplomatic-efforts-obama',
    name: 'Obama-Era Diplomacy (Iran Nuclear Deal, Cuba Normalization, TPP)',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Foreign Policy',
    tags: ['SAQ'],
    summary: 'Obama\'s multilateral diplomacy achieved the Iran nuclear deal (JCPOA), restored U.S.-Cuba relations after 50 years, and negotiated the Trans-Pacific Partnership trade agreement.',
    significance: 'Obama\'s diplomatic initiatives represented a shift from Bush-era unilateralism toward multilateral engagement and negotiation — a sharp contrast that illustrates the continuity-and-change in post-Cold War foreign policy. The Iran deal showed that diplomatic frameworks could constrain nuclear programs without war, while Cuba normalization ended a 54-year anachronism of Cold War policy. However, all three were reversed or abandoned by the Trump administration, raising questions about whether policy changes without congressional ratification can be sustained across administrations.',
    context: 'Obama entered office pledging to restore American diplomatic standing after the Iraq War\'s damage; the Iran JCPOA was signed in 2015; Cuba normalization was announced in December 2014; TPP was negotiated but never ratified by the Senate; Trump withdrew from both Iran deal and TPP.',
    themes: ['America in the World', 'Politics and Power'],
    connections: ['barack-obama', 'al-qaeda-war-on-terror', 'political-gridlock-obama'],
    mcqs: []
  },

  // ─── SUPPLEMENTAL EVENTS & CONCEPTS ──────────────────────────────────────

  {
    id: 'proposition-13',
    name: 'Proposition 13 (1978) & the Tax Revolt',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['LEQ', 'causation'],
    summary: 'California\'s 1978 ballot initiative that slashed property taxes and capped future increases, becoming the model for the national anti-tax movement that propelled Reagan to power.',
    significance: 'Proposition 13 demonstrated that conservatives could achieve major policy victories by limiting government revenue rather than attacking popular programs directly — a strategic insight that became the foundation of Reagan\'s tax-cutting agenda. By starving government of revenue, the tax revolt forced cuts to public services by default rather than by politically suicidal direct votes. For causation arguments about how Reagan\'s economic agenda gained momentum, Proposition 13 is the critical precursor that proved the political viability of the approach.',
    context: 'Property taxes had surged across California due to inflation-driven home value increases; Prop 13 passed with 65% of the vote in June 1978; it inspired similar measures in other states and fed directly into Reagan\'s 1980 platform.',
    themes: ['Politics and Power', 'Work, Exchange, and Technology'],
    connections: ['new-right', 'ronald-reagan', 'reaganomics', '1980-election'],
    mcqs: []
  },

  {
    id: 'development-of-the-pc',
    name: 'Development of the Personal Computer',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: [],
    summary: 'Intel\'s microprocessor (1971) enabled Apple (1977) and IBM (1981) to produce personal computers for home and office use, launching the digital revolution.',
    significance: 'The personal computer democratized access to computing power and laid the foundation for the internet economy, transforming work, education, and communication in ways that restructured the entire American economy. The PC industry created entirely new sectors of employment while simultaneously enabling automation that eliminated many traditional jobs, embodying the paradox of technological progress throughout American history.',
    context: 'The PC emerged from corporate R&D labs funded partly by Cold War defense research; Apple and IBM competed for early dominance; by the mid-1980s PCs were standard office equipment, and by the 1990s they were in millions of homes.',
    themes: ['Work, Exchange, and Technology'],
    connections: ['technology-industries', 'world-wide-web', 'arpa', 'new-business-practices'],
    mcqs: []
  },

  {
    id: 'arpa',
    name: 'ARPA / ARPANET',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: [],
    summary: 'The Defense Department\'s Advanced Research Projects Agency funded ARPANET in 1969, the packet-switching network that became the technical foundation of the modern internet.',
    significance: 'ARPA represents a crucial example of federal government investment in basic research producing transformative civilian technology — the internet, which by the late 1990s had become the engine of the entire economy. This irony — that the anti-government Reagan era rode an economic boom built on government-funded research — is relevant for arguments about the role of public investment in economic growth.',
    context: 'ARPANET connected four university computers in 1969; Tim Berners-Lee developed the World Wide Web protocol in 1989–91; federal funding was handed off to commercial internet service providers in the early 1990s.',
    themes: ['Work, Exchange, and Technology', 'America in the World'],
    connections: ['world-wide-web', 'development-of-the-pc', 'technology-industries'],
    mcqs: []
  },

  {
    id: 'world-wide-web',
    name: 'World Wide Web',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: [],
    summary: 'Tim Berners-Lee\'s 1991 system for publishing and retrieving information over the internet, which transformed ARPANET from a research tool into a global information and commerce platform.',
    significance: 'The World Wide Web enabled the 1990s economic boom, democratized access to information globally, and ultimately gave rise to social media platforms that transformed political communication — including the spread of misinformation — making it one of the most consequential technological developments in American history. Its emergence under Clinton illustrates how technology policy and economic growth are intertwined.',
    context: 'Berners-Lee developed the Web at CERN in Switzerland; commercial web browsers (Mosaic, Netscape) in 1993–95 brought it to mass audiences; by 1999 the dot-com bubble had made internet companies the most valuable in the world.',
    themes: ['Work, Exchange, and Technology', 'American and Regional Culture'],
    connections: ['arpa', 'development-of-the-pc', 'technology-industries', 'social-media'],
    mcqs: []
  },

  {
    id: 'social-media',
    name: 'Social Media',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['SAQ', 'continuity-and-change'],
    summary: 'Platforms like Facebook (2004), YouTube (2005), Twitter (2006), Instagram (2010), and TikTok (2016) transformed communication, commerce, political organizing, and the spread of information and misinformation.',
    significance: 'Social media platforms restructured political communication by bypassing traditional gatekeepers (mainstream media, party organizations), enabling both grassroots movements (Arab Spring, Black Lives Matter, Occupy) and the viral spread of misinformation that affected electoral outcomes. The economic model of social media — engagement maximization rewarding outrage and extremism — has been linked to increased political polarization. For SAQ arguments about continuity and change in American political culture, social media represents an unprecedented shift in how citizens engage with politics.',
    context: 'Social media emerged from Web 2.0 technologies in the mid-2000s; Facebook reached 1 billion users by 2012; social media\'s role in the 2016 election (including Russian interference through Facebook) made it a central political issue.',
    themes: ['Work, Exchange, and Technology', 'American and Regional Culture', 'Politics and Power'],
    connections: ['world-wide-web', 'technology-industries', 'black-lives-matter', 'occupy-wall-street'],
    mcqs: []
  },

  {
    id: 'globalization-protests',
    name: 'Anti-Globalization Protests',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['SAQ', 'comparison'],
    summary: 'Mass protests at the 1999 Seattle WTO meeting, the 2001 Genoa G8 summit, and other venues challenged global trade organizations as instruments of corporate power over workers and the environment.',
    significance: 'The Seattle protests (the "Battle in Seattle") were the first major political mobilization against economic globalization and presaged later movements like Occupy Wall Street and Bernie Sanders\'s campaigns in targeting economic inequality and corporate power. The movement united labor unions, environmentalists, and developing-world advocates in a coalition that crossed traditional political lines, making it useful for comparison arguments about how economic anxiety generates cross-ideological coalitions.',
    context: 'The 1999 WTO protests disrupted the Millennium Round of trade talks; protesters argued that institutions like the WTO, IMF, and World Bank imposed austerity and market liberalization on poor countries while benefiting multinational corporations.',
    themes: ['Work, Exchange, and Technology', 'America in the World', 'Politics and Power'],
    connections: ['nafta', 'critics-of-intervention', 'occupy-wall-street', 'technology-industries'],
    mcqs: []
  },

  {
    id: 'origins-of-terrorism',
    name: 'Origins of Modern Terrorism',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['SAQ', 'causation'],
    summary: 'Modern international terrorism evolved through the late 20th century — from the 1983 Beirut barracks bombing to the 1998 embassy bombings and Oklahoma City bombing — before culminating in 9/11.',
    significance: 'The pre-9/11 pattern of terrorist attacks — which included both international Islamist groups and domestic right-wing terrorism (Oklahoma City 1995) — demonstrated that terrorism was a diverse and growing threat that the government was slow to address comprehensively. The failure to connect the dots before 9/11 reflected systemic failures in intelligence sharing that were then overcorrected via mass surveillance. For SAQ causation arguments, this context shows that 9/11 was not a bolt from the blue but the culmination of a decade of warning signs.',
    context: 'The 1983 Beirut bombing killed 241 U.S. Marines; the 1993 World Trade Center bombing was al-Qaeda\'s first major U.S. attack; the 1995 Oklahoma City bombing by Timothy McVeigh killed 168 in the deadliest domestic terror attack before 9/11; embassy bombings in Africa in 1998 prefigured 9/11.',
    themes: ['America in the World', 'Politics and Power'],
    connections: ['al-qaeda-war-on-terror', 'rise-of-islamic-fundamentalism', 'reagan-doctrine', 'patriot-act'],
    mcqs: []
  },

  {
    id: 'failure-of-healthcare-reform',
    name: 'Failure of Clinton Healthcare Reform (1994)',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['SAQ', 'causation', 'continuity-and-change'],
    summary: 'Hillary Clinton\'s proposed universal health coverage plan collapsed in 1994 amid industry opposition and the famous "Harry and Louise" ad campaign, contributing to Democratic losses in the midterms.',
    significance: 'The 1994 healthcare defeat illustrates the power of industry lobbying and public fear of government expansion to block major social legislation, establishing a template that the insurance industry and Republican Party would again deploy against the ACA in 2009–10. Clinton\'s defeat also contributed to the 1994 "Republican Revolution" that gave Republicans control of Congress for the first time since 1952, fundamentally altering the political landscape for the rest of his presidency. For SAQ continuity-and-change arguments, comparing 1994 and 2010 shows what changed and what stayed the same in health care politics.',
    context: 'Clinton\'s Health Security Act was introduced in October 1993; the insurance industry spent $100 million opposing it; the plan died in Congress without a floor vote in September 1994; the subsequent Republican takeover was led by Newt Gingrich\'s "Contract with America."',
    themes: ['Politics and Power', 'Social Structures'],
    connections: ['bill-clinton', 'affordable-care-act', 'political-gridlock'],
    mcqs: []
  },

  {
    id: 'budget-surpluses',
    name: 'Clinton Budget Surpluses',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Economic Concepts',
    tags: ['SAQ', 'comparison'],
    summary: 'By 1998, Clinton\'s combination of tax increases, spending restraint, and economic boom produced the first federal budget surplus in 30 years, running $236 billion by 2000.',
    significance: 'Clinton\'s surpluses proved that fiscal discipline — including tax increases on the wealthy — could eliminate deficits produced by Reagan-Bush tax cuts, directly challenging supply-side orthodoxy\'s claim that deficits were inevitable without lower taxes. The surpluses were then eliminated by Bush\'s 2001 tax cuts and war spending within two years, making the contrast a powerful argument for comparison essays about tax and fiscal policy. Clinton\'s success also showed that economic growth and deficit reduction were compatible.',
    context: 'The 1993 Deficit Reduction Act, which passed without a single Republican vote, raised the top income tax rate; combined with the 1990s tech boom\'s windfall revenues, it converted Reagan-era deficits to surpluses; the CBO projected surpluses for a decade before Bush\'s tax cuts and recession ended them.',
    themes: ['Work, Exchange, and Technology', 'Politics and Power'],
    connections: ['bill-clinton', 'reaganomics', 'soaring-national-debt', 'bush-tax-cuts'],
    mcqs: []
  },

  {
    id: 'monica-lewinsky-impeachment',
    name: 'Monica Lewinsky Scandal & Clinton Impeachment',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['SAQ'],
    summary: 'Clinton was impeached by the House in December 1998 on charges of perjury and obstruction of justice related to his affair with intern Monica Lewinsky, then acquitted by the Senate in February 1999.',
    significance: 'Clinton\'s impeachment illustrated the weaponization of the impeachment process for partisan purposes and the deepening of political polarization — the Republican House pursued impeachment despite Clinton\'s high approval ratings (67%), and the Senate acquittal fell entirely along partisan lines. The affair itself became a flashpoint in the ongoing culture war, with conservatives framing it as a character issue and Clinton defenders as a private matter. For SAQ arguments about political polarization, Clinton\'s impeachment is a key escalation point.',
    context: 'Independent Counsel Kenneth Starr\'s investigation began as an inquiry into Whitewater real estate dealings; it expanded to the Lewinsky affair; the House approved two articles of impeachment on December 19, 1998; the Senate acquitted Clinton on both counts on February 12, 1999.',
    themes: ['Politics and Power', 'American and National Identity'],
    connections: ['bill-clinton', 'political-gridlock', 'clinton-v-dole-1996'],
    mcqs: []
  },

  {
    id: 'clinton-v-dole-1996',
    name: '1996 Presidential Election (Clinton v. Dole)',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: [],
    summary: 'Clinton won reelection decisively over Republican senator Bob Dole, confirming that his centrist Democratic approach could sustain majority coalitions.',
    significance: 'Clinton\'s 1996 landslide reelection validated the "Third Way" centrist Democratic strategy of combining economic growth, welfare reform, and fiscal discipline with social liberalism, suggesting that the party had found a winning post-Reagan formula. His victory was the first Democratic reelection since FDR in 1944.',
    context: 'Clinton ran on welfare reform (signed in 1996), the strong economy, and NAFTA\'s trade growth; Dole struggled to generate enthusiasm; Clinton won 379 electoral votes, carrying even some traditionally Republican suburban areas.',
    themes: ['Politics and Power'],
    connections: ['bill-clinton', 'nafta', 'budget-surpluses'],
    mcqs: []
  },

  {
    id: 'nsa-controversy',
    name: 'NSA Surveillance Controversy (Snowden Leaks)',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['SAQ', 'continuity-and-change'],
    summary: 'Edward Snowden\'s 2013 leak of classified NSA documents revealed that the U.S. government had built a massive surveillance apparatus monitoring the phone calls and internet activity of millions of Americans.',
    significance: 'The Snowden revelations exposed the full scope of post-9/11 surveillance expansion and forced a national debate about whether the security apparatus had grown so large as to fundamentally threaten privacy rights and civil liberties in ways inconsistent with constitutional protections. For continuity-and-change SAQ arguments, NSA surveillance fits into the long pattern of wartime surveillance — COINTELPRO, Nixon\'s wiretapping — while also representing something qualitatively new in its technological reach and mass scale.',
    context: 'Snowden leaked documents to journalists Glenn Greenwald and Laura Poitras while in Hong Kong; he fled to Russia where he was granted asylum; Congress passed modest surveillance reform in the USA Freedom Act (2015); surveillance programs largely continued.',
    themes: ['Politics and Power', 'American and National Identity', 'Work, Exchange, and Technology'],
    connections: ['edward-snowden', 'patriot-act', 'al-qaeda-war-on-terror', 'barack-obama'],
    mcqs: []
  },

  {
    id: 'political-gridlock',
    name: 'Political Gridlock',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['SAQ', 'continuity-and-change', 'causation'],
    summary: 'Increasing Congressional paralysis from the 1990s onward, as partisan polarization made bipartisan compromise rare and the filibuster was routinely used to block legislation.',
    significance: 'Political gridlock represents the institutional manifestation of the partisan polarization that accelerated throughout Period 9 — from Gingrich\'s "Contract with America" hardball tactics in 1994 to Republican total obstruction of Obama\'s agenda. Gridlock prevented policy responses to pressing challenges including climate change, gun control, and immigration reform, illustrating how the institutional design of American government becomes dysfunctional when parties become ideologically sorted and unwilling to compromise. For SAQ causation arguments, gridlock is both a cause and consequence of polarization.',
    context: 'Political scientists document the sharp increase in Congressional polarization after 1994; the rise of partisan media (Fox News, talk radio) reinforced partisan identities; gerrymandering created safe seats that rewarded ideological purity over compromise; the filibuster was transformed from rare to routine.',
    themes: ['Politics and Power', 'American and National Identity'],
    connections: ['bill-clinton', 'george-w-bush', 'barack-obama', 'tea-party', 'citizens-united', 'failure-of-healthcare-reform'],
    mcqs: []
  },

  {
    id: 'political-gridlock-obama',
    name: 'Political Gridlock Under Obama',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: ['SAQ'],
    summary: 'Republican congressional strategy of total obstruction during Obama\'s presidency blocked gun control, immigration reform, and other legislation, culminating in refusal to hold hearings on Supreme Court nominee Merrick Garland in 2016.',
    significance: 'The Obama-era gridlock represented an escalation of partisan warfare that set precedents — including refusing to consider a president\'s Supreme Court nomination for 11 months — that fundamentally altered constitutional norms. The pattern of obstruction demonstrated that institutional rules reliant on good-faith participation could be weaponized, with consequences for judicial appointments and legislation that would outlast the Obama presidency. For SAQ arguments about the evolution of American political institutions, this period is essential evidence.',
    context: 'Republican Senate leader Mitch McConnell stated in 2010 that making Obama a one-term president was his top priority; the Tea Party wave of 2010 gave Republicans the House; gridlock blocked comprehensive immigration reform despite bipartisan Senate passage; Garland\'s seat remained open until Trump appointed Neil Gorsuch in 2017.',
    themes: ['Politics and Power'],
    connections: ['barack-obama', 'tea-party', 'citizens-united', 'affordable-care-act', 'political-gridlock'],
    mcqs: []
  },

  {
    id: 'human-genome-project',
    name: 'Human Genome Project',
    period: 9,
    periodLabel: 'Period 9: 1980–Present',
    category: 'Events',
    tags: [],
    summary: 'A $3 billion U.S. government-funded international scientific effort (1990–2003) to map the entire human genetic code, completed ahead of schedule.',
    significance: 'The Human Genome Project exemplified the transformative potential of government investment in basic scientific research — the same model that produced the internet and GPS — while raising profound ethical questions about genetic privacy, insurance discrimination, and the potential for genetic engineering that continue to shape policy debates. It established the foundation for modern precision medicine and biotechnology industries.',
    context: 'Approved in 1989 under President Bush; completed in 2003 under President Bush (son); competed with a private effort by Celera Genomics; the complete sequence was published in April 2003; the Genetic Information Nondiscrimination Act (GINA) was passed in 2008 to address privacy concerns.',
    themes: ['Work, Exchange, and Technology', 'Social Structures'],
    connections: ['technology-industries', 'arpa'],
    mcqs: []
  },
]
