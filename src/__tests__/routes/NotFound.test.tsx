import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../../routes/NotFound';

test('render title: NotFound', () => {
    const { getByText } = render(<NotFound />);
    const title = getByText(/NotFound/i);
    expect(title).toBeInTheDocument();
});

test('render text: 404', () => {
  const { getByText } = render(<NotFound />);
  const text = getByText(/404/i);
  expect(text).toBeInTheDocument();
});