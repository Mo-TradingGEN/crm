export const personas = {
  builder: {
    id: 'builder',
    name: 'Self-Made Builders',
    description: 'Founders, ex-founders, operators, ex-CTOs/CFOs who exited',
    color: 'blue',
    stages: [
      {
        stage: 1,
        title: 'Connection Request',
        subtitle: 'Short, status-respecting, peer-to-peer',
        message: 'Hey NAME, came across your profile. Anyone who has built something meaningful usually thinks deeply about capital and decision making. Thought a connection makes sense.',
        goal: 'Get accepted, not sell',
        dos: ['Keep it peer-to-peer', 'Show respect for their achievement', 'Be brief and confident'],
        donts: ['No pitch', 'No link', 'No calendar', 'No selling']
      },
      {
        stage: 2,
        title: 'Warm-Up',
        subtitle: 'Light conversation',
        message: 'NAME, saw you steering [specific build / M&A move] at [company].\nWhat shift are operators pushing hardest on their capital stack right now?',
        goal: 'Start a light exchange, show you are a peer, not a closer',
        dos: ['One personal line', 'One curiosity question', 'Keep it human and light'],
        donts: ['No selling', 'No heavy topics', 'No long paragraphs']
      },
      {
        stage: 3,
        title: 'Value Drop',
        subtitle: 'Micro-insight',
        message: 'Quick insight I\'ve seen with self-made operators. The same intuition that built the business gets punished in the market because markets behave anti-human. Once you see it, everything changes.',
        goal: 'Surface the problem without pitching the program',
        dos: ['Share a pattern you see', 'Make them talk about markets/capital', 'Provide value first'],
        donts: ['Don\'t pitch yet', 'Don\'t ask for meetings', 'Don\'t be salesy']
      },
      {
        stage: 4,
        title: 'Introduce Work',
        subtitle: 'Show what you do',
        message: 'I work with private capital owners who built their wealth, helping them install a rule-based trading system that brings structure back into their decisions. No noise, no signals, just institutional clarity.',
        goal: 'Show you see something they do not',
        dos: ['Authority via insight, not flex', 'Short frame about your work', 'Focus on structure and systems'],
        donts: ['No bragging', 'No generic claims', 'No pushy language']
      },
      {
        stage: 5,
        title: 'Indirect Ask',
        subtitle: 'Referral + self-invite',
        message: 'Not sure if this is relevant for you, but do you have someone in your circle wrestling with markets, trying to protect capital while keeping their time freedom? A simple yes or no works.',
        goal: 'Low-friction next step',
        dos: ['Ask for referral or send resource', 'Make it binary (yes/no)', 'Keep it casual'],
        donts: ['No big decision yet', 'No pressure', 'No hard close']
      },
      {
        stage: 6,
        title: 'Direct CTA',
        subtitle: 'Invite to apply',
        message: 'If you ever want to see how operators structure their personal capital with precision, I can send you a short breakdown. No pressure, just value.',
        goal: 'Soft invitation to next step',
        dos: ['Short recap', 'Link if appropriate', 'Ask about referrals'],
        donts: ['No pressure tactics', 'No urgency games', 'No manipulation']
      }
    ]
  },
  professional: {
    id: 'professional',
    name: 'Earned Professionals',
    description: 'Executives, bankers, senior finance roles',
    color: 'green',
    stages: [
      {
        stage: 1,
        title: 'Connection Request',
        subtitle: 'Professional respect',
        message: 'Hi NAME, noticed your background. Anyone responsible for major decisions usually cares about capital protection. Happy to connect.',
        goal: 'Get accepted, not sell',
        dos: ['Keep it peer-to-peer', 'Show respect for their role', 'Be brief and confident'],
        donts: ['No pitch', 'No link', 'No calendar', 'No selling']
      },
      {
        stage: 2,
        title: 'Warm-Up',
        subtitle: 'Light conversation',
        message: 'NAME, noticed you driving [deal / initiative] inside [company].\nFrom your seat, which deals are crowding the pipeline most this year?',
        goal: 'Start a light exchange, show you are a peer, not a closer',
        dos: ['One personal line', 'One curiosity question', 'Keep it human and light'],
        donts: ['No selling', 'No heavy topics', 'No long paragraphs']
      },
      {
        stage: 3,
        title: 'Value Drop',
        subtitle: 'Micro-insight',
        message: 'One pattern I see, even among very sharp professionals. They know markets, but they don\'t run a system. Without structure, even good decisions get inconsistent outcomes.',
        goal: 'Surface the problem without pitching the program',
        dos: ['Share a pattern you see', 'Make them talk about markets/capital', 'Provide value first'],
        donts: ['Don\'t pitch yet', 'Don\'t ask for meetings', 'Don\'t be salesy']
      },
      {
        stage: 4,
        title: 'Introduce Work',
        subtitle: 'Show what you do',
        message: 'I help private capital owners install a documented and repeatable trading system they can run in under 90 min a day. It brings institutional discipline to personal portfolios.',
        goal: 'Show you see something they do not',
        dos: ['Authority via insight, not flex', 'Short frame about your work', 'Focus on structure and systems'],
        donts: ['No bragging', 'No generic claims', 'No pushy language']
      },
      {
        stage: 5,
        title: 'Indirect Ask',
        subtitle: 'Referral + self-invite',
        message: 'Do you know someone in your circle who keeps trying to trade but never feels fully in control? A yes or no is enough.',
        goal: 'Low-friction next step',
        dos: ['Ask for referral or send resource', 'Make it binary (yes/no)', 'Keep it casual'],
        donts: ['No big decision yet', 'No pressure', 'No hard close']
      },
      {
        stage: 6,
        title: 'Direct CTA',
        subtitle: 'Invite to apply',
        message: 'If you want, I can send you a clear outline of how professionals structure their decision making so you can apply it to your own capital.',
        goal: 'Soft invitation to next step',
        dos: ['Short recap', 'Link if appropriate', 'Ask about referrals'],
        donts: ['No pressure tactics', 'No urgency games', 'No manipulation']
      }
    ]
  },
  inherited: {
    id: 'inherited',
    name: 'Inherited Wealth',
    description: 'Multi-generational wealth, new inheritors, beneficiaries',
    color: 'orange',
    stages: [
      {
        stage: 1,
        title: 'Connection Request',
        subtitle: 'Clarity and structure',
        message: 'Hi NAME, people managing family wealth often look for clarity and structure, not noise. Thought a connection might be useful.',
        goal: 'Get accepted, not sell',
        dos: ['Keep it peer-to-peer', 'Emphasize clarity and safety', 'Be brief and confident'],
        donts: ['No pitch', 'No link', 'No calendar', 'No selling']
      },
      {
        stage: 2,
        title: 'Warm-Up',
        subtitle: 'Light conversation',
        message: 'NAME, saw your family office repositioning around [allocation / sector play].\nIs the bigger decision now holding more dry powder or leaning into that allocation?',
        goal: 'Start a light exchange, show you are a peer, not a closer',
        dos: ['One personal line', 'One curiosity question', 'Keep it human and light'],
        donts: ['No selling', 'No heavy topics', 'No long paragraphs']
      },
      {
        stage: 3,
        title: 'Value Drop',
        subtitle: 'Micro-insight',
        message: 'A quick insight. Markets punish emotional decisions, especially when the capital wasn\'t built through the market itself. A system removes that uncertainty fast.',
        goal: 'Surface the problem without pitching the program',
        dos: ['Share a pattern you see', 'Make them talk about markets/capital', 'Provide value first'],
        donts: ['Don\'t pitch yet', 'Don\'t ask for meetings', 'Don\'t be salesy']
      },
      {
        stage: 4,
        title: 'Introduce Work',
        subtitle: 'Show what you do',
        message: 'I help private capital owners protect and grow what they\'ve inherited with a structured trading system based on 10,000 hours of real market experience. No hype, no signals, just clarity.',
        goal: 'Show you see something they do not',
        dos: ['Authority via insight, not flex', 'Short frame about your work', 'Focus on structure and systems'],
        donts: ['No bragging', 'No generic claims', 'No pushy language']
      },
      {
        stage: 5,
        title: 'Indirect Ask',
        subtitle: 'Referral + self-invite',
        message: 'Do you know someone in your circle who\'s managing significant capital but feels unsure about the decisions they make? A simple yes or no is fine.',
        goal: 'Low-friction next step',
        dos: ['Ask for referral or send resource', 'Make it binary (yes/no)', 'Keep it casual'],
        donts: ['No big decision yet', 'No pressure', 'No hard close']
      },
      {
        stage: 6,
        title: 'Direct CTA',
        subtitle: 'Invite to apply',
        message: 'If helpful, I can send you a short breakdown of how a structured system removes uncertainty and protects downside. Zero commitment.',
        goal: 'Soft invitation to next step',
        dos: ['Short recap', 'Link if appropriate', 'Ask about referrals'],
        donts: ['No pressure tactics', 'No urgency games', 'No manipulation']
      }
    ]
  }
}

