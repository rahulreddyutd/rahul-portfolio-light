"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Nav from "./components/Nav";

const C = {
  bg: "#FAFAF8", surface: "#F5F3EF", card: "#FFFFFF",
  border: "#E8E5DF", borderHi: "#D4D0C8",
  text: "#111111", text2: "#555250", text3: "#9B9890",
  orange: "#F97316", orangeBg: "#FFF4EC", orangeDim: "#EA6A0A",
  green: "#16A34A", red: "#DC2626", blue: "#2563EB", purple: "#7C3AED",
};

const TYPEWRITER = [
  "compliance-by-architecture",
  "multi-agent orchestration",
  "RAG pipelines in production",
  "governance-by-architecture",
  "LLM evaluation frameworks",
  "schema-first agent design",
];

function useTypewriter(lines: string[]) {
  const [text, setText] = useState("");
  const s = useRef({ line: 0, char: 0, del: false });
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    function tick() {
      const st = s.current; const line = lines[st.line];
      if (!st.del) { st.char++; setText(line.slice(0, st.char)); if (st.char === line.length) { st.del = true; t = setTimeout(tick, 1800); return; } }
      else { st.char--; setText(line.slice(0, st.char)); if (st.char === 0) { st.del = false; st.line = (st.line + 1) % lines.length; } }
      t = setTimeout(tick, st.del ? 25 : 50);
    }
    t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, [lines]);
  return text;
}

function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".sr").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const PROJECTS = [
  {
    slug: "regulated-ai",
    name: "RegulatedAI",
    tagline: "Financial and Legal Intelligence Platform",
    url: "https://regulated-ai.vercel.app",
    year: "2026",
    what: "Multi-agent financial advisory system where FINRA Rule 2111 and Reg BI compliance is structurally enforced. The recommendation delivery node is only reachable through a compliance gate, making non-compliant output architecturally impossible.",
    proof: "Compliance is not a filter at the end of the pipeline. It is the only path to the output.",
    metrics: [{ v: "5", l: "Agents" }, { v: "<15s", l: "Analysis" }, { v: "FINRA", l: "Validated" }, { v: "100%", l: "Audit Trail" }],
    tags: ["5-Agent Pipeline", "FINRA / Reg BI", "RAG", "Human Approval"],
    color: C.blue,
  },
  {
    slug: "product-os",
    name: "ProductOS",
    tagline: "AI Operating System for Product Teams",
    url: "https://product-os-one.vercel.app",
    year: "2026",
    what: "Six-agent pipeline converting customer interviews, support tickets, and NPS data into RICE-scored roadmaps, PRDs, and A/B test designs in under 30 seconds. Output schema designed before agents were written.",
    proof: "Most AI tools automate work. This one automates product thinking.",
    metrics: [{ v: "6", l: "Agents" }, { v: "RICE", l: "Scoring" }, { v: "PRD", l: "Generated" }, { v: "<30s", l: "Brief" }],
    tags: ["6-Agent Pipeline", "RICE Scoring", "PRD Generation", "Schema-First"],
    color: C.orange,
  },
  {
    slug: "executive-ai",
    name: "ExecutiveAI",
    tagline: "AI Chief of Staff",
    url: "https://executive-ai-indol.vercel.app",
    year: "2025",
    what: "Five-agent platform converting meeting transcripts into structured decision registries. CRITICAL decisions auto-escalate to an approval queue with impact framing and immutable audit trail. Week-over-week confidence scoring synthesized from schedule risk, stakeholder sentiment, and decision velocity.",
    proof: "Governance-by-architecture: accountability enforced by structure, not by process.",
    metrics: [{ v: "5", l: "Agents" }, { v: "4-6h", l: "Saved/wk" }, { v: "P1/P2/P3", l: "Priority" }, { v: "Queue", l: "Approval" }],
    tags: ["5-Agent Pipeline", "Decision Registry", "Approval Queue", "Audit Trail"],
    color: C.purple,
  },
];

