// 阻塞
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Hello, World!";
            resolve(data);
        }, 2000);
    });
}

console.log("Before fetchData()");

fetchData()
    .then((result) => {
        console.log("Received data:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

console.log("After fetchData()");

// 调用结果为： Before fetchData() -> After fetchData() -> Received data:


// 非阻塞
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Hello, World!";
            resolve(data);
        }, 2000);
    });
}

async function fetchAndProcessData() {
    console.log("Before fetchData()");

    try {
        const result = await fetchData();
        console.log("Received data:", result);
    } catch (error) {
        console.error("Error:", error);
    }

    console.log("After fetchData()");
}

fetchAndProcessData();

// 调用结果为： Before fetchData() -> Received data: -> After fetchData()
