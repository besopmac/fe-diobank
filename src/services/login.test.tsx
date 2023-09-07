import { login } from './login';

describe('login', () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it('should show an alert message about successful login', () => {
    login();
    expect(mockAlert).toHaveBeenCalledWith('Login successful!');
  })
})