const container = document.getElementById('container');

const jsonData = [
    {
        "id": 1,
        "quote": [
            "Hier komt veel data op ons af die belangrijk zijn als sturingsmechanisme...",
            "Ik vind data fascinerend en zie dat we binnen onze organisatie ongelooflijk veel data hebben...",
            "data driven decision making een belangrijke plek gekregen.",
            "groeien naar een data gedreven manier van beslissingen nemen.",
            "...geïnteresseerd ben geweest in data en het gebruik hiervan...",
            "leren over het gebruik van data in een organisatie..."
        ],
        "onderwerp": "Data/Datastromen/Data driven decision making"
    },

    {
        "id": 2,
        "quote": [
            "Veel zin in de cursus!",
            "Van de module verwacht ik dus tips en trics...",
            "Ik hoop in deze module een goed plan te schrijven...",
            "...deze opleiding te volgen.",
            "Mijn verwachtingen bij de module zijn dat...",
            "Eerst had ik mij ingeschreven voor de post-HBO module...",
            "De mastermodule Managing Data Driven Organizations..."
        ],
        "onderwerp": "Opleiding/Module/Cursus"
    },

    {
        "id": 3,
        "quote": [
            "...verantwoordelijk voor het vormgeven van het duurzaamheidbeleid en ESG rapportage..."
        ],
        "onderwerp": "Duurzaamheidbeleid & ESG rapportage"
    },

    {
        "id": 4,
        "quote": [
            "Ik geef leiding aan de supply chain.",
            "...om een plan te schrijven voor de supply chain..."
        ],
        "onderwerp": "Supply chain"
    },

    {
        "id": 5,
        "quote": [
            "De organisatiewijziging is het moment waarop de strategie opnieuw is vastgelegd..."
        ],
        "onderwerp": "Organisatiewijziging/Strategie"
    }
]
    ;

jsonData.forEach(item => {
    item.quote.forEach(quote => {
        const bubble = document.createElement('div');
        bubble.className = `bubble ${getClassName(item.onderwerp)}`;

        // Create the tooltip for the bubble
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        const boldText = document.createElement('b');
        boldText.textContent = item.onderwerp;
        tooltip.appendChild(boldText);

        // Add the tooltip to the bubble
        bubble.appendChild(tooltip);

        // Set the text content of the bubble
        // (This will not overwrite the tooltip since we're appending it after setting textContent)
        const quoteContent = document.createElement('div');
        quoteContent.textContent = quote
        bubble.appendChild(quoteContent);

        // Add the bubble to the container
        container.appendChild(bubble);
    });
});


function getClassName(onderwerp) {
    switch (onderwerp) {
        case 'Data/Datastromen/Data driven decision making':
            return 'data';
        case 'Opleiding/Module/Cursus':
            return 'opleiding';
        case 'Duurzaamheidbeleid & ESG rapportage':
            return 'duurzaamheid';
        case 'Supply chain':
            return 'supply';
        case 'Organisatiewijziging/Strategie':
            return 'organisatie';
        default:
            return '';
    }
}
