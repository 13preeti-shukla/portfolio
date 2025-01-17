
function openTab(tabName) {
   // Hide all tab contents
   var i;
   var tabContents = document.getElementsByClassName("tab-contents");
   for (i = 0; i < tabContents.length; i++) {
       tabContents[i].style.display = "none";
   }

   // Remove the active class from all tablinks
   var tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" active-link", "");
   }

   // Show the current tab, and add an "active" class to the button that opened the tab
   document.getElementById(tabName).style.display = "block";
   document.getElementById(tabName + "Tab").className += " active-link";
}

// Initialize by hiding all tab contents except the first one
document.getElementById("Skills").style.display = "none";
document.getElementById("Education").style.display = "none";
document.getElementById("Experience").style.display = "none";
