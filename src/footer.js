const footer = document.createElement('template');
footer.innerHTML = `
    <br><br>
    <footer>
        <p style="text-align:left;">
            All Work © 2022 JJ 🐲 Built with <a href="https://watercss.kognise.dev">Water.css</a>
            <span style="float:right;">
            <a href="#">Back to top ⬆</a>
            </span>
        </p?
    </footer>
`
document.getElementsByClassName("main")[0].appendChild(footer.content);