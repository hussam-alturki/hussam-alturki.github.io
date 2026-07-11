const translations = {
  en: {
    nav: {
      about: "About", experience: "Experience", services: "Services",
      skills: "Skills", projects: "Case Studies", contact: "Contact"
    },
    hero: {
      name: "Hussam Alturki",
      tagline: "I translate complex systems for people who fall between the cracks — in three languages, in real time.",
      subtext: "Support operations · Multilingual systems · AI-assisted workflows. I find what's actually broken — not just what gets reported.",
      ctaPrimary: "View Case Studies", ctaSecondary: "Get in Touch", downloadCv: "Download CV"
    },
    about: {
      title: "About",
      content: `<p>I came to Germany without knowing how it works here. I learned — the hard way, through bureaucracy, language barriers, and a system that assumes you already know the rules. That experience is now one of my most useful tools.</p>
      <p>Today I work at Concentrix handling Meta Platform escalations — complex cases, CRM documentation, quality standards under pressure. I've also done field sales at Vodafone, front desk at a hotel in three languages, and freelance IT support. The thread across all of it: I find what's actually broken, not just what gets reported — and I communicate the fix clearly.</p>
      <p>On the side: I build browser-based learning games for Arabic speakers navigating German life. I run structured stress-tests on LLMs to understand where they actually fail. I help people in my community with housing searches, job applications, and Behörden appointments. I applied for a Team Lead position at Concentrix — not because I had to, but because I wanted to make the team around me better.</p>
      <p>I don't have a clean career narrative yet. What I have is a very specific skill set at a very unusual intersection — and I'm building toward something with it.</p>`
    },
    beliefs: {
      title: "What I believe",
      items: [
        {
          statement: "Most support failures are documentation failures.",
          detail: "The problem was solved once — it just wasn't written down well enough to solve it again."
        },
        {
          statement: "Language is not just communication. It's access.",
          detail: "If you can't navigate a system in its language, you don't have access to it — regardless of your rights on paper."
        },
        {
          statement: "AI tools are only as good as the person using them.",
          detail: "I've tested enough models to know: the bottleneck is almost never the model. It's the prompt, the context, the judgment."
        },
        {
          statement: "The best support agent isn't always the fastest one.",
          detail: "The agent who builds the template that makes everyone faster — that's a different kind of value."
        }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        {
          period: "09.2023 – Present",
          role: "Customer Support Specialist",
          company: "Concentrix · Meta Platforms",
          points: "Tier-1 support via chat/email/outbound. Complex case handling. Daily CRM & ticketing. Structured case documentation. Internal Team Lead application (German team).",
          insight: "Learned: How large platforms scale escalations — and exactly where they break."
        },
        {
          period: "03.2023 – 08.2023",
          role: "Field Sales Partner",
          company: "Vodafone",
          points: "Direct customer consultation. Needs analysis. Complaint resolution. Contract closing.",
          insight: "Learned: How to decode a customer's real need in 30 seconds."
        },
        {
          period: "10.2022 – 03.2023",
          role: "Receptionist",
          company: "Select Hotel Augsburg",
          points: "Guest handling in DE/EN/AR. Booking systems. Cross-department coordination.",
          insight: "Learned: Three languages, one problem — simultaneous context-switching under pressure."
        },
        {
          period: "08.2021 – 06.2023",
          role: "IT Support (Freelance)",
          company: "Self-employed",
          points: "Hardware/software support. Device rollouts. Independent client management.",
          insight: "Learned: Devices are only as good as the documentation around them."
        },
        {
          period: "02.2020 – 09.2022",
          role: "Event Manager",
          company: "Xclusive Events",
          points: "Full event coordination from briefing to wrap-up. On-site team leadership.",
          insight: "Learned: How to synchronize 15 moving parts when nothing runs on schedule."
        }
      ]
    },
    services: {
      title: "How I work",
      superpowers: [
        {
          title: "Support Operations & Documentation",
          description: "I design systems that make support scalable — not just functional. From CRM workflows and response templates to KPI tracking and SOP documentation, I build the layer between people and platforms that keeps quality consistent.",
          example: "At Concentrix: built a template dashboard and personal KPI tracker that cut search time and made performance management proactive instead of reactive."
        },
        {
          title: "Multilingual UX & Content",
          description: "I don't just translate words — I translate contexts. Building tools for Arabic speakers navigating German bureaucracy taught me that language is structure, and structure needs to be rebuilt for each culture, not just relabeled.",
          example: "Built 'Escape from Berlin' and 'Housing Survival' — browser games teaching German bureaucratic processes to Arabic speakers, with full RTL/LTR switching."
        },
        {
          title: "AI Workflow Integration",
          description: "I stress-test AI tools against real professional edge cases — multilingual context switching, culturally nuanced instructions, conflicting prompts. Then I build workflows that use AI where it actually helps and document where it doesn't.",
          example: "Ran systematic comparative tests across Claude, GPT, Gemini, Kimi, and Qwen on Islamic jurisprudential reasoning and Arabic/German language edge cases. Published findings on LinkedIn."
        }
      ],
      locationNote: "In person · Augsburg area"
    },
    skills: {
      title: "Skills",
      categories: {
        communication: { label: "Communication", items: ["Arabic (Native)", "German C1 – TELC certified", "English – Professional fluency"] },
        tools: { label: "Tools & Systems", items: ["CRM & Ticketing systems (daily use)", "Case management & documentation", "MS Office (structured reporting)", "Booking management systems"] },
        methods: { label: "Methods", items: ["De-escalation & complaint management", "Needs analysis & structured problem breakdown", "Pattern recognition in recurring issues", "Cross-functional coordination (support ↔ QA ↔ ops)"] },
        progress: { label: "In Progress", items: ["HTML/CSS/JavaScript (building projects)", "Python basics", "AI workflow integration", "PowerShell/CMD"] }
      }
    },
    projects: {
      title: "Case Studies",
      disclaimer: "Based on real workflows — these reflect how I think, not polished production deployments.",
      problemLabel: "Problem", actionLabel: "Action", resultLabel: "Result", viewLive: "View Live Project →",
      items: [
        {
          label: "LLM Research (Ongoing)",
          title: "Stress-Testing LLMs at Cultural Edge Cases",
          url: "https://linkedin.com/in/hussam-alturki",
          thumb: "img/projects/llm-thumb.jpg",
          thumbAlt: "LLM comparative stress test results visualization",
          problem: "Most AI comparisons test generic writing. Nobody systematically tests how LLMs handle multilingual context-switching, Islamic jurisprudential reasoning, or Arabic/German language edge cases — real professional scenarios, not toy prompts.",
          action: "Designed structured stress tests across Claude, GPT, Gemini, Kimi, and Qwen. Documented response patterns, failure modes, and architectural biases with consistent methodology: controlled variables, same prompt structure, recorded results.",
          result: "Detailed comparative findings on where each model excels and fails under specialized conditions. Published on LinkedIn. Applied AI literacy — understanding how models work, not just what they produce."
        },
        {
          label: "Support Ops (Real)",
          title: "Template System & KPI Automation",
          thumb: "img/projects/kpi-thumb.jpg",
          thumbAlt: "Google Sheets dashboard showing color-coded template system",
          problem: "In high-volume live chat, agents waste time scrolling through long template lists. Every search second compounds across dozens of daily interactions. KPI tracking required manual calculation with no forward visibility.",
          action: "Built a structured Google Sheets dashboard — color-coded by conversation phase, emoji-tagged by situation type, everything on one screen. Built a personal KPI tracker that auto-calculates daily metrics and projects performance against targets. Deliberately developed a distinct written style for a recognizable customer experience.",
          result: "Faster response times. Consistent quality across interaction phases. Proactive performance management. A measurable personal fingerprint across case documentation."
        },
        {
          label: "Educational Game (Live)",
          title: "Escape from Berlin",
          url: "https://hussam-alturki.github.io/escape-from-berlin/",
          thumb: "img/projects/escape-thumb.jpg",
          thumbAlt: "Escape from Berlin game interface showing German bureaucracy quiz",
          problem: "Arabic-speaking learners of German lack context-relevant practice tools. Standard apps don't simulate real German bureaucratic and daily-life scenarios.",
          action: "Built a multilingual browser game in HTML/CSS/JS with three progressive difficulty levels, multiple game modes, and competitive multi-team format. Full RTL/LTR layout switching, responsive design, deployed on GitHub Pages.",
          result: "A functional, shareable educational tool demonstrating cross-domain skills: language pedagogy, frontend development, UX thinking, and deployment workflow."
        },
        {
          label: "Housing Module (Live)",
          title: "Housing Survival",
          url: "https://hussam-alturki.github.io/escape-from-berlin/housing_survival.html",
          thumb: "img/projects/housing-thumb.jpg",
          thumbAlt: "Housing Survival game showing German rental market scenarios",
          problem: "Arabic-speaking newcomers face a steep learning curve in the German rental market — Schufa, Mietvertrag, Selbstauskunft, landlord expectations. Existing resources are text-heavy and passive.",
          action: "Standalone game module simulating real housing search scenarios — players make decisions, encounter typical landlord responses, learn the correct sequence through consequence-based gameplay. Integrated into the same bilingual RTL/LTR framework.",
          result: "Practical gamified tool for one of the most common pain points for Arabic speakers in Germany. Translates bureaucratic domain knowledge into structured interactive experience."
        }
      ]
    },
    testimonials: {
  title: "What people say",
  items: [
    { quote: "Great nesting buddy and a very pleasant colleague who is happy to take the time to explain work processes to you. It's great to work with him.", name: "Viriya Kaov", role: "Colleague · Concentrix · 03/2025" },
    { quote: "Ever since Hussam came into the team he always aimed for the top. His deep commitment to provide the best experience for our customers has quickly reflected in his performance stats. He truly is a shining star. It's always been a pleasure working with you.", name: "Christopher Kessel", role: "Colleague · Concentrix · 09/2024" },
    { quote: "I am pleased to write this reference for my esteemed colleague, Hussam. Throughout our time at Concentrix, Hussam has consistently shown a deep commitment to addressing people's problems and always gives his best effort. He demonstrates remarkable empathy and genuinely cares about the well-being of others. He listens attentively and understands concerns before taking thoughtful action, which leads to well-informed and compassionate decisions.", name: "Sorina Marin", role: "Colleague · Concentrix · 07/2024" }
  ]
},
    contact: {
      title: "Let's talk.",
      openToWork: "Open to remote-first roles in support operations, technical writing, or AI-assisted workflows. Currently based in Augsburg, Germany.",
      downloadCv: "Download CV"
    },
    qr: { cardLabel: "Digital Business Card", title: "Scan to view my profile", role: "Support Specialist · AR · DE · EN", location: "Augsburg, DE" },
    print: {
      name: "Hussam Alturki", title: "Support Specialist · Multilingual · Remote-Ready",
      email: "huss4am@gmail.com", phone: "+49 176 21256819", linkedin: "linkedin.com/in/hussam-alturki",
      backLanguages: "Languages: AR · DE · EN", backLocation: "Location: Augsburg, DE", backGithub: "GitHub: github.com/hussam-alturki"
    },
    footer: { text: "© 2026 Hussam Alturki · Built with HTML/CSS/JS · Hosted on GitHub Pages" }
  },

  ar: {
    nav: {
      about: "نبذة", experience: "الخبرة المهنية", services: "طريقة عملي",
      skills: "المهارات", projects: "الأعمال", contact: "تواصل"
    },
    hero: {
      name: "حسام التركي",
      tagline: "أترجم الأنظمة المعقدة للناس الذين يقعون بين الثغرات — بثلاث لغات وفي الوقت الفعلي.",
      subtext: "عمليات الدعم · الأنظمة متعددة اللغات · سير العمل المدعومة بالذكاء الاصطناعي. أجد ما هو مكسور فعلاً — لا ما يُبلَّغ عنه فقط.",
      ctaPrimary: "استعرض الأعمال", ctaSecondary: "تواصل معي", downloadCv: "تحميل السيرة الذاتية"
    },
    about: {
      title: "نبذة عني",
      content: `<p>جئت إلى ألمانيا دون أن أعرف كيف تعمل هنا. تعلمت — بالطريقة الصعبة، عبر البيروقراطية وحواجز اللغة ونظام يفترض أنك تعرف القواعد مسبقاً. هذه التجربة أصبحت اليوم واحدة من أكثر أدواتي فائدة.</p>
      <p>أعمل حالياً في Concentrix على معالجة التصعيدات المعقدة لمنصة Meta — توثيق الحالات في CRM، معايير الجودة تحت الضغط. عملت أيضاً في مبيعات Vodafone الميدانية، وفي استقبال فندق بثلاث لغات، ودعم تقني مستقل. القاسم المشترك: أجد ما هو مكسور فعلاً، لا ما يُبلَّغ عنه فقط.</p>
      <p>على الهامش: أبني ألعاب تعليمية للناطقين بالعربية في الحياة الألمانية. أجري اختبارات منهجية على نماذج الذكاء الاصطناعي. أساعد في مجتمعي بالبحث عن سكن ووظائف ومواعيد رسمية. تقدمت لمنصب Team Lead — لأنني أريد أن أجعل الفريق حولي أفضل.</p>
      <p>لا أملك قصة مهنية واضحة بعد. ما أملكه هو مجموعة مهارات محددة جداً عند تقاطع نادر جداً — وأنا أبني نحو شيء ما بها.</p>`
    },
    beliefs: {
      title: "ما أؤمن به",
      items: [
        {
          statement: "معظم إخفاقات الدعم هي إخفاقات توثيق.",
          detail: "المشكلة حُلَّت مرة — فقط لم تُكتب بشكل كافٍ لحلها مرة أخرى."
        },
        {
          statement: "اللغة ليست مجرد تواصل. إنها وصول.",
          detail: "إذا لم تستطع التنقل في نظام ما بلغته، فأنت لا تملك حق الوصول إليه — بغض النظر عن حقوقك على الورق."
        },
        {
          statement: "أدوات الذكاء الاصطناعي بجودة من يستخدمها فقط.",
          detail: "اختبرت ما يكفي من النماذج لأعرف: الاختناق ليس في النموذج تقريباً أبداً. إنه في الأمر، والسياق، والحكم."
        },
        {
          statement: "أفضل وكيل دعم ليس دائماً الأسرع.",
          detail: "الوكيل الذي يبني القالب الذي يجعل الجميع أسرع — هذا نوع مختلف من القيمة."
        }
      ]
    },
    experience: {
      title: "الخبرة المهنية",
      items: [
        {
          period: "09.2023 – الآن",
          role: "أخصائي دعم العملاء",
          company: "Concentrix · Meta Platforms",
          points: "دعم المستوى الأول عبر الدردشة والبريد والمكالمات. معالجة الحالات المعقدة. CRM والتذاكر يومياً. توثيق منظم. تقدم لمنصب Team Lead.",
          insight: "تعلمت: كيف تُوسِّع المنصات الكبيرة التصعيدات — وأين تنكسر تحديداً."
        },
        {
          period: "03.2023 – 08.2023",
          role: "شريك مبيعات ميدانية",
          company: "Vodafone",
          points: "استشارات مباشرة للعملاء. تحليل الاحتياجات. حل الشكاوى. إتمام العقود.",
          insight: "تعلمت: كيف أفك شفرة الاحتياج الحقيقي للعميل في 30 ثانية."
        },
        {
          period: "10.2022 – 03.2023",
          role: "موظف استقبال",
          company: "Select Hotel Augsburg",
          points: "التعامل مع النزلاء بالألمانية والإنجليزية والعربية. أنظمة الحجز. التنسيق بين الأقسام.",
          insight: "تعلمت: ثلاث لغات، مشكلة واحدة — التبديل المتزامن بين السياقات تحت الضغط."
        },
        {
          period: "08.2021 – 06.2023",
          role: "دعم تقني (مستقل)",
          company: "عمل حر",
          points: "دعم الأجهزة والبرامج. توزيع الأجهزة. إدارة مستقلة للعملاء.",
          insight: "تعلمت: الأجهزة بجودة التوثيق المحيط بها فقط."
        },
        {
          period: "02.2020 – 09.2022",
          role: "منظم فعاليات",
          company: "Xclusive Events",
          points: "التنسيق الكامل للفعاليات. قيادة الفريق في الموقع.",
          insight: "تعلمت: كيف تُزامن 15 جزءاً متحركاً حين لا شيء يسير كما خُطِّط."
        }
      ]
    },
    services: {
      title: "طريقة عملي",
      superpowers: [
        {
          title: "عمليات الدعم والتوثيق",
          description: "أصمم أنظمة تجعل الدعم قابلاً للتوسع — لا مجرد وظيفياً. من سير عمل CRM وقوالب الردود إلى تتبع المؤشرات وتوثيق الإجراءات، أبني الطبقة بين الناس والمنصات.",
          example: "في Concentrix: بنيت لوحة قوالب وتتبع مؤشرات شخصية قلصت وقت البحث وحوّلت إدارة الأداء من تفاعلية إلى استباقية."
        },
        {
          title: "تجربة المستخدم والمحتوى متعدد اللغات",
          description: "لا أترجم الكلمات فقط — أترجم السياقات. بناء أدوات للناطقين بالعربية في البيروقراطية الألمانية علّمني أن اللغة هي بنية، تحتاج إعادة بناء لكل ثقافة، لا مجرد إعادة تسمية.",
          example: "بنيت 'الهروب من برلين' و'البقاء في سوق السكن' — ألعاب متصفح تعلّم العمليات البيروقراطية الألمانية للناطقين بالعربية مع دعم كامل لـ RTL/LTR."
        },
        {
          title: "دمج سير عمل الذكاء الاصطناعي",
          description: "أختبر أدوات الذكاء الاصطناعي في حالات الحدود المهنية الحقيقية — التبديل متعدد اللغات، التعليمات ذات الفروق الثقافية، الأوامر المتضاربة. ثم أبني سير عمل تستخدم الذكاء الاصطناعي حيث يفيد فعلاً.",
          example: "أجريت اختبارات مقارنة منهجية عبر Claude وGPT وGemini وKimi وQwen في الاستدلال الفقهي الإسلامي وحالات الحدود العربية والألمانية. النتائج منشورة على LinkedIn."
        }
      ],
      locationNote: "حضورياً · منطقة أوغسبورغ"
    },
    skills: {
      title: "المهارات",
      categories: {
        communication: { label: "التواصل", items: ["العربية (لغة أم)", "الألمانية C1 – TELC", "الإنجليزية – مستوى احترافي"] },
        tools: { label: "الأدوات والأنظمة", items: ["أنظمة CRM والتذاكر (استخدام يومي)", "إدارة الحالات والتوثيق", "MS Office (تقارير منظمة)", "أنظمة إدارة الحجوزات"] },
        methods: { label: "المنهجيات", items: ["إدارة التصعيد والشكاوى", "تحليل الاحتياجات وتفكيك المشكلات", "التعرف على الأنماط في المشكلات المتكررة", "التنسيق متعدد الوظائف"] },
        progress: { label: "قيد التطوير", items: ["HTML/CSS/JavaScript", "أساسيات Python", "دمج سير عمل الذكاء الاصطناعي", "PowerShell/CMD"] }
      }
    },
    projects: {
      title: "الأعمال",
      disclaimer: "مبنية على سير عمل حقيقية — تعكس طريقة تفكيري، لا منتجات نهائية.",
      problemLabel: "المشكلة", actionLabel: "الإجراء", resultLabel: "النتيجة", viewLive: "عرض المشروع المباشر →",
      items: [
        {
          label: "بحث في نماذج الذكاء الاصطناعي (مستمر)",
          title: "اختبار إجهاد النماذج اللغوية عند حالات الحدود الثقافية",
          url: "https://linkedin.com/in/hussam-alturki",
          thumb: "img/projects/llm-thumb.jpg",
          thumbAlt: "تصور نتائج اختبار مقارن لنماذج الذكاء الاصطناعي",
          problem: "معظم مقارنات الذكاء الاصطناعي تختبر الكتابة العامة. لا أحد يختبر منهجياً كيف تتعامل النماذج مع التبديل متعدد اللغات، الاستدلال الفقهي الإسلامي، أو حالات الحدود في العربية والألمانية.",
          action: "صممت اختبارات إجهاد منظمة عبر Claude وGPT وGemini وKimi وQwen. وثقت أنماط الاستجابة وأنماط الفشل والتحيزات بمنهجية متسقة.",
          result: "نتائج مقارنة مفصلة. منشورة على LinkedIn. معرفة تطبيقية بالذكاء الاصطناعي — فهم كيف تعمل النماذج، لا فقط ما تنتجه."
        },
        {
          label: "أدوات عمليات الدعم (حقيقي)",
          title: "نظام القوالب وأتمتة المؤشرات",
          thumb: "img/projects/kpi-thumb.jpg",
          thumbAlt: "لوحة Google Sheets تُظهر نظام القوالب الملوّن حسب المرحلة",
          problem: "في دعم الدردشة المباشرة ذات الحجم الكبير، يضيع الوكلاء وقتاً في البحث عبر قوائم طويلة. تتبع المؤشرات كان يدوياً بدون رؤية استباقية.",
          action: "بنيت لوحة Google Sheets منظمة — ملونة حسب مرحلة المحادثة، كل شيء على شاشة واحدة. ورقة تتبع مؤشرات تحسب المقاييس تلقائياً وتتوقع الأداء. أسلوب تواصل مميز يخلق تجربة عميل قابلة للتمييز.",
          result: "أوقات استجابة أسرع. جودة متسقة. إدارة أداء استباقية. بصمة شخصية قابلة للقياس."
        },
        {
          label: "لعبة تعليمية (مباشرة)",
          title: "الهروب من برلين",
          url: "https://hussam-alturki.github.io/escape-from-berlin/",
          thumb: "img/projects/escape-thumb.jpg",
          thumbAlt: "واجهة لعبة الهروب من برلين تُظهر اختبار البيروقراطية الألمانية",
          problem: "الناطقون بالعربية الذين يتعلمون الألمانية يفتقرون إلى أدوات تدريب جذابة وذات سياق ملائم. التطبيقات القياسية لا تحاكي السيناريوهات الحقيقية.",
          action: "لعبة متصفح متعددة اللغات باستخدام HTML/CSS/JS مع ثلاث مستويات صعوبة وأوضاع لعب متعددة. دعم كامل لـ RTL/LTR وتصميم متجاوب.",
          result: "أداة تعليمية عملية تُظهر مهارات متعددة المجالات: تطوير واجهات، تجربة مستخدم، علم لغة تطبيقي."
        },
        {
          label: "وحدة السكن (مباشرة)",
          title: "البقاء في سوق السكن",
          url: "https://hussam-alturki.github.io/escape-from-berlin/housing_survival.html",
          thumb: "img/projects/housing-thumb.jpg",
          thumbAlt: "لعبة البقاء في سوق السكن تُظهر سيناريوهات الإيجار الألماني",
          problem: "الوافدون الجدد الناطقون بالعربية يواجهون منحنى تعليمي حاد في سوق الإيجار الألماني. الموارد الموجودة ثقيلة نصياً وسلبية.",
          action: "وحدة لعبة مستقلة تحاكي سيناريوهات حقيقية — قرارات، ردود المالك، تعلم التسلسل الصحيح من خلال لعب قائم على العواقب.",
          result: "أداة تعليمية مغمّسة لواحدة من أكثر نقاط الألم شيوعاً. تترجم المعرفة البيروقراطية إلى تجربة تفاعلية."
        }
      ]
    },
    testimonials: {
  title: "ما يقوله الآخرون",
  items: [
    { quote: "زميل تدريب رائع وشخص لطيف جداً، يحرص دائماً على شرح سير العمل بصبر. العمل معه متعة حقيقية.", name: "Viriya Kaov", role: "زميل · Concentrix · 03/2025" },
    { quote: "منذ انضمام حسام إلى الفريق، كان دائماً يسعى للقمة. التزامه العميق بتقديم أفضل تجربة لعملائنا انعكس سريعاً في مؤشرات أدائه. هو حقاً نجم لامع. كان من دواعي سروري دائماً العمل معه.", name: "Christopher Kessel", role: "زميل · Concentrix · 09/2024" },
    { quote: "يسعدني أن أكتب هذه التزكية لزميلي العزيز حسام. خلال فترة عملنا في Concentrix، أظهر حسام باستمرار التزاماً عميقاً بمعالجة مشاكل الناس ويبذل دائماً قصارى جهده. يُظهر تعاطفاً ملحوظاً ويهتم حقاً برفاهية الآخرين. يستمع باهتمام ويفهم المخاوف قبل اتخاذ إجراء مدروس — مما يؤدي إلى قرارات حكيمة ومتعاطفة.", name: "Sorina Marin", role: "زميلة · Concentrix · 07/2024" }
  ]
},
    contact: {
      title: "لنتحدث.",
      openToWork: "متاح للعمل عن بعد في عمليات الدعم، الكتابة التقنية، أو سير العمل المدعومة بالذكاء الاصطناعي. مقيم في أوغسبورغ، ألمانيا.",
      downloadCv: "تحميل السيرة الذاتية"
    },
    qr: { cardLabel: "بطاقة أعمال رقمية", title: "امسح للاطلاع على ملفي المهني", role: "أخصائي دعم · AR · DE · EN", location: "أوغسبورغ، ألمانيا" },
    print: {
      name: "حسام التركي", title: "أخصائي دعم · متعدد اللغات · جاهز للعمل عن بعد",
      email: "huss4am@gmail.com", phone: "+49 176 21256819", linkedin: "linkedin.com/in/hussam-alturki",
      backLanguages: "اللغات: AR · DE · EN", backLocation: "الموقع: أوغسبورغ، ألمانيا", backGithub: "GitHub: github.com/hussam-alturki"
    },
    footer: { text: "© 2026 حسام التركي · مبني باستخدام HTML/CSS/JS · مستضاف على GitHub Pages" }
  },

  de: {
    nav: {
      about: "Über mich", experience: "Berufserfahrung", services: "Meine Arbeitsweise",
      skills: "Fähigkeiten", projects: "Fallstudien", contact: "Kontakt"
    },
    hero: {
      name: "Hussam Alturki",
      tagline: "Ich übersetze komplexe Systeme für Menschen, die zwischen den Stühlen sitzen — in drei Sprachen und in Echtzeit.",
      subtext: "Support-Operationen · Mehrsprachige Systeme · KI-gestützte Workflows. Ich finde, was wirklich nicht funktioniert — nicht nur, was gemeldet wird.",
      ctaPrimary: "Fallstudien ansehen", ctaSecondary: "Kontakt aufnehmen", downloadCv: "Lebenslauf herunterladen"
    },
    about: {
      title: "Über mich",
      content: `<p>Ich kam nach Deutschland, ohne zu wissen, wie das hier funktioniert. Ich lernte es — auf die harte Tour, durch Bürokratie, Sprachbarrieren und ein System, das voraussetzt, dass man die Regeln bereits kennt. Diese Erfahrung ist heute eines meiner nützlichsten Werkzeuge.</p>
      <p>Heute arbeite ich bei Concentrix mit komplexen Meta-Eskalationen — CRM-Dokumentation, Qualitätsstandards unter Druck. Davor: Außendienst bei Vodafone, Rezeption in drei Sprachen, freiberuflicher IT-Support. Der rote Faden: Ich finde, was wirklich kaputt ist — nicht nur, was gemeldet wird.</p>
      <p>Nebenbei baue ich Browser-Lernspiele für Arabischsprachige im deutschen Alltag. Ich führe strukturierte Stresstests an LLMs durch. Ich helfe Menschen in meiner Community bei Wohnungssuche, Bewerbungen und Behördenterminen. Ich habe mich intern für eine Team-Lead-Stelle beworben — nicht weil ich musste, sondern weil ich das Team besser machen wollte.</p>
      <p>Ich habe noch keine saubere Karriere-Erzählung. Was ich habe, ist ein sehr spezifisches Kompetenz-Set an einem sehr ungewöhnlichen Schnittpunkt — und ich baue damit auf etwas hin.</p>`
    },
    beliefs: {
      title: "Was ich glaube",
      items: [
        {
          statement: "Die meisten Support-Fehler sind Dokumentationsfehler.",
          detail: "Das Problem wurde schon einmal gelöst — es wurde nur nicht gut genug aufgeschrieben, um es wieder zu lösen."
        },
        {
          statement: "Sprache ist nicht nur Kommunikation. Sie ist Zugang.",
          detail: "Wer ein System nicht in seiner Sprache navigieren kann, hat keinen echten Zugang dazu — egal was auf dem Papier steht."
        },
        {
          statement: "KI-Tools sind nur so gut wie die Person, die sie benutzt.",
          detail: "Ich habe genug Modelle getestet: Der Engpass ist fast nie das Modell. Es ist der Prompt, der Kontext, das Urteilsvermögen."
        },
        {
          statement: "Der beste Support-Agent ist nicht immer der schnellste.",
          detail: "Wer das Template baut, das alle schneller macht — das ist eine andere Art von Wert."
        }
      ]
    },
    experience: {
      title: "Berufserfahrung",
      items: [
        {
          period: "09.2023 – Aktuell",
          role: "Customer Support Specialist",
          company: "Concentrix · Meta Platforms",
          points: "Tier-1-Support via Chat/E-Mail/Outbound. Komplexe Fallbearbeitung. Tägliche CRM-Arbeit. Strukturierte Falldokumentation. Interne Bewerbung Team Lead.",
          insight: "Gelernt: Wie große Plattformen Eskalationen skalieren — und wo sie genau brechen."
        },
        {
          period: "03.2023 – 08.2023",
          role: "Field Sales Partner",
          company: "Vodafone",
          points: "Direkte Kundenberatung. Bedarfsanalyse. Beschwerdemanagement. Vertragsabschluss.",
          insight: "Gelernt: Kundenbedürfnisse in 30 Sekunden dechiffrieren."
        },
        {
          period: "10.2022 – 03.2023",
          role: "Rezeptionist",
          company: "Select Hotel Augsburg",
          points: "Gästebetreuung auf DE/EN/AR. Buchungssysteme. Abteilungsübergreifende Koordination.",
          insight: "Gelernt: Drei Sprachen, ein Problem — simultane Kontextwechsel unter Druck."
        },
        {
          period: "08.2021 – 06.2023",
          role: "IT-Support (Freelance)",
          company: "Selbstständig",
          points: "Hardware-/Software-Support. Geräte-Rollouts. Eigenständiges Kundenmanagement.",
          insight: "Gelernt: Endgeräte sind nur so gut wie die Dokumentation drumherum."
        },
        {
          period: "02.2020 – 09.2022",
          role: "Event Manager",
          company: "Xclusive Events",
          points: "Komplette Eventkoordination vom Briefing bis Wrap-up. Vor-Ort-Teamleitung.",
          insight: "Gelernt: Wie man 15 bewegliche Teile synchronisiert, wenn nichts planmäßig läuft."
        }
      ]
    },
    services: {
      title: "Meine Arbeitsweise",
      superpowers: [
        {
          title: "Support Operations & Dokumentation",
          description: "Ich entwerfe Systeme, die Support skalierbar machen — nicht nur funktional. Von CRM-Workflows und Antwortvorlagen bis zu KPI-Tracking und SOP-Dokumentation baue ich die Schicht zwischen Menschen und Plattformen.",
          example: "Bei Concentrix: Template-Dashboard und persönliches KPI-Tracking gebaut, das Suchzeit eliminierte und Performance-Management proaktiv statt reaktiv machte."
        },
        {
          title: "Mehrsprachige UX & Inhalte",
          description: "Ich übersetze nicht nur Wörter — ich übersetze Kontexte. Tools für Arabischsprachige in der deutschen Bürokratie zu bauen, hat mir gezeigt: Sprache ist Struktur, und Struktur muss für jede Kultur neu gebaut werden, nicht nur umbenannt.",
          example: "Entwickelt: 'Escape from Berlin' und 'Housing Survival' — Browser-Spiele die deutschen Bürokratie-Prozesse für Arabischsprachige vermitteln, mit vollem RTL/LTR-Support."
        },
        {
          title: "KI-Workflow-Integration",
          description: "Ich stressteste KI-Tools an echten professionellen Grenzfällen — mehrsprachiger Kontextwechsel, kulturell nuancierte Anweisungen, widersprüchliche Prompts. Dann baue ich Workflows, die KI dort einsetzen, wo sie wirklich hilft.",
          example: "Systematische Vergleichstests über Claude, GPT, Gemini, Kimi und Qwen zu islamisch-juristischem Reasoning und arabisch/deutschen Sprachgrenzfällen. Ergebnisse auf LinkedIn veröffentlicht."
        }
      ],
      locationNote: "Vor Ort · Raum Augsburg"
    },
    skills: {
      title: "Fähigkeiten",
      categories: {
        communication: { label: "Kommunikation", items: ["Arabisch (Muttersprache)", "Deutsch C1 – TELC-zertifiziert", "Englisch – verhandlungssicher"] },
        tools: { label: "Tools & Systeme", items: ["CRM- & Ticketing-Systeme (täglich)", "Fallmanagement & Dokumentation", "MS Office (strukturiertes Reporting)", "Buchungssysteme"] },
        methods: { label: "Methoden", items: ["Deeskalation & Beschwerdemanagement", "Bedarfsanalyse & Problemzerlegung", "Mustererkennung bei wiederkehrenden Problemen", "Abteilungsübergreifende Koordination"] },
        progress: { label: "In Entwicklung", items: ["HTML/CSS/JavaScript", "Python-Grundlagen", "KI-Workflow-Integration", "PowerShell/CMD"] }
      }
    },
    projects: {
      title: "Fallstudien",
      disclaimer: "Basierend auf realen Workflows — zeigen meine Denkweise, keine ausgelieferten Produktivsysteme.",
      problemLabel: "Problem", actionLabel: "Vorgehen", resultLabel: "Ergebnis", viewLive: "Live-Projekt ansehen →",
      items: [
        {
          label: "LLM-Forschung (Laufend)",
          title: "LLMs an kulturellen Grenzfällen testen",
          url: "https://linkedin.com/in/hussam-alturki",
          thumb: "img/projects/llm-thumb.jpg",
          thumbAlt: "Visualisierung der LLM-Vergleichs-Stresstestergebnisse",
          problem: "Die meisten KI-Vergleiche testen generisches Schreiben. Niemand testet systematisch, wie LLMs mehrsprachigen Kontextwechsel, islamisch-juristisches Reasoning oder arabisch/deutsche Sprachgrenzfälle handhaben.",
          action: "Strukturierte Stresstests über Claude, GPT, Gemini, Kimi und Qwen. Dokumentation von Antwortmustern, Fehlermodi und Biases mit konsistenter Methodik.",
          result: "Detaillierte Vergleichsergebnisse. Auf LinkedIn veröffentlicht. Angewandte KI-Kompetenz — verstehen wie Modelle arbeiten, nicht nur was sie produzieren."
        },
        {
          label: "Support-Ops (Real)",
          title: "Template-System & KPI-Automatisierung",
          thumb: "img/projects/kpi-thumb.jpg",
          thumbAlt: "Google Sheets Dashboard mit farbkodiertem Template-System",
          problem: "Im High-Volume-Chat verschwenden Agenten Zeit mit Suchen in langen Vorlagenlisten. KPI-Tracking erforderte manuelle Berechnung ohne Vorausschau.",
          action: "Strukturiertes Google-Sheets-Dashboard — farbkodiert nach Gesprächsphase, alles auf einem Bildschirm. Persönliches KPI-Tracking mit automatischer Berechnung und Leistungsprojektion. Eigener Schreibstil für erkennbare Kundenerfahrung.",
          result: "Schnellere Antwortzeiten. Konsistente Qualität. Proaktives Performance-Management. Messbare persönliche Handschrift."
        },
        {
          label: "Lernspiel (Live)",
          title: "Escape from Berlin",
          url: "https://hussam-alturki.github.io/escape-from-berlin/",
          thumb: "img/projects/escape-thumb.jpg",
          thumbAlt: "Escape from Berlin Spieloberfläche mit deutschem Bürokratie-Quiz",
          problem: "Arabischsprachige Deutschlerner haben keine kontextrelevanten Übungstools. Standard-Apps simulieren keine realen deutschen Alltagsszenarien.",
          action: "Mehrsprachiges Browser-Spiel in HTML/CSS/JS mit drei Schwierigkeitsstufen und Multi-Team-Format. Volles RTL/LTR-Support, responsives Design, GitHub Pages.",
          result: "Funktionales Bildungstool — Sprachdidaktik, Frontend-Entwicklung, UX-Denken in einem."
        },
        {
          label: "Wohnungsmodul (Live)",
          title: "Housing Survival",
          url: "https://hussam-alturki.github.io/escape-from-berlin/housing_survival.html",
          thumb: "img/projects/housing-thumb.jpg",
          thumbAlt: "Housing Survival Spiel mit deutschen Mietmarkt-Szenarien",
          problem: "Arabischsprachige Neuankömmlinge stehen vor einer steilen Lernkurve im deutschen Mietmarkt. Bestehende Ressourcen sind textlastig und passiv.",
          action: "Eigenständiges Spielmodul mit realen Wohnungssuchszenarien — Entscheidungen, typische Vermieterantworten, korrekte Schrittfolge durch konsequenzbasiertes Gameplay.",
          result: "Praktisches gamifiziertes Tool für einen der häufigsten Schmerzpunkte. Übersetzt bürokratisches Domänenwissen in strukturierte interaktive Erfahrung."
        }
      ]
    },
    testimonials: {
  title: "Was andere sagen",
  items: [
    { quote: "Großartiger Nesting-Buddy und ein sehr angenehmer Kollege, der sich gerne Zeit nimmt, um Arbeitsprozesse zu erklären. Es ist eine Freude, mit ihm zu arbeiten.", name: "Viriya Kaov", role: "Kollege · Concentrix · 03/2025" },
    { quote: "Seit Hussam ins Team kam, hat er immer nach Spitzenleistung gestrebt. Sein tiefes Engagement für die beste Kundenerfahrung spiegelt sich schnell in seinen Performance-Stats wider. Er ist wirklich ein Shining Star. Es war immer eine Freude, mit ihm zu arbeiten.", name: "Christopher Kessel", role: "Kollege · Concentrix · 09/2024" },
    { quote: "Es ist mir eine Freude, diese Referenz für meinen geschätzten Kollegen Hussam zu schreiben. Während unserer gemeinsamen Zeit bei Concentrix hat Hussam durchweg ein tiefes Engagement gezeigt, sich der Probleme von Menschen anzunehmen, und gibt stets sein Bestes. Er zeigt bemerkenswerte Empathie und kümmert sich aufrichtig um das Wohlergehen anderer. Er hört aufmerksam zu und versteht Anliegen, bevor er bedacht handelt — das führt zu fundierten und empathischen Entscheidungen.", name: "Sorina Marin", role: "Kollegin · Concentrix · 07/2024" }
  ]
},
    contact: {
      title: "Lass uns reden.",
      openToWork: "Offen für Remote-Stellen in Support Operations, Technical Writing oder KI-gestützten Workflows. Aktuell in Augsburg, Deutschland.",
      downloadCv: "Lebenslauf herunterladen"
    },
    qr: { cardLabel: "Digitale Visitenkarte", title: "Scannen zum Anzeigen meines Profils", role: "Support-Spezialist · AR · DE · EN", location: "Augsburg, DE" },
    print: {
      name: "Hussam Alturki", title: "Support-Spezialist · Mehrsprachig · Remote-Ready",
      email: "huss4am@gmail.com", phone: "+49 176 21256819", linkedin: "linkedin.com/in/hussam-alturki",
      backLanguages: "Sprachen: AR · DE · EN", backLocation: "Standort: Augsburg, DE", backGithub: "GitHub: github.com/hussam-alturki"
    },
    footer: { text: "© 2026 Hussam Alturki · Erstellt mit HTML/CSS/JS · Gehostet auf GitHub Pages" }
  }
};
