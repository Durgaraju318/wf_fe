import '../homecss/Homepage.css';
import avatarimg from '../homeimages/avatar 2.jpg';
import gfimg from "../homeimages/godfather.png";
import interimg from "../homeimages/interstellar.jpeg";

function HomePage() {
    return (
<div>
   <header id="mainHeader">
    <div class="commonContainer">
        <h1>Weekend Films</h1>
    </div>
   </header>

    <nav id = "mainNavigation" >
    <div class="commonContainer">
        <ul>
            <li><a href="Action">Action</a></li>
            <li><a href="Science Fiction">Science Fiction</a></li>
            <li><a href="Thriller">Thriller</a></li>
            <li><a href="Horror">Horror</a></li>
            <li><a href="Comedy">Comedy</a></li>
        </ul>
    </div> 
    </nav>

   <div>
    <img src={avatarimg} alt="avatarposter"/>
    <img src={gfimg} alt="godfatherposter"/>
    <img src={interimg} alt="interstellarposter"/>
   </div>
   
</div>
    );
}
export default HomePage;
