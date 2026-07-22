import { useState, useEffect } from "react"
import { useLenis } from "@/hooks/useLenis"
import { useScrollProgress } from "@/hooks/useScrollProgress"
import { Dock } from "@/components/Dock"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink, Github, Linkedin, Mail, MapPin, Calendar,
  ArrowUpRight, Sparkles, X, ChevronDown,
} from "lucide-react"
import {
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiGsap,
  SiNodedotjs, SiPython, SiEspressif, SiDocker, SiGit, SiShadcnui,
} from "react-icons/si"
import { FaAws } from "react-icons/fa"

// Certificate Images
import kriyetaParticipate from "@/assets/certificates/kriyeta-4-0-participation.jpeg"
import virtualVistaParticipate from "@/assets/certificates/virtual-vista-2-0-participation.jpeg"
import hackwaveParticipate from "@/assets/certificates/hackwave-2-0-participation.jpeg"
import pravahIdeathon from "@/assets/certificates/pravah-2025-ideathon.jpeg"
import websiteDevPrize from "@/assets/certificates/website-development-competition-2nd-prize.jpeg"
import googleSolution from "@/assets/certificates/google-solution-challenge-achievement.jpeg"
import bestAiSolution from "@/assets/certificates/best-ai-ml-solution-testverse.jpg"
import introCybersecurity from "@/assets/certificates/introduction-to-cybersecurity.jpeg"
import learningDocker from "@/assets/certificates/learning-docker.jpeg"
import githubActions from "@/assets/certificates/practical-github-actions.jpeg"
import awsCourse from "@/assets/certificates/aws-free-course-completion.png"
import introIot from "@/assets/certificates/intro-to-iot-and-digital-transformation.jpg"
import sweAgile from "@/assets/certificates/software-engineering-and-agile.jpg"
import applyAi from "@/assets/certificates/apply-ai-analyze-customer-reviews.jpg"
import introModernAi from "@/assets/certificates/introduction-to-modern-ai.jpg"
import projectMgmt from "@/assets/certificates/practical-github-project-management.jpg"
import javaFoundation from "@/assets/certificates/associate-in-it-foundation-skills-java.jpg"
import dbms1 from "@/assets/certificates/dbms-part-1.jpg"
import progJava from "@/assets/certificates/programming-using-java.jpg"
import noSql from "@/assets/certificates/introduction-to-nosql-databases.jpg"
import sweAgile2 from "@/assets/certificates/software-engineering-and-agile-2.jpg"
import dsaJava from "@/assets/certificates/data-structures-and-algorithms-using-java.jpg"
import dbms2 from "@/assets/certificates/dbms-part-2.jpg"
import javaDsaScaler from "@/assets/certificates/java-dsa-course-master-fundamentals.jpg"

// ─── DATA ───────────────────────────────────────────────────────────

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "GSAP", icon: SiGsap, color: "#88CE02" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "ESP32 IoT", icon: SiEspressif, color: "#E7352C" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "shadcn/ui", icon: SiShadcnui, color: "#000000" },
]

const projects = [
  {
    title: "NotesMates.in",
    description: "RGPV's leading academic notes platform serving 100K+ page views and 2,000+ active students with Razorpay payments and AdSense monetization.",
    tech: ["Next.js", "Prisma", "Shadcn UI", "Razorpay"],
    links: { live: "https://notesmates.in" },
  },
  {
    title: "PresentSir.in @ Idea Lab",
    description: "Smart ESP32-based attendance system combining custom microcontroller firmware with a cloud dashboard for real-time biometric processing.",
    tech: ["ESP32", "IoT", "Next.js", "Firebase"],
    links: { live: "https://presentsir.in" },
  },
  {
    title: "Outlawed.in",
    description: "CLAT test prep platform with timed mock exams, instant score analytics, subscription tiers, and real-time performance tracking for 1,000+ aspirants.",
    tech: ["Next.js", "Analytics", "Payments", "Timed Tests"],
    links: { live: "https://outlawed.in" },
  },
  {
    title: "Farmcs.in @ Idea Lab",
    description: "Agri-tech startup combining AI, IoT sensors, and drone data feeds for crop monitoring. Conducted technical workshops for 500+ student engineers.",
    tech: ["Next.js", "MongoDB", "ESP32", "Drones"],
    links: { live: "https://farmcs.in" },
  },
  {
    title: "GoGreen (Kriyeta - Top 5)",
    description: "AI-powered travel & city sustainability mobile app. Secured Top 5 out of 2,000+ teams at Kriyeta Hackathon with TomTom & Google Maps APIs.",
    tech: ["React Native", "Google Maps", "TomTom", "Clerk"],
  },
  {
    title: "Dakshedu.in",
    description: "Instagram-style educational social platform with high-speed media rendering, user profiles, feeds, and a scalable API-first backend.",
    tech: ["Next.js", "API Routes", "Media Delivery", "Social Graph"],
    links: { live: "https://dakshedu.in" },
  },
  {
    title: "CalmChase @ Passiflora Resorts",
    description: "Building 3+ production websites including real estate platform, WordPress news site, and EV mobility site as Frontend Developer Intern.",
    tech: ["WordPress", "Next.js", "Client Work", "Vercel"],
    links: { live: "https://passifloraproperties.com" },
  },
]

