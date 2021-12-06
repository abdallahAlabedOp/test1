import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import axios from "axios";
import Home from "../components/Post.jsx";
import { UserContext } from "../contexats/UserContexts";

jest.mock("axios");
describe("Posts", () => {

  afterEach(cleanup);
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

  it("posts", async () => {

    axios.get.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          userId: 1,
          title: "hello there",
          body: "test", flag: true
        },
      ],
    });
    axios.get.mockResolvedValueOnce({

      data: [{
        "postId": 2,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      }, {
        "postId": 1,
        "id": 2,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      }, {
        "postId": 3,
        "id": 3,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },],
    });
    render(
      <UserContext.Provider value={loginContext}>
        <Home />
      </UserContext.Provider>
    );
    await waitFor(() => {
      const avatar = screen.getByTestId("post");
      expect(avatar).toBeInTheDocument();
      const inputElement1 = screen.getByTestId("showComments");
      fireEvent.click(inputElement1);

    });
  });


  it("user have no posts", async () => {
    axios.get.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          userId: 2,
          title: "hello there",
          body: "test",
        },
      ],
    });


    render(
      <UserContext.Provider value={loginContext}>
        <Home />
      </UserContext.Provider>
    );
    await waitFor(() => {
      const avatar = screen.getByTestId("post");
      expect(avatar).toBeInTheDocument();
    });
  });
  it('should render Post and Comment components', async () => {
    axios.get.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          userId: 1,
          title: "hello there",
          body: "test", flag: true
        },
      ],
    });
    axios.get.mockResolvedValueOnce({

      data: [{
        "postId": 2,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      }, {
        "postId": 1,
        "id": 2,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      }, {
        "postId": 3,
        "id": 3,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },],
    });
    render(<UserContext.Provider value={loginContext}>
      <Home />
    </UserContext.Provider>);

    await waitFor(() => {

      expect(screen).toMatchSnapshot();
    });

  });

});