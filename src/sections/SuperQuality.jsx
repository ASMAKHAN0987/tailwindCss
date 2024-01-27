import Button from "../Components/Button"
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
       <div className="flex flex-1 flex-col">
        <h1 className='font-palanquin text-4xl font-bold capitalize lg:max-w-lg'>
          We Provide You
          <span className='text-coral-red'> Super
          </span>
          <span className='text-coral-red'> Quality
          </span> Shoes
          </h1>
          <br />
        <p className='mt-4 lg:max-w-lg info-text'>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ipsum quaerat commodi maiores alias quibusdam officiis labore excepturi provident aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ad!
        </p>
        <p>Our dedication to detial and excellence ensures your satisfaction</p>
        <div className="mt-11">
        <Button label='View Details'/>
        </div>
       </div>
       <div className="flex flex-1 justify-center items-center">
          <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
       </div>
    </section>
  )
}

export default SuperQuality