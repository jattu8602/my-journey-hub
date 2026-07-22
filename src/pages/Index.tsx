import React, { useState, useEffect } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { 
  Sun, 
  Moon, 
  Maximize2, 
  TrendingUp, 
  Coffee, 
  Github, 
  Linkedin, 
  BookOpen, 
  X, 
  Trophy,
  Award,
  Medal,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ArrowUp
} from 'lucide-react';
import ChessBoard from '@/components/ChessBoard';
import { Badge } from '@/components/ui/badge';

// Certificate Imports
import kriyetaParticipate from '@/assets/certificates/kriyeta-4-0-participation.jpeg';
import virtualVistaParticipate from '@/assets/certificates/virtual-vista-2-0-participation.jpeg';
import hackwaveParticipate from '@/assets/certificates/hackwave-2-0-participation.jpeg';
import pravahIdeathon from '@/assets/certificates/pravah-2025-ideathon.jpeg';
import websiteDevPrize from '@/assets/certificates/website-development-competition-2nd-prize.jpeg';
import googleSolution from '@/assets/certificates/google-solution-challenge-achievement.jpeg';
import bestAiSolution from '@/assets/certificates/best-ai-ml-solution-testverse.jpg';
import introCybersecurity from '@/assets/certificates/introduction-to-cybersecurity.jpeg';
import learningDocker from '@/assets/certificates/learning-docker.jpeg';
import githubActions from '@/assets/certificates/practical-github-actions.jpeg';
import awsCourse from '@/assets/certificates/aws-free-course-completion.png';
import introIot from '@/assets/certificates/intro-to-iot-and-digital-transformation.jpg';
import sweAgile from '@/assets/certificates/software-engineering-and-agile.jpg';
import applyAi from '@/assets/certificates/apply-ai-analyze-customer-reviews.jpg';
import introModernAi from '@/assets/certificates/introduction-to-modern-ai.jpg';

interface Article {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  subtitles?: string[];
  author?: string;
  location?: string;
  content: string[];
  image?: string;
  imageCaption?: string;
}

interface Cert {
  id: string;
  title: string;
  issuer: string;
  category: 'cloud' | 'agile' | 'ai' | 'hackathon';
  image: string;
  tags: string[];
}

