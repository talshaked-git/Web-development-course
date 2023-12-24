// CHALLENGE: uncomment the code below and see the car stats rendered
import cars from "./practice";
import animals from "./data";

const [honda, tesla] = cars;
const { coloursByPopularity: [hondaTopColour], speedStats: { topSpeed: hondaTopSpeed } } = honda;
const { coloursByPopularity: [teslaTopColour], speedStats: { topSpeed: teslaTopSpeed } } = tesla;


const [cat, dog] = animals;
const {name: catName, sound: catSound} = cat;
const {name: dogName, sound: dogSound} = dog

function App9() {
    return (
        <div>
            <table>
                <tr>
                    <th>Brand</th>
                    <th>Top Speed</th>
                    <th>Top Color</th>
                </tr>
                <tr>
                    <td>{tesla.model}</td>
                    <td>{teslaTopSpeed}</td>
                    <td>{teslaTopColour}</td>
                </tr>
                <tr>
                    <td>{honda.model}</td>
                    <td>{hondaTopSpeed}</td>
                    <td>{hondaTopColour}</td>
                </tr>
            </table>

            <br />
            <br />
            <br />

            <table>
                <tr>
                    <th>Animal</th>
                    <th>Sound</th>
                </tr>
                <tr>
                    <td>{cat.name}</td>
                    <td>{cat.sound}</td>
                </tr>
                <tr>
                    <td>{dog.name}</td>
                    <td>{dog.sound}</td>
                </tr>
            </table>
        </div>
    )
}

export default App9;