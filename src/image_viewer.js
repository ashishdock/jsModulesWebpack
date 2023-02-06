import '../styles/image_viewer.css';
import small from '../assets/small.jpg';
import big from '../assets/big.jpg';

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');
image.src = big;

document.body.appendChild(bigImage);

// export default () => {

// };
