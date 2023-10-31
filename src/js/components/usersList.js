import { makeRequest } from "../api/api.js";
import { convertDate } from "../utils/convertDate";

export class UsersList {
  users = [];
  hostRef;
  
  constructor() {
    this.hostRef = document.getElementById('list-wrapper');
    if (!this.hostRef) return;
    
    this.getUsers();
  }
  
  getUsers() {
    makeRequest('GET', 'users')
      .then((response) => {
        this.renderList(response.data);
      })
  }
  
  renderList(users) {
    this.hostRef.innerHTML = '';
    this.users = users;
    users.forEach(item => {
      this.renderUserItem(item)
    })
  }
  
  renderUserItem(userModel) {
    this.hostRef.innerHTML += `
    <div class="list__item ${ this.getClassFaculty(userModel.faculty) }">
      <img
        class="list__item-img"
        src="${ userModel.avatar }"
        alt="${ userModel.name }"
      >
      <div>
        <div class="fs-3">${ userModel.name }</div>
        <div class="fs-5 fst-italic">${ userModel.fullName }</div>
        <div class="fs-6">Дата рождения: <b>${ convertDate(userModel.dob) }</b></div>
      </div>

      <button class="list__btn list__btn--del">×</button>
      <button class="list__btn list__btn--edit">🖉</button>
    </div>
    `
  }
  
  getClassFaculty(isFaculty) {
    // if (isFaculty === '1') return 'list__item--griffindor';
    // if (isFaculty === '2') return 'list__item--kogtevran';
    // if (isFaculty === '3') return 'list__item--pufendui';
    // if (isFaculty === '4') return 'list__item--slizerin';
    
    switch (isFaculty) {
      case 1:
        return 'list__item--griffindor';
      
      case 2:
        return 'list__item--kogtevran';
      
      case 3:
        return 'list__item--pufendui';
      
      case 4:
        return 'list__item--slizerin';
      
      default:
        return '';
    }
  }
}
