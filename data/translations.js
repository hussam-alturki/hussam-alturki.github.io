const translations = {
  en: {
    nav: {
      about: "About", experience: "Experience", services: "Services",
      skills: "Skills", projects: "Case Studies", contact: "Contact"
    },
    hero: {
      name: "Hussam Alturki",
      tagline: "I live between three cultures, three languages, and three career paths — and I've stopped trying to explain it. I just build with it.",
      subtext: "Support operations · AI research · Multilingual tools for people who fall through the cracks of standard systems.",
      ctaPrimary: "View Case Studies", ctaSecondary: "Get in Touch", downloadCv: "Download CV"
    },
    about: {
      title: "About",
      content: `<p>I came to Germany without knowing how it works here. I learned — the hard way, through bureaucracy, language, and a system that assumes you already know the rules. That experience is now one of my most useful tools.</p>
      <p>Today I work at Concentrix handling Meta Platform escalations — complex cases, CRM documentation, quality standards under pressure. I've also done field sales at Vodafone, front desk at a hotel in three languages, and freelance IT support. The thread across all of it: I find what's actually broken, not just what gets reported — and I communicate the fix clearly.</p>
      <p>On the side: I build browser-based learning games for Arabic speakers navigating German life. I run structured stress-tests on LLMs to understand where they actually fail. I help people in my community with housing searches, job applications, and Behörden appointments. I applied for a Team Lead position at Concentrix — not because I had to, but because I wanted to make the team around me better.</p>
      <p>I don't have a clean career narrative yet. What I have is a very specific set of skills at a very unusual intersection — and I'm building toward something with them.</p>`
    },
    beliefs: {
      title: "What I believe",
      items: [
        { statement: "Most support failures are documentation failures.", detail: "The problem was solved once — it just wasn't written down well enough to solve it again." },
        { statement: "Language is not just communication. It's access.", detail: "If you can't navigate a system in its language, you don't have access to it — regardless of your rights on paper." },
        { statement: "AI tools are only as good as the person using them.", detail: "I've tested enough models to know: the bottleneck is almost never the model. It's the prompt, the context, the judgment." },
        { statement: "The best support agent in the room is not always the fastest one.", detail: "Speed matters. But the agent who builds the template that makes everyone faster — that's a different kind of value." }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        { period: "09.2023 – Present", role: "Customer Support Specialist", company: "Concentrix · Meta Platforms", points: "Tier-1 support via chat/email/outbound. Complex case handling. Daily CRM & ticketing work. Structured case documentation. Internal Team Lead application (German team)." },
        { period: "03.2023 – 08.2023", role: "Field Sales Partner", company: "Vodafone", points: "Direct customer consultation. Needs analysis. Complaint resolution. Contract closing." },
        { period: "10.2022 – 03.2023", role: "Receptionist", company: "Select Hotel Augsburg", points: "Guest handling in DE/EN/AR. Booking systems. Cross-department coordination." },
        { period: "08.2021 – 06.2023", role: "IT Support (Freelance)", company: "Self-employed", points: "Hardware/software support. Device rollouts. Independent client management." },
        { period: "02.2020 – 09.2022", role: "Event Manager", company: "Xclusive Events", points: "Full event coordination from briefing to wrap-up. On-site team leadership." }
      ]
    },
    services: {
      title: "Services", tabA: "For the Arab Community", tabB: "For Businesses", locationNote: "In person · Augsburg area",
      community: [
        { title: "Job Search & Application Support", content: "Realistic job matching based on your actual skills and German level. CV in German, Anschreiben, interview coaching — and direct feedback on your specific documents before you send them. No generic tips." },
        { title: "Housing Search Navigation", content: "Schufa, Mietvertrag, Selbstauskunft — and how to present yourself convincingly as a tenant. I know this market from the inside." },
        { title: "Bureaucracy & Document Assistance", content: "Jobcenter, Ausländerbehörde, insurance, bank. Forms, translations, appointment accompaniment. In person where it counts." },
        { title: "Language Support & Translation", content: "Real-speaker support in German and English. Written translation (AR ↔ DE ↔ EN). Verbal interpretation for appointments. I explain why the language works the way it does — not just what to say." },
        { title: "Computer Literacy for Seniors", content: "Patient, jargon-free training from basics (email, video calls, smartphones) to recognizing online scams and understanding what your devices collect about you." }
      ],
      business: [
        { title: "Customer Service Operations", content: "Setting up or taking over your customer communication in AR/DE/EN — response templates, handling guides, first-line support workflows." },
        { title: "Process Documentation & SOPs", content: "Turning how your team works into written, repeatable processes — maps, guides, checklists, decision trees. If your operation relies on people remembering things instead of documents, this fixes that." },
        { title: "Multilingual Content & Web", content: "Content-rich pages in Arabic, German, and English — including interactive formats like games, quizzes, or learning tools. I handle both writing and basic frontend build." },
        { title: "AI Literacy & Prompt Engineering", content: "Teaching individuals or small teams to actually use AI tools effectively — model selection, prompt engineering, workflow integration, and understanding the real privacy and security implications." },
        { title: "Research & Market Analysis (MENA × DACH)", content: "Structured research at the intersection of Arabic-speaking markets and the German/European context — competitors, gaps, strategic decisions. You get a readable brief, not a pile of links." }
      ]
    },
    skills: {
      title: "Skills",
      categories: {
        communication: { label: "Communication", items: ["Arabic (Native)", "German C1 – TELC certified", "English – Professional fluency"] },
        tools: { label: "Tools & Systems", items: ["CRM & Ticketing systems (daily use)", "Case management & documentation", "MS Office (including structured reporting)", "Booking management systems (hotel context)"] },
        methods: { label: "Methods", items: ["De-escalation & complaint management", "Needs analysis & structured problem breakdown", "Pattern recognition in recurring issues", "Cross-functional coordination (support ↔ QA ↔ ops)"] },
        progress: { label: "In Progress", items: ["HTML/CSS/JavaScript (building projects)", "Python basics (documented on LinkedIn)", "AI workflow integration (active exploration)", "PowerShell/CMD (exploratory)"] }
      }
    },
    projects: {
      title: "Case Studies",
      disclaimer: "Based on real workflows — these reflect how I think, not polished production deployments.",
      problemLabel: "Problem", actionLabel: "Action", resultLabel: "Result", viewLive: "View Live Project →",
      items: [
        { label: "LLM Research (Ongoing)", title: "Stress-Testing LLMs at Cultural Edge Cases",
          url: "https://linkedin.com/in/hussam-alturki",
          problem: "Most AI comparisons ask: which model writes better essays? Nobody systematically tests how LLMs handle multilingual context-switching, Islamic jurisprudential reasoning, conflicting instructions, or Arabic/German language edge cases. These are real professional scenarios — not toy prompts.",
          action: "Designed and ran structured stress tests across Claude, GPT, Gemini, Kimi, and Qwen using prompts built around specific cultural and professional contexts. Documented response patterns, failure modes, and architectural biases with consistent methodology: controlled variables, same prompt structure, recorded results.",
          result: "Detailed comparative findings on where each model excels and fails under specialized conditions. Published on LinkedIn. This is applied AI literacy — understanding how models work, not just what they produce." },
        { label: "Support Ops (Real)", title: "Template System & KPI Automation",
          problem: "In high-volume live chat, agents waste time scrolling through long template lists. Every second of search compounds across dozens of daily interactions. Tracking personal KPIs required manual calculation with no forward visibility.",
          action: "Built a structured Google Sheets dashboard — color-coded by conversation phase, emoji-tagged by situation type, everything visible on one screen. Built a personal KPI tracker that auto-calculates daily metrics and projects performance against targets. Deliberately developed a distinct written style — different rhythm, word choice, tone — to create a consistent, recognizable customer experience.",
          result: "Faster response times. Consistent quality across interaction phases. Proactive performance management. A measurable personal fingerprint across case documentation." },
        { label: "Educational Game (Live)", title: "Escape from Berlin",
          url: "https://huss4am7.github.io/escape-from-berlin/",
          problem: "Arabic-speaking learners of German lack engaging, context-relevant practice tools. Standard apps don't simulate real German bureaucratic and daily-life scenarios.",
          action: "Built a multilingual browser game in HTML/CSS/JS with three progressive difficulty levels, multiple game modes, and a competitive multi-team format. Deployed on GitHub Pages. Implemented RTL/LTR layout switching, self-contained download functionality, and responsive design.",
          result: "A functional, shareable educational tool demonstrating cross-domain skills: language pedagogy, frontend development, UX thinking, and deployment workflow." },
        { label: "Housing Module (Live)", title: "Housing Survival",
          url: "https://huss4am7.github.io/escape-from-berlin/housing_survival.html",
          problem: "Arabic-speaking newcomers face a steep learning curve navigating the German rental market — Schufa, Mietvertrag, Selbstauskunft, landlord expectations. Existing resources are text-heavy and passive.",
          action: "Built a standalone game module simulating real housing search scenarios — players make decisions, encounter typical landlord responses, and learn the correct sequence through consequence-based gameplay. Integrated into the same bilingual RTL/LTR framework.",
          result: "A practical gamified tool covering one of the most common pain points for Arabic speakers in Germany. Translates bureaucratic domain knowledge into structured interactive experience." }
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
      backLanguages: "Languages: AR · DE · EN", backLocation: "Location: Augsburg, DE", backGithub: "GitHub: github.com/huss4am7"
    },
    footer: { text: "© 2026 Hussam Alturki · Built with HTML/CSS/JS · Hosted on GitHub Pages" }
  },

  ar: {
    nav: {
      about: "نبذة", experience: "الخبرة المهنية", services: "الخدمات",
      skills: "المهارات", projects: "الأعمال", contact: "تواصل"
    },
    hero: {
      name: "حسام التركي",
      tagline: "أعيش بين ثلاث ثقافات وثلاث لغات وثلاثة مسارات مهنية — وتوقفت عن محاولة الشرح. أنا فقط أبني بها.",
      subtext: "عمليات دعم · بحث في الذكاء الاصطناعي · أدوات متعددة اللغات للناس الذين يقعون في الثغرات بين الأنظمة.",
      ctaPrimary: "استعرض الأعمال", ctaSecondary: "تواصل معي", downloadCv: "تحميل السيرة الذاتية"
    },
    about: {
      title: "نبذة عني",
      content: `<p>جئت إلى ألمانيا دون أن أعرف كيف تعمل هنا. تعلمت — بالطريقة الصعبة، عبر البيروقراطية واللغة ونظام يفترض أنك تعرف القواعد مسبقاً. هذه التجربة أصبحت اليوم واحدة من أكثر أدواتي فائدة.</p>
      <p>أعمل حالياً في Concentrix على معالجة التصعيدات المعقدة لمنصة Meta — توثيق الحالات في CRM، معايير الجودة تحت الضغط. عملت أيضاً في مبيعات Vodafone الميدانية، وفي استقبال فندق بثلاث لغات، ودعم تقني مستقل. القاسم المشترك في كل ذلك: أجد ما هو مكسور فعلاً، لا ما يُبلَّغ عنه فقط.</p>
      <p>على الهامش: أبني ألعاب تعليمية في المتصفح للناطقين بالعربية. أجري اختبارات منهجية على نماذج الذكاء الاصطناعي لأفهم أين تفشل فعلاً. أساعد أناساً في مجتمعي في البحث عن سكن ووظائف ومواعيد في الجهات الرسمية. تقدمت لمنصب Team Lead في Concentrix — ليس لأنني مضطر، بل لأنني أريد أن أجعل الفريق حولي أفضل.</p>
      <p>لا أملك قصة مهنية واضحة بعد. ما أملكه هو مجموعة مهارات محددة جداً عند تقاطع نادر جداً — وأنا أبني نحو شيء ما بها.</p>`
    },
    beliefs: {
      title: "ما أؤمن به",
      items: [
        { statement: "معظم إخفاقات الدعم هي إخفاقات توثيق.", detail: "المشكلة حُلَّت مرة — فقط لم تُكتب بشكل كافٍ لحلها مرة أخرى." },
        { statement: "اللغة ليست مجرد تواصل. إنها وصول.", detail: "إذا لم تستطع التنقل في نظام ما بلغته، فأنت لا تملك حق الوصول إليه — بغض النظر عن حقوقك على الورق." },
        { statement: "أدوات الذكاء الاصطناعي بجودة من يستخدمها فقط.", detail: "اختبرت ما يكفي من النماذج لأعرف: الاختناق ليس في النموذج تقريباً أبداً. إنه في الأمر، والسياق، والحكم." },
        { statement: "أفضل وكيل دعم في الغرفة ليس دائماً الأسرع.", detail: "السرعة مهمة. لكن الوكيل الذي يبني القالب الذي يجعل الجميع أسرع — هذا نوع مختلف من القيمة." }
      ]
    },
    experience: {
      title: "الخبرة المهنية",
      items: [
        { period: "09.2023 – الآن", role: "أخصائي دعم العملاء", company: "Concentrix · Meta Platforms", points: "دعم المستوى الأول عبر الدردشة والبريد الإلكتروني والمكالمات الصادرة. معالجة الحالات المعقدة. العمل اليومي على CRM. توثيق منظم للحالات. تقدم لمنصب Team Lead (الفريق الألماني)." },
        { period: "03.2023 – 08.2023", role: "شريك مبيعات ميدانية", company: "Vodafone", points: "استشارات مباشرة للعملاء. تحليل الاحتياجات. حل الشكاوى. إتمام العقود." },
        { period: "10.2022 – 03.2023", role: "موظف استقبال", company: "Select Hotel Augsburg", points: "التعامل مع النزلاء بالألمانية والإنجليزية والعربية. أنظمة الحجز. التنسيق بين الأقسام." },
        { period: "08.2021 – 06.2023", role: "دعم تقني (مستقل)", company: "عمل حر", points: "دعم الأجهزة والبرامج. توزيع الأجهزة. إدارة مستقلة للعملاء." },
        { period: "02.2020 – 09.2022", role: "منظم فعاليات", company: "Xclusive Events", points: "التنسيق الكامل للفعاليات من التخطيط إلى التنفيذ. قيادة الفريق في الموقع." }
      ]
    },
    services: {
      title: "الخدمات", tabA: "للمجتمع العربي", tabB: "لأصحاب المشاريع", locationNote: "حضورياً · منطقة أوغسبورغ",
      community: [
        { title: "البحث عن عمل والتقديم", content: "تحديد فرص عمل واقعية بناءً على مهاراتك ومستواك الفعلي في الألمانية. سيرة ذاتية بالألمانية، Anschreiben، تدريب على المقابلات — وملاحظات مباشرة على وثائقك قبل الإرسال. لا نصائح عامة." },
        { title: "التنقل في سوق السكن", content: "Schufa، Mietvertrag، Selbstauskunft — وكيف تقدم نفسك كمستأجر بشكل مقنع. أعرف هذا السوق من الداخل." },
        { title: "البيروقراطية والوثائق", content: "Jobcenter، Ausländerbehörde، تأمين، بنك. استمارات، ترجمات، مرافقة في المواعيد. حضورياً حيث يهم." },
        { title: "دعم اللغة والترجمة", content: "دعم متحدث حقيقي بالألمانية والإنجليزية. ترجمة مكتوبة (عربي ↔ ألماني ↔ إنجليزي). ترجمة شفهية للمواعيد. أشرح لماذا تعمل اللغة هكذا — لا فقط ماذا تقول." },
        { title: "تعليم الحاسوب لكبار السن", content: "تدريب هادئ وبسيط من الأساسيات (بريد، مكالمات فيديو، هاتف ذكي) إلى التعرف على الاحتيال الإلكتروني وما تجمعه أجهزتك عنك." }
      ],
      business: [
        { title: "عمليات خدمة العملاء", content: "إنشاء أو استلام تواصل عملائك بالعربية والألمانية والإنجليزية — قوالب ردود، أدلة معالجة، سير عمل دعم خط أول." },
        { title: "توثيق العمليات والإجراءات", content: "تحويل طريقة عمل فريقك إلى عمليات مكتوبة وقابلة للتكرار — خرائط وأدلة وقوائم تحقق وأشجار قرار. إذا كانت عمليتك تعتمد على الذاكرة، هذا يحل المشكلة." },
        { title: "محتوى متعدد اللغات والويب", content: "صفحات غنية بالمحتوى بالعربية والألمانية والإنجليزية — بما في ذلك التنسيقات التفاعلية كالألعاب والاختبارات. أتولى النص والبناء الأمامي الأساسي." },
        { title: "محو الأمية بالذكاء الاصطناعي وهندسة الأوامر", content: "تعليم الأفراد والفرق الصغيرة استخدام أدوات الذكاء الاصطناعي فعلاً — اختيار النموذج، هندسة الأوامر، دمج سير العمل، وفهم مخاطر الخصوصية والأمان الحقيقية." },
        { title: "بحث وتحليل السوق (MENA × DACH)", content: "بحث منظم عند تقاطع الأسواق الناطقة بالعربية والسياق الأوروبي — منافسون، فجوات، قرارات استراتيجية. تحصل على ملخص قابل للقراءة، لا مجرد روابط." }
      ]
    },
    skills: {
      title: "المهارات",
      categories: {
        communication: { label: "التواصل", items: ["العربية (لغة أم)", "الألمانية C1 – TELC", "الإنجليزية – مستوى احترافي"] },
        tools: { label: "الأدوات والأنظمة", items: ["أنظمة CRM والتذاكر (استخدام يومي)", "إدارة الحالات والتوثيق", "MS Office (بما في ذلك التقارير المنظمة)", "أنظمة إدارة الحجوزات (سياق فندقي)"] },
        methods: { label: "المنهجيات", items: ["إدارة التصعيد والشكاوى", "تحليل الاحتياجات وتفكيك المشكلات بشكل منظم", "التعرف على الأنماط في المشكلات المتكررة", "التنسيق متعدد الوظائف (دعم ↔ جودة ↔ عمليات)"] },
        progress: { label: "قيد التطوير", items: ["HTML/CSS/JavaScript (بناء مشاريع)", "أساسيات Python (موثق على LinkedIn)", "دمج سير عمل الذكاء الاصطناعي (استكشاف نشط)", "PowerShell/CMD (استكشافي)"] }
      }
    },
    projects: {
      title: "الأعمال",
      disclaimer: "مبنية على سير عمل حقيقية — تعكس طريقة تفكيري في المشكلات، لا منتجات نهائية.",
      problemLabel: "المشكلة", actionLabel: "الإجراء", resultLabel: "النتيجة", viewLive: "عرض المشروع المباشر →",
      items: [
        { label: "بحث في نماذج الذكاء الاصطناعي (مستمر)", title: "اختبار إجهاد النماذج اللغوية عند حالات الحدود الثقافية",
          url: "https://linkedin.com/in/hussam-alturki",
          problem: "معظم مقارنات الذكاء الاصطناعي تسأل: أي نموذج يكتب مقالات أفضل؟ لا أحد يختبر منهجياً كيف تتعامل النماذج مع التبديل متعدد اللغات، الاستدلال الفقهي الإسلامي، التعليمات المتضاربة، أو حالات الحدود في العربية والألمانية. هذه سيناريوهات مهنية حقيقية.",
          action: "صممت ونفذت اختبارات إجهاد منظمة عبر Claude وGPT وGemini وKimi وQwen باستخدام أوامر مبنية حول سياقات ثقافية ومهنية محددة. وثقت أنماط الاستجابة وأنماط الفشل والتحيزات المعمارية بمنهجية متسقة.",
          result: "نتائج مقارنة مفصلة حول أين تتفوق كل نموذج وتفشل في ظروف متخصصة. منشورة على LinkedIn. هذه معرفة تطبيقية بالذكاء الاصطناعي — فهم كيف تعمل النماذج، لا فقط ما تنتجه." },
        { label: "أدوات عمليات الدعم (حقيقي)", title: "نظام القوالب وأتمتة المؤشرات",
          problem: "في دعم الدردشة المباشرة ذات الحجم الكبير، يضيع الوكلاء وقتاً في التمرير عبر قوائم القوالب الطويلة. كل ثانية بحث تتراكم. تتبع المؤشرات الرئيسية كان يتطلب حساباً يدوياً بدون رؤية استباقية.",
          action: "بنيت لوحة Google Sheets منظمة — ملونة حسب مرحلة المحادثة، موسومة حسب نوع الموقف، كل شيء مرئي على شاشة واحدة. بنيت ورقة تتبع مؤشرات شخصية تحسب المقاييس تلقائياً وتتوقع الأداء. طورت عمداً أسلوب تواصل مميز — إيقاع جمل مختلف ونبرة مختلفة — لخلق تجربة عميل قابلة للتمييز.",
          result: "أوقات استجابة أسرع. جودة متسقة عبر جميع مراحل التفاعل. إدارة أداء استباقية. بصمة شخصية قابلة للقياس عبر توثيق الحالات." },
        { label: "لعبة تعليمية (مباشرة)", title: "الهروب من برلين",
          url: "https://huss4am7.github.io/escape-from-berlin/",
          problem: "الناطقون بالعربية الذين يتعلمون الألمانية يفتقرون إلى أدوات تدريب جذابة وذات سياق ملائم. التطبيقات القياسية لا تحاكي السيناريوهات اليومية والبيروقراطية الحقيقية في ألمانيا.",
          action: "بنيت لعبة متصفح متعددة اللغات باستخدام HTML/CSS/JS مع ثلاث مستويات صعوبة تصاعدية وأوضاع لعب متعددة وتنسيق فِرق تنافسي. تطبيق التبديل بين RTL/LTR وتصميم متجاوب.",
          result: "أداة تعليمية عملية قابلة للمشاركة تُظهر مهارات متعددة: علم اللغة التطبيقي، تطوير الواجهات، التفكير في تجربة المستخدم، سير عمل النشر." },
        { label: "وحدة السكن (مباشرة)", title: "البقاء في سوق السكن",
          url: "https://huss4am7.github.io/escape-from-berlin/housing_survival.html",
          problem: "الوافدون الجدد الناطقون بالعربية يواجهون منحنى تعليمي حاد في سوق الإيجار الألماني. الموارد الموجودة ثقيلة نصياً وسلبية.",
          action: "بنيت وحدة لعبة مستقلة تحاكي سيناريوهات البحث عن سكن حقيقية — قرارات، ردود المالك، تعلم التسلسل الصحيح من خلال لعب قائم على العواقب.",
          result: "أداة تعليمية مغمّسة تغطي واحدة من أكثر نقاط الألم شيوعاً. تترجم المعرفة البيروقراطية إلى تجربة تفاعلية منظمة." }
      ]
    },
    contact: {
      title: "لنتحدث",
      openToWork: "متاح للعمل عن بعد في مجالات عمليات الدعم، الكتابة التقنية، أو سير العمل المدعومة بالذكاء الاصطناعي. مقيم حالياً في أوغسبورغ، ألمانيا.",
      downloadCv: "تحميل السيرة الذاتية"
    },
    qr: { cardLabel: "بطاقة أعمال رقمية", title: "امسح للاطلاع على ملفي المهني", role: "أخصائي دعم · AR · DE · EN", location: "أوغسبورغ، ألمانيا" },
    print: {
      name: "حسام التركي", title: "أخصائي دعم · متعدد اللغات · جاهز للعمل عن بعد",
      email: "huss4am@gmail.com", phone: "+49 176 21256819", linkedin: "linkedin.com/in/hussam-alturki",
      backLanguages: "اللغات: AR · DE · EN", backLocation: "الموقع: أوغسبورغ، ألمانيا", backGithub: "GitHub: github.com/huss4am7"
    },
    footer: { text: "© 2026 حسام التركي · مبني باستخدام HTML/CSS/JS · مستضاف على GitHub Pages" }
  },

  de: {
    nav: {
      about: "Über mich", experience: "Berufserfahrung", services: "Dienstleistungen",
      skills: "Fähigkeiten", projects: "Fallstudien", contact: "Kontakt"
    },
    hero: {
      name: "Hussam Alturki",
      tagline: "Ich lebe zwischen drei Kulturen, drei Sprachen und drei Karrierewegen — und habe aufgehört, das zu erklären. Ich baue einfach damit.",
      subtext: "Support-Operationen · KI-Forschung · Mehrsprachige Tools für Menschen, die durch die Raster herkömmlicher Systeme fallen.",
      ctaPrimary: "Fallstudien ansehen", ctaSecondary: "Kontakt aufnehmen", downloadCv: "Lebenslauf herunterladen"
    },
    about: {
      title: "Über mich",
      content: `<p>Ich kam nach Deutschland, ohne zu wissen, wie das hier funktioniert. Ich lernte es — auf die harte Tour, durch Bürokratie, Sprache und ein System, das voraussetzt, dass man die Regeln bereits kennt. Diese Erfahrung ist heute eines meiner nützlichsten Werkzeuge.</p>
      <p>Heute arbeite ich bei Concentrix mit komplexen Meta-Eskalationen — CRM-Dokumentation, Qualitätsstandards unter Druck. Davor: Außendienst bei Vodafone, Rezeption in drei Sprachen, freiberuflicher IT-Support. Der rote Faden: ich finde, was wirklich nicht funktioniert — nicht nur, was gemeldet wird.</p>
      <p>Nebenbei: ich baue Browser-Lernspiele für Arabischsprachige im deutschen Alltag. Ich führe strukturierte Stresstests an LLMs durch, um zu verstehen, wo sie wirklich scheitern. Ich helfe Menschen in meiner Community bei Wohnungssuche, Bewerbungen und Behördenterminen. Ich habe mich intern für eine Team-Lead-Stelle beworben — nicht weil ich musste, sondern weil ich das Team um mich herum besser machen wollte.</p>
      <p>Ich habe noch keine saubere Karriere-Erzählung. Was ich habe, ist ein sehr spezifisches Kompetenz-Set an einem sehr ungewöhnlichen Schnittpunkt — und ich baue damit auf etwas hin.</p>`
    },
    beliefs: {
      title: "Was ich glaube",
      items: [
        { statement: "Die meisten Support-Fehler sind Dokumentationsfehler.", detail: "Das Problem wurde schon einmal gelöst — es wurde nur nicht gut genug aufgeschrieben, um es wieder zu lösen." },
        { statement: "Sprache ist nicht nur Kommunikation. Sie ist Zugang.", detail: "Wer ein System nicht in seiner Sprache navigieren kann, hat keinen echten Zugang dazu — egal was auf dem Papier steht." },
        { statement: "KI-Tools sind nur so gut wie die Person, die sie benutzt.", detail: "Ich habe genug Modelle getestet um zu wissen: Der Engpass ist fast nie das Modell. Es ist der Prompt, der Kontext, das Urteilsvermögen." },
        { statement: "Der beste Support-Agent im Raum ist nicht immer der schnellste.", detail: "Geschwindigkeit zählt. Aber wer das Template baut, das alle schneller macht — das ist eine andere Art von Wert." }
      ]
    },
    experience: {
      title: "Berufserfahrung",
      items: [
        { period: "09.2023 – Aktuell", role: "Customer Support Specialist", company: "Concentrix · Meta Platforms", points: "Tier-1-Support via Chat/E-Mail/Outbound. Komplexe Fallbearbeitung. Tägliche CRM-Arbeit. Strukturierte Falldokumentation. Interne Bewerbung Team Lead (deutsches Team)." },
        { period: "03.2023 – 08.2023", role: "Field Sales Partner", company: "Vodafone", points: "Direkte Kundenberatung. Bedarfsanalyse. Beschwerdemanagement. Vertragsabschluss." },
        { period: "10.2022 – 03.2023", role: "Rezeptionist", company: "Select Hotel Augsburg", points: "Gästebetreuung auf DE/EN/AR. Buchungssysteme. Abteilungsübergreifende Koordination." },
        { period: "08.2021 – 06.2023", role: "IT-Support (Freelance)", company: "Selbstständig", points: "Hardware-/Software-Support. Geräte-Rollouts. Eigenständiges Kundenmanagement." },
        { period: "02.2020 – 09.2022", role: "Event Manager", company: "Xclusive Events", points: "Komplette Eventkoordination vom Briefing bis zum Wrap-up. Vor-Ort-Teamleitung." }
      ]
    },
    services: {
      title: "Dienstleistungen", tabA: "Für die arabische Community", tabB: "Für Unternehmen", locationNote: "Vor Ort · Raum Augsburg",
      community: [
        { title: "Stellensuche & Bewerbung", content: "Realistische Stellensuche passend zu Fähigkeiten und Deutschkenntnissen. Lebenslauf, Anschreiben, Bewerbungscoaching — und direkte Rückmeldung zu Ihren konkreten Dokumenten vor dem Absenden. Keine Allgemeinratschläge." },
        { title: "Wohnungssuche", content: "Schufa, Mietvertrag, Selbstauskunft — und wie man sich überzeugend als Mieter präsentiert. Ich kenne diesen Markt von innen." },
        { title: "Behördengänge & Dokumente", content: "Jobcenter, Ausländerbehörde, Versicherung, Bank. Formulare, Übersetzungen, Begleitung bei Terminen. Persönlich, wo es darauf ankommt." },
        { title: "Sprachunterstützung & Übersetzung", content: "Echte Sprecherunterstützung auf Deutsch und Englisch. Schriftliche Übersetzung (AR ↔ DE ↔ EN). Dolmetschen bei Terminen. Ich erkläre warum die Sprache so funktioniert — nicht nur was man sagen soll." },
        { title: "Computertraining für Senioren", content: "Geduldiges Training von Grundlagen (E-Mail, Videoanrufe, Smartphones) bis Erkennen von Betrugsmaschen und was Ihre Geräte über Sie sammeln." }
      ],
      business: [
        { title: "Kundenservice-Operations", content: "Aufbau oder Übernahme der Kundenkommunikation auf AR/DE/EN — Antwortvorlagen, Leitfäden, First-Line-Support-Workflows." },
        { title: "Prozessdokumentation & SOPs", content: "Aus der Arbeitsweise Ihres Teams werden schriftliche, wiederholbare Prozesse — Ablaufpläne, Leitfäden, Checklisten, Entscheidungsbäume. Wenn Ihre Prozesse im Kopf von Leuten stecken statt in Dokumenten, löst das das Problem." },
        { title: "Mehrsprachige Inhalte & Web", content: "Inhaltsreiche Seiten auf AR/DE/EN — inklusive interaktiver Formate wie Spiele, Quiz oder Lerntools. Text und einfaches Frontend." },
        { title: "KI-Grundlagen & Prompt Engineering", content: "Einzelpersonen oder kleine Teams lernen, KI-Tools wirklich zu nutzen — Modellauswahl, Prompt Engineering, Workflow-Integration und echtes Verständnis der Datenschutz- und Sicherheitsrisiken." },
        { title: "Recherche & Marktanalyse (MENA × DACH)", content: "Strukturierte Recherche am Schnittpunkt arabischsprachiger und europäischer Märkte — Wettbewerb, Lücken, strategische Entscheidungen. Ergebnis: lesbares Briefing, keine Linksammlung." }
      ]
    },
    skills: {
      title: "Fähigkeiten",
      categories: {
        communication: { label: "Kommunikation", items: ["Arabisch (Muttersprache)", "Deutsch C1 – TELC-zertifiziert", "Englisch – verhandlungssicher"] },
        tools: { label: "Tools & Systeme", items: ["CRM- & Ticketing-Systeme (täglicher Einsatz)", "Fallmanagement & Dokumentation", "MS Office (inkl. strukturiertes Reporting)", "Buchungssysteme (Hotelkontext)"] },
        methods: { label: "Methoden", items: ["Deeskalation & Beschwerdemanagement", "Bedarfsanalyse & strukturierte Problemzerlegung", "Mustererkennung bei wiederkehrenden Problemen", "Abteilungsübergreifende Koordination (Support ↔ QA ↔ Ops)"] },
        progress: { label: "In Entwicklung", items: ["HTML/CSS/JavaScript (Projekte in Entwicklung)", "Python-Grundlagen (auf LinkedIn dokumentiert)", "KI-Workflow-Integration (aktive Erkundung)", "PowerShell/CMD (explorativ)"] }
      }
    },
    projects: {
      title: "Fallstudien",
      disclaimer: "Basierend auf realen Workflows — zeigen meine Denkweise, keine ausgelieferten Produktivsysteme.",
      problemLabel: "Problem", actionLabel: "Vorgehen", resultLabel: "Ergebnis", viewLive: "Live-Projekt ansehen →",
      items: [
        { label: "LLM-Forschung (Laufend)", title: "LLMs an kulturellen Grenzfällen testen",
          url: "https://linkedin.com/in/hussam-alturki",
          problem: "Die meisten KI-Vergleiche fragen: welches Modell schreibt bessere Aufsätze? Niemand testet systematisch, wie LLMs mit mehrsprachigem Kontextwechsel, islamisch-juristischem Reasoning, widersprüchlichen Anweisungen oder arabisch/deutschen Sprachgrenzfällen umgehen. Das sind echte Berufsszenarien — keine Spielprompts.",
          action: "Strukturierte Stresstests über Claude, GPT, Gemini, Kimi und Qwen mit Prompts um spezifische kulturelle und professionelle Kontexte. Dokumentation von Antwortmustern, Fehlermodi und architektonischen Biases mit konsistenter Methodik.",
          result: "Detaillierte Vergleichsergebnisse, wo jedes Modell unter spezialisierten Bedingungen glänzt und versagt. Auf LinkedIn veröffentlicht. Angewandte KI-Kompetenz — Verständnis wie Modelle arbeiten, nicht nur was sie produzieren." },
        { label: "Support-Ops (Real)", title: "Template-System & KPI-Automatisierung",
          problem: "Im High-Volume-Live-Chat verschwenden Agenten Zeit mit dem Scrollen durch lange Vorlagenlisten. Jede Suchsekunde summiert sich. KPI-Tracking erforderte manuelle Berechnung ohne Vorausschau.",
          action: "Strukturiertes Google-Sheets-Dashboard — farbcodiert nach Gesprächsphase, emoji-getaggt nach Situationstyp, alles auf einem Bildschirm. Persönliches KPI-Tracking-Sheet, das täglich automatisch berechnet und Leistung projiziert. Bewusst entwickelter eigener Schreibstil — anderer Rhythmus und Ton — für eine erkennbare Kundenerfahrung.",
          result: "Schnellere Antwortzeiten. Konsistente Qualität. Proaktives Performance-Management statt reaktiver Überraschungen. Eine messbare persönliche Handschrift." },
        { label: "Lernspiel (Live)", title: "Escape from Berlin",
          url: "https://huss4am7.github.io/escape-from-berlin/",
          problem: "Arabischsprachige Deutschlerner haben keine ansprechenden, kontextrelevanten Übungstools. Standard-Apps simulieren keine realen deutschen Alltagsszenarien.",
          action: "Mehrsprachiges Browser-Spiel in HTML/CSS/JS mit drei Schwierigkeitsstufen, mehreren Modi und kompetitivem Multi-Team-Format. RTL/LTR-Layout-Switching, responsives Design, GitHub Pages.",
          result: "Funktionales, teilbares Bildungstool — Sprachdidaktik, Frontend-Entwicklung, UX-Denken und Deployment-Workflow in einem." },
        { label: "Wohnungsmodul (Live)", title: "Housing Survival",
          url: "https://huss4am7.github.io/escape-from-berlin/housing_survival.html",
          problem: "Arabischsprachige Neuankömmlinge stehen vor einer steilen Lernkurve im deutschen Mietmarkt. Bestehende Ressourcen sind textlastig und passiv.",
          action: "Eigenständiges Spielmodul simuliert reale Wohnungssuchszenarien — Entscheidungen, typische Vermieterantworten, korrekte Schrittfolge durch konsequenzbasiertes Gameplay.",
          result: "Praktisches gamifiziertes Tool für einen der häufigsten Schmerzpunkte arabischsprachiger Menschen in Deutschland. Übersetzt bürokratisches Domänenwissen in strukturierte interaktive Erfahrung." }
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
      backLanguages: "Sprachen: AR · DE · EN", backLocation: "Standort: Augsburg, DE", backGithub: "GitHub: github.com/huss4am7"
    },
    footer: { text: "© 2026 Hussam Alturki · Erstellt mit HTML/CSS/JS · Gehostet auf GitHub Pages" }
  }
};
