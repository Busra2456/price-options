import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

      const priceOptions =

      [
            {
              "id": 1,
              "name": "Basic Plan",
              "price": 19.99,
              "features": [
                "Access to gym during off-peak hours",
                "Locker room and shower access",
                "One free personal training session",
                "Cardio and strength equipment access",
                "Free fitness assessment (once a year)",
                "Access to mobile app with basic workout plans"
              ]
            },
            {
              "id": 2,
              "name": "Standard Plan",
              "price": 39.99,
              "features": [
                "Unlimited gym access",
                "Locker room and shower access",
                "Two free personal training sessions",
                "Group fitness classes (standard)",
                "Access to cardio, strength, and flexibility equipment",
                "Free fitness assessment (twice a year)",
                "Access to mobile app with personalized workout plans",
                "Discount on supplements and merchandise (10%)"
              ]
            },
            {
              "id": 3,
              "name": "Premium Plan",
              "price": 59.99,
              "features": [
                "24/7 gym access",
                "Locker room, shower, and sauna access",
                "Four free personal training sessions",
                "Group fitness classes (standard and advanced)",
                "Access to cardio, strength, flexibility, and functional training equipment",
                "Free fitness assessments (quarterly)",
                "Access to mobile app with premium workout plans and tracking",
                "Access to pool and spa",
                "Discount on supplements, merchandise, and spa services (15%)",
                "Priority booking for fitness classes"
              ]
            },
            {
              "id": 4,
              "name": "VIP Plan",
              "price": 99.99,
              "features": [
                "24/7 gym access with priority service",
                "Private locker and towel service",
                "Unlimited personal training sessions",
                "Exclusive group fitness classes (VIP-only)",
                "Access to cardio, strength, flexibility, functional, and specialized training equipment",
                "Monthly fitness assessments with in-depth reports",
                "Access to mobile app with VIP workout plans, tracking, and live coaching",
                "Access to pool, spa, sauna, and steam room",
                "Free nutrition consultation and custom meal planning",
                "Unlimited access to virtual training sessions",
                "Discount on supplements, merchandise, spa services, and meal plans (20%)",
                "Access to VIP lounge, refreshments, and private relaxation zones",
                "Priority booking for all services and events",
                "Free entry to all gym-hosted events and competitions"
              ]
            }
          ]
          
      return (
            <div className="m-12" >
                 <h2 className="text-5xl" >Best Prices in the town</h2> 
                <div className="grid md:grid-cols-3 gap-6" > {
                  priceOptions.map(option=> <PriceOption key={option.id} option={option} ></PriceOption>)
                 }</div>
            </div>
      );
};

export default PriceOptions;