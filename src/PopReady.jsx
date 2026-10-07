import { useState, useMemo } from "react";

/* =====================================================================
   POP Ready™ — Style B: tabbed, multi-question-per-area layout
   Matches the structure of POPReady-preview.html: 7 areas as tabs,
   3 questions per area on a simple Not yet / In progress / Ready scale,
   free navigation between areas, 21 questions total. Recoloured into
   your established cream / gold / forest studio palette with
   Fraunces + Inter, in place of the preview's teal/mint/lime.

   Grant vs Tender is kept as a first gate (from the original brief) —
   it swaps 2 of the 21 questions (co-contribution vs mandatory financial
   capacity; referees vs community backing) but otherwise both paths
   share the same 7 areas.

   LOGO: save the attached positive-popcorn-logo.png into your project's
   /public folder (exact filename), so the <img src="/positive-popcorn-logo.png">
   below resolves — matches your absolute-/public-path convention.
   ===================================================================== */

const AREAS = [
  { key: "governance", label: "Governance" },
  { key: "finances", label: "Finances" },
  { key: "evidence", label: "Evidence" },
  { key: "planning", label: "Planning" },
  { key: "budget", label: "Budget" },
  { key: "partnerships", label: "Partnerships" },
  { key: "documents", label: "Documents" },
];

const OPTIONS = ["Not yet", "In progress", "Ready"];

const QUESTIONS = [
  // ---------- GOVERNANCE ----------
  { id: "g1", area: "governance", path: "both",
    text: "We have a current ABN and clear legal structure.",
    critical: "blocker",
    gapDoc: "Confirmed ABN and legal structure",
    action: "Confirm your ABN and legal structure before going further. This underpins eligibility for almost everything else." },
  { id: "g2", area: "governance", path: "both",
    text: "Our decision-makers and approval process are documented.",
    action: "Write down who signs off on applications. Even a two-line process helps." },
  { id: "g3", area: "governance", path: "both",
    text: "Our leadership or board knows about — and supports — this application.",
    gapDoc: "Leadership or board sign-off",
    action: "Get formal sign-off before you submit. A strong application with no internal support stalls at contract stage." },

  // ---------- FINANCES ----------
  { id: "f1", area: "finances", path: "both",
    text: "Our financial reports and accounts are current and in order.",
    action: "Get your accounts up to date. Assessors may ask for recent financials." },
  { id: "f2", area: "finances", path: "both",
    text: "We can demonstrate the financial capacity to deliver this if successful.",
    action: "Pull together a simple cash-flow picture showing you can deliver before being reimbursed." },
  { id: "f3", area: "finances", path: "grant",
    text: "We know whether matched or co-contribution funding is required — and have it secured if so.",
    critical: "blocker",
    gapDoc: "Confirmation of matched / co-contribution funding",
    action: "Secure your co-contribution before submitting. This is a common, entirely avoidable, disqualifier." },
  { id: "f3t", area: "finances", path: "tender",
    text: "We meet the mandatory financial capacity requirements stated in the tender.",
    critical: "blocker",
    action: "Check every mandatory financial requirement against your current documentation. Miss one and you're excluded on a technicality." },

  // ---------- EVIDENCE ----------
  { id: "e1", area: "evidence", path: "both",
    text: "We have a track record or case studies relevant to this opportunity.",
    gapDoc: "Case studies or examples of past delivery",
    action: "No track record isn't fatal. Lean on team experience or a strong letter of support instead." },
  { id: "e2", area: "evidence", path: "both",
    text: "We have evidence of the need this addresses — data, research, or demonstrated demand.",
    gapDoc: "Evidence of need or demand",
    action: "Pull together whatever data you have. Even a short survey strengthens your case for need." },
  { id: "e3", area: "evidence", path: "both",
    text: "We can point to measurable outcomes from past work.",
    action: "Turn past results into numbers wherever you can. It's far more persuasive than a general claim." },

  // ---------- PLANNING ----------
  { id: "pl1", area: "planning", path: "both",
    text: "Our project or service is clearly scoped with defined deliverables.",
    gapDoc: "Project or service description",
    action: "Write a one-page project description with clear deliverables before drafting anything else." },
  { id: "pl2", area: "planning", path: "both",
    text: "We have measurable outcomes or KPIs defined.",
    gapDoc: "Measurable outcomes / KPIs",
    action: "Turn your goals into numbers. \"Improve engagement\" becomes \"increase attendance by 20%.\"" },
  { id: "pl3", area: "planning", path: "both",
    text: "We have a realistic timeline and have thought through the key risks.",
    action: "Block out a simple milestone timeline and list your top three risks with a one-line mitigation each." },

  // ---------- BUDGET ----------
  { id: "b1", area: "budget", path: "both",
    text: "We have an accurate, itemised budget prepared.",
    gapDoc: "Itemised budget",
    action: "Build your itemised budget first. Everything else here depends on it." },
  { id: "b2", area: "budget", path: "both",
    text: "We've costed our own time and overheads realistically.",
    action: "Cost your time properly. Underquoting to look competitive usually backfires at delivery." },
  { id: "b3", area: "budget", path: "both",
    text: "We have quotes or evidence to support our costs where needed.",
    gapDoc: "Supplier quotes or cost evidence",
    action: "Chase outstanding quotes now. Suppliers take longer than you'd like, especially near deadlines." },

  // ---------- PARTNERSHIPS ----------
  { id: "pa1", area: "partnerships", path: "both",
    text: "We have letters of support or partnership commitments secured or in progress.",
    gapDoc: "Letters of support or partnership confirmations",
    action: "Ask for letters of support now. They take longer to arrive than people expect." },
  { id: "pa2", area: "partnerships", path: "grant",
    text: "We have community or stakeholder backing for this project.",
    action: "A short letter from a community partner or stakeholder adds real weight. Worth asking for one." },
  { id: "pa2t", area: "partnerships", path: "tender",
    text: "We have referees lined up who know they may be contacted.",
    gapDoc: "Referee contact list",
    action: "Confirm your referees and give them a heads-up. An unreachable referee can cost you as much as a bad one." },
  { id: "pa3", area: "partnerships", path: "both",
    text: "We'd consider a delivery partner or subcontractor if our own capacity is tight.",
    action: "If capacity is tight, a delivery partner can strengthen your application. Worth a conversation before you submit." },

  // ---------- DOCUMENTS ----------
  { id: "d1", area: "documents", path: "both",
    text: "Our registrations and licences are current — ABN, ACNC status, relevant licences.",
    gapDoc: "Current registration and licence documentation",
    action: "Pull your ABN, ACNC and licence details together in one folder." },
  { id: "d2", area: "documents", path: "both",
    text: "Our insurances are current and sufficient for this work.",
    critical: "fix",
    gapDoc: "Certificate of currency (public liability / professional indemnity)",
    action: "Get a current certificate of currency. This is one of the fastest ways an application gets knocked out." },
  { id: "d3", area: "documents", path: "both",
    text: "We've read the entire guidelines or tender document, including every attachment.",
    critical: "fix",
    action: "Read the whole document before drafting another word. Mandatory conditions often hide in appendices." },
];

