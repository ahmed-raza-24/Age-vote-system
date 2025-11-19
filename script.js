const btn = document.getElementById('askAgeBtn');
    const output = document.getElementById('output');

    function askAge() {
      let age = prompt("Give age for prompt");

      // user cancelled
      if (age === null) {
        console.error("You Canceled it..");
        output.innerHTML = '<span class="error">You canceled the prompt.</span>';
        return;
      }

      // user submitted only whitespace or empty string
      if (age.trim() === "") {
        console.error("please enter number");
        output.innerHTML = '<span class="error">Please enter a number.</span>';
        return;
      }

      // convert to Number and validate
      age = Number(age);
      if (isNaN(age)) {
        console.error("please enter valid number");
        output.innerHTML = '<span class="error">Please enter a valid number (e.g. 25).</span>';
        return;
      }

      // success
      console.log(`your age is ${age}`);
      output.innerHTML = `<span class="ok">Your age is ${age}.</span>`;
    }

    btn.addEventListener('click', askAge);