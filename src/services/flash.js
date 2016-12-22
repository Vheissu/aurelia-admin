import {computedFrom, inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Flash {

    constructor(ea) {
        this.ea = ea;
        this.messages = [];
        this.currentMessage = '';

        this.ea.subscribe('router:navigation:success', () => {
            this.currentMessage = this.messages.shift() || '';
        });
    }

    @computedFrom('messages', 'currentMessage')
    get hasMessages() {
        return this.messages.length || this.currentMessage !== '';
    }

    setMessage(text, cssClass = false) {
        this.messages.push({
            text: text,
            cssClass: cssClass
        });
    }

    getMessage() {
        setTimeout(() => {
            this.currentMessage = '';
        }, 3000);
        
        return this.currentMessage;
    }

}
