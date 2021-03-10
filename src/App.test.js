import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('renders the App component', () => {
    render(<App />);

    expect(screen.getByRole('heading')).toHaveTextContent('Hello APP');
  });
});
