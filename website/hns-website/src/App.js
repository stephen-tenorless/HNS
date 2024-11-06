// app.js
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Define a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      textAlign: 'center',
      marginBottom: '20px',
    },
    h2: {
      fontSize: '1.5rem',
      color: '#1976d2',
      marginBottom: '10px',
    },
    body1: {
      fontSize: '1rem',
      color: '#4a4a4a',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Header */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Human Name System (HNS) Concept
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h1" component="h1">Human Name System (HNS) Concept</Typography>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h2">Identity Mapping in HNS</Typography>
          <Typography variant="body1">
            HNS maps human names or unique identifiers to verified digital profiles, similar to how DNS maps domain names to IP addresses.
            Profiles contain minimal but verified details like public keys, basic info, and cryptographic proof of identity.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h2">Identity Verification and Privacy</Typography>
          <Typography variant="body1">
            Each identity is cryptographically verified using government IDs or third-party verifiers. Users control which information is public, maintaining privacy and authenticity.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h2">Bot-Free Social Network</Typography>
          <Typography variant="body1">
            A social network on HNS ensures that every participant is a real, verified person. Access is restricted to verified identities, preventing bots and ensuring authenticity.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h2">Features of the Network</Typography>
          <List>
            <ListItem><ListItemText primary="Decentralized Trust: No central platform controls user identity." /></ListItem>
            <ListItem><ListItemText primary="Selective Sharing: Users can share information only with trusted circles." /></ListItem>
            <ListItem><ListItemText primary="Spam and Abuse Prevention: Verified identities reduce spam and enhance accountability." /></ListItem>
            <ListItem><ListItemText primary="Portable Profiles: Users can move between networks with their reputation intact." /></ListItem>
          </List>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h2">User Experience</Typography>
          <Typography variant="body1">
            Users can find others by their HNS username, such as "stephen.ward.hns", and access profiles easily. End-to-end encrypted messaging allows private and verified communication.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h2">Technology Stack</Typography>
          <List>
            <ListItem><ListItemText primary="Blockchain or DLT: Ensures decentralization." /></ListItem>
            <ListItem><ListItemText primary="Public-Private Key Infrastructure: Verifies identity authenticity and data integrity." /></ListItem>
            <ListItem><ListItemText primary="Open APIs: Allows third-party apps to integrate, creating a diverse social ecosystem." /></ListItem>
          </List>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h2">Governance and Security</Typography>
          <Typography variant="body1">
            Governed through DAO-like structures, allowing participants to vote on changes. Security includes multi-factor authentication and biometric checks to keep identities secure.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h2">Potential Benefits</Typography>
          <List>
            <ListItem><ListItemText primary="Elimination of Bots: Verified identities mean no fake accounts or bots." /></ListItem>
            <ListItem><ListItemText primary="Cross-Platform Identity: Your HNS identity is portable across platforms." /></ListItem>
            <ListItem><ListItemText primary="Better Conversations: Verified identities foster more civil discussions." /></ListItem>
            <ListItem><ListItemText primary="Privacy by Default: Users control their data with no central authority to collect or sell information." /></ListItem>
          </List>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h2">Challenges</Typography>
          <Typography variant="body1">
            Adoption Barrier: Encouraging users to adopt a decentralized system outside of popular networks. Verification Hurdles: Ensuring effective identity verification, especially in areas with limited identity infrastructure. Privacy vs. Accountability: Balancing privacy and verified identities to protect users while ensuring accountability.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h2">Final Thoughts</Typography>
          <Typography variant="body1">
            This "HNS for People" could foster a genuine and trustworthy social environment, tackling issues of anonymity, bots, and centralized data control. It empowers users with control over their identity and builds social spaces on trust and authenticity.
          </Typography>
          <Typography variant="body1">
            What are your thoughts? Would people be open to having a verified, portable identity like this? Could the benefits of such a system outweigh the privacy concerns for most users?
          </Typography>
        </Paper>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: theme.palette.primary.main }}>
        <Container maxWidth="sm">
          <Typography variant="body2" color="white" align="center">
            © 2024 Human Name System. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
