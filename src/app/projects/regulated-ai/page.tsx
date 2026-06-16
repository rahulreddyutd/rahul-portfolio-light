"use client";
import Link from "next/link";

const C = {
  bg:"#FAFAF8", surface:"#F5F3EF", card:"#FFFFFF",
  border:"#E8E5DF", borderHi:"#D4D0C8",
  text:"#111111", text2:"#555250", text3:"#9B9890",
  orange:"#F97316", orangeDim:"#EA6A0A",
  blue:"#2563EB", green:"#16A34A", red:"#DC2626",
};

const accent = C.blue;

export default function RegulatedAICase() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0;}body{background:#FAFAF8;color:#111;font-family:'Inter',sans-serif;-webkit-font-smoothing:antialiased;font-size:15px;line-height:1.6;}`}</style>

      {/* Top bar */}
      <div style={{ padding:"18px max(24px,calc((100% - 800px)/2))", borderBottom:`1px solid ${C.border}`, display:"flex", justifyContent:"space-between", alignItems:"center", background:C.card }}>
        <Link href="/" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"12px", color:C.text3, textDecoration:"none" }}
        onMouseEnter={(e:React.MouseEvent<HTMLAnchorElement>)=>(e.currentTarget.style.color=C.text2)}
        onMouseLeave={(e:React.MouseEvent<HTMLAnchorElement>)=>(e.currentTarget.style.color=C.text3)}
        >← Portfolio</Link>
        <div style={{ display:"flex", gap:"12px" }}>
          <Link href="/projects/executive-ai" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"12px", color:C.text3, textDecoration:"none" }}>ExecutiveAI →</Link>
          <Link href="/projects/product-os" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"12px", color:C.text3, textDecoration:"none" }}>ProductOS →</Link>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background:C.surface, borderBottom:`1px solid ${C.border}`, padding:"64px max(24px,calc((100% - 800px)/2)) 48px" }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:C.orange, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"20px", display:"flex", alignItems:"center", gap:"10px" }}>
          <span style={{ display:"inline-block", width:"24px", height:"1.5px", background:C.orange }} />2026 · Financial and Legal AI
        </div>
        <h1 style={{ fontFamily:"'Instrument Serif',serif", fontSize:"clamp(36px,5vw,56px)", fontWeight:400, color:C.text, lineHeight:1.05, marginBottom:"12px" }}>
          RegulatedAI<br /><em style={{ fontStyle:"italic", color:accent }}>Compliance by architecture.</em>
        </h1>
        <p style={{ fontSize:"16px", color:C.text2, lineHeight:1.8, maxWidth:"560px", marginBottom:"28px" }}>
          A multi-agent financial advisory and legal intelligence platform where regulatory compliance is structurally enforced. Not a post-processing filter, not a disclaimer, not a checkbox.
        </p>
        <div style={{ display:"flex", gap:"10px", flexWrap:"wrap" }}>
          <a href="https://regulated-ai.vercel.app" target="_blank" rel="noopener noreferrer" style={{ padding:"10px 22px", background:accent, color:"#fff", borderRadius:"6px", fontSize:"13px", fontWeight:600, textDecoration:"none" }}>Live Demo</a>
          <a href="https://github.com/rahulreddyutd/regulated-ai" target="_blank" rel="noopener noreferrer" style={{ padding:"10px 22px", background:"transparent", color:C.text2, border:`1.5px solid ${C.borderHi}`, borderRadius:"6px", fontSize:"13px", textDecoration:"none" }}>GitHub</a>
        </div>
      </div>

      <div style={{ maxWidth:"800px", margin:"0 auto", padding:"64px 24px" }}>

        {/* Metrics */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"12px", marginBottom:"72px" }}>
          {[{v:"5",l:"Agents"},{v:"<15s",l:"End-to-end"},{v:"100%",l:"Audit Trail"},{v:"0",l:"Unverified Citations"}].map(({v,l})=>(
            <div key={l} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:"10px", padding:"20px", textAlign:"center", borderTop:`3px solid ${accent}` }}>
              <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"34px", color:accent, lineHeight:1, marginBottom:"6px" }}>{v}</div>
              <div style={{ fontSize:"12px", color:C.text2 }}>{l}</div>
            </div>
          ))}
        </div>

        {[
          { label: "Problem", content: (
            <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
              <p style={{ fontSize:"15px", color:C.text2, lineHeight:1.8 }}>Financial advisory and legal AI systems fail in regulated industries for the same reason: compliance is treated as a feature added after the agent works, rather than an architectural constraint that shapes every design decision from the start.</p>
              <p style={{ fontSize:"15px", color:C.text2, lineHeight:1.8 }}>A single FINRA suitability failure in a financial recommendation can trigger sanctions. The June 2023 Schwartz case (where an attorney was sanctioned for citing ChatGPT-fabricated precedents) is the canonical example of what happens when AI systems prioritize fluency over verifiability.</p>
            </div>
          )},
          { label: "Architecture", content: (
            <div>
              <p style={{ fontSize:"15px", color:C.text2, lineHeight:1.8, marginBottom:"24px" }}>Five agents in a supervisor pattern. The compliance gate is the only node connected to the delivery node. It is structurally impossible for a non-compliant recommendation to reach the user.</p>
              <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:"10px", padding:"28px", fontFamily:"'JetBrains Mono',monospace", fontSize:"13px", lineHeight:2.2 }}>
                <div style={{ color:accent, fontWeight:600 }}>Supervisor Agent</div>
                <div style={{ color:C.text3 }}>  &darr;</div>
                <div style={{ color:C.text }}>Market Data Agent</div>
                <div style={{ color:C.text3 }}>  &darr;</div>
                <div style={{ color:C.text }}>Risk Assessment Agent <span style={{ color:C.text3 }}>(volatility, VaR, drawdown, suitability)</span></div>
                <div style={{ color:C.text3 }}>  &darr;</div>
                <div style={{ color:C.text }}>Portfolio Construction Agent <span style={{ color:C.text3 }}>(MPT-based allocation)</span></div>
                <div style={{ color:C.text3 }}>  &darr;</div>
                <div style={{ color:C.red, fontWeight:600 }}>Compliance Gate <span style={{ color:C.text3, fontWeight:400 }}>(FINRA 2111, Reg BI, concentration limits)</span></div>
                <div style={{ color:C.text3 }}>  &darr; PASS only</div>
                <div style={{ color:C.green }}>Recommendation Delivery</div>
                <div style={{ color:C.text3, marginTop:"12px", borderTop:`1px solid ${C.border}`, paddingTop:"12px" }}>FAIL &rarr; Human Review Queue &rarr; Analyst Approval &rarr; Audit Trail</div>
              </div>
            </div>
          )},
          { label: "Key Design Decisions", content: (
            <div style={{ display:"flex", flexDirection:"column", gap:"24px" }}>
              {[
                { title:"Compliance-by-architecture", body:"The compliance node is not a filter at the end of a pipeline. It is the only node connected to the delivery node. It is structurally impossible for a non-compliant recommendation to reach the user. This was the most important design decision in the project." },
                { title:"Risk scoring formula", body:"Composite risk score = (0.4 x annualized volatility) + (0.35 x max drawdown) + (0.25 x 95% VaR). Client tolerance adjustment maps market risk to personalized exposure bands. Conservative profile plus HIGH market risk equals UNACCEPTABLE, not just HIGH." },
                { title:"Citation verification gate", body:"Every legal citation is cross-referenced against a verified knowledge base before delivery. Unverified citations are flagged in red and cannot be included in any output. The Schwartz failure mode is structurally prevented, not filtered." },
                { title:"Authority-weighted retrieval", body:"Legal RAG uses hybrid semantic plus authority ranking: 50% semantic similarity, 30% authority level (SCOTUS=10, Circuit=7-8, District=5), 20% recency. Jurisdictional filtering built in. Authority and recency serve as tiebreakers, not primary signals." },
              ].map(({ title, body }) => (
                <div key={title} style={{ borderLeft:`3px solid ${accent}`, paddingLeft:"20px" }}>
                  <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"19px", color:C.text, marginBottom:"8px" }}>{title}</div>
                  <p style={{ fontSize:"14px", color:C.text2, lineHeight:1.75 }}>{body}</p>
                </div>
              ))}
            </div>
          )},
          { label: "What This Demonstrates", content: (
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>
              {[
                { label:"For AI PM roles", color: C.orange, items:["Compliance as architecture, not feature","Risk-as-product: suitability, concentration, Reg BI","Human approval workflow design","Evaluation dashboard with real metrics"] },
                { label:"For AI Eng roles", color: accent, items:["Multi-agent StateGraph orchestration","Hybrid RAG with re-ranking","Structured JSON output at every boundary","Parallel agent execution"] },
              ].map(({ label, color, items }) => (
                <div key={label} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:"10px", padding:"22px" }}>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color, marginBottom:"14px", letterSpacing:"0.08em" }}>{label}</div>
                  {items.map(item => (
                    <div key={item} style={{ fontSize:"13px", color:C.text2, padding:"7px 0", borderBottom:`1px solid ${C.border}`, display:"flex", gap:"8px" }}>
                      <span style={{ color:C.green, fontWeight:700 }}>+</span>{item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )},
        ].map(({ label, content }) => (
          <div key={label} style={{ marginBottom:"64px" }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", letterSpacing:"0.12em", color:C.orange, textTransform:"uppercase", marginBottom:"20px", display:"flex", alignItems:"center", gap:"10px" }}>
              <span style={{ display:"inline-block", width:"20px", height:"1.5px", background:C.orange }} />{label}
            </div>
            {content}
          </div>
        ))}

        <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:"32px", display:"flex", justifyContent:"space-between" }}>
          <Link href="/" style={{ fontSize:"13px", color:C.text3, textDecoration:"none" }}>← All Projects</Link>
          <Link href="/projects/product-os" style={{ fontSize:"13px", color:C.text2, textDecoration:"none" }}>ProductOS →</Link>
        </div>
      </div>
    </>
  );
}