const AREA_STRENGTH_MESSAGE = {
  governance: "Your governance basics are sorted.",
  finances: "Your finances are in solid shape.",
  evidence: "You've got the evidence to back your claims.",
  planning: "The project itself is well planned.",
  budget: "Your numbers are in good order.",
  partnerships: "Your support and partnerships are solid.",
  documents: "Your paperwork is ready to go.",
};

const REC_STYLES = {
  "Apply Now": { color: "#2F5233", label: "Apply Now" },
  "Prepare First": { color: "#7a5a12", label: "Prepare First" },
  "Do Not Apply — Yet": { color: "#8c2e22", label: "Do Not Apply — Yet" },
};

function visibleQuestionsFor(path) {
  return QUESTIONS.filter((q) => q.path === "both" || q.path === path);
}

function scoreAssessment(path, answers) {
  const visible = visibleQuestionsFor(path);
  const areaRaw = {};
  const areaMax = {};
  const criticalBlockers = [];
  const criticalFixes = [];
  const gapDocs = new Set();
  const actionPool = [];

  AREAS.forEach((a) => { areaRaw[a.key] = 0; areaMax[a.key] = 0; });

  visible.forEach((q) => {
    areaMax[q.area] += 2;
    const score = answers[q.id];
    if (score === undefined) return;
    areaRaw[q.area] += score;
    if (score === 0) {
      if (q.gapDoc) gapDocs.add(q.gapDoc);
      if (q.critical === "blocker") criticalBlockers.push({ opt: q.text });
      if (q.critical === "fix") criticalFixes.push({ opt: q.text });
      if (q.action) actionPool.push({ area: q.area, score, action: q.action, critical: q.critical || null });
    } else if (score === 1 && q.action) {
      actionPool.push({ area: q.area, score, action: q.action, critical: null });
    }
  });

  const areaResults = {};
  AREAS.forEach((a) => {
    const max = areaMax[a.key] || 1;
    const pct = areaRaw[a.key] / max;
    areaResults[a.key] = { label: a.label, raw: areaRaw[a.key], max: areaMax[a.key], pct };
  });

  const totalRaw = AREAS.reduce((sum, a) => sum + areaRaw[a.key], 0);
  const totalMax = AREAS.reduce((sum, a) => sum + areaMax[a.key], 0) || 1;
  const overall = Math.round((totalRaw / totalMax) * 100);

  const strengths = AREAS.filter((a) => areaResults[a.key].pct >= 0.75).map(
    (a) => ({ area: a.label, message: AREA_STRENGTH_MESSAGE[a.key] })
  );

  const seen = new Set();
  const prioritised = [];
  actionPool.filter((a) => a.critical === "blocker").forEach((a) => { if (!seen.has(a.action)) { prioritised.push(a); seen.add(a.action); } });
  actionPool.filter((a) => a.critical === "fix").forEach((a) => { if (!seen.has(a.action)) { prioritised.push(a); seen.add(a.action); } });
  actionPool.filter((a) => !a.critical && a.score === 0).forEach((a) => { if (!seen.has(a.action)) { prioritised.push(a); seen.add(a.action); } });
  actionPool.filter((a) => !a.critical && a.score === 1).forEach((a) => { if (!seen.has(a.action)) { prioritised.push(a); seen.add(a.action); } });
  const nextActions = prioritised.slice(0, 6);

  let recommendation;
  let ratingLabel;
  if (criticalBlockers.length > 0) recommendation = "Do Not Apply — Yet";
  else if (criticalFixes.length > 0) recommendation = "Prepare First";
  else if (overall >= 80) recommendation = "Apply Now";
  else if (overall >= 50) recommendation = "Prepare First";
  else recommendation = "Do Not Apply — Yet";

  if (overall >= 80) ratingLabel = "Highly Ready";
  else if (overall >= 65) ratingLabel = "Ready, With Gaps";
  else if (overall >= 50) ratingLabel = "Early Stage";
  else ratingLabel = "Not Yet Ready";

  return { areaResults, overall, strengths, criticalBlockers, criticalFixes, gapDocs: Array.from(gapDocs), nextActions, recommendation, ratingLabel };
}

