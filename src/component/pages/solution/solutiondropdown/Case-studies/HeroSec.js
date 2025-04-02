import React , { useState } from 'react';
import Banner from '../../../../../assets/case-studies-2.png'
import ContactModal from '../../../../common/Modal';

const Herosec = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
   <>
     <div
          className="mt-12 md:mt-20 lg:mt-24 flex flex-col items-end justify-center text-center p-5 bg-cover bg-right lg:bg-center h-auto lg:h-[451px]"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <div className="bg-transparent bg-opacity-90 p-5 md:p-5 ">
            <h1 className="text-white text-1xl md:text-[26px] font-semibold">
              Success Stories- <br /> See the Results with the Telenttrix Case Studies
            </h1>
            
            <p className="mt-6 text-white text-lg">To find out how we can help you</p>
            <button onClick={() => setIsModalOpen(true)}
            className="mt-4 bg-white text-blue-900 font-semibold py-2 px-4 rounded-full text-lg shadow-md hover:bg-gray-200">
              CONTACT US TODAY!
            </button>
          </div>
        </div>
        <ContactModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
   </>
  )
}

export default Herosec