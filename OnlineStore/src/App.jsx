 
import { useEffect,useState } from 'react';
import './App.css'
 
// import Search from './components/Search'
import Header from './components/Header';
import Button from './components/Button'
import Cardbody from './components/Cards/Cardbody';
import AddProducts from './components/addProducts/AddProducts';
import Signup from './components/Auth/SignUp';
 

function App() {
   
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [register,setregister] = useState(false);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setItem(data));
  },[])

  function changingSrarchData(e) {
    setSearchValue(e.target.value);
  }

  const itmesFilter = items.filter((item) =>
  item.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }
  // console.log(addedItems);
  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
    // console.log(addedItems);
  }
  const changeRegister = ()=>{
    setregister(!register);
  }
  // console.log(items);
  return (
    
     

     
     
    <>
    {!register ? (
      <>
      <Signup register={register} changeRegister={changeRegister} />
      </>
       )

  : ( <div className="">
      <div className="md:w-full md:m-6 md:p-4 md:rounded-md w-fit">
         <div className="flex mb-4 rounded-md p-3  bg-blue-200 justify-between items-center sticky top-0 nav shadow-md">
            <Header/>
            <div className="flex items-center gap-4">
               {/* <Search
                    products={items}
                    value={searchValue}
                    onChangeData={changingSrarchData}
               /> */}
               <Button num={addedItems.length} click={setShowAddProducts}/>
            </div>
         </div>
    
        {showAddProducts && 
        ( <AddProducts
            click={setShowAddProducts}
            items={addedItems}
            removeItem={removeItem}
            setAddedItem={setAddedItem}
          />)
          }
         <Cardbody 
            products={itmesFilter}
            addItem={addItem}
            removeItem={removeItem}
            addedItems={addedItems}
         />
      </div>
   </div>
  )
    }
    </>
  )
}

export default App
