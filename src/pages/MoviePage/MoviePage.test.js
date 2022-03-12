import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import MoviePage from "./MoviePage";
import testMovie from "../../testData/testMovie.json";
import { Provider } from "react-redux";
import store from "../../store/store";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react";

describe("Movie Page component", () => {
  test("renders movie info if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValue({
      ok: true,
      json: async () => testMovie,
    });


    const history = createMemoryHistory();
    const route = "/some-route";
    history.push(route);
    render(
      <Provider store={store}>
        <Router history={history}>
          <MoviePage />
        </Router>
      </Provider>
    );

    const title = await screen.findByTestId("title");
    expect(title).not.toBeEmptyDOMElement();
  });

  test("renders error message if request fails", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValue({
      ok: false,
      json: async () => testMovie,
    });


    const history = createMemoryHistory();
    const route = "/some-route";
    history.push(route);
    render(
      <Provider store={store}>
        <Router history={history}>
          <MoviePage />
        </Router>
      </Provider>
    );

    const element= await screen.findByText(/Nie udało się/);
    expect(element).toBeInTheDocument();
  });
});
