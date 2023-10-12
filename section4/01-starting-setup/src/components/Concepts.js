import Concept from './Concept';

const Concepts = (props) => {
    return(
        <ul id='concepts'>
            <Concept concept={props.conceptsData[0]}></Concept>
            <Concept concept={props.conceptsData[1]}></Concept>
            <Concept concept={props.conceptsData[2]}></Concept>
        </ul>
    )
}

export default Concepts;