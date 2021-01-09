/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const getContacts = (): Promise<AxiosResponse<any>> =>
  axios.get('https://api.androidhive.info/contacts/');
