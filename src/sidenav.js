const sidenav = document.createElement('template');

sidenav.innerHTML = `
    <div id="content-topbar" style="overflow:auto;position:fixed;background-color: rgb(24,31,38);width: 100%;left:0;top:0;">
        <a class="topbara" href="index.html">Home</a>
        <a class="topbara" href="projects.html">Projects</a>
        <a class="topbara" href=family.html>Family</a>
        <a class="topbara" href=logs.html>Logs</a>
        <a class="topbara" href=education.html>Education</a>
        <a class="topbara" href=contactme.html>Contact Me</a>
    </div>
    <div class="sidenav" id="content-desktop">
        <a href="index.html">Home</a>
        <a href="projects.html">Projects</a>
        <a href=family.html>Family</a>
        <a href=logs.html>Logs</a>
        <a href=education.html>Education</a>
        <a href=contactme.html>Contact Me</a>
    </div>
`;

document.body.appendChild(sidenav.content);