const journey = [
  { year: "2023", title: "The Beginning", company: "Self-Learning Journey", description: "Started coding, diving deep into multiple programming languages and building a strong foundation in software development.", skills: ["Python", "JavaScript", "C/C++", "HTML", "CSS"] },
  { year: "Late 2023", title: "Terminal Mastery", company: "Command Line Explorer", description: "Explored the power of command-line interfaces, mastering terminal workflows across operating systems and text editors.", skills: ["Vim", "Ubuntu", "macOS", "Bash"] },
  { year: "Early 2024", title: "Web Dev & Animations", company: "Creative Development", description: "Built websites with advanced animations and 3D effects. Explored backend development with Django.", skills: ["GSAP", "3D Web", "Django", "Framer Motion"] },
  { year: "Mid 2024", title: "Full Stack Developer", company: "Farmcs.in @ Idea Lab", description: "Joined an agri-tech startup combining AI, IoT, and software. Built full-stack solutions with drones & ESP32.", skills: ["Next.js", "Prisma", "MongoDB", "ESP32", "IoT"] },
  { year: "End 2024", title: "Full Stack Developer", company: "PresentSir.in @ Idea Lab", description: "Developed an ESP32-based smart attendance system, revolutionizing traditional register-based attendance.", skills: ["Next.js", "ESP32", "IoT", "Auth"] },
  { year: "End 2024", title: "Full Stack Developer", company: "NotesMates.in", description: "Co-built RGPV's go-to notes platform. Implemented subscriptions, AdSense monetization, and payments.", skills: ["Next.js", "Prisma", "Shadcn", "Razorpay"] },
  { year: "End 2024", title: "Freelance Developer", company: "Mobile App Project", description: "Delivered a cross-platform mobile app with real-time data sync and user authentication.", skills: ["React Native", "Firebase", "Mobile Dev"] },
  { year: "Early 2025", title: "Full Stack Developer", company: "Dakshedu.in", description: "Architected an Instagram-style social platform with rich media sharing and scalable API-first backend.", skills: ["Next.js", "API Routes", "Social Platform"] },
  { year: "Early 2025", title: "Hackathon - Top 8", company: "Prayatna 2.0 @ Acropolis", description: "Competed solo against 3,000+ teams, building a Flutter app integrated with Firebase for PresentSir.in.", skills: ["Flutter", "Firebase", "Solo Dev"] },
  { year: "Mid 2025", title: "Freelance Developer", company: "Outlawed.in", description: "Built a CLAT test prep platform with subscription plans, timed mock tests, and detailed analytics (1K+ users).", skills: ["Subscriptions", "Analytics", "Payments"] },
  { year: "Mid 2025", title: "Hackathon - Top 5", company: "Kriyeta @ Acropolis", description: "Created GoGreen — an AI-powered travel & city management app. Top 5 among 2,000+ teams.", skills: ["React Native", "Google Maps", "TomTom"] },
  { year: "Mid 2025", title: "Hackathon Participant", company: "HackWave 2.0 @ CDGI", description: "Developed an AI-powered browser extension leveraging local AI for enhanced productivity.", skills: ["Browser Extension", "Chrome API", "AI"] },
  { year: "Mid 2025", title: "Winner - 2nd Prize", company: "LNCT Website Competition", description: "Won ₹7,500 prize by building a website with Gemini AI integration. 2nd among 100+ teams.", skills: ["Next.js", "Gemini AI", "Optimization"] },
  { year: "End 2025", title: "Hackathon - Top 11", company: "SAMADHAN 2.0", description: "Enhanced Outlawed.in with 8-10 AI features, expanding the test-taking experience.", skills: ["AI Features", "Full Stack"] },
  { year: "2025", title: "Frontend Developer Intern", company: "CalmChase @ Passiflora", description: "Building 3+ production websites including real estate, news, and EV mobility platforms.", skills: ["WordPress", "Next.js", "Vercel"] },
]

