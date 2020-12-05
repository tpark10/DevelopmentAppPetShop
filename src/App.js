import logo from './logo.svg';
import './App.css';

import FilteredList from './FilteredList'

import squirrelPic from './squirrel.jpg'
import dogPic from './dog.jpg'
import lionPic from './lion.jpg'
import monkeyPic from './monkey.png'
import penguinPic from './penguin.jpg'
import parrotPic from './parrot.jpg'
import bluejayPic from './bluejay.jpg'
import owlPic from './owl.jpg'
import goldfishPic from './goldfish.jpg'
import bluetangPic from './bluetang.jpg'
import salmonPic from './salmon.png'
import tunaPic from './tuna.jpg'



function App() {
    //productList of the pet-shop
    const productList = [
    { name: "Squirrel", id:1, type: "Mammal", exotic: "Medium", price: "3", img: squirrelPic },
    { name: "Dog", id:2, type: "Mammal", exotic: "Low", price: "1", img: dogPic },
    { name: "Lion", id:3, type: "Mammal", exotic: "High", price: "10", img: lionPic },
    { name: "Monkey", id:4, type: "Mammal", exotic: "High", price: "8", img: monkeyPic },

    { name: "Penguin", id:5, type: "Bird", exotic: "High", price: "10", img: penguinPic },
    { name: "Parrot", id:6, type: "Bird", exotic: "Medium", price: "5", img: parrotPic},
    { name: "Bluejay", id:7, type: "Bird", exotic: "Medium", price: "3", img: bluejayPic },
    { name: "Owl", id:8, type: "Bird", exotic: "Medium", price: "5", img: owlPic },

    { name: "Goldfish", id:9, type: "Fish", exotic: "Low", price: "1", img: goldfishPic },
    { name: "BlueTang", id:10, type: "Fish", exotic: "High", price: "8", img: bluetangPic },
    { name: "Salmon", id:11, type: "Fish", exotic: "Medium", price: "3", img: salmonPic },
    { name: "Tuna", id:12, type: "Fish", exotic: "High", price: "7", img: tunaPic }
  ]


  return (
        <div class="App">
          <div class="body-grid">
        
            <FilteredList list={productList} />

          </div>
        </div>




  );
}

export default App;





