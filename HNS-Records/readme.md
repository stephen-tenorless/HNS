# Human Name System (HNS) Records

The Human Name System (HNS) aims to provide a distributed and secure way to map human-readable names to unique digital identities, similar to how DNS (Domain Name System) maps domain names to IP addresses. Below are the proposed record types that HNS might need, modeled similarly to DNS records but adapted for human identity management.

## Record Types

### 1. A (Address) Record
- **Purpose**: Maps a human-readable name (e.g., `stephen.hns`) to a unique identifier, such as a blockchain address, UUID, or unique digital ID.
- **Example**: `stephen.hns A 0x12345abcde789` (where `0x12345abcde789` is a unique identifier such as a blockchain address or digital fingerprint).
- **Use Cases**: Helps applications or services identify individuals uniquely across platforms.

### 2. P (Profile) Record
- **Purpose**: Contains metadata about an individual, such as their profile information—full name, contact information, public bio, or other relevant details.
- **Example**: `stephen.hns P {"name": "Stephen Ward", "email": "stephen@example.com", "publicBio": "IT Professional"}`.
- **Use Cases**: To quickly get human-readable metadata for a person in various applications, like social networks or collaborative tools.

### 3. CNAME (Canonical Name) Record
- **Purpose**: Works like a DNS CNAME—used to create aliases for names. For example, mapping multiple aliases or nicknames to a primary identity.
- **Example**: `steve.hns CNAME stephen.hns`.
- **Use Cases**: If someone has multiple names or aliases, all of which should map back to the same primary HNS name, this record type allows for flexible resolution of identity.

### 4. MX (Message Exchange) Record
- **Purpose**: Similar to a DNS MX record, but in HNS it could indicate where to route secure messages for a given user.
- **Example**: `stephen.hns MX mail.example.com`.
- **Use Cases**: Indicates preferred messaging servers or endpoints for someone, possibly supporting decentralized messaging networks (e.g., Matrix or other secure messaging systems).

### 5. E (Encryption Key) Record
- **Purpose**: Associates an HNS name with an encryption key (public key), which can be used for secure communication.
- **Example**: `stephen.hns E ssh-rsa AAAAB3...`.
- **Use Cases**: Essential for encrypted messaging or secure verification of identity in transactions—useful in contexts like encrypted email or blockchain interactions.

### 6. VC (Verifiable Credential) Record
- **Purpose**: Stores references to Verifiable Credentials (VCs), which provide additional information verified by third parties, like employment status, education, or certifications.
- **Example**: `stephen.hns VC {"issuer": "university.edu", "credential": "Bachelor's in Computer Science"}`.
- **Use Cases**: Allows third parties to verify specific information about the user, such as job title or educational qualifications.

### 7. LNK (Link) Record
- **Purpose**: A general-purpose record to provide links to external resources that are associated with the HNS entry.
- **Example**: `stephen.hns LNK {"linkedin": "https://linkedin.com/in/stephen-ward"}`.
- **Use Cases**: Helpful for linking to social media profiles, personal websites, or other online presences related to the HNS identity.

### 8. SRV (Service) Record
- **Purpose**: Similar to DNS SRV records, defines the location (hostname and port) of specific services related to an HNS identity.
- **Example**: `_auth._tcp.stephen.hns SRV 0 5 443 auth.example.com`.
- **Use Cases**: Indicates where services like authentication, voice, or other user-centric services should be routed.

### 9. AUTH (Authentication) Record
- **Purpose**: Specifies the authentication methods available for verifying the user's identity. Could include methods such as OAuth, FIDO2, or WebAuthn.
- **Example**: `stephen.hns AUTH ["OAuth", "WebAuthn"]`.
- **Use Cases**: Useful for decentralized login services or to provide information about the supported authentication protocols for accessing services.

### 10. RL (Relationship) Record
- **Purpose**: Specifies relationships between HNS entities, such as connections to family members, friends, colleagues, or even devices.
- **Example**: `stephen.hns RL {"spouse": "kate.hns", "device": "stephen-phone.hns"}`.
- **Use Cases**: Helps build networks or graphs of relationships between people or objects within the HNS space, providing the basis for privacy-managed social networks.

### 11. SOC (Social Connections) Record
- **Purpose**: Contains information about social media handles or digital personas.
- **Example**: `stephen.hns SOC {"twitter": "@stephenw", "instagram": "@stepheninsta"}`.
- **Use Cases**: Useful for services that want to link directly to a person’s various public online presences.

### 12. VER (Verification) Record
- **Purpose**: Indicates whether the identity has been verified by certain methods or by a trusted authority.
- **Example**: `stephen.hns VER {"status": "verified", "authority": "ID.me"}`.
- **Use Cases**: Helps determine whether a given name is verified and can be trusted for more sensitive interactions.

### 13. DID (Decentralized Identifier) Record
- **Purpose**: Associates an HNS name with a Decentralized Identifier (DID) to link the HNS to other blockchain-based or decentralized identity systems.
- **Example**: `stephen.hns DID did:example:123456789abcdefghi`.
- **Use Cases**: Enables interoperability with other decentralized identity systems, allowing the use of a DID as an identifier.

### 14. Bio (Biometric Identifier) Record
- **Purpose**: Links a human-readable name to one or more biometric data types, such as facial recognition, fingerprints, or other forms of biometric identification.
- **Example**: `stephen.hns BIO {"identifierType": "fingerprint", "method": "Apple Touch ID", "biometricHash": "c2d6b3...hashedValue"}`.
- **Use Cases**: Provides a seamless and secure way to verify the identity through biometric data, useful for passwordless authentication and secure access.

## Summary
These record types form the backbone of HNS, allowing different systems to easily resolve names, obtain necessary credentials or encryption keys, manage relationships, and much more—all in a distributed and privacy-focused manner. Each record type is designed to make human identity as accessible, verifiable, and secure as possible, just as DNS manages domain records but tailored specifically for human identity and security.
