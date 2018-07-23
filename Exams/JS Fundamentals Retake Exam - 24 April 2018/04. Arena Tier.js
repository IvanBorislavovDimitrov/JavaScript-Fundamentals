function arenaTier(input) {
    let gladiators = new Map();
    for (let gladiatorInfo of input) {
        if (gladiatorInfo === 'Ave Cesar') {
            break;
        }
        if (gladiatorInfo.includes('->')) {
            let tokens = gladiatorInfo.split(' -> ');
            let gladiatorName = tokens[0];
            let skillName = tokens[1];
            let skillPower = Number(tokens[2]);
            if (!gladiators.has(gladiatorName)) {
                gladiators.set(gladiatorName, new Map());
            }
            if (!gladiators.get(gladiatorName).has(skillName)) {
                gladiators.get(gladiatorName).set(skillName, skillPower);
            } else {
                if (gladiators.get(gladiatorName).get(skillName) < skillPower) {
                    gladiators.get(gladiatorName).set(skillName, skillPower);
                }
            }
        } else {
            let tokens = gladiatorInfo.split(' vs ');
            let firstGladiator = tokens[0];
            let secondGladiator = tokens[1];
            if (!gladiators.has(firstGladiator) || !gladiators.has(secondGladiator)) {
                continue;
            }

            let gl1 = gladiators.get(firstGladiator);
            let gl2 = gladiators.get(secondGladiator);

            gl1.forEach((gl1Value, gl1Key) => {
                gl2.forEach((gl2Value, gl2Key) => {
                    if (gl1Key === gl2Key) {
                        if (gl1Value > gl2Value) {
                            gladiators.delete(secondGladiator);
                        } else if (gl1Value < gl2Value) {
                            gladiators.delete(firstGladiator);
                        }
                    }
                })
            });
        }
    }

    let orderedGladiators = [...gladiators].sort((g1, g2) => {
        let g1Points = 0;
        let g2Points = 0;

        g1[1].forEach((value, key) => {
            g1Points += value;
        });
        g2[1].forEach((value, key) => {
            g2Points += value;
        });

        if (g2Points === g1Points) {
            return g1[0].localeCompare(g2[0]);
        }

        return g2Points - g1Points;
    });

    orderedGladiators.forEach(g => {
        let points = 0;

        g[1].forEach((value, key) => {
            points += value;
        });

        let orderedSkills = [...g[1]].sort((s1, s2) => {
            if (s1[1] === s2[1]) {
                return s1[0].localeCompare(s2[0]);
            }

            return s2[1] - s1[1];
        });


        console.log(`${g[0]}: ${points} skill`);
        orderedSkills.forEach(s1 => {
            console.log(`- ${s1[0]} <!> ${s1[1]}`);
        });
    });
}