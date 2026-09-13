/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("show");

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (window.innerWidth <= 900 && navbar) {

            navbar.classList.remove("show");

        }

    });

});


/* =========================================
   APPOINTMENT FORM
========================================= */

const appointmentForm =
    document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const treatment =
            document.getElementById("treatment").value;

        const message =
            document.getElementById("message").value;


        /*
           CHANGE THIS TO MARIAN DENTAL CARE'S
           REAL WHATSAPP NUMBER
        */

        const whatsappNumber = "917558859848";


        const whatsappMessage =
            "Hello Marian Dental Care,%0A%0A" +

            "I would like to book an appointment.%0A%0A" +

            "Name: " + name + "%0A" +

            "Phone: " + phone + "%0A" +

            "Treatment: " + treatment + "%0A" +

            "Message: " + message;


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            whatsappMessage;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}