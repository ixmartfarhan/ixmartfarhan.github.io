import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Stars, Text } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown, ArrowLeft, ArrowUpRight, BrainCircuit, Check, ChevronRight, Clipboard,
  Code2, Command, Download, ExternalLink, Github, Globe2, Layers3, Linkedin, Mail,
  Menu, Moon, Network, Search, Send, ShieldCheck, Sparkles, Sun, Terminal, X, Zap
} from "lucide-react";
import * as THREE from "three";
import "./styles.css";

const me = {
  name: "Mohd Farhan",
  username: "ixmartfarhan",
  email: "ixmartfarhan@gmail.com",
  github: "https://github.com/ixmartfarhan",
  linkedin: "https://www.linkedin.com/in/mohd-farhan-1b17b4298",
  oldPortfolio: "https://ixmartfarhan.github.io/Port-Folio-website/",
  location: "Gorakhpur, Uttar Pradesh, India",
  degree: "B.Tech — Artificial Intelligence & Machine Learning",
  headline: "Full Stack Developer building at the edge of AI and cybersecurity."
};

const projects = [
  {
    id: "nightwatch", title: "NightWatch", type: "Cybersecurity", year: "2026",
    description: "Security monitoring and analyst workflow platform with authentication, local persistence and an extensible SOC architecture.",
    detail: "A security-first application concept designed around analyst workflows. The architecture leaves room for log ingestion, anomaly detection, threat intelligence, RBAC and incident response tooling.",
    tech: ["Python", "Flask", "SQLite", "Security"],
    color: "#8b5cf6", glyph: "◈", featured: true
  },
  {
    id: "phishguard", title: "PhishGuard", type: "Cybersecurity", year: "2025",
    description: "Browser-extension phishing detection workflow backed by a local FastAPI inference service.",
    detail: "PhishGuard connects a browser extension to a local FastAPI endpoint for URL classification, confidence scoring and an explainable blocked-link experience.",
    tech: ["FastAPI", "Python", "ML", "Chrome Extension"],
    color: "#34d399", glyph: "⌁", featured: true
  },
  {
    id: "intellivibe", title: "IntelliVibe", type: "AI / ML", year: "2024",
    description: "Emotionally aware interview mentor combining facial and voice signals to make practice more adaptive.",
    detail: "A multimodal AI project exploring computer vision and speech features in an interview-practice workflow, with a web UI and Python backend.",
    tech: ["TensorFlow", "OpenCV", "librosa", "Flask"],
    color: "#22d3ee", glyph: "✦", featured: true
  },
  {
    id: "facelogix", title: "FaceLogix", type: "AI / ML", year: "2025",
    description: "Facial-attendance prototype exploring computer-vision pipelines and a modern React frontend.",
    detail: "A practical CV prototype built while experimenting with face recognition, attendance flows and a React/Vite interface.",
    tech: ["React", "Vite", "OpenCV", "face-recognition"],
    color: "#60a5fa", glyph: "◎"
  },
  {
    id: "razorpay", title: "Razorpay Clone", type: "Web", year: "2024",
    description: "Responsive frontend recreation focused on layout systems, component structure and visual fidelity.",
    detail: "A frontend practice build demonstrating responsive CSS, navigation, cards, reusable UI patterns and polished visual hierarchy.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "#f472b6", glyph: "▣"
  },
  {
    id: "soc", title: "AI Cybersecurity Analyst", type: "Cybersecurity", year: "UPCOMING",
    description: "Major-project direction: AI-assisted SOC automation with anomaly detection and threat intelligence.",
    detail: "The planned platform combines log ingestion, anomaly detection, AI threat intelligence, malware/URL classification, SOC dashboards, RBAC and attack simulation.",
    tech: ["React", "FastAPI", "ML", "SIEM", "RBAC"],
    color: "#fb923c", glyph: "⬡"
  }
];

const skillGroups = [
  ["01", "FULL STACK", "React · JavaScript · HTML/CSS · Vite · Tailwind · Node.js · Express"],
  ["02", "PYTHON / BACKEND", "Python · Flask · FastAPI · REST APIs · SQLite · Uvicorn"],
  ["03", "AI / ML", "TensorFlow · PyTorch · OpenCV · Transformers · librosa · NumPy · Pandas"],
  ["04", "SECURITY", "Linux · Networking · Nmap · Wireshark · Burp Suite · Web Security · Forensics"],
  ["05", "TOOLING", "Git · GitHub · VS Code · Jupyter · Chrome Extensions · Docker fundamentals"]
];

