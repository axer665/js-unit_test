import {getState, sortedCharacters} from '../character';

test.each([
    [{name: 'sworsman', health:10}, 'critical'],
    [{name: 'mage', health:100}, 'healthy'],
    [{name: 'archer', health:80}, 'wounded'],
])('allStates', (character, state) => {
    const result = getState(character);
    expect(result).toBe(state);
});

test("sorted characters", () => {
    const characters = [
        {name: 'sworsman', health:10},
        {name: 'mage', health:100},
        {name: 'archer', health:80}
    ];

    const result = [
        {name: 'mage', health:100},
        {name: 'archer', health:80},
        {name: 'sworsman', health:10},
    ];

    expect(result).toStrictEqual(sortedCharacters(characters));
})