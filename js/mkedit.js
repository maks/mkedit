function mkEditKeyHandler(editor, keyEvent) {
    console.log('got key:',keyEvent);

}

function gotColon(editor) {
    console.log(':');
    jQuery('#cli').focus();
    jQuery('#cli').val(':');
    editor.save();
    console.log(editor.getValue().substring(0, 30));
}

function gotSlash(editor) {
    console.log('/');
}

function init() {
    console.log('mkedit started');

    CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        mode: "text/x-csrc",
        keyMap: "vim",
        extraKeys: { 
            'Shift-;' : gotColon,
            '/' : gotSlash 
        }
    });
}
jQuery(init);