export default function Index() {
  useLenis();
  const [isMidnightMode, setIsMidnightMode] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);
  const [certFilter, setCertFilter] = useState<'all' | 'cloud' | 'agile' | 'ai' | 'hackathon'>('all');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).toUpperCase();

  const handleToggleTheme = () => {
    setIsMidnightMode(!isMidnightMode);
  };

  const skillsData = [
    { name: 'REACT', change: '+8.5%', positive: true },
    { name: 'TYPESCRIPT', change: '+9.2%', positive: true },
    { name: 'NEXTJS', change: '+11.4%', positive: true },
    { name: 'TAILWIND', change: '+5.7%', positive: true },
    { name: 'GSAP', change: '+12.1%', positive: true },
    { name: 'AWS', change: '+4.8%', positive: true },
    { name: 'NODE', change: '+6.3%', positive: true },
    { name: 'PYTHON', change: '+7.1%', positive: true },
    { name: 'ESP32 IoT', change: '+14.2%', positive: true },
    { name: 'DOCKER', change: '+3.9%', positive: true },
    { name: 'GIT', change: '+2.8%', positive: true },
    { name: 'SHADCN', change: '+9.9%', positive: true },
  ];

  const mainStory: Article = {
    id: 'lead-story',
    category: 'SPECIAL REPORT',
    categoryColor: 'text-[#8b1e3f] dark:text-[#f2647e]',
    title: 'DEVELOPER NITESH CHOURASIYA UNVEILS MULTI-DISCIPLINARY SOFTWARE PORTFOLIO',
    subtitles: [
      'B.Tech CSE student (Artificial Intelligence & Data Science) at LNCT Bhopal engineers scalable web & hardware solutions',
      'Over 100,000+ platform views across live startup ventures including NotesMates.in & PresentSir.in',
      'Secures 2nd prize in LNCT Website Development competition and Top 5 rank among 2,000+ teams at Kriyeta Hackathon'
    ],
    author: 'Peerzada Ashiq',
    location: 'BHOPAL',
    content: [
      'In a sweeping demonstration of technical versatility, software engineer Nitesh Chourasiya (known online as Jattu) has published a master broadsheet portfolio consolidating over 19 months of continuous software engineering, hardware innovation, and competition victories.',
      'Currently pursuing his Bachelor of Technology in Computer Science Engineering with specialization in AI & Data Science at LNCT Bhopal, Nitesh has successfully launched high-impact products reaching thousands of daily active users across India.',
      'Highlights of his engineering tenure include co-founding NotesMates.in—RGPV university\'s go-to study notes platform accumulating 100,000+ page views and over 2,000 registered users—and engineering PresentSir.in, an ESP32 microcontroller Wi-Fi attendance hardware system developed at Idea Lab.',
      'Beyond full-stack web platforms, Nitesh has established a strong competitive track record: winning 2nd prize and a ₹7,500 cash award in the LNCT Website Development Competition, earning Best AI/ML Solution at the Testverse Ideathon, and placing in the Top 5 out of 2,000+ national teams at the Kriyeta Hackathon.',
      'This single-page broadsheet edition aggregates Nitesh\'s entire body of work—including real-world startups, competitive honors, verified AWS credentials, academic milestones, and interactive web experiments—into one unified, accessible reader experience.'
    ],
    image: '/developer_sketch.png',
    imageCaption: 'TRACES OF CODE: Developer Nitesh Chourasiya refactoring database schemas and ESP32 IoT firmware at his desk in high-contrast ink etching style. PHOTO: AP/REUTERS'
  };

  const topTeaserCards = [
    {
      tag: 'STUDENT REACH',
      tagColor: 'text-[#e55812] dark:text-[#ff7f41]',
      headline: 'NotesMates.in passes 100K+ page views',
      snippet: 'STARTUPS » PAGE 2'
    },
    {
      tag: 'COMPETITION WINNER',
      tagColor: 'text-emerald-700 dark:text-emerald-400',
      headline: 'Nitesh wins 2nd Prize in LNCT Web Competition',
      snippet: 'HONORS » PAGE 3',
      image: websiteDevPrize
    },
    {
      tag: 'IOT INNOVATION',
      tagColor: 'text-[#8b1e3f] dark:text-[#f2647e]',
      headline: 'ESP32 Smart Attendance automated at Idea Lab',
      snippet: 'HARDWARE » PAGE 2',
      image: awsCourse
    },
    {
      tag: 'SAFETY NET',
      tagColor: 'text-blue-700 dark:text-blue-400',
      headline: 'AWS Certified Cloud Practitioner achieved',
      snippet: 'CREDENTIALS » PAGE 4'
    },
    {
      tag: 'TOP 5 FINALIST',
      tagColor: 'text-purple-700 dark:text-purple-400',
      headline: 'GoGreen App ranks Top 5 out of 2,000+ teams',
      snippet: 'HACKATHONS » PAGE 3'
    }
  ];

  const startupArticles: Article[] = [
    {
      id: 'notesmates',
      category: 'STARTUP & MONETIZATION',
      categoryColor: 'text-[#8b1e3f] dark:text-[#f2647e]',
      title: 'NotesMates.in Reaches 100K+ Views for RGPV Students',
      author: 'Financial Times',
      location: 'BHOPAL',
      content: [
        'Academic portal NotesMates.in has officially surpassed 100,000 page views and 2,000 registered active student users across RGPV university colleges.',
        'Co-built by Nitesh Chourasiya, the platform integrates seamless Razorpay subscription payments, Google AdSense monetization, and high-speed PDF note delivery using Next.js, Prisma, and Shadcn UI.',
        '"Monetizing academic notes while maintaining zero input latency was our primary goal," Nitesh noted during a recent technical retrospective.'
      ]
    },
    {
      id: 'presentsir',
      category: 'HARDWARE & IOT INNOVATION',
      categoryColor: 'text-[#e55812] dark:text-[#ff7f41]',
      title: 'ESP32 Attendance System Revolutionizes Idea Lab',
      author: 'Technology Desk',
      location: 'IDEA LAB',
      content: [
        'PresentSir.in, a smart hardware-software biometric attendance system built on ESP32 microcontrollers, has automated student roster management at the Idea Lab innovation facility.',
        'The custom firmware connects directly to a cloud API dashboard built with Next.js and Firebase, processing scan responses under 250 milliseconds with high reliability.'
      ]
    },
    {
      id: 'outlawed',
      category: 'FULL-STACK PLATFORM',
      categoryColor: 'text-[#1b4332] dark:text-[#52b788]',
      title: 'Outlawed.in Test Prep Platform Serves 1,000+ CLAT Aspirants',
      author: 'Legal Tech Reporter',
      location: 'DELHI',
      content: [
        'CLAT examination prep portal Outlawed.in has scaled to over 1,000 active law aspirants using its timed mock test engine and real-time score analytics.',
        'Built with robust subscription tier access and dynamic performance charts, the platform boasts 99.9% uptime during high-volume mock exam windows.'
      ]
    },
    {
      id: 'farmcs',
      category: 'AGRI-TECH & DRONES',
      categoryColor: 'text-[#5e2b97] dark:text-[#a370e7]',
      title: 'Farmcs.in Unites AI, Drones & Sensor Networks',
      author: 'Staff Writer',
      location: 'INDORE',
      content: [
        'Agricultural technology startup Farmcs.in has deployed IoT sensor pipelines and drone data feeds for crop monitoring.',
        'Nitesh conducted hands-on technical workshops on IoT, AI, and 3D modeling for over 500+ aspiring student engineers as part of the venture\'s outreach.'
      ]
    }
  ];

  const honors = [
    {
      id: 'lnct-winner',
      title: '2nd Prize — Website Development Competition',
      rank: '2nd Place Winner (₹7,500 Cash Prize)',
      event: 'LNCT Group Website Competition',
      organizer: 'LNCT Bhopal',
      description: 'Secured 2nd position among 100+ competing teams by engineering a ultra-fast web application integrated with Gemini AI API, custom prompt handlers, and optimized media delivery.',
      tags: ['Next.js', 'Gemini AI', 'Cash Prize', 'Web Dev']
    },
    {
      id: 'testverse-aiml',
      title: 'Best AI/ML Solution Award — Testverse',
      rank: 'Award Winner',
      event: 'Testverse Hack-to-Hire Ideathon',
      organizer: 'Testverse Ideathon',
      description: 'Awarded the Best AI/ML Solution title for building an automated intelligent assessment model that evaluates candidate technical solutions in real-time.',
      tags: ['Winner', 'AI/ML', 'Ideathon', 'Automation']
    },
    {
      id: 'kriyeta-top5',
      title: 'Top 5 Finalist (Out of 2,000+ Teams)',
      rank: 'Top 5 Finalist',
      event: 'Kriyeta 4.0 National Hackathon',
      organizer: 'Acropolis Institute',
      description: 'Selected in the Top 5 among 2,000+ participating teams nationwide for building GoGreen—an AI travel & urban city management mobile app using React Native & TomTom APIs.',
      tags: ['Top 5', '2000+ Teams', 'React Native', 'Hackathon']
    },
    {
      id: 'prayatna-top8',
      title: 'Top 8 Finalist (Out of 3,000+ Teams)',
      rank: 'Top 8 Finalist',
      event: 'Prayatna 2.0 Hackathon',
      organizer: 'Acropolis Institute',
      description: 'Competed solo against 3,000+ teams to build a Flutter mobile app integrated with Firebase for PresentSir.in smart attendance system.',
      tags: ['Top 8', '3000+ Teams', 'Solo Build', 'Flutter']
    }
  ];

  const certs: Cert[] = [
    {
      id: 'aws-cloud',
      title: 'AWS Certified Cloud Practitioner & Course',
      issuer: 'Amazon Web Services',
      category: 'cloud',
      image: awsCourse,
      tags: ['AWS', 'Cloud', 'Architecture']
    },
    {
      id: 'testverse-ai',
      title: 'Best AI/ML Solution Winner',
      issuer: 'Testverse Ideathon',
      category: 'hackathon',
      image: bestAiSolution,
      tags: ['Winner', 'AI/ML']
    },
    {
      id: 'website-prize',
      title: '2nd Prize Website Development',
      issuer: 'LNCT Group',
      category: 'hackathon',
      image: websiteDevPrize,
      tags: ['Winner', 'Web Dev', 'Gemini AI']
    },
    {
      id: 'docker',
      title: 'Learning Docker & Containers',
      issuer: 'LinkedIn Learning',
      category: 'cloud',
      image: learningDocker,
      tags: ['Docker', 'DevOps', 'Containers']
    },
    {
      id: 'github-actions',
      title: 'Practical GitHub Actions CI/CD',
      issuer: 'GitHub / LinkedIn',
      category: 'cloud',
      image: githubActions,
      tags: ['CI/CD', 'GitHub Actions', 'Automation']
    },
    {
      id: 'cybersecurity',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      category: 'cloud',
      image: introCybersecurity,
      tags: ['Security', 'Cisco', 'Networks']
    },
    {
      id: 'swe-agile-1',
      title: 'Software Engineering & Agile Methodologies I',
      issuer: 'Professional Course',
      category: 'agile',
      image: sweAgile,
      tags: ['Agile', 'Scrum', 'Software Eng']
    },
    {
      id: 'intro-modern-ai',
      title: 'Introduction to Modern AI',
      issuer: 'AI Institute',
      category: 'ai',
      image: introModernAi,
      tags: ['Artificial Intelligence', 'LLMs']
    }
  ];

  const filteredCerts = certFilter === 'all' ? certs : certs.filter(c => c.category === certFilter);

  const insideStories = [
    { title: 'NotesMates.in passes 100K+ page views in student study surge', section: 'STARTUPS', page: 'PAGE 2' },
    { title: 'ESP32 Wi-Fi smart attendance system automated at Idea Lab', section: 'HARDWARE', page: 'PAGE 2' },
    { title: 'LNCT Website Competition awards 2nd prize & ₹7.5K cash award', section: 'HONORS', page: 'PAGE 3' },
    { title: 'GoGreen app places Top 5 among 2,000+ teams at Kriyeta', section: 'HACKATHONS', page: 'PAGE 3' },
    { title: 'AWS Cloud Practitioner certification attained by developer', section: 'CREDENTIALS', page: 'PAGE 4' },
    { title: 'Interactive React Chess Engine deployed live in Gazette', section: 'PUZZLE LAB', page: 'PAGE 5' },
  ];

  const cityList = [
    'Bhopal', 'LNCT', 'Full-Stack', 'AI & Data Science', 'React Native', 
    'Next.js', 'Cloud AWS', 'ESP32 IoT', 'Open Source', 'Competition Winner',
    'Python', 'GSAP', 'Tailwind', 'Monetization', 'Prisma', 'Docker'
  ];

  return (
    <div className={`min-h-screen w-full transition-colors duration-500 font-body p-2 sm:p-4 md:p-6 flex flex-col items-center selection:bg-accent selection:text-white ${
      isMidnightMode 
        ? 'paper-texture-dark text-[#e0dbd3] dark' 
        : 'paper-texture text-[#1a1a1a]'
    }`}>
      
      {/* Outer Broadsheet Frame Container */}
      <div className={`w-full max-w-[1440px] border-2 flex flex-col p-2.5 sm:p-4 md:p-5 transition-colors duration-500 ${
        isMidnightMode ? 'border-[#383633] bg-[#161616]' : 'border-[#1a1a1a] bg-[#fcfbf7]'
      }`}>
        
        {/* TOP META-INFO ROW */}
        <div className={`flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono pb-1.5 border-b transition-colors duration-500 uppercase ${
          isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
        }`}>
          <div className="flex gap-2 sm:gap-3">
            <span>{formattedDate}</span>
            <span className="hidden sm:inline">|</span>
            <span>PORTFOLIO EDITION</span>
            <span className="hidden sm:inline">|</span>
            <span>20 PAGES</span>
          </div>
          
          <a 
            href="https://niteshjatin.me" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline my-1 sm:my-0 font-bold tracking-wider"
          >
            niteshjatin.me
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <span>VOL. IV • NO. 171</span>
            <span className="hidden sm:inline">|</span>
            <span>SCAN FOR CONTACT</span>
          </div>
        </div>

        {/* MASTHEAD: REALISTIC SINGLE-LINE "THE HINDU" STYLE TITLE WITH EMBLEM */}
        <div className={`relative flex flex-col items-center py-4 sm:py-6 border-b-2 transition-colors duration-500 ${
          isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
        }`}>
          
          {/* Vintage Circular Press Run Stamp */}
          <button
            onClick={handleToggleTheme}
            className={`absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-14 h-14 sm:w-18 sm:h-18 rounded-full border-2 border-dashed transition-all duration-300 hover:scale-105 ${
              isMidnightMode 
                ? 'border-[#ff7f41] text-[#ff7f41] hover:bg-[#ff7f41]/10' 
                : 'border-[#8b1e3f] text-[#8b1e3f] hover:bg-[#8b1e3f]/5'
            }`}
            title="Click to toggle press run theme edition"
          >
            <span className="text-[7px] font-mono leading-none tracking-widest">PRESS RUN</span>
            {isMidnightMode ? (
              <Sun className="w-4 h-4 my-0.5 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 my-0.5" />
            )}
            <span className="text-[6px] font-mono leading-none font-bold uppercase">
              {isMidnightMode ? 'DAY EDIT.' : 'NIGHT EDIT.'}
            </span>
          </button>

          {/* Single Line Title with Emblem */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 w-full py-1">
            <span className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-none">
              THE
            </span>

            {/* Center Emblem Logo */}
            <div className="flex flex-col items-center justify-center px-2.5 py-0.5 border-x-2 border-current">
              <div className="flex items-center gap-1">
                <Coffee className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest">NC</span>
                <Coffee className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              </div>
              <span className="text-[7px] font-mono tracking-tighter opacity-80 uppercase">ESTD 2023</span>
            </div>

            <span className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-none">
              NITESH CHOURASIYA TIMES
            </span>
          </div>

          <p className="text-[9px] sm:text-[11px] font-mono tracking-widest text-center mt-2 font-semibold uppercase opacity-90">
            OFFICIAL SOFTWARE JOURNAL OF NITESH CHOURASIYA • B.TECH CSE (AI & DS)
          </p>
        </div>

        {/* CITY-STYLE CHEVRON NAVIGATION BAR */}
        <div className={`flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1 py-1.5 border-b text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider transition-colors duration-500 overflow-hidden ${
          isMidnightMode ? 'border-[#383633] text-muted-foreground' : 'border-[#1a1a1a] text-muted-foreground'
        }`}>
          {cityList.map((city, idx) => (
            <React.Fragment key={idx}>
              <span className="hover:text-accent cursor-default transition-colors">{city}</span>
              {idx < cityList.length - 1 && <span className="text-accent font-bold">»</span>}
            </React.Fragment>
          ))}
        </div>

        {/* ICONIC 5-CARD STORY TEASER GRID (Top News Grid right above headline) */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-b transition-colors duration-500 divide-x divide-y sm:divide-y-0 divide-current ${
          isMidnightMode ? 'border-[#383633] divide-[#383633]' : 'border-[#1a1a1a] divide-[#1a1a1a]'
        }`}>
          {topTeaserCards.map((card, idx) => (
            <div key={idx} className="p-2.5 flex flex-col justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-all">
              <div>
                <span className={`text-[9px] font-mono font-bold uppercase tracking-wider block mb-1 ${card.tagColor}`}>
                  {card.tag}
                </span>
                <h4 className="font-playfair text-xs font-bold leading-snug line-clamp-2 mb-2">
                  {card.headline}
                </h4>
              </div>
              
              {card.image ? (
                <div className="flex items-center gap-2 mt-1 pt-1.5 border-t border-current/20">
                  <img src={card.image} alt={card.headline} className="w-10 h-10 object-cover filter grayscale rounded-sm" />
                  <span className="text-[8px] font-mono font-bold opacity-75">{card.snippet}</span>
                </div>
              ) : (
                <span className="text-[8px] font-mono font-bold opacity-75 pt-1.5 border-t border-current/20">
                  {card.snippet}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* SCROLLING FINANCIAL TECH SHARES MARQUEE */}
        <div className={`w-full overflow-hidden border-b py-1.5 flex items-center text-xs font-mono transition-colors duration-500 ${
          isMidnightMode ? 'border-[#383633] bg-[#1a1a1a]' : 'border-[#1a1a1a] bg-[#f4f3ee]'
        }`}>
          <div className="px-3 font-bold border-r flex items-center gap-1 shrink-0 select-none text-accent text-[10px] sm:text-xs">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>TECH SHARES MARKET :</span>
          </div>
          <div className="flex whitespace-nowrap overflow-hidden relative w-full">
            <div className="animate-ticker flex gap-6">
              {[...skillsData, ...skillsData, ...skillsData].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-1 text-[10px] sm:text-xs select-none">
                  <span className="font-bold">{skill.name}</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">{skill.change}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PAGE 1: FRONT PAGE (MAIN HEADLINE + 3 BULLET SUMMARIES + MULTI COLUMNS) */}
        {/* ========================================================================= */}
        <section id="front-page" className="flex flex-col pt-4 pb-10">
          
          {/* MAIN PROMINENT HEADLINE */}
          <h2 
            onClick={() => setSelectedArticle(mainStory)}
            className="font-playfair text-2xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight cursor-pointer hover:underline mb-3"
          >
            {mainStory.title}
          </h2>

          {/* 3 BULLET SUMMARY COLUMNS WITH THIN VERTICAL DIVIDERS */}
          <div className={`grid grid-cols-1 md:grid-cols-3 border-y py-2.5 mb-4 transition-colors duration-500 divide-y md:divide-y-0 md:divide-x divide-current ${
            isMidnightMode ? 'border-[#383633] divide-[#383633]' : 'border-[#1a1a1a] divide-[#1a1a1a]'
          }`}>
            {mainStory.subtitles?.map((subtitle, idx) => (
              <div key={idx} className="px-3 py-1.5 md:py-0 flex items-start gap-2 text-xs font-mono tracking-tight leading-relaxed">
                <span className="text-accent font-bold shrink-0 text-sm">■</span>
                <p className="font-semibold">{subtitle}</p>
              </div>
            ))}
          </div>

          {/* MAIN FRONT PAGE 4-COLUMN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            
            {/* COLUMN 1: "INSIDE" DIRECTORY & TODAY'S BRIEF */}
            <div className={`lg:col-span-1 lg:border-r lg:pr-5 flex flex-col gap-5 transition-colors duration-500 ${
              isMidnightMode ? 'lg:border-[#383633]' : 'lg:border-[#1a1a1a]'
            }`}>
              
              {/* Today's Brief Box */}
              <div className={`border p-3.5 transition-colors duration-500 rounded-sm ${
                isMidnightMode ? 'border-[#383633] bg-[#161616]' : 'border-[#1a1a1a] bg-[#f4f3ee]'
              }`}>
                <h3 className="font-cinzel text-xs font-bold border-b pb-1.5 mb-2.5 uppercase tracking-wider">
                  TODAY'S BRIEF
                </h3>
                <div className="flex flex-col gap-2 font-mono text-[10px]">
                  <div className="flex justify-between">
                    <span className="opacity-75">LOCATION:</span>
                    <span className="font-bold">LNCT BHOPAL / IN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-75">DEV STATUS:</span>
                    <span className="font-bold text-green-600 dark:text-green-400">OPEN FOR ROLES</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-75">DEGREE:</span>
                    <span className="font-bold">B.TECH CSE (AI & DS)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-75">COFFEE INTAKE:</span>
                    <span className="font-bold flex items-center gap-1">
                      3 CUPS <Coffee className="w-3 h-3 text-accent" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Inside Directory */}
              <div className="flex flex-col">
                <h2 className={`font-cinzel text-base font-bold uppercase tracking-wider border-b-2 pb-1 mb-2.5 transition-colors duration-500 ${
                  isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
                }`}>
                  INSIDE THE GAZETTE
                </h2>
                <div className="flex flex-col divide-y transition-colors duration-500 divide-current">
                  {insideStories.map((story, idx) => (
                    <div key={idx} className="py-2 group cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 px-1 rounded-sm">
                      <p className={`text-[9px] font-mono tracking-widest font-bold uppercase mb-0.5 ${
                        idx % 2 === 0 ? 'text-accent' : 'text-[#8b1e3f] dark:text-[#f2647e]'
                      }`}>
                        {story.section} • {story.page}
                      </p>
                      <h4 className="font-playfair text-xs font-bold leading-snug group-hover:underline">
                        {story.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Stamp */}
              <div className={`mt-auto border-2 border-dashed p-3.5 flex flex-col items-center justify-center text-center transition-colors duration-500 ${
                isMidnightMode ? 'border-[#ff7f41]/30 bg-[#161616]' : 'border-[#8b1e3f]/20 bg-[#f4f3ee]'
              }`}>
                <span className="text-[9px] font-mono tracking-widest uppercase font-bold mb-1">SUBSCRIBE & CONNECT</span>
                <p className="font-playfair text-xs leading-relaxed italic mb-2.5">
                  "For inquiries, contracts, or code collaboration, reach out via official channels."
                </p>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/jattu8602" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full border border-current hover:bg-accent hover:text-white transition-all"
                    title="GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full border border-current hover:bg-accent hover:text-white transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* CENTER 2 COLUMNS: ARTICLE TEXT & PHOTO */}
            <div className={`lg:col-span-2 lg:border-r lg:px-3 flex flex-col transition-colors duration-500 ${
              isMidnightMode ? 'lg:border-[#383633]' : 'lg:border-[#1a1a1a]'
            }`}>
              
              <div className="flex items-center justify-between text-xs font-mono mb-2.5 italic opacity-85">
                <span>By {mainStory.author}</span>
                <span>{mainStory.location}</span>
              </div>

              <div 
                onClick={() => setSelectedArticle(mainStory)}
                className="font-playfair text-xs sm:text-sm leading-relaxed text-justify md:newspaper-cols-2 md:newspaper-col-border cursor-pointer hover:bg-black/[0.02] dark:hover:bg-white/[0.02] p-1 rounded-sm transition-all"
              >
                <p className="newspaper-drop-cap mb-3">
                  {mainStory.content[0]}
                </p>
                {mainStory.content.slice(1, 3).map((para, idx) => (
                  <p key={idx} className="mb-3 indent-6">
                    {para}
                  </p>
                ))}
              </div>

              {/* Ink Etching Photo & Caption */}
              {mainStory.image && (
                <div className="my-3 flex flex-col border p-1 bg-black/5 dark:bg-white/5 border-current">
                  <img 
                    src={mainStory.image} 
                    alt={mainStory.title}
                    className="w-full object-cover max-h-[340px] filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <p className={`text-[10px] font-mono p-2 leading-relaxed border-t mt-1 ${
                    isMidnightMode ? 'border-[#383633] bg-[#1a1a1a]' : 'border-[#1a1a1a] bg-[#f4f3ee]'
                  }`}>
                    {mainStory.imageCaption}
                  </p>
                </div>
              )}

              <div 
                onClick={() => setSelectedArticle(mainStory)}
                className="font-playfair text-xs sm:text-sm leading-relaxed text-justify md:newspaper-cols-2 md:newspaper-col-border cursor-pointer hover:bg-black/[0.02] dark:hover:bg-white/[0.02] p-1 rounded-sm transition-all"
              >
                {mainStory.content.slice(3).map((para, idx) => (
                  <p key={idx} className="mb-3 indent-6">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* RIGHT SIDEBAR: SECONDARY DISPATCHES */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <h3 className={`font-cinzel text-sm font-bold uppercase tracking-wider border-b-2 pb-1 transition-colors duration-500 ${
                isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
              }`}>
                REGIONAL DISPATCHES
              </h3>

              {honors.slice(0, 3).map((honor) => (
                <div key={honor.id} className="flex flex-col pb-3 border-b border-current/20">
                  <span className="text-[9px] font-mono font-bold uppercase text-accent mb-1">
                    {honor.rank}
                  </span>
                  <h4 className="font-playfair text-sm font-black leading-snug mb-1">
                    {honor.title}
                  </h4>
                  <p className="font-playfair text-xs leading-relaxed opacity-90 line-clamp-3">
                    {honor.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* PAGE 2: BUSINESS & STARTUPS SECTION */}
        {/* ========================================================================= */}
        <section id="startups-page" className={`pt-8 pb-10 border-t-4 border-double transition-colors duration-500 ${
          isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
        }`}>
          <div className="flex items-center justify-between border-b pb-2 mb-5 font-mono text-xs uppercase tracking-widest font-bold">
            <span>SECTION 2 — BUSINESS & STARTUP REPORT</span>
            <span>RGPV NOTES • IOT HARDWARE • CLAT PREP</span>
          </div>

          <h2 className="font-cinzel text-3xl md:text-5xl font-black mb-5">
            REAL-WORLD VENTURES & DEPLOYED PRODUCTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {startupArticles.map((art) => (
              <div 
                key={art.id} 
                onClick={() => setSelectedArticle(art)}
                className={`border p-4 flex flex-col justify-between cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-all ${
                  isMidnightMode ? 'border-[#383633] bg-[#161616]' : 'border-[#1a1a1a] bg-[#f4f3ee]'
                }`}
              >
                <div>
                  <span className={`text-[9px] font-mono font-bold uppercase block mb-1 ${art.categoryColor}`}>
                    {art.category}
                  </span>
                  <h3 className="font-playfair text-lg font-black leading-tight mb-2">
                    {art.title}
                  </h3>
                  <div className="text-[10px] font-mono italic opacity-75 mb-2.5">
                    By {art.author} • {art.location}
                  </div>
                  <p className="font-playfair text-xs leading-relaxed text-justify mb-3">
                    {art.content[0]}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-wider flex items-center gap-0.5 mt-2">
                  READ FULL REPORT <Maximize2 className="w-2.5 h-2.5" />
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PAGE 3: COMPETITIVE DISPATCH & HACKATHON VICTORY WALL */}
        {/* ========================================================================= */}
        <section id="hackathons-page" className={`pt-8 pb-10 border-t-4 border-double transition-colors duration-500 ${
          isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
        }`}>
          <div className="flex items-center justify-between border-b pb-2 mb-5 font-mono text-xs uppercase tracking-widest font-bold">
            <span>SECTION 3 — COMPETITIVE DISPATCH & TROPHY WALL</span>
            <span>NATIONAL HACKATHONS • CASH PRIZES • IDEATHONS</span>
          </div>

          <h2 className="font-cinzel text-3xl md:text-5xl font-black mb-5">
            VICTORY WALL & COMPETITIVE HONORS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {honors.map((h) => (
              <div 
                key={h.id}
                className={`border p-5 flex flex-col justify-between transition-colors ${
                  isMidnightMode ? 'border-[#383633] bg-[#161616]' : 'border-[#1a1a1a] bg-[#f4f3ee]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold uppercase text-accent">
                      {h.rank}
                    </span>
                    <Badge variant="outline" className="font-mono text-[10px] uppercase">
                      {h.organizer}
                    </Badge>
                  </div>
                  <h3 className="font-playfair text-xl font-black leading-tight mb-2">
                    {h.title}
                  </h3>
                  <p className="font-playfair text-xs leading-relaxed text-justify mb-3 opacity-90">
                    {h.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-current/20">
                  {h.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-black/10 dark:bg-white/10 rounded font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PAGE 4: CREDENTIALS & ACADEMIC GAZETTE */}
        {/* ========================================================================= */}
        <section id="credentials-page" className={`pt-8 pb-10 border-t-4 border-double transition-colors duration-500 ${
          isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
        }`}>
          <div className="flex items-center justify-between border-b pb-2 mb-5 font-mono text-xs uppercase tracking-widest font-bold">
            <span>SECTION 4 — ACADEMIC & CERTIFICATION GAZETTE</span>
            <span>AWS CLOUD • DOCKER • LNCT BHOPAL</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Education */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <h3 className="font-cinzel text-xl font-black border-b pb-2">
                ACADEMIC DEGREES
              </h3>

              <div className={`border p-4 flex flex-col gap-1.5 ${isMidnightMode ? 'border-[#383633] bg-[#161616]' : 'border-[#1a1a1a] bg-[#f4f3ee]'}`}>
                <span className="text-[10px] font-mono text-accent font-bold uppercase">PURSUING DEGREE</span>
                <h4 className="font-playfair font-black text-base">B.Tech in Computer Science Engineering</h4>
                <p className="font-mono text-xs font-semibold">Specialization: Artificial Intelligence & Data Science</p>
                <p className="font-mono text-xs text-muted-foreground">LNCT Bhopal • Expected Completion 2026</p>
              </div>

              <div className={`border p-4 flex flex-col gap-1.5 ${isMidnightMode ? 'border-[#383633] bg-[#161616]' : 'border-[#1a1a1a] bg-[#f4f3ee]'}`}>
                <span className="text-[10px] font-mono text-accent font-bold uppercase">HIGHER SECONDARY (12TH)</span>
                <h4 className="font-playfair font-black text-base">12th Standard — Completed</h4>
                <p className="font-mono text-xs">Deep Jyoti Public HS School, Keolari, Seoni, MP</p>
              </div>

              <div className={`border p-4 flex flex-col gap-1.5 ${isMidnightMode ? 'border-[#383633] bg-[#161616]' : 'border-[#1a1a1a] bg-[#f4f3ee]'}`}>
                <span className="text-[10px] font-mono text-accent font-bold uppercase">HIGH SCHOOL (10TH)</span>
                <h4 className="font-playfair font-black text-base">10th Standard — Completed</h4>
                <p className="font-mono text-xs">Deep Jyoti Public HS School, Keolari, Seoni, MP</p>
              </div>
            </div>

            {/* Certifications Matrix */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-2 gap-2">
                <h3 className="font-cinzel text-xl font-black">
                  VERIFIED CREDENTIALS
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: 'All', value: 'all' },
                    { label: 'Cloud', value: 'cloud' },
                    { label: 'Software', value: 'agile' },
                    { label: 'AI', value: 'ai' },
                    { label: 'Hackathons', value: 'hackathon' }
                  ].map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => setCertFilter(tab.value as any)}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase transition-all ${
                        certFilter === tab.value
                          ? 'bg-accent text-white font-bold'
                          : 'border border-current hover:bg-black/5'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCerts.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => setSelectedCert(c)}
                    className={`border p-3 flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-all ${
                      isMidnightMode ? 'border-[#383633] bg-[#161616]' : 'border-[#1a1a1a] bg-[#f4f3ee]'
                    }`}
                  >
                    <div>
                      <img src={c.image} alt={c.title} className="w-full h-24 object-cover filter grayscale hover:grayscale-0 transition-all mb-2" />
                      <span className="text-[9px] font-mono font-bold uppercase text-accent block">{c.issuer}</span>
                      <h4 className="font-playfair text-xs font-bold leading-snug line-clamp-2">{c.title}</h4>
                    </div>
                    <span className="text-[9px] font-mono text-accent font-bold uppercase mt-2 flex items-center gap-0.5">
                      PREVIEW CREDENTIAL <Maximize2 className="w-2.5 h-2.5" />
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* PAGE 5: THE INTERACTIVE PUZZLE & LAB CORNER */}
        {/* ========================================================================= */}
        <section id="puzzle-lab" className={`pt-8 pb-10 border-t-4 border-double transition-colors duration-500 ${
          isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
        }`}>
          <div className="flex items-center justify-between border-b pb-2 mb-5 font-mono text-xs uppercase tracking-widest font-bold">
            <span>SECTION 5 — THE INTERACTIVE PUZZLE & LAB CORNER</span>
            <span>PLAYABLE CHESS ENGINE • REACT STATE</span>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-cinzel text-2xl md:text-4xl font-black mb-1.5">
              DAILY NEWSPAPER CHESS PUZZLE
            </h2>
            <p className="font-playfair text-xs italic">
              "A fully playable React chess engine embedded directly inside the broadsheet layout. Challenge yourself to a game!"
            </p>
          </div>

          <div className={`border p-4 md:p-6 flex flex-col items-center justify-center rounded-sm ${
            isMidnightMode ? 'border-[#383633] bg-[#161616]' : 'border-[#1a1a1a] bg-[#e6dfcf]'
          }`}>
            <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-current">
              <ChessBoard />
            </div>
          </div>
        </section>

        {/* BOTTOM DOUBLE LINE DIVIDER */}
        <div className={`mt-8 pt-4 border-t-4 border-double transition-colors duration-500 ${
          isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
        }`}></div>

        {/* BROADSHEET FOOTER */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs font-mono uppercase tracking-wider py-3 opacity-80 gap-3">
          <p>© {new Date().getFullYear()} NITESH CHOURASIYA. PRINTED & PUBLISHED FOR GLOBAL DISTRIBUTION.</p>
          <div className="flex items-center gap-4">
            <a href="https://niteshjatin.me" className="hover:underline font-bold text-accent">
              niteshjatin.me
            </a>
            <button onClick={scrollToTop} className="hover:underline flex items-center gap-1 font-bold text-accent">
              TOP OF BROADSHEET <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className={`relative w-full max-w-3xl max-h-[85vh] overflow-y-auto border-2 p-6 md:p-8 flex flex-col shadow-2xl transition-colors duration-500 ${
            isMidnightMode 
              ? 'paper-texture-dark text-[#e0dbd3] border-[#383633]' 
              : 'paper-texture text-[#1a1a1a] border-[#1a1a1a]'
          }`}>
            
            <button
              onClick={() => setSelectedArticle(null)}
              className={`absolute top-4 right-4 p-1.5 rounded-full border transition-colors ${
                isMidnightMode 
                  ? 'border-[#383633] hover:bg-[#383633] text-[#e0dbd3]' 
                  : 'border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a]'
              }`}
              title="Close article"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-4">
              <span className={`text-xs font-mono tracking-wider font-bold uppercase ${selectedArticle.categoryColor}`}>
                {selectedArticle.category}
              </span>
              <h2 className="font-playfair text-2xl md:text-4xl font-black leading-tight tracking-tight mt-1 mb-2">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center justify-between text-xs font-mono border-b pb-2 transition-colors duration-500 opacity-80 uppercase">
                <span>By {selectedArticle.author || 'Staff Writer'}</span>
                <span>{selectedArticle.location || 'GLOBAL'}</span>
              </div>
            </div>

            <div className="font-playfair text-sm md:text-base leading-relaxed text-justify space-y-4 max-w-2xl mx-auto overflow-y-auto pr-2">
              {selectedArticle.image && (
                <div className="my-3 border p-1 bg-black/5 dark:bg-white/5 border-current">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title}
                    className="w-full object-cover max-h-[280px] filter grayscale"
                  />
                  <p className={`text-[10px] font-mono p-2 leading-relaxed border-t mt-1 ${
                    isMidnightMode ? 'border-[#383633] bg-[#1a1a1a]' : 'border-[#1a1a1a] bg-[#e6dfcf]'
                  }`}>
                    {selectedArticle.imageCaption}
                  </p>
                </div>
              )}

              <p className="newspaper-drop-cap">
                {selectedArticle.content[0]}
              </p>
              
              {selectedArticle.content.slice(1).map((para, idx) => (
                <p key={idx} className="indent-6">
                  {para}
                </p>
              ))}
            </div>

            <div className={`mt-6 pt-4 border-t flex justify-between items-center text-xs font-mono transition-colors duration-500 ${
              isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
            }`}>
              <div className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>THE NITESH CHOURASIYA GAZETTE</span>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="hover:underline text-accent font-bold"
              >
                RETURN TO BROADSHEET
              </button>
            </div>

          </div>
        </div>
      )}

      {/* CREDENTIAL LIGHTBOX MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col shadow-2xl overflow-y-auto">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full border border-border bg-secondary hover:bg-accent hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-mono text-accent font-bold uppercase">{selectedCert.issuer}</span>
              <h3 className="text-2xl font-display font-bold text-foreground mt-1">{selectedCert.title}</h3>
            </div>

            <div className="rounded-xl overflow-hidden border border-border bg-black/90 p-2 mb-4">
              <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto max-h-[60vh] object-contain mx-auto" />
            </div>

            <div className="flex justify-between items-center text-xs font-mono text-muted-foreground pt-2 border-t border-border">
              <span>VERIFIED CREDENTIAL DOCUMENT</span>
              <button onClick={() => setSelectedCert(null)} className="text-accent font-bold hover:underline">
                CLOSE PREVIEW
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
