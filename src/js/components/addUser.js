import { makeRequest } from "../api/api";

export class AddUser {
  hostRef;
  userListClass;
  
  constructor(userListClass) {
    this.userListClass = userListClass;
    this.hostRef = document.getElementById('form-new-user');
    if (!this.hostRef) return;
    
    this.hostRef.addEventListener('submit', (event) => {
      event.preventDefault();
      this.sentNewUser();
    })
  }
  
  sentNewUser() {
    const formData = new FormData(this.hostRef);
    const formValue = Object.fromEntries(formData);
    
    makeRequest('POST', 'user', formValue)
      .then(response => {
        this.userListClass.renderList(response.data);
      })
  }
}
