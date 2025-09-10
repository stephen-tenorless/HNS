import { test, expect } from 'vitest';
import { AppComponent } from './app.component';

test('should create the app', () => {
  const app = new AppComponent();
  expect(app).toBeTruthy();
});
