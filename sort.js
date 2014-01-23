function sort() {
  var textarea = document.querySelector("textarea")
  if(!textarea) return

  var text = textarea.value
  var selected = text.slice(text.selectionStart, textarea.selectionEnd)
  if(!selected) return

  var sorted = selected.match(/^[\*|\+|\-].*$/gm).sort(function(a, b){
    return a.toLowerCase().localeCompare(b.toLowerCase())
  })

  textarea.value = text.slice(0, textarea.selectionStart) + sorted.join("\n") + text.slice(textarea.selectionEnd);
}

sort();
