const cars = [
    {
        id: 1,
        img: "https://i.ebayimg.com/00/s/NDgwWDY0MA==/z/1vcAAOSwQFZbnTdb/$_59.JPG",
        name: "2015 Audi Q3",
        make: "Audi",
        model: "Q3",
        year: 2015
    },
    {
        id: 2,
        img: "https://i.ebayimg.com/00/s/NDgwWDY0MA==/z/IaUAAOSwJiRb0h5s/$_59.JPG",
        name: "2012 Subaru Forester",
        make: "Subaru",
        model: "Forester",
        year: 2012
    },
    {
        id: 3,
        img: "https://i.ebayimg.com/00/s/NjAwWDgwMA==/z/378AAOSwSYpbsxGj/$_59.JPG",
        name: "2015 Ford Escape",
        make: "Ford",
        model: "Escape",
        year: 2015
    },
    {
        id: 4,
        img: "https://i.ebayimg.com/00/s/Mzg3WDgwMA==/z/7q8AAOSw-pNb6LqZ/$_59.JPG",
        name: "2012 BMW X6",
        make: "BMW",
        model: "X6",
        year: 2012
    },
    {
        id: 5,
        img: "https://i.ebayimg.com/00/s/NDAwWDgwMA==/z/T7AAAOSwwKxb6Lk0/$_59.JPG",
        name: "2004 Audi A4",
        make: "Audi",
        model: "A4",
        year: 2004
    },
    {
        id: 6,
        img: "https://i.ebayimg.com/00/s/NjAwWDgwMA==/z/KD0AAOSwfplb6Lgv/$_59.JPG",
        name: "2004 Suzuki Aerio",
        make: "Suzuki",
        model: "Aerio",
        year: 2004
    },
    {
        id: 7,
        img: "https://i.ebayimg.com/00/s/NDUwWDgwMA==/z/O0wAAOSw3T5b6Lk~/$_59.JPG",
        name: "2001 Honda Accord",
        make: "Honda",
        model: "Accord",
        year: 2001
    },
    {
        id: 8,
        img: "https://i.ebayimg.com/00/s/NjgzWDEwMjQ=/z/TfAAAOSw~jxb4WDa/$_59.JPG",
        name: "2015 Acura MDX",
        make: "Acura",
        model: "MDX",
        year: 2015
    },
    {
        id: 9,
        img: "https://i.ebayimg.com/00/s/NTk4WDgwMA==/z/ATwAAOSwVYtbuW1j/$_59.JPG",
        name: "1971 Pontiac Grand Prix",
        make: "Pontiac",
        model: "Grand Prix",
        year: 1971
    },
    {
        id: 10,
        img: "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/VfUAAOSwgPBb53zO/$_59.JPG",
        name: "1963 Pontiac Bonneville",
        make: "Pontiac",
        model: "Bonneville",
        year: 1963
    }
];

const availability = {
    1: 'In Dealership',
    2: 'In Dealership',
    3: 'In Dealership',
    4: 'In Dealership',
    5: 'Unavailable',
    6: 'Out of Stock',
    7: 'Out of Stock',
    8: 'Out of Stock',
    9: 'Out of Stock',
    10: 'Unavailable'
};


export const getCars = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cars)
        }, 500)
    })
};

export const getStatus = id => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(availability[id])
        }, 500)
    })
};