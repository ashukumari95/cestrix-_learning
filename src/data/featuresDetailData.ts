export interface FeatureItemData {
  slug: string
  name: string
  category: 'Admissions & Growth' | 'Academic & Exams' | 'Campus Operations' | 'Finance & Controls'
  badge: string
  headline: string
  description: string
  bullets: string[]
  uiSnippet: {
    tag1: string
    tag2: string
    cardTitle: string
    statNumber: string
    statLabel: string
    activeStatus: string
    rows: { col1: string; col2: string; badge: string; isGood?: boolean }[]
  }
  audienceSection: {
    title: string
    subtitle: string
    items: {
      number: string
      title: string
      desc: string
    }[]
  }
  challengesSection: {
    badge: string
    title: string
    subtitle: string
    cards: {
      title: string
      desc: string
    }[]
  }
  capabilities: {
    title: string
    desc: string
  }[]
}

export const featuresDetailData: Record<string, FeatureItemData> = {
  // ─────────────────────────────────────────────────────────────
  // 1. ADMISSIONS & GROWTH
  // ─────────────────────────────────────────────────────────────
  'admissions-crm': {
    slug: 'admissions-crm',
    name: 'Walk-In Admissions CRM',
    category: 'Admissions & Growth',
    badge: 'Admissions Software for Coaching Institutes',
    headline: 'Manage Student Inquiries, Walk-In Follow-ups, and Admissions Across Every Center with Cestrix',
    description: 'Coaching revenue leaks when walk-in inquiries remain trapped in paper registers or untracked staff notes. Cestrix gives your counselors a centralized admission pipeline with automated WhatsApp follow-ups, counseling histories, and instant token generation.',
    bullets: [
      'Every front-desk counselor logs walk-ins with parent contact and subject interest in seconds',
      'Follow-up schedules tracked digitally with automated WhatsApp reminders to parents',
      'Instant conversion from walk-in inquiry to batch enrollment with one click'
    ],
    uiSnippet: {
      tag1: 'Keep inquiry pipeline organized',
      tag2: 'Auto-schedule counselor follow-ups',
      cardTitle: 'Walk-In Inquiry Pipeline',
      statNumber: '84%',
      statLabel: 'Inquiry Conversion Rate',
      activeStatus: '18 Walk-ins Today',
      rows: [
        { col1: 'Rahul Sharma (JEE 2027)', col2: 'Demo Class Scheduled', badge: 'High Intent', isGood: true },
        { col1: 'Ananya Verma (NEET Target)', col2: 'Follow-up Call 4:00 PM', badge: 'Follow-Up' },
        { col1: 'Karan Mehra (Class 10 ICSE)', col2: 'Fee Token Issued', badge: 'Enrolled', isGood: true }
      ]
    },
    audienceSection: {
      title: 'Built for Coaching Institutes Where Admission Velocity Directly Determines Batch Profitability',
      subtitle: 'From single-room neighborhood tuition centers to premier multi-batch test prep institutes, Cestrix eliminates lost student leads.',
      items: [
        {
          number: '01',
          title: 'JEE & NEET Prep Centers',
          desc: 'Manage hundreds of seasonal peak walk-ins, track counseling interactions, and ensure parents receive automated brochures and scholarship test results on WhatsApp.'
        },
        {
          number: '02',
          title: 'Class 9-12 Science & Commerce',
          desc: 'Keep track of parent walk-ins during exam result weeks, schedule trial lectures, and convert demo attendees with personalized fee discount structures.'
        },
        {
          number: '03',
          title: 'Foundation & Olympiad Hubs',
          desc: 'Nurture junior school inquiries over months with automated academic workshop invites and parent consultation scheduling without manual follow-up logs.'
        },
        {
          number: '04',
          title: 'Multi-Branch Coaching Networks',
          desc: 'Track inquiry volumes and counselor conversion rates across all branches from a central headquarter dashboard with zero duplicate student entries.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Coaching Institutes Lose Lakhs to Untracked Inquiry Leaks',
      subtitle: 'Without a purpose-built admissions CRM, 40% of interested parents walk away to competitor coaching centers due to delayed follow-ups.',
      cards: [
        {
          title: 'Paper Registers & Missed Follow-up Calls',
          desc: 'Walk-in inquiries written on reception paper registers get buried or lost when staff shifts change. Counselors forget to call parents after demo classes, causing interested students to join competitor institutes.'
        },
        {
          title: 'Zero Accountability for Front-Desk Counselors',
          desc: 'Institute owners have no visibility into how many walk-ins occurred, what counseling objections were raised, or why parents decided not to enroll after visiting.'
        },
        {
          title: 'Chaotic Scholarship Test (VSAT) Follow-ups',
          desc: 'Conducting entrance or scholarship tests creates batches of hundreds of leads. Reaching out manually via spreadsheet takes days, giving students time to explore other options.'
        },
        {
          title: 'Duplicate Leads & Uncoordinated Staff Outreach',
          desc: 'Parents contacting via WhatsApp, website forms, and walk-ins get called multiple times by different counselors with conflicting fee promises, damaging your institute reputation.'
        }
      ]
    },
    capabilities: [
      { title: 'Digital Inquiry Form', desc: 'Quick front-desk interface optimized for mobile and desktop reception tablets.' },
      { title: 'Automated WhatsApp Drips', desc: 'Send syllabus, faculty profiles, and fee structures automatically upon inquiry.' },
      { title: 'Counselor Performance Analytics', desc: 'Track conversion rates and response time per staff member.' },
      { title: 'One-Click Batch Enrollment', desc: 'Seamlessly transition converted inquiries into registered students without re-entering data.' }
    ]
  },

  'batch-management': {
    slug: 'batch-management',
    name: 'Course & Batch Allocations',
    category: 'Admissions & Growth',
    badge: 'Curriculum & Classroom Operations Software',
    headline: 'Allocate Batches, Courses, and Classroom Capacities Without Room Conflicts Using Cestrix',
    description: 'Overcrowded classrooms, overlapping teacher schedules, and confusing batch transfers disrupt coaching centers. Cestrix automates student batch allocation, course assignment, and classroom capacity enforcement in real time.',
    bullets: [
      'Visual batch scheduler with automated room capacity limits and teacher conflict detection',
      'One-click student batch migration with complete fee and attendance history transfer',
      'Automated batch WhatsApp group sync and timetable broadcast to students'
    ],
    uiSnippet: {
      tag1: 'Visual classroom batch mapping',
      tag2: 'Zero teacher timing clashes',
      cardTitle: 'Batch Capacity & Schedule',
      statNumber: '96%',
      statLabel: 'Classroom Seat Utilization',
      activeStatus: '12 Active Batches',
      rows: [
        { col1: 'JEE Advanced 2026-A (Physics)', col2: 'Room 204 • 58/60 Seats', badge: 'Optimal', isGood: true },
        { col1: 'NEET Target Intensive-B', col2: 'Hall 1 • 72/75 Seats', badge: 'Near Full', isGood: true },
        { col1: 'Foundation Class 10th Maths', col2: 'Room 102 • 34/45 Seats', badge: 'Accepting' }
      ]
    },
    audienceSection: {
      title: 'Built for High-Capacity Coaching Institutes Running Morning & Evening Batches',
      subtitle: 'Ensure every student is seated in the right course level with full faculty timetable alignment.',
      items: [
        {
          number: '01',
          title: 'Large-Scale Test Prep Batches',
          desc: 'Distribute students into rankers, repeaters, and weekend batches based on entrance test cutoff percentiles.'
        },
        {
          number: '02',
          title: 'Subject-Specific Tuition Centers',
          desc: 'Allow students to take Physics in Batch A and Chemistry in Batch B without overlapping classroom schedules.'
        },
        {
          number: '03',
          title: 'Weekend & Crash Course Programs',
          desc: 'Set up temporary intensive revision batches without disrupting ongoing annual academic batches.'
        },
        {
          number: '04',
          title: 'Multi-Room Coaching Campuses',
          desc: 'Prevent double-booking of projector rooms, labs, and high-capacity lecture halls across faculty members.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Batch Allocation Disorganization Degrades Student Experience',
      subtitle: 'Manual batch registers lead to overcrowded rooms, student confusion, and faculty friction.',
      cards: [
        {
          title: 'Classroom Overcrowding & Fire Safety Issues',
          desc: 'Admitting students without live batch capacity checks results in packed rooms with insufficient desks, creating negative parent impressions.'
        },
        {
          title: 'Faculty Timing Clashes & Delayed Lectures',
          desc: 'When teachers teach across multiple batches, manual timetables lead to duplicate time slots, leaving students waiting outside classrooms.'
        },
        {
          title: 'Disorganized Student Batch Transfers',
          desc: 'Students changing from morning to evening batches frequently lose attendance records or get billed incorrect fees when handled manually.'
        },
        {
          title: 'Communication Breakdowns on Schedule Changes',
          desc: 'When a teacher is absent or batch timings shift, informing 60+ parents individually via phone or messy WhatsApp groups is impractical.'
        }
      ]
    },
    capabilities: [
      { title: 'Intelligent Capacity Caps', desc: 'Automatically prevent batch over-enrollment based on room desk counts.' },
      { title: 'Multi-Course Matrix', desc: 'Support modular enrollments where students attend different subjects across distinct schedules.' },
      { title: 'Batch Roll Call Sheets', desc: 'Generate digital and printable attendance sheets organized by student roll number.' },
      { title: 'Automated Schedule Broadcast', desc: 'Push batch timing changes directly to parent and student mobile apps.' }
    ]
  },

  'coaching-website': {
    slug: 'coaching-website',
    name: 'Free Coaching Website',
    category: 'Admissions & Growth',
    badge: 'Institute Branding & Digital Presence',
    headline: 'Launch a High-Converting Branded Coaching Website with Direct Admission Inquiries on Cestrix',
    description: 'Stop paying website development agencies recurring maintenance fees for static pages that fail to capture student leads. Cestrix includes a free, SEO-optimized, mobile-responsive website branded with your coaching logo, faculty details, and online admission forms.',
    bullets: [
      'Pre-built for coaching institutes with faculty showcase, past rank results, and course catalogs',
      'Embedded online admission inquiry forms that route directly into your Cestrix CRM',
      'Zero hosting fees, free custom domain connection, and lightning-fast Google loading speeds'
    ],
    uiSnippet: {
      tag1: 'Your own coaching domain & logo',
      tag2: 'Direct online lead capture',
      cardTitle: 'Digital Portal & Web Leads',
      statNumber: '1,420',
      statLabel: 'Monthly Website Visitors',
      activeStatus: 'SEO Active',
      rows: [
        { col1: 'Online Admission Form Submission', col2: 'Amit Patil • Class 11 Science', badge: 'New Lead', isGood: true },
        { col1: 'Brochure Download Request', col2: 'Pooja Iyer • NEET 2026', badge: 'Auto-Emailed', isGood: true },
        { col1: 'Scholarship Exam Registration', col2: 'Kunal Joshi • Foundation', badge: 'Registered' }
      ]
    },
    audienceSection: {
      title: 'Built for Educators Who Want an Elite Digital Brand Without Coding or Agency Costs',
      subtitle: 'Stand out from local competitors with a fast, modern institute website that ranks on Google.',
      items: [
        {
          number: '01',
          title: 'New & Growing Coaching Centers',
          desc: 'Establish instant credibility with prospective parents through a polished web presence showcasing course offerings.'
        },
        {
          number: '02',
          title: 'Established City Institutes',
          desc: 'Showcase annual AIR top rankers, faculty qualifications, and campus facilities with clean photo galleries.'
        },
        {
          number: '03',
          title: 'Digital-First Tuition Academies',
          desc: 'Enable parents to download course curriculum brochures and apply for scholarship entrance tests online 24/7.'
        },
        {
          number: '04',
          title: 'Multi-City Branch Groups',
          desc: 'Provide branch-specific location pages with Google Maps directions, phone numbers, and local center photos.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Most Coaching Websites Fail to Generate Student Enrollments',
      subtitle: 'Traditional agency websites look outdated, load slowly on phones, and never connect to student databases.',
      cards: [
        {
          title: 'Expensive Agency Contracts & Stale Content',
          desc: 'Institutes pay ₹25,000+ for WordPress websites that become outdated in 3 months because teachers cannot update faculty or fee details themselves.'
        },
        {
          title: 'Website Inquiries Trapped in Unchecked Email Inboxes',
          desc: 'Form submissions sent to an unmonitored info@coaching.com email go unread for weeks, losing hot prospective admissions.'
        },
        {
          title: 'Poor Mobile Performance & High Bounce Rates',
          desc: 'Over 85% of parents browse on smartphones. Heavy, unoptimized websites take 6+ seconds to load, causing parents to click away.'
        },
        {
          title: 'Missing Local Google SEO Rankings',
          desc: 'Without local SEO metadata, competitor institutes appear first when parents search for "best coaching for IIT in [City]".'
        }
      ]
    },
    capabilities: [
      { title: 'Instant Content Manager', desc: 'Update course fees, batch schedules, and faculty profiles with zero coding.' },
      { title: 'Hall of Fame Rankers Gallery', desc: 'Highlight top students, ranks, and test scores with high-impact badge designs.' },
      { title: 'Custom Domain SSL Included', desc: 'Connect your institute domain (e.g., www.sharmaclasses.com) with free HTTPS.' },
      { title: 'Direct CRM Pipeline Sync', desc: 'Every website form submission automatically creates a lead in your counselor dashboard.' }
    ]
  },

  'whatsapp-leads': {
    slug: 'whatsapp-leads',
    name: 'WhatsApp Lead Inquiries',
    category: 'Admissions & Growth',
    badge: 'Parent Communication & Conversion Suite',
    headline: 'Capture and Convert Parent WhatsApp Inquiries with Automated Instant Responses Using Cestrix',
    description: 'Indian parents prefer WhatsApp over phone calls and emails. Cestrix integrates official WhatsApp Business API directly into your student admission workflow, sending automated brochures, fee estimates, and demo class invites within 10 seconds of parent outreach.',
    bullets: [
      'Official WhatsApp Business API integration with verified institute profile',
      'Automated 24/7 smart auto-reply answering fee, timing, and syllabus questions',
      'Broadcast announcements for scholarship tests and batch admissions with 98% open rates'
    ],
    uiSnippet: {
      tag1: 'Official WhatsApp Cloud API',
      tag2: 'Instant 10s auto-response',
      cardTitle: 'WhatsApp Admissions Desk',
      statNumber: '98%',
      statLabel: 'Message Open Rate',
      activeStatus: 'Verified Account',
      rows: [
        { col1: 'Parent: "Fees for 12th Board Crash Course?"', col2: 'Auto-Brochure Sent', badge: 'Instant Reply', isGood: true },
        { col1: 'Parent: "Can we visit for demo tomorrow?"', col2: 'Counselor Assigned: Neha', badge: 'Assigned' },
        { col1: 'WhatsApp Campaign: JEE Target Batch 2026', col2: '450 Delivered • 42 Replies', badge: 'Active Campaign', isGood: true }
      ]
    },
    audienceSection: {
      title: 'Built for Institutes That Know Parent WhatsApp Replies Win Competitive Admissions',
      subtitle: 'The coaching center that replies first with clear fee details and demo schedules secures the student enrollment.',
      items: [
        {
          number: '01',
          title: 'Competitive City Coaching Hubs',
          desc: 'Reply instantly when parents message after seeing hoardings, newspaper ads, or social media promotions.'
        },
        {
          number: '02',
          title: 'High-Volume Walk-In Tuitions',
          desc: 'Send digital brochures and fee discount vouchers directly to the parent’s WhatsApp while they are still in your office.'
        },
        {
          number: '03',
          title: 'Remote & Hybrid Coaching',
          desc: 'Send Zoom or classroom demo link credentials with 1-click calendar reminders to parents automatically.'
        },
        {
          number: '04',
          title: 'Alumni & Re-admission Drives',
          desc: 'Send targeted WhatsApp broadcast campaigns to previous year students for next-grade batch enrollments.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Personal WhatsApp Numbers Create Chaos for Coaching Owners',
      subtitle: 'Counselors using personal WhatsApp leads to lost chats, no management oversight, and zero data ownership.',
      cards: [
        {
          title: 'Personal WhatsApp Accounts When Staff Resign',
          desc: 'When a front-desk staff member leaves, they take months of parent contact numbers and conversation histories with them.'
        },
        {
          title: 'Slow Manual Responses Lose Admissions',
          desc: 'A parent messaging at 8:00 PM on Sunday wants immediate details. Waiting until Monday afternoon means they have already visited another center.'
        },
        {
          title: 'WhatsApp Ban Risks from Unofficial Bulk Tools',
          desc: 'Using cheap unofficial bulk WhatsApp sender scripts leads to permanent phone number bans, cutting off parent communication.'
        },
        {
          title: 'No Central Chat History for Directors',
          desc: 'Institute directors cannot see what fees were quoted or how counselors handled difficult parent objections.'
        }
      ]
    },
    capabilities: [
      { title: 'Official Meta Cloud API', desc: '100% compliant, verified green-tick capability with zero phone ban risk.' },
      { title: 'Multi-Counselor Inbox', desc: 'Multiple staff members manage incoming parent chats from a single institute number.' },
      { title: 'Interactive Quick Reply Buttons', desc: 'Parents tap buttons like "View Fee Chart" or "Book Demo Class" for instant answers.' },
      { title: 'Scheduled Campaign Broadcasts', desc: 'Send admission alerts and holiday notices to specific student batches with one click.' }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 2. ACADEMIC & EXAMS
  // ─────────────────────────────────────────────────────────────
  'cbt-exam-simulator': {
    slug: 'cbt-exam-simulator',
    name: 'NTA CBT Exam Simulator',
    category: 'Academic & Exams',
    badge: 'National Testing Agency Standard Testing Suite',
    headline: 'Conduct Authentic NTA-Pattern CBT Mock Tests for JEE & NEET with All-India Rank Analysis on Cestrix',
    description: 'Students who practice only on paper freeze during real computer-based JEE & NEET entrance exams. Cestrix provides the exact official NTA exam interface—color-coded question palettes, section switching, timer warnings, and instant AI mistake breakdown.',
    bullets: [
      'Exact 1:1 replica of official NTA JEE Main, JEE Advanced, and NEET computer-based exam UI',
      'Automated grading with instant percentile, negative marking calculation, and rank generation',
      'Detailed time-per-question analytics revealing where students wasted critical minutes'
    ],
    uiSnippet: {
      tag1: '100% Official NTA Screen UI',
      tag2: 'Instant All-India Rank Cards',
      cardTitle: 'NTA Mock Test Engine',
      statNumber: '99.4%',
      statLabel: 'Exam Simulator Accuracy',
      activeStatus: 'Live Test in Progress',
      rows: [
        { col1: 'JEE Main Full Mock Test #04', col2: '142 Students Active • 45m Left', badge: 'Live Exam', isGood: true },
        { col1: 'NEET Botany Chapterwise Sprint', col2: 'Avg Score: 148/180 • Rank Card Sent', badge: 'Graded', isGood: true },
        { col1: 'AI Difficulty Calibration', col2: 'Moderate-High (Matches 2025 Shift 1)', badge: 'Calibrated' }
      ]
    },
    audienceSection: {
      title: 'Built for Test Prep Academies Where Student Rank Scores Build Institute Reputations',
      subtitle: 'Prepare your students for the mental stamina, pacing, and interface of actual government entrance exams.',
      items: [
        {
          number: '01',
          title: 'JEE Main & Advanced Institutes',
          desc: 'Provide numerical value question input, multi-correct options, and strict negative marking simulations.'
        },
        {
          number: '02',
          title: 'NEET Medical Prep Academies',
          desc: 'Conduct 200-question 3-hour 20-minute time-pressured tests with Botany, Zoology, Physics, and Chemistry sections.'
        },
        {
          number: '03',
          title: 'CUET & State CET Coaching',
          desc: 'Simulate multilingual computerized exams with customized subject combinations and normalized scoring.'
        },
        {
          number: '04',
          title: 'Foundation & NTSE Academies',
          desc: 'Introduce middle and high school students to computerized test environments early to build testing confidence.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Paper-Only Testing Fails Students in Modern Entrance Exams',
      subtitle: 'Even top-performing students lose 30-40 marks simply due to interface unfamiliarity and poor screen pacing.',
      cards: [
        {
          title: 'Panic & Confusion on Real Exam Day',
          desc: 'Students unfamiliar with marked-for-review buttons, scrollable question pallets, and digital calculators panic during official NTA tests.'
        },
        {
          title: 'Days Wasted on Manual OMR Sheet Checking',
          desc: 'Teachers spend 10-15 hours checking physical OMR sheets manually, delaying test feedback until students have forgotten their answers.'
        },
        {
          title: 'Zero Insight into Time Wasted Per Question',
          desc: 'Paper tests only show right vs. wrong answers. They cannot reveal that a student spent 9 minutes on one difficult Physics question and missed 5 easy Chemistry questions.'
        },
        {
          title: 'Inability to Generate All-India Institute Percentiles',
          desc: 'Manual scorekeeping fails to give students realistic national percentile rankings, creating false confidence before actual exams.'
        }
      ]
    },
    capabilities: [
      { title: 'Official Question Palette', desc: 'Color-coded answered, unanswered, marked for review, and not visited status.' },
      { title: 'Negative Marking Logic', desc: 'Fully configurable +4/-1, +4/-2, or custom grading schemes per test section.' },
      { title: 'Instant WhatsApp Rank Card', desc: 'Parents receive PDF performance reports with subject percentiles within 5 minutes of submission.' },
      { title: 'Anti-Cheating Window Lock', desc: 'Full-screen lockdown prevents students from opening secondary browser tabs during testing.' }
    ]
  },

  'ai-question-paper-studio': {
    slug: 'ai-question-paper-studio',
    name: 'AI Question Studio',
    category: 'Academic & Exams',
    badge: 'Faculty Productivity & Exam Generator',
    headline: 'Generate CBSE, JEE, and NEET Question Papers with Step-by-Step Solutions in 60 Seconds with Cestrix',
    description: 'Faculty members spend countless late-night hours typing, formatting, and proofreading weekly test papers in Word. Cestrix AI Question Studio instantly creates balanced question papers from a bank of 250,000+ curated questions with your coaching watermark and answer keys.',
    bullets: [
      'Select grade, subject, chapter, and difficulty level to generate ready-to-print question papers',
      'Automated bilingual formatting (English & Hindi) with institute header, logo, and watermark',
      'Complete step-by-step teacher answer keys and student hints generated alongside the test'
    ],
    uiSnippet: {
      tag1: '250K+ Curated Question Bank',
      tag2: 'Instant PDF with Institute Logo',
      cardTitle: 'AI Test Paper Builder',
      statNumber: '60s',
      statLabel: 'Paper Generation Time',
      activeStatus: 'Watermarked & Formatted',
      rows: [
        { col1: 'Class 12 Rotational Motion (JEE)', col2: '30 Qs • Balanced Difficulty', badge: 'Ready to Print', isGood: true },
        { col1: 'NEET Human Physiology DPP', col2: '45 Qs • NCERT Mapped', badge: 'Answer Key Ready', isGood: true },
        { col1: 'Class 10 CBSE Quadratic Equations', col2: '20 Qs • Bilingual (EN/HI)', badge: 'Downloaded' }
      ]
    },
    audienceSection: {
      title: 'Built for Hardworking Faculty Members Who Value Teaching Over Clerical Formatting',
      subtitle: 'Eliminate repetitive typing, math formula misprints, and diagram formatting headaches forever.',
      items: [
        {
          number: '01',
          title: 'Daily Practice Paper (DPP) Creators',
          desc: 'Produce high-quality 15-question daily practice problem sheets after every classroom lecture in under 2 minutes.'
        },
        {
          number: '02',
          title: 'Board Exam Faculty',
          desc: 'Create papers strictly aligned with latest CBSE/ICSE blueprint marks distributions, case studies, and assertion-reason questions.'
        },
        {
          number: '03',
          title: 'Competitive Coaching Directors',
          desc: 'Maintain academic testing consistency across all branches without relying on individual teacher question preferences.'
        },
        {
          number: '04',
          title: 'Bilingual & Vernacular Centers',
          desc: 'Generate test papers formatted in English and Hindi simultaneously with accurate scientific terminology.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Manual Question Paper Preparation Drains Coaching Resources',
      subtitle: 'Typing equations, cropping diagrams, and checking typos wastes faculty time that should be spent mentoring students.',
      cards: [
        {
          title: 'Typing Math & Chemical Equations in Word',
          desc: 'Formatting complex fractions, chemical structures, and physics diagrams in MS Word takes hours and frequently produces printing misalignments.'
        },
        {
          title: 'Repeated Questions and Unbalanced Papers',
          desc: 'Without a searchable question database, teachers accidentally repeat questions from previous tests or create overly difficult papers that demotivate students.'
        },
        {
          title: 'Inconsistent Exam Formats Across Faculty',
          desc: 'Different teachers format tests differently, leading to messy, unprofessional test papers that lack consistent coaching branding.'
        },
        {
          title: 'Missing or Incomplete Solutions',
          desc: 'Faculty often distribute question papers without worked-out solutions, leading to hours of repetitive classroom doubt clarification.'
        }
      ]
    },
    capabilities: [
      { title: 'NCERT & PYQ Mapping', desc: 'Filter questions by past 15 years JEE/NEET questions and NCERT exemplar references.' },
      { title: 'Custom LaTeX Formula Engine', desc: 'Renders mathematical equations and chemical formulas with textbook printing clarity.' },
      { title: 'One-Click Difficulty Balance', desc: 'Automatically adjust papers to 40% Easy, 40% Medium, 20% Hard ratio.' },
      { title: 'Teacher Solution Manual', desc: 'Generate a separate faculty answer booklet with comprehensive proofs and marking schemes.' }
    ]
  },

  'student-mistake-notebook': {
    slug: 'student-mistake-notebook',
    name: 'Student Mistake Notebook',
    category: 'Academic & Exams',
    badge: 'AI Diagnostics & Student Mentorship',
    headline: 'Eliminate Negative Marking with Automated Student Mistake Notebooks on Cestrix',
    description: 'Top rankers succeed not by solving 10,000 new questions, but by never repeating a past mistake. Cestrix automatically bookmarks every question a student gets wrong or leaves unattempted, compiling a personalized digital revision notebook with concept hints.',
    bullets: [
      'Automatically logs incorrect and skipped questions from all online and offline mock tests',
      'Categorizes errors into conceptual gaps, calculation slips, and time-pressure guessing',
      'Generates personalized re-test quizzes containing only the student’s previous mistake areas'
    ],
    uiSnippet: {
      tag1: 'Auto-compiled error analysis',
      tag2: 'Personalized student re-tests',
      cardTitle: 'Digital Mistake Notebook',
      statNumber: '-68%',
      statLabel: 'Reduction in Negative Marks',
      activeStatus: 'Diagnostics Active',
      rows: [
        { col1: 'Physics: Ray Optics (Sign Convention)', col2: '3 Calculation Slips Identified', badge: 'Re-test Ready', isGood: true },
        { col1: 'Chemistry: Electrochemistry (Nernst Eq)', col2: 'Concept Gap • Video Hint Linked', badge: 'Needs Review' },
        { col1: 'Maths: Definite Integrals (Properties)', col2: 'Repeated Error • 2 Tests in a Row', badge: 'Critical Alert' }
      ]
    },
    audienceSection: {
      title: 'Built for Coaching Mentors Who Want Measurable Student Rank Improvement',
      subtitle: 'Transform student test analysis from passive score checking into an active, high-yield revision cycle.',
      items: [
        {
          number: '01',
          title: 'Competitive Ranker Batches',
          desc: 'Help top 5% students identify subtle traps, negative marking tendencies, and silly calculation errors.'
        },
        {
          number: '02',
          title: 'Struggling & Borderline Students',
          desc: 'Pinpoint the exact 2 or 3 foundational chapter concepts that are dragging down their overall test percentiles.'
        },
        {
          number: '03',
          title: 'Parent-Teacher Meetings (PTM)',
          desc: 'Show parents concrete diagnostic charts detailing why their child is losing marks rather than giving vague feedback.'
        },
        {
          number: '04',
          title: 'Self-Study Revision Sessions',
          desc: 'Give students an instant practice deck of their historical weaknesses before major exams.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Traditional Test Discussion Leaves Students Repeating the Same Errors',
      subtitle: 'After test day, students look at their marks for 2 minutes and put the paper away, learning nothing from their mistakes.',
      cards: [
        {
          title: 'No Systematic Error Tracking',
          desc: 'Students rarely maintain physical mistake diaries. They forget why they got a question wrong 48 hours after the exam.'
        },
        {
          title: 'Inability to Distinguish Concept vs. Calculation Errors',
          desc: 'Students assume they do not understand a chapter when 80% of their lost marks were actually simple arithmetic calculation slips.'
        },
        {
          title: 'Unproductive Classroom Test Discussions',
          desc: 'Teachers spend 2 full class periods discussing entire test papers when each student only needed help with 4 specific questions.'
        },
        {
          title: 'Parents Unaware of True Academic Weaknesses',
          desc: 'Parents see low aggregate marks and blame the child or institute, having zero visibility into which specific topics need attention.'
        }
      ]
    },
    capabilities: [
      { title: 'Automated Error Tagging', desc: 'Questions automatically categorized into Calculation, Concept, or Time-Out.' },
      { title: 'Personalized Re-Test Generator', desc: 'With one click, generate a 20-question quiz composed solely of past mistakes.' },
      { title: 'Parent Diagnostic PDF', desc: 'Clear visual charts showing chapter-wise mastery delivered to parent WhatsApp.' },
      { title: 'Faculty Red-Flag Dashboard', desc: 'Alerts teachers when more than 60% of a batch makes the same conceptual error.' }
    ]
  },

  'video-lms': {
    slug: 'video-lms',
    name: 'Video LMS & DPP Notes',
    category: 'Academic & Exams',
    badge: 'Digital Classroom & Study Material Hub',
    headline: 'Deliver Secure DRM Video Lectures, Class Notes, and Homework on Your Coaching LMS with Cestrix',
    description: 'Protect your proprietary video lectures from screen recording and unauthorized Telegram piracy. Cestrix LMS provides chapter-wise recorded lectures, downloadable PDF notes, and homework submission tracking with watermarked video protection.',
    bullets: [
      'Piracy-proof video streaming with dynamic student watermarking (Name, Phone, IP on screen)',
      'Organized chapter, topic, and sub-topic folder tree for video lectures and DPP PDFs',
      'Student homework and DPP submission portal with teacher evaluation and grading'
    ],
    uiSnippet: {
      tag1: 'Screen-record blocked streaming',
      tag2: 'Dynamic student watermarking',
      cardTitle: 'Coaching Digital LMS',
      statNumber: '100%',
      statLabel: 'Content Piracy Protection',
      activeStatus: 'DRM Active',
      rows: [
        { col1: 'Organic Chemistry: Aldehydes & Ketones', col2: 'Lecture 04 • 78/84 Watched', badge: 'High Engagement', isGood: true },
        { col1: 'Physics DPP #12 (Electrostatics)', col2: '62 Submissions • 14 Pending', badge: 'Grading Open' },
        { col1: 'Class Notes PDF: Vectors & 3D', col2: 'Download Encrypted • View Only', badge: 'Protected', isGood: true }
      ]
    },
    audienceSection: {
      title: 'Built for Institutes Creating Valuable Proprietary Video & Study Material Assets',
      subtitle: 'Provide hybrid learning access for revision and absent students while ensuring your content stays secure.',
      items: [
        {
          number: '01',
          title: 'Hybrid & Offline Classrooms',
          desc: 'Upload recordings of live offline classes so absent students never fall behind on syllabus progression.'
        },
        {
          number: '02',
          title: 'Distance Learning & Online Batches',
          desc: 'Sell recorded crash courses and test series to students outside your city with complete playback control.'
        },
        {
          number: '03',
          title: 'Daily Homework & DPP Programs',
          desc: 'Collect handwritten homework scans from students and track assignment completion percentages.'
        },
        {
          number: '04',
          title: 'Elite Faculty Brands',
          desc: 'Ensure star faculty lectures cannot be ripped, forwarded on WhatsApp, or re-uploaded to YouTube.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Sharing YouTube Links and Google Drive Folders Hurts Coaching Businesses',
      subtitle: 'Unprotected video links get forwarded to non-paying students, and messy Google Drive links get blocked.',
      cards: [
        {
          title: 'Course Piracy on Telegram & YouTube',
          desc: 'Coaching institutes spend lakhs producing high-yield lectures only to find students screen-recording and selling them on Telegram channels.'
        },
        {
          title: 'Messy Google Drive Links & Permission Requests',
          desc: 'Sharing notes via Drive links causes constant "request access" friction, broken URLs, and lost study material files.'
        },
        {
          title: 'Zero Tracking of Student Watch Time',
          desc: 'Coaching directors have no way of knowing whether a failing student actually watched the revision lectures or skipped them entirely.'
        },
        {
          title: 'Distractions on Public Platforms',
          desc: 'Using unlisted YouTube videos exposes students to gaming and entertainment recommendation algorithms while studying.'
        }
      ]
    },
    capabilities: [
      { title: 'Dynamic Moving Watermark', desc: 'Displays the watching student’s phone number and roll number across the screen.' },
      { title: 'Offline Download in App', desc: 'Students download lectures inside your coaching mobile app for offline viewing without video file export.' },
      { title: 'Chapter & Topic Indexing', desc: 'Neat hierarchical syllabus navigation matching your classroom curriculum.' },
      { title: 'Student Watch Time Analytics', desc: 'Faculty dashboards show exactly what percentage of each lecture was completed by each student.' }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 3. CAMPUS OPERATIONS
  // ─────────────────────────────────────────────────────────────
  'biometric-attendance': {
    slug: 'biometric-attendance',
    name: 'Biometric Attendance Sync',
    category: 'Campus Operations',
    badge: 'Hardware-Integrated Campus Security',
    headline: 'Sync Fingerprint & Face Recognition Attendance to the Cloud with Instant Parent WhatsApp Alerts on Cestrix',
    description: 'Eliminate student proxy attendance, manual roll-call registers, and anxious parent inquiries. Cestrix connects seamlessly with your existing biometric or facial recognition hardware, automatically notifying parents on WhatsApp the exact second their child enters or leaves campus.',
    bullets: [
      'Hardware-agnostic cloud sync compatible with eSSL, Realtime, ZKTeco, and facial terminals',
      'Instant automated WhatsApp message to parents: "Your child Rahul arrived at institute at 8:02 AM"',
      'Automated daily absentee broadcast at 9:00 AM with instant one-click staff follow-up list'
    ],
    uiSnippet: {
      tag1: 'Zero Proxy Biometric Cloud Sync',
      tag2: 'Instant WhatsApp Parent Alert',
      cardTitle: 'Live Attendance Terminal',
      statNumber: '98.2%',
      statLabel: 'On-Time Batch Attendance',
      activeStatus: 'Machine Connected',
      rows: [
        { col1: 'Priya Verma (Roll #104)', col2: 'Face In: 07:58 AM • WhatsApp Sent', badge: 'Present', isGood: true },
        { col1: 'Aman Saxena (Roll #105)', col2: 'Fingerprint: 08:02 AM • Alert Sent', badge: 'Present', isGood: true },
        { col1: 'Karan Mehra (Roll #106)', col2: 'Absent at 08:30 AM • Auto SMS Sent', badge: 'Absent' }
      ]
    },
    audienceSection: {
      title: 'Built for Institute Owners Who Value Student Safety, Punctuality, and Parent Trust',
      subtitle: 'Parents trust institutes that provide transparent, tamper-proof attendance verification every single day.',
      items: [
        {
          number: '01',
          title: 'High-Volume City Coaching Campuses',
          desc: 'Process 500+ student arrivals across multiple biometric gates in 15 minutes without front-desk queues.'
        },
        {
          number: '02',
          title: 'Early Morning & Late Evening Batches',
          desc: 'Give parents complete peace of mind with instant arrival and departure notifications for early morning tuition.'
        },
        {
          number: '03',
          title: 'Residential & Day-Boarding Centers',
          desc: 'Track classroom attendance, library hours, and mess hall check-ins from a unified campus database.'
        },
        {
          number: '04',
          title: 'Faculty & Non-Teaching Staff',
          desc: 'Track teacher lecture punch-ins and automate monthly staff payroll based on biometric shift hours.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Manual Roll Calls and Disconnected Biometrics Hurt Coaching Centers',
      subtitle: 'Disconnected attendance machines store data locally on pen drives, leaving parents and directors completely in the dark.',
      cards: [
        {
          title: '15 Minutes of Teaching Time Wasted on Roll Calls',
          desc: 'Calling out 60 student names in every lecture burns 15% of instructional time that faculty should be spending solving questions.'
        },
        {
          title: 'Students Bunking Classes Without Parent Awareness',
          desc: 'Students leave home for coaching but skip lectures. When parents discover this months later at exam time, they blame the coaching institute.'
        },
        {
          title: 'Biometric Data Trapped in Offline Pen Drives',
          desc: 'Staff must manually export attendance data via USB thumb drives onto a Windows desktop, making real-time parent alerts impossible.'
        },
        {
          title: 'Student Buddy Punching & Proxy Attendance',
          desc: 'Paper attendance sheets enable friends to sign proxies for absent students, giving inaccurate attendance records to management.'
        }
      ]
    },
    capabilities: [
      { title: 'Cloud Device Bridge', desc: 'Syncs with existing biometric machines over Wi-Fi or LAN with zero hardware replacement.' },
      { title: 'Sub-Second WhatsApp Notifications', desc: 'Customizable message template sent instantly to father and mother WhatsApp numbers.' },
      { title: 'Automated Defaulter Warning', desc: 'Automatically flags students whose monthly attendance drops below 75% for parent counseling.' },
      { title: 'Biometric Staff Payroll Sync', desc: 'Calculate faculty lecture pay and staff salaries directly from verified punch hours.' }
    ]
  },

  'whatsapp-attendance-alerts': {
    slug: 'whatsapp-attendance-alerts',
    name: 'Automated WhatsApp Alerts',
    category: 'Campus Operations',
    badge: 'Real-Time Parent Transparency Suite',
    headline: 'Send Instant Automated WhatsApp Attendance, Exam Score, and Holiday Alerts with Cestrix',
    description: 'Stop spending hours typing manual SMS broadcasts that parents ignore. Cestrix sends rich WhatsApp alerts for daily arrival, unexpected absenteeism, mock test scorecards, and sudden weather holiday announcements with 98% guaranteed delivery.',
    bullets: [
      'Automated daily punch-in and punch-out WhatsApp messages with student name and exact timestamp',
      'Broadcast emergency holiday notices, festival greetings, and timetable updates in one click',
      'Delivery confirmation tracking showing when parents received and read important institute notices'
    ],
    uiSnippet: {
      tag1: '98% Delivery & Read Rate',
      tag2: 'Multi-Batch Message Broadcast',
      cardTitle: 'Parent WhatsApp Alerts',
      statNumber: '100%',
      statLabel: 'Parent Message Reach',
      activeStatus: 'Automations Live',
      rows: [
        { col1: '"Rahul reached institute safely (07:58 AM)"', col2: 'Delivered to Father & Mother', badge: 'Delivered', isGood: true },
        { col1: '"Notice: Rain Holiday - Evening Batch Online"', col2: 'Broadcast to 420 Parents', badge: 'Broadcast Sent', isGood: true },
        { col1: '"Weekly Test #06 Rank Card: 184/200 (Rank 3)"', col2: 'PDF Attachment Included', badge: 'Delivered', isGood: true }
      ]
    },
    audienceSection: {
      title: 'Built for Coaching Institutes That Want Professional, High-Trust Parent Communication',
      subtitle: 'Keep parents informed, satisfied, and confident in your coaching institute’s discipline.',
      items: [
        {
          number: '01',
          title: 'Single-Branch Centers',
          desc: 'Replace costly per-SMS character charges with rich WhatsApp messages containing your coaching name and logo.'
        },
        {
          number: '02',
          title: 'High-Discipline Test Prep Centers',
          desc: 'Send parents immediate alerts whenever a student arrives more than 15 minutes late to class.'
        },
        {
          number: '03',
          title: 'Rain & Emergency Prone Locations',
          desc: 'Broadcast sudden weather holiday declarations or online batch shifting notices within 30 seconds.'
        },
        {
          number: '04',
          title: 'Board Exam Batches',
          desc: 'Share weekly homework completion alerts and teacher remarks directly with parents.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Traditional SMS Gateways Fail Modern Coaching Centers',
      subtitle: 'Transactional SMS messages get blocked by DND filters, cost money per character, and look like spam.',
      cards: [
        {
          title: 'SMS Blocked by TRAI DND Filters',
          desc: 'Over 40% of parent phone numbers have Do Not Disturb (DND) active, causing critical attendance and holiday SMS messages to fail.'
        },
        {
          title: 'Expensive Per-SMS Billing with 160-Character Limits',
          desc: 'Institutes pay recurring SMS credits every month, forced to cut words short and unable to include PDFs or rank cards.'
        },
        {
          title: 'Zero Read Receipts or Delivery Confirmation',
          desc: 'SMS gateways provide no proof that parents actually saw the notification, leading to disputes when parents claim they were never informed.'
        },
        {
          title: 'Spammy Appearance Without Institute Branding',
          desc: 'SMS messages arrive from generic 6-character sender IDs (e.g., AD-612049), lacking your coaching institute name and logo.'
        }
      ]
    },
    capabilities: [
      { title: 'Rich WhatsApp Templates', desc: 'Include bold formatting, bullet points, institute logo, and clickable buttons.' },
      { title: 'PDF Report Attachments', desc: 'Send test rank cards and fee receipts directly as downloadable WhatsApp documents.' },
      { title: 'Multi-Guardian Alerts', desc: 'Simultaneously notify both mother and father contact numbers automatically.' },
      { title: 'Batch Filter Broadcast', desc: 'Target messages specifically to Class 12 NEET or Weekend batches without messaging other students.' }
    ]
  },

  'timetable-scheduling': {
    slug: 'timetable-scheduling',
    name: 'Timetable & Room Conflicts',
    category: 'Campus Operations',
    badge: 'Academic Scheduling & Resource Optimization',
    headline: 'Resolve Classroom Overlaps and Faculty Timetable Conflicts Automatically with Cestrix',
    description: 'Managing complex weekly schedules across 10 classrooms and 25 faculty members on whiteboard calendars creates inevitable timetable clashes. Cestrix intelligent timetable engine maps teacher availability, room seating capacity, and student batch timings with instant conflict warnings.',
    bullets: [
      'Visual drag-and-drop timetable builder with automated teacher double-booking prevention',
      'Classroom capacity matching to ensure large batches get appropriate lecture halls',
      'Dynamic teacher substitution management with 1-click batch notification upon faculty absence'
    ],
    uiSnippet: {
      tag1: 'Drag-and-Drop Weekly Matrix',
      tag2: 'Zero Classroom Overlaps',
      cardTitle: 'Classroom & Faculty Scheduler',
      statNumber: '0',
      statLabel: 'Scheduling Conflicts',
      activeStatus: 'Timetable Published',
      rows: [
        { col1: 'Prof. Sharma (Physics) • Room 201', col2: '08:00 AM - 10:00 AM (JEE 2026)', badge: 'Confirmed', isGood: true },
        { col1: 'Dr. Kulkarni (Biology) • Hall A', col2: '10:15 AM - 12:15 PM (NEET Target)', badge: 'Confirmed', isGood: true },
        { col1: 'Room 102 (Maths Substitution)', col2: 'Prof. Iyer replacing Prof. Gupta', badge: 'Substituted' }
      ]
    },
    audienceSection: {
      title: 'Built for Fast-Paced Coaching Academies Running Multiple Simultaneous Batches',
      subtitle: 'Keep your teaching schedules running with military precision and zero classroom confusion.',
      items: [
        {
          number: '01',
          title: 'Multi-Room Coaching Complexes',
          desc: 'Efficiently schedule morning, afternoon, and evening slots across 5 to 20 physical lecture rooms.'
        },
        {
          number: '02',
          title: 'Guest & Visiting Star Faculty',
          desc: 'Block specific 3-day weekend slots for traveling subject specialists without disrupting regular teachers.'
        },
        {
          number: '03',
          title: 'Doubt & Remedial Sessions',
          desc: 'Schedule 1-on-1 teacher doubt counters in designated rooms without interrupting main lectures.'
        },
        {
          number: '04',
          title: 'Multi-Subject Integrated Programs',
          desc: 'Ensure school tie-up and integrated coaching students transition smoothly between academic lectures.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Manual Timetables Cause Constant Classroom Chaos and Teacher Friction',
      subtitle: 'Whiteboards and Excel sheets cannot prevent human errors when scheduling hundreds of weekly lecture hours.',
      cards: [
        {
          title: 'Faculty Double-Booking Clashes',
          desc: 'A teacher is assigned to two different classrooms at the same 9:00 AM slot, leaving 60 students waiting with no instructor.'
        },
        {
          title: 'Large Batches Jammed into Small Rooms',
          desc: 'An 80-student batch gets assigned to a 45-seat classroom by mistake, forcing staff to scramble for extra plastic chairs.'
        },
        {
          title: 'Last-Minute Faculty Absence Headaches',
          desc: 'When a teacher calls in sick at 7:00 AM, finding an available substitute and notifying the right students takes hours of panicked calls.'
        },
        {
          title: 'Student Timetable Confusion',
          desc: 'Paper timetable photos circulated on WhatsApp groups get outdated quickly, leading to students arriving at the wrong time.'
        }
      ]
    },
    capabilities: [
      { title: 'Conflict Detection Engine', desc: 'Instantly alerts if a teacher or room is double-booked before you publish.' },
      { title: 'Student & Faculty Mobile View', desc: 'Teachers and students see their live daily schedule with room numbers in their app.' },
      { title: 'One-Click Substitution', desc: 'Assign substitute teachers in seconds; automatically updates the student schedule.' },
      { title: 'Classroom Utilization Heatmaps', desc: 'Identify empty room hours to schedule additional test series or revision workshops.' }
    ]
  },

  'faculty-management': {
    slug: 'faculty-management',
    name: 'Faculty & Staff Workspace',
    category: 'Campus Operations',
    badge: 'Faculty Operations & Teacher Productivity',
    headline: 'Manage Faculty Lectures, Syllabus Progress, and Hourly Payouts with Cestrix',
    description: 'Star faculty members are your coaching institute’s greatest asset. Cestrix gives your teachers a dedicated mobile workspace to view their daily lecture schedules, log covered syllabus topics, track student attendance, and monitor hourly or per-lecture payout statements.',
    bullets: [
      'Dedicated faculty mobile portal for lecture schedules, roll-call attendance, and syllabus tracking',
      'Transparent hourly and per-lecture billing calculation with automated payout vouchers',
      'Chapter-wise syllabus completion tracker ensuring courses finish 30 days before exam season'
    ],
    uiSnippet: {
      tag1: 'Faculty Mobile Workspace',
      tag2: 'Syllabus Completion Tracker',
      cardTitle: 'Teacher Portal & Payroll',
      statNumber: '92%',
      statLabel: 'Syllabus on Schedule',
      activeStatus: 'Faculty Verified',
      rows: [
        { col1: 'Prof. Vikram Sharma (Physics HOD)', col2: '24 Lectures Completed • ₹48,000 Due', badge: 'Verified', isGood: true },
        { col1: 'Dr. Sunita Kulkarni (Biology)', col2: 'Genetics Finished • Ecology Starts', badge: 'On Track', isGood: true },
        { col1: 'Faculty Attendance Punch', col2: 'Biometric Verified • 100% Punctual', badge: 'Present', isGood: true }
      ]
    },
    audienceSection: {
      title: 'Built for Institute Directors Who Want Accountable, Happy, and Well-Organized Faculty',
      subtitle: 'Eliminate end-of-month lecture billing arguments and keep curriculum delivery strictly on schedule.',
      items: [
        {
          number: '01',
          title: 'Institutes with Hourly Visiting Faculty',
          desc: 'Automatically track exact lecture hours taught with biometric verification to calculate fair, dispute-free monthly payouts.'
        },
        {
          number: '02',
          title: 'Multi-Batch Subject HODs',
          desc: 'Enable heads of department to monitor chapter completion pacing across all junior faculty members.'
        },
        {
          number: '03',
          title: 'Full-Time Academic Staff',
          desc: 'Manage staff leave applications, shift timings, and classroom performance ratings in one clean portal.'
        },
        {
          number: '04',
          title: 'Non-Teaching Operations Staff',
          desc: 'Coordinate receptionists, counselors, and lab assistants with role-based permissions and daily task checklists.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Disorganized Faculty Management Leads to Syllabus Delays and Billing Disputes',
      subtitle: 'Without systematic lecture logging, institutes either overpay or suffer faculty resignations over disputed hours.',
      cards: [
        {
          title: 'End-of-Month Lecture Billing Arguments',
          desc: 'Teachers claim they took 28 lectures while the owner remembers 24. Without a digital log, billing disputes damage teacher relationships.'
        },
        {
          title: 'Syllabus Dragging Behind Schedule',
          desc: 'Directors only discover in December that a teacher has completed only 40% of the syllabus, forcing rushed, low-quality revisions.'
        },
        {
          title: 'Teachers Lacking Access to Student Performance',
          desc: 'Faculty cannot see which students in their batch scored poorly on mock tests, preventing targeted in-class remedial instruction.'
        },
        {
          title: 'Unrestricted Access to Sensitive Student Phone Numbers',
          desc: 'Staff viewing unmasked student phone numbers creates privacy risks or unauthorized poaching by competing teachers.'
        }
      ]
    },
    capabilities: [
      { title: 'Lecture Log Verification', desc: 'Faculty submit topic covered after each class; verified by biometric punch records.' },
      { title: 'Syllabus Progress Bar', desc: 'Visual percentage bars showing completed vs. remaining chapters against target dates.' },
      { title: 'Teacher Payout Statements', desc: 'Automated salary and per-hour slip generation with TDS and bonus calculations.' },
      { title: 'Role-Based Privacy Controls', desc: 'Teachers see student names and academic scores without exposing private parent phone numbers.' }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 4. FINANCE & CONTROLS
  // ─────────────────────────────────────────────────────────────
  'fee-erp': {
    slug: 'fee-erp',
    name: 'Fee ERP & Installments',
    category: 'Finance & Controls',
    badge: 'Coaching Revenue & Fee Automation',
    headline: 'Automate Fee Installments, WhatsApp Due Reminders, and Recover 100% Tuition with Cestrix',
    description: 'Chasing parents for overdue tuition fees is uncomfortable, time-consuming, and harms coaching relationships. Cestrix Fee ERP manages multi-part installment schedules, automatically dispatches polite WhatsApp reminder links with UPI pay buttons, and reconciles bank deposits with 0% platform commission.',
    bullets: [
      'Custom installment plans with automatic due date tracking and scholarship discount deduction',
      'Polite automated WhatsApp fee reminders sent 3 days before and on the due date with 1-click UPI links',
      '0% platform commission on student tuition—keep 100% of your coaching institute earnings'
    ],
    uiSnippet: {
      tag1: '0% Platform Fee on Collections',
      tag2: 'Automated WhatsApp UPI Reminders',
      cardTitle: 'Fee Recovery & Collections',
      statNumber: '₹18.4L',
      statLabel: 'Tuition Collected This Month',
      activeStatus: '0% Fee Commission',
      rows: [
        { col1: 'Kavita Sen (Installment #2)', col2: '₹15,000 Paid via UPI • Instant Receipt', badge: 'Paid', isGood: true },
        { col1: 'Arjun Nair (Installment #3)', col2: '₹20,000 Due Tomorrow • Reminder Sent', badge: 'Upcoming' },
        { col1: 'Sanjay Reddy (Overdue 4 Days)', col2: '₹12,500 • Automated Follow-up #2', badge: 'Overdue' }
      ]
    },
    audienceSection: {
      title: 'Built for Institute Owners Who Deserve Predictable Cash Flow Without Awkward Parent Chasing',
      subtitle: 'Never let overdue fees accumulate until the end of the academic year when recovery becomes impossible.',
      items: [
        {
          number: '01',
          title: 'High-Ticket Test Prep Centers',
          desc: 'Structure ₹75,000+ annual course fees into 3 to 6 manageable installments with strict due date automation.'
        },
        {
          number: '02',
          title: 'Monthly Recurring Tuitions',
          desc: 'Collect ₹1,500 - ₹5,000 monthly fees automatically on the 1st of every month without manual phone calls.'
        },
        {
          number: '03',
          title: 'Multi-Student Sibling Discounts',
          desc: 'Apply family discounts, scholarship percentages, and early-bird vouchers automatically to invoices.'
        },
        {
          number: '04',
          title: 'Multi-Branch Coaching Groups',
          desc: 'Centralize bank deposits and view pending fee defaulter lists across all city branches from one dashboard.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Coaching Centers Lose Lakhs Every Year to Uncollected Fee Defaulters',
      subtitle: 'Without automated payment tracking, 15% to 25% of student installment fees remain permanently unpaid.',
      cards: [
        {
          title: 'Awkward Manual Phone Calls to Parents',
          desc: 'Calling parents to demand money feels unprofessional. Receptionists dread making collection calls, leading to postponed reminders and ballooning dues.'
        },
        {
          title: 'Students Dropping Out with Pending Installments',
          desc: 'Students attend 8 months of lectures, pay only the first installment, and quietly drop out before board exams without settling pending dues.'
        },
        {
          title: 'Aggregator Apps Charging 15% to 30% Cuts',
          desc: 'Platforms like Classplus take hefty platform transaction cuts or course commissions, eating directly into your coaching profit margins.'
        },
        {
          title: 'Messy Cash & Cheque Bounce Reconciliations',
          desc: 'Matching offline cash payments, bounced bank cheques, and random UPI screenshots creates accounting nightmares at tax time.'
        }
      ]
    },
    capabilities: [
      { title: 'Flexible Installment Schedules', desc: 'Create 2, 4, or 10 installment structures with customizable due dates per student.' },
      { title: 'Direct UPI & QR Payment Links', desc: 'Parents pay directly into your institute bank account via PhonePe, GPay, or Paytm.' },
      { title: 'Automated Late Fee Calculations', desc: 'Optionally apply per-day late fines after grace periods expire.' },
      { title: 'Real-Time Defaulter Ledger', desc: 'Instant 1-click list of all students with overdue balances sorted by days past due.' }
    ]
  },

  'fee-receipts': {
    slug: 'fee-receipts',
    name: 'GST Invoice & Receipts',
    category: 'Finance & Controls',
    badge: 'Tax Compliance & Institutional Accounting',
    headline: 'Generate Professional GST-Ready Fee Receipts and WhatsApp PDFs in 5 Seconds on Cestrix',
    description: 'Handwriting paper receipt books is slow, error-prone, and looks unprofessional to modern parents. Cestrix generates professional, GST-compliant fee receipts with your coaching logo, unique serial numbering, fee breakdown, and instant WhatsApp delivery.',
    bullets: [
      'Instant GST and non-GST branded PDF receipt generation with unique automated voucher numbering',
      'Automated receipt dispatched to parent WhatsApp the moment payment is marked received',
      'Comprehensive audit trails and exportable Chartered Accountant (CA) Excel/Tally reports'
    ],
    uiSnippet: {
      tag1: 'GST Compliant PDF Receipts',
      tag2: 'Instant Parent WhatsApp Delivery',
      cardTitle: 'Fee Receipt Generator',
      statNumber: '100%',
      statLabel: 'Audit-Ready Tax Compliance',
      activeStatus: 'Vouchers Active',
      rows: [
        { col1: 'Receipt #CST-2026-0842', col2: 'Aditi Sharma • ₹25,000 (CGST+SGST)', badge: 'WhatsApp Sent', isGood: true },
        { col1: 'Receipt #CST-2026-0843', col2: 'Rohan Gupta • ₹18,000 (Cash Voucher)', badge: 'Printed', isGood: true },
        { col1: 'Monthly CA Tax Report (Excel)', col2: '142 Invoices • Ready for Tally Export', badge: 'Exported' }
      ]
    },
    audienceSection: {
      title: 'Built for Institutes That Want Flawless Accounting, Clean Tax Audits, and Professional Trust',
      subtitle: 'Give parents immediate, verifiable proof of payment with professional institutional invoices.',
      items: [
        {
          number: '01',
          title: 'Registered GST Coaching Centers',
          desc: 'Automatically calculate 18% GST (9% CGST + 9% SGST) with accurate HSN/SAC codes and tax invoice formatting.'
        },
        {
          number: '02',
          title: 'Non-GST Small Tuition Academies',
          desc: 'Issue clean, non-tax official fee vouchers and installment receipts with simple sequential serial numbering.'
        },
        {
          number: '03',
          title: 'School & College Fee Reimbursements',
          desc: 'Provide parents with employer-reimbursable fee receipts containing student name, academic year, and stamp.'
        },
        {
          number: '04',
          title: 'Multi-Branch Accounting Offices',
          desc: 'Standardize receipt templates across all branches with central serial ranges and fraud-proof digital vouchers.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Paper Receipt Books Cause Financial Leaks and Parent Disputes',
      subtitle: 'Carbon-copy receipt books get misplaced, carbon paper smudges, and reception staff can alter cash amounts.',
      cards: [
        {
          title: 'Paper Carbon Copies Lost or Smudged',
          desc: 'Parents lose their paper slip and demand proof of payment. Staff waste hours digging through dusty storerooms looking for duplicate counterfoils.'
        },
        {
          title: 'Internal Cash Theft & Unrecorded Receipts',
          desc: 'Without a cloud-locked serial number system, dishonest staff can accept cash from parents, issue a handwritten note, and pocket the fees.'
        },
        {
          title: 'Nightmare CA Tax Audits at Financial Year End',
          desc: 'Chartered accountants spend weeks reconciling illegible handwriting from 30 different receipt books, delaying GST filing and incurring penalties.'
        },
        {
          title: 'Unprofessional Image in Front of Parents',
          desc: 'Charging ₹50,000 for JEE coaching while handing parents a messy ₹10 paper receipt booklet diminishes your coaching brand prestige.'
        }
      ]
    },
    capabilities: [
      { title: 'Automated Serial Numbering', desc: 'Prevents gaps or duplicate receipt numbers with tamper-proof cloud tracking.' },
      { title: 'Instant WhatsApp PDF', desc: 'Sends a beautifully formatted PDF receipt directly to the parent smartphone in 3 seconds.' },
      { title: 'Tally & Excel Export', desc: 'Export all monthly financial collections in one click for your accountant or CA.' },
      { title: 'Official Signature & Seal', desc: 'Include your institute stamp and authorized signatory scan on digital receipts.' }
    ]
  },

  'multi-branch': {
    slug: 'multi-branch',
    name: 'Multi-Branch HQ Control',
    category: 'Finance & Controls',
    badge: 'Enterprise Franchise & Multi-Center Suite',
    headline: 'Control Admissions, Attendance, and Collections Across All Branches from Single HQ on Cestrix',
    description: 'Running 3, 5, or 20 coaching branches without a centralized software leads to operational blindness, duplicate overheads, and inconsistent academic quality. Cestrix Multi-Branch HQ lets franchise owners and directors monitor cross-city branches from a single unified master dashboard.',
    bullets: [
      'Centralized HQ master dashboard with real-time revenue, admission, and attendance metrics by branch',
      'Unified student profiles allowing seamless cross-branch transfers and fee reconciliation',
      'Role-based staff permissions: branch managers see only their center, while directors see everything'
    ],
    uiSnippet: {
      tag1: 'Multi-Center HQ Dashboard',
      tag2: 'Franchise Performance Metrics',
      cardTitle: 'Multi-Branch Master Overview',
      statNumber: '4 Centers',
      statLabel: 'Active Branches Connected',
      activeStatus: 'Central HQ Sync',
      rows: [
        { col1: 'Main Branch (Kalu Sarai)', col2: '640 Students • ₹42L Collected (98%)', badge: 'Top Performing', isGood: true },
        { col1: 'Branch 2 (Janakpuri)', col2: '380 Students • ₹26L Collected (94%)', badge: 'Optimal', isGood: true },
        { col1: 'Branch 3 (Noida Sector 62)', col2: '210 Students • Attendance 96.4%', badge: 'Growing' }
      ]
    },
    audienceSection: {
      title: 'Built for Visionary Coaching Owners Scaling from 1 Center to a City-Wide Brand',
      subtitle: 'Expand your coaching footprint without expanding your administrative headaches.',
      items: [
        {
          number: '01',
          title: 'Growing Coaching Chains (2-5 Branches)',
          desc: 'Maintain tight financial and academic control as you open your second and third neighborhood locations.'
        },
        {
          number: '02',
          title: 'Franchise & Royalty Model Networks',
          desc: 'Monitor franchise center student enrollments and calculate monthly royalty revenue shares automatically.'
        },
        {
          number: '03',
          title: 'Multi-City Test Prep Institutes',
          desc: 'Deliver identical NTA test series, DPPs, and video lectures across Jaipur, Kota, Delhi, and Lucknow branches.'
        },
        {
          number: '04',
          title: 'Centralized Accounting Teams',
          desc: 'Reconcile multi-center GST tax liabilities and staff payroll from your central corporate headquarters.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Most Coaching Institutes Struggle When Opening Their 2nd and 3rd Branches',
      subtitle: 'The director cannot be physically present at all locations simultaneously, leading to slipping branch standards.',
      cards: [
        {
          title: 'Cash Siphoning & Local Financial Leakage',
          desc: 'Without cloud-centralized fee receipts, branch managers under-report walk-in cash payments, leading to severe revenue losses.'
        },
        {
          title: 'Inconsistent Academic Quality Across Centers',
          desc: 'Branch A has stellar faculty and tests, while Branch B is poorly managed, damaging the overall institute brand reputation.'
        },
        {
          title: 'Nightmare Student Cross-Branch Transfers',
          desc: 'When a family moves across the city, transferring student records and fee balances between branches takes weeks of manual paperwork.'
        },
        {
          title: 'No Real-Time Executive Overview for Directors',
          desc: 'Coaching founders spend entire days calling branch heads asking: "How many inquiries today? How much fees was collected?"'
        }
      ]
    },
    capabilities: [
      { title: 'Branch Comparison Analytics', desc: 'Compare admissions, inquiry conversion, and collection efficiency side-by-side.' },
      { title: 'Centralized Content Distribution', desc: 'Publish a mock test or study material once; instantly available across all centers.' },
      { title: 'One-Click Branch Transfer', desc: 'Migrate a student to another branch with instant transfer of attendance and fee balances.' },
      { title: 'Granular Role Permissions', desc: 'Lock branch managers from altering fee structures or viewing other branch finances.' }
    ]
  },

  'mobile-app': {
    slug: 'mobile-app',
    name: 'Branded Mobile App',
    category: 'Finance & Controls',
    badge: 'White-Label Mobile App for Google Play Store',
    headline: 'Launch Your Coaching Institute’s Official Android App on Google Play Store with Cestrix',
    description: 'Transform your coaching institute into a modern EdTech brand. Cestrix publishes a dedicated, white-label Android mobile app on Google Play Store featuring your institute logo, colors, and name. Students stream DRM lectures, attempt NTA tests, and pay fees with 0% platform commission.',
    bullets: [
      'Your institute name and logo published on Google Play Store—zero mention of third-party platforms',
      'Complete EdTech suite: DRM video streaming, NTA mock tests, homework portal, and push notifications',
      '0% platform commission on course and test series sales—keep 100% of your student revenue'
    ],
    uiSnippet: {
      tag1: 'Your Logo on Google Play Store',
      tag2: '0% Platform Cut on Course Sales',
      cardTitle: 'Your Official Mobile App',
      statNumber: '4.8 ★',
      statLabel: 'Play Store Student Rating',
      activeStatus: 'Published on Play Store',
      rows: [
        { col1: 'Google Play Store Listing', col2: '"Sharma Classes Official App"', badge: 'Live on Store', isGood: true },
        { col1: 'Student App Downloads', col2: '2,840 Active Enrolled Students', badge: 'Active Users', isGood: true },
        { col1: 'DRM Screen Recording Guard', col2: 'Black-screen block on screen-grab', badge: 'Protected', isGood: true }
      ]
    },
    audienceSection: {
      title: 'Built for Educators Who Want to Own Their Student Community and Brand Identity',
      subtitle: 'Never build another platform’s brand. Build your own institution’s digital legacy.',
      items: [
        {
          number: '01',
          title: 'Established Premier Institutes',
          desc: 'Offer enrolled students a premium, branded digital companion for after-class doubt solving and test practice.'
        },
        {
          number: '02',
          title: 'Star Faculty & Solo Educators',
          desc: 'Sell your recorded video lectures, revision test series, and study material across the state on your own app.'
        },
        {
          number: '03',
          title: 'Tuition Hubs Replacing Paper Handouts',
          desc: 'Send DPP assignment questions, formula sheets, and batch notices directly via push notifications to student phones.'
        },
        {
          number: '04',
          title: 'Institutes Leaving Aggregator Apps',
          desc: 'Migrate away from aggregator platforms that take 15-30% cuts and market competing coaching classes to your students.'
        }
      ]
    },
    challengesSection: {
      badge: 'Institute Challenges',
      title: 'Why Using Aggregator Platforms Like Classplus Damages Your Long-Term Brand',
      subtitle: 'When you build on someone else’s aggregator app, you build their brand while paying heavy commissions.',
      cards: [
        {
          title: 'Aggregators Taking 15% to 30% Course Commissions',
          desc: 'Selling a ₹10,000 course on aggregator platforms means losing ₹1,500 to ₹3,000 per student in transaction fees and platform commissions.'
        },
        {
          title: 'Your Enrolled Students Marketed to Competitors',
          desc: 'Aggregators promote competing teachers and crash courses inside the same app ecosystem, poaching your hard-won students.'
        },
        {
          title: 'You Do Not Own Your Student Database',
          desc: 'If you ever decide to leave an aggregator platform, extracting your students, past test scores, and video libraries is deliberately difficult.'
        },
        {
          title: 'Generic Apps Do Not Impress Parents',
          desc: 'Parents paying premium tuition expect a custom-branded institute app with your logo on their child’s phone, not a generic third-party shell.'
        }
      ]
    },
    capabilities: [
      { title: 'Custom Play Store APK', desc: 'Published under your coaching developer account with your custom app icon and splash screen.' },
      { title: 'Screen Recording Block', desc: 'Hardware-level DRM protection blocks screenshot and screen-recording tools.' },
      { title: 'Direct Push Notifications', desc: 'Send exam tips, urgent holiday alerts, and motivation messages directly to student notification trays.' },
      { title: 'Integrated In-App Fee Pay', desc: 'Students or parents can settle pending installment dues directly inside the app with UPI.' }
    ]
  }
}
