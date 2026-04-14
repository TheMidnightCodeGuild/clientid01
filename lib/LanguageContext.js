import React, { createContext, useContext, useState, useCallback } from "react";

// ─── Translation dictionaries ──────────────────────────────────────────────────

const translations = {
  // NOTE: keys common to all pages are declared inline below;
  // page-specific sections are grouped with comments.
  en: {
    // Hero
    heroTitle1: "Invest Smart,",
    heroTitle2: "Secure Your Future",
    heroDesc:
      "Trusted financial guidance since 2008 — mutual funds, life insurance, health insurance, and retirement planning tailored to your goals.",
    contactNow: "Contact Now",

    // About
    aboutBadge: "About Us",
    aboutHeading: "Building Wealth & Protecting Futures Since 2008",
    aboutBody:
      "Mr. Seetaram Sharma, founder of Sankalpashree Wealth, has been a trusted Mutual Fund Distributor in Ujjain for over 18 years. As a certified LIC agent and Member of the Zonal Manager's Club for Agents, he specialises in mutual funds, life insurance, health insurance, retirement planning, and comprehensive.",
    aboutFeature1: "LIC Agent – Since 2008",
    aboutFeature2: "Mutual Fund Distributor",
    aboutFeature3: "Retirement Planning Expert",
    knowMore: "Know More",
    founderTitle: "Founder & Mutual Fund Distributor, Ujjain",

    // Why Choose Us
    whyChooseUs: "Why Choose Us",
    trustedGuidance: "Trusted Guidance for",
    smartDecisions: "Smart Decisions",
    whyBody:
      "With 18+ years of hands-on experience, we provide personalised financial solutions that align with your life goals — from wealth creation to family protection.",
    expertGuidanceTitle: "Expert Financial Guidance",
    expertGuidanceBody:
      "Decades of experience in mutual funds, LIC insurance, and investment planning help us deliver advice that is truly in your best interest.",
    completeInsuranceTitle: "Complete Insurance Coverage",
    completeInsuranceBody:
      "From life and health to general and accident insurance, we help you protect what matters most with the right coverage at the best price.",
    personalizedPlanningTitle: "Personalised Financial Planning",
    personalizedPlanningBody:
      "Every client gets a customised plan — whether you are saving for education, retirement, a home, or a dream vacation.",

    // Stats
    yearsConsulting: "Years of Consulting",
    happyClients: "Happy Clients",
    servicesOffered: "Services Offered",
    plansGuided: "Plans Guided",
    clientSatisfaction: "Client Satisfaction",

    // Services
    ourServices: "Our Services",
    professionalServices: "Professional",
    servicesWeOffer: "Services We Offer",
    servicesSubtitle:
      "From mutual funds to insurance, we offer end-to-end financial services to help every individual achieve their financial goals.",
    exploreService: "Explore Service",
    svc1Title: "Mutual Funds",
    svc1Desc:
      "Invest in diversified mutual fund portfolios tailored to your risk appetite and financial goals with expert guidance every step of the way.",
    svc3Title: "Retirement Planning",
    svc3Desc:
      "Build a robust retirement corpus with structured SIP plans and annuity-linked strategies so you retire with complete financial independence.",
    svc4Title: "Life Insurance",
    svc4Desc:
      "Secure your family's future with the right life insurance policy — term, endowment, or ULIP — from India's leading insurers including LIC.",
    svc5Title: "Health Insurance",
    svc5Desc:
      "Protect yourself and your family from rising medical costs with comprehensive health insurance plans and wide network hospital coverage.",
    svc6Title: "General Insurance",
    svc6Desc:
      "Safeguard your valuable assets — vehicle, home, and more — with the right general insurance plan at the most competitive premiums.",

    // Testimonials
    testimonials: "Testimonials",
    hearFromClients: "Hear From",
    ourClients: "Our Clients",
    testimonialsSubtitle:
      "Real stories from real clients who have trusted us with their financial future.",
    t1Text:
      "Mr. Seetaram Sharma helped me plan my retirement at 40. His guidance on SIPs and insurance has completely transformed my financial life. I feel secure knowing my family is protected.",
    t1Name: "Rajesh Patidar",
    t1Role: "Retired Engineer, Ujjain",
    t2Text:
      "I was confused about mutual funds and LIC policies. Seetaram ji explained everything clearly and helped me choose the right plan for my children's education. Highly recommended!",
    t2Name: "Priya Malhotra",
    t2Role: "Teacher, Ujjain",
    t3Text:
      "Thanks to Sankalpashree Wealth, I have been doing SIP for 5 years now. My portfolio has grown steadily and I now feel confident about my financial future. Excellent service and transparent advice.",
    t3Name: "Amit Sharma",
    t3Role: "Business Owner, Ujjain",
    readMore: "Read More",
    readLess: "Read Less",

    // FAQ
    faqHeading: "Frequently Asked",
    faqHeading2: "Questions",
    faqSubtitle:
      "Find answers to the most common questions about our financial services.",
    faq1Q: "What is the minimum amount to start a SIP?",
    faq1A:
      "You can start a SIP with as little as ₹500 per month. There is no maximum limit. The earlier you start, the more you benefit from the power of compounding.",
    faq2Q: "Is LIC better than private life insurance?",
    faq2A:
      "LIC is a government-backed insurer with a strong claim settlement record. Both LIC and private insurers offer good policies. We help you compare and choose based on your specific needs.",
    faq3Q: "How do I choose the right mutual fund?",
    faq3A:
      "The right fund depends on your risk appetite, investment horizon, and financial goals. We assess your profile and recommend the most suitable funds — equity, debt, or hybrid.",
    faq4Q: "What is the difference between term and whole life insurance?",
    faq4A:
      "Term insurance provides pure death benefit at low cost for a fixed period. Whole life insurance covers you for life and includes a savings component. We help you decide which fits your goal.",
    faq5Q: "When should I start retirement planning?",
    faq5A:
      "The earlier, the better — ideally in your 20s or 30s. Starting early allows you to accumulate a large retirement corpus through disciplined SIP investments over a longer period.",
    faq6Q: "Can I get tax benefits on my investments?",
    faq6A:
      "Yes. Investments in ELSS mutual funds, LIC premiums, PPF, and health insurance qualify for tax deductions under Section 80C and 80D of the Income Tax Act.",

    // CTA
    ctaHeading: "Ready to Secure",
    ctaHeading2: "Your Financial Future?",
    ctaSubtitle:
      "Let us help you build wealth, protect your family, and plan for life's biggest goals.",
    getInTouch: "Get In Touch",

    // Dream Goal Section
    dreamGoalBadge: "Sankalpashree Wealth",
    dreamGoalTitle1: "Draw Your",
    dreamGoalTitle2: "Dream Goal",
    dreamGoalDesc:
      "Tell us what you're dreaming of — whether it's your child's education, a home, or a stress-free retirement. We'll map out the perfect financial plan to get you there.",
    dreamGoalBadge1: "18+ Years of Trusted Guidance",
    dreamGoalBadge2: "1400+ Happy Investors",
    dreamGoalBadge3: "Personalised Plans — No Jargon",
    dreamGoalMobileDesc: "Share your goal — we'll craft the plan.",
    goalReceived: "Goal Received! 🎯",
    goalReceivedDesc:
      "We've received your dream goal. Our team will reach out within 24 hours with a personalised plan.",
    submitAnotherGoal: "Submit Another Goal",
    labelName: "Your Name",
    placeholderName: "Your Name",
    labelPhone: "Phone Number",
    placeholderPhone: "Phone Number",
    labelGoal: "My Dream Goal",
    selectGoalPlaceholder: "Select your goal…",
    describeGoalPlaceholder: "Describe your dream goal here…",
    sendGoalBtn: "🎯 Send My Dream Goal",
    sendingBtn: "Sending…",
    noSpamNote: "We'll reach out within 24 hours — no spam, promise.",
    errorMsg: "Something went wrong. Please try again or call us directly.",

    // Goal options
    goalKidsMarriage: "Kids Marriage Planning",
    goalKidsEducation: "Kids Education Planning",
    goalTaxSaving: "Tax Saving",
    goalDreamCar: "Dream Car",
    goalDreamHouse: "Dream House",
    goalDreamVacation: "Dream Vacation",
    goalRetirement: "Retirement Planning",
    goalSIP: "SIP Investment",
    goalLifeInsurance: "Life Insurance",
    goalHealthInsurance: "Health Insurance",
    goalOther: "Other",

    // Nav
    home: "Home",
    aboutUs: "About Us",
    gallery: "Gallery",
    servicesProducts: "Services & Products",
    blogs: "Blogs",
    contactUs: "Contact Us",
    contactNow2: "Contact Now",
    wealth: "Wealth",
    insurance: "Insurance",
    lifeInsurance: "Life Insurance",
    generalInsurance: "General Insurance",
    mutualFunds: "Mutual Funds",

    // trusted badge
    trustedSince: "Trusted Mutual Fund Distributor Since 2008",

    // ── About Us page ──
    aboutPageTitle: "About Us",
    aboutPageSubtitle: "Learn about Mr. Seetaram Sharma — trusted LIC agent and Mutual Fund Distributor in Ujjain since 2008.",
    ourFounder: "Our Founder",
    founderBio1: "Mr. Seetaram Sharma is the founder of Sankalpashree Wealth and has been a trusted Mutual Fund Distributor in Ujjain for over 18 years. As a certified LIC agent since 2008 and a proud Member of the Zonal Manager's Club for Agents, he has guided thousands of families towards financial security.",
    founderBio2: "With deep expertise in mutual funds, LIC life insurance, health insurance, retirement planning, and child future planning, Mr. Sharma offers personalised financial solutions that are transparent, goal-oriented, and built on trust.",
    founderBio3: "His unwavering commitment to client welfare and long-term wealth creation has made Sankalpashree Wealth one of the most respected names in financial planning in Ujjain.",
    missionVisionValues: "Mission, Vision & Values",
    ourMission: "Our Mission",
    missionText: "To empower every individual and family in Ujjain with trusted, personalised financial guidance — helping them build wealth, protect their loved ones, and achieve life's most important goals.",
    ourVision: "Our Vision",
    visionText: "To be the most trusted financial partner for 10,000+ families across Madhya Pradesh, delivering clarity, confidence, and long-term prosperity through honest financial planning.",
    ourValues: "Our Values",
    valuesText: "Integrity, transparency, and client-first thinking drive everything we do. We believe in no jargon, no mis-selling — only honest advice tailored to your unique financial journey.",
    financialConsultant: "Financial Consultant",
    smartSolutionsHeading: "Smart Solutions for Every Financial Goal",
    smartSolutionsP1: "With 18+ years of hands-on experience in mutual funds, LIC insurance, and investment planning, Mr. Seetaram Sharma delivers advice that is truly in your best interest — not commission-driven.",
    smartSolutionsP2: "Whether you are a first-time investor or planning for retirement, we build a roadmap that grows with you — structured, simple, and designed for real results.",
    yearsConsultingStat: "Years of Consulting",
    happyClientsStat: "Happy Clients",
    trustedFinancialGuidance: "Trusted Financial Guidance",
    trustedFinancialGuidanceDesc: "Decades of experience delivering honest, personalised financial plans for families across Ujjain.",
    readyToStartJourney: "Ready to Start Your Financial Journey?",
    journeySubtitle: "Let us help you build wealth, protect your family, and plan for life's biggest goals — with trusted guidance every step of the way.",

    // ── Services page ──
    servicesPageTitle: "Our Services",
    servicesPageSubtitle: "Comprehensive financial services tailored to help you build wealth, protect your family, and secure your future.",
    mfTitle: "Mutual Funds",
    mfDesc: "Mutual funds pool money from investors to purchase a diversified portfolio of stocks, bonds, or other securities. We guide you to the right fund based on your risk appetite and financial goals.",
    mfF1: "Expert fund selection based on risk profile",
    mfF2: "Diversified portfolio across equity, debt, and hybrid funds",
    mfF3: "Regular performance monitoring and portfolio reviews",
    mfF4: "SIP and lump-sum investment options",
    mfF5: "Tax-efficient fund choices for maximum returns",
    rpTitle: "Retirement Planning",
    rpDesc: "Build a retirement corpus that sustains your lifestyle without any financial compromise. We create structured investment plans so you retire with confidence and financial independence.",
    rpF1: "Goal-based retirement corpus calculation",
    rpF2: "SIPs and annuity-linked investment strategies",
    rpF3: "Risk-adjusted portfolio to protect wealth near retirement",
    rpF4: "Pension and provident fund integration guidance",
    rpF5: "Regular plan reviews to stay on track",
    liTitle: "Life Insurance",
    liDesc: "Life insurance provides your family with financial security in your absence. We help you choose the right policy — term, endowment, or ULIP — to match your protection and investment needs.",
    liF1: "Policies from leading insurers including LIC",
    liF2: "Sum assured calculation based on income and liabilities",
    liF3: "Term plans for pure risk coverage at low cost",
    liF4: "Endowment and money-back plans for savings with protection",
    liF5: "Policy review and nomination guidance",
    hiTitle: "Health Insurance",
    hiDesc: "A medical emergency can wipe out savings if you are uninsured. We recommend the best health insurance plans to protect you and your family from rising healthcare costs.",
    hiF1: "Individual, family floater, and senior citizen plans",
    hiF2: "Wide network hospitals for cashless treatment",
    hiF3: "Coverage for pre-hospitalisation and post-hospitalisation expenses",
    hiF4: "Critical illness riders and top-up plans for extra coverage",
    hiF5: "Claim assistance and policy renewal support",
    giTitle: "General Insurance",
    giDesc: "General insurance protects your assets — home, vehicle, and more — from unexpected losses. We help you find the right plan at the best premium.",
    giF1: "Motor insurance for cars and two-wheelers",
    giF2: "Home insurance against fire, theft, and natural disasters",
    giF3: "Quick claim settlement support",
    giF4: "Comprehensive and third-party coverage options",
    giF5: "Annual policy renewals and premium comparison",
    sipTitle: "SIP – Systematic Investment Plan",
    sipDesc: "SIP allows you to invest a fixed amount in mutual funds at regular intervals. It instills financial discipline, leverages rupee cost averaging, and grows wealth steadily over time.",
    sipF1: "Start with as little as ₹500 per month",
    sipF2: "Rupee cost averaging reduces market timing risk",
    sipF3: "Flexible SIP dates and amounts",
    sipF4: "Step-up SIP to increase contributions with income growth",
    sipF5: "Long-term wealth compounding for all life goals",
    swpTitle: "SWP – Systematic Withdrawal Plan",
    swpDesc: "SWP lets you withdraw a fixed amount from your mutual fund at regular intervals. It is ideal for retirees and those seeking a steady income stream without liquidating all investments.",
    swpF1: "Regular monthly income from mutual fund corpus",
    swpF2: "Partial redemption preserves remaining investment",
    swpF3: "Tax-efficient compared to FD interest income",
    swpF4: "Customisable frequency — monthly, quarterly, or annual",
    swpF5: "Ideal for retirement income planning",
    stpTitle: "STP – Systematic Transfer Plan",
    stpDesc: "STP enables automatic transfer of funds from one mutual fund to another at regular intervals. It is commonly used to safely move from debt to equity funds over time.",
    stpF1: "Gradual transfer from liquid/debt to equity funds",
    stpF2: "Reduces timing risk when entering equity markets",
    stpF3: "Fixed and flexible STP options",
    stpF4: "Helps deploy idle funds parked in liquid/debt schemes",
    stpF5: "Ideal for investors with lump sum looking to reduce risk",
    cprTitle: "Client Portfolio Review",
    cprDesc: "Regular portfolio reviews ensure your investments remain aligned with your financial goals, risk appetite, and market conditions. We provide structured, periodic assessments with actionable recommendations.",
    cprF1: "Comprehensive review of all holdings across mutual funds",
    cprF2: "Performance analysis vs. benchmarks and goals",
    cprF3: "Rebalancing recommendations based on life stage changes",
    cprF4: "Risk assessment and portfolio health check",
    cprF5: "Transparent reporting with clear next-step action plan",
    kidsMarriageTitle: "Kids Marriage Planning",
    kidsMarriageDesc: "Start saving early to build a comfortable corpus for your child's marriage. Our goal-based SIP plans help you accumulate wealth systematically so you are fully prepared when the big day arrives.",
    kidsMarriageF1: "Goal-based SIP tailored to marriage timeline and budget",
    kidsMarriageF2: "Corpus estimation accounting for inflation and rising costs",
    kidsMarriageF3: "Regular portfolio review to stay on track with the target",
    kidsMarriageF4: "Flexible step-up SIP to increase contributions as income grows",
    kidsMarriageF5: "Tax-efficient fund selection to maximize net returns",
    kidsEducationTitle: "Kids Education Planning",
    kidsEducationDesc: "Secure your child's academic future with a disciplined investment plan. We help you select the right mix of equity and debt funds aligned to your child's age and education goalpost.",
    kidsEducationF1: "Goal-based plan mapped to school, college, and higher education milestones",
    kidsEducationF2: "Inflation-adjusted corpus planning for rising education costs",
    kidsEducationF3: "Equity-oriented SIPs for long-term growth with gradual de-risking",
    kidsEducationF4: "Periodic reviews to rebalance as the goal approaches",
    kidsEducationF5: "Guidance on child-specific plans and ULIP alternatives",
    taxSavingTitle: "Tax Saving",
    taxSavingDesc: "Reduce your tax liability while building long-term wealth. We guide you through ELSS mutual funds and other tax-saving instruments under Section 80C.",
    taxSavingF1: "ELSS mutual funds with the shortest lock-in (3 years) under 80C",
    taxSavingF2: "Up to ₹1.5 lakh deduction under Section 80C annually",
    taxSavingF3: "Dual benefit of tax saving and potential for equity-linked returns",
    taxSavingF4: "Comparison of ELSS vs PPF, NSC, and other 80C options",
    taxSavingF5: "Health insurance premium deduction guidance under Section 80D",
    dreamCarTitle: "Dream Car",
    dreamCarDesc: "Turn your dream of owning the perfect car into a reality with a structured savings plan. We help you set a realistic timeline and invest systematically.",
    dreamCarF1: "Goal corpus calculation based on target car price and timeline",
    dreamCarF2: "Short-to-medium term debt or hybrid fund recommendations",
    dreamCarF3: "SIP plan that accumulates the down payment or full amount",
    dreamCarF4: "Guidance on balancing loan vs lump-sum purchase strategy",
    dreamCarF5: "Regular progress tracking to stay on target",
    dreamHouseTitle: "Dream House",
    dreamHouseDesc: "Owning your dream home is one of life's biggest financial goals. We help you create a step-by-step investment roadmap from accumulating a down payment to planning EMI without financial stress.",
    dreamHouseF1: "Down payment corpus planning through disciplined SIP investments",
    dreamHouseF2: "Timeline-based asset allocation (equity for long term, debt near goal)",
    dreamHouseF3: "Guidance on home loan tax benefits under Section 80C and 24(b)",
    dreamHouseF4: "Strategies to prepay home loan faster using surplus investments",
    dreamHouseF5: "Coordinated plan covering insurance, EMI, and emergency fund",
    dreamVacationTitle: "Dream Vacation",
    dreamVacationDesc: "Whether it's a family trip abroad or a bucket-list adventure, we help you plan and save for it without disrupting your everyday finances.",
    dreamVacationF1: "Short-term goal-based investment plan for holiday corpus",
    dreamVacationF2: "Liquid or ultra-short debt funds for capital safety near the date",
    dreamVacationF3: "Forex and travel insurance guidance for international trips",
    dreamVacationF4: "Recurring deposit or SIP comparison for the best return",
    dreamVacationF5: "Structured saving so vacation doesn't dip into emergency funds",
    paiTitle: "Personal Accident Insurance",
    paiDesc: "Personal Accident Insurance provides financial protection in case of accidental death, disability, or injury. It ensures you and your family are financially secure against unforeseen accidents.",
    paiF1: "Lump sum benefit on accidental death or permanent disability",
    paiF2: "Weekly compensation for temporary total disability",
    paiF3: "Medical expense reimbursement for accident-related treatment",
    paiF4: "Coverage for partial and permanent disabilities",
    paiF5: "Affordable premiums with wide coverage options",
    termTitle: "TERM Insurance",
    termDesc: "Term insurance is the purest form of life cover — high sum assured at low premium. It ensures your family receives financial support in your absence without the complexity of investment-linked products.",
    termF1: "High life cover at the most affordable premium",
    termF2: "Coverage up to age 85 with flexible policy terms",
    termF3: "Critical illness and accidental death benefit riders",
    termF4: "Return of premium option available",
    termF5: "Online and offline policy options from top insurers",
    tradTitle: "TRADITIONAL Insurance",
    tradDesc: "Traditional insurance plans combine life cover with guaranteed savings. These plans are ideal for conservative investors seeking assured returns along with insurance protection.",
    tradF1: "Guaranteed maturity benefit with life cover",
    tradF2: "Annual bonus additions to increase corpus",
    tradF3: "Loan facility against policy for liquidity",
    tradF4: "Safe, low-risk savings with life protection",
    tradF5: "Ideal for long-term savings goals like child education or wedding",
    medTitle: "MEDICLAIM",
    medDesc: "Mediclaim reimburses hospitalisation expenses incurred due to illness or injury. It is one of the most essential insurance covers for every individual and family to manage unexpected medical bills.",
    medF1: "Cashless hospitalisation across a wide network of hospitals",
    medF2: "Coverage for pre- and post-hospitalisation expenses",
    medF3: "Day-care procedures and ambulance charges included",
    medF4: "Family floater plans for comprehensive family coverage",
    medF5: "Tax benefit on paid premium under Section 80D",

    // ── Contact page ──
    contactPageTitle: "Contact Us",
    contactPageSubtitle: "Reach out to us for personalised financial guidance — we're here to help.",
    callUs: "Call Us",
    sendMessage: "Send Us a Message",
    messageSent: "Message Sent!",
    messageSentDesc: "Thank you for reaching out. We will get back to you shortly.",
    sendAnother: "Send Another",
    placeholderEmail: "Email Address",
    placeholderMessage: "Your Message",
    sendMessageBtn: "Send Message",
    sendingContactBtn: "Sending...",
    contactErrorMsg: "Something went wrong. Please try again or call us directly.",

    // ── Blogs page ──
    blogsPageTitle: "Our Blogs",
    blogsPageSubtitle: "Stay informed with the latest financial insights, investment strategies, and insurance guides from our experts.",
    loadingBlogs: "Loading blogs...",
    noBlogsFound: "No blogs found.",

    // ── Gallery page ──
    galleryPageTitle: "Our Gallery",
    galleryPageSubtitle: "A glimpse into our journey — from client milestones and financial workshops to team moments that reflect our commitment to trust and long-term financial partnerships.",
    loadingImages: "Loading images...",
    noImagesFound: "No images found.",

    // ── Footer ──
    footerTagline: "Your trusted partner for wealth creation and financial security.",
    quickLinks: "Quick Links",
    footerInsurance: "Insurance",
    footerContact: "Contact",
    footerCopyright: "© 2025 Sankalpashree Wealth. All rights reserved.",
    footerDesigned: "Designed & Developed by",
  },

  hi: {
    // Hero
    heroTitle1: "स्मार्ट निवेश करें,",
    heroTitle2: "अपना भविष्य सुरक्षित करें",
    heroDesc:
      "2008 से विश्वसनीय वित्तीय मार्गदर्शन — म्यूचुअल फंड, जीवन बीमा, स्वास्थ्य बीमा और आपके लक्ष्यों के अनुसार सेवानिवृत्ति योजना।",
    contactNow: "अभी संपर्क करें",

    // About
    aboutBadge: "हमारे बारे में",
    aboutHeading: "2008 से धन निर्माण और भविष्य की सुरक्षा",
    aboutBody:
      "श्री सीताराम शर्मा, संकल्पश्री वेल्थ के संस्थापक, 18 से अधिक वर्षों से उज्जैन में एक विश्वसनीय म्यूचुअल फंड वितरक रहे हैं। एक प्रमाणित LIC एजेंट और ज़ोनल मैनेजर क्लब के सदस्य के रूप में, वे म्यूचुअल फंड, जीवन बीमा, स्वास्थ्य बीमा और सेवानिवृत्ति योजना में विशेषज्ञ हैं।",
    aboutFeature1: "LIC एजेंट – 2008 से",
    aboutFeature2: "म्यूचुअल फंड वितरक",
    aboutFeature3: "सेवानिवृत्ति योजना विशेषज्ञ",
    knowMore: "और जानें",
    founderTitle: "संस्थापक और म्यूचुअल फंड वितरक, उज्जैन",

    // Why Choose Us
    whyChooseUs: "हमें क्यों चुनें",
    trustedGuidance: "विश्वसनीय मार्गदर्शन",
    smartDecisions: "स्मार्ट निर्णयों के लिए",
    whyBody:
      "18+ वर्षों के अनुभव के साथ, हम व्यक्तिगत वित्तीय समाधान प्रदान करते हैं जो आपके जीवन लक्ष्यों के अनुरूप हों — धन निर्माण से लेकर परिवार की सुरक्षा तक।",
    expertGuidanceTitle: "विशेषज्ञ वित्तीय मार्गदर्शन",
    expertGuidanceBody:
      "म्यूचुअल फंड, LIC बीमा और निवेश योजना में दशकों का अनुभव हमें आपके सर्वोत्तम हित में सलाह देने में सक्षम बनाता है।",
    completeInsuranceTitle: "संपूर्ण बीमा कवरेज",
    completeInsuranceBody:
      "जीवन और स्वास्थ्य से लेकर सामान्य और दुर्घटना बीमा तक, हम आपको सही कवरेज पर सबसे अच्छी कीमत पर सुरक्षित करते हैं।",
    personalizedPlanningTitle: "व्यक्तिगत वित्तीय योजना",
    personalizedPlanningBody:
      "हर ग्राहक को एक अनुकूलित योजना मिलती है — चाहे आप शिक्षा, सेवानिवृत्ति, घर या सपनों की छुट्टी के लिए बचत कर रहे हों।",

    // Stats
    yearsConsulting: "वर्षों का अनुभव",
    happyClients: "संतुष्ट ग्राहक",
    servicesOffered: "सेवाएं उपलब्ध",
    plansGuided: "योजनाएं मार्गदर्शित",
    clientSatisfaction: "ग्राहक संतुष्टि",

    // Services
    ourServices: "हमारी सेवाएं",
    professionalServices: "व्यावसायिक",
    servicesWeOffer: "सेवाएं जो हम प्रदान करते हैं",
    servicesSubtitle:
      "म्यूचुअल फंड से लेकर बीमा तक, हम हर व्यक्ति को उनके वित्तीय लक्ष्य प्राप्त करने में मदद के लिए संपूर्ण वित्तीय सेवाएं प्रदान करते हैं।",
    exploreService: "सेवा देखें",
    svc1Title: "म्यूचुअल फंड",
    svc1Desc:
      "आपकी जोखिम क्षमता और वित्तीय लक्ष्यों के अनुसार विविध म्यूचुअल फंड पोर्टफोलियो में निवेश करें।",
    svc3Title: "सेवानिवृत्ति योजना",
    svc3Desc:
      "संरचित SIP योजनाओं और वार्षिकी-लिंक्ड रणनीतियों के साथ एक मजबूत सेवानिवृत्ति कोष बनाएं।",
    svc4Title: "जीवन बीमा",
    svc4Desc:
      "भारत के अग्रणी बीमाकर्ताओं से सही जीवन बीमा पॉलिसी — टर्म, एंडाउमेंट या ULIP — से अपने परिवार का भविष्य सुरक्षित करें।",
    svc5Title: "स्वास्थ्य बीमा",
    svc5Desc:
      "व्यापक स्वास्थ्य बीमा योजनाओं से बढ़ती चिकित्सा लागत से अपनी और अपने परिवार की रक्षा करें।",
    svc6Title: "सामान्य बीमा",
    svc6Desc:
      "अपनी कीमती संपत्तियों — वाहन, घर और अन्य — को सही सामान्य बीमा योजना से सुरक्षित करें।",

    // Testimonials
    testimonials: "प्रशंसापत्र",
    hearFromClients: "सुनें हमारे",
    ourClients: "ग्राहकों से",
    testimonialsSubtitle:
      "वास्तविक ग्राहकों की वास्तविक कहानियां जिन्होंने अपने वित्तीय भविष्य के लिए हम पर भरोसा किया।",
    t1Text:
      "श्री सीताराम शर्मा ने 40 की उम्र में मेरी सेवानिवृत्ति योजना बनाने में मदद की। SIPs और बीमा पर उनके मार्गदर्शन ने मेरे वित्तीय जीवन को पूरी तरह बदल दिया।",
    t1Name: "राजेश पाटीदार",
    t1Role: "सेवानिवृत्त इंजीनियर, उज्जैन",
    t2Text:
      "मैं म्यूचुअल फंड और LIC पॉलिसियों को लेकर भ्रमित था। सीताराम जी ने सब कुछ स्पष्ट रूप से समझाया और मेरे बच्चों की शिक्षा के लिए सही योजना चुनने में मदद की।",
    t2Name: "प्रिया मल्होत्रा",
    t2Role: "शिक्षक, उज्जैन",
    t3Text:
      "संकल्पश्री वेल्थ की बदौलत, मैं 5 साल से SIP कर रहा हूं। मेरा पोर्टफोलियो लगातार बढ़ा है और अब मैं अपने वित्तीय भविष्य के बारे में आश्वस्त महसूस करता हूं।",
    t3Name: "अमित शर्मा",
    t3Role: "व्यापारी, उज्जैन",
    readMore: "और पढ़ें",
    readLess: "कम पढ़ें",

    // FAQ
    faqHeading: "अक्सर पूछे जाने वाले",
    faqHeading2: "प्रश्न",
    faqSubtitle:
      "हमारी वित्तीय सेवाओं के बारे में सबसे सामान्य प्रश्नों के उत्तर यहाँ पाएं।",
    faq1Q: "SIP शुरू करने के लिए न्यूनतम राशि क्या है?",
    faq1A:
      "आप केवल ₹500 प्रति माह से SIP शुरू कर सकते हैं। कोई अधिकतम सीमा नहीं है। जितनी जल्दी शुरू करें, चक्रवृद्धि का उतना अधिक लाभ मिलेगा।",
    faq2Q: "क्या LIC निजी जीवन बीमा से बेहतर है?",
    faq2A:
      "LIC एक सरकार समर्थित बीमाकर्ता है जिसका दावा निपटान रिकॉर्ड मजबूत है। हम आपकी विशिष्ट जरूरतों के आधार पर तुलना करने और चुनने में मदद करते हैं।",
    faq3Q: "मैं सही म्यूचुअल फंड कैसे चुनूं?",
    faq3A:
      "सही फंड आपकी जोखिम क्षमता, निवेश क्षितिज और वित्तीय लक्ष्यों पर निर्भर करता है। हम आपकी प्रोफ़ाइल का मूल्यांकन करके सबसे उपयुक्त फंड की सिफारिश करते हैं।",
    faq4Q: "टर्म और संपूर्ण जीवन बीमा में क्या अंतर है?",
    faq4A:
      "टर्म बीमा एक निश्चित अवधि के लिए कम लागत पर शुद्ध मृत्यु लाभ प्रदान करता है। संपूर्ण जीवन बीमा आजीवन कवर करता है और इसमें बचत घटक शामिल है।",
    faq5Q: "सेवानिवृत्ति योजना कब शुरू करनी चाहिए?",
    faq5A:
      "जितनी जल्दी, उतना अच्छा — आदर्श रूप से 20 या 30 की उम्र में। जल्दी शुरू करने से अनुशासित SIP निवेश के माध्यम से एक बड़ा कोष बनाया जा सकता है।",
    faq6Q: "क्या मुझे अपने निवेश पर कर लाभ मिल सकता है?",
    faq6A:
      "हाँ। ELSS म्यूचुअल फंड, LIC प्रीमियम, PPF और स्वास्थ्य बीमा में निवेश आयकर अधिनियम की धारा 80C और 80D के तहत कर कटौती के लिए योग्य हैं।",

    // CTA
    ctaHeading: "अपना वित्तीय भविष्य",
    ctaHeading2: "सुरक्षित करने के लिए तैयार हैं?",
    ctaSubtitle:
      "हमें आपकी धन-संपदा बनाने, परिवार की रक्षा करने और जीवन के बड़े लक्ष्यों की योजना बनाने में मदद करने दें।",
    getInTouch: "संपर्क करें",

    // Dream Goal Section
    dreamGoalBadge: "संकल्पश्री वेल्थ",
    dreamGoalTitle1: "अपना",
    dreamGoalTitle2: "सपना बताएं",
    dreamGoalDesc:
      "बताइए आपका सपना क्या है — चाहे बच्चे की पढ़ाई हो, घर हो, या तनावमुक्त सेवानिवृत्ति। हम आपके लिए सही वित्तीय योजना बनाएंगे।",
    dreamGoalBadge1: "18+ वर्षों का अनुभव",
    dreamGoalBadge2: "1400+ खुश निवेशक",
    dreamGoalBadge3: "व्यक्तिगत योजनाएं — कोई जटिल भाषा नहीं",
    dreamGoalMobileDesc: "अपना सपना बताएं — हम योजना बनाएंगे।",
    goalReceived: "सपना प्राप्त हुआ! 🎯",
    goalReceivedDesc:
      "हमें आपका सपना मिल गया है। हमारी टीम 24 घंटे के भीतर एक व्यक्तिगत योजना के साथ संपर्क करेगी।",
    submitAnotherGoal: "दूसरा सपना भेजें",
    labelName: "आपका नाम",
    placeholderName: "आपका नाम",
    labelPhone: "फोन नंबर",
    placeholderPhone: "फोन नंबर",
    labelGoal: "मेरा सपना",
    selectGoalPlaceholder: "अपना सपना चुनें…",
    describeGoalPlaceholder: "अपना सपना यहाँ बताएं…",
    sendGoalBtn: "🎯 मेरा सपना भेजें",
    sendingBtn: "भेज रहे हैं…",
    noSpamNote: "हम 24 घंटे में संपर्क करेंगे — कोई स्पैम नहीं, वादा।",
    errorMsg: "कुछ गलत हुआ। कृपया पुनः प्रयास करें या सीधे कॉल करें।",

    // Goal options
    goalKidsMarriage: "बच्चों की शादी की योजना",
    goalKidsEducation: "बच्चों की शिक्षा की योजना",
    goalTaxSaving: "टैक्स बचत",
    goalDreamCar: "सपनों की कार",
    goalDreamHouse: "सपनों का घर",
    goalDreamVacation: "सपनों की यात्रा",
    goalRetirement: "सेवानिवृत्ति योजना",
    goalSIP: "SIP निवेश",
    goalLifeInsurance: "जीवन बीमा",
    goalHealthInsurance: "स्वास्थ्य बीमा",
    goalOther: "अन्य",

    // Nav
    home: "होम",
    aboutUs: "हमारे बारे में",
    gallery: "गैलरी",
    servicesProducts: "सेवाएं और उत्पाद",
    blogs: "ब्लॉग",
    contactUs: "संपर्क करें",
    contactNow2: "अभी संपर्क करें",
    wealth: "धन-संपदा",
    insurance: "बीमा",
    lifeInsurance: "जीवन बीमा",
    generalInsurance: "सामान्य बीमा",
    mutualFunds: "म्यूचुअल फंड",

    // trusted badge
    trustedSince: "2008 से विश्वसनीय म्यूचुअल फंड वितरक",

    // ── About Us page ──
    aboutPageTitle: "हमारे बारे में",
    aboutPageSubtitle: "श्री सीताराम शर्मा के बारे में जानें — 2008 से उज्जैन में विश्वसनीय LIC एजेंट और म्यूचुअल फंड वितरक।",
    ourFounder: "हमारे संस्थापक",
    founderBio1: "श्री सीताराम शर्मा संकल्पश्री वेल्थ के संस्थापक हैं और 18 वर्षों से अधिक समय से उज्जैन में एक विश्वसनीय म्यूचुअल फंड वितरक रहे हैं। 2008 से प्रमाणित LIC एजेंट और ज़ोनल मैनेजर्स क्लब के गौरवशाली सदस्य के रूप में, उन्होंने हजारों परिवारों को वित्तीय सुरक्षा की ओर मार्गदर्शन किया है।",
    founderBio2: "म्यूचुअल फंड, LIC जीवन बीमा, स्वास्थ्य बीमा, सेवानिवृत्ति योजना और बच्चों की भविष्य योजना में गहरी विशेषज्ञता के साथ, श्री शर्मा पारदर्शी, लक्ष्य-उन्मुख और विश्वास पर आधारित व्यक्तिगत वित्तीय समाधान प्रदान करते हैं।",
    founderBio3: "ग्राहक कल्याण और दीर्घकालिक धन निर्माण के प्रति उनकी अटल प्रतिबद्धता ने संकल्पश्री वेल्थ को उज्जैन में वित्तीय योजना के सबसे सम्मानित नामों में से एक बना दिया है।",
    missionVisionValues: "मिशन, विज़न और मूल्य",
    ourMission: "हमारा मिशन",
    missionText: "उज्जैन में हर व्यक्ति और परिवार को विश्वसनीय, व्यक्तिगत वित्तीय मार्गदर्शन से सशक्त बनाना — उन्हें धन बनाने, प्रियजनों की रक्षा करने और जीवन के सबसे महत्वपूर्ण लक्ष्यों को प्राप्त करने में मदद करना।",
    ourVision: "हमारी विज़न",
    visionText: "मध्य प्रदेश भर में 10,000+ परिवारों के लिए सबसे विश्वसनीय वित्तीय भागीदार बनना — ईमानदार वित्तीय योजना के माध्यम से स्पष्टता, विश्वास और दीर्घकालिक समृद्धि प्रदान करना।",
    ourValues: "हमारे मूल्य",
    valuesText: "सत्यनिष्ठा, पारदर्शिता और ग्राहक-प्रथम सोच हमारे हर कार्य को संचालित करती है। हम कोई जटिल भाषा नहीं, कोई गलत बिक्री नहीं — केवल आपकी अनूठी वित्तीय यात्रा के अनुरूप ईमानदार सलाह में विश्वास करते हैं।",
    financialConsultant: "वित्तीय सलाहकार",
    smartSolutionsHeading: "हर वित्तीय लक्ष्य के लिए स्मार्ट समाधान",
    smartSolutionsP1: "म्यूचुअल फंड, LIC बीमा और निवेश योजना में 18+ वर्षों के व्यावहारिक अनुभव के साथ, श्री सीताराम शर्मा ऐसी सलाह देते हैं जो वास्तव में आपके हित में है — कमीशन-आधारित नहीं।",
    smartSolutionsP2: "चाहे आप पहली बार निवेशक हों या सेवानिवृत्ति की योजना बना रहे हों, हम एक ऐसा रोडमैप बनाते हैं जो आपके साथ बढ़ता है — संरचित, सरल और वास्तविक परिणामों के लिए डिज़ाइन किया गया।",
    yearsConsultingStat: "वर्षों का अनुभव",
    happyClientsStat: "संतुष्ट ग्राहक",
    trustedFinancialGuidance: "विश्वसनीय वित्तीय मार्गदर्शन",
    trustedFinancialGuidanceDesc: "उज्जैन के परिवारों के लिए ईमानदार, व्यक्तिगत वित्तीय योजनाएं प्रदान करने के दशकों का अनुभव।",
    readyToStartJourney: "अपनी वित्तीय यात्रा शुरू करने के लिए तैयार हैं?",
    journeySubtitle: "हमें आपकी धन-संपदा बनाने, परिवार की रक्षा करने और जीवन के बड़े लक्ष्यों की योजना बनाने में मदद करने दें।",

    // ── Services page ──
    servicesPageTitle: "हमारी सेवाएं",
    servicesPageSubtitle: "आपकी धन-संपदा बनाने, परिवार की रक्षा करने और भविष्य को सुरक्षित करने के लिए व्यापक वित्तीय सेवाएं।",
    mfTitle: "म्यूचुअल फंड",
    mfDesc: "म्यूचुअल फंड निवेशकों के पैसे को स्टॉक, बॉन्ड या अन्य प्रतिभूतियों के विविध पोर्टफोलियो में लगाते हैं। हम आपकी जोखिम क्षमता और वित्तीय लक्ष्यों के आधार पर सही फंड चुनने में मदद करते हैं।",
    mfF1: "जोखिम प्रोफाइल के आधार पर विशेषज्ञ फंड चयन",
    mfF2: "इक्विटी, डेब्ट और हाइब्रिड फंड में विविध पोर्टफोलियो",
    mfF3: "नियमित प्रदर्शन निगरानी और पोर्टफोलियो समीक्षा",
    mfF4: "SIP और एकमुश्त निवेश विकल्प",
    mfF5: "अधिकतम रिटर्न के लिए कर-कुशल फंड विकल्प",
    rpTitle: "सेवानिवृत्ति योजना",
    rpDesc: "एक सेवानिवृत्ति कोष बनाएं जो बिना किसी वित्तीय समझौते के आपकी जीवनशैली को बनाए रखे। हम संरचित निवेश योजनाएं बनाते हैं ताकि आप आत्मविश्वास के साथ सेवानिवृत्त हों।",
    rpF1: "लक्ष्य-आधारित सेवानिवृत्ति कोष गणना",
    rpF2: "SIP और वार्षिकी-लिंक्ड निवेश रणनीतियां",
    rpF3: "सेवानिवृत्ति के पास धन की रक्षा के लिए जोखिम-समायोजित पोर्टफोलियो",
    rpF4: "पेंशन और भविष्य निधि एकीकरण मार्गदर्शन",
    rpF5: "ट्रैक पर बने रहने के लिए नियमित योजना समीक्षाएं",
    liTitle: "जीवन बीमा",
    liDesc: "जीवन बीमा आपकी अनुपस्थिति में आपके परिवार को वित्तीय सुरक्षा प्रदान करता है। हम आपकी सुरक्षा और निवेश आवश्यकताओं के अनुसार सही पॉलिसी — टर्म, एंडाउमेंट या ULIP — चुनने में मदद करते हैं।",
    liF1: "LIC सहित प्रमुख बीमाकर्ताओं की पॉलिसियां",
    liF2: "आय और देनदारियों के आधार पर बीमा राशि की गणना",
    liF3: "कम लागत पर शुद्ध जोखिम कवरेज के लिए टर्म योजनाएं",
    liF4: "बचत के साथ सुरक्षा के लिए एंडाउमेंट और मनी-बैक योजनाएं",
    liF5: "पॉलिसी समीक्षा और नामांकन मार्गदर्शन",
    hiTitle: "स्वास्थ्य बीमा",
    hiDesc: "चिकित्सा आपातकाल बिना बीमा के बचत को समाप्त कर सकता है। हम बढ़ती स्वास्थ्य सेवा लागत से आपकी और आपके परिवार की रक्षा के लिए सर्वोत्तम स्वास्थ्य बीमा योजनाओं की सिफारिश करते हैं।",
    hiF1: "व्यक्तिगत, पारिवारिक फ्लोटर और वरिष्ठ नागरिक योजनाएं",
    hiF2: "कैशलेस उपचार के लिए व्यापक नेटवर्क अस्पताल",
    hiF3: "पूर्व-अस्पताल भर्ती और बाद-अस्पताल भर्ती खर्चों का कवरेज",
    hiF4: "अतिरिक्त कवरेज के लिए गंभीर बीमारी राइडर और टॉप-अप योजनाएं",
    hiF5: "दावा सहायता और पॉलिसी नवीनीकरण सहायता",
    giTitle: "सामान्य बीमा",
    giDesc: "सामान्य बीमा आपकी संपत्तियों — घर, वाहन और अन्य — को अप्रत्याशित नुकसान से बचाता है। हम सर्वोत्तम प्रीमियम पर सही योजना खोजने में मदद करते हैं।",
    giF1: "कारों और दोपहिया के लिए मोटर बीमा",
    giF2: "आग, चोरी और प्राकृतिक आपदाओं के खिलाफ गृह बीमा",
    giF3: "त्वरित दावा निपटान सहायता",
    giF4: "व्यापक और तृतीय-पक्ष कवरेज विकल्प",
    giF5: "वार्षिक पॉलिसी नवीनीकरण और प्रीमियम तुलना",
    sipTitle: "SIP – व्यवस्थित निवेश योजना",
    sipDesc: "SIP आपको नियमित अंतराल पर म्यूचुअल फंड में एक निश्चित राशि निवेश करने की अनुमति देता है। यह वित्तीय अनुशासन स्थापित करता है और समय के साथ धन को स्थिर रूप से बढ़ाता है।",
    sipF1: "प्रति माह मात्र ₹500 से शुरू करें",
    sipF2: "रुपया लागत औसत बाजार समय जोखिम को कम करता है",
    sipF3: "लचीली SIP तिथियां और राशियां",
    sipF4: "आय वृद्धि के साथ योगदान बढ़ाने के लिए स्टेप-अप SIP",
    sipF5: "सभी जीवन लक्ष्यों के लिए दीर्घकालिक धन संयोजन",
    swpTitle: "SWP – व्यवस्थित निकासी योजना",
    swpDesc: "SWP आपको नियमित अंतराल पर म्यूचुअल फंड से एक निश्चित राशि निकालने की अनुमति देता है। यह सेवानिवृत्त लोगों के लिए आदर्श है।",
    swpF1: "म्यूचुअल फंड कोष से नियमित मासिक आय",
    swpF2: "आंशिक मोचन शेष निवेश को बनाए रखता है",
    swpF3: "FD ब्याज आय की तुलना में कर-कुशल",
    swpF4: "अनुकूलनीय आवृत्ति — मासिक, त्रैमासिक या वार्षिक",
    swpF5: "सेवानिवृत्ति आय योजना के लिए आदर्श",
    stpTitle: "STP – व्यवस्थित स्थानांतरण योजना",
    stpDesc: "STP एक म्यूचुअल फंड से दूसरे में नियमित अंतराल पर फंड के स्वचालित हस्तांतरण को सक्षम करता है। इसका उपयोग डेब्ट से इक्विटी फंड में सुरक्षित रूप से जाने के लिए किया जाता है।",
    stpF1: "लिक्विड/डेब्ट से इक्विटी फंड में क्रमिक हस्तांतरण",
    stpF2: "इक्विटी बाजारों में प्रवेश करते समय समय जोखिम कम करता है",
    stpF3: "निश्चित और लचीले STP विकल्प",
    stpF4: "लिक्विड/डेब्ट योजनाओं में पड़े बेकार फंड को तैनात करने में मदद करता है",
    stpF5: "जोखिम कम करने की तलाश में एकमुश्त राशि वाले निवेशकों के लिए आदर्श",
    cprTitle: "क्लाइंट पोर्टफोलियो समीक्षा",
    cprDesc: "नियमित पोर्टफोलियो समीक्षाएं सुनिश्चित करती हैं कि आपके निवेश आपके वित्तीय लक्ष्यों के अनुरूप बने रहें। हम कार्रवाई योग्य सिफारिशों के साथ संरचित आवधिक मूल्यांकन प्रदान करते हैं।",
    cprF1: "म्यूचुअल फंड में सभी होल्डिंग्स की व्यापक समीक्षा",
    cprF2: "बेंचमार्क और लक्ष्यों के विरुद्ध प्रदर्शन विश्लेषण",
    cprF3: "जीवन चरण परिवर्तनों के आधार पर पुनर्संतुलन सिफारिशें",
    cprF4: "जोखिम मूल्यांकन और पोर्टफोलियो स्वास्थ्य जांच",
    cprF5: "स्पष्ट अगले-चरण कार्य योजना के साथ पारदर्शी रिपोर्टिंग",
    kidsMarriageTitle: "बच्चों की शादी की योजना",
    kidsMarriageDesc: "अपने बच्चे की शादी के लिए एक आरामदायक कोष बनाने के लिए जल्दी बचत शुरू करें। हमारी लक्ष्य-आधारित SIP योजनाएं आपको व्यवस्थित रूप से धन संचित करने में मदद करती हैं।",
    kidsMarriageF1: "शादी की समयसीमा और बजट के अनुसार लक्ष्य-आधारित SIP",
    kidsMarriageF2: "मुद्रास्फीति और बढ़ती लागत को ध्यान में रखते हुए कोष अनुमान",
    kidsMarriageF3: "लक्ष्य के साथ ट्रैक पर बने रहने के लिए नियमित पोर्टफोलियो समीक्षा",
    kidsMarriageF4: "आय बढ़ने के साथ योगदान बढ़ाने के लिए लचीला स्टेप-अप SIP",
    kidsMarriageF5: "शुद्ध रिटर्न को अधिकतम करने के लिए कर-कुशल फंड चयन",
    kidsEducationTitle: "बच्चों की शिक्षा की योजना",
    kidsEducationDesc: "अनुशासित निवेश योजना के साथ अपने बच्चे के शैक्षणिक भविष्य को सुरक्षित करें। हम आपके बच्चे की उम्र और शिक्षा लक्ष्य के अनुसार इक्विटी और डेब्ट फंड का सही मिश्रण चुनने में मदद करते हैं।",
    kidsEducationF1: "स्कूल, कॉलेज और उच्च शिक्षा मील के पत्थरों पर मैप की गई लक्ष्य-आधारित योजना",
    kidsEducationF2: "बढ़ती शिक्षा लागत के लिए मुद्रास्फीति-समायोजित कोष योजना",
    kidsEducationF3: "क्रमिक डी-रिस्किंग के साथ दीर्घकालिक विकास के लिए इक्विटी-उन्मुख SIP",
    kidsEducationF4: "लक्ष्य निकट आने पर पुनर्संतुलन के लिए आवधिक समीक्षाएं",
    kidsEducationF5: "बाल-विशिष्ट योजनाओं और ULIP विकल्पों पर मार्गदर्शन",
    taxSavingTitle: "टैक्स बचत",
    taxSavingDesc: "दीर्घकालिक धन निर्माण करते हुए अपनी कर देनदारी कम करें। हम धारा 80C के तहत ELSS म्यूचुअल फंड और अन्य कर-बचत साधनों के माध्यम से मार्गदर्शन करते हैं।",
    taxSavingF1: "80C के तहत सबसे कम लॉक-इन (3 वर्ष) के साथ ELSS म्यूचुअल फंड",
    taxSavingF2: "धारा 80C के तहत सालाना ₹1.5 लाख तक की कटौती",
    taxSavingF3: "कर बचत और इक्विटी-लिंक्ड रिटर्न की संभावना का दोहरा लाभ",
    taxSavingF4: "ELSS बनाम PPF, NSC और अन्य 80C विकल्पों की तुलना",
    taxSavingF5: "धारा 80D के तहत स्वास्थ्य बीमा प्रीमियम कटौती मार्गदर्शन",
    dreamCarTitle: "सपनों की कार",
    dreamCarDesc: "एक संरचित बचत योजना के साथ अपनी सपनों की कार खरीदने का सपना साकार करें। हम आपको एक यथार्थवादी समयसीमा निर्धारित करने और व्यवस्थित रूप से निवेश करने में मदद करते हैं।",
    dreamCarF1: "लक्षित कार मूल्य और समयसीमा के आधार पर लक्ष्य कोष गणना",
    dreamCarF2: "अल्पकालिक से मध्यम अवधि के डेब्ट या हाइब्रिड फंड की सिफारिशें",
    dreamCarF3: "SIP योजना जो डाउन पेमेंट या पूरी राशि जमा करती है",
    dreamCarF4: "ऋण बनाम एकमुश्त खरीद रणनीति को संतुलित करने पर मार्गदर्शन",
    dreamCarF5: "लक्ष्य पर बने रहने के लिए नियमित प्रगति ट्रैकिंग",
    dreamHouseTitle: "सपनों का घर",
    dreamHouseDesc: "अपने सपनों का घर खरीदना जीवन के सबसे बड़े वित्तीय लक्ष्यों में से एक है। हम आपको डाउन पेमेंट जमा करने से लेकर बिना वित्तीय तनाव के EMI योजना बनाने तक का रोडमैप बनाने में मदद करते हैं।",
    dreamHouseF1: "अनुशासित SIP निवेश के माध्यम से डाउन पेमेंट कोष योजना",
    dreamHouseF2: "समयसीमा-आधारित संपत्ति आवंटन (दीर्घकालिक के लिए इक्विटी, लक्ष्य के पास डेब्ट)",
    dreamHouseF3: "धारा 80C और 24(b) के तहत गृह ऋण कर लाभ पर मार्गदर्शन",
    dreamHouseF4: "अधिशेष निवेश का उपयोग करके गृह ऋण तेजी से पूर्व-भुगतान की रणनीतियां",
    dreamHouseF5: "बीमा, EMI और आपातकालीन निधि को कवर करने वाली समन्वित योजना",
    dreamVacationTitle: "सपनों की यात्रा",
    dreamVacationDesc: "चाहे विदेश में पारिवारिक यात्रा हो या बकेट-लिस्ट साहसिक यात्रा, हम आपको अपनी रोजमर्रा की वित्त को बाधित किए बिना योजना बनाने और बचत करने में मदद करते हैं।",
    dreamVacationF1: "छुट्टी कोष के लिए अल्पकालिक लक्ष्य-आधारित निवेश योजना",
    dreamVacationF2: "तिथि के पास पूंजी सुरक्षा के लिए लिक्विड या अल्ट्रा-शॉर्ट डेब्ट फंड",
    dreamVacationF3: "अंतर्राष्ट्रीय यात्राओं के लिए विदेशी मुद्रा और यात्रा बीमा मार्गदर्शन",
    dreamVacationF4: "सर्वोत्तम रिटर्न के लिए आवर्ती जमा या SIP तुलना",
    dreamVacationF5: "संरचित बचत ताकि छुट्टी आपातकालीन निधि से न काटे",
    paiTitle: "व्यक्तिगत दुर्घटना बीमा",
    paiDesc: "व्यक्तिगत दुर्घटना बीमा आकस्मिक मृत्यु, विकलांगता या चोट की स्थिति में वित्तीय सुरक्षा प्रदान करता है। यह सुनिश्चित करता है कि आप और आपका परिवार अनपेक्षित दुर्घटनाओं के खिलाफ वित्तीय रूप से सुरक्षित हैं।",
    paiF1: "आकस्मिक मृत्यु या स्थायी विकलांगता पर एकमुश्त लाभ",
    paiF2: "अस्थायी पूर्ण विकलांगता के लिए साप्ताहिक मुआवजा",
    paiF3: "दुर्घटना-संबंधित उपचार के लिए चिकित्सा व्यय प्रतिपूर्ति",
    paiF4: "आंशिक और स्थायी विकलांगता के लिए कवरेज",
    paiF5: "व्यापक कवरेज विकल्पों के साथ किफायती प्रीमियम",
    termTitle: "टर्म बीमा",
    termDesc: "टर्म बीमा जीवन कवर का सबसे शुद्ध रूप है — कम प्रीमियम पर उच्च बीमा राशि। यह सुनिश्चित करता है कि आपकी अनुपस्थिति में आपके परिवार को निवेश-लिंक्ड उत्पादों की जटिलता के बिना वित्तीय सहायता मिले।",
    termF1: "सबसे किफायती प्रीमियम पर उच्च जीवन कवर",
    termF2: "लचीली पॉलिसी शर्तों के साथ 85 वर्ष की आयु तक कवरेज",
    termF3: "गंभीर बीमारी और आकस्मिक मृत्यु लाभ राइडर",
    termF4: "प्रीमियम वापसी विकल्प उपलब्ध",
    termF5: "शीर्ष बीमाकर्ताओं से ऑनलाइन और ऑफलाइन पॉलिसी विकल्प",
    tradTitle: "पारंपरिक बीमा",
    tradDesc: "पारंपरिक बीमा योजनाएं जीवन कवर को गारंटीड बचत के साथ जोड़ती हैं। ये योजनाएं उन रूढ़िवादी निवेशकों के लिए आदर्श हैं जो बीमा सुरक्षा के साथ सुनिश्चित रिटर्न चाहते हैं।",
    tradF1: "जीवन कवर के साथ गारंटीड परिपक्वता लाभ",
    tradF2: "कोष बढ़ाने के लिए वार्षिक बोनस जोड़",
    tradF3: "तरलता के लिए पॉलिसी के विरुद्ध ऋण सुविधा",
    tradF4: "जीवन सुरक्षा के साथ सुरक्षित, कम-जोखिम बचत",
    tradF5: "बच्चों की शिक्षा या शादी जैसे दीर्घकालिक बचत लक्ष्यों के लिए आदर्श",
    medTitle: "मेडिक्लेम",
    medDesc: "मेडिक्लेम बीमारी या चोट के कारण हुए अस्पताल भर्ती खर्चों की प्रतिपूर्ति करता है। यह हर व्यक्ति और परिवार के लिए अप्रत्याशित चिकित्सा बिलों को प्रबंधित करने के लिए सबसे आवश्यक बीमा कवर में से एक है।",
    medF1: "अस्पतालों के व्यापक नेटवर्क में कैशलेस अस्पताल भर्ती",
    medF2: "पूर्व और बाद अस्पताल भर्ती खर्चों का कवरेज",
    medF3: "डे-केयर प्रक्रियाएं और एम्बुलेंस शुल्क शामिल",
    medF4: "व्यापक पारिवारिक कवरेज के लिए फैमिली फ्लोटर योजनाएं",
    medF5: "धारा 80D के तहत भुगतान प्रीमियम पर कर लाभ",

    // ── Contact page ──
    contactPageTitle: "संपर्क करें",
    contactPageSubtitle: "व्यक्तिगत वित्तीय मार्गदर्शन के लिए हमसे संपर्क करें — हम मदद के लिए यहाँ हैं।",
    callUs: "कॉल करें",
    sendMessage: "हमें संदेश भेजें",
    messageSent: "संदेश भेजा गया!",
    messageSentDesc: "संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे वापस संपर्क करेंगे।",
    sendAnother: "दूसरा संदेश भेजें",
    placeholderEmail: "ईमेल पता",
    placeholderMessage: "आपका संदेश",
    sendMessageBtn: "संदेश भेजें",
    sendingContactBtn: "भेज रहे हैं...",
    contactErrorMsg: "कुछ गलत हुआ। कृपया पुनः प्रयास करें या सीधे कॉल करें।",

    // ── Blogs page ──
    blogsPageTitle: "हमारे ब्लॉग",
    blogsPageSubtitle: "हमारे विशेषज्ञों से नवीनतम वित्तीय जानकारी, निवेश रणनीतियों और बीमा गाइड के साथ अपडेट रहें।",
    loadingBlogs: "ब्लॉग लोड हो रहे हैं...",
    noBlogsFound: "कोई ब्लॉग नहीं मिला।",

    // ── Gallery page ──
    galleryPageTitle: "हमारी गैलरी",
    galleryPageSubtitle: "हमारी यात्रा की एक झलक — ग्राहक उपलब्धियों और वित्तीय कार्यशालाओं से लेकर टीम के उन पलों तक जो विश्वास और दीर्घकालिक वित्तीय साझेदारी के प्रति हमारी प्रतिबद्धता को दर्शाते हैं।",
    loadingImages: "छवियां लोड हो रही हैं...",
    noImagesFound: "कोई छवि नहीं मिली।",

    // ── Footer ──
    footerTagline: "धन निर्माण और वित्तीय सुरक्षा के लिए आपका विश्वसनीय भागीदार।",
    quickLinks: "त्वरित लिंक",
    footerInsurance: "बीमा",
    footerContact: "संपर्क",
    footerCopyright: "© 2025 संकल्पश्री वेल्थ। सर्वाधिकार सुरक्षित।",
    footerDesigned: "द्वारा डिज़ाइन और विकसित",
  },
};

// ─── Context ───────────────────────────────────────────────────────────────────

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  }, []);

  const t = useCallback(
    (key) => translations[lang]?.[key] ?? translations["en"]?.[key] ?? key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
