export function getState(character) {
    if (character.health >= 100) {
        return "healthy";
    } else if (character.health >= 30 && character.health < 100) {
        return "wounded";
    } else if (character.health > 0 && character.health < 30) {
        return "critical";
    }
}
export function sortedCharacters(characters) {
    return characters.sort((a, b) => b.health > a.health ? 1: -1)
}