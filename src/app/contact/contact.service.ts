import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private firestore: Firestore) {}

  addContactMessage(messageData: any) {
    const messagesRef = collection(this.firestore, 'contactMessages');
    return addDoc(messagesRef, messageData);
  }
}