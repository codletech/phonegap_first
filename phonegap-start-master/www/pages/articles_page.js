/**
 Creates the categories page content.
 */
var articlesPageContentArr = [];
articlesPageContentArr.push(
    viewsFactory.title({
        id: "articles_title",
        title: "כתבות",
        cssClasses: "title1"
    }),
    viewsFactory.centerdDiv( {
        content: viewsFactory.button({
            id: "articles_button",
            text: "חזור",
            cssClasses: "button1",
            inlineStyle:"margin-top:5px;",
            onClick: function() {
                cPages.moveBack(app.container);
            }
        })
    } )

);

var articlesPageContent = articlesPageContentArr.join("");

cPages.addPage("articles",articlesPageContent);