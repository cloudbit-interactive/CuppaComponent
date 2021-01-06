import {CuppaComponent} from "../../../src/cuppa.component.js"
import {cuppa} from "../../../src/cuppa.min.js"

export default class Template extends CuppaComponent {
    constructor(){
        super();
        this.cuppa = cuppa
        this.pure = false
        this.shadow = false
        this.state = {attr1:null, attr2:false}
    }

    static get observedAttributes() { return ['attr1', 'attr2'] }
    attributeChangedCallback(attr, oldVal, newVal) { this.setState({[attr]:newVal}) }
    
    connected() { }
    disconnected() { }

    render(){
        return /*html*/`
            <div>
                Template
            </div>`
    }
}

customElements.define('template-comp', Template);
