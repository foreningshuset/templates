import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../routes/Home';

test('render title: Home', () => {
    const { getByText } = render(<Home />);
    const title = getByText(/Home/i);
    expect(title).toBeInTheDocument();
});

test('render text: Hello World!', () => {
  const { getByText } = render(<Home />);
  const text = getByText(/Hello World!/i);
  expect(text).toBeInTheDocument();
});