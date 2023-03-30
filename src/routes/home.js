import Card from '../components/context'
import bankImage from '../components/bank.png'
import '../App.css'

function Home(){
    return (
        <div className="centeredGrid">
        <div></div>
      <Card
        bgcolor="danger"
        cardstyle="small"
        header="BadBank Landing Module"
        title="JOVIN Federal Credit Union"
        text="A non-FDIC bank holding company and financial services corporation based in Dublin, OH."
        body={(<img src={bankImage} className="img-fluid" alt="Responsive image"/>)}
      />   
      <div></div> 
      </div>
    );  
  }

export default Home;