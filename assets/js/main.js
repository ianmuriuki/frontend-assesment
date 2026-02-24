'use strict';

const MEMBERSHIPS = [
  { cardId: 'foundationCard', targetId: 'foundationDesc', chevronId: 'foundationChevron' },
  { cardId: 'economyCard',    targetId: 'economyDesc',    chevronId: 'economyChevron'    },
];

// This function handles both click and keyboard interactions for toggling membership details
function toggleMembership(card, targetId, chevronId) {
  const collapseEl = document.getElementById(targetId);
  const chevron    = document.getElementById(chevronId);
  if (!collapseEl || !chevron) return;

  const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false });
  const isOpen     = card.getAttribute('aria-expanded') === 'true';

  if (isOpen) {
    bsCollapse.hide();
    card.setAttribute('aria-expanded', 'false');
    chevron.classList.remove('rotated');
    card.classList.remove('open');
  } else {
    bsCollapse.show();
    card.setAttribute('aria-expanded', 'true');
    chevron.classList.add('rotated');
    card.classList.add('open');
  }
}


// this is the entry point for the contact form JS, which is separate from the membership details logic
document.addEventListener('DOMContentLoaded', () => {
  MEMBERSHIPS.forEach(({ cardId, targetId, chevronId }) => {
    const card = document.getElementById(cardId);
    if (!card) return;

    card.addEventListener('click', () => toggleMembership(card, targetId, chevronId));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMembership(card, targetId, chevronId);
      }
    });
  });

  initContactForm();
});