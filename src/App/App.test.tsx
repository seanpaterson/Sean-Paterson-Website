import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render the App Component correctly', () => {
    const tree = renderer
    .create(<App></App>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});