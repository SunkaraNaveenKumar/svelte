import { describe, expect } from "vitest";
import todoJsonMain from "./todoJsonMain.svelte";
import { cleanup, render, screen } from "@testing-library/svelte";
import { setupServer } from "msw/node";
import handlers from "../../stores/mock/mockserver";
import { fetchUsers } from "../../stores/todoJsonStore";
import { usersMock } from "../../utils/mockData";
import { HttpResponse, http } from "msw";
import userEvent from "@testing-library/user-event";
// let server;
// beforeAll(async () => {
//   ////////////// start the mock server
//   server = setupServer(...handlers);
//   await server.listen();
//   console.log("server listening  ");
// });
// afterEach(() => {
//   server.resetHandlers();
// });
// afterAll(async () => {
//   cleanup();
//   await server.close();
//   console.log("server closed");
// });
describe("todomainJson", () => {
  let server;
  beforeAll(async () => {
    ////////////// start the mock server
    server = setupServer(...handlers);
    await server.listen();
    console.log("server listening  ");
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(async () => {
    await server.close();
    console.log("server closed");
    cleanup();
  });
  it("render first time json users using msw", async () => {
    render(todoJsonMain);
    await fetchUsers();
    const handleListItem = await screen.findAllByRole("listitem");
    // console.log("handleListItem", handleListItem);
    expect(handleListItem.length).toBe(usersMock.length);
  });
  it("handle error", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return new HttpResponse(JSON.stringify({ error: "unauthorized" }), {
          status: 500,
        });
      })
    );
    render(todoJsonMain);
    await fetchUsers();
    const handleErrorTag = await screen.findByText("unauthorized");
    expect(handleErrorTag).toBeDefined();
    const handleListItem = await screen.queryAllByRole("listitem");
    // console.log("handleListItem", handleListItem);
    expect(handleListItem).toEqual([]);
  });
  it("handle network error", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return HttpResponse.error(
          JSON.stringify({ error: "Internal Server Error" }),
          { status: 404 }
        );
      })
    );
    await fetchUsers();
    render(todoJsonMain);
  });
  it("render the user details according to id", async () => {
    render(todoJsonMain);
    await fetchUsers();
    const handleButton = await screen.findByTestId("Leanne Graham");
    // console.log("handleButton",handleButton)
    await userEvent.click(handleButton);
    const handleUserName = await screen.findByText("username:Leanne Graham");
    expect(handleUserName).toBeDefined();
  });
  it("handle request error", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users/:userId", () => {
        return new Response(JSON.stringify({ error: "unauthorized" }), {
          status: 404,
        });
      })
    );
    render(todoJsonMain);
    const handleButton = await screen.findByTestId("Leanne Graham");
    await userEvent.click(handleButton);
    const handleErrorTag = await screen.findByText("unauthorized");
    expect(handleErrorTag).toBeDefined();
  });
  it("handle request internal error", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users/:userId", () => {
        return HttpResponse.error(
          JSON.stringify({ error: "Internal Server Error" }),
          { status: 404 }
        );
      })
    );
    render(todoJsonMain);
    const handleButton = await screen.queryByTestId("Leanne Graham");
    expect(handleButton).toBeNull()
  });
});
