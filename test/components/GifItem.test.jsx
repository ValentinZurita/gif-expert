import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

// Test Suite de GifItem Component
describe("Pruebas en <GifItem />", () => {

  // Variables de prueba 
  const title = "Un título";
  const url = "https://localhost/algo.jpg";

  // Test 1 - Debe mostrar el componente correctamente
  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  // Test 2 - Debe mostrar la imagen con el URL y el ALT indicado
  test("debe mostrar la imagen con el URL y el ALT indicado", () => {
    const title = "Un título";
    const url = "https://localhost/algo.jpg";

    // const { getByAltText } = render(<GifItem title={title} url={url} />);
    // const img = getByAltText(title);
    // expect(img.src).toBe(url);
    // expect(img.alt).toBe(title);

    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  // Test 3 - Debe mostrar el titulo del componente
  test("debe mostrar el titulo del component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
