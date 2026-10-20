const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileNav = document.querySelector<HTMLElement>('#mobile-nav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    mobileNav.hidden = expanded;
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const form = document.querySelector<HTMLFormElement>('#appointment-form');
const formStatus = document.querySelector<HTMLElement>('#form-status');

form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const values = new FormData(form);
  const name = String(values.get('name') ?? '').trim();
  const email = String(values.get('email') ?? '').trim();
  const phone = String(values.get('phone') ?? '').trim();
  const reason = String(values.get('reason') ?? '').trim();
  const message = String(values.get('message') ?? '').trim();
  const subject = encodeURIComponent(`Appointment request from ${name}`);
  const body = encodeURIComponent(
    `Hello McKinley Road Dental,\n\nI would like to request an appointment.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nReason: ${reason}\n\nAdditional details: ${message || 'None provided'}\n\nThank you.`,
  );

  if (formStatus) formStatus.textContent = 'Your email app is opening with the request. Please review and send it to complete your request.';
  window.location.href = `mailto:mckinleyroaddental@yahoo.com?subject=${subject}&body=${body}`;
});

const year = document.querySelector<HTMLElement>('#year');
if (year) year.textContent = '2026';

const tocLinks = document.querySelectorAll<HTMLAnchorElement>('.policy-toc-list a');
if (tocLinks.length > 0) {
  const sections = Array.from(tocLinks)
    .map(link => {
      const id = link.getAttribute('href')?.replace('#', '');
      return id ? document.getElementById(id) : null;
    })
    .filter((el): el is HTMLElement => el !== null);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          tocLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.style.fontWeight = '600';
              link.style.color = 'var(--mint)';
              link.style.backgroundColor = '#eaf6f4';
            } else {
              link.style.fontWeight = 'normal';
              link.style.color = '';
              link.style.backgroundColor = '';
            }
          });
        }
      });
    },
    { rootMargin: '-80px 0px -70% 0px' },
  );

  sections.forEach(section => observer.observe(section));
}
