import { render, screen } from '@testing-library/react';
import App from './App';
import Carousel from './components/Carousel'

test('renders a carousel ', () => {
  render(<Restaurant />);
  const carousel = shallow(<Carousel />);
  expect(carousel.exists()).toBe(true);
});

