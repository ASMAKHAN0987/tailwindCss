import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
        <div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col">
            <div className="flex flex-col items-start">
              <a href="/">
                <img src={footerLogo} alt="" width={150} height={46} />
                <p className="text-white-400 mt-6 leading-7 font-montserrat text-base sm:max-w-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam, velit minus sed adipisci quisquam iste voluptates blanditiis porro cum.</p>
                <div className="flex items-center gap-5 mt-8">
                   {socialMedia.map((icons)=>(
                     <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white">
                      <img src={icons.src} alt={icons.alt} width={24} height={24} />
                     </div>

                   ))}
                </div>
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-10">
                    {footerLinks.map((section)=>(
                       <div key={section}>
                          <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}
                          <ul>
                            {section.links.map((link)=>(
                              <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                                 <a href="#">{link.name}</a>
                              </li>
                            ))}
                          </ul>
                          </h4>
                       </div>
                    ))}
                </div>
              </a>
            </div>
        </div>
        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center"> 
               <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                   <img src={copyrightSign} alt="copy right sign" className="rounded-full m-0" width={20} height={20}/>
                   <p>Copyright. All rights reserved</p>
               </div>
                 <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer