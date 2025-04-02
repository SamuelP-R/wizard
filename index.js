let currentSection = 0;
const forms = document.querySelectorAll("section");
const steps = document.querySelectorAll(".wizard .step");

function showNextSection() {
    if (currentSection < forms.length - 1) {
        forms[currentSection].style.display = 'none';
        currentSection++;
        forms[currentSection].style.display = 'block';
        updateWizard();
    }
}

function goBack() {
    if (currentSection > 0) {
        forms[currentSection].style.display = 'none';
        currentSection--;
        forms[currentSection].style.display = 'block';
        updateWizard();
    }
}

function updateWizard() {
    steps.forEach((step, index) => {
        if (index <= currentSection) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
}

// Ocultar todos los formularios excepto el primero
forms.forEach((form, index) => {
    if (index !== 0) form.style.display = 'none';
});
