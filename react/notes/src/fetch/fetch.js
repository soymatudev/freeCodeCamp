// Hacemos una solicitud Fetch ya sea para eliminar o agregar una nota
async function dataFetch(body) {
  try {
    const response = await fetch('./src/php/getAction.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-urlencoded',
      },
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
}

// body: `variablePHP=${keyData}`,