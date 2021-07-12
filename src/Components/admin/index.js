import React from 'react';
import Ticket from './ticket';
import './admin.css';
import io from 'socket.io-client';
const socket = io('localhost:5002/', { transports: ['websocket'] });
class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adminName: '',
      tickets: [],
      onlineAdmins: [],
    };
  }

  componentDidMount() {

    const adminName = prompt("What's your name?");
    this.setState({ adminName });
    socket.on('connect', () => {

      socket.emit('join', { name: adminName });

      socket.on('newTicket', (payload) => {
        this.setState({ tickets: [...this.state.tickets, payload] });
      });


      socket.on('onlineAdmins', (payload) => {
        this.setState({ onlineAdmins: [...this.state.onlineAdmins, payload] });
      });


      socket.on('offlineAdmins', (payload) => {
        this.setState({
          onlineAdmins: this.state.onlineAdmins.filter((admins) => admins.id !== payload.id),
        });
      });
    });
  }

  handleClaim = (id, socketId) => {
    console.log(socketId);
    socket.emit('claim', { id, name: this.state.adminName, customertId: socketId });
  };

  render() {
    return (
      <main className="admin-container">
        <section id="container">
          <h2>Opened Tickets</h2>
          <section id="tickets">
            {this.state.tickets.map((ticket) => {
              return (
                <Ticket {...ticket} handleClaim={this.handleClaim} key={ticket.id} />
              );
            })}
          </section>
        </section>

        <aside id="online-admins">
          <h2>Available Admins</h2>
          {this.state.onlineAdmins.map((admins) => (
            <h2 key={admins.id}>{admins.name}</h2>
          ))}
        </aside>

      </main>
    );
  }
}

export default Admin;
