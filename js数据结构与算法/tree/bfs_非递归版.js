const tree = [
    {
        id: 1,
        children: [
            { id: 11 },
            { id: 12 }
        ]
    },
    {
        id: 2,
        children: [
            { id: 21 },
            {
                id: 22,
                children: [
                    { id: 221 }
                ]
            }
        ]
    }
]
const iteration = (tree) => {
    if (!tree) return;
    const queue = [{ children: tree }];
    let res = []
    while (queue.length) {
        let curr = queue.shift();
        res.push(curr);
        if (!curr.children?.length) continue
        for (let child of curr.children) {
            queue.push(child);
        }
    }
    return res
}
iteration(tree)
