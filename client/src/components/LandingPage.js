import React, { useState, useEffect } from "react";
import LandingPageDataService from "../services/LandingPageService";

const LandingPage = props => {
  const initialLandingPageState = {
    email: "",
    phonenumber: "",
  };
  const [currentLandingPage, setCurrentLandingPage] = useState(initialLandingPageState);
  const [submitted, setSubmitted] = useState(false);

  // track values of input and set state for changes
  const handleInputChange = event => {
    const { name, value } = event.target;
    setLandingPage({ ...landingPage, [name]: value });
  };

  // get post state and send the POST request to the Web API using PostDataService.create()
  const saveLandingPage = () => {
    var data = {
      email: landingPage.email,
    };

    LandingPageDataService.create(data)
      .then(response => {
        setLandingPage({
          email: response.data.email,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newPost = () => {
    setLandingPage(initialLandingPageState);
    setSubmitted(false);
  };

  return (
    <div>
      <div className="App">
        <img src="/client/public/logo.svg" className="App-logo" alt="logo" />
        <header className="App-header">
          <h1>sano: the fashion-first community</h1>
          <p>discover. create. share.</p>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              value={landingpage.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <button onClick={saveLandingPage} className="btn btn-success">
            get sano
          </button>
        </header>
      </div>
    </div>
  );
};

export default Post;
