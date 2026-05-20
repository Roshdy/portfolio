// Icon sources:
//   string value  → Devicon CSS class (font icon)
//   { si: slug }  → Simple Icons CDN  (https://cdn.simpleicons.org/slug)
//   { img: url }  → Direct image URL

const TECH_ICONS = {
  /* ── Platforms ──────────────────────────────────────────────────── */
  'iOS':            'devicon-apple-original colored',
  'Mac':            'devicon-apple-original colored',
  'macOS':            'devicon-apple-original colored',
  'Linux':          'devicon-linux-plain colored',
  'Windows':        'devicon-windows8-original colored',
  'Git':            'devicon-git-plain colored',

  /* ── Unity ecosystem ─────────────────────────────────────────────── */
  'ECS':            'devicon-unity-original colored',
  'Unity Profiler': { img: 'https://www.google.com/s2/favicons?domain=unity.com&sz=64' },

  /* ── Game / XR tools ────────────────────────────────────────────── */
  'Oculus SDK':     { img: 'https://www.google.com/s2/favicons?domain=meta.com&sz=64' },
  'Samsung Gear VR':{ img: 'https://www.google.com/s2/favicons?domain=samsung.com&sz=64' },
  'Vuforia AR SDK': { img: 'https://www.google.com/s2/favicons?domain=ptc.com&sz=64' },
  'GameSparks':     { img: 'https://www.google.com/s2/favicons?domain=gamesparks.com&sz=64' },
  'QGis':           { img: 'https://www.google.com/s2/favicons?domain=qgis.org&sz=64' },
  'XML':            { img: 'https://api.iconify.design/vscode-icons/file-type-xml.svg' },
  'Monodevelop':    { img: 'https://www.google.com/s2/favicons?domain=monodevelop.com&sz=64' },
  'Adobe Flash':    { img: 'https://www.google.com/s2/favicons?domain=adobe.com&sz=64' },
  'Panda.js':       { img: 'https://www.google.com/s2/favicons?domain=panda-css.com&sz=64' },


  /* ── Game Engines ────────────────────────────────────────────────── */
  'Unity3D':        { img: 'https://www.google.com/s2/favicons?domain=unity.com&sz=64' },
  'SmartFox':       { img: 'https://www.google.com/s2/favicons?domain=smartfoxserver.com&sz=64' },
  'Entitas (ECS)':       { img: './img/Entitas.png' },

  /* ── Extra Languages ─────────────────────────────────────────────── */
  'C++':            'devicon-cplusplus-plain colored',
  'Objective-C':    'devicon-objectivec-plain colored',

  /* ── Mobile & Tools ──────────────────────────────────────────────── */
  'Android':        'devicon-android-plain colored',
  'Android Studio': 'devicon-androidstudio-plain colored',
  'Arduino':        'devicon-arduino-plain colored',
  'OpenCV':         'devicon-opencv-plain colored',
  'Xamarin':        'devicon-xamarin-original colored',
  'Xamarin SDK':    'devicon-xamarin-original colored',


  /* ── Languages ──────────────────────────────────────────────────── */
  'C#':             'devicon-csharp-plain colored',
  'JavaScript':     'devicon-javascript-plain colored',
  'Java':           'devicon-java-plain colored',
  'Python':         'devicon-python-plain colored',
  'PHP':            'devicon-php-plain colored',
  'VB':             { img: 'https://img.icons8.com/plasticine/48/microsoft-visual-basic-6.png' },
  'Visual Basic':             { img: 'https://img.icons8.com/plasticine/48/microsoft-visual-basic-6.png' },
  'VB Script':      { img: 'https://img.icons8.com/plasticine/48/microsoft-visual-basic-6.png' },

  /* ── Frontend ───────────────────────────────────────────────────── */
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
  'Angular':        'devicon-angularjs-plain colored',

  /* ── .NET family (Simple Icons — official .NET logo) ────────────── */
  '.NET':               { si: 'dotnet' },
  '.NET Core':          { si: 'dotnet' },
  '.NET Framework':     { si: 'dotnet' },
  '.NET / ASP.NET':     { si: 'dotnet' },
  'ASP.NET':            { si: 'dotnet' },
  'ASP.Net':            { si: 'dotnet' },
  'MVC':                { si: 'dotnet' },
  'MVC .Net':           { si: 'dotnet' },

  /* ── Backend & Runtimes ─────────────────────────────────────────── */
  'Node.js':        'devicon-nodejs-plain colored',
  'Meteor.js':      'devicon-meteor-plain colored',

  /* ── Auth & API ─────────────────────────────────────────────────── */
  'JWT':            { si: 'jsonwebtokens' },
  'REST':           { img: 'https://api.iconify.design/mdi/api.svg?color=%236c63ff' },
  'CI/CD':          { img: 'https://api.iconify.design/carbon/continuous-integration.svg?color=%236c63ff' },
  'SOAP / WCF':     { img: 'https://symbols.getvecta.com/stencil_25/79_soapui.5113237b76.svg' },
  'SoapUI':         { img: 'https://symbols.getvecta.com/stencil_25/79_soapui.5113237b76.svg' },
  'Microservices':  { img: 'https://img.icons8.com/color/48/network.png' },
  'Ocelot GW':      { img: 'https://raw.githubusercontent.com/ThreeMammals/Ocelot/refs/heads/assets/images/ocelot_logo.png' },
  'Nafath':         { img: './img/nafath.png' },
  'AML':            { img: 'https://amlksa.com/wp-content/uploads/2022/04/KSA-Logo.png' },
  'Simah':          { img: './img/simah.png' },
  'MasterCard':     { img: 'https://api.iconify.design/logos/mastercard.svg' },
  'Microsoft Access': { img: 'https://api.iconify.design/vscode-icons/file-type-access.svg' },

  /* ── Cloud & DevOps ─────────────────────────────────────────────── */
  'AWS':            'devicon-amazonwebservices-plain-wordmark colored',
  'Google Cloud':   'devicon-googlecloud-plain colored',
  'Docker':         'devicon-docker-plain colored',
  'GitHub Actions': 'devicon-githubactions-plain colored',
  'GitLab':         'devicon-gitlab-plain colored',
  'Figma':          'devicon-figma-plain colored',

  /* ── Databases ──────────────────────────────────────────────────── */
  'MongoDB':        'devicon-mongodb-plain colored',
  'MySQL':          'devicon-mysql-plain colored',
  'Oracle':         'devicon-oracle-original colored',
  'PL/SQL':         'devicon-oracle-original colored',
  'SQL Server':     { img: 'https://img.icons8.com/color/48/microsoft-sql-server.png' },
  'MS SQL':         { img: 'https://img.icons8.com/color/48/microsoft-sql-server.png' },
  'MS-SQL':         { img: 'https://img.icons8.com/color/48/microsoft-sql-server.png' },

  /* ── Enterprise & Middleware ────────────────────────────────────── */
  'IBM MQ':         { img: 'https://img.icons8.com/color/48/ibm.png' },

  /* ── Tools & Platforms ──────────────────────────────────────────── */
  'LightStreamer':  { img: 'https://api.nuget.org/v3-flatcontainer/lightstreamer.dotnetstandard.client/6.2.1/icon' },
  'MS Project':     { img: 'https://img.icons8.com/color/48/ms-project.png' },
  'IIS':            { img: 'https://www.deepnetsecurity.com/wp-content/uploads/MFA-for-IIS-Websites.png' },
  'Xcode':          'devicon-xcode-plain colored',
  'Cordova':        { si: 'apachecordova' },
};

const SI_BASE = 'https://cdn.simpleicons.org/';

function applyTechIcons() {
  document.querySelectorAll('.tech-tag, .skill-chip').forEach(function (el) {
    if (el.querySelector('i[class*="devicon"], img.tech-icon-img')) return;
    var key = el.textContent.trim();
    var icon = TECH_ICONS[key];
    if (!icon) return;

    var node;
    if (typeof icon === 'string') {
      node = document.createElement('i');
      node.className = icon;
    } else {
      node = document.createElement('img');
      node.className = 'tech-icon-img';
      node.alt = '';
      node.setAttribute('aria-hidden', 'true');
      node.src = icon.si ? SI_BASE + icon.si : icon.img;
    }
    el.insertBefore(node, el.firstChild);
  });
}
