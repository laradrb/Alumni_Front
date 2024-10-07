import { render, screen } from "@testing-library/react";
import ProfileView from "./ProfileView";
import { vi } from "vitest";

describe("ProfileView Component", () => {
  it("renders the initial skills for frontend, backend, and languages", () => {
    render(<ProfileView />);

    expect(screen.getByText("HTML")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();

    expect(screen.getByText("English")).toBeInTheDocument();

    expect(screen.queryByText("Node.js")).not.toBeInTheDocument();
  });

  it("adds a new frontend skill when the add function is called", () => {
    render(<ProfileView />);

    screen.getByText("Frontend").click();
  });

  it("adds a new backend skill when the add function is called", () => {
    render(<ProfileView />);

    screen.getByText("Backend").click();
  });

  it("adds a new language skill when the add function is called", () => {
    render(<ProfileView />);

    screen.getByText("Idiomas").click();
  });
});
