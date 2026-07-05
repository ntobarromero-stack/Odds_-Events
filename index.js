// === State ===
let bank = [];
let odds = [];
let evens = [];

// === Render Function ===
function render() {
  const $app = document.querySelector("#app");

  // Clean slate with the requested styling
  $app.innerHTML = `
    <div style="font-family: sans-serif; padding: 20px;">
      <h1>Odds and Events</h1>
      
      <form id="numberForm" style="display: flex; gap: 10px; align-items: center; margin-bottom: 20px;">
        <label>Add a number to the bank</label>
        <input name="number" type="number" style="padding: 5px;" />
        <button type="submit">Add number</button>
        <button type="button" id="sortOne">Sort 1</button>
        <button type="button" id="sortAll">Sort All</button>
      </form>

      <section>
        <h2>Bank</h2>
        <div style="border: 1px solid black; border-radius: 8px; padding: 10px; min-height: 20px; margin-bottom: 20px;">
          ${bank.join(" ")}
        </div>
      </section>

      <section>
        <h2>Odds</h2>
        <div style="border: 1px solid black; border-radius: 8px; padding: 10px; min-height: 20px; margin-bottom: 20px;">
          ${odds.join(" ")}
        </div>
      </section>

      <section>
        <h2>Evens</h2>
        <div style="border: 1px solid black; border-radius: 8px; padding: 10px; min-height: 20px;">
          ${evens.join(" ")}
        </div>
      </section>
    </div>
  `;

  // Re-attach event listeners every time we rerender
  document.getElementById("numberForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(e.target.number.value);
    if (!isNaN(num) && e.target.number.value !== "") {
      bank.push(num);
      render();
    }
  });

  document.getElementById("sortOne").addEventListener("click", () => {
    if (bank.length > 0) {
      const num = bank.shift();
      num % 2 === 0 ? evens.push(num) : odds.push(num);
      render();
    }
  });

  document.getElementById("sortAll").addEventListener("click", () => {
    while (bank.length > 0) {
      const num = bank.shift();
      num % 2 === 0 ? evens.push(num) : odds.push(num);
    }
    render();
  });
}

// Initial Call
render();
