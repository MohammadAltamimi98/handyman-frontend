import React from 'react';
import './customer.css';
import io from 'socket.io-client';
const SERVER_URL = process.env.SERVER_URL;
const socket = io(SERVER_URL, { transports: ['websocket'] });

class Home extends React.Component {

  // constructor to hold the name of the customer ** later can be sent as a prop from auth **
  constructor(props) {
    super(props);
    this.state = {
      customerName: '',
    };
  }


  componentDidMount() {
    const customerName = prompt("What's your name?");
    this.setState({ customerName });

    socket.on('connect', () => {
      socket.on('claimed', function (payload) {
        alert(`${payload.name} claimed your ticket`);
      });
    });
  }

  // functioon to handle the change of the inputs
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // this function runs when the submit event is running 
  handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...this.state,
      created_at: Date.now(),
    };

    console.log(`Hello ${this.state.customerName}`, payload);
    // once the user submit the form we need to emit a ticket so all admins can see that ticket

    socket.emit('createTicket', payload);
  };


  render() {
    return (
      <main className="container">
        <section className="form-card">
          <form id="questions-form" onSubmit={this.handleSubmit}>

            <input
              className="question"
              type="text"
              name="question"
              placeholder="Describe your problem here ... 🔧 🔧 🔧"
              required
              onChange={this.handleChange}
            />

            <label className="lab">
              <input
                type="radio"
                name="type"
                value="residential"
                required
                onChange={this.handleChange}
              />
              Residential
            </label>

            <label className="cc">
              <input
                type="radio"
                name="type"
                value="industrial"
                onChange={this.handleChange}
              />
              Industrial
            </label>

            <label className="service">
              <input
                type="radio"
                name="service"
                value="electrical"
                required
                onChange={this.handleChange}
              />
              Electrical
            </label>

            <label className="service">
              <input
                type="radio"
                name="service"
                value="mechanical"
                onChange={this.handleChange}
              />
              Mechanical
            </label>

            <label className="service">
              <input
                type="radio"
                name="service"
                value="plumbing"
                onChange={this.handleChange}
              />
              Plumbing
            </label>

            <label className="service">
              <input
                type="radio"
                name="service"
                value="sewage"
                onChange={this.handleChange}
              />
              Sewage
            </label>

            <label className="service">
              <input
                type="radio"
                name="service"
                value="others"
                onChange={this.handleChange}
              />
              Others
            </label>

            <button className="question">Request Assistance</button>
          </form>
        </section>
      </main>
    );
  }
}

export default Home;
