import { Router } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axiosMock from "axios";
// import { StateMock } from "@react-mock/state";
import Login from "../components/SingIn";
import { UserContext } from "../contexats/UserContexts";

describe("login", () => {

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

  it("render login", async () => {
    // const data =
    axiosMock.get.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        },
      ],
    });
    // console.log(data);
    render(
        <UserContext.Provider value={loginContext}>
          <Login />
        </UserContext.Provider>
    );

    await waitFor(() => {
      const inputElement = screen.getByTestId("login");
      expect(inputElement).toBeInTheDocument();
    });
  });
});