const education = [
  { school: "LNCT Bhopal", degree: "B.Tech CSE — Artificial Intelligence & Data Science", period: "2023 – 2026", status: "Pursuing" },
  { school: "Deep Jyoti Public HS School", degree: "12th Standard", period: "Completed", status: "Completed" },
  { school: "Deep Jyoti Public HS School", degree: "10th Standard", period: "Completed", status: "Completed" },
]

const honors = [
  { title: "2nd Prize — Website Development Competition", rank: "2nd Place (₹7,500 Cash)", event: "LNCT Group Competition", description: "Secured 2nd among 100+ teams by building a web app with Gemini AI API integration.", tags: ["Next.js", "Gemini AI", "Cash Prize"] },
  { title: "Best AI/ML Solution Award", rank: "Award Winner", event: "Testverse Hack-to-Hire Ideathon", description: "Awarded Best AI/ML Solution for an automated intelligent assessment model.", tags: ["Winner", "AI/ML", "Automation"] },
  { title: "Top 5 Finalist (2,000+ Teams)", rank: "Top 5 Finalist", event: "Kriyeta 4.0 National Hackathon", description: "Built GoGreen — an AI travel & city management app using React Native & TomTom APIs.", tags: ["Top 5", "React Native", "Hackathon"] },
  { title: "Top 8 Finalist (3,000+ Teams)", rank: "Top 8 Finalist", event: "Prayatna 2.0 Hackathon", description: "Competed solo against 3,000+ teams to build a Flutter + Firebase attendance app.", tags: ["Top 8", "Solo Build", "Flutter"] },
]

interface Cert {
  id: string; title: string; description: string; image: string; tags: string[]; category: string
}

