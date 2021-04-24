function run() {
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
