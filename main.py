class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year
    
    def Info(self):
        print("Car brand ",self.brand, "\nManuf year is ", self.year)

Car1 = Car("Honda", 2024)
Car2 = Car("BMW", 2023)
Car1.Info()
Car2.Info()