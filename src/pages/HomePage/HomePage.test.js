import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import HomePage from "./HomePage";
import { Provider } from "react-redux";
// import store from "../../store/store";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { lastRatedReducer, searchResultsReducer } from "../../store/store";

describe("Home Page component", () => {
let store;
  
  beforeEach(() => {
    store = configureStore({
      reducer: {
        lastRated: lastRatedReducer,
        searchResults: searchResultsReducer,
      },
    });
  });

  test("renders movie list if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValue({
      ok: true,
      json: async () => {
        return { results: [{
            "id": "tt1877830",
            "title": "The Batman",
            "description": "(2022)",
            "genres": "Action, Crime, Drama",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Crime",
                    "value": "Crime"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "imDbRating": "8.5",
            "plot": "When the Riddler",
        }] };
      },
    });

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    const items = await screen.findAllByTestId("item");
    expect(items).not.toHaveLength(0);

    
    const element = await screen.findByText(/Batman/);
    expect(element).toBeInTheDocument();
  });

  test("renders error message if request fails", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValue({
      ok: false,
      json: async () => undefined,
    });

    const history = createMemoryHistory();
    const route = "/some-route";
    history.push(route);
    render(
      <Provider store={store}>
        <Router history={history}>
          <HomePage />
        </Router>
      </Provider>
    );

    const element = await screen.findByText(/Nie udało się/);
    expect(element).toBeInTheDocument();
  });
});
