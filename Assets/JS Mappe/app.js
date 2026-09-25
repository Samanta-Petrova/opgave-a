const byer = [
    {
        navn: "Aalborg",
        hints: [
            "Byen ligger i Nordjylland.",
            "Limfjorden løber gennem byen.",
            "Byen er kendt for sit årlige karneval.",
            "Der findes en kendt gade kaldet Jomfru Ane Gade.",
            "Byen starter med bogstavet A."
        ]
    },
    {
        navn: "Aarhus",
        hints: [
            "Byen ligger i Østjylland.",
            "Danmarks næststørste by.",
            "ARoS kunstmuseum ligger her.",
            "Byen kaldes Smilets By.",
            "Byen starter med bogstavet A."
        ]
    },
    {
        navn: "Odense",
        hints: [
            "Byen ligger på Fyn.",
            "H.C. Andersen blev født her.",
            "Danmarks tredjestørste by.",
            "Odense Zoo ligger her.",
            "Byen starter med bogstavet O."
        ]
    },
    {
        navn: "København",
        hints: [
            "Byen ligger på Sjælland.",
            "Tivoli ligger her.",
            "Den Lille Havfrue findes her.",
            "Danmarks hovedstad.",
            "Byen starter med bogstavet K."
        ]
    }
];

// Vælger en tilfældig by
const by = byer[Math.floor(Math.random() * byer.length)];

let hintIndex = 0;
let antalHints = 0;

// Vis første hint
document.getElementById("hint").textContent = by.hints[hintIndex];

function tjekSvar() {
    let brugerSvar = document.getElementById("gæt").value.trim();

    if (brugerSvar.toLowerCase() === by.navn.toLowerCase()) {

        document.getElementById("resultat").textContent =
            `Rigtigt! Du gættede ${by.navn} med ${antalHints} hint(s).`;

    } else {

        hintIndex++;

        if (hintIndex < by.hints.length) {

            document.getElementById("hint").textContent =
                by.hints[hintIndex];

            antalHints++;

            document.getElementById("resultat").textContent =
                ` Forkert! Du har nu brugt ${antalHints} hints.`;

        } else {

            document.getElementById("resultat").textContent =
                ` Du har brugt alle hints. Byen var ${by.navn}.`;
        }
    }
}