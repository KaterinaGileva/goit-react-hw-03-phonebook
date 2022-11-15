import { Component } from 'react';
import Filter from './components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
//import { Formik, Field, Form } from "formik";
//import * as yup from 'yup';

//import initialContacts from './contacts.json';
import { nanoid } from 'nanoid';

import ContactList from 'components/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

 // addContact = ({name, number})=> {
 //     console.log('name', name);
 //     console.log('#', number);
 //     console.log('fg', this.state.contacts);
 //     console.log('con', contact);
  //    const contact = {
  //        id: nanoid(),
  //       name,
  //       number  
  //    };

  //    console.log('con', contacts);
  //    if (contact === this.state.contacts) {
  //      alert(`${name} is already in contacts`);
   //   }
   //   this.setState(({ contacts }) => ({
  //      contacts: [contact, ...contacts],
  //   }));
 //   };

 addContact = ({name, number}) => {
  const normalizedFilter = name.toLowerCase();
  const checkByName = this.state.contacts.find(contact => contact.name.toLowerCase() === normalizedFilter);
  if (checkByName) {
    alert(`${name} is already in contacts`);
  } else {
    const contact = {
      id: nanoid(),
      name, number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
}

deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
   }));
 };

changeFilter = event => {
    this.setState({filter: event.currentTarget.value});
};

getVisibleContacts = () => {
     const { filter, contacts } = this.state;
     const normalizedFilter = filter.toLowerCase();

     return contacts.filter(contact =>
     contact.name.toLowerCase().includes(normalizedFilter),
    );
};

componentDidMount() {
  console.log("App componentDidMount");

  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);

  if (parsedContacts) {
  this.setState({ contacts: parsedContacts});
}
}

componentDidUpdate (prevProps, prevState) {
  console.log("App componentDidUpdate");
  
  if(this.state.contacts !== prevState.contacts){
    console.log('обновилось поле контактов');
// текущие контакты приводим к строке и записываем в локальное хранилище
//при каждом обновлении контактов ,приводим к строке и
// целиком перезаписывается массив локального хранилища
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}


  render() {
    console.log("App render");
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
     <div className='container'>
        <h1>Phonebook</h1> 
        <ContactForm onSubmit={this.addContact}
        />
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList
           contacts={visibleContacts}
           onDeleteContact={this.deleteContact} 
         />
         
      </div>
    )
  
}
}

//const schema = yup.object().shape({
//  login: yup.string().required(),
 //password: yup.string().min(6).max(16).required(),
 // email: yup.string().email(),
 // website: yup.string().url(),
 
//});
//

//addContact = (name)=> {
  //  console.log('name', name);
    
   // const contact = {
   //     id: nanoid(),
  //      name    
  //  };
    
   // this.setState(({ contacts }) => ({
   //   contacts: [contact, ...contacts],
   // }));
 // };

//<Formik 
//initialValues={initialValues} 
//validationSchema={schema}
//onSubmit={handleSubmit} />

//this.setState(prevState => ({
   //  contacts: prevState.contacts.map(contact => {
    //  if (contact.id === contactId) {
    //     return {
     //     ...contact,
    //     completed: !contact.completed,
    //    };
    //   }

   //   return contact;
   // }),
 //  }));

 