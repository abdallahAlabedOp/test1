import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
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
    isLogedIn: false,
    setIsLogedIn: jest.fn().mockResolvedValueOnce(true),
  };

  it("render login", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            id: 2,
            name: "seanne Graham",
            username: "sret",
            email: "dincere@april.biz",
          },
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
          },
        ],
      })
    );
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
  it("able to type into input", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            id: 2,
            name: "seanne Graham",
            username: "sret",
            email: "dincere@april.biz",
          },
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
          },
        ],
      })
    );
    render(
      <UserContext.Provider value={loginContext}>
        <Login />
      </UserContext.Provider>
    );

    await waitFor(() => {
      const inputElement = screen.getByPlaceholderText(/Email Address/i);
      fireEvent.change(inputElement, { target: { value: "Bret" } });
      expect(inputElement.value).toBe("Bret");
    });
  });

  it("check if the username correct", async () => {
    const history = createMemoryHistory();

    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            id: 2,
            name: "seanne Graham",
            username: "sret",
            email: "dincere@april.biz",
          },
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
          },
        ],
      })
    );
    render(
      <Router history={history}>
        <UserContext.Provider value={loginContext}>
          <Login />
        </UserContext.Provider>
      </Router>
    );
    await waitFor(() => {
      const inputElement = screen.getByPlaceholderText(/Email Address/i);
      fireEvent.change(inputElement, {
        target: { value: "Sincere@april.biz" },
      });
      const inputElement1 = screen.getByTestId("submitBtn");
      fireEvent.click(inputElement1);
      expect(inputElement).toBeInTheDocument();
    });
  });
  it("check if the uses logedin", async () => {
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

    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            id: 2,
            name: "seanne Graham",
            username: "sret",
            email: "dincere@april.biz",
          },
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
          },
        ],
      })
    );
    render(
      <Router history={history}>
        <UserContext.Provider value={loginContext}>
          <Login />
        </UserContext.Provider>
      </Router>
    );
    await waitFor(() => {
      const inputElement = screen.getByPlaceholderText(/Email Address/i);
      fireEvent.change(inputElement, {
        target: { value: "Sincere@april.biz" },
      });
      const inputElement1 = screen.getByTestId("submitBtn");
      fireEvent.click(inputElement1);
      expect(inputElement).toBeInTheDocument();
    });
  });



  it("check if there is no  users", async () => {
    const loginContext = {
      userName: "Bret",
      setUserName: jest.fn().mockResolvedValueOnce(true),
      userId: 1,
      setUserId: jest.fn().mockResolvedValueOnce(true),
      email: "Sincere@april.biz",
      setEmail: jest.fn().mockResolvedValueOnce(true),
      isLogedIn: false,
      setIsLogedIn: jest.fn().mockResolvedValueOnce(true),
    };
    const history = createMemoryHistory();

    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [{}],
      })
    );
    render(
      <Router history={history}>
        <UserContext.Provider value={loginContext}>
          <Login />
        </UserContext.Provider>
      </Router>
    );
    await waitFor(() => {
      const inputElement = screen.getByPlaceholderText(/Email Address/i);
      fireEvent.change(inputElement, {
        target: { value: "Sincere@april.biz" },
      });
      const inputElement1 = screen.getByTestId("submitBtn");
      fireEvent.click(inputElement1);
      expect(inputElement).toBeInTheDocument();
    });
  });

  it('should render Login component ', async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            id: 2,
            name: "seanne Graham",
            username: "sret",
            email: "dincere@april.biz",
          },
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
          },
        ],
      })
    );
    render(<UserContext.Provider value={loginContext}>
      <Login />
    </UserContext.Provider>);

    await waitFor(() => {

      expect(screen).toMatchSnapshot();
    });

  });
});
