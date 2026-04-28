function generateAndDownloadCV() {
  var btn = document.querySelector('.btn-cv');
  var original = btn.innerHTML;
  btn.innerHTML = 'Generating…';
  btn.style.pointerEvents = 'none';

  var cvEl = document.createElement('div');
  cvEl.style.cssText = 'position:fixed;left:-9999px;top:0;width:794px;background:#fff;';
  cvEl.innerHTML = buildCVHTML();
  document.body.appendChild(cvEl);

  html2pdf().set({
    margin: [14, 16, 14, 16],
    filename: 'Roshdy_Kamel_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, letterRendering: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }).from(cvEl).save().then(function () {
    document.body.removeChild(cvEl);
    btn.innerHTML = original;
    btn.style.pointerEvents = '';
  });
}

function buildCVHTML() {
  var dot = ' \xb7 ';

  var expHTML = Array.from(document.querySelectorAll('.timeline-item')).map(function (item) {
    var role     = ((item.querySelector('.exp-role')    || {}).textContent || '').trim();
    var company  = ((item.querySelector('.exp-company') || {}).textContent || '').trim();
    var spans    = Array.from(item.querySelectorAll('.exp-period span'));
    var date     = spans[0] ? spans[0].textContent.trim() : '';
    var location = spans[1] ? spans[1].textContent.trim() : '';
    var summary  = ((item.querySelector('.exp-summary') || {}).textContent || '').trim();
    var bullets  = Array.from(item.querySelectorAll('.exp-bullets li'))
      .map(function (li) { return '<li>' + li.textContent.trim() + '</li>'; }).join('');
    var tech     = Array.from(item.querySelectorAll('.exp-tech .tech-tag'))
      .map(function (t) { return t.textContent.trim(); }).join(', ');

    return '<div class="cve">' +
      '<div class="cvr"><div><b>' + role + '</b><br><em>' + company + dot + location + '</em></div>' +
      '<div class="cvd">' + date + '</div></div>' +
      (summary ? '<p class="cvp">' + summary + '</p>' : '') +
      '<ul>' + bullets + '</ul>' +
      (tech ? '<p class="cvt"><b>Tech:</b> ' + tech + '</p>' : '') +
      '</div>';
  }).join('');

  var projectsHTML = Array.from(document.querySelectorAll('.project-card')).map(function (card) {
    var title  = ((card.querySelector('.project-title')  || {}).textContent || '').trim();
    var role   = ((card.querySelector('.project-role')   || {}).textContent || '').trim();
    var period = ((card.querySelector('.project-period') || {}).textContent || '').trim();
    var desc   = ((card.querySelector('.project-desc')   || {}).textContent || '').trim();
    var tech   = Array.from(card.querySelectorAll('.project-tech .tech-tag'))
      .map(function (t) { return t.textContent.trim(); }).join(', ');

    return '<div class="cve">' +
      '<div class="cvr"><div><b>' + title + '</b><br><em>' + role + '</em></div>' +
      '<div class="cvd">' + period + '</div></div>' +
      '<p class="cvp">' + desc + '</p>' +
      (tech ? '<p class="cvt"><b>Tech:</b> ' + tech + '</p>' : '') +
      '</div>';
  }).join('');

  var skillsHTML = Array.from(document.querySelectorAll('.skill-category')).map(function (cat) {
    var name  = ((cat.querySelector('h3') || {}).textContent || '').trim();
    var chips = Array.from(cat.querySelectorAll('.skill-chip')).map(function (c) { return c.textContent.trim(); });
    var soft  = Array.from(cat.querySelectorAll('.soft-skill')).map(function (s) { return s.textContent.trim(); });
    return '<p class="cvs"><b>' + name + ':</b> ' + chips.concat(soft).join(', ') + '</p>';
  }).join('');

  var certsHTML = Array.from(document.querySelectorAll('.cert-card')).map(function (c) {
    var name   = ((c.querySelector('h4')         || {}).textContent || '').trim();
    var issuer = ((c.querySelector('.cert-info p') || {}).textContent || '').trim();
    return '<p class="cvp">&#8226; <b>' + name + '</b> &mdash; ' + issuer + '</p>';
  }).join('');

  var eduHTML = Array.from(document.querySelectorAll('.edu-card')).map(function (card) {
    var degree = ((card.querySelector('h4')         || {}).textContent || '').trim();
    var school = ((card.querySelector('.edu-school') || {}).textContent || '').trim();
    var detail = Array.from(card.querySelectorAll('.edu-info p'))
      .map(function (p) { return p.textContent.trim(); }).join(dot);
    return '<div class="cve"><b>' + degree + '</b> &mdash; <em>' + school + '</em><br><small>' + detail + '</small></div>';
  }).join('');

  var css =
    '*{margin:0;padding:0;box-sizing:border-box}' +
    'body{font-family:Arial,sans-serif;font-size:10.5pt;color:#111;line-height:1.45}' +
    '.w{padding:16mm 18mm}' +
    '.hd{text-align:center;padding-bottom:12px;margin-bottom:16px;border-bottom:2px solid #111}' +
    '.hn{font-size:22pt;font-weight:700}.ht{font-size:12pt;margin:3px 0 6px}.hc{font-size:9.5pt;color:#333}' +
    '.cs{margin-bottom:15px}' +
    '.cst{font-size:11pt;font-weight:700;text-transform:uppercase;letter-spacing:.07em;border-bottom:1.5px solid #111;padding-bottom:3px;margin-bottom:9px}' +
    '.cve{margin-bottom:10px}' +
    '.cvr{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:3px}' +
    '.cvd{font-size:9.5pt;color:#444;white-space:nowrap;margin-left:8px}' +
    '.cvp{font-size:10pt;color:#222;margin:4px 0 5px;line-height:1.5}' +
    'ul{margin:4px 0 5px 18px}li{font-size:10pt;margin:2px 0;line-height:1.4}' +
    '.cvt{font-size:9.5pt;color:#444;margin-top:3px}' +
    '.cvs{font-size:10pt;margin-bottom:5px;line-height:1.5}';

  return '<!DOCTYPE html><html><head><meta charset="UTF-8"><style>' + css + '</style></head><body><div class="w">' +
    '<div class="hd">' +
      '<div class="hn">M. Roshdy Kamel</div>' +
      '<div class="ht">Lead Software Engineer</div>' +
      '<div class="hc">roshdy89@gmail.com &nbsp;|&nbsp; +966 562 406 698 &nbsp;|&nbsp; Riyadh, Saudi Arabia &nbsp;|&nbsp; linkedin.com/in/roshdy-kamel</div>' +
    '</div>' +
    '<div class="cs"><div class="cst">Summary</div>' +
      '<p class="cvp">Lead Software Engineer with 15+ years building trading platforms, fintech apps, and scalable systems across Saudi Arabia, Egypt, and Kuwait. Experienced CTO, co-founder, and team lead delivering enterprise-grade solutions. Core stack: C#, JavaScript, React, Node.js, Java, and MongoDB.</p>' +
    '</div>' +
    '<div class="cs"><div class="cst">Experience</div>' + expHTML + '</div>' +
    '<div class="cs"><div class="cst">Projects</div>' + projectsHTML + '</div>' +
    '<div class="cs"><div class="cst">Skills</div>' + skillsHTML + '</div>' +
    '<div class="cs"><div class="cst">Certifications</div>' + certsHTML + '</div>' +
    '<div class="cs"><div class="cst">Education</div>' + eduHTML + '</div>' +
    '</div></body></html>';
}
