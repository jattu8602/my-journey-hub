import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  ArrowLeft 
} from 'lucide-react';

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
  aside?: string;
}

export default function Design() {
  useLenis();
  const [isMidnightMode, setIsMidnightMode] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time for the top header clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

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
    { name: 'THREEJS', change: '+15.2%', positive: true },
    { name: 'DOCKER', change: '+3.9%', positive: true },
    { name: 'GIT', change: '+2.8%', positive: true },
    { name: 'SHADCN', change: '+9.9%', positive: true },
  ];

  const mainStory: Article = {
    id: 'lead-story',
    category: 'SPECIAL REPORT',
    categoryColor: 'text-[#8b1e3f] dark:text-[#f2647e]',
    title: 'ENGINEER CRAFTS RESPONSIVE NEWSPAPER EXPERIMENT',
    subtitles: [
      'Flexible grid-lanes reflow intricate multi-column paper sheet to singular viewports on mobile screens',
      'Dynamic styling framework toggles "Newsprint Cream" and "Midnight Ink" for low-contrast night reading',
      'Tech stack stock exchange ticker records software engineering skills as climbing market shares'
    ],
    author: 'Peerzada Ashiq',
    location: 'SRINAGAR',
    content: [
      'In a remarkable display of frontend engineering, developer Nitesh Chourasiya has unveiled a high-fidelity web page at /design designed to mimic the layout and aesthetics of a traditional broadsheet newspaper.',
      'Taking structural inspiration from international classics, the layout employs sophisticated CSS techniques to achieve perfect vertical rhythm, justified text alignment, and cross-column dividing rules that scale dynamically across devices.',
      'A key challenge in designing newspaper interfaces on the web is resolving the conflict between rigid print columns and fluid viewport sizes. The newly launched layout handles this through responsive container grids. On desktop viewports, readers are treated to a full-width, four-column spread with editorial dividers. On mobile devices, the columns gracefully collapse into a streamlined, high-contrast column that prioritizes reading comfort without losing typographic character.',
      'The design features custom details such as ink-etched illustrations, drop caps, double horizontal rules, and a custom scrolling stock ticker recording the rising valuate of various technical methodologies in the developer\'s repertoire. Furthermore, a "Press Run" toggle allows readers to stamp the interface with a dark midnight mode, simulating a dark-mode print run on heavy graphite stock.',
      'Observers note that by avoiding heavy external libraries and utilizing native Tailwind CSS column counts, the page loads instantly, preserving Core Web Vitals and guaranteeing a smooth, premium reading experience.'
    ],
    image: '/developer_sketch.png',
    imageCaption: 'TRACES OF CODE: Developer Nitesh Chourasiya refactoring database schemas at a retro wooden desk, styled in high-contrast ink engraving etching. PHOTO: AP/REUTERS'
  };

  const sideArticles: Article[] = [
    {
      id: 'certifications',
      category: 'CLOUD INFRASTRUCTURE',
      categoryColor: 'text-[#e55812] dark:text-[#ff7f41]',
      title: 'Clouds Align as AWS Certification Achieved',
      author: 'Staff Reporter',
      location: 'MUMBAI',
      content: [
        'Demonstrating expertise in distributed cloud environments, Nitesh has successfully attained the AWS Certified Cloud Practitioner credential, reinforcing capabilities in cloud architecture and scalable systems.',
        'The certification validates foundational understanding of IT services and their implementation on the Amazon Web Services platform, highlighting security compliance, architecture designs, and core billing structures.',
        'Industry analysts suggest that developers equipped with cloud certifications are 40% more effective at designing resilient backend structures that survive traffic spikes during breaking news cycles.'
      ]
    },
    {
      id: 'chess-engine',
      category: 'ALGORITHMS & DSA',
      categoryColor: 'text-[#1b4332] dark:text-[#52b788]',
      title: 'React-Based Chess Engine Debuts in Portfolio',
      author: 'Shreya Banerjee',
      location: 'KOLKATA',
      content: [
        'A fully playable React chess engine has been deployed directly in the workspace, combining complex game state tracking, moves validation, and state history into a clean user interface.',
        'The component, located in the portfolio structure, features drag-and-drop gameplay, customizable themes, and robust state management to ensure low input lag and responsive gameplay.',
        '"Integrating chess logic into a React rendering cycle requires careful memoization and state layout," Nitesh commented during a recent code audit. "Every piece render is optimized to prevent layout shifts."'
      ]
    },
    {
      id: 'dragon-minigame',
      category: 'INTERACTIVE DESIGN',
      categoryColor: 'text-[#5e2b97] dark:text-[#a370e7]',
      title: 'Dragon Canvas Game Draws Interactive Crowd',
      author: 'Associated Press',
      location: 'TOKYO',
      content: [
        'A retro-style canvas minigame featuring a flying dragon avoiding obstacles has been integrated into the portfolio, demonstrating low-level graphics rendering and frame-by-frame physics loops in JavaScript.',
        'Users can control the flying beast using keyboard prompts, tracking high scores and experiencing parallax backgrounds rendered in real-time.',
        'The project showcases the developer\'s versatility in creating gaming layouts and handling collision detection, game-loop states, and canvas paint operations smoothly.'
      ]
    },
    {
      id: 'experience-report',
      category: 'CAREER TIMELINE',
      categoryColor: 'text-[#2b59c3] dark:text-[#7da2ff]',
      title: '19 Months of Continuous Frontend Innovation',
      author: 'Financial Times',
      location: 'LONDON',
      content: [
        'A comprehensive summary of Nitesh\'s professional trajectory reveals a total of 19 months in engineering roles, focusing on building high-performance frontend features and robust web platforms.',
        'During this tenure, major milestones include building customizable dashboard components, optimizing bundle size by 30%, and implementing advanced animation systems using GSAP.',
        'With a track record of translating complex product requirements into modular codebases, Nitesh remains focused on the next frontier of full-stack development and distributed database design.'
      ]
    }
  ];

  const insideStories = [
    { title: 'T.N. Govt plans to reduce VAT rate on aviation fuel', section: 'STATES', page: 'PAGE 3' },
    { title: 'Swear words may be uncivil, but not obscene, says Supreme Court', section: 'LEGAL', page: 'PAGE 6' },
    { title: 'F&O sector needs strict entry barriers, regulators warn', section: 'BUSINESS', page: 'PAGE 9' },
    { title: 'Russian strikes kill 6 in Ukrainian cities as conflict escalates', section: 'WORLD', page: 'PAGE 14' },
    { title: 'Sindhu ends 19-month title drought in dramatic match', section: 'SPORT', page: 'PAGE 17' },
  ];

  return (
    <div className={`min-h-screen w-full transition-colors duration-500 font-body p-4 md:p-8 flex flex-col items-center ${
      isMidnightMode 
        ? 'paper-texture-dark text-[#e0dbd3] dark' 
        : 'paper-texture text-[#1a1a1a]'
    }`}>
      
      {/* Outer broadsheet frame container */}
      <div className={`w-full max-w-[1440px] border-2 flex flex-col p-4 md:p-6 transition-colors duration-500 ${
        isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
      }`}>
        
        {/* TOP META-INFO ROW */}
        <div className={`flex flex-col sm:flex-row items-center justify-between text-xs font-mono pb-2 border-b transition-colors duration-500 uppercase ${
          isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
        }`}>
          <div className="flex gap-4">
            <span>{formattedDate}</span>
            <span className="hidden sm:inline">|</span>
            <span>PORTFOLIO EDITION</span>
          </div>
          <a 
            href="https://niteshjatin.me" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline my-1 sm:my-0 font-semibold uppercase"
          >
            niteshjatin.me
          </a>
          <div className="flex items-center gap-4">
            <span>VOL. IV • NO. 171</span>
            <span className="hidden sm:inline">|</span>
            <span>20 PAGES</span>
          </div>
        </div>

        {/* MASTHEAD: THE MAIN LOGO TITLE */}
        <div className={`relative flex flex-col items-center py-6 border-b-4 border-double transition-colors duration-500 ${
          isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
        }`}>
          {/* Theme switcher stamp (Wow factor interactive element) */}
          <button
            onClick={handleToggleTheme}
            className={`absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-20 h-20 rounded-full border-2 border-dashed transition-all duration-300 hover:scale-105 ${
              isMidnightMode 
                ? 'border-[#ff7f41] text-[#ff7f41] hover:bg-[#ff7f41]/10' 
                : 'border-[#8b1e3f] text-[#8b1e3f] hover:bg-[#8b1e3f]/5'
            }`}
            title="Click to toggle press run theme edition"
          >
            <span className="text-[8px] font-mono leading-none tracking-widest">PRESS RUN</span>
            {isMidnightMode ? (
              <Sun className="w-6 h-6 my-1 animate-spin-slow" />
            ) : (
              <Moon className="w-6 h-6 my-1" />
            )}
            <span className="text-[7px] font-mono leading-none font-bold uppercase">
              {isMidnightMode ? 'DAY EDIT.' : 'NIGHT EDIT.'}
            </span>
          </button>

          {/* Masthead title */}
          <Link to="/" className="group block text-center focus:outline-none">
            <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none group-hover:opacity-85 transition-opacity">
              THE JOURNEY
            </h1>
            
            {/* Divider Emblem */}
            <div className="flex items-center justify-center gap-4 w-full my-2">
              <div className={`h-[1px] flex-grow max-w-[150px] transition-colors duration-500 ${isMidnightMode ? 'bg-[#383633]' : 'bg-[#1a1a1a]'}`}></div>
              <div className="flex items-center gap-1.5">
                <Coffee className="w-4 h-4 text-accent" />
                <span className="text-xs font-mono font-semibold tracking-wider">ESTD. 2023</span>
                <Coffee className="w-4 h-4 text-accent" />
              </div>
              <div className={`h-[1px] flex-grow max-w-[150px] transition-colors duration-500 ${isMidnightMode ? 'bg-[#383633]' : 'bg-[#1a1a1a]'}`}></div>
            </div>

            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none group-hover:opacity-85 transition-opacity">
              GAZETTE
            </h1>
          </Link>
          <p className="text-[10px] sm:text-xs font-mono tracking-widest text-center mt-2 opacity-85">
            "THE TRUTH, THE CODE, AND THE ENGINEERING JOURNEY"
          </p>
        </div>

        {/* SUB-NAV TOPICS (Double Rules) */}
        <div className={`flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 py-3.5 border-b-4 border-double text-xs md:text-sm font-semibold tracking-widest font-mono transition-colors duration-500 ${
          isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
        }`}>
          <Link to="/" className="hover:text-accent flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO PORTFOLIO
          </Link>
          <span className="opacity-40">•</span>
          <Link to="/experience" className="hover:text-accent transition-colors">EXPERIENCE</Link>
          <span className="opacity-40">•</span>
          <Link to="/certification" className="hover:text-accent transition-colors">CERTIFICATION</Link>
          <span className="opacity-40">•</span>
          <Link to="/blogs" className="hover:text-accent transition-colors">BLOGS</Link>
          <span className="opacity-40">•</span>
          <Link to="/code" className="hover:text-accent transition-colors">CODE</Link>
          <span className="opacity-40">•</span>
          <span className="text-accent">DESIGN</span>
        </div>

        {/* SCROLLING FINANCIAL STACK MARKET TICKER (Newspaper Financial section look) */}
        <div className={`w-full overflow-hidden border-b py-2 flex items-center text-xs font-mono transition-colors duration-500 ${
          isMidnightMode ? 'border-[#383633] bg-[#1a1a1a]' : 'border-[#1a1a1a] bg-[#faf9f6]'
        }`}>
          <div className="px-4 font-bold border-r flex items-center gap-1.5 shrink-0 select-none text-accent">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHARES :</span>
          </div>
          <div className="flex whitespace-nowrap overflow-hidden relative w-full">
            <div className="animate-ticker flex gap-8">
              {/* Duplicate the array to scroll smoothly */}
              {[...skillsData, ...skillsData, ...skillsData].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-1 text-xs select-none">
                  <span className="font-bold">{skill.name}</span>
                  <span className={skill.positive ? 'text-green-600 dark:text-green-400' : 'text-red-600'}>
                    {skill.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN BODY GRID - 4 COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-6">
          
          {/* COLUMN 1: LEFT SIDEBAR ("INSIDE" STUFF & QUICK FACTS) */}
          <div className={`lg:col-span-1 lg:border-r lg:pr-6 flex flex-col gap-6 transition-colors duration-500 ${
            isMidnightMode ? 'lg:border-[#383633]' : 'lg:border-[#1a1a1a]'
          }`}>
            
            {/* WEATHER & QUICK STATS WIDGET */}
            <div className={`border p-4 transition-colors duration-500 rounded-sm ${
              isMidnightMode ? 'border-[#383633] bg-[#161616]' : 'border-[#1a1a1a] bg-[#faf9f5]'
            }`}>
              <h3 className="font-cinzel text-base font-bold border-b pb-2 mb-3 uppercase tracking-wider">
                TODAY'S BRIEF
              </h3>
              <div className="flex flex-col gap-2.5 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="opacity-75">LOCATION:</span>
                  <span className="font-bold">IN / GLOBAL</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-75">DEV STATUS:</span>
                  <span className="font-bold text-green-600 dark:text-green-400">OPEN FOR ROLES</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-75">COFFEE INTAKE:</span>
                  <span className="font-bold flex items-center gap-1">
                    3 CUPS <Coffee className="w-3 h-3 text-accent" />
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-75">WEATHER:</span>
                  <span className="font-bold">RAINY CODES</span>
                </div>
              </div>
            </div>

            {/* "INSIDE" INDEX SECTION */}
            <div className="flex flex-col">
              <h2 className={`font-cinzel text-xl font-bold uppercase tracking-wider border-b-2 pb-1.5 mb-3 transition-colors duration-500 ${
                isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
              }`}>
                INSIDE THE GAZETTE
              </h2>
              <div className="flex flex-col divide-y transition-colors duration-500 divide-current">
                {insideStories.map((story, idx) => (
                  <div key={idx} className="py-3 group cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 px-1 rounded-sm">
                    <p className={`text-[10px] font-mono tracking-widest font-bold uppercase mb-1 ${
                      idx % 2 === 0 ? 'text-accent' : 'text-[#8b1e3f] dark:text-[#f2647e]'
                    }`}>
                      {story.section} • {story.page}
                    </p>
                    <h4 className="font-playfair text-sm font-bold leading-snug group-hover:underline">
                      {story.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* QUICK CONTACT POSTER */}
            <div className={`mt-auto border-2 border-dashed p-4 flex flex-col items-center justify-center text-center transition-colors duration-500 ${
              isMidnightMode ? 'border-[#ff7f41]/30 bg-[#161616]' : 'border-[#8b1e3f]/20 bg-[#faf9f5]'
            }`}>
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold mb-2">SUBSCRIBE & CONNECT</span>
              <p className="font-playfair text-xs leading-relaxed italic mb-4">
                "For inquiries, contracts, or code collaboration, reach out via the official channels."
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-current hover:bg-accent hover:text-white transition-all"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-current hover:bg-accent hover:text-white transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* COLUMN 2 & 3: CENTER STORY (MAIN NEWS & PHOTO) */}
          <div className={`lg:col-span-2 lg:border-r lg:px-2 flex flex-col transition-colors duration-500 ${
            isMidnightMode ? 'lg:border-[#383633]' : 'lg:border-[#1a1a1a]'
          }`}>
            
            {/* SPECIAL REPORT LABEL */}
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[10px] font-mono tracking-wider font-bold border-y py-0.5 ${mainStory.categoryColor}`}>
                {mainStory.category}
              </span>
            </div>

            {/* LEAD HEADLINE */}
            <h2 
              onClick={() => setSelectedArticle(mainStory)}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight cursor-pointer hover:underline mb-4"
            >
              {mainStory.title}
            </h2>

            {/* LEAD SUB-HEADLINES BULLETS */}
            <div className={`border-b pb-4 mb-4 flex flex-col gap-2 transition-colors duration-500 ${
              isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
            }`}>
              {mainStory.subtitles?.map((subtitle, idx) => (
                <div key={idx} className="flex gap-2 items-start text-xs font-mono tracking-tight leading-relaxed opacity-90">
                  <span className="text-accent shrink-0 text-lg leading-none">■</span>
                  <p>{subtitle}</p>
                </div>
              ))}
            </div>

            {/* AUTHOR BYLINE */}
            <div className="flex items-center justify-between text-xs font-mono mb-4 italic opacity-85">
              <span>By {mainStory.author}</span>
              <span>{mainStory.location}</span>
            </div>

            {/* ARTICLE TEXT - MULTI COLUMN READ ON DESKTOP */}
            <div 
              onClick={() => setSelectedArticle(mainStory)}
              className="font-playfair text-sm leading-relaxed text-justify md:newspaper-cols-2 md:newspaper-col-border cursor-pointer hover:bg-black/[0.02] dark:hover:bg-white/[0.02] p-2 rounded-sm transition-all"
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

            {/* MAIN STORY IMAGE & CAPTION */}
            {mainStory.image && (
              <div className="my-4 flex flex-col border p-1 bg-black/5 dark:bg-white/5 transition-colors duration-500 border-current">
                <img 
                  src={mainStory.image} 
                  alt={mainStory.title}
                  className="w-full object-cover max-h-[380px] filter grayscale hover:grayscale-0 transition-all duration-700"
                />
                <p className={`text-[10px] font-mono p-2 leading-relaxed transition-colors duration-500 border-t mt-1 ${
                  isMidnightMode ? 'border-[#383633] bg-[#1a1a1a]' : 'border-[#1a1a1a] bg-[#faf9f6]'
                }`}>
                  {mainStory.imageCaption}
                </p>
              </div>
            )}

            {/* MORE MAIN STORY CONTENT */}
            <div 
              onClick={() => setSelectedArticle(mainStory)}
              className="font-playfair text-sm leading-relaxed text-justify md:newspaper-cols-2 md:newspaper-col-border cursor-pointer hover:bg-black/[0.02] dark:hover:bg-white/[0.02] p-2 rounded-sm transition-all mt-2"
            >
              {mainStory.content.slice(3).map((para, idx) => (
                <p key={idx} className="mb-3 indent-6">
                  {para}
                </p>
              ))}
            </div>

          </div>

          {/* COLUMN 4: RIGHT SIDEBAR (OTHER PORTFOLIO STORIES) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            {sideArticles.map((article, idx) => (
              <div 
                key={article.id} 
                className={`flex flex-col pb-6 cursor-pointer group ${
                  idx < sideArticles.length - 1 
                    ? `border-b transition-colors duration-500 ${isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'}` 
                    : ''
                }`}
                onClick={() => setSelectedArticle(article)}
              >
                <span className={`text-[10px] font-mono tracking-wider font-bold mb-1.5 ${article.categoryColor}`}>
                  {article.category}
                </span>
                <h3 className="font-playfair text-lg font-black leading-tight tracking-tight group-hover:underline mb-2">
                  {article.title}
                </h3>
                <div className="flex justify-between text-[10px] font-mono italic opacity-75 mb-2">
                  <span>By {article.author}</span>
                  <span>{article.location}</span>
                </div>
                <p className="font-playfair text-xs leading-relaxed text-justify line-clamp-3 opacity-90">
                  {article.content[0]}
                </p>
                <span className="text-[10px] font-mono text-accent mt-2 flex items-center gap-0.5 group-hover:underline">
                  READ REPORT <Maximize2 className="w-2.5 h-2.5" />
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* BOTTOM DOUBLE LINE DIVIDER */}
        <div className={`mt-8 pt-4 border-t-4 border-double transition-colors duration-500 ${
          isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
        }`}></div>

        {/* FOOTER */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs font-mono uppercase tracking-wider py-4 opacity-80 gap-4">
          <p>© {new Date().getFullYear()} NITESH CHOURASIYA. EDITORIAL RESERVED.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-accent hover:underline">HOME</Link>
            <Link to="/experience" className="hover:text-accent hover:underline">EXPERIENCE</Link>
            <Link to="/blogs" className="hover:text-accent hover:underline">BLOGS</Link>
          </div>
        </div>

      </div>

      {/* ARTICLE READER MODAL (Classic overlay dialog) */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className={`relative w-full max-w-3xl max-h-[85vh] overflow-y-auto border-2 p-6 md:p-8 flex flex-col shadow-2xl transition-colors duration-500 ${
            isMidnightMode 
              ? 'paper-texture-dark text-[#e0dbd3] border-[#383633]' 
              : 'paper-texture text-[#1a1a1a] border-[#1a1a1a]'
          }`}>
            
            {/* Close button */}
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

            {/* Article header */}
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

            {/* Article content */}
            <div className="font-playfair text-sm md:text-base leading-relaxed text-justify space-y-4 max-w-2xl mx-auto overflow-y-auto pr-2">
              
              {/* Optional article image inside modal */}
              {selectedArticle.image && (
                <div className="my-4 border p-1 bg-black/5 dark:bg-white/5 border-current">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title}
                    className="w-full object-cover max-h-[300px] filter grayscale"
                  />
                  <p className={`text-[10px] font-mono p-2 leading-relaxed border-t mt-1 ${
                    isMidnightMode ? 'border-[#383633] bg-[#1a1a1a]' : 'border-[#1a1a1a] bg-[#faf9f6]'
                  }`}>
                    {selectedArticle.imageCaption}
                  </p>
                </div>
              )}

              {/* Main text with drop cap */}
              <p className="newspaper-drop-cap">
                {selectedArticle.content[0]}
              </p>
              
              {selectedArticle.content.slice(1).map((para, idx) => (
                <p key={idx} className="indent-6">
                  {para}
                </p>
              ))}
            </div>

            {/* Modal footer stamp */}
            <div className={`mt-6 pt-4 border-t flex justify-between items-center text-xs font-mono transition-colors duration-500 ${
              isMidnightMode ? 'border-[#383633]' : 'border-[#1a1a1a]'
            }`}>
              <div className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>THE JOURNEY GAZETTE</span>
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

    </div>
  );
}
