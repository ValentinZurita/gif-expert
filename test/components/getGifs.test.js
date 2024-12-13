import fetch from "node-fetch";

// Establece fetch como global
global.fetch = fetch;

import { getGifs } from "../../src/helpers/getGifs";

// Test Suite de getGifs()
describe("Pruebas en getGifs()", () => {
  // Test 1 - Debe retornar un arreglo de gifs
  test("debe retornar un arreglo de gifs", async () => {
    // Llama a la función getGifs con "One Punch" como categoría
    const gifs = await getGifs("One Punch");

    // verifica que el arreglo de gifs sea mayor a 0
    expect(gifs.length).toBeGreaterThan(0);

    // verifica que el arreglo de gifs sea un arreglo de objetos
    expect(gifs[0]).toEqual({
      id: expect.any(String), // verifica que el id sea una cadena
      title: expect.any(String), // verifica que el titulo sea una cadena
      url: expect.any(String), // verifica que la url sea una cadena
    });
  });
});