function ProjectCard({ p, idx }: { p: typeof PROJECTS[0]; idx: number }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(p.url)}&screenshot=true&meta=false&embed=screenshot.url&waitUntil=networkidle`;

  return (
    <div className="sr" style={{
      background: C.card, border: `1px solid ${C.border}`,
      borderRadius: "16px", overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
      transition: "box-shadow 0.2s, border-color 0.2s",
    }}
    onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.10)"; e.currentTarget.style.borderColor = C.borderHi; }}
    onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)"; e.currentTarget.style.borderColor = C.border; }}
    >
      {/* Browser chrome mockup */}
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ display: "flex", gap: "5px" }}>
          {["#F87171","#FCD34D","#6EE7B7"].map(c => <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: C.border, borderRadius: "4px", height: "24px", display: "flex", alignItems: "center", padding: "0 10px" }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", color: C.text3 }}>{p.url.replace("https://","")}</span>
        </div>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.green }} />
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "9px", color: C.green }}>LIVE</span>
        </div>
      </div>

      {/* Screenshot */}
      <div style={{ position: "relative", paddingTop: "58%", background: C.surface, overflow: "hidden" }}>
        {/* Color accent stripe */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: p.color, zIndex: 2 }} />

        {!imgError && (
          <img src={screenshotUrl} alt={p.name}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", opacity: imgLoaded ? 1 : 0, transition: "opacity 0.4s" }} />
        )}
        {!imgLoaded && !imgError && (
          <div style={{ position: "absolute", inset: 0 }} className="shimmer" />
        )}
        {imgError && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", background: C.surface }}>
            <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: "32px", color: p.color }}>{p.name}</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: C.text3 }}>Live at {p.url.replace("https://","")}</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "28px 28px 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "6px" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: C.text3 }}>{p.year}</div>
        </div>
        <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: "22px", color: C.text, marginBottom: "2px", lineHeight: 1.2 }}>{p.name}</div>
        <div style={{ fontSize: "13px", color: p.color, fontWeight: 600, marginBottom: "16px" }}>{p.tagline}</div>

        {/* Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px", marginBottom: "18px" }}>
          {p.metrics.map(m => (
            <div key={m.l} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: "8px", padding: "10px 8px", textAlign: "center" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "14px", color: p.color, fontWeight: 600, lineHeight: 1 }}>{m.v}</div>
              <div style={{ fontSize: "10px", color: C.text3, marginTop: "4px" }}>{m.l}</div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "14px", color: C.text2, lineHeight: 1.7, marginBottom: "12px" }}>{p.what}</p>

        {/* Proof line */}
        <div style={{ borderLeft: `3px solid ${p.color}`, paddingLeft: "12px", marginBottom: "20px" }}>
          <p style={{ fontSize: "13px", color: C.text2, fontStyle: "italic", lineHeight: 1.5 }}>{p.proof}</p>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "22px" }}>
          {p.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: "11px",
              padding: "3px 9px", borderRadius: "4px",
              background: C.surface, border: `1px solid ${C.border}`, color: C.text3,
            }}>{tag}</span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <a href={p.url} target="_blank" rel="noopener noreferrer" style={{
            padding: "9px 18px", background: p.color, color: "#fff",
            borderRadius: "6px", fontSize: "13px", fontWeight: 600,
            textDecoration: "none", transition: "opacity 0.15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >Live Demo</a>
          <Link href={`/projects/${p.slug}`} style={{
            padding: "9px 18px", background: "transparent", color: C.text2,
            border: `1px solid ${C.borderHi}`, borderRadius: "6px",
            fontSize: "13px", fontWeight: 500, textDecoration: "none",
            transition: "all 0.15s",
          }}
          onMouseEnter={e => { e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = "#111"; }}
          onMouseLeave={e => { e.currentTarget.style.color = C.text2; e.currentTarget.style.borderColor = C.borderHi; }}
          >Case Study</Link>
        </div>
      </div>
    </div>
  );
}

const W = "max(24px, calc((100% - 1080px)/2))";

function Sec({ id, children, bg }: { id: string; children: React.ReactNode; bg?: string }) {
  return (
    <section id={id} style={{ padding: `96px ${W}`, background: bg ?? C.bg, borderTop: `1px solid ${C.border}` }}>
      {children}
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.12em", color: C.orange, textTransform: "uppercase", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ display: "inline-block", width: "24px", height: "1.5px", background: C.orange }} />
      {children}
    </div>
  );
}

export default function Home() {
  const typeText = useTypewriter(TYPEWRITER);
  useScrollReveal();

  return (
    <>
      <style>{`
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
      `}</style>
      <Nav />

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: `120px ${W} 80px` }}>
        <div style={{ maxWidth: "780px" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: C.orange, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "28px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ display: "inline-block", width: "28px", height: "1.5px", background: C.orange }} />
            AI PRODUCT MANAGER
          </div>

          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(48px,7vw,80px)", fontWeight: 400, lineHeight: 1.04, letterSpacing: "-0.02em", color: C.text, marginBottom: "8px" }}>
            Building AI systems
          </h1>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(48px,7vw,80px)", fontWeight: 400, lineHeight: 1.04, letterSpacing: "-0.02em", color: C.orange, marginBottom: "32px", fontStyle: "italic" }}>
            that govern themselves.
          </h1>

          <p style={{ fontSize: "18px", color: C.text2, lineHeight: 1.75, maxWidth: "560px", marginBottom: "16px" }}>
            6+ years building LLMs, RAG pipelines, and multi-agent systems in regulated environments. Cut analyst report time by 50%, scaled compliance monitoring from 1% to 100% of transactions, and eliminated $1M+ in annual software spend at Capital One.
          </p>

          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", color: C.text3, marginBottom: "48px", minHeight: "20px" }}>
            {typeText}
            <span style={{ display: "inline-block", width: "2px", height: "13px", background: C.orange, marginLeft: "2px", verticalAlign: "middle", animation: "blink 1s infinite" }} />
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "56px" }}>
            <a href="#projects" style={{ padding: "13px 28px", background: C.text, color: "#fff", borderRadius: "7px", fontSize: "14px", fontWeight: 600, textDecoration: "none", transition: "background 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#333")}
            onMouseLeave={e => (e.currentTarget.style.background = C.text)}
            >View Projects</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: "13px 28px", background: C.orange, color: "#fff", borderRadius: "7px", fontSize: "14px", fontWeight: 600, textDecoration: "none", transition: "background 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.background = C.orangeDim)}
            onMouseLeave={e => (e.currentTarget.style.background = C.orange)}
            >Download Resume</a>
            <a href="https://www.linkedin.com/in/rahulreddypuchakayala/" target="_blank" rel="noopener noreferrer" style={{ padding: "13px 28px", background: "transparent", color: C.text2, border: `1.5px solid ${C.borderHi}`, borderRadius: "7px", fontSize: "14px", fontWeight: 500, textDecoration: "none", transition: "all 0.15s" }}
            onMouseEnter={e => { e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = "#111"; }}
            onMouseLeave={e => { e.currentTarget.style.color = C.text2; e.currentTarget.style.borderColor = C.borderHi; }}
            >LinkedIn</a>
          </div>

          {/* Credential strip */}
          <div style={{ paddingTop: "32px", borderTop: `1px solid ${C.border}`, display: "flex", gap: "0", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", color: C.text3, letterSpacing: "0.1em", textTransform: "uppercase", marginRight: "20px" }}>Background</span>
            {["Capital One", "Optum (UnitedHealth Group)", "Accenture"].map((item, i, arr) => (
              <span key={item} style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: "13px", color: C.text2, fontWeight: 500 }}>{item}</span>
                {i < arr.length - 1 && <span style={{ margin: "0 14px", color: C.border, fontSize: "14px" }}>|</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section style={{ padding: `0 ${W}`, background: C.bg, borderTop: `1px solid ${C.border}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {[
            { n: "800+", l: "Developer users on enterprise AI platform at Capital One" },
            { n: "80+",  l: "AI use cases in production across Lines of Business" },
            { n: "$1M+", l: "Annual third-party software spend eliminated" },
            { n: "6 yrs", l: "Building AI products across fintech and healthcare" },
          ].map(({ n, l }, i) => (
            <div key={n} style={{
              padding: "40px 32px",
              borderRight: i < 3 ? `1px solid ${C.border}` : "none",
            }}>
              <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: "48px", color: C.orange, lineHeight: 1, marginBottom: "10px" }}>{n}</div>
              <div style={{ fontSize: "13px", color: C.text2, lineHeight: 1.5 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <Sec id="projects" bg={C.surface}>
        <Label>Portfolio</Label>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "52px", flexWrap: "wrap", gap: "16px" }}>
          <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 400, color: C.text, lineHeight: 1.1 }}>
            Three products.<br /><em style={{ fontStyle: "italic", color: C.orange }}>Three decision problems.</em>
          </h2>
          <div style={{ fontSize: "13px", color: C.text3, lineHeight: 2, textAlign: "right", fontFamily: "'JetBrains Mono',monospace" }}>
            RegulatedAI → Trustworthy Decisions<br />
            ExecutiveAI → Executive Decisions<br />
            ProductOS → Product Decisions
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.slug} p={p} idx={i} />)}
        </div>
      </Sec>

      {/* PHILOSOPHY */}
      <Sec id="philosophy">
        <Label>Philosophy</Label>
        <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 400, color: C.text, marginBottom: "52px", lineHeight: 1.1 }}>
          What makes great<br /><em style={{ fontStyle: "italic", color: C.orange }}>AI products?</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2px" }}>
          {[
            { n: "01", title: "Trust", color: C.blue, body: "AI must be governable. Compliance cannot be a feature added after the agent works. It has to be an architectural constraint that shapes every design decision from day one. If a non-compliant output can reach the user, the system is not compliant." },
            { n: "02", title: "Decisions", color: C.orange, body: "AI should improve decisions, not just automate tasks. The measure is not speed or throughput. It is whether the human at the end makes a better call than they would have made without it. That is the only metric that matters in high-stakes domains." },
            { n: "03", title: "Evaluation", color: C.green, body: "AI products need measurable quality. Hallucination rate, compliance pass rate, retrieval precision. If you cannot measure it, you cannot improve it and you cannot defend it in a board meeting or a regulatory review." },
          ].map(({ n, title, color, body }) => (
            <div key={title} className="sr" style={{
              background: C.card, padding: "40px 36px",
              borderTop: `3px solid ${color}`,
              border: `1px solid ${C.border}`,
            }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: C.text3, marginBottom: "20px" }}>{n}</div>
              <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: "26px", color, marginBottom: "16px", lineHeight: 1.15 }}>{title}</div>
              <p style={{ fontSize: "14px", color: C.text2, lineHeight: 1.75 }}>{body}</p>
            </div>
          ))}
        </div>
      </Sec>

      {/* ABOUT */}
      <Sec id="about" bg={C.surface}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div>
            <Label>Why I Build AI Products</Label>
            <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 400, color: C.text, marginBottom: "36px", lineHeight: 1.1 }}>
              The work that<br /><em style={{ fontStyle: "italic", color: C.orange }}>shaped this.</em>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {[
                {
                  co: "Capital One",
                  body: "Leading AI platforms at Capital One taught me that enterprise AI fails not because the models are wrong, but because the governance structures were not designed for how AI actually behaves. I shipped a VectorDB platform, an LLM fine-tuning service, and human-in-the-loop compliance workflows. The hardest problems were never the models. They were organizational trust, audit requirements, and edge cases no one anticipated."
                },
                {
                  co: "Optum",
                  body: "At Optum I rebuilt anomaly detection for a platform serving 5,000 healthcare engineers. The original system had high recall and near-zero adoption. Engineers ignored it because they could not tell which alerts mattered. I added severity ranking and confidence scoring. Adoption went from near-zero to 60% in six weeks. That experience is why I believe explainability is not a feature. It is the entire product."
                },
                {
                  co: "What I am trying to build",
                  body: "AI systems that improve decisions, not just generate answers. The three projects in this portfolio are my attempt to demonstrate what that looks like in practice: in regulated financial advice, in executive decision-making, and in product strategy. All three share the same architectural principle: governance enforced by structure, not by process."
                },
              ].map(({ co, body }) => (
                <div key={co} style={{ borderLeft: `3px solid ${C.orange}`, paddingLeft: "20px" }}>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: C.text, marginBottom: "8px" }}>{co}</div>
                  <p style={{ fontSize: "14px", color: C.text2, lineHeight: 1.8 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ paddingTop: "60px" }}>
            <div style={{
              background: C.card, border: `1px solid ${C.border}`,
              borderRadius: "12px", padding: "32px",
              borderLeft: `4px solid ${C.orange}`,
              marginBottom: "20px",
            }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", color: C.orange, letterSpacing: "0.1em", marginBottom: "16px" }}>CORE BELIEF</div>
              <p style={{ fontFamily: "'Instrument Serif',serif", fontSize: "22px", color: C.text, lineHeight: 1.5 }}>
                &ldquo;In high-stakes domains, explainability is not a feature. It is the entire product.&rdquo;
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {[
                { n: "5,000+", l: "Healthcare users, Optum" },
                { n: "800+",   l: "AI platform users, Capital One" },
                { n: "60%",    l: "Adoption in 6 weeks" },
                { n: "$1M+",   l: "Software spend eliminated" },
              ].map(({ n, l }) => (
                <div key={n} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: "8px", padding: "18px" }}>
                  <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: "30px", color: C.orange, lineHeight: 1, marginBottom: "4px" }}>{n}</div>
                  <div style={{ fontSize: "12px", color: C.text3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sec>

      {/* ARCHITECTURE */}
      <Sec id="architecture">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <Label>Architecture</Label>
            <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 400, color: C.text, marginBottom: "20px", lineHeight: 1.1 }}>
              The pattern behind<br /><em style={{ fontStyle: "italic", color: C.orange }}>every project.</em>
            </h2>
            <p style={{ fontSize: "14px", color: C.text2, lineHeight: 1.8, marginBottom: "28px" }}>
              Every product I build follows the same principle: governance is structural, not procedural. The agent pipeline cannot produce an output that bypasses evaluation and compliance. That is not a checkbox. It is an architectural invariant.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {["LangGraph","Claude","GPT-4","RAG","LLM Evaluation","Human-in-the-Loop","RICE","FINRA","Reg BI"].map(t => (
                <span key={t} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", padding: "4px 10px", borderRadius: "4px", background: C.surface, border: `1px solid ${C.border}`, color: C.text3 }}>{t}</span>
              ))}
            </div>
          </div>
          <div className="sr">
            {[
              { label: "User Input", sub: "transcripts / tickets / code", color: C.text2 },
              { label: "Agent Layer", sub: "Research, Risk, Strategy, PRD", color: C.orange },
              { label: "Evaluation", sub: "LLM-as-judge / RICE / citation check", color: C.blue },
              { label: "Compliance Gate", sub: "structurally enforced, not filtered", color: C.purple },
              { label: "Decision", sub: "auditable / traceable / human-in-loop", color: C.green },
            ].map((node, i, arr) => (
              <div key={node.label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{
                  width: "100%", background: C.card,
                  border: `1.5px solid ${node.color}30`,
                  borderLeft: `4px solid ${node.color}`,
                  borderRadius: "8px", padding: "16px 20px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}>
                  <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: "17px", color: node.color, marginBottom: "3px" }}>{node.label}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: C.text3 }}>{node.sub}</div>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "6px 0" }}>
                    <div style={{ width: "1.5px", height: "18px", background: `linear-gradient(${node.color}, ${arr[i+1].color})` }} />
                    <div style={{ fontSize: "14px", color: C.text3, lineHeight: 1 }}>↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* EXPERIENCE */}
      <Sec id="experience" bg={C.surface}>
        <Label>Experience</Label>
        {[
          {
            co: "Capital One", period: "Jan 2025 – Present", role: "Product Manager, AI/ML Products",
            tagline: "Building AI-powered banking platforms that cut analyst report time by 50% and scaled compliance monitoring from 1% to 100% of transactions.",
            bullets: [
              "Enterprise AI platforms supporting <b>800+ developers</b> across 80+ use cases, achieving 89% deployment coverage",
              "Zero-touch <b>VectorDB platform</b> enabling instant RAG deployment, eliminating manual provisioning friction",
              "Human-in-the-loop validation scaling compliance monitoring from <b>1% to 100%</b> of transactions while improving fraud detection accuracy by 25%",
              "<b>$1M+</b> in annual third-party software spend eliminated through internally built tools",
            ],
          },
          {
            co: "Optum (UnitedHealth Group)", period: "Aug 2021 – May 2024", role: "Product Manager",
            tagline: "Led product strategy for a 5,000+ user healthcare engineering platform, driving adoption from near-zero to 60% in six weeks.",
            bullets: [
              "<b>Scale Test Copilot</b> serving 5,000+ internal users, reducing testing cycle times by 30%",
              "Redesigned anomaly prioritization with confidence scoring and severity ranking, increasing adoption from <b>near-zero to 60%</b> within six weeks",
              "Product analytics frameworks tracking 10+ operational KPIs, improving decision-making speed by 25%",
            ],
          },
          {
            co: "Accenture", period: "Jan 2019 – Jul 2021", role: "Data Engineer",
            tagline: "Built enterprise-scale data systems using Kafka and Spark, processing hundreds of millions of records across structured and unstructured sources.",
            bullets: [
              "Cross-source data integration using <b>Kafka, Spark, and Hive</b>, reducing integration times by 30%",
              "ETL pipelines processing <b>hundreds of millions of records</b> with SLA compliance and enterprise reporting reliability",
            ],
          },
        ].map(({ co, period, role, tagline, bullets }, i) => (
          <div key={co} className="sr" style={{
            display: "grid", gridTemplateColumns: "200px 1fr", gap: "48px",
            padding: "40px 0", borderBottom: i < 2 ? `1px solid ${C.border}` : "none",
          }}>
            <div style={{ paddingTop: "4px" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: C.text, marginBottom: "6px" }}>{co}</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: C.text3, letterSpacing: "0.04em" }}>{period}</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: "20px", color: C.text, marginBottom: "6px", lineHeight: 1.3 }}>{role}</div>
              <p style={{ fontSize: "13px", color: C.orange, fontWeight: 600, marginBottom: "16px", lineHeight: 1.5 }}>{tagline}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: "14px", color: C.text2, paddingLeft: "18px", position: "relative", lineHeight: 1.65 }}>
                    <span style={{ position: "absolute", left: 0, color: C.text3, fontSize: "16px", lineHeight: 1 }}>·</span>
                    <span dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Sec>

      {/* CONTACT */}
      <Sec id="contact">
        <div style={{ maxWidth: "600px" }}>
          <Label>Get in touch</Label>
          <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(36px,5vw,56px)", fontWeight: 400, color: C.text, marginBottom: "20px", lineHeight: 1.05 }}>
            Let&apos;s build something<br /><em style={{ fontStyle: "italic", color: C.orange }}>that governs itself.</em>
          </h2>
          <p style={{ fontSize: "16px", color: C.text2, lineHeight: 1.8, marginBottom: "36px" }}>
            Open to Senior AI PM roles. Currently at Capital One, selectively evaluating the right next move.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="https://www.linkedin.com/in/rahulreddypuchakayala/" target="_blank" rel="noopener noreferrer" style={{ padding: "13px 26px", background: C.orange, color: "#fff", borderRadius: "7px", fontSize: "14px", fontWeight: 600, textDecoration: "none", transition: "background 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.background = C.orangeDim)}
            onMouseLeave={e => (e.currentTarget.style.background = C.orange)}
            >LinkedIn</a>
            <a href="mailto:rahulreddypuch@gmail.com" style={{ padding: "13px 26px", background: "transparent", color: C.text2, border: `1.5px solid ${C.borderHi}`, borderRadius: "7px", fontSize: "14px", fontWeight: 500, textDecoration: "none", transition: "all 0.15s" }}
            onMouseEnter={e => { e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = "#111"; }}
            onMouseLeave={e => { e.currentTarget.style.color = C.text2; e.currentTarget.style.borderColor = C.borderHi; }}
            >rahulreddypuch@gmail.com</a>
            <a href="https://github.com/rahulreddyutd" target="_blank" rel="noopener noreferrer" style={{ padding: "13px 26px", background: "transparent", color: C.text2, border: `1.5px solid ${C.borderHi}`, borderRadius: "7px", fontSize: "14px", fontWeight: 500, textDecoration: "none", transition: "all 0.15s" }}
            onMouseEnter={e => { e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = "#111"; }}
            onMouseLeave={e => { e.currentTarget.style.color = C.text2; e.currentTarget.style.borderColor = C.borderHi; }}
            >GitHub</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: "13px 26px", background: "transparent", color: C.text2, border: `1.5px solid ${C.borderHi}`, borderRadius: "7px", fontSize: "14px", fontWeight: 500, textDecoration: "none", transition: "all 0.15s" }}
            onMouseEnter={e => { e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = "#111"; }}
            onMouseLeave={e => { e.currentTarget.style.color = C.text2; e.currentTarget.style.borderColor = C.borderHi; }}
            >Resume</a>
          </div>
        </div>
      </Sec>

      <footer style={{ borderTop: `1px solid ${C.border}`, padding: "28px max(24px,calc((100% - 1080px)/2))", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: C.text3 }}>Rahul Reddy Puchakayala</span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: C.text3 }}>AI Product Manager · Capital One · UT Dallas MS &apos;26</span>
      </footer>
    </>
  );
}
