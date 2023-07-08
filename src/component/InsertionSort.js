import { useState } from 'react';

const InsertionSort = () =>{
    function timeout(delay) {
        return new Promise( (res)  =>  setTimeout(res, delay) );
      }
    
      const insertionSort = async () =>{

        let myArray = array;
        if(!!myText){
          await setArray(...[myText.split(" ").map(Number)]);
          myArray = myText.split(" ").map(Number);
        }

        for (var i = 1; i < myArray.length; i++) {
            let current = myArray[i];
            setiValue(i);
            setCurrent(current);

            let j = i-1; 
            setjValue(j);
            await timeout(1000);
            while ((j > -1) && (current < myArray[j])) {
                console.log(j);
                setjValue(j);
                myArray[j+1] = myArray[j];
                j--;
                setArray([...myArray]);
                await timeout(2000);
            }
            myArray[j+1] = current;
            setArray([...myArray]);
            await timeout(2000);
        }
        console.log(myArray); setjValue("");setiValue("");
      }
      const [array, setArray] = useState([1, 10, 9, 55, 44, 2, 5 ,99, 241, 24, 25]);
      const [current, setCurrent] = useState();
      const [jValue, setjValue] = useState();
      const [iValue, setiValue] = useState();
      const [myText, setTextValue] = useState('');
      return (
        <>
            <div className="mb-3 row mt-5" style={{margin: "auto", width: "100%"}}>
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
              <input type='button' onClick={insertionSort} value='Insertion Sort'  className="btn btn-primary col-sm-1" />
            </div>
            
            <div className="row ms-3"><p>Current value: {current}</p></div>
            <div className="row mx-3" style={{listStyleType: "none"}}>
               {array.map((arr, index) =>
               <div className="col py-3" key={index} >
                  <div className="arrayElement">
                    {arr}
                  </div>
                  <div className='labelElement' ><div className={(jValue === index) ? 'childLabelElement' : (iValue === index) ?  'childLabelElement2' : ''}>{index}</div></div>
                </div> )}
            </div>
        </>
      );
}

export default InsertionSort;