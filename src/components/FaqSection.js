import { faqList } from '../data/faq.js';

export function renderFaqSection() {
  const itemsHtml = faqList
    .map(
      (item, idx) => `
      <div class="faq-item ${idx === 0 ? 'open' : ''}" data-faq-index="${idx}">
        <button type="button" class="faq-question-btn" aria-expanded="${idx === 0 ? 'true' : 'false'}">
          <span>${item.question}</span>
          <span class="faq-icon" style="font-size: 1.25rem; font-weight: bold; color: var(--color-pine-emerald); transition: transform 0.2s;">
            ${idx === 0 ? '−' : '+'}
          </span>
        </button>
        <div class="faq-answer-content">
          <p>${item.answer}</p>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section class="catalog-section" id="faq" style="background: var(--color-surface-white); border-top: 1px solid var(--color-border-subtle);">
      <div class="calc-container">
        
        <div class="section-header">
          <span class="badge badge-gold" style="margin-bottom: 12px;">American Buyer Clarity</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know about our California warehouse delivery, HSA/FSA coverage, home trial, and 16" wood stud installation.
          </p>
        </div>

        <div class="faq-container" id="faq-container">
          ${itemsHtml}
        </div>

        <div style="text-align: center; margin-top: 40px; font-size: 0.9375rem; color: var(--color-text-muted);">
          Have an unanswered question? Contact our Burbank, CA team at 
          <a href="mailto:support@evminovusa.com" style="color: var(--color-pine-emerald); font-weight: 700; text-decoration: underline;">
            support@evminovusa.com
          </a>
          or call <strong>(818) 555-SPINE</strong> (Mon–Fri 8am–6pm PST).
        </div>

      </div>
    </section>
  `;
}

export function initFaqSection() {
  document.querySelectorAll('.faq-question-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      const icon = btn.querySelector('.faq-icon');

      // Close other items
      document.querySelectorAll('.faq-item').forEach((i) => {
        i.classList.remove('open');
        const b = i.querySelector('.faq-question-btn');
        if (b) b.setAttribute('aria-expanded', 'false');
        const ic = i.querySelector('.faq-icon');
        if (ic) ic.textContent = '+';
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        if (icon) icon.textContent = '−';
      }
    });
  });
}
