/**
 Creates the main page content.
 */

var mainPageContentArr = [];
    mainPageContentArr.push(
    viewsFactory.title({
        id: "main_title",
        title: "נתיבותי",
        cssClasses: "title1"
    }),
    viewsFactory.centerdDiv( {
        content: viewsFactory.button({
            id: "main_button",
            text: "קטגוריות",
            cssClasses: "button1",
            inlineStyle:"margin-top:5px;",
            onClick: function() {
                cPages.moveToPage(app.container,"articles");
            }
        })
    } )

    );

var mainPageContent = mainPageContentArr.join("");

cPages.addPage("main",mainPageContent);