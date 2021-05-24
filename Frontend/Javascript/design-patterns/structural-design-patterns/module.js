//----------------
// Module Pattern
//----------------

function AnimalContainer() {
    const container = [];

    function addAnimal(name) {
        container.push(name);
    }

    function getAllAnimals() {
        return container;
    }

    function removeAnimal(name) {
        const index = container.indexOf(name);

        if (index < 0) {
            throw new Error('Animal not found in container');
        }

        container.splice(index, 1);
    }

    return {
        add: addAnimal,
        remove: removeAnimal,
        get: getAllAnimals
    }
}

container = AnimalContainer();

container.add('Hen');
container.add('Sheep');
container.add('Goat');
console.log(container.get());
container.remove('Hen');
console.log(container.get());