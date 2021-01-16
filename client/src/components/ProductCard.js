

function ProductCard(props){
  return (
    <div className='ProductCard'>
      <div className="card">
      <div className='Product_div'>
        <div className='circle'>
        </div>
        <img src={props.pro} />
        <div className='product_info'>
        <h4>{props.pro_name}</h4>
        <h7>{props.price}</h7>
        </div>
        </div>
      </div>
    </div>
  );

}

export default ProductCard;
