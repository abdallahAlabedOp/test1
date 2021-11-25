import axios from "axios";
export class AbstractController {

  getDocument = (req, res) => {
    const api = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(api)
      .then(function (response) {
       res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {});

  };

  getDocuments = (req, res) => {

  };

  addDocument = (req, res) => {

  };

  updateDocument = (req, res) => {

  };

  deleteDocument = (req, res) => {

  };
}
export default AbstractController;