export const generalMessages = {
  fallback: {
    title: 'Fallback (No Response 48-72hrs)',
    message: 'Hey NAME, circling back with something useful. I just helped another private capital owner install a system that protects downside and brings structure to every decision.\n\nIf you want the mini breakdown, I can send it. No pressure.'
  },
  finalInvite: {
    title: 'Final Invite (Soft Close)',
    message: 'If you ever want to see what an institutional-grade system looks like for your own capital, I can share the framework.\n\nIt\'s the fastest way to remove uncertainty and protect what you\'ve built.'
  },
  referralTrigger: {
    title: 'Yes or No Referral Trigger',
    message: 'One last thing, NAME.\n\nDo you know someone in your circle who\'s wrestling with market decisions and wants more clarity?\n\nA simple yes or no works.'
  }
}

export const meetingFlow = {
  title: 'STOA Wealth Client Meeting Flow',
  subtitle: 'For private capital owners, ex-founders, inheritors, and operators age 35–55',
  stages: [
    {
      stage: 1,
      title: 'Rapport + Permission Setting',
      goal: 'Safety, control, and credibility without ego',
      opening: 'Good to see you. Before we start, I want to make sure this conversation is genuinely useful for you. Would you be open to a simple structure so you can get absolute clarity on whether this is the right fit for your capital and your goals?',
      whyItWorks: 'Your clients hate pressure. They love structure. You immediately create power + safety.',
      credibilityAnchor: 'I work with people who either built their wealth, earned it over time, or inherited it. Everyone comes in with the same question: how do I protect what I have and grow it without turning trading into a second job? That\'s what we\'ll explore today.'
    },
    {
      stage: 2,
      title: 'Diagnose (Goals → Current → Gap)',
      goal: 'Reveal what they actually want & quantify their gap',
      questions: [
        {
          q: 'Where do you want your capital and your trading to be 12 months from now?',
          note: 'Dream outcome. Wealthy clients have simple goals: clarity, safety, control.'
        },
        {
          q: 'What does your current setup look like?',
          note: 'Time spent, instinct-driven decisions, fragmented strategies, unclear risk, emotional stress, lack of structure'
        },
        {
          q: 'What feels like the biggest constraint between where you are and where you want to be?',
          note: 'Looking for: intuition reliance, emotional decisions, inconsistent routines, no model, time pressure, stress'
        }
      ],
      recap: 'So your goal is X. Today you\'re at Y. And the main friction is Z. Did I capture this correctly?',
      recapNote: 'This builds massive trust.'
    },
    {
      stage: 3,
      title: 'Present the Plan (Not the Price)',
      goal: 'Show a simple path that removes their fear of complexity',
      transition: 'Based on what you shared, here\'s the cleanest path forward.',
      pillars: [
        {
          name: 'Clarity',
          description: '11-minute bias, defined setups, clean market logic.'
        },
        {
          name: 'Control',
          description: 'Risk rails, execution structure, no emotional trading.'
        },
        {
          name: 'Consistency',
          description: 'One documented playbook, repeatable decisions, journaling that compounds precision.'
        }
      ],
      tieIn: 'This takes you from intuition-driven trading to a documented operating system that protects capital and reduces stress. And it runs in under 90 minutes a day.',
      warning: 'DO NOT mention price yet.'
    },
    {
      stage: 4,
      title: 'Transition Into the Close (Decision Support)',
      goal: 'Guide them through a logical decision process',
      softTransition: 'If you want, I can walk you through the decision process people in your position use when deciding whether STOA is the right fit. Is that useful?',
      threeQuestions: [
        'Do you believe this would move you closer to your goals?',
        'Do you have access to the capital to get started?',
        'If those two are yes, is this something you want to do together?'
      ],
      note: 'Do not talk over them. Let silence work for you.'
    },
    {
      stage: 5,
      title: 'Remove the Obstacle (The Middle of the Sale)',
      goal: 'Address the real objection',
      obstacles: [
        {
          objection: 'Time',
          variants: ['I travel a lot.', 'I\'m busy.', 'I\'m not sure I can commit.'],
          response: 'The best time to build a system is when life is busy, because that\'s how you trade in the real world. The structure is built for less than 90 minutes a day. You don\'t need more time. You need a system that protects your time.'
        },
        {
          objection: 'Money',
          variants: ['I need to think about the price.', 'It\'s more than I expected.'],
          response: 'Of course. The real cost isn\'t the program; it\'s the years and capital you lose trading without a model. You\'re not buying information; you\'re buying time back, mistakes avoided, and a system that protects your wealth.'
        },
        {
          objection: 'Partner Approval',
          variants: ['I need to talk to my wife.', 'I make decisions jointly.'],
          response: 'That makes sense. Before you talk to anyone, are you convinced this solves the exact problem you\'re experiencing? If yes, let\'s align the logic together so the conversation becomes simple on your side.'
        },
        {
          objection: 'Trust',
          variants: ['Why should I trust this?', 'There are too many scammers.'],
          response: 'You don\'t need to trust me. You need to trust the structure. Everything is documented, measured, and verified. Full transparency. No brokers. No affiliations. You\'re never betting on my opinion, only on your own system.'
        },
        {
          objection: 'Self-Doubt',
          variants: ['I\'m not sure I can do this.', 'What if I\'m not consistent enough?'],
          response: 'This isn\'t about talent; it\'s about structure. When you have rules, risk rails, and accountability, your decisions improve automatically. That\'s why STOA exists, to give you precision even when life gets chaotic.'
        }
      ]
    },
    {
      stage: 6,
      title: 'Final Close',
      goal: 'Ask for the decision',
      closingLine: 'Based on everything you shared, this is clearly the right next step. Do you want to do this together?',
      note: 'Stay silent.'
    },
    {
      stage: 7,
      title: 'Logistics',
      goal: 'Smooth onboarding',
      message: 'Great. Here\'s what happens next… payment, onboarding, Week 0, and your first call.',
      tone: 'Clean. Simple. Professional.'
    }
  ],
  clientShouldFeel: [
    {
      feeling: 'Understood',
      description: 'You reflected their reality better than they could.'
    },
    {
      feeling: 'Safe',
      description: 'No pressure, no push, no conflict of interest.'
    },
    {
      feeling: 'Logical path forward',
      description: 'They see: how they fail now, how your system fixes it, why you\'re the only one offering actual structure.'
    },
    {
      feeling: 'Binary decision',
      description: '"Do I want these results WITH Mo or keep guessing alone?"'
    }
  ]
}

