export default function quadrado(props){
    return(
        <div style={{backgroundColor: props.numero % 2 == 0? "#FFF" : "#000"}} className="quadrado"/>
    )
}