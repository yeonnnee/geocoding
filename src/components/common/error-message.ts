import { Component, Input } from "@angular/core";

@Component({
  selector:'app-error',
  template: `<p>dkssud</p>`
})

export class ErrorMsgComponent {
  @Input() errorMsg: string = '';

}