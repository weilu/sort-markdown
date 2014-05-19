(function() {
  var textarea = document.activeElement;
  if (!textarea
    || textarea.tagName.toLowerCase() != "textarea") {
      return;
    }

  var text = textarea.value;
  
  var selected = text.slice(textarea.selectionStart, textarea.selectionEnd)
                      .match(/^[\*|\+|\-].*$/gm);
  if (!selected) {
    return;
  }
  
  var sorted = selected.sort(function(a, b){
    return a.toLowerCase().localeCompare(b.toLowerCase())
  })

  textarea.value = text.slice(0, textarea.selectionStart) + sorted.join("\n") + text.slice(textarea.selectionEnd);
})();