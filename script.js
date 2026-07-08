/**
 * script.js — Tata Usaha Book Calculator
 * Semua DOM diakses SETELAH halaman selesai dimuat (DOMContentLoaded).
 */

document.addEventListener('DOMContentLoaded', function () {

  // ── State ────────────────────────────────────────────────
  const state = {
    books:    [],
    selected: new Set(),
    query:    '',
  };

  // ── DOM refs ─────────────────────────────────────────────
  const gradeSelect    = document.getElementById('grade-select');
  const searchInput    = document.getElementById('search-input');
  const bookGrid       = document.getElementById('book-grid');
  const stateEmpty     = document.getElementById('state-empty');
  const stateNoResults = document.getElementById('state-no-results');
  const topbarTitle    = document.getElementById('topbar-title');
  const statTotal      = document.getElementById('stat-total');
  const statSelected   = document.getElementById('stat-selected');
  const statRemaining  = document.getElementById('stat-remaining');
  const footerTotal    = document.getElementById('footer-total');
  const footerCount    = document.getElementById('footer-count');
  const footerSummary  = document.getElementById('footer-summary');
  const btnSelectAll   = document.getElementById('btn-select-all');
  const btnReset       = document.getElementById('btn-reset');
  const btnLoad        = document.getElementById('btn-load');
  const overlay        = document.getElementById('overlay');
  const btnConfirm     = document.getElementById('btn-confirm');
  const btnCancel      = document.getElementById('btn-cancel');

  // ── Helpers ──────────────────────────────────────────────
  function formatRupiah(n) {
    return 'Rp' + n.toLocaleString('id-ID');
  }

  function escapeHtml(s) {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getProgram() {
    const radios = document.querySelectorAll('input[name="program"]');
    for (const r of radios) if (r.checked) return r.value;
    return null;
  }

  // ── Render books ─────────────────────────────────────────
  function renderBooks() {
    const q = state.query.trim().toLowerCase();
    const filtered = state.books
      .map((b, i) => ({ ...b, idx: i }))
      .filter(b => b.name.toLowerCase().includes(q));

    if (state.books.length === 0) {
      stateEmpty.style.display     = 'flex';
      stateNoResults.style.display = 'none';
      bookGrid.style.display       = 'none';
      return;
    }
    stateEmpty.style.display = 'none';

    if (filtered.length === 0) {
      stateNoResults.style.display = 'flex';
      bookGrid.style.display       = 'none';
      return;
    }
    stateNoResults.style.display = 'none';
    bookGrid.style.display       = 'grid';

    bookGrid.innerHTML = filtered.map(b => {
      const sel = state.selected.has(b.idx);
      return `
        <div class="book-card${sel ? ' selected' : ''}"
             data-index="${b.idx}" role="checkbox"
             aria-checked="${sel}" tabindex="0">
          <div class="book-checkbox">
            <span class="book-checkbox-check">✓</span>
          </div>
          <div class="book-info">
            <div class="book-name">${escapeHtml(b.name)}</div>
            <div class="book-price">${formatRupiah(b.price)}</div>
          </div>
        </div>`;
    }).join('');
  }

  // ── Render footer ────────────────────────────────────────
  function renderFooter() {
    let total = 0;
    const names = [];
    for (const i of state.selected) {
      const b = state.books[i];
      if (b) { total += b.price; names.push(b.name); }
    }
    footerTotal.textContent = formatRupiah(total);
    footerCount.textContent = state.selected.size;
    footerSummary.innerHTML = names.length
      ? names.map(n =>
          `<span class="summary-chip">
             <span class="summary-chip-check">✓</span>${escapeHtml(n)}
           </span>`).join('')
      : '<span class="footer-summary-empty">Belum ada buku dipilih</span>';
  }

  // ── Render stats ─────────────────────────────────────────
  function renderStats() {
    statTotal.textContent     = state.books.length;
    statSelected.textContent  = state.selected.size;
    statRemaining.textContent = state.books.length - state.selected.size;
  }

  function refresh() { renderBooks(); renderFooter(); renderStats(); }

  // ── Load books ───────────────────────────────────────────
  const LABEL = { excellent: 'Excellent', tahfidz: 'Tahfidz', lcp: 'LCP', inklusi: 'Inklusi' };

  function loadBooks() {
    const grade   = parseInt(gradeSelect.value, 10);
    const program = getProgram();

    if (!grade || !program || !BOOKS[grade] || !BOOKS[grade][program]) {
      state.books    = [];
      state.selected = new Set();
      topbarTitle.textContent = 'Pilih kelas & program';
      refresh();
      return;
    }

    state.books    = BOOKS[grade][program];
    state.selected = new Set();
    state.query    = '';
    searchInput.value       = '';
    topbarTitle.textContent = `Kelas ${grade} — ${LABEL[program] || program}`;
    refresh();
  }

  // ── Auto-load on change ──────────────────────────────────
  gradeSelect.addEventListener('change', loadBooks);
  document.querySelectorAll('input[name="program"]')
          .forEach(r => r.addEventListener('change', loadBooks));
  btnLoad.addEventListener('click', loadBooks);

  // ── Card toggle ──────────────────────────────────────────
  function toggle(index) {
    state.selected.has(index)
      ? state.selected.delete(index)
      : state.selected.add(index);
    refresh();
  }

  bookGrid.addEventListener('click', function (e) {
    const card = e.target.closest('.book-card');
    if (card) toggle(+card.dataset.index);
  });

  bookGrid.addEventListener('keydown', function (e) {
    if (e.key === ' ' || e.key === 'Enter') {
      const card = e.target.closest('.book-card');
      if (card) { e.preventDefault(); toggle(+card.dataset.index); }
    }
  });

  // ── Search ───────────────────────────────────────────────
  searchInput.addEventListener('input', function () {
    state.query = searchInput.value;
    renderBooks();
  });

  // ── Select All ───────────────────────────────────────────
  btnSelectAll.addEventListener('click', function () {
    if (!state.books.length) return;
    if (state.selected.size === state.books.length) state.selected.clear();
    else state.books.forEach((_, i) => state.selected.add(i));
    refresh();
  });

  // ── Reset ────────────────────────────────────────────────
  btnReset.addEventListener('click', function () {
    if (state.selected.size > 0) overlay.classList.add('active');
  });
  btnConfirm.addEventListener('click', function () {
    state.selected.clear();
    overlay.classList.remove('active');
    refresh();
  });
  btnCancel.addEventListener('click', function () {
    overlay.classList.remove('active');
  });
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) overlay.classList.remove('active');
  });

  // ── Keyboard shortcuts ───────────────────────────────────
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') overlay.classList.remove('active');
    if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
      if (document.activeElement === searchInput) return;
      e.preventDefault();
      btnSelectAll.click();
    }
  });

  // ── Init ─────────────────────────────────────────────────
  gradeSelect.value = '4';
  loadBooks();

}); // end DOMContentLoaded
