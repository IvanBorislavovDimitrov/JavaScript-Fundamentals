function gameOfEpicness(kingdomsInfo, battlesInfo) {
    class generalInfo {
        constructor(fightsWon, loses, army) {
            this.figntsWon = fightsWon;
            this.army = army;
            this.losses = loses;
        };
    }

    let kingdoms = new Map();
    for (let kingdomInfo of kingdomsInfo) {
        let kingdomName = kingdomInfo['kingdom'];
        let generalName = kingdomInfo['general'];
        let armyNumber = kingdomInfo['army'];
        if (!kingdoms.has(kingdomName)) {
            kingdoms.set(kingdomName, new Map());
        }
        if (!kingdoms.get(kingdomName).has(generalName)) {
            kingdoms.get(kingdomName).set(generalName, new generalInfo(0, 0, armyNumber));
        } else {
            let currentArmy = kingdoms.get(kingdomName).get(generalName);
            kingdoms.get(kingdomName).set(generalName, new generalInfo(0, 0, currentArmy.army + armyNumber));
        }
    }

    for (let battleInfo of battlesInfo) {
        let attackingKingdom = battleInfo[0];
        let attackingGeneral = battleInfo[1];
        let defendingKingdom = battleInfo[2];
        let defendingGeneral = battleInfo[3];

        if (attackingKingdom === defendingKingdom) {
            continue;
        }

        let attacker = kingdoms.get(attackingKingdom).get(attackingGeneral);
        let defender = kingdoms.get(defendingKingdom).get(defendingGeneral);

        if (attacker.army > defender.army) {
            attacker.army += attacker.army * 10 / 100;
            attacker.army = Math.floor(attacker.army);
            attacker.figntsWon++;

            defender.losses++;
            defender.army -= defender.army * 10 / 100;
            defender.army = Math.floor(defender.army);
        } else if (attacker.army < defender.army) {
            defender.army += defender.army * 10 / 100;
            defender.army = Math.floor(defender.army);
            defender.figntsWon++;

            attacker.losses++;
            attacker.army -= attacker.army * 10 / 100;
            attacker.army = Math.floor(attacker.army);
        }
    }

    let sortedKingdoms = [...kingdoms].sort((k1, k2) => {
        let k1Wins = 0;
        k1[1].forEach((value, key) => {
            k1Wins += value.figntsWon;
        });
        let k2Wins = 0;
        k2[1].forEach((value, key) => {
            k2Wins += value.figntsWon;
        });
        if (k1Wins === k2Wins) {
            let k1Loses = 0;
            k1[1].forEach((value, key) => {
                k1Loses += value.losses;
            });
            let k2Loses = 0;
            k2[1].forEach((value, key) => {
                k2Loses += value.losses;
            });
            if (k1Loses === k2Loses) {
                return k1[0].localeCompare(k2[0]);
            }

            return k1Loses - k2Loses;
        }

        return k2Wins - k1Wins;
    });

    let winner = sortedKingdoms[0];
    console.log(`Winner: ${winner[0]}`);
    let sortedGenerals = [...winner[1]].sort((g1, g2) => g2[1].army - g1[1].army);
    sortedGenerals.forEach(g => {
        console.log(`/\\general: ${g[0]}`);
        console.log(`---army: ${g[1].army}`);
        console.log(`---wins: ${g[1].figntsWon}`);
        console.log(`---losses: ${g[1].losses}`);
    })
}

gameOfEpicness([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]

);