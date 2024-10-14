let scheduleCount = "0"; // Contador para asignar IDs y nombres únicos

// Función para generar opciones de horas entre 9:00 AM y 7:00 PM en intervalos de 30 minutos
function generateTimeOptions(selectElement) {
  const startTime = 9; // 9:00 AM
  const endTime = 19;  // 7:00 PM

  for (let hour = startTime; hour <= endTime; hour++) {
    const hourFormatted = hour < 10 ? `0${hour}` : hour; // Formatear la hora a dos dígitos

    // Opción para la hora exacta (por ejemplo, 9:00)
    const option1 = document.createElement("option");
    option1.value = `${hourFormatted}:00`;
    option1.textContent = `${hourFormatted}:00`;
    selectElement.appendChild(option1);

    // Añadir la opción para la media hora (excepto para las 7:00 PM)
    if (hour !== endTime) {
      const option2 = document.createElement("option");
      option2.value = `${hourFormatted}:30`;
      option2.textContent = `${hourFormatted}:30`;
      selectElement.appendChild(option2);
    }
  }
}

// Función para añadir un nuevo día y horario
document.getElementById("addSchedule").addEventListener("click", function () {
  const newDayTime = document.createElement("div");
  newDayTime.classList.add("day-time");
  newDayTime.id = `schedule-${scheduleCount}`; // Asignar un ID único
  newDayTime.setAttribute("name", `schedule-${scheduleCount}`); // Asignar un nombre único

  // Crear selectores para el día de la semana y las horas
  const dayLabel = document.createElement("label");
  dayLabel.textContent = "Día de la semana:";
  const daySelect = document.createElement("select");
  daySelect.name = `day[${scheduleCount}]`; // Nombre único para el día
  daySelect.classList.add("day");
  daySelect.innerHTML = `
    <option value="lunes">Lunes</option>
    <option value="martes">Martes</option>
    <option value="miércoles">Miércoles</option>
    <option value="jueves">Jueves</option>
    <option value="viernes">Viernes</option>
    <option value="sábado">Sábado</option>
    <option value="domingo">Domingo</option>
  `;

  const startTimeLabel = document.createElement("label");
  startTimeLabel.textContent = "Hora de inicio:";
  const startTimeSelect = document.createElement("select");
  startTimeSelect.name = `startTime[${scheduleCount}]`; // Nombre único para la hora de inicio
  startTimeSelect.classList.add("startTime");
  generateTimeOptions(startTimeSelect);  // Generar opciones de tiempo

  const endTimeLabel = document.createElement("label");
  endTimeLabel.textContent = "Hora de fin:";
  const endTimeSelect = document.createElement("select");
  endTimeSelect.name = `endTime[${scheduleCount}]`; // Nombre único para la hora de fin
  endTimeSelect.classList.add("endTime");
  generateTimeOptions(endTimeSelect);  // Generar opciones de tiempo

  // Agregar los elementos creados al nuevo div
  newDayTime.appendChild(dayLabel);
  newDayTime.appendChild(daySelect);
  newDayTime.appendChild(startTimeLabel);
  newDayTime.appendChild(startTimeSelect);
  newDayTime.appendChild(endTimeLabel);
  newDayTime.appendChild(endTimeSelect);

  // Añadir el nuevo día y horario al formulario
  document.getElementById("scheduleForm").insertBefore(newDayTime, document.getElementById("addSchedule"));

  scheduleCount++; // Incrementar el contador para el siguiente ID y nombre único
});

// Al cargar la página, agregar las opciones de tiempo al primer select de horas
document.addEventListener("DOMContentLoaded", function () {
  const startTimeSelect = document.querySelector("select.startTime");
  const endTimeSelect = document.querySelector("select.endTime");

  generateTimeOptions(startTimeSelect);
  generateTimeOptions(endTimeSelect);
});

document.getElementById("scheduleForm").onsubmit = async function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    const formData = new FormData(this);
    const response = await fetch("https://script.google.com/macros/s/AKfycbwHmLkOIGLVQ4ka4AHxWQSs3N05k2bJwylG3Y7pJoZ1NOSMdCagVq7_q6d3HfmmF-bh/exec", { // Replace with your Google Apps Script URL
        method: "POST",
        body: formData
    });
    
    if (response.ok) {
        alert("Registro exitoso");
        this.reset(); // Reset the form
    } else {
        alert("No se ha podido realizar tu registro");
    }
  };