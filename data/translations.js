const translations = {
  en: {
    nav: {
      about: "About", experience: "Experience", services: "Services",
      skills: "Skills", projects: "Case Studies", contact: "Contact"
    },
    hero: {
      name: "Hussam Alturki",
      tagline: "Support Systems · Clear Communication · Structured Thinking",
      subtext: "I turn complex user problems into documented, scalable solutions — across three languages, in real-time.",
      ctaPrimary: "View Case Studies", ctaSecondary: "Get in Touch", downloadCv: "Download CV"
    },
    about: {
      title: "About",
      content: `<p>I'm a multilingual support specialist based in Augsburg, Germany, currently working at Concentrix on Meta Platforms (Tier-1, chat/email/outbound). My work involves handling complex user escalations, maintaining case documentation in CRM systems, and applying consistent quality standards under pressure.</p>
      <p>My background spans customer-facing roles across support, field sales (Vodafone), hospitality (Select Hotel Augsburg), and independent IT support. The thread across all of it: identifying what's actually broken, not just what the user reports — and communicating the fix clearly.</p>
      <p>I recently completed my secondary education (Mittlere Reife) at Bayernkolleg Augsburg and am actively building toward a transition into remote tech-adjacent roles — specifically support operations, technical writing, or AI-assisted workflows.</p>`
    },
    experience: {
      title: "Experience",
      items: [
        { period: "09.2023 – Present", role: "Customer Support Specialist", company: "Concentrix · Meta Platforms", points: "Tier-1 support via chat/email/outbound. Complex case handling. Daily CRM & ticketing work. Structured case documentation." },
        { period: "03.2023 – 08.2023", role: "Field Sales Partner", company: "Vodafone", points: "Direct customer consultation. Needs analysis. Complaint resolution. Contract closing." },
        { period: "10.2022 – 03.2023", role: "Receptionist", company: "Select Hotel Augsburg", points: "Guest handling in DE/EN/AR. Booking systems. Cross-department coordination." },
        { period: "08.2021 – 06.2023", role: "IT Support (Freelance)", company: "Self-employed", points: "Hardware/software support. Device rollouts. Independent client management." },
        { period: "02.2020 – 09.2022", role: "Event Manager", company: "Xclusive Events", points: "Full event coordination from briefing to wrap-up. On-site team leadership." }
      ]
    },
    services: {
      title: "Services", tabA: "For the Arab Community", tabB: "For Businesses", locationNote: "In person · Augsburg area",
      community: [
        { title: "Job Search Assistance", content: "Identifying realistic job opportunities based on your actual skills and German level — no false promises, just a clear-eyed match between what you offer and what the market needs." },
        { title: "Job Market Preparation", content: "CV in German, Anschreiben (cover letter), interview coaching, and understanding what German employers actually expect — including unwritten norms." },
        { title: "Housing Search Support", content: "Navigating the German rental market — Schufa, Mietvertrag, Selbstauskunft, and how to present yourself convincingly as a tenant." },
        { title: "Language Support (German & English)", content: "Not a formal tutor — a real speaker who explains why the language works the way it does, helps you practice real situations, and reviews your texts before you send them." },
        { title: "Document Preparation & Bureaucracy", content: "Filling out forms (Jobcenter, Ausländerbehörde, insurance, bank), organizing document files, translating official letters, and accompanying you to appointments as an interpreter." },
        { title: "Translation & Interpretation", content: "Written translation (Arabic ↔ German ↔ English) for personal documents and official letters. Verbal interpretation for appointments in person or by phone." },
        { title: "Job Application Review & Feedback", content: "I read your actual application — CV, cover letter, and the job posting — and tell you specifically what works, what doesn't, and what a German hiring manager will think. No generic tips: direct feedback on your specific documents before you send them." },
        { title: "Computer Literacy for Seniors", content: "Patient, jargon-free computer training for older adults — from basics (email, video calls, smartphones) to safe internet use, recognizing online scams, protecting personal data, and understanding what information your devices are collecting about you." }
      ],
      business: [
        { title: "Deep Research & Decision Support", content: "Structured research to evaluate a business idea, market, or strategic decision. You get a readable brief with key findings and options — not a pile of links." },
        { title: "Paid Advertising Planning", content: "Ad plans for Meta, Google, TikTok, and LinkedIn — targeting strategy, budget allocation, audience definition, and copy in Arabic, German, or English. Built on real platform knowledge from daily professional exposure." },
        { title: "Project Consulting (Pre-launch & During)", content: "Thinking through your project before it launches — what assumptions need testing, what risks need addressing. During the project: a structured outside perspective to catch drift from the original goal." },
        { title: "Customer Service Operations", content: "Setting up or taking over your customer communication — chat, email, social DMs. I write response templates, build handling guides, and structure a first-line support workflow in AR/DE/EN." },
        { title: "Multilingual Content & Web Pages", content: "Content-rich web pages in Arabic, German, and English — including creative formats like interactive games, quizzes, or learning tools. I handle both the writing and the basic frontend build." },
        { title: "Social Media Content Strategy", content: "A consistent content rhythm for LinkedIn, Instagram, or Facebook — content calendar, post structure, tone guidelines, and sample posts. Focused on Arabic-speaking and DACH audiences." },
        { title: "Process Documentation & SOPs", content: "Turning how your team works into written, repeatable processes — maps, guides, checklists, decision trees. If your operation relies on people remembering things instead of documents, this fixes that." },
        { title: "Competitor & Market Analysis (MENA × DACH)", content: "Research for businesses at the intersection of Arabic-speaking markets and the German/European context — what your competitors offer, how they communicate, and where the gaps are." },
        { title: "AI-Assisted Research & Workflow Design", content: "Using AI tools effectively to compress research time and build repeatable workflows — then handing you a process your team can run independently." },
        { title: "AI Literacy, Prompt Engineering & Digital Safety", content: "Teaching individuals or small teams how to actually use AI tools — not just open ChatGPT and hope for the best. Covers: prompt engineering principles, comparing and selecting the right model for the task, integrating AI into daily workflows, and critically understanding the privacy risks, data collection practices, and cybersecurity implications of using these tools. You leave knowing what AI can and cannot do, how to protect your information, and how to get consistently useful output." }
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
      disclaimer: "Based on real support workflows — examples reflect how I approach problems, not shipped production work.",
      problemLabel: "Problem", actionLabel: "Action", resultLabel: "Result", viewLive: "View Live Project →",
      items: [
        { label: "Educational Game (Live)", title: "Escape from Berlin", url: "https://huss4am7.github.io/escape-from-berlin/",
          problem: "Arabic-speaking learners of German lack engaging, context-relevant practice tools. Standard apps don't simulate real German bureaucratic and daily-life scenarios.",
          action: "Built a multilingual browser game in HTML/CSS/JS with three progressive difficulty levels, multiple game modes, and a competitive multi-team format. Deployed on GitHub Pages. Implemented RTL/LTR layout switching, self-contained download functionality, and responsive design.",
          result: "A functional, shareable educational tool demonstrating cross-domain skills: language pedagogy, frontend development, UX thinking, and deployment workflow." },
        { label: "Educational Game — Housing Module (Live)", title: "Housing Survival", url: "https://huss4am7.github.io/escape-from-berlin/housing_survival.html",
          problem: "Arabic-speaking newcomers to Germany face a steep learning curve when navigating the rental market — Schufa, Mietvertrag, Selbstauskunft, landlord expectations. Existing resources are text-heavy and passive; learners need to practice decision-making under realistic pressure.",
          action: "Built a standalone game module simulating real German housing search scenarios — players make decisions, encounter typical landlord responses, and learn the correct sequence of steps through consequence-based gameplay. Integrated into the same RTL/LTR bilingual framework as the main game.",
          result: "A practical, gamified learning tool covering one of the most common pain points for Arabic speakers in Germany. Demonstrates ability to translate real-world domain knowledge (bureaucratic processes, cultural norms) into structured interactive experiences." },
        { label: "Support Ops Tooling (Real)", title: "Template System & KPI Automation",
          problem: "In high-volume live chat support, agents waste significant time scrolling through long template lists to find the right response for each situation — greeting, hold message, escalation, closure. Every second of search time compounds across dozens of daily interactions. Additionally, tracking personal KPIs (quality score, handle time, case volume) required manual calculation with no forward visibility.",
          action: "Built a structured Google Sheets template dashboard — color-coded by conversation phase (Start / Zeitmanagement / Abschluss), emoji-tagged by situation type, all visible on a single screen without scrolling. Eliminated search friction entirely. Developed a personal KPI tracking sheet that auto-calculates daily metrics, projects performance against targets, and allows scenario modeling. Deliberately developed a distinct written communication style — different sentence rhythm, word choice, and tone from standard agent templates — to create a consistent, recognizable customer experience.",
          result: "Faster response times. Consistent quality across all interaction phases. Proactive performance management instead of reactive end-of-week surprises. A measurable personal fingerprint across case documentation." },
        { label: "LLM Comparative Research (Ongoing)", title: "LLM Comparative Stress Testing", url: "https://linkedin.com/in/hussam-alturki",
          problem: "Most AI tool comparisons are surface-level — 'which model writes better essays?' Nobody systematically tests how different LLMs handle edge cases specific to real professional workflows: multilingual context switching, culturally nuanced requests, conflicting instructions, or prompts that require genuine structural reasoning vs. pattern-matching.",
          action: "Designed and ran structured stress tests across multiple LLM models (Claude, GPT, Gemini, Kimi, Qwen) using prompts built around specific professional and cultural contexts — including non-Western frameworks, Islamic jurisprudential reasoning, and Arabic/German language edge cases. Documented response patterns, failure modes, and architectural biases. Applied strict analytical methodology: consistent prompt structure, controlled variables, documented results.",
          result: "Detailed comparative findings on where each model excels and fails under specialized conditions. Insights published on LinkedIn. Demonstrates applied AI literacy beyond surface-level usage — understanding how models work, not just what they produce." }
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
      tagline: "أنظمة دعم · تواصل واضح · تفكير منظم",
      subtext: "أحوّل مشكلات المستخدمين المعقدة إلى حلول موثقة وقابلة للتطوير — بثلاث لغات، في الوقت الفعلي.",
      ctaPrimary: "استعرض الأعمال", ctaSecondary: "تواصل معي", downloadCv: "تحميل السيرة الذاتية"
    },
    about: {
      title: "نبذة عني",
      content: `<p>أنا متخصص دعم متعدد اللغات مقيم في أوغسبورغ، ألمانيا. أعمل حالياً في Concentrix لصالح Meta Platforms (مستوى أول — دردشة، بريد إلكتروني، مكالمات صادرة). عملي يشمل معالجة التصعيدات المعقدة، توثيق الحالات في أنظمة CRM، وتطبيق معايير الجودة تحت الضغط.</p>
      <p>خلفيتي تمتد عبر أدوار متعددة: دعم العملاء، مبيعات ميدانية (Vodafone)، استقبال فندقي (Select Hotel Augsburg)، ودعم تقني مستقل. القاسم المشترك في كل ذلك: تحديد المشكلة الحقيقية وليس فقط ما يُبلَّغ عنه — ثم توصيل الحل بوضوح.</p>
      <p>أتممت مؤخراً شهادة التعليم الثانوي (Mittlere Reife) من Bayernkolleg Augsburg، وأعمل بنشاط على الانتقال نحو أدوار تقنية عن بعد — تحديداً عمليات الدعم، الكتابة التقنية، أو سير العمل المدعومة بالذكاء الاصطناعي.</p>`
    },
    experience: {
      title: "الخبرة المهنية",
      items: [
        { period: "09.2023 – الآن", role: "أخصائي دعم العملاء", company: "Concentrix · Meta Platforms", points: "دعم المستوى الأول عبر الدردشة والبريد الإلكتروني والمكالمات الصادرة. معالجة الحالات المعقدة. العمل اليومي على أنظمة CRM والتذاكر. توثيق منظم للحالات." },
        { period: "03.2023 – 08.2023", role: "شريك مبيعات ميدانية", company: "Vodafone", points: "استشارات مباشرة للعملاء. تحليل الاحتياجات. حل الشكاوى. إتمام العقود." },
        { period: "10.2022 – 03.2023", role: "موظف استقبال", company: "Select Hotel Augsburg", points: "التعامل مع النزلاء بالألمانية والإنجليزية والعربية. أنظمة الحجز. التنسيق بين الأقسام." },
        { period: "08.2021 – 06.2023", role: "دعم تقني (مستقل)", company: "عمل حر", points: "دعم الأجهزة والبرامج. توزيع الأجهزة. إدارة مستقلة للعملاء." },
        { period: "02.2020 – 09.2022", role: "منظم فعاليات", company: "Xclusive Events", points: "التنسيق الكامل للفعاليات من التخطيط إلى التنفيذ. قيادة الفريق في الموقع." }
      ]
    },
    services: {
      title: "الخدمات", tabA: "للمجتمع العربي", tabB: "لأصحاب المشاريع", locationNote: "حضورياً · منطقة أوغسبورغ",
      community: [
        { title: "مساعدة في إيجاد عمل", content: "تحديد فرص العمل المناسبة لمستواك الفعلي ومهاراتك ولغتك — بدون وعود فارغة، فقط تطابق واقعي بين ما تقدمه وما يحتاجه السوق." },
        { title: "التهيئة لسوق العمل", content: "السيرة الذاتية بالألمانية، خطاب التقديم (Anschreiben)، تدريب على المقابلات، وشرح ما يتوقعه أصحاب العمل الألمان فعلاً — بما في ذلك الأعراف غير المكتوبة." },
        { title: "مساعدة في البحث عن سكن", content: "التنقل في سوق الإيجار الألماني — فهم Schufa وعقد الإيجار والتقديم الذاتي، وكيف تقدم نفسك بشكل مقنع كمستأجر." },
        { title: "دعم تعلم الألمانية والإنجليزية", content: "لست مدرساً رسمياً — متحدث حقيقي يشرح سبب عمل اللغة بهذه الطريقة، يساعدك على التدرب على مواقف حقيقية، ويراجع نصوصك قبل إرسالها." },
        { title: "تنظيم الأوراق والتعامل مع الجهات الرسمية", content: "تعبئة الاستمارات (Jobcenter، Ausländerbehörde، تأمين، بنك)، تنظيم الملفات، ترجمة الرسائل الرسمية، والمرافقة إلى المواعيد كمترجم." },
        { title: "الترجمة والتفسير", content: "ترجمة مكتوبة (عربي ↔ ألماني ↔ إنجليزي) للوثائق الشخصية والرسائل الرسمية. ترجمة شفهية للمواعيد حضورياً أو هاتفياً." },
        { title: "مراجعة طلب التوظيف وتقديم ملاحظات", content: "أقرأ طلبك الفعلي — السيرة الذاتية وخطاب التقديم وإعلان الوظيفة — وأخبرك تحديداً ما الذي يعمل، وما الذي لا يعمل، وما الذي سيفكر فيه مدير التوظيف الألماني. لا نصائح عامة: ملاحظات مباشرة على مستنداتك الفعلية قبل إرسالها." },
        { title: "تعليم الحاسوب لكبار السن", content: "تدريب هادئ وبسيط على الحاسوب لكبار السن — من الأساسيات (البريد الإلكتروني، مكالمات الفيديو، الهاتف الذكي) إلى الاستخدام الآمن للإنترنت، التعرف على عمليات الاحتيال الإلكتروني، حماية البيانات الشخصية، وفهم ما تجمعه الأجهزة عنك." }
      ],
      business: [
        { title: "بحث معمق ودعم القرار", content: "بحث منظم لتقييم فكرة أو سوق أو قرار استراتيجي. تحصل على ملخص قابل للقراءة بالنتائج الرئيسية وخيارات التوصية — لا مجرد روابط." },
        { title: "تخطيط الإعلانات المدفوعة", content: "خطط إعلانية لـ Meta وGoogle وTikTok وLinkedIn — استراتيجية استهداف، توزيع ميزانية، تحديد جمهور، ونصوص إعلانية بالعربية أو الألمانية أو الإنجليزية. مبني على معرفة حقيقية بالمنصات." },
        { title: "استشارات المشاريع", content: "التفكير في مشروعك قبل إطلاقه — ما الافتراضات التي تحتاج اختباراً، وما المخاطر التي تحتاج معالجة. أثناء المشروع: منظور خارجي منظم لرصد الانحراف عن الهدف الأصلي." },
        { title: "إدارة عمليات خدمة العملاء", content: "إنشاء أو استلام تواصل عملائك — دردشة، بريد إلكتروني، رسائل مباشرة. أكتب قوالب الردود وأبني أدلة المعالجة وأهيكل سير عمل الدعم بالعربية والألمانية والإنجليزية." },
        { title: "محتوى متعدد اللغات وصفحات ويب", content: "صفحات ويب غنية بالمحتوى بالعربية والألمانية والإنجليزية — بما في ذلك التنسيقات الإبداعية كالألعاب التفاعلية والاختبارات. أتولى النص والبناء الأمامي الأساسي." },
        { title: "استراتيجية محتوى وسائل التواصل", content: "إيقاع محتوى منتظم لـ LinkedIn أو Instagram أو Facebook — تقويم محتوى، هيكل منشورات، إرشادات أسلوب، ومنشورات نموذجية. تركيز على الجمهور العربي وأسواق DACH." },
        { title: "توثيق العمليات والإجراءات", content: "تحويل طريقة عمل فريقك إلى عمليات مكتوبة وقابلة للتكرار — خرائط وأدلة وقوائم تحقق وأشجار قرار. إذا كانت عمليتك تعتمد على ذاكرة الناس، هذا يحل المشكلة." },
        { title: "تحليل السوق والمنافسين", content: "بحث للأعمال التي تعمل عند تقاطع الأسواق الناطقة بالعربية والسياق الأوروبي — ما يقدمه المنافسون، كيف يتواصلون، وأين الفجوات." },
        { title: "البحث بمساعدة الذكاء الاصطناعي", content: "استخدام أدوات الذكاء الاصطناعي لتقليص وقت البحث وبناء سير عمل قابلة للتكرار — ثم تسليمك عملية يستطيع فريقك تشغيلها باستقلالية." },
        { title: "محو الأمية الرقمية والذكاء الاصطناعي وهندسة الأوامر", content: "تعليم الأفراد أو الفرق الصغيرة كيفية استخدام أدوات الذكاء الاصطناعي فعلاً — لا مجرد فتح ChatGPT والأمل في الأفضل. يشمل: مبادئ هندسة الأوامر (Prompt Engineering)، المقارنة بين النماذج واختيار المناسب للمهمة، دمج الذكاء الاصطناعي في سير العمل اليومي، وفهم نقدي لمخاطر الخصوصية وممارسات جمع البيانات والآثار الأمنية لاستخدام هذه الأدوات. تغادر وأنت تعرف ما يستطيع الذكاء الاصطناعي فعله وما لا يستطيع، كيف تحمي معلوماتك، وكيف تحصل على مخرجات مفيدة باستمرار." }
      ]
    },
    skills: {
      title: "المهارات",
      categories: {
        communication: { label: "التواصل", items: ["العربية (لغة أم)", "الألمانية C1", "الإنجليزية – مستوى احترافي"] },
        tools: { label: "الأدوات والأنظمة", items: ["أنظمة CRM والتذاكر (استخدام يومي)", "إدارة الحالات والتوثيق", "MS Office (بما في ذلك التقارير المنظمة)", "أنظمة إدارة الحجوزات (سياق فندقي)"] },
        methods: { label: "المنهجيات", items: ["إدارة التصعيد والشكاوى", "تحليل الاحتياجات وتفكيك المشكلات بشكل منظم", "التعرف على الأنماط في المشكلات المتكررة", "التنسيق متعدد الوظائف (دعم ↔ جودة ↔ عمليات)"] },
        progress: { label: "قيد التطوير", items: ["HTML/CSS/JavaScript (بناء مشاريع)", "أساسيات Python (موثق على LinkedIn)", "دمج سير عمل الذكاء الاصطناعي (استكشاف نشط)", "PowerShell/CMD (استكشافي)"] }
      }
    },
    projects: {
      title: "الأعمال",
      disclaimer: "مبنية على سير عمل دعم حقيقية — الأمثلة تعكس طريقة تفكيري في حل المشكلات، وليست منتجات نهائية.",
      problemLabel: "المشكلة", actionLabel: "الإجراء", resultLabel: "النتيجة", viewLive: "عرض المشروع المباشر →",
      items: [
        { label: "لعبة تعليمية (مباشرة)", title: "الهروب من برلين", url: "https://huss4am7.github.io/escape-from-berlin/",
          problem: "يتعلم الناطقون بالعربية الألمانية ويفتقرون إلى أدوات تدريب جذابة وذات سياق ملائم. التطبيقات القياسية لا تحاكي السيناريوهات البيروقراطية واليومية الحقيقية في ألمانيا.",
          action: "بنيت لعبة متصفح متعددة اللغات باستخدام HTML/CSS/JS مع ثلاث مستويات صعوبة تصاعدية، وأوضاع لعب متعددة، وتنسيق فِرق تنافسي. تم النشر على GitHub Pages. تم تنفيذ التبديل بين تخطيط RTL/LTR، وظيفة التنزيل المستقل، وتصميم متجاوب.",
          result: "أداة تعليمية عملية قابلة للمشاركة تُظهر مهارات متعددة المجالات: علم اللغة التطبيقي، تطوير الواجهات الأمامية، التفكير في تجربة المستخدم، وسير عمل النشر." },
        { label: "لعبة تعليمية — وحدة السكن (مباشرة)", title: "البقاء في سوق السكن", url: "https://huss4am7.github.io/escape-from-berlin/housing_survival.html",          problem: "يواجه الوافدون الجدد الناطقون بالعربية إلى ألمانيا منحنى تعليمي حاد في التنقل بسوق الإيجار — Schufa، عقد الإيجار، Selbstauskunft، توقعات المالك. الموارد الموجودة ثقيلة نصياً وسلبية؛ يحتاج المتعلمون إلى ممارسة اتخاذ القرارات تحت ضغط واقعي.",
          action: "بنيت وحدة لعبة مستقلة تحاكي سيناريوهات البحث عن السكن في ألمانيا — يتخذ اللاعبون قرارات، يواجهون ردود المالك النموذجية، ويتعلمون التسلسل الصحيح للخطوات من خلال لعب قائم على العواقب. تم دمجها في نفس إطار العمل ثنائي اللغة RTL/LTR مثل اللعبة الرئيسية.",
          result: "أداة تعليمية عملية مغمّسة تغطي واحدة من أكثر نقاط الألم شيوعاً للناطقين بالعربية في ألمانيا. تُظهر القدرة على ترجمة المعرفة المجالية الواقعية (العمليات البيروقراطية، الأعراف الثقافية) إلى تجارب تفاعلية منظمة." },
        { label: "أدوات عمليات الدعم (حقيقي)", title: "نظام القوالب وأتمتة المؤشرات الرئيسية",
          problem: "في دعم الدردشة المباشرة ذات الحجم الكبير، يضيع الوكلاء وقتاً كبيراً في التمرير عبر قوائم القوالب الطويلة للعثور على الرد المناسب لكل موقف — التحية، رسالة الانتظار، التصعيد، الإغلاق. كل ثانية من وقت البحث تتراكب عبر عشرات التفاعلات اليومية. بالإضافة إلى ذلك، تتبع المؤشرات الرئيسية الشخصية (درجة الجودة، وقت المعالجة، حجم الحالات) تتطلب حساباً يدوياً بدون رؤية استباقية.",
          action: "بنيت لوحة معلومات Google Sheets منظمة — ملونة حسب مرحلة المحادثة (بداية / إدارة الوقت / ختام)، موسومة بالرموز التعبيرية حسب نوع الموقف، كلها مرئية على شاشة واحدة بدون تمرير. تم القضاء على احتكاك البحث بالكامل. طورت ورقة تتبع مؤشرات رئيسية شخصية تحسب المقاييس اليومية تلقائياً، وتتوقع الأداء مقابل الأهداف، وتسمح بنمذجة السيناريوهات. طورت عمداً أسلوب تواصل كتابي مميز — إيقاع جمل مختلف، اختيار كلمات، ونبرة مختلفة عن قوالب الوكلاء القياسية — لخلق تجربة عميل متسقة وقابلة للتمييز.",
          result: "أوقات استجابة أسرع. جودة متسقة عبر جميع مراحل التفاعل. إدارة أداء استباقية بدلاً من مفاجآت نهاية الأسبوع التفاعلية. بصمة شخصية قابلة للقياس عبر توثيق الحالات." },
        { label: "بحث مقارن في نماذج الذكاء الاصطناعي (مستمر)", title: "اختبار الإجهاد المقارن للنماذج اللغوية الكبيرة", url: "https://linkedin.com/in/hussam-alturki",
          problem: "معظم مقارنات أدوات الذكاء الاصطناعي سطحية — 'أي نموذج يكتب مقالات أفضل؟' لا أحد يختبر بشكل منهجي كيف تتعامل النماذج اللغوية المختلفة مع الحالات الحافة الخاصة بسير العمل المهنية الحقيقية: التبديل بين السياقات متعددة اللغات، الطلبات ذات الفروق الثقافية، التعليمات المتضاربة، أو الأوامر التي تتطلب استدلالاً هيكلياً حقيقياً مقابل مطابقة الأنماط.",
          action: "صممت ونفذت اختبارات إجهاد منظمة عبر نماذج ذكاء اصطناعي متعددة (Claude، GPT، Gemini، Kimi، Qwen) باستخدام أوامر مبنية حول سياقات مهنية وثقافية محددة — بما في ذلك الأطر غير الغربية، الاستدلال الفقهي الإسلامي، وحالات اللغة العربية/الألمانية الحافة. تم توثيق أنماط الاستجابة، أنماط الفشل، والتحيزات المعمارية. تم تطبيق منهجية تحليلية صارمة: هيكل أمر متسق، متغيرات متحكمة، نتائج موثقة.",
          result: "نتائج مقارنة مفصلة حول أين تتفوق كل نموذج وتفشل في ظروف متخصصة. رؤى منشورة على LinkedIn. تُظهر معرفة تطبيقية بالذكاء الاصطناعي تتجاوز الاستخدام السطحي — فهم كيفية عمل النماذج، ليس فقط ما تنتجه." }
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
      tagline: "Support-Systeme · Klare Kommunikation · Strukturiertes Denken",
      subtext: "Ich wandle komplexe Nutzerprobleme in dokumentierte, skalierbare Lösungen um — in drei Sprachen, in Echtzeit.",
      ctaPrimary: "Fallstudien ansehen", ctaSecondary: "Kontakt aufnehmen", downloadCv: "Lebenslauf herunterladen"
    },
    about: {
      title: "Über mich",
      content: `<p>Ich bin ein mehrsprachiger Support-Spezialist aus Augsburg und arbeite derzeit bei Concentrix für Meta Platforms (Tier-1, Chat/E-Mail/Outbound). Meine Arbeit umfasst die Bearbeitung komplexer Nutzereskalationen, strukturierte Falldokumentation in CRM-Systemen und die Einhaltung von Qualitätsstandards unter Druck.</p>
      <p>Mein Hintergrund umfasst verschiedene Kundenkontaktrollen: Support, Außendienst (Vodafone), Hotellerie (Select Hotel Augsburg) und selbstständiger IT-Support. Der rote Faden: erkennen, was wirklich nicht funktioniert — nicht nur, was der Nutzer meldet — und die Lösung klar kommunizieren.</p>
      <p>Ich habe kürzlich die Mittlere Reife am Bayernkolleg Augsburg abgeschlossen und arbeite aktiv auf einen Wechsel in remote-fähige Tech-Rollen hin — konkret: Support Operations, Technical Writing oder KI-gestützte Workflows.</p>`
    },
    experience: {
      title: "Berufserfahrung",
      items: [
        { period: "09.2023 – Aktuell", role: "Customer Support Specialist", company: "Concentrix · Meta Platforms", points: "Tier-1-Support via Chat/E-Mail/Outbound. Komplexe Fallbearbeitung. Tägliche CRM- & Ticketing-Arbeit. Strukturierte Falldokumentation." },
        { period: "03.2023 – 08.2023", role: "Field Sales Partner", company: "Vodafone", points: "Direkte Kundenberatung. Bedarfsanalyse. Beschwerdemanagement. Vertragsabschluss." },
        { period: "10.2022 – 03.2023", role: "Rezeptionist", company: "Select Hotel Augsburg", points: "Gästebetreuung auf DE/EN/AR. Buchungssysteme. Abteilungsübergreifende Koordination." },
        { period: "08.2021 – 06.2023", role: "IT-Support (Freelance)", company: "Selbstständig", points: "Hardware-/Software-Support. Geräte-Rollouts. Eigenständiges Kundenmanagement." },
        { period: "02.2020 – 09.2022", role: "Event Manager", company: "Xclusive Events", points: "Komplette Eventkoordination vom Briefing bis zum Wrap-up. Vor-Ort-Teamleitung." }
      ]
    },
    services: {
      title: "Dienstleistungen", tabA: "Für die arabische Community", tabB: "Für Unternehmen", locationNote: "Vor Ort · Raum Augsburg",
      community: [
        { title: "Stellensuche-Hilfe", content: "Realistische Stellenangebote passend zu Ihren Fähigkeiten und Deutschkenntnissen finden." },
        { title: "Bewerbungsvorbereitung", content: "Lebenslauf, Anschreiben, Bewerbungscoaching und Erklärung der deutschen Arbeitgebererwartungen." },
        { title: "Wohnungssuche-Unterstützung", content: "Schufa, Mietvertrag, Selbstauskunft und überzeugende Selbstpräsentation als Mieter." },
        { title: "Sprachunterstützung (Deutsch & Englisch)", content: "Kein formeller Unterricht — echte Erklärungen, Situationsübungen und Textprüfung vor dem Absenden." },
        { title: "Behördengänge & Dokumente", content: "Formulare ausfüllen, Unterlagen organisieren, Bescheide übersetzen, Dolmetschen bei Terminen." },
        { title: "Übersetzung & Dolmetschen", content: "Schriftliche Übersetzung und Dolmetschen bei persönlichen oder telefonischen Terminen." },
        { title: "Bewerbungsunterlagen-Review", content: "Ich lese Ihre konkreten Unterlagen — Lebenslauf, Anschreiben und Stellenausschreibung — und sage Ihnen genau, was funktioniert, was nicht, und was ein deutscher Personalverantwortlicher denken wird. Keine allgemeinen Tipps: direkte Rückmeldung zu Ihren Dokumenten, bevor Sie sie absenden." },
        { title: "Computertraining für Senioren", content: "Geduldiges, verständliches Computertraining für Senioren — von Grundlagen (E-Mail, Videoanrufe, Smartphone) bis zu sicherem Internetumgang, Erkennen von Betrugsmaschen und Datenschutz." }
      ],
      business: [
        { title: "Recherche & Entscheidungsunterstützung", content: "Strukturierte Recherche zur Bewertung von Ideen, Märkten oder strategischen Entscheidungen. Ergebnis: lesbares Briefing mit Kernbefunden und Handlungsoptionen." },
        { title: "Werbeplanung", content: "Werbeplanung für Meta, Google, TikTok und LinkedIn — Targeting, Budgetverteilung, Zielgruppe und Anzeigentexte auf AR/DE/EN." },
        { title: "Projektberatung", content: "Strukturierte Beratung vor dem Launch und während des Projekts — Annahmen testen, Risiken adressieren, externe Perspektive." },
        { title: "Kundenservice-Operations", content: "Aufbau oder Übernahme der Kundenkommunikation — Chat, E-Mail, DMs. Antwortvorlagen, Leitfäden, First-Line-Support-Workflows auf AR/DE/EN." },
        { title: "Mehrsprachige Webinhalte", content: "Inhaltsreiche Webseiten auf AR/DE/EN — inklusive kreativer Formate (Spiele, Quiz, Lerntools). Text und einfaches Frontend." },
        { title: "Social-Media-Strategie", content: "Konsistenter Content-Rhythmus für LinkedIn, Instagram oder Facebook — Redaktionsplan, Post-Struktur, Ton-Leitlinien und Musterbeiträge. Fokus auf arabischsprachige und DACH-Zielgruppen." },
        { title: "Prozessdokumentation & SOPs", content: "Aus der Arbeitsweise Ihres Teams werden schriftliche, wiederholbare Prozesse — Ablaufpläne, Leitfäden, Checklisten, Entscheidungsbäume." },
        { title: "Markt- & Wettbewerbsanalyse", content: "Recherche für Unternehmen an der Schnittstelle arabischsprachiger und DACH-Märkte — Wettbewerbsangebote, Kommunikation, Marktlücken." },
        { title: "KI-gestützte Recherche & Workflows", content: "KI-Tools effektiv einsetzen für schnellere Recherche und wiederholbare Workflows — Ergebnis: ein Prozess, den Ihr Team selbstständig ausführt." },
        { title: "KI-Grundlagen, Prompt Engineering & digitale Sicherheit", content: "Einzelpersonen oder kleine Teams lernen, KI-Tools wirklich zu nutzen — nicht nur ChatGPT öffnen und hoffen. Themen: Prompt-Engineering-Prinzipien, Modellvergleich und -auswahl, KI in tägliche Workflows integrieren, und kritisches Verständnis der Datenschutzrisiken, Datenerhebungspraktiken und Cybersicherheitsimplikationen. Nach der Session wissen Sie, was KI kann und was nicht, wie Sie Ihre Daten schützen und wie Sie zuverlässig nützliche Ergebnisse erzielen." }
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
      disclaimer: "Basierend auf realen Support-Workflows — die Beispiele zeigen meine Herangehensweise, nicht ausgelieferte Produktivsysteme.",
      problemLabel: "Problem", actionLabel: "Vorgehen", resultLabel: "Ergebnis", viewLive: "Live-Projekt ansehen →",
      items: [
        { label: "Lernspiel (Live)", title: "Escape from Berlin", url: "https://huss4am7.github.io/escape-from-berlin/",
          problem: "Arabischsprachige Deutschlerner haben keine ansprechenden, kontextrelevanten Übungswerkzeuge. Standard-Apps simulieren keine realen deutschen bürokratischen und alltäglichen Szenarien.",
          action: "Ein mehrsprachiges Browser-Spiel in HTML/CSS/JS mit drei progressiven Schwierigkeitsstufen, mehreren Spielmodi und einem kompetitiven Multi-Team-Format. Deployed auf GitHub Pages. Implementierung von RTL/LTR-Layout-Switching, eigenständiger Download-Funktionalität und responsivem Design.",
          result: "Ein funktionales, teilbares Bildungswerkzeug, das domänenübergreifende Fähigkeiten demonstriert: Sprachdidaktik, Frontend-Entwicklung, UX-Denken und Deployment-Workflow." },
        { label: "Lernspiel — Wohnungsmodul (Live)", title: "Housing Survival", url: "https://huss4am7.github.io/escape-from-berlin/housing_survival.html",
          problem: "Arabischsprachige Neuankömmlinge in Deutschland stehen vor einer steilen Lernkurve beim Navigieren des Mietmarktes — Schufa, Mietvertrag, Selbstauskunft, Vermietererwartungen. Bestehende Ressourcen sind textlastig und passiv; Lernende müssen Entscheidungsfindung unter realistischem Druck üben.",
          action: "Ein eigenständiges Spielmodul, das reale deutsche Wohnungssuch-Szenarien simuliert — Spieler treffen Entscheidungen, begegnen typischen Vermieterantworten und lernen die korrekte Schrittfolge durch konsequenzbasiertes Gameplay. Integriert in denselben RTL/LTR-bilingualen Rahmen wie das Hauptspiel.",
          result: "Ein praktisches, gamifiziertes Lerntool, das einen der häufigsten Schmerzpunkte für Arabischsprachige in Deutschland abdeckt. Demonstriert die Fähigkeit, reale Domänenkenntnisse (bürokratische Prozesse, kulturelle Normen) in strukturierte interaktive Erlebnisse zu übersetzen." },
        { label: "Support-Ops-Tooling (Real)", title: "Template-System & KPI-Automatisierung",
          problem: "Im High-Volume-Live-Chat-Support verschwenden Agenten erhebliche Zeit mit dem Scrollen durch lange Vorlagenlisten, um die richtige Antwort für jede Situation zu finden — Begrüßung, Wartemeldung, Eskalation, Abschluss. Jede Sekunde Suchzeit summiert sich über Dutzende täglicher Interaktionen. Zudem erforderte das Tracking persönlicher KPIs (Qualitätsscore, Bearbeitungszeit, Fallvolumen) manuelle Berechnung ohne Vorwärtsblick.",
          action: "Ein strukturiertes Google-Sheets-Vorlagen-Dashboard — farbcodiert nach Gesprächsphase (Start / Zeitmanagement / Abschluss), emoji-getaggt nach Situationstyp, alles auf einem Bildschirm sichtbar ohne Scrollen. Suchreibung vollständig eliminiert. Entwicklung eines persönlichen KPI-Tracking-Sheets, das tägliche Metriken automatisch berechnet, Leistung gegen Ziele projiziert und Szenario-Modellierung ermöglicht. Bewusste Entwicklung eines unverwechselbaren schriftlichen Kommunikationsstils — anderer Satzrhythmus, Wortwahl und Ton als Standard-Agentenvorlagen — für eine konsistente, erkennbare Kundenerfahrung.",
          result: "Schnellere Antwortzeiten. Konsistente Qualität über alle Interaktionsphasen. Proaktives Performance-Management statt reaktiver Überraschungen am Wochenende. Eine messbare persönliche Handschrift über die gesamte Falldokumentation." },
        { label: "LLM-Vergleichsforschung (Laufend)", title: "LLM-Vergleichs-Stresstests", url: "https://linkedin.com/in/hussam-alturki",
          problem: "Die meisten KI-Tool-Vergleiche sind oberflächlich — 'welches Modell schreibt bessere Aufsätze?' Niemand testet systematisch, wie verschiedene LLMs Edge-Cases in realen professionellen Workflows handhaben: multilingualer Kontextwechsel, kulturell nuancierte Anfragen, widersprüchliche Anweisungen, oder Prompts, die echtes strukturelles Reasoning vs. Pattern-Matching erfordern.",
          action: "Strukturierte Stresstests über mehrere LLM-Modelle (Claude, GPT, Gemini, Kimi, Qwen) mit Prompts um spezifische professionelle und kulturelle Kontexte — inklusive nicht-westlicher Frameworks, islamisches jurisprudentielles Reasoning, und Arabisch/Deutsch-Sprach-Edge-Cases. Dokumentation von Antwortmustern, Fehlermodi und architektonischen Bias. Strenge analytische Methodik: konsistente Prompt-Struktur, kontrollierte Variablen, dokumentierte Ergebnisse.",
          result: "Detaillierte Vergleichsergebnisse, wo jedes Modell unter spezialisierten Bedingungen glänzt und versagt. Erkenntnisse auf LinkedIn veröffentlicht. Demonstriert angewandte KI-Kompetenz jenseits oberflächlicher Nutzung — Verständnis, wie Modelle funktionieren, nicht nur was sie produzieren." }
      ]
    },
    contact: {
      title: "Lass uns reden.",
      openToWork: "Offen für Remote-Stellen in Support Operations, Technical Writing oder KI-gestützten Workflows. Aktuell ansässig in Augsburg, Deutschland.",
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
