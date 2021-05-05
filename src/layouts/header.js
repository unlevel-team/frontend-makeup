'use strict';

import { html, render } from 'lit-html';
import { Modal } from '../components/modal';


const _ENV = {
  myDIV: null,
  modalInfo: null,  
};

const _HEADER = {
  _env: _ENV,

  init: () => {
    _ENV.myDIV = document.createElement('div');
    _ENV.myDIV.classList.add("header");
  },

  getComponent() {
    return _ENV.myDIV;
  },

  _render: () => {
    const _innerHTML = html`
      <div class="title">
        Frontend makeup
      </div>
      <div class="links">
        <a href="javascript:void(null);" @click=${_HEADER._onClickInfo}>
          <div class="image info-image"></div>
        </a>
        <a href="javascript:void(null);">
          <div class="image github-image"></div>
        </a>
      </div>
      ${_HEADER._renderModalInfo()}
    `;
    render(_innerHTML, _ENV.myDIV);
  },

  _renderModalInfo: () => {
    return html`
    <!-- The Modal -->
    <div id="modal-info" class="modal info">
    
      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header">
          <span class="close">&times;</span>
          <h2>About Frontend industry</h2>
        </div>
        <div class="modal-body">
          <p>Is a memo pad for develop frontend applications</p>
          <p>Separates the main topics for frontend development and offers concepts for W3C compatible code and frameworks</p>
          <!--
          <p>
            <button type="button" @click="${() => _ENV.modalInfo.close()}">Close</button>
          </p>
          -->
        </div>
        <div class="modal-footer">
          <!-- <h3>Modal Footer</h3> -->
        </div>
      </div>
    </div>
    `;
  },

  update: () => {
    _HEADER._render();
  },

  _onClickInfo: (_event) => {
    if (_ENV.modalInfo === null) {  // Initialize modal for info
      _ENV.modalInfo = new Modal({ element: _ENV.myDIV.querySelector('#modal-info') });  // TODO: REVIEW CODE 🔍⚠️
    }
    _ENV.modalInfo.open();
  },

};

export default _HEADER;