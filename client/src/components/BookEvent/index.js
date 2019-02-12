import React from 'react';
import './bookevent.css';
import axios from 'axios';
class BookEvent extends React.Component {
  state={
    input:''
  }
  handleChange=({target:{name,value}})=> {
    this.setState({[name]: value})
  }

  handleClick =()=>{
    const {history} = this.props;
    axios.post('/bookevent',this.state)
    .then((data)=>{
    history.push('/events');
    })
  }

  handleSubmitForm=(event)=>{
    event.preventDefault();
  }
  render() {
    return (
      <div className="BookEvent">
        <form onSubmit={this.handleSubmitForm}>
          <div className="container">
            <div className="column">
            <h2><label for="general">General</label></h2>
              <input
                type="text"
                name="title"
                value={this.state.title}
                placeholder="Event Name:"
                onChange={this.handleChange}
              />
              <label for="start">Start date:</label>
              <input
                type="date"
                name="startdate"
                value={this.state.startdate}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="note"
                value={this.state.note}
                placeholder="Note:"
                onChange={this.handleChange}
              />

              <h2><label for="lunch">Lunch</label></h2>
              <input
                type="text"
                name="note"
                value={this.state.note}
                placeholder="Description:"
                onChange={this.handleChange}
              />

              <h2><label for="coffee">Coffee</label></h2>
              <input
                type="text"
                name="note"
                value={this.state.note}
                placeholder="Description:"
                onChange={this.handleChange}
              />

              <h2><label for="equipment">Equipment</label></h2>
              <input
                type="text"
                name="note"
                value={this.state.note}
                placeholder="Description:"
                onChange={this.handleChange}
              />
            </div>
            <div className="column">
            <input
              type="text"
              name="orgName"
              value={this.state.orgName}
              placeholder="Organization Name:"
              onChange={this.handleChange}
            />
            <label for="end">End date:</label>
            <input
              type="date"
              name="enddate"
              value={this.state.enddate}
              onChange={this.handleChange}
            />
            <input
              type="Number"
              name="price"
              value={this.state.price}
              placeholder="Cost:"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="capacity"
              value={this.state.capacity}
              placeholder="#Persons:"
              onChange={this.handleChange}
            />

            <input
              type="Number"
              name="price"
              value={this.state.price}
              placeholder="Cost/Person:"
              onChange={this.handleChange}
            />
            <label for="time">Time:</label>
            <input
              type="date"
              name="time"
              value={this.state.time}
              onChange={this.handleChange}
            />

            <input
              type="Number"
              name="price"
              value={this.state.price}
              placeholder="Cost/Person:"
              onChange={this.handleChange}
            />
            <label for="time">Time:</label>
            <input
              type="date"
              name="time"
              value={this.state.time}
              onChange={this.handleChange}
            />

            <input
              type="Number"
              name="price"
              value={this.state.price}
              placeholder="Cost:"
              onChange={this.handleChange}
            />

            <h2><label for="totalcost">Total Cost:</label></h2>
            </div>
            <div className="column">
            <button
              className="submit"
              onClick={this.handleClick}
              >Submit
            </button>
            </div>
          </div>

        </form>
      </div>
      )
  }
}
export default BookEvent
