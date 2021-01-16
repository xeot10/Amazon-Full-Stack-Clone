

function AdCard2(props){
  return (
    <div className='body__card2main'>
    <div className='body__card2'>
      <h2>{props.title}</h2>
      <div className='imgCard'>
        <div className="img">
        <img src={props.img1} alt="not loaded"/>
        </div>
        <div className="imgTitle">
        123
        </div>
      </div>
      <div className='imgCard'>
        <div className="img">
          <img src={props.img2} alt="not loaded"/>
        </div>
        <div className="imgTitle">
        1231
        </div>
      </div>
      <div className='imgCard'>
        <div className="img">
        <img src={props.img3} alt="not loaded"/>
        </div>
        <div className="imgTitle">
        asdfas
        </div>
      </div>
      <div className='imgCard'>
        <div className="img">
        <img src={props.img4} alt="not loaded"/>
        </div>
        <div className="imgTitle">
        adfa
        </div>
      </div>

      <a href={props.link}>See more</a>
      </div>
    </div>
  );
}

export default AdCard2;
