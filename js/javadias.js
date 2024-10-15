let scheduleCount = 1; // Inicia en 1 porque ya hay un horario inicial

// Función para generar opciones de tiempo (9:00 AM - 7:00 PM)
function generateTimeOptions(selectElement) {
    const startTime = 9; // 9:00 AM
    const endTime = 19;  // 7:00 PM

    for (let hour = startTime; hour <= endTime; hour++) {
        const hourFormatted = hour < 10 ? `0${hour}` : hour; // Formatear hora

        // Opción para la hora exacta (por ejemplo, 9:00)
        const option1 = document.createElement("option");
        option1.value = `${hourFormatted}:00`;
        option1.textContent = `${hourFormatted}:00`;
        selectElement.appendChild(option1);

        // Opción para la media hora (excepto 7:00 PM)
        if (hour !== endTime) {
            const option2 = document.createElement("option");
            option2.value = `${hourFormatted}:30`;
            option2.textContent = `${hourFormatted}:30`;
            selectElement.appendChild(option2);
        }
    }
}

// Función para agregar un nuevo día y horario dinámicamente
document.getElementById("addSchedule").addEventListener("click", function () {
    const newDayTime = document.createElement("div");
    newDayTime.classList.add("day-time");
    newDayTime.id = `schedule-${scheduleCount}`; // ID único

    // Crear selector para el día
    const dayLabel = document.createElement("label");
    dayLabel.setAttribute("for", `day${scheduleCount}`);
    dayLabel.textContent = "Día de la semana:";
    const daySelect = document.createElement("select");
    daySelect.id = `day${scheduleCount}`;
    daySelect.name = `day${scheduleCount}`;
    daySelect.innerHTML = `
        <option value="lunes">Lunes</option>
        <option value="martes">Martes</option>
        <option value="miércoles">Miércoles</option>
        <option value="jueves">Jueves</option>
        <option value="viernes">Viernes</option>
        <option value="sábado">Sábado</option>
        <option value="domingo">Domingo</option>
    `;

    // Crear selector para la hora de inicio
    const startTimeLabel = document.createElement("label");
    startTimeLabel.setAttribute("for", `startTime${scheduleCount}`);
    startTimeLabel.textContent = "Hora de inicio:";
    const startTimeSelect = document.createElement("select");
    startTimeSelect.id = `startTime${scheduleCount}`;
    startTimeSelect.name = `startTime${scheduleCount}`;
    generateTimeOptions(startTimeSelect);

    // Crear selector para la hora de fin
    const endTimeLabel = document.createElement("label");
    endTimeLabel.setAttribute("for", `endTime${scheduleCount}`);
    endTimeLabel.textContent = "Hora de fin:";
    const endTimeSelect = document.createElement("select");
    endTimeSelect.id = `endTime${scheduleCount}`;
    endTimeSelect.name = `endTime${scheduleCount}`;
    generateTimeOptions(endTimeSelect);

    // Agregar los elementos al contenedor
    newDayTime.appendChild(dayLabel);
    newDayTime.appendChild(daySelect);
    newDayTime.appendChild(startTimeLabel);
    newDayTime.appendChild(startTimeSelect);
    newDayTime.appendChild(endTimeLabel);
    newDayTime.appendChild(endTimeSelect);

    // Insertar el nuevo conjunto de horario en el formulario
    document.getElementById("scheduleForm").insertBefore(newDayTime, document.getElementById("addSchedule"));

    scheduleCount++; // Incrementar el contador para los próximos elementos
});

// Generar las opciones de tiempo al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    generateTimeOptions(document.querySelector("select.startTime"));
    generateTimeOptions(document.querySelector("select.endTime"));
});

document.getElementById("scheduleForm").onsubmit = async function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    const formData = new FormData(this);
    const response = await fetch("https://script.google.com/macros/s/AKfycbxB5dhyQLtK2RhwiwWK987p3DrPBs3yztA-SBwE83iLfLOIGzLbf0JZmE1-WZKfi1Fi/exec", { // Replace with your Google Apps Script URL
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