function TopBar({ onHome, onContact }) {
  return (
    <header className="pr-header">
      <a className="pr-brand" href="#home" onClick={(e) => { e.preventDefault(); onHome(); }}>
        <span className="pr-brand-script">Positive</span>
        <span className="pr-brand-block">POPCORN</span>
      </a>
      <a className="pr-header-link" href="#contact" onClick={(e) => { e.preventDefault(); onContact(); }}>Get in touch ↗</a>
    </header>
  );
}

function Hero({ stage, answeredCount, total }) {
  return (
    <section className="pr-hero">
      <div className="pr-orbit" aria-hidden="true"><span>✳</span></div>
      <img src="/popdude.png" alt="" aria-hidden="true" className="pr-popdude pr-popdude-hero" />
      <div className="pr-eyebrow">THE POSITIVE POPCORN TOOLKIT · GRANTS &amp; TENDERS</div>
      <h1>Are you <em>POPReady?</em></h1>
      <p>
        Great ideas deserve a strong application. Work through seven plain-English areas to see
        what's ready, what needs work, and where to focus next.
      </p>
      <div className="pr-hero-bottom">
        <span>7 areas</span>
        <span>21 questions</span>
        <span>{stage === "assessment" ? `${answeredCount} of ${total} answered` : "Your own POP Score"}</span>
      </div>
    </section>
  );
}

