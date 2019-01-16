import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

it('snapshot test ', () => {
    const component = renderer.create(<App/>).toJSON();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
