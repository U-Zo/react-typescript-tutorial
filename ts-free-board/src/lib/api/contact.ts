/* eslint-disable import/prefer-default-export */
import axios, { AxiosResponse } from 'axios';

export const getContacts = (): Promise<AxiosResponse<Contact>> =>
  axios.get<Contact>('/contacts');

type Phone = {
  mobile: string;
  home: string;
  office: string;
};

export type Contact = {
  id: string;
  name: string;
  email: string;
  gender: boolean;
  phone: Phone;
};
