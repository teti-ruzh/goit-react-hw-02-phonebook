import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }

formSubmitHandler = data => {
  const newContactItem = {id: nanoid(), ...data};
  this.setState(({contacts}) => ({
    contacts: [newContactItem, ...contacts]}));
}

changeFilter = event => {
  this.setState({filter: event.currentTarget.value});
}

deleteContact = contactId => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  }));
};

getVisibleContacts = () => {
  const { filter, contacts} = this.state;
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({name}) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};





  render() {
    const {filter} = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.formSubmitHandler}/>
    
      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.changeFilter}/>
      <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
    </div>
    );
  }
}


export default App;
