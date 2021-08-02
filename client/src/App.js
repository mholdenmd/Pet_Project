import logo from './logo.svg';
import './App.css';
import './App.css';
import {Router, Link} from '@reach/router'
import Allpets from './components/Allpets';
import CreatePet from './components/CreatePet';
import EditPet from './components/EditPet';
import OnePet from './components/OnePet';


function App() {
	return (
		<div className="App">
		 <h1>Pet Shelter</h1>
		 <h3>These pets are looking for a good home</h3>
		 <Link to = "/pet/new">Add a Pet to the Shelter</Link>
		 <p><Link to = "/">Home</Link></p>

		 <Router>
		 <Allpets path = "/"></Allpets>
		 <CreatePet path = "/pet/new"></CreatePet>
			<EditPet path = "/pet/edit/:petid"></EditPet>
			<OnePet path= "/api/pet/:petid"></OnePet>

		 </Router>
		</div>
	);
}

export default App;
