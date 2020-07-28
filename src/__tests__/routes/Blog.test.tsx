import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../routes/Blog';

test('render title: Blog', () => {
    const { getByText } = render(<Home />);
    const title = getByText(/Blog/i);
    expect(title).toBeInTheDocument();
});

test.skip('render component: <Post />', () => {
    
});