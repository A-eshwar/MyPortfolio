import { useEffect, useState, useRef } from "react";
import profile from "@/assets/profile.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaServer,
  FaRobot,
  FaTools,
  FaTrophy,
  FaMedal,
  FaCertificate,
  FaAward,
  FaBriefcase,
  FaGraduationCap,
  FaStar,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaLaptopCode,
  FaChartBar,
  FaChartLine,
  FaDatabase,
  FaJsSquare,
  FaSyncAlt,
} from "react-icons/fa";
import { SiCodeforces, SiCodechef } from "react-icons/si";

export default function Index() {
  const [active, setActive] = useState("home");
  const [platform, setPlatform] = useState("leetcode");
  const [heroVisible, setHeroVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  },
  {
    rootMargin: "-120px 0px -40% 0px", threshold: 0.25
  }
);


    sections.forEach((sec) => observer.observe(sec));

    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      animationObserver.observe(el);
    });

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        animationObserver.unobserve(el);
      });
    };
  }, []);

  const scrollCertifications = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 220;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-card/80 backdrop-blur-md shadow-card z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl text-primary">ESHWAR AMARAVADI</h1>

          <nav className="hidden md:flex space-x-8">
            {["home", "about", "skills", "achievements", "coding-platforms", "projects", "contact"].map((x) => (
              <a
                key={x}
                href={`#${x}`}
                className={`relative font-medium transition-all duration-300
                  ${active === x ? "text-primary scale-105" : "text-muted-foreground hover:text-primary"}
                `}
              >
                {x.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                {active === x && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary rounded animate-pulse-glow"></span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HOME */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-28">
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-20 lg:gap-40 px-8 items-center">
          <div
            className={`transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">ESHWAR</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-primary mb-6 font-medium">
              Aspiring Software Engineer
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-lg">
              Java Developer | ML & Analytics Learner
            </p>
            <div className="flex gap-6">  
              <SocialIcon icon={<FaGithub />} link="https://github.com/A-eshwar" />
              <SocialIcon icon={<FaLinkedin />} link="https://www.linkedin.com/in/eshwar-amaravadi/"/>
              <SocialIcon icon={<FaEnvelope />} link="https://mail.google.com/mail/?view=cm&fs=1&to=amaravadhieshwar@gmail.com" />
            </div>
          </div>

          <div
            className={`flex justify-center transition-all duration-1000 delay-200 ${
              heroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <div className="w-80 lg:w-96 h-[28rem] lg:h-[32rem] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-card-hover flex items-center justify-center">
              <img
                src={profile} 
                alt="Bunny profile"
                className="w-56 h-56 lg:w-64 lg:h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Me">
  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">

    <Card title="Who Am I">
      <p className="text-muted-foreground text-[15px] leading-relaxed">
        I am an <span className="text-blue-500 font-semibold">aspiring Software Engineer</span> with a strong interest in building 
        <span className="text-slate-900 font-medium"> scalable and user-focused applications</span>. 
        I enjoy solving real-world problems by combining logical thinking with clean and efficient code. 
        Along with technical skills, I value <span className="text-slate-900 font-medium">consistency, collaboration, and ownership</span>, 
        which helps me contribute effectively in team-based environments.
      </p>
    </Card>

    <Card title="Technical Strength">
      <p className="text-muted-foreground text-[15px] leading-relaxed">
        I specialize in building <span className="text-blue-500 font-semibold">data-driven and backend-focused applications</span> using 
        <span className="text-slate-900 font-medium"> Java, SQL, and Python</span>, with exposure to machine learning concepts. 
        I work with tools and technologies including <span className="text-slate-900 font-medium">Spring Boot, RESTful APIs</span>, 
        relational databases, Python-based data libraries, and data visualization tools to analyze and present insights effectively.
      </p>
    </Card>

    <Card title="Academic Excellence">
      <p className="text-muted-foreground text-[15px] leading-relaxed">
        I am currently pursuing BTech in Computer Science and Engineering (Data Science) 
        at CVR College of Engineering, with a <span className="text-blue-500 font-bold">CGPA of 9.6</span>. 
        My academic journey highlights <span className="text-slate-900 font-medium">consistent performance, strong discipline</span>, 
        and a growing interest in data analytics, data-driven decision-making, and emerging data technologies.
      </p>
    </Card>

    <Card title="Vision & Mindset">
      <p className="text-muted-foreground text-[15px] leading-relaxed">
        I believe in <span className="text-blue-500 font-semibold">steady growth</span> through consistent learning and practical application. 
        I actively enhance my skills by working on projects, practicing on coding platforms, and exploring new tools. 
        My goal is to develop into a <span className="text-slate-900 font-medium">well-rounded software professional</span> who builds 
        reliable, data-driven, and impactful solutions that address real-world needs.
      </p>
    </Card>

  </div>
</Section>

      {/* SKILLS */}
<Section id="skills" title="Skills">
  <div className="max-w-6xl mx-auto px-4">
    {/* Combined Grid: 3 on top, 2 centered below */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
      
      <SkillCard 
        title="Programming Languages" 
        icon={<FaCode />} 
        skills={["Java (Core)", "Python", "C", "R", "SQL", "PL/SQL", "JavaScript"]} 
      />

      <SkillCard 
        title="Web Development" 
        icon={<FaLaptopCode />} 
        skills={["HTML", "CSS", "JavaScript", "React.js", "Web Applications"]} 
      />

      <SkillCard 
        title="Backend Development" 
        icon={<FaServer />} 
        skills={["Node.js", "Express.js", "Spring Boot", "JDBC", "REST APIs", "Data Structures"]} 
      />

      {/* Centering logic for bottom row while maintaining height */}
      <div className="lg:col-start-1 lg:translate-x-1/2 w-full">
        <SkillCard 
          title="Data Analytics" 
          icon={<FaChartLine />} 
          skills={["Python", "NumPy", "Pandas", "Power BI", "Data Visualization", "Excel"]} 
        />
      </div>

      <div className="lg:col-start-2 lg:translate-x-1/2 w-full">
        <SkillCard 
          title="Tools & Technologies" 
          icon={<FaTools />} 
          skills={["Git", "GitHub", "Maven", "Jenkins", "Postman", "AutoCAD"]} 
        />
      </div>

    </div>
  </div>
</Section>
      {/* ACHIEVEMENTS */}
      <Section id="achievements" title="Achievements">
        <h4 className="font-semibold text-xl mb-6 flex items-center justify-center gap-3">
          <FaBriefcase className="text-primary" />
          Internships
        </h4>
        <div className="flex flex-wrap justify-center gap-5 mb-12">
          <AchievementCard
            icon={<FaTrophy />}
            title="Infosys Springboard"
            subtitle="Virtual Internship Program"
            description="Enterprise software development training"
            variant="gold"
            certificateLink="https://example.com/infosys-certificate"
          />
          <AchievementCard
            icon={<FaBriefcase />}
            title="Altair Rapid Miner"
            subtitle="Data Science Master Virtual Internship"
            description="10-week comprehensive program focused on data science mastery"
            variant="emerald"
            certificateLink="https://drive.google.com/file/d/1yezyd_W0qXRPm9m2oXLngoXSpINSIF_N/view?usp=sharing"
          />
          <AchievementCard
            icon={<FaLaptopCode />} 
            title="Alteryx SparkED"
            subtitle="Data Analytics Process Automation Internship"
            description="10-week specialized automation program"
            variant="gold"
            certificateLink="https://drive.google.com/file/d/1PbLDMhdSDqSgyt08KKUO0GtFGP081neH/view?usp=sharing"
            />
        </div>
        <h4 className="font-semibold text-xl mb-6 flex items-center justify-center gap-3">
          <FaCertificate className="text-primary" />
          Certifications & Recognition
        </h4>

        {/* Horizontal Scrolling Certifications */}
        <div className="relative max-w-5xl mx-auto">
          <button
            onClick={() => scrollCertifications("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card shadow-card hover:shadow-card-hover transition-all -ml-4"
          >
            <FaChevronLeft className="text-primary" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 px-8 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <CertificationBadge
              icon={<FaGraduationCap />}
              title="Java Certification"
              issuer="NPTEL"
              stars={5}
              link="https://drive.google.com/file/d/19TyGlAzjmoXDRxLi69p6pqPAIJlYAW4Z/view?usp=sharing"
            />
            <CertificationBadge
              icon={<FaDatabase />}
              title="Database Design & SQL"
              issuer="Oracle"
              stars={5}
              link="https://drive.google.com/file/d/1s0lqUbP2-0QDFgggzlPPdEbv_XsqldX4/view?usp=sharing"
            />
            <CertificationBadge
              icon={<FaJsSquare />}
              title="JavaScript Certified"
              issuer="GeeksforGeeks"
              stars={5}
              link="https://drive.google.com/file/d/1BFzoRy1PiBVE88_uX9js7zISNybpUYZW/view?usp=sharing"
            />
            <CertificationBadge
              icon={<FaCode />}
              title="DS through Java"
              issuer="Infosys Springboard"
              stars={5}
              link="https://drive.google.com/file/d/1YHJ_OFphlkXwoYHkbMw9x9DuGC7zPxIL/view?usp=sharing"
            />
            <CertificationBadge
              icon={<FaSyncAlt />}
              title="Agile Software Dev"
              issuer="Infosys Springboard"
              stars={5}
              link="https://drive.google.com/file/d/1YHJ_OFphlkXwoYHkbMw9x9DuGC7zPxIL/view?usp=sharing"
            />
          </div>
          <button
            onClick={() => scrollCertifications("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card shadow-card hover:shadow-card-hover transition-all -mr-4"
          >
            <FaChevronRight className="text-primary" />
          </button>
        </div>

        <h4 className="font-semibold text-xl mt-12 mb-6 flex items-center justify-center gap-3">
          <FaAward className="text-primary" />
          Participation & Awards
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <ParticipationCard 
          icon={<FaTrophy />} 
          title="Flipkart GRID 7.0" 
          achievement="Semi-Finalist" 
          link="https://drive.google.com/file/d/1vD_WHewgzRdor0wVyxVVJFtE-HPq8sEC/view?usp=sharing" 
        />
        <ParticipationCard 
          icon={<FaCertificate />} 
          title="Adobe India Hackathon" 
          achievement="Participant" 
          link="https://drive.google.com/file/d/1UQEOg0D_duU73KG61ubkJ_giZVGoTMl5/view?usp=sharing" 
        />
        <ParticipationCard 
          icon={<FaMedal />} 
          title="Naukri Campus Young Turks" 
          achievement="Merit Certificate" 
          link="https://drive.google.com/file/d/1xiaSgzymq6YF754JH9ONbE1Zbo7CgDVK/view?usp=sharing" 
        />
        <ParticipationCard 
          icon={<FaCheckCircle />} 
          title="NASA Space Settlement" 
          achievement="Participant" 
          link="https://drive.google.com/file/d/1nBQgHITGPpdVBVRENV89wzQRdaHfINYy/view?usp=sharing" 
        />
      </div>
      </Section>

      {/* CODING PLATFORMS */}
      <Section id="coding-platforms" title="Coding Platforms">
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button
            onClick={() => setPlatform("leetcode")}
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
              platform === "leetcode"
                ? "gradient-primary text-primary-foreground shadow-card-hover"
                : "bg-card shadow-card hover:shadow-card-hover"
            }`}
          >
            LeetCode
          </button>

          <button
            onClick={() => setPlatform("hackerrank")}
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
              platform === "hackerrank"
                ? "gradient-emerald text-primary-foreground shadow-emerald"
                : "bg-card shadow-card hover:shadow-card-hover"
            }`}
          >
            HackerRank
          </button>

          <button
            onClick={() => setPlatform("other")}
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
              platform === "other"
                ? "gradient-gold text-primary-foreground shadow-gold"
                : "bg-card shadow-card hover:shadow-card-hover"
            }`}
          >
            Other Platforms
          </button>
        </div>

        {platform === "leetcode" && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 animate-fade-in max-w-5xl mx-auto">
            <PlatformBadgeCard title="50 Days Challenge" icon={<FaMedal className="text-2xl" />} description="Solved LeetCode problems over 50days" variant="primary" />
            <PlatformBadgeCard title="100 Days Challenge" icon={<FaTrophy className="text-2xl" />} description="Solved LeetCode problems over 100days" variant="primary" />
            <PlatformBadgeCard title="Rating: 1600+" icon={<FaStar className="text-2xl" />} description="Competitive rating" variant="primary" />
            <PlatformBadgeCard title="LeetCode Profile" icon={<FaExternalLinkAlt className="text-2xl" />} description="View submissions" variant="primary" link="https://leetcode.com/u/eshwar7942/" />
          </div>
        )}

        {platform === "hackerrank" && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 animate-fade-in max-w-5xl mx-auto">
            <PlatformBadgeCard title="Problem Solving" icon={<FaCode className="text-2xl" />} description="DSA & Algorithms" variant="emerald" />
            <PlatformBadgeCard title="Java – Bronze Level" icon={<FaCertificate className="text-2xl" />} description="Core Java proficiency" variant="emerald" />
            <PlatformBadgeCard title="3 Star Badge" icon={<FaStar className="text-2xl" />} description="Problem solving badge" variant="emerald" />
            <PlatformBadgeCard title="HackerRank Profile" icon={<FaExternalLinkAlt className="text-2xl" />} description="View profile" variant="emerald" link="https://www.hackerrank.com/profile/amaravadhieshwar" />
          </div>
        )}

        {platform === "other" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in max-w-3xl mx-auto">
            <PlatformBadgeCard title="Codeforces" icon={<SiCodeforces className="text-2xl" />} description="Rating: 900+" variant="gold" link="https://codeforces.com/profile/amaravadhieshwar" fullWidth />
            <PlatformBadgeCard title="CodeChef" icon={<SiCodechef className="text-2xl" />} description="Rating: 1400+ (3★)" variant="gold" link="https://www.codechef.com/users/many_jaguar_41" fullWidth />
          </div>
        )}
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Select Your Companion",
              desc: "A responsive pet adoption site featuring card-based layouts and sleek CSS styling.",
              link: "https://choose-your-pet2.netlify.app"
            },
            {
              title: "Mini Game Station",
              desc: "A centralized gaming hub with Firebase auth featuring 2048, Minesweeper, and more.",
              link: "https://mini-challenge.netlify.app/"
            },
            {
              title: "AI Budget Advisor & Tracker",
              desc: "Smart financial tool that analyzes transactions to provide personalized budget control.",
              link: "https://github.com/A-eshwar/AI-Budget-Tracker-Advisor"
            },
            {
              title: "Heart Disease Prediction (ML)",
              desc: "Predicts cardiovascular risks with 94% accuracy using ensemble learning and Gradio.",
              link: "https://github.com/A-eshwar/RTFP"
            }
          ].map((p) => (
            <ProjectCard key={p.title} title={p.title} description={p.desc} link={p.link} />
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ContactCard
              icon={<FaEnvelope />}
              title="Email"
              text="@amaravadhieshwar"
              description="Drop me a message anytime"
              link="https://mail.google.com/mail/?view=cm&fs=1&to=amaravadhieshwar@gmail.com"
              buttonText="Send Message"
            />

            <ContactCard
              icon={<FaLinkedin />}
              title="LinkedIn"
              text="@eshwar-amaravadi"
              description="Professional network & updates"
              link="https://www.linkedin.com/in/eshwar-amaravadi/"
              buttonText="Connect on LinkedIn"
            />

            <ContactCard
              icon={<FaGithub />}
              title="GitHub"
              text="@   A-eshwar"
              description="Projects & code repositories"
              link="https://github.com/A-eshwar"
              buttonText="View Projects"
            />
          </div>
        </Section>
    </div>
  );
}


const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-6xl mx-auto px-8 py-24">
    <h3 className="animate-on-scroll text-3xl font-bold text-primary mb-12 text-center">{title}</h3>
    <div className="animate-on-scroll">{children}</div>
  </section>
);


import { LucideIcon } from 'lucide-react';

const Card = ({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) => (
  <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-50">
    <div className="flex flex-col">
      {title && (
        <div className="mb-5">
          <h4 className="text-xl font-bold text-blue-500 tracking-tight">
            {title}
          </h4>
          <div className="mt-3 h-[1px] w-full bg-blue-100" />
        </div>
      )}

      {/* Content Section */}
      <div className="text-slate-500 text-[15px] leading-relaxed text-left font-normal">
        {children}
      </div>
      
    </div>
  </div>
);
const SkillCard = ({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: string[] }) => (
  <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 group border border-slate-50 flex flex-col h-full">
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-500 text-2xl mb-5 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-blue-500 mb-4 tracking-tight">{title}</h4>
    <div className="flex flex-wrap gap-2 mt-auto">
      {skills.map((skill, index) => (
        <span 
          key={index} 
          className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-lg border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);
const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-stretch">
          <div className="lg:col-span-2">
            <SkillCard 
              title="Programming Languages" 
              icon={<FaCode />} 
              skills={["Java (Core)", "Python", "C", "R", "SQL", "PL/SQL", "JavaScript"]} 
            />
          </div>

          <div className="lg:col-span-2">
            <SkillCard 
              title="Web Development" 
              icon={<FaLaptopCode />} 
              skills={["HTML", "CSS", "JavaScript", "React.js", "Web Applications"]} 
            />
          </div>

          <div className="lg:col-span-2">
            <SkillCard 
              title="Backend Development" 
              icon={<FaServer />} 
              skills={["Node.js", "Express.js", "Spring Boot", "JDBC", "REST APIs", "Data Structures"]} 
            />
          </div>

          {/* BOTTOM ROW - Centered using col-start */}
          <div className="lg:col-span-2 lg:col-start-2">
            <SkillCard 
              title="Data Analytics" 
              icon={<FaChartBar />} 
              skills={["Python", "NumPy", "Pandas", "Power BI", "Data Visualization", "Excel"]} 
            />
          </div>

          <div className="lg:col-span-2 lg:col-start-4">
            <SkillCard 
              title="Tools & Technologies" 
              icon={<FaTools />} 
              skills={["Git", "GitHub", "Maven", "Jenkins", "Postman", "AutoCAD"]} 
            />
          </div>

        </div>
      </div>
    </section>
  );
};
const AchievementCard = ({
  icon,
  title,
  subtitle,
  description,
  variant = "gold",
  certificateLink,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  variant?: "gold" | "emerald";
  certificateLink?: string;
}) => (
  <div
    className={`relative bg-card p-6 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] text-center w-72 h-52 flex flex-col justify-between border border-border ${
      variant === "gold" ? "shadow-card hover:shadow-gold" : "shadow-card hover:shadow-emerald"
    }`}
  >
    <div
      className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-20 ${
        variant === "gold" ? "gradient-gold" : "gradient-emerald"
      }`}
    />
    <div>
      <div
        className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 text-primary-foreground mx-auto ${
          variant === "gold" ? "gradient-gold shadow-gold" : "gradient-emerald shadow-emerald"
        }`}
      >
        <span className="text-lg">{icon}</span>
      </div>
      <h4 className="font-bold text-sm mb-1">{title}</h4>
      <p className={`text-xs font-medium mb-1 ${variant === "gold" ? "text-gold" : "text-emerald"}`}>
        {subtitle}
      </p>
      <p className="text-muted-foreground text-xs">{description}</p>
    </div>
    {certificateLink && (
      <a
        href={certificateLink}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center justify-center gap-1.5 text-xs font-medium transition-all hover:gap-2 ${
          variant === "gold" ? "text-gold hover:text-gold/80" : "text-emerald hover:text-emerald/80"
        }`}
      >
        <FaExternalLinkAlt className="text-[10px]" />
        View Certificate
      </a>
    )}
  </div>
);

const CertificationBadge = ({
  icon,
  title,
  issuer,
  stars,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  issuer: string;
  stars: number;
  link?: string;
}) => (
  <div className="min-w-[200px] bg-card p-4 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] text-center group">
    <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-3 group-hover:scale-110 transition-transform">
      <span className="text-xl text-primary-foreground">{icon}</span>
      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-accent flex items-center justify-center">
        <FaCheckCircle className="text-primary-foreground text-[8px]" />
      </div>
    </div>
    <h4 className="font-semibold text-sm mb-1">{title}</h4>
    <p className="text-muted-foreground text-[10px] mb-2">{issuer}</p>
    <div className="flex justify-center gap-0.5 mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={`text-[10px] ${i < stars ? "text-gold" : "text-muted"}`} />
      ))}
    </div>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-all hover:gap-2"
      >
        <FaExternalLinkAlt className="text-[10px]" />
        View
      </a>
    )}
  </div>
);

