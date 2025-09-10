import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'hns-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Register for HNS</h1>
    <form (submit)="register($event)">
      <label>
        Name
        <input name="name" [(ngModel)]="name" required />
      </label>
      <label>
        Email
        <input name="email" [(ngModel)]="email" required />
      </label>
      <button type="submit">Create Passkey</button>
    </form>
    <p *ngIf="message">{{ message }}</p>
  `
})
export class AppComponent {
  name = '';
  email = '';
  message = '';

  async register(event: Event) {
    event.preventDefault();
    try {
      const publicKey: PublicKeyCredentialCreationOptions = {
        challenge: new Uint8Array(32),
        rp: { name: 'HNS' },
        user: {
          id: new TextEncoder().encode(this.email),
          name: this.name,
          displayName: this.name
        },
        pubKeyCredParams: [{ type: 'public-key', alg: -7 }],
        authenticatorSelection: {
          userVerification: 'required'
        },
        timeout: 60000,
        attestation: 'none'
      };
      await navigator.credentials.create({ publicKey });
      this.message = 'Passkey created. HNS ID registered.';
    } catch (err) {
      console.error(err);
      this.message = 'Registration failed.';
    }
  }
}
