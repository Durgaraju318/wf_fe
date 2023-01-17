import { ImageSliderData } from '../data/ImageSliderData';
import '../homecss/Homepage.css';
import ImageSlider from '../home/ImageSlider';

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
    <br/>
    <div >    
        <ImageSlider slides={ImageSliderData} />
    </div>
   
</div>
    );
}
export default HomePage;
