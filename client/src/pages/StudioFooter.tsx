import { lazy, Suspense } from 'react';

const BloomSculpture = lazy(() => import('../components/BloomSculpture'));

function Spark({ className = '' }: { className?: string }) {
  return <svg className={className} width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 2v28M2 16h28M6.1 6.1l19.8 19.8M6.1 25.9 25.9 6.1" stroke="currentColor" strokeWidth="3.4" /></svg>;
}

export default function StudioFooter() {
  return (
    <footer className="studio-footer" aria-label="Soft Spot creative studio footer">
      <div className="studio-topline">
        <div className="wordmark" role="img" aria-label="Soft Spot studio"><Spark /><span>soft spot<span className="wordmark-period">.</span></span></div>
        <div className="studio-descriptor">INDEPENDENT MINDS.<br />GOOD THINGS, TOGETHER.</div>
        <div className="availability"><span aria-hidden="true" />OPEN TO GOOD IDEAS</div>
      </div>

      <div className="studio-main">
        <div className="studio-story">
          <div className="eyebrow"><span className="eyebrow-line" /> A CREATIVE STUDIO WITH A HUMAN TOUCH</div>
          <h1>A little spark.<br />A big <em>possibility.</em></h1>
          <p className="studio-intro">We turn what-ifs into wonderful.<br />Thoughtful brands, digital experiences,<br className="desktop-break" /> and a little unexpected.</p>
          <div className="conversation">
            <span className="conversation-icon" aria-hidden="true">↗</span>
            <div><span className="conversation-label">GOT SOMETHING IN MIND?</span><p>Let’s make something good.</p></div>
          </div>
        </div>
        <div className="studio-art">
          <Suspense fallback={<div className="sculpture-wrap sculpture-placeholder"><div className="fallback-flower" aria-hidden="true">✳</div></div>}>
            <BloomSculpture />
          </Suspense>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-main">
          <p className="bottom-manifesto">Small studio.<br /><em>Wide-open minds.</em></p>
          <div className="display-navigation" aria-label="Studio topics"><span>Selected work</span><span>Our story</span><span>Playground</span><span>Say hello</span></div>
          <div className="socials-new" aria-label="Social platforms">
            <span role="img" aria-label="Instagram"><img src="/instagram.svg" alt="" width="20" height="20" /></span>
            <span role="img" aria-label="LinkedIn"><img src="/linkedin.svg" alt="" width="20" height="20" /></span>
            <span role="img" aria-label="TikTok"><img src="/tiktok.svg" alt="" width="20" height="20" /></span>
          </div>
        </div>
        <div className="footer-fineprint"><span>© 2026 SOFT SPOT STUDIO</span><span className="fineprint-center">A LITTLE CURIOUS. ALWAYS.</span><span>MADE WITH FEELING <Spark /></span></div>
      </div>
    </footer>
  );
}
