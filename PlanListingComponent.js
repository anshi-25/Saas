import React from 'react';

const PlanListingComponent = ({ plans, handlePlanSelection }) => {
  return (
    <div>
      <h2>Browse Plans</h2>
      {plans.map((plan) => (
        <div key={plan.id}>
          <h3>{plan.name}</h3>
          <p>{plan.description}</p>
          <p>Price: {plan.price}</p>
          <p>Features:</p>
          <ul>
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button onClick={() => handlePlanSelection(plan)}>Select Plan</button>
        </div>
      ))}
    </div>
  );
};

export default PlanListingComponent;
