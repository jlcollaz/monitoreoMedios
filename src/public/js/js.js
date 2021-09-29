function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  } 

  if(mm<10) {
      mm = '0'+mm
  } 

  today = yyyy + '-' + mm + '-' + dd;
  console.log(today);
  try {
    document.getElementById("current_date").value = today;
    document.getElementById("current_date2").value = today;
  } catch (e) {
  }
}

function form_submit(){
  document.getElementById('theForm').submit();
}

window.onload = function() {
  getDate();
};