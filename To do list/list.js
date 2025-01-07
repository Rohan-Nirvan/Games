const addRowButton = document.getElementById("addRowButton");
const tableBody = document.querySelector("#table tbody");

addRowButton.addEventListener("click", addRow);

function addRow() {
  // Create a new row
  const newRow = document.createElement("tr");

  // Add cells to the new row
  newRow.innerHTML = `
    <td><input type="number" name="" /></td>
    <td><input type="text" /></td>
    <td>
      <select>
        <option>Select</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
    </td>
    <td>
      <input type="datetime-local" />
    </td>
    <td>
      <input type="radio" name="TaskComplete_${Date.now()}" value="Yes" /> Yes
      <input type="radio" name="TaskComplete_${Date.now()}" value="No" /> No
    </td>
    <td><textarea></textarea></td>
  `;

  // Append the new row to the table body
  tableBody.appendChild(newRow);
}
