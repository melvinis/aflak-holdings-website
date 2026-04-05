// Shared nav and footer for Aflak Holdings
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
  <div class="cursor" id="cursor"></div>
  <div class="cursor-ring" id="cursorRing"></div>
  <nav id="mainNav">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-mark"><span>A</span></div>
      Aflak Holdings
    </a>
    <ul class="nav-links">
      <li><a href="about.html" ${currentPage==='about.html'?'class="active"':''}>About</a></li>
      <li><a href="sectors-financial.html" ${currentPage.startsWith('sector')?'class="active"':''}>Sectors</a></li>
      <li><a href="leadership.html" ${currentPage==='leadership.html'?'class="active"':''}>Leadership</a></li>
      <li><a href="investor-relations.html" ${currentPage.startsWith('investor')?'class="active"':''}>Investors</a></li>
      <li><a href="careers.html" ${currentPage==='careers.html'?'class="active"':''}>Careers</a></li>
    </ul>
    <a href="contact-ir.html" class="nav-cta">Get in Touch</a>
  </nav>`;

  const footerHTML = `
  <div class="divider"><div class="divider-line"></div><div class="divider-diamond"></div><div class="divider-line"></div></div>
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo">
          <div class="nav-logo-mark"><span>A</span></div>
          Aflak Holdings
        </a>
        <p>A newly established investment group founded in Dubai, focused on real estate, financial services, and technology.</p>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="leadership.html">Leadership</a></li>
          <li><a href="values.html">Our Values</a></li>
          <li><a href="sustainability.html">Sustainability</a></li>
          <li><a href="careers.html">Careers</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Sectors</h4>
        <ul>
          <li><a href="sectors-financial.html">Financial Services</a></li>
          <li><a href="sectors-technology.html">Technology</a></li>
          <li><a href="sectors-realestate.html">Real Estate</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Investors</h4>
        <ul>
          <li><a href="investor-relations.html">Investor Relations</a></li>
          <li><a href="annual-reports.html">Annual Reports</a></li>
          <li><a href="governance.html">Governance</a></li>
          <li><a href="contact-ir.html">Contact IR</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Aflak Holdings LLC. All rights reserved. Gate Avenue, DIFC, Dubai, UAE.</p>
      <div class="footer-social">
        <a href="#" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="#" aria-label="X">
          <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
        </a>
      </div>
    </div>
  </footer>`;

  // Insert nav at start of body
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  // Insert footer at end of body
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    cursor.style.transform=`translate(${mx-4}px,${my-4}px)`;
  });
  function animRing(){
    rx+=(mx-rx-16)*.12; ry+=(my-ry-16)*.12;
    ring.style.transform=`translate(${rx}px,${ry}px)`;
    requestAnimationFrame(animRing);
  }
  animRing();
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ring.style.opacity='.4';});
    el.addEventListener('mouseleave',()=>{ring.style.opacity='1';});
  });
})();
