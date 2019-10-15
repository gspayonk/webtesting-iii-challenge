// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import Display from './Display';

it('defaults unlock/open',  () => {
    const { queryByText }  = render(< Display />);

    expect(queryByText(/unlocked/i));
    expect(queryByText(/open/i));
})

it('gate closed/locked?', () => {
    const state = {
        locked: true,
        closed: true,
    };

    const { queryByText } = render(<Display locked={state.locked} closed={state.closed}/>);

    expect(queryByText(/closed/i))

})

it('gate open/closed and lock/unlocked', () => {
    const state = {
        locked: false,
        closed: false,
    };

    const { queryByText } = render(<Display locked={state.locked} closed={state.closed}/>);

    expect(queryByText(/open/i))

})

