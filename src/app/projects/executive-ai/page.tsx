"use client";
import Link from "next/link";

const C = {
  bg:"#FAFAF8", surface:"#F5F3EF", card:"#FFFFFF",
  border:"#E8E5DF", borderHi:"#D4D0C8",
  text:"#111111", text2:"#555250", text3:"#9B9890",
  orange:"#F97316", orangeDim:"#EA6A0A",
  blue:"#2563EB", green:"#16A34A", red:"#DC2626", purple:"#7C3AED",
};

const accent = C.purple;

export default function ExecutiveAICase() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0;}body{background:#FAFAF8;color:#111;font-family:'Inter',sans-serif;-webkit-font-smoothing:antialiased;font-size:15px;line-height:1.6;}`}</style>

      <div style={{ padding:"18px max(24px,calc((100% - 800px)/2))", borderBottom:`1px solid ${C.border}`, display:"flex", justifyContent:"space-between", alignItems:"center", background:C.card }}>
        <Link href="/" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"12px", color:C.text3, textDecoration:"none" }}
        onMouseEnter={(e:React.MouseEvent<HTMLAnchorElement>)=>(e.currentTarget.style.color=C.text2)}
        onMouseLeave={(e:React.MouseEvent<HTMLAnchorElement>)=>(e.currentTarget.style.color=C.text3)}
        >← Portfolio</Link>
        <div style={{ display:"flex", gap:"12px" }}>
          <Link href="/projects/regulated-ai" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"12px", color:C.text3, textDecoration:"none" }}>RegulatedAI →</Link>
          <Link href="/projects/product-os" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"12px", color:C.text3, textDecoration:"none" }}>ProductOS →</Link>
        </div>
      </div>

      <div style={{ background:C.surface, borderBottom:`1px solid ${C.border}`, padding:"64px max(24px,calc((100% - 800px)/2)) 48px" }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:C.orange, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"20px", display:"flex", alignItems:"center", gap:"10px" }}>
          <span style={{ display:"inline-block", width:"24px", height:"1.5px", background:C.orange }} />2025 · Executive Intelligence
        </div>
        <h1 style={{ fontFamily:"'Instrument Serif',serif", fontSize:"clamp(36px,5vw,56px)", fontWeight:400, color:C.text, lineHeight:1.05, marginBottom:"12px" }}>
          ExecutiveAI<br /><em style={{ fontStyle:"italic", color:accent }}>Governance by architecture.</em>
        </h1>
        <p style={{ fontSize:"16px", color:C.text2, lineHeight:1.8, maxWidth:"560px", marginBottom:"28px" }}>
          An AI Chief of Staff that converts meeting transcripts and Slack threads into structured decision registries, where accountability is structurally enforced rather than process-dependent.
        </p>
        <div style={{ display:"flex", gap:"10px" }}>
          <a href="https://executive-ai-indol.vercel.app" target="_blank" rel="noopener noreferrer" style={{ padding:"10px 22px", background:accent, color:"#fff", borderRadius:"6px", fontSize:"13px", fontWeight:600, textDecoration:"none" }}>Live Demo</a>
          <a href="https://github.com/rahulreddyutd/executive-ai" target="_blank" rel="noopener noreferrer" style={{ padding:"10px 22px", background:"transparent", color:C.text2, border:`1.5px solid ${C.borderHi}`, borderRadius:"6px", fontSize:"13px", textDecoration:"none" }}>GitHub</a>
        </div>
      </div>

      <div style={{ maxWidth:"800px", margin:"0 auto", padding:"64px 24px" }}>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"12px", marginBottom:"72px" }}>
          {[{v:"5",l:"Agents"},{v:"4-6h",l:"Saved/week"},{v:"100%",l:"CRITICAL Escalated"},{v:"5 wks",l:"Timeline History"}].map(({v,l})=>(
            <div key={l} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:"10px", padding:"20px", textAlign:"center", borderTop:`3px solid ${accent}` }}>
              <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"34px", color:accent, lineHeight:1, marginBottom:"6px" }}>{v}</div>
              <div style={{ fontSize:"12px", color:C.text2 }}>{l}</div>
            </div>
          ))}
        </div>

        {[
          { label:"Problem", content:(
            <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
              <p style={{ fontSize:"15px", color:C.text2, lineHeight:1.8 }}>Executives spend 4-6 hours per week reading meeting summaries, chasing action items, and synthesizing signals from across their organization. The failure mode is not missing information. It is the inability to separate signal from noise at the moment a decision needs to be made.</p>
              <p style={{ fontSize:"15px", color:C.text2, lineHeight:1.8 }}>CRITICAL decisions get buried in status reports. Risk signals that were visible two weeks ago disappear into the archive before anyone acts. Accountability for decisions made in meetings evaporates because no one captured them in a format that persists.</p>
            </div>
          )},
          { label:"Architecture", content:(
            <div>
              <p style={{ fontSize:"15px", color:C.text2, lineHeight:1.8, marginBottom:"24px" }}>Five agents in a Chain-of-Agents pattern. Risk and Stakeholder agents run in parallel. Both depend only on Meeting Agent output, not on each other, reducing end-to-end latency by 40% vs sequential execution.</p>
              <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:"10px", padding:"28px", fontFamily:"'JetBrains Mono',monospace", fontSize:"13px", lineHeight:2.2 }}>
                <div style={{ color:C.text }}>Meeting Agent <span style={{ color:C.text3 }}>(decisions, action items, blockers)</span></div>
                <div style={{ color:C.text3, paddingLeft:"20px" }}>&darr;</div>
                <div style={{ display:"flex", gap:"32px", paddingLeft:"20px" }}>
                  <div style={{ color:C.red }}>Risk Agent <span style={{ color:C.text3 }}>(severity + delta)</span></div>
                  <div style={{ color:C.text3 }}>parallel</div>
                  <div style={{ color:C.blue }}>Stakeholder Agent <span style={{ color:C.text3 }}>(sentiment + escalation)</span></div>
                </div>
                <div style={{ color:C.text3, paddingLeft:"20px" }}>&darr;</div>
                <div style={{ color:C.text, paddingLeft:"20px" }}>Decision Agent <span style={{ color:C.text3 }}>(priority, owner, recommendation)</span></div>
                <div style={{ color:C.text3, paddingLeft:"20px" }}>&darr;</div>
                <div style={{ color:accent, paddingLeft:"20px", fontWeight:600 }}>Executive Briefing Agent <span style={{ color:C.text3, fontWeight:400 }}>(one-page synthesis)</span></div>
                <div style={{ color:C.text3, marginTop:"12px", borderTop:`1px solid ${C.border}`, paddingTop:"12px" }}>CRITICAL &rarr; Approval Queue &rarr; Immutable Audit Trail</div>
              </div>
            </div>
          )},
          { label:"Key Design Decisions", content:(
            <div style={{ display:"flex", flexDirection:"column", gap:"24px" }}>
              {[
                { title:"Schema-first design", body:"The canonical executive briefing schema was designed before writing a single agent. The delta field on risks surfaces not just what the risk is, but how it has changed since last week. A risk at the same level is monitoring. A risk that has escalated is a conversation the exec needs to have today." },
                { title:"Governance-by-architecture", body:"CRITICAL decisions cannot reach the delivery layer without passing through the Approval Queue. This is not a workflow rule or a process checklist. It is a structural constraint. The accountability exists in the architecture, not in people remembering to follow a process." },
                { title:"Parallel execution for Risk and Stakeholder agents", body:"Both depend only on Meeting Agent output. Running them with Promise.all reduces total latency without any architectural tradeoff. Identify the dependency graph first, parallelize where it allows." },
                { title:"globalThis singleton store", body:"Vercel serverless runs each API route in an isolated module instance. A naive module-level variable creates separate store objects per route, so approvals in /api/approval never reach /api/dashboard. globalThis ensures all routes share the same object." },
              ].map(({ title, body }) => (
                <div key={title} style={{ borderLeft:`3px solid ${accent}`, paddingLeft:"20px" }}>
                  <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"19px", color:C.text, marginBottom:"8px" }}>{title}</div>
                  <p style={{ fontSize:"14px", color:C.text2, lineHeight:1.75 }}>{body}</p>
                </div>
              ))}
            </div>
          )},
          { label:"Demo Scenarios", content:(
            <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
              {[
                { label:"Q3 Launch at Risk", tag:"Risk Agent", body:"Stripe dependency slip could push launch 2 weeks and expose $80K in media spend. Watch the Risk Agent surface the delta signal and the Decision Agent frame three calls leadership needs by EOD Thursday." },
                { label:"Roadmap Prioritization Conflict", tag:"Stakeholder Agent", body:"Three teams pulling the roadmap in different directions. Sales committed $2.1M in pipeline to features Engineering has not agreed to build. Stakeholder Agent maps the misalignment. Decision Agent frames the CEO escalation." },
                { label:"Board Prep Sprint", tag:"Briefing Agent", body:"Four simultaneous workstreams, two weeks to board. Key Insight surfaces the P0 pattern as the board-level risk: not the individual incidents, but the pattern they reveal." },
              ].map(({ label, tag, body }) => (
                <div key={label} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:"10px", padding:"22px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px", flexWrap:"wrap" }}>
                    <span style={{ fontFamily:"'Instrument Serif',serif", fontSize:"17px", color:C.text }}>{label}</span>
                    <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", padding:"3px 8px", background:`${accent}15`, border:`1px solid ${accent}30`, color:accent, borderRadius:"4px" }}>{tag}</span>
                  </div>
                  <p style={{ fontSize:"13px", color:C.text2, lineHeight:1.65 }}>{body}</p>
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
          <Link href="/projects/regulated-ai" style={{ fontSize:"13px", color:C.text3, textDecoration:"none" }}>← RegulatedAI</Link>
          <Link href="/projects/product-os" style={{ fontSize:"13px", color:C.text2, textDecoration:"none" }}>ProductOS →</Link>
        </div>
      </div>
    </>
  );
}
