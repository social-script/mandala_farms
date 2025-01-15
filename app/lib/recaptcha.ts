import { writeFileSync } from 'fs';
import { join } from 'path';

export function setupGoogleCredentials() {
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64) {
    try {
      const credentialsPath = join(process.cwd(), 'google-credentials.json');
      const credentials = Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64, 'base64');
      writeFileSync(credentialsPath, credentials);
      process.env.GOOGLE_APPLICATION_CREDENTIALS = credentialsPath;
    } catch (error) {
      console.error('Error setting up Google credentials:', error);
    }
  }
}