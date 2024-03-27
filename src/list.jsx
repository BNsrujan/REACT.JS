function List(){
    // rendaring list
    const fruits =[{id: 1, name: "apple", calories: 95},
    {id: 2, name: "orange", calories: 45},
    {id: 3, name: "banana", calories: 105},
    {id: 4, name: "coconut", calories: 159},
    {id: 5, name: "pineapple", calories: 37}];

    fruits.sort((a,b) => a.name.localeCompare(b.name)); // alphabetical order
    //fruits.sort((a, b) => b.name.localeCompare (a.name)); // REVERSE ALPHABETICAL
    fruits.sort((a,b)=>a.calories -b.calories); // numaric
    fruits.sort((a,b)=>b.calories -a.calories); // revers numbering

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const lowCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = fruits.map(fruit => <li key={fruit.id} >{fruit.name} : <b>{fruit.calories}</b></li>);
    return(<ol>{listItems}</ol>);
    // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id} >{lowCalFruit.name} : <b>{lowCalFruit.calories}</b></li>);
    // return(<ol>{listItems}</ol>);
}   

export default List