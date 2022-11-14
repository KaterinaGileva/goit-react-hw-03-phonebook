import React from 'react';
//import classNames from 'classnames';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.item}
        key={id}
      >
       <p className={css.name}>{name}:<span className={css.number}>{number}</span></p>
        <button
          type="button"
          className={css.btn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
