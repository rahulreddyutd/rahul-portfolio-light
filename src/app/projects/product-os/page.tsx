"use client";
import Link from "next/link";

const C = {
  bg:"#FAFAF8", surface:"#F5F3EF", card:"#FFFFFF",
  border:"#E8E5DF", borderHi:"#D4D0C8",
  text:"#111111", text2:"#555250", text3:"#9B9890",
  orange:"#F97316", orangeDim:"#EA6A0A",
  blue:"#2563EB", green:"#16A34A", red:"#DC2626", purple:"#7C3AED",
};

const accent = C.orange;

export default function ProductOSCase() {
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
          <Link href="/projects/executive-ai" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"12px", color:C.text3, textDecoration:"none" }}>ExecutiveAI →</Link>
        </div>
      </div>

      <div style={{ background:C.surface, borderBottom:`1px solid ${C.border}`, padding:"64px max(24px,calc((100% - 800px)/2)) 48px" }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:C.orange, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"20px", display:"flex", alignItems:"center", gap:"10px" }}>
          <span style={{ display:"inline-block", width:"24px", height:"1.5px", background:C.orange }} />2026 · Product Intelligence
        </div>
        <h1 style={{ fontFamily:"'Instrument Serif',serif", fontSize:"clamp(36px,5vw,56px)", fontWeight:400, color:C.text, lineHeight:1.05, marginBottom:"12px" }}>
          ProductOS<br /><em style={{ fontStyle:"italic", color:accent }}>Product thinking, automated.</em>
        </h1>
        <p style={{ fontSize:"16px", color:C.text2, lineHeight:1.8, maxWidth:"560px", marginBottom:"28px" }}>
          Most AI tools automate work. ProductOS automates product thinking by converting raw customer signal into RICE-scored roadmaps, PRDs, and A/B test designs in under 30 seconds.
        </p>
        <div style={{ display:"flex", gap:"10px" }}>
          <a href="https://product-os-one.vercel.app" target="_blank" rel="noopener noreferrer" style={{ padding:"10px 22px", background:accent, color:"#fff", borderRadius:"6px", fontSize:"13px", fontWeight:600, textDecoration:"none" }}>Live Demo</a>
          <a href="https://github.com/rahulreddyutd/product-os" target="_blank" rel="noopener noreferrer" style={{ padding:"10px 22px", background:"transparent", color:C.text2, border:`1.5px solid ${C.borderHi}`, borderRadius:"6px", fontSize:"13px", textDecoration:"none" }}>GitHub</a>
        </div>
      </div>

      <div style={{ maxWidth:"800px", margin:"0 auto", padding:"64px 24px" }}>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"12px", marginBottom:"72px" }}>
          {[{v:"6",l:"Agents"},{v:"<30s",l:"Full Brief"},{v:"RICE",l:"Evidence Scoring"},{v:"150w",l:"Input Gate"}].map(({v,l})=>(
            <div key={l} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:"10px", padding:"20px", textAlign:"center", borderTop:`3px solid ${accent}` }}>
              <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"34px", color:accent, lineHeight:1, marginBottom:"6px" }}>{v}</div>
              <div style={{ fontSize:"12px", color:C.text2 }}>{l}</div>
            </div>
          ))}
        </div>

        {[
          { label:"Problem", content:(
            <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
              <p style={{ fontSize:"15px", color:C.text2, lineHeight:1.8 }}>PMs spend 60-70% of their time collecting and synthesizing signal: reading interview transcripts, triaging ticket themes, debating priorities with stakeholders, writing PRDs from scratch. The output of all that work is a set of decisions: what to build, in what order, for whom, and why.</p>
              <p style={{ fontSize:"15px", color:C.text2, lineHeight:1.8 }}>ProductOS compresses the synthesis layer. It does not replace the PM. It removes the part that does not require a PM (pattern recognition across large bodies of unstructured text) so the PM can focus on the part that does: judgment, stakeholder alignment, and tradeoffs.</p>
            </div>
          )},
          { label:"Architecture", content:(
            <div>
              <p style={{ fontSize:"15px", color:C.text2, lineHeight:1.8, marginBottom:"24px" }}>Six agents with two parallel pairs, reducing total latency from roughly 6 sequential calls to 4 serial stages.</p>
              <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:"10px", padding:"28px", fontFamily:"'JetBrains Mono',monospace", fontSize:"13px", lineHeight:2.2 }}>
                <div style={{ color:C.text }}>Research Agent <span style={{ color:C.text3 }}>(pain points with sourceCount: "8 of 12 interviews")</span></div>
                <div style={{ color:C.text3 }}>&darr;</div>
                <div style={{ display:"flex", gap:"32px" }}>
                  <div style={{ color:C.green }}>Opportunity Agent <span style={{ color:C.text3 }}>(revenue impact)</span></div>
                  <div style={{ color:C.text3 }}>parallel</div>
                  <div style={{ color:C.blue }}>Prioritization Agent <span style={{ color:C.text3 }}>(RICE scoring)</span></div>
                </div>
                <div style={{ color:C.text3 }}>&darr;</div>
                <div style={{ color:accent }}>Strategy Agent <span style={{ color:C.text3 }}>(roadmap + KPIs + strategic memo)</span></div>
                <div style={{ color:C.text3 }}>&darr;</div>
                <div style={{ display:"flex", gap:"32px" }}>
                  <div style={{ color:C.purple }}>PRD Agent <span style={{ color:C.text3 }}>(user stories + criteria)</span></div>
                  <div style={{ color:C.text3 }}>parallel</div>
                  <div style={{ color:C.red }}>Experiment Agent <span style={{ color:C.text3 }}>(A/B test designs)</span></div>
                </div>
              </div>
            </div>
          )},
          { label:"Key Design Decisions", content:(
            <div style={{ display:"flex", flexDirection:"column", gap:"24px" }}>
              {[
                { title:"Schema-first output", body:"The canonical Product Brief schema was designed before writing a single agent. Every agent's extraction logic was designed backward from what the dashboard needed to render. This prevents the failure mode where agents produce rich output that does not compose into anything useful downstream." },
                { title:"sourceCount as evidence signal", body:"Every pain point includes a sourceCount field: '8 of 12 interviews mentioned this' rather than 'customers want better reporting.' This single field is what separates evidence-grounded analysis from summarization. A PM can act on a number. They cannot act on a theme." },
                { title:"150-word input minimum enforced at button level", body:"Generic input produces generic output. The 150-word minimum is enforced at the button: disabled below threshold, with an amber warning in real-time. This is a product quality gate built into the UX, not a backend validation that fails silently." },
                { title:"Strategy Agent NOT-building prompt", body:"The Strategy Agent is explicitly prompted to name what the team is NOT building this quarter and why. Most product strategy documents are lists of things to do. The hardest PM skill is saying no with a reason. This single prompt instruction produces strategic memos that read like a CPO wrote them." },
                { title:"RICE over ICE or MoSCoW", body:"RICE creates a numeric output that produces a defensible ranking PMs can show to stakeholders. ICE is faster but less rigorous. MoSCoW is qualitative and harder to defend in a roadmap review when engineering pushes back." },
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
                { label:"B2B SaaS Churn Crisis", tag:"Retention play", body:"$2.3M ARR at risk across 14 enterprise accounts. Research Agent surfaces reporting gaps as the real churn driver. Not UX, not pricing. RICE board puts reporting dashboard at P0 above all new feature requests." },
                { label:"B2C Consumer App Growth Plateau", tag:"Growth play", body:"D30 retention at 14% vs 22% benchmark. Research Agent identifies social isolation as the root cause (not content quality: users love the workouts). Strategy Agent recommends two bets: social graph and adaptive coaching." },
                { label:"Enterprise Fintech Feature Backlog", tag:"Prioritization challenge", body:"8 competing priorities, finite 22-person engineering team. Prioritization Agent RICE-scores all 8 features. PCI Level 1 certification surfaces as P0. Contractual penalty risk of $2.4M makes it non-negotiable." },
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
          <Link href="/projects/executive-ai" style={{ fontSize:"13px", color:C.text3, textDecoration:"none" }}>← ExecutiveAI</Link>
          <Link href="/" style={{ fontSize:"13px", color:C.text2, textDecoration:"none" }}>Back to Portfolio</Link>
        </div>
      </div>
    </>
  );
}
