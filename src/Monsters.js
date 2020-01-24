import React, {useEffect, useState} from 'react'

/*functional component*/
const Monsters = () =>{

    const [monsterList,setMonsterList] = useState([]); /*hook - monsterList state while setMonsterList is setState*/

    useEffect(() => {
        fetch('http://mhw-db.com/monsters').then(
            results => results.json() /*if we get the results back from the promise put it in json*/
        ).then(
            monsterData => {
                setMonsterList(monsterData)
            }
        )
    });
    

    return (

        <div className="monsters">

        </div>
    )
}

export default Monsters
