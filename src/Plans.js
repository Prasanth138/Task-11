import React from "react";
import "./Plans.css";
import Plan from "./Plan";
export default function Plans(){
    const plans=[
        {
            name: 'Free',
            price : 0,
            features : [
                {
                    name: 'Single User',
                    available: true
                },
                {
                    name: '5GB Storage',
                    available: true
                },
                {
                    name: 'Unlimited Public Projects',
                    available: true
                },
                {
                    name: 'Community Access',
                    available: true
                },
                {
                    name: 'Unlimited Private Projects',
                    available: false
                },
                {
                    name: 'Dedicated Phone Support',
                    available: false
                },
                {
                    name: 'Free Subdomain',
                    available: false
                },
                {
                    name: 'Monthly Status Reports',
                    available: false
                },
                
            ],
        },
        {
            name: 'Plus',
            price : 9,
            features : [
                {
                    name: '5 User',
                    available: true
                },
                {
                    name: '50GB Storage',
                    available: true
                },
                {
                    name: 'Unlimited Public Projects',
                    available: true
                },
                {
                    name: 'Community Access',
                    available: true
                },
                {
                    name: 'Unlimited Private Projects',
                    available: true
                },
                {
                    name: 'Dedicated Phone Support',
                    available: true
                },
                {
                    name: 'Free Subdomain',
                    available: true
                },
                {
                    name: 'Monthly Status Reports',
                    available: false
                },
                
            ],
        },
        {
            name: 'PRO',
            price : 49,
            features : [
                {
                    name: 'Unlimited Users',
                    available: true
                },
                {
                    name: '150GB Storage',
                    available: true
                },
                {
                    name: 'Unlimited Public Projects',
                    available: true
                },
                {
                    name: 'Community Access',
                    available: true
                },
                {
                    name: 'Unlimited Private Projects',
                    available: true
                },
                {
                    name: 'Dedicated Phone Support',
                    available: true
                },
                {
                    name: 'Free Subdomain',
                    available: true
                },
                {
                    name: 'Monthly Status Reports',
                    available: true
                },
                
            ],
        }
    ];
    return(
        <section className="pricing py-5">
  <div className="container">
    <div className="row">
        {
            plans.map((plan, index)=>{
                return <Plan key={index} name={plan.name} price={plan.price} features={plan.features} />
            })
        }
      
    </div>
  </div>
</section>
    );
}