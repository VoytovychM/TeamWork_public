//Вывести ко-во не заблокированных юзеров #1--
//предоставить два решения: используя методы countDocuments() и aggregate()//

db.users.countDocuments(
    { is_blocked: { $ne: true }}
)

db.users.aggregate([
    {$match: { is_blocked: { $ne: true }} 
    },
    { $count: 'total_users' }
])