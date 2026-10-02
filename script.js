/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


const interactiveElements = document.querySelectorAll(
    "a, button, .project-card, .skills-list span"
);


interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursor.classList.add("hover");

    });


    element.addEventListener("mouseleave", () => {

        cursor.classList.remove("hover");

    });

});



/* =========================
   INTERACTIVE SERVICES
========================= */

const serviceOptions =
    document.querySelectorAll(".service-option");


const resultNumber =
    document.querySelector(".result-number");


const resultTitle =
    document.querySelector("#result-title");


const resultDescription =
    document.querySelector("#result-description");


const resultTags =
    document.querySelector("#result-tags");



const serviceData = {


    website: {

        number: "01",

        title:
            "A website that represents your idea.",

        description:
            "Responsive, modern websites designed to look great across different screen sizes and give your visitors a clear and memorable experience.",

        tags: [
            "Responsive",
            "Modern UI",
            "HTML / CSS / JS"
        ]

    },


    webapp: {

        number: "02",

        title:
            "A web application that actually works.",

        description:
            "Functional web applications built around real needs, with interactive interfaces, backend logic, and database integration.",

        tags: [
            "Interactive",
            "PHP / MySQL",
            "JavaScript"
        ]

    },


    security: {

        number: "03",

        title:
            "Security-aware development from the start.",

        description:
            "I explore how web applications communicate, handle data, and run in real environments, while keeping security considerations in mind during development.",

        tags: [
            "Web Security",
            "Networking",
            "AWS / Cloud"
        ]

    }

};



serviceOptions.forEach((option) => {


    option.addEventListener("click", () => {


        serviceOptions.forEach((item) => {

            item.classList.remove("active");

        });


        option.classList.add("active");


        const service =
            option.dataset.service;


        const data =
            serviceData[service];


        resultNumber.textContent =
            data.number;


        resultTitle.textContent =
            data.title;


        resultDescription.textContent =
            data.description;


        resultTags.innerHTML = "";


        data.tags.forEach((tag) => {


            const span =
                document.createElement("span");


            span.textContent =
                tag;


            resultTags.appendChild(span);

        });

    });

});



/* =========================
   PROJECT TILT
========================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card) => {


    card.addEventListener("mousemove", (e) => {


        if (window.innerWidth <= 900) {
            return;
        }


        const rect =
            card.getBoundingClientRect();


        const x =
            e.clientX - rect.left;


        const y =
            e.clientY - rect.top;


        const centerX =
            rect.width / 2;


        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -1.5;


        const rotateY =
            ((x - centerX) / centerX) * 1.5;


        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});



/* =========================
   SIMPLE SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".intro-section, .services-section, .projects-section, .security-section, .skills-section"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});



/* =========================
   NAVBAR
========================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(255,248,251,.88)";

        navbar.style.backdropFilter =
            "blur(18px)";

    } else {

        navbar.style.background =
            "transparent";

        navbar.style.backdropFilter =
            "none";

    }

});

// ================= CV MODAL =================

const openCV = document.getElementById("openCV");
const closeCV = document.getElementById("closeCV");
const cvModal = document.getElementById("cvModal");

openCV.addEventListener("click", function () {
    cvModal.classList.add("active");
});

closeCV.addEventListener("click", function () {
    cvModal.classList.remove("active");
});

cvModal.addEventListener("click", function (event) {

    if (event.target === cvModal) {
        cvModal.classList.remove("active");
    }

});