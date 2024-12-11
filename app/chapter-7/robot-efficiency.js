/**
 * Can you write a robot that finishes the delivery task faster than goalOrientedRobot? If you observe that robot’s behavior, what obviously stupid things does it do? How could those be improved?
 * If you solved the previous exercise, you might want to use your compareRobots function to verify whether you improved the robot.
 */

const { goalOrientedRobot, findRoute, roadGraph } = require('./robot');
const { compareRobots } = require('./measuring-a-robot');

function customGoalOrientedRobot({ place, parcels }, route) {
    if (route.length == 0) {
        for (let i = 0; i < parcels.length; i++) {
            let parcel = parcels[i];
            let tmpRoute = [];
            if (parcel.place != place) {
                tmpRoute = findRoute(roadGraph, place, parcel.place);
            } else {
                tmpRoute = findRoute(roadGraph, place, parcel.address);
            }
            if (route.length === 0 || tmpRoute.length < route.length) {
                route = tmpRoute;
            }
        }
    }
    return { direction: route[0], memory: route.slice(1) };
}

compareRobots({
    robot1: goalOrientedRobot,
    memory1: [],
    robot1Name: 'goalOrientedRobot'
}, {
    robot2: customGoalOrientedRobot,
    memory2: [],
    robot2Name: 'customGoalOrientedRobot'
});