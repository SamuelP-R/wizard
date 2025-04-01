let currentSection = 1;
let currentStep = 0;

// Seleccionar todos los formularios y pasos del wizard
const forms = document.querySelectorAll("section[id^='form-']");
const steps = document.querySelectorAll(".step");

// FUNCIONES PARA MOSTRAR SECCIONES DEL FORMULARIO
function showSection(stepIndex) {
    // Ocultar todos los formularios
    forms.forEach(form => form.style.display = 'none');
    
    // Mostrar solo el formulario correspondiente al paso actual
    const activeForm = document.getElementById(`form-${stepIndex + 1}`);
    if (activeForm) {
        activeForm.style.display = 'block';
    }
}

// ACTUALIZA EL WIZARD VISUALMENTE
function updateWizard(stepIndex) {
    steps.forEach((step, index) => {
        if (index <= stepIndex) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
}

// FUNCIÓN PARA AVANZAR
function showNextSection() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showSection(currentStep);
        updateWizard(currentStep);
    }
}

// FUNCIÓN PARA RETROCEDER
function goBack() {
    if (currentStep > 0) {
        currentStep--;
        showSection(currentStep);
        updateWizard(currentStep);
    }
}

// EVENTOS DE BOTONES "SIGUIENTE" Y "ATRÁS"
document.querySelectorAll(".next").forEach(button => {
    button.addEventListener("click", showNextSection);
});

document.querySelectorAll(".prev").forEach(button => {
    button.addEventListener("click", goBack);
});

// AL CARGAR LA PÁGINA, MOSTRAR EL PRIMER FORMULARIO
showSection(currentStep);
updateWizard(currentStep);
