db.users.aggregate([
    {
        $match: {
            country: { $nin: ['China', 'USA'] },
            blocked: { $ne: true },
            balance: { $gte: 10, $lte: 1000 }
        }
    },
    { $count: 'total_users' }
])