function PathGate({ onChoose }) {
  return (
    <section className="pr-panel pr-path-panel">
      <span className="pr-kicker">FIRST UP</span>
      <h2>What are you preparing for?</h2>
      <p className="pr-instruction">This swaps a couple of the 21 questions to fit.</p>
      <div className="pr-path-cards">
        <button className="pr-path-card" onClick={() => onChoose("grant")}>
          <span className="pr-path-name">Grant</span>
          <span className="pr-path-desc">Funding from a government, philanthropic or corporate program</span>
        </button>
        <button className="pr-path-card" onClick={() => onChoose("tender")}>
          <span className="pr-path-name">Tender</span>
          <span className="pr-path-desc">A competitive bid or RFT for a contract or piece of work</span>
        </button>
      </div>
    </section>
  );
}

function AreaPanel({ path, activeIndex, setActiveIndex, answers, onAnswer, onFinish, answeredCount, total }) {
  const area = AREAS[activeIndex];
  const questions = visibleQuestionsFor(path).filter((q) => q.area === area.key);
  const isLast = activeIndex === AREAS.length - 1;

  return (
    <section className="pr-panel">
      <div className="pr-panel-top">
        <div>
          <span className="pr-kicker">YOUR READINESS CHECK</span>
          <h2>{area.label}</h2>
        </div>
        <div className="pr-progress-copy">{answeredCount} of {total} answered</div>
      </div>
      <div className="pr-progress"><span style={{ width: (answeredCount / total * 100) + "%" }} /></div>

      <nav className="pr-tabs" aria-label="Readiness areas">
        {AREAS.map((a, i) => (
          <button
            key={a.key}
            className={i === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(i)}
          >
            {String(i + 1).padStart(2, "0")}
            <span>{a.label}</span>
          </button>
        ))}
      </nav>

      <p className="pr-instruction">Choose the answer that best describes where you are today.</p>

      <div className="pr-questions">
        {questions.map((q, qi) => (
          <fieldset className="pr-question" key={q.id}>
            <legend><span>{String(qi + 1).padStart(2, "0")}</span>{q.text}</legend>
            <div className="pr-options">
              {OPTIONS.map((label, oi) => (
                <label key={oi} className={answers[q.id] === oi ? "selected" : ""}>
                  <input type="radio" checked={answers[q.id] === oi} readOnly onClick={() => onAnswer(q.id, oi)} />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="pr-actions">
        <button className="pr-button pr-secondary" disabled={activeIndex === 0} onClick={() => setActiveIndex(activeIndex - 1)}>
          ← Previous
        </button>
        {isLast ? (
          <button className="pr-button pr-primary" onClick={onFinish}>See my results</button>
        ) : (
          <button className="pr-button pr-primary" onClick={() => setActiveIndex(activeIndex + 1)}>Next area →</button>
        )}
      </div>
    </section>
  );
}

function ResultsScreen({ results, path, onRestart, onContact }) {
  const rec = REC_STYLES[results.recommendation];
  return (
    <>
      <div className="pr-results">
        <div className="pr-score-card">
          <img src="/popdude-thumbsup.png" alt="" aria-hidden="true" className="pr-popdude pr-popdude-score" />
          <span className="pr-kicker">YOUR POP READY SCORE</span>
          <h2>{results.ratingLabel}</h2>
          <div className="pr-score">{results.overall}<span>/100</span></div>
          <p>{path === "grant" ? "Grant" : "Tender"} readiness, based on your answers across all seven areas.</p>
          <div className="pr-rec-badge" style={{ color: rec.color, background: "#fff" }}>{rec.label}</div>
        </div>

        <div className="pr-result-detail">
          <h2>Where you stand</h2>
          {AREAS.map((a) => {
            const r = results.areaResults[a.key];
            return (
              <div className="pr-area" key={a.key}>
                <div><span>{a.label}</span><span>{r.raw}/{r.max}</span></div>
                <div className="pr-area-bar"><span style={{ width: (r.pct * 100).toFixed(0) + "%" }} /></div>
              </div>
            );
          })}
        </div>

        {(results.criticalBlockers.length > 0 || results.criticalFixes.length > 0) && (
          <div className="pr-priorities pr-critical-box">
            <h2>Critical gaps</h2>
            <ul>
              {results.criticalBlockers.map((c, i) => (
                <li key={"b" + i}><strong>Must resolve first:</strong>&nbsp;{c.opt}</li>
              ))}
              {results.criticalFixes.map((c, i) => (
                <li key={"f" + i}><strong>Fix before submitting:</strong>&nbsp;{c.opt}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="pr-priorities">
          <h2>Prioritised next actions</h2>
          <ol>
            {results.nextActions.map((a, i) => (
              <li key={i}><span>{String(i + 1).padStart(2, "0")}</span><div><p>{a.action}</p></div></li>
            ))}
          </ol>
        </div>

        {results.gapDocs.length > 0 && (
          <div className="pr-priorities">
            <h2>Documents still required</h2>
            <ol>
              {results.gapDocs.map((d, i) => (
                <li key={i}><span>{String(i + 1).padStart(2, "0")}</span><div><p>{d}</p></div></li>
              ))}
            </ol>
          </div>
        )}

        <div className="pr-result-actions">
          <button className="pr-button pr-primary pr-no-print" onClick={() => window.print()}>Print / save summary</button>
          <button className="pr-text-button pr-no-print" onClick={onRestart}>Start over</button>
        </div>

        <div className="pr-cta">
          <div>
            <span className="pr-kicker">POSITIVE POPCORN</span>
            <h2>Want a hand turning this into an application?</h2>
            <p>Positive Popcorn supports grants, tenders and acquittals from scoping through to submission.</p>
          </div>
          <a className="pr-button pr-light" href="#contact" onClick={(e) => { e.preventDefault(); onContact(); }}>Get in touch ↗</a>
        </div>
      </div>

      <p className="pr-disclaimer">
        POPReady is a self-assessment planning tool. It does not determine eligibility or guarantee grant or
        tender success. Always check the requirements of the specific opportunity.
      </p>
    </>
  );
}

export default function PopReady({ onHome, onContact }) {
  const [stage, setStage] = useState("path");
  const [path, setPath] = useState(null);
  const [answers, setAnswers] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  const total = useMemo(() => (path ? visibleQuestionsFor(path).length : 21), [path]);
  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);

  const results = useMemo(
    () => (path && stage === "results" ? scoreAssessment(path, answers) : null),
    [path, answers, stage]
  );

  function choosePath(p) {
    setPath(p);
    setAnswers({});
    setActiveIndex(0);
    setStage("assessment");
  }

  function answerQuestion(id, optionIndex) {
    setAnswers((prev) => ({ ...prev, [id]: optionIndex }));
  }

  function restart() {
    setStage("path");
    setPath(null);
    setAnswers({});
    setActiveIndex(0);
  }

  return (
    <div className="popready">
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap');
.popready{--ink:#211F1B;--deep:#BD5A32;--deepdark:#A94C27;--mint:#F2E4CD;--lime:#E3A159;--gold:#E3A159;--paper:#FAF1E2;--line:rgba(33,31,27,0.1);color:var(--ink);background:var(--paper);min-height:100vh;font-family:'Work Sans',system-ui,sans-serif;line-height:1.5}
.popready *{box-sizing:border-box}
.popready button,.popready a{font:inherit}
.popready h1,.popready h2,.popready p{margin-top:0}
.popready h1,.popready h2{font-family:Fraunces,serif;font-weight:600;line-height:1.1}
.pr-header{max-width:1140px;margin:auto;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:22px 28px}
.pr-header a{color:inherit;text-decoration:none}
.pr-brand{display:flex;align-items:baseline;gap:6px}
.pr-brand-script{font-family:'Caveat',cursive;font-weight:700;font-size:1.6rem;color:#5F7350}
.pr-brand-block{font-family:'Fraunces',serif;font-weight:600;font-size:1.05rem;letter-spacing:0.04em;text-transform:uppercase;color:var(--ink)}
.pr-header-link{font-weight:700;font-size:14px}
.popready main{max-width:1140px;margin:auto;padding:0 28px}
.pr-hero{position:relative;overflow:hidden;min-height:260px;border-radius:26px;background:var(--deep);color:white;padding:44px 50px;margin:0 auto 28px;max-width:1140px}
.pr-eyebrow,.pr-kicker{font-size:11px;font-weight:800;letter-spacing:.17em;text-transform:uppercase}
.pr-eyebrow{color:var(--gold)}
.pr-hero h1{font-size:clamp(36px,5.5vw,64px);letter-spacing:-.01em;margin:16px 0 14px}
.pr-hero em{color:#2d1a10;font-style:normal}
.pr-hero p{max-width:600px;font-size:16px;color:rgba(255,255,255,.88)}
.pr-hero-bottom{display:flex;gap:10px;flex-wrap:wrap;margin-top:26px}
.pr-hero-bottom span{border:1px solid rgba(255,255,255,.4);border-radius:30px;padding:7px 13px;font-size:12px}
.pr-orbit{position:absolute;right:-60px;top:-100px;width:360px;height:360px;border:1px solid rgba(255,255,255,.3);border-radius:50%;display:grid;place-items:center;opacity:.5;pointer-events:none}
.pr-orbit:before,.pr-orbit:after{content:'';position:absolute;inset:36px;border:1px solid rgba(255,255,255,.22);border-radius:50%}
.pr-orbit:after{inset:80px}
.pr-orbit span{font-size:110px;color:#2d1a10}
.pr-popdude{position:absolute;pointer-events:none}
.pr-popdude-hero{right:24px;bottom:14px;width:120px;height:auto}
.pr-popdude-score{right:26px;top:20px;width:72px;height:auto}
@media(max-width:750px){.pr-popdude-hero{width:90px;right:10px;bottom:8px}}
.pr-panel,.pr-result-detail,.pr-priorities{background:white;border:1px solid var(--line);border-radius:22px;padding:34px;margin-bottom:20px}
.pr-panel-top{display:flex;justify-content:space-between;align-items:end;gap:20px}
.pr-panel h2,.pr-result-detail h2,.pr-priorities h2{font-size:30px;letter-spacing:0;margin:6px 0 19px}
.pr-kicker{color:#3F4F34}
.pr-progress-copy{font-size:13px;font-weight:700;color:#6b6658;white-space:nowrap}
.pr-progress,.pr-area-bar{background:#F2E4CD;border-radius:20px;height:7px;overflow:hidden;margin-bottom:24px}
.pr-progress>span,.pr-area-bar>span{display:block;background:#5F7350;height:100%;border-radius:20px;transition:width .25s}
.pr-tabs{display:grid;grid-template-columns:repeat(7,1fr);gap:7px;margin:0 0 24px}
.pr-tabs button{border:1px solid var(--line);background:#FAF1E2;border-radius:11px;color:#3F4F34;padding:12px 6px;font-size:11px;font-weight:800;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px}
.pr-tabs button.active{background:var(--deep);border-color:var(--deep);color:white}
.pr-instruction{color:#6b6658;font-size:14px;margin-bottom:4px}
.pr-question{border:0;border-top:1px solid var(--line);margin:0;padding:22px 0}
.pr-question legend{float:left;width:100%;font-weight:700;font-size:16px;margin-bottom:14px}
.pr-question legend span{color:#5F7350;margin-right:14px;font-size:12px}
.pr-options{clear:both;display:flex;flex-wrap:wrap;gap:9px}
.pr-options label{cursor:pointer}
.pr-options input{position:absolute;opacity:0;width:1px;height:1px}
.pr-options label span{display:inline-block;padding:9px 15px;border:1px solid var(--line);border-radius:9px;color:#4a463f;font-size:13px;font-weight:700}
.pr-options label.selected span{background:var(--mint);border-color:var(--deep);color:var(--deepdark)}
.pr-actions,.pr-result-actions{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:22px}
.pr-actions{justify-content:space-between}
.pr-button{display:inline-flex;justify-content:center;align-items:center;border-radius:999px;padding:13px 19px;border:1px solid transparent;text-decoration:none;font-weight:700;font-size:14px;cursor:pointer}
.pr-primary{background:var(--deep);color:white}
.pr-secondary{background:white;border-color:var(--line);color:var(--deep)}
.pr-button:disabled{opacity:.4;cursor:not-allowed}
.pr-disclaimer{font-size:12px;color:#7a756a;max-width:1140px;margin:25px auto 45px;padding:0 28px}
.pr-path-panel{max-width:760px;margin:0 auto}
.pr-path-cards{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:20px}
.pr-path-card{display:flex;flex-direction:column;gap:8px;text-align:left;background:var(--paper);border:1.5px solid var(--line);border-radius:14px;padding:22px 20px;cursor:pointer}
.pr-path-card:hover{border-color:var(--deep)}
.pr-path-name{font-family:Fraunces,serif;font-size:22px;font-weight:600}
.pr-path-desc{font-size:13px;color:#6b6658;line-height:1.5}
@media(max-width:600px){.pr-path-cards{grid-template-columns:1fr}}
.pr-results{display:grid;grid-template-columns:1fr 1fr;gap:20px;max-width:1140px;margin:0 auto;padding:0 28px}
.pr-score-card{position:relative;background:var(--lime);border-radius:22px;padding:34px;grid-column:1/-1}
.pr-score{font-family:Fraunces,serif;font-size:88px;font-weight:700;letter-spacing:-.01em;line-height:1.1;color:#2d1a10;margin:14px 0 10px}
.pr-score span{font-size:40px}
.pr-score-card h2{font-size:27px;margin:0 0 6px;color:#2d1a10}
.pr-score-card p{max-width:560px;font-size:14px;margin-bottom:16px;color:#3a2414}
.pr-rec-badge{display:inline-block;font-size:14px;font-weight:800;padding:9px 16px;border-radius:30px}
.pr-result-detail{grid-column:1/-1}
.pr-result-detail h2{margin-bottom:22px}
.pr-area{margin:12px 0}
.pr-area>div:first-child{display:flex;justify-content:space-between;font-size:13px;margin-bottom:5px;font-weight:600}
.pr-area>div:first-child span:last-child{color:#6b6658;font-weight:500}
.pr-area-bar{height:6px;margin-bottom:0}
.pr-priorities{grid-column:1/-1}
.pr-priorities ol{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:1fr 1fr;column-gap:28px}
.pr-priorities li{display:flex;gap:16px;border-top:1px solid var(--line);padding:16px 0}
.pr-priorities li>span{font-size:12px;color:#5F7350;font-weight:800;flex-shrink:0}
.pr-priorities li p{font-size:14px;color:#4a463f;margin:0;line-height:1.5}
.pr-critical-box{background:#fcebe6;border-color:#eec3b7}
.pr-critical-box h2{color:#8c2e22}
.pr-critical-box ul{list-style:none;margin:0;padding:0}
.pr-critical-box li{border-top:1px solid #eec3b7;padding:14px 0;font-size:14px;line-height:1.5}
.pr-critical-box li:first-child{border-top:0}
.pr-result-actions{grid-column:1/-1;margin:0}
.pr-text-button{background:none;border:0;color:#3F4F34;text-decoration:underline;cursor:pointer;font-weight:600;font-size:14px}
.pr-cta{grid-column:1/-1;background:var(--deep);color:white;border-radius:22px;padding:35px;display:flex;align-items:center;justify-content:space-between;gap:25px}
.pr-cta .pr-kicker{color:#2d1a10}
.pr-cta h2{font-size:26px;margin:8px 0}
.pr-cta p{font-size:14px;color:rgba(255,255,255,.88);max-width:520px;margin:0}
.pr-light{background:var(--gold);color:#2d1a10;white-space:nowrap}
@media print{.pr-no-print{display:none!important}.popready{background:#fff!important}}
@media(max-width:750px){.pr-hero{padding:35px 25px;min-height:0}.pr-hero p{font-size:16px}.pr-orbit{opacity:.16;right:-210px}.popready main{padding:0 14px}.pr-panel,.pr-result-detail,.pr-priorities,.pr-score-card{padding:24px}.pr-tabs{grid-template-columns:repeat(4,1fr)}.pr-results{grid-template-columns:1fr;padding:0 14px}.pr-priorities ol{grid-template-columns:1fr}.pr-cta{align-items:start;flex-direction:column}.pr-panel-top{align-items:start;flex-direction:column;gap:10px}}
@media(max-width:480px){.pr-header{padding:17px}.popready main{padding:0 14px}.pr-tabs{grid-template-columns:repeat(3,1fr)}.pr-tabs button{font-size:10px}.pr-hero h1{font-size:44px}}
      `}</style>

      <TopBar onHome={onHome} onContact={onContact} />
      <main>
        <Hero stage={stage} answeredCount={answeredCount} total={total} />

        {stage === "path" && <PathGate onChoose={choosePath} />}

        {stage === "assessment" && (
          <AreaPanel
            path={path}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            answers={answers}
            onAnswer={answerQuestion}
            onFinish={() => setStage("results")}
            answeredCount={answeredCount}
            total={total}
          />
        )}

        {stage === "results" && results && (
          <ResultsScreen results={results} path={path} onRestart={restart} onContact={onContact} />
        )}
      </main>
    </div>
  );
}
