const player = [
    { name: 'Rodrigo', kills: 12 },
    { name: 'Vitor', kills: 9 },
    { name: 'Camila', kills: 17 },
    { name: 'Amanda', kills: 6 }
];

console.log(player);
console.log(player.sort((a, b) => a.kills - b.kills));
console.log(player);