const ParticipationCard = ({
  icon,
  title,
  achievement,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  achievement: string;
  link?: string;
}) => (
  <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center group flex flex-col h-full">
    <div className="text-primary text-2xl mb-3 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="flex-grow">
      <h4 className="font-semibold text-sm mb-1">{title}</h4>
      <p className="font-bold text-lg text-primary mb-2">{achievement}</p>
    </div>

    {link && (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mt-4"
      >
        <FaExternalLinkAlt className="text-xs" />
        View
      </a>
    )}
  </div>
);

const PlatformBadgeCard = ({
  title,
  icon,
  description,
  variant = "gold",
  link,
  fullWidth = false,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  variant?: "gold" | "emerald" | "primary";
  link?: string;
  fullWidth?: boolean;
}) => (
  <div className={`bg-card p-5 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] group text-center border border-border ${fullWidth ? "w-full" : ""}`}>
    <div
      className={`relative mx-auto mb-3 h-14 w-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${
        variant === "gold"
            ? "gradient-gold shadow-gold"
            : variant === "emerald"
            ? "gradient-emerald shadow-emerald"
            : "gradient-primary shadow-card-hover"
      }`}
    >
      <span className="text-primary-foreground">{icon}</span>
    </div>
    <h4 className="font-semibold text-sm mb-1">{title}</h4>
    <p className="text-xs text-muted-foreground mb-2">{description}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-1 text-xs font-medium transition-all hover:gap-1.5 ${
          variant === "gold"
              ? "text-gold hover:text-gold/80"
              : variant === "emerald"
              ? "text-emerald hover:text-emerald/80"
              : "text-primary hover:text-primary/80"
        }`}
      >
        <FaExternalLinkAlt className="text-[10px]" />
        Visit
      </a>
    )}
  </div>
);

const ProjectCard = ({ title, description, link }: { title: string, description: string, link: string }) => (
  <div className="bg-card p-10 rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 group text-center">
    <h4 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{title}</h4>
    <p className="text-muted-foreground mb-6 text-sm">
      {description}
    </p>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block px-5 py-2 gradient-primary text-primary-foreground rounded-lg hover:shadow-card-hover transition-all duration-300"
    >
      View Project
    </a>
  </div>
);
const ContactCard = ({icon,title,text,description,link,buttonText,}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  description: string;
  link: string;
  buttonText: string;
}) => (
  <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between">
    
    {/* TOP CONTENT */}
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary text-xl">
          {icon}
        </div>
        <h4 className="font-semibold text-lg">{title}</h4>
      </div>

      <p className="font-medium mb-1">{text}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>

    {/* BUTTON */}
    <a
      href={link}
      target={link.startsWith("mailto") ? "_self" : "_blank"}
      rel="noreferrer"
      className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-lg gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
    >
      {buttonText}
    </a>
  </div>
);

const SocialIcon = ({ icon, link }: { icon: React.ReactNode; link?: string }) => (
  <a href={link} target="_blank" rel="noreferrer" className="inline-block">
    <div className="p-4 rounded-full bg-card shadow-card hover:shadow-card-hover hover:scale-110 transition-all duration-300 text-primary text-xl cursor-pointer">
      {icon}
    </div>
  </a>
);
