import { useState } from 'react';

const BubleSort = () =>{
    function timeout(delay) {
        return new Promise( (res)  =>  setTimeout(res, delay) );
      }
    
      const bubleSort = async () =>{
        let myArray = array;
        if(!!myText){
          await setArray(...[myText.split(" ").map(Number)]);
          myArray = myText.split(" ").map(Number);
        }
        for (var i = 0; i < myArray.length; i++) {
               for (var j = 0; j < (myArray.length - i - 1); j++) {
            setjValue(j);
            console.log(j);
            await timeout(1000);
              if (myArray[j] > myArray[j + 1]) {
                  var temp = myArray[j]
                  myArray[j] = myArray[j + 1]
                  myArray[j + 1] = temp
                  setArray([...myArray]);
              }
              await timeout(2000);
          }
        }
        console.log(myArray);
        setjValue("");
      }
      //1, 10, 9, 55, 44, 2, 5 ,99, 241, 24, 25
      //9 10 1 55 44 2 5 99 241 24 25
      const [array, setArray] = useState([1, 10, 9, 55, 44, 2, 5 ,99, 241, 24, 25]);
      const [jValue, setjValue] = useState();
      const [myText, setTextValue] = useState('');
      return (
        <div className='mt-5'>
            <div className="mb-3 row" style={{margin: "auto", width: "100%"}}>
              <div className='col-auto'>
              <input type="text"
               readOnly className="form-control-plaintext"
                id="staticEmail2"
                 value="Input your array hear"
                 />
              </div>
              <div className='col-sm-2'>
                <input className="form-control"
                onChange={(e) => setTextValue(e.target.value)}
                  value={myText}
                 style={{borderColor: "black"}} type="text" placeholder="Example: 12 11 10 99 122"/>
              </div>
              <input type='button' onClick={bubleSort} value='bubleSort'  className="btn btn-primary col-sm-1" />
            </div>



            <div className="row mx-3" style={{listStyleType: "none"}}>
               {array.map((arr, index) =>
               <div className="col py-3" key={index} >
                  <div className="arrayElement">
                    {arr}
                  </div>
                  <div className='labelElement' ><div className={(index === jValue || index === jValue+1 ) ? 'childLabelElement' : ''}>{index}</div></div>
                </div> )}
            </div>
        </div>
      );
}

export default BubleSort;