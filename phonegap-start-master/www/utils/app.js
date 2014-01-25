/**
 * App object.
 */
var app;
app = {
    container: document.getElementById("app_container"),
    init: function() {
        FastClick.attach(document.body);
        cPages.addPage("main",mainPageContent);
        cPages.addPage("articles",articlesPageContent);
        this.container.innerHTML = cPages.get("main").content;
    }


};

app.init();