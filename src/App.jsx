import vehicles from './data/Vehicles'; 
import Card from './components/Card'; 
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


const vehicleCards = vehicles.map((vehicle) => (
    <Card
        name={vehicle.name}
        description={vehicle.description}
        price={vehicle.price}
        image={vehicle.image}
    />
));


function App() {
    return (
        <div className="app">
            <Navbar/>
            <h2>Lista de Vehículos</h2>
            <div className="card-container">
                {vehicleCards} 
            </div>
            <Footer/>
        </div>
        
    );
}


export default App;