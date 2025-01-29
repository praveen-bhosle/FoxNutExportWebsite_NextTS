'use client'

import React from 'react'






import { useRouter } from 'next/navigation'






const Page = () => {

    const router = useRouter();

    return (

        <>
            <div className='p-2 flex flex-col gap-8 text-black' >
                <div className='text-4xl font-bold '> Premium Makhana for Local & Global Markets  </div>
                <div>
                    <div className='text-xl font-bold  text-center text-black mb-2 '> Our  Products </div>


                    <div className='flex flex-col gap-4'>
                        <div className='bg-black p-2 rounded-md cursor-pointer' onClick={() => router.replace('/app?option=0')}   >
                            <div className='border-white border-2  rounded-md  text-yellow-500   p-2 bg-[url(/handpickedMakhana.jpeg)] bg-cover bg-center   h-[300px]  flex flex-col justify-between'  >
                                <div className='text-xl font-bold  text-white'>  Handpicked  Makhana </div>
                                <div className='text-xs font-bold text-white'>  <span className='bg-black '> Carefully selected for superior quality, handpicked </span> <br /> <span className='bg-black'>  makhana offers unmatched taste, purity, and </span> <br /> <span className='bg-black'>  freshness, ensuring the best snacking and health </span> <span className='bg-black'>  experience.   </span>  </div>
                            </div>
                        </div>
                        <div className='bg-black p-2 rounded-md cursor-pointer' onClick={() => { router.replace('/app?option=1') }}>
                            <div className='border-white border-2  rounded-md text-white     p-2  bg-[url(/semihandpicked.jpg)] bg-cover bg-center h-[300px]  flex flex-col justify-between '   >
                                <div className='text-xl font-bold'> Semi Handpicked </div>
                                <div className='text-xs font-bold'> <span className='bg-black'>  Partially screened for better quality,  semi- </span> <br />   <span className='bg-black'>  handpicked makhana balances affordability and  </span> <br />  <span className='bg-black'>  refinement, delivering a satisfying snacking </span> <br />  <span className='bg-black'>  option.  </span> </div>
                            </div>
                        </div>
                        <div className='bg-black p-2 rounded-md cursor-pointer' onClick={() => { router.replace('/app?option=2') }} >
                            <div className='border-white border-2  rounded-md  text-white   p-2  bg-[url(/handpicked.jpg)] bg-cover  bg-center  h-[300px] flex flex-col justify-between '>
                                <div className='text-lg font-bold'>  Non Handpicked </div>
                                <div className='text-xs font-bold'>  <span className='bg-black'>  Standard quality makhana processed in bulk , </span> <br />   <span className='bg-black'>  offering an economical option with good taste and </span> <br /> <span className='bg-black'>  nutrition for everyday use. </span> </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='border-[1px] bg-white px-4 py-2 rounded-md'>
                    <div className='font-bold text-lg '>
                        Why Makahana?
                    </div>
                    <div className='text-xs'>
                        <div> <span className='text-s font-bold'>Low in Calories:            </span> <span>Helps in weight management and makes it an ideal guilt-free snack.                    </span> </div>
                        <div> <span className='text-s font-bold'>Rich in Antioxidants:       </span> <span>Fights free radicals, prevents cell damage, and slows down aging.</span> </div>
                        <div> <span className='text-s font-bold'>High Magnesium Content:     </span> <span>Supports heart health, regulates blood pressure, and promotes better nerve function.</span> </div>
                        <div> <span className='text-s font-bold'>Good Source of Protein:     </span> <span>Aids in muscle growth, repair, and overall body strength.</span> </div>
                        <div> <span className='text-s font-bold'>Low Glycemic Index:         </span> <span>Helps manage blood sugar levels, making it suitable for people with diabetes.</span> </div>
                        <div> <span className='text-s font-bold'>High Fiber Content:         </span> <span>Improves digestion, prevents constipation, and promotes a healthy gut.</span> </div>
                        <div> <span className='text-s font-bold'>Rich in Calcium:            </span> <span>Strengthens bones and teeth, supporting better skeletal health.</span> </div>
                        <div> <span className='text-s font-bold'>Gluten-Free:                </span> <span>Suitable for people with gluten intolerance or celiac disease.</span> </div>
                        <div> <span className='text-s font-bold'>Anti-Aging Properties:      </span> <span>Promotes healthy skin and reduces wrinkles by combating aging signs.</span> </div>
                        <div> <span className='text-s font-bold'>Natural Detoxifier:         </span> <span>Cleanses the liver and kidneys, promoting better organ health.</span> </div>
                        <div> <span className='text-s font-bold'>Sleep-Inducing Properties:  </span> <span>Improves sleep quality with its calming effect.</span> </div>
                        <div> <span className='text-s font-bold'>Energy Boosting:            </span> <span>Provides sustained energy without causing sugar spikes.</span> </div>
                        <div> <span className='text-s font-bold'>Anti-Inflammatory:          </span> <span>Helps reduce chronic inflammation and pain.</span> </div>
                        <div> <span className='text-s font-bold'>Supports Hormonal Balance:  </span> <span>Particularly beneficial for women by balancing hormones naturally.</span> </div>
                        <div> <span className='text-s font-bold'>Stress-Relieving Properties:</span> <span>Reduces stress and anxiety with its calming and soothing effect.</span> </div>

                    </div>

                </div>


                <div className='bg-white px-4 py-2 rounded-md border-[1px] text-xs'>
                    <div className='font-bold  text-lg'> Why buy from  us?  </div>
                    <div>
                        <div> <span className='font-bold'> Premium-Quality Makhana:        </span><span>We offer a wide selection of high-quality makhana, available in sizes ranging from 4 mm to over 6.5 mm, catering to various preferences and needs.                     </span></div>
                        <div> <span className='font-bold'> Variety of Textures and Colors: </span><span>Our makhana is available in different textures and vibrant colors, providing a diverse range of options for all customers.</span></div>
                        <div> <span className='font-bold'> Handpicked Selection:           </span><span>Whether you prefer machine-picked, handpicked, or semi-handpicked makhana, each product is carefully selected to ensure the highest level of freshness and quality.</span></div>
                        <div> <span className='font-bold'> Commitment to Organic Practices:</span><span>Our makhana is produced using organic farming methods, ensuring it is grown naturally without the use of harmful chemicals.</span></div>
                        <div> <span className='font-bold'> Ideal Growing Conditions:       </span><span>Grown in the optimal environmental conditions of Bihar, our makhana benefits from the region{`&apos;`}s perfect climate for high-quality production.</span></div>
                        <div> <span className='font-bold'> Certified Buisness:         </span> <span> We are a fully certified and licensed business, ensuring quality and trustworthiness in every aspect of our operations. </span> </div>
                        <div> <span className='font-bold'> Reliable Suppliers:         </span> <span> Our network of trusted suppliers guarantees a consistent supply of premium-quality makhana.</span> </div>
                        <div> <span className='font-bold'> Global Reach:               </span> <span> We are certified to export our products internationally, ensuring seamless delivery across borders.</span> </div>
                        <div> <span className='font-bold'> Strong Network:             </span> <span> With established contacts in the industry, we ensure smooth operations and quick problem-solving at every step.</span> </div>
                        <div> <span className='font-bold'> Quality Assurance:          </span> <span> We adhere to the highest standards of quality, ensuring that every product delivered meets customer expectations.</span> </div>
                        <div> <span className='font-bold'> Customer-Centric Approach:  </span> <span> Our focus is always on providing the best experience to our customers, from order placement to delivery.</span> </div>
                        <div> <span className='font-bold'> Experienced Team:           </span> <span> Our team of professionals brings years of expertise, ensuring efficient management and superior service.</span> </div>
                        <div> <span className='font-bold'> Sustainability Focus:       </span> <span> We  are committed to environmentally friendly practices, ensuring that our operations are sustainable and responsible.</span> </div>
                    </div>
                </div>

                <div className='bg-white px-4 py-2 rounded-md border-[1px]'>
                    <div> <span>Certifications</span> </div>
                    <div>
                        Certificate of Incorporation
                    </div>
                </div>

                <div className='bg-white px-4 py-2 rounded-md border-[1px]'>
                    <div> <span>Testimonails</span> </div>
                    <div>
                        Testimonail..
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page

/*
  <Image src='/handpickedMakhana.jpeg' alt='image' width='100' height='100' />  
  <div className='grid grid-cols-2 gap-2'>
                    <div className='border-black border-2  rounded-md  text-yellow-500   p-2 bg-[url(/handpickedMakhana.jpeg)] bg-cover bg-center'  >
                        <div className='text-lg'>  Handpicked  Makhana </div>
                        <div className='text-xs font-bold'> Carefully selected for superior quality, handpicked makhana offers unmatched taste, purity, and freshness, ensuring the best snacking and health experience. </div>
                    </div>
                    <div className='border-black border-2   rounded-md text-white     p-2  bg-[url(/semihandpicked.jpg)] bg-cover bg-center'>
                        <div className='text-lg'> Semi Handpicked </div>
                        <div className='text-xs font-bold'> Standard quality makhana processed in bulk, offering an economical option with good taste and nutrition for everyday use. </div>
                    </div>
                    <div className='border-black border-2  rounded-md  text-white   p-2  bg-[url(/handpicked.jpg)] bg-cover  bg-center   '>
                        <div className='text-lg'>  Handpicked </div>
                        <div className='text-xs font-bold'> Partially screened for better quality, semi-handpicked makhana balances affordability and refinement, delivering a satisfying snacking option. </div>
                    </div>

                </div>
  
  
  */ 