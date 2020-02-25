import * as React from 'react';
import {url} from "../util";

interface IErrorPageState {
  error?: {
    status: string;
    message: string;
  };
}

export default class ErrorPage extends React.Component<void, IErrorPageState> {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const requestUrl = url('api/oups');
    fetch(requestUrl)
      .then(response => response.json())
      .then(error => this.setState({error}));
  }

  render() {
    const { error } = this.state;

    return <span>
      <img src='/images/pets.png' />

      <h2>Something happened...</h2>
      { error ?
        <span>
          <p><b>Status:</b> {error.status}</p>
          <p><b>Message:</b> {error.message}</p>
        </span>
        :
        <p><b>Unkown error</b></p>
      }
    </span>;
  }
};
