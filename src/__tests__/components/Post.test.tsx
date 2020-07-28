import React from 'react';
import { render, getByTitle } from '@testing-library/react';
import { Post } from '../../components/Post';

test.skip('render title: Post', () => {
    // Fix multiple title named 'Post' found, classname and text.
    const { getByTitle } = render(<Post />);
    const title = getByTitle(/Post/i);
    expect(title).toBeInTheDocument();
});

test('render text: Description of post.', () => {
  const { getByText } = render(<Post />);
  const desc = getByText(/Description of post./i);
  expect(desc).toBeInTheDocument();
});