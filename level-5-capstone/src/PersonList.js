import React from 'react';
import { Image,
        UserCard,
        UserCardName } from './StyledComponents';
import gryffindorImg from './img/gryffindorImg.png' 
import hufflepuffImg from './img/hufflepuffImg.png' 
import ravenclawImg from './img/ravenclawImg.png' 
import slytherinImg from './img/slytherinImg.png'
// import GoingTogglerButton from './going-toggle-button';



const familyMembers = [
                        {name: "dad",
                        hogwartsHouse: "gryffindor",
                        houseImg: gryffindorImg,
                        goingStateTag: "dadGoing",
                        stateChanger: 'dadChangeState'
                        },
                        {name: "mom",
                        hogwartsHouse: "hufflepuff",
                        houseImg: hufflepuffImg,
                        goingStateTag: "momGoing",
                        stateChanger: 'momChangeState'
                        },
                        {name: "olivia",
                        hogwartsHouse: "hufflepuff",
                        houseImg: hufflepuffImg,
                        goingStateTag: "oliviaGoing",
                        stateChanger: 'oliviaChangeState'
                        },
                        {name: "bianca",
                        hogwartsHouse: "gryffindor",
                        houseImg: gryffindorImg,
                        goingStateTag: "biancaGoing",
                        stateChanger: 'biancaChangeState'
                        },
                        {name: "benson",
                        hogwartsHouse: "hufflepuff",
                        houseImg: hufflepuffImg,
                        goingStateTag: "bensonGoing",
                        stateChanger: 'bensonChangeState'
                        },
                        {name: "rosalie",
                        hogwartsHouse: "gryffindor",
                        houseImg: gryffindorImg,
                        goingStateTag: "rosalieGoing",
                        stateChanger: 'rosalieChangeState'
                        },
                        {name: "hattie",
                        hogwartsHouse: "slytherin",
                        houseImg: slytherinImg,
                        goingStateTag: "hattieGoing",
                        stateChanger: 'hattieChangeState'
                        },
                        {name: "louisa",
                        hogwartsHouse: "hufflepuff",
                        houseImg: hufflepuffImg,
                        goingStateTag: "louisaGoing",
                        stateChanger: 'louisaChangeState'
                        },
                        {name: "isaac",
                        hogwartsHouse: "slytherin",
                        houseImg: slytherinImg,
                        goingStateTag: "isaacGoing",
                        stateChanger: 'isaacChangeState'
                        } 
]
    

const PersonList = (props) => {   
    const personList = familyMembers.map((person, index) => {
        return (
        
            <UserCard onClick={props.hooks[index]}>
                <Image src={person.houseImg} alt={person.hogwartsHouse}></Image>
                <UserCardName  htmlFor={person.name}
                        className={`${person.hogwartsHouse} ${person.name}`}
                        />
                            {person.name}
            </UserCard>
        )       
    })
    return (
    <form class="users" style={{display:"flex",
                                flexDirection:"column",
                                backgroundImage: "linear-gradient(60deg, #29323c 0%, #485563 100%)"}}>
        {personList}
    </form>
    )
}

export default PersonList