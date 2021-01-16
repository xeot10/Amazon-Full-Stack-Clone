import {Avatar} from '@material-ui/core'

function AdCard1(props){
  return (
    <div className='body__card1'>
      <Avatar style={{ height: '58px', width: '58px', marginLeft:'11px',marginTop:'14px' }}/>
      <h2>Hi, {props.name}</h2>
      <h4>customer since 2020</h4>
      <div className='body__card1Imgbox'>
      <div className="imgbox">
        <img src={props.img1} alt="not loaded"/>
      </div>
      <div className="imgbox">
        <img src={props.img2} alt="not loaded"/>
      </div>
      <div className="imgbox">
        <img src={props.img3} alt="not loded"/>
      </div>
      <div className="imgbox">
        <img src={props.img4} alt="not loaded"/>
      </div>
      </div>

    </div>
  );
}

export default AdCard1;
