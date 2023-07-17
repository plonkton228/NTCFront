
import DocumentStyle from '../Styles/DocumentStyle.module.css'
interface UiOfferTemplate {
    way : string,
   
}
const UiDocument: React.FC<UiOfferTemplate>  = ({way})=> {
  return(<>
      <img className = {DocumentStyle.imgdec}  src = { `${way} `} alt='logo'/>
      <embed type="application/pdf" src= {`${way}`}/>
  </>)
}
export default UiDocument;