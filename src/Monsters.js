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
                weakness: monster.weaknesses,
                resistance: monster.resistances
            }
            return monsterObject;
        })
        return monsterInfo;
    }

    console.log(monsterList)

    return (


        <div className="monsters">

        </div>
    )
}

export default Monsters
