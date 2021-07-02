'use strict';
const workingHours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM']

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let Seattle = {
    locationName: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,
    
    customersEachHour: [],
    cookiesEachHous: [],
    total: 0,
    clacCustomersEachHour: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));


        }
    },
    calcCookiesEachHous: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.cookiesEachHous.push(Math.floor(this.avgCookies * this.customersEachHour[i]));
            this.total += this.cookiesEachHous[i];
        }
    },
    render: function () {

        let parent = document.getElementById('result');


        let shopName = document.createElement('h3');

        parent.appendChild(shopName);

        shopName.textContent = this.locationName;

        let unOrderedList = document.createElement('ul');

        parent.appendChild(unOrderedList);

        for (let i = 0; i < workingHours.length; i++) {

            let listItem = document.createElement('li');

            unOrderedList.appendChild(listItem);

            listItem.textContent = `${workingHours[i]}: ${this.cookiesEachHous[i]} cookies`



        }

        let totalItem = document.createElement('li');
        unOrderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`;

    }
}
Seattle.clacCustomersEachHour();
Seattle.calcCookiesEachHous();
Seattle.render();




let Tokyo = {
    locationName: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookies: 1.2,
    
    customersEachHour: [],
    cookiesEachHous: [],
    total: 0,
    clacCustomersEachHour: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));


        }
    },
    calcCookiesEachHous: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.cookiesEachHous.push(Math.floor(this.avgCookies * this.customersEachHour[i]));
            this.total += this.cookiesEachHous[i];
        }
    },
    render: function () {

        let parent = document.getElementById('result');


        let shopName = document.createElement('h3');

        parent.appendChild(shopName);

        shopName.textContent = this.locationName;

        let unOrderedList = document.createElement('ul');

        parent.appendChild(unOrderedList);

        for (let i = 0; i < workingHours.length; i++) {

            let listItem = document.createElement('li');

            unOrderedList.appendChild(listItem);

            listItem.textContent = `${workingHours[i]}: ${this.cookiesEachHous[i]} cookies`



        }

        let totalItem = document.createElement('li');
        unOrderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`;

    }
}
Tokyo.clacCustomersEachHour();
Tokyo.calcCookiesEachHous();
Tokyo.render();

let Dubai = {
    locationName: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    avgCookies: 3.7,
    
    customersEachHour: [],
    cookiesEachHous: [],
    total: 0,
    clacCustomersEachHour: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));


        }
    },
    calcCookiesEachHous: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.cookiesEachHous.push(Math.floor(this.avgCookies * this.customersEachHour[i]));
            this.total += this.cookiesEachHous[i];
        }
    },
    render: function () {

        let parent = document.getElementById('result');


        let shopName = document.createElement('h3');

        parent.appendChild(shopName);

        shopName.textContent = this.locationName;

        let unOrderedList = document.createElement('ul');

        parent.appendChild(unOrderedList);

        for (let i = 0; i < workingHours.length; i++) {

            let listItem = document.createElement('li');

            unOrderedList.appendChild(listItem);

            listItem.textContent = `${workingHours[i]}: ${this.cookiesEachHous[i]} cookies`



        }

        let totalItem = document.createElement('li');
        unOrderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`;

    }
}
Dubai.clacCustomersEachHour();
Dubai.calcCookiesEachHous();
Dubai.render();

let Paris = {
    locationName: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookies: 2.3,
    
    customersEachHour: [],
    cookiesEachHous: [],
    total: 0,
    clacCustomersEachHour: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));


        }
    },
    calcCookiesEachHous: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.cookiesEachHous.push(Math.floor(this.avgCookies * this.customersEachHour[i]));
            this.total += this.cookiesEachHous[i];
        }
    },
    render: function () {

        let parent = document.getElementById('result');


        let shopName = document.createElement('h3');

        parent.appendChild(shopName);

        shopName.textContent = this.locationName;

        let unOrderedList = document.createElement('ul');

        parent.appendChild(unOrderedList);

        for (let i = 0; i < workingHours.length; i++) {

            let listItem = document.createElement('li');

            unOrderedList.appendChild(listItem);

            listItem.textContent = `${workingHours[i]}: ${this.cookiesEachHous[i]} cookies`



        }

        let totalItem = document.createElement('li');
        unOrderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`;

    }
}
Paris.clacCustomersEachHour();
Paris.calcCookiesEachHous();
Paris.render();

let Lima = {
    locationName: 'Lima',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookies: 4.6,
    
    customersEachHour: [],
    cookiesEachHous: [],
    total: 0,
    clacCustomersEachHour: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));


        }
    },
    calcCookiesEachHous: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.cookiesEachHous.push(Math.floor(this.avgCookies * this.customersEachHour[i]));
            this.total += this.cookiesEachHous[i];
        }
    },
    render: function () {

        let parent = document.getElementById('result');


        let shopName = document.createElement('h3');

        parent.appendChild(shopName);

        shopName.textContent = this.locationName;

        let unOrderedList = document.createElement('ul');

        parent.appendChild(unOrderedList);

        for (let i = 0; i < workingHours.length; i++) {

            let listItem = document.createElement('li');

            unOrderedList.appendChild(listItem);

            listItem.textContent = `${workingHours[i]}: ${this.cookiesEachHous[i]} cookies`



        }

        let totalItem = document.createElement('li');
        unOrderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`;

    }
}
Lima.clacCustomersEachHour();
Lima.calcCookiesEachHous();
Lima.render();