function Core3D({ reduced }) {
  const group = useRef();
  const core = useRef();
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * (reduced ? 0.04 : 0.12);
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.12;
    if (core.current) core.current.rotation.z -= delta * (reduced ? 0.08 : 0.35);
  });
  return (
    <group ref={group}>
      <Float speed={reduced ? 0.2 : 1.2} rotationIntensity={reduced ? 0.1 : 0.35} floatIntensity={reduced ? 0.15 : 0.7}>
        <mesh ref={core} scale={1.35}>
          <icosahedronGeometry args={[1, 3]} />
          <MeshDistortMaterial color="#5ee7ff" emissive="#087c9a" emissiveIntensity={1.7} roughness={0.18} metalness={0.85} distort={0.25} speed={1.6} />
        </mesh>
      </Float>
      <mesh rotation={[Math.PI / 2.2, 0.2, 0]}>
        <torusGeometry args={[1.9, 0.018, 8, 120]} />
        <meshBasicMaterial color="#61a5ff" transparent opacity={0.8} />
      </mesh>
      <mesh rotation={[0.3, Math.PI / 2.5, 0]}>
        <torusGeometry args={[2.25, 0.012, 8, 120]} />
        <meshBasicMaterial color="#32e6b0" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[1.1, 0.3, 0]}>
        <torusGeometry args={[2.65, 0.008, 8, 120]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.45} />
      </mesh>
      <Text position={[0, -3.2, 0]} fontSize={0.17} color="#a9bad8" anchorX="center">
        FARHAN // ENGINEERING CORE
      </Text>
    </group>
  );
}

function Scene({ reduced }) {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.45} />
      <pointLight position={[3, 3, 4]} color="#4f9dff" intensity={18} />
      <pointLight position={[-4, -2, 2]} color="#21e6bd" intensity={10} />
      <Suspense fallback={null}>
        <Stars radius={70} depth={30} count={reduced ? 500 : 1600} factor={2.2} saturation={0.3} fade speed={reduced ? 0 : 0.35} />
        <Core3D reduced={reduced} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={!reduced} autoRotateSpeed={0.25} />
    </Canvas>
  );
}

