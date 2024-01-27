import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
          <div className="flex-1">
              <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
          </div>
          <div className="flex flex-1 flex-col">
        <h1 className='font-palanquin text-4xl font-bold capitalize lg:max-w-lg'>
          Special
          <span className='text-coral-red'> Offer
          </span>
          </h1>
          <br />
        <p className='mt-4 lg:max-w-lg info-text'>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ipsum quaerat commodi maiores alias quibusdam officiis labore excepturi provident aspernatur! 
        </p>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ad! Our dedication to detial and excellence ensures your satisfaction</p>
       <div className="mt-11 flex flex-wrap gap-4">
          <Button label='Shop now' iconURL={arrowRight}/>
          <Button label='Learn More' backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
          </div>
        </div>
    </section>
  )
}

export default SpecialOffer