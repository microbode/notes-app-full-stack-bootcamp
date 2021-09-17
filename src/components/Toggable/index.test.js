import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, prettyDOM, fireEvent } from "@testing-library/react";
import Toggable from ".";

describe("<Toggable />", () => {
  let component;
  let buttonLabel = "Show";

  beforeEach(() => {
    component = render(
      <Toggable buttonLabel={buttonLabel}>
        <div>Children to show</div>
      </Toggable>
    );
  });

  test("renders its children ", () => {
    component.getByText("Children to show");
  });

  test("children should be hidden", () => {
    const element = component.getByText("Children to show");
    expect(element.parentNode).toHaveStyle("display: none");
  });

  test('after clicking its children should be shown', () => {
    const button = component.getByText(buttonLabel);
    fireEvent.click(button);
    const element = component.getByText("Children to show");
    expect(element.parentNode).not.toHaveStyle("display: none"); 
  })
  
});
