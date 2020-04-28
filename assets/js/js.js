 //menues...........................................................................................
 $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showen");
                  $("nav ul").toggleClass("hidden");
            });
      });

      // Scrolling Effect...................................................

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })

//Image gallery...............................................................................
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
//for active menues........................................................................
var menuactive = document.getElementById("activeDiv");
var menubtns = menuactive.getElementsByClassName("li a");
for (var i = 0; i < menubtns.length; i++) {
  menubtns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//google map...................................................................................

        function initMap(){
            var options={
                zoom: 12,
                center: {lat: 34.81001, lng: 67.82121}
            }
            var map= new google.maps.Map(document.getElementById('map'), options);
        var marker= new google.maps.Marker({
            position:{lat:34.8321, lng:-67.8268},
            map:marker
       
       });
        }

      //send Email.......................................................
        
function sendMail(contactForm) {
    emailjs.send("gmail", "bamyanpage", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            contactForm.name.value="",
            contactForm.emailaddress.value="",
            contactForm.projectsummary.value=""
            console.log("Successfully sent", response);
           },
          
           
        function(error) {
            console.log("FAILED", error);
            
        }
    
    );
    return false;  // To block from loading a new page
    
}