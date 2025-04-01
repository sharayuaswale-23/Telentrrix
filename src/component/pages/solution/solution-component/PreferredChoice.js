import React, { useState } from "react";
import Img1 from "../../../../assets/s1.png";
import Img2 from "../../../../assets/s2.png";
import Img3 from "../../../../assets/s3.png";
import Img4 from "../../../../assets/s4.png";
import Img5 from "../../../../assets/s5.png";
import ContactModal from "../../../common/Modal";

const PreferredChoice = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  return (
   <>
     <div className="py-10">
      <div className="bg-blue-900 py-6 text-center">
        <h2 className="text-white text-[24px] sm:text-[28px] font-semibold">
          Preferred Choice for Clients
        </h2>
        <div className="w-36 border-t-4 border-[#fba91e] mx-auto mt-2"></div>
      </div>

      <div className="flex justify-center">
        <div className="w-[90%] sm:w-[80%]">
       
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-10 mt-12 mb-12">
        
            <div className="flex items-start space-x-4 max-w-lg">
              <img
                src={Img1}
                alt="CONSULTATIVE PARTNER"
                className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain"
              />
              <div>
                <h3 className="text-md font-semibold text-red-500">
                  CONSULTATIVE PARTNER
                </h3>
                <p className="text-gray-700 text-[14px] sm:text-md font-bold mt-3">
                  ASA Board, WBENC Board, Frequent Speaker at SIA Forums and
                  Conferences, Federal Reserve Small and Medium Sized Advisory
                  Board Member
                </p>
              </div>
            </div>

        
            <div className="flex items-start space-x-4 max-w-lg">
              <img
                src={Img2}
                alt="MATURE OPERATIONS PROCESS CONTROLS"
                className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain"
              />
              <div>
                <h3 className="text-md font-semibold text-teal-500">
                  MATURE OPERATIONS PROCESS CONTROLS
                </h3>
                <p className="text-gray-700 text-[14px] sm:text-md font-bold mt-3">
                  Daily/Weekly Productivity Reporting, MRMs, Bi-weekly Business
                  Review meetings, Monthly Market Review, QBR’s, Recruitment and
                  Sales Training Academy
                </p>
              </div>
            </div>

          
            <div className="flex items-start space-x-4 max-w-lg">
              <img
                src={Img3}
                alt="FINANCIAL STABILITY"
                className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain"
              />
              <div>
                <h3 className="text-md font-semibold text-yellow-500">
                  FINANCIAL STABILITY
                </h3>
                <p className="text-gray-700 text-[14px] sm:text-md font-bold mt-3">
                  Financial strength and stability; scalable, flexible,
                  privately held and willing to invest
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 max-w-lg">
              <img
                src={Img4}
                alt="STATE OF THE ART TECHNOLOGY INFRASTRUCTURE INVESTMENTS"
                className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain"
              />
              <div>
                <h3 className="text-md font-semibold text-purple-500">
                  STATE OF THE ART TECHNOLOGY INFRASTRUCTURE INVESTMENTS
                </h3>
                <p className="text-gray-700 text-[14px] sm:text-md font-bold mt-3">
                  Innovative technology infrastructure and operational backbone
                </p>
              </div>
            </div>

         
            <div className="flex items-start space-x-4 max-w-lg">
              <img
                src={Img5}
                alt="NATIONAL AND GLOBAL GEOGRAPHIC PRESENCE"
                className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain"
              />
              <div>
                <h3 className="text-md font-semibold text-blue-500">
                  NATIONAL AND GLOBAL GEOGRAPHIC PRESENCE
                </h3>
                <p className="text-gray-700 text-[14px] sm:text-md font-bold mt-3">
                  Financial strength and stability; scalable, flexible,
                  privately held and willing to invest
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
            <p className="font-semibold text-md sm:text-lg">
              To find out how we can help you
            </p>
            <button onClick={() => setIsModalOpen(true)}
            className="mt-3 bg-blue-900 text-white px-6 py-2 rounded-full text-[14px] sm:text-[15px] border border-blue-900 font-semibold hover:bg-white hover:text-blue-900 transition">
              CONTACT US TODAY!
            </button>
          </div>
          
          </div>

        </div>
      </div>
    </div>
    <ContactModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
   </>
  );
};

export default PreferredChoice;
