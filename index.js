let currentSection = 1;

function showNextSection() {
    const currentForm = document.getElementById(`form-${currentSection}`);
    const nextForm = document.getElementById(`form-${currentSection + 1}`);
    
    if (nextForm) {
        currentForm.style.display = 'none';//oculta el section actual
        nextForm.style.display = 'block';//muestra el siguiente section
        currentSection++;
    }
}

function goBack() {
    const currentForm = document.getElementById(`form-${currentSection}`);
    const previousForm = document.getElementById(`form-${currentSection - 1}`);
    
    if (previousForm) {
        currentForm.style.display = 'none';
        previousForm.style.display = 'block';
        currentSection--;
    }
}

const steps = document.querySelectorAll('.step');
let currentStep = 0;
documentgetElementById("nextStep").addEventListener("click", () => {
    if (currentStep > steps.length){
        steps[currentStep].classList.add("active");
        currentStep++;
    }
})