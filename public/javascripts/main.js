//   @todo

"use strict";
class main {
    constructor() {
        // main.serviceWorker();
        serviceWorkers.loadServiceWorker();
    }
    /*static serviceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/serviceWorker.js')
                .then(() => { console.log('Service Worker Registered'); });
        }
    }*/
}
class serviceWorkers {
    static loadServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/serviceWorker.js');
        }
    }
}

/*
class main {
    constructor() {
        document.getElementById("numberOfDice").addEventListener("onchange", () => {
            let numDice;
            const MIN_DICE = 1, MAX_DICE = 10;

            while ((typeof numDice === `undefined` || isNaN(numDice)) || (numDice < MIN_DICE) || (numDice > MAX_DICE)) {
                numDice = document.getElementById('numberOfDice');
            }
        })
        ;

        document.getElementById("button").addEventListener("click", () => {
            let numDice = document.getElementById('numberOfDice').value;
            let i = 0;
            document.getElementById('results').innerHTML = '';
            if (document.getElementById('a-option').checked) {
                while (i < numDice) {
                    document.getElementById('results').innerHTML += (Math.floor(1 + Math.random() * 4) + ', ');
                    i++;
                }
            } else if (document.getElementById('b-option').checked) {
                while (i < numDice) {
                    document.getElementById('results').innerHTML += (Math.floor(1 + Math.random() * 6) + ', ');
                    i++;
                }
            } else if (document.getElementById('c-option').checked) {
                while (i < numDice) {
                    document.getElementById('results').innerHTML += (Math.floor(1 + Math.random() * 8) + ', ');
                    i++;
                }
            } else if (document.getElementById('d-option').checked) {
                while (i < numDice) {
                    document.getElementById('results').innerHTML += (Math.floor(1 + Math.random() * 12) + ', ');
                    i++;
                }
            } else if (document.getElementById('e-option').checked) {
                while (i < numDice) {
                    document.getElementById('results').innerHTML += (Math.floor(1 + Math.random() * 20) + ', ');
                    i++;
                }
            }
        })
        ;

    }


}
*/

window.addEventListener('load', () => {
    new main();
})
;
