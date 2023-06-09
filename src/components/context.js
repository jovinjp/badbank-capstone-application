import React from 'react';

const UserContext = React.createContext(null);

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-black';
      return 'card mb-3 centered' + bg + txt;
    }
    
    function styles(){
        var styl = ""
        if (props.cardstyle === "small"){
            styl = "30rem";
        }
        if (props.cardstyle === "big") {
            styl = "50vw";
        }
        return styl;
    }
    return (
      <div className={classes()} style={{mindWidth: "20rem", maxWidth: styles()}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
        </div>
    );    
  }



export { UserContext };
export default Card;