function run() {
    let htmlcode = document.getElementById("html-code");
    let csscode = document.getElementById("css-code");
    let javascriptcode = document.getElementById("JavaScript-code");
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlcode.value + "<style>" + csscode.value + "</style>";
    output.contentWindow.eval(javascriptcode.value)
}