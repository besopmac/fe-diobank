import { welcome } from './welcome';

describe('welcome', () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it('should show an alert message saying welcome to guest', () => {
    welcome('Bruno');
    expect(mockAlert).toHaveBeenCalledWith('Welcome, Bruno!')
  })
})