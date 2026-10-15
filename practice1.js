
class Temperature {

    constructor(value) {

        this.value = Number(value);
    }

    CelsiusToFahrenheit() {
        return (this.value * 9 / 5) + 32;
    }

    FahrenheitToCelsius() {
        return (this.value - 32) * (5 / 9);
    }

    FahrenheitToKelvin() {
        return (this.value - 32) * (5 / 9) + 273.15;
    }

    KelvinToFahrenheit() {
        return (this.value - 273.15) * 9 / 5 + 32;
    }

    CelsiusToKelvin() {
        return this.value + 273.15;
    }

    KelvinToCelsius() {
        return this.value - 273.15;
    }
}

function temperatureConverter(x, from, to) {
    const t = new Temperature(x);

    // Same unit: no conversion needed
    if (from === to) {
        return [t.value, "No conversion needed"];
    }

    if (from === "Celsius (°C)" && to === "Fahrenheit (°F)") {
        return [t.CelsiusToFahrenheit(), "°F = °C × 9/5 + 32"];
    } else if (from === "Fahrenheit (°F)" && to === "Celsius (°C)") {
        return [t.FahrenheitToCelsius(), "°C = (°F - 32) × 5/9"];
    } else if (from === "Fahrenheit (°F)" && to === "Kelvin (K)") {
        return [t.FahrenheitToKelvin(), "K = (°F - 32) × 5/9 + 273.15"];
    } else if (from === "Kelvin (K)" && to === "Fahrenheit (°F)") {
        return [t.KelvinToFahrenheit(), "°F = (K - 273.15) × 9/5 + 32"];
    } else if (from === "Celsius (°C)" && to === "Kelvin (K)") {
        return [t.CelsiusToKelvin(), "K = °C + 273.15"];
    } else if (from === "Kelvin (K)" && to === "Celsius (°C)") {
        return [t.KelvinToCelsius(), "°C = K - 273.15"];
    }

    return ["Unsupported conversion", "N/A"];
}

// Get the HTML elements
const fromElement = document.getElementById("from-unit");
const toElement = document.getElementById("to-unit");
const inputElement = document.getElementById("temp-input");
const output = document.getElementById("temp-output");

function updateConversion() {
    const inputValue = inputElement.value;
    const fromUnit = fromElement.value;
    const toUnit = toElement.value;
    if (inputValue.trim() === "") {
        output.textContent = "Result will appear here";
        return;
    }
    const result = temperatureConverter(
        inputValue,
        fromUnit,
        toUnit
    );

    output.textContent =
        typeof result[0] === "number" && Number.isFinite(result[0])
            ? result[0].toFixed(2) + " " + toUnit + "\n" + result[1]
            : "Conversion not supported";
}

// Convert automatically when the user types
inputElement.addEventListener("input", updateConversion);

// Also convert when either unit changes
fromElement.addEventListener("change", updateConversion);
toElement.addEventListener("change", updateConversion);
updateConversion(); // show the placeholder text on load