import "../App.css"
function hori_card(props){
    return( 
    <div className="horizontal_card" key={props.key}>
        <img alt="pic_is_there"src={props.source} className="horizontal_card_image"  />
        <span className="card-title">{props.title}</span>

    </div>
)
}
export default hori_card;
