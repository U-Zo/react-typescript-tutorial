import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactState, getContacts } from '../modules/contact';

function ContactsContatainer(): ReactElement {
  const { contacts } = useSelector(
    ({ contact }: { contact: ContactState }) => ({
      contacts: contact.contacts,
    }),
  );

  const dispatch = useDispatch();

  const onGetContacts = () => {
    dispatch(getContacts());
  };

  return (
    <div>
      <button type="button" onClick={onGetContacts}>
        클릭
      </button>
      {contacts}
    </div>
  );
}

export default ContactsContatainer;