function App() {
  const [dark, setDark] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [palette, setPalette] = useState(false);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [project, setProject] = useState(null);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState("");
  const [github, setGithub] = useState(null);
  const [reduced, setReduced] = useState(false);
  const [form, setForm] = useState({name:"",email:"",message:""});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, [dark]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${me.username}`)
      .then(r => r.ok ? r.json() : null)
      .then(setGithub)
      .catch(() => {});
  }, []);

  useEffect(() => {
    const key = e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setPalette(true); }
      if (e.key === "Escape") { setPalette(false); setProject(null); setMobile(false); }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, []);

  const filtered = useMemo(() => projects.filter(p =>
    (filter === "All" || p.type === filter) &&
    `${p.title} ${p.description} ${p.tech.join(" ")}`.toLowerCase().includes(search.toLowerCase())
  ), [filter, search]);

  const nav = id => {
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
    setMobile(false); setPalette(false);
  };

  const notify = msg => { setToast(msg); setTimeout(() => setToast(""), 2200); };

  const copy = async () => {
    await navigator.clipboard.writeText(me.email);
    setCopied(true); notify("Email copied");
    setTimeout(() => setCopied(false), 1800);
  };

  const resume = () => {
    const txt = `MOHD FARHAN\nFull Stack Developer • AI/ML Enthusiast • Cybersecurity Learner\n${me.location}\n${me.email}\n\nEDUCATION\n${me.degree} — Buddha Institute of Technology, Gorakhpur\n\nCORE SKILLS\n${skillGroups.map(x=>`${x[1]}: ${x[2]}`).join("\n")}\n\nSELECTED PROJECTS\n${projects.map(p=>`${p.title} — ${p.description}`).join("\n")}\n\nLINKS\nGitHub: ${me.github}\nLinkedIn: ${me.linkedin}`;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([txt], {type:"text/plain"}));
    a.download = "Mohd-Farhan-Resume.txt"; a.click(); URL.revokeObjectURL(a.href); notify("Resume downloaded");
  };

  const submit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    location.href = `mailto:${me.email}?subject=${subject}&body=${body}`;
    setSent(true); notify("Opening email client");
  };

  return (
    <div className="site">
      <div className="noise"/>
      <header className="topbar">
        <button className="logo" onClick={()=>nav("home")}><span>MF</span><div>MOHD FARHAN<small>ENGINEERING PORTFOLIO</small></div></button>
        <nav className={mobile ? "nav open" : "nav"}>
          {["home","work","stack","journey","contact"].map(x => <button key={x} onClick={()=>nav(x)}>{x}</button>)}
        </nav>
        <div className="top-actions">
          <button className="tiny" title="Command palette" onClick={()=>setPalette(true)}><Command size={17}/><kbd>⌘K</kbd></button>
          <button className="tiny" title="Theme" onClick={()=>setDark(v=>!v)}>{dark?<Sun size={17}/>:<Moon size={17}/>}</button>
          <button className="download" onClick={resume}><Download size={15}/> Resume</button>
          <button className="tiny mobile-toggle" onClick={()=>setMobile(v=>!v)}>{mobile?<X/>:<Menu/>}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero2">
          <div className="hero2-copy">
            <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="availability"><span/> AVAILABLE FOR INTERNSHIPS · PLACEMENTS · COLLABORATION</motion.div>
            <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.1}}>I build systems<br/>that <em>think</em>, <em>ship</em><br/>and <em>defend.</em></motion.h1>
            <p>{me.headline}</p>
            <div className="hero-buttons"><button className="main-btn" onClick={()=>nav("work")}>Enter the lab <ArrowDown size={17}/></button><button className="line-btn" onClick={()=>nav("contact")}>Start a conversation <ArrowUpRight size={17}/></button></div>
            <div className="hero-meta"><span><ShieldCheck/> SECURITY</span><span><BrainCircuit/> AI / ML</span><span><Code2/> FULL STACK</span></div>
          </div>
          <div className="scene-shell">
            <div className="scene-label top">LIVE 3D SYSTEM <span>●</span></div>
            <div className="scene-label bottom">DRAG TO ROTATE · SCROLL TO EXPLORE</div>
            <Scene reduced={reduced}/>
          </div>
          <div className="scroll-cue"><span>SCROLL</span><div/></div>
        </section>

        <section className="proof-strip">
          <div><b>{github?.public_repos ?? "05+"}</b><span>PUBLIC REPOS</span></div>
          <div><b>{github?.followers ?? "—"}</b><span>GITHUB FOLLOWERS</span></div>
          <div><b>AI × SEC</b><span>CORE DIRECTION</span></div>
          <div><b>2026</b><span>BUILDING NOW</span></div>
        </section>

        <section id="work" className="block">
          <div className="section-top"><div><small>01 — SELECTED WORK</small><h2>Proof over promises.</h2></div><p>Projects are the strongest evidence of what I can actually build. Open any card for the engineering story.</p></div>
          <div className="work-tools"><div>{["All","Cybersecurity","AI / ML","Web"].map(x=><button className={filter===x?"active":""} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div><label><Search size={15}/><input placeholder="Find a project…" value={search} onChange={e=>setSearch(e.target.value)}/></label></div>
          <div className="work-grid">{filtered.map((p,i)=><motion.article layout initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className={`work-card ${p.featured?"featured":""}`} key={p.id} onClick={()=>setProject(p)}>
            <div className="card-top" style={{"--accent":p.color}}><span className="glyph">{p.glyph}</span><span>{p.year}</span><i/></div>
            <div className="card-body"><small>{p.type}</small><h3>{p.title}</h3><p>{p.description}</p><div className="chips">{p.tech.map(t=><span key={t}>{t}</span>)}</div><b className="case">OPEN CASE STUDY <ArrowUpRight size={15}/></b></div>
          </motion.article>)}</div>
        </section>

        <section id="stack" className="block stack-section">
          <div className="section-top"><div><small>02 — CAPABILITIES</small><h2>The stack behind it.</h2></div><p>Not a list of buzzwords — a working toolkit built through projects, labs and experiments.</p></div>
          <div className="stack-layout"><div className="stack-orbit"><div className="orbit-core"><Network size={32}/><span>STACK</span></div>{["React","Python","FastAPI","Linux","ML","Git","OpenCV","Security"].map((x,i)=><span className={`orbit-chip c${i}`} key={x}>{x}</span>)}</div>
          <div className="stack-list">{skillGroups.map(([n,title,text])=><div key={n} className="stack-row"><span>{n}</span><h3>{title}</h3><p>{text}</p><ChevronRight size={17}/></div>)}</div></div>
        </section>

        <section id="journey" className="block">
          <div className="section-top"><div><small>03 — TRAJECTORY</small><h2>Learning in public.</h2></div><p>From an AIML degree into hands-on full-stack engineering, then deeper into cybersecurity.</p></div>
          <div className="journey2">
            <div className="journey-card"><div className="year">2023</div><h3>B.Tech AIML begins</h3><p>Built foundations in programming, mathematics, AI/ML and computer science.</p></div>
            <div className="journey-card active"><div className="year">2024</div><h3>IntelliVibe + full-stack</h3><p>Started turning AI concepts into usable applications with Python backends and modern frontend work.</p></div>
            <div className="journey-card"><div className="year">2025</div><h3>Security becomes the direction</h3><p>Digital forensics internship, security labs, networking, web security and practical tooling.</p></div>
            <div className="journey-card"><div className="year">2026 →</div><h3>AI-powered cybersecurity</h3><p>Building NightWatch and planning a larger SOC automation platform for final-year work and placements.</p></div>
          </div>
          <div className="lab-terminal"><div className="term-head"><span>●</span><span>●</span><span>●</span><b>farhan@lab — zsh</b></div><div className="term-body"><p><i>farhan@lab</i>:~$ ./status</p><strong>FULL_STACK ............. ONLINE</strong><strong>AI_ML .................. EXPERIMENTING</strong><strong>CYBERSECURITY ........... LEARNING</strong><p><i>farhan@lab</i>:~$ ./next</p><strong className="green">BUILD → TEST → SECURE → SHIP</strong><span className="caret">█</span></div></div>
        </section>

        <section className="block philosophy"><div className="philosophy-card"><Sparkles/><h2>Make the portfolio itself<br/><em>evidence of the skill.</em></h2><p>That is why this version uses a real WebGL scene, live GitHub data, responsive interaction, command navigation and case-study content — not just decorative cards.</p></div></section>

        <section id="contact" className="block contact2">
          <div><small>04 — CONTACT</small><h2>Let's build<br/><em>something serious.</em></h2><p>Internship · Placement · Collaboration · Project discussion</p><div className="socials"><button onClick={copy}><Mail size={17}/>{me.email}{copied?<Check size={14}/>:<Clipboard size={14}/>}</button><a href={me.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ExternalLink size={13}/></a><a href={me.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={13}/></a></div></div>
          <form className="contact2-form" onSubmit={submit}><div className="form-title">SEND A SIGNAL <span>● ONLINE</span></div><input required placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/><input required type="email" placeholder="Your email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/><textarea required rows="5" placeholder="What are you building?" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/><button className="main-btn" type="submit">{sent?"EMAIL CLIENT OPENED":"TRANSMIT MESSAGE"} <Send size={15}/></button><small>No form backend. Uses your default email client.</small></form>
        </section>
      </main>

      <footer><span>© 2026 Mohd Farhan</span><span>React · Three.js · WebGL · Engineering</span><button onClick={()=>scrollTo({top:0,behavior:"smooth"})}><ArrowLeft size={14} style={{transform:"rotate(90deg)"}}/> TOP</button></footer>

      <AnimatePresence>{project && <motion.div className="overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setProject(null)}><motion.div className="case-modal" initial={{y:30,scale:.97}} animate={{y:0,scale:1}} exit={{y:20}} onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setProject(null)}><X/></button><div className="modal-banner" style={{"--accent":project.color}}><span>{project.glyph}</span><b>{project.type} · {project.year}</b></div><div className="modal-content"><small>CASE STUDY</small><h2>{project.title}</h2><p>{project.detail}</p><div className="chips">{project.tech.map(t=><span key={t}>{t}</span>)}</div><div className="modal-actions"><a className="main-btn" href={me.github} target="_blank" rel="noreferrer">Explore GitHub <Github size={15}/></a><button className="line-btn" onClick={()=>{setProject(null);nav("contact")}}>Discuss this build <ArrowUpRight size={15}/></button></div></div></motion.div></motion.div>}</AnimatePresence>

      <AnimatePresence>{palette && <motion.div className="overlay palette-bg" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setPalette(false)}><motion.div className="palette" onClick={e=>e.stopPropagation()} initial={{y:-20}} animate={{y:0}}><div className="palette-input"><Command/><input autoFocus placeholder="Jump anywhere…" onChange={e=>setSearch(e.target.value)}/><kbd>ESC</kbd></div>{["home","work","stack","journey","contact"].map(x=><button key={x} onClick={()=>nav(x)}><ChevronRight size={15}/> GO TO {x.toUpperCase()}</button>)}<button onClick={resume}><Download size={15}/> DOWNLOAD RESUME</button><button onClick={()=>{setDark(v=>!v);setPalette(false)}}>{dark?<Sun/>:<Moon/>} TOGGLE THEME</button></motion.div></motion.div>}</AnimatePresence>

      {toast && <div className="toast"><Check size={15}/>{toast}</div>}
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App/>);
