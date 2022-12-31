let check = true;
        let score = 100;
        let attempt = 0;

        let randNumber = Math.floor(Math.random() * (100 - 1) + 1);

        while (check) {
            const userNumber = Number(prompt("Enter a number"));
            

            if (userNumber > randNumber) {
                console.log(`You enter a greater number`);
                alert("You enter a greater number")
                attempt++;
            } else if (userNumber < randNumber) {
                console.log(`You enter a small number`);
                alert("You enter a small number")
                attempt++;
            } else {
                alert(`You win the Game 
            Random Number : ${randNumber}
            Your Guess : ${userNumber}
            Scoree : ${score - attempt}
            `);
                check = false;

            }

        }