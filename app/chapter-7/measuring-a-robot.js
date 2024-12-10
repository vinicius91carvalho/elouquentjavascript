/**
 * Measuring a robot
 * It’s hard to objectively compare robots by just letting them solve a few scenarios. Maybe one robot just happened to get easier tasks or the kind of tasks that it is good at, whereas the other didn’t.
 * Write a function compareRobots that takes two robots (and their starting memory). It should generate 100 tasks and let both of the robots solve each of these tasks. When done, it should output the average number of steps each robot took per task.
 * For the sake of fairness, make sure you give each task to both robots, rather than generating different tasks per robot.
 */
const { routeRobot, goalOrientedRobot, VillageState, runRobot } = require('./robot');

function compareRobots(robot1, memory1, robot2, memory2) {
    let robots = [{
        name: 'routeRobot',
        robot: robot1,
        memory: memory1,
        turns: []
    }, {
        name: 'goalOrientedRobot',
        robot: robot2,
        memory: memory2,
        turns: []
    }];

    for (let i = 0; i < 100; i++) {
        const randomState = VillageState.random();
        console.log(`### New round parcels`)
        for (const { robot, memory, turns, name } of robots) {
            const turn = runRobot(randomState, robot, memory);
            console.log(`@@@ ${name} turns ${turn} to finish`);
            turns.push(turn);
        }
    }

    robots.map(robot => ({
        avarageSteps: Math.floor(robot.turns.reduce((prev, curr) => prev + curr, 0) / robot.turns.length),
        robotsName: robot.name
    })).forEach(robot => console.log(`$ ${robot.robotsName} took ${robot.avarageSteps} steps`))
}

compareRobots(routeRobot, [], goalOrientedRobot, []);