        // document.addEventListener('DOMContentLoaded', () => {
        //         fetch('json/diet_plan.json')
        //             .then(response => response.json())
        //             .then(data => {
        //                 const dietPlansContainer = document.getElementById('diet-plans');
                        
        //                 data.dietPlans.forEach(plan => {
        //                     const planCol = document.createElement('div');
        //                     planCol.className = 'col-lg-4 col-md-6';
    
        //                     const planCard = document.createElement('div');
        //                     planCard.className = 'single_prising text-center';
    
        //                     const headerDiv = document.createElement('div');
        //                     headerDiv.className = 'prising_header';
    
        //                     const planName = document.createElement('h3');
        //                     planName.textContent = plan.name;
        //                     headerDiv.appendChild(planName);
    
        //                     const planPrice = document.createElement('span');
        //                     planPrice.textContent = plan.price;
        //                     headerDiv.appendChild(planPrice);
    
        //                     planCard.appendChild(headerDiv);
    
        //                     const bodyDiv = document.createElement('div');
        //                     bodyDiv.className = 'pricing_body';
    
        //                     const planList = document.createElement('ul');
    
        //                     const minDaysItem = document.createElement('li');
        //                     minDaysItem.textContent = `Minimum Days Required: ${plan.minimumDays}`;
        //                     planList.appendChild(minDaysItem);
    
        //                     const dailyIntakeItem = document.createElement('li');
        //                     dailyIntakeItem.textContent = 'Daily Food Intake:';
        //                     planList.appendChild(dailyIntakeItem);
    
        //                     const breakfastItem = document.createElement('li');
        //                     breakfastItem.className = 'off-color';
        //                     breakfastItem.textContent = `Breakfast: ${plan.dailyIntake.breakfast}`;
        //                     planList.appendChild(breakfastItem);
    
        //                     const lunchItem = document.createElement('li');
        //                     lunchItem.className = 'off-color';
        //                     lunchItem.textContent = `Lunch: ${plan.dailyIntake.lunch}`;
        //                     planList.appendChild(lunchItem);
    
        //                     const guideListItem = document.createElement('li');
        //                     guideListItem.textContent = 'Diet Guide Tutorial List:';
        //                     planList.appendChild(guideListItem);
    
        //                     plan.tutorials.forEach(tutorial => {
        //                         const tutorialItem = document.createElement('li');
        //                         tutorialItem.className = 'off-color';
    
        //                         const tutorialLink = document.createElement('a');
        //                         tutorialLink.href = tutorial.link;
        //                         tutorialLink.target = '_blank';
        //                         tutorialLink.textContent = tutorial.name;
    
        //                         tutorialItem.appendChild(tutorialLink);
        //                         planList.appendChild(tutorialItem);
        //                     });
    
        //                     bodyDiv.appendChild(planList);
        //                     planCard.appendChild(bodyDiv);
    
        //                     const btnDiv = document.createElement('div');
        //                     btnDiv.className = 'pricing_btn';
    
        //                     const buyBtn = document.createElement('a');
        //                     buyBtn.href = '#';
        //                     buyBtn.className = 'boxed-btn3';
        //                     buyBtn.textContent = 'Buy Now';
    
        //                     btnDiv.appendChild(buyBtn);
        //                     planCard.appendChild(btnDiv);
    
        //                     planCol.appendChild(planCard);
        //                     dietPlansContainer.appendChild(planCol);
        //                 });
        //             })
        //             .catch(error => console.error('Error fetching diet plans:', error));
        //     });
