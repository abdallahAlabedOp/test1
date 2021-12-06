import React from "react";

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { UserContext } from "../contexats/UserContexts";
import Header from '../components/Header';

describe("Header", () => {

  it("should render the logout button when user loged in", () => {
    const loginContext = {
      userName: "Bret",
      setUserName: jest.fn().mockResolvedValueOnce(true),
      userId: 1,
      setUserId: jest.fn().mockResolvedValueOnce(true),
      email: "Sincere@april.biz",
      setEmail: jest.fn().mockResolvedValueOnce(true),
      isLogedIn: true,
      setIsLogedIn: jest.fn().mockResolvedValueOnce(true),
    };
    const history = createMemoryHistory();
    jest.spyOn(history, "push");
    render(
      <UserContext.Provider value={loginContext}>
        <Router history={history}>
          <Header />
        </Router>
        );
      </UserContext.Provider>
    );
    const inputElement = screen.getByTestId("Logout");
    fireEvent.click(inputElement);


  });
  it("should render the logout button when user loged in", () => {
    const loginContext = {
      userName: "Bret",
      setUserName: jest.fn().mockResolvedValueOnce(true),
      userId: 1,
      setUserId: jest.fn().mockResolvedValueOnce(true),
      email: "Sincere@april.biz",
      setEmail: jest.fn().mockResolvedValueOnce(true),
      isLogedIn: true,
      setIsLogedIn: jest.fn().mockResolvedValueOnce(true),
    };
    const history = createMemoryHistory();
    jest.spyOn(history, "push");
    render(
      <UserContext.Provider value={loginContext}>
        <Router history={history}>
          <Header />
        </Router>
        );
      </UserContext.Provider>
    );
    loginContext.isLogedIn = false;
    const inputElement = screen.getByTestId("Logout");
    fireEvent.click(inputElement);
  });

  it('should render Header component ', async () => {
    const loginContext = {
      userName: "Bret",
      setUserName: jest.fn().mockResolvedValueOnce(true),
      userId: 1,
      setUserId: jest.fn().mockResolvedValueOnce(true),
      email: "Sincere@april.biz",
      setEmail: jest.fn().mockResolvedValueOnce(true),
      isLogedIn: true,
      setIsLogedIn: jest.fn().mockResolvedValueOnce(true),
    };
    const history = createMemoryHistory();
    jest.spyOn(history, "push");
    render(
      <UserContext.Provider value={loginContext}>
        <Router history={history}>
          <Header />
        </Router>
        );
      </UserContext.Provider>
    );

    await waitFor(() => {

      expect(screen).toMatchSnapshot();
    });
  });
});
