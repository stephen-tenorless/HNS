import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgIf],
  styleUrls: ['./app.component.scss'],
  template: `
    <section class="hero text-center">
      <div class="container">
        <h1 class="display-3 fw-bold mb-4">Human Name System</h1>
        <p class="lead mb-5">
          The Human Name System (HNS) maps verified human identities to secure digital profiles,
          eliminating bots and enabling a trustworthy social network.
        </p>
        <a href="#register" class="btn btn-light btn-lg">Get Started</a>
      </div>
    </section>

    <section class="features section-padding">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-4 mb-4">
            <h3>Verified Identity</h3>
            <p>Profiles are backed by cryptographic proof to ensure authenticity.</p>
          </div>
          <div class="col-md-4 mb-4">
            <h3>Decentralized Trust</h3>
            <p>Own your digital identity independent of centralized platforms.</p>
          </div>
          <div class="col-md-4 mb-4">
            <h3>Bot-Free Network</h3>
            <p>Only real humans can join, creating a secure social space.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="register" class="section-padding bg-light">
      <div class="container">
        <div class="card shadow">
          <div class="card-body">
            <h2 class="card-title mb-4 text-center">Register</h2>
            <form (submit)="register($event)">
              <div class="mb-3">
                <label class="form-label">First Name</label>
                <input class="form-control" name="firstName" [(ngModel)]="firstName" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Last Name</label>
                <input class="form-control" name="lastName" [(ngModel)]="lastName" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Birthdate</label>
                <input class="form-control" type="date" name="birthDate" [(ngModel)]="birthDate" required />
              </div>
              <button type="submit" class="btn btn-primary w-100">Register with Passkey</button>
            </form>
            <div *ngIf="message" class="alert alert-info mt-3" role="alert">{{ message }}</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AppComponent {
  firstName = '';
  lastName = '';
  birthDate = '';
  message = '';

  async register(event: Event) {
    event.preventDefault();
    try {
      const { Amplify, Auth } = await import('aws-amplify');
      Amplify.configure({
        Auth: {
          region: 'YOUR_AWS_REGION',
          userPoolId: 'YOUR_USER_POOL_ID',
          userPoolWebClientId: 'YOUR_USER_POOL_CLIENT_ID'
        }
      });

      await Auth.signUp({
        username: `${this.firstName}${this.lastName}`,
        password: crypto.randomUUID(),
        attributes: {
          given_name: this.firstName,
          family_name: this.lastName,
          birthdate: this.birthDate
        }
      });

      const publicKey: PublicKeyCredentialCreationOptions = {
        challenge: new Uint8Array(32),
        rp: { name: 'HNS' },
        user: {
          id: new TextEncoder().encode(`${this.firstName}${this.lastName}`),
          name: `${this.firstName} ${this.lastName}`,
          displayName: `${this.firstName} ${this.lastName}`
        },
        pubKeyCredParams: [{ type: 'public-key', alg: -7 }],
        authenticatorSelection: {
          userVerification: 'required',
          authenticatorAttachment: 'platform'
        },
        timeout: 60000,
        attestation: 'none'
      };

      await navigator.credentials.create({ publicKey });
      this.message = 'Registration complete. Passkey created and Cognito entry established.';
    } catch (err) {
      console.error(err);
      this.message = 'Registration failed.';
    }
  }

}
