// T.E Studio — site content. Edit freely.

export const site = {
  brand: "T.E Studio",
  tagline: "Where Design Meets Development",
  name: "Tonje Edwards",
  role: "Photographer · Designer · Developer",
  email: "tonje.edwards@gmail.com",
  phone: "+1 (876) 790-6364",
  location: "Kingston, Jamaica",
  footerCredit: "Tonje Edwards",
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
    to: "/portfolio/digital",
    children: [
      { label: "Digital Portfolio", to: "/portfolio/digital" },
      { label: "Graphics & Web Portfolio", to: "/portfolio/graphics" },
      { label: "Audio & Video Post-Production Portfolio", to: "/portfolio/audio" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export const socials = [
  { name: "Facebook", url: "https://www.facebook.com/tonje.edwards/" },
  { name: "Instagram", url: "https://www.instagram.com/t.edwards_cat2012/" },
  { name: "YouTube", url: "https://www.youtube.com/@TonjeEdwards" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tonje-edwards-055a76212" },
  { name: "X", url: "https://x.com/Edwards_CAT2012" },
];

export const hero = {
  signature: "Tonje Edwards",
  heading: "I Make Things Look GREAT",
  sub: "(On Camera and Online)",
  suffix: "MEDIA & MORE",
};

export const about = {
  image: "/IMAGES/Graphic%20Design/Hire-Campaign-2025-6.png",
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
      icon: "Palette",
      title: "Brand Identity & Visual Design",
      body: "I create complete visual identities from logos to marketing materials that actually represent who you are and what you do.",
      image: "/IMAGES/Graphic%20Design/558066823_18061011179382181_2818240189963523505_n.jpg",
      to: "/portfolio/graphics",
    },
    {
      icon: "Globe",
      title: "Website Development & Management",
      body: "I build WordPress sites that look professional, load fast, and don't require a computer science degree to understand.",
      image: "/IMAGES/Graphic%20Design/gsa%20website.png",
      to: "/portfolio/graphics",
    },
    {
      icon: "Camera",
      title: "Digital Marketing & SEO",
      body: "I get your content in front of the right people through strategic SEO, targeted ads, and social media that actually engages instead of just existing.",
      image: "/IMAGES/Website%20Assests/Screenshot-2025-12-17-000258.png",
      to: "/portfolio/graphics",
    },
    {
      icon: "Clapperboard",
      title: "Custom Digital Content Creation",
      body: "I produce original visual content from digital illustrations to photography so you're not using the same stock images as everyone else.",
      image: "/IMAGES/Graphic%20Design/Standard-Ads-Size-10.png",
      to: "/portfolio/digital",
    },
  ],
};

export const whyMe = {
  eyebrow: "WHY ME",
  title: "Committed to Excellence",
  image:
    "/IMAGES/Website%20Assests/portrait.png",
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
        "/IMAGES/Digital%20Art/export202511112123402960.png",
      shape: "circle",
    },
    {
      title: "Sports Photography",
      image:
        "/IMAGES/Sports%20Photography/IMG_0159-scaled.jpg",
      shape: "square",
    },
    {
      title: "Editorial Design",
      image:
        "/IMAGES/Graphic%20Design/Ebook-Standard-2025-1.png",
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
    { icon: "Image", label: "View Graphic Design Portfolio", to: "/portfolio/graphics" },
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

export const portfolioOrder = ["digital", "graphics", "audio"];

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
      { image: "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/CREATE_BuildAlmostAnything.png", label: "My Digital Art Portfolio", to: "/portfolio/digital" },
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
      layout: "marketing",
      body: "Campaign-ready visuals designed to make brands and promotions stand out across social media, professional platforms, and digital advertising.",
      projects: [
        {
          title: "Mini Monday Instagram Graphic",
          body: "An Instagram graphic for Mini Monday, designed to give the recurring feature a clear, eye-catching social presence.",
          images: [
            { src: "/IMAGES/Graphic%20Design/Oct-24-28-1.png", caption: "October campaign graphic." },
          ],
        },
        {
          title: "Interglobal Black Friday Campaign",
          body: "A Black Friday promotional creative for Interglobal Technology Solution, designed to make a time-sensitive campaign stand out.",
          images: [
            { src: "/IMAGES/Graphic%20Design/Interglobal-BlackFriday-10.png", caption: "Interglobal Black Friday campaign graphic." },
          ],
        },
        {
          title: "LinkedIn Website Banner",
          body: "A professional banner design that strengthens brand presence and directs attention toward the company's online services.",
          images: [
            { src: "/IMAGES/Graphic%20Design/LinkedIn-Website-Banner-6.png", caption: "LinkedIn website banner." },
          ],
        },
      ],
    },
    {
      number: "02",
      category: "Emails and Websites",
      layout: "email-websites",
      body: "Branded email creatives and business websites that bring clear communication, consistent visuals, and practical user experience together.",
      note: "Explore the live websites for Global Service Adventures and Interglobal Technology Solution.",
      projects: [
        {
          title: "Global Service Adventures Thanksgiving Email",
          body: "A seasonal email design for a student travel company, using branded visuals to connect with its audience.",
          link: "https://www.globalserviceadventures.org/",
          linkLabel: "Visit Global Service Adventures",
          images: [
            { src: "/IMAGES/Graphic%20Design/GSA-ThanksGiving.png", caption: "Global Service Adventures Thanksgiving email." },
          ],
        },
        {
          title: "Global Service Adventures Website",
          body: "A website for a student travel company, presenting its travel experiences and services in an accessible, branded format.",
          link: "https://www.globalserviceadventures.org/",
          linkLabel: "Visit Global Service Adventures",
          images: [
            { src: "/IMAGES/Graphic%20Design/gsa%20website.png", caption: "Global Service Adventures website." },
          ],
        },
        {
          title: "Interglobal Technology Solution Website",
          body: "A business website for a security technology company, designed to introduce its services and establish a professional online presence.",
          link: "https://interglobaltechnologysolution.com/",
          linkLabel: "Visit Interglobal Technology Solution",
          images: [
            { src: "/IMAGES/Graphic%20Design/Interglobal%20website.png", caption: "Interglobal Technology Solution website." },
          ],
        },
      ],
    },
    {
      number: "03",
      category: "Book Covers",
      body: "Cover designs that use genre-aware imagery, atmosphere, and typography to set expectations before a reader opens the book.",
      projects: [
        {
          title: "Fantasy Romance",
          body: "A fantasy romance cover that brings a sense of wonder and romantic possibility to the story's visual identity.",
          images: [
            { src: "/IMAGES/Graphic%20Design/2024-Starry-Writing-Stand-Alone-600-x-800.png", caption: "Fantasy romance book cover." },
          ],
        },
        {
          title: "Thriller Novel",
          body: "A dark, moody atmosphere and bold typography signal a tense, suspense-driven reading experience.",
          images: [
            { src: "/IMAGES/Graphic%20Design/Ebook-Standard-2025-1.png", caption: "Thriller novel cover." },
          ],
        },
        {
          title: "Romantic Thriller",
          body: "A romantic thriller cover balancing romantic appeal with the tension and intrigue expected from the genre.",
          images: [
            { src: "/IMAGES/Graphic%20Design/Ebook-Standard-2025.png", caption: "Romantic thriller cover." },
          ],
        },
      ],
    },
  ],
};
export const digitalArtPortfolio = {
  sections: [
    {
      number: "01",
      category: "Environments",
      layout: "environments",
      body: "Worlds and spaces created from imagination. Environment design is about setting mood and telling stories through space. A cluttered bedroom says something different than a pristine office. I build these spaces digitally to establish atmosphere and context.",
      projects: [
        {
          title: "Digital environment illustration, 2025",
          body: "A stark, manga-influenced depiction of Tokyo Airport's entrance at night.",
          images: [
            { src: "/IMAGES/Digital%20Art/20250812_2116_Manga-Airport-Entrance_remix_01k2gka1d0edpbb9ev58nwm7mb.png", caption: "Tokyo Airport entrance at night." },
          ],
        },
        {
          title: "Digital environment illustration, 2025",
          body: "A nocturnal cityscape featuring Tokyo Tower.",
          images: [
            { src: "/IMAGES/Digital%20Art/20250812_2130_Tokyo-Airport-Parking-Nightscape_remix_01k2gm32g3fkkbbjajjxk5dzry.png", caption: "Nocturnal cityscape featuring Tokyo Tower." },
          ],
        },
        {
          title: "Digital environment illustration, 2023",
          body: "A post-apocalyptic street scene populated by silhouetted creatures amid destroyed buildings.",
          images: [
            { src: "/IMAGES/Digital%20Art/export1676764339640-scaled.png", caption: "Post-apocalyptic street scene." },
          ],
        },
      ],
    },
    {
      number: "02",
      category: "3D Models",
      layout: "models",
      body: "Taking design into the third dimension because sometimes flat isn't enough. I create 3D models for various applications, from concept visualization to game assets to just experimenting with form and space.",
      projects: [
        {
          title: '3D model "Jay", 2025',
          body: "An exploration of clothing as a form of self-expression, built around athleisure silhouettes that balance comfort, movement, and a sporty everyday style.",
          images: [
            { src: "/IMAGES/Digital%20Art/Jay-Default.png", caption: 'Jay, default view.' },
            { src: "/IMAGES/Digital%20Art/Jay-Preview1.png", caption: 'Jay, alternate preview.' },
          ],
        },
        {
          title: '3D model "Kailee", 2025',
          body: "A mix of modern urban streetwear and casual chic, exploring how relaxed street-inspired pieces can feel polished, confident, and personal.",
          images: [
            { src: "/IMAGES/Digital%20Art/Kai-lee-Default.png", caption: 'Kailee, default view.' },
            { src: "/IMAGES/Digital%20Art/Kai-lee-Preview-1.png", caption: 'Kailee, alternate preview.' },
          ],
        },
        {
          title: '3D model "Millie", 2025',
          body: "A pink goth look that pairs dark alternative styling with playful pink details, using fashion to express a softer, more whimsical side of goth aesthetics.",
          images: [
            { src: "/IMAGES/Digital%20Art/Milly-Default.png", caption: 'Millie, default view.' },
            { src: "/IMAGES/Digital%20Art/Milly-Preview1.png", caption: 'Millie, alternate preview.' },
          ],
        },
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
      to: "/skills",
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
    "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/CREATE_BuildAlmostAnything.png",
    "/IMAGES/Graphic%20Design/Screenshot-2025-12-15-162326.png",
    "/IMAGES/Digital%20Art/IMG_20250309_015639.jpg",
    "/IMAGES/Digital%20Art/export1737927125462.png",
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
