function rimuoviForm(formId) {
    document.getElementById('registrazione').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById(formId).style.display = 'grid';
          }
  
  function rimuoviNote() {
    var helpNote = document.getElementById('help-note');
    helpNote.style.display = (helpNote.style.display === 'none') ? 'grid' : 'none';
  }
  