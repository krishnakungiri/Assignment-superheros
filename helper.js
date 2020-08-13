
exports.alphabets = function (input) {
    switch (input) {
        case "1": letters = ['@', '.', '?']; break;
        case "2": letters = ['a', 'b', 'c']; break;
        case "3": letters = ['d', 'e', 'f']; break;
        case "4": letters = ['g', 'h', 'i']; break;
        case "5": letters = ['j', 'k', 'l']; break;
        case "6": letters = ['m', 'n', 'o']; break;
        case "7": letters = ['p', 'q', 'r', 's']; break;
        case "8": letters = ['t', 'u', 'v']; break;
        case "9": letters = ['w', 'x', 'y', 'z']; break;
        default: letters = [];
    }
    return letters
}
exports.names = function () {
    return [
        'superman', 'thor', 'robin', 'ironman', 'ghostrider', 'captainamerica', 'flash', 'wolverine',
        'batman', 'hulk', 'blade', 'phantom', 'spiderman', 'blackwidow', 'hellboy', 'punisher',
        'krishna', 'krishma'
    ]
}

