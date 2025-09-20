import { Component } from '@angular/core';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [NxWelcome],
  selector: 'bnk-system-register-entry',
  template: `<bnk-nx-welcome></bnk-nx-welcome>`,
})
export class RemoteEntry {}
