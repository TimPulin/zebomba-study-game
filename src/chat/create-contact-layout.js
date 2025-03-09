import { Container } from 'pixi.js';
import { createButton } from '../utils/create-button.js';
import { createContactsListLayout } from './create-contacts-list-layout.js';

export function createContactLayout() {
  const outerLayout = new Container();

  const contactsListContainer = createContactsListLayout();

  const buttonCallChat = createButton('buttonChat');

  outerLayout.addChild(contactsListContainer.outerContainer, buttonCallChat);
  buttonCallChat.x = 539;
  
  return {
    outerLayout,
    contactList: contactsListContainer.slider,
    buttonChat: buttonCallChat,
  };
}
