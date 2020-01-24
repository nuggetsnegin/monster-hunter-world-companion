import React, {useEffect, useState} from 'react'

/*functional component*/
const Monsters = () =>{

    const [monsterList,setMonsterList] = useState([]); /*hook - monsterList state while setMonsterList is setState*/

    useEffect(() => {
        fetch('http://mhw-db.com/monsters').then(
            results => results.json() /*if we get the results back from the promise put it in json*/
        ).then(
            monsterData =>{
                setMonsterList(monsterData);
            }
        )
    },[]); /*dependancy for useEffect - because its empty it will run only once per render*/

    const getMonsterInfo = () =>{
        let monsterInfo = monsterList.map(monster =>{
            let monsterObject = {
                name: monster.name,
                species: monster.species,
                element: monster.elements,
                weakness: monster.weaknesses.map(weakness =>{
                    element: weakness.element
                }),
                resistance: monster.resistances
            }
            return monsterObject;
        })
        return monsterInfo;
    }
 
    console.log(monsterList)
    // const resistanceList = monsterInfoList.map((resistance) =>{
    //     let resistanceObject = {
    //         element: resistance.element,
    //         stars: resistance.stars,
    //         condition: resistance.condition
    //     }
    // })

    const monsterInfoList = getMonsterInfo();
    console.log(monsterInfoList);
    // const resistanceList = resistanceList();

    const listItem = monsterInfoList.map((monster) =>
        <div class="monster">
            <div className="name">{monster.name}</div>
            <div className="species">{monster.species}</div>
        </div>
    )

    // const weak = weaknessList.map((weak) =>
    // <div class="weakness">
    //     <div className="element">{weak.element}</div>
    //     <div className="stars">{weak.stars}</div>
    //     <div className="condition">{weak.condition}</div>
    // </div>
    // )

    // console.log(monsterInfoList);
    // console.log(listItem);

    return (
        
        <div className="monstersContainer">
            <div className="monsterContainer">
                {listItem}
                {/* {weak} */}
            </div>
        </div>
    )
}

export default Monsters
