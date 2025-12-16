import { useEffect, useState, useRef } from "react";
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
      { threshold: 0.6 }
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
          <h1 className="font-bold text-xl text-primary">Bunny.dev</h1>

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
              Hi, I'm <span className="text-primary">Bunny</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-accent-foreground mb-6 font-medium">Full-Stack Developer</h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-lg">
              I build scalable, secure, and intelligent applications using Java, Spring Boot, React, and Machine
              Learning.
            </p>

            <div className="flex gap-6">
              <SocialIcon icon={<FaGithub />} />
              <SocialIcon icon={<FaLinkedin />} />
              <SocialIcon icon={<FaEnvelope />} />
            </div>
          </div>

          <div
            className={`flex justify-center transition-all duration-1000 delay-200 ${
              heroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <div className="w-80 lg:w-96 h-[28rem] lg:h-[32rem] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-card-hover flex items-center justify-center">
              <div className="text-8xl lg:text-9xl text-primary/50">👨‍💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card title="Who Am I" text="A passionate developer focused on real-world problem solving." />
          <Card title="Technical Strength" text="Strong in Java, Spring Boot, React, REST APIs." />
          <Card title="Academic Excellence" text="Strong CS fundamentals with consistent learning." />
          <Card title="Vision & Mindset" text="Growth-oriented, disciplined, and curious." />
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
          <SkillCard title="Web Development" icon={<FaCode />}>
            HTML, CSS, JavaScript, React
          </SkillCard>

          <SkillCard title="Backend" icon={<FaServer />}>
            Java, Spring Boot, REST APIs
          </SkillCard>

          <SkillCard title="Machine Learning" icon={<FaRobot />}>
            Python, ML Models, Streamlit
          </SkillCard>

          <SkillCard title="Tools" icon={<FaTools />}>
            Git, GitHub, VS Code, Postman
          </SkillCard>
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
            title="Industry Internship"
            subtitle="Hands-on Project Experience"
            description="Real-world applications with mentorship"
            variant="emerald"
            certificateLink="https://example.com/industry-certificate"
          />
          <AchievementCard
            icon={<FaLaptopCode />}
            title="Tech Startup Intern"
            subtitle="Full-Stack Development"
            description="Built production-ready web applications"
            variant="gold"
            certificateLink="https://example.com/startup-certificate"
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
              title="Java Certified"
              issuer="Oracle / Course Platform"
              stars={5}
              link="https://example.com/java-cert"
            />
            <CertificationBadge
              icon={<FaCode />}
              title="Full-Stack Development"
              issuer="Industry Recognized"
              stars={5}
              link="https://example.com/fullstack-cert"
            />
            <CertificationBadge
              icon={<FaRobot />}
              title="Machine Learning"
              issuer="Specialized Training"
              stars={4}
              link="https://example.com/ml-cert"
            />
            <CertificationBadge
              icon={<FaServer />}
              title="Spring Boot"
              issuer="Udemy / Coursera"
              stars={5}
              link="https://example.com/springboot-cert"
            />
            <CertificationBadge
              icon={<FaTools />}
              title="Git & GitHub"
              issuer="GitHub Learning"
              stars={4}
              link="https://example.com/git-cert"
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
          <ParticipationCard icon={<FaTrophy />} title="Smart India Hackathon" achievement="Finalist" link="https://example.com/sih-cert" />
          <ParticipationCard icon={<FaMedal />} title="Code Sprint 2024" achievement="Top 10" link="https://example.com/codesprint-cert" />
          <ParticipationCard icon={<FaCertificate />} title="Tech Workshop" achievement="Best Project" link="https://example.com/workshop-cert" />
          <ParticipationCard icon={<FaCheckCircle />} title="College Fest" achievement="Winner" link="https://example.com/fest-cert" />
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
            <PlatformBadgeCard title="50 Days Challenge" icon={<FaMedal className="text-2xl" />} description="50 consecutive days solved" variant="gold" />
            <PlatformBadgeCard title="100 Days Challenge" icon={<FaTrophy className="text-2xl" />} description="100-day consistency streak" variant="gold" />
            <PlatformBadgeCard title="Rating: 1600+" icon={<FaStar className="text-2xl" />} description="Competitive rating" variant="gold" />
            <PlatformBadgeCard title="LeetCode Profile" icon={<FaExternalLinkAlt className="text-2xl" />} description="View submissions" variant="gold" link="https://leetcode.com/yourusername" />
          </div>
        )}

        {platform === "hackerrank" && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 animate-fade-in max-w-5xl mx-auto">
            <PlatformBadgeCard title="Problem Solving" icon={<FaCode className="text-2xl" />} description="DSA & Algorithms" variant="emerald" />
            <PlatformBadgeCard title="Java Certified" icon={<FaCertificate className="text-2xl" />} description="Core Java proficiency" variant="emerald" />
            <PlatformBadgeCard title="5 Star Badge" icon={<FaStar className="text-2xl" />} description="Problem solving badge" variant="emerald" />
            <PlatformBadgeCard title="HackerRank Profile" icon={<FaExternalLinkAlt className="text-2xl" />} description="View profile" variant="emerald" link="https://hackerrank.com/yourusername" />
          </div>
        )}

        {platform === "other" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in max-w-3xl mx-auto">
            <PlatformBadgeCard title="Codeforces" icon={<SiCodeforces className="text-2xl" />} description="Rating: 1200+ (Pupil)" variant="gold" link="https://codeforces.com/profile/yourusername" fullWidth />
            <PlatformBadgeCard title="CodeChef" icon={<SiCodechef className="text-2xl" />} description="Rating: 1500+ (3★)" variant="gold" link="https://www.codechef.com/users/yourusername" fullWidth />
          </div>
        )}
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            "Select Your Companion",
            "Mini Game Station (HTML, CSS, JS)",
            "AI Budget Advisor & Tracker",
            "Heart Disease Prediction (ML)",
          ].map((p) => (
            <ProjectCard key={p} title={p} />
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ContactCard icon={<FaEnvelope />} text="yourmail@gmail.com" />
          <ContactCard icon={<FaLinkedin />} text="linkedin.com/in/yourprofile" />
          <ContactCard icon={<FaGithub />} text="github.com/yourusername" />
        </div>
      </Section>

      <footer className="text-center py-6 text-muted-foreground border-t border-border">
        © 2025 Bunny | Portfolio
      </footer>
    </div>
  );
}

/* COMPONENTS */

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-6xl mx-auto px-8 py-24">
    <h3 className="animate-on-scroll text-3xl font-bold text-primary mb-12 text-center section-title-glow">{title}</h3>
    <div className="animate-on-scroll">{children}</div>
  </section>
);

const Card = ({ title, text, children }: { title?: string; text?: string; children?: React.ReactNode }) => (
  <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 text-center">
    {title && <h4 className="font-semibold mb-2">{title}</h4>}
    {text && <p className="text-muted-foreground text-sm">{text}</p>}
    {children}
  </div>
);

const SkillCard = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="bg-card p-10 rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 text-center group">
    <div className="text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-muted-foreground text-sm">{children}</p>
  </div>
);

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
  <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center group">
    <div className="text-primary text-2xl mb-3 group-hover:scale-110 transition-transform">{icon}</div>
    <h4 className="font-semibold text-sm mb-1">{title}</h4>
    <p className="font-bold text-lg text-primary mb-2">{achievement}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
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
  variant?: "gold" | "emerald";
  link?: string;
  fullWidth?: boolean;
}) => (
  <div className={`bg-card p-5 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] group text-center border border-border ${fullWidth ? "w-full" : ""}`}>
    <div
      className={`relative mx-auto mb-3 h-14 w-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${
        variant === "gold" ? "gradient-gold shadow-gold" : "gradient-emerald shadow-emerald"
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
          variant === "gold" ? "text-gold hover:text-gold/80" : "text-emerald hover:text-emerald/80"
        }`}
      >
        <FaExternalLinkAlt className="text-[10px]" />
        Visit
      </a>
    )}
  </div>
);

const ProjectCard = ({ title }: { title: string }) => (
  <div className="bg-card p-10 rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 group text-center">
    <h4 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{title}</h4>
    <p className="text-muted-foreground mb-6 text-sm">
      A real-world project showcasing clean UI and practical problem-solving.
    </p>
    <button className="px-5 py-2 gradient-primary text-primary-foreground rounded-lg hover:shadow-card-hover transition-all duration-300">
      View Project
    </button>
  </div>
);

const ContactCard = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="bg-card p-10 rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 text-center group">
    <div className="text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <p className="font-medium">{text}</p>
  </div>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="p-4 rounded-full bg-card shadow-card hover:shadow-card-hover hover:scale-110 transition-all duration-300 text-primary text-xl cursor-pointer">
    {icon}
  </div>
);
