import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, prettyDOM, fireEvent } from "@testing-library/react";
import NotesListItem from ".";

test("renders content", () => {
  const note = {
    content: "Content of the note",
    important: true,
  };

  const component = render(<NotesListItem note={note} />);

  component.getByText(note.content);
  component.getByText(note.important ? "make not important" : "make important");

  // Alternativa
  expect(component.container).toHaveTextContent(note.content);
  
  // Pretty
  const li = component.container.querySelector("li");
  // console.log(prettyDOM(li));
});


test('clicking the button calls event handler once', () => {
  const note = {
    content: "Content of the note",
    important: true,
  };

  const mockHandler = jest.fn();
  const component = render(<NotesListItem note={note} toggleImportance={mockHandler} />);
  const button = component.getByText("make not important");
  fireEvent.click(button);
  expect(mockHandler).toHaveBeenCalledTimes(1);
})