const certificates: Cert[] = [
  { id: "kriyeta-4-0", title: "Kriyeta 4.0 Participation", description: "48-hour hackathon participation at Acropolis Institute.", image: kriyetaParticipate, tags: ["Hackathon", "Participation"], category: "hackathons" },
  { id: "hackwave-2-0", title: "HackWave 2.0 Participation", description: "36-hour hackathon at CDGI Indore.", image: hackwaveParticipate, tags: ["Hackathon", "Coding"], category: "hackathons" },
  { id: "pravah-2025", title: "Pravah 2025 Ideathon", description: "Ideathon participation under Pravah 2025.", image: pravahIdeathon, tags: ["Ideathon", "Innovation"], category: "hackathons" },
  { id: "testverse-award", title: "Best AI/ML Solution - Testverse", description: "Awarded Best AI/ML Solution at Hack-to-Hire Ideathon.", image: bestAiSolution, tags: ["Winner", "AI/ML"], category: "hackathons" },
  { id: "website-dev-prize", title: "2nd Prize - Website Development", description: "Secured 2nd prize in LNCT Website Development Competition.", image: websiteDevPrize, tags: ["Winner", "Web Dev"], category: "hackathons" },
  { id: "virtual-vista", title: "Virtual Vista 2.0 Participation", description: "National Level Online Project Competition participation.", image: virtualVistaParticipate, tags: ["Competition", "Project"], category: "hackathons" },
  { id: "google-solution", title: "Google Solution Challenge", description: "Certificate of Achievement for an innovative idea.", image: googleSolution, tags: ["Google", "Innovation"], category: "hackathons" },
  { id: "scaler-java-dsa", title: "Java & DSA Certification", description: "Master the Fundamentals and Beyond in Java DSA by Scaler.", image: javaDsaScaler, tags: ["Java", "DSA"], category: "skills" },
  { id: "aws-course", title: "AWS Free Course Completion", description: "Certificate of excellence for completing AWS tutorials.", image: awsCourse, tags: ["Cloud", "AWS"], category: "skills" },
  { id: "java-foundation", title: "Associate in IT Foundation Skills (Java)", description: "Infosys Springboard completion for IT Foundation Skills.", image: javaFoundation, tags: ["Java", "Infosys"], category: "skills" },
  { id: "programming-java", title: "Programming using Java", description: "Infosys Springboard course completion.", image: progJava, tags: ["Java", "Programming"], category: "skills" },
  { id: "dsa-java", title: "Data Structures & Algorithms using Java", description: "Infosys Springboard course completion for DSA.", image: dsaJava, tags: ["DSA", "Java"], category: "skills" },
  { id: "dbms-1", title: "Database Management System Part 1", description: "Infosys Springboard course completion.", image: dbms1, tags: ["Database", "DBMS"], category: "skills" },
  { id: "dbms-2", title: "Database Management System Part 2", description: "Infosys Springboard course completion.", image: dbms2, tags: ["Database", "DBMS"], category: "skills" },
  { id: "nosql-db", title: "Introduction to NoSQL Databases", description: "Infosys Springboard course completion.", image: noSql, tags: ["Database", "NoSQL"], category: "skills" },
  { id: "swe-agile", title: "Software Engineering & Agile", description: "Infosys Springboard course on Agile development.", image: sweAgile, tags: ["Agile", "Software Eng"], category: "skills" },
  { id: "swe-agile-2", title: "Software Engineering & Agile (Advanced)", description: "Advanced Agile development concepts.", image: sweAgile2, tags: ["Agile", "Software Eng"], category: "skills" },
  { id: "modern-ai", title: "Introduction to Modern AI", description: "Cisco Networking Academy certificate.", image: introModernAi, tags: ["AI", "Cisco"], category: "skills" },
  { id: "apply-ai", title: "Apply AI: Analyze Customer Reviews", description: "Cisco Networking Academy certificate for Applied AI.", image: applyAi, tags: ["AI", "Analysis"], category: "skills" },
  { id: "iot-digital", title: "Intro to IoT & Digital Transformation", description: "Cisco Networking Academy certificate.", image: introIot, tags: ["IoT", "Digital"], category: "skills" },
  { id: "cybersecurity", title: "Introduction to Cybersecurity", description: "Cisco Networking Academy course completion.", image: introCybersecurity, tags: ["Security", "Cisco"], category: "skills" },
  { id: "docker-learning", title: "Learning Docker", description: "LinkedIn Learning course completion.", image: learningDocker, tags: ["DevOps", "Docker"], category: "skills" },
  { id: "github-actions", title: "Practical GitHub Actions", description: "LinkedIn Learning course completion.", image: githubActions, tags: ["CI/CD", "GitHub"], category: "skills" },
  { id: "project-mgmt", title: "Practical GitHub Project Management", description: "LinkedIn Learning certificate.", image: projectMgmt, tags: ["Project Mgmt", "GitHub"], category: "skills" },
]

const certCategories = [
  { key: "all", label: "All" },
  { key: "hackathons", label: "Hackathons" },
  { key: "skills", label: "Courses" },
]

// ─── PAGE ───────────────────────────────────────────────────────────

