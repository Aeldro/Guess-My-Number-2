// ********** FONCTIONS DE LA PAGE **********

const rating = (value) => {
    if (value === 5) {
        alert("Merci ! Je savais que ça te plairait !")
    } else {
        alert(`Tu t'es trompé de bouton ! Il faut cliquer sur "5 étoiles" !`)
    }
}

const locked = () => {
    alert("Vous n'avez pas encore débloqué ce niveau.")
}

// ********** "GUESS MY NUMBER 2.0" GAME **********

const attemptsGrid = [];

const newGame = (maximumNumber) => {
    let attempts = 0;

    const randomNumber = Math.floor(Math.random() * maximumNumber) + 1;
    let guessedNumber = prompt(`Un nombre aléatoire entre 1 et ${maximumNumber} vient d'être généré.   [Quitter: "Q"]`).toLowerCase();

    while (parseInt(guessedNumber) != randomNumber) {
        if (parseInt(guessedNumber) < randomNumber) {
            attempts++;
            guessedNumber = prompt(`Le nombre "${parseInt(guessedNumber)}" est trop petit ! Essaie encore... (Tentative N°${attempts})   [Quitter: "Q"]`).toLowerCase();
        } else if (parseInt(guessedNumber) > randomNumber) {
            attempts++;
            guessedNumber = prompt(`Le nombre "${parseInt(guessedNumber)}" est trop grand ! Essaie encore... (Tentative N°${attempts})   [Quitter: "Q"]`).toLowerCase();
        } else {
            if (guessedNumber === "q" || guessedNumber === "quit" || guessedNumber === "quitter") {
                break;
            } else {
                guessedNumber = prompt(`"${guessedNumber}" n'est pas un nombre valide. (Tentative N°${attempts})   [Quitter: "Q"]`).toLowerCase();
            }
        }
    }

    if (guessedNumber === "q" || guessedNumber === "quit" || guessedNumber === "quitter") {
        alert(`Tu as quitté la partie après ${attempts} tentatives. La solution était "${randomNumber}".`);
    } else {
        attempts++;
        alert(`Bravo ! Tu as trouvé le nombre "${randomNumber}" après ${attempts} tentatives !`);
        if (maximumNumber === 10) {
            if (attemptsGrid[0] === undefined || attempts <= attemptsGrid[0]) {
                attemptsGrid[0] = attempts;
            }
            document.getElementById('unlocked2').classList.remove('hidden');
            document.getElementById('separation1').classList.remove('hidden');
            document.getElementById('attemptsNumber1').classList.remove('hidden');
            document.getElementById('locked2').classList.add('hidden');
            document.getElementById('attemptsNumber1').innerHTML = `Record de tentatives: ${attemptsGrid[0]}`;
        } else if (maximumNumber === 100) {
            if (attemptsGrid[1] === undefined || attempts <= attemptsGrid[1]) {
                attemptsGrid[1] = attempts;
            }
            document.getElementById('unlocked3').classList.remove('hidden');
            document.getElementById('separation2').classList.remove('hidden');
            document.getElementById('attemptsNumber2').classList.remove('hidden');
            document.getElementById('locked3').classList.add('hidden');
            document.getElementById('attemptsNumber2').innerHTML = `Record de tentatives: ${attemptsGrid[1]}`;
        } else if (maximumNumber === 1000) {
            if (attemptsGrid[2] === undefined || attempts <= attemptsGrid[2]) {
                attemptsGrid[2] = attempts;
            }
            document.getElementById('unlocked4').classList.remove('hidden');
            document.getElementById('separation3').classList.remove('hidden');
            document.getElementById('attemptsNumber3').classList.remove('hidden');
            document.getElementById('locked4').classList.add('hidden');
            document.getElementById('attemptsNumber3').innerHTML = `Record de tentatives: ${attemptsGrid[2]}`;
        } else if (maximumNumber === 10000) {
            if (attemptsGrid[3] === undefined || attempts <= attemptsGrid[3]) {
                attemptsGrid[3] = attempts;
            }
            document.getElementById('unlocked5').classList.remove('hidden');
            document.getElementById('separation4').classList.remove('hidden');
            document.getElementById('attemptsNumber4').classList.remove('hidden');
            document.getElementById('locked5').classList.add('hidden');
            document.getElementById('attemptsNumber4').innerHTML = `Record de tentatives: ${attemptsGrid[3]}`;
        } else if (maximumNumber === 100000) {
            if (attemptsGrid[4] === undefined || attempts <= attemptsGrid[4]) {
                attemptsGrid[4] = attempts;
            }
            document.getElementById('unlocked6').classList.remove('hidden');
            document.getElementById('separation5').classList.remove('hidden');
            document.getElementById('attemptsNumber5').classList.remove('hidden');
            document.getElementById('locked6').classList.add('hidden');
            document.getElementById('attemptsNumber5').innerHTML = `Record de tentatives: ${attemptsGrid[4]}`;
        } else if (maximumNumber === 1000000) {
            if (attemptsGrid[5] === undefined || attempts <= attemptsGrid[5]) {
                attemptsGrid[5] = attempts;
            }
            document.getElementById('separation6').classList.remove('hidden');
            document.getElementById('attemptsNumber6').classList.remove('hidden');
            document.getElementById('attemptsNumber6').innerHTML = `Record de tentatives: ${attemptsGrid[5]}`;
            document.querySelector('.winnerText').classList.remove('hidden');
            document.querySelector('.winnerImg').classList.remove('hidden');
            document.querySelector('.winnerHr').classList.remove('hidden');
            document.querySelector('body').classList.add('winner');
        }
    }
}