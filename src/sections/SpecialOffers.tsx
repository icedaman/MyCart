import  offer  from '../assets/images/offer.svg'
import  arrowRight  from '../assets/icons/arrow-right.svg'
import Button from '../components/Button'
import { NavLink} from 'react-router-dom'

const SpecialOffers = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">      
          <span className="text-coral-red "> Special</span> Offer          
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <NavLink to={`/products`}>
            <Button label={"Shop Now"} iconURL={arrowRight} backgroundColor={undefined} borderColor={undefined} textColor={undefined} fullWidth={false} />
          </NavLink>
          <NavLink to={`/products`}>
            <Button label={"Learn More"} iconURL={undefined} backgroundColor={"bg-white"} borderColor={"border-slate-gray"} textColor={"text-slate-gray"} fullWidth={false} />
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers