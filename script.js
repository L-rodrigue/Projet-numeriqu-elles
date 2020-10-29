document.getElementById('listener').addEventListener('click', function(e) {
if(document.getElementById('target').style.display == 'none'){
    document.getElementById('target').style.display = 'block';
  }
  else {
    document.getElementById('target').style.display = 'none';
  }
});
