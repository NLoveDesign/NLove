export default function NLoveLandingPage() {
  return (
    <>
      <style>{`
        :root {
          --bg: #0a0f2c;
          --bg-2: #123fcb;
          --panel: rgba(255,255,255,0.06);
          --panel-2: rgba(255,255,255,0.04);
          --line: rgba(255,255,255,0.12);
          --line-2: rgba(255,255,255,0.08);
          --text: #ffffff;
          --muted: rgba(255,255,255,0.72);
          --soft: rgba(255,255,255,0.62);
          --faint: rgba(255,255,255,0.45);
          --shadow: 0 30px 70px rgba(0,0,0,0.28);
        }

        * { box-sizing: border-box; }
        html, body, #root { min-height: 100%; margin: 0; }
        body {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--text);
          background:
            radial-gradient(circle at 16% 12%, rgba(255,255,255,0.10), transparent 28%),
            radial-gradient(circle at 88% 18%, rgba(82,146,255,0.18), transparent 24%),
            radial-gradient(circle at 82% 82%, rgba(255,255,255,0.08), transparent 28%),
            linear-gradient(140deg, #060b22 0%, #0e1f61 48%, #1546d3 100%);
        }

        .nl-page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .nl-shell {
          position: relative;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 56px 28px;
        }

        .nl-wrap {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) minmax(340px, 0.88fr);
          gap: 48px;
          align-items: center;
        }

        .nl-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 11px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.78);
          font-size: 13px;
          backdrop-filter: blur(10px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
        }

        .nl-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.88);
        }

        .nl-title {
          margin: 26px 0 0;
          font-size: clamp(42px, 7.2vw, 82px);
          line-height: 0.98;
          letter-spacing: -0.05em;
          font-weight: 600;
          max-width: 860px;
        }

        .nl-title span {
          display: block;
          margin-top: 10px;
          color: rgba(255,255,255,0.66);
          font-weight: 500;
        }

        .nl-copy {
          margin: 28px 0 0;
          max-width: 700px;
          font-size: 21px;
          line-height: 1.72;
          color: var(--muted);
        }

        .nl-actions {
          margin-top: 34px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .nl-button,
        .nl-button-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 22px;
          border-radius: 18px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
        }

        .nl-button {
          background: #ffffff;
          color: #0b1130;
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }

        .nl-button-secondary {
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.88);
          backdrop-filter: blur(10px);
        }

        .nl-button:hover,
        .nl-button-secondary:hover {
          transform: translateY(-1px);
        }

        .nl-cards {
          margin-top: 36px;
          display: grid;
          gap: 14px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .nl-card {
          border-radius: 26px;
          border: 1px solid var(--line);
          background: var(--panel);
          padding: 20px;
          backdrop-filter: blur(12px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
        }

        .nl-card-title {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
        }

        .nl-card-copy {
          margin: 10px 0 0;
          font-size: 14px;
          line-height: 1.7;
          color: var(--soft);
        }

        .nl-panel {
          border-radius: 34px;
          border: 1px solid var(--line);
          background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
          padding: 30px;
          backdrop-filter: blur(14px);
          box-shadow: var(--shadow);
        }

        .nl-panel-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--line);
        }

        .nl-status-label {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--faint);
        }

        .nl-status-title {
          margin-top: 8px;
          font-size: 30px;
          font-weight: 600;
          line-height: 1.08;
        }

        .nl-tag {
          border: 1px solid var(--line);
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          padding: 8px 11px;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .nl-steps {
          margin-top: 22px;
          display: grid;
          gap: 14px;
        }

        .nl-step {
          border-radius: 22px;
          border: 1px solid var(--line-2);
          background: rgba(8,14,40,0.26);
          padding: 18px;
        }

        .nl-step-row {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .nl-step-num {
          min-width: 46px;
          border-radius: 16px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.05);
          padding: 10px 12px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          text-align: center;
        }

        .nl-step-title {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }

        .nl-step-copy {
          margin: 8px 0 0;
          font-size: 14px;
          line-height: 1.7;
          color: var(--soft);
        }

        .nl-notice {
          margin-top: 18px;
          border-radius: 26px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.05);
          padding: 18px;
        }

        .nl-notice-title {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
        }

        .nl-notice-copy {
          margin: 10px 0 0;
          font-size: 14px;
          line-height: 1.72;
          color: var(--soft);
        }

        .nl-notice-foot {
          margin-top: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--faint);
        }

        .nl-notice-foot::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.65);
        }

        @media (max-width: 1080px) {
          .nl-wrap {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .nl-cards {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .nl-shell {
            padding: 26px 18px;
          }

          .nl-copy {
            font-size: 18px;
          }

          .nl-actions {
            flex-direction: column;
          }

          .nl-button,
          .nl-button-secondary {
            width: 100%;
          }

          .nl-panel {
            padding: 22px;
            border-radius: 28px;
          }
        }
      `}</style>

      <main className="nl-page">
        <section className="nl-shell">
          <div className="nl-wrap">
            <div>
              <div className="nl-badge">
                <span className="nl-badge-dot" />
                nlove.nl is in development
              </div>

              <h1 className="nl-title">
                Not just a coming soon page.
                <span>Something is being built here to last.</span>
              </h1>

              <p className="nl-copy">
                Behind NLove there is a real project — calm, deliberate and serious. Not built to appear quickly,
                but to arrive with its own point of view. That is why the site is still taking shape. That is also
                why it will be worth coming back to see it properly.
              </p>

              <div className="nl-actions">
                <a className="nl-button" href="mailto:landing@nlove.nl">Contact</a>
                <a className="nl-button-secondary" href="#about">Why it will be worth it</a>
              </div>

              <div className="nl-cards">
                <div className="nl-card">
                  <h2 className="nl-card-title">A real project</h2>
                  <p className="nl-card-copy">Not a placeholder without direction — the foundations are being built seriously.</p>
                </div>
                <div className="nl-card">
                  <h2 className="nl-card-title">Deliberate</h2>
                  <p className="nl-card-copy">Each decision is intentional: identity, graphics, products and experience.</p>
                </div>
                <div className="nl-card">
                  <h2 className="nl-card-title">Visible soon enough</h2>
                  <p className="nl-card-copy">The structure is already there. The public version will follow when it feels right.</p>
                </div>
              </div>
            </div>

            <aside className="nl-panel" id="about">
              <div className="nl-panel-head">
                <div>
                  <div className="nl-status-label">Status</div>
                  <div className="nl-status-title">In development</div>
                </div>
                <div className="nl-tag">Built carefully</div>
              </div>

              <div className="nl-steps">
                <div className="nl-step">
                  <div className="nl-step-row">
                    <div className="nl-step-num">01</div>
                    <div>
                      <h3 className="nl-step-title">Foundation first</h3>
                      <p className="nl-step-copy">NLove is being shaped as a coherent brand system, not as a quick storefront.</p>
                    </div>
                  </div>
                </div>

                <div className="nl-step">
                  <div className="nl-step-row">
                    <div className="nl-step-num">02</div>
                    <div>
                      <h3 className="nl-step-title">No rushed release</h3>
                      <p className="nl-step-copy">Better a short silence than a half-made result. What goes live should already feel clear.</p>
                    </div>
                  </div>
                </div>

                <div className="nl-step">
                  <div className="nl-step-row">
                    <div className="nl-step-num">03</div>
                    <div>
                      <h3 className="nl-step-title">Made to be revisited</h3>
                      <p className="nl-step-copy">This page is a promise: something with identity, quality and purpose is on its way.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nl-notice">
                <h3 className="nl-notice-title">Come back later and see the difference.</h3>
                <p className="nl-notice-copy">
                  For now, this page simply marks the start. The full site will follow once the first public expression is ready.
                </p>
                <div className="nl-notice-foot">First impression now. Full experience later.</div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
