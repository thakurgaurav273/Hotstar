import "../App.css"
function Card(props){
    return( 
    <div className="vertical_card" key={props.key} style={{backgroundImage:`url(${props.source})`}}>
    </div>
)
}
export default Card;
