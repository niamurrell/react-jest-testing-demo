import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyComponent from "../MyComponent";
import clicker from "../clicker";

// This is a wrapper to pull in a component method
// so that its functionality can be tested
const mockFn = jest.fn(clicker);

describe("MyComponent", () => {
  test("It renders.", () => {
    render(<MyComponent />);
  });

  test("It has the correct text", () => {
    const { getByText } = render(<MyComponent />);
    const welcomeMessage = getByText(/Hello Nonna!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("It has a personalized welcome message", () => {
    const { getByText } = render(<MyComponent name="Janey" />);
    const welcomeMessage = getByText(/Hello Janey!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("It has the right button text", () => {
    const { getByText } = render(<MyComponent />);
    const button = getByText(/Click Here!/i, {
      selector: "button",
      // selector: "p" // a p element will fail!
    });
    expect(button).toBeInTheDocument();
  });

  test("Its button responds to a user click", () => {
    const { getByText } = render(<MyComponent handler={mockFn} />);
    const button = getByText(/Click Here!/i, { selector: "button" });
    // This presses the button and verifies that a click event has the normal response
    fireEvent.click(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    // These verify the specific handler that exists in the component after the click event
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toBe("Click Here!");
  });

  test("It matches the snapshot", () => {
    const { container } = render(<MyComponent name="Janey" />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h1>
          Hello 
          Janey
          !
        </h1>
        <button>
          Click Here!
        </button>
      </div>
    `);
  });
});
