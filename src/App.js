import React, { Component } from "react";
import shortid from "shortid";
// import Section from "components/Section";
import FormContact from "components/FormContact";
import ContactList from "components/ContactList";
import Filter from "components/Filter/Filter";

class App extends Component { 
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:'',
  };

  componentDidMount() { 
    console.log('Змонтувалось');
    const contactJson = localStorage.getItem('contacts');
    const contactParce = JSON.parse(contactJson);
    console.log(contactParce);
    if (contactParce) { 
      this.setState({contacts:contactParce});
    };
  };

  componentDidUpdate(prevState) { 
    console.log('Оновилось');
    if (this.state.contacts !== prevState) { 
      console.log('Оновився state');
      localStorage.setItem('contacts',JSON.stringify(this.state.contacts));
    };
  };

  addContact = data => { 
    const { name,number } = data;
    const { contacts } = this.state;
    contacts.some(contact => contact.name === name) ?
      alert(`${name} is already exist`) : contacts.push({ id: shortid.generate(), name: name, number: number });
      this.setState(prevState => ({ contacts: prevState.contacts }));
    // const add = {
    //   id: shortid.generate(),
    //   name,
    //   number,
    // };
    // this.setState(prevState => ({
    //   contacts: [add,...prevState.contacts],
    // }));
  };

  // formSubmitHendle = data => { 
  //   console.log(data);
  // };

  deleteContaktItem = (contactId) => {
    this.setState(prevState => ({contacts : prevState.contacts.filter(contact => contact.id !== contactId), }))
    console.log(contactId);
  };

  changeFilter = e => { 
    this.setState({filter:e.currentTarget.value});
  };

  render() { 
    const normalizeFilter = this.state.filter.toLowerCase();
    const filtred = this.state.contacts.filter(
      contact => contact.name.toLowerCase().includes(normalizeFilter)||contact.number.toLowerCase().includes(normalizeFilter));
    return (
      <div>
        {/* <Section title='Phonebook'> */}
        <h1>Phonebook</h1>
          <FormContact onSubmit={this.addContact}/>
      {/* </Section> */}

        {/* <Section title='Contacts'> */}
        <h2>Contacts</h2>
          <Filter value={this.state.filter} changeFilter={this.changeFilter}/>
          <ContactList options={filtred} onDeleteContactItem={ this.deleteContaktItem}/>
      {/* </Section> */}
      </div>
    )
  }
};

export default App;
