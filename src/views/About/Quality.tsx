import React from 'react';
import { Button } from 'react-bootstrap';
import Img_Certificate from '@/assets/img/about-certicate.webp';
import Img1 from '@/assets/img/about-brand-msc.webp';
import Img2 from '@/assets/img/about-brand-upcycled-food-association.webp';
import Img3 from '@/assets/img/about-brand-smeta.webp';
import Img4 from '@/assets/img/about-joyful-dog.webp';

const QualityControl: React.FC = () => {
    return  (
        <div className='quality'>
            <div className='quality-control'>
                <div className='context me-3'>
                    <div className='flex-d mb-4 me-4'>
                        <h1 className='bold mb-4'>Quality Control</h1>
                        <p className='f-20'>
                            Loving Pets is an SQF Level 2 Facility. We have been SQF certified since 2014.

                            During production we do inspections on the product every hour. The line production leader performs the inspections, and our QA Manager verifies that the inspections are being done properly. Our QA Manager gives the final release on the product by performing a QC Checklist and Batch Review Checklist.

                            SQF Facilities are proven to have significantly reduced risk in food safety concerns or recalls.

                            It is important that you feel confident in the quality of your products. SQF procedures help limit exposure to potential food safety issues. Good manufacturing practices are a must and a requirement by SQF.
                        </p>
                        <Button
                            variant="danger f-20 capslock bold w-fit-content"
                            type="submit"
                        >
                            Download Certificate
                        </Button>
                    </div>
                    <div className='certificate-img'>
                        <img className='img-certificate' src={Img_Certificate} />
                    </div>
                </div>
                <div className='d-flex mt-4 flex-start'>
                    <img className='w-15 p-4' src={Img1} />
                    <img className='w-15 p-4' src={Img2} />
                    <img className='w-15 p-4' src={Img3} />
                </div>
            
                <div className='joyful-dog'>
                    <img className='w-100' src={Img4} />
                </div>
            </div>
        </div>
    )
}

export default QualityControl;