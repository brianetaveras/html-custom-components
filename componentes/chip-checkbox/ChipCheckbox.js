const template = document.createElement('template');
template.innerHTML = `
<style>

.chip-checkbox .chip-checkbox-label {
    display: inline-block;
    max-width: 250px;
    min-width: 100px;
    padding: 2rem;
    border-radius: 5rem;
    border-radius: 1;
    border: 2px solid #01B7A9;
    color: #01B7A9;
    font-weight: bold;
    font-family: sans-serif;
    box-sizing: border-box;
    user-select: none;
    cursor: pointer;
    transition: background 0.5s;
    text-align: center
  }
  .chip-checkbox .chip-checkbox-input {
    display: none;
  }
  .chip-checkbox .chip-checkbox-input:checked + .chip-checkbox-label {
    background: rgba(1, 183, 169, 0.3);
  }

</style>

<span class="chip-checkbox">
    <input class="chip-checkbox-input" type="checkbox">
    <label class="chip-checkbox-label"></label>    
</span>
`
// SOLID
class ChipCheckbox extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'});
        // this.shadowRoot === document
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const label = this.shadowRoot.querySelector('.chip-checkbox-label');
        const checkbox = this.shadowRoot.querySelector('.chip-checkbox-input');
         
        label.innerHTML = this.textContent;
        label.setAttribute('for', this.id);
        checkbox.setAttribute('id', this.id);

        this.shadowRoot.addEventListener('click', this.handleComponentClick)

        if(!this.id){
            throw Error('Necesitas un ID para utilizar el componente <chip-checkbox>')
        }

    }
    
}

export default ChipCheckbox;