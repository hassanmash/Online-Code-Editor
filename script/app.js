import 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/codemirror.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/mode/xml/xml.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/mode/css/css.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/mode/javascript/javascript.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/mode/htmlmixed/htmlmixed.js';


var doc = document.getElementById('code_result').contentWindow.document;
var html_value;
var css_value;
var js_value;
var themeCode;
themeCode = "monokai";
export function changeFunc() {
    var selectBox = document.getElementById("codeMode");
    var themeCode = selectBox.options[selectBox.selectedIndex].value;
    editor1.setOption("theme",themeCode);
    editor2.setOption("theme",themeCode);
    editor3.setOption("theme",themeCode);
   }
var editor1 = CodeMirror.fromTextArea(document.getElementById("code1"), {
    styleActiveLine: true,
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "htmlmixed",
    // theme: "monokai",
    theme: themeCode,
});
var editor2 = CodeMirror.fromTextArea(document.getElementById("code2"), {
    styleActiveLine: true,
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "htmlmixed",
    // theme: "base16-dark",
    theme: themeCode,
});
var editor3 = CodeMirror.fromTextArea(document.getElementById("code3"), {
    styleActiveLine: true,
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "htmlmixed",
    // theme: "base16-dark",
    theme: themeCode,
});

// export { editor1 , editor2 , editor3 };

export function run() {
    html_value = editor1.getValue();
    css_value = editor2.getValue();
    js_value = editor3.getValue();
    
    doc.open();
    doc.writeln(
        html_value +
        css_value +
        js_value
    );
    doc.close();
}

