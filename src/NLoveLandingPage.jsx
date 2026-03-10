export default function NLoveLandingPage() {
  return (
    <>
      <style>{`
        :root {
          --blue1:#060b22;
          --blue2:#0e1f61;
          --blue3:#1546d3;
          --orange1:#b83f00;
          --orange2:#d94a00;
          --orange3:#ff5a00;
          --panel:rgba(255,255,255,0.06);
          --line:rgba(255,255,255,0.14);
          --text:#ffffff;
          --muted:rgba(255,255,255,0.72);
          --soft:rgba(255,255,255,0.6);
        }

        *{box-sizing:border-box}
        html,body,#root{margin:0;min-height:100%}

        body{
          font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;
          color:var(--text);
          transition:background 400ms ease;
        }

        body:not([data-lang]),
        body[data-lang="en"]{
          background:
            radial-gradient(circle at 16% 12%,rgba(255,255,255,0.10),transparent 28%),
            radial-gradient(circle at 88% 18%,rgba(82,146,255,0.18),transparent 24%),
            radial-gradient(circle at 82% 82%,rgba(255,255,255,0.08),transparent 28%),
            linear-gradient(140deg,var(--blue1) 0%,var(--blue2) 48%,var(--blue3) 100%);
        }

        body[data-lang="nl"]{
          background:
            radial-gradient(circle at 16% 12%,rgba(255,255,255,0.10),transparent 28%),
            radial-gradient(circle at 88% 18%,rgba(255,255,255,0.10),transparent 24%),
            radial-gradient(circle at 82% 82%,rgba(255,255,255,0.06),transparent 28%),
            linear-gradient(140deg,var(--orange1) 0%,var(--orange2) 48%,var(--orange3) 100%);
        }

        body:not([data-lang]) .lang-nl,
        body[data-lang="en"] .lang-nl,
        body[data-lang="nl"] .lang-en,
        body:not([data-lang]) .panel-nl,
        body[data-lang="en"] .panel-nl,
        body[data-lang="nl"] .panel-en{
          display:none;
        }

        .page{
          min-height:100vh;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:60px 28px;
        }

        .wrap{
          width:100%;
          max-width:1280px;
          display:grid;
          grid-template-columns:1.1fr .9fr;
          gap:48px;
          align-items:start;
        }

        .lang-switch{
          position:fixed;
          top:22px;
          right:28px;
          display:flex;
          gap:10px;
          z-index:10;
        }

        .lang-btn{
          border:1px solid rgba(255,255,255,.3);
          background:rgba(255,255,255,.1);
          backdrop-filter:blur(8px);
          color:#fff;
          padding:8px 14px;
          border-radius:999px;
          font-size:12px;
          cursor:pointer;
        }

        .badge{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:10px 16px;
          border-radius:999px;
          border:1px solid var(--line);
          background:rgba(255,255,255,.06);
          font-size:13px;
          color:var(--muted);
        }

        .title{
          margin-top:26px;
          font-size:clamp(42px,7vw,82px);
          line-height:.98;
          letter-spacing:-.05em;
          font-weight:600;
        }

        .title span{
          display:block;
          margin-top:10px;
          color:rgba(255,255,255,.66);
          font-weight:500;
        }

        .copy{
          margin-top:28px;
          font-size:20px;
          line-height:1.7;
          max-width:680px;
          color:var(--muted);
        }

        .cards{
          margin-top:36px;
          display:grid;
          gap:14px;
          grid-template-columns:repeat(3,1fr);
        }

        .card{
          border:1px solid var(--line);
          background:var(--panel);
          border-radius:22px;
          padding:20px;
          backdrop-filter:blur(12px);
        }

        .card h3{margin:0;font-size:15px}
        .card p{margin:10px 0 0;font-size:14px;line-height:1.6;color:var(--soft)}

        .panel{
          align-self:start;
          border-radius:34px;
          border:1px solid rgba(255,255,255,.14);
          background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04));
          backdrop-filter:blur(14px);
          padding:30px;
          box-shadow:0 30px 70px rgba(0,0,0,.22);
        }

        .panel-head{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:16px;
          padding-bottom:22px;
          border-bottom:1px solid rgba(255,255,255,.18);
        }

        .status-label{
          font-size:11px;
          letter-spacing:.18em;
          text-transform:uppercase;
          color:rgba(255,255,255,.5);
        }

        .status-title{
          margin-top:8px;
          font-size:30px;
          font-weight:600;
          line-height:1.08;
        }

        .tag{
          border:1px solid rgba(255,255,255,.16);
          border-radius:999px;
          background:rgba(255,255,255,.05);
          padding:8px 11px;
          font-size:11px;
          letter-spacing:.08em;
          text-transform:uppercase;
          color:var(--muted);
        }

        .steps{
          margin-top:22px;
          display:grid;
          gap:14px;
        }

        .step{
          border-radius:22px;
          border:1px solid rgba(255,255,255,.10);
          background:rgba(8,14,40,.24);
          padding:18px;
        }

        .step-row{
          display:flex;
          gap:14px;
          align-items:flex-start;
        }

        .step-num{
          min-width:46px;
          border-radius:16px;
          border:1px solid rgba(255,255,255,.14);
          background:rgba(255,255,255,.05);
          padding:10px 12px;
          font-size:13px;
          font-weight:600;
          color:rgba(255,255,255,.8);
          text-align:center;
        }

        .step-title{
          margin:0;
          font-size:16px;
          font-weight:600;
          color:#fff;
        }

        .step-copy{
          margin:8px 0 0;
          font-size:14px;
          line-height:1.7;
          color:var(--soft);
        }

        .notice{
          margin-top:18px;
          border-radius:26px;
          border:1px solid rgba(255,255,255,.14);
          background:rgba(255,255,255,.05);
          padding:18px;
        }

        .notice-title{
          margin:0;
          font-size:15px;
          font-weight:600;
        }

        .notice-copy{
          margin:10px 0 0;
          font-size:14px;
          line-height:1.72;
          color:var(--soft);
        }

        .notice-foot{
          margin-top:14px;
          display:flex;
          align-items:center;
          gap:10px;
          font-size:13px;
          color:rgba(255,255,255,.5);
        }

        .notice-foot::before{
          content:"";
          width:8px;
          height:8px;
          border-radius:50%;
          background:rgba(255,255,255,.65);
        }

        .contact-btn{
          margin-top:16px;
          display:inline-block;
          padding:10px 16px;
          border-radius:999px;
          font-size:13px;
          text-decoration:none;
          font-weight:600;
          border:1px solid rgba(255,255,255,.25);
        }

        .panel-en .contact-btn{
          background:var(--orange3);
          color:#fff;
        }

        .panel-nl .contact-btn{
          background:var(--blue3);
          color:#fff;
        }

        .contact-btn:hover{
          opacity:.9;
        }

        .panel-block{
          margin-top:20px;
          border-top:1px solid rgba(255,255,255,.18);
          padding-top:16px;
        }

        .lang-nl .title{
          font-size:clamp(38px,6.4vw,74px);
        }

        .lang-nl .copy{
          font-size:19px;
        }

        @media(max-width:960px){
          .wrap{grid-template-columns:1fr}
          .cards{grid-template-columns:1fr}
        }
      `}</style>

      <main className="page">
        <div className="lang-switch">
          <button className="lang-btn" onClick={() => { document.body.dataset.lang = 'en'; }}>EN</button>
          <button className="lang-btn" onClick={() => { document.body.dataset.lang = 'nl'; }}>NL</button>
        </div>

        <div className="wrap">
          <div>
            <div className="badge">nlove.nl · launch September 2026</div>

            <div className="lang-en">
              <h1 className="title">
                Not just a coming soon page.
                <span>Something is being built here to last.</span>
              </h1>

              <p className="copy">
                NLove is taking shape as a cultural design brand inspired by the Netherlands.
                Instead of rushing a half-finished shop online, we preferred to leave this
                small marker here. A quiet sign that something considered is on its way.
              </p>

              <p className="copy">
                NLove translates Dutch cities, architecture and landscapes into carefully designed objects.
                The goal is simple: allow people to carry a fragment of the Netherlands with them through
                design, graphics and everyday objects.
              </p>

              <div className="cards">
                <div className="card">
                  <h3>Cities as inspiration</h3>
                  <p>Collections are built around Dutch cities and places, each becoming a visual world.</p>
                </div>
                <div className="card">
                  <h3>Minimal design language</h3>
                  <p>Clean architectural line art inspired by the HRLM1 graphic system.</p>
                </div>
                <div className="card">
                  <h3>Cultural objects</h3>
                  <p>Everyday items reinterpreted through design, narrative and place.</p>
                </div>
              </div>
            </div>

            <div className="lang-nl">
              <h1 className="title">
                Geen gewone coming-soon pagina.
                <span>Hier wordt iets gebouwd dat bedoeld is om te blijven.</span>
              </h1>

              <p className="copy">
                NLove groeit langzaam uit tot een cultureel designmerk rond Nederland.
                In plaats van snel een half afgewerkte winkel online te zetten,
                laten we hier voorlopig alleen dit kleine teken achter.
                Een rustige aanwijzing dat er iets doordachts onderweg is.
              </p>

              <p className="copy">
                NLove vertaalt Nederlandse steden, architectuur en landschappen naar
                zorgvuldig ontworpen objecten die design, plaats en dagelijks gebruik
                met elkaar verbinden.
              </p>

              <div className="cards">
                <div className="card">
                  <h3>Steden als inspiratie</h3>
                  <p>Collecties worden opgebouwd rond Nederlandse steden en plaatsen, elk met een eigen visuele identiteit.</p>
                </div>
                <div className="card">
                  <h3>Minimalistische grafische taal</h3>
                  <p>Heldere line-art illustraties geïnspireerd door architectuur en stedelijke vormen.</p>
                </div>
                <div className="card">
                  <h3>Culturele objecten</h3>
                  <p>Alledaagse voorwerpen opnieuw geïnterpreteerd via design, verhaal en plaats.</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="panel">
            <div className="panel-en">
              <div className="panel-head">
                <div>
                  <div className="status-label">Status</div>
                  <div className="status-title">In development</div>
                </div>
                <div className="tag">Built carefully</div>
              </div>

              <div className="steps">
                <div className="step">
                  <div className="step-row">
                    <div className="step-num">01</div>
                    <div>
                      <h3 className="step-title">Foundation first</h3>
                      <p className="step-copy">NLove is being shaped as a coherent brand system, not as a quick storefront.</p>
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-row">
                    <div className="step-num">02</div>
                    <div>
                      <h3 className="step-title">No rushed release</h3>
                      <p className="step-copy">Better a short silence than a half-made result. What goes live should already feel clear.</p>
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-row">
                    <div className="step-num">03</div>
                    <div>
                      <h3 className="step-title">Made to be revisited</h3>
                      <p className="step-copy">This page is a promise: something with identity, quality and purpose is on its way.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="notice">
                <h3 className="notice-title">Come back later and see the difference.</h3>
                <p className="notice-copy">For now, this page simply marks the start. The full site will follow once the first public expression is ready.</p>
                <div className="notice-foot">First impression now. Full experience later.</div>
                <a className="contact-btn" href="mailto:areyou@nlove.nl">Contact</a>
              </div>
            </div>

            <div className="panel-nl">
              <div className="panel-head">
                <div>
                  <div className="status-label">Status</div>
                  <div className="status-title">In ontwikkeling</div>
                </div>
                <div className="tag">Zorgvuldig opgebouwd</div>
              </div>

              <div className="steps">
                <div className="step">
                  <div className="step-row">
                    <div className="step-num">01</div>
                    <div>
                      <h3 className="step-title">Fundament eerst</h3>
                      <p className="step-copy">NLove wordt opgebouwd als een coherent merksysteem, niet als een snelle winkel.</p>
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-row">
                    <div className="step-num">02</div>
                    <div>
                      <h3 className="step-title">Geen gehaaste lancering</h3>
                      <p className="step-copy">Beter een korte stilte dan een half afgewerkt resultaat. Wat live gaat, moet al helder aanvoelen.</p>
                    </div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-row">
                    <div className="step-num">03</div>
                    <div>
                      <h3 className="step-title">Gemaakt om terug te keren</h3>
                      <p className="step-copy">Deze pagina is een belofte: er is iets onderweg met identiteit, kwaliteit en bedoeling.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="notice">
                <h3 className="notice-title">Kom later terug en zie het verschil.</h3>
                <p className="notice-copy">Voor nu markeert deze pagina alleen het begin. De volledige site volgt zodra de eerste publieke vorm klaar is.</p>
                <div className="notice-foot">Eerste indruk nu. Volledige ervaring later.</div>
                <a className="contact-btn" href="mailto:areyou@nlove.nl">Contact</a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
