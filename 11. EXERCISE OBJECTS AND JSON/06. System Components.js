'use strict'

function systemComponents(systemComponentsArr) {
    let systems = new Map();
    for (let systemComponentStrInfo of systemComponentsArr) {
        let [systemName, componentName, subComponentName] = systemComponentStrInfo.split(/\s*\|\s*/);
        if (!systems.has(systemName)) {
            systems.set(systemName, new Map());
        }
        if (!systems.get(systemName).has(componentName)) {
            systems.get(systemName).set(componentName, []);
        }
        systems.get(systemName).get(componentName).push(subComponentName);
    }

    let sortedSystems = [...systems].sort((x1, x2) => {
        if (x1[1].size === x2[1].size) {
            return x1[0].toLowerCase().localeCompare(x2[0].toLowerCase());
        }

        return x2[1].size - x1[1].size;
    });

    sortedSystems.forEach(system => {
        console.log(system[0]);
        let sortedComponents = [...system[1]].sort((x1, x2) => x2[1].length - x1[1].length);
        sortedComponents.forEach(component => {
            console.log(`|||${component[0]}`);
            component[1].forEach(subComponentName => console.log(`||||||${subComponentName}`));
        });
    });
}

systemComponents([
    'SULS | Judge Site | Submittion Page',
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Register Page',
    'SULS | Main Site | Login Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
    'SULS | Judge Site | Login Page',
])