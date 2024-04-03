import React, { useEffect, useState } from 'react';
import './privacy-spinner.css'
import Footer from '../Footer';


const PrivacyPolicy = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

const TermsAndConditions = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

const CancellationAndRefundPolicy = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

const ContactUs = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

const CancellationRefundPolicyFunction = () => {

    const [responseData1, setresponseData1] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
 

    useEffect(() => {
        fetchImages();
    
    }, []);
      
    


  const fetchImages = async () => {
    try {
        const urls = [];
        const url = 'https://servixoindia.com/servixoindia/api/get-privacy-policy';
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjlkMDNiMDFkYmJiODI0MDQ5MjE0ZjQwNGFhOTk0OWM2ZGY2ODhlNjU1NGE3MmRkZmZmYTVkOTE0ODY1ZTZhNjA1NTQ1MzAzZThlOTJmZDAiLCJpYXQiOjE3MTA3MzY5MjUuNzY3ODUzLCJuYmYiOjE3MTA3MzY5MjUuNzY3ODU2LCJleHAiOjE3NDIyNzI5MjUuNzYzNzQ0LCJzdWIiOiIxNSIsInNjb3BlcyI6W119.Nvhqx5jq99VQyiXbpbUa1kEPYmnfoxwgjepWQBXkwUDSUAn15tr7XMXtvP1gUZA331j9gcHY3daZoi30MGEil62CGD4HjokWVPqVVv0OK_KQY-DBM1XO5HYACQIO4zV2-vgiFJhkwEOlj12J8G6YJhqgbxevGWsgPKe3SV-QXiGBnlaHZDtx7lI5YZxYsH7FHbA_NryH-ZP45JAyaWBFL5eJL3xwrvdt1U8EmQwisPFejoyFW5LS2_FoMUw6GtpMS6hIBuGENBMLxL6WZWbTXAaBdgu44xwNOYEa4XdOec9eJyAAWN9SSbQas-B5tFHVqJvWgiGMF6r-eQn_jh2JKdY0NeF5g7zD9O5Np9Dj3igBh2okTvpzy7nbJFECTwuPjacpQzTHAPV3OBp9Ebu__dXEanXE9IoPoNzDcgls9MrrfJsoBh44V5Fd6UhcZmZj05u-U0Jw-VV_0wLo5dXM9FwwIMPVpcqA7SCakJMDmwTtFaApgM3ZMlR2dMjc67C1i0u-IJMVm_HAzPktxCuA6T1f_g_vfawHdtnjbNEEXNyyQWs75oMveDowSTVIbN6ZiyBitFAbJd9kT2KIfs1Eo-25NKNFVQO0T--WOng_ZGepvDye9JxzzOyvgBCGrizqDRVVZFBRag44LbNaZzdG_g-7-isdyblPBZ6HuUSSYDk';
        const requestData = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(url, requestData);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        setresponseData1(data)

        console.log(data)

        setImagesLoaded(true)
        //setImagesLoaded(true)
        ///setData(data);
        return data;

        // data.data.SliderImages.forEach((item) => {
        //     urls.push(`https://servixoindia.com/servixoindia/uploads/slider-images/${item.images}`);
        // });
        //setSlideImages(urls);
       // setImagesLoaded(true); // Mark images as loaded
    } catch (error) {
        console.error('Error fetching image URLs:', error);
    }
};



  return (
    <div>
    {
 imagesLoaded ? (<div>

              {/* <PrivacyPolicy html={responseData1.data.privacy_policy} /> */}


            {/* <TermsAndConditions html={responseData1.data.terms_and_condition} />  */}
             <CancellationAndRefundPolicy html={responseData1.data.cancellation_and_refund} />  

            {/* <ContactUs html={responseData1.data.contact_us}/> */}
            <Footer></Footer>
 
 </div>) : (<div>
 

 <div class="spinner"></div> 
 </div>)

    }
    
 
            
    </div>
  );
};

export default CancellationRefundPolicyFunction;
