import { html, render } from 'lit-html';

const _HEADER = {
  _env: {
    myDIV: null,
  },

  init: () => {
    const { _env } = _HEADER;
    _env.myDIV = document.createElement('div');
    _env.myDIV.classList.add("header");
  },

  getComponent() {
    const { _env } = _HEADER;
    return _env.myDIV;
  },

  _render: () => {
    const { _env } = _HEADER;
    const _innerHTML = html`<h1>Frontend makeup</h1>`;
    render(_innerHTML, _env.myDIV);
  },

  update: () => {
    _HEADER._render();
  },

};

export default _HEADER;