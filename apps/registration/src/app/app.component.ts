import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgIf],
  template: `
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1>Human Name System</h1>
        <p class="lead">
          The Human Name System (HNS) maps verified human identities to secure digital profiles,
          eliminating bots and enabling a trustworthy social network.
        </p>
        <div class="text-start mt-4">
          <p>
            Imagine a Human Name System (HNS), similar to the Domain Name System (DNS), but
            specifically designed for authentic, verified individuals. It would work like a
            decentralized directory or an online identity service, mapping unique identifiers—like
            a name or a personal identifier—to verified data about a person, enabling a bot-free
            social experience. Here's how it could work:
          </p>

          <h2>Concept Breakdown</h2>
          <h3>Human Name System (HNS)</h3>
          <ul>
            <li>
              Just like DNS maps domain names to IP addresses, the HNS would map human names or
              unique identifiers to verified digital profiles.
            </li>
            <li>
              These profiles would contain minimal but verified details, such as a public key, basic
              information (if permitted), and a cryptographic proof of identity.
            </li>
            <li>Individuals could self-host their profiles or leverage trusted identity providers.</li>
          </ul>

          <h3>Identity Verification and Privacy</h3>
          <ul>
            <li>
              Each person would have their identity cryptographically verified through government
              IDs or trusted third-party verifiers.
            </li>
            <li>
              Once verified, each person would receive an HNS entry that could be updated with
              controlled information, like social links, interests, or availability.
            </li>
            <li>
              Privacy would be key—users could choose what information is public and what remains
              private, all while maintaining authenticity.
            </li>
          </ul>

          <h3>Bot-Free Social Network</h3>
          <ul>
            <li>
              A social network built on top of HNS would ensure that every participant is a real
              human. Users would need an HNS entry to join.
            </li>
            <li>
              The network could be built in a decentralized way (e.g., leveraging blockchain
              technology), ensuring there’s no single entity that can control access or censor
              content.
            </li>
            <li>
              To combat bots, access would only be allowed to those with a valid HNS entry, verified
              via cryptographic signatures.
            </li>
          </ul>

          <h3>Features of the Network</h3>
          <ul>
            <li>
              <strong>Decentralized Trust:</strong> No single platform like Facebook or Twitter.
              Instead, each user is independently verified, ensuring true identities without
              relying on centralized corporations.
            </li>
            <li>
              <strong>Selective Sharing:</strong> Users could share information only with trusted
              circles, ensuring a higher level of privacy and control over their data.
            </li>
            <li>
              <strong>Spam and Abuse Prevention:</strong> Since each identity is verified and
              traceable, the chances of spam or abuse decrease, and accountability is easier to
              manage.
            </li>
            <li>
              <strong>Portable Profiles:</strong> Since the identity verification and profiles exist
              outside traditional platforms, users could move between different social networks with
              ease, taking their reputation and connections with them.
            </li>
          </ul>

          <h3>User Experience</h3>
          <ul>
            <li>
              Imagine a human-readable username that acts like a "domain" in HNS. For instance,
              someone could have stephen.ward.hns, making them easy to find, much like typing a
              domain into a browser.
            </li>
            <li>
              Connecting with people would be as simple as resolving their name on the HNS to see
              their social profile.
            </li>
            <li>
              Communication apps could leverage the HNS to provide end-to-end encrypted messaging,
              ensuring privacy while maintaining identity verification.
            </li>
          </ul>
        </div>
      </div>

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
