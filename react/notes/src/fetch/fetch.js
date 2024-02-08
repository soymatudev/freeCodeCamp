/* // Hacemos una solicitud Fetch ya sea para eliminar o agregar una nota
async function dataFetch(body) {
  //console.log(body);
  try {
    const response = await fetch('http://localhost/freecodecamp/react/notes/src/php/getAction.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
   // console.log(data);
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
}
 */
// body: `variablePHP=${keyData}`,

/* 
    const responseData = await response.text(); // Cambiado a text()
    const data = JSON.parse(responseData); // Intenta parsear como JSON
    console.log(data);
    return data;
*/

/* 
  //'Content-Type': 'application/x-www-form-urlencoded',
  //'Content-Type': 'application/x-www-urlencoded',
  //'Content-Type': 'application/json',
*/

//const bodyFetchAdd = `variablekey=${encodeURIComponent("addNote")}&id=${encodeURIComponent(note.id)}&title=${encodeURIComponent(note.title)}&body=${encodeURIComponent(note.body)}`;
