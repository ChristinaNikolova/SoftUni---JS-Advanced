function solve(input = []) {
    let systems = {};

    input.forEach((line) => {

        let [systemName, componentName, subcomponentName] = line.split("|").map(x => x.trim());

        if(!systems.hasOwnProperty(systemName)){
            systems[systemName] = {};
        }

        let components = systems[systemName];

        if(!components.hasOwnProperty(componentName)){
            components[componentName] = [];
        }

        components[componentName].push(subcomponentName);
    });

    let sortedSystems = Object.keys(systems)
    .sort((a, b) => Object.keys(systems[b]).length - Object.keys(systems[a]).length 
    || a.localeCompare(b));

    for (const currentSystem of sortedSystems) {
        console.log(currentSystem);

        let components = systems[currentSystem];
        let sortedComponents = Object.keys(components)
        .sort((a, b) => Object.keys(components[b]).length - Object.keys(components[a]).length);

        for (const currentComponent of sortedComponents) {
            console.log(`|||${currentComponent}`);
            console.log(components[currentComponent].map(x => `||||||${x}`).join("\n"));
        }
    }
}

solve(
[
  "SULS | Main Site | Home Page",
  "SULS | Main Site | Login Page",
  "SULS | Main Site | Register Page",
  "SULS | Judge Site | Login Page",
  "SULS | Judge Site | Submittion Page",
  "Lambda | CoreA | A23",
  "SULS | Digital Site | Login Page",
  "Lambda | CoreB | B24",
  "Lambda | CoreA | A24",
  "Lambda | CoreA | A25",
  "Lambda | CoreC | C4",
  "Indice | Session | Default Storage",
  "Indice | Session | Default Security",
]);
