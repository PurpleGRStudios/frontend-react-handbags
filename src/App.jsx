import './App.css'
import Button from './components/Button.jsx'
import Product from './components/Product.jsx'
import Tile from "./Components/Tile.jsx";
import bag_1 from './assets/bag_1.png'
import bag_2 from './assets/bag_2.png'
import bag_3 from './assets/bag_3.png'
import bag_4 from './assets/bag_4.png'
import our_story from './assets/our_story.png'
import brand from './assets/brand.png'


function App() {
  return (<>
            <h1>Handbags & Purses</h1>

        <nav>
            <Button text="to the collection" disabled={false}/>
            <Button text="shop all bags" disabled={false}/>
            <Button text="pre-orders" disabled={true}/>
        </nav>

        <main>
            <Product label="Best seller" price="400" nameOfBag="The handy bag" imageAlt="bag1" image={bag_1}/>
            <Product label="Best seller" price="250" nameOfBag="The stylish bag" imageAlt="bag2" image={bag_2}/>
            <Product label="New collection" price="300" nameOfBag="The simple bag" imageAlt="bag3" image={bag_3}/>
            <Product label="New collection" price="150" nameOfBag="The trendy bag" imageAlt="bag4" image={bag_4}/>
        </main>

        <footer>
            <Tile title="The brand">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
            </Tile>
            <Tile image={brand} imageDescription="The brand logo" />
            <Tile image={our_story} imageDescription="The designers" />
            <Tile title="Our story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
            </Tile>
        </footer>
  </>


  )
}

export default App
