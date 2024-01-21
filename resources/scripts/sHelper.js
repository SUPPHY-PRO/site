var mainForm = document.getElementById("mainForm");
var isOnAllCB = true;
var GuardServ = document.getElementById("2-15");
var cbFirstArray = [
    document.getElementById("1-1"),
    document.getElementById("1-2"),
    document.getElementById("1-3"),
    document.getElementById("1-4"),
    document.getElementById("1-5"),
    document.getElementById("1-6"),
    document.getElementById("1-7"),
    document.getElementById("1-8"),
    document.getElementById("1-9"),
    document.getElementById("1-10"),
    document.getElementById("1-11"),
    document.getElementById("1-12"),
    document.getElementById("1-13"),
    document.getElementById("1-14")
]

var cbSecondArray = [
    document.getElementById("2-1"),
    document.getElementById("2-2"),
    document.getElementById("2-3"),
    document.getElementById("2-4"),
    document.getElementById("2-5"),
    document.getElementById("2-6"),
    document.getElementById("2-7"),
    document.getElementById("2-8"),
    document.getElementById("2-9"),
    document.getElementById("2-10"),
    document.getElementById("2-11"),
    document.getElementById("2-12"),
    document.getElementById("2-13"),
    document.getElementById("2-14")
]

cbFirstArray.forEach(element => {
    element.style.visibility = "hidden";
    element.checked = false;
  });

  GuardServ.addEventListener('change', function() {
    if (this.checked) {
        cbFirstArray.forEach(element => {
        element.style.visibility = "visible";
        element.checked = true;
      });
    } else {
        cbFirstArray.forEach(element => {
            element.style.visibility = "hidden";
            element.checked = false;
          });
    }
  });

mainForm.addEventListener("dblclick", function() {
    cbSecondArray.forEach(element => {
        if (isOnAllCB == true){
            element.checked = true;
        } else{
            element.checked = false;
        }
      });
    isOnAllCB = !isOnAllCB;
});