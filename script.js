const reservationForm = document.getElementById("reservation-form");
        const restaurantSelection = document.getElementById("restaurant-selection");
        const selectRestaurantButton = document.getElementById("select-restaurant");
        const menuSection = document.getElementById("menu-section");
        const menuForm = document.getElementById("menu-form");
        const summarySection = document.getElementById("summary-section");

        let reservationData = {};

        // Handle reservation submission
        reservationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            reservationData.name = document.getElementById("name").value;
            reservationData.phone = document.getElementById("phone").value;
            reservationData.tablePreference = document.getElementById("table-preference").value;
            reservationData.members = document.getElementById("members").value;
            reservationData.email = document.getElementById("email").value;
            reservationData.date = document.getElementById("date").value;
            reservationData.time = document.getElementById("time").value;

            alert(`Table reserved successfully for ${reservationData.name}!`);

            // Hide reservation and show restaurant selection
            document.getElementById("reservation-section").classList.add("hidden");
            restaurantSelection.classList.remove("hidden");
        });

        // Handle restaurant selection
        selectRestaurantButton.addEventListener("click", function () {
            const selectedRestaurant = document.getElementById("restaurant-list").value;
            if (selectedRestaurant) {
                reservationData.restaurant = selectedRestaurant;
                document.getElementById("selected-restaurant").textContent = selectedRestaurant;
                loadMenu(selectedRestaurant);
                restaurantSelection.classList.add("hidden");
                menuSection.classList.remove("hidden");
            } else {
                alert("Please select a restaurant.");
            }
        });

        // Load menu items with quantity
        function loadMenu(restaurant) {
            const menuItemsContainer = document.getElementById("menu-items");
            menuItemsContainer.innerHTML = "";

            const menuData = {
                "Krigo": [
                { name: "Pizza", price: 199 },
                { name: "Pasta", price: 130 },
                { name: "Lasagna", price: 299 },
                { name: "Burger", price: 299 },
                { name: "Steak", price: 150 },
                { name: "Fries", price: 99 },
                { name: "Salad", price: 79 },
                { name: "Smoothie", price: 170 },
                { name: "Vegan Wrap", price: 130 }
            ],
            "The Vintage": [
               
                { name: "Dum Biryani", price: 150 },
                { name: "Fry Biryani", price: 200 },
                { name: "Lollipop Biryani (3 pc)", price: 250 },
                { name: "Wings Biryani (3 pc)", price: 250 },
                { name: "Joint Biryani (3 pc)", price: 250 },
                { name: "Boneless Biryani (3 pc)", price: 280 },
                { name: "Tandoori Chicken Biryani ", price: 350 },
                { name: "Tandoori Tikka Biryani", price: 300 },
                { name: "Prawns Fry Biryani", price: 280 },
                { name: "Prawns curry Biryani", price: 280 },
                { name: "Mutton curry Biryani", price: 380 },
                { name: "Prawns fry Biryani", price: 380 },
                { name: "Egg Biryani", price: 280 },
                { name: "Kaju Biryani", price: 200 },
                { name: "Paneer Biryani", price: 200 },
                { name: "Veg mixed Biryani", price: 180 }

            ],
            "Spice Paradise": [
            { name: "Chilli Paneer", price: 220 },
                { name: "Paneer 65", price: 200 },
                { name: "Paneer 555", price: 200 },
                { name: "Mushroom 65", price: 200 },
                { name: "Chilli Mushroom", price: 220 },
                { name: "Chicken 65", price: 220 },
                { name: "Chicken 555", price: 220 },
                { name: "Lemon Chicken", price: 200 },
                { name: "Dragon Chicken", price: 280 },
                { name: "Pepper Chicken", price: 220 },
                { name: "Garlic Chicken", price: 200 },
                { name: "Chicken Majestic", price: 250 },
                { name: "Chicken Wings", price: 290 },
                { name: "Chilly prawn", price: 250 },
                { name: "Prawn 65", price: 250 },
                { name: "Pepper prawn", price: 260 },
                { name: "Prawn Manchuria", price: 250 }

            ],
            "Eat Green": [
                { name: "chicken tikka kabab", price:243 },
                { name: "tandoori chicken(half)", price: 243 },
                { name: "tandoori chicken(full)", price: 379 },
                { name: "chicken reshmi kebab", price:243 },
                { name: "chicken garlic kabab", price:243 },
                { name: "butter chicken boneless", price:246 },
                { name: "nizami handi", price:171 },
                { name: "tandoori roti", price:40 },
                { name: "rumali roti", price:40 }
            ],
            "Cinnamon": [
                { name: "chicken biryani", price: 210 },
                { name: "mutton biryani", price:253 },
                { name: "mutton family pack", price:576 },
                { name: "chicken family pack", price:552 },
                { name: "special chicken biryani", price:337 },
                { name: "special mutton biryani", price:351},
                { name: "supreme chicken biryani", price:784 },
                { name: "supreme mutton biryani", price:819 },
                { name: "egg biryani", price:154 },
                { name: "veg. biryani", price:154 },
                { name: "veg. family pack", price:383 },
                { name: "veg. suprema pack", price:574 }
            ],
            "Sangrilla": [
                { name: "cheeseburger", price: 100 },
                { name: "veg burger", price:100 },
                { name: "chowmein", price: 120 },
                { name: "chowmein plan", price: 12 },
                { name: "paneer rice", price: 120 },
                { name: "veg spring roll", price: 90 },
                { name: "momos", price: 100 },
                { name: "fried rice", price: 120 },
                { name: "chilli potato", price: 100 },
                { name: "chicken momos", price: 150 },
                { name: "chicken rice", price: 150 },
                { name: "manchuria", price: 120 },

            ],
            "The Art Kitchen": [
                { name: "black decker(chocolate)", price: 110 },
                { name: "blue dot(black current)", price: 110 },
                { name: "butterscotch(milk shake)", price: 110 },
                { name: "figaro(angir badam)", price: 110 },
                { name: "dry fruit twist(dry fruit)", price: 110 },
                { name: "lichee shake(lichee)", price: 110 },
                { name: "beilgium milk shake(BOC)", price: 120 },
                { name: "custom(your choice)", price: 120 }
            ]

        };

            menuData[restaurant].forEach(item => {
                const div = document.createElement("div");
                div.classList.add("menu-item");
                div.innerHTML = `
                    <input type="checkbox" value="${item.name}" data-price="${item.price}">
                    <label>${item.name} (${item.price})</label>
                    <input type="number" value="1" min="1" class="quantity" data-item="${item.name}">
                `;
                menuItemsContainer.appendChild(div);
            });
        }

        // Handle menu submission
        menuForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const selectedItems = Array.from(document.querySelectorAll("#menu-form input:checked"));
            if (selectedItems.length > 0) {
                reservationData.items = [];
                reservationData.totalPrice = 0;

                selectedItems.forEach(item => {
                    const quantityInput = document.querySelector(`.quantity[data-item="${item.value}"]`);
                    const quantity = parseInt(quantityInput.value);
                    const price = parseFloat(item.dataset.price);
                    reservationData.items.push(`${item.value} x ${quantity}`);
                    reservationData.totalPrice += price * quantity;
                });

                showSummary();
            } else {
                alert("Please select at least one item.");
            }
        });

        // Display summary
        function showSummary() {
            document.getElementById("summary-restaurant").textContent = reservationData.restaurant;
            document.getElementById("summary-name").textContent = reservationData.name;
            document.getElementById("summary-phone").textContent = reservationData.phone;
            document.getElementById("summary-table-preference").textContent = reservationData.tablePreference;
            document.getElementById("summary-members").textContent = reservationData.members;
            document.getElementById("summary-email").textContent = reservationData.email;
            document.getElementById("summary-date").textContent = reservationData.date;
            document.getElementById("summary-time").textContent = reservationData.time;
            document.getElementById("summary-items").textContent = reservationData.items.join(", ");
            document.getElementById("summary-price").textContent = reservationData.totalPrice.toFixed(2);

            menuSection.classList.add("hidden");
            summarySection.classList.remove("hidden");
        }