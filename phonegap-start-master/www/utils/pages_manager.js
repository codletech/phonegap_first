/**
 *  Page Manager is created to help create multi-paged applications in single html file.
 */
var cPages;
cPages = {
    /* the pages */
    pages: {},
    historyStack: new Array(),
    moveBackDirection: "left",

    /**
     * Add new page to the page manager.
     * @param pageName: the name of the page.
     * @param pageContent: the content of the page.
     */
    addPage: function(pageName,pageContent) {
        //Create new page.
        this.pages[pageName] = {
            content:        pageContent,
            vars:  {}
        }
    },

    /**
     * Remove page from the page manager.
     * @param pageName
     */
    removePage: function(pageName) {
        //Check if exist.
        if (pageName in this.pages) {
            //Deletes content.
            delete this.pages[pageName];
        }
    },

    /**
     * Returns the page with pageName.
     * @param pageName
     * @returns {{content: *, vars: {}}|*}
     */
    get: function(pageName) {
        return this.pages[pageName];
    },

    moveToPage: function(container,toPage,direction) {
        this.historyStack.push(toPage);
        container.innerHTML = this.pages[toPage].content;
    },

    moveBack: function(container) {
        var page = this.historyStack.pop();
        this.moveToPage(container,page,this.moveBackDirection);
    }



}
