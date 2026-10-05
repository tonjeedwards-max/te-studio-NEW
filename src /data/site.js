// T.E Studio — site content. Edit freely.

export const site = {
  brand: "T.E Studio",
  tagline: "Where Design Meets Development",
  name: "Tonje Edwards",
  role: "Photographer · Designer · Developer",
  email: "tonje.edwards@gmail.com",
  phone: "+1 (876) 790-6364",
  location: "Kingston, Jamaica",
  footerCredit: "Tonje Edwards — Communication Studio I · AY 2025/26 Sem 1",
  logoFull: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/240855f1a_2025Portfoliobanner.png",
  logoIcon: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/2806eae1a_2025OnlinePortfolioAssets.png",
};

export const nav = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [{ label: "Resume", to: "/resume" }],
  },
  { label: "Skills", to: "/skills" },
  {
    label: "Portfolio",
    to: "/portfolio",
    children: [
      { label: "Photography Portfolio", to: "/portfolio" },
      { label: "Digital Portfolio", to: "/portfolio/digital" },
      { label: "Graphics & Web Portfolio", to: "/portfolio/graphics" },
      { label: "Audio & Video Post-Production Portfolio", to: "/portfolio/audio" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tonje-edwards-055a76212/" },
  { name: "Facebook", url: "https://www.facebook.com/tonje.edwards/" },
  { name: "X", url: "https://x.com/Edwards_CAT2012" },
  { name: "YouTube", url: "https://www.youtube.com/@TonjeEdwards" },
];

export const hero = {
  signature: "Tonje Edwards",
  heading: "I Make Things Look GREAT",
  sub: "(On Camera and Online)",
  suffix: "MEDIA & MORE",
};

export const about = {
  eyebrow: "ABOUT ME",
  title: "A creative professional who actually knows how SEO works.",
  body: "I capture stories through photography, build websites that don't make people want to throw their computers, and occasionally convince Google that my content is worth showing people. Whether you need stunning visuals or someone who can handle everything from photo shoots to social media strategy, I'm your person.",
  skills: [
    "Digital Art & Design",
    "Web Development & Management",
    "Digital Marketing & SEO",
    "Photography",
  ],
  cta: "Learn More",
};

export const services = {
  eyebrow: "MY SERVICES",
  title: "Comprehensive Design and Marketing Solutions",
  items: [
    {
      icon: "Camera",
      title: "Photography",
      body: "Capturing real moments — events, sports, and human interest. No undo button, no layers panel, just me and a camera.",
      to: "/portfolio",
    },
    {
      icon: "Palette",
      title: "Digital Art & Illustration",
      body: "Original digital illustrations and character art — where composition, color, and visual storytelling all began.",
      to: "/portfolio/digital",
    },
    {
      icon: "Globe",
      title: "Graphics & Web",
      body: "Brand identities, layouts, and web builds that look professional, load fast, and actually represent who you are.",
      to: "/portfolio/graphics",
    },
    {
      icon: "Clapperboard",
      title: "Audio & Video Post-Production",
      body: "Editing, mixing, and post-production for audio and video — the newest addition to the toolkit.",
      to: "/portfolio/audio",
    },
  ],
};

export const whyMe = {
  eyebrow: "WHY ME",
  title: "Committed to Excellence",
  image:
    "https://media.base44.com/images/public/6a8f3818cb359994e15db779/cb976ac88_generated_image.png",
  items: [
    {
      title: "Expertise & Experience",
      body: "With years of industry experience, our skilled team brings unparalleled knowledge and creativity to every project.",
    },
    {
      title: "Unique Designs",
      body: "Anime and manga taught me to think outside the box before I even knew there was a box. I don't just recreate what already exists, I conceptualize new ideas that actually stand out.",
    },
    {
      title: "High-End Quality",
      body: "I'm detail-focused to the point of being slightly obsessive about it, which means nothing leaves my hands unless it's done right. Misaligned elements, pixelated images, broken links, inconsistent branding? Not on my watch.",
    },
  ],
};

export const projects = {
  eyebrow: "MY PROJECTS",
  title: "My Skills Laid Out",
  cta: "View Skills",
  items: [
    {
      title: "Character Illustration",
      image:
        "https://media.base44.com/images/public/6a8f3818cb359994e15db779/1c3a4851c_generated_image.png",
      shape: "circle",
    },
    {
      title: "Sports Photography",
      image:
        "https://media.base44.com/images/public/6a8f3818cb359994e15db779/582e36a50_generated_image.png",
      shape: "square",
    },
    {
      title: "Editorial Design",
      image:
        "https://media.base44.com/images/public/6a8f3818cb359994e15db779/6131d3535_generated_image.png",
      shape: "square",
    },
  ],
};

export const footer = {
  cta: {
    heading: "Not Convinced?",
    body: "If you need someone who understands the full creative pipeline from concept to deployment, you're in the right place.",
    button: "Let's Talk",
  },
  label: "Check Out More",
  links: [
    { icon: "Image", label: "View Photography Portfolio", to: "/portfolio" },
    { icon: "Sparkles", label: "See What Else I Do", to: "/about" },
    { icon: "Mail", label: "Let's Work Together", to: "/contact" },
  ],
};

// Photography portfolio grid (replace with your real shots)
export const gallery = [
  "https://media.base44.com/images/public/6a8f3818cb359994e15db779/582e36a50_generated_image.png",
  "https://media.base44.com/images/public/6a8f3818cb359994e15db779/e4e25b70f_generated_image.png",
  "https://media.base44.com/images/public/6a8f3818cb359994e15db779/1c3a4851c_generated_image.png",
  "https://media.base44.com/images/public/6a8f3818cb359994e15db779/6131d3535_generated_image.png",
];

export const portfolioCategories = {
  photography: {
    slug: "photography",
    to: "/portfolio",
    eyebrow: "PHOTOGRAPHY PORTFOLIO",
    title: "Photography",
    description:
      "After years of creating everything digitally where I control every pixel, I'm learning to capture reality as it happens. No undo button, no layers panel, just me, a camera, and hoping I got the settings right. It's humbling, frustrating, and honestly pretty exciting.",
    items: projects.items,
    gallery,
  },
  digital: {
    slug: "digital",
    to: "/portfolio/digital",
    eyebrow: "DIGITAL PORTFOLIO",
    title: "Digital Art & Illustration",
    description:
      "This is my foundation. Before I learned code, marketing, or photography, I was drawing anime characters and creating digital art. These skills taught me composition, color theory, and visual storytelling. They're also just fun, which matters more than people admit. When I need to create something that doesn't exist yet, this is where I live.",
    items: [],
    gallery: [],
  },
  graphics: {
    slug: "graphics",
    to: "/portfolio/graphics",
    eyebrow: "GRAPHICS & WEB PORTFOLIO",
    title: "Graphics & Web",
    description:
      "This is where years of design experience and web development knowledge come together. I don't just make things look good, I make them work in the real world where people have different devices, short attention spans, and high expectations. From marketing graphics to full websites, everything here serves a purpose beyond just existing.",
    items: [],
    gallery: [],
  },
  audio: {
    slug: "audio",
    to: "/portfolio/audio",
    eyebrow: "AUDIO & VIDEO POST-PRODUCTION",
    title: "Audio & Video Post-Production",
    description:
      "The newest addition to the toolkit. After years of working in visual media, I started exploring what happens after you hit record — the editing, mixing, and post-production that turns raw footage and audio into something people actually want to experience.",
    items: [],
    gallery: [],
  },
};

export const portfolioOrder = ["photography", "digital", "graphics", "audio"];

export const photographyPortfolio = {
  header: {
    eyebrow: "PHOTOGRAPHY PORTFOLIO",
    body: "After years of creating everything digitally where I control every pixel, I'm learning to capture reality as it happens. No undo button, no layers panel, just me, a camera, and hoping I got the settings right. It's humbling, frustrating, and honestly pretty exciting.",
    image:
      "https://media.base44.com/images/public/6a8f3818cb359994e15db779/eee86090a_generated_image.png",
    overlay: "Capturing Real Moments",
  },
  sections: [
    {
      number: "01",
      category: "Event Coverage",
      title: "Raise the Praise 2025 Live",
      body:
        "Raise the Praise 2025 Live was held on Thursday, November 20 at Sculpture Park from 3:00 pm to 6:00 pm, bringing together students from across faculties for an afternoon of worship, ministry, and reflection. Hosted by Shemar Morgan, the event was centered on the theme \u201CRooted and Centered in Christ,\u201D with scripture drawn from Colossians 1:17 and 1 Corinthians 3:11.",
      images: [
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/327483571_generated_image.png", caption: "Host Shemar Morgan introduces student ministers Rena Watt and Danae Simms to the audience during Raise the Praise at Culture Park." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/327483571_generated_image.png", caption: "Students manage the refreshments booth during Raise the Praise, greeting attendees with smiles." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/327483571_generated_image.png", caption: "Members of the technical team oversee sound operations, ensuring smooth audio delivery throughout the Raise the Praise event." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/23afec952_generated_image.png", bw: true, caption: "Danae Simms and members of the worship team perform All My Life You Have Been Faithful by CeCe Winans during a praise segment of the programme." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/23afec952_generated_image.png", bw: true, caption: "Students gather at Culture Park, lifting their voices in worship as music fills the space during Raise the Praise." },
      ],
    },
    {
      number: "02",
      category: "Sports Photography",
      title: "UTech vs TTPC Football Match 2025",
      body:
        "The University of Technology, Jamaica secured a decisive 4 to 1 victory over Trench Town Polytechnic College in their football match held around December 4, 2025. The match highlighted UTech's dominance on the field, with the team demonstrating strong tactical awareness, disciplined teamwork, and effective attacking play.",
      images: [
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/381cac557_generated_image.png", caption: "UTech's number 11 challenges TTPC's number 21 in an attempt to regain possession during the match." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/381cac557_generated_image.png", caption: "TTPC's number 21 pursues the ball following a wide kick from teammate number 17." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/793ef5e65_generated_image.png", caption: "UTech's number 15 contests possession with TTPC's number 11 as teammates numbers 9 and 20 move in to support the play." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/381cac557_generated_image.png", caption: "Players walk back toward midfield as UTech celebrates a goal during the match." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/793ef5e65_generated_image.png", bw: true, caption: "TTPC's number 12 closes in on UTech's number 20, applying pressure to force a turnover." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/793ef5e65_generated_image.png", bw: true, caption: "UTech's number 20 shields the ball from TTPC's number 12 while maintaining control under pressure." },
      ],
    },
    {
      number: "03",
      category: "Human Interest",
      title: "",
      body:
        "A rehearsal of a gospel piece at the Culture and Arts Centre on UTech's campus on Thursday evening, September 25, 2025.",
      images: [
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/ef75df533_generated_image.png", caption: "The vocal lead adjusts microphone levels on the sound mixer during Thursday evening rehearsal at UTech's Culture and Arts Centre, while the band prepares in the background." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/ef75df533_generated_image.png", caption: "The vocal lead adjusts the microphone during Thursday evening's rehearsal at UTech's Culture and Arts Centre, as fellow students move around with eager energy." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/23afec952_generated_image.png", caption: "Three vocalists rehearse a gospel piece at the Culture and Arts Centre on UTech's campus Thursday evening, as the band provides live accompaniment." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/23afec952_generated_image.png", caption: "The band waits on its cue." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/ef75df533_generated_image.png", bw: true, caption: "Pianist testing the keys" },
      ],
    },
  ],
  otherStuff: {
    title: "Check Out My Other Stuff",
    cards: [
      { image: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/fc2ae89a5_generated_image.png", label: "Head back to the Skills page", to: "/skills" },
      { image: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/c0b8df4fa_generated_image.png", label: "My Digital Art Portfolio", to: "/portfolio/digital" },
      { image: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/6131d3535_generated_image.png", label: "My Graphics and Design Portfolio", to: "/portfolio/graphics" },
    ],
  },
};

export const audioVideoPortfolio = {
  sections: [
    {
      number: "01",
      category: "Videos",
      body:
        "A mix of coursework and creative projects — from language presentations to narrative short films. Each one presented different production challenges, from single-take recording to multi-scene editing with sound design.",
      items: [
        {
          title: "Japanese Language Presentation — トンジェ・エドワーズ | JPN 3001",
          description:
            "A recorded oral presentation for JPN3001 (AY2025/6, Semester 2), delivered in Japanese. This piece showcases spoken fluency, pronunciation, and presentation structure as part of coursework in Japanese language studies.",
          youtubeId: "q2HJKFSEIHo",
        },
        {
          title: "Right on Schedule | Short Film — T. Edwards",
          description:
            "A short narrative film produced, shot, and edited as part of an Audio & Video Post-Production coursework project, with focus on pacing, continuity editing, and sound design.",
          youtubeId: "8aYtXzcm_js",
        },
      ],
    },
    {
      number: "02",
      category: "Audio",
      body:
        "Radio promos, podcast episodes, and public service announcements. These pieces demonstrate scriptwriting, voice delivery, pacing, and audio production — the skills that make spoken-word content actually hold attention.",
      items: [
        {
          title: "Pathways Podcast | Episode Introduction Script",
          description:
            "The opening introduction for Pathways, a podcast series featuring changemakers, educators, and leaders redefining impact. This segment introduces the episode's featured guest, an educator, setting up the tone and focus of the conversation to follow. Written and performed as a podcast intro/host-read script for coursework.",
          youtubeId: "UFwvs1zCnGk",
        },
        {
          title:
            "Pathways Podcast: How Mental Health Shapes Student Learning Outcomes ft. Raeann Simmonds",
          description:
            "A full episode of Pathways, featuring host Tonje in a 5-minute radio-format interview with guest Raeann Simmonds on how mental health shapes student learning outcomes. Scripted, hosted, and produced to demonstrate interview structure, pacing, and on-air delivery.",
          youtubeId: "wCsvXUdZuis",
        },
        {
          title: "UTech Carolling in the Park 2025 | Radio Promo Script",
          description:
            "A radio-style promotional announcement for UTech Jamaica's \"Carolling in the Park 2025,\" presented in partnership with the Centre for the Arts and Student Services Division. Written and voiced to demonstrate radio copywriting, pacing, and on-air delivery for event promotion.",
          youtubeId: "qd9K8XwFfvw",
        },
        {
          title: "Transforming Education for National Development | Public Service Announcement",
          description:
            "A public service announcement produced for Communication Studio Two (Audio-Visual Production 2), highlighting Jamaica's national education initiatives and outcomes. Demonstrates PSA scripting, message clarity, and audio-visual production technique.",
          youtubeId: "aAwvGLHYc1Y",
        },
      ],
    },
  ],
};

export const graphicsWebPortfolio = {
  sections: [
    {
      number: "01",
      category: "Marketing Graphics",
      body: "Graphics that actually get used in real campaigns. These aren't just pretty pictures; they're designed to communicate quickly, grab attention, and drive action. Social media posts, ad creatives, promotional newsletters, all optimized for their specific platforms and purposes. My design background means they look professional. My marketing knowledge means they actually perform.",
      images: [
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/c92876fe6_generated_image.png", caption: "Social media ad creatives designed for quick communication and platform-specific optimization, combining bold typography with clean visual hierarchy." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/dd330664c_generated_image.png", caption: "Promotional newsletter layout built for engagement, with structured content blocks and a visual flow that guides the reader toward action." },
      ],
    },
    {
      number: "02",
      category: "Emails and Websites",
      body: "Email templates and websites that don't make people rage-quit. I build responsive designs that look good on every device, load fast enough that people don't leave, and actually guide users where they need to go. My coding knowledge means I can troubleshoot when things break. My design eye means they look professional while doing it.",
      note: "WordPress is my primary platform, but I understand the code behind it. I can customize themes, troubleshoot issues, optimize performance, and make sure your site looks good on every device.",
      images: [
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/6e41f4890_generated_image.png", caption: "Responsive email template rendered across desktop and mobile, with a layout that adapts cleanly to different screen sizes." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/f3669a1bf_generated_image.png", caption: "Responsive website build displayed on multiple devices, designed to load fast and guide users where they need to go." },
      ],
    },
    {
      number: "03",
      category: "Book Covers",
      body: "Book covers that make people want to pick up the book (or click if we're being honest about digital publishing). These combine my illustration skills with design principles and an understanding of genre expectations. A romance novel shouldn't look like a thriller, and I know how to communicate tone through visual design.",
      images: [
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/f742a623e_generated_image.png", caption: "Romance novel cover — warm tones and elegant typography communicate the genre before the reader even reads the title." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/57454dd3a_generated_image.png", caption: "Thriller novel cover — dark, moody atmosphere and bold typography signal a completely different genre expectation." },
      ],
    },
  ],
};

export const digitalArtPortfolio = {
  sections: [
    {
      number: "01",
      category: "Character Illustrations",
      body: "Original characters brought to life through digital illustration. This is where my anime and manga influence shows up most obviously. Each character has their own personality, story, and visual identity. I use these skills for personal projects, commissions, and whenever a project needs custom illustration work instead of stock images that everyone's already seen.",
      images: [
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/5a9d20911_generated_image.png", caption: "Digital illustration, 2023 — A humanization of the China Aster 'Lady Coral Salmon' flower. The character's flowing green hair mirrors the plant's foliage, while the coral-pink gown with delicate floral texturing reflects the flower's signature salmon-toned petals. The regal presentation and coastal setting evoke the cultivar's elegant, garden-worthy presence." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/ed5095921_generated_image.png", caption: "Digital character illustration, 2023 — A support superhero whose power eases pain, depicted in freefall to embody themes of freedom and lightness. The dynamic upward perspective and flowing hair emphasize weightlessness and release, while the soft color palette reinforces her gentle, healing nature." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/723a2b0c2_generated_image.png", caption: "Digital illustration, 2023 — A villain whose gambling-based powers inspired a 'deal with the devil' design concept. The demonic horns and playing card motifs throughout the costume visualize risk and chance, while the confident pose and urban rubble setting reinforce the character's dangerous allure and chaotic nature." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/caddd6821_generated_image.png", caption: "Digital illustration, 2024 — A 16-year-old warrior navigating a battlefield she was forced into, yet emerging victorious against the odds. The blood-stained armor and gown juxtapose youthful vulnerability with hard-won resilience, while the desolate landscape underscores the brutal reality of conflict and survival." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/e92a22549_generated_image.png", caption: "Digital illustration, 2025 — At 20, Michilline has ascended to the upper echelon following her wartime contributions. Framed as a formal portrait within an ornate gilded mirror, the composition reflects her elevated status, while the refined period dress and poised demeanor contrast sharply with her earlier battlefield image." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/d1f9e84cc_generated_image.png", caption: "Digital illustration, 2025 — A fictional model captured mid-photoshoot, inspired by JVKE's 'Golden Hour.' The warm, luminous palette and dynamic pose evoke the fleeting beauty of sunset light, while the flowing dress and delicate floral details emphasize an ethereal, sun-kissed aesthetic." },
      ],
    },
    {
      number: "02",
      category: "Environments",
      body: "Worlds and spaces created from imagination. Environment design is about setting mood and telling stories through space. A cluttered bedroom says something different than a pristine office. I build these spaces digitally to establish atmosphere and context.",
      images: [
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/c3ff56a03_generated_image.png", caption: "Digital environment illustration, 2025 — A stark, manga-influenced depiction of Tokyo Airport's entrance at night. The high-contrast black-and-white rendering and halftone texturing create a graphic, atmospheric quality that emphasizes the architectural geometry and empty stillness of the transit space." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/89c8618b1_generated_image.png", caption: "Digital environment illustration, 2025 — A nocturnal cityscape featuring Tokyo Tower framed by urban infrastructure. The detailed linework and dramatic tonal range capture the layered depth of the metropolitan landscape, while the full moon adds a contemplative focal point to the architectural scene." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/4e6846d72_generated_image.png", caption: "Digital environment illustration, 2023 — A post-apocalyptic street scene populated by silhouetted creatures and survivors amid destroyed buildings. The manga-style composition uses stark contrast and scattered debris to convey collapse and danger, creating an unsettling narrative environment that balances architectural detail with atmospheric dread." },
      ],
    },
    {
      number: "03",
      category: "3D Models",
      body: "Taking design into the third dimension because sometimes flat isn't enough. I create 3D models for various applications, from concept visualization to game assets to just experimenting with form and space.",
      images: [
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/8733395ee_generated_image.png", caption: "3D model, 2025 — Concept visualization exploring form and material, rendered with soft studio lighting to study surface and silhouette." },
        { src: "https://media.base44.com/images/public/6a8f3818cb359994e15db779/09b292564_generated_image.png", caption: "3D model, 2025 — Game-ready character asset with clean topology and hand-painted textures, built for real-time rendering." },
      ],
    },
  ],
};

export const aboutPage = {
  hero: {
    title: "About Me",
    sub: "Jack of all trades, master of... quite a few things.",
    body: "Hi, I'm Tonje Edwards. My creative journey didn't follow any logical path, but somehow it all connects.",
  },
  cards: [
    {
      title: "Who Am I",
      body: "I'm a digital creative who started drawing anime characters in primary school and somehow turned that into a full career path. Need a logo? I can design it. Need a website? I can build it. Need people to actually find that website? I can optimize it and run your ads. Need content that looks professional? I'm learning photography for exactly that reason.",
    },
    {
      title: "My Approach",
      body: "I'm task-oriented and detail-focused, which is code for \u201Cslightly obsessive about getting things right.\u201D I notice the small things. Misaligned elements, broken links, copy that doesn't quite work, color schemes that clash. If something's not right, it bugs me until I fix it.",
    },
    {
      title: "What I Do",
      list: [
        "Digital Art & Design",
        "Web Development",
        "Digital Marketing & SEO",
        "Social Media",
        "Creative Writing",
        "Photography",
      ],
    },
  ],
  investment: {
    title: "Why I'm a Good Investment...",
    body: "I'm task-oriented and detail-focused, which is a nice way of saying I'm slightly obsessive about getting things right. Every project gets the same treatment, whether it's capturing the perfect moment at a sports event or making sure your website loads fast enough that people don't rage-quit before seeing your content. I believe good work speaks for itself, but proper SEO helps it speak a little louder.",
  },
  workTogether: {
    title: "Let's Work Together!",
    body: "I understand the full pipeline. I'm not just a designer who hands off files, or a developer who doesn't care about aesthetics, or a marketer who doesn't understand the technical limitations. I've been on every side of the process, so I know how they all fit together. That means I can solve problems other people don't even see coming.",
    cta: "Get in Touch",
  },
};

export const resume = {
  header: {
    eyebrow: "RESUME",
    name: "Tonje Edwards",
    role: "Photographer · Designer · Developer · Kingston, Jamaica",
    summary:
      "Multidisciplinary creative professional blending photography, web development, and digital marketing into work that looks great and performs even better.",
  },
  experience: {
    badge: "EXPERIENCE",
    title: "My Work Experience",
    groups: [
      {
        org: "Wanderlust Adventures Group",
        roles: [
          { title: "Program Advisor", period: "September 2025 - Present (4 months)" },
          { title: "Marketing Intern", period: "May 2025 - September 2025 (5 months)" },
        ],
      },
      {
        org: "STARY PTE LTD",
        roles: [
          { title: "Freelance Writer", period: "October 2021 - December 2024 (3 years 3 months)" },
        ],
      },
      {
        org: "InterGlobal Technology Solution Limited",
        roles: [
          { title: "Marketing Officer", period: "January 2023 - August 2024 (1 year 8 months)" },
          { title: "Social Media Officer", period: "September 2022 - December 2022 (4 months)" },
        ],
      },
      {
        org: "National Water Commission",
        roles: [
          { title: "Administrative Assistant", period: "July 2022 - July 2022 (1 month)" },
        ],
      },
      {
        org: "Scholastic",
        roles: [
          { title: "Front Desk Receptionist", period: "December 2017 - January 2018 (2 months)" },
        ],
      },
    ],
  },
  education: {
    badge: "EDUCATION",
    title: "Certifications",
    groups: [
      {
        org: "University of Technology, Jamaica",
        credentials: [
          { degree: "BA in Communication Arts and Technology", detail: "Advertising, Marketing Management, Journalism", period: "September 2023 - Present" },
        ],
      },
      {
        org: "iCreate Institute",
        credentials: [
          { degree: "Certification", detail: "Customer Service Support/Call Center/Teleservice Operation", period: "August 2021 - September 2021" },
        ],
      },
      {
        org: "Digital Marketing Institute",
        credentials: [
          { degree: "Diploma of Education", detail: "Digital Marketing and Marketing Management, General", period: "2020 - 2021" },
        ],
      },
      {
        org: "St. Hughs High School",
        credentials: [
          { degree: "Higher National Diploma", detail: "CAPE - Caribbean Advanced Proficiency Exam", period: "2018 - 2020" },
          { degree: "High School Diploma", detail: "CSEC - Caribbean Secondary Education Certificate", period: "2013 - 2018" },
        ],
      },
    ],
  },
  contact: {
    badge: "HAVE PROJECT IN MIND?",
    title: "Let's Turn your Ideas into Reality",
    email: "tonje.edwards@gmail.com",
  },
};

export const skillsOverview = {
  title: "Everything Else I Can Do",
  intro:
    "My skill set is a collection of everything I've picked up since primary school. It started with art, expanded into design, jumped to code, evolved into marketing, and most recently added photography and audio/video. I'm not a specialist in one thing — I'm the person who can handle the whole pipeline, which turns out to be more useful than it sounds.",
  bars: [
    { name: "Digital Art", level: 85 },
    { name: "Graphic Design", level: 75 },
    { name: "Web Design & Development", level: 80 },
    { name: "Digital Marketing & SEO", level: 75 },
    { name: "Photography", level: 65 },
    { name: "Audio & Video Post-Production", level: 55 },
  ],
  cards: [
    {
      title: "Digital Art",
      to: "/portfolio/digital",
      body: "This is where everything started. Anime and manga got me drawing, and digital tools opened up infinite possibilities. I create illustrations, character designs, and digital paintings. The skills I learned here (composition, color theory, visual storytelling) became the foundation for everything else.",
    },
    {
      title: "Graphics & Web",
      to: "/portfolio/graphics",
      body: "Where design and development meet. I build responsive websites, marketing graphics, and email templates that look professional and actually work on every device. My coding knowledge means I can troubleshoot when things break. My design eye means they look good while doing it.",
    },
    {
      title: "Photography",
      to: "/portfolio",
      body: "I'm developing my photography skills, focusing on photojournalism. Coming from a digital art background, I understand composition and visual storytelling. Now I'm learning the technical camera skills and the art of capturing moments instead of creating them digitally.",
    },
    {
      title: "Audio & Video",
      to: "/portfolio/audio",
      body: "The newest addition to the toolkit. Editing, mixing, and post-production for audio and video — the work that turns raw recordings into something people actually want to watch and hear.",
    },
  ],
};

export const aboutNerdingOut = {
  badge: "MY WORLD",
  title: "When I am not Working",
  subtitle: "I am Nerding Out",
  body:
    "I'm probably drawing, coding something for fun, playing video games and analyzing their UI design, or out with my camera trying to figure out why everything looks better in my head than in the actual photo. The learning never really stops, I just call it different things depending on the day.",
  images: [
    "https://media.base44.com/images/public/6a8f3818cb359994e15db779/e626e1471_generated_image.png",
    "https://media.base44.com/images/public/6a8f3818cb359994e15db779/c0b8df4fa_generated_image.png",
    "https://media.base44.com/images/public/6a8f3818cb359994e15db779/e524af22c_generated_image.png",
    "https://media.base44.com/images/public/6a8f3818cb359994e15db779/cae09f3ea_generated_image.png",
  ],
};

export const skillsPage = {
  eyebrow: "SKILLS",
  title: "What I Bring to the Table",
  tagline: "Jack of All Trades, Master of Quite a Few",
  intro:
    "My skill set didn't come from a single course or a bootcamp. It started with drawing anime characters in primary school, expanded into graphic design, jumped to code when I realized websites don't build themselves, evolved into marketing because what's the point of making something if nobody sees it, and most recently added photography because sometimes you need to capture reality instead of creating it from scratch. Each skill feeds into the next, which is either a coherent creative philosophy or just me being unable to stick to one thing. Probably both.",
  groups: [
    {
      name: "Design",
      blurb: "Where it all started. If it can be designed, I've probably designed it.",
      items: ["Brand Identity", "Illustration", "Layout & Typography", "Art Direction"],
    },
    {
      name: "Development",
      blurb: "Making things look good is one thing. Making them actually work is another.",
      items: ["WordPress", "HTML / CSS", "Responsive Builds", "Site Management"],
    },
    {
      name: "Marketing",
      blurb: "Because what's the point of making something if nobody sees it?",
      items: ["SEO", "Social Media Strategy", "Content Strategy", "Analytics"],
    },
    {
      name: "Photography",
      blurb: "Learning to capture reality instead of creating it from scratch.",
      items: ["Events", "Portraits", "Sports", "Editing & Retouching"],
    },
    {
      name: "Audio & Video",
      blurb: "The newest addition. What happens after you hit record.",
      items: ["Video Editing", "Audio Mixing", "Color Grading", "Motion Graphics"],
    },
  ],
};
