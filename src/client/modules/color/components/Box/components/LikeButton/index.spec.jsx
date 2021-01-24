import { render, fireEvent } from '@testing-library/react';
import LikeButton from '.';

describe('render properly', () => {
  test('render color correct', () => {
    const clickFn = jest.fn();
    const { container, rerender } = render(
      <LikeButton starNum={2} starred={false} onToggle={clickFn} />
    );
    rerender(<LikeButton starNum={2} starred onToggle={clickFn} />);
    fireEvent.click(container.querySelector('button'));
    expect(clickFn).toBeCalled();
  });
});
