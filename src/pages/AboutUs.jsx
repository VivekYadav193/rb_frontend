import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-grid">
        <div className="about-us-section">
          <h2 className="about-us-heading">
            About Our Restaurant Booking Platform
          </h2>
          <p className="about-us-text">
            Welcome to our restaurant booking platform! We aim to simplify the
            process of discovering and booking restaurants. With our platform, you
            can easily find restaurants based on your location, preferred cuisine,
            price range, and user ratings. We provide comprehensive information
            about each restaurant, including menus, prices, seat availability,
            contact details, and available discounts.
          </p>
        </div>
        <div className="about-us-section">
          <p className="about-us-text">
            What sets us apart is our personalized recommendation system, which
            suggests restaurants based on your preferences and past interactions.
            Our seamless booking system allows you to reserve seats hassle-free.
            We are committed to making your dining experiences memorable. Join us
            and explore the culinary delights in your city!
          </p>
        </div>
        <div className="about-us-section">
          <p className="about-us-text">
            We also prioritize the safety and health of our users. All restaurants listed on our platform are required to adhere to strict hygiene standards. Users can also access health and safety information for each restaurant. We believe that everyone should be able to enjoy their meal with peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
