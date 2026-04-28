const TECH_ICONS = {
  // Languages
  'C#':             'devicon-csharp-plain colored',
  'JavaScript':     'devicon-javascript-plain colored',
  'Java':           'devicon-java-plain colored',
  'Python':         'devicon-python-plain colored',
  'PHP':            'devicon-php-plain colored',

  // Frontend
  'React':          'devicon-react-original colored',
  'React.js':       'devicon-react-original colored',
  'React Native':   'devicon-react-original colored',
  'React-Native':   'devicon-react-original colored',
  'Redux':          'devicon-redux-original colored',
  'HTML':           'devicon-html5-plain colored',
  'HTML5':          'devicon-html5-plain colored',
  'CSS':            'devicon-css3-plain colored',
  'CSS3':           'devicon-css3-plain colored',
  'jQuery':         'devicon-jquery-plain colored',
  'Bootstrap':      'devicon-bootstrap-plain colored',
  'ES6+':           'devicon-javascript-plain colored',

  // Frontend (additional)
  'Angular':        'devicon-angularjs-plain colored',

  // Backend & Runtimes
  'Node.js':        'devicon-nodejs-plain colored',
  'Meteor.js':      'devicon-meteor-plain colored',
  '.NET':           'devicon-dotnetcore-plain colored',
  '.NET / ASP.NET': 'devicon-dotnetcore-plain colored',
  'ASP.NET':        'devicon-dotnetcore-plain colored',
  'ASP.Net':        'devicon-dotnetcore-plain colored',
  'MVC':            'devicon-dotnetcore-plain colored',
  'MVC .Net':       'devicon-dotnetcore-plain colored',

  // Tools & Platforms
  'GitLab':         'devicon-gitlab-plain colored',
  'Figma':          'devicon-figma-plain colored',
  'MS Project':     'devicon-windows8-original colored',

  // Cloud & DevOps
  'AWS':            'devicon-amazonwebservices-plain-wordmark colored',
  'Google Cloud':   'devicon-googlecloud-plain colored',
  'Docker':         'devicon-docker-plain colored',
  'GitHub Actions': 'devicon-githubactions-plain colored',

  // Databases
  'MongoDB':        'devicon-mongodb-plain colored',
  'MySQL':          'devicon-mysql-plain colored',
  'Oracle':         'devicon-oracle-original colored',
  'SQL Server':     'devicon-microsoftsqlserver-plain colored',
  'MS SQL':         'devicon-microsoftsqlserver-plain colored',
  'MS-SQL':         'devicon-microsoftsqlserver-plain colored',
};

function applyTechIcons() {
  document.querySelectorAll('.tech-tag, .skill-chip').forEach(function (el) {
    if (el.querySelector('i[class*="devicon"]')) return; // already applied
    var key = el.textContent.trim();
    var iconClass = TECH_ICONS[key];
    if (!iconClass) return;
    var icon = document.createElement('i');
    icon.className = iconClass;
    el.insertBefore(icon, el.firstChild);
  });
}
