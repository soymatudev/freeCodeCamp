document.addEventListener("DOMContentLoaded", async function () {
  const bodyFetchView = `variablekey=${"viewNotes"}`;
  await dataFetch(bodyFetchView);
});

// Hacemos una solicitud Fetch ya sea para eliminar o agregar una nota
async function dataFetch(body) {
  console.log(body);
  try {
    const response = await fetch('./src/php/getAction.php', {
      method: 'POST',
      headers: {
        //'Content-Type': 'application/x-www-urlencoded',
        'Content-Type': 'application/x-www-urlencoded',
      },
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
}

// body: `variablePHP=${keyData}`,