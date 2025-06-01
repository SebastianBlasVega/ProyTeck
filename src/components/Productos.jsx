import { use } from "react"
import imgSamsumg from '../assets/img/samsumg.webp';
import imgPc from '../assets/img/pc.jpg';
import imgLaptop from '../assets/img/laptop.jpg';

const Productos = () => {
    return(
        <section class="productos">
            <div class="celulares">
                <a href=""><img src={imgSamsumg} alt="" width="400px"/></a>
            </div>
            <div class="computadoras">
                <a href=""><img src={imgPc} alt="" width="400px"/></a>
            </div>
            <div class="laptops">
                <a href=""><img src={imgLaptop} alt="" width="400px"/></a>
            </div>
        </section>
    );
};

export default Productos;