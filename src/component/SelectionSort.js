import { useState } from 'react';

const SelectionSort = () =>{
    function timeout(delay) {
        return new Promise( (res)  =>  setTimeout(res, delay) );
      }
    
      const selectionSort = async () =>{
        let current;
        let myArray = array;
        if(!!myText){
          await setArray(...[myText.split(" ").map(Number)]);
          myArray = myText.split(" ").map(Number);
        }

        for (var i = 0; i < myArray.length; i++) {
            current = i;
            setCurrent(myArray[current]);
            setiValue(i);
      
            for (let j = i + 1; j < myArray.length; j++) {
              if (myArray[current] > myArray[j]) {
                current = j;
                setCurrent(myArray[current]);
              }
              setjValue(j);
              await timeout(1000);
            }

            if (i !== current) {
              let temp = myArray[i];
              myArray[i] = myArray[current];
              myArray[current] = temp;
              setTemp(temp);
              await timeout(1000);
            }
            
            setArray([...myArray]);
            await timeout(2000);
        }
        console.log(myArray);
        setCurrent(""); setjValue(""); setiValue("");setTemp("");
      }
      const [array, setArray] = useState([9, 10, 1, 55, 44, 2, 5 ,99, 241, 24, 25]);
      const [current, setCurrent] = useState();
      const [jValue, setjValue] = useState();
      const [iValue, setiValue] = useState();
      const [temp, setTemp] = useState();
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
              <input type='button' onClick={selectionSort} value='Selection Sort'  className="btn btn-primary col-sm-1" />
            </div>

            <div className="row ms-3"><p>Current min value: {current}</p> <p>Temp Value: {temp}</p></div>
            <div className="row mx-3" style={{listStyleType: "none"}}>
               {array.map((arr, index) =>
               <div className="col py-3" key={index} >
                  <div className={current === arr ? "arrayElement2" : "arrayElement"}>
                    {arr}
                  </div>
                  <div className='labelElement' ><div className={(jValue === index) ? 'childLabelElement' : (iValue === index) ? "childLabelElement2" : ""}>{index}</div></div>
                </div> )}
            </div>
        </>
      );
}

export default SelectionSort;