export default function Index() {
  useLenis()
  const scrollProgress = useScrollProgress()
  const [certFilter, setCertFilter] = useState("all")
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }, [])

  const filteredCerts = certFilter === "all" ? certificates : certificates.filter(c => c.category === certFilter)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-zinc-200 dark:bg-zinc-800">
        <div className="h-full bg-accent transition-all duration-150" style={{ width: `${scrollProgress * 100}%` }} />
      </div>

      {/* ══════ HERO ══════ */}
      <section id="hero" className="scroll-mt-24 min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <Avatar className="w-28 h-28 sm:w-36 sm:h-36 mx-auto ring-4 ring-accent/20 ring-offset-4 ring-offset-background shadow-xl">
              <AvatarImage src="https://github.com/jattu8602.png" alt="Nitesh Chourasiya" className="object-cover" />
              <AvatarFallback className="text-3xl font-display bg-accent/10 text-accent">NC</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-card border border-border px-3 py-1 rounded-full shadow-md text-[10px] font-mono flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-foreground font-semibold">Open for Roles</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 text-foreground">
            Nitesh Chourasiya
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed max-w-xl mx-auto font-medium">
            AI & Full Stack Engineer · IoT & Hardware Developer · B.Tech CSE (AI & DS) @ LNCT Bhopal
          </p>
          <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span>Bhopal, Madhya Pradesh, India</span>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto mb-10 p-4 rounded-xl border border-border bg-card/60 backdrop-blur-sm">
            {[
              { value: "100K+", label: "Platform Views" },
              { value: "Top 5", label: "Hackathon / 2000+" },
              { value: "15+", label: "Live Repos & Apps" },
              { value: "AWS", label: "Certified Practitioner" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center p-1">
                <span className="font-display font-black text-xl sm:text-2xl text-accent">{stat.value}</span>
                <span className="text-[10px] font-mono uppercase text-muted-foreground mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" onClick={() => scrollTo("projects")} className="gap-2 font-mono text-sm shadow-lg hover:scale-105 transition-transform">
              <span>View Projects</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("journey")} className="gap-2 font-mono text-sm hover:scale-105 transition-transform">
              <Calendar className="w-4 h-4" />
              <span>My Journey</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ══════ ABOUT ══════ */}
      <section id="about" className="scroll-mt-20 max-w-2xl mx-auto px-6 mt-16">
        <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">About Me</h2>
        <div className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            I'm a <strong className="text-foreground">Computer Science Engineering</strong> student at{" "}
            <strong className="text-foreground">LNCT Bhopal</strong> specializing in{" "}
            <strong className="text-foreground">Artificial Intelligence & Data Science</strong>.
            My journey in technology is driven by curiosity — from low-level C/C++ to building intelligent ML models
            and full-stack web applications.
          </p>
          <p>
            I specialize in the <strong className="text-foreground">Next.js + TypeScript ecosystem</strong>, have
            hands-on experience with <strong className="text-foreground">ESP32 IoT hardware</strong>, and have
            successfully launched products reaching <strong className="text-foreground">100,000+ daily users</strong>.
            As a Frontend Developer Intern at <strong className="text-foreground">CalmChase @ Passiflora Resorts</strong>,
            I build production websites and WordPress solutions.
          </p>
          <p>
            Beyond coding, I'm an active <strong className="text-foreground">hackathon competitor</strong> — placing
            Top 5 out of 2,000+ teams at Kriyeta, winning 2nd Prize at the LNCT Website Competition, and earning
            Best AI/ML Solution at Testverse.
          </p>
          <p>
            With <strong className="text-foreground">15+ projects</strong> delivered across web development, IoT,
            and AI, I bring a disciplined, problem-solving mindset to every challenge.
          </p>
        </div>
      </section>

      {/* ══════ JOURNEY ══════ */}
      <section id="journey" className="scroll-mt-20 max-w-2xl mx-auto px-6 mt-20">
        <h2 className="text-xl font-bold tracking-tight text-foreground mb-6">Journey</h2>
        <div className="space-y-6">
          {journey.map((exp, idx) => (
            <div key={idx} className="flex gap-4 items-start group">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-3 h-3 rounded-full bg-accent/80 ring-2 ring-accent/20 mt-1.5" />
                {idx < journey.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
              </div>
              <div className="flex-1 min-w-0 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  <span className="text-xs text-muted-foreground font-medium shrink-0">
                    {exp.year}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-semibold mt-0.5">
                  {exp.company}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                  {exp.description}
                </p>
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="inline-flex items-center rounded bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ EDUCATION ══════ */}
      <section id="education" className="scroll-mt-20 max-w-2xl mx-auto px-6 mt-20">
        <h2 className="text-xl font-bold tracking-tight text-foreground mb-6">Education</h2>
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.school} className="flex gap-4 items-start group p-4 rounded-xl border border-border bg-card hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent font-bold text-sm">
                {edu.school.split(" ").map(w => w[0]).slice(0, 2).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-bold text-sm text-foreground">{edu.school}</h3>
                  <span className="text-xs text-muted-foreground font-medium shrink-0">{edu.period}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-0.5">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ SKILLS ══════ */}
      <section id="skills" className="scroll-mt-20 max-w-2xl mx-auto px-6 mt-20">
        <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map(({ name, icon: Icon, color }) => (
            <span key={name} className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground ring-1 ring-border transition-all hover:scale-105 cursor-default select-none shadow-sm">
              <Icon style={{ color }} className="w-3.5 h-3.5" />
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ══════ PROJECTS ══════ */}
      <section id="projects" className="scroll-mt-20 max-w-2xl mx-auto px-6 mt-24">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            My Projects
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground mb-3">
            Check out my latest work
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed">
            I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article key={project.title} className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:shadow-md transition-all duration-300 h-full">
              <div className="relative h-36 bg-gradient-to-br from-accent/5 to-accent/10 border-b border-border overflow-hidden shrink-0 flex items-center justify-center">
                <span className="font-display text-2xl font-black text-accent/30 tracking-tight">
                  {project.title.split(" ")[0]}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-foreground mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="inline-flex items-center rounded bg-secondary px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground border border-border/40">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold">
                    {project.links?.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-foreground text-background px-3 py-1.5 hover:opacity-90 transition-opacity shadow-sm cursor-pointer">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ══════ HONORS ══════ */}
      <section id="honors" className="scroll-mt-20 max-w-2xl mx-auto px-6 mt-24">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent mb-3 shadow-sm">
            Honors
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground mb-3">
            Competition Wins
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed">
            Hackathon victories, cash prizes, and national-level recognition.
          </p>
        </div>

        <div className="space-y-4">
          {honors.map((h) => (
            <div key={h.title} className="flex gap-4 items-start group p-4 rounded-xl border border-border bg-card hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent font-bold text-sm">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-bold text-sm text-foreground">{h.title}</h3>
                  <span className="text-xs text-accent font-semibold shrink-0">{h.rank}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{h.event}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">{h.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {h.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ CERTIFICATIONS ══════ */}
      <section id="certifications" className="scroll-mt-20 max-w-2xl mx-auto px-6 mt-24">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent mb-3 shadow-sm">
            Certifications
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground mb-3">
            Credentials & Awards
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed">
            Professional certifications, hackathon achievements, and course completions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {certCategories.map((cat) => (
            <button key={cat.key} onClick={() => setCertFilter(cat.key)} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              certFilter === cat.key
                ? "bg-foreground text-background shadow-md"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredCerts.map((cert) => (
            <div key={cert.id} onClick={() => setSelectedCert(cert)} className="group cursor-pointer rounded-xl border border-border bg-card overflow-hidden hover:shadow-md hover:border-accent/30 transition-all">
              <div className="aspect-[1.6/1] bg-secondary/50 overflow-hidden">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-xs text-foreground leading-snug line-clamp-2">{cert.title}</h3>
                <p className="text-[10px] text-muted-foreground mt-1 line-clamp-1">{cert.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ CONTACT ══════ */}
      <section id="contact" className="scroll-mt-20 max-w-2xl mx-auto px-6 mt-24 mb-36">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent mb-3 shadow-sm">
            Contact
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground mb-3">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed mb-6">
            Want to chat? Reach out via email or connect on GitHub or LinkedIn.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
            <a href="https://github.com/jattu8602" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-4 h-4" /> @jattu8602
            </a>
            <span className="text-border hidden sm:inline">|</span>
            <a href="https://www.linkedin.com/in/nitesh-chourasiya-a66715292/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-4 h-4" /> Nitesh Chourasiya
            </a>
            <span className="text-border hidden sm:inline">|</span>
            <a href="https://niteshjatin.me" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink className="w-4 h-4" /> niteshjatin.me
            </a>
          </div>
        </div>
      </section>

      {/* ══════ DOCK ══════ */}
      <Dock />

      {/* ══════ CERT MODAL ══════ */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedCert(null)}>
          <div className="relative w-full max-w-3xl max-h-[85vh] bg-card border border-border rounded-xl p-6 shadow-2xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedCert(null)} className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-accent hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
            <div className="mb-4 pr-8">
              <h3 className="font-bold text-lg text-foreground">{selectedCert.title}</h3>
              <div className="flex flex-wrap gap-1 mt-2">
                {selectedCert.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground font-medium">{tag}</span>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-border bg-black/5 p-1">
              <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto max-h-[55vh] object-contain mx-auto" />
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">{selectedCert.description}</p>
          </div>
        </div>
      )}

    </div>
  )
}
