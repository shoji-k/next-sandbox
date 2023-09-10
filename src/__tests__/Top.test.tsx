import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Top from "@/app/page";

test("Top page", () => {
  render(<Top />);
  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("heading", { level: 1, name: /Samples/i }),
  ).toBeDefined();
});
