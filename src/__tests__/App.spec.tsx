import { render } from "@testing-library/react";
import App from "../App"

test('demo', () => {
  expect(1).toBe(1)
})

test("Render the main page", () => {
  render(<App />)
  expect(true).toBeTruthy()
})