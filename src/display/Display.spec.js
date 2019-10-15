// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
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

describe ('<Display />', () => {

it('red-led class when locked/closed', () => {
    const state = { 
        locked: true,
        closed: true,
    }
    const { getByTestId }  = render(<Display closed={state.closed} locked={state.locked} />);
    expect(getByTestId('locked').classList.contains('red-led')).toBe(true);
    expect(getByTestId('closed').classList.contains('red-led')).toBe(true);
});

it('green-led class when unlocked/open', () => {
    const state = { 
        locked: true,
        closed: true,
    }

    const { getByTestId }  = render(<Display closed={state.closed} locked={state.locked} />);
    expect(getByTestId('locked').classList.contains('green-led')).toBe(true);
    expect(getByTestId('closed').classList.contains('green-led')).toBe(true);
})

})
