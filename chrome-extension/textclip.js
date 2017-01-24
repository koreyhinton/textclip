// Copyright Korey Hinton
// License: GNU GPL v3, see COPYING file

function downloadTxtFile(name, content) {
    var el = window.document.createElement("a");
    el.href = window.URL.createObjectURL(new Blob([content],{type: "text/txt"}));
    el.download = name;
    window.document.body.appendChild(el);
    el.click();
    window.document.body.removeChild(el);
}

function textclip(data) {
    var date = new Date().toLocaleString().replace(" ", "_");
    var filename = "textclip-" + date + ".txt";
    var formatted = data.selectionText.replace(/(.{1,74}(?: |$)|.{74})/g, "$1\r\n");
    downloadTxtFile(filename, formatted);
};

chrome.contextMenus.create({

    title: "textclip: Download selection as plain text",
    contexts:["selection"],
    onclick: textclip

});
