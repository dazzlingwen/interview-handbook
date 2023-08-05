function getUserInfo(userId) {
    return new Promise((resolve, reject) => {
        // 模拟异步获取用户信息
        setTimeout(() => {
            const users = [
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' },
                { id: 3, name: 'Charlie' }
            ];

            const user = users.find(user => user.id === userId);

            if (user) {
                resolve(user);
            } else {
                reject('User not found');
            }
        }, 1000);
    });
}

getUserInfo(4)
    .then(user => {
        console.log('User:', user);
        return user.name;
    })
    .then(userName => {
        console.log('User name:', userName);
    })
    .catch(error => {
        console.error('Error:', error);
    });
