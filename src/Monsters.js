import React, {useEffect} from 'react'

/*functional component*/
const Monsters = () =>{

    useEffect(() => {
        fetch('http://mhw-db.com/monsters').then(
            results => results.json() /*if we get the results back from the promise put it in json*/
        ).then(
            monsterData => {
                console.log(monsterData);
            }
        )
    });

    return (
        <div className="monsters">

        </div>
    )
}

export default Monsters
