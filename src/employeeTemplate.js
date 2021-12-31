
const employeeTemplate = (data) => {
  let html = data.map((employees) => {
    // if engineer
    if (employees.git) {
        return `
        <div class=" shadow-2xl h-80 w-72">
            <div class="text-2xl border text-white bg-blue-400 p-4">
                <h2>${employees.name}</h2>
                <h3>${employees.role}</h3>
            </div>
            <div class=" m-4 mt-10 leading-8">
                <p class="border border-gray p-2">Id: ${employees.id}</p>
                <p class="border border-gray p-2">Email: <a href="mailto:${employees.email}" target="_blank">${employees.email}</p></a>
                <p class="border border-gray p-2">GitHub Username: <a href="https://github.com/${employees.git}" target="_blank">${employees.git}</p></a>
            </div>
        </div>
            `
    } else if (employees.uni) {
        // if Intern
        return `
        <div class=" shadow-2xl h-80 w-72">
            <div class="text-2xl border text-white bg-blue-400 p-4">
                <h2>${employees.name}</h2>
                <h3>${employees.role}</h3>
            </div>
            <div class=" m-4 mt-10 leading-8">
                <p class="border border-gray p-2">Id: ${employees.id}</p>
                <p class="border border-gray p-2">Email: <a href="mailto:${employees.email}"target="_blank">${employees.email}</p></a>
                <p class="border border-gray p-2">School: ${employees.uni}</p>
            </div>
        </div>
            `
    } else{
        // else is Manager
        return `
        <div class=" shadow-2xl h-80 w-72">
            <div class="text-2xl border text-white bg-blue-400 p-4">
                <h2>${employees.name}</h2>
                <h3>${employees.role}</h3>
            </div>
            <div class=" m-4 mt-10 leading-8">
                <p class="border border-gray p-2">Id: ${employees.id}</p>
                <p class="border border-gray p-2">Email: <a href="mailto:${employees.email}"target="_blank">${employees.email}</p></a>
                <p class="border border-gray p-2">Office Number: ${employees.officeNum}</p>
            </div>
        </div>
        `
    }
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Roster</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
    <header class="bg-red-500 flex justify-center items-center h-40 w-auto text-5xl text-white">Meet My Team</header>
    <div class="flex p-8 justify-evenly grid-rows-3">
    ${html.join("")}
    </div>
    
    
    </body>
    </html>
        `;
};

module.exports = employeeTemplate;
