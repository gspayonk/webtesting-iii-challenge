// Test away

it('state=/true if state locked === true', () => {
    const state = {
    locked: true,
    closed: true,
    };

    if(state === true){
        expect(state).toBeValid();
    }

    if(!state.locked){
        expect(!state.closed).toBe(!state.locked)
    }
})