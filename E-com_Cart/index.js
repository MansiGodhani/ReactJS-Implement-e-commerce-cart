//Product Cart
function ProductCart() {
    //State Counter
    const [counter, setCounter] = React.useState([ 
      {name: "Pen", qty: 0, price:30, priceTotal:0 }, 
      {name: "Pencil", qty: 0, price:20, priceTotal:0 }, 
      {name: "Art Drawing Box", qty: 0, price:3000, priceTotal:0 }, 
      {name: "Highlighter Pen", qty: 0, price:400, priceTotal:0 }, 
      {name: "Bag", qty: 0, price:5000, priceTotal:0} ]);
     
    const [total, setTotal] = React.useState({
      tQty:0,
      tPrice:0
    });
    
    const tQtyAndPrice = () =>{
       let qty = 0, price = 0;
        counter.map((i,key) => (
            (qty = qty + i.qty),
            (price = price + i.priceTotal)
        ));
        setTotal({
            tQty: qty,
            tPrice: price 
        });
    }
    const [list, setList] = React.useState(counter);
    
    var increment = (key) => {
      counter[key].qty = counter[key].qty + 1;
      counter[key].priceTotal = counter[key].price * counter[key].qty;
      setList(counter);
      setCounter(list);
      tQtyAndPrice();
    }
    
    var decrement = (key) => {
      if(counter[key].qty > 0){
        counter[key].qty = counter[key].qty - 1;
        counter[key].priceTotal = counter[key].price * counter[key].qty;
        setList(counter);
        setCounter(list);
        tQtyAndPrice();
      }
    }
    
    return (
      <div>
        {
          counter.map((i,key) => (
              <div>
                <div>
                  <h3> {i?.name},&ensp; Qty: {i?.qty}, &ensp; Price: {i?.price}</h3>
                </div>
                <div>
                  <button onClick={()=> { increment(key) }} >Add</button>&ensp;
                  <button onClick={()=> { decrement(key) }} >Remove</button>
                </div>
              </div>
          ))
        }  
        <div class="cart-total">
          <h2>Total Items : {total.tQty} </h2>
          <h2>Total Price : {total.tPrice}</h2>
        </div> 
      </div>
    )
  }
  
  ReactDOM.render(
    <ProductCart />,
    document.getElementById('root')
  );
  