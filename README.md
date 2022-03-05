# BattleDev-June-2021

Tommy Pasqua in space

Welcome to this new edition of BattleDev ! For one evening, you play Tommy Pasqua , the most famous astronaut.

Tomorrow you will take off for the most ambitious mission in history: you are going on a journey outside our solar system to collect precious resources from exoplanets.

The task is great and could lead to the greatest discoveries of Humanity, but the path is long and perilous.

Are you ready to take up the challenge?
Careful preparation

Take-off is approaching and you have been preparing for this moment for years. Everything has been prepared and rehearsed dozens of times: from boarding the rocket to landing, you could do it all with your eyes closed.

You finish the full rocket checkout for tomorrow and there's only one check left: to make sure you'll have enough propellant (i.e. fuel) for takeoff and travel. You know that your space capsule consumes 5 kg of propellant per astronomical unit traveled.

Write an algorithm to determine the mass of propellant needed for the mission, given the mass needed for takeoff and the distance of the trip.
Data
Entrance

Line 1 : an integer D, representing the mass of propellant required for take-off in kg.

Line 2 : an integer L, representing the total distance of the trip in astronomical units.
Exit

An integer representing the total mass necessary for the trip: it is necessary Dkg for takeoff, then 5kg per astronomical unit for the whole distance Ltravel.
Example

For the entrance :

500
12

Your program should return:

560

In effect : 500 + 12 * 5 = 560