export const objections = [
  {
    id: 1,
    objection: 'I don\'t have time.',
    meaning: 'I\'m overloaded. I don\'t want another time-sink. Prove this gives me time back.',
    response: 'You don\'t need more time, you need a structure that gives it back.\n\nSTOA runs in under 90 minutes a day because everything is pre-built, tracked, and simplified.\n\nYour system is shaped around your schedule, not the other way around.\n\nIf time is tight, this is built for you.'
  },
  {
    id: 2,
    objection: 'Let me talk to my wife / partner.',
    meaning: 'I want to reduce risk and validate this decision with someone I trust.',
    response: 'Absolutely. And just so your conversation is productive, here\'s the one line that matters.\n\nThis isn\'t a cost, it is buying back years of trial and error and protecting capital you\'ve already earned.\n\nIf you want, I can send you a short summary that makes your conversation easier.'
  },
  {
    id: 3,
    objection: 'Is there a guarantee?',
    meaning: 'Reduce my downside. Show me you stand behind your work.',
    response: 'Yes. You have two guarantees.\n\nThe Fit-or-Free week, and the Solo Execution Guarantee.\n\nIf you complete the milestones and you cannot execute your own system by week twelve, you get 100 percent of your investment back.\n\nNo fine print.'
  },
  {
    id: 4,
    objection: 'Why should I trust you?',
    meaning: 'The industry is full of noise. Prove you operate differently.',
    response: 'You don\'t need to trust me, you need to trust the structure.\n\nEverything I teach is documented, measurable, and repeatable.\n\nNo signals, no hype, no conflict of interest.\n\nAnd you can check live data, proof pages, and past participant outcomes before you make any decision.'
  },
  {
    id: 5,
    objection: 'Does this work for someone like me?',
    meaning: 'Variants: "I built wealth, but I\'m not a trader." / "Markets feel chaotic." / "I\'m too old / too new."',
    response: 'The system adapts to the operator, not the other way.\n\nIf you can follow instructions in your business, you can follow rules here.\n\nSuccess comes from structure, not background.'
  },
  {
    id: 6,
    objection: 'I\'m not sure if this is the right time.',
    meaning: 'I\'m hesitating. Give me a reason to act now.',
    response: 'Markets don\'t wait for readiness.\n\nEvery day you trade unstructured widens your risk.\n\nIf you want to protect your capital and make decisions with clarity, the best time is before your next mistake, not after.'
  },
  {
    id: 7,
    objection: 'This is expensive.',
    meaning: 'Prove the return on investment.',
    response: 'Expensive is losing money slowly with no system.\n\nThis replaces years of trial and error, wasted capital, and emotional cycles with one documented operating system you can run forever.\n\nAnd the cost is a fraction of what it took to build.'
  },
  {
    id: 8,
    objection: 'Will I actually get results?',
    meaning: 'Show me evidence, not promises.',
    response: 'You get a documented system, risk rails, an eleven-minute bias routine, execution rules, reviews, and direct 1:1 support until you run it independently.\n\nIt is not advice. It is a build.\n\nThat\'s why the guarantees exist.\n\nThe structure forces results.'
  },
  {
    id: 9,
    objection: 'I have tried other programs. They didn\'t work.',
    meaning: 'Prove you are not another Discord or guru.',
    response: 'Other programs give you information.\n\nThis gives you an operating system you execute.\n\nInformation doesn\'t solve uncertainty. Structure does.\n\nThis is built around your capital, your schedule, your temperament, and backed by real experience and real proof.'
  },
  {
    id: 10,
    objection: 'What if I fail?',
    meaning: 'I\'m afraid of being the problem.',
    response: 'You don\'t need to be perfect, you need to be consistent.\n\nThe system handles the discipline for you.\n\nWe track execution, risk, and clarity so you\'re never guessing.\n\nIf you follow the structure, failure is engineered out.'
  },
  {
    id: 11,
    objection: 'I already work with an advisor.',
    meaning: 'I delegate. Why should I do this myself?',
    response: 'An advisor manages allocation.\n\nSTOA builds the operating system you use to make decisions with your own capital.\n\nBoth can coexist.\n\nThis gives you control, clarity, and a framework for risk that advisors do not teach.'
  },
  {
    id: 12,
    objection: 'I\'ll think about it.',
    meaning: 'I\'m hesitating because there is no urgency.',
    response: 'Of course. And one thought to keep in mind.\n\nClarity compounds only after the system is installed.\n\nThe sooner you start, the sooner your capital operates under rules instead of emotion.\n\nIf you want, I can hold your seat for forty-eight hours while you decide.'
  }
]
