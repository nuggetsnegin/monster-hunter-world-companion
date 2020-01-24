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
    console.log(monsterList)

    return (


        <div className="monsters">

        </div>
    )
}

